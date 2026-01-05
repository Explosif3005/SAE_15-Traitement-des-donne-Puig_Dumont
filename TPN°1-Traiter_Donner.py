import json
import time
import statistiques
import requests
import math

def update():
    response=requests.get("https://portail-api-data.montpellier3m.fr/offstreetparking?limit=1000")
    data = response.json() # Convert the response to JSON data
    with open('SAE_15_Traiter_des_données/data.json', 'w') as file:
        json.dump(data, file, indent=4)
    return data

def pourcentage_occupation(data):
    sum_plibre = 0
    sum_ptotal = 0
    pourcentage_place = {}
    for i in range(len(data)):
        plibre = data[i]['availableSpotNumber']['value']
        ptotal = data[i]['totalSpotNumber']['value']
        if data[i]['status']['value'] == 'Open':
            pourcentage_place[data[i]['name']['value']] = str(statistiques.round_data(plibre / ptotal * 100)) + ' %'
            sum_plibre += plibre
            sum_ptotal += ptotal
    pourcentage_place['Montpellier'] = str(statistiques.round_data(sum_plibre / sum_ptotal * 100)) + ' %'
    return pourcentage_place

def reading_data():
    with open('SAE_15_Traiter_des_données/data.json') as file:
        data = json.load(file)
    return data

def write_place_libre(data):
    with open('SAE_15_Traiter_des_données/place_libre.data', 'w') as file:
        for i in range(len(data)):
            if data[i]['status']['value'] == 'Open':
                file.write(str(data[i]['availableSpotNumber']['value'])+'\n')

def write_nom_place_libre(data):
    with open('SAE_15_Traiter_des_données/nom_place_libre.data', 'w') as file:
        for i in range(len(data)):
            if data[i]['status']['value'] == 'Open':
                plibre = data[i]['availableSpotNumber']['value']
                file.write(data[i]['name']['value'] + ' ' + str(plibre) + '\n')

def write_datafile(data, name):
    with open(f"SAE_15_Traiter_des_données/{name}.data", 'a') as file:
        file.write(f"Mesure prise le : {data[0]['status']['metadata']['timestamp']['value']}\n")
        to_write = {}
        for i in range(len(data)):
            # The line is broken two time because it is too big
            to_write[data[i]['name']['value']] = {'type_vehicule': data[i]['allowedVehicleType']['value'],\
                 'place_libre': data[i]['availableSpotNumber']['value'], 'place_totale': data[i]['totalSpotNumber']['value'],\
                    'status': data[i]['status']['value']}
        file.write(str(to_write) + '\n')

def read_datafile(name):
    with open(f'SAE_15_Traiter_des_données/{name}.data', 'r') as file:
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


def acquire_data(Te, durée, name='data'):
    temps = int(time.time())
    t = temps
    while t < (temps + durée):
        if int(time.time()) > (t + Te):
            update()
            data = reading_data()
            write_datafile(data, name)
            t = int(time.time())

read_datafile('data')