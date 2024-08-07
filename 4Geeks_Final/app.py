from flask import Flask, jsonify, request
#from models import User, Addresses


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


app.run(host='0.0.0.0', port=5000)