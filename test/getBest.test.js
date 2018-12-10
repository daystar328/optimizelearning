const math = require('mathjs');
const getBest = require('../helper/getBest');
const population = math.randomInt([20], 1, 10);
let { best, indexOfBest } = getBest(population);
console.log('best', best);
console.log('indexOfBest', indexOfBest);