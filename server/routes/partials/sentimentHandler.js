(function () {
	"use strict";

	module.exports = function (app, twitterHelper, nluHelper) {
		app.get("/analyze", function (req, res) {
			twitterHelper.getTweets("IBM").then(function (tweets) {
				let allTweets = tweets.statuses.map(tweet => tweet.text).join();
	
				nluHelper.analyze(allTweets).then(function (response) {
					res.status(200).send(response);
				}).catch(function (err) {
					res.status(404).send(err);
				});
			}).catch(function (err) {
				res.status(404).send(err);
			});
		});
	}
}())