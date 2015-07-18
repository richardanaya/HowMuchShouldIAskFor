var express = require('express');
var request = require('request');

var configureServer = function () {
    var server = express.createServer();

    server.configure(
        function () {
            console.log(__dirname);
            //any static file from the static directory, just return it to user if requested
            server.use(express.static(__dirname + '/../../build/'));
        }
    );
    return server;
};

var port = process.env.PORT || 5000;
var server = configureServer();

server.listen(port);
console.log("listening on port " + port);
