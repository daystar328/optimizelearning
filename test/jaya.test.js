const math = require('mathjs');
const jaya = require('../helper/jaya');
const getBest = require('../helper/getBest');
const getWorst = require('../helper/getWorst');
const objectFunction = require('../helper/objectFunction');
const objectFunctionResult = require('../helper/objectFunctionResult');

const population = math.zeros([20, 2]);
let newPopulations = population.map((population, i) => {
    return [i, i];
})
console.log('newpopulations', newPopulations);
console.log('populations', population);
let result = objectFunctionResult(newPopulations, objectFunction);
let { best, indexOfBest } = getBest(result);
let { worst, indexOfWorst } = getWorst(result); 
let tempPop = jaya(newPopulations, newPopulations[indexOfBest], newPopulations[indexOfWorst]);
console.log('tempPop', tempPop);