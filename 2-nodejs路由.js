//引入http模块
const http = require('http');
//创建服务器
const server = http.createServer();

//监听事件:server.on();
server.on('request', (req, res) => {

    //获取请求中的path路径
    let curpath = req.url;

    res.setHeader('content-type', 'text/html;charset=utf-8');
    //根据不同的path路径返回不同的响应
    if (curpath.startsWith('/teacher')) { //也可以使用正则
        res.write('这是老师相关信息...');
    } else if (curpath.startsWith('/student')) {
        res.write('这是学生相关信息');
    } else {
        res.write('404错误...');
    }

    res.end();
});

//监听端口
server.listen(3000, () => {
    console.log('3000端口监听成功');
});