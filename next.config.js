// var webpack = require( 'webpack' );
var CompressionPlugin = require( 'compression' );
var DuplicatePackageCheckerPlugin = require( "duplicate-package-checker-webpack-plugin" );
var StatsWriterPlugin = require( "webpack-stats-plugin" ).StatsWriterPlugin;


const dpcpConfig = {
	// Also show module that is requiring each duplicate package (default: false)
	verbose: true,
	// Emit errors instead of warnings (default: false)
	emitError: false,
	// Show help message if duplicate packages are found (default: true)
	showHelp: true,
	// Warn also if major versions differ (default: true)
	strict: true,
	/**
	 * Exclude instances of packages from the results.
	 * If all instances of a package are excluded, or all instances except one,
	 * then the package is no longer considered duplicated and won't be emitted as a warning/error.
	 * @param {Object} instance
	 * @param {string} instance.name The name of the package
	 * @param {string} instance.version The version of the package
	 * @param {string} instance.path Absolute path to the package
	 * @param {?string} instance.issuer Absolute path to the module that requested the package
	 * @returns {boolean} true to exclude the instance, false otherwise
	 */
	exclude( instance ) {

		return instance.name === "fbjs";

	}
};

// keep this so that it uses webpack 4 instead of 5
module.exports = {
	// mode: "production",
	// plugins: [
	// 	new StatsWriterPlugin( {
	// 		filename: './stats.json',
	// 		stats: {
	// 			assets: true,
	// 			chunks: true,
	// 			modules: true
	// 		}
	// 	} ),
	// 	new DuplicatePackageCheckerPlugin( dpcpConfig ),
		// new webpack.optimize.DedupePlugin(),
		// new webpack.optimize.UglifyJsPlugin(),
		// new CompressionPlugin( {
		// 	asset: "[path].gz[query]",
		// 	algorithm: "gzip",
		// 	test: /\.js$|\.css$|\.html$/,
		// 	threshold: 10240,
		// 	minRatio: 0.8
		// } )
	// ],
	webpack: ( config, options ) => {

		const { dev, isServer } = options;

		// console.log("===============")

		// config.experimental = {
		// 	...config.experimental,
		// 	forceSwcTransforms: true
		// }
		config.optimization = {
			...config.optimization,
			emitOnErrors: true,
			splitChunks: {
				chunks: 'async',
				minSize: 20000,
				minRemainingSize: 0,
				minChunks: 1,
				maxAsyncRequests: 30,
				maxInitialRequests: 30,
				enforceSizeThreshold: 50000,
				cacheGroups: {
					defaultVendors: {
						test: /[\\/]node_modules[\\/]/,
						priority: -10,
						reuseExistingChunk: true,
					},
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true,
					},
				},
			},
		}
		// config.resolve.alias = {
		// 	...config.resolve.alias,
		// 	"@babel/runtime": "node_modules/next/dist/compiled/@babel/runtime",
		// 	"@emotion/weak-memoize": "node_modules/@emotion/weak-memoize/src",
		// 	"react-is": "node_modules/next/dist/compiled/react-is"
		// };
		// config.mode = dev ? "development" : "production";
		// config.plugins.push(new DuplicatePackageCheckerPlugin( dpcpConfig ));
		// config.plugins.push(
		// 	new StatsWriterPlugin( {
		// 		filename: 'stats.json',
		// 		stats: {
		// 			assets: true,
		// 			chunks: true,
		// 			modules: true
		// 		}
		// 	} )
		// );
		//
		// console.log(config)
		return config;

	},
};
