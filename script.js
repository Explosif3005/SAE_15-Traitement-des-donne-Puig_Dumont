// --- CONFIGURATION ---
const TARGET_PARKINGS = [
    "Antigone", "Arc de Triomphe", "Comedie", "Corum", "Euromedecine", "Europa", 
    "Foch", "Gambetta", "Garcia Lorca", "Gare", "Gaumont EST", "Gaumont OUEST", 
    "Gaumont-Circe", "Mosson", "Occitanie", "Pitot", "Polygone", "Sabines", 
    "Sablassou", "Saint Jean Le Sec", "Triangle", "Vicarello", "Charles de Gaulle", "Circe"
];

// Liste des Stations Vélos (SANS "Montpellier")
const TARGET_VELOS = [
    "Aiguelongue", "Albert 1er - Cathédrale", "Antigone centre", "Beaux-Arts", 
    "Boutonnet", "Celleneuve", "Charles Flahault", "Cité Mion", "Comedie Baudin", 
    "Comédie", "Corum", "Deux Ponts - Gare Saint-Roch", "Emile Combes", 
    "Euromédecine", "Fac de Lettres", "FacdesSciences", "Foch", "Gambetta", 
    "Garcia Lorca", "Halles Castellane", "Hôtel de Ville", "Hôtel du Département", 
    "Jardin de la Lironde", "Jean de Beins", "Jeu de Mail des Abbés", "Les Arceaux", 
    "Les Aubes", "Louis Blanc", "Malbosc", "Marie Caizergues", 
    "Médiathèque Emile Zola", "Nombre d Or", "Nouveau Saint-Roch", "Observatoire", 
    "Occitanie", "Odysseum", "Parvis Jules Ferry - Gare Saint-Roch", 
    "Place Albert 1er - St Charles", "Place Viala", "Plan Cabanes", 
    "Pont de Lattes - Gare Saint-Roch", "Port Marianne", "Providence - Ovalie", 
    "Prés d Arènes", "Père Soulas", "Pérols Etang", "Renouvier", "Richter", 
    "Rondelet", "Rue Jules Ferry - Gare Saint-Roch", "Sabines", "Saint-Denis", 
    "Saint-Guilhem - Courreau", "Sud De France", "Tonnelles", "Vert Bois", "Voltaire"
];

