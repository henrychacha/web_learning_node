const fs = require('fs');
const path = require('path');

function getDirData(curpath) {
    //读取目录
    let fArr = fs.readdirSync(curpath);
    // console.log(fArr);
    fArr.forEach(item => {
        //获取文件的状态  
        let fstats = fs.statSync(path.resolve(curpath, item));

        // fstats.isDirectory()
        // fstats.isFile();
        if (fstats.isFile()) { //文件
            console.log('文件：' + item);
        } else { //目录
            // console.log('目录：' + item);
            //如果当前文件为目录时再调用getDirData()要传个绝对路径
            getDirData(curpath + '/' +item);
            // let arr = fs.readdirSync();
            // arr.forEach(){
            //     stats = fs.statSync();
            //     if(stats.isFile()){

            //     }else{  //目录

            //     }
            // }
        }
    });
}

getDirData(__dirname);