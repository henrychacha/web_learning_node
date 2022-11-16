const mime = require('mime');

let curtypes = mime.getType('json');
console.log(curtypes);
curtypes = mime.getType('js');
console.log(curtypes);

let extname = mime.getExtension('image/png');
console.log(extname);


// 第三方包的代码不用去记忆，去查就好了
// 所有第三方包都会到package.json文件汇总，

// 所有第三方模块最好安装在根目录下。  // 项目名路径中不要有中文
// 安装时输入 npm init  或者 npm init -y
// 删除包名  npm r 包名

// 在文件传输的时候，把所有项目依赖的第三方包都删除，留下package.json文件。然后传到外网服务器或者给别人

// 然后别人拿到后，在终端里，目标地址下，输入 npm install  电脑会自动安装package.json中的记录的第三方包
/* 

以下是在mac终端中手动安装package.json文件的过程

在目标地址中输入 npm init 回车，

xuhongdeMacBook-Air:~ xuhongtong$ cd /Users/xuhongtong/Documents/0302/web1/3.progress\ 3 npm init
xuhongdeMacBook-Air:3.progress 3 xuhongtong$ npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (3.progress-3) 
version: (1.0.0) 
description: this project is demo
entry point: (index.js)   // 入口文件，比如index.html
test command: 
git repository: 
keywords: node    //使用了那些技术
author: neon
license: (ISC) 
About to write to /Users/xuhongtong/Documents/0302/web1/3.progress 3/package.json:

{
  "name": "3.progress-3",
  "version": "1.0.0",
  "description": "this project is demo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node"
  ],
  "author": "neon",
  "license": "ISC"
}


Is this OK? (yes) 
xuhongdeMacBook-Air:3.progress 3 xuhongtong$  */