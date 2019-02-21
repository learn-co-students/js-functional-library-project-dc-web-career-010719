fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        for (const key in collection) {
          callback(collection[key])
        }
        return collection
    },

    map: function(collection, callback) {
      const newArray = []
      for (const key in collection) {
        newArray.push(callback(collection[key]))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = 0
      }
      for (const key in collection) {
        acc = callback(acc, collection[key])
      }
      return acc
    },

    find: function(collection, predicate) {
      for (const key in collection) {
        if (predicate(collection[key])) {
          return collection[key]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArray = []
      for (const key in collection) {
        if (predicate(collection[key])) {
          newArray.push(collection[key])
        }
      }
      return newArray
    },

    size: function(collection) {
      let count = 0
      for (const key in collection) {
        count++
      }
      return count
    },

    first: function(array, n) {
      if (!n) {
        return array[0]
      }
      let newArray = []
      for (let i=0; i<n; i++) {
        // newArray.push(array[i])
        newArray[i] = array[i]
      }
      return newArray
    },

    last: function(array, n) {
      if (!n) {
        return array[fi.size(array)-1]
      }
      let newArray = []
      for (let i=1; i<=n; i++) {
        newArray.unshift(array[fi.size(array)-i])
      }
      return newArray
    },

    compact: function(array) {
      let newArray = []
      for (const element of array) {
        if (!!element) {newArray.push(element)}
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let newArray = []
      let callbackArray = []
      for (const element of array) {
        callbackArray.push(callback(element))
      }
      let obj = {}
      for (let i=0; i<array.length; i++) {
        obj[callbackArray[i]] = array[i]
      }
      if (typeof(callbackArray[0]) === 'number') {
        sortedCallbackArray = callbackArray.sort(function (a,b) { return a - b; })
      }
      else {
        sortedCallbackArray = callbackArray.sort()
      }
      for (let j=0; j<array.length; j++) {
        newArray.push(obj[sortedCallbackArray[j]])
      }
      return newArray
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) {
        return newArr.push(collection)
      }
      if (shallow === true) {
        for (let element of collection) {
          if (Array.isArray(element)) {
            for (let el of element) {
              newArr.push(el)
            }
          } else {
            newArr.push(element)
          }
        }
      } else {
        for (let element of collection) {
          this.flatten(element, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      let keys = []
      for (const key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      let values = []
      for (const key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      let functions = []
      for (const key in object) {
        if (typeof(object[key]) === 'function') {
          functions.push(object[key])
        }
      }
      return functions.sort()
    },


  }
})()

fi.libraryMethod()
