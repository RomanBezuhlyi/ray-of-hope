🧩 Frontend Gulp + Webpack Збірка
Легка збірка для фронтенду з використанням **Gulp**, **Webpack**, **SCSS**, **Babel** та оптимізацією зображень. Працює з HTML-інклудом, WebP, Autoprefixer та має LiveReload.

Перед стартом переконайтесь, що встановлений Node.js.

📦 Встановлення:
npm install

🚀 Запуск у режимі розробки:
npm run dev

🛠 Збірка для продакшну:
npm run build

🌐 Деплой на GitHub Pages:
npm run deploy

📁 Структура:
├── build/
├── gulp/
├── src/
│   ├── html/
│   │   ├── index.html
│   │   └── blocks/
│   ├── img/
│   ├── js/
│   │   ├── index.js
│   │   └── modules/
│   └── scss/
│       ├── main.scss
│       ├── base/
│       └── blocks/
├── gulpfile.js
├── webpack.config.js
├── package.json
