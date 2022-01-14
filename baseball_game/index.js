/**
 
You're keeping score for a baseball game with strange rules.
The game consists of several rounds where the scores of past rounds may affect future scores.
At the beginning of the game, you start with an empty record.
You are given a list of strings (ops), where ops[i] is the ith operation, you must apply to the record and is one of the following
    - An integer X = Record a new score X
    - "+" = Record a new score that is the sum of the previous two scores.
    - "D" = Record a new score that is double the previous score. it is guaranteed that there will always be a previous score.
    - "C" = Invalidate the previous score, removing it from the record. it is guaranteed there will always be a previous score.
    - Return the sum of all scores on the record. 

 */

function sumArray(x) {
    var sum = 0;
    for (let index = 0; index < x.length; index++) {
        var sum = sum + x[index];      
    }
    return sum;
}


function sumOfScores(arr) {
    var result = []
    for (let index = 0; index < arr.length; index++) { 
        if (typeof(arr[index]) == "number") {
            result.push(arr[index])
        }
        else if (typeof(arr[index]) == "string") {
            switch (arr[index]) {
                case "+":
                    var newScore = result[result.length - 1] + result[result.length - 2]
                    result.push(newScore)    
                    break;
                
                case "D":
                    var newScore = result[result.length - 1] * 2
                    result.push(newScore)
                    break;

                case "C":
                    result.pop()
                    break;

                default:
                    break;
            }
        }  
    }
    return sumArray(result);
}



module.exports = {sumOfScores};






