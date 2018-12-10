const math = require('mathjs');
const fitConstraint = require('./fitConstraint');

module.exports = function(populations, indexOfBest, indexOfWorst) {
    let tempPopulations = populations.map((population) => {
        //x' = x + r1*(best - |x|) - r2*(worst - |x|);
        let r1 = math.round(math.random(), 2);
        let r2 = math.round(math.random(), 2);
        let firstPart = math.multiply(r1, math.subtract(populations[indexOfBest], math.abs(population)));
        let secondPart = math.multiply(r2, math.subtract(populations[indexOfWorst], math.abs(population)));
        let unConstraintPop =  math.add(population, math.subtract(firstPart, secondPart));
        return fitConstraint(unConstraintPop, 0, 10)  //keep variables within [0 - 10];
    })
    return math.round(tempPopulations, 2);
}