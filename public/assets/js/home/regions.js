var tbl_region_2016 = [
    {"prov_code": "G_01", "np_nom": "Estuaire"}, 
    {"prov_code": "G_02", "np_nom": "Haut-Ogooué"}, 
    {"prov_code": "G_03", "np_nom": "Moyen-Ogooué"}, 
    {"prov_code": "G_04", "np_nom": "Ngounié"}, 
    {"prov_code": "G_05", "np_nom": "Nyanga"}, 
    {"prov_code": "G_06", "np_nom": "Ogooué-Ivindo"}, 
    {"prov_code": "G_07", "np_nom": "Ogooué-Lolo"}, 
    {"prov_code": "G_08", "np_nom": "Ogooué-Maritime"}, 
    {"prov_code": "G_09", "np_nom": "Wouleu-Ntem"}
  ];

  var tbl_old_region =[
    {"ancprov_code": "AP_01", "an_nom": "Mekey Me Nkoma", "prov_code": "G_01"},
    {"ancprov_code": "AP_02", "an_nom": "Betsi", "prov_code": "G_01"},  
    {"ancprov_code": "AP_03", "an_nom": "Riverains", "prov_code": "G_01"}, 
    {"ancprov_code": "AP_04", "an_nom": "Altogovéen", "prov_code": "G_02"}, 
    {"ancprov_code": "AP_05", "an_nom": "Migovéens", "prov_code": "G_03"},
    {"ancprov_code": "AP_06", "an_nom": "Minhooh", "prov_code": "G_03"},
    {"ancprov_code": "AP_07", "an_nom": "Galois", "prov_code": "G_03"}, 
    {"ancprov_code": "AP_08", "an_nom": "Bilops", "prov_code": "G_04"}, 
    {"ancprov_code": "AP_09", "an_nom": "Mefsere", "prov_code": "G_06"},
    {"ancprov_code": "AP_10", "an_nom": "Mekora", "prov_code": "G_06"},
    {"ancprov_code": "AP_11", "an_nom": "Mandji", "prov_code": "G_08"},
    {"ancprov_code": "AP_12", "an_nom": "Orungu", "prov_code": "G_08"},
    {"ancprov_code": "AP_13", "an_nom": "Okââ", "prov_code": "G_09"}, 
    {"ancprov_code": "AP_14", "an_nom": "Ntsume", "prov_code": "G_09"}, 
    {"ancprov_code": "AP_15", "an_nom": "Mvêê", "prov_code": "G_09"},
    {"ancprov_code": "AP_16", "an_nom": "La Taupe", "prov_code": "G_07"}
  ];

  var tbl_departement = [
    {"dep_code": "D_67", "ancprov_code": "AP_02", "dep_nom": "Komo", "dep_prefecture": "Kango"}, 
    {"dep_code": "D_68", "ancprov_code": "AP_02", "dep_nom": "Komo-Océan", "dep_prefecture": "Ndzomoe"}, 
    {"dep_code": "D_24", "ancprov_code": "AP_02", "dep_nom": "Komo-Mondah", "dep_prefecture": "Ntoum"}, 
    {"dep_code": "D_33", "ancprov_code": "AP_01", "dep_nom": "Noya", "dep_prefecture": "Cocobeach"}, 
    {"dep_code": "D_40", "ancprov_code": "AP_01", "dep_nom": "Lbreville", "dep_prefecture": "Libreville"}, 
    {"dep_code": "D_47", "ancprov_code": "AP_03", "dep_nom": "Owendo", "dep_prefecture": "Akournam 1"}, 
    {"dep_code": "D_64", "ancprov_code": "AP_04", "dep_nom": "Bayi-Brikolo", "dep_prefecture": "Aboumi"}, 
    {"dep_code": "D_03", "ancprov_code": "AP_04", "dep_nom": "Djoué", "dep_prefecture": "Onga"}, 
    {"dep_code": "D_15", "ancprov_code": "AP_04", "dep_nom": "Mpassa", "dep_prefecture": "Franceville"}, 
    {"dep_code": "D_43", "ancprov_code": "AP_04", "dep_nom": "Lemboumbi-Leyou", "dep_prefecture": "Moanda"}, 
    {"dep_code": "D_63", "ancprov_code": "AP_05", "dep_nom": "Abanga-Bigné", "dep_prefecture": "Ndolé"}, 
    {"dep_code": "D_14", "ancprov_code": "AP_06", "dep_nom": "Ogooué et des Lacs", "dep_prefecture": "Lambaréné"}, 
    {"dep_code": "D_50", "ancprov_code": "AP_09", "dep_nom": "Ivindo", "dep_prefecture": "Makokou"}, 
    {"dep_code": "D_61", "ancprov_code": "AP_09", "dep_nom": "Mvoung", "dep_prefecture": "Ovan"}, 
    {"dep_code": "D_21", "ancprov_code": "AP_10", "dep_nom": "Lopé", "dep_prefecture": "Boué"},
    {"dep_code": "D_58", "ancprov_code": "AP_10", "dep_nom": "Zadié", "dep_prefecture": "Mékambo"}, 
    {"dep_code": "D_71", "ancprov_code": "AP_16", "dep_nom": "Lolo-Bouenguidi", "dep_prefecture": "Koulamoutou"}, 
    {"dep_code": "D_89", "ancprov_code": "AP_11", "dep_nom": "Bendjé", "dep_prefecture": "Port-Gentil"}, 
    {"dep_code": "D_22", "ancprov_code": "AP_12", "dep_nom": "Etimboué", "dep_prefecture": "Omboué"}, 
    {"dep_code": "D_29", "ancprov_code": "AP_11", "dep_nom": "Ndougou", "dep_prefecture": "Gamba"}, 
    {"dep_code": "D_35", "ancprov_code": "AP_13", "dep_nom": "Haut-Komo", "dep_prefecture": "Médouneu"}, 
    {"dep_code": "D_56", "ancprov_code": "AP_15", "dep_nom": "Haut-Ntem", "dep_prefecture": "Minvoul"}, 
    {"dep_code": "D_18", "ancprov_code": "AP_14", "dep_nom": "Ntem", "dep_prefecture": "Bitam"}, 
    {"dep_code": "D_28", "ancprov_code": "AP_13", "dep_nom": "Okano", "dep_prefecture": "Mitzic"}, 
    {"dep_code": "D_36", "ancprov_code": "AP_14", "dep_nom": "Woleu", "dep_prefecture": "Oyem"}, 
    {"dep_code": "D_37", "ancprov_code": "AP_16", "dep_nom": "Mulundu", "dep_prefecture": "Lastoursville"}, 
    {"dep_code": "D_41", "ancprov_code": "AP_16", "dep_nom": "Offoué-Onoye", "dep_prefecture": "Iboundji"}
  ];



