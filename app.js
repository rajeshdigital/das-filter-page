
// express server
var exp = require("express");
var app = exp();
app.use(exp.static(__dirname + "/public"));
var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server is running ON at " + port);
    });