// DONNÉES DE CORRÉLATION (Générées depuis ton CSV)
const CORRELATION_DATA = {"antigone":{"rue_jules_ferry_gare_saint_roch":0.11,"comedie":0.01,"hotel_de_ville":0.01,"corum":0.17,"place_albert_1er_st_charles":-0.46,"foch":0.4,"halles_castellane":0.0,"observatoire":0.0,"rondelet":-0.05,"plan_cabanes":0.28,"boutonnet":-0.08,"emile_combes":0.27,"beaux_arts":-0.17,"les_aubes":0.26,"antigone_centre":0.01,"mediatheque_emile_zola":0.03,"nombre_d_or":-0.03,"louis_blanc":0.08,"gambetta":0.31,"port_marianne":-0.01,"les_arceaux":-0.1,"cite_mion":0.1,"nouveau_saint_roch":-0.1,"renouvier":0.16,"odysseum":0.0,"saint_denis":0.0,"richter":-0.25,"charles_flahault":0.11,"voltaire":0.49,"pres_d_arenes":0.01,"garcia_lorca":0.17,"vert_bois":0.16,"malbosc":0.35,"occitanie":-0.37,"facdessciences":0.01,"fac_de_lettres":-0.13,"aiguelongue":0.35,"jeu_de_mail_des_abbes":-0.11,"euromedecine":-0.12,"marie_caizergues":0.21,"sabines":0.26,"celleneuve":0.27,"jardin_de_la_lironde":-0.09,"pere_soulas":0.12,"place_viala":-0.15,"hotel_du_departement":0.1,"tonnelles":0.26,"parvis_jules_ferry_gare_saint_roch":-0.41,"pont_de_lattes_gare_saint_roch":0.16,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.16,"perols_etang_de_l_or":0.08,"albert_1er_cathedrale":-0.17,"saint_guilhem_courreau":0.1,"sud_de_france":0.25,"comedie_baudin":0.0,"jean_de_beins":-0.12},"comedie":{"rue_jules_ferry_gare_saint_roch":-0.22,"comedie":0.16,"hotel_de_ville":-0.07,"corum":-0.04,"place_albert_1er_st_charles":0.04,"foch":0.18,"halles_castellane":0.0,"observatoire":-0.05,"rondelet":-0.18,"plan_cabanes":-0.03,"boutonnet":-0.08,"emile_combes":0.15,"beaux_arts":-0.22,"les_aubes":-0.28,"antigone_centre":0.05,"mediatheque_emile_zola":-0.14,"nombre_d_or":-0.01,"louis_blanc":0.21,"gambetta":0.21,"port_marianne":-0.07,"les_arceaux":-0.11,"cite_mion":0.13,"nouveau_saint_roch":0.1,"renouvier":0.19,"odysseum":0.0,"saint_denis":0.0,"richter":0.06,"charles_flahault":0.24,"voltaire":0.2,"pres_d_arenes":-0.13,"garcia_lorca":0.09,"vert_bois":0.17,"malbosc":0.12,"occitanie":-0.31,"facdessciences":0.38,"fac_de_lettres":-0.07,"aiguelongue":0.1,"jeu_de_mail_des_abbes":0.25,"euromedecine":0.02,"marie_caizergues":0.28,"sabines":0.15,"celleneuve":0.06,"jardin_de_la_lironde":0.03,"pere_soulas":-0.01,"place_viala":-0.15,"hotel_du_departement":0.03,"tonnelles":0.33,"parvis_jules_ferry_gare_saint_roch":-0.04,"pont_de_lattes_gare_saint_roch":-0.18,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.06,"perols_etang_de_l_or":0.22,"albert_1er_cathedrale":-0.31,"saint_guilhem_courreau":0.22,"sud_de_france":0.28,"comedie_baudin":0.0,"jean_de_beins":-0.04},"corum":{"rue_jules_ferry_gare_saint_roch":-0.1,"comedie":0.18,"hotel_de_ville":-0.14,"corum":0.07,"place_albert_1er_st_charles":-0.04,"foch":0.24,"halles_castellane":0.0,"observatoire":0.05,"rondelet":0.03,"plan_cabanes":0.12,"boutonnet":-0.09,"emile_combes":0.22,"beaux_arts":-0.19,"les_aubes":-0.15,"antigone_centre":0.12,"mediatheque_emile_zola":0.05,"nombre_d_or":0.05,"louis_blanc":0.26,"gambetta":0.35,"port_marianne":-0.15,"les_arceaux":0.03,"cite_mion":0.2,"nouveau_saint_roch":0.13,"renouvier":0.17,"odysseum":0.0,"saint_denis":0.0,"richter":-0.05,"charles_flahault":0.09,"voltaire":0.3,"pres_d_arenes":-0.24,"garcia_lorca":0.23,"vert_bois":0.23,"malbosc":0.16,"occitanie":-0.33,"facdessciences":0.17,"fac_de_lettres":-0.25,"aiguelongue":0.17,"jeu_de_mail_des_abbes":0.06,"euromedecine":-0.08,"marie_caizergues":0.17,"sabines":0.14,"celleneuve":0.21,"jardin_de_la_lironde":-0.14,"pere_soulas":-0.04,"place_viala":-0.05,"hotel_du_departement":0.19,"tonnelles":0.33,"parvis_jules_ferry_gare_saint_roch":-0.16,"pont_de_lattes_gare_saint_roch":-0.1,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.15,"perols_etang_de_l_or":0.42,"albert_1er_cathedrale":-0.27,"saint_guilhem_courreau":0.19,"sud_de_france":0.31,"comedie_baudin":0.0,"jean_de_beins":-0.23},"europa":{"rue_jules_ferry_gare_saint_roch":-0.18,"comedie":-0.15,"hotel_de_ville":0.18,"corum":-0.07,"place_albert_1er_st_charles":0.05,"foch":0.07,"halles_castellane":0.0,"observatoire":-0.02,"rondelet":-0.1,"plan_cabanes":-0.14,"boutonnet":-0.07,"emile_combes":-0.12,"beaux_arts":-0.3,"les_aubes":0.05,"antigone_centre":0.15,"mediatheque_emile_zola":0.19,"nombre_d_or":-0.2,"louis_blanc":0.06,"gambetta":0.2,"port_marianne":0.25,"les_arceaux":-0.3,"cite_mion":0.24,"nouveau_saint_roch":0.3,"renouvier":-0.08,"odysseum":0.0,"saint_denis":0.0,"richter":0.21,"charles_flahault":0.12,"voltaire":0.25,"pres_d_arenes":0.03,"garcia_lorca":-0.18,"vert_bois":-0.01,"malbosc":0.15,"occitanie":-0.2,"facdessciences":0.23,"fac_de_lettres":0.14,"aiguelongue":-0.11,"jeu_de_mail_des_abbes":0.24,"euromedecine":-0.01,"marie_caizergues":0.29,"sabines":-0.05,"celleneuve":-0.16,"jardin_de_la_lironde":0.12,"pere_soulas":-0.21,"place_viala":-0.02,"hotel_du_departement":-0.16,"tonnelles":0.02,"parvis_jules_ferry_gare_saint_roch":0.11,"pont_de_lattes_gare_saint_roch":-0.16,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.11,"perols_etang_de_l_or":0.23,"albert_1er_cathedrale":-0.22,"saint_guilhem_courreau":-0.03,"sud_de_france":0.28,"comedie_baudin":0.0,"jean_de_beins":-0.02},"foch":{"rue_jules_ferry_gare_saint_roch":-0.1,"comedie":-0.36,"hotel_de_ville":0.27,"corum":-0.15,"place_albert_1er_st_charles":0.11,"foch":-0.09,"halles_castellane":0.0,"observatoire":-0.14,"rondelet":-0.27,"plan_cabanes":-0.14,"boutonnet":0.19,"emile_combes":-0.18,"beaux_arts":0.1,"les_aubes":0.22,"antigone_centre":-0.03,"mediatheque_emile_zola":0.06,"nombre_d_or":-0.13,"louis_blanc":-0.08,"gambetta":0.1,"port_marianne":0.36,"les_arceaux":-0.19,"cite_mion":-0.29,"nouveau_saint_roch":0.19,"renouvier":-0.18,"odysseum":0.0,"saint_denis":0.0,"richter":0.15,"charles_flahault":0.01,"voltaire":0.07,"pres_d_arenes":0.2,"garcia_lorca":0.02,"vert_bois":-0.29,"malbosc":-0.16,"occitanie":0.23,"facdessciences":0.12,"fac_de_lettres":0.13,"aiguelongue":-0.18,"jeu_de_mail_des_abbes":0.02,"euromedecine":0.05,"marie_caizergues":0.31,"sabines":-0.29,"celleneuve":-0.14,"jardin_de_la_lironde":0.43,"pere_soulas":0.27,"place_viala":-0.01,"hotel_du_departement":-0.2,"tonnelles":-0.24,"parvis_jules_ferry_gare_saint_roch":0.12,"pont_de_lattes_gare_saint_roch":-0.47,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.21,"perols_etang_de_l_or":0.07,"albert_1er_cathedrale":-0.38,"saint_guilhem_courreau":-0.26,"sud_de_france":-0.03,"comedie_baudin":0.0,"jean_de_beins":-0.06},"gambetta":{"rue_jules_ferry_gare_saint_roch":-0.41,"comedie":0.21,"hotel_de_ville":0.2,"corum":-0.22,"place_albert_1er_st_charles":0.22,"foch":0.01,"halles_castellane":0.0,"observatoire":0.02,"rondelet":-0.59,"plan_cabanes":-0.45,"boutonnet":0.08,"emile_combes":0.0,"beaux_arts":-0.42,"les_aubes":-0.41,"antigone_centre":-0.03,"mediatheque_emile_zola":-0.43,"nombre_d_or":-0.48,"louis_blanc":-0.03,"gambetta":-0.26,"port_marianne":0.07,"les_arceaux":-0.38,"cite_mion":0.27,"nouveau_saint_roch":-0.15,"renouvier":0.09,"odysseum":0.0,"saint_denis":0.0,"richter":0.16,"charles_flahault":0.77,"voltaire":-0.03,"pres_d_arenes":-0.1,"garcia_lorca":-0.39,"vert_bois":0.1,"malbosc":0.1,"occitanie":-0.29,"facdessciences":0.64,"fac_de_lettres":0.38,"aiguelongue":-0.1,"jeu_de_mail_des_abbes":0.68,"euromedecine":0.31,"marie_caizergues":0.49,"sabines":0.35,"celleneuve":-0.24,"jardin_de_la_lironde":0.23,"pere_soulas":-0.16,"place_viala":-0.59,"hotel_du_departement":-0.44,"tonnelles":0.29,"parvis_jules_ferry_gare_saint_roch":0.02,"pont_de_lattes_gare_saint_roch":-0.12,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.07,"perols_etang_de_l_or":-0.32,"albert_1er_cathedrale":0.07,"saint_guilhem_courreau":0.22,"sud_de_france":0.2,"comedie_baudin":0.0,"jean_de_beins":0.63},"gare":{"rue_jules_ferry_gare_saint_roch":-0.3,"comedie":-0.11,"hotel_de_ville":0.04,"corum":-0.28,"place_albert_1er_st_charles":0.3,"foch":0.11,"halles_castellane":0.0,"observatoire":-0.31,"rondelet":-0.3,"plan_cabanes":-0.28,"boutonnet":-0.08,"emile_combes":-0.17,"beaux_arts":-0.31,"les_aubes":-0.37,"antigone_centre":0.05,"mediatheque_emile_zola":-0.07,"nombre_d_or":0.09,"louis_blanc":0.05,"gambetta":0.17,"port_marianne":0.14,"les_arceaux":-0.32,"cite_mion":0.17,"nouveau_saint_roch":0.32,"renouvier":0.18,"odysseum":0.0,"saint_denis":0.0,"richter":0.27,"charles_flahault":0.17,"voltaire":-0.01,"pres_d_arenes":0.04,"garcia_lorca":-0.18,"vert_bois":-0.07,"malbosc":-0.13,"occitanie":-0.22,"facdessciences":0.53,"fac_de_lettres":0.09,"aiguelongue":-0.15,"jeu_de_mail_des_abbes":0.39,"euromedecine":0.16,"marie_caizergues":0.3,"sabines":-0.04,"celleneuve":-0.27,"jardin_de_la_lironde":0.23,"pere_soulas":-0.12,"place_viala":0.02,"hotel_du_departement":-0.2,"tonnelles":0.09,"parvis_jules_ferry_gare_saint_roch":0.36,"pont_de_lattes_gare_saint_roch":-0.23,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.05,"perols_etang_de_l_or":0.17,"albert_1er_cathedrale":-0.34,"saint_guilhem_courreau":0.13,"sud_de_france":0.29,"comedie_baudin":0.0,"jean_de_beins":0.11},"triangle":{"rue_jules_ferry_gare_saint_roch":0.01,"comedie":0.21,"hotel_de_ville":-0.19,"corum":0.23,"place_albert_1er_st_charles":-0.24,"foch":0.31,"halles_castellane":0.0,"observatoire":-0.02,"rondelet":0.12,"plan_cabanes":0.17,"boutonnet":-0.25,"emile_combes":0.37,"beaux_arts":-0.17,"les_aubes":-0.11,"antigone_centre":0.09,"mediatheque_emile_zola":0.07,"nombre_d_or":0.1,"louis_blanc":0.43,"gambetta":0.45,"port_marianne":-0.16,"les_arceaux":0.05,"cite_mion":0.25,"nouveau_saint_roch":0.1,"renouvier":0.15,"odysseum":0.0,"saint_denis":0.0,"richter":-0.07,"charles_flahault":-0.03,"voltaire":0.28,"pres_d_arenes":-0.22,"garcia_lorca":0.2,"vert_bois":0.23,"malbosc":0.29,"occitanie":-0.37,"facdessciences":0.03,"fac_de_lettres":-0.19,"aiguelongue":0.16,"jeu_de_mail_des_abbes":0.01,"euromedecine":0.02,"marie_caizergues":0.03,"sabines":0.23,"celleneuve":0.25,"jardin_de_la_lironde":-0.18,"pere_soulas":-0.19,"place_viala":-0.01,"hotel_du_departement":0.27,"tonnelles":0.34,"parvis_jules_ferry_gare_saint_roch":-0.2,"pont_de_lattes_gare_saint_roch":0.02,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.38,"perols_etang_de_l_or":0.3,"albert_1er_cathedrale":-0.16,"saint_guilhem_courreau":0.24,"sud_de_france":0.36,"comedie_baudin":0.0,"jean_de_beins":-0.28},"pitot":{"rue_jules_ferry_gare_saint_roch":-0.1,"comedie":0.2,"hotel_de_ville":-0.18,"corum":0.26,"place_albert_1er_st_charles":-0.2,"foch":0.22,"halles_castellane":0.0,"observatoire":0.06,"rondelet":0.02,"plan_cabanes":0.13,"boutonnet":-0.16,"emile_combes":0.25,"beaux_arts":-0.11,"les_aubes":-0.12,"antigone_centre":0.16,"mediatheque_emile_zola":-0.06,"nombre_d_or":0.14,"louis_blanc":0.31,"gambetta":0.36,"port_marianne":-0.14,"les_arceaux":-0.02,"cite_mion":0.14,"nouveau_saint_roch":0.07,"renouvier":0.12,"odysseum":0.0,"saint_denis":0.0,"richter":0.0,"charles_flahault":0.04,"voltaire":0.22,"pres_d_arenes":-0.2,"garcia_lorca":0.23,"vert_bois":0.15,"malbosc":0.17,"occitanie":-0.35,"facdessciences":0.13,"fac_de_lettres":-0.19,"aiguelongue":0.17,"jeu_de_mail_des_abbes":-0.01,"euromedecine":-0.06,"marie_caizergues":0.01,"sabines":0.12,"celleneuve":0.18,"jardin_de_la_lironde":-0.1,"pere_soulas":0.13,"place_viala":0.05,"hotel_du_departement":0.19,"tonnelles":0.3,"parvis_jules_ferry_gare_saint_roch":-0.14,"pont_de_lattes_gare_saint_roch":-0.03,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.17,"perols_etang_de_l_or":0.22,"albert_1er_cathedrale":-0.19,"saint_guilhem_courreau":0.21,"sud_de_france":0.23,"comedie_baudin":0.0,"jean_de_beins":-0.21},"circe":{"rue_jules_ferry_gare_saint_roch":-0.21,"comedie":0.02,"hotel_de_ville":0.06,"corum":-0.12,"place_albert_1er_st_charles":0.1,"foch":0.09,"halles_castellane":0.0,"observatoire":-0.16,"rondelet":-0.23,"plan_cabanes":-0.22,"boutonnet":-0.09,"emile_combes":-0.04,"beaux_arts":-0.4,"les_aubes":-0.22,"antigone_centre":0.15,"mediatheque_emile_zola":0.05,"nombre_d_or":-0.07,"louis_blanc":0.16,"gambetta":0.2,"port_marianne":0.12,"les_arceaux":-0.33,"cite_mion":0.26,"nouveau_saint_roch":0.31,"renouvier":0.02,"odysseum":0.0,"saint_denis":0.0,"richter":0.3,"charles_flahault":0.24,"voltaire":0.12,"pres_d_arenes":-0.03,"garcia_lorca":-0.22,"vert_bois":-0.04,"malbosc":0.03,"occitanie":-0.27,"facdessciences":0.45,"fac_de_lettres":0.12,"aiguelongue":-0.1,"jeu_de_mail_des_abbes":0.41,"euromedecine":0.08,"marie_caizergues":0.32,"sabines":0.05,"celleneuve":-0.25,"jardin_de_la_lironde":0.17,"pere_soulas":-0.13,"place_viala":-0.08,"hotel_du_departement":-0.19,"tonnelles":0.11,"parvis_jules_ferry_gare_saint_roch":0.25,"pont_de_lattes_gare_saint_roch":-0.12,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.02,"perols_etang_de_l_or":0.27,"albert_1er_cathedrale":-0.26,"saint_guilhem_courreau":0.14,"sud_de_france":0.38,"comedie_baudin":0.0,"jean_de_beins":0.07},"garcia_lorca":{"rue_jules_ferry_gare_saint_roch":-0.18,"comedie":-0.26,"hotel_de_ville":0.4,"corum":-0.23,"place_albert_1er_st_charles":0.21,"foch":-0.21,"halles_castellane":0.0,"observatoire":-0.08,"rondelet":-0.26,"plan_cabanes":-0.43,"boutonnet":0.18,"emile_combes":-0.32,"beaux_arts":-0.18,"les_aubes":0.02,"antigone_centre":0.04,"mediatheque_emile_zola":0.04,"nombre_d_or":-0.26,"louis_blanc":-0.16,"gambetta":0.01,"port_marianne":0.51,"les_arceaux":-0.34,"cite_mion":0.01,"nouveau_saint_roch":0.17,"renouvier":-0.26,"odysseum":0.0,"saint_denis":0.0,"richter":0.36,"charles_flahault":0.23,"voltaire":0.05,"pres_d_arenes":0.2,"garcia_lorca":-0.33,"vert_bois":-0.15,"malbosc":-0.12,"occitanie":0.05,"facdessciences":0.36,"fac_de_lettres":0.43,"aiguelongue":-0.26,"jeu_de_mail_des_abbes":0.37,"euromedecine":0.03,"marie_caizergues":0.32,"sabines":-0.22,"celleneuve":-0.38,"jardin_de_la_lironde":0.28,"pere_soulas":-0.01,"place_viala":-0.13,"hotel_du_departement":-0.43,"tonnelles":-0.2,"parvis_jules_ferry_gare_saint_roch":0.34,"pont_de_lattes_gare_saint_roch":-0.36,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.26,"perols_etang_de_l_or":0.03,"albert_1er_cathedrale":-0.23,"saint_guilhem_courreau":-0.18,"sud_de_france":0.02,"comedie_baudin":0.0,"jean_de_beins":0.18},"mosson":{"rue_jules_ferry_gare_saint_roch":0.0,"comedie":0.1,"hotel_de_ville":-0.03,"corum":0.18,"place_albert_1er_st_charles":-0.07,"foch":0.18,"halles_castellane":0.0,"observatoire":0.06,"rondelet":0.04,"plan_cabanes":0.1,"boutonnet":-0.02,"emile_combes":0.16,"beaux_arts":-0.04,"les_aubes":-0.02,"antigone_centre":0.1,"mediatheque_emile_zola":-0.16,"nombre_d_or":-0.01,"louis_blanc":0.09,"gambetta":0.26,"port_marianne":-0.03,"les_arceaux":0.09,"cite_mion":0.06,"nouveau_saint_roch":-0.14,"renouvier":0.11,"odysseum":0.0,"saint_denis":0.0,"richter":-0.14,"charles_flahault":0.09,"voltaire":0.29,"pres_d_arenes":0.06,"garcia_lorca":0.15,"vert_bois":0.21,"malbosc":0.26,"occitanie":-0.17,"facdessciences":0.02,"fac_de_lettres":-0.13,"aiguelongue":0.18,"jeu_de_mail_des_abbes":-0.0,"euromedecine":-0.15,"marie_caizergues":0.02,"sabines":0.17,"celleneuve":0.17,"jardin_de_la_lironde":-0.16,"pere_soulas":-0.17,"place_viala":-0.17,"hotel_du_departement":0.07,"tonnelles":0.2,"parvis_jules_ferry_gare_saint_roch":-0.15,"pont_de_lattes_gare_saint_roch":0.06,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.11,"perols_etang_de_l_or":0.07,"albert_1er_cathedrale":-0.11,"saint_guilhem_courreau":0.15,"sud_de_france":0.01,"comedie_baudin":0.0,"jean_de_beins":-0.03},"sabines":{"rue_jules_ferry_gare_saint_roch":-0.21,"comedie":0.34,"hotel_de_ville":-0.29,"corum":0.21,"place_albert_1er_st_charles":-0.1,"foch":0.31,"halles_castellane":0.0,"observatoire":0.1,"rondelet":0.08,"plan_cabanes":0.15,"boutonnet":-0.35,"emile_combes":0.34,"beaux_arts":-0.29,"les_aubes":-0.29,"antigone_centre":0.12,"mediatheque_emile_zola":0.06,"nombre_d_or":-0.03,"louis_blanc":0.54,"gambetta":0.38,"port_marianne":-0.21,"les_arceaux":0.03,"cite_mion":0.38,"nouveau_saint_roch":0.22,"renouvier":0.21,"odysseum":0.0,"saint_denis":0.0,"richter":0.06,"charles_flahault":0.08,"voltaire":0.21,"pres_d_arenes":-0.38,"garcia_lorca":0.17,"vert_bois":0.27,"malbosc":0.3,"occitanie":-0.45,"facdessciences":0.13,"fac_de_lettres":-0.23,"aiguelongue":0.1,"jeu_de_mail_des_abbes":0.13,"euromedecine":-0.08,"marie_caizergues":0.02,"sabines":0.24,"celleneuve":0.21,"jardin_de_la_lironde":-0.23,"pere_soulas":-0.26,"place_viala":-0.05,"hotel_du_departement":0.31,"tonnelles":0.45,"parvis_jules_ferry_gare_saint_roch":-0.12,"pont_de_lattes_gare_saint_roch":-0.07,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.4,"perols_etang_de_l_or":0.48,"albert_1er_cathedrale":-0.11,"saint_guilhem_courreau":0.39,"sud_de_france":0.4,"comedie_baudin":0.0,"jean_de_beins":-0.33},"sablassou":{"rue_jules_ferry_gare_saint_roch":-0.29,"comedie":-0.39,"hotel_de_ville":0.51,"corum":-0.35,"place_albert_1er_st_charles":0.32,"foch":-0.17,"halles_castellane":0.0,"observatoire":-0.22,"rondelet":-0.4,"plan_cabanes":-0.49,"boutonnet":0.06,"emile_combes":-0.45,"beaux_arts":-0.2,"les_aubes":0.03,"antigone_centre":0.07,"mediatheque_emile_zola":0.04,"nombre_d_or":-0.28,"louis_blanc":-0.2,"gambetta":-0.12,"port_marianne":0.56,"les_arceaux":-0.54,"cite_mion":-0.03,"nouveau_saint_roch":0.31,"renouvier":-0.23,"odysseum":0.0,"saint_denis":0.0,"richter":0.61,"charles_flahault":0.21,"voltaire":-0.04,"pres_d_arenes":0.37,"garcia_lorca":-0.49,"vert_bois":-0.33,"malbosc":-0.13,"occitanie":0.09,"facdessciences":0.41,"fac_de_lettres":0.52,"aiguelongue":-0.35,"jeu_de_mail_des_abbes":0.43,"euromedecine":0.14,"marie_caizergues":0.42,"sabines":-0.27,"celleneuve":-0.56,"jardin_de_la_lironde":0.47,"pere_soulas":0.01,"place_viala":-0.12,"hotel_du_departement":-0.55,"tonnelles":-0.31,"parvis_jules_ferry_gare_saint_roch":0.48,"pont_de_lattes_gare_saint_roch":-0.28,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.24,"perols_etang_de_l_or":0.02,"albert_1er_cathedrale":-0.21,"saint_guilhem_courreau":-0.15,"sud_de_france":0.06,"comedie_baudin":0.0,"jean_de_beins":0.31},"saint_jean_le_sec":{"rue_jules_ferry_gare_saint_roch":-0.16,"comedie":-0.17,"hotel_de_ville":0.29,"corum":-0.12,"place_albert_1er_st_charles":0.11,"foch":-0.07,"halles_castellane":0.0,"observatoire":-0.02,"rondelet":-0.12,"plan_cabanes":-0.22,"boutonnet":0.05,"emile_combes":-0.13,"beaux_arts":-0.1,"les_aubes":0.09,"antigone_centre":0.21,"mediatheque_emile_zola":0.12,"nombre_d_or":-0.15,"louis_blanc":-0.04,"gambetta":0.11,"port_marianne":0.3,"les_arceaux":-0.26,"cite_mion":0.04,"nouveau_saint_roch":0.21,"renouvier":-0.23,"odysseum":0.0,"saint_denis":0.0,"richter":0.33,"charles_flahault":0.12,"voltaire":0.15,"pres_d_arenes":0.13,"garcia_lorca":-0.13,"vert_bois":-0.09,"malbosc":0.05,"occitanie":-0.02,"facdessciences":0.17,"fac_de_lettres":0.23,"aiguelongue":-0.15,"jeu_de_mail_des_abbes":0.15,"euromedecine":0.06,"marie_caizergues":0.3,"sabines":-0.14,"celleneuve":-0.18,"jardin_de_la_lironde":0.19,"pere_soulas":0.04,"place_viala":-0.1,"hotel_du_departement":-0.23,"tonnelles":-0.09,"parvis_jules_ferry_gare_saint_roch":0.14,"pont_de_lattes_gare_saint_roch":-0.25,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.04,"perols_etang_de_l_or":0.21,"albert_1er_cathedrale":-0.2,"saint_guilhem_courreau":-0.16,"sud_de_france":0.08,"comedie_baudin":0.0,"jean_de_beins":0.02},"euromedecine":{"rue_jules_ferry_gare_saint_roch":-0.09,"comedie":0.5,"hotel_de_ville":-0.47,"corum":0.39,"place_albert_1er_st_charles":-0.28,"foch":0.42,"halles_castellane":0.0,"observatoire":0.24,"rondelet":0.25,"plan_cabanes":0.41,"boutonnet":-0.35,"emile_combes":0.55,"beaux_arts":-0.27,"les_aubes":-0.23,"antigone_centre":0.18,"mediatheque_emile_zola":0.08,"nombre_d_or":0.02,"louis_blanc":0.61,"gambetta":0.47,"port_marianne":-0.47,"les_arceaux":0.23,"cite_mion":0.47,"nouveau_saint_roch":0.09,"renouvier":0.32,"odysseum":0.0,"saint_denis":0.0,"richter":-0.27,"charles_flahault":0.07,"voltaire":0.39,"pres_d_arenes":-0.55,"garcia_lorca":0.39,"vert_bois":0.48,"malbosc":0.48,"occitanie":-0.58,"facdessciences":-0.01,"fac_de_lettres":-0.48,"aiguelongue":0.32,"jeu_de_mail_des_abbes":-0.06,"euromedecine":-0.21,"marie_caizergues":-0.04,"sabines":0.41,"celleneuve":0.49,"jardin_de_la_lironde":-0.47,"pere_soulas":-0.28,"place_viala":-0.04,"hotel_du_departement":0.53,"tonnelles":0.65,"parvis_jules_ferry_gare_saint_roch":-0.4,"pont_de_lattes_gare_saint_roch":0.07,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.51,"perols_etang_de_l_or":0.54,"albert_1er_cathedrale":-0.09,"saint_guilhem_courreau":0.44,"sud_de_france":0.46,"comedie_baudin":0.0,"jean_de_beins":-0.44},"occitanie":{"rue_jules_ferry_gare_saint_roch":-0.18,"comedie":-0.12,"hotel_de_ville":0.22,"corum":-0.07,"place_albert_1er_st_charles":0.06,"foch":0.04,"halles_castellane":0.0,"observatoire":-0.02,"rondelet":-0.12,"plan_cabanes":-0.13,"boutonnet":0.01,"emile_combes":-0.09,"beaux_arts":-0.18,"les_aubes":0.06,"antigone_centre":0.17,"mediatheque_emile_zola":0.13,"nombre_d_or":-0.17,"louis_blanc":0.02,"gambetta":0.17,"port_marianne":0.23,"les_arceaux":-0.22,"cite_mion":0.09,"nouveau_saint_roch":0.21,"renouvier":-0.11,"odysseum":0.0,"saint_denis":0.0,"richter":0.22,"charles_flahault":0.13,"voltaire":0.26,"pres_d_arenes":0.04,"garcia_lorca":-0.06,"vert_bois":0.0,"malbosc":0.09,"occitanie":-0.14,"facdessciences":0.22,"fac_de_lettres":0.12,"aiguelongue":-0.06,"jeu_de_mail_des_abbes":0.18,"euromedecine":-0.04,"marie_caizergues":0.33,"sabines":-0.06,"celleneuve":-0.1,"jardin_de_la_lironde":0.13,"pere_soulas":-0.01,"place_viala":-0.09,"hotel_du_departement":-0.15,"tonnelles":0.02,"parvis_jules_ferry_gare_saint_roch":0.07,"pont_de_lattes_gare_saint_roch":-0.22,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.01,"perols_etang_de_l_or":0.26,"albert_1er_cathedrale":-0.28,"saint_guilhem_courreau":-0.06,"sud_de_france":0.2,"comedie_baudin":0.0,"jean_de_beins":-0.04},"vicarello":{"rue_jules_ferry_gare_saint_roch":-0.02,"comedie":0.13,"hotel_de_ville":-0.14,"corum":0.12,"place_albert_1er_st_charles":-0.2,"foch":0.15,"halles_castellane":0.0,"observatoire":0.03,"rondelet":0.09,"plan_cabanes":0.22,"boutonnet":-0.08,"emile_combes":0.19,"beaux_arts":-0.03,"les_aubes":0.05,"antigone_centre":0.07,"mediatheque_emile_zola":0.08,"nombre_d_or":-0.04,"louis_blanc":0.2,"gambetta":0.14,"port_marianne":-0.18,"les_arceaux":0.14,"cite_mion":0.14,"nouveau_saint_roch":0.03,"renouvier":0.08,"odysseum":0.0,"saint_denis":0.0,"richter":-0.17,"charles_flahault":0.01,"voltaire":0.19,"pres_d_arenes":-0.19,"garcia_lorca":0.19,"vert_bois":0.08,"malbosc":0.13,"occitanie":-0.09,"facdessciences":-0.12,"fac_de_lettres":-0.19,"aiguelongue":0.08,"jeu_de_mail_des_abbes":-0.11,"euromedecine":-0.04,"marie_caizergues":-0.04,"sabines":0.11,"celleneuve":0.24,"jardin_de_la_lironde":-0.17,"pere_soulas":-0.08,"place_viala":-0.08,"hotel_du_departement":0.23,"tonnelles":0.21,"parvis_jules_ferry_gare_saint_roch":-0.23,"pont_de_lattes_gare_saint_roch":-0.0,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.21,"perols_etang_de_l_or":0.2,"albert_1er_cathedrale":-0.03,"saint_guilhem_courreau":0.08,"sud_de_france":0.12,"comedie_baudin":0.0,"jean_de_beins":-0.21},"gaumont_est":{"rue_jules_ferry_gare_saint_roch":-0.24,"comedie":0.53,"hotel_de_ville":-0.38,"corum":0.26,"place_albert_1er_st_charles":0.15,"foch":-0.02,"halles_castellane":0.0,"observatoire":0.22,"rondelet":-0.03,"plan_cabanes":-0.23,"boutonnet":-0.01,"emile_combes":0.42,"beaux_arts":-0.04,"les_aubes":-0.62,"antigone_centre":-0.2,"mediatheque_emile_zola":-0.22,"nombre_d_or":-0.04,"louis_blanc":0.6,"gambetta":0.14,"port_marianne":-0.27,"les_arceaux":0.2,"cite_mion":0.17,"nouveau_saint_roch":-0.06,"renouvier":0.18,"odysseum":0.0,"saint_denis":0.0,"richter":-0.11,"charles_flahault":0.19,"voltaire":-0.39,"pres_d_arenes":-0.56,"garcia_lorca":0.17,"vert_bois":0.23,"malbosc":0.01,"occitanie":-0.15,"facdessciences":0.12,"fac_de_lettres":-0.11,"aiguelongue":-0.28,"jeu_de_mail_des_abbes":0.17,"euromedecine":0.21,"marie_caizergues":-0.27,"sabines":0.26,"celleneuve":0.12,"jardin_de_la_lironde":-0.08,"pere_soulas":-0.32,"place_viala":-0.19,"hotel_du_departement":0.2,"tonnelles":0.35,"parvis_jules_ferry_gare_saint_roch":-0.02,"pont_de_lattes_gare_saint_roch":-0.27,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.21,"perols_etang_de_l_or":-0.01,"albert_1er_cathedrale":0.32,"saint_guilhem_courreau":0.38,"sud_de_france":-0.01,"comedie_baudin":0.0,"jean_de_beins":-0.01}};

