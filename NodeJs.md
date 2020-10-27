## Yarn

Инициализировать свежий проект для JavaScript сценариев:

    yarn init -y // Результатом выполнения этой программы будет файл package.json
    

## Создаём простейший сервер.

    npm init - y
    
В package.json меняем в "start" значение на "node index"
    
    nmp i express
    
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
    
    
    
    
    
