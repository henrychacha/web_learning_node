/* 
    使用router路由
    router路由也可以看做一个中间件，所以是可以用use方法使用
*/


const express = require('express');
const path = require('path');
const app = express();


app.listen(4000, () => {
    console.log('server start at port 4000');
});


const useRouter = require('./5a route路由');
console.log(useRouter);

//使用路由文件
app.use(useRouter);