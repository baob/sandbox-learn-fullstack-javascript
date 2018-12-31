import config from "./config";

console.log(config);

import https from "https"; // node core module

https.get("https://www.lynda.com", res => {
	console.log("Response status code: ", res.statusCode);

	res.on("data", chunk => {
		console.log(chunk.toString());
	});
});
