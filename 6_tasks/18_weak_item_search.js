//Task from: https://js.checkio.org/ru/mission/weak-point/

function weakPoint(matrix){
    let row = rowCoordinate(matrix);
    let rowMin = Math.min.apply(null, row);
    let column = columnCoordinate(matrix);
    let columnMin = Math.min.apply(null, column);
    return [row.indexOf(rowMin), column.indexOf(columnMin)];
}

function rowCoordinate(matrix){
    let rowSum = [], sum = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            sum+= matrix[i][j];
        }
        rowSum.push(sum);
        sum = 0;
    }
    return rowSum;
}

function columnCoordinate(matrix){
    let columnSum = [], sum = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++){
            sum += matrix[j][i];
        }
        columnSum.push(sum);
        sum = 0;
    }
    return columnSum;
}

console.log(weakPoint([[7, 2, 7, 2, 8],
    [2, 9, 4, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]])); //[3, 3]
console.log(weakPoint([[7, 2, 4, 2, 8],
    [2, 8, 1, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]])); //[1, 2]