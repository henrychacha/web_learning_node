//什么是静态资源托管？
// 就是让用户通过我们的web服务器能访问到静态资源文件(比如：.js、、css、图片文件)

//express实现静态资源托管要使用内置中间件:
//   express.static('要托管的静态资源目录')

//注意：使用express.static()方法将某个静态资源目录托管后，在访问时不用带上该目录当作路径，如果要带着该目录则要在app.use()方法中传第一个参数。

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
app.listen(4000, () => {
    console.log('server port 4000');
});

//使用express.static()内置中间件来实现静态资源托管：
// app.use('/image', express.static(path.resolve(__dirname, 'image')));

// app.use('/css', express.static(path.resolve(__dirname, 'css')));

app.use(express.static(path.resolve(__dirname, 'public')));


//使用内置中间件express.urlencoded()接收post提交的参数：
//解析表单编码格式为enctype="application/x-www-form-urlencoded"的表单
app.use(express.urlencoded({ extended: true }));

//设计路由：  

//显示注册界面
app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'reg.html'));
});

//处理注册
app.post('/loginact', (req, res) => {

    //判断user.json文件是否存在
    if (!fs.existsSync(path.resolve(__dirname, 'user.json'))) { //文件不存在时
        fs.writeFileSync(path.resolve(__dirname, 'user.json'), JSON.stringify([]));
    }

    //获取原来所有的用户数据
    let uArr = require('./user.json');

    let { usr, pwd, repwd } = req.body;
    if (pwd != repwd) {
        res.send("<script>alert('两次密码不一致');location.href='/';</script>");
        return;
    }

    //新添加的用户数据
    let uObj = { usr, pwd };
    //将新添加的用户数据追加到原有数组中
    uArr.push(uObj);

    fs.writeFileSync(path.resolve(__dirname, 'user.json'), JSON.stringify(uArr));

    console.log(usr, pwd, repwd);
    res.send(req.body);
});



// app.get('/image/3333.jpg', (req, res) => {

//     res.sendFile(path.resolve(__dirname, 'image/3333.jpg'));
// });