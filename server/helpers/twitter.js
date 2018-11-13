(function () {
	"use strict";

	module.exports = function Constructor (twitter) {
		return {
			"getTweets": function (query) {
				return new Promise((resolve, reject) => {
					// Call get method from Twitter API
				});
			}
		}
	}
}())