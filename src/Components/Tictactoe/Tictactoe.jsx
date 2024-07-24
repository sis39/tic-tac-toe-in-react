import React, { useRef, useState } from 'react'
import './Tictactoe.css'
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

const Tictactoe = () => {

let [count,setCount] = useState(0);
let [lock,setLock] = useState(false);
let [data,setData] = useState(Array(9).fill(''));
let titleRef = useRef(null);
let [wonImage,setWonImage] = useState(null);

const toggle = (e,num) =>{
  if(lock || data[num]){
    return 0;
  }
  data[num] =(count%2===0 ? cross_icon: circle_icon)
  setCount(++count);
  checkWin();
}

const reset =()=>{
    setData(Array(9).fill(''));
    setCount(0);
    setLock(false);
    setWonImage(null);
}
const checkWin = () => {
   
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];

   
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (data[a] === data[b] && data[b] === data[c] && data[a] !== '') {
            won(data[a]);
            return;
        }
    }
}

const won = (winner) => {
    setLock(true);
    setWonImage(winner === cross_icon ? cross_icon : circle_icon);
}



  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>{wonImage ? (
          <>
            Congratulations <img src={wonImage} alt="Won Icon" className='won-image' /> you won!!
          </>
        ) : (
          <>Tic Tac Toe Game In <span>React</span></>
        )}</h1>
         <div className="board">
           <div className="row1">
              <div className="boxes" onClick={(e)=>{toggle(e,0)}}>{data[0] && <img src={data[0]} alt='icon' />}</div>
              <div className="boxes" onClick={(e)=>{toggle(e,1)}}>{data[1] && <img src={data[1]} alt='icon' />}</div>
              <div className="boxes" onClick={(e)=>{toggle(e,2)}}>{data[2] && <img src={data[2]} alt='icon' />}</div>
           </div>
           <div className="row2">
              <div className="boxes" onClick={(e)=>{toggle(e,3)}}>{data[3] && <img src={data[3]} alt='icon' />}</div>
              <div className="boxes"onClick={(e)=>{toggle(e,4)}}>{data[4] && <img src={data[4]} alt='icon' />}</div>
              <div className="boxes"onClick={(e)=>{toggle(e,5)}}>{data[5] && <img src={data[5]} alt='icon' />}</div>
           </div>
           <div className="row3">
              <div className="boxes"onClick={(e)=>{toggle(e,6)}}>{data[6] && <img src={data[6]} alt='icon' />}</div>
              <div className="boxes"onClick={(e)=>{toggle(e,7)}}>{data[7] && <img src={data[7]} alt='icon' />}</div>
              <div className="boxes"onClick={(e)=>{toggle(e,8)}}>{data[8] && <img src={data[8]} alt='icon' />}</div>
           </div>
         </div>
         <button className='reset' onClick={reset}>Reset</button>
    </div>
  )
}

export default Tictactoe
