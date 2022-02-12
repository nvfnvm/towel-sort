
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let emptyArray = []
    if (matrix === undefined || matrix.length === 0) {
        return emptyArray;
    }
    let newArray = matrix[0];
    for(let i = 1; i < matrix.length; i++) {
      newArray = newArray.concat(i % 2 === 0 ? matrix[i] : matrix[i].reverse());
    }
    return newArray;
    };

