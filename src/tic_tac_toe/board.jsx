
import React, { useState } from "react"
import Square from "./Square";


function Board(){
    const [state,setState]=useState(Array(9).fill(null));
    const[isXTurn,setisXTurn]=useState(true);

    const handleClicked=(index)=>{
        if(state[index]!==null){
            return ;
        }
        const copyState=[...state];
        copyState[index]=isXTurn?"X":"O";
        setState(copyState);
        setisXTurn(!isXTurn);
    }
    const winnerList=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    const checkWinner=()=>{
        for(const item of winnerList){
            const [a,b,c]=item;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c])return state[a];
        }
        return false;
    }
    const isWinner=checkWinner();
    function resetGame(){
        const newState=Array(9).fill(null);
        setState(newState);
    }
    return (
        
        <div className="board">
            <h4>Player {isXTurn?"X" : "O"} move </h4>
            {isWinner?<div>
                <h3>{isWinner} won the game</h3>
                <button onClick={resetGame}>Play again</button>
            </div>:
            (
                <div>
                <div className="board-row">
                <Square onClick={()=>handleClicked(0)} value={state[0]}/>
                <Square onClick={()=>handleClicked(1)}value={state[1]}/>
                <Square onClick={()=>handleClicked(2)}value={state[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>handleClicked(3)} value={state[3]}/>
                <Square onClick={()=>handleClicked(4)} value={state[4]}/>
                <Square onClick={()=>handleClicked(5)} value={state[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>handleClicked(6)} value={state[6]}/>
                <Square onClick={()=>handleClicked(7)} value={state[7]}/>
                <Square onClick={()=>handleClicked(8)} value={state[8]}/>
            </div>
                </div>
            )
            }
        </div>
    )
}
export default Board;











