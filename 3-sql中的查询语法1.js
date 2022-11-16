/* 

    表单sql文件的导出和导入
    导出： 在navicat中右键选择转储sql文件，选择结构或者数据
    导入： 在navicat中选择数据库，右键选择运行sql文件。

    单表查询

*/

/* 
    以下是sql语言中查询表格中信息  xsb(学生表)  szx(所在系)
    -- 查询所有学生信息
    select * from xsb

    -- 查询计算机系中的学生姓名、年龄、所在系
    select xm,age,szx from xsb where szx = ’计算机系‘
    select xm,age,szx as'所在系' from xsb where szx = ’计算机系‘ // szx字段名会显示成所在系中文，在结果中输出，一个虚拟的表，放在内存里面，

    -- 查询计算机系和数学系的学生姓名、学号、所在系
    select * from xsb where szx='计算机系' or szx='数学系' 
    select xm,xm,szx from xsb where szx='计算机系' or szx='数学系' 

    -- 上面的sql条件可以改用in();
    select * from xsb where szx in ('计算机系'，’数学系‘)  // 或条件,且同一个字段有几个不同的值，可以放在()中

    -- 查询年龄大于18，小于等于20的学生姓名、学号、年龄
    select * from xsb where age>=19 and age<=21 and szx = '计算机系';
    
    -- 查询分数大于等于80、小于等于95的分数信息
    select * from cjb where cj >= 80 and cj <= 95

    -- 上面的查询条件可以改用between...and
    select * from cjb where cj between 80 and 95

    -- 查询姓王的学生信息: 模糊查询like
    select * from xsb where xm like '王%'  // 通配符 是like，不是等号

    -- 查询姓王并且姓名为两个字的学生信息
    select * from xsb where xm like '王_' 

    -- 查询计算机系的男生信息：
    select * from xsb where szx='计算机系' and sex=’男‘
    
    -- 去重查询  查询有哪些系
    select distinct szx from xsb
    
    -- 查询计算机系的学生人数：
    select count(*) as total from xsb where szx=’计算机系‘

    -- 排序: 查询c01课程的分数信息：
    select * from cjb where kch='c01'
    
    -- 排序: 查询c01课程的分数信息并且按照分数降序排序
    select * from cjb where kch='c02' order by cj desc //  降序  
    不写desc就是升序
    

    --  查询表中姓张。刘，李的学生的信息
    select * from xsb where xm like '张%' or '李%'or'刘%'   
 

 */

 /* 
 
    不要忘记多个参数之间加逗号
 
 */