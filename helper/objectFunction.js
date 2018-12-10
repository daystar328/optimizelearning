const math = require('mathjs');

module.exports = function(population) {
    //f(x, y) = 1.1*x*sin(2*x) + 1.2*y*sin(1.5*y);
    let x = population[0];
    let y = population[1];
    let firstPart = math.multiply(1.1*x, math.sin(2*x));
    let secondPart = math.multiply(1.2*y, math.sin(1.5*y));
    let result = math.add(firstPart, secondPart);
    return result
}