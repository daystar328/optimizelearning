const math = require('mathjs');

module.exports = function(numOfPopulation, numOfVariable, min, max) {
    let populations = math.randomInt([numOfPopulation, numOfVariable], min, max);
    
    return populations;
}