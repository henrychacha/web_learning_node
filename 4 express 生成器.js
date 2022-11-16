/* 
    express 生成器
    1、 用途: 可以快速创建项目骨架（骨架参见OAsystem文件夹）
    2、 安装: npm i -g express-generator 
            (mac电脑在安装时可能需要在前面加sudo 获得权限)
    
             -g 参数，表示全局安装
                （1） 安装包是可以在任何项目中执行，不需要再当前项目的根目录安装，
                （2）一台电脑只要安装一次，不是每次新建项目都需要安装
                （3）使用npm -g 安装的包都放在这个固定目录中

                 /usr/local/lib/node_modules/express-generator 
    3、 使用express生成器创建项目骨架
        express --view=ejs 项目名称
        注意：创建项目骨架是要注意当前所在的目录；项目名不能有中文

    3、 生成股价以后，，按照提示，切换到项目目录并且安装项目依赖包，  npm start
        初始端口是3000
        app.js是入口文件
        routes是各种存放各种路由的文件夹
        bin 放的是启动文件
    
*/