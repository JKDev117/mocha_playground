const expect = require('chai').expect;
const diff = require('../arrayDiff');

describe('Array diff', () => {
  it('should return a if no common elements', () => {
    expect(diff([1,2,3], [4,5,6])).to.deep.equal([1,2,3]);
  });

  it('should return [] if same', () => {
    expect(diff([1,2,3], [1,2,3])).to.deep.equal([]);
  })

  it('should return correctly if some elements are removed', () => {
    expect(diff([1,2,3], [2])).to.eql([1,3]);
  })

  it('should remove 1 from [1,2,3]', () => {
    //.not negates the effects of other assertions in the chain
    expect(diff([1,2,3], [1])).to.not.include(1);
  })
  
})