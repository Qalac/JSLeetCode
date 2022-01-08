var {getIndices} = require("../indices/index");

describe("Should return indices of numbers that add up to the target value", () => {

    test("[2, 7, 11, 15] should return [0, 1] with a target of 9", () => {
        var result = getIndices([2, 7, 11, 15], 9);
        expect(result).toEqual([0, 1]);
    });  

    test("[3, 2, 4] should return [1, 2] with a target of 6", () => {
        var result = getIndices([3, 2, 4], 6);
        expect(result).toEqual([1, 2]);
    });  

    test("[3, 3] should return [0, 1] with a target of 6", () => {
        var result = getIndices([3, 3], 6);
        expect(result).toEqual([0, 1]);
    });  

});
