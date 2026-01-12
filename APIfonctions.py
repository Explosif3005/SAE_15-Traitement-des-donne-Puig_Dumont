#!/bin/python
"""
API_fonctions.py
A files that will contain all fonction that interact, modify and make direct use of the API and it's returned data:
update():
A fonction that make sure to update 'data.json' by requesting the data from the API with the corresponding URL, 
convert the answer into json, updating the file with it and returning it.
return data -> json
"""

def update():
    response=requests.get("https://portail-api-data.montpellier3m.fr/offstreetparking?limit=1000")
    data = response.json() # Convert the response to JSON data
    with open('data/data.json', 'w') as file:
        json.dump(data, file, indent=4)
    return data
