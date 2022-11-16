/* 
   为什么要用route级别的写法？
   因为app级别的路由写法和代码混在一起，当项目很大，路由很多的时候，不便于后期维护。
   把不同的功能模块的router写在一起，方便修改

*/

const express = require('express');
const router = express.Router();

/* 
    语法：
    router.请求方式[get/post/all]('路径',回调方法);

    怎样定义router级别的路由？
    1、(1)在创建的router路由文件中，添加下面的代码：
        （const express  = require('express');
        const router = express.Router();
        (2)使用语法，设计路由
        (3) module.exports = router;
    2、通常在入口文件(app.js)中引入对应的router路由文件并使用：
        let routers = require(./名称);
        app.use(routers);
        
   

*/

// 显示用户登录界面

router.get('/',(req,res)=>{
    res.send('登录');
});

// 处理用户登录
router.get('/login',(req,res)=>{
    res.send('处理登录')
})

// 注册用户界面

router.post('/register',(req,res)=>{

    res.send('注册界面');
})
router.all('*',(res,req)=>{
    res.send('404')
})


//暴露
/* 
    router本身就是一个有方法和属性的对象
*/
module.exports = router;