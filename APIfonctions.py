#!/bin/python
"""
APIfonctions.py
A files that will contain all fonction that interact, modify and make direct use of the API and it's returned data:
update(URL -> str, name -> str):
A fonction that make sure to update f'data_{name}.json' by requesting the data from the API with the corresponding URL, 
convert the answer into json, updating the file with it and returning it.
return data -> json
"""
import tfiles

def request_data(URL, name):
    response=requests.get(URL)
    data = response.json() # Convert the response to JSON data
    tfiles.writing_data(data, name)
    return data
