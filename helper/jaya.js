const math = require('mathjs');
const fitConstraint = require('./fitConstraint');

module.exports = function(populations, best, worst) {
    let tempPopulations = populations.map((population) => {
        //x' = x + r1*(best - |x|) - r2*(worst - |x|);
        let r1 = math.round(math.random(), 2);
        let r2 = math.round(math.random(), 2);
        // let r1 = 0.59;
        // let r2 = 0.81;
        let firstPart = math.multiply(r1, math.subtract(best, math.abs(population)));
        let secondPart = math.multiply(r2, math.subtract(worst, math.abs(population)));
        let unConstraintPop =  math.add(population, math.subtract(firstPart, secondPart));
        return fitConstraint(unConstraintPop, 0, 10)  //keep variables within [0 - 10];
        // return unConstraintPop;
    })
    return math.round(tempPopulations, 2);
    // return tempPopulations;
}