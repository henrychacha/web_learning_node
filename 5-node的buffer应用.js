//需求：将buffer中的内容写入文件

const fs = require('fs');
const path = require('path');

let buf = Buffer.from('hello web...');
// console.log(buf);

//将buffer写文件
fs.writeFileSync(path.resolve(__dirname, 'test.txt'), buf);

//读取文件内容  
let data = fs.readFileSync(path.resolve(__dirname, 'test.txt'));
console.log(data.toJSON());
console.log(data, data.toString());