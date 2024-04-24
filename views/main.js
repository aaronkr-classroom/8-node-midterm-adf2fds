//main.js

// Express 모듈을 불러옵니다.
const express = require('express');

// Express 애플리케이션을 만듭니다.
const app = express();

// 루트 앤드포인트에 대한 미들웨어를 설정합니다.
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//서버를 3000 포트에서 실행합니다.
app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});