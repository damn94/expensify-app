const path = require ('path')

console.log(__dirname)
module.exports = {
	entry: './src/app.js',
	output: {
		path:path.join(__dirname,'public'),
		filename:'bundle.js'
	},
	module:{
		rules:[{
			loader:'babel-loader',
			test:/\.js$/,
			exclude: /node_modules/
		},
		{
			test	:/\.s?css$/,
			use: [
			'style-loader',
			'css-loader',
			'sass-loader'
			]
		}]
	},
	devtool:"cheap-module-eval-source-map",
	devServer:{
		historyApiFallback:true,
		contentBase:path.join(__dirname,'public'),
		port: 9000
	}
}