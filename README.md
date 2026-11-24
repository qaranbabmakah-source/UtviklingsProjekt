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

## Oppgave 1: Navbar med Flexbox

<img width="580" height="265" alt="image" src="https://github.com/user-attachments/assets/f17fd53d-5f9f-4e55-a4b8-70ee68e474a8" />

<img width="827" height="103" alt="image" src="https://github.com/user-attachments/assets/db9e341a-0817-413a-9ac1-bb3f0790100e" />

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

## Oppgave 2 : Bildegalleri med CSS Grid

<img width="555" height="191" alt="image" src="https://github.com/user-attachments/assets/214f8803-dc74-4680-87e4-fd5e7b54454d" />

<img width="923" height="236" alt="image" src="https://github.com/user-attachments/assets/43ec7558-e79c-4549-abbf-245710b56ee5" />

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

## Ekstraoppgave: Klikkbar bildepoppup

<img width="588" height="148" alt="image" src="https://github.com/user-attachments/assets/2d5d72d0-00ec-40b7-b216-bf21b04b4865" />

<img width="926" height="498" alt="image" src="https://github.com/user-attachments/assets/355e493f-29b3-442b-83f7-e9c8ad10712e" />

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

<img width="657" height="459" alt="image" src="https://github.com/user-attachments/assets/355db499-50c7-44e3-b1ee-465734eecdaf" />

<img width="938" height="415" alt="image" src="https://github.com/user-attachments/assets/e825d0e9-9791-4ac8-b8e5-35016f496e4c" />


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

<img width="677" height="503" alt="image" src="https://github.com/user-attachments/assets/8ff51090-40e1-4dc3-bf60-6dbe4e939a74" />

<img width="882" height="198" alt="image" src="https://github.com/user-attachments/assets/c84024be-2973-44f4-8d94-706ab78fdf5f" />


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

<img width="640" height="182" alt="image" src="https://github.com/user-attachments/assets/4468bb53-d534-4b85-bbc8-1ee4c91c96d1" />

<img width="422" height="424" alt="image" src="https://github.com/user-attachments/assets/3ba6614a-7543-4db6-a532-9a7ef02ec519" />


Jeg la til egenskapen lager i hvert produkt. Jeg brukte if/else for å vise «På lager» hvis lager > 0 og «Utsolgt» hvis lager er 0. Jeg testet blant annet Tastatur med lager 0.

let status = "";

if (produkt.lager > 0) {

 status = "På lager";

} else {

 status = "Utsolgt";

}

## Ekstraoppgave: Les mer-knapp og kategorier

<img width="664" height="83" alt="image" src="https://github.com/user-attachments/assets/8449b0c0-e100-49ac-84fa-bf41ad882a46" />

<img width="761" height="188" alt="image" src="https://github.com/user-attachments/assets/8e81d84d-d196-429d-8182-ca3cb30ad19d" />

<img width="905" height="442" alt="image" src="https://github.com/user-attachments/assets/289357a1-b11c-44a1-9294-c4e49274bc12" />

Jeg la til en grønn «Les mer»-knapp og beholdt en blå kjøpsknapp på produktkortene. Jeg la også til kategoriene Tilbehør og Skjermer og viste kategorien på kortet. Med forEach() og if telte jeg hvor mange produkter som hadde kategorien Tilbehør: tre.

let antallTilbehor = 0;

produkter.forEach(produkt => {

 if (produkt.kategori === "Tilbehør") antallTilbehor++;

});

console.log("Antall Tilbehør:", antallTilbehor);

## Ekstra vanskelig: Filtrer produkter etter pris

<img width="653" height="200" alt="image" src="https://github.com/user-attachments/assets/aa335730-a894-4645-8ccf-8447c39c4399" />

<img width="940" height="457" alt="image" src="https://github.com/user-attachments/assets/94f9ae8a-ebca-4762-ab86-ec1cfb83af97" />

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

<img width="669" height="254" alt="image" src="https://github.com/user-attachments/assets/27c2ee2a-c02e-4f30-beba-9aae6cbd1223" />

<img width="902" height="398" alt="image" src="https://github.com/user-attachments/assets/5b480c03-173e-46ad-8762-48bcce37a698" />

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

<img width="764" height="191" alt="image" src="https://github.com/user-attachments/assets/0c78ef9a-f982-43df-aebc-7067126b049b" />

<img width="946" height="376" alt="image" src="https://github.com/user-attachments/assets/53b4d20c-979a-4409-8b5a-fd6bb294ee75" />


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

## Steg 8–10: Vise produkter, totalpris, åpne og lukke

<img width="657" height="119" alt="image" src="https://github.com/user-attachments/assets/7545f629-4cac-4042-8bdf-c9812885ebd8" />

<img width="946" height="496" alt="image" src="https://github.com/user-attachments/assets/f1c9b2ec-e48d-4827-a20c-f13445a16f6e" />

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

<img width="556" height="68" alt="image" src="https://github.com/user-attachments/assets/f6125a1b-fd29-4684-b05a-83964e523e05" />

<img width="374" height="281" alt="image" src="https://github.com/user-attachments/assets/5f1bc0c3-259a-4c9d-a412-0085c108c18b" />


Jeg la til «Fjern» ved hvert produkt og brukte splice(index, 1) for å fjerne produktet. Deretter kaller jeg visHandlekurv() og oppdaterAntall() for å oppdatere både popup og teller.

function fjernProdukt(index) {

 handlekurv.splice(index, 1);

 visHandlekurv();

 oppdaterAntall();

}

## Utfordring 2: Antall av samme produkt

<img width="459" height="140" alt="image" src="https://github.com/user-attachments/assets/f93b5c81-93cc-40fe-80a2-898d69179a56" />

<img width="371" height="226" alt="image" src="https://github.com/user-attachments/assets/ba75523b-7386-4603-b3b7-70268cac9e4f" />

Jeg la til egenskapen antall. Hvis jeg klikker på Mus tre ganger, vises Mus som ett produkt med antall 3 og pris 897 kr (299 × 3), i stedet for tre like rader. For nye produkter bruker jeg push(); for produkter som allerede finnes øker jeg antall.

## Utfordring 3: Tom handlekurv

<img width="488" height="106" alt="image" src="https://github.com/user-attachments/assets/48575d84-09aa-47dc-9e14-a53eaa8c505f" />


<img width="413" height="188" alt="image" src="https://github.com/user-attachments/assets/e58bbf39-2e31-48b0-8cae-43e542a20944" />


Hvis handlekurven er tom, viser popupen teksten «Handlekurven er tom.» i stedet for en tom liste og totalpris.

if (handlekurv.length === 0) {

 liste.innerHTML = "<p>Handlekurven er tom.</p>";

 document.getElementById("totalPris").textContent = "";

 return;

}

## Utfordring 4: Tøm hele handlekurven

<img width="651" height="108" alt="image" src="https://github.com/user-attachments/assets/f2e3f0c7-af20-4a28-9c04-e76930bb31b2" />

<img width="405" height="173" alt="image" src="https://github.com/user-attachments/assets/ab737067-437e-436c-95f2-9c6ad0252db4" />

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

<img width="488" height="130" alt="image" src="https://github.com/user-attachments/assets/070dd4f5-2d57-46c6-addc-e3ae5fd787d3" />

<img width="535" height="89" alt="image" src="https://github.com/user-attachments/assets/bfbdd90a-2759-428a-8a4b-2c029548cb01" />

