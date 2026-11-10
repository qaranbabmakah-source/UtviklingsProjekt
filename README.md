HTML, CSS og JavaScript

Dokumentasjon av alle fire oppgavene

Prosjekt: html-css-projekt  |  Navbar • Produkter • Handlekurv • Søkefunksjon

Skriftlig dokumentasjon med representative kodeeksempler. Den fullstendige kildekoden ligger i prosjektfilene på GitHub.

Om prosjektet

Dette er dokumentasjonen for skoleprosjektet html-css-projekt. Jeg bygget nettsiden steg for steg: først navbar, bildegalleri og bildepoppup, deretter produktkort fra JavaScript-objekter, handlekurv og til slutt søkefunksjon. Jeg brukte HTML, CSS og JavaScript, testet i nettleseren og rettet feil med Console i utviklerverktøyene.

Dokumentasjonen beskriver det jeg har gjort i alle fire oppgavedelene. Kodeblokkene under viser sentrale løsninger og er eksempler basert på prosjektet. Den fullstendige, gjeldende kildekoden ligger i filene i dette GitHub-repositoriet.

Prosjektstruktur

html-css-projekt/

├── index.html

├── styles.css

├── Bilder/

└── js/

   ├── produkter.js

   └── script.js

Merk: Oppgaveteksten viste også mappen css/, men i mitt prosjekt er stilarket styles.css plassert i hovedmappen.

Del 1 – Navbar, CSS Grid og bildepoppup

Oppgave: Navbar med Flexbox

Jeg laget en navbar med logo og minst tre lenker: Forside, Prosjekter og Kontakt. Jeg brukte display: flex for å plassere elementene ved siden av hverandre. Med align-items, gap og padding justerte jeg høyde og avstand. Jeg la også til hover-effekt på lenkene.

<nav class="navbar">

 <img class="logo" src="Bilder/logo.png" alt="Logo">

 <a class="navbutton" href="#">Forside</a>

 <a class="navbutton" href="#">Prosjekter</a>

 <a class="navbutton" href="#">Kontakt</a>

</nav>

.navbar { display: flex; align-items: center; gap: 15px; padding: 10px 20px; }

.navbutton { text-decoration: none; padding: 10px 15px; border-radius: 5px; }

