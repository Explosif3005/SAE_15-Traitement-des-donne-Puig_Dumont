import json
import time
import statistiques
import requests
import math

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
            update()
            data = reading_data()
            write_datafile(data, name)
            t = int(time.time())


read_datafile('data')

