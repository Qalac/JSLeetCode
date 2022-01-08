var {validString} = require("../valid_input/index");

describe("Should return VALID or INVALID if the parenthesis correspond", () => {

    test("() should return VALID", () => {
        var result = validString("()");
        expect(result).toEqual("VALID");
    });  

    test("() [] {} should return VALID", () => {
        var result = validString("() [] {}");
        expect(result).toEqual("VALID");
    });  

    test("(] should return INVALID", () => {
        var result = validString("(]");
        expect(result).toEqual("INVALID");
    });  

});