const map = L.map('map').setView([43.6107, 3.8767], 13);
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '©OpenStreetMap, ©CartoDB' }).addTo(map);

let exportDataP = [];
let exportDataV = [];

// --- FONCTION DE NETTOYAGE ---
const cleanFileName = (name) => {
    if (!name) return "";
    let s = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
    s = s.replace(/[^a-z0-9]/g, "_"); // Tout ce qui n'est pas lettre/chiffre devient _
    while(s.includes("__")) { s = s.replace("__", "_"); }
    if(s.startsWith("_")) s = s.substring(1);
    if(s.endsWith("_")) s = s.substring(0, s.length-1);
    return s;
};

// --- API ---
async function init() {
    const statusDiv = document.getElementById('api-status');
    try {
        const [resP, resV] = await Promise.all([
            fetch('https://portail-api-data.montpellier3m.fr/offstreetparking?limit=1000'),
            fetch('https://portail-api-data.montpellier3m.fr/bikestation?limit=1000')
        ]);
        const rawP = await resP.json();
        const rawV = await resV.json();
        processData(rawP, rawV);
        statusDiv.innerHTML = '<i class="fas fa-check-circle"></i> Données synchronisées';
        statusDiv.classList.add('ok');
    } catch (e) {
        console.error(e);
        statusDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Erreur API';
    }
}

