var express = require('express');
var fs = require('fs');
var datafile = 'server/data/employees.json';
var router = express.Router();

/* GET all books and POST new readers */
router.route('/employees')
    .get(function (req, res) {
        var data = getReaderData();
        res.send(data);
    })

function getReaderData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

module.exports = router;