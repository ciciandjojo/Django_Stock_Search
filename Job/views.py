#-*-coding:utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render


# Create your views here.
import json
from django.http import HttpResponse
from django.template import loader
import pandas as pd
from pyecharts import Kline, Line, Overlap, Bar, Grid
from django.http import JsonResponse
from sqlalchemy import create_engine

from django.views.decorators.csrf import csrf_exempt
from pandas.core.frame import DataFrame
# 定义存放静态文件的路径
REMOTE_HOST = "../static/js/pyecharts/js"

@csrf_exempt
def Hm(request):
    stock_code = request.POST.get("stock_code")
    # print(stock_code)
    if stock_code == None:
        stock_code = str(600000)
    print(stock_code)
    template = loader.get_template('Hyperbolic_map/Hyperbolic_map.html')
    sl = line_smooth(stock_code)
    context = dict(
        myechart=sl.render_embed(),
        host=REMOTE_HOST,
        script_list=sl.get_js_dependencies()
    )
    return HttpResponse(template.render(context, request))

@csrf_exempt
def Hm2(request):
    stock_code = request.POST.get("stock_code")
    print(stock_code)
    if stock_code == "None":
        stock_code = 600000

    template = loader.get_template('Hyperbolic_map/Hyperbolic_map.html')
    sl = line_smooth(stock_code)

    return HttpResponse(sl.render_embed())

def tooltip_formatter(params):
    #
    # temp_params = params.tolist()
    # for i in range(len(temp_params)):
    #     temp_params[i] = "备注：" + str(temp_params[i])
    # params = np.array(temp_params)
    # print(params)
    return params

def line_smooth(stock_code):
    engine = create_engine("mysql+mysqldb://root:1@localhost:3306/Job?charset=utf8")
    con = engine.connect()
    sqlcmd = "select * from `" + stock_code + "`"
    stock_All = pd.read_sql_query(sqlcmd, con=engine)
    # 获取蜡烛图中需要的数据
    stock = stock_All[[u'日期', u'股票代码', u'股票名称', u'融资融券余额(亿元)', u'收盘价', u'余额占流通市值比', u'涨跌幅']]
    stock_new = stock
    stock_new_sorted = stock_new.sort_values('日期', ascending=True)
    stock_code = str(stock_new_sorted['股票代码'][0])
    stock_name = stock_new_sorted['股票名称'][0]
    index = stock_new_sorted['日期']
    quote_change = stock_new_sorted['涨跌幅']
    close = stock_new_sorted['收盘价']
    Margin_Balance = stock_new_sorted['融资融券余额(亿元)']
    line = Line( stock_code + "融资、股价双曲线图" )
    line.add("股价", index, close, is_smooth=True,
             is_datazoom_show=True, datazoom_type="both",  # 展示最下面那条拖动栏并且是共用
             is_xaxis_show=True,  #展示x轴的内容
             line_type = 'solid',
             is_xaxislabel_align=True,  # 展示x轴的标签
             tooltip_axispointer_type = 'cross',
             tooltip_trigger='axis',
             # tooltip_formatter=tooltip_formatter(quote_change),
             is_more_utils=bool, datazoom_range=[80, 100])
    line.add("融资(亿元)", index, Margin_Balance, is_smooth=True,
             is_more_utils=bool,tooltip_axispointer_type = 'cross',
             tooltip_trigger='axis',
             tooltip_formatter=tooltip_formatter(Margin_Balance))

    bar = Bar()
    bar.add("涨跌幅",
            label_color='black',
            legend_top='1',
            x_axis=stock_new_sorted['日期'],
            y_axis=quote_change,
            is_datazoom_show=True,
            is_stack=True,
            is_xaxislabel_align=True,
            xaxis_line_color="green",
            is_label_show=False,
            datazoom_range=[80, 100],
            )

    overlap = Overlap(width=1300, height=300)

    overlap.add(line)
    overlap.add(bar)

    return overlap

import time
# 时间戳转化为时间
def timestampToTime(now):  # 时间戳
    now = now
    int(now)
    tl = time.localtime(now)
    # 格式化时间
    format_time = time.strftime("%Y-%m-%d", tl)
    return format_time

# 时间转为时间戳
def timeToTimestamp(format_time):
    # 格式化时间
    format_time = format_time
    # 时间
    ts = time.strptime(format_time, "%Y-%m-%d")
    # 格式化时间转时间戳
    return time.mktime(ts)

