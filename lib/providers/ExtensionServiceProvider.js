//--------------------------------------------------------
//-- Node IoC Extension - Providers - Extension service provider
//--------------------------------------------------------
'use strict';


const ConsoleServiceProvider = require('./ConsoleServiceProvider');
const path = require('path');
const { classes:{ ServiceProvider } } = require('@absolunet/ioc');


class ExtensionServiceProvider extends ServiceProvider {

	/**
	 * Register service provider.
	 */
	register() {
		this.app.make('config').loadConfigFromFolder(path.join(__dirname, '..', '..', 'config'));
		this.app.register(ConsoleServiceProvider);
	}

}

module.exports = ExtensionServiceProvider;
