const fs = require('fs');
const path = require('path');

//fs操作大文件时要使用文件流方式：

//创建可读文件流：   
let rs = fs.createReadStream(path.resolve(__dirname, 'aipin.mp3'));
//创建可写文件流：
let wr = fs.createWriteStream(path.resolve(__dirname, '123.mp3'));

/* 

另外一种把一个文件写入另一个文件的方法
//再创建一个可写文件流： 
let wr2 = fs.createWriteStream(path.resolve(__dirname, '456.mp3'));

//管道流方法：
rs.pipe(wr2);

*/


// rs对象上的on方法，用于监听文件的不同状态和变化，当文件打开时触发的函数，或者文件准备好的时候触发ready事件对应的回调函数
rs.on('open', () => {
    console.log('open...');
});

rs.on('ready', () => {
    console.log('ready...');
});


//读取(分批读取文件内容)
let i = 0;

// data时间监听读取过程，每次读文件都会触发data事件，读到的内容是参数d
// rs.on('data', (d) => {
//     // console.log(d, 111); // 分批读取，文件在硬盘中，内存分批调用硬盘中的文件，防止内存耗光然后蓝屏
//     // i++

//     // console.log(i); // 看看读了几次
//     wr.write(d); // 把在可读文件流中读到的内容d写到可写文件流wr中去
// })