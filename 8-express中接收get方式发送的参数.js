const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('server start at port 3000');
});

//get方式的参数写法有两种格式：查询字符串、path路径
//1)查询字符串(标准的url传参写法)，如：
//   http://localhost:3000/student?uid=21&usr=tom  
//  在express中接收get方式中的查询字符串格式的参数：
//   req.query;

//2)path路径，如：  
//  http://localhost:3000/student/21/tom 
//在express中接收get方式中的path路径格式的参数： 
// req.params
//注意：app.get('/student/:x/:y');



//设计路由

// app.get('/student', (req, res) => {
app.get('/student/:uid/:usr/:email', (req, res) => {

    //接收get方式的查询字符串格式发送的参数
    // let obj = req.query;  
    // console.log(obj);

    // let { uid, usr, email } = req.query;

    //接收get方式的path路径格式发送的参数
    // let obj = req.params;
    // console.log(obj);
    let { uid, usr, email } = req.params;

    res.send(`这是学生信息${uid} ${usr} ${email}`);
    // res.send(`这是学生信息`);
});