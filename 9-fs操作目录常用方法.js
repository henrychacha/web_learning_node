const fs = require('fs');
const path = require('path');
//创建目录 : fs.mkdir()   fs.mkdirSync()

//当目录不存在时再创建
if (!fs.existsSync(path.resolve(__dirname, 'test'))) {
    let rt = fs.mkdirSync(path.resolve(__dirname, 'test'));
    console.log(rt);
}



//删除目录:fs.rmdir()   fs.rmdirSync()   // 只能删除空目录，不能删除非空目录
//注意：rmdir()不能删除非空目录 
//fs.rmdirSync(path.resolve(__dirname, 'mydemo'));


//删除文件：fs.unlink()  fs.unlinkSync()   
// fs.unlinkSync(path.resolve(__dirname, '123.mp3'));

//更改文件或目录的名称：fs.rename()  fs.renameSync()
fs.renameSync(path.resolve(__dirname, '456.mp3'), path.resolve(__dirname, '789.mp3'))


//读取目录:fs.readdir()   fs.readdirSync()  

let arr = fs.readdirSync(__dirname);
//console.log(arr);
// 读取到的结果是一个数组。里面是目录下面的内容

arr.forEach((item) => {
    //获取文件状态：fs.stat()   fs.statSync()  
    let fstat = fs.statSync(path.resolve(__dirname, item));
    //判断当前文件是否为目录：fstat.isDirectory()
    //判断当前文件是否为文件：fstat.isFile()

    if (fstat.isDirectory()) { //为目录
        console.log(`目录：${item}`);
    } else { //为文件
        console.log(`文件：${item}`);
    }
})