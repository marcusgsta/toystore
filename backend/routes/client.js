const express = require('express');
const router = express.Router();
const fs = require('fs');

/*GET users listing. */

router.get('/', function(req, res, next) {
    fs.readFile(__dirname + '/../db/client.json', 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err);
        } else {
            try {
                let client = JSON.parse(jsonString);
                console.log("sending:", client);
                res.json(client);
                                        
            } catch(err) {
                console.log('Error parsing JSON', err);
            }

        }
    });

});

module.exports = router;