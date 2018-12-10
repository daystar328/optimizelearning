const math = require('mathjs');

module.exports = function(preResult, newResult) {
    let betterResultIndex = [];
    preResult.forEach((result, i) => {
        if((result - newResult[i]) > 0) {
            betterResultIndex.push(i);
        }
    })
    return betterResultIndex;
}