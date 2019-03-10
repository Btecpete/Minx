function login () {
    var user_email = document.getElementById('login_email').value;
    var user_password = document.getElementById('login_password').value;
    var email = 'hey@com';
    var password = 'hey';

    if (user_email === email && user_password === password ) {
        window.location = "https://google.com"
    } else {
        document.write("Not logged in")
    }
}
