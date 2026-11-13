// Jetour Cola Rush · Bayram — все тексты игры, RU и UZ.
// Правим тексты только здесь. {name}, {city}, {n} и т. п. — подстановки, их не переводим и не удаляем.
// Обращение к игроку везде на «Вы» (RU) и на «siz» (UZ).
window.JCR_TEXTS = {
  ru: {
    // кнопки и заголовки
    'btn.go': 'Поехали', 'btn.map': 'Карта', 'btn.duel': 'Дуэль', 'btn.top': 'Рейтинг', 'btn.howto': 'Как играть', 'btn.rules': 'Правила', 'btn.menu': 'Меню',
    'btn.again': 'Ещё раз', 'btn.againCity': 'Ещё раз: {city}', 'btn.challenge': 'Вызвать друга', 'btn.topWeek': 'Рейтинг недели',
    'btn.ride': 'Ехать', 'btn.rideTo': 'Ехать {to}', 'btn.rideFree': 'Заезд: {city}', 'btn.locked': 'Закрыто',
    'btn.ach': 'Достижения', 'btn.close': 'Закрыть', 'btn.later': 'Позже', 'btn.cancel': 'Отмена', 'btn.continue': 'Играть дальше',
    'btn.refuel': 'Заправиться', 'btn.fuelOne': 'Заправить', 'btn.fuelFull': 'Полный бак',
    'start.hint': 'Свайп или тап по полосе',
    'over.brand': 'Финиш',
    'map.title': 'Путешествие по Узбекистану', 'map.overview': 'Обзор', 'map.prev': 'Предыдущий город', 'map.next': 'Следующий город',
    'lb.title': 'Рейтинг недели',

    // экран правил
    'rules.title': 'Как играть',
    'rules.1t': 'Собирайте крышки', 'rules.1d': 'Крышка +50 очков, бутылка +120',
    'rules.2t': 'Турбо', 'rules.2d': '12 крышек — быстро жмите на экран',
    'rules.3t': 'Объезжайте препятствия', 'rules.3d': 'Свайп или тап по полосе. Жизней: 3',
    'rules.4t': 'Топливо и плов', 'rules.4d': 'Заезд — 1 топливо, плов — +1',
    'rules.5t': 'Путешествие', 'rules.5d': 'Копите очки и открывайте 14 городов',
    'rules.go': 'Понятно, поехали!',

    // заезд
    'game.plov': 'Плов! +1 топливо', 'game.tap': 'ЖМИТЕ!', 'game.ready': 'НА СТАРТ', 'game.go': 'ВПЕРЁД!',

    // достижения
    'ach.city0': 'Сыграйте первый заезд', 'ach.city': 'Откройте город {city}',
    'ach.turbo.t': 'Первое турбо', 'ach.turbo.d': 'Включите турбо',
    'ach.caps.t': 'Сто крышек', 'ach.caps.d': 'Соберите 100 крышек за один заезд',
    'ach.score.t': '10 000 очков', 'ach.score.d': 'Наберите 10 000 очков за один заезд',
    'ach.win.t': 'Победитель', 'ach.win.d': 'Выиграйте вызов друга',
    'ach.half.t': 'Полпути', 'ach.half.d': 'Откройте 8 городов',
    'ach.journey.t': 'Чемпион Узбекистана', 'ach.journey.d': 'Пройдите всё путешествие',
    'ach.count': 'Открыто {n} из {total}',

    // рейтинг
    'lb.loading': 'Загрузка…', 'lb.empty': 'Пока никого. Станьте первым!', 'lb.me': 'Ваше место: {rank} · {score} очков',
    'lb.play': 'Сыграйте, чтобы попасть в рейтинг', 'lb.error': 'Не удалось загрузить рейтинг',

    // вызов другу (по ссылке, на результат)
    'ch.beaten': 'Этот вызов уже побит', 'ch.beatenBy': 'Этот вызов уже побил {name}',
    'ch.self': 'Это ваш вызов. Отправьте ссылку другу!', 'ch.from': '{name} бросает вам вызов: {score} очков. Сможете больше?',
    'ch.share': 'Бросаю вызов в Jetour Cola Rush! Мой результат — {score}. Кто больше?',

    // дуэль (вживую)
    'duel.title': 'Дуэль 1 на 1', 'duel.friend': 'Позвать друга', 'duel.queue': 'Найти соперника', 'duel.invite': 'Отправить ссылку', 'duel.more': 'Подождать ещё',
    'duel.accept': 'Принять дуэль', 'duel.opp': 'Соперник', 'duel.ownOver': 'Это ваша дуэль, она уже закончилась.',
    'duel.callsNow': '{name} зовёт вас на дуэль прямо сейчас!', 'duel.yours': 'Ваша дуэль с {name} уже идёт без вас.',
    'duel.busy': 'В дуэли {name} уже есть соперник.', 'duel.over': 'Дуэль {name} уже закончилась.',
    'lobby.chooseT': 'Как будем играть?', 'lobby.chooseS': 'Позовите друга по ссылке или найдите случайного соперника.',
    'lobby.connecting': 'Подключаемся…', 'lobby.found': 'Соперник найден: {name}', 'lobby.opp': 'Соперник: {name}', 'lobby.ready': 'Вы оба на месте. Старт через секунду…',
    'lobby.searchT': 'Ищем соперника', 'lobby.searchS': 'Отсчёт начнётся, как только кто-то ещё нажмёт «Найти соперника».',
    'lobby.waitT': 'Ждём соперника', 'lobby.waitFriend': 'Отправьте другу ссылку. Отсчёт начнётся, как только он её откроет.', 'lobby.waitHost': 'Ждём, когда создатель дуэли вернётся…',
    'lobby.timerSearch': 'Поиск: {time}', 'lobby.timerWait': 'Ожидание: {time}',
    'lobby.nobody': 'Пока никого нет. Подождите ещё или позовите друга.', 'lobby.friendLate': 'Соперник пока не пришёл. Ссылка ещё действует.',
    'duel.createFail': 'Не удалось создать дуэль. Попробуйте ещё раз', 'duel.oppLeft': 'Соперник потерял связь', 'duel.oppBack': 'Соперник снова на связи',
    'duel.oppNoFuel': 'У соперника закончилось топливо', 'duel.oppFail': 'Соперник не смог начать', 'duel.timeout': 'Никто не пришёл. Дуэль закрыта',
    'duel.closed': 'Дуэль закрыта', 'duel.lost': 'Связь с дуэлью потеряна', 'duel.none': 'Такой дуэли уже нет', 'duel.full': 'В этой дуэли уже есть соперник',
    'duel.ended': 'Дуэль уже закончилась', 'duel.goneOn': 'Дуэль уже идёт без вас', 'duel.cancelled': 'Дуэль отменена',
    'duel.vs': 'Дуэль: {name}', 'duel.vsAnon': 'Дуэль с соперником',
    'duel.share': 'Дуэль в Jetour Cola Rush! Жду на старте 🏁',
    'res.draw': 'Ничья с {name}: {a} : {b}', 'res.win': 'Вы обыграли {name}! {a} : {b}', 'res.lose': '{name} быстрее: {a} : {b}', 'res.dnf': '(соперник не доехал)',
    'res.oppFin': '{name} на финише: {score}. Ждём итог…', 'res.oppLost': '{name}: связь потеряна… ждём', 'res.oppDrive': '{name} ещё в пути: {score} очков',
    'hud.m': '{n} м', 'hud.fin': 'финиш {score}', 'hud.offline': 'нет связи', 'hud.oppAhead': 'соперник впереди на {n} м', 'hud.youAhead': 'вы впереди на {n} м', 'hud.even': 'колесо в колесо',

    // ошибки
    'err.auth': 'Не удалось войти через Telegram. Откройте игру из бота', 'err.net': 'Ошибка связи', 'err.serverLost': 'Связь с сервером потеряна',
    'err.noServer': 'Нет связи с сервером', 'err.busy': 'Попробуйте ещё раз', 'err.retry': 'Нет связи с сервером. Попробуйте ещё раз',

    // топливо и танга
    'eco.next': '+1 через {time}', 'fuel.title': 'Заправка', 'fuel.empty': 'Бак пуст', 'fuel.per': 'Каждый заезд тратит 1 топливо.',
    'fuel.next': 'Следующее бесплатное — через <b>{time}</b>.', 'fuel.isFull': 'Бак полный.', 'fuel.tanga': '{n} танга',
    'fuel.buyOne': 'Заправить +1 · {n} танга', 'fuel.buyFull': 'Полный бак · {n} танга', 'fuel.full': 'Бак полный',
    'fuel.noAccount': 'Танга хранятся в боте. Откройте бота, нажмите /start и вернитесь в игру.',
    'fuel.short': 'Не хватает {n} танга. Можно подождать — топливо восстановится само.',
    'fuel.done': 'Заправлено: +{n} (−{cost} танга)', 'fuel.noTanga': 'Не хватает танга', 'fuel.alreadyFull': 'Бак уже полный', 'fuel.fail': 'Не получилось заправиться. Попробуйте ещё раз',

    // прогресс, карта, прибытие, финиш
    // кошелёк: танга и обмен очков
    'w.title': 'Кошелёк', 'w.fuel': 'Топливо', 'w.demo': 'Это демо-кошелёк для просмотра в браузере: танга ненастоящие. В боте будет ваш баланс.',
    'x.title': 'Обмен очков', 'x.rate': '{pts} очков = {tanga} танга', 'x.today': 'Сегодня получено {got} из {cap} танга', 'x.have': 'На счёте: {n} очков',
    'x.left': 'Сегодня можно получить ещё {n} танга', 'x.limit': 'Лимит на сегодня исчерпан. Возвращайтесь завтра!',
    'x.btnOne': '{pts} очков → +{tanga} танга', 'x.btnAll': 'Обменять всё → +{tanga} танга', 'x.short': 'До обмена не хватает {n} очков',
    'x.done': 'Зачислено: +{n} танга', 'x.fail': 'Не получилось обменять. Попробуйте ещё раз', 'x.limitHit': 'Лимит обмена на сегодня исчерпан',
    'over.pts': '+{n} очков на счёт. Обменяйте их на танга',
    // траты танга
    'b.turbo': 'Турбо', 'b.shield': '+1 жизнь', 'b.magnet': 'Магнит', 'b.x2': '×2 крышки', 'btn.goCost': 'Поехали · {n} танга',
    'rules.6t': 'Танга', 'rules.6d': 'Очки → танга, до 20 в день',
    'skin.buyT': 'Новая машина', 'skin.white': 'Белая', 'skin.red': 'Красная', 'skin.caravan': 'Караван', 'skin.new': 'Новое', 'game.combo': 'Комбо ×{n}!', 'prog.next': 'дальше: {city}', 'prog.caps': 'крышки', 'prog.pts': 'очки', 'skin.caravanT': 'Караван Coca-Cola', 'skin.buyS': 'Останется у вас навсегда', 'skin.buy': 'Купить · {n} танга', 'skin.done': 'Машина ваша!',
    'revive.t': 'Второй шанс', 'revive.s': 'Продолжите с 1 жизнью, очки сохранятся', 'revive.go': 'Продолжить · {n} танга', 'revive.no': 'Завершить заезд', 'revive.done': 'Поехали дальше!',
    'city.buy': 'Открыть за {n} танга', 'city.buyT': 'Открыть {city}?', 'city.buyS': 'Город откроется сразу', 'city.buyGo': 'Открыть · {n} танга',
    'shop.bal': 'У вас {n} танга', 'shop.need': 'не хватает {n}', 'shop.fail': 'Не получилось. Попробуйте ещё раз',
    'prog.done': 'Путешествие пройдено', 'prog.free': 'свободный заезд',
    'map.caps': 'Крышки', 'map.pts': 'Очки', 'map.note': 'Цель можно набрать за несколько заездов',
    'map.passed': 'Город пройден. Сюда можно ездить за рекордами.', 'map.locked': 'Закрыто. Сначала откройте город «{city}».',
    'map.aral': 'Арал',
    'arrive.finalT': 'Путешествие пройдено!', 'arrive.t': 'Вы прибыли {to}!',
    'arrive.finalS': 'Вы проехали весь Узбекистан и стали чемпионом! Играйте дальше ради рекордов и рейтинга недели.',
    'arrive.s': '{region} · открыт город {n} из {total}', 'arrive.ach': 'Достижение: {name}',
    'over.journeyDone': 'Путешествие завершено!', 'over.wasDone': 'Путешествие пройдено. Играйте ради рекордов!',
    'over.cityDone': 'Город {city} пройден!', 'over.free': 'Свободный заезд · прогресс засчитан городу {city}',
    'unlock.finT': 'Путешествие пройдено!', 'unlock.t': 'Открыт город {city}', 'unlock.finS': 'Вы — чемпион Узбекистана', 'unlock.s': 'Нажмите, чтобы посмотреть',
    'over.best': 'Рекорд: {n}', 'over.newBest': 'Новый рекорд!', 'over.caps': 'Собрано крышек: {n}',
    'over.rank': 'Место в рейтинге недели: {rank}', 'over.rankBest': ' (ваш лучший результат: {n})', 'over.notSent': 'Результат не отправлен',

    // страны на карте
    'geo.kz': 'КАЗАХСТАН', 'geo.tm': 'ТУРКМЕНИСТАН', 'geo.af': 'АФГАНИСТАН', 'geo.tj': 'ТАДЖИКИСТАН', 'geo.kg': 'КЫРГЫЗСТАН',
  },

  uz: {
    'btn.go': 'Ketdik', 'btn.map': 'Xarita', 'btn.duel': 'Duel', 'btn.top': 'Reyting', 'btn.howto': 'Qanday o‘ynaladi', 'btn.rules': 'Qoidalar', 'btn.menu': 'Menyu',
    'btn.again': 'Yana', 'btn.againCity': 'Yana: {city}', 'btn.challenge': 'Do‘stni chaqirish', 'btn.topWeek': 'Hafta reytingi',
    'btn.ride': 'Ketdik', 'btn.rideTo': '{to} ketdik', 'btn.rideFree': 'Poyga: {city}', 'btn.locked': 'Yopiq',
    'btn.ach': 'Yutuqlar', 'btn.close': 'Yopish', 'btn.later': 'Keyinroq', 'btn.cancel': 'Bekor qilish', 'btn.continue': 'Davom etish',
    'btn.refuel': 'Yoqilg‘i quyish', 'btn.fuelOne': 'Quyish', 'btn.fuelFull': 'To‘la bak',
    'start.hint': 'Qatorga suring yoki bosing',
    'over.brand': 'Marra',
    'map.title': 'O‘zbekiston bo‘ylab sayohat', 'map.overview': 'Umumiy', 'map.prev': 'Oldingi shahar', 'map.next': 'Keyingi shahar',
    'lb.title': 'Hafta reytingi',

    'rules.title': 'Qanday o‘ynaladi',
    'rules.1t': 'Qopqoqlarni yig‘ing', 'rules.1d': 'Qopqoq +50 ochko, shisha +120',
    'rules.2t': 'Turbo', 'rules.2d': '12 ta qopqoq — ekranga tez bosing',
    'rules.3t': 'To‘siqlardan qoching', 'rules.3d': 'Qatorga suring yoki bosing. 3 ta jon',
    'rules.4t': 'Yoqilg‘i va palov', 'rules.4d': 'Poyga — 1 yoqilg‘i, palov — +1',
    'rules.5t': 'Sayohat', 'rules.5d': 'Ochko to‘plab, 14 ta shaharni oching',
    'rules.go': 'Tushunarli, ketdik!',

    'game.plov': 'Palov! +1 yoqilg‘i', 'game.tap': 'BOSING!', 'game.ready': 'STARTGA', 'game.go': 'KETDIK!',

    'ach.city0': 'Birinchi poygani o‘ynang', 'ach.city': '{city} shahrini oching',
    'ach.turbo.t': 'Birinchi turbo', 'ach.turbo.d': 'Turboni yoqing',
    'ach.caps.t': 'Yuzta qopqoq', 'ach.caps.d': 'Bir poygada 100 ta qopqoq yig‘ing',
    'ach.score.t': '10 000 ochko', 'ach.score.d': 'Bir poygada 10 000 ochko to‘plang',
    'ach.win.t': 'G‘olib', 'ach.win.d': 'Do‘stingiz chaqiruvida g‘alaba qozoning',
    'ach.half.t': 'Yarim yo‘l', 'ach.half.d': '8 ta shaharni oching',
    'ach.journey.t': 'O‘zbekiston chempioni', 'ach.journey.d': 'Butun sayohatni yakunlang',
    'ach.count': '{total} tadan {n} tasi ochildi',

    'lb.loading': 'Yuklanmoqda…', 'lb.empty': 'Hozircha hech kim yo‘q. Birinchi bo‘ling!', 'lb.me': 'Sizning o‘rningiz: {rank} · {score} ochko',
    'lb.play': 'Reytingga kirish uchun o‘ynang', 'lb.error': 'Reytingni yuklab bo‘lmadi',

    'ch.beaten': 'Bu chaqiruv allaqachon yengilgan', 'ch.beatenBy': 'Bu chaqiruvni {name} allaqachon yengdi',
    'ch.self': 'Bu sizning chaqiruvingiz. Havolani do‘stingizga yuboring!', 'ch.from': '{name} sizga chaqiruv tashladi: {score} ochko. Ko‘proq to‘play olasizmi?',
    'ch.share': 'Jetour Cola Rush’da chaqiruv! Mening natijam — {score}. Kim ko‘proq?',

    'duel.title': 'Duel 1 ga 1', 'duel.friend': 'Do‘stni chaqirish', 'duel.queue': 'Raqib topish', 'duel.invite': 'Havolani yuborish', 'duel.more': 'Yana kutish',
    'duel.accept': 'Duelni qabul qilish', 'duel.opp': 'Raqib', 'duel.ownOver': 'Bu sizning duelingiz, u allaqachon tugagan.',
    'duel.callsNow': '{name} sizni hozir duelga chaqiryapti!', 'duel.yours': '{name} bilan duelingiz sizsiz davom etmoqda.',
    'duel.busy': '{name} duelida allaqachon raqib bor.', 'duel.over': '{name} dueli allaqachon tugagan.',
    'lobby.chooseT': 'Qanday o‘ynaymiz?', 'lobby.chooseS': 'Do‘stingizni havola orqali chaqiring yoki tasodifiy raqib toping.',
    'lobby.connecting': 'Ulanmoqda…', 'lobby.found': 'Raqib topildi: {name}', 'lobby.opp': 'Raqib: {name}', 'lobby.ready': 'Ikkalangiz ham tayyorsiz. Start bir soniyada…',
    'lobby.searchT': 'Raqib qidirilmoqda', 'lobby.searchS': 'Kimdir «Raqib topish»ni bosishi bilan sanoq boshlanadi.',
    'lobby.waitT': 'Raqib kutilmoqda', 'lobby.waitFriend': 'Do‘stingizga havolani yuboring. U ochishi bilan sanoq boshlanadi.', 'lobby.waitHost': 'Duel egasi qaytishi kutilmoqda…',
    'lobby.timerSearch': 'Qidiruv: {time}', 'lobby.timerWait': 'Kutish: {time}',
    'lobby.nobody': 'Hozircha hech kim yo‘q. Yana kuting yoki do‘stingizni chaqiring.', 'lobby.friendLate': 'Raqib hali kelmadi. Havola hali amal qiladi.',
    'duel.createFail': 'Duel yaratib bo‘lmadi. Yana urinib ko‘ring', 'duel.oppLeft': 'Raqib bilan aloqa uzildi', 'duel.oppBack': 'Raqib yana aloqada',
    'duel.oppNoFuel': 'Raqibning yoqilg‘isi tugadi', 'duel.oppFail': 'Raqib boshlay olmadi', 'duel.timeout': 'Hech kim kelmadi. Duel yopildi',
    'duel.closed': 'Duel yopildi', 'duel.lost': 'Duel bilan aloqa uzildi', 'duel.none': 'Bunday duel endi yo‘q', 'duel.full': 'Bu duelda allaqachon raqib bor',
    'duel.ended': 'Duel allaqachon tugagan', 'duel.goneOn': 'Duel sizsiz davom etmoqda', 'duel.cancelled': 'Duel bekor qilindi',
    'duel.vs': 'Duel: {name}', 'duel.vsAnon': 'Raqib bilan duel',
    'duel.share': 'Jetour Cola Rush’da duel! Startda kutaman 🏁',
    'res.draw': '{name} bilan durang: {a} : {b}', 'res.win': '{name}ni yengdingiz! {a} : {b}', 'res.lose': '{name} tezroq: {a} : {b}', 'res.dnf': '(raqib marraga yetmadi)',
    'res.oppFin': '{name} marrada: {score}. Natija kutilmoqda…', 'res.oppLost': '{name}: aloqa uzildi… kutamiz', 'res.oppDrive': '{name} hali yo‘lda: {score} ochko',
    'hud.m': '{n} m', 'hud.fin': 'marra {score}', 'hud.offline': 'aloqa yo‘q', 'hud.oppAhead': 'raqib {n} m oldinda', 'hud.youAhead': 'siz {n} m oldindasiz', 'hud.even': 'yonma-yon',

    'err.auth': 'Telegram orqali kirib bo‘lmadi. O‘yinni botdan oching', 'err.net': 'Aloqa xatosi', 'err.serverLost': 'Server bilan aloqa uzildi',
    'err.noServer': 'Server bilan aloqa yo‘q', 'err.busy': 'Yana urinib ko‘ring', 'err.retry': 'Server bilan aloqa yo‘q. Yana urinib ko‘ring',

    'eco.next': '+1: {time}', 'fuel.title': 'Yoqilg‘i quyish', 'fuel.empty': 'Bak bo‘sh', 'fuel.per': 'Har bir poyga 1 yoqilg‘i sarflaydi.',
    'fuel.next': 'Keyingi bepul yoqilg‘igacha: <b>{time}</b>.', 'fuel.isFull': 'Bak to‘la.', 'fuel.tanga': '{n} tanga',
    'fuel.buyOne': '+1 quyish · {n} tanga', 'fuel.buyFull': 'To‘la bak · {n} tanga', 'fuel.full': 'Bak to‘la',
    'fuel.noAccount': 'Tangalar botda saqlanadi. Botni oching, /start ni bosing va o‘yinga qayting.',
    'fuel.short': '{n} tanga yetmayapti. Kutishingiz mumkin — yoqilg‘i o‘zi tiklanadi.',
    'fuel.done': 'Quyildi: +{n} (−{cost} tanga)', 'fuel.noTanga': 'Tanga yetmayapti', 'fuel.alreadyFull': 'Bak allaqachon to‘la', 'fuel.fail': 'Yoqilg‘i quyib bo‘lmadi. Yana urinib ko‘ring',

    // hamyon: tanga va ochko almashtirish
    'w.title': 'Hamyon', 'w.fuel': 'Yoqilg‘i', 'w.demo': 'Bu brauzerda ko‘rish uchun demo hamyon: tangalar haqiqiy emas. Botda sizning balansingiz bo‘ladi.',
    'x.title': 'Ochko almashtirish', 'x.rate': '{pts} ochko = {tanga} tanga', 'x.today': 'Bugun {cap} tangadan {got} tasi olindi', 'x.have': 'Hisobingizda: {n} ochko',
    'x.left': 'Bugun yana {n} tanga olish mumkin', 'x.limit': 'Bugungi limit tugadi. Ertaga qayting!',
    'x.btnOne': '{pts} ochko → +{tanga} tanga', 'x.btnAll': 'Hammasini almashtirish → +{tanga} tanga', 'x.short': 'Almashtirish uchun yana {n} ochko kerak',
    'x.done': 'Hisobga tushdi: +{n} tanga', 'x.fail': 'Almashtirib bo‘lmadi. Yana urinib ko‘ring', 'x.limitHit': 'Bugungi almashtirish limiti tugadi',
    'over.pts': '+{n} ochko hisobingizga tushdi. Ularni tangaga almashtiring',
    // tanga sarflash
    'b.turbo': 'Turbo', 'b.shield': '+1 jon', 'b.magnet': 'Magnit', 'b.x2': '×2 qopqoq', 'btn.goCost': 'Ketdik · {n} tanga',
    'rules.6t': 'Tanga', 'rules.6d': 'Ochko → tanga, kuniga 20 tagacha',
    'skin.buyT': 'Yangi mashina', 'skin.white': 'Oq', 'skin.red': 'Qizil', 'skin.caravan': 'Karvon', 'skin.new': 'Yangi', 'game.combo': 'Kombo ×{n}!', 'prog.next': 'keyingi: {city}', 'prog.caps': 'qopqoqlar', 'prog.pts': 'ochkolar', 'skin.caravanT': 'Coca-Cola karvoni', 'skin.buyS': 'Sizda abadiy qoladi', 'skin.buy': 'Sotib olish · {n} tanga', 'skin.done': 'Mashina sizniki!',
    'revive.t': 'Ikkinchi imkoniyat', 'revive.s': '1 ta jon bilan davom eting, ochko saqlanadi', 'revive.go': 'Davom etish · {n} tanga', 'revive.no': 'Poygani yakunlash', 'revive.done': 'Davom etamiz!',
    'city.buy': '{n} tangaga ochish', 'city.buyT': '{city} ochilsinmi?', 'city.buyS': 'Shahar darhol ochiladi', 'city.buyGo': 'Ochish · {n} tanga',
    'shop.bal': 'Sizda {n} tanga', 'shop.need': '{n} yetmaydi', 'shop.fail': 'Bo‘lmadi. Yana urinib ko‘ring',
    'prog.done': 'Sayohat yakunlandi', 'prog.free': 'erkin poyga',
    'map.caps': 'Qopqoqlar', 'map.pts': 'Ochko', 'map.note': 'Maqsadga bir necha poygada erishish mumkin',
    'map.passed': 'Shahar o‘tildi. Bu yerda rekordlar uchun poyga qilish mumkin.', 'map.locked': 'Yopiq. Avval «{city}» shahrini oching.',
    'map.aral': 'Orol',
    'arrive.finalT': 'Sayohat yakunlandi!', 'arrive.t': '{to} yetib keldingiz!',
    'arrive.finalS': 'Siz butun O‘zbekistonni bosib o‘tdingiz va chempion bo‘ldingiz! Rekordlar va hafta reytingi uchun o‘ynashda davom eting.',
    'arrive.s': '{region} · {total} tadan {n}-shahar ochildi', 'arrive.ach': 'Yutuq: {name}',
    'over.journeyDone': 'Sayohat tugadi!', 'over.wasDone': 'Sayohat yakunlandi. Rekordlar uchun o‘ynang!',
    'over.cityDone': '{city} shahri o‘tildi!', 'over.free': 'Erkin poyga · progress {city} shahriga yozildi',
    'unlock.finT': 'Sayohat yakunlandi!', 'unlock.t': '{city} shahri ochildi', 'unlock.finS': 'Siz — O‘zbekiston chempionisiz', 'unlock.s': 'Ko‘rish uchun bosing',
    'over.best': 'Rekord: {n}', 'over.newBest': 'Yangi rekord!', 'over.caps': 'Yig‘ilgan qopqoqlar: {n}',
    'over.rank': 'Hafta reytingidagi o‘rningiz: {rank}', 'over.rankBest': ' (eng yaxshi natijangiz: {n})', 'over.notSent': 'Natija yuborilmadi',

    'geo.kz': 'QOZOG‘ISTON', 'geo.tm': 'TURKMANISTON', 'geo.af': 'AFG‘ONISTON', 'geo.tj': 'TOJIKISTON', 'geo.kg': 'QIRG‘IZISTON',
  },
};

