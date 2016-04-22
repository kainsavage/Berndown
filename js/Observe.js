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
 *   let foo = new Foo();
 *   foo.bar = 1; // logs 'set'
 *   let baz = foo.bar; // logs 'get'
 */
export function observable(obj,name,setter,getter) {
  let state = 0;
  Object.defineProperty(obj,name,{
    set(newv) {
      let oldv = state;
      state = newv;
      if(setter && typeof setter === 'function') {
        setter(oldv,newv);
      }
    }, 
    get() {
      if(getter && typeof getter === 'function') {
        getter();
      }
      return state; 
    }
  });
}

/**
 * Creates a new key on the given object with provided
 * adder/subtracter callbacks to observe.
 *
 * In general, this should be used in the constructor of
 * a class to define member arrays on which you would like
 * to observe.
 *
 * Example:
 *   class Foo {
 *     constructor() {
 *       observable(this,'bar',
 *         (added) => console.log(added),
 *         (removed) => console.log(removed)
 *       );
 *     }
 *   }
 *   let foo = new Foo();
 *   foo.bar.push('test'); // logs 'test'
 *   foo.bar.remove('test'); // logs 'test'
 */
export function observableArray(obj,name,adder,subtracter) {
  obj[name] = new ObservableArray(adder,subtracter);
}

class ObservableArray extends Array {
  constructor(adder,subtracter) {
    super();

    this.adder = adder;
    this.subtracter = subtracter;
  }

  concat(...vals) {
    let toRet = Array.of(...this);

    vals.forEach( (val) => {
      if(Array.isArray(val)) {
        toRet.push(...val);
      }
      else {
        toRet.push(val);
      }
    });
    return toRet;
  }

  empty() {
    while(this.length > 0) {
      this.pop();
    }
  }

  pop() {
    let toRet = super.pop();
    if(this.subtracter && typeof this.subtracter === 'function') {
      this.subtracter(toRet);
    }
    return toRet;
  }

  push(...vals) {
    super.push(...vals);
    if(this.adder && typeof this.adder === 'function') {
      this.adder(...vals);
    }
  }

  remove(obj) {
    let index = this.findIndex( (element) => element === obj );
    if(index > -1) {
      let keepers = [], 
          currentIndex = this.length - 1;
      while(currentIndex > index) {
        keepers.push(super.pop());
        currentIndex --;
      }
      let removed = this.pop();
      keepers.forEach( (val) => super.push(val) );
      return removed;
    }
  }
}