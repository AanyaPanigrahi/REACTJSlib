import React, { useState } from 'react'
import './App.css'

function App() {

  //default value - T/F/string 'aanya'/object{}/empty string '' array[]/number 2 - anything

  let[counter,aanyaCounter]=useState(4)
   //name can be anything returns a arr[2] -> 0 idc counter, 1 idc function

  // let counter=4;
  const addValue = ()=>{
    counter=counter+1;
    aanyaCounter(counter);
    console.log("value added", {counter});
  }

  const removeValue=()=>{
    counter=counter-1;
    aanyaCounter(counter);
    console.log("value decreased",{counter});
  }

  return (
    <>
      <h2>Practice your React</h2>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>&nbsp;
      <button onClick={removeValue}>Decrease Value</button>
      <p>footer {counter}</p>
      {/* problem in ui updation in js*/}
      {/* React controls it with the use of hooks */}
    </>
  )
}

export default App
