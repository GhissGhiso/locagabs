var provinces = [
    {
        code: "G0",
        nom: "Choisis la province"
    },
    {
        code: "G1",
        nom: "Estuaire"
    },
    {
        code: "G2",
        nom: "Haut-Ogooué"
    },
    {
        code: "G3",
        nom: "Moyen-Ogooué"
    },
    {
        code: "G4",
        nom: "Ngounié"
    },
    {
        code: "G5",
        nom: "Nyanga"
    },
    {
        code: "G6",
        nom: "Ogooué-Ivindo"
    },
    {
        code: "G7",
        nom: "Ogooué-Lolo"
    },
    {
        code: "G8",
        nom: "Ogooué-Maritime"
    },
    {
        code: "G9",
        nom: "Wouleu-Ntem"
    }
];    

// Renvoie un tableau contenant quelques villes d'une province
function getVilles(codeProvince) {
    switch (codeProvince) {
        case "G0":
            return ["Choix de la ville"];
        case "G1":
            return ["Toutes les villes","Libreville", "Akanda", "Cocobeach", "Foulenzem", 
                    "Kango", "Ndzomoe", "Ntoum", "Owendo", "Pointe-Denis"];
        case "G2":
            return ["Toutes les villes","Franceville", "Aboumi", "Akiéni", 
                    "Bakoumba", "Boumango", "Bongoville", "Boumango", "Lékoni", "Moanda", "Mounana", "Ngouoni", "Okondja", "Onga"];
        case "G3":
            return ["Toutes les villes","Lambaréné", "Bifoun", "Ndjolé"];
        case "G4":
            return ["Toutes les villes","Mouila", "Fougamou", "Guiétsou", "Lébamba", 
                    "Malinga", "Mandji", "Mimongo", "Ndendé"];
        case "G5":
            return ["Toutes les villes","Tchibanga", "Mabanda", "Mayumba", "Moabi", 
                    "Moulengui-Binza", "Ndindi"];
        case "G6":
            return ["Toutes les villes","Makokou", "Booué", "Mékambo", "Ovan"];
        case "G7":
            return ["Toutes les villes","Koulamoutou", "Iboundji", "Lastoursville", 
                    "Pana"];
        case "G8":
            return ["Toutes les villes","Port-Gentil", "Gamba", "Omboué"];
        case "G9":
            return ["Toutes les villes","Oyem", "Bitam", "Médouneu", "Minvoul", "Mitzic"];
        default:
            return [];
    }
}

// Crée et renvoi un élément HTML <option> -- Provinces
var form = document.querySelector("form")
if (document.querySelector("option").innerText==="Choix de la ville") {
    document.querySelector("#city").setAttribute("hidden","")
} else {
    document.querySelector("#city").removeAttribute("hidden")
}

function creerElementOpProv(texte, valeur) {
    var element = document.createElement("option");
    element.textContent = texte;
    element.value = valeur;
    return element;
}

// Crée et renvoie un élément HTML <option> -- Villes
function creerElementOpVil(texte) {
    var element = document.createElement("option");
    element.textContent = texte;
    if (texte==="Choix de la ville") {
        document.querySelector("#city").setAttribute("hidden","")
    } else {
        document.querySelector("#city").removeAttribute("hidden")
    }
    return element;
}

var provinceElt = document.querySelector("select");
// Remplit la liste déroulante des provinces
provinces.forEach(function (province) {
    provinceElt.appendChild(creerElementOpProv(province.nom, province.code));
});

provinceElt.addEventListener("change", function (e) {
    // La valeur cible de l'évènement est le code de la province
    var villes = getVilles(e.target.value); //liste des villes de la prov selectionnée
    //console.log(" liste des villes de la province selectionnée : "+villes)

    var villesElt = document.getElementById("city");
    //console.log(" les villes : "+villesElt.innerHTML)
    

    villesElt.innerHTML = ""; // Vidage de la liste
    // Ajout de chaque ville à la liste
    villes.forEach(function (ville) {
        villesElt.appendChild(creerElementOpVil(ville));
    });
});