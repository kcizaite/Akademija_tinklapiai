const quoteButton = document.querySelector('#get-quote');
const quoteHtml = document.querySelector('#quote-place');

let num = Math.floor(Math.random() * 11); // 11, nes range iki 10
let url = 'https://testimonialapi.toolcarton.com/api/' + num;

function fetchQuote() {
    fetch(url) 
        .then(response => response.json())
    //    .then(data=>console.log(data))
        .then(data=>{
            quoteHtml.innerHTML=data[8].data;
        })
        .catch(error => alert(error.message))
}

quoteButton.addEventListener("click", fetchQuote);
