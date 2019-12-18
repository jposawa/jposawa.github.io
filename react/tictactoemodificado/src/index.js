import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
class Square extends React.Component {
    render() {
      return (
        <button 
            className="square"
            onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
*/

function Square(props)
{
    return(
        <button 
            className = "square"
            onClick={props.onClick} 
            style={{borderColor: props.vencedor ? props.corVencedor : "", color: props.vencedor ? props.corVencedor : ""}}
        >
            {props.value}
        </button>
    );
}
  
  class Board extends React.Component {
    renderSquare(i) {
        let winning = false;
        let indice = 0;
        while(!winning && indice < this.props.vencedores.length)
        {
            if(this.props.vencedores[indice++] === i)
                winning = true;
        }

      return (
        <Square
            corVencedor = "#369"
            vencedor={winning}
            value={this.props.squares[i]}
            onClick = {() => this.props.onClick(i)}
        />
      );
    }

    renderRow(numCol, totalCol)
    {
        const squares = [];
        const offset = numCol * totalCol;
        
        for(let n = 0; n < totalCol; n++)
        {
            squares.push(this.renderSquare(offset + n));
        }
        return(
            <div className = "board-row">
                {squares}
            </div>
        );
    }

    renderBoard(totalCol,totalRow)
    {
        const rows = [];
        totalCol = parseInt(totalCol);
        totalRow = parseInt(totalRow);

        if(isNaN(totalCol) || isNaN(totalRow))
        {
            totalCol = 3;
            totalRow = 3;
        }
        
        for(let n = 0; n < totalRow; n++)
        {
            rows.push(this.renderRow(n, totalCol));
        }

        return <div>{rows}</div>;
    }
  
    render() {
        /*
        <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                */
        return (this.renderBoard());
    }
  }
  
  class Game extends React.Component {
    constructor(props)
    {
        super(props);
        this.state =
        {
            history:[
            {
                squares: Array(9).fill(null),
                col: null,
                row: null
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i)
    {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        let location = [0,0];

        if(calculateWinner(squares) || squares[i])
        {
            //console.log(calculateWinner(squares));
            return;
        }
        location[0] = (i%3+1)
        if(i < 3)
        {
            location[1] = 1;
        }
        else if(i < 6)
        {
            location[1] = 2;
        }
        else
        {
            location[1] = 3;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'; //O MESMO QUE UM if PARA DETERMINAR SE É 'X' OU 'O'
        this.setState(
        {
            history: history.concat(
            [{
                squares: squares,
                col: location[0],
                row: location[1],
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext //ALTERNA A BOOLEANA QUE DETERMINA ENTRE 'X' E 'O'
        });
    }

    jumpTo(step)
    {
        this.setState(
        {
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step, move) => 
      {
            const desc = move ?
                'Go to move #' + move + " (" + step.col + "," + step.row + ")" :
                'Go to game start';
            return(
                <li key={move}>
                    <button style = {{fontWeight: this.state.stepNumber === move ? 'bold' : 'normal'}} onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
      });

      let status;
      let vencedores;
      if(winner)
      {
          console.log(winner);
          vencedores = winner[1];
          status = 'Winner: ' + winner[0];
      }
      else
      {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
          vencedores = [];
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board
                squares = {current.squares}
                vencedores = {vencedores}
                onClick = {(i) => this.handleClick(i)}
            />

          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );  

function calculateWinner(squares)
{
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

    for (let i = 0; i < lines.length; i++)
    {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        {
            console.log(lines[i].length);
            return [squares[a], lines[i]];
        }
    }

    return null;
}