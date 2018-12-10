const math = require('mathjs');
const getWorst = require('../helper/getWorst');
let results = math.randomInt([20], 0, 10);
let { worst, indexOfWorst } = getWorst(results);
console.log('worst', worst);
console.log('indexOfWorst', indexOfWorst);