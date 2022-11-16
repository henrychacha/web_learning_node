//引入http模块   
const http = require('http');
// console.log(http);
//创建服务器
const server = http.createServer();

//监听事件:server.on('request',回调方法);  
//req:request请求
//res:response响应
server.on('request', function(req, res) {
 // 如果监听到request请求，调用后面的回调函数
    //设置响应头信息
    res.writeHead(200, 'ok', { "content-type": "text/html;charset=utf-8" });

    res.write("<strong>Hi web</strong>"); //返回响应内容
    res.write("<p>段落</p>");

    res.end('Hello 中国'); //结束响应
});


//监听端口：
//什么是计算机端口?  
//计算机端口是计算机与外界通信的窗口，不同程序工作在不同的端口。

//常见的计算机端口号有：0至65535个，但要注意的是小于1024的端口号被计算机常见服务所占用。比如：apache默认的端口为80

server.listen(80, function() {
    console.log('80端口监听成功');
});

// 在vscode提供的终端中输入node 拖入文件形成地址名，也可以实现运行node文件