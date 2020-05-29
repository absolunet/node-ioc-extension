"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ioc = require("@absolunet/ioc");

//--------------------------------------------------------
//-- Node IoC Extension - HTTP - Controllers - Controller
//--------------------------------------------------------

/**
 * Base extension controller.
 *
 * @memberof http.controllers
 * @augments ioc.http.Controller
 * @hideconstructor
 * @abstract
 */
class Controller extends _ioc.Controller {}

var _default = Controller;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;