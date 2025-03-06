import Player from "./Components/player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/winning-combinations";
import GameOver from "./Components/GameOver";



const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];




function derivedActivePlayer(Gameturns) {
  let currentPlayer = 'X';
  if (Gameturns.length > 0 && Gameturns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}


function App() {
  const [Gameturns, setGameturns] = useState([]);
  const[players,setplayer]=useState(
    {'X':'Player 1',
      'Y': 'Player 2'
    }
  )
  //  const[activePlayer,setActiveplayer]=useState('X');

  const activePlayer = derivedActivePlayer(Gameturns);


  let gameBoard = [...initialGameBoard.map(array => [...array])];
  for (const turn of Gameturns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];


    if (firstSquareSymbol &&
       firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol) 
      {
      winner = players[firstSquareSymbol];
    }
  }

const hasdraw = Gameturns.length=== 9 && !winner;

  function handleSelectSquare(rowIndex, colindex) {
    // setActiveplayer((curActivplayer)=> (curActivplayer ==='X'?'O':'X'));


    setGameturns((prevturns) => {
      const currentPlayer = derivedActivePlayer(prevturns);

      const updatedturns = [
        { square: { row: rowIndex, col: colindex }, player: currentPlayer }, ...prevturns];

      return updatedturns;
    }
    )
  }

  function handleRematch(){
    setGameturns([]);
  }


  function handlePlayerName(symbol,newName){
    setplayer((prevPlayer)=> {
      return{

        ...prevPlayer,
        [symbol]: newName

      };
    });
  }



  return (
    <main>
      <div id="game-container" >
        <ol id="players" className="highlight-player">

          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} 
          onChangeName={handlePlayerName}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O' }onChangeName={handlePlayerName} />

        </ol>
        {(winner || hasdraw) && <GameOver winner={winner} onRestart={handleRematch}/>}
        <GameBoard onSelectsquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={Gameturns} />
    </main>
  )
};

export default App;
