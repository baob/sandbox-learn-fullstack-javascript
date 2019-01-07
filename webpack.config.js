module.exports = {
	entry: './src/index.jsx',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
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
