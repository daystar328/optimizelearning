const math = require('mathjs');
const generatePopulations = require('../helper/generatePopulations');
let test = generatePopulations(20, 2, 0, 10);
let dim = math.size(test);
console.log(math.deepEqual([20, 2], dim));