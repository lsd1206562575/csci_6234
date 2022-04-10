import sqlite3

from django.http import HttpResponse

def dataLoad(sql):
    cx = sqlite3.connect("../db.sqlite3")
    cursor = cx.cursor()
    cursor.execute(sql)
    columns = [_[0].lower() for _ in cursor.description]
    results = [dict(zip(columns, _)) for _ in cursor]
    cursor.close()
    return len(results)

def calculateCovidRsik(request):
    doc_Sql = """select * from demo_doctor_visit"""
    doc = dataLoad(doc_Sql)
    medicine_Sql = """select * from demo_medicine"""
    medicine = dataLoad(medicine_Sql)
    trip_Sql = """select * from demo_trip"""
    trip = dataLoad(trip_Sql)
    symptom_Sql = """select * from demo_symptom"""
    symptom = dataLoad(symptom_Sql)
    takeOut_Sql = """select * from demo_take_out"""
    takeOut = dataLoad(takeOut_Sql)

    #decision tree
    # if (doc > 2 or trip > 2 or takeOut):
    #     if (symptom > 2):
    #         if (medicine > 2):
    #             return True
    # return False

    #linear regression
    w1 = 0.02
    w2 = 0.03
    w3 = 0.04
    risk = w1 * (doc + trip + takeOut) + w2 * symptom + w3 * medicine

    return HttpResponse(risk)

