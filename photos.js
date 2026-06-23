/**
 * ============================================
 *   НАСТРОЙКА ФОТОГРАФИЙ
 * ============================================
 * 
 * Здесь ты добавляешь свои фото с Wfolio.
 * 
 * КАК ПОЛУЧИТЬ ССЫЛКУ НА ФОТО ИЗ WFOLIO:
 * 
 *   1. Открой свой сайт на Wfolio
 *   2. Открой альбом с нужной фотографией
 *   3. ПКМ на фото → "Открыть изображение в новой вкладке"
 *   4. Скопируй URL из адресной строки (вида https://i.wfolio.ru/x/...)
 *   5. Вставь этот URL сюда в массив PHOTOS
 * 
 * ФОРМАТ:
 *   { src: "ссылка", title: "Название", category: "portrait" }
 * 
 * КАТЕГОРИИ:
 *   portrait, street, nature, event, wedding, studio
 *   (можно добавлять свои — см. массив CATEGORIES ниже)
 * 
 * ============================================
 */

const PHOTOS = [
    // ──── ПРИМЕРЫ (замени на свои фото) ────

    // {
    //     src: "https://i.wfolio.ru/x/ТВОЯ_ССЫЛКА.jpg",
    //     title: "Портрет в парке",
    //     category: "portrait"
    // },

    // ──── ДЕМО-ФОТО (удали когда добавишь свои) ────
    {
        src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
        title: "Портрет при мягком свете",
        category: "portrait"
    },
    {
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
        title: "Естественный свет",
        category: "portrait"
    },
    {
        src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
        title: "Ночной мегаполис",
        category: "street"
    },
    {
        src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
        title: "Городские ритмы",
        category: "street"
    },
    {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
        title: "Утренний туман",
        category: "nature"
    },
    {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        title: "Лесная тропа",
        category: "nature"
    },
    {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        title: "Свадебная церемония",
        category: "event"
    },
    {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
        title: "Первый танец",
        category: "event"
    },
];

const CATEGORIES = [
    { key: "all",      label: "Все" },
    { key: "portrait", label: "Портреты" },
    { key: "street",   label: "Стрит" },
    { key: "nature",   label: "Природа" },
    { key: "event",    label: "События" },
    // { key: "wedding",  label: "Свадьбы" },
    // { key: "studio",   label: "Студия" },
];
