const popup = document.getElementById("popup");
const popupIMG = document.getElementById("popupIMG");
const close = document.querySelector(".close");
document.querySelectorAll(".ContIMG").forEach (img => {
img.addEventListener("click", ()=> {
popupIMG.src = img.src;
popup.style.display = "flex";
} ) ;
} ) ;
close.addEventListener("click", ()=> {
popup.style.display = "none";
} ) ;
popup.addEventListener("click", (event) => {
if (event.target === popup) {
popup.style.display = "none";
} 
} ) ;
document.addEventListener("keydown", (event) => {
if (event.key === "Escape") { 
popup.style.display = "none";
}
} ) ;
const container = document.getElementById("produktContainer");
const sokefelt = document.getElementById("sokefelt");
let handlekurv = [];
window.leggTilHandlekurv = function(id) {  
const produkt = produkter.find(p => p.id === id);
if (produkt) {
const eksisterende = handlekurv.find(p => p.id === id);
if (eksisterende) {
    eksisterende.antall++;
} else {
    handlekurv.push({...produkt, antall: 1})
}
oppdaterAntall();
alert(produkt.navn + " er lagt til i handlekurven!");
visHandlekurv();
console.log(handlekurv);
}
}
function visHandlekurv() {
const kurvContainer = document.getElementById("kurvListe");
kurvContainer.innerHTML = "";
if (handlekurv.length === 0) {
    kurvContainer.innerHTML = "<p>Handlekurven er tom.</p";
    document.getElementById("totalPris").textContent = "";
    return;
}
let total = 0;
handlekurv.forEach((produkt, index) => {
kurvContainer.innerHTML += `
 <p>
   ${produkt.navn} - antall ${produkt.antall}
   -pris: ${produkt.pris * produkt.antall} kr
   <button class="fjernKnapp" data-index="${index}">Fjern</button>
</p>
`;
total = total + produkt.pris * produkt.antall;
});
kurvContainer.querySelectorAll(".fjernKnapp").forEach((knapp) => {
    knapp.addEventListener("click", () => {
        fjernProdukt(Number(knapp.dataset.index));
        });
    });
document.getElementById("totalPris").textContent = 
"Total: "  + total + " kr";
}
function fjernProdukt(index) {
    console.log("Fjern ble klikket", index);
  if (handlekurv[index].antall > 1) {
    handlekurv[index].antall--;
  } else {
    handlekurv.splice(index, 1);
  }
    visHandlekurv();
    oppdaterAntall();
}
const kurvPopup = document.getElementById("kurvPopup");
const kurvKnapp = document.getElementById("kurvKnapp");
const tomKurv = document.getElementById("tomKurv");
const lukkKurv = document.querySelector("#kurvPopup button");
kurvKnapp.addEventListener("click", () => {
    visHandlekurv();
    kurvPopup.style.display = "flex";
});
lukkKurv.addEventListener("click", () => {
    kurvPopup.style.display ="none";
});
tomKurv.addEventListener("click", () => {
    handlekurv = [];
    visHandlekurv();
    oppdaterAntall();
});
function oppdaterAntall() {
    document.getElementById("antallkurv").textContent = handlekurv.reduce((sum, produkt) => sum + produkt.antall, 0);
}
console.log(produkter);
function visProdukter(liste) {
container.innerHTML ="";
liste.forEach((produkt) => {
let status = "";
if (produkt.lager > 0) {
status = "På lager";
} else {
status = "Utsolgt";
}
container.innerHTML += `
<div class="produkt">
<img src="${produkt.bilde}" alt="${produkt.navn}">
<h2>${produkt.navn}</h2>
<p>${produkt.beskrivelse}</p>
<p>Kategori: ${produkt.kategori}</p>
<p>Pris: ${produkt.pris} kr</p>
<p>På lager: ${produkt.lager}</p>
<p>${status}</p>
<button onclick="leggTilHandlekurv(${produkt.id})">køb</button>
<button class="produktknapp5 mer" onclick="visMer(${produkt.id})">Les mer</button>
</div>
`;
});
}
visProdukter(produkter);
document.getElementById("visAlle").addEventListener("click", () => {
visProdukter(produkter);
});
document.getElementById("visBillige").addEventListener("click", () => {
    const billigeProdukter = produkter.filter(produkt => produkt.pris < 500);
    visProdukter(billigeProdukter);
});

document.getElementById("visMellomPris").addEventListener("click", () => {
    const resultat = produkter.filter(produkt =>
        produkt.pris >= 500 && produkt.pris <= 1000
    );
    visProdukter(resultat);
});

document.getElementById("visOver1000").addEventListener("click", () => {
    const resultat = produkter.filter(produkt => produkt.pris > 1000);
    visProdukter(resultat);
});

const filterKnapper = document.querySelectorAll(".filterKnapp");
console.log(filterKnapper);
filterKnapper.forEach(knapp => {
    knapp.addEventListener("click", () => {
        let kategori = knapp.dataset.kategori;
        console.log("Valgt kategori:", kategori);


if (kategori === "Alle") {
    visProdukter(produkter);
} else {
    let filtrerteProdukter = produkter.filter(
        produkt => produkt.kategori === kategori
    );
    visProdukter(filtrerteProdukter);
}

    });
});
document.getElementById("visTilbehor").addEventListener("click", () => {
    visProdukter(produkter.filter(produkt => produkt.kategori === "Tilbehør"));
});

