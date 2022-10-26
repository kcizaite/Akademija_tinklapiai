// JSON sugeneruojame https://www.mockaroo.com/ 

import myJson from './MOCK_DATA.json' assert {type: 'json'};

// Rikiavimas pagal first_name

myJson.sort((a, b) => {
    // pirma viska pasiversti mazosiomis raidemis
    let fa = a.first_name.toLowerCase();
    let fb = b.first_name.toLowerCase();
    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
})
console.log(myJson);


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