Jeg la et søkefelt over produktcontaineren og hentet det med getElementById(). Jeg brukte den eksisterende visProdukter(liste)-funksjonen, slik at samme funksjon kan vise alle produkter eller en filtrert liste.

<input type="text" id="sokefelt" placeholder="Søk etter produkter...">

<p id="antallTreff"></p>

<div id="produktContainer"></div>

const sokefelt = document.getElementById("sokefelt");

const container = document.getElementById("produktContainer");

## Steg 4–5: input-event og toLowerCase()

<img width="625" height="116" alt="image" src="https://github.com/user-attachments/assets/477ea0a9-f7f3-4192-b33b-c5a5eef4c524" />

<img width="827" height="423" alt="image" src="https://github.com/user-attachments/assets/39d21982-74e5-48ca-81b0-2e82c8642641" />

Jeg brukte addEventListener("input") slik at søket reagerer mens brukeren skriver, uten Enter. Jeg leste sokefelt.value og brukte toLowerCase() så Mus, mus og MUS gir samme resultat.

## Steg 6–7: filter(), includes() og visProdukter(resultat)

<img width="607" height="205" alt="image" src="https://github.com/user-attachments/assets/610e7380-ec25-4c3a-8e3e-87c08f899d8a" />

<img width="660" height="407" alt="image" src="https://github.com/user-attachments/assets/e10823fb-ca4a-452d-adf6-3bd81bb391e7" />

Jeg brukte filter() til å lage et nytt array med produkter som passer, og includes() til å kontrollere om et produktnavn inneholder søketeksten. Deretter viser visProdukter(resultat) bare treffene.

## Steg 8: Ingen produkter funnet

<img width="619" height="142" alt="image" src="https://github.com/user-attachments/assets/03000dbe-a5df-4949-bf27-02fce6e45039" />

<img width="955" height="166" alt="image" src="https://github.com/user-attachments/assets/7645e883-682d-46df-ba57-acf109b0ae81" />

Jeg la til en melding som vises når resultat.length === 0. Da står det «Ingen produkter funnet.» i stedet for produktkort.

## Utfordring 1: Søk i beskrivelse

<img width="550" height="104" alt="image" src="https://github.com/user-attachments/assets/a25f58cf-6149-431c-b979-34acac04b73e" />

<img width="959" height="405" alt="image" src="https://github.com/user-attachments/assets/141d8656-1117-4da7-8e7d-db636b78d1c0" />

Jeg utvidet søket med || (ELLER) slik at produkter finnes hvis søkeordet står i navnet eller beskrivelsen. Testen «trådløs» viste Mus og Hodetelefoner.

## Utfordring 2: Søk etter kategori

<img width="522" height="104" alt="image" src="https://github.com/user-attachments/assets/e15fa65f-c962-4a7a-bb58-a14cfde75039" />

<img width="959" height="419" alt="image" src="https://github.com/user-attachments/assets/fa1714e5-3f17-4796-829e-f4e2c918b0a5" />

Jeg la også kategori til søkebetingelsen. Søket «Tilbehør» viste Tastatur, Mus og Hodetelefoner, men ikke Skjerm.

## Utfordring 3: Vis antall treff

<img width="646" height="119" alt="image" src="https://github.com/user-attachments/assets/7f652b94-8b75-44a3-8463-8b71d22c6a38" />

<img width="956" height="131" alt="image" src="https://github.com/user-attachments/assets/f830ec41-dae8-4421-8fb1-415844625528" />


Jeg oppdaterte HTML-elementet antallTreff med resultat.length. Søket «Tilbehør» viste «3 produkter funnet».

## Utfordring 4: Søk og handlekurv sammen

<img width="537" height="126" alt="image" src="https://github.com/user-attachments/assets/4665742b-e4e6-47b0-b991-d008d8123703" />

<img width="941" height="382" alt="image" src="https://github.com/user-attachments/assets/aab1b322-1dad-4ecb-b9de-9458817f3499" />

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

<img width="661" height="187" alt="image" src="https://github.com/user-attachments/assets/99322a82-36cc-436d-8d14-1503c25fadbe" />

<img width="959" height="205" alt="image" src="https://github.com/user-attachments/assets/27528c6a-9421-45c2-9703-eef328ed668f" />

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

<img width="635" height="194" alt="image" src="https://github.com/user-attachments/assets/62de803f-2e97-483b-8b90-9d12a234abf4" />

<img width="381" height="172" alt="image" src="https://github.com/user-attachments/assets/7a6e654a-ac74-4566-b967-45d70b20fb21" />


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

## Del 5 – JavaScript: Filtrering av produkter

## Steg 1 – legg til kategori på produktene

<img width="629" height="165" alt="image" src="https://github.com/user-attachments/assets/3d2b9912-ac9c-4717-933d-c70446ef69bd" />

<img width="949" height="433" alt="image" src="https://github.com/user-attachments/assets/a7506a71-bc50-47b0-b04a-1f3cd3a35831" />

Jeg brukte `js/produkter.js` til å lagre fire produkter som JavaScript-objekter. Hvert produkt har en `kategori`, slik at produktene kan filtreres.

 Kodeutdrag

```javascript
{
    id: 1,
    navn: "Tastatur",
    pris: 599,
    kategori: "Tilbehør"
},
{
    id: 3,
    navn: "Skjerm",
    pris: 2499,
    kategori: "Skjermer"
}
```

Testing og resultat

Jeg kontrollerte at alle fire produktene hadde en kategori, og at kategoriene ble vist riktig på nettsiden.

Jeg lærte at produkter med samme kategori kan vises sammen ved hjelp av JavaScript og `filter()`.

## Steg 2 – lag knapper for filtrering

<img width="635" height="223" alt="image" src="https://github.com/user-attachments/assets/fbaf4766-f3ba-4e52-b904-2213728ee430" />

<img width="926" height="467" alt="image" src="https://github.com/user-attachments/assets/4b3f4901-3149-493e-8a56-9b72eb07ec1b" />

hva gjorde jeg?

Jeg laget fire filterknapper i `index.html`: Vis alle, Tilbehør, Skjermer og Tastatur.

Jeg brukte `class="filterKnapp"` og `data-kategori` slik at hver knapp har informasjon om hvilken kategori den representerer.

Jeg beholdt også `id`-ene fordi JavaScript-koden min allerede bruker dem.

Kodeutdrag fra index.html

```html
<button id="visAlle" class="filterKnapp" data-kategori="Alle">Vis alle</button>
<button id="visTilbehor" class="filterKnapp" data-kategori="Tilbehør">Tilbehør</button>
<button id="visSkjermer" class="filterKnapp" data-kategori="Skjermer">Skjermer</button>
<button id="visTastatur" class="filterKnapp" data-kategori="Tastatur">Tastatur</button>
```

Testing og resultat

Jeg testet alle fire knappene i nettleseren. Tilbehør viste tre produkter, Skjermer viste bare Skjerm, Tastatur viste bare Tastatur, og Vis alle viste alle fire produktene.

Jeg lærte hvordan `data-kategori` kan lagre informasjon i HTML-elementer som JavaScript kan hente senere.

## Steg 3 – finn alle filterknappene

<img width="716" height="86" alt="image" src="https://github.com/user-attachments/assets/056bb19d-3b91-4b8b-b425-75d8a2058026" />

<img width="443" height="425" alt="image" src="https://github.com/user-attachments/assets/0754d5d6-d964-41ce-bbcd-42403a763609" />

Jeg brukte `querySelectorAll()` i `js/script.js` for å hente alle knappene med klassen `filterKnapp`.

