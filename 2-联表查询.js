/* 
    联表查询
    -- 全连接： inner join
    -- 左连接： left join

    全连接，只有两张表同时满足on条件时候，才会显示出来在查询结果
    左连接，左边的表不管是否满足on条件，都会出现在查询结果中，如果左边的表不满足on条件，则left join 右表全部以null来显示，如果左边的表满足on 条件，则left join 右表显示具体内容

    
    -- 查询每个女生的信息并按照成绩降序排列
    select * from xsb inner join cjb on xsb.xh = cjv.xh where sex = '女' order by cj desc 

    -- 查询每个女生的分数形象
    select * from xsb as x left join cjb as c on x.xh = c.xh where sex = '女' 

    -- 查询属于计算机系的学生信息并显示他们的分数


    -- 查询每个学生的分数信息
    select * from cjb left join xsb on xsb.xh = cjb.xh

    -- 查询属于计算机系的学生分数
    select * from cjb left join xsb on xsb.xh = cjb.xh where szx ='计算机系' // cjb要放在left join 左边，却表这个一定要显示，防止有时候学号填写错误两个表不一致，导致查找不到。因为查询的是分数，所以有分数的信息的表要显示出来


    -- 查询每门课程的平均分，课程名，并按照平局分降序排序
    select avg(cj),c.kch from cjb as c inner join kcb ad k on c.kch = k.kch group by c.kch

    select avg(cj),c.kch from cjb as c left join kcb as k on c.kch = k.kch group by c.kch 


    -- 查询每个学生的所有分数、课程名、姓名、性别、所在系
    select xm,age,cj,kcm from xsb as x left join cjv as c on x.xh= c.xh left join kcb as k on c.kch = k.kch where szx = '计算机系'  order by cj asc limit 4

*/


/* 
    法则
    先在inner和left join中做出选择，然后再考虑left join中那个表放在左边，作为用户更关注的信息

    同名字段要加上表前缀 x.kch 
*/

/*

 */