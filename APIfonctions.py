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
#------------------------------------------------------
# Bellow are a number of fonctions made for this project to find the necessary data from the json
# They are simple to modify and adapt dependanding on the data
def find_parkings_names(data):
    response = []
    for i in range(len(data)):
        response.append(data[i]['name']['value'])
    return response

def find_parking_occupation(data, name):
    for i in range(len(data)):
        if name == data[i]['name']['value']:
            return (data[i]['totalSpotNumber']['value'] - data[i]['availableSpotNumber']['value'])

def find_parking_total_place(data, name):
    for i in range(len(data)):
        if name == data[i]['name']['value']:
            return data[i]['totalSpotNumber']['value']

def find_parking_available_place(data, name):
    for i in range(len(data)):
        if name == data[i]['name']['value']:
            return data[i]['availableSpotNumber']['value']

def find_parking_state(data, name):
    for i in range(len(data)):
        if name == data[i]['name']['value']:
            return data[i]['status']['value']
#-------------------------------------------
def find_bike_names(data):
    response = []
    for i in range(len(data)):
        response.append(data[i]['address']['value']['streetAddress'])
    return response

def find_bike_occupation(data, name):
    for i in range(len(data)):
        if name == data[i]['name']['value']:
            return data[i]['freeSlotNumber']['value']

def find_bike_total_place(data, name):
    for i in range(len(data)):
        if name == data[i]['name']['value']:
            return data[i]['totalSlotNumber']['value']

def find_bike_available_place(data, name):
    for i in range(len(data)):
        if name == data[i]['name']['value']:
            return data[i]['availableBikeNumber']['value']

def find_bike_state(data, name):
    for i in range(len(data)):
        if name == data[i]['name']['value']:
            return data[i]['status']['value']
    
