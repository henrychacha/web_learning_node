const express = require('express')
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//注意：服务一旦启动会创建隐藏文件： /socket.io/socket.io.js
//监听事件
io.on('connection', (socket) => {

    // console.log('ok...');

    //接收消息:  
    socket.on('tv1', (msg) => {
        // console.log(msg);

        //发送消息：一个客户端收到消息不影响其他客户端
        // socket.emit('cctv13', `Server:${msg}`);

        //发送广播消息： 当前客户端无法收到消息，其他客户端可以收到（刷新一个浏览器，看另一个浏览器是否会有变化）
        // socket.broadcast.emit('cctv13', `Server:${msg}`);

        //给所有客户端发送消息：
        io.emit('cctv13', `Server:${msg}`)
    });



});


//静态资源托管
app.use(express.static(path.resolve(__dirname, 'views')));


server.listen(3000);