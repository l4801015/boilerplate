const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	plugins: [
		new htmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	mode: "development",
	module: {
		rules: [
			//	{
			//		test: /\.css$/,
			//		use: ["style-loader", "css-loader"],
			//	},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "/src"),
		},
	},
};
