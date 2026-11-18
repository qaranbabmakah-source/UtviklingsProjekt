# UTVIKLINGSPROJEKT – HTML, CSS OG JAVASCRIPT

Dokumentasjon 

Prosjekt: html-css-projekt  |  Navbar • Produkter • Handlekurv • Søkefunksjon

Skriftlig dokumentasjon med representative kodeeksempler. Den fullstendige kildekoden ligger i prosjektfilene på GitHub.

## Om prosjektet

Dette er dokumentasjonen for skoleprosjektet html-css-projekt. Jeg bygget nettsiden steg for steg: først navbar, bildegalleri og bildepoppup, deretter produktkort fra JavaScript-objekter, handlekurv og til slutt søkefunksjon. Jeg brukte HTML, CSS og JavaScript, testet i nettleseren og rettet feil med Console i utviklerverktøyene.

Dokumentasjonen beskriver det jeg har gjort i alle fire oppgavedelene. Kodeblokkene under viser sentrale løsninger og er eksempler basert på prosjektet. Den fullstendige, gjeldende kildekoden ligger i filene i dette GitHub-repositoriet.

## Målet med prosjektet

Målet med prosjektet var å utvikle en interaktiv nettside ved hjelp av HTML, CSS og JavaScript. Jeg ønsket å lære hvordan de tre teknologiene fungerer sammen for å lage en nettside som både ser oversiktlig ut og har funksjoner brukeren kan samhandle med.

HTML ble brukt til å bygge strukturen på nettsiden, CSS til å bestemme utseende og plassering av elementene, og JavaScript til å lage 
funksjoner som produktvisning, handlekurv og søk.

Jeg jobbet steg for steg og bygget videre på det jeg hadde laget tidligere. På denne måten kunne jeg teste hver funksjon før jeg fortsatte med neste oppgave. Miyaan ka hormariyaa

## Prosjektstruktur

html-css-projekt/

index.html

styles.css

Bilder/

s/

 produkter.js

 script.js

Merk: Oppgaveteksten viste også mappen css/, men i mitt prosjekt er stilarket styles.css plassert i hovedmappen.

## Del 1 – Navbar, CSS Grid og bildepoppup

## Oppgave: Navbar med Flexbox

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

## Oppgave: Bildegalleri med CSS Grid

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

### Forklaring av løsningen

I denne delen lærte jeg forskjellen mellom HTML, CSS og JavaScript i praksis. HTML brukes til å lage elementene på nettsiden, mens CSS bestemmer hvordan elementene skal se ut og plasseres.

Jeg valgte Flexbox til navbaren fordi elementene skulle plasseres ved siden av hverandre. Til bildegalleriet brukte jeg CSS Grid fordi det gjør det enklere å organisere flere bilder i rader og kolonner.

For å lage bildepoppupen brukte jeg JavaScript og addEventListener(). Når brukeren klikker på et bilde, åpnes det i større størrelse.

Jeg testet også hvordan popupen kunne lukkes med Escape-tasten. Dette lærte meg hvordan JavaScript kan reagere på handlinger fra brukeren og gjøre nettsiden mer interaktiv.


## Del 2 – Objekter og dynamisk HTML

## Steg 1–3: Produkter flyttes fra HTML til objekter og arrays

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

## Steg 4–5: Produktkort med JavaScript og CSS

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

## Ekstraoppgave: Lagerstatus med if/else

Jeg la til egenskapen lager i hvert produkt. Jeg brukte if/else for å vise «På lager» hvis lager > 0 og «Utsolgt» hvis lager er 0. Jeg testet blant annet Tastatur med lager 0.

let status = "";

if (produkt.lager > 0) {

 status = "På lager";

} else {

 status = "Utsolgt";

}

## Ekstraoppgave: Les mer-knapp og kategorier

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

## Feilsøking og læring i del 2

Jeg kontrollerte script-rekkefølgen (produkter.js før script.js), at id-ene stemte, og at bildene lå i Bilder-mappen. Jeg brukte Console for å finne skrivefeil og for å bekrefte Array(4) og Antall Tilbehør: 3.

### Hvorfor jeg brukte JavaScript-objekter

Jeg valgte å bruke objekter og arrays fordi det gjør det enklere å organisere produktinformasjonen. I stedet for å skrive hvert produktkort manuelt i HTML, lagret jeg informasjonen i JavaScript.

Hvert produkt har egenskaper som id, navn, pris, bilde, beskrivelse, lager og kategori.

Funksjonen visProdukter() bruker forEach() til å gå gjennom produktene og vise dem automatisk på nettsiden.

Fordelen med denne løsningen er at jeg kan endre produktinformasjon i produkter.js uten å måtte skrive om HTML-koden for hvert produkt.

Jeg lærte også at det er viktig å kontrollere filstier og rekkefølgen på JavaScript-filene. Hvis script.js kjøres før produktene er tilgjengelige, kan det føre til feil.

