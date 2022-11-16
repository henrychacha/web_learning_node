// 什么是静态资源托管？

// 就是让用户通过web服务器能访问到静态资源(比如.js .css .png....)

// // express 实现静态资源托管要使用内置中间件
/* 
    使用express.static() 内置中间件来实现静态资源托管
    语法：
    app.use(express.static(’要托管静态资源的目录‘));

*/ 
// 搭建web服务器

const express = require('express'); 
const app = express();
app.listen(3000,(res,req)=>{
    console.log('server start at port 3000');
});

const path = require('path');
const fs = require('fs');

//使用express.static()内置中间件进行静态资源托管
app.use('/image',express.static(path.resolve(__dirname,'image')))
/* 
    上面的代码中。
    
    注意: 使用express.static()方法将某个静态资源托管后，在防伪功能室不要戴上改目录当做路径，如果要带着改目录则要在app.use()方法中传第一个参数。 （这个参数的目录直接写/ 不要写./  ）

*/
app.use('/public',express.static(path.resolve(__dirname,'public')));

/* 
    上面的代码中，
    在文件夹中建立一个public文件夹，存放css，image等文件夹。public用于托管资源。
*/  
// 设计路由

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./2 reg.html'));
    // 上面这样在没有静态资源托管时，无法加载出图片等，因为客户端请求图片时是使用路由来请求的，但是我们没有定义这个图片的路由。(可以在浏览器检查的network中刷新查看请求地址为 Request URL: http://localhost:3000/image/image01.jpg)

    
})

