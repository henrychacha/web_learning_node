//引入express  
const express = require('express');
// console.log(express);
//创建应用
const app = express();

//监听端口
app.listen(4000, () => {
    console.log('server start at port 4000');
});



//设计路由：   
//express中的路由分为两种：app级别路由、router级别路由
//app级别路由的语法：app.请求方式[get/post]('路径',回调方法)
//注意：所有的路径都是以斜杠开(/)头

app.get('/', (req, res) => {

    res.send('这是首页面 ');
});

// app.get('/ab?cd', function(req, res) {
//     res.send('ab?cd')
// })

// app.get('/ab(cd)?e', function(req, res) {
//     res.send('ab(cd)?e')
// })

app.get(/a/, function(req, res) {
    res.send('/a/')
})

//返回老师相关信息
app.get('/teacher', (req, res) => {

    res.send('这是老师相关信息'); //experss提供的方法
});

//返回学生相关信息
app.get('/student', (req, res) => {

    res.writeHead(200, 'ok', { "content-type": "text/html;charset=utf-8" });
    res.end('这是学生相关信息');
});

//用户登录
app.post('/login', (req, res) => {
    //  res.send('用户登录');


    let obj = { x: 1, y: 33 };
    res.send(obj);
});


//app.all()：能匹配所有请求方式(get/post)
//app.all('/teacher', (req, res) => {
app.all('*', (req, res) => {

    res.send('404错误');
});