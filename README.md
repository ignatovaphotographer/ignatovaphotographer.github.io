# 📷 ignatovaphotographer.github.io

Одностраничный сайт-портфолио фотографа с галереей, фильтрами, лайтбоксом, защитой фотографий и SEO.

**Сайт:** https://ignatovaphotographer.github.io

## 📁 Файлы

| Файл | Назначение |
|------|-----------|
| `index.html` | Главная страница (SEO, Open Graph, JSON-LD) |
| `style.css` | Стили, тёмная тема, защита фото, адаптив |
| `script.js` | Галерея, фильтры, лайтбокс, защита |
| `photos.js` | ⭐ Сюда добавляешь фото с Wfolio |
| `sitemap.xml` | Карта сайта для Google/Яндекс |
| `robots.txt` | Инструкции для поисковых роботов |
| `manifest.json` | PWA-манифест для мобильных |
| `404.html` | Страница ошибки |
| `.nojekyll` | Отключение Jekyll |

## 🚀 Как добавить фото

1. Открой свой Wfolio → альбом → ПКМ на фото → «Открыть изображение в новой вкладке»
2. Скопируй URL (вида `https://i.wfolio.ru/x/...`)
3. Добавь в `photos.js`:
```js
{ src: "URL", title: "Название", category: "portrait" }
```

## 🔒 Защита
Блокировка ПКМ, прозрачный overlay, запрет drag, pointer-events: none.
Фото на CDN Wfolio — в репозитории их нет.

## 🔍 SEO
Open Graph, Twitter Card, JSON-LD, sitemap, robots.txt, мета-теги.

## 🎨 Настройка
Цвета в `style.css` → `:root`. Категории в `photos.js` → `CATEGORIES`.
Контакты и текст — в `index.html`.
