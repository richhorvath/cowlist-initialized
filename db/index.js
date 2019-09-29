const mysql = require("mysql");
const connection = mysql.createConnection({
  user: "student",
  password: "student",
  database: "cowlist"
});
exports.connect = function() {
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }

    console.log("connected as id " + connection.threadId);
  });
};
exports.get = () => {
  console.log("query called");
};
exports.insert = () => {
  console.log("insert called");
};
exports.update = () => {
  console.log("update callled");
};
