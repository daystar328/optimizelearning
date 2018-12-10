const math = require('mathjs');
const objectFunction = require('./objectFunction');

module.exports = function(populations, objectFunction) {

    let results = populations.map((population) => {
            return objectFunction(population);
        })
    return math.round(results, 2);
}