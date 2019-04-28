# Django_Stock_Search
这个项目可以说是个简单的demo
其中的用途就是对股票进行查询——返回一个图表方便展示，还有就是数据是已经存在数据库当中
对股票进行组合查询，通过时间段、融资融券金额、股价三个部分进行组合，找到您所需要股票

缺点：1、数据不是实时从网上获取下来到数据库当中，所以需要做数据自己手动获取导入数据库，因为实时获取的话并太好
2、在进行组合查询的时候好鬼慢，因为股票的数据量好大，一旦将所有的数据全部到进去将是5000多*3000多条的数据

琐事：这里面使用了两个很出名的库pyecharts(用来将数据变为图表）、datetimepicker（在获取时间段的时候方便）