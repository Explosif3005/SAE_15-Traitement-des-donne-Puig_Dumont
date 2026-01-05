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
<p>* <b>Collecte</b> automatisée via des requêtes HTTP (`requests`).</p>
<p>* <b>Parsing</b> pour extraire les informations des balises des parkings.</p>
<p>* <b>Transformation</b> des données hétérogènes en format JSON standardisé.</p>
<p>* <b>Archivage</b> pour permettre une analyse de l'évolution temporelle.</p>

<h3><u>Architecture</u></h3>

<p>Le projet est structuré pour séparer le code de collecte des fichiers de données :</p>

<h3><u>Sources de données</u></h3>

<p>Ce projet s'appuie sur l'Open Data de Montpellier Méditerranée Métropole.</p>

    <p>* <b>Parkings Voiture :</b> Disponibilité en temps réel.</p>
    <p>* <b>Vélomagg : </b> Disponibilité des vélos et places.</p>

<p align="center">
  <a href="https://github.com/Explosif3005/SAE_15-Traitement-des-donne-Puig_Dumont/issues">Signaler un Bug</a>
    ·
  <a href="https://github.com/Explosif3005/SAE_15-Traitement-des-donne-Puig_Dumont/issues">Demander un Ajout</a>
</p>
