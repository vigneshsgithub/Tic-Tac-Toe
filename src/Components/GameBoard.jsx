const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];


export default function GameBoard({onSelectsquare,board}) {

    // const[gameboard,setGameBoard]=useState(initialGameBoard);

    // function handleSelectSquare(rowIndex,colindex){
    // setGameBoard((prevGameboard)=>{
    //     const updatedBoard=[...prevGameboard.map(innerArray => [...innerArray])];
    //     updatedBoard[rowIndex][colindex]=activePlayerSymbol;
    //     return updatedBoard;

    // });

    // onSelectsquare();
    // }

    return (
        <ol id="game-board" >
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colindex) => (
                            <li key={colindex}>
                                <button onClick={()=>onSelectsquare(rowIndex,colindex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>

                </li>

            ))}
        </ol>)
}