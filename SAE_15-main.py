# Importation of base python libraries:
import json
import time
import requests
import math

#Importation of the project libraries:
import statistiques
import tfiles
import APIfonctions

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

def acquire_data(Te, durée, name='data'):
    temps = int(time.time())
    t = temps
    while t < (temps + durée):
        if int(time.time()) > (t + Te):
            data = APIfonctions.request_data("https://portail-api-data.montpellier3m.fr/offstreetparking?limit=1000", 'parking')
            tfiles.write_datafile(data, f"{name}_parking")
            data = APIfonctions.request_data("https://portail-api-data.montpellier3m.fr/bikestation?limit=1000", 'bikestation')
            tfiles.write_datafile(data, f"{name}_bikestation")
            t = int(time.time())


read_datafile('data')





