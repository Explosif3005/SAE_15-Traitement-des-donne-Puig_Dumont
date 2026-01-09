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
    <li><a href="#a-propos">À propos du projet</a></li>
    <li><a href="#architecture">Architecture du Script</a></li>
    <li><a href="#sources-de-données">Sources de Données (API)</a></li>
    <li><a href="#structure-de-données">Structure de Données (JSON)</a></li>
    <li><a href="#commencer">Pour commencer</a></li>
    <ul>
        <li><a href="#prérequis">Prérequis</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<h3><u>À propos du projet</u></h3>

<p>Ce projet vise à répondre aux besoins d'un professionnel R&T devant manipuler des données issues d'un système d'information</p>
<p>L'objectif est de développer un programme Python capable d'automatiser la récupération de données brutes, de les traiter (nettoyage, calculs statistiques) et de les exporter dans un format structuré et exploitable (JSON).</p>

<p>Les fonctionnalités principales sont :</p>
<ul>
<li><b>Collecte</b> automatisée via des requêtes HTTP (`requests`).</li>
<li><b>Parsing</b> pour extraire les informations des réponse de l'API à propos des parkings.</li>
<li><b>Transformation</b> des données hétérogènes en format JSON standardisé.</li>
<li><b>Archivage</b> pour permettre une analyse de l'évolution temporelle.</p>
</ul>

<h3><u>Architecture</u></h3>

<p>Le projet est structuré pour séparer le code de collecte des fichiers de données :</p>

<h3><u>Sources de données</u></h3>

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

<h3><u>Structure de Données (JSON)</u></h3>

<p>Le programme convertit les données JSON brutes en fichiers JSON structurés pour l'analyse.</p>

<p><b>Exemple de sortie :</b></p>
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

<h3><u>Pour commencer</u></h3>

<a name="prérequis"></a>
<h4>Prérequis</h4>
<p>Ce projet utilise le langage <b>Python 3</b>.<br>
Les librairies tierces suivantes sont nécessaires :</p>
<ul>
  <li><code>requests</code> : pour effectuer les requêtes HTTP.</li>
  <li><code>json</code> : pour manipuler et parser les fichiers JSON.</li>
  <li><code>time</code> : pour gérer la temporalité des collectes.</li>
  <li><code>math</code> : pour la manipulation mathématique des donnée collecté.</li>
</ul>

<p align="center">
  <a href="https://github.com/Explosif3005/SAE_15-Traitement-des-donne-Puig_Dumont/issues">Signaler un Bug</a>
    ·
  <a href="https://github.com/Explosif3005/SAE_15-Traitement-des-donne-Puig_Dumont/issues">Demander un Ajout</a>
</p>
