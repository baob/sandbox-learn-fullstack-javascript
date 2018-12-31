import config from "./config";

console.log(config);

import http from "http";

const server = http.createServer();

console.log("http server on port: ", config.port);

server.listen(config.port);
