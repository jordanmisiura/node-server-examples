
const express = require('express');
const request = require('request-promise-native');
const q = require('q');
const cors = require('cors');
const app = express();
const pt = require('./promisetest');
const rxt = require('./rxtest');
const bodyParser = require('body-parser');
const path = require('path');

//*****  turning on cors to allow cross domain  *****
app.use(cors());
//***************************************************
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

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

	//pt.test1();
	rxt.rxTest1();


	res.end(' flavor is: ' + req.params.flavor);
});

app.post('/password', (req, res) => {
		console.log("post command activated from password url: ");
		console.log(req.body);

		res.end('received password');
});

function handleError(res, errcode, message) {
	res.writeHead(errcode, { "Content-Type" : "application/json" });
	res.end(JSON.stringify({ error: errcode, message: message}) + "\n");
}

app.listen(8080, function() {
	console.log("server started on port 8080.");
});