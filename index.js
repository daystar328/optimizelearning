const { JayaAlgorithm } = require('./helper/algorithms');
const generatePopulations = require('./helper/generatePopulations');

let iter = 500;
let populations = generatePopulations(20, 2, 0, 10);

let {best, iteration } = JayaAlgorithm(populations, iter, 30);
console.log('best', best);
console.log('iteration', iteration);