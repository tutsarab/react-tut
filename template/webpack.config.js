'use strict'
var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.join(__dirname),
	entry: './src/entry.js', // I can make two entry points
	output: {
		path: path.join(__dirname),
		filename: "bundle.js"
	},
	devtool: 'source-map',
	preloaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "jshint-loader"
		}
	],
	module: {
		loaders: [
            {
                test: /\.jsxZ$/,
                exclude: /node_modules/,
                loader: /babel/
            },{
				test: /\.css$/,
				loader: 'style!css!'
			},{
				test: /\.html$/,
				loader: 'raw'
			}

		]
	},
	plugins: [

		new webpack.optimize.CommonsChunkPlugin("common.js")
	],
	externals: {

	}
};