function processData(rawP, rawV) {
    let totalP_Libre = 0; let totalV_Dispo = 0;
    const tbody = document.getElementById('table-body');
    if(tbody) tbody.innerHTML = ''; 

    rawP.forEach(p => {
        const nom = p.name?.value;
        if (nom && TARGET_PARKINGS.some(target => nom.includes(target)) && p.location) {
            const libre = p.availableSpotNumber?.value || 0;
            const total = p.totalSpotNumber?.value || 0;
            const lat = p.location.value.coordinates[1];
            const lon = p.location.value.coordinates[0];
            const percent = total > 0 ? (libre / total) : 0;
            const color = percent < 0.1 ? '#c0392b' : '#27ae60';
            L.circleMarker([lat, lon], { radius: 8, color: '#fff', fillColor: color, fillOpacity: 0.9, weight: 1 })
             .bindPopup(`<b>🚗 ${nom}</b><br>Libres: ${libre}/${total}`).addTo(map);
            exportDataP.push({ Nom: nom, Libre: libre, Total: total, Saturation: Math.round((1-percent)*100) + '%' });
            addTableRow(nom, "Parking", libre, total, percent < 0.1 ? "Saturé" : "Ouvert");
            totalP_Libre += libre;
        }
    });

    rawV.forEach(v => {
        const address = v.address?.value?.streetAddress;
        if (address && TARGET_VELOS.some(target => address.includes(target)) && v.location) {
            const velos = v.availableBikeNumber?.value || 0;
            const slots = v.freeSlotNumber?.value || 0;
            const lat = v.location.value.coordinates[1];
            const lon = v.location.value.coordinates[0];
            L.circleMarker([lat, lon], { radius: 5, color: '#fff', fillColor: '#3498db', fillOpacity: 0.8, weight: 1 })
             .bindPopup(`<b>🚲 ${address}</b><br>Vélos: ${velos} | Places: ${slots}`).addTo(map);
            exportDataV.push({ Station: address, Velos_Dispos: velos, Bornes_Vides: slots });
            addTableRow(address, "Vélo", velos, velos+slots, "Actif");
            totalV_Dispo += velos;
        }
    });

    const kpiP = document.getElementById('kpi-parking');
    const kpiV = document.getElementById('kpi-velo');
    if(kpiP) kpiP.innerText = totalP_Libre;
    if(kpiV) kpiV.innerText = totalV_Dispo;
}

