from flask import Flask, request
import json
from config import db
from flask_cors import CORS

# Global Var
items = []

app = Flask(__name__)
CORS(app)

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
    cursor = db.products.find({})
    results = []
    for prod in cursor:
        if "category" in prod:
            results.append(fix_id(prod))
    return json.dumps(items)

@app.get("/api/categories")
def getCategories():
    cursor = db.product.find({})
    cats = []
    for prod in cursor:
        if "category" in prod:
            cat = prod["category"]
            if cat not in cats:
                cats.append(prod["category"])
    return json.dumps(items)

app.run(debug = True)