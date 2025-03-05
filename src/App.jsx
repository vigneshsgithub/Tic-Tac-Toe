import Player from "./Components/player";
import GameBoard from "./Components/GameBoard";
function App() {
  return (
  <main>
    <div id="game-container">
    <ol id="players">
      
      <Player initialName="Player 1" symbol="X"/>
      <Player initialName="Player 2" symbol="O"/>
     
    </ol>
    <GameBoard/>
    </div>
  </main>
  )
};

export default App;