/**
* Fonction de récupération des données correspondant au critère de recherche
* @param   {String} condition - Chaine indiquant la condition à remplir
* @param   {Array}  table - Tableau contenant les données à extraire
* @returns {Array}  result - Tableau contenant les données extraites
*/

//Fonction de recherche
function getDataFromTable( condition, table) {
    // récupération de la clé et de la valeur
    var cde = condition.replace(/\s/g, '').split('='),
        key = cde[0],
        value = cde[1],
        result = [];   
    // retour direct si *
    if (condition === '*') {
      return table.slice();
    }
    // retourne les éléments répondant à la condition
    result = table.filter( function(obj){
         return obj[key] === value;
      });
    return result;
  }


  /**
* Fonction d'ajout des <option> à un <select>
* @param   {String} id_select - ID du <select> à mettre à jour
* @param   {Array}  liste - Tableau contenant les données à ajouter
* @param   {String} valeur - Champ pris en compte pour la value de l'<option>
* @param   {String} texte - Champ pris en compte pour le texte affiché de l'<option>
* @returns {String} Valeur sélectionnée du <select> pour chainage
*/

function updateSelect( id_select, liste, valeur, texte){
    var oOption,
        oSelect = document.getElementById( id_select),
        i, nb = liste.length;
    // vide le select
    oSelect.options.length = 0;
    // désactive si aucune option disponible
    oSelect.disabled = nb ? false : true;       //oSelect.hidden = nb ? false : true;
    // affiche info nombre options, facultatif
    setNombre( oSelect, nb);
    // ajoute 1st option
    if( nb){
      oSelect.add( new Option( 'Choisir', ''));
      // focus sur le select
      oSelect.focus();
    }
    // création des options d'après la liste
    for (i = 0; i < nb; i += 1) {
      // création option
      oOption = new Option( liste[i][texte], liste[i][valeur]);
      // ajout de l'option en fin
      oSelect.add( oOption);
    }
    // si une seule option on la sélectionne
    oSelect.selectedIndex = nb === 1 ? 1 : 0;
    // on retourne la valeur pour le select suivant
    return oSelect.value;
  }

  /**
* Affichage du nombre d'<option> présentes dans le <select>
* @param {Object} obj - <select> parent
* @param {Number} nb - nombre à afficher
*/

function setNombre( obj, nb){
    var oElem = obj.parentNode.querySelector('.nombre');
    if( oElem){
      oElem.innerHTML = nb ? '(' +nb +')' :'';
    }
  }

  // init du 1st select
chainSelect('init');

/**
* fonction de chainage des <select>
* @param {String|Object} ID du <select> à traiter ou le <select> lui-même
*/

function chainSelect( param){
    // affectation par défaut
    param = param || 'init';
    var liste,
        id     = param.id || param,
        valeur = param.value || '';
        
    // test à faire pour récupération de la value
    if( typeof id === 'string'){
       param = document.getElementById( id);
       valeur = param ? param.value : '';
    }
  
    switch (id){
      case 'init':
        // récup. des données
        liste = getDataFromTable( '*', tbl_region_2016);
        // mise à jour du select
        valeur = updateSelect( 'new_region', liste, 'prov_code', 'np_nom');
        // chainage sur le select lié
        chainSelect('new_region');
        break;
      case 'new_region':
        // récup. des données
        liste = getDataFromTable( 'prov_code=' +valeur, tbl_old_region);
        // mise à jour du select
        valeur = updateSelect( 'old_region', liste, 'ancprov_code', 'an_nom');
        // chainage sur le select lié
        chainSelect('old_region');
        break;
      case 'old_region':
        // récup. des données
        liste = getDataFromTable( 'ancprov_code=' +valeur, tbl_departement);
        // mise à jour du select
        valeur= updateSelect( 'departement', liste, 'dep_prefecture', 'dep_nom');
        // chainage sur le select lié
        chainSelect('departement');
        break;
      case 'departement':
        // affichage final
        document.getElementById('prefecture').value = valeur;
        break;
    }
  }

  // Initialisation après chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
    var oSelects = document.querySelectorAll('#liste select'),
        i, nb = oSelects.length;
    // affectation de la fonction sur le onchange
    for( i = 0; i < nb; i += 1) {
      oSelects[i].onchange = function() {
          chainSelect(this);
        };
    }
    // init du 1st select
    if( nb){
      chainSelect('init');
    }
  });