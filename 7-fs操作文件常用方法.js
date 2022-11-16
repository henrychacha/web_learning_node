const fs = require('fs');
const path = require('path');

//对文件有哪些常用操作？
//打开文件： fs.open()      fs.openSync()
//读文件：  fs.readFile()   fs.readFileSync()  
//写文件：  fs.writeFile()  fs.writeFileSync()   
//关闭文件： fs.close()     fs.closeSync()  


//打开文件：


    fs.open(path.resolve(__dirname, './demo.txt'), 'w+', (err, hd) => {
        /*  
        a+ 不会覆盖原有内容，而是在后面写，w+会覆盖原来的内容，只保留最后一次内容 
        a:append a+的意思就是追加
        */

        // fs.open(path.resolve(__dirname, './demo.txt'), 'a+', (err, hd) => {})

        /*
            注意：如果成功打开文件则hd代表当前打开的文件
            a+ ，如果没有这个文件，会创建。r  , 只能读不能写，没有文件会报错 
        */

        //  console.log(err, hd);

        //写文件：
        fs.writeFile(hd, '12345', (err) => {
            //console.log(err);

            //关闭文件：
            fs.close(hd, (err) => {
                console.log(err);
            });
        });
    });


/* 
    // 上面的方式打开读写关闭，太麻烦，实际中很少用，真正用的多的是读写文件，直接帮忙打开

    // 操作文件或者目录一般情况下都用同步的
*/




//fs模块中操作一般文件常用的方法有：(操作大文件要用文件流的方式)
//读取文件：fs.readFile()     fs.readFileSync()
//写文件：  fs.writeFile()    fs.writeFileSync();

// writeFileSync() 默认flag参数是w，也就是会覆盖原有的内容重写数据
//let rtn = fs.writeFileSync(path.resolve(__dirname, 'demo.txt'), 'Hi web');
let rtn = fs.writeFileSync(path.resolve(__dirname, 'demo.txt'), 'Hello...', { flag: "a+" });
console.log(rtn);