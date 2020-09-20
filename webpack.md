#Установка

    1. npm init
    2. npm install webpack -D
    3. В файле package.json добавляем следующий код:
        "scripts": {
          "build": "webpack",
          "start": "webpack --watch"
        },
    4. npm run build
