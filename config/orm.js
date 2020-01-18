var connection = require("./connection.js");

var orm = {
    
    selectAll: function() {
        var queryString = 'SELECT * FROM burgers';
        connection.query(queryString, function(err, results) {
            if (err) throw err;
            console.log(result);
        })
    },
    insertOne: function(burgerName) {
        var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
        connection.query(queryString, [burgerName], function(err, results) {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function(id, devoured) {
        var queryString = 'UPDATE burgers SET devoured = ? WHERE id = ?';
        connection.query(queryString, [devoured, id], function(err, results) {
            if (err) throw err;
            console.log(result);
        })
    }

}

module.exports = orm;