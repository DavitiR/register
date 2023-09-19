const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const checkbox = document.getElementById("checkbox");
const errorText = document.getElementById("error-text");
const btnsign = document.getElementById("btn-sign")


 

export const addUsers = (ev) => {
    const users = []
    ev.preventDefault();
    let user = {
        id: Date.now(),
        fullName: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password")
    }
    users.push(user);
    document.forms[0].reset();


    console.warn('added', { users });
    let pre = document.querySelector("error-text");
    pre.textContent = '\n' + JSON.stringify(users, '\t', 2);
}

    document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-sign").addEventListener('click', addUsers)
});


btnsign.addEventListener("click", (e) => {

    const errors = [];

    if (username.value.trim() === "") {
        errors.push("Username required")
    }

    if (password.value.length <= 0) {
        errors.push("Pleas enter your passowrd")

    }

    if (password.value.length < 5) {
        errors.push("Password must be at least 5 characters")
    }

    if (!checkbox.checked) {
        errorText.innerText = "Please agree to the terms & policy before proceeding.";
        btnsign.disabled = true;
        return;
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



    window.location.href = "/main.html";
})



checkbox.addEventListener("change", (e) => {
    console.log(e.target.checked)
    if (e.target.checked) {
        btnsign.disabled = false;
    }
})


// console.log(users)



