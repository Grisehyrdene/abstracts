## Yarn

Инициализировать свежий проект для JavaScript сценариев:

    yarn init -y // Результатом выполнения этой программы будет файл package.json
    

## Создаём простейший сервер.

    npm init - y
    
В package.json меняем в "start" значение на "node index"
    
    npm i express
    
Код простейшего приложения:
    
    const express = require('express');

    const app = express();
    
    const PORT = process.env.PORT || 80;
    
    app.get('/',(req,res)=>{
        res.end('main page');
    })
    
    app.get('/login/',(req,res)=>{
        res.end('login page');
    })
    
    app.listen(PORT, ()=>{
        console.log("successful")
    });
    
    
 После чего запускаем:
 
    npm start

## Свои события.

    let smth = document.querySelector('tag');

    const event = new MouseEvent('click'); // создать события клика мыши по элементу
    const event = new CustomEvent('custom'); // создать своё событие

    smth.dispatch(event); // активировать событие.

## Создаём сервер со своим HTML.

Для начала устанавливаем express:

     nmp i express
     
 После чего получаем его:
 
    // порт
    const PORT = process.env.PORT || 80;
    
    const express = require('express'); // берём Express
    
    const app = express(); // создаём Express-приложение
    
    // создаём маршрут для главной страницы
    app.get('/', (res,req) =>{
    
    // при помощи этого мы добавляем html файл.
    res.sendfile('index.html');
    
    });
     
    // запускаем
    app.listen(PORT);
    
    
 #Измерение времени.
 
    consone.time('t1'); // начало промежука
    /* doing something */
    console.timeEnd('t1') // конец промежука
    
# Промисы.

    const pr = Promise.resolved(value); // разрешённый промис, будет содержать объект со значением value
    const pr = Promise.rejected(value); // отклонённый промис, будет содержать объект со значением value
 
 Пример использования промиса:
 
    pr.then(x => x**2) // сначала разрешённый промис попадает сюда, потом с ним происходит арифметическая операция
      .then(x => x * 2) // потом он попадает сюда
      .then(x => x + 1) // потом сюда
      .then(x => console.log(x)); // в конце выводится в консоль
      
 Поймать ошибку:
 
    pr.catch(x => console.log(x));
 
 Можно вызывать слушатель событий, который будет улавливать ошибки:
 
    window.addEventListener('unhandledrejection', () => ... );
    
 Создать промис через конструктор:
 
    const pr1 = new Promise((resolve, reject) => reject('Ошибка')); // ошибка, можно пользоваться catch
    const pr2 = new Promise((resolve, reject) => resolve('Успех')); // успех, можно пользоваться then
    

    
# Чтение файла.

Для того чтобы прочитать содержимое файла необходимо подключить fs:

    const fs = require('fs');
 
 **f** содержит метод **асинхронный** readFile:
 
    // если не возникло никакой ошибки, то выводит содержимое файла, преобразованное в строку.
    fs.readFile('названиеФайла.расширение', (error, data) => console.log(error || String(data)); 
    
 Существует **синхронный** метод readFileSync.
 
    fs.readFileSync('названиеФайла.расширение'); // не требует callback функции.
    

Использование промисов.

    const util = require('util'); // подключение модуля 
    
    const prReadFile = util.promisify(fs.readFile); // при помощи этого мы сможем использовать промисы
    
    prReadFile('названиеФайла.расширение').then(x => console.log(String(x)).catch(...);
    

Можно сделать иначе:

    fs.promises.readFile('...'); // получим промис
    
    
#Fetch.

    fetch(url); // по умолчанию выполняет метод GET
    