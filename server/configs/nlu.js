(function () {
	"use strict";

	const NaturalLanguageUnderstandingV1 = require("watson-developer-cloud/natural-language-understanding/v1.js");

	module.exports = function Constructor () {
		let nlu = new NaturalLanguageUnderstandingV1({
			"version": process.env.NLU_VERSION,
			"iam_apikey": process.env.NLU_KEY,
			"url": process.env.NLU_URL
		});

		return nlu;
	}
}())