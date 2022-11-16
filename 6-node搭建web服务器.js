const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Hello');
});

server.listen(3000, () => {
    console.log('3000监听成功');
});