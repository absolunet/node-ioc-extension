//--------------------------------------------------------
//-- Node IoC Extension - Providers - Console service provider
//--------------------------------------------------------
'use strict';


const { classes:{ ConsoleServiceProvider } } = require('@absolunet/ioc');


class ExtensionConsoleServiceProvider extends ConsoleServiceProvider {

	/**
	 * {@inheritdoc}
	 */
	get dir() {
		return __dirname;
	}

}

module.exports = ExtensionConsoleServiceProvider;
