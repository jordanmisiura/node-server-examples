const request = require('request-promise-native');
const q = require('q');

const sampleData = {
  "total" : 1,
  "shared_refs" : [ {
    "id" : "tms:13793228",
    "name" : "Sharknado 5: Global Swarming",
    "description" : "Fin and his wife April travel around the world to save their young son who's trapped inside a sharknado.",
    "type" : "shared_ref",
    "thumbnail_id" : "ZGFtOjoxMDAyMDc5MDkuMTZ4OS5iYXNlLmpwZw",
    "thumbnail_formats" : [ "jpg" ],
    "images" : [ {
      "formats" : [ "jpg" ],
      "id" : "ZGFtOjoxMDAyMDc5MDcuMTZ4OS5iYXNlLmpwZw",
      "name" : "wallpaper"
    }, {
      "formats" : [ "jpg" ],
      "id" : "ZGFtOjoxMDAyMDc5MDUuMngzLmJhc2UuanBn",
      "name" : "poster"
    } ],
    "category" : [ "movies" ],
    "genre_list" : [ "Drama", "Sci-fi & Fantasy", "Comedy", "Action & Adventure" ],
    "child_protection_rating" : "TV14",
    "actors_list" : [ "Ian Ziering", "Cassie Scerbo", "Tara Reid" ],
    "year" : "2017",
    "network" : "Syfy",
    "provider_networks" : [ "Syfy" ],
    "assets" : [ {
      "asset" : {
        "program" : {
          "id" : "3462955",
          "name" : "Sharknado 5: Global Swarming",
          "description" : "Fin and his wife April travel around the world to save their young son who's trapped inside a sharknado.",
          "type" : "program",
          "shared_ref_id" : "tms:13793228",
          "child_protection_rating" : "TV14",
          "offers" : [ {
            "offer_id" : "1120"
          }, {
            "offer_id" : "5555"
          }, {
            "offer_id" : "1050"
          } ],
          "sku_ids" : [ "LIVESERVICE_1120", "LIVESERVICE_1050", "CATCHUP_293_1050", "CATCHUP_293_5555", "LIVESERVICE_5555", "CATCHUP_293_1120" ],
          "drm_rights" : [ "recording::phone-ios", "play::pc-other", "catchup::phone-ios", "recording::phone-android", "catchup::tablet-android", "recording::tablet-android", "catchup::tablet-ios", "play::tablet-ios", "play::phone-android", "catchup::pc-other", "play::tablet-android", "catchup::stb-other", "recording::stb-other", "play::stb-other", "play::phone-ios", "recording::pc-other", "catchup::phone-android", "recording::tablet-ios" ],
          "start_time" : 1506096000,
          "end_time" : 1506103200,
          "suspension_time" : 1506373200,
          "duration" : 7200,
          "is_live" : false,
          "is_repeat" : true,
          "provider_networks" : [ "Syfy" ],
          "channel_id" : "293",
          "linked_channel_number" : 638,
          "is_location_chk_reqd" : false,
          "is_catchup_enabled" : true,
          "catchup_duration" : 270000,
          "is_startover_enabled" : false,
          "is_timeshift_enabled" : true,
          "timeshift_duration" : 3600,
          "is_recording_enabled" : true,
          "thumbnail_id" : "ZGFtOjoxMDEyOTk0MjcuMTZ4OS5iYXNlLmpwZw",
          "thumbnail_formats" : [ "jpg" ],
          "images" : [ {
            "formats" : [ "jpg" ],
            "id" : "ZGFtOjoxMDEyOTk0MjUuMTZ4OS5iYXNlLmpwZw",
            "name" : "wallpaper"
          }, {
            "formats" : [ "jpg" ],
            "id" : "ZGFtOjoxMDEyOTk0MjkuMngzLmJhc2UuanBn",
            "name" : "poster"
          } ]
        }
      }
    }, {
      "asset" : {
        "program" : {
          "id" : "3459001",
          "name" : "Sharknado 5: Global Swarming",
          "description" : "Fin and his wife April travel around the world to save their young son who's trapped inside a sharknado.",
          "type" : "program",
          "shared_ref_id" : "tms:13793228",
          "child_protection_rating" : "TV14",
          "offers" : [ {
            "offer_id" : "1120"
          }, {
            "offer_id" : "5555"
          }, {
            "offer_id" : "1050"
          } ],
          "sku_ids" : [ "LIVESERVICE_1120", "LIVESERVICE_1050", "CATCHUP_293_1050", "CATCHUP_293_5555", "LIVESERVICE_5555", "CATCHUP_293_1120" ],
          "drm_rights" : [ "recording::phone-ios", "play::pc-other", "catchup::phone-ios", "recording::phone-android", "catchup::tablet-android", "recording::tablet-android", "catchup::tablet-ios", "play::tablet-ios", "play::phone-android", "catchup::pc-other", "play::tablet-android", "catchup::stb-other", "recording::stb-other", "play::stb-other", "play::phone-ios", "recording::pc-other", "catchup::phone-android", "recording::tablet-ios" ],
          "start_time" : 1506060000,
          "end_time" : 1506067200,
          "suspension_time" : 1506337200,
          "duration" : 7200,
          "is_live" : false,
          "is_repeat" : true,
          "provider_networks" : [ "Syfy" ],
          "channel_id" : "293",
          "linked_channel_number" : 638,
          "is_location_chk_reqd" : false,
          "is_catchup_enabled" : true,
          "catchup_duration" : 270000,
          "is_startover_enabled" : false,
          "is_timeshift_enabled" : true,
          "timeshift_duration" : 3600,
          "is_recording_enabled" : true,
          "thumbnail_id" : "ZGFtOjoxMDEyODYwMDkuMTZ4OS5iYXNlLmpwZw",
          "thumbnail_formats" : [ "jpg" ],
          "images" : [ {
            "formats" : [ "jpg" ],
            "id" : "ZGFtOjoxMDEyODYwMTEuMTZ4OS5iYXNlLmpwZw",
            "name" : "wallpaper"
          }, {
            "formats" : [ "jpg" ],
            "id" : "ZGFtOjoxMDEyODYwMTMuMngzLmJhc2UuanBn",
            "name" : "poster"
          } ]
        }
      }
    } ]
  } ]
};


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


	//request post test




	//async test with request
	const uri = 'https://www.cspire.tv/guide/v5.1/lineup/cspire/paytv/1.0/shared_ref/details.json?shared_ref_ids=tms:13810705';

	var options = {
		method: 'POST',
		uri: 'https://www.cspire.tv/identity/v5/oauth2/cspire/paytv/1.0/tokens.json',
		headers: {
			'content-type': 'application/json'
		},
		body: {
			"grant_type":"ext_assertion",
			"ext_assertion": "ee324cec-1950-494f-b34a-64672d5180df",
        	"scope":"role_verified_identity",
        	"ext_credential": "680768",
        	"ext_assertion_source":"cspire_username_ip"
		},
		json: true
	};

   request(options)
   .then(function(resp) {
   		console.log("my tokens response: ");
   		console.log(resp);
   		return JSON.parse(resp);
   }, function(err) {
   		console.log("error: "+err);
   }, function(progress) {
   		console.log("progress for req: "+progress);
   });

	// var pfc = q.fcall(
	// function() {
	// 	return request(options)
	// 		   .then(function(resp) {
	// 		   		console.log("my tokens response: "+resp);
	// 		   		console.log(resp);
	// 		   		return JSON.parse(resp);
	// 		   }, function(err) {
	// 		   		console.log("error: "+err);
	// 		   }, function(progress) {
	// 		   		console.log("progress for req: "+progress);
	// 		   });
	// })
	// .then(function(resp) {
	// 	return resp.total;
	// });

	// var pq = q.promise((resolve, reject, notify) => {
	// 	pfc
	// 	.then((val) => {
	// 		if (val > 0) {
	// 			resolve(val);
	// 		} else {
	// 			reject(new Error("whoops..."));
	// 		}
	// 	});
	// })

	// pq.then((val) => {//resolve
	// 	console.log("resolving with: "+val);
	// },(err) => {//reject
	// 	console.log("rejecting with: "+err);
	// },(progress) => {//notify
	// 	console.log("progress: "+progress);
	// });
}

exports.test1 = test1;