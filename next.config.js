// const withBundleAnalyzer = require( '@next/bundle-analyzer' )( {
// 	enabled: process.env.ANALYZE === 'true',
// } );
// const withPWA = require( 'next-pwa' );
// const runtimeCaching = require( 'next-pwa/cache' );
// const duplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")

const dpcPluginConfig = {
	// Also show module that is requiring each duplicate package (default: false)
	verbose: true,
	// Emit errors instead of warnings (default: false)
	emitError: true,
	// Show help message if duplicate packages are found (default: true)
	showHelp: false,
	// Warn also if major versions differ (default: true)
	strict: false,
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

const nextConfig = {
	webpack( config, { isServer } ) {

		// audio support
		// config.module.rules.push( {
		// 	test: /\.(ogg|mp3|wav|mpe?g)$/i,
		// 	exclude: config.exclude,
		// 	use: [
		// 		{
		// 			loader: require.resolve( 'url-loader' ),
		// 			options: {
		// 				limit: config.inlineImageLimit,
		// 				fallback: require.resolve( 'file-loader' ),
		// 				publicPath: `${config.assetPrefix}/_next/static/images/`,
		// 				outputPath: `${isServer ? '../' : ''}static/images/`,
		// 				name: '[name]-[hash].[ext]',
		// 				esModule: config.esModule || false,
		// 			},
		// 		},
		// 	],
		// } );

		// shader support
		config.module.rules.push( {
			test: /\.(glsl|vs|fs|vert|frag)$/,
			exclude: /node_modules/,
			use: [ 'raw-loader', 'glslify-loader' ],
		} );

		return config;

	},
};

// manage i18n
if ( process.env.EXPORT !== 'true' ) {

	nextConfig.i18n = {
		locales: [ 'en-US' ],
		defaultLocale: 'en-US',
	};

}

const KEYS_TO_OMIT = [
	'webpackDevMiddleware',
	'configOrigin',
	'target',
	'analyticsId',
	'webpack5',
	'amp',
	'assetPrefix',
	'basePath',
	'generateEtags',
	'i18n',
	'pwa',
	'experimental',
];

module.exports = ( _phase, { defaultConfig } ) => {

	const plugins = [
		// [
		// 	withPWA,
		// 	{
		// 		pwa: {
		// 			dest: 'public',
		// 			disable: process.env.NODE_ENV === 'development',
		// 			runtimeCaching,
		// 		},
		// 	},
		// ],
		// [new duplicatePackageCheckerPlugin(dpcPluginConfig), {}],
		// [ withBundleAnalyzer, {} ],
	];

	// console.log(plugins)
	// console.log("\n=======\n")

	const wConfig = plugins.reduce(
		( acc, [ plugin, config ] ) => plugin( { ...acc, ...config } ),
		{
			...defaultConfig,
			...nextConfig,
		}
	);

	// console.log(wConfig)
	// console.log("\n=======\n")

	const finalConfig = {};
	Object.keys( wConfig ).forEach( ( key ) => {

		if ( ! KEYS_TO_OMIT.includes( key ) ) {

			finalConfig[ key ] = wConfig[ key ];

		}

	} );

	// console.log(finalConfig)

	return finalConfig;

};
