import csv
import json

def preprocess_csv(input_file, output_file, list_column):
    with open(input_file, mode='r', encoding='utf-8-sig') as infile, \
         open(output_file, mode='w', newline='', encoding='utf-8') as outfile:
        
        reader = csv.DictReader(infile)
        fieldnames = reader.fieldnames
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        
        writer.writeheader()
        for row in reader:
            # Convert the specified column from a string to a list
            row[list_column] = json.dumps(row[list_column].strip("[]").replace("'", "").split(", "))
            writer.writerow(row)

# Replace these variables with the correct file paths
input_csv = 'Seminarium_Data.csv'  # The file you uploaded
output_csv = 'Preprocessed_Seminarium_Data.csv'  # The file that will be created
list_column = 'Interest Groups'  # The column that needs to be converted to a list

preprocess_csv(input_csv, output_csv, list_column)
