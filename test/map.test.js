_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every number in array to the sum of it and 1', () => {
    const array = [1, 5, 8, 10];
    const mappedArr = _.map(array, (number) => (number + 1));
    expect(mappedArr).toEqual([2, 6, 9, 11]);
  });

  it('maps every number to it\'s cube', () => {
    const a = [0, 1, 2, 3, 4];
    const mappedA = _.map(a, (num) => Math.pow(num, 3)); 
    expect(mappedA).toEqual([0, 1, 8, 27, 64]);
  });
    
});