"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "childListWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.childListWrapper;
  }
});
Object.defineProperty(exports, "createWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.createWrapper;
  }
});
Object.defineProperty(exports, "singleWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.singleWrapper;
  }
});
Object.defineProperty(exports, "listWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.listWrapper;
  }
});
Object.defineProperty(exports, "indexQuery", {
  enumerable: true,
  get: function get() {
    return _graphql.indexQuery;
  }
});
Object.defineProperty(exports, "multiIndexQuery", {
  enumerable: true,
  get: function get() {
    return _graphql.multiIndexQuery;
  }
});
Object.defineProperty(exports, "updateWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.updateWrapper;
  }
});
Object.defineProperty(exports, "deleteWrapper", {
  enumerable: true,
  get: function get() {
    return _graphql.deleteWrapper;
  }
});
Object.defineProperty(exports, "Logger", {
  enumerable: true,
  get: function get() {
    return _utils.Logger;
  }
});
exports["default"] = void 0;

var _graphql = _interopRequireWildcard(require("./graphql"));

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _graphql["default"];
exports["default"] = _default;