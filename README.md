<a name="Traiter des Données"></a>

<h2 align="center">Mobilité à Montpellier</h2>

<p align="center">
  Une chaîne de traitement automatisée pour collecter, nettoyer et analyser les flux de données d'occupation des parkings de Montpellier.
  <br />
  <br />
</p>
  
<details>
  <summary>Table des Matières</summary>
  <ol>
    <li>À propos du projet</li>
    <li>Architecture du Script</li>
    <li>Sources de Données (API)</li>
    <li>Structure de Données (JSON)</li>
    <li>Pour commencer</li>
    <ul>
        <li>Prérequis</li>
        <li>Installation</li>
      </ul>
    <li>Usage</li>
    <li>Contact</li>
  </ol>
</details>

<h3><em>À propos du projet</em></h3>

<p>Ce projet vise à répondre aux besoins d'un professionnel R&T devant manipuler des données issues d'un système d'information</p>
<p>L'objectif est de développer un programme Python capable d'automatiser la récupération de données brutes, de les traiter (nettoyage, calculs statistiques) et de les exporter dans un format structuré et exploitable (JSON).</p>

<p>Les fonctionnalités principales sont :</p>
<ul>
<li><b>Collecte</b> automatisée via des requêtes HTTP (`requests`).</li>
<li><b>Parsing</b> pour extraire les informations des réponse de l'API à propos des parkings.</li>
<li><b>Transformation</b> des données 'datafiles' hétérogènes en format JSON standardisé.</li>
<li><b>Archivage</b> des donnée dans des fichier 'datafiles' pour permettre une analyse de l'évolution temporelle.</li>
<li><b>Analyse</b> des données récolté grace à des outils mathématique de base.</li></p>
</ul>

<h3><em>Architecture du Script</em></h3>

<p>Le projet est structuré et divisé en 4 scritps principaux :</p>
<pre>
SAE15-Montpellier/
│
├── APIfonctions.py      # Gestion des appels aux API (récupération des données)
├── SAE_15-main.py       # Programme principal
├── statistiques.py      # Fonctions mathématiques (Moyenne,Écart-type,Corrélation,...)
├── tfiles.py            # Gestion des entrées/sorties fichiers (Lecture/Écriture)
├── README.md            # Documentation technique du projet
│
├── data/                 # Dossier de stockage des JSON et fichiers .data
│   ├── data_bikestation.json   # Données brutes des vélos
│   ├── data_parking.json       # Données brutes des parkings
│   └── data_parking.data       # Historique archivé
│
└── site/                # Interface Web
    ├── index.html       # Structure de la page
    ├── style.css        # Mise en forme et design
    ├── script.js        # Logique d'affichage (Carte Leaflet, Graphiques)
    └── images/          # Dossier contenant les graphiques générés par Python et la matrice de corrélation  
</pre>

<p><b>Détail des modules :</b></p>
<ul>
    <li><code>SAE_15-main.py</code> : Le script principal qui lance la récolte des données via l' adresse configurée.</li>
    <li><code>APIfonctions.py</code> : Contient toutes les fonctions qui interagissent directement avec les API web.</li>
    <li><code>statistiques.py</code> : Contient les outils d'analyse mathématique.</li>
    <li><code>tfiles.py</code> : Librairie de gestion de fichiers. Elle inclut :
        <ul>
            <li><code>reading_data()</code> : Lecture des fichiers JSON.</li>
            <li><code>write_place_libre()</code> : Génération du fichier des places disponibles ligne par ligne.</li>
            <li><code>write_datafile()</code> & <code>read_datafile()</code> : Création et lecture des fichiers d'archivage propriétaires.</li>
        </ul>
    </li>
</ul>
<h3><em>Sources de Données (API)</em></h3>

<p>Ce projet s'appuie sur l'Open Data de Montpellier Méditerranée Métropole via son <a href = 'https://portail-api.montpellier3m.fr/'>API</a> : </p>

<ul>
  <li>
    <b>Parkings Voiture (JSON) :</b> Données de la Disponibilité en temps réel.
    <br><i>Exemple : Parking Comédie.</i>
    <br>URL pour l'api : <code><a href = 'https://portail-api-data.montpellier3m.fr/offstreetparking?limit=1000'>https://portail-api-data.montpellier3m.fr/offstreetparking?limit=1000</a></code>
  </li>
  <li>
    <b>Vélomagg (JSON) :</b> Disponibilité des vélos et bornes.
  </li>
</ul>

<h3><em>Structure de Données (JSON)</em></h3>

