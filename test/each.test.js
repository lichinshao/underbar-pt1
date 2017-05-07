const _ = require('../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = ['a', 'b', 'c'];
    let count = 0;
    _.each(arr, function(element, index, array) {
      expect(element).toEqual(array[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeObj = {
      length: 3,
      1: 'a',
      2: 'b',
      3: 'c'
    };
    let count = 0;
    _.each(arrayLikeObj, function(element, index, iteratedArrayLikeObj) {
      expect(element).toEqual(iteratedArrayLikeObj[index]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      name: 'Calvin',
      age: 6,
      occupation: 'student'
    };
    let count = 0;
    _.each(obj, function(value, key, iteratedObj) {
      expect(value).toEqual(iteratedObj[key]);
      count += 1;
    });
    expect(count).toBe(3);
  });

  it('iterates through array and lists each element and its index into an array', () => {
    const arr = ['dog', 'cat', 'mouse'];
    let string = '';
    _.each(arr, function(name, index) {
      string += name + ' is at index ' + index.toString() +'\n';
    });
    expect(string).toBe('dog is at index 0\ncat is at index 1\nmouse is at index 2\n');
  });

  it('iterates through array like object and counts how many elements there are', () => {
    const arrLikeObj = {
      length: 4,
      1: 'hello',
      2: 'there',
      3: 'boom',
      elephant: 'George'
    };
    let count = 0; 
    _.each(arrLikeObj, function(element, index) {
      expect(element).toBe(arrLikeObj[index]);
      count++;
    });
    expect(count).toBe(4);
  });

  it('iterates through arrLikeObj and lists all keys', () => {
    const arrLikeObj = {
      length: 4,
      1: 'hello',
      2: 'there',
      3: 'boom',
      elephant: 'George'
    };
    let count = 0;
    _.each(arrLikeObj, function(element, index, arrayLikeObj) {
      expect(element).toBe(arrayLikeObj[index]);
      count++;
    });
    expect(count).toBe(4);
  });
});

