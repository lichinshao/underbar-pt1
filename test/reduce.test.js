const _ = require('../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (acc, num) => acc + num, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers, with accumulator = 2 (initial sum value = 2 and not 0)', () => {
    const nums = [0, 1, 2, 3, 4];
    const result = _.reduce(nums, (a, b) => a + b, 2);
    expect(result).toEqual(12);
  });

  it('reduces an array of numbers, with acculator = 0', () =>{
    const nums = [0, 1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b, 0);
    expect(result).toEqual(15);
  });

  it('reduces an array of numbers, with acc = 10 (acc = initial sum value)', () => {
    const nums = [0, 1, 2, 3, 4, 5];
    const result = _.reduce(nums, (a, b) => a + b, 10);
    expect(result).toBe(25);
  });

});