console.log("this is config");

const env = process.env;

export default {
	port: env.PORT || 8080
};
