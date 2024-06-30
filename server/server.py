from flask import Flask, request
import json
import pymongo
import certifi

# Global Var
items = []

app = Flask(__name__)

@app.get("/")
def home():
    return "Hello from flask"

@app.get("/test")
def test():
    return "Hello from the test page"

# API endpoints
# JSON
# create an API to perfom a get request this url: /api/about
# return your nme as a message

@app.get("/api/about")
def about():
    me =  {"name":"Johan Barragan"}
    return json.dumps(me)

products = []

@app.post("/api/products")
def saveProducts():
    product = request.get_json()
    print(product)
    # mock the save
    items.append(product)
    return json.dumps(product)

@app.get("/api/products")
def getProducts():
    return json.dumps(items)

app.run(debug = True)