document.getElementById("visSkjermer").addEventListener("click", () => {
    visProdukter(produkter.filter(produkt => produkt.kategori === "Skjermer"));
});

document.getElementById("visTastatur").addEventListener("click", () => {
    visProdukter(produkter.filter(produkt => produkt.navn === "Tastatur"));
});
let antallTilbehor =0;
produkter.forEach((produkt) => {
if (produkt.kategori === "Tilbehør") {
antallTilbehor++;
} 
});
console.log(" Antall Tilbehør:", antallTilbehor);

sokefelt.addEventListener("input", () => {
    const sok = sokefelt.value.toLowerCase();
    
const valgtKategori = document.getElementById("kategoriFilter").value;
const maksPris = Number(document.getElementById("prisSlider").value);
const resultat = produkter.filter(produkt =>
    
    (valgtKategori === "Alle" ||
     produkt.kategori === valgtKategori ||
     (valgtKategori === "Tastatur" && produkt.navn === "Tastatur")) &&
    (
        produkt.navn.toLowerCase().includes(sok) ||
        produkt.beskrivelse.toLowerCase().includes(sok) ||
        produkt.kategori.toLowerCase().includes(sok)
           ) &&
        produkt.pris <= maksPris
);

const antall = resultat.length;

document.getElementById("prisResultat").textContent =
    "Vis " + antall +
    (antall === 1 ? " produkt" : " produkter");

if (resultat.length === 0) {
    container.innerHTML = "<p>Ingen produkter funnet.</p>";
} else {
    visProdukter(resultat);
}
});


window.visMer = function(id) {
    const produkt = produkter.find(p => p.id === id);

    if (produkt) {
        alert(
            produkt.navn + "\n\n" +
            produkt.beskrivelse + "\n" +
            "Pris: " + produkt.pris + " kr\n" +
            "Kategori: " + produkt.kategori
        );
    }
};



const kategoriFilter = document.getElementById("kategoriFilter");

kategoriFilter.addEventListener("change", () => {
    sortering.dispatchEvent(new Event("change"));
});


const sortering = document.getElementById("sortering");

sortering.addEventListener("change", () => {
    const valg = sortering.value;
    const kategori = document.getElementById("kategoriFilter").value;
    const sok = document.getElementById("sokefelt").value.toLowerCase().trim();
const sorterteProdukter = produkter.filter(produkt => {

    const passerSok =
        produkt.navn.toLowerCase().includes(sok) ||
        produkt.beskrivelse.toLowerCase().includes(sok) ||
        produkt.kategori.toLowerCase().includes(sok);

    const passerKategori =
        kategori === "Alle" ||
        (kategori === "Tastatur" && produkt.navn === "Tastatur") ||
        produkt.kategori === kategori;

    const passerPris =
    produkt.pris <= Number(document.getElementById("prisSlider").value);

return passerSok && passerKategori && passerPris;
});

    if (valg === "az") {
        sorterteProdukter.sort((a, b) =>
            a.navn.localeCompare(b.navn, "nb")
        );
    } else if (valg === "za") {
        sorterteProdukter.sort((a, b) =>
            b.navn.localeCompare(a.navn, "nb")
        );
    } else if (valg === "lavest") {
        sorterteProdukter.sort((a, b) => a.pris - b.pris);
    } else if (valg === "hoyest") {
    sorterteProdukter.sort((a, b) => b.pris - a.pris);
} else if (valg === "rating") {
    sorterteProdukter.sort((a, b) => b.rating - a.rating);
}

    visProdukter(sorterteProdukter);
    const antall = sorterteProdukter.length;

document.getElementById("prisResultat").textContent =
    "Vis " + antall +
    (antall === 1 ? " produkt" : " produkter");
});

const prisSlider = document.getElementById("prisSlider");
const maksPrisTekst = document.getElementById("maksPrisTekst");
const prisResultat = document.getElementById("prisResultat");

prisSlider.addEventListener("input", () => {
    const maksPris = Number(prisSlider.value);

    maksPrisTekst.textContent = maksPris + " kr";

    const sok = document.getElementById("sokefelt").value.toLowerCase().trim();
const kategori = document.getElementById("kategoriFilter").value;

const filtrerteProdukter = produkter.filter(produkt => {
    const passerSok =
        produkt.navn.toLowerCase().includes(sok) ||
        produkt.beskrivelse.toLowerCase().includes(sok) ||
        produkt.kategori.toLowerCase().includes(sok);

    const passerKategori =
        kategori === "Alle" ||
        (kategori === "Tastatur" && produkt.navn === "Tastatur") ||
        produkt.kategori === kategori;

    const passerPris = produkt.pris <= maksPris;

    return passerSok && passerKategori && passerPris;
});

 prisResultat.textContent =
    "Vis " + filtrerteProdukter.length +
    (filtrerteProdukter.length === 1 ? " produkt" : " produkter");

    visProdukter(filtrerteProdukter);
});