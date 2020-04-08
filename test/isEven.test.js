//17.5 (p. 20)

const expect = require('chai').expect;
const isEven = require('../isEven');

//The .true and .false may be used to perform a strictly equal comparison of boolean values.

describe('isEven', () => {
  it('should find 4 to be even', () => {
    expect(isEven(4)).to.be.true;
  });

  it('should find 5 to not be even', () => {
    expect(isEven(5)).to.be.false;
  });
});

