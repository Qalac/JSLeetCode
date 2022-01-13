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

function closeOpenBrackets() {
    var s = "()[]{}"
}


function validString() {
    return closeOpenBrackets();
}

validString();

module.exports = {validString};
