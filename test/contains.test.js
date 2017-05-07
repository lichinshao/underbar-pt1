const _ = require('../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 4)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 7)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Rarity')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const ponies = {
      'pony1': 'Fluttershy',
      'pony2': 'Pinkie Pie',
      'pony3': 'Rainbow Dash',
      'pony4': 'Rarity'
    };
    expect(_.contains(ponies, 'Applejack')).toBe(false);
  });

  it('returns true if array contains target element', () => {
    const nums = [0, 2, 4, 6, 8];
    expect(_.contains(nums, 4)).toBe(true);
  });

  it('returns false if array does NOT contain element', () => {
    const nums = [0, 2, 4, 6, 8];
    expect(_.contains(nums, 5)).toEqual(false);
  });

  it('return true is value is in object and false if not in object', () => {
    const object = {'name': 'Rob', 'age': 43, 'occupation': 'teacher'};
    expect(_.contains(object, 'teacher')).toBe(true);
    expect(_.contains(object, 'daughter')).toBe(false);
    expect(_.contains(object, 'name')).toBe(false);
  });

});