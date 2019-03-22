// Input fields
// Register
const username_field = document.getElementById("register_username");
const email_field = document.getElementById("register_email");
const password_field = document.getElementById("register_password");
const conf_pass_field = document.getElementById("conf_pass");
const submit_btn = document.getElementById("btn-register");

// Login
const email_login = document.getElementById("login_email");
const password_login = document.getElementById("login_password");

// Invalid colour
const red = '#ff0000';


function validateInputsRegister() {
    // Checks if register inputs input empty
    checkIfEmpty(username_field);
    checkIfEmpty(email_field);
}

function validateInputsLogin() {
    // Checks if login inputs empty
    checkIfEmpty(email_login);
    checkIfEmpty(password_login);
}

function validatePassword() {
    // Checks if password field is empty
    checkIfEmpty(password_field);
    // Checks if password meets length requirements
    !meetLength(password_field, 6, 100);
    // Create password security requirements e.g. at least 1 number
    !containCharacters(password_field, 1);
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

function meetLength(field, minLength, maxLength) {
    if (field.value.length >= minLength && field.value.length < maxLength) {
        setValid(field);
        return true;
    } else if (field.value.length < minLength) {
        setInvalid(field, `${field.name} must be at least ${minLength} characters`);
        return false;
    } else {
        setInvalid(field, `${field.name} must be shorter than ${maxLength} characters`);
        return false;
    }
}

function containCharacters(field, code) {
    let regEx;
    switch (code) {
        case 1:
            // Letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(regEx, field, `Must contain at least 1 letter`);
        default:
            return false;
    }
}

function matchWithRegEx(regEx, field, message) {
    if (field.value.match(regEx)){
        setValid(field);
        return true;
    } else {
        setInvalid(field, message);
        return false;
    }
}

