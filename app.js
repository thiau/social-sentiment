(function () {
	"use strict";

	require("dotenv").config({
		"silent": true
	});

	const express = require("express");
	const bodyParser = require("body-parser");
	const app = express();
	const port = process.env.PORT || 3001;
	
	const twitter = require("./server/configs/twitter")();
	const nlu = require("./server/configs/nlu")();

	const twitterHelper = require("./server/helpers/twitter")(twitter);
	const nluHelper = require("./server/helpers/nlu")(nlu);

	require("./server/routes/index")(app, twitterHelper, nluHelper);

	app.listen(port, function () {
		process.stdout.write(["Server running on port:", port].join(" "));
	});

}())