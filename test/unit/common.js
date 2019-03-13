//--------------------------------------------------------
//-- Tests - Unit - Common
//--------------------------------------------------------
'use strict';


const app = require('@absolunet/ioc/lib');
const Kernel = require('@absolunet/ioc/lib/foundation/console/Kernel');


beforeEach(() => {
	app.flush();
	app.make(Kernel);
	app.bootIfNotBooted();
});


module.exports = app;
