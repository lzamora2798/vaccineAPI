
from pymongo import MongoClient
##just populate the database in a local envioroment
client = MongoClient('mongodb://admin:password@127.0.0.1:27017/liberty?authSource=liberty')
# Create the database for our example (we will use the same database throughout the tutorial
dbname =client['liberty']
    
collection_name = dbname["people"]

#     item_1 = {"name":"luis zamora",
# "cedula":"0999314326",
# "edad":"23"}
# collection_name.insert_many([item_1])
item_details = collection_name.find()
for item in item_details:
# This does not give a very readable output
    print(item)