Kode

```javascript
const filterKnapper = document.querySelectorAll(".filterKnapp");
console.log(filterKnapper);
```

Testing og resultat

Jeg åpnet Console i nettleseren og fikk `NodeList(4)`. Dette bekreftet at JavaScript fant alle fire filterknappene: Vis alle, Tilbehør, Skjermer og Tastatur.

Jeg lærte hvordan `querySelectorAll()` kan hente flere HTML-elementer med samme klasse.

## Steg 4 – registrer hvilken knapp brukeren trykker på

<img width="644" height="102" alt="image" src="https://github.com/user-attachments/assets/14f76e57-d915-4355-a939-6e0bf5ca32b1" />

<img width="451" height="273" alt="image" src="https://github.com/user-attachments/assets/bbb65fa8-41b4-4cd0-9955-ac4aead14592" />

Hva gjorde jeg?

Jeg brukte forEach() for å gå gjennom alle filterknappene og addEventListener("click") for å registrere når brukeren klikker på en knapp.

Kode fra js/script.js:

filterKnapper.forEach(knapp => {
    knapp.addEventListener("click", () => {
        console.log("Filterknapp trykket");
    });
});

Testing og resultat

Jeg testet ved å klikke på filterknappen Tilbehør. Console viste meldingen Filterknapp trykket, som bekreftet at klikkhendelsen fungerte.

Jeg lærte hvordan forEach() og addEventListener() kan brukes sammen for å registrere klikk på flere knapper.

## Steg 5 – finn kategorien på knappen

<img width="596" height="120" alt="image" src="https://github.com/user-attachments/assets/62e834b2-304b-4f5f-8e44-e7c306ed61d3" />

<img width="431" height="286" alt="image" src="https://github.com/user-attachments/assets/d588625a-3114-4aca-ab95-0f7a4a4e6acd" />

Hva gjorde jeg?

Jeg brukte dataset.kategori for å hente kategorien fra filterknappen som brukeren klikker på. Hver knapp har en data-kategori-verdi i HTML.

Kode fra js/script.js:

filterKnapper.forEach(knapp => {
    knapp.addEventListener("click", () => {
        let kategori = knapp.dataset.kategori;
        console.log("Valgt kategori:", kategori);
    });
});

Testing og resultat

Jeg klikket på knappen «Tilbehør» og kontrollerte Console. Den viste Valgt kategori: Tilbehør.

Jeg lærte hvordan JavaScript kan bruke dataset til å hente informasjon fra HTML-elementer.

## Steg 6 – filtrer produktarrayet

<img width="644" height="164" alt="image" src="https://github.com/user-attachments/assets/7753e4c2-78a3-4a7e-8f32-c93b1236aa5e" />

<img width="454" height="351" alt="image" src="https://github.com/user-attachments/assets/c8c3c987-d5c3-40e9-8b97-407da1e96ada" />

Hva gjorde jeg?

Jeg brukte filter() i JavaScript for å finne produktene som har samme kategori som filterknappen brukeren klikker på.

Kode fra js/script.js:

let filtrerteProdukter = produkter.filter(
    produkt => produkt.kategori === kategori
);
console.log(filtrerteProdukter);

Testing og resultat

Jeg klikket på «Tilbehør» og kontrollerte resultatet i Console. JavaScript viste Array(3), som inneholdt Tastatur, Mus og Hodetelefoner.

Jeg lærte at filter() lager et nytt array med produktene som oppfyller betingelsen.

## Steg 7 – vis de filtrerte produktene

<img width="593" height="137" alt="image" src="https://github.com/user-attachments/assets/374ad359-5632-464e-8f2b-93f922059166" />

<img width="959" height="445" alt="image" src="https://github.com/user-attachments/assets/a548307b-1f94-4d44-9201-296ea1ee22cd" />

Hva gjorde jeg?

Jeg brukte funksjonen visProdukter() for å vise produktene som ble funnet med filter(). Når brukeren klikker på en filterknapp, oppdateres produktkortene automatisk.

Jeg la også til en betingelse for «Vis alle», slik at alle fire produktene vises igjen.

Kode fra js/script.js:

let filtrerteProdukter = kategori === "Alle"
    ? produkter
    : produkter.filter(produkt => produkt.kategori === kategori);

console.log(filtrerteProdukter);
visProdukter(filtrerteProdukter);

Testing og resultat

Jeg testet filterknappene i nettleseren:

Vis alle: Alle fire produktene ble vist.

Tilbehør: Tastatur, Mus og Hodetelefoner ble vist.

Skjermer: Bare Skjerm ble vist.

Tastatur: Bare Tastatur ble vist ved hjelp av en egen knappfunksjon.

Jeg lærte hvordan filter() og visProdukter() kan brukes sammen for å oppdatere innholdet på nettsiden uten å laste siden på nytt.

## Steg 8 – få Alle-knappen til å fungere

<img width="479" height="145" alt="image" src="https://github.com/user-attachments/assets/84988635-b21f-4a4a-9d75-b2e1e27ce6e6" />

<img width="958" height="455" alt="image" src="https://github.com/user-attachments/assets/bf1bebcc-deaa-49ae-ba1c-9c57a31df62c" />

Hva gjorde jeg?

Jeg brukte if/else for å få «Vis alle»-knappen til å fungere. Siden ingen produkter har kategorien «Alle», måtte denne knappen behandles annerledes.

Kode fra js/script.js:

if (kategori === "Alle") {
    visProdukter(produkter);
} else {
    let filtrerteProdukter = produkter.filter(
        produkt => produkt.kategori === kategori
    );
    visProdukter(filtrerteProdukter);
}

Testing og resultat

Jeg testet «Vis alle» etter å ha filtrert produktene. Alle fire produktene kom tilbake på nettsiden.

Jeg lærte hvordan if/else kan brukes til å behandle forskjellige valg i JavaScript.


## Steg 9 – test filtreringen

<img width="943" height="439" alt="image" src="https://github.com/user-attachments/assets/372da5ed-0d9d-4b40-ae80-2402176cf57d" />

<img width="958" height="461" alt="image" src="https://github.com/user-attachments/assets/cf929222-cbb6-44cd-a747-4b891cdab26b" />

Hva gjorde jeg?

Jeg testet alle filterknappene for å kontrollere at produktfiltreringen fungerte riktig.

Testing og resultat

Tilbehør: Tastatur, Mus og Hodetelefoner ble vist.

Skjermer: Bare Skjerm ble vist.

Tastatur: Bare Tastatur ble vist.

Vis alle: Alle fire produktene kom tilbake.

Kode fra js/script.js:

if (kategori === "Alle") {
    visProdukter(produkter);
} else {
    let filtrerteProdukter = produkter.filter(
        produkt => produkt.kategori === kategori
    );
    visProdukter(filtrerteProdukter);
}

Hva lærte jeg?

Jeg lærte å teste forskjellige filtervalg og kontrollere at filter() og visProdukter() viser riktige produkter. Testene viste at filtreringen fungerer som forventet.

## Utfordring 1 – bruk nedtrekksmeny

<img width="549" height="133" alt="image" src="https://github.com/user-attachments/assets/a642d406-eb38-4f73-9a2b-99359bbda91a" />

<img width="959" height="377" alt="image" src="https://github.com/user-attachments/assets/81be92a7-69c7-446c-b32c-77efb7e7e5c3" />

Hva gjorde jeg?

Jeg laget en nedtrekksmeny i index.html slik at brukeren kan filtrere produkter etter kategori. Jeg brukte select og option i HTML og change-eventet i JavaScript.

