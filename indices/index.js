/*  Given an array of intergers(num) and an interger(target), 
    return the indices of the two numbers such that
    they add up to (target)
 */

function getIndices(num, target) {
    var output = [];
    for (let i = 0; i < num.length; i++) {   
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] == target) {
                output.push(i, j)
            }
        }     
    }
    return output;
}

module.exports = {getIndices};
