const math = require('mathjs');
const jaya = require('../helper/jaya');
const getBest = require('../helper/getBest');
const getWorst = require('../helper/getWorst');

const population = math.randomInt([20, 2], 0, 10);
let { best, indexOfBest } = getBest(population);
let { worst, indexOfWorst } = getWorst(population); 
let tempPop = jaya(population, best, worst);
console.log('tempPop', tempPop);