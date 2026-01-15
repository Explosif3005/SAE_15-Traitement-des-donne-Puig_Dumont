#!/bin/python
"""
tfiles.py
In this library will be compiled all fonction for reading and writing files for this project:
writing_data(data -> json, name -> str):
A fonction with the goal of taking the data from the parameter data and writing it in the corresponding json file:
f"data_{name}.json", where {name} correspond to the given str in the parameter 'name'.
return data -> json

reading_data(name -> str):
A fonction with the goal of reading f"data_{name}.json", and returning the corresponding json data.
return data -> json

write_place_libre(data -> json):
A fonction that take a corresponding json with the data for the car parking, and write 'place_libre.data', 
the file containing the number of available spot for each open parking line by line.

write_nom_place_libre(data -> json):
A fonction that take a corresponding json with the data for the car parking, and write 'nom_place_libre.data', 
the file containing the name followed by the number of available spot for each open parking line by line.

write_datafile(data -> json, name -> str):
A fonction that take the json data, extract the necessary data from it, and add it inside a datafile with a corresponding name.

read_datafile(name -> str):
A fonction made to read the datafile, extract the data from it and convert it into a usable json before returning it.
return data -> json


"""
#Imporation of APIfonctions (it is renammed as DataF[Data Fonctions] for readability reason)
import APIfonctions as DataF

def writing_data(data, name):
    with open(f"data/data_{name}.json", 'w') as file:
        json.dump(data, file, indent=4)
    return data

def reading_data(name):
    with open(f"data/data_{name}.json", 'r') as file:
        data = json.load(file)
    return data

def write_place_libre(data):
    with open('data/place_libre.data', 'w') as file:
        for i in range(len(data)):
            if DataF.find_parking_state(data[i]) == 'Open':
                file.write(str(DataF.find_parking_available_spot(data[i])+'\n')

def write_nom_place_libre(data):
    with open('data/nom_place_libre.data', 'w') as file:
        for i in range(len(data)):
            if DataF.find_parking_state(data[i]) == 'Open':
                file.write(DataF.find_parking_name(data[i]) + ' ' + str(DataF.find_parking_available_spot(data[i])) + '\n')

def write_datafile(data, name):
    with open(f"data/{name}.data", 'a') as file:
        file.write(f"Mesure prise le : {data[0]['status']['metadata']['timestamp']['value']}\n")
        to_write = {}
        for i in range(len(data)):
            # The line is broken two time because it is too big
            to_write[DataF.find_parking_name(data[i])] = {'type_vehicule': data[i]['allowedVehicleType']['value'],\
                 'place_libre': DataF.find_parking_available_spot(data[i]), 'place_totale': DataF.find_parking_total_spot(data[i]),\
                    'status': DataF.find_state(data[i])}
        file.write(str(to_write) + '\n')

def read_datafile(name):
    with open(f'data/{name}.data', 'r') as file:
        lines = file.readlines()
        data = []
        for i in range(len(lines)):
            if i % 2 == 0:
                time_m = lines[i].split('T')[1][:-6]
            else:
                dic_mesure = {"data": json.loads(lines[i][:-1])}
                dic_mesure["time_of_mesure"] = time_m
                data.append(dic_mesure)
                print(dic_mesure)
