//17.5 (pg. 17)

const expect = require('chai').expect;
const sum = require('../sumArray');

describe('Array sum', () => {
  it('should return a promise', () => {
    expect(sum([1,2,3])).to.be.a('promise');
  });

  it('should sum an array of numbers', () => {
    //notice that in this case, we added the return statement because it is necessary for Mocha to correctly handle the aynchronous code
    return sum([1,2,3])
      .then(ans => {
        expect(ans).to.equal(6);
      });
  });

  it('should sum an array of numbers and numeric strings', () => {
    return sum([1,'2',3])
      .then(ans => {
        expect(ans).to.equal(6);
      });
  });

  it('should sum an array of numbers and non-numeric strings', () => {
    return sum([1,'2',3, 'a'])
      .then(ans => {
        //in this case, since the type of the returned value is questionable we can include
        //such a check in the test with the '.a' function
        expect(ans).to.be.a('number').that.equal(6);
      });
  });




});