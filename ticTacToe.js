//make a board
//make player1 and player2
//set win condition
//make moves

let board = {
  A: ['.', '.', '.'],
  B: ['.', '.', '.'],
  C: ['.', '.', '.']
}

class Player {
  constructor(name, isX, isTurn){
    this.name = name;
    this.x = isX;
    this.isTurn = isTurn;
  }

  makeMove(moveSpace) {
    if (moveSpace === '.' && this.isTurn) {
      board[moveSpace]
      moveSpace = (this.x ? X : O)
      this,isTurn = false
      console.log('Next player turn!')
    } else {
      console.log(`Try again; choose a valid space!`)
    }
  }
}

const player1 = new Player('Player 1', true, true)
const player2 = new Player('Player 2', false, false)

console.log('Ready to tic some tac toes?')
console.log('Player 1: choose a space using LETTER then a NUMBER, ABC down and 012 across.')

function player1Move(moveLetter, moveNumber) {
  player1.makeMove(board[moveLetter][moveNumber])
}
  player2.isTurn = true
}

player1Move(INPUT1, INPUT2)
player2Move(INPUT1, INPUT2)
