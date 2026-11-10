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
const eksisterende = handlekurv.find(p => p.id);
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
kurvContainer.innerHTML += `<p>${produkt.navn} -antall ${produkt.antall} -pris: ${produkt.pris * produkt.antall} kr <button class="fjernKnapp" data-index="(${index})">Fjern</button></p>`;
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
    handlekurv.splice(index, 1);
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
<button class="produktknapp">less mer</button>
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
let antallTilbehor =0;
produkter.forEach((produkt) => {
if (produkt.kategori === "Tilbehør") {
antallTilbehor++;
} 
});
console.log(" Antall Tilbehør:", antallTilbehor);

sokefelt.addEventListener("input", () => {
    const sok = sokefelt.value.toLowerCase();
    const resultat = produkter.filter(produkt =>
        produkt.navn.toLowerCase().includes(sok) ||
        produkt.beskrivelse.toLowerCase().includes(sok) ||
        produkt.kategori.toLowerCase().includes(sok)
    );
document.getElementById("antallTreff").textContent = resultat.length + "produkterfunnet";
if(resultat.length === 0) {
    container.innerHTML = "<p>Ingen produkter funnet.</p>";
} else {
    visProdukter(resultat);
}
});