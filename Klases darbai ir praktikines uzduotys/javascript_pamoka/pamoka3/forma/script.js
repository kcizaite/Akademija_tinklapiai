const myForm = document.querySelector('#my-form');
const firstName = document.querySelector('#first-name');
const userEmail = document.querySelector('#email');

const users = [];
// Iskart rasome su f-ja, visada event eina i f-ja
myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // sustabdome persikrovima pagal nutylejima, pati submit

    let name = firstName.value;
    let email = userEmail.value;

    // Userio objektas
    let user = { name, email }

    users.push(user)
    console.log(user)
    console.log(users)
    myForm.reset()
})
