/**
 * Creates a new key on the given object with provided 
 * getter/setter callbacks to observe.
 *
 * In general, this should be used in the constructor of
 * a class to define member values on which you would like
 * to observe.
 *
 * Example:
 *   class Foo {
 *     constructor() {
 *       observable(this,'bar',
 *         (old,new) => console.log('set'),
 *         () => console.log('get')
 *       );
 *     }
 *   }
 *   new Foo();
 *   foo.bar = 1; // logs 'set'
 *   let baz = foo.bar; // logs 'get'
 */
export function observable(obj,name,setter,getter) {
  Object.defineProperty(obj,name,{
    set(val) {
      let old = this['_' + name];
      this['_' + name] = val;
      if(setter && typeof setter === 'function') {
        setter(old,val);
      }
    }, 
    get() {
      if(getter && typeof getter === 'function') {
        getter();
      }
      return this['_' + name]; 
    }
  });

  obj[name] = 0;
}