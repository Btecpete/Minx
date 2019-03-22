// Input fields
const username_field = document.getElementById("register_username");
const email_field = document.getElementById("register_email");
const password_field = document.getElementById("register_password");
const conf_pass_field = document.getElementById("conf_pass");
const submit_btn = document.getElementById("btn-register");

// Invalid colour
const red = '#ff0000';


function validateUsername() {
    // Checks if username input empty
    checkIfEmpty(username_field);
    checkIfEmpty(email_field);
    checkIfEmpty(password_field);
    checkIfEmpty(conf_pass_field);
    checkPasswordsMatch()
}

function checkIfEmpty(field) {
    // Trims white spaces
    if (isEmpty(field.value.trim())) {
        // Field set invalid
        setInvalid(field, `${field.name} cannot be empty`);
        return true
    } else {
        // Field set valid
        setValid(field);
        return false
    }
}

function isEmpty(value) {
    // Returns true if value = whitespace, false if false
    return value === '';
}
function setInvalid(field, message) {
    // field.className = "invalid";
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
    $ (document).ready(function () {
        $(field).css('border-bottom', '1px solid red')
    });
}
function setValid(field) {
    // field.className = "valid";
    field.nextElementSibling.innerHTML = '';
    $ (document).ready(function () {
        $(field).css('border-bottom', '1px solid white')
    });
}

