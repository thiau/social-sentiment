(function () {
	"use strict";
	module.exports = function (app, twitterHelper, nluHelper) {
		require("./partials/sentimentHandler")(app, twitterHelper, nluHelper);
	};
}());
