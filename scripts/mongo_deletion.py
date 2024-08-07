from pymongo import MongoClient

def delete_all_documents(mongo_uri, database_name, collection_name):
    client = MongoClient(mongo_uri)
    db = client[database_name]
    collection = db[collection_name]

    result = collection.delete_many({})
    print(f"Deleted {result.deleted_count} documents from {database_name}.{collection_name}")

# Replace the following variables with your specific details
mongo_uri = "mongodb://localhost:27017"
database_name = "seminarium"
collection_name = "seminars"

delete_all_documents(mongo_uri, database_name, collection_name)
