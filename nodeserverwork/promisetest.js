const request = require('request-promise-native');
const q = require('q');

function test1() {
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

	var pfc = q.fcall(
	function() {
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
	});

	var pq = q.promise((resolve, reject, notify) => {
		pfc
		.then((val) => {
			if (val > 0) {
				resolve(val);
			} else {
				reject(new Error("whoops..."));
			}
		});
	})

	pq.then((val) => {//resolve
		console.log("resolving with: "+val);
	},(err) => {//reject
		console.log("rejecting with: "+err);
	},(progress) => {//notify
		console.log("progress: "+progress);
	});
}

exports.test1 = test1;