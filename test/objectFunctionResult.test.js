const math = require('mathjs');
const objectFunction = require('../helper/objectFunction');
const objectFunctionResult = require('../helper/objectFunctionResult');
const populations = math.randomInt([20, 2], 2, 2);
console.log(populations);
let results = objectFunctionResult(populations, objectFunction);
console.log(results);
console.log(math.size(results));