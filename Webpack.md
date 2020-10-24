## Установка

[Руководство](https://tproger.ru/translations/webpack-basics/)

    1. npm init
    2. npm install webpack -D
    3. В файле package.json добавляем следующий код:
    
        "scripts": {
          "build": "webpack",
          "start": "webpack --watch"
        },
        
    4. Создаём файл webpack.config.js в корне проекта.
    5. Вставляет в этот файл следующий код:
    
        const path = require('path');
    
        module.exports = {
         entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
         },
         mode: 'development',
         watch: true
        };
        
    6. npm run build
