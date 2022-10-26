'use strict';
// PROMPT 
let userName = prompt("Iveskite savo varda: ");
let greet = `Labas, ${userName} !`;
console.log(greet)
document.getElementById('js-data').innerHTML = greet;

let grades = [1, 2, 3, 5, 6, 8];
let newGrades = grades.map((el) => {
    return el ** 2;
});

console.table(newGrades)

let miles = [100, 200, 300, 400, 400];
function convertToKilometres(milesArr, callback) {
    let kilometers = milesArr.map((mile) => Math.round(mile * 1.609));
    console.log(kilometers);
    callback(kilometers)
}

function totalDistance(km) {
    let sum = 0;
    km.forEach(element => {
        sum += element;
    });
    console.table(sum);
}

convertToKilometres(miles, totalDistance);


let numbers = [4, 5, 8, 9, 10]
function addPlusFour() {
    let newNumbers = numbers.map((number) => number+4);
    return newNumbers;
}

let normaliai = `Atsakymai: ${addPlusFour()}`
console.log(normaliai)

console.log(addPlusFour())