// Города: название, регион, достижение за город, «куда» (для «Ехать в …» / «… ketdik»).
window.JCR_CITIES = {
  ru: [
    ['Ташкент', 'город Ташкент', 'Столичный старт', 'в Ташкент'],
    ['Нурафшон', 'Ташкентская область', 'Сердце области', 'в Нурафшон'],
    ['Гулистан', 'Сырдарьинская область', 'Хлопковый рейс', 'в Гулистан'],
    ['Джизак', 'Джизакская область', 'Горный перевал', 'в Джизак'],
    ['Самарканд', 'Самаркандская область', 'Покоритель Регистана', 'в Самарканд'],
    ['Навои', 'Навоийская область', 'Золото Кызылкума', 'в Навои'],
    ['Бухара', 'Бухарская область', 'Жемчужина Шёлкового пути', 'в Бухару'],
    ['Ургенч', 'Хорезмская область', 'Страж Ичан-Калы', 'в Ургенч'],
    ['Нукус', 'Республика Каракалпакстан', 'Путь к Аралу', 'в Нукус'],
    ['Карши', 'Кашкадарьинская область', 'Степной ветер', 'в Карши'],
    ['Термез', 'Сурхандарьинская область', 'Южные ворота', 'в Термез'],
    ['Фергана', 'Ферганская область', 'Цветущая долина', 'в Фергану'],
    ['Андижан', 'Андижанская область', 'Город мастеров', 'в Андижан'],
    ['Наманган', 'Наманганская область', 'Гранатовый финиш', 'в Наманган'],
  ],
  uz: [
    ['Toshkent', 'Toshkent shahri', 'Poytaxt starti', 'Toshkentga'],
    ['Nurafshon', 'Toshkent viloyati', 'Viloyat yuragi', 'Nurafshonga'],
    ['Guliston', 'Sirdaryo viloyati', 'Paxta reysi', 'Gulistonga'],
    ['Jizzax', 'Jizzax viloyati', 'Tog‘ dovoni', 'Jizzaxga'],
    ['Samarqand', 'Samarqand viloyati', 'Registon fotihi', 'Samarqandga'],
    ['Navoiy', 'Navoiy viloyati', 'Qizilqum oltini', 'Navoiyga'],
    ['Buxoro', 'Buxoro viloyati', 'Ipak yo‘li gavhari', 'Buxoroga'],
    ['Urganch', 'Xorazm viloyati', 'Ichan qal’a posboni', 'Urganchga'],
    ['Nukus', 'Qoraqalpog‘iston Respublikasi', 'Orolga yo‘l', 'Nukusga'],
    ['Qarshi', 'Qashqadaryo viloyati', 'Dasht shamoli', 'Qarshiga'],
    ['Termiz', 'Surxondaryo viloyati', 'Janubiy darvoza', 'Termizga'],
    ['Farg‘ona', 'Farg‘ona viloyati', 'Gullagan vodiy', 'Farg‘onaga'],
    ['Andijon', 'Andijon viloyati', 'Hunarmandlar shahri', 'Andijonga'],
    ['Namangan', 'Namangan viloyati', 'Anorli marra', 'Namanganga'],
  ],
};
