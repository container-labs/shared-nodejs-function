"use strict";

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var instance = null;
var singleton = Symbol["for"]('FireClass');
var singletonEnforcer = Symbol["for"]('FireClassEnforcer');

var FireClass = /*#__PURE__*/function () {
  function FireClass(enforcer, firebaseAdmin) {
    _classCallCheck(this, FireClass);

    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }

    if (firebaseAdmin === undefined) {
      throw new Error('Must pass in a firebase admin object');
    }

    this.firebaseAdmin = firebaseAdmin;
  }

  _createClass(FireClass, [{
    key: "ref",
    value: function ref(path) {
      return global[singleton].firebaseAdmin.database().ref(path);
    }
  }, {
    key: "bucket",
    value: function bucket(name) {
      return global[singleton].firebaseAdmin.storage().bucket(name);
    }
  }, {
    key: "mapSnapshotToEntity",
    value: function mapSnapshotToEntity(snapshot) {
      return _objectSpread({
        id: snapshot.key
      }, snapshot.val());
    }
  }, {
    key: "mapSnapshotToEntities",
    value: function mapSnapshotToEntities(snapshot) {
      return (0, _lodash.map)(snapshot.val(), function (value, id) {
        return _objectSpread({
          id: id
        }, value);
      });
    }
  }, {
    key: "getValue",
    value: function getValue(path) {
      return global[singleton].ref(path).once('value');
    }
  }, {
    key: "getEntity",
    value: function getEntity(path) {
      return global[singleton].getValue(path).then(global[singleton].mapSnapshotToEntity);
    }
  }, {
    key: "getEntities",
    value: function getEntities(path) {
      return global[singleton].getValue(path).then(global[singleton].mapSnapshotToEntities);
    } // begin firestore

  }, {
    key: "firestoreDb",
    value: function firestoreDb() {
      return global[singleton].firebaseAdmin.firestore();
    }
  }], [{
    key: "instance",
    value: function instance(firebaseAdmin) {
      if (!global[singleton]) {
        global[singleton] = new FireClass(singletonEnforcer, firebaseAdmin);
      }

      return global[singleton];
    }
  }]);

  return FireClass;
}();

var _default = FireClass;
exports["default"] = _default;