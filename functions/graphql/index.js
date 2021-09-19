"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "childListWrapper", {
  enumerable: true,
  get: function get() {
    return _wrappers.childListWrapper;
  }
});
Object.defineProperty(exports, "createWrapper", {
  enumerable: true,
  get: function get() {
    return _firestore.createWrapper;
  }
});
Object.defineProperty(exports, "singleWrapper", {
  enumerable: true,
  get: function get() {
    return _firestore.singleWrapper;
  }
});
Object.defineProperty(exports, "listWrapper", {
  enumerable: true,
  get: function get() {
    return _firestore.listWrapper;
  }
});
Object.defineProperty(exports, "indexQuery", {
  enumerable: true,
  get: function get() {
    return _firestore.indexQuery;
  }
});
Object.defineProperty(exports, "multiIndexQuery", {
  enumerable: true,
  get: function get() {
    return _firestore.multiIndexQuery;
  }
});
Object.defineProperty(exports, "updateWrapper", {
  enumerable: true,
  get: function get() {
    return _firestore.updateWrapper;
  }
});
Object.defineProperty(exports, "deleteWrapper", {
  enumerable: true,
  get: function get() {
    return _firestore.deleteWrapper;
  }
});
exports["default"] = void 0;

var _wrappers = require("./server/wrappers");

var _firestore = require("./server/firestore");

var _firebase = _interopRequireDefault(require("./server/firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _firebase["default"];
exports["default"] = _default;