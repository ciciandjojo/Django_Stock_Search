# Django_Stock_Search
这个项目可以说是个简单的demo
其中的用途就是对股票进行查询——返回一个图表方便展示，还有就是数据是已经存在数据库当中
对股票进行组合查询，通过时间段、融资融券金额、股价三个部分进行组合，找到您所需要股票

缺点：1、数据不是实时从网上获取下来到数据库当中，所以需要做数据自己手动获取导入数据库，因为实时获取的话并太好
2、在进行组合查询的时候好鬼慢，因为股票的数据量好大，一旦将所有的数据全部到进去将是5000多*3000多条的数据

琐事：这里面使用了两个很出名的库pyecharts(用来将数据变为图表）、datetimepicker（在获取时间段的时候方便）

使用方法：
（1）首先安装好python的环境再来看
（2）下载整个项目到本地
（3）安装该项目所需要的python库文件（此处叹息！！！python库真的强大又好用）pip install -r Library_Funtions.txt
（4）然后就是运行MySQL_createTable.py文件，这时候先需要修改33行的数据库账号、密码、还要新建数据库，还要改72行文件路径
（5）python manage.py makemigrations
（6）python manage.py migrate
（7）python manage.py runserver

注意：1、有什么错改什么
2、不懂可以给我邮箱留言|本人超级有空
3、欢迎指出错误
