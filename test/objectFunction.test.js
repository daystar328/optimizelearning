const math = require('mathjs');
const objectFunction = require('../helper/objectFunction');
const populaitions = math.randomInt([20, 2], 0, 10);
let populaition = populaitions[0];
let result = objectFunction([2, 4]);
let result2 = objectFunction(populaition);
console.log('result', result);
console.log('result2', result2);