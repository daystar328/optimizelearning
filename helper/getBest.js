const math = require('mathjs');

module.exports = function(results) {
    let best = math.min(results);
    let indexOfBest = results.indexOf(best);
    return {
        best,
        indexOfBest
    }
}