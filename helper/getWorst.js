const math = require('mathjs');

module.exports = function(results) {
    let worst = math.max(results);
    let indexOfWorst = results.indexOf(worst);
    return {
        worst,
        indexOfWorst
    }
}