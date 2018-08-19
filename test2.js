const getIn = (obj, path, defaultValue)  => {
  
  const search = path.split('.')
  const limit = search.length - 1
  const recursive = (value, i) => {
    return (i === limit && typeof value[search[i]] !== 'undefined') ? 
      value[search[i]] :
      typeof value[search[i]] === 'object' ?
        recursive(value[search[i]],i+1)
        : defaultValue
  }
  
 return recursive(obj,0)  
}

var object = { 'a': [{ 'b': { 'c': 3 } }] };
console.log(getIn(object, 'a.b.c', 'default'));

var object2 = {a: { b: { c: 3 } } };     
console.log(getIn(object2, 'a.b.c', 5))

console.log(getIn(object2, 'a.b.d', 5))