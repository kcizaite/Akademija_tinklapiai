// JSON sugeneruojame https://www.mockaroo.com/ 

// import myJson from './MOCK_DATA.json' assert {type: 'json'};

// let originalJson = [...myJson];
// console.log(originalJson);
// // Rikiavimas pagal first_name

// myJson.sort((a, b) => {
//     // pirma viska pasiversti mazosiomis raidemis
//     let fa = a.first_name.toLowerCase();
//     let fb = b.last_name.toLowerCase();
//     if (fa < fb) {
//         return -1;
//     }
//     if (fa > fb) {
//         return 1;
//     }
//     return 0;
// })
// console.log(myJson);

// import myJson from './MOCK_DATA.json' assert {type: 'json'};
// let originalJson = [...myJson];
// console.log(originalJson);

// //rikiavimas pagal first_name

// myJson.sort((a, b) => {
//     let fa = a.first_name.toLowerCase();
//     let fb = b.first_name.toLowerCase();
//     if (fa < fb) {
//         return -1;
//     }
//     if (fa > fb) {
//         return 1;
//     }
//     return 0;
// })

// console.log(myJson);

// myJson.forEach((user) => {
//     document.getElementById('users').innerHTML += `
//     <tr>
//         <th scope="row">${user.id}</th>
//         <td>${user.first_name}</td>
//         <td>${user.last_name}</td>
//         <td>${user.email}</td>
//         <td>${user.gender}</td>
//         <td>${user.ip_address}</td>
//     </tr>
//     `
// })

// document.getElementById('page-title').style.backgroundColor = "lightblue";

// let hd = document.querySelector('#page-title'); // elementu selectinimas
// hd.setAttribute('class', 'title' ) // pridesime klase jeigu tokios neturime, jeigu turime, tai pakeis, pervadins
// hd.classList.add('first-page') // nauja klase pridesime i ta sena klase, per F12 matosi pokyciai

// function changeColor(){
//     document.body.style.backgroundColor = "#ff2211"
// }

// Kitoks mygtukas
// function mouseOver(obj) {
//     obj.innerHTML="Hello 😵‍💫"
// }

// function mouseOut(obj) {
//     obj.innerHTML="GoodBye 🥳"
// }

// Klausykla
let myButton = document.querySelector('#but')

myButton.addEventListener("click", () => {
    myButton.setAttribute('class', 'active')
})