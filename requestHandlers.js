/**
 * Created by jsg665 on 10/29/2014.
 */

//var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");

function start(response, postData){
    console.log("Request handler 'start' was called.");

var body = '<html>'+
        '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}//end start

function upload(response,postData){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("You've sent the text: " + querystring.parse(postData).text);
    response.end();
}//end upload

function show(response){
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("tmp/test.png").pipe(response);
}//end show

exports.start = start;
exports.upload = upload;
exports.show = show;

/*
 exec("ls -lah", function(error,stdout,stderr){
 response.writeHead(200, {"Content-Type": "text/plain"});
 response.write(stdout);
 response.end();
 */