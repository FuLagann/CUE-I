
const express = require("express");
const app = express();
const staticPath = __dirname;
const requirejs = require("requirejs");

requirejs.config({
	nodeRequire: require
});

app.use("/", express.static(staticPath));

app.get("/", (_, res) => {
	let page = "<style>body{margin:0;}</style><canvas id='main-canvas'></canvas>";
	
	page += "<script type='text/javascript' src='/require.js'></script>";
	page += "<script type='text/javascript' src='/build/bundle.js'></script>";
	page += "<script>requirejs(['load'])</script>";
	
	res.send(page);
});
app.listen(1080, () => {
	console.log("Server is running at https://localhost:1080");
});
