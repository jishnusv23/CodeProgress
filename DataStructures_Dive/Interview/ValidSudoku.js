let board = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// output true
let board2 = [
  ["1", "2", ".", ".", "3", ".", ".", ".", "."],
  ["4", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", "9", "1", ".", ".", ".", ".", ".", "3"],
  ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
  [".", ".", ".", "8", ".", "3", ".", ".", "5"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "8"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
// output false

function isValidSudoku(board) {
  // first check the row
    for(let row=0;row<9;row++){
        let seen =new Set()
        for(let i=0;i<9;i++){
            if(board[row][i]=='.') continue
            if(seen.has(board[row][i])) return false
            seen.add(board[row][i])

        }
    }

    // second check the column
    for(let col=0;col<9;col++){
        let seen =new Set()
        for(let i=0;i<9;i++){
            if(board[i][col]=='.') continue
            if(seen.has(board[i][col])) return false
            seen.add(board[i][col])
        }
    }
    for(let square=0;square<9;square++){
        const seen=new Set()
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                let row=Math.floor(square/3)*3+i
                let col=(square%3)*3+j
                if(board[row][col]==".") continue
                if(seen.has(board[row][col])) return false
                seen.add(board[row][col])
            }
        }
    }
    return true
    
}
console.log(isValidSudoku(board))
