//non express server
// var http = require("http");

// function process_request(req, res) {
// 	res.end("f you world");
// }

// var s = http.createServer(process_request);
// s.listen(8080);

const express = require('express');
const request = require('request-promise-native');
const cors = require('cors');
const app = express();

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