.navbutton:hover { background-color: #cccccc; }

Jeg lærte at gap styrer avstanden mellom elementene, mens justify-content styrer fordelingen av ledig plass i hovedretningen. Jeg prøvde også endringer i farger, padding, gap og størrelse.

Oppgave: Bildegalleri med CSS Grid

Jeg la minst fire bilder i Bilder-mappen og viste dem under navbaren. Jeg brukte CSS Grid for å ordne bildene i kolonner og rader, og object-fit: contain for at bildene skulle beholde riktige proporsjoner.

<main>

 <h1>Bildegalleri</h1>

 <div class="container">

   <div><img class="ContIMG" src="Bilder/bilde1.jpg" alt="Bilde 1"></div>

   <div><img class="ContIMG" src="Bilder/bilde2.jpg" alt="Bilde 2"></div>

   <div><img class="ContIMG" src="Bilder/bilde3.jpg" alt="Bilde 3"></div>

   <div><img class="ContIMG" src="Bilder/bilde4.jpg" alt="Bilde 4"></div>

 </div>

</main>

.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

.ContIMG { width: 100%; height: 100%; object-fit: contain; }

.ContIMG:hover { opacity: 0.8; cursor: pointer; }

/* En mer fleksibel variant: */

/* grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); */

Jeg lærte at Flexbox passer godt til en rad eller kolonne, mens Grid passer godt når flere rader og kolonner skal organiseres.

Ekstraoppgave: Klikkbar bildepoppup

Jeg laget en popup slik at et bilde kan åpnes i større størrelse. Den kan lukkes med X, klikk på bakgrunnen eller Escape. JavaScript bruker event listeners og oppdaterer popupbildets src.

const popup = document.getElementById("popup");

const popupIMG = document.getElementById("popupIMG");

document.querySelectorAll(".ContIMG").forEach(img => {

 img.addEventListener("click", () => {

   popupIMG.src = img.src;

   popup.style.display = "flex";

 });

});

document.addEventListener("keydown", event => {

 if (event.key === "Escape") popup.style.display = "none";

});

Jeg testet at bildene åpnet riktig og at popupen kunne lukkes igjen.

Del 2 – Objekter og dynamisk HTML

Steg 1–3: Produkter flyttes fra HTML til objekter og arrays

Jeg sluttet å skrive produktkortene manuelt i HTML. I js/produkter.js laget jeg et array med fire produktobjekter. Hvert objekt inneholder informasjon om id, navn, pris, bilde, beskrivelse, lager og kategori.

// Forenklet eksempel på produktobjekt

const produkter = [

 { id: 1, navn: "Tastatur", pris: 599,

   bilde: "Bilder/tastatur.jpg", beskrivelse: "Et enkelt gamingtastatur.",

   lager: 0, kategori: "Tilbehør" },

 { id: 2, navn: "Mus", pris: 299,

   bilde: "Bilder/mus.jpg", beskrivelse: "Trådløs mus.",

   lager: 6, kategori: "Tilbehør" },

 { id: 3, navn: "Skjerm", pris: 2499,

   bilde: "Bilder/skjerm.jpg", beskrivelse: "24 tommer skjerm.",

   lager: 3, kategori: "Skjermer" },

 { id: 4, navn: "Hodetelefoner", pris: 799,

   bilde: "Bilder/hodetelefoner.jpg", beskrivelse: "Trådløse hodetelefoner.",

   lager: 8, kategori: "Tilbehør" }

];

Jeg brukte console.log(produkter) for å kontrollere at arrayet inneholdt fire objekter (Array(4)).

Steg 4–5: Produktkort med JavaScript og CSS

I js/script.js laget jeg funksjonen visProdukter(liste), som bruker forEach() og innerHTML til å generere HTML-kort for hvert produkt. Jeg brukte CSS Grid, mellomrom, bakgrunnsfarger og hover-effekter på kortene.

const container = document.getElementById("produktContainer");

function visProdukter(liste) {

 container.innerHTML = "";

 liste.forEach(produkt => {

   container.innerHTML += `

     <div class="produktkort">

       <img src="${produkt.bilde}" alt="${produkt.navn}">

       <h2>${produkt.navn}</h2>

       <p>${produkt.beskrivelse}</p>

       <p>Kategori: ${produkt.kategori}</p>

       <p>Pris: ${produkt.pris} kr</p>

       <p>På lager: ${produkt.lager}</p>

     </div>`;

 });

}

visProdukter(produkter);

Dette kodeutdraget er forenklet: De faktiske produktkortene har også knapper, lagerstatus og andre detaljer.

Ekstraoppgave: Lagerstatus med if/else

Jeg la til egenskapen lager i hvert produkt. Jeg brukte if/else for å vise «På lager» hvis lager > 0 og «Utsolgt» hvis lager er 0. Jeg testet blant annet Tastatur med lager 0.

let status = "";

if (produkt.lager > 0) {

 status = "På lager";

} else {

 status = "Utsolgt";

}

Ekstraoppgave: Les mer-knapp og kategorier

Jeg la til en grønn «Les mer»-knapp og beholdt en blå kjøpsknapp på produktkortene. Jeg la også til kategoriene Tilbehør og Skjermer og viste kategorien på kortet. Med forEach() og if telte jeg hvor mange produkter som hadde kategorien Tilbehør: tre.

let antallTilbehor = 0;

produkter.forEach(produkt => {

 if (produkt.kategori === "Tilbehør") antallTilbehor++;

});

console.log("Antall Tilbehør:", antallTilbehor);

Ekstra vanskelig: Filtrer produkter etter pris

Jeg laget knappene «Vis alle» og «Under 500 kr». Med filter() viser nettsiden bare produkter under 500 kr. I denne produktlisten er det Mus som koster 299 kr.

document.getElementById("visAlle").addEventListener("click", () => {

 visProdukter(produkter);

});

document.getElementById("visBillige").addEventListener("click", () => {

 visProdukter(produkter.filter(produkt => produkt.pris < 500));

});

Feilsøking og læring i del 2

Jeg kontrollerte script-rekkefølgen (produkter.js før script.js), at id-ene stemte, og at bildene lå i Bilder-mappen. Jeg brukte Console for å finne skrivefeil og for å bekrefte Array(4) og Antall Tilbehør: 3.

Del 3 – JavaScript: Enkel handlekurv

Grunnoppgaven: Steg 1–5 – array, kjøpsknapp og riktig produkt

Jeg laget arrayet handlekurv og en funksjon som finner riktig produkt ved hjelp av id. Kjøpsknappen på hvert dynamisk produktkort kaller leggTilHandlekurv(id). Dette er mitt alternativ til lærerens eksempel med data-id og event listener på hver kjøpsknapp. Jeg bruker også event listeners for flere andre knapper.

let handlekurv = [];

// I produktkortet:

// <button onclick="leggTilHandlekurv(${produkt.id})">Køb</button>

window.leggTilHandlekurv = function(id) {

 const produkt = produkter.find(p => p.id === id);

 if (!produkt) return;

 const eksisterende = handlekurv.find(p => p.id === id);

 if (eksisterende) {

   eksisterende.antall++;

 } else {

   handlekurv.push({ ...produkt, antall: 1 });

 }

 oppdaterAntall();

 visHandlekurv();

};

Jeg testet at et klikk på «Køb» legger riktig produkt til i handlekurven.

Steg 6–7: Teller i navbar og popup i HTML/CSS

Jeg la en Handlekurv-knapp med en teller i navbaren. I HTML laget jeg en skjult popup med en liste, totalpris, X-knapp og senere «Tøm handlekurv»-knapp. CSS viser popupen som et lag over nettsiden.

<button id="kurvKnapp">Handlekurv (<span id="antallKurv">0</span>)</button>

<div id="kurvPopup" class="popup">

 <div class="kurvInnhold">

   <button id="lukkKurv">X</button>

   <h2>Handlekurv</h2>

   <div id="kurvListe"></div>

   <p id="totalPris"></p>

   <button id="tomKurv">Tøm handlekurv</button>

 </div>

</div>

Steg 8–10: Vise produkter, totalpris, åpne og lukke

Jeg laget funksjonen visHandlekurv() som går gjennom handlekurv-arrayet og viser innholdet. Totalprisen regnes ut ved å multiplisere antall med pris. Popupen åpnes og lukkes via addEventListener().

function visHandlekurv() {

 const liste = document.getElementById("kurvListe");

 liste.innerHTML = "";

 let total = 0;

 handlekurv.forEach((produkt, index) => {

   total += produkt.pris * produkt.antall;

   liste.innerHTML += `<p>${produkt.navn} – antall ${produkt.antall}

     – pris: ${produkt.pris * produkt.antall} kr

     <button class="fjernKnapp" data-index="${index}">Fjern</button></p>`;

 });

 document.getElementById("totalPris").textContent = "Totalt: " + total + " kr";

}

Denne kodeblokken viser kjernelogikken, ikke hele funksjonen med tom-handlekurv og event listeners.

Utfordring 1: Fjern produkt

Jeg la til «Fjern» ved hvert produkt og brukte splice(index, 1) for å fjerne produktet. Deretter kaller jeg visHandlekurv() og oppdaterAntall() for å oppdatere både popup og teller.

function fjernProdukt(index) {

 handlekurv.splice(index, 1);

 visHandlekurv();

 oppdaterAntall();

}

Utfordring 2: Antall av samme produkt

Jeg la til egenskapen antall. Hvis jeg klikker på Mus tre ganger, vises Mus som ett produkt med antall 3 og pris 897 kr (299 × 3), i stedet for tre like rader. For nye produkter bruker jeg push(); for produkter som allerede finnes øker jeg antall.

Utfordring 3: Tom handlekurv

Hvis handlekurven er tom, viser popupen teksten «Handlekurven er tom.» i stedet for en tom liste og totalpris.

if (handlekurv.length === 0) {

 liste.innerHTML = "<p>Handlekurven er tom.</p>";

 document.getElementById("totalPris").textContent = "";

 return;

}

Utfordring 4: Tøm hele handlekurven

Jeg laget knappen «Tøm handlekurv». Når den klikkes, tømmes arrayet, listen oppdateres og telleren settes tilbake til 0.

document.getElementById("tomKurv").addEventListener("click", () => {

 handlekurv = [];

 visHandlekurv();

 oppdaterAntall();

});

Jeg testet at handlekurven først viste to Mus til 598 kr, og etter tømming viste «Handlekurven er tom.».

Testing og utfordringer med handlekurven

Jeg rettet blant annet forskjellen mellom tomKurv og tomkurv i HTML og JavaScript. Jeg lærte at JavaScript er følsomt for store og små bokstaver, og at feil i addEventListener kan stoppe resten av scriptet. Jeg brukte Console og testet på nytt til produktkortene og handlekurven fungerte.

Del 4 – JavaScript: Søkefunksjon

Steg 1–3: Søkefelt, visProdukter() og DOM

Jeg la et søkefelt over produktcontaineren og hentet det med getElementById(). Jeg brukte den eksisterende visProdukter(liste)-funksjonen, slik at samme funksjon kan vise alle produkter eller en filtrert liste.

<input type="text" id="sokefelt" placeholder="Søk etter produkter...">

<p id="antallTreff"></p>

<div id="produktContainer"></div>

const sokefelt = document.getElementById("sokefelt");

const container = document.getElementById("produktContainer");

Steg 4–5: input-event og toLowerCase()

Jeg brukte addEventListener("input") slik at søket reagerer mens brukeren skriver, uten Enter. Jeg leste sokefelt.value og brukte toLowerCase() så Mus, mus og MUS gir samme resultat.

Steg 6–7: filter(), includes() og visProdukter(resultat)

Jeg brukte filter() til å lage et nytt array med produkter som passer, og includes() til å kontrollere om et produktnavn inneholder søketeksten. Deretter viser visProdukter(resultat) bare treffene.

Steg 8: Ingen produkter funnet

Jeg la til en melding som vises når resultat.length === 0. Da står det «Ingen produkter funnet.» i stedet for produktkort.

Utfordring 1: Søk i beskrivelse

Jeg utvidet søket med || (ELLER) slik at produkter finnes hvis søkeordet står i navnet eller beskrivelsen. Testen «trådløs» viste Mus og Hodetelefoner.

Utfordring 2: Søk etter kategori

Jeg la også kategori til søkebetingelsen. Søket «Tilbehør» viste Tastatur, Mus og Hodetelefoner, men ikke Skjerm.

Utfordring 3: Vis antall treff

Jeg oppdaterte HTML-elementet antallTreff med resultat.length. Søket «Tilbehør» viste «3 produkter funnet».

Utfordring 4: Søk og handlekurv sammen

Jeg testet at kjøpsknappen fortsatt fungerer etter at produktkortene tegnes på nytt av innerHTML. Siden hvert nytt kort får onclick="leggTilHandlekurv(id)", kunne jeg søke etter Mus, klikke «Køb» og se Mus i handlekurven.

Samlet eksempel på søkekoden

sokefelt.addEventListener("input", () => {

 const sok = sokefelt.value.toLowerCase();

 const resultat = produkter.filter(produkt =>

   produkt.navn.toLowerCase().includes(sok) ||

   produkt.beskrivelse.toLowerCase().includes(sok) ||

   produkt.kategori.toLowerCase().includes(sok)

 );

 document.getElementById("antallTreff").textContent =

   resultat.length + " produkter funnet";

 if (resultat.length === 0) {

   container.innerHTML = "<p>Ingen produkter funnet.</p>";

 } else {

   visProdukter(resultat);

 }

});

Testing av søkefunksjonen

Søk eller handling

Forventet og observert resultat

mus

Bare Mus vises

banan

Ingen produkter funnet.

Tomt søkefelt

Alle fire produkter vises

trådløs

Mus og Hodetelefoner vises

Tilbehør

Tastatur, Mus og Hodetelefoner; 3 treff

Mus → Køb

Mus legges i handlekurven også etter søk

Jeg rettet skrivefeil i sokefelt, visProdukter og toLowerCase(). Jeg brukte Console for å se feilmeldinger og kontrollerte at kodens store og små bokstaver var riktige.

Hva jeg har lært

• Flexbox passer godt til navbaren; Grid passer godt til bilde- og produktgalleri.
• Objekter lagrer data om ett produkt, mens arrays lagrer flere produkter.
• Funksjoner og forEach() gjør det lettere å vise produktkort automatisk.
• if/else kan styre lagerstatus og meldinger når lister er tomme.
• find(), push() og splice() kan brukes til å jobbe med handlekurven.
• filter(), includes() og toLowerCase() gjør det mulig å søke i produkter.
• addEventListener() og DOM knytter handlinger til nettsidens HTML-elementer.
• Console og trinnvis testing gjør det lettere å finne små skrivefeil.
Konklusjon

Jeg har gjennomført fire deler i prosjektet: Navbar, Grid og Popup; objekter og dynamisk HTML; enkel handlekurv; og søkefunksjon. Nettsiden har fire produkter, prisfiltrering, lagerstatus, handlekurv med antall og totalpris samt søk i navn, beskrivelse og kategori. Jeg testet funksjonene i nettleseren og rettet feil underveis. Jeg forstår nå bedre hvordan HTML, CSS og JavaScript kan brukes sammen til å bygge en interaktiv nettbutikk.

