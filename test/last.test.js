const _ = require('../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last(['a', 'b', 'c'])).toEqual('c');
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last(['a', 'b', 'c'], 2)).toEqual(['b', 'c']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns last element of array if you ask for last 0 elements', () => {
    expect(_.last([1, 2, 3, 4]), 0).toEqual(4);
  });

  it('returns last element of an array if n = -1', () => {
    expect(_.last([1, 2, 3, 4]), -1).toEqual(4);
  });

  it('returns empty array if given n < -1', () => {
    expect(_.last([1, 2, 3, 4, 5], -2)).toEqual([]);
  });
});