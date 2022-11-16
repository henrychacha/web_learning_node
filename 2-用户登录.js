const express = require('express');
const path = require('path');

const app = express();

app.listen(4000, () => {
    console.log('server start at port 4000');
});


//引入用户路由文件
let userRouter = require('./3-user_router.js');
// console.log(userRouter);
//使用用户路由文件
app.use(userRouter);