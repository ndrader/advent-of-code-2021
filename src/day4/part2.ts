var fs = require('fs');
var pickList = fs.readFileSync('./src/day4/input.in').toString().split("\n").map(item => item.split(','))[0];
var boardsRaw = fs.readFileSync('./src/day4/input.in').toString().split("\n").slice(2);

const part2 = () => {
  let winningBoardStack = [];
  let boards = [];

  for(let index = 0; index < boardsRaw.length; index += 6){
    let board = [];
    for(let row = 0; row < 5; row++){
      board.push(boardsRaw[index + row].trim().split(/\ +/))
    }
    boards.push(board);
  }
  
  let wasPicked = boards.map(i => i.map(j => j.map(() => false)));
  
  const calculateWinningScore = (boardIndex: number, pickNumber: string): number => {
    
    let sum = 0;
    boards[boardIndex].forEach((row, indexRow) => row.forEach((num, indexNum) => {
      if(!wasPicked[boardIndex][indexRow][indexNum]) sum += parseInt(boards[boardIndex][indexRow][indexNum]);
    }));
    
    return (parseInt(pickNumber) * sum);
  }
  
  for(const pickNumber of pickList){
    boards.forEach((board, indexBoard) => board.forEach((row, indexRow) => row.forEach((num, indexNum) => {
      if(num === pickNumber) wasPicked[indexBoard][indexRow][indexNum] = true;
    })));
  
    wasPicked.forEach((board, indexBoard) => {
      if(winningBoardStack.find(winner => winner.indexBoard === indexBoard)) return;
      //check rows
      board.forEach(row => {
        if(row.find(el => el === false) === undefined){
          winningBoardStack.push({indexBoard, score: calculateWinningScore(indexBoard, pickNumber)});
        }
      });
      //check columns -- probably a way cleaner way to do this, but just finding answer 
      for(let column = 0; column < 5; column++){
        if(board[0][column] && board[1][column] && board[2][column] && board[3][column] && board[4][column]){
          winningBoardStack.push({indexBoard, score: calculateWinningScore(indexBoard, pickNumber)});
        }
      }
    });
  }
  console.log(winningBoardStack[winningBoardStack.length - 1].score);
}

part2();