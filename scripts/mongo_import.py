import csv
import json
from pymongo import MongoClient


def import_csv_to_mongodb(input_file, mongo_uri, database_name, collection_name):
    client = MongoClient(mongo_uri)
    db = client[database_name]
    collection = db[collection_name]

    with open(input_file, mode='r', encoding='utf-8-sig') as file:
        reader = csv.DictReader(file)
        for row in reader:
            row['fields'] = json.loads(row['fields'])
            collection.insert_one(row)

    print(f"Data imported successfully into {database_name}.{collection_name}")

# Replace the following variables with your specific details
input_csv = "Preprocessed_Seminarium_Data.csv"
mongo_uri = "mongodb://localhost:27017"
database_name = "seminarium"
collection_name = "seminars"

import_csv_to_mongodb(input_csv, mongo_uri, database_name, collection_name)
