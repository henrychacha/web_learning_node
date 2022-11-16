const express = require('express')
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var cookieSession = require('cookie-session')

app.use(cookieSession({
    name: 'sessionids',
    keys: ['123*&^%', 'sadf*&%']
}))

let curusr = ''; //当前用户
//处理登录：  
app.get('/login', (req, res) => {

    //用户名
    let uname = req.query.usr;

    if (uname == '') {
        res.send("<script>alert('请输入用户名');location.href='login.html'</script>");
        return;
    } else {
        //将用户名存放在session中
        req.session.UNAMES = uname;
        curusr = req.session.UNAMES;
        res.send("<script>location.href='chat.html'</script>");
    }



});

//注意：服务一旦启动会创建隐藏文件： /socket.io/socket.io.js
//监听事件
io.on('connection', (socket) => {

    //接收消息
    socket.on('chat', (m) => {
        io.emit('rechat', `${curusr}说：${m}`);
    });

});



//静态资源托管
app.use(express.static(path.resolve(__dirname, 'views')));


server.listen(3000);