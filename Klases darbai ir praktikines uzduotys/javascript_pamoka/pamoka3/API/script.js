const quoteButton = document.querySelector('#get-quote')
const quoteHtml = document.querySelector('#quote-place')

// Funkcija, kuri is serverio paima quote ir isconsolelogina (simpsons api serveris)
function fetchQuote() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes') //fetch asinchronine funckija - jos is karto ivykti negali
        .then(response => response.json())
        // .then(data => console.log(data)) // callback
        .then(data => {
            quoteHtml.innerHTML = data[0].quote;
        }) // callback
        .catch(error => alert(error.message))
}

quoteButton.addEventListener("click", fetchQuote);