function addTableRow(nom, type, dispo, total, statut) {
    const tbody = document.getElementById('table-body');
    if(!tbody) return;
    tbody.innerHTML += `<tr><td>${nom}</td><td>${type}</td><td><strong>${dispo}</strong></td><td>${total}</td><td>${statut}</td></tr>`;
}

// --- GALERIE ---
function generateGallery() {
    const galleryContainer = document.getElementById('auto-gallery');
    if (!galleryContainer) return;
    galleryContainer.innerHTML = ''; 
    TARGET_PARKINGS.forEach(nom => galleryContainer.innerHTML += createCard(nom, "🚗", `images/graphe_${cleanFileName(nom)}.png`));
    TARGET_VELOS.forEach(nom => galleryContainer.innerHTML += createCard(nom, "🚲", `images/graphe_${cleanFileName(nom)}_velo.png`));
}

function createCard(nom, icon, fileName) {
    return `
        <div class="graph-item">
            <h4>${icon} ${nom}</h4>
            <div class="img-wrapper">
                <img src="${fileName}" alt="Graphe ${nom}" onclick="window.open(this.src, '_blank')"
                     onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'missing-img\'><i class=\'fas fa-bug\'></i><br>Fichier attendu :<br><small>${fileName}</small></div>';">
            </div>
        </div>
    `;
}

