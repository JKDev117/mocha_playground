const sort = require('../drill');

const expect = require('chai').expect;

describe('Sort function', () => {
    it('should sort [2,0] to [0,2]', () => {
        const arr1 = [2, 0];
        const arr2 = [0, 2];
        expect(sort(arr1)).to.deep.equal(arr2);
    })

    it('should sort [1,3,2] to [1,2,3]', () => {
        const arr1 = [1,3,2];
        const arr2 = [1,2,3];
        expect(sort(arr1)).to.deep.equal(arr2);
    })

})

