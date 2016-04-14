/**
 * Observes an object and calls callback whenever a change is made.
 * 
 * @param(Object)   obj The object to observe
 * @param(Function) callback The callback to call when the observed
 *                  object is modified.
 * @return(Objecct) The wrapped object to observe
 *
 * Example usage:
 *   let foo = {bar: 1};
 *   foo = observe(foo, () => { console.log(foo.bar); });
 *   foo.bar = 2; // Should log 2
 */
export function observe(obj, callback) {

  let watchedObj = {};
  watchedObj.__proto__ = obj.__proto__;

  Object.keys(obj).forEach( (key) => {
    let descriptor = Object.getOwnPropertyDescriptor(obj, key);
    if (!descriptor.writable) {
      Object.defineProperty(watchedObj, key, {
        enumerable: true,
        get() {
          return obj[key];
        }
      });
    } else {
      Object.defineProperty(watchedObj, key, {
        enumerable: true,
        get() {
          return obj[key];
        },
        set(newValue) {
          let oldValue = obj[key];
          obj[key] = newValue;
          if (oldValue !== newValue) {
            callback(key, newValue, oldValue);
          }
        }
      });
    }
  });

  return Object.seal(watchedObj);
}