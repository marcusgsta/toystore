const express = require('express');
const router = express.Router();

/*GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    
    // and insert something like this instead:
    res.json([{
        id: 1,
        username: "sam"
    }, {
        id: 2,
        username: "Dolores"
    }]);
});

module.exports = router;