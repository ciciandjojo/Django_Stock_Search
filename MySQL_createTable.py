# -*- coding: utf-8 -*-
"""
    @Time:2019/4/24 17:59
    @Author: John Ma
"""
from sqlalchemy import create_engine
import xlrd  # 引入模块
import pandas as pd
import numpy as np
import time

# 时间戳转化为时间
def timestampToTime(now):  # 时间戳
    now = now
    int(now)
    tl = time.localtime(now)
    # 格式化时间
    format_time = time.strftime("%Y-%m-%d", tl)
    return format_time

def timeToTimestamp(format_time):
    # 格式化时间
    format_time = format_time
    # 时间
    ts = time.strptime(format_time, "%Y-%m-%d")
    # 格式化时间转时间戳
    return time.mktime(ts)


def createTables_ALLstockCodes_stockCodes(path):
    workbook = pd.read_excel(path)  # 文件路径
    # 用DBAPI构建数据库链接engine
    engine = create_engine("mysql+pymysql://root:1@localhost:3306/Job?charset=utf8")

    # 建立连接
    con = engine.connect()
    # print(list(workbook['股票代码']))
    temp = 123
    list_index = []
    stock_codes = []
    for index, row in workbook.iterrows():
       if temp != row['股票代码']:
           temp = row['股票代码']
           stock_codes.append(temp)
           list_index.append(index)

    #将所有股票名称放入数据库表stock_codes
    df_stock_code = pd.DataFrame(stock_codes, columns=['stock_code'])
    df_stock_code.to_sql(name="stock_codes", con=con, if_exists='replace',index=False)

    # 由于融资融券余额数据值大，所以将数据缩小方便在图中显示
    workbook['融资融券余额'] = workbook['融资融券余额']/1000000000
    data_workbook = workbook.rename(columns={'融资融券余额': '融资融券余额(亿元)'})
    data_workbook['日期'] = pd.to_datetime(data_workbook['日期']).dt.strftime('%Y-%m-%d')
    print(data_workbook)

    #将每个股票各自分开用各自名字建表
    for index in range(len(list_index)):
        print(index)
        if index < len(list_index)-1:
            df = data_workbook[ list_index[index]+1 : list_index[index+1] ]
            stock_num = str(list(df["股票代码"])[0])
            df.to_sql(name=stock_num, con=con, if_exists='replace',index=False)
        else:
            df = data_workbook[ list_index[index]+1 : data_workbook.shape[0] ]
            stock_num = str(list(df["股票代码"])[0])
            df.to_sql(name=stock_num, con=con, if_exists='replace',index=False)


if __name__ == "__main__":
    # path = r"C:\Users\Administrator\Desktop\接job\DATA(1).xlsx"
    path = r"C:\Users\Administrator\Desktop\接job\Data.xlsx"
    createTables_ALLstockCodes_stockCodes(path)