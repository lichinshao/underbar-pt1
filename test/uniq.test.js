const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('gets rid of duplicates in array', () => {
    const arr = [0, 0, 'dog', 'bert', 'dog', 0, 3, 4, 3, 3, 'horse'];
    expect(_.uniq(arr)).toEqual([0, 'dog', 'bert', 3, 4, 'horse']);
  });

  it('gets all unique values in an object', () => {
    const obj = {name: 'bob', age: 34, dogName: 'bob', dogYears: 34};
    expect(_.uniq(obj)).toEqual(['bob', 34]);
  });
});