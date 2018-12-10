const math = require('mathjs');

module.exports = function(inputs, min, max) {
    let constraintOutput = inputs.map((input) => {
            if(input > max) {
                return max;
            } else if(input < min) {
                return min;
            } else {
                return input;
            }
        })
    return constraintOutput;
}