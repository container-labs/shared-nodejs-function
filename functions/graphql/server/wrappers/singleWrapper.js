"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("../firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function singleWrapper(itemName) {
  console.log("GET: ".concat(itemName));
  return _firebase["default"].instance().getEntity(itemName).then(function (model) {
    // extra work here?
    return model;
  })["catch"](function (error) {
    console.error(error);
    return null;
  });
}

var _default = singleWrapper;
exports["default"] = _default;