const math = require('mathjs');
const compareResult = require('../helper/compareResult');
const preResult = math.randomInt([20],0, 10);
const newResult = math.randomInt([20], 0, 30);
console.log('preResult', preResult);
console.log('newResult', newResult);
let betterResultIndex = compareResult(preResult, newResult);
console.log('betterResultIndex', betterResultIndex);