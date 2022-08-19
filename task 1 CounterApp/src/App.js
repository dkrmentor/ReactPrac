import './App.css';
import React, { useState } from 'react';

function App() {

  let [number, setNumber] = useState(0)
const handleAdd=()=>{
  setNumber(number+1)
}
const handleSub=()=>{
  setNumber(number-1)
}
  return (
    <div className="App">
      <header className="App-header">
        <h5>
          Task 1 Counter App
          by dhara rajput
        </h5>
        <h3>
          Counter
        </h3>

        <h5>
          {number}
          
        </h5>
<div className='row'>
<button className='bg-dark' onClick={handleAdd}>
          Add
        </button>

        <button className='bg-dark' onClick={handleSub}>
          Subtract
        </button>


</div>
    
      </header>
    </div>
  );
}

export default App;
