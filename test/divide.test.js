//17.5 Integration Testing

const expect = require('chai').expect;

const divide = require('../index');


describe('Divide function', () => {
    it('should divide positive integers correctly', () => {
        //condensed version
        expect(divide(8,4)).to.equal(2);

        /* long version
        //define inputs
        const a = 8;
        const b = 4;
        const expectedAnswer = 2;
    
        //invoke the function
        const actualAnswer = divide(a,b);
    
        //assert the expected === actual
        expect(actualAnswer).to.equal(expectedAnswer);
        */
    });

    it('should throw an error when divide by zero', () => {
        //condensed version
        expect(() => { divide(8,0)}).to.throw();

        /* long version
        //define inputs
        const a = 8, b = 0;
    
        //set up the function call
        const fn = () => {
            divide(a,b)
        };

        //assert that exception is thrown
        expect(fn).to.throw();
        */
    });

    //.equal assertion function (p. 13)
    it('testing an assertion using the .equal assertion function', () => {
        expect(2).to.equal(2, '2 === 2'); // pass
       
        /* assertions to try
        expect(2).to.equal(2, '2 === 2'); // pass
        expect(2).to.equal("2", '2 === "2"'); // fail, wrong types
        expect(2).to.equal(3, '2 === 3'); // fail, wrong values
        expect('hen').to.equal('Hen', "'hen' === 'Hen'"); // fail, string comparison is case sensitive
        */
    })

});







