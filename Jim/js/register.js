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
    if (checkIfEmpty(password_field) === false) {
        // Checks if password meets length requirements
        if (meetLength(password_field, 6, 100) === true){
            // Create password security requirements e.g. at least 1 number
            // The number in the 'code' part represents case, check the switch statement to select desired password
            // requirements. 
            !containCharacters(password_field, 4);
        }
    }
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
// Function that sets a field to invalid
function setInvalid(field, message) {
    // field.className = "invalid";
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
    $ (document).ready(function () {
        $(field).css('border-bottom', '1px solid red')
    });
}
// Function that sets a field to valid
function setValid(field) {
    // field.className = "valid";
    field.nextElementSibling.innerHTML = '';
    $ (document).ready(function () {
        $(field).css('border-bottom', '1px solid white')
    });
}

// Function checks whether password length is valid
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

// Different password requirements. Any can be set in the containCharacters() function
function containCharacters(field, code) {
    let regEx;
    switch (code) {
        case 1:
            // Letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(regEx, field, `Must contain at least 1 letter`);
        case 2:
            // Letters and numbers
            regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
            return matchWithRegEx(regEx, field, "Must contain at least 1 letter and 1 number");
        case 3:
            // Uppercase, lowercase and numbers
            regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
            return matchWithRegEx(regEx, field, "Must contain at least 1 uppercase, 1 lower case and 1 number");
        case 4:
            // Uppercase, lowercase, numbers and special character
            regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
            return matchWithRegEx(regEx, field, "Must contain at least 1 uppercase," +
                " 1 lower case, 1 number and 1 special character");
        default:
            return false;
    }
}

// Function that matches value to regular expression to see if requirements filled out
function matchWithRegEx(regEx, field, message) {
    if (field.value.match(regEx)){
        setValid(field);
        return true;
    } else {
        setInvalid(field, message);
        return false;
    }
}