Kode fra index.html:

<select id="kategoriFilter">
    <option value="Alle">Alle</option>
    <option value="Tilbehør">Tilbehør</option>
    <option value="Tastatur">Tastatur</option>
    <option value="Skjermer">Skjermer</option>
</select>

Kode fra js/script.js:

const kategoriFilter = document.getElementById("kategoriFilter");

kategoriFilter.addEventListener("change", () => {
    let kategori = kategoriFilter.value;

    if (kategori === "Alle") {
        visProdukter(produkter);
    } else if (kategori === "Tastatur") {
        visProdukter(produkter.filter(produkt => produkt.navn === "Tastatur"));
    } else {
        let filtrerteProdukter = produkter.filter(
            produkt => produkt.kategori === kategori
        );
        visProdukter(filtrerteProdukter);
    }
});

Testing og resultat

Jeg testet alle valgene i nedtrekksmenyen. «Alle» viste fire produkter, «Tilbehør» viste tre, «Tastatur» viste bare Tastatur, og «Skjermer» viste bare Skjerm.

Jeg lærte hvordan change, value og filter() kan brukes sammen for å filtrere produkter med en nedtrekksmeny.

## Utfordring 2 – filtrer på pris

<img width="563" height="102" alt="image" src="https://github.com/user-attachments/assets/2bf55c93-ba94-46fb-a151-5062770bce15" />

<img width="608" height="185" alt="image" src="https://github.com/user-attachments/assets/5a17f8db-54d3-48b1-9f28-b0278482674f" />

Hva gjorde jeg?

Jeg laget prisfiltrering i nettbutikken ved hjelp av JavaScript. Brukeren kan velge mellom «Vis alle», «Under 500 kr», «500–1000 kr» og «Over 1000 kr».

Jeg brukte filter() for å finne produkter som passer til den valgte prisklassen, og visProdukter() for å vise resultatene på nettsiden.

Kode fra index.html:

<button id="visAlle">Vis alle</button>
<button id="visBillige">Under 500 kr</button>
<button id="visMellomPris">500–1000 kr</button>
<button id="visOver1000">Over 1000 kr</button>

Kode fra js/script.js:

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

Testing og resultat

Jeg testet prisfiltreringen i nettleseren:

Under 500 kr: Mus (299 kr).

500–1000 kr: Tastatur (599 kr) og Hodetelefoner (799 kr).

Over 1000 kr: Skjerm (2499 kr).

Vis alle: Alle fire produktene vises.

Jeg lærte å bruke sammenligningsoperatorene <, >= og <= sammen med filter() for å filtrere produkter etter pris.

Resultat: Prisfiltreringen fungerer, og produktlisten oppdateres når brukeren velger en prisklasse.


## Utfordring 3 – kombiner søk og filtrering

<img width="584" height="228" alt="image" src="https://github.com/user-attachments/assets/00956638-59c8-42d4-9e83-0883b871e72b" />

<img width="954" height="451" alt="image" src="https://github.com/user-attachments/assets/5160e8d2-8e6d-402f-9ce8-2845fabc4825" />

Hva gjorde jeg?

Jeg kombinerte søkefunksjonen med kategorifiltrering i js/script.js. Brukeren kan velge en kategori i nedtrekksmenyen og deretter søke etter et produkt.

Jeg brukte filter(), includes() og toLowerCase() for å finne produkter som passer både med kategorien og søketeksten.

Kodeutdrag fra js/script.js:

const sok = sokefelt.value.toLowerCase();
const valgtKategori = document.getElementById("kategoriFilter").value;

const resultat = produkter.filter(produkt =>
    (valgtKategori === "Alle" ||
     produkt.kategori === valgtKategori ||
     (valgtKategori === "Tastatur" && produkt.navn === "Tastatur")) &&
    (
        produkt.navn.toLowerCase().includes(sok) ||
        produkt.beskrivelse.toLowerCase().includes(sok) ||
        produkt.kategori.toLowerCase().includes(sok)
    )
);

Testing og resultat

Jeg valgte kategorien «Tilbehør» i nedtrekksmenyen og skrev «mus» i søkefeltet. Da ble bare produktet Mus (299 kr) vist.

Dette viste at søk og kategorifiltrering fungerer sammen.

Hva lærte jeg?

Jeg lærte hvordan && og || kan brukes sammen med filter() for å kombinere flere betingelser. Jeg lærte også å bruke toLowerCase() for å søke uavhengig av store og små bokstaver.

## Tenk gjennom løsningen

Hvor ligger kategorien?

Kategorien er lagret i hvert produktobjekt i js/produkter.js, for eksempel:

kategori: "Tilbehør"

Hvordan vet JavaScript hvilken kategori brukeren velger?

Jeg brukte data-kategori på filterknappene og dataset.kategori i JavaScript. I nedtrekksmenyen brukte jeg kategoriFilter.value.

Hva gjør filter()?

filter() lager et nytt array med produktene som oppfyller betingelsen.

Kode fra prosjektet:

let filtrerteProdukter = produkter.filter(
    produkt => produkt.kategori === kategori
);

visProdukter(filtrerteProdukter);

Hvorfor bruker jeg visProdukter()?

Jeg bruker visProdukter() for å oppdatere nettsiden slik at bare produktene som passer med filteret, blir vist.

Hva har jeg lært?

Jeg har lært hvordan JavaScript kan hente kategorier fra HTML, filtrere produktobjekter og vise resultatene dynamisk. Jeg har også lært å kombinere kategorifiltrering med søk.

Hovedideen:

Brukeren velger kategori → JavaScript henter verdien → filter() finner riktige produkter → visProdukter() viser resultatet.

## Extraoppgave – Jeg gjorde selv

<img width="705" height="408" alt="image" src="https://github.com/user-attachments/assets/d6004978-8744-4287-9297-fca300d00240" />

<img width="698" height="391" alt="image" src="https://github.com/user-attachments/assets/71f1aaf7-63e4-477f-bf3b-5476bcd2af6b" />

<img width="958" height="449" alt="image" src="https://github.com/user-attachments/assets/29d9f02c-5417-4497-b3bb-9f1feec59fe4" />

Hva gjorde jeg?

Jeg valgte å gjøre en ekstraoppgave på egen hånd for å forbedre designet på nettbutikken min.

Jeg ga filterknappene forskjellige farger ved hjelp av CSS. Jeg gjorde også knappene større, la til avrundede hjørner og en hover-effekt.

I tillegg endret jeg størrelsen på søkefeltet og ga det en blå ramme.

Kodeutdrag fra styles.css:

#visAlle {
    background-color: #2563eb;
    color: white;
}

#visBillige {
    background-color: #16a34a;
    color: white;
}

#visMellomPris {
    background-color: #f59e0b;
    color: white;
}

#visOver1000 {
    background-color: #dc2626;
    color: white;
}

#kategoriFilter {
    background-color: #db2777;
    color: white;
}

#sokefelt {
    display: inline-block;
    width: 180px;
    padding: 8px 10px;
    font-size: 14px;
    border: 2px solid #60a5fa;
    border-radius: 9px;
}

Testing og resultat

Jeg testet endringene i nettleseren og justerte størrelsene flere ganger til jeg fikk et design jeg var fornøyd med.

Resultatet ble en mer fargerik og oversiktlig nettbutikk.

Hva lærte jeg?

