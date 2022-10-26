// Visada pradzioje rasome
'use strict';

// SU HTML/WEBSITE VERSIJA
// Si matysime tik web -> F12 -> console
console.log("Hello World");
// <p> -> indexe
// document.getElementById('js-data').innerHTML="Labas Pasauli!";
// Alertas -> lentele, kuri sakys -> bet tik narsykleje
alert("Karoooolina")

// Kintamasis be reiksmes/su reikmes
// const PAVADINIMAI UPPERCASE
let surname;
let firstName = "Karolina";
let age = 29;
let greeting = `Hello, ${firstName}!`;

let htmlData = `
<h2>${greeting}</h2>
<p>${firstName} age is ${age}</p>
`;
// Tipas -> string gaunasi
console.log(typeof htmlData)

document.getElementById('root').innerHTML = htmlData

// Tuscias masyvas
let arrEmpty = [""]
let arr = ["🤣", "🤩"] // CTRL i 
let expenses = [200, 500, 2]
let ex = expenses[1] // indeksas
// Objektai 
let obj = { vardas: "Bona", veiksle: "Vokieciu aviganis", spalva: "Juodai-ruda" }

// NODE JS (atsisiunciame)
// NODE NEREIKIA INDEX.HTML
// console.log("Labas pasauli");
// terminal -> node script (scripto pavadinimas mano script)