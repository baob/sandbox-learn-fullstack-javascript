import config from "./config";

console.log(config);

import http from "http";

const server = http.createServer();

console.log("http server on port: ", config.port);

server.listen(config.port);

server.on("request", (req, res) => {
	// logStars(req);
	// logStars(res);
	res.write("Hello HTTP !\n");

	setTimeout(() => {
		res.write("I can stream! \n");
		res.end();
	}, 3000);
});
