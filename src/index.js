import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board.js';

class Game extends React.Component {

  constructor(props) {
    super(props);

	var squaresBoard = [];
    for(var i = 0; i < 9; i++)
    	squaresBoard.push(Array(9).fill(null));
    this.state = {
      history: [{
        squares: squaresBoard,
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(xPosition, yPosition) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    
    console.log(xPosition);
    console.log(yPosition);
    if(squares[xPosition][yPosition] == null) {
      squares[xPosition][yPosition] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
	        history: history.concat([{
	          squares: squares,
	        }]),
	        stepNumber: history.length,
	        xIsNext: !this.state.xIsNext,
        });
    } else if(squares[xPosition][yPosition] != null) {
      alert("A badge has already placed on that position...");
    }
  }

  checkIfWinnerPosition(i) {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winnerLine = calculateWinner(current.squares);

    if(winnerLine != null) {
      return winnerLine.indexOf(i) !== -1 ? 'square yellow' : 'square';
    } else {
      return 'square';
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + (this.state.xIsNext ? 'O' : 'X');
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i, j) => this.handleClick(i, j)}
            checkIfWinnerPosition={(i) => this.checkIfWinnerPosition(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (var i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return lines[i];;
        }
    }

    return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);