/**
 * Observes an object and calls callback whenever a change is made.
 * 
 * @param(Object)   obj The object to observe
 * @param(Function) callback The callback to call when the observed
 *                  object is modified.
 * @return(Objecct) The wrapped object to observe
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
          if (oldValue !== newValue) {
            setTimeout(() => {
              callback(key, newValue, oldValue);
            }, 0);
          }
          return obj[key] = newValue;
        }
      });
    }
  });

  return Object.seal(watchedObj);
}