// --- COMPARATEUR AVEC CORRÉLATION ---
function initComparator() {
    const selP = document.getElementById('select-parking');
    const selV = document.getElementById('select-velo');
    if(!selP || !selV) return;

    TARGET_PARKINGS.sort().forEach(nom => {
        const opt = document.createElement('option'); opt.value = nom; opt.innerText = nom; selP.appendChild(opt);
    });
    TARGET_VELOS.sort().forEach(nom => {
        const opt = document.createElement('option'); opt.value = nom; opt.innerText = nom; selV.appendChild(opt);
    });

    selP.value = "Antigone"; 
    selV.value = "Antigone centre"; 
    updateComparator();
}

function updateComparator() {
    const parkingName = document.getElementById('select-parking').value;
    const veloName = document.getElementById('select-velo').value;

    const fileP = `images/graphe_${cleanFileName(parkingName)}.png`;
    const fileV = `images/graphe_${cleanFileName(veloName)}_velo.png`;

    document.getElementById('title-parking-selected').innerHTML = `🚗 ${parkingName}`;
    document.getElementById('title-velo-selected').innerHTML = `🚲 ${veloName}`;

    // Images
    const wrapperP = document.getElementById('wrapper-parking');
    const wrapperV = document.getElementById('wrapper-velo');

    if(wrapperP) {
        wrapperP.innerHTML = `<img src="${fileP}" alt="${parkingName}" class="compare-img"
            onclick="window.open(this.src, '_blank')"
            onerror="this.parentElement.innerHTML='<div class=\\'missing-img\\'><i class=\\'fas fa-bug\\'></i><br>Image introuvable<br><small>${fileP}</small></div>';">`;
    }
    if(wrapperV) {
        wrapperV.innerHTML = `<img src="${fileV}" alt="${veloName}" class="compare-img"
            onclick="window.open(this.src, '_blank')"
            onerror="this.parentElement.innerHTML='<div class=\\'missing-img\\'><i class=\\'fas fa-bug\\'></i><br>Image introuvable<br><small>${fileV}</small></div>';">`;
    }

    // INDICATEUR DE CORRÉLATION
    const pKey = cleanFileName(parkingName);
    const vKey = cleanFileName(veloName);
    
    const corrBox = document.getElementById('correlation-value');
    const corrText = document.getElementById('correlation-text');
    
    if(corrBox) {
        corrBox.className = 'correlation-value'; // Reset classes
        
        // Recherche dans les données
        if (CORRELATION_DATA[pKey] && CORRELATION_DATA[pKey][vKey] !== undefined) {
            const val = CORRELATION_DATA[pKey][vKey];
            corrBox.innerText = val > 0 ? "+" + val : val;
            
            let classe = 'corr-null';
            let explication = "Aucun lien significatif détecté.";

            if (val >= 0.5) {
                classe = 'corr-high-pos'; explication = "🔥 Forte Corrélation Positive : Ils se remplissent ensemble.";
            } else if (val > 0.1) {
                classe = 'corr-pos'; explication = "📈 Corrélation Positive : Tendance à évoluer dans le même sens.";
            } else if (val <= -0.5) {
                classe = 'corr-high-neg'; explication = "❄️ Forte Corrélation Inverse : Quand l'un se remplit, l'autre se vide.";
            } else if (val < -0.1) {
                classe = 'corr-neg'; explication = "📉 Corrélation Négative : Tendance à l'opposition.";
            }

            corrBox.classList.add(classe);
            corrText.innerText = explication;
        } else {
            corrBox.innerText = "--";
            corrBox.classList.add('corr-null');
            corrText.innerText = "Données non disponibles pour ce couple.";
        }
    }
}

// --- NAVIGATION & EXPORT ---
function switchTab(tabId) {
    document.querySelectorAll('.tab-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.sidebar li').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    const items = document.querySelectorAll('.sidebar li');
    if(tabId === 'dashboard') items[0].classList.add('active');
    if(tabId === 'graphs') items[1].classList.add('active');
    if(tabId === 'export') items[2].classList.add('active');
    if(tabId === 'dashboard') { setTimeout(() => map.invalidateSize(), 100); }
}

function downloadCSV(type) {
    const data = type === 'parking' ? exportDataP : exportDataV;
    if (!data.length) return alert("Aucune donnée disponible.");
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(';')];
    for (const row of data) csvRows.push(headers.map(h => `"${row[h]}"`).join(';'));
    const blob = new Blob(["\uFEFF" + csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Rapport_${type}.csv`;
    document.body.appendChild(link); link.click(); document.body.removeChild(link);
}

// LANCEMENT
init();
generateGallery();
initComparator();