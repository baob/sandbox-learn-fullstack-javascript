module.exports = {
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader'
			}
		]
	}
};
