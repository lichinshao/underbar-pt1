const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of undefined elements if the property is NOT a key of the given object', () => {
    const cars = [
      {number: 1, color: 'red'},
      {number: 2, color: 'blue'}
    ];
    const result = _.pluck(cars, 'type');
    expect(result).toEqual([undefined, undefined]);
  });

  it('returns an array of numbers, given an array of objects with number property', () => {
    const cars = [
      {number: 1, color: 'red'},
      {number: 2, color: 'blue'}
    ];
    const plucked = _.pluck(cars, 'number');
    expect(plucked).toEqual([1, 2]);
  });

  it('returns an array of color of cars', () => {
    const cars = [
      {number: 1, color: 'red'},
      {number: 2, color: 'blue'}
    ];
    const pluckedByColor = _.pluck(cars, 'color');
    expect(pluckedByColor).toEqual(['red', 'blue']);
  });

});      