const express = require('express');
const router = express.Router();

//router.请求方式('路径',回调方法)

//显示用户登录界面
router.get('/', (req, res) => {

    res.send('这是登录界面');
})

//处理用户登录
router.post('/login', (req, res) => {
    res.send('处理登录');
});

//注册用户界面
router.get('/register', (req, res) => {

    res.send('注册界面');
});

router.all('*', (req, res) => {

    res.send('404页面');
});

//暴露
module.exports = router;