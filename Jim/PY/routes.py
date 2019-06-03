from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html", title="Home")


@app.route("/signup")
def signup():
    return render_template("signup.html", title="Sign Up")