<p>Le programme convertit les données JSON brutes en fichiers datafile structurés pour l'analyse.</p>

<p><b>Exemple de sortie JSON :</b></p>
<pre>
[
    {
        "id": "urn:ngsi-ld:parking:001",
        "type": "OffStreetParking",
        "allowedVehicleType": {
            "type": "StructuredValue",
            "value": [
                "car",
                "moped"
            ],
            "metadata": {}
        },
        "availableSpotNumber": {
            "type": "Number",
            "value": 133,
            "metadata": {
                "timestamp": {
                    "type": "DateTime",
                    "value": "2025-12-19T10:10:22.000Z"
                }
            }
        },
        "name": {
            "type": "Text",
            "value": "Antigone",
            "metadata": {}
        },
  ...
</pre>

<p><b>Exemple de sortie datafile :</b></p>
<pre>
Mesure prise le : 2025-12-23T11:35:12.000Z
{
  "Antigone": {
    "type_vehicule": ["car", "moped"], 
    "place_libre": 159, 
    "place_totale": 239, 
    "status": "Open"}, 
  "Comedie": {
    "type_vehicule": ["car", "moped"], 
    "place_libre": 303, 
    "place_totale": 664, 
    "status": "Open"}, ...
}
Mesure prise le : 2025-12-23T12:55:12.000Z
{
  "Antigone": {
    "type_vehicule": ["car", "moped"], 
    "place_libre": 157, 
    "place_totale": 239, 
    "status": "Open"}, 
  "Comedie": {
    "type_vehicule": ["car", "moped"], 
    "place_libre": 258, 
    "place_totale": 664, 
    "status": "Open"}, ...
}
Mesure prise le : 2025-12-23T13:55:14.000Z
{
  "Antigone": {
    "type_vehicule": ["car", "moped"], 
    "place_libre": 159, 
    "place_totale": 239, 
    "status": "Open"}, 
  "Comedie": {
    "type_vehicule": ["car", "moped"], 
    "place_libre": 248, 
    "place_totale": 664, 
    "status": "Open"}, ...
}
...
</pre>

<h3><em>Pour commencer</em></h3>

<a name="prérequis"></a>
<h4><em>Prérequis</em></h4>
<p>Ce projet utilise le langage <b>Python 3</b>.<br>
Les librairies tierces suivantes sont nécessaires :</p>
<ul>
  <li><code>requests</code> : pour effectuer les requêtes HTTP.</li>
  <li><code>json</code> : pour manipuler et parser les fichiers JSON.</li>
  <li><code>time</code> : pour gérer la temporalité des collectes.</li>
  <li><code>math</code> : pour la manipulation mathématique des donnée collecté.</li>
</ul>

<a name="installation"></a>
<h4><em>Installation</em></h4>

<p>1. Cloner le dépôt :</p>
<pre>
git clone https://github.com/Explosif3005/SAE_15-Traitement-des-donne-Puig_Dumont.git
</pre>

<p>2. Installer les dépendances :</p>
<pre>
pip install requests
</pre>

<h3><em>Usage</em></h3>

<p>Pour lancer l'automatisation de la collecte et du traitement, exécutez le script principal :</p>

<pre>
python SAE_15-main.py
</pre>

<p>Le script va :</p>
<ol>
  <li>Télécharger les fichiers JSON des parkings.</li>
  <li>Extraire le nom, l'état du parking, le nombre de places libres et totales.</li>
  <li>Sauvegarde le résultat dans des fichier 'datafile' spécifique dans le dossier <code>./data</code>.</li>
</ol>

<h3><em>Contributeur</em></h3>

<p>Projet réalisé dans le cadre de la SAE 15 (IUT de Béziers).</p>
<p>
    <strong>🌐 <a href="https://sae-15-traitement-des-donne-puig-du.vercel.app/">Accéder au Tableau de Bord en ligne</a></strong>
</p>
<p><em>Personnes ayant contribué :</em></p>
<ul>
  <li><b><a href = 'https://github.com/Tictumbras' >Dumont Tom</a></b></li>
  <li><b><a href = 'https://github.com/Explosif3005' >Puig Yaël</a></b></li>
</ul>

<p align="center">
  <a href="https://github.com/Explosif3005/SAE_15-Traitement-des-donne-Puig_Dumont/issues">Signaler un Bug</a>
    ·
  <a href="https://github.com/Explosif3005/SAE_15-Traitement-des-donne-Puig_Dumont/issues">Demander un Ajout</a>
</p>
