// Caravan mini-app: static hosting + Telegram bot (long polling). Env: BOT_TOKEN, PORT, RAILWAY_PUBLIC_DOMAIN or WEBAPP_URL.
const http = require("http"), fs = require("fs"), path = require("path");
const PORT = process.env.PORT || 3000;
const TOKEN_NAMES = ["BOT_TOKEN", "TELEGRAM_BOT_TOKEN", "TELEGRAM_TOKEN", "TG_TOKEN", "TG_BOT_TOKEN", "TOKEN"];
const tokenFrom = TOKEN_NAMES.find(n => (process.env[n] || "").trim()) ||
  Object.keys(process.env).find(n => /^\s*\d{6,}:[\w-]{30,}\s*$/.test(process.env[n] || ""));
const TOKEN = (tokenFrom ? process.env[tokenFrom] : "").trim().replace(/^["']|["']$/g, "").replace(/^bot/i, "");
const BASE = (process.env.WEBAPP_URL || (process.env.RAILWAY_PUBLIC_DOMAIN ? "https://" + process.env.RAILWAY_PUBLIC_DOMAIN : "https://caravan-tg-bot-production.up.railway.app")).replace(/\/$/, "");
const ROOT = path.join(__dirname, "public");
const STATE = { tokenSet: !!TOKEN, tokenFrom: tokenFrom || null, envNames: Object.keys(process.env).filter(n => !/^(RAILWAY_|NIXPACKS|npm_|NODE_|PATH$|HOME$|HOSTNAME$|PWD$|SHLVL$|_$|LANG|TERM|YARN|COREPACK|PORT$)/.test(n)).sort(), tokenLooksValid: /^\d+:[\w-]{30,}$/.test(TOKEN), base: BASE, node: process.version, bot: "not started", lastError: null, updates: 0, startedAt: new Date().toISOString() };
const TYPES = { ".html": "text/html; charset=utf-8", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png", ".woff2": "font/woff2", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".mp4": "video/mp4" };

http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p === "/game") { res.writeHead(301, { Location: "/game/" + (new URL(req.url, "http://x").search) }); return res.end(); }
  if (p === "" || p.endsWith("/")) p += "index.html";
  if (p === "/health") { res.writeHead(200); return res.end("ok"); }
  if (p === "/tg/demos" && req.method === "POST") return demosHook(req, res);
  if (p === "/status") { res.writeHead(200, { "Content-Type": "application/json" }); return res.end(JSON.stringify(STATE, null, 2)); }
  const file = path.normalize(path.join(ROOT, p));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  const ext0 = path.extname(file);
  if (ext0 === ".mp4") {
    return fs.stat(file, (err, stt) => {
      if (err) { res.writeHead(404); return res.end("not found"); }
      const range = req.headers.range, size = stt.size;
      if (range) {
        const [a, b] = range.replace(/bytes=/, "").split("-");
        const start = parseInt(a, 10) || 0, end = b ? Math.min(parseInt(b, 10), size - 1) : size - 1;
        res.writeHead(206, { "Content-Type": "video/mp4", "Content-Range": `bytes ${start}-${end}/${size}`, "Accept-Ranges": "bytes", "Content-Length": end - start + 1, "Cache-Control": "public, max-age=86400" });
        return fs.createReadStream(file, { start, end }).pipe(res);
      }
      res.writeHead(200, { "Content-Type": "video/mp4", "Content-Length": size, "Accept-Ranges": "bytes", "Cache-Control": "public, max-age=86400" });
      fs.createReadStream(file).pipe(res);
    });
  }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404); return res.end("not found"); }
    const ext = path.extname(file);
    res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream", "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=86400" });
    res.end(buf);
  });
}).listen(PORT, () => console.log("web on", PORT, "base", BASE || "(no public url yet)"));

if (!TOKEN) { console.log("BOT_TOKEN not set: bot is off, only the web page runs"); STATE.bot = "off: BOT_TOKEN not set"; }
else if (!BASE) { console.log("No public URL (RAILWAY_PUBLIC_DOMAIN / WEBAPP_URL): bot is off"); }
else startBot().catch(e => { STATE.bot = "crashed"; STATE.lastError = e.message; console.log("bot crash", e); });

