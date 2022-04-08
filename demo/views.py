import sqlite3

def dataLoad(sql):
    cx = sqlite3.connect("../db.sqlite3")
    cursor = cx.cursor()
    cursor.execute(sql)
    columns = [_[0].lower() for _ in cursor.description]
    results = [dict(zip(columns, _)) for _ in cursor]
    cursor.close()
    return len(results)

def calculateCovidRsik():
    doc_Sql = """select * from demo_doctor_visit"""
    doc = dataLoad(doc_Sql)
    medicine_Sql = """select * from demo_medicine"""
    medicine = dataLoad(medicine_Sql)
    trip_Sql = """select * from demo_trip"""
    trip = dataLoad(trip_Sql)
    symptom_Sql = """select * from demo_symptom"""
    symptom = dataLoad(symptom_Sql)

    if (doc > 2 or trip > 2):
        if (symptom > 2):
            if (medicine > 2):
                return True

    return False

print(calculateCovidRsik())