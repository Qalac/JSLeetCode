/**
 
Given a string (S) containing just the characters " (,),{,},[,] "
Determine if the input string is valid
An open string is valid if:
    - Open brackets must be closed by the same type of brackets.
    - Open brackets must be closed in correct order.

Constraints:
    - 1 <= s.length <= 104
    - Consists of parenthesis only " () [] {} "

    
 */


function validString(s) {
    var result = "VALID"
    for (let index = 0; index < s.length; index++) {
        if (s[index] == "(" && s[index + 1] != ")") {
            result = "INVALID";
            break;
        } 
        else if (s[index] == "[" && s[index + 1] != "]") {
            result = "INVALID";
        } 
        else if (s[index] == "{" && s[index + 1] != "}") {
            result = "INVALID"
        }
    }
    return result;
}

// console.log(validString('))[]{}'));

module.exports = {validString};
