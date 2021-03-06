var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "192.168.99.100",
    port: 3306,
    user: "root",
    password: "docker",
    database: "burgers_db"
  });
}
  
  // Making the connection
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected to db on thread " + connection.threadId);
  });
  
  // Exporting the connection for ORM use
  module.exports = connection;
  