Jeg lærte å bruke CSS mer selvstendig og fikk bedre forståelse av hvordan farger, størrelser, avstander og hover-effekter påvirker utseendet på nettsiden.

## Javascript – sortering av produkter

<img width="652" height="136" alt="image" src="https://github.com/user-attachments/assets/8c995ada-3e87-4d72-8796-9e87b627b793" />

<img width="650" height="243" alt="image" src="https://github.com/user-attachments/assets/2390d4c9-156e-4f48-b9c7-b5c3d15e53f0" />

<img width="957" height="483" alt="image" src="https://github.com/user-attachments/assets/3e783414-7369-47f3-bd83-edf1f7cbb383" />

Hva gjorde jeg?

Jeg laget en nedtrekksmeny i index.html med fire sorteringsvalg:

A til Å

Å til A

Lavest pris først

Høyest pris først

Deretter brukte jeg JavaScript i js/script.js for å sortere produktene når brukeren velger et alternativ.

Jeg brukte sort(), localeCompare() og visProdukter() for å endre rekkefølgen på produktkortene.

Kode fra index.html:

<select id="sortering">
    <option value="standard">Sorter produkter</option>
    <option value="az">A til Å</option>
    <option value="za">Å til A</option>
    <option value="lavest">Lavest pris først</option>
    <option value="hoyest">Høyest pris først</option>
</select>

Kode fra js/script.js:

const sortering = document.getElementById("sortering");

sortering.addEventListener("change", () => {
    const valg = sortering.value;
    const sorterteProdukter = [...produkter];

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
    }

    visProdukter(sorterteProdukter);
});

Forklaring av koden

Jeg brukte addEventListener("change") for å oppdage når brukeren velger en ny sortering.

sort() sorterer produktene, mens localeCompare() sammenligner produktnavnene i alfabetisk rekkefølge.

Jeg brukte [...produkter] for å lage en kopi av produktarrayet, slik at det opprinnelige arrayet ikke ble endret.

Til slutt brukte jeg visProdukter(sorterteProdukter) for å vise produktene i riktig rekkefølge.

Testing og resultat

Jeg testet alle fire sorteringsvalg i nettleseren:

A til Å: Hodetelefoner → Mus → Skjerm → Tastatur.

Å til A: Tastatur → Skjerm → Mus → Hodetelefoner.

Lavest pris først: Mus (299 kr) → Tastatur (599 kr) → Hodetelefoner (799 kr) → Skjerm (2499 kr).

Høyest pris først: Skjerm (2499 kr) → Hodetelefoner (799 kr) → Tastatur (599 kr) → Mus (299 kr).

Alle fire sorteringsvalgene fungerte som forventet.

Hva lærte jeg?

Jeg lærte hvordan sort() kan brukes til å sortere produkter etter navn og pris, og hvordan localeCompare() brukes til alfabetisk sortering.

Jeg lærte også hvorfor det er nyttig å lage en kopi av et array før sortering, og hvordan visProdukter() kan brukes til å oppdatere rekkefølgen på produktene på nettsiden.

## Hvordan fungerer a og b?

Når JavaScript bruker sort(), sammenlignes to produkter om gangen. a representerer ett produkt, og b representerer et annet.

Kode fra js/script.js:

sorterteProdukter.sort((a, b) => a.pris - b.pris);

Hvis a er Mus (299 kr) og b er Skjerm (2499 kr), blir sammenligningen:

299 - 2499 // -2200

Et negativt resultat betyr at Mus skal komme før Skjerm.

Hva lærte jeg?

Jeg lærte hvordan a og b brukes til å sammenligne produkter, og hvordan sort() kan sortere dem fra lavest til høyest pris.

## Hvordan bestemmer sort() rekkefølgen?

Jeg brukte sort() i JavaScript for å sortere produktene etter pris.

Når JavaScript sammenligner to produkter, brukes a og b til å bestemme hvilket produkt som skal komme først.

Kode fra js/script.js:

// Lavest pris først
sorterteProdukter.sort((a, b) => a.pris - b.pris);

// Høyest pris først
sorterteProdukter.sort((a, b) => b.pris - a.pris);

Forklaring

Hvis a er Mus (299 kr) og b er Skjerm (2499 kr), blir resultatet:

299 - 2499 // -2200

Når resultatet er negativt, kommer a før b. Når resultatet er positivt, kommer b før a. Hvis resultatet er 0, regnes produktene som like i denne sammenligningen.

Testing og resultat

Jeg testet begge sorteringsvalgene i nettleseren.

Lavest pris først: Mus → Tastatur → Hodetelefoner → Skjerm.

Høyest pris først: Skjerm → Hodetelefoner → Tastatur → Mus.

Hva lærte jeg?

Jeg lærte at a.pris - b.pris sorterer fra lavest til høyest pris, mens b.pris - a.pris sorterer fra høyest til lavest pris.


## Eksempel – Sortering etter pris

Jeg testet hvordan sort() endrer rekkefølgen på produktene uten å endre produktinformasjonen.

Kodeutdrag fra js/script.js:

// Lavest pris først
sorterteProdukter.sort((a, b) => a.pris - b.pris);

// Høyest pris først
sorterteProdukter.sort((a, b) => b.pris - a.pris);

Testing og resultat

Jeg brukte de fire produktene i nettbutikken min.

Lavest pris først:

Mus – 299 kr

Tastatur – 599 kr

Hodetelefoner – 799 kr

Skjerm – 2499 kr

Høyest pris først:

Skjerm – 2499 kr

Hodetelefoner – 799 kr

Tastatur – 599 kr

Mus – 299 kr

Hva lærte jeg?

Jeg lærte at sort() endrer rekkefølgen på elementene i et array. Produktene beholder samme navn, pris og andre egenskaper, men vises i en annen rekkefølge på nettsiden.


## Steg 1 – lag en nedtrekksmeny

<img width="641" height="118" alt="image" src="https://github.com/user-attachments/assets/bf50f393-ee5d-4ec7-a696-c8bd567e14bc" />

<img width="944" height="460" alt="image" src="https://github.com/user-attachments/assets/731df779-8db5-49c0-9f93-a03f4205d801" />

Hva gjorde jeg?

Jeg laget en nedtrekksmeny i index.html slik at brukeren kan velge hvordan produktene skal sorteres.

Jeg la til fire alternativer: A til Å, Å til A, Lavest pris først og Høyest pris først.

Kode fra index.html:

<select id="sortering">
    <option value="standard">Sorter produkter</option>
    <option value="az">A til Å</option>
    <option value="za">Å til A</option>
    <option value="lavest">Lavest pris først</option>
    <option value="hoyest">Høyest pris først</option>
</select>

Testing og resultat

Jeg åpnet nettsiden og kontrollerte at nedtrekksmenyen viste alle fire sorteringsalternativene. Jeg testet også valgene og kontrollerte at produktene ble sortert riktig.

Hva lærte jeg?

Jeg lærte hvordan HTML-elementene select og option brukes til å lage en nedtrekksmeny som kan kobles til JavaScript.


## Steg 2 – finn nedtrekksmenyen med JavaScript

<img width="490" height="301" alt="image" src="https://github.com/user-attachments/assets/5078d503-a19f-4eba-9221-8389acc74137" />

<img width="943" height="506" alt="image" src="https://github.com/user-attachments/assets/f3dd1790-a266-4b18-bf65-f7246a7d5ade" />

Hva gjorde jeg?

Jeg brukte document.getElementById() i js/script.js for å hente nedtrekksmenyen med ID-en sortering.

