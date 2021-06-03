import React, {useState} from "react";

const App = () => {

const  [count, setCount]= useState(0); 
// count is what is displayed and is the inital count (0);
// setCount is the increment or decrement of the count.

const increase = ()=>{
  setCount(count +1 ); 
}
const decrease = ()=>{
  setCount(count- 1 ); 
}


  return (
    <div className= "container">
      <h1>Agbesi's Counter </h1>
      <h2>{count}</h2>
      <button  onClick = {decrease} >-</button>
      <button onClick = {increase} >+</button>
    </div>
  );
};

export default App;
