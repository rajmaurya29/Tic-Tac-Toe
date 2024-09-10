import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './Square'
let t1=[null,null,null,null,null,null,null,null,null];
function App() {
  const [xIsNext,setxIsNext]=useState(true);
  const [squares,setSquares]=useState(Array(9).fill(null));
  let win;
  
  const winner=calculatewinner(squares);
    if(winner=="X"||winner=="O"){
      win ="Congratulations! Player "+winner+" Wins";
    }
    else if(winner=="1"){
      win ="Draw";
    }
    else {
      win="Turn :    Player   "+(xIsNext?"X":"O");
    }
  function handleClick(i){
      if(squares[i]=='X'|| squares[i]=='O'||calculatewinner(squares)){
        return;}
      const nextSquares=squares.slice();
      if(xIsNext){
        nextSquares[i]="X";
      }
      else{
        nextSquares[i]="O";
      }
      setxIsNext(!xIsNext);
      setSquares(nextSquares);
  }

  function handleClick1(){
    window.location.reload();
    console.log(1);
  }

  return (
    <div className="maincontainer">
    <div className='container'>
      <div className='headingtic'><h1 className='mainheading'>TIC TAC TOE</h1></div>
      
      <div className="container3">
          <button className='newgamebutton' onClick={handleClick1}>New Game</button>
        </div>
        <h1 className='win'>{win}</h1>
      <div className="containerouter">
        <div className="container1">
        
          <div className='board-row'>
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)} col={t1[0]}/>
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)} col={t1[1]}/>
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)} col={t1[2]}/>
          </div>
            <div className='board-row'>
              <Square value={squares[3]} onSquareClick={()=>handleClick(3)} col={t1[3]}/>
              <Square value={squares[4]} onSquareClick={()=>handleClick(4)} col={t1[4]}/>
              <Square value={squares[5]} onSquareClick={()=>handleClick(5)} col={t1[5]}/>
            </div>
          <div className='board-row'>
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)} col={t1[6]}/>
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)} col={t1[7]}/>
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)} col={t1[8]}/>
          </div>
        </div>

        
        
      </div>
    </div>
    </div>
  )
}

function calculatewinner(squares){
    const t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(var i=0;i<t.length;i++){
      const [a,b,c]=t[i];
      if(squares[a]&& squares[a]===squares[b] && squares[a]===squares[c]){
        t1[a]=1;t1[b]=1;t1[c]=1;
        console.log(t1[0]+", "+t1[1]+", "+t1[2]+", "+t1[3]+", "+t1[4]+", "+t1[5]+", "+t1[6]+", "+t1[7]+", "+t1[8]);
        // console.log(a+" "+b+" "+c+" a");
        return squares[a];
      }
    }
    for(var j=0;j<t.length;j++){
      const [a,b,c]=t[j];
        if((squares[0]&&squares[1]&&squares[1]&&squares[2]&&squares[3]&&squares[4]&&squares[5]&&squares[6]&&squares[7]&&squares[8])){
        // console.log(a+" "+b+" "+c+" b");
        return "1";

      }
    }

  return null;


}

export default App;
