import { useState } from "react"

export default function Player({initialName,symbol, isActive,onChangeName}){
    const[playerName,setplayerName]=useState(initialName)
    const [isEditing,setIsEditing]=useState(false);
  



    function handleChange(e){
   setplayerName(e.target.value);
    }
    function handleEditClick(){
      setIsEditing((wasEditing)=> !wasEditing);
      
      if(isEditing){
      onChangeName(symbol,playerName);
    }
  }

    let playerNames=<span className="player-name">{playerName}</span>;
    // let btncaption='Edit';

    if(isEditing==true){
       playerNames=<input type="text" required value={playerName} onChange={handleChange}/>
    //    btncaption="Save"
    }

    return <li className={isActive?'active':undefined}>
    <span className="player">
        {playerNames}
    <span className="player-symbol" >{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
  </li>
}