Dette gjorde at jeg fikk bedre forståelse av hvordan data og funksjoner samarbeider i JavaScript.

## Del 3 – JavaScript: Enkel handlekurv

## Grunnoppgaven: Steg 1–5 – array, kjøpsknapp og riktig produkt

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

## Steg 6–7: Teller i navbar og popup i HTML/CSS

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

## Utfordring 1: Fjern produkt

Jeg la til «Fjern» ved hvert produkt og brukte splice(index, 1) for å fjerne produktet. Deretter kaller jeg visHandlekurv() og oppdaterAntall() for å oppdatere både popup og teller.

function fjernProdukt(index) {

 handlekurv.splice(index, 1);

 visHandlekurv();

 oppdaterAntall();

}

## Utfordring 2: Antall av samme produkt

Jeg la til egenskapen antall. Hvis jeg klikker på Mus tre ganger, vises Mus som ett produkt med antall 3 og pris 897 kr (299 × 3), i stedet for tre like rader. For nye produkter bruker jeg push(); for produkter som allerede finnes øker jeg antall.

Utfordring 3: Tom handlekurv

Hvis handlekurven er tom, viser popupen teksten «Handlekurven er tom.» i stedet for en tom liste og totalpris.

if (handlekurv.length === 0) {

 liste.innerHTML = "<p>Handlekurven er tom.</p>";

 document.getElementById("totalPris").textContent = "";

 return;

}

## Utfordring 4: Tøm hele handlekurven

Jeg laget knappen «Tøm handlekurv». Når den klikkes, tømmes arrayet, listen oppdateres og telleren settes tilbake til 0.

document.getElementById("tomKurv").addEventListener("click", () => {

 handlekurv = [];

 visHandlekurv();

 oppdaterAntall();

});

Jeg testet at handlekurven først viste to Mus til 598 kr, og etter tømming viste «Handlekurven er tom.».

## Testing og utfordringer med handlekurven

Jeg rettet blant annet forskjellen mellom tomKurv og tomkurv i HTML og JavaScript. Jeg lærte at JavaScript er følsomt for store og små bokstaver, og at feil i addEventListener kan stoppe resten av scriptet. Jeg brukte Console og testet på nytt til produktkortene og handlekurven fungerte.

### Hvordan handlekurven fungerer

Handlekurven er laget med JavaScript og bruker et array til å lagre produktene som blir lagt til.

Når brukeren klikker på kjøpsknappen, brukes produktets ID til å finne riktig produkt ved hjelp av find().

Hvis produktet allerede finnes i handlekurven, økes antallet. Hvis produktet ikke finnes fra før, legges det til som et nytt element.

Jeg brukte også en funksjon som beregner totalprisen ved å multiplisere produktets pris med antallet.

Jeg testet handlekurven ved å legge til samme produkt flere ganger. Da kontrollerte jeg at antallet og totalprisen ble oppdatert riktig.

Jeg oppdaget også en feil med forskjellen mellom tomKurv og tomkurv. Etter at jeg rettet navnet, testet jeg funksjonen på nytt.

Denne delen lærte meg hvordan arrays, funksjoner og DOM kan brukes sammen for å oppdatere innholdet på en nettside uten å laste inn hele siden på nytt.

## Del 4 – JavaScript: Søkefunksjon

## Steg 1–3: Søkefelt, visProdukter() og DOM

Jeg la et søkefelt over produktcontaineren og hentet det med getElementById(). Jeg brukte den eksisterende visProdukter(liste)-funksjonen, slik at samme funksjon kan vise alle produkter eller en filtrert liste.

<input type="text" id="sokefelt" placeholder="Søk etter produkter...">

<p id="antallTreff"></p>

<div id="produktContainer"></div>

const sokefelt = document.getElementById("sokefelt");

const container = document.getElementById("produktContainer");

## Steg 4–5: input-event og toLowerCase()

Jeg brukte addEventListener("input") slik at søket reagerer mens brukeren skriver, uten Enter. Jeg leste sokefelt.value og brukte toLowerCase() så Mus, mus og MUS gir samme resultat.

## Steg 6–7: filter(), includes() og visProdukter(resultat)

Jeg brukte filter() til å lage et nytt array med produkter som passer, og includes() til å kontrollere om et produktnavn inneholder søketeksten. Deretter viser visProdukter(resultat) bare treffene.

## Steg 8: Ingen produkter funnet

Jeg la til en melding som vises når resultat.length === 0. Da står det «Ingen produkter funnet.» i stedet for produktkort.

## Utfordring 1: Søk i beskrivelse

Jeg utvidet søket med || (ELLER) slik at produkter finnes hvis søkeordet står i navnet eller beskrivelsen. Testen «trådløs» viste Mus og Hodetelefoner.

## Utfordring 2: Søk etter kategori

Jeg la også kategori til søkebetingelsen. Søket «Tilbehør» viste Tastatur, Mus og Hodetelefoner, men ikke Skjerm.

Utfordring 3: Vis antall treff

Jeg oppdaterte HTML-elementet antallTreff med resultat.length. Søket «Tilbehør» viste «3 produkter funnet».

## Utfordring 4: Søk og handlekurv sammen

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

## Testing av søkefunksjonen

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

## Mus legges i handlekurven også etter søk

Jeg rettet skrivefeil i sokefelt, visProdukter og toLowerCase(). Jeg brukte Console for å se feilmeldinger og kontrollerte at kodens store og små bokstaver var riktige.

### Hvorfor jeg valgte denne søkeløsningen

Jeg valgte å bruke addEventListener("input") fordi jeg ønsket at søkeresultatene skulle oppdateres automatisk mens brukeren skriver.

Jeg brukte filter() til å finne produktene som passer med søket, og includes() til å kontrollere om søkeordet finnes i produktets navn, beskrivelse eller kategori.

Jeg brukte også toLowerCase() for at søket skulle fungere uansett om brukeren skriver med store eller små bokstaver.

For å kontrollere at søkefunksjonen fungerte, testet jeg forskjellige søkeord. Søket «mus» viste riktig produkt, mens et søk uten treff viste meldingen «Ingen produkter funnet».

Jeg testet også at handlekurven fortsatt fungerte etter at produktene hadde blitt filtrert.

Denne oppgaven lærte meg hvordan JavaScript kan behandle informasjon fra brukeren og vise forskjellige resultater uten å laste nettsiden på nytt.

### Utfordringer og feilsøking under prosjektet

Under arbeidet møtte jeg forskjellige utfordringer med HTML, CSS og JavaScript.

En av utfordringene var å få JavaScript-filene til å fungere sammen. Jeg måtte kontrollere at produkter.js ble lastet inn før script.js, slik at produktinformasjonen var tilgjengelig.

Jeg opplevde også problemer med navn på HTML-elementer og JavaScript-variabler. For eksempel måtte jeg rette forskjellen mellom tomKurv og tomkurv.

For å finne feil brukte jeg Console i nettleserens utviklerverktøy. Jeg kontrollerte feilmeldinger, rettet skrivefeil og testet funksjonene igjen.

Jeg lærte at små feil i JavaScript kan føre til at en funksjon ikke virker som forventet. Derfor er det viktig å teste koden underveis og ikke bare når hele prosjektet er ferdig.

Feilsøkingen gjorde at jeg forstod bedre hvordan HTML-elementer og JavaScript-funksjoner er koblet sammen.


## Hva jeg har lært

 Flexbox passer godt til navbaren; Grid passer godt til bilde- og produktgalleri.

Objekter lagrer data om ett produkt, mens arrays lagrer flere produkter.

Funksjoner og forEach() gjør det lettere å vise produktkort automatisk.

if/else kan styre lagerstatus og meldinger når lister er tomme.

find(), push() og splice() kan brukes til å jobbe med handlekurven.

filter(), includes() og toLowerCase() gjør det mulig å søke i produkter.

addEventListener() og DOM knytter handlinger til nettsidens HTML-elementer.

Console og trinnvis testing gjør det lettere å finne små skrivefeil.


Jeg har gjennomført fire deler i prosjektet: Navbar, Grid og Popup; objekter og dynamisk HTML; enkel handlekurv; og søkefunksjon. Nettsiden har 
fire produkter, prisfiltrering, lagerstatus, handlekurv med antall og totalpris samt søk i navn, beskrivelse og kategori. Jeg testet 
funksjonene i nettleseren og rettet feil underveis. Jeg forstår nå bedre hvordan HTML, CSS og JavaScript kan brukes sammen til å bygge en interaktiv nettbutikk.

### Egenvurdering og videre utvikling

Jeg synes prosjektet har vært lærerikt fordi jeg har fått erfaring med å bruke HTML, CSS og JavaScript sammen i et større prosjekt.

I begynnelsen jobbet jeg mest med nettsidens struktur og utseende. Etter hvert lærte jeg å bruke JavaScript til å lage mer avanserte funksjoner, som produktkort, handlekurv og søkefunksjon.

Jeg er spesielt fornøyd med at jeg klarte å få handlekurven og søkefunksjonen til å fungere sammen. Dette krevde at jeg forstod hvordan produktinformasjonen ble brukt i flere forskjellige funksjoner.

Hvis jeg skulle utviklet prosjektet videre, ville jeg jobbet mer med responsivt design slik at nettsiden fungerer enda bedre på mobil. Jeg ville også undersøkt hvordan handlekurven kan lagres slik at produktene ikke forsvinner når siden oppdateres.

Gjennom prosjektet har jeg blitt tryggere på å lese kode, forstå feilmeldinger og finne løsninger når noe ikke fungerer som forventet.

