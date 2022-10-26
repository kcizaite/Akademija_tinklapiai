const myForm = document.querySelector('#my-form');
const firstName = document.querySelector('#first-name');
const userEmail = document.querySelector('#email');
const userPhone = document.querySelector('#tel')
const userMessage = document.querySelector('#textarea')

const users = [];
// Iskart rasome su f-ja, visada event eina i f-ja
myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // sustabdome persikrovima pagal nutylejima, pati submit

    let name = firstName.value;
    let email = userEmail.value;
    let phone = userPhone.value;
    let message = userMessage.value;
    let data = new FormData(myForm);
    let object = {};

    // Userio objektas
    let user = { name, email, phone, message}
    users.push(user)
    console.log(user)
    console.log(users)
    myForm.reset()

    // JSON SUKURIMAS
    data.forEach((value, key) => (object[key] = value));
    let json = JSON.stringify(object);
    console.log(object);
    console.log(json);
   alert("Duomenys priimti")
})