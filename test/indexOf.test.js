const _ = require('../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'foo')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'baz')).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const arr = ['foo', 'bar', 'baz'];
    expect(_.indexOf(arr, 'quux')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const arr = ['foo', 'bar', 'baz', 'bar', 'bar'];
    expect(_.indexOf(arr, 'bar', 2)).toBe(3);
  });

  it('returns -1 if fromIndex is bigger than array length', () => {
    const arr = [0, 1, 2, 3, 4];
    expect(_.indexOf(arr, 2, 5)).toBe(-1);
  });

  it('returns index of first matching value', () => {
    const arr = [0, 1, 2, 3, 4];
    expect(_.indexOf(arr, 3, 0)).toBe(3);
  });

  it('returns -1 if array is empty', () => {
    const arr = [];
    expect(_.indexOf(arr, 'horse')).toBe(-1);
  })
});