const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });

  it('returns undefined if given array is empty', () => {
    expect(_.first([])).toEqual(undefined);
  });

  it('returns first element of given array even if second argument is negative', () => {
    expect(_.first([1, 2, 3, 4]), -2).toEqual(1);
    //At first, I thought if you put in a negative number as the second argument into slice, 
      //it will essentially slice off the given number of elements BUT from the back. 
      //why is it still returning JUST the first element? 
  });

});