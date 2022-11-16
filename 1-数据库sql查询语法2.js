/* 
    sql语法 通过sql语句手动控制数据库
    单表查询

     不等于符号 <>   或者  !=
    -- 查询不是计算机系的学生
     select * from xsb where szx <> '计算机系'
     select * from xsb where szx != '计算机系'

     非  not
    -- 查询c01,c02的分数信息
     select * from cjb where kch in('c01','c02')
     select * from cjb where kch = 'c01' or kch = 'c02'
     select * from cjb where kch = 'c01' or 'c02' //不行
    -- 查询课程号不等于c01，c02的分数信息
     select * from cjb where kch <> 'c01' and kch ='c02'   

    -- 查询年龄大于18的学生信息，并且按照所在系降序排序，如果是同一个系则按照年龄升序排序
    select * from xcb where age>18 order by szx desc,age desc

    -- 查询学生年龄和姓名，并且在年龄前面加上年龄是
    select xm,'年龄是',age from xsb

    -- 查询成绩为null的分数信息
    select * from cjb where cj is null

    -- 查询成绩不为null的分数信息
    select * from cjb where cj is not null

    -- 随机排序学生信息
    select * from xsb order by rand() // 随机排序

    -- 查询第一个第二个学生的信息
        > limit m,n  // m代表位置编号，从哪个位置开始，初始位置编号是0，n代表条数，m是0可以省略 // 可以使用limit实现分页功能，一共有的信息x，除以每页显示内容y，向上取整得到页数 。 实现分页最关键是要计算出m的值，也就是位置编号，
        select * from xsb limit 0,2  


        -- m的值=（第几页-1）* 每页要显示的条数
    
    -- 随机查询3个学生的信息
    select * from xsb order by rand() limit 3 // 省略了0

    -- 查询成绩最低的3个分数信息
    select * from cjb order by cj asc limt 3

    -- 查询总的学生人数
    select count(*) from xsb 

    -- 查询男生、女生的人数
    select count(*),sex from xsb group by sex

    -- 查询每门课程的选修人数
    select count(*) as num,kch from cjb group by kch

    -- 查询每门课程的平均分
    select avg(cj),kch from cjb group by kch

    -- 查询每门课程的最高分
    select max(cj),kch from cjb group by kch

    -- 查询分数部位null的美梦课程选修人数，并按照人数降序排序，只显示前三个
    select count(*) as num,kch from cjb where cj is not null group by kch order by num desc limit 3  // count() 括号中可以写cjb中的任意字段，比如xm


    
    where是对表中真实存在的记录进行筛选，但是对于查询语句计算出来的比如count计算出的人数，是没用的； 这个时候要使用having
        having: 对查询结果进行二次筛选
        where：对表数据进行筛选

    -- 查询除表演系之外的每个系的人数，只显示人数在3人以上的系，并按照人数降序
    select count(szx),szx from xsb where szx<>'表演系' group by szx having num >= 3 order by num desc

    -- 查询每门课程的分数在80分及以上的总分数,只显示总分数在200分以上的课程,并且按照总分数升序排序
    select sum(cj) as score,kch from cjb where cj>=80 group by kch having score>200 order by score asc
*/

/* 
    count，min, max,avg,sum都是计算函数
    计算函数不能出现在where子句中

*/

