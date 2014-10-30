/**
 * Created by jsg665 on 10/29/2014.
 */


var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
//var formidable = require("formidable");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);