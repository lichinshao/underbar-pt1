const _ = require('../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      length: 10
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'foo': 'bar'
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });

  it('returns false for object if object does not have length key(property)', () => {
    const arrLikeObj = {
      happy : 10,
      sad: 12
    }
    expect(_.isArrayLike(arrLikeObj)).toBe(false);
  });

  it('returns false if length key is set to a string value', () => {
    const nonArrayLikeObj = {length: 'buttface'};
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });

  it('returns correct result of first object if passed in multiple arguments', () => {
    const arr1 = {happy: 'yes'};
    const arr2 = {length: 5};
    expect(_.isArrayLike(arr1, arr2)).toBe(false);
    expect(_.isArrayLike(arr2, arr1)).toBe(true);
  });
});
