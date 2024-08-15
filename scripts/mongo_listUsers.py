from pymongo import MongoClient

def check_collection(mongo_uri, database_name, collection_name):
    client = MongoClient(mongo_uri)
    db = client[database_name]
    collection = db[collection_name]
    
    documents = collection.find()
    for document in documents:
        print(document)

mongo_uri = "mongodb://localhost:27017"
database_name = "seminarium"
collection_name = "users"

check_collection(mongo_uri, database_name, collection_name)
