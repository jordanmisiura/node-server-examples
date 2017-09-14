//non express server
// var http = require("http");

// function process_request(req, res) {
// 	res.end("f you world");
// }

// var s = http.createServer(process_request);
// s.listen(8080);

const express = require('express');
const request = require('request-promise-native');
const q = require('q');
const cors = require('cors');
const app = express();

function promiseTest() {
	//creating a promise from scratch
	var promise1 = q.fcall(function() {
		return 10;
	});	

	//calling the promise, calling then and finishing.
	// promise1
	// .then(function(val) {
	// 	console.log("value from promise: "+val);
	// 	return promise1+val;
	// })
	// .then(function(val) {
	// 	console.log("value 2: "+val);
	// })
	//.done();

	//creating a promise function in another function then error test
	// var promiseFunc1 = function() {
	// 	console.log("calling func1");
	// 	return q.fcall(function() {
	// 		return 20;
	// 	})
	// 	.then(function(val) {
	// 		return promise1+val;
	// 	})
	// }

	// promiseFunc1()
	// .then(function(val) {
	// 	console.log("then after func1");
	// 	throw new Error(val);
	// })
	// .fail(function(error) {
	// 	console.log("err: "+error);
	// });

	//async test with request
	const uri = 'https://www.cspire.tv/guide/v5.1/lineup/cspire/paytv/1.0/shared_ref/details.json?shared_ref_ids=tms:13810705';

	q.fcall(function() {
		return request(uri)
			   .then(function(resp) {
			   		return JSON.parse(resp);
			   }, function(err) {
			   		console.log("error: "+err);
			   }, function(progress) {
			   		console.log("progress for req: "+progress);
			   });
	})
	.then(function(resp) {
		return resp.total;
	})
	.then(function(total) {
		console.log("mobi response: "+total);
	})
}

//*****  turning on cors to allow cross domain  *****
app.use(cors());
//***************************************************

app.get('/sharedid/:sharedid', function(req, res) { //13810705
	const uri = 'https://www.cspire.tv/guide/v5.1/lineup/cspire/paytv/1.0/shared_ref/details.json?shared_ref_ids=tms:'+req.params.sharedid;
	request(uri)
		.then(function (uriResponse) {
			//console.log(htmlString);
			res.end(uriResponse);
		})
		.catch(function (err) {
			handleError(err,400,"whoops");
		});
});

app.get('/:flavor', function(req, res) {

	promiseTest();


	res.end(' flavor is: ' + req.params.flavor);
});

app.get('*', fourohfour);

function fourohfour(req, res) {
	handleError(res, 404, "invalid file");
}

function handleError(res, errcode, message) {
	res.writeHead(errcode, { "Content-Type" : "application/json" });
	res.end(JSON.stringify({ error: errcode, message: message}) + "\n");
}

app.listen(8080);