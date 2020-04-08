//17.5 (p. 17)

function sum(arr) {
    return new Promise((resolve, reject) => {
      const ans = arr.reduce((acc, curr) => {
        const num = parseFloat(curr);
        return acc + (isNaN(num) ? 0:num);
      }, 0);
      resolve(ans);
    });
}


module.exports = sum;







/* 
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

Syntax: new Promise(executor)

executor
    A function that is passed with the arguments resolve and reject. The executor function is executed immediately by the Promise implementation, passing resolve 
    and reject functions (the executor is called before the Promise constructor even returns the created object). The resolve and reject functions, when called, 
    resolve or reject the promise, respectively. The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve 
    function to resolve the promise or else rejects it if an error occurred. If an error is thrown in the executor function, the promise is rejected. 
    The return value of the executor is ignored.
    
const myFirstPromise = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue)        // fulfilled
  // or
  //   reject("failure reason")  // rejected
});    

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
*/


/*
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

The reducer function takes four arguments:
    Accumulator (acc)
    Current Value (cur)
    Current Index (idx)
    Source Array (src)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/



/*
The parseFloat() function parses a string and returns a floating point number.

This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, 
and returns the number as a number, not as a string.

Note: Only the first number in the string is returned!

Note: Leading and trailing spaces are allowed.

Note: If the first character cannot be converted to a number, parseFloat() returns NaN.

https://www.w3schools.com/jsref/jsref_parsefloat.asp

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_parsefloat


*/