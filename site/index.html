<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supervision Mobilité Montpellier - Mairie</title>
    
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <nav class="sidebar">
        <div class="logo">
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Logo_Montpellier_M%C3%A9diterran%C3%A9e_M%C3%A9tropole.svg/1200px-Logo_Montpellier_M%C3%A9diterran%C3%A9e_M%C3%A9tropole.svg.png" alt="Logo">
            <h2>Mobilité 3M</h2>
        </div>
        <ul>
            <li class="active" onclick="switchTab('dashboard')"><i class="fas fa-chart-line"></i> Vue Générale & Carte</li>
            <li onclick="switchTab('graphs')"><i class="fas fa-images"></i> Analyse Graphique</li>
            <li onclick="switchTab('top-correlations')"><i class="fas fa-trophy"></i> TOP Corrélations</li>
            <li onclick="switchTab('export')"><i class="fas fa-file-download"></i> Espace Maire (Export)</li>
        </ul>
        <div class="footer-nav">
            <p>SAE 15 - R&T - 2026</p>
        </div>
    </nav>

    <main class="content">
        
        <header>
            <h1>Tableau de Bord Décisionnel</h1>
            <div class="status" id="api-status"><i class="fas fa-sync fa-spin"></i> Connexion API...</div>
        </header>

        <div id="dashboard" class="tab-section active">
            <div class="kpi-grid">
                <div class="card kpi">
                    <h3><i class="fas fa-parking"></i> Places Libres (Voiture)</h3>
                    <span id="kpi-parking">---</span>
                </div>
                <div class="card kpi">
                    <h3><i class="fas fa-bicycle"></i> Vélos Disponibles</h3>
                    <span id="kpi-velo">---</span>
                </div>
            </div>

            <div class="card map-container">
                <h3><i class="fas fa-map-marked-alt"></i> Carte Temps Réel (Parkings & Stations)</h3>
                <div id="map"></div>
                <div class="legend">
                    <span class="badge p-open">P - Libre</span>
                    <span class="badge p-full">P - Saturé</span>
                    <span class="badge v-station">Station Vélo</span>
                </div>
            </div>
        </div>

        <div id="graphs" class="tab-section">
            
            <div class="card">
                <h3><i class="fas fa-project-diagram"></i> Matrices de Corrélation</h3>
                <div class="correlation-info">
                    <p>Cette analyse met en évidence les interactions entre l'occupation des parkings et celle des stations vélos voisines.</p>
                    <div class="correlation-legend">
                        <div class="legend-item"><span class="dot-legend red"></span><div><strong>Rouge Foncé (+1)</strong><br><small>Corrélation Positive</small></div></div>
                        <div class="legend-item"><span class="dot-legend blue"></span><div><strong>Bleu Foncé (-1)</strong><br><small>Corrélation Négative</small></div></div>
                        <div class="legend-item"><span class="dot-legend white"></span><div><strong>Clair / Blanc (0)</strong><br><small>Aucune Corrélation</small></div></div>
                    </div>
                </div>
                <div class="correlation-container" style="text-align: center; padding: 20px;">
                    <img src="images/matrice_correlation.png" alt="Matrice de Corrélation" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" onerror="this.onerror=null; this.src='https://placehold.co/800x400?text=Matrice+Introuvable';">
                </div>
            </div>

            <div class="card">
                <h3><i class="fas fa-balance-scale"></i> Comparateur Interactif</h3>
                <p>Sélectionnez un parking et une station pour comparer leurs courbes et voir leur corrélation.</p>
                
                <div class="comparator-controls">
                    <div class="control-group">
                        <label><i class="fas fa-bicycle"></i> Station Vélo (Haut)</label>
                        <select id="select-velo" onchange="updateComparator()"></select>
                    </div>
                    <div class="control-group">
                        <label><i class="fas fa-parking"></i> Parking Voiture (Bas)</label>
                        <select id="select-parking" onchange="updateComparator()"></select>
                    </div>
                </div>

                <div class="correlation-box">
                    <div class="corr-header">Indice de Corrélation</div>
                    <div id="correlation-value" class="correlation-value">--</div>
                    <p id="correlation-text">Analyse en cours...</p>
                </div>

                <div class="comparator-view">
                    <div class="graph-item compare-item">
                        <h4 id="title-velo-selected">Sélectionnez une station</h4>
                        <div class="img-wrapper" id="wrapper-velo">
                            <div class="loading-gallery">Chargement...</div>
                        </div>
                    </div>

                    <div class="graph-item compare-item">
                        <h4 id="title-parking-selected">Sélectionnez un parking</h4>
                        <div class="img-wrapper" id="wrapper-parking">
                            <div class="loading-gallery">Chargement...</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <h3><i class="fas fa-chart-area"></i> Évolution Temporelle (Vue d'ensemble)</h3>
                <div class="gallery-grid" id="auto-gallery">
                    <div class="loading-gallery">Chargement des graphiques...</div>
                </div>
            </div>
        </div>

        <div id="top-correlations" class="tab-section">
            <div class="card">
                <h3>🏆 TOP 20 des Corrélations les plus fortes</h3>
                <p>Ce classement identifie les liens les plus puissants (positifs ou négatifs) entre un Parking et une Station Vélo.</p>
                
                <div class="table-responsive">
                    <table class="top-table">
                        <thead>
                            <tr>
                                <th>Rang</th>
                                <th>Parking</th>
                                <th>Station Vélo</th>
                                <th>Force du lien</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody id="top-corr-body">
                            </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div id="export" class="tab-section">
            <div class="card export-zone">
                <div class="export-header">
                    <i class="fas fa-file-excel"></i>
                    <div><h2>Extraction des Données</h2><p>Téléchargement pour le Maire.</p></div>
                </div>
                <div class="buttons">
                    <button onclick="downloadCSV('parking')" class="btn-primary"><i class="fas fa-download"></i> Parkings (.csv)</button>
                    <button onclick="downloadCSV('velo')" class="btn-secondary"><i class="fas fa-download"></i> Vélos (.csv)</button>
                </div>
            </div>
            <div class="card">
                <h3>Aperçu des données brutes</h3>
                <div class="table-responsive">
                    <table id="data-table">
                        <thead><tr><th>Nom</th><th>Type</th><th>Dispo</th><th>Total</th><th>Statut</th></tr></thead>
                        <tbody id="table-body"></tbody>
                    </table>
                </div>
            </div>
        </div>

    </main>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="script.js"></script>
</body>
</html>
