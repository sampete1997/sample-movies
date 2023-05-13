import { useState } from 'react';
import './App.css';

function App() {
  const [close, setClose] = useState(false)
  const handleClose = () => {
    setClose(true)
  }
  return (
    <div className="App">
      <p onClick={() => setClose(false)}>ON</p>
      <div className='modal' style={close ? { display: 'none' } : {}}>
        <div>      React Interview Questions for Freshers
          1. What is React?
          React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.
        </div>
        <input type='text'></input>
        <div onClick={handleClose}>X</div>
      </div>
    </div>
  );
}

export default App;
