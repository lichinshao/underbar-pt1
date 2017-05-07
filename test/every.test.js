const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

    it('returns true if all elements are strings', () => {
      const arr = ['dog', 'cat', 'horse'];
      expect(_.every(arr, el => typeof el === 'string')).toBe(true);
    });

    it('returns false if not all elements in arrary are strings', () => {
      const arr = ['dog', 'cat', 'horse', 5];
      expect(_.every(arr, el => typeof el === 'string')).toBe(false);
    });

    it('returns true if all object values are numbers and we test for values to be numbers', () => {
      const object = {1: 2, 2: 3, 3: 4};
      expect(_.every(object, value => typeof value === 'number')).toBe(true);
    });

    it('returns false if NOT all values in object are numbers', () => {
      const object = {1: 2, 2: 3, 3: 4, 5: 'yes'};
      expect(_.every(object, value => typeof value === 'number')).toBe(false);
    });

    it('returns true if numbers are all divisble by 3', () => {
      const nums = [0, 6, 27, 105];
      expect(_.every(nums, num => num % 3 === 0)).toBe(true);
    })
  });
});