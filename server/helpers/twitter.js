(function () {
	"use strict";

	module.exports = function Constructor (twitter) {
		return {
			"getTweets": function (query) {
				return new Promise((resolve, reject) => {
					twitter.get("search/tweets", { "q": query, "lang": "en" }, function (error, tweets, response) {
						if (error) {
							reject(error);
						} else {
							resolve(tweets);
						}
					});
				});
			}
		}
	}
}())