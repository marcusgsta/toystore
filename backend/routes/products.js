const express = require('express');
const router = express.Router();

/*GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.json([
        {
        "id": 1,
        "name": "Jet_1",
        "category": "plane",
        "price": 10,
        "imagePath": "/images/ethan-mcarthur-1BRYdVhFnqc-unsplash.jpg"
        },
        {
        "id": 2,
        "name": "Jet_2",
        "category": "plane",
        "price": 12,
        "imagePath": "/images/ethan-mcarthur-1BRYdVhFnqc-unsplash.jpg"
        },
        {
        "id": 3,
        "name": "Yacht_1",
        "category": "yacht",
        "price": 6,
        "imagePath": "/images/ethan-mcarthur-1BRYdVhFnqc-unsplash.jpg"
        },
        {
        "id": 4,
        "name": "Yacht_2",
        "category": "yacht",
        "price": 9,
        "imagePath": "/images/ethan-mcarthur-1BRYdVhFnqc-unsplash.jpg"
        },
        {
        "id": 5,
        "name": "Car_1",
        "category": "car",
        "price": 2,
        "imagePath": "/images/ethan-mcarthur-1BRYdVhFnqc-unsplash.jpg"
        },
        {
        "id": 6,
        "name": "Car_2",
        "category": "car",
        "price": 3,
        "imagePath": "/images/ethan-mcarthur-1BRYdVhFnqc-unsplash.jpg"
    }]);
});

module.exports = router;