fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const k in collection) {
        callback(collection[k]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      for (const k in collection) {
        newCollection.push(callback(collection[k]));
      }
      return newCollection;
    },

    reduce: function(arr, callback, iv = 0) {
      let acc = iv;
      for (const i of arr) {
        acc = callback(acc, i, arr);
      }
      return acc;
    },

    find: function(arr, callback) {
      for (const i of arr) {
        if (callback(i)) return i;
      }
    },

    filter: function(arr, callback) {
      let newArr = [];
      for (const i of arr) {
        if (callback(i)) newArr.push(i);
      }
      return newArr;
    },

    size: function(collection, callback) {
      let count = 0;
      for (const k in collection) count++;
      return count;
    },

    first: function(arr, len) {
      if (typeof len === 'undefined') {
        return arr[0];
      } else {
        return arr.slice(0, len);
      }
    },

    last: function(arr, len) {
      if (typeof len === 'undefined') {
        return arr[arr.length-1];
      } else {
        return arr.slice(-len);
      }
    },

    compact: function(arr) {
      return this.filter(arr, i => i)
    },

    sortBy: function(arr, callback) {
      let newArr = [...arr];
      return newArr.sort((a, b) => callback(a) - callback(b))
    },


    flatten: function(arr, shallow = false) {
      if (shallow) {
        let newArr = [];
        for (const i of arr) {
          if (Array.isArray(i)) {
            newArr = [...newArr, ...i];
          } else {
            newArr.push(i);
          }
        }
        return newArr;
      } else {
        let items = JSON.stringify(arr).replace(/[\[\]]/g,'')
        return JSON.parse(`[${items}]`)
      }
      // return myNewArray = [].concat.apply([], myArray
    },

    uniq: function(arr, isSorted, callback) {
      // let uniqSet = new Set(arr);
      // return Array.from(uniqSet);
      let uniq = [];
      let seen = [];
      for (const i of arr) {
        let computed = callback ? callback(i) : i;
        if (!seen.includes(computed)) {
          seen.push(computed);
          uniq.push(i);
        }
      }
      return uniq;
    },

    keys: function(obj) {
      let keys = [];
      for (const k in obj) keys.push(k);
      return keys;
    },

    values: function(obj) {
      let values = [];
      for (const k in obj) values.push(obj[k]);
      return values;
    },

    functions: function (obj) {
      return this.filter(this.values(obj), i => typeof i === 'function')
    },

    giveMeMore: function (){}
  }
})()

fi.libraryMethod()








//
