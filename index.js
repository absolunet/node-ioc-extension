//--------------------------------------------------------
//-- Node IoC Extension
//--------------------------------------------------------
'use strict';


// Loading main service provider
const Provider = require('./lib/providers/ExtensionServiceProvider');


// Exporting the service provider be registered by an IoC application.
module.exports = Provider;
