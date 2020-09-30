"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWrapper = createWrapper;
exports.singleWrapper = singleWrapper;
exports.listWrapper = listWrapper;
exports.indexQuery = indexQuery;
exports.multiIndexQuery = multiIndexQuery;
exports.updateWrapper = updateWrapper;
exports.deleteWrapper = deleteWrapper;

require("regenerator-runtime/runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import type {
//   QuerySnapshot,
// } from '../../../flow-typed/npm/firebase_v5.x.x';
function singleWrapper(_x, _x2) {
  return _singleWrapper.apply(this, arguments);
}

function _singleWrapper() {
  _singleWrapper = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(firestore, pathObject) {
    var collection, id, ref;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('fireWrapper:singleWrapper', pathObject);
            collection = pathObject.collection, id = pathObject.id;
            console.log('id', id, 'x');
            ref = firestore.collection(collection).doc(id); // TODO: error checking

            return _context.abrupt("return", ref.get().then(function (doc) {
              return _objectSpread({}, doc.data());
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _singleWrapper.apply(this, arguments);
}

function indexQuery(_x3, _x4, _x5) {
  return _indexQuery.apply(this, arguments);
}

function _indexQuery() {
  _indexQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(firestore, pathObject, value) {
    var collection, index, ref, query;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('fireWrapper:indexQuery', pathObject);
            collection = pathObject.collection, index = pathObject.index;
            ref = firestore.collection(collection);
            query = ref.where(index, '==', value);
            return _context2.abrupt("return", query.get().then(function (doc) {
              var elements = [];
              doc.docs.forEach(function (element) {
                elements.push(_objectSpread({}, element.data()));
              });
              return elements;
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _indexQuery.apply(this, arguments);
}

function multiIndexQuery(_x6, _x7) {
  return _multiIndexQuery.apply(this, arguments);
}

function _multiIndexQuery() {
  _multiIndexQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(firestore, pathObject) {
    var collection, indexs, orderBys, ref, query, i, _i, orderByData;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('fireWrapper:multiIndexQuery', pathObject);
            collection = pathObject.collection, indexs = pathObject.indexs, orderBys = pathObject.orderBys;
            ref = firestore.collection(collection);
            query = ref.where(indexs[0].index, '==', indexs[0].value);

            for (i = 1; i < indexs.length; i += 1) {
              query = query.where(indexs[i].index, '==', indexs[i].value);
            }

            if (orderBys) {
              for (_i = 0; _i < orderBys.length; _i += 1) {
                orderByData = orderBys[_i];

                if (orderByData.direction) {
                  query = query.orderBy(orderByData.by, orderByData.direction);
                } else {
                  query = query.orderBy(orderByData.by);
                }
              }
            }

            return _context3.abrupt("return", query.get().then(function (doc) {
              var elements = [];
              doc.docs.forEach(function (element) {
                elements.push(_objectSpread({}, element.data()));
              });
              return elements;
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _multiIndexQuery.apply(this, arguments);
}

function listWrapper(_x8, _x9) {
  return _listWrapper.apply(this, arguments);
}

function _listWrapper() {
  _listWrapper = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(firestore, pathObject) {
    var collection;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            collection = pathObject.collection;
            return _context4.abrupt("return", firestore.collection(collection).get().then(function (docs) {
              var models = [];
              docs.docs.forEach(function (doc) {
                models.push(_objectSpread({}, doc.data()));
              });
              return models;
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _listWrapper.apply(this, arguments);
}

function createWrapper(_x10, _x11, _x12) {
  return _createWrapper.apply(this, arguments);
}

function _createWrapper() {
  _createWrapper = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(firestore, pathObject, data) {
    var collection, id, ref, docRef;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log('fireWrapper:createWrapper', pathObject);
            collection = pathObject.collection, id = pathObject.id;

            if (!id) {
              _context5.next = 5;
              break;
            }

            ref = firestore.collection(collection).doc(id);
            return _context5.abrupt("return", ref.set(_objectSpread(_objectSpread({}, data), {}, {
              key: id
            })).then(function () {
              return {
                key: id
              };
            }));

          case 5:
            docRef = firestore.collection(collection).doc();
            return _context5.abrupt("return", docRef.set(_objectSpread(_objectSpread({}, data), {}, {
              key: docRef.id
            })).then(function () {
              return {
                key: docRef.id
              };
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _createWrapper.apply(this, arguments);
}

function updateWrapper(_x13, _x14, _x15) {
  return _updateWrapper.apply(this, arguments);
}

function _updateWrapper() {
  _updateWrapper = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(firestore, pathObject, data) {
    var collection, id, ref;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log('fireWrapper:updateWrapper', pathObject);
            console.log('data', data);
            collection = pathObject.collection, id = pathObject.id;
            ref = firestore.collection(collection).doc(id); // TODO: error checking
            // TODO: merge in status field as middleware?

            return _context6.abrupt("return", ref.update(data).then(function () {
              return {
                key: id
              };
            }));

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateWrapper.apply(this, arguments);
}

function deleteWrapper(_x16, _x17) {
  return _deleteWrapper.apply(this, arguments);
} // nested updates
// var initialData = {
//     name: 'Frank',
//     age: 12,
//     favorites: {
//       food: 'Pizza',
//       color: 'Blue',
//       subject: 'recess'
//     }
//   };
//   // ...
//   var updateNested = db.collection('users').doc('Frank').update({
//     age: 13,
//     'favorites.color': 'Red'
//   });


function _deleteWrapper() {
  _deleteWrapper = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(firestore, pathObject) {
    var collection, id, ref;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            console.log('fireWrapper:deleteWrapper', pathObject);
            collection = pathObject.collection, id = pathObject.id;
            ref = firestore.collection(collection).doc(id);
            return _context7.abrupt("return", ref["delete"]());

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _deleteWrapper.apply(this, arguments);
}