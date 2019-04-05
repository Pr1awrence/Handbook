//https://leetcode.com/problems/available-captures-for-rook/
//Runtime: 56 ms, faster than 97.64%, Memory Usage: 33.8 MB, less than 100.00%

let numRookCaptures = function(board) {
    let rook = {x: 0 , y: 0};
    for(let i = 0; i < board.length; i++){
        if(rook.x !== 0 || rook.y !== 0){
            break;
        }
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === 'R'){
                rook.x = i;
                rook.y = j;
                break;
            }
        }
    }
    let inRow = pawnsInRow(board[rook.x], rook.y);
    let inColumn = pawnsInColumn(board, rook.y);
    return inRow + inColumn;
};

function pawnsInColumn(board, rook) {
    let column = [], pawnTop = 0, pawnBottom = 0;
    for(let i = 0; i < board.length; i++){
        column.push(board[i][rook]);
    }
    //for top pawn
    for(let j = rook; j >= 0; j--){
        column[j] === 'p' ? pawnTop++ : 0;
        if (column[j] === 'p' || column[j] === 'B') {
            break;
        }
    }
    //for bottom pawn
    for(let z = rook; z < column.length; z++){
        column[z] === 'p' ? pawnBottom++ : 0;
        if (column[z] === 'p' || column[z] === 'B') {
            break;
        }
    }
    return pawnTop + pawnBottom; // return all pawns in column
}

function pawnsInRow(row, rook) {
    let pawnLeft = 0, pawnRight = 0;
    //for left pawn
    for (let i = rook; i >= 0; i--) {
        row[i] === 'p' ? pawnLeft++ : 0;
        if (row[i] === 'p' || row[i] === 'B') {
            break;
        }
    } //for right pawn
    for (let j = rook; j < row.length; j++) {
        row[j] === 'p' ? pawnRight++ : 0;
        if (row[j] === 'p' || row[j] === 'B') {
            break;
        }
    }
    return pawnLeft + pawnRight; // return all pawns in row
}


console.log(numRookCaptures([[".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    ["p", "p", ".", "R", ".", "p", "B", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]]));//3

console.log(numRookCaptures([[".",".",".",".",".",".",".","."],
    [".","p","p","p","p","p",".","."],
    [".","p","p","B","p","p",".","."],
    [".","p","B","R","B","p",".","."],
    [".","p","p","B","p","p",".","."],
    [".","p","p","p","p","p",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."]]));//0
console.log(numRookCaptures([[".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".","R",".",".",".","p"],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."]]));//3