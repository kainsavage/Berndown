// An `Object.observe()` "polyfill" using ES6 Proxies.
//
// Current `Object.observe()` polyfills [1] rely on polling
// to watch for property changes. Proxies can do one better by
// observing property changes to an object without the need for
// polling.
//
// Known limitations of this technique:
// 1. the call signature of `Object.observe()` will return the proxy
//    object. The original object needs to be overwritten with this return value.
//    See usage below.
// 2. Changes that happen quickly should be batched into a single
//    callback. Current this is not the case. The callback gets called
//    upon every change.
//
// [1]: https://github.com/jdarling/Object.observe/blob/master/Object.observe.poly.js

// TODO: support 3rd param acceptList
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
export function observe(obj, callback) {
  if (Object(obj) !== obj) {
    throw new TypeError('target must be an Object, given ' + obj);
  }
  if (typeof callback !== 'function') {
    throw 'observer must be a function, given ' + callback;
  }

  return new Proxy(obj, {

    set(target, propKey, value, receiver) {
      var oldVal = target[propKey];

      // Don't send change record if value didn't change.
      if (oldVal === value) {
        return true;
      }

      let type = oldVal === undefined ? 'add' : 'update';

      var changeRecord = {
        name: propKey,
        type: type,
        object: target
      };

      if (type === 'update') {
        changeRecord.oldValue = oldVal;
      }

      target[propKey] = value; // set prop value on target.

      // TODO: handle multiple changes in a single callback.
      callback([changeRecord]);

      return true;
    },

    deleteProperty(target, propKey, receiver) {
      // Don't send change record if prop doesn't exist.
      if (!(propKey in target)) {
        return true;
      }
      var changeRecord = {
        name: propKey,
        type: 'delete',
        object: target,
        oldValue: target[propKey]
      };

      delete target[propKey]; // remove prop from target.

      // TODO: handle multiple changes in a single callback.
      callback([changeRecord]);

      return true;
    }
  });
}