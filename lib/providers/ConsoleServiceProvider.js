//--------------------------------------------------------
//-- Node IoC Extension - Providers - Console service provider
//--------------------------------------------------------
'use strict';


const { classes:{ ConsoleServiceProvider } } = require('@absolunet/ioc');


class ExtensionConsoleServiceprovider extends ConsoleServiceProvider {

	/**
	 * {@inheritdoc}
	 */
	get dir() {
		return __dirname;
	}

}

module.exports = ExtensionConsoleServiceprovider;
