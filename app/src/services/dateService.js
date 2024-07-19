const categories = ['Fruit','Vegetable']

const data = [
    {
        "title": "Banana",
        "price": 12.33,
        "category": "fruit",
        "image": "banana.png",
        "_id": "34"
    },
    {
        "title": "Apple",
        "price": 10.50,
        "category": "fruit",
        "image": "apple.png",
        "_id": "35"
    },
    {
        "title": "Carrot",
        "price": 5.20,
        "category": "vegetable",
        "image": "carrot.png",
        "_id": "36"
    },
    {
        "title": "Lettuce",
        "price": 4.30,
        "category": "vegetable",
        "image": "lettuce.png",
        "_id": "37"
    },
    {
        "title": "Orange",
        "price": 8.75,
        "category": "fruit",
        "image": "orange.png",
        "_id": "38"
    },
    {
        "title": "Tomato",
        "price": 7.60,
        "category": "vegetable",
        "image": "tomato.png",
        "_id": "39"
    },
    {
        "title": "Strawberry",
        "price": 15.00,
        "category": "fruit",
        "image": "strawberry.png",
        "_id": "40"
    }
];

class DataService{

    getProducts(){
        return data;
        
    }

    getCategories(){
        return categories;
        
    }
}

export default new DataService();