"use strict";

exports.default = void 0;

var _ioc = require("@absolunet/ioc");

//--------------------------------------------------------
//-- Node IoC Extension - Extension service provider
//--------------------------------------------------------

/**
 * Extension service provider.
 */
class ExtensionServiceProvider extends _ioc.ServiceProvider {
  /**
   * @inheritdoc
   */
  register() {} // You may register any service either as a binding or a singleton using
  // this.app.bind('service.name', concrete) or
  // this.app.singleton('service.name', concrete). However, you should not
  // use any service since some services may not be available yet.
  //
  // You can also load your own configuration files through
  // this.loadConfig(this.app.formatPath(__dirname, 'config'));
  // or even load them and mark them as publishable through
  // this.loadAndPublishConfig(this.app.formatPath(__dirname, 'config'));

  /**
   * @inheritdoc
   */


  boot() {// You may use services here to bootstrap them. You can get a service
    // instance using this.app.make('service.name').
  }

}

var _default = ExtensionServiceProvider;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;