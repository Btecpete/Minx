function login () {
    var user_email = document.getElementById('login_email').value;
    var user_password = document.getElementById('login_password').value;
    var email = 'hey@com';
    var password = 'hey';

    if (user_email === email && user_password === password ) {
        window.location = "http://localhost:63342/Minx/Jim/templates/intro.html?_ijt=e5i721c5svhi1sj823qk7rcal0";
    } else {
        document.write("Not logged in");
    }
}
