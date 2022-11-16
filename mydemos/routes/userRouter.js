const express = require('express');
const router = express.Router();

//设计路由

//用户列表

//用户登录




//显示用户注册界面
router.get('/register', (req, res) => {

    res.render('register.html');
});

//处理用户注册
router.post('/registeract', (req, res) => {
    console.log(req.body, 333);
    res.send(req.body);
});

module.exports = router;