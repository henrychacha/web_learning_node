//缓冲器(buffer):buffer类似于数组，但与数组的区别是数组中不能存放二进制数据，而在node中要处理像音频、视频这种文件时，我们要分批将文件内容写入缓冲器(buffer)中。
//在node中操作缓冲器实际上操作的物理内存。  

//创建Buffer     

let buf1 = Buffer.alloc(10);
console.log(buf1);
buf1[0] = 6;
buf1[1] = 88;
buf1[2] = 0xaa; //十六进制
buf1[3] = 256;
buf1[4] = 355;
// buf1[10] = 200; //Buffer大小一旦确定不能修改
buf1[9] = 255;
01100100
console.log(buf1);

//allocUnsafe()在创建buffer时不会初始化
//alloc()在创建buffer时会初始化
let buf2 = Buffer.allocUnsafe(10);
console.log(buf2);

let str = 'this is 测试';
let buf3 = Buffer.from(str);
console.log(buf3.length); //在buffer中所占空间长度
console.log(str.length);
console.log(buf3.toString(), buf3);

let obj = { "x": 1, "y": 'tom' };
let buf4 = Buffer.from(JSON.stringify(obj));
console.log(buf4.toString());
console.log(typeof buf4.toString()); // string

let buf5 = Buffer.from([1, 2, 8]);
console.log(buf5); // <Buffer 01 02 08>
console.log(buf5.toString());
 buf5 = Buffer.from(["1", "2", "c"]); 
console.log(buf5);// <Buffer 01 02 00> 前面两个存进去了，后面一个没有存进去。
console.log(buf5.toString());