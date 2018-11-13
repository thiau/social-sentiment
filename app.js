(function () {
	"use strict";

	require("dotenv").config({
		"silent": true
	});

	const express = require("express");
	const bodyParser = require("body-parser");
	const app = express();
	const port = process.env.PORT || 3001;
	
	// Import object configs

	// Create the objects

	require("./server/routes/index")();

	app.listen(port, function () {
		process.stdout.write(["Server running on port:", port].join(" "));
	});

}())