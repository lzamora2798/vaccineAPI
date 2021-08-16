import pandas as pd
from pymongo import MongoClient

client = MongoClient('mongodb://admin:password@127.0.0.1:27017/liberty?authSource=liberty')
dfs = pd.read_excel("Estudiantes_ESPOL_Vacunacion.xlsx", sheet_name="Table 1")
dbname =client['liberty']
collection = dbname['people']

dfs.reset_index(inplace=True)
del dfs['index']
dfs["edad"] = "N/A"
data_dict = dfs.to_dict("records")
for dic in data_dict:
    cedula = str(dic['cedula'])
    if len(cedula) == 9 :
        cedula="0"+cedula
    dic['cedula'] = cedula
    dic['fecha_vac'] = dic['dia'] + " " + dic['horario']
    del dic['dia']
    del dic['horario']
collection.insert_many(data_dict)