async function api(method, body) {
  const r = await fetch(`https://api.telegram.org/bot${TOKEN}/${method}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body || {}) });
  const j = await r.json();
  if (!j.ok) { console.log(method, "error:", j.description); STATE.lastError = method + ": " + j.description; }
  return j;
}
const KB = () => ({ inline_keyboard: [
  [{ text: "Концепт 1 · Плитки-коробки", web_app: { url: BASE + "/?c=tiles" } }],
  [{ text: "Концепт 2 · Чистый лендинг", web_app: { url: BASE + "/?c=land" } }],
] });
const TEXT = "Новогодний караван Coca-Cola 🚚\n\nДва концепта мини-приложения для бота Coca-Cola Dunyosi. Нажмите на концепт, чтобы открыть его.";

async function startBot() {
  const me = await api("getMe");
  console.log("bot check:", me.ok ? "@" + me.result.username : "token rejected by Telegram");
  STATE.bot = me.ok ? "@" + me.result.username : "token rejected";
  if (!me.ok) return;
  await api("deleteWebhook", { drop_pending_updates: false });
  await api("setMyCommands", { commands: [{ command: "start", description: "Открыть концепты" }] });
  await api("setChatMenuButton", { menu_button: { type: "web_app", text: "Караван", web_app: { url: BASE + "/" } } });
  await api("setMyDescription", { description: "Новогодний караван Coca-Cola: два концепта мини-приложения. Нажмите «Старт»." });
  await api("setMyShortDescription", { short_description: "Концепты мини-приложения «Караван Coca-Cola»" });
  console.log("bot started"); STATE.bot += " · polling";
  let offset = 0;
  for (;;) {
    try {
      const j = await api("getUpdates", { offset, timeout: 30, allowed_updates: ["message"] });
      for (const u of j.result || []) {
        offset = u.update_id + 1; STATE.updates++;
        const m = u.message; if (!m || !m.chat) continue;
        const r = await api("sendPhoto", { chat_id: m.chat.id, photo: BASE + "/img/truck-hero.jpg?v=truck2", caption: TEXT, reply_markup: KB() });
        if (!r.ok) await api("sendMessage", { chat_id: m.chat.id, text: TEXT, reply_markup: KB() });
      }
    } catch (e) { console.log("poll error", e.message); STATE.lastError = "poll: " + e.message; await new Promise(r => setTimeout(r, 3000)); }
  }
}

// ---------- второй бот «Coca-Cola Demos» (@ccd_demos_bot): вебхук, токен на сервере не нужен ----------
// Telegram присылает апдейт сюда, ответ уходит прямо в ответе на вебхук (method в JSON).
const DEMOS_SECRET = "ccd-demos-7f3a91c2";
const DEMOS_TEXT = "Coca-Cola Demos\n\nДемо мини-приложений для клиента. Нажмите на кнопку, чтобы открыть.";
const DEMOS_KB = () => ({ inline_keyboard: [
  [{ text: "Караван · концепт", web_app: { url: BASE + "/?c=tiles" } }],
  [{ text: "Мини-игра · концепт", web_app: { url: BASE + "/game/?demo=1" } }],
] });
function demosHook(req, res) {
  if (req.headers["x-telegram-bot-api-secret-token"] !== DEMOS_SECRET) { res.writeHead(403); return res.end(); }
  let body = "";
  req.on("data", c => { body += c; if (body.length > 1e6) req.destroy(); });
  req.on("end", () => {
    let u = {}; try { u = JSON.parse(body); } catch (e) {}
    const m = u.message; STATE.demosUpdates = (STATE.demosUpdates || 0) + 1;
    res.writeHead(200, { "Content-Type": "application/json" });
    if (!m || !m.chat) return res.end("{}");
    res.end(JSON.stringify({ method: "sendPhoto", chat_id: m.chat.id, photo: BASE + "/img/demos-cover.jpg?v=truck2", caption: DEMOS_TEXT, reply_markup: DEMOS_KB() }));
  });
}
