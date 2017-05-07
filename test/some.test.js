const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if array contains any strings', () => {
    const arr = [1, 2, 3, 'hi', 4, 5];
    expect(_.some(arr, el => typeof el === 'string')).toBe(true);
  });

  it('returns false if NONE of the elements are strings', () => {
    const arr = [1, 2, 3, 4];
    expect(_.some(arr, el => typeof el === 'string')).toBe(false);
  });

  it('returns true if any object\'s values are divisble by 4', () => {
    const object = {1: 17, 2: 31, 3: 28, 5: 101};
    expect(_.some(object, value => value % 4 === 0)).toBe(true);
  });

  it('returns false if NONE of the objects values are divisible by 4', () => {
    const object = {1: 3, 2: 5, 3: 27, 4: 71};
    expect(_.some(object, value => value % 4 === 0)).toBe(false);
  })
});