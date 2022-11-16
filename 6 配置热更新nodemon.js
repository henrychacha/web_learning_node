/* 
    使用热更新以后，使用nodemon打开项目（服务器）的时候不需要反复手动操作更新

    配置方法
    1、安装 nodemon： npm i -g nodemon （安装在全局，这样就不用每个项目都安装一次nodemon）
    2、将nodemon 配置文件（nodemon.json)放到当前项目的根目录中(用于拓展node的功能，非必须要有)
    3、使用nodemon启动项目 nodemon ./bin/www
    4、可以在package.json 文件中“scripts”配置项中添加下面的配置
            "dev" : "nodemon ./bin/www"
    5、可以直接使用npm run dev的方式启动项目，步骤3的方法不再适用


    使用nodemon来代开普通的js文件

    使用nodemon 打开文件和使用node 打开文件一样，要注意你目前在那个目录位置上
*/

