const express = require('express');
const path = require('path');
const app = express();

app.listen(4000, () => {
    console.log('server start at port 4000');
});

//设计路由

//显示用户登录界面
app.get('/', (req, res) => {


    res.sendFile(path.resolve(__dirname, 'login.html'));
});

//处理用户登录
app.get('/login', (req, res) => {

    //接收get方式中的查询字符串格式发送的参数
    //接收用户输入的帐号及密码
    let { usr, pwd } = req.query;

    // if(usr == 'lisi' && pwd == 1234){

    // }else{

    // }

    //先判断帐号是否正确
    if (usr == 'lisi') { //帐号正确

        //再判断密码是否正确 
        if (pwd == 1234) { //密码正确 
            res.send('登录成功');
        } else { //密码错误 
            res.send("<script>alert('密码错误');location.href='/';</script>");
        }


    } else { //帐号错误
        res.send("<script>alert('帐号错误');location.href='/';</script>");
    }


});