Deretter brukte jeg addEventListener("change") for å registrere når brukeren velger et nytt sorteringsalternativ.

Kodeutdrag fra js/script.js:

const sortering = document.getElementById("sortering");

sortering.addEventListener("change", () => {
    const valg = sortering.value;
    console.log("Valgt sortering:", valg);
});

Dette er et forenklet eksempel. I den fullstendige løsningen bruker jeg verdien til å sortere produktene.

Testing og resultat

Jeg testet alle fire valgene i nedtrekksmenyen og kontrollerte at produktene endret rekkefølge riktig.

Hva lærte jeg?

Jeg lærte hvordan getElementById() finner et HTML-element, og hvordan change-eventet reagerer når brukeren velger et nytt alternativ.


## Steg 3 – finn ut hva brukeren valgte

<img width="510" height="254" alt="image" src="https://github.com/user-attachments/assets/d35acfc8-cda1-455e-9138-656ef18b4b81" />

<img width="950" height="483" alt="image" src="https://github.com/user-attachments/assets/fba046e6-d7b6-43f4-aef8-a6bf51476c69" />

Hva gjorde jeg?

Jeg brukte sortering.value i JavaScript for å hente verdien brukeren velger fra nedtrekksmenyen.

Når brukeren velger et alternativ, bruker programmet verdien til å bestemme hvordan produktene skal sorteres.

Kode fra index.html:

<option value="lavest">Lavest pris først</option>
<option value="hoyest">Høyest pris først</option>

Kodeutdrag fra js/script.js:

const sortering = document.getElementById("sortering");

sortering.addEventListener("change", () => {
    const valg = sortering.value;
    // Verdien brukes videre til å sortere produktene.
});

Testing og resultat

Jeg valgte «Lavest pris først» i nedtrekksmenyen. JavaScript hentet verdien lavest, og produktene ble sortert fra lavest til høyest pris.

Hva lærte jeg?

Jeg lærte forskjellen mellom teksten brukeren ser i en nedtrekksmeny, og verdien JavaScript mottar gjennom value.

## Steg 4 – sorter etter pris

<img width="950" height="483" alt="image" src="https://github.com/user-attachments/assets/4c1e026e-3309-4fe4-97fb-7a1ab115e0b2" />

Hva gjorde jeg?

Jeg brukte JavaScript-metoden sort() for å sortere produktene etter pris.

Jeg laget først en kopi av produktarrayet med [...produkter], slik at den opprinnelige rekkefølgen ikke ble endret.

Deretter brukte jeg a.pris - b.pris for å sortere produktene fra lavest til høyest pris.

Kodeutdrag fra js/script.js:

const sorterteProdukter = [...produkter];

sorterteProdukter.sort((a, b) => a.pris - b.pris);

visProdukter(sorterteProdukter);

Hvordan fungerer koden?

a og b representerer to produkter som sammenlignes. Når vi skriver a.pris - b.pris, kommer produktet med lavest pris først.

Testing og resultat

Jeg valgte «Lavest pris først» i nettleseren. Produktene ble vist i denne rekkefølgen:

Mus – 299 kr

Tastatur – 599 kr

Hodetelefoner – 799 kr

Skjerm – 2499 kr

Hva lærte jeg?

Jeg lærte hvordan sort() kan sortere JavaScript-objekter etter pris, og hvorfor det er nyttig å lage en kopi av arrayet før sortering.

## Steg 5 – sorter fra høyest til lavest pris

<img width="599" height="285" alt="image" src="https://github.com/user-attachments/assets/3f518b66-dfa6-421d-930b-0c1aac194a71" />

<img width="937" height="487" alt="image" src="https://github.com/user-attachments/assets/7a3c266d-304f-4093-a68c-ddfe6edee3d4" />

Hva gjorde jeg?

Jeg brukte JavaScript-metoden sort() for å sortere produktene fra høyest til lavest pris.

Jeg brukte b.pris - a.pris for å få motsatt rekkefølge av sorteringen i Steg 4.

Kodeutdrag fra js/script.js:

const sorterteProdukter = [...produkter];

sorterteProdukter.sort((a, b) => b.pris - a.pris);

visProdukter(sorterteProdukter);

Hvordan fungerer koden?

a og b representerer to produkter som JavaScript sammenligner.

a.pris - b.pris sorterer fra lavest til høyest pris.

b.pris - a.pris sorterer fra høyest til lavest pris.

Jeg brukte [...produkter] for å lage en kopi av produktarrayet før sortering.

Testing og resultat

Jeg valgte «Høyest pris først» i nedtrekksmenyen. Produktene ble vist i denne rekkefølgen:

Skjerm – 2499 kr

Hodetelefoner – 799 kr

Tastatur – 599 kr

Mus – 299 kr

Hva lærte jeg?

Jeg lærte hvordan jeg kan endre sorteringsrekkefølgen ved å bytte plass på a og b, og hvordan sort() kan brukes sammen med visProdukter() for å oppdatere nettsiden.


## Steg 6 – sorter tekst fra A til Å

<img width="665" height="307" alt="image" src="https://github.com/user-attachments/assets/4a3a7e4a-0c0a-4f93-9bd4-849063a685a0" />

<img width="955" height="552" alt="image" src="https://github.com/user-attachments/assets/62de1af7-2eca-4f97-a196-260fdf5e79d5" />

Hva gjorde jeg?

Jeg brukte JavaScript-metoden localeCompare() for å sortere produktene alfabetisk etter navn, fra A til Å.

Jeg laget en kopi av produktarrayet med [...produkter] før sorteringen, slik at det opprinnelige arrayet ikke ble endret.

Kodeutdrag fra js/script.js:

const sorterteProdukter = [...produkter];

sorterteProdukter.sort((a, b) =>
    a.navn.localeCompare(b.navn, "nb")
);

visProdukter(sorterteProdukter);

Hvordan fungerer koden?

a.navn og b.navn er navnene på to produkter som sammenlignes.

localeCompare() sammenligner tekst alfabetisk. Jeg brukte "nb" for norsk alfabetisk sortering.

Testing og resultat

Jeg valgte «A til Å» i nedtrekksmenyen og kontrollerte at produktene ble vist i denne rekkefølgen:

Hodetelefoner

Mus

Skjerm

Tastatur

Alle fire produktene ble sortert riktig.

Hva lærte jeg?

Jeg lærte at tall kan sorteres ved hjelp av subtraksjon, mens tekst kan sorteres med localeCompare(). Jeg lærte også hvordan sort() og visProdukter() brukes sammen for å oppdatere produktrekkefølgen.


## Steg 7 – sorter fra Å til A

<img width="582" height="283" alt="image" src="https://github.com/user-attachments/assets/7ebd6046-2c39-44ea-93fd-4cdebf6d5269" />

<img width="959" height="498" alt="image" src="https://github.com/user-attachments/assets/a51ff783-47d4-41fe-af4e-73cfdc618ee1" />

Hva gjorde jeg?

Jeg brukte sort() og localeCompare() for å sortere produktene i motsatt alfabetisk rekkefølge, fra Å til A.

Jeg byttet plass på a og b for å få motsatt rekkefølge av sorteringen i Steg 6.

Kodeutdrag fra js/script.js:

const sorterteProdukter = [...produkter];

sorterteProdukter.sort((a, b) =>
    b.navn.localeCompare(a.navn, "nb")
);

visProdukter(sorterteProdukter);

Hvordan fungerer koden?

a.navn.localeCompare(b.navn) sorterer fra A til Å, mens b.navn.localeCompare(a.navn) sorterer fra Å til A.

