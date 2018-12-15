const math = require('mathjs');
const jaya = require('./jaya')
const getBest = require('./getBest');
const getWorst = require('./getWorst');
const objectFunctionResult = require('./objectFunctionResult');
const objectFunction = require('./objectFunction');
const compareResult = require('./compareResult');
const updatePopulationAndResult = require('./updatePopulationAndResult');
const JayaAlgorithm = function(populations, iter, terminate) {
    let results = objectFunctionResult(populations, objectFunction);
    let { best, indexOfBest } = getBest(results);
    let { worst, indexOfWorst } = getWorst(results);
    let sameBestCounter = 0;
    let iteration = 0;
    for(let i=0; i<iter; i++) {
        let tempPopulation = jaya(populations, populations[indexOfBest], populations[indexOfWorst]);
        let tempResults = objectFunctionResult(tempPopulation, objectFunction);
        let betterResultIndex = compareResult(results, tempResults);
        updatePopulationAndResult(populations, tempPopulation, results, tempResults, betterResultIndex);
        let newBest = getBest(results).best;
        if(newBest === best) {
            sameBestCounter = sameBestCounter + 1;
        } else {
            sameBestCounter = 0;
        }
        if(sameBestCounter === terminate) {
            console.log(populations[indexOfBest])
            iteration = i;
            console.log('best', best);
            break;
        }
        best = getBest(results).best;
        worst = getWorst(results).worst;
        indexOfBest = getBest(results).indexOfBest;
        indexOfWorst = getWorst(results).indexOfWorst;
    }
    return {
        best,
        iteration
    }
}

module.exports = {
    JayaAlgorithm
}