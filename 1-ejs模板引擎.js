const express = require('express');
const path = require('path');
const app = express();

app.listen(4000, () => {
    console.log('server start at port 4000');
});


//设置模板引擎
app.set('view engine', 'ejs'); //设置模板引擎为ejs  
app.set('views', [path.resolve(__dirname, 'views'), path.resolve(__dirname, 'moban')]); //设置模板文件存放位置
//告诉express html文件作为ejs模板文件来解析
app.engine('html', require('ejs').__express);



//设计路由

app.get('/yesok', (req, res) => {

    res.send('Hello...');
});

app.get('/myejs', (req, res) => {

    // let usr = req.session.USR ? req.session.USR : '游客';
    let usr = '游客';

    let uArr = [{ "uname": "lisi", "age": 19, "email": "lisi@qq.com" }, { "uname": "zhangsan", "age": 20, "email": "zhangsan@163.com" }, { "uname": "demo", "age": 21, "email": "demo@sohu.com" }];

    let score = [80, 90, 70, 78, 81, 67];

    // res.end();
    // res.send();
    // res.write();
    res.render('list', { usr, uArr, score });
});



app.get('/myhtml', (req, res) => {

    let score = [80, 90, 70, 78, 81, 67];
    res.render('detail.html', { score });
});