Jeg brukte "nb" for å sammenligne produktnavnene etter norsk alfabetisk rekkefølge.

Testing og resultat

Jeg valgte «Å til A» i nedtrekksmenyen og kontrollerte at produktene ble vist i denne rekkefølgen:

Tastatur

Skjerm

Mus

Hodetelefoner

Alle fire produktene ble sortert i motsatt alfabetisk rekkefølge.

Hva lærte jeg?

Jeg lærte hvordan jeg kan snu alfabetisk sortering ved å bytte plass på a og b i localeCompare(), uten å endre produktinformasjonen.

## Steg 8 – bruk if for å velge sortering

<img width="536" height="281" alt="image" src="https://github.com/user-attachments/assets/01271d7d-e817-45ab-a11d-cf29c6d34b4a" />

<img width="959" height="489" alt="image" src="https://github.com/user-attachments/assets/43933d2a-0abf-4eb5-94a7-2c122771c368" />

Hva gjorde jeg?

Jeg brukte if og else if i js/script.js for å bestemme hvordan produktene skal sorteres når brukeren velger et alternativ i nedtrekksmenyen.

Jeg brukte sortering.value for å hente valget og laget en kopi av produktarrayet med [...produkter].

Kode fra js/script.js:

const sortering = document.getElementById("sortering");

sortering.addEventListener("change", () => {
    const valg = sortering.value;
    const sorterteProdukter = [...produkter];

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
    }

    visProdukter(sorterteProdukter);
});

Hvordan fungerer koden?

Når brukeren velger et alternativ, kjører change-eventet. if og else if kontrollerer hvilket alternativ som er valgt.

Først sorteres produktene med sort(). Deretter bruker jeg visProdukter(sorterteProdukter) for å vise dem i riktig rekkefølge.

Testing og resultat

Jeg testet alle fire sorteringsalternativene:

A til Å: Hodetelefoner, Mus, Skjerm, Tastatur.

Å til A: Tastatur, Skjerm, Mus, Hodetelefoner.

Lavest pris først: Mus, Tastatur, Hodetelefoner, Skjerm.

Høyest pris først: Skjerm, Hodetelefoner, Tastatur, Mus.

Alle fire alternativene fungerte som forventet.

Hva lærte jeg?

Jeg lærte hvordan if/else if kan brukes sammen med sort() og change-eventet for å velge forskjellige sorteringsmetoder.

## Steg 9 – hvorfor kan det være lurt å kopiere arrayet?

<img width="674" height="133" alt="image" src="https://github.com/user-attachments/assets/b362d527-f0ac-47fb-8986-7f547ea0679a" />

<img width="959" height="481" alt="image" src="https://github.com/user-attachments/assets/a90bd7b2-62a3-4043-bf43-494836056a3b" />

Hva gjorde jeg?

Jeg brukte spread-syntax (...) for å lage en kopi av produktarrayet før jeg sorterte produktene.

Dette gjorde jeg fordi sort() endrer rekkefølgen på elementene i arrayet det brukes på. Jeg ønsket å beholde den opprinnelige rekkefølgen i produkter.

Kodeutdrag fra js/script.js:

const sorterteProdukter = [...produkter];

sorterteProdukter.sort((a, b) => a.pris - b.pris);

visProdukter(sorterteProdukter);

Hvordan fungerer koden?

produkter inneholder de opprinnelige produktobjektene.

[...produkter] lager et nytt array med de samme produktene.

sort() endrer rekkefølgen i kopien.

visProdukter() viser produktene i den nye rekkefølgen.

Testing og resultat

Jeg testet sortering etter både navn og pris. Produktene ble vist i riktig rekkefølge, uten at jeg trengte å endre det opprinnelige produktarrayet.

Hva lærte jeg?

Jeg lærte at sort() endrer arrayet det brukes på, og at spread-syntax kan brukes til å lage en kopi. Dette er nyttig når jeg senere vil kombinere sortering med søk og filtrering.

## Hele sorteringsfunksjonen kan da ligne på

Hva gjorde jeg?

Jeg samlet sorteringsfunksjonen i js/script.js slik at brukeren kan sortere produktene etter navn eller pris.

Jeg brukte addEventListener("change"), if/else if, sort() og localeCompare() for å håndtere de forskjellige valgene.

Kode fra js/script.js:

const sortering = document.getElementById("sortering");

sortering.addEventListener("change", () => {
    const valg = sortering.value;
    const sorterteProdukter = [...produkter];

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
    }

    visProdukter(sorterteProdukter);
});

Testing og resultat

Jeg testet alle fire sorteringsalternativene i nettleseren:

A til Å – alfabetisk rekkefølge.

Å til A – motsatt alfabetisk rekkefølge.

Lavest pris først – fra billigst til dyrest.

Høyest pris først – fra dyrest til billigst.

Alle fire alternativene fungerte som forventet.

Hva lærte jeg?

Jeg lærte hvordan flere sorteringsvalg kan samles i én funksjon. Jeg fikk også bedre forståelse av hvordan change-eventet, if/else if, sort() 
og visProdukter() samarbeider.

## Grunnoppgaven

Hva gjorde jeg?

Jeg laget en sorteringsfunksjon i nettbutikken slik at brukeren kan velge hvordan produktene skal vises.

Jeg brukte sort(), localeCompare() og visProdukter() for å sortere produktobjektene etter navn og pris.

Kodeutdrag fra js/script.js:

// Lavest pris først
sorterteProdukter.sort((a, b) => a.pris - b.pris);

// Høyest pris først
sorterteProdukter.sort((a, b) => b.pris - a.pris);

// A til Å
sorterteProdukter.sort((a, b) =>
    a.navn.localeCompare(b.navn, "nb")
);

// Å til A
sorterteProdukter.sort((a, b) =>
    b.navn.localeCompare(a.navn, "nb")
);

// Viser produktene på nytt
visProdukter(sorterteProdukter);

Testing og resultat

Jeg testet alle fire sorteringsalternativene i nettleseren. Produktene ble vist i riktig rekkefølge etter både navn og pris.

Hva lærte jeg?

Jeg lærte hvordan sort() kan endre rekkefølgen på produkter, og hvordan visProdukter() oppdaterer produktkortene uten å endre informasjonen om produktene.

## Utfordring 1 – kombiner filtrering og sortering

<img width="587" height="205" alt="image" src="https://github.com/user-attachments/assets/f6aaab37-7500-45db-a4a4-81772ded839a" />

<img width="946" height="506" alt="image" src="https://github.com/user-attachments/assets/a0dc516a-0665-40a5-98cd-8bcaf8fb632e" />

Hva gjorde jeg?

Jeg kombinerte filtrering og sortering slik at brukeren kan velge en produktkategori og deretter sortere bare produktene i denne kategorien.

Jeg brukte filter() for å velge riktige produkter og sort() for å endre rekkefølgen.

Kodeutdrag fra js/script.js:

const kategori = document.getElementById("kategoriFilter").value;

const sorterteProdukter = produkter.filter(produkt => {
    if (kategori === "Alle") return true;

    if (kategori === "Tastatur") {
        return produkt.navn === "Tastatur";
    }

    return produkt.kategori === kategori;
});

Etter filtreringen sorterer jeg sorterteProdukter etter brukerens valg og viser resultatet med:

visProdukter(sorterteProdukter);

Testing og resultat

Jeg valgte kategorien «Tilbehør» og deretter «Høyest pris først».

Produktene ble vist i riktig rekkefølge:

Hodetelefoner – 799 kr

Tastatur – 599 kr

Mus – 299 kr

Produktet «Skjerm» ble ikke vist fordi det tilhører kategorien «Skjermer».

Hva lærte jeg?

Jeg lærte hvordan filter() og sort() kan brukes sammen. Først filtrerer jeg produktene etter kategori, deretter sorterer jeg resultatet og viser det med visProdukter().

## Utfordring 2 – kombiner søk, filtrering og sortering

<img width="574" height="182" alt="image" src="https://github.com/user-attachments/assets/a7847e59-23a0-4baf-b511-8d0b11034a70" />

<img width="950" height="495" alt="image" src="https://github.com/user-attachments/assets/8314a9d4-03f3-4262-a775-040e2e96da56" />

Hva gjorde jeg?

Jeg kombinerte søk, filtrering og sortering slik at brukeren kan søke etter produkter, velge kategori og sortere resultatene.

Jeg brukte filter() for å kontrollere både søketeksten og kategorien. Deretter brukte jeg sort() og visProdukter() for å vise resultatet i riktig rekkefølge.

Kodeutdrag fra js/script.js:

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

    return passerSok && passerKategori;
});

For å oppdatere resultatene når kategorien endres, brukte jeg også:

kategoriFilter.addEventListener("change", () => {
    sortering.dispatchEvent(new Event("change"));
});

Etter filtreringen sorteres produktene etter valgt sorteringsmetode og vises med visProdukter(sorterteProdukter).

Testing og resultat

Jeg testet følgende:

Valgte kategorien «Tilbehør».

Valgte «Høyest pris først».

Kontrollerte at Hodetelefoner, Tastatur og Mus ble vist i riktig prisrekkefølge.

Skrev «mus» i søkefeltet.

Resultatet var at bare Mus – 299 kr ble vist.

Hva lærte jeg?

Jeg lærte hvordan filter() og sort() kan kombineres, og hvordan hendelser kan brukes til å oppdatere produktene når brukeren endrer søk, kategori eller sortering.


## Utfordring 3 – sorter etter en ny egenskap

<img width="562" height="227" alt="image" src="https://github.com/user-attachments/assets/afb2a935-2d5d-4197-87a1-60f246d52635" />

<img width="957" height="486" alt="image" src="https://github.com/user-attachments/assets/01009ec9-b266-4170-93b1-17d92034ee02" />

Hva gjorde jeg?

Jeg la til en ny egenskap, rating, på alle fire produktene i js/produkter.js.

Deretter la jeg til sorteringsvalget «Beste vurdering først» i index.html og brukte sort() i js/script.js for å vise produktene fra høyest til lavest vurdering.

Kode fra js/produkter.js:

// Eksempel på rating for produktene
rating: 4.2 // Tastatur
rating: 4.7 // Mus
rating: 4.5 // Skjerm
rating: 4.8 // Hodetelefoner

Kode fra index.html:

<option value="rating">Beste vurdering først</option>

Kodeutdrag fra js/script.js:

else if (valg === "rating") {
    sorterteProdukter.sort((a, b) => b.rating - a.rating);
}

Testing og resultat

Jeg valgte «Beste vurdering først» i nettleseren. Produktene ble vist i riktig rekkefølge:

Hodetelefoner – 4.8

Mus – 4.7

Skjerm – 4.5

Tastatur – 4.2

Hva lærte jeg?

Jeg lærte hvordan jeg kan legge til en ny egenskap på produktobjekter og bruke den til sortering. Jeg lærte også at b.rating - a.rating viser høyeste vurdering først.

Tenk gjennom løsningen – Hva har jeg lært?

Hva gjør sort()?

sort() sammenligner elementene i et array og endrer rekkefølgen deres.

Hva er a og b?

a og b representerer to produktobjekter som JavaScript sammenligner.

Hvordan fungerer sortering etter pris?

a.pris - b.pris  // Lavest pris først
b.pris - a.pris  // Høyest pris først

Hvorfor bruker jeg localeCompare()?

Jeg bruker localeCompare() for å sortere produktnavn alfabetisk.

a.navn.localeCompare(b.navn, "nb") // A til Å
b.navn.localeCompare(a.navn, "nb") // Å til A

Hvorfor bruker jeg [...produkter]?

Jeg lager en kopi av produktarrayet slik at jeg kan sortere produktene uten å endre rekkefølgen i original-arrayet.

const sorterteProdukter = [...produkter];

Hvorfor bruker jeg visProdukter()?

sort() endrer rekkefølgen i arrayet, men nettsiden må oppdateres for at brukeren skal se resultatet.

visProdukter(sorterteProdukter);

Testing og resultat

Jeg testet sortering fra A til Å, Å til A, lavest pris først, høyest pris først og beste vurdering først. Alle alternativene fungerte.

Jeg testet også sortering sammen med søk og kategorifiltrering.

Hva lærte jeg?

Jeg lærte hvordan JavaScript sammenligner produkter, hvordan if/else if bestemmer sorteringsmetoden, og hvordan visProdukter() viser resultatet på nettsiden.


## Extraoppgave – Dynamisk prisfilter med slider

<img width="943" height="544" alt="image" src="https://github.com/user-attachments/assets/92c64186-6acf-45b2-b258-da9d53cac0ea" />

<img width="959" height="499" alt="image" src="https://github.com/user-attachments/assets/333cbc85-954a-43de-9cd2-e6cbebd7cc85" />

Hva gjorde jeg?

Jeg laget et dynamisk prisfilter som ligner på prisfilteret hos Elkjøp.

Brukeren kan åpne og lukke prisfilteret ved å klikke på «Pris». Når brukeren flytter slideren, oppdateres maksimalprisen, antall produkter og produktene som vises.

Jeg kombinerte også prisfilteret med søk, kategorifiltrering og sortering.

Kode fra index.html

<details class="prisFilterBoks">
    <summary>Pris</summary>

    <div class="prisInnhold">
        <div class="prisVerdier">
            <span>0 kr</span>
            <span id="maksPrisTekst">3000 kr</span>
        </div>

        <input type="range" id="prisSlider"
               min="0" max="3000" value="3000" step="100">

        <p id="prisResultat">Vis 4 produkter</p>
    </div>
</details>

Kodeutdrag fra js/script.js

const passerPris =
    produkt.pris <= Number(document.getElementById("prisSlider").value);

return passerSok && passerKategori && passerPris;

Oppdatering av antall produkter:

const antall = sorterteProdukter.length;

document.getElementById("prisResultat").textContent =
    "Vis " + antall +
    (antall === 1 ? " produkt" : " produkter");

Testing og resultat

Prisfilteret åpnes og lukkes.

Sliderens verdi beholdes når filteret lukkes.

Maksimalprisen oppdateres når slideren flyttes.

Antall produkter beregnes riktig.

Prisfilteret fungerer sammen med søk og kategori.

Prisfilteret fungerer sammen med sortering.

Jeg testet blant annet «Skjermer» med maksimalpris 500 kr og fikk 0 produkter. Med «Tilbehør» og maksimalpris 500 kr fikk jeg Mus. Ved maksimalpris 1000 kr og «Høyest pris først» ble tre produkter vist i riktig rekkefølge.

Hva lærte jeg?

Jeg lærte å bruke <details>, <summary> og input type="range" for å lage et prisfilter som kan åpnes, lukkes og justeres.

Jeg lærte også hvordan filter(), sort() og visProdukter() kan samarbeide for å oppdatere nettsiden.
