# 计算并且返回前端需要的函数——json格式
def get_period(df_stock_code, startTime, endTime, IDFinance=None, quote_change=None):
    # 用DBAPI构建数据库链接engine
    engine = create_engine("mysql+pymysql://root:1@localhost:3306/Job?charset=utf8")
    # 建立连接
    con = engine.connect()

    #获取开始和结束时间的index
    endIndex = 0
    startIndex = 0
    for index, row in df_stock_code.iterrows():
        if timeToTimestamp(endTime) >= timeToTimestamp(row['日期']):
            endIndex = row['index']
            break
    for index, row in df_stock_code.iterrows():
        if timeToTimestamp(startTime) == timeToTimestamp(row['日期']):
            startIndex = row['index']
            break
        elif timeToTimestamp(startTime) > timeToTimestamp(row['日期']):
            startIndex = row['index'] -1
            break
    if startIndex == 0:
        startIndex = len(df_stock_code['index'].tolist())


    #当temp_IDFinance=0时，为不符合条件;当temp_IDFinance=1时，为符合条件
    temp_IDFinance = 0
    if IDFinance:
        print(df_stock_code["股票代码"].tolist()[0])
        endIDF = df_stock_code[df_stock_code['index'].isin([endIndex])]["融资融券余额(亿元)"].tolist()[0]
        print(startIndex,index)
        print(df_stock_code[df_stock_code['index'].isin([startIndex])]["融资融券余额(亿元)"].tolist())
        startIDF = df_stock_code[df_stock_code['index'].isin([startIndex])]["融资融券余额(亿元)"].tolist()[0]
        #融资比例
        IDFRatio = (endIDF - startIDF)/startIDF

        if IDFinance == "增加":
            if IDFRatio > 0 :
                temp_IDFinance = 1
        elif IDFinance == "减少":
            if IDFRatio < 0 :
                temp_IDFinance = 1
        elif IDFinance == "增加/减少10%以上":
            if abs(IDFRatio) > 0.1:
                temp_IDFinance = 1
        elif IDFinance == "增加/减少20%以上":
            if abs(IDFRatio) > 0.2:
                temp_IDFinance = 1
        elif IDFinance == "增加/减少30%以上":
            if abs(IDFRatio) > 0.3:
                temp_IDFinance = 1
    else:
        temp_IDFinance = 1

    #当temp_quote_change=0时，为不符合条件;当temp_quote_change=1时，为符合条件
    temp_quote_change = 0
    if quote_change:
        endQC = df_stock_code[df_stock_code['index'].isin([endIndex])]["收盘价"].tolist()[0]
        startQC = df_stock_code[df_stock_code['index'].isin([startIndex])]["收盘价"].tolist()[0]

        #股价变化
        if endQC == "-" or startQC == "-":
            temp_quote_change = 0
        else:
            QCRatio = (float(endQC) - float(startQC)) / float(startQC)

            if quote_change == "上涨":
                if QCRatio > 0 :
                    temp_quote_change = 1
            elif quote_change == "下跌":
                if QCRatio < 0 :
                    temp_quote_change = 1
            elif quote_change == "上涨10%以上":
                if QCRatio > 0.1 :
                    temp_quote_change = 1
            elif quote_change == "上涨20%以上":
                if QCRatio > 0.2 :
                    temp_quote_change = 1
            elif quote_change == "上涨30%以上":
                if QCRatio > 0.3 :
                    temp_quote_change = 1
            elif quote_change == "下跌10%以上":
                if QCRatio < -0.1 :
                    temp_quote_change = 1
            elif quote_change == "下跌20%以上":
                if QCRatio < -0.2 :
                    temp_quote_change = 1
            elif quote_change == "下跌30%以上":
                if QCRatio < -0.3 :
                    temp_quote_change = 1
    else:
        temp_quote_change = 1

    if temp_quote_change == 1 and temp_IDFinance == 1:
        return df_stock_code['股票代码'].tolist()[0], df_stock_code['股票名称'].tolist()[0]
    else:
        return None, None

@csrf_exempt
def Search_stock_of_information(request):

    #获取前端的传送过来的数据
    IDFinance = request.POST.get("IDFinance")
    quote_change = request.POST.get("quote_change")
    datetimeStart = request.POST.get("datetimeStart")
    datetimeEnd = request.POST.get("datetimeEnd")
    time = request.POST.get("time")

    # 用DBAPI构建数据库链接engine
    engine = create_engine("mysql+pymysql://root:1@localhost:3306/Job?charset=utf8")
    # 建立连接
    con = engine.connect()
    stock_codes =  pd.read_sql("SELECT * FROM stock_codes", con=engine)
    stock_codes = stock_codes['stock_code'].tolist()

    #存储股票编码和股票名称
    list_stock_code = []
    list_stock_name = []

    #根据时间再挑选函数
    if datetimeStart and datetimeEnd :
        print("datetimeStart:", datetimeStart)
        print("datetimeEnd:", datetimeEnd)
        for i in stock_codes:
            df_stock_code = pd.read_sql("SELECT * FROM `" + str(i) + "`", con=engine)
            stock_code, stock_name = get_period(df_stock_code, datetimeStart, datetimeEnd, IDFinance, quote_change)
            if stock_code:
                list_stock_code.append(stock_code)
                list_stock_name.append(stock_name)
    else:
        if time == "过去1天":
            datetimeStart = "2019-04-02"
            datetimeEnd = "2019-04-01"
            for i in stock_codes:
                df_stock_code = pd.read_sql("SELECT * FROM `" + str(i) + "`", con=engine)
                stock_code, stock_name = get_period(df_stock_code, datetimeStart, datetimeEnd, IDFinance, quote_change)
                if stock_code:
                    list_stock_code.append(stock_code)
                    list_stock_name.append(stock_name)
        elif time == "过去5天":
            datetimeStart = "2019-04-02"
            datetimeEnd = "2019-03-28"
            for i in stock_codes:
                df_stock_code = pd.read_sql("SELECT * FROM `" + str(i) + "`", con=engine)
                stock_code, stock_name = get_period(df_stock_code, datetimeStart, datetimeEnd, IDFinance, quote_change)
                if stock_code:
                    list_stock_code.append(stock_code)
                    list_stock_name.append(stock_name)
        elif time == "过去10天":
            datetimeStart = "2019-04-02"
            datetimeEnd = "2019-03-23"
            for i in stock_codes:
                df_stock_code = pd.read_sql("SELECT * FROM `" + str(i) + "`", con=engine)
                stock_code, stock_name = get_period(df_stock_code, datetimeStart, datetimeEnd, IDFinance, quote_change)
                if stock_code:
                    list_stock_code.append(stock_code)
                    list_stock_name.append(stock_name)
    dict_all = {"stock_code" : list_stock_code, "stock_name": list_stock_name}
    data_all = DataFrame(dict_all)
    json_all = json.loads(data_all.to_json(orient='records', force_ascii=False))
    json_to_dict = {"Data": json_all}
    return JsonResponse(json_to_dict)

