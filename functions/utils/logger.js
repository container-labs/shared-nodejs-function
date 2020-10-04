"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var envKey = undefined || "production";

var Logger = /*#__PURE__*/function () {
  function Logger(environment) {
    _classCallCheck(this, Logger);

    this.environment = environment;
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(message) {
      switch (this.environment) {
        case 'test':
          {
            break;
          }

        default:
          {
            console.log(message); // eslint-disable-line
          }
      }
    }
  }, {
    key: "error",
    value: function error(message) {
      switch (envKey) {
        case 'test':
          {
            break;
          }

        default:
          {
            console.error(message); // eslint-disable-line
          }
      }
    }
  }, {
    key: "debug",
    value: function debug(message) {
      switch (envKey) {
        case 'test':
          {
            break;
          }

        case 'production':
          {
            break;
          }

        default:
          {
            console.log(message); // eslint-disable-line
          }
      }
    }
  }]);

  return Logger;
}();

var _default = Logger;
exports["default"] = _default;