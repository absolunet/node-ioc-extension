//--------------------------------------------------------
//-- Tests - Unit
//--------------------------------------------------------
'use strict';


const app = require('./common');
const ExtensionServiceProvider = require('./../..');


beforeEach(() => {
	app.register(ExtensionServiceProvider);
});


test('Extension is registered', () => {
	expect(app.isRegistered(ExtensionServiceProvider)).toBe(true);
});
