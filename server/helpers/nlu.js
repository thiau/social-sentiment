(function () {
	"use strict";

	module.exports = function Constructor (nlu) {
		return {
			"analyze": function (text) {
				return new Promise((resolve, reject) => {
					var parameters = {
						"text": text,
						"features": {
							"sentiment": {}
						}
					}

					nlu.analyze(parameters, function (err, response) {
						if (err) {
							reject(err);
						} else {
							resolve(response);
						}
					});
				})
			}
		}
	}
}())