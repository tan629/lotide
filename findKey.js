//Function that takes in an object and callback and returns the first key that meets the criteria specified in callback.

const findKey = function(obj, callback) {
        
  for (const key in obj) {
        
    if (callback(obj[key])) {
          
      return key;
    }
  }

  return null;
};

module.exports = findKey;