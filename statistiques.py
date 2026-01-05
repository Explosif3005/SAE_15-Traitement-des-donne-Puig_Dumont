"""Statistique:
This is a library that contain a number of basic statistical tool for data analysis:
There is the following fonctions:

"""
from math import sqrt, floor

def round_data(data):
    return floor(data*100)/100

def new_matrice(N):
    liste = [0] * N
    matrice = []
    for i in range(N):
        matrice.append(list(liste))
    return matrice

def moyenne(l):
    lenght = len(l)
    sum = 0
    for i in range(lenght):
        sum += l[i]
    return sum / lenght

def variance(l):
    moy = moyenne(l)
    lenght = len(l)
    sum = 0
    for i in range(lenght):
        sum += (l[i] - moy) ** 2
    return sum / lenght

def ecart_type(l):
    return sqrt(variance(l))

def covariance(l1,l2):
    moy1 = moyenne(l1)
    moy2 = moyenne(l2)
    lenght = len(l1)
    sum = 0
    for i in range(lenght):
        sum += (l1[i] - moy1)*(l2[i] - moy2)
    return sum / lenght

def correlation(l1,l2):
    return covariance(l1,l2) / (variance(l1)*variance(l2))

def matrice_covariance(L_liste):
    N = len(L_liste)
    matrice = new_matrice(N)
    k = 0
    for i in range(N):
        for j in range(N):
            matrice[j][i] = covariance(L_liste[i],L_liste[j])
    return matrice

def matrice_correlation(L_liste):
    N = len(L_liste)
    matrice = new_matrice(N)
    k = 0
    for i in range(N):
        for j in range(N):
            matrice[j][i] = correlation(L_liste[i],L_liste[j])
    return matrice


"""
Data for library testing
"""
T=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23] 

L1=[3,3,4,3,2,5,8,9,13,16,18,18,19,21,22,22,21,17,17,12,10,8,7,4]
L2=[103,203,4,3,2,5,8,9,13,16,18,18,19,21,22,22,21,17,17,12,10,-92,-93,-96]

L1_moyenne = 11,75
L1_sigma = 6,89
L2_moyenne = 11,75
L2_sigma = 57,42

L = [L1,L2]

#print(moyenne(L1), ecart_type(L1))
#print(moyenne(L2), ecart_type(L2))
#print(covariance(L1,L2), correlation(L1,L2), matrice_correlation(L))