const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const errorText = document.getElementById("error-text");
const btnsign = document.getElementById("btn-sign")


import { addUsers } from ".registration";

console.log(addUsers);

btnsign.addEventListener("click", (e) => {

    const errors = [];

    if (username.value.trim() === "") {
        errors.push("Username required")
    }

    if (password.value.length <= 0) {
        errors.push("Pleas enter your passowrd")

    }

    if (errors.length > 0) {
        e.preventDefault();
        errorMessage.toggleAttribute('hidden');
        errorMessage.innerHTML = errors.join(', ');
        return;
    }


    // const user = {
    //     username: username.value,
    //     password: password.value,
    //     email: email.value,
    // }

    // users.push(user)



    window.location.href = "./userpage.html";
})



checkbox.addEventListener("change", (e) => {
    console.log(e.target.checked)
    if (e.target.checked) {
        btnsign.disabled = false;
    }
})


// console.log(users)

