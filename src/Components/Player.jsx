import { useState } from "react"

export default function Player({initialName,symbol}){
    const[playerName,setplayerName]=useState(initialName)
    const [isEditing,setIsEditing]=useState(false);
  



    function handleChange(e){
   setplayerName(e.target.value);
    }
    function handleEditClick(){
      setIsEditing((wasEditing)=> !wasEditing);
    }


    let playerNames=<span className="player-name">{playerName}</span>;
    // let btncaption='Edit';

    if(isEditing==true){
       playerNames=<input type="text" required value={playerName} onChange={handleChange}/>
    //    btncaption="Save"
    }

    return <li>
    <span className="player">
        {playerNames}
    <span className="player-symbol" >{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
  </li>
}