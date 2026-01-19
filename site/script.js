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
// ⚠️ IMPORTANT : GARDE TON GROS BLOC JSON ICI ! Je mets juste un exemple pour que le code soit complet.
const CORRELATION_DATA = {"antigone":{"rue_jules_ferry_gare_saint_roch":0.11,"comedie":0.01,"hotel_de_ville":0.01,"corum":0.17,"place_albert_1er_st_charles":-0.46,"foch":0.4,"halles_castellane":0.0,"observatoire":0.0,"rondelet":-0.05,"plan_cabanes":0.28,"boutonnet":-0.08,"emile_combes":0.27,"beaux_arts":-0.17,"les_aubes":0.26,"antigone_centre":0.01,"mediatheque_emile_zola":0.03,"nombre_d_or":-0.03,"louis_blanc":0.08,"gambetta":0.31,"port_marianne":-0.01,"les_arceaux":-0.1,"cite_mion":0.1,"nouveau_saint_roch":-0.1,"renouvier":0.16,"odysseum":0.0,"saint_denis":0.0,"richter":-0.25,"charles_flahault":0.11,"voltaire":0.49,"pres_d_arenes":0.01,"garcia_lorca":0.17,"vert_bois":0.16,"malbosc":0.35,"occitanie":-0.37,"facdessciences":0.01,"fac_de_lettres":-0.13,"aiguelongue":0.35,"jeu_de_mail_des_abbes":-0.11,"euromedecine":-0.12,"marie_caizergues":0.21,"sabines":0.26,"celleneuve":0.27,"jardin_de_la_lironde":-0.09,"pere_soulas":0.12,"place_viala":-0.15,"hotel_du_departement":0.1,"tonnelles":0.26,"parvis_jules_ferry_gare_saint_roch":-0.41,"pont_de_lattes_gare_saint_roch":0.16,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.16,"perols_etang_de_l_or":0.08,"albert_1er_cathedrale":-0.17,"saint_guilhem_courreau":0.1,"sud_de_france":0.25,"comedie_baudin":0.0,"jean_de_beins":-0.12},"comedie":{"rue_jules_ferry_gare_saint_roch":-0.22,"comedie":0.16,"hotel_de_ville":-0.07,"corum":-0.04,"place_albert_1er_st_charles":0.04,"foch":0.18,"halles_castellane":0.0,"observatoire":-0.05,"rondelet":-0.18,"plan_cabanes":-0.03,"boutonnet":-0.08,"emile_combes":0.15,"beaux_arts":-0.22,"les_aubes":-0.28,"antigone_centre":0.05,"mediatheque_emile_zola":-0.14,"nombre_d_or":-0.01,"louis_blanc":0.21,"gambetta":0.21,"port_marianne":-0.07,"les_arceaux":-0.11,"cite_mion":0.13,"nouveau_saint_roch":0.1,"renouvier":0.19,"odysseum":0.0,"saint_denis":0.0,"richter":0.06,"charles_flahault":0.24,"voltaire":0.2,"pres_d_arenes":-0.13,"garcia_lorca":0.09,"vert_bois":0.17,"malbosc":0.12,"occitanie":-0.31,"facdessciences":0.38,"fac_de_lettres":-0.07,"aiguelongue":0.1,"jeu_de_mail_des_abbes":0.25,"euromedecine":0.02,"marie_caizergues":0.28,"sabines":0.15,"celleneuve":0.06,"jardin_de_la_lironde":0.03,"pere_soulas":-0.01,"place_viala":-0.15,"hotel_du_departement":0.03,"tonnelles":0.33,"parvis_jules_ferry_gare_saint_roch":-0.04,"pont_de_lattes_gare_saint_roch":-0.18,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.06,"perols_etang_de_l_or":0.22,"albert_1er_cathedrale":-0.31,"saint_guilhem_courreau":0.22,"sud_de_france":0.28,"comedie_baudin":0.0,"jean_de_beins":-0.04},"corum":{"rue_jules_ferry_gare_saint_roch":-0.1,"comedie":0.18,"hotel_de_ville":-0.14,"corum":0.07,"place_albert_1er_st_charles":-0.04,"foch":0.24,"halles_castellane":0.0,"observatoire":0.05,"rondelet":0.03,"plan_cabanes":0.12,"boutonnet":-0.09,"emile_combes":0.22,"beaux_arts":-0.19,"les_aubes":-0.15,"antigone_centre":0.12,"mediatheque_emile_zola":0.05,"nombre_d_or":0.05,"louis_blanc":0.26,"gambetta":0.35,"port_marianne":-0.15,"les_arceaux":0.03,"cite_mion":0.2,"nouveau_saint_roch":0.13,"renouvier":0.17,"odysseum":0.0,"saint_denis":0.0,"richter":-0.05,"charles_flahault":0.09,"voltaire":0.3,"pres_d_arenes":-0.24,"garcia_lorca":0.23,"vert_bois":0.23,"malbosc":0.16,"occitanie":-0.33,"facdessciences":0.17,"fac_de_lettres":-0.25,"aiguelongue":0.17,"jeu_de_mail_des_abbes":0.06,"euromedecine":-0.08,"marie_caizergues":0.17,"sabines":0.14,"celleneuve":0.21,"jardin_de_la_lironde":-0.14,"pere_soulas":-0.04,"place_viala":-0.05,"hotel_du_departement":0.19,"tonnelles":0.33,"parvis_jules_ferry_gare_saint_roch":-0.16,"pont_de_lattes_gare_saint_roch":-0.1,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.15,"perols_etang_de_l_or":0.42,"albert_1er_cathedrale":-0.27,"saint_guilhem_courreau":0.19,"sud_de_france":0.31,"comedie_baudin":0.0,"jean_de_beins":-0.23},"gambetta":{"rue_jules_ferry_gare_saint_roch":-0.41,"comedie":0.21,"hotel_de_ville":0.2,"corum":-0.22,"place_albert_1er_st_charles":0.22,"foch":0.01,"halles_castellane":0.0,"observatoire":0.02,"rondelet":-0.59,"plan_cabanes":-0.45,"boutonnet":0.08,"emile_combes":0.0,"beaux_arts":-0.42,"les_aubes":-0.41,"antigone_centre":-0.03,"mediatheque_emile_zola":-0.43,"nombre_d_or":-0.48,"louis_blanc":-0.03,"gambetta":-0.26,"port_marianne":0.07,"les_arceaux":-0.38,"cite_mion":0.27,"nouveau_saint_roch":-0.15,"renouvier":0.09,"odysseum":0.0,"saint_denis":0.0,"richter":0.16,"charles_flahault":0.77,"voltaire":-0.03,"pres_d_arenes":-0.1,"garcia_lorca":-0.39,"vert_bois":0.1,"malbosc":0.1,"occitanie":-0.29,"facdessciences":0.64,"fac_de_lettres":0.38,"aiguelongue":-0.1,"jeu_de_mail_des_abbes":0.68,"euromedecine":0.31,"marie_caizergues":0.49,"sabines":0.35,"celleneuve":-0.24,"jardin_de_la_lironde":0.23,"pere_soulas":-0.16,"place_viala":-0.59,"hotel_du_departement":-0.44,"tonnelles":0.29,"parvis_jules_ferry_gare_saint_roch":0.02,"pont_de_lattes_gare_saint_roch":-0.12,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.07,"perols_etang_de_l_or":-0.32,"albert_1er_cathedrale":0.07,"saint_guilhem_courreau":0.22,"sud_de_france":0.2,"comedie_baudin":0.0,"jean_de_beins":0.63},"gare":{"rue_jules_ferry_gare_saint_roch":-0.3,"comedie":-0.11,"hotel_de_ville":0.04,"corum":-0.28,"place_albert_1er_st_charles":0.3,"foch":0.11,"halles_castellane":0.0,"observatoire":-0.31,"rondelet":-0.3,"plan_cabanes":-0.28,"boutonnet":-0.08,"emile_combes":-0.17,"beaux_arts":-0.31,"les_aubes":-0.37,"antigone_centre":0.05,"mediatheque_emile_zola":-0.07,"nombre_d_or":0.09,"louis_blanc":0.05,"gambetta":0.17,"port_marianne":0.14,"les_arceaux":-0.32,"cite_mion":0.17,"nouveau_saint_roch":0.32,"renouvier":0.18,"odysseum":0.0,"saint_denis":0.0,"richter":0.27,"charles_flahault":0.17,"voltaire":-0.01,"pres_d_arenes":0.04,"garcia_lorca":-0.18,"vert_bois":-0.07,"malbosc":-0.13,"occitanie":-0.22,"facdessciences":0.53,"fac_de_lettres":0.09,"aiguelongue":-0.15,"jeu_de_mail_des_abbes":0.39,"euromedecine":0.16,"marie_caizergues":0.3,"sabines":-0.04,"celleneuve":-0.27,"jardin_de_la_lironde":0.23,"pere_soulas":-0.12,"place_viala":0.02,"hotel_du_departement":-0.2,"tonnelles":0.09,"parvis_jules_ferry_gare_saint_roch":0.36,"pont_de_lattes_gare_saint_roch":-0.23,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.05,"perols_etang_de_l_or":0.17,"albert_1er_cathedrale":-0.34,"saint_guilhem_courreau":0.13,"sud_de_france":0.29,"comedie_baudin":0.0,"jean_de_beins":0.11},"sabines":{"rue_jules_ferry_gare_saint_roch":-0.21,"comedie":0.34,"hotel_de_ville":-0.29,"corum":0.21,"place_albert_1er_st_charles":-0.1,"foch":0.31,"halles_castellane":0.0,"observatoire":0.1,"rondelet":0.08,"plan_cabanes":0.15,"boutonnet":-0.35,"emile_combes":0.34,"beaux_arts":-0.29,"les_aubes":-0.29,"antigone_centre":0.12,"mediatheque_emile_zola":0.06,"nombre_d_or":-0.03,"louis_blanc":0.54,"gambetta":0.38,"port_marianne":-0.21,"les_arceaux":0.03,"cite_mion":0.38,"nouveau_saint_roch":0.22,"renouvier":0.21,"odysseum":0.0,"saint_denis":0.0,"richter":0.06,"charles_flahault":0.08,"voltaire":0.21,"pres_d_arenes":-0.38,"garcia_lorca":0.17,"vert_bois":0.27,"malbosc":0.3,"occitanie":-0.45,"facdessciences":0.13,"fac_de_lettres":-0.23,"aiguelongue":0.1,"jeu_de_mail_des_abbes":0.13,"euromedecine":-0.08,"marie_caizergues":0.02,"sabines":0.24,"celleneuve":0.21,"jardin_de_la_lironde":-0.23,"pere_soulas":-0.26,"place_viala":-0.05,"hotel_du_departement":0.31,"tonnelles":0.45,"parvis_jules_ferry_gare_saint_roch":-0.12,"pont_de_lattes_gare_saint_roch":-0.07,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.4,"perols_etang_de_l_or":0.48,"albert_1er_cathedrale":-0.11,"saint_guilhem_courreau":0.39,"sud_de_france":0.4,"comedie_baudin":0.0,"jean_de_beins":-0.33},"sablassou":{"rue_jules_ferry_gare_saint_roch":-0.29,"comedie":-0.39,"hotel_de_ville":0.51,"corum":-0.35,"place_albert_1er_st_charles":0.32,"foch":-0.17,"halles_castellane":0.0,"observatoire":-0.22,"rondelet":-0.4,"plan_cabanes":-0.49,"boutonnet":0.06,"emile_combes":-0.45,"beaux_arts":-0.2,"les_aubes":0.03,"antigone_centre":0.07,"mediatheque_emile_zola":0.04,"nombre_d_or":-0.28,"louis_blanc":-0.2,"gambetta":-0.12,"port_marianne":0.56,"les_arceaux":-0.54,"cite_mion":-0.03,"nouveau_saint_roch":0.31,"renouvier":-0.23,"odysseum":0.0,"saint_denis":0.0,"richter":0.61,"charles_flahault":0.21,"voltaire":-0.04,"pres_d_arenes":0.37,"garcia_lorca":-0.49,"vert_bois":-0.33,"malbosc":-0.13,"occitanie":0.09,"facdessciences":0.41,"fac_de_lettres":0.52,"aiguelongue":-0.35,"jeu_de_mail_des_abbes":0.43,"euromedecine":0.14,"marie_caizergues":0.42,"sabines":-0.27,"celleneuve":-0.56,"jardin_de_la_lironde":0.47,"pere_soulas":0.01,"place_viala":-0.12,"hotel_du_departement":-0.55,"tonnelles":-0.31,"parvis_jules_ferry_gare_saint_roch":0.48,"pont_de_lattes_gare_saint_roch":-0.28,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.24,"perols_etang_de_l_or":0.02,"albert_1er_cathedrale":-0.21,"saint_guilhem_courreau":-0.15,"sud_de_france":0.06,"comedie_baudin":0.0,"jean_de_beins":0.31},"saint_jean_le_sec":{"rue_jules_ferry_gare_saint_roch":-0.16,"comedie":-0.17,"hotel_de_ville":0.29,"corum":-0.12,"place_albert_1er_st_charles":0.11,"foch":-0.07,"halles_castellane":0.0,"observatoire":-0.02,"rondelet":-0.12,"plan_cabanes":-0.22,"boutonnet":0.05,"emile_combes":-0.13,"beaux_arts":-0.1,"les_aubes":0.09,"antigone_centre":0.21,"mediatheque_emile_zola":0.12,"nombre_d_or":-0.15,"louis_blanc":-0.04,"gambetta":0.11,"port_marianne":0.3,"les_arceaux":-0.26,"cite_mion":0.04,"nouveau_saint_roch":0.21,"renouvier":-0.23,"odysseum":0.0,"saint_denis":0.0,"richter":0.33,"charles_flahault":0.12,"voltaire":0.15,"pres_d_arenes":0.13,"garcia_lorca":-0.13,"vert_bois":-0.09,"malbosc":0.05,"occitanie":-0.02,"facdessciences":0.17,"fac_de_lettres":0.23,"aiguelongue":-0.15,"jeu_de_mail_des_abbes":0.15,"euromedecine":0.06,"marie_caizergues":0.3,"sabines":-0.14,"celleneuve":-0.18,"jardin_de_la_lironde":0.19,"pere_soulas":0.04,"place_viala":-0.1,"hotel_du_departement":-0.23,"tonnelles":-0.09,"parvis_jules_ferry_gare_saint_roch":0.14,"pont_de_lattes_gare_saint_roch":-0.25,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":-0.04,"perols_etang_de_l_or":0.21,"albert_1er_cathedrale":-0.2,"saint_guilhem_courreau":-0.16,"sud_de_france":0.08,"comedie_baudin":0.0,"jean_de_beins":0.02},"euromedecine":{"rue_jules_ferry_gare_saint_roch":-0.09,"comedie":0.5,"hotel_de_ville":-0.47,"corum":0.39,"place_albert_1er_st_charles":-0.28,"foch":0.42,"halles_castellane":0.0,"observatoire":0.24,"rondelet":0.25,"plan_cabanes":0.41,"boutonnet":-0.35,"emile_combes":0.55,"beaux_arts":-0.27,"les_aubes":-0.23,"antigone_centre":0.18,"mediatheque_emile_zola":0.08,"nombre_d_or":0.02,"louis_blanc":0.61,"gambetta":0.47,"port_marianne":-0.47,"les_arceaux":0.23,"cite_mion":0.47,"nouveau_saint_roch":0.09,"renouvier":0.32,"odysseum":0.0,"saint_denis":0.0,"richter":-0.27,"charles_flahault":0.07,"voltaire":0.39,"pres_d_arenes":-0.55,"garcia_lorca":0.39,"vert_bois":0.48,"malbosc":0.48,"occitanie":-0.58,"facdessciences":-0.01,"fac_de_lettres":-0.48,"aiguelongue":0.32,"jeu_de_mail_des_abbes":-0.06,"euromedecine":-0.21,"marie_caizergues":-0.04,"sabines":0.41,"celleneuve":0.49,"jardin_de_la_lironde":-0.47,"pere_soulas":-0.28,"place_viala":-0.04,"hotel_du_departement":0.53,"tonnelles":0.65,"parvis_jules_ferry_gare_saint_roch":-0.4,"pont_de_lattes_gare_saint_roch":0.07,"deux_ponts_gare_saint_roch":0.0,"providence_ovalie":0.51,"perols_etang_de_l_or":0.54,"albert_1er_cathedrale":-0.09,"saint_guilhem_courreau":0.44,"sud_de_france":0.46,"comedie_baudin":0.0,"jean_de_beins":-0.44}};

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
    if(tabId === 'top-correlations') items[2].classList.add('active'); // NOUVEAU
    if(tabId === 'export') items[3].classList.add('active'); // DÉCALAGE
    
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

// --- GÉNÉRATION DU TOP CORRÉLATIONS ---
function generateTopList() {
    const tbody = document.getElementById('top-corr-body');
    if (!tbody) return;

    let allCorrelations = [];

    // 1. On parcourt toutes les données de CORRELATION_DATA
    for (const parking in CORRELATION_DATA) {
        for (const station in CORRELATION_DATA[parking]) {
            const val = CORRELATION_DATA[parking][station];
            // On ignore les valeurs nulles ou undefined
            if (val !== null && val !== undefined) {
                allCorrelations.push({
                    parking: parking.charAt(0).toUpperCase() + parking.slice(1).replace(/_/g, ' '),
                    station: station.charAt(0).toUpperCase() + station.slice(1).replace(/_/g, ' '),
                    value: val,
                    abs: Math.abs(val) // Pour trier par puissance
                });
            }
        }
    }

    // 2. On trie par valeur ABSOLUE (les plus forts en premier)
    allCorrelations.sort((a, b) => b.abs - a.abs);

    // 3. On garde le TOP 20
    const top20 = allCorrelations.slice(0, 20);

    // 4. On génère le HTML
    tbody.innerHTML = '';
    top20.forEach((item, index) => {
        const isPositive = item.value > 0;
        const tagClass = isPositive ? 'tag-pos' : 'tag-neg';
        const typeText = isPositive ? 'Positive (+)' : 'Négative (-)';
        const icon = isPositive ? '<i class="fas fa-arrow-up"></i>' : '<i class="fas fa-arrow-down"></i>';
        
        // Ajout d'une classe strong si > 0.5 ou < -0.5
        const strongClass = item.abs >= 0.5 ? 'tag-strong' : '';

        const row = `
            <tr>
                <td><div class="rank-badge">${index + 1}</div></td>
                <td><strong>${item.parking}</strong></td>
                <td>${item.station}</td>
                <td style="font-family:monospace; font-size:1.1rem; font-weight:bold;">${item.value}</td>
                <td><span class="tag-corr ${tagClass} ${strongClass}">${icon} ${typeText}</span></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// LANCEMENT
init();
generateGallery();
initComparator();
generateTopList(); // Lance le calcul du Top au démarrage
