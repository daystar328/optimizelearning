const math = require('mathjs');

module.exports = function(populations, tempPopulation, results, tempResults, betterResultIndex) {
    betterResultIndex.forEach((better) => {
        populations[better] = tempPopulation[better];
        results[better] = tempResults[better];
    })
}