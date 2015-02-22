var express = require ("express");
var path = require ("path");
var app = express();
app.use (express.static(path.join (__dirname,"")));

app.get ("/hello", function (requests, response))
{
    console.log ("Responding to /helo");
    response.sendFile (path.join (__dirname, "welcome.html"))
});

var server = app.listen(8080, function ()
{
    var host = server.address().address;
    var port = server.address().port;

    console.log("Chriss' Diner web app listening at http://%s:%s", host, port);
})