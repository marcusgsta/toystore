const express = require('express');
const router = express.Router();
const fs = require('fs');

function updateFile(client) {
    if (Object.keys(client).length !== 0) {
        // write new json file - overwrite the old one
        fs.writeFile(__dirname + '/../db/client.json', JSON.stringify(client), err => {
            if (err) {
                console.log(err);
            } else {
                console.log("File saved.")                        
                }
            });
    }
}

/*GET users listing. */
router.put('/', function(req, res, next) {
    console.log("req.body", req.body);
    // request should contain an object {"balance" : 100}
    let newBalance = 0;
    let client = {};
    try {
        newBalance = req.body.balance; 
    } catch (err) {
        console.log(err);
        response.json(err);
    };
    // read json file with client info
    fs.readFile(__dirname + '/../db/client.json', 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err);
        } else {
            try {
                client = JSON.parse(jsonString);
                // set new balance
                client[0].balance = newBalance;
                console.log("updated client:", client);
                
                updateFile(client);                        
            } catch(err) {
                console.log('Error parsing JSON', err);
            }
        }
    });

});

module.exports = router;