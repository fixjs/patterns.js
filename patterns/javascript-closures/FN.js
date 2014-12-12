define([], function () {
  'use strict';

  var storage = [],
    slice = Array.prototype.slice,
    fnProto = {
      call: function () {
        if (typeof this.result === 'number' && FN.has(this.result)) {
          return FN.call(this.result, slice.call(arguments));
        }
        return null;
      },
      valueOf: function () {
        return this.result;
      }
    };

  function getNestedCall(result) {
    return Object.create(fnProto, {
      result: {
        configurable: false,
        writable: false,
        value: result
      }
    });
  }

  function FN(fn) {
    if (typeof fn === 'number') {
      return storage[fn];
    } else if (typeof fn === 'function') {
      return (fn.__storeId__ = storage.push(fn) - 1);
    } else {
      console.warn('Invalid input parameter!');
    }
  }

  FN.has = function (id) {
    return (typeof id === 'number' && id > -1 && id < storage.length);
  };

  FN.call = function (id) {
    var fn = storage[id],
      args,
      result;
    if (typeof fn === 'function') {
      args = Array.isArray(arguments[1]) ?
        arguments[1] :
        Array.prototype.slice.call(arguments, 1);

      result = fn.apply(undefined, args);

      return getNestedCall(result);
    }
    console.warn('Invalid input parameter!');
  };

  return FN;
});
