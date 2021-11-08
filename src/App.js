import './app.css';
import { useState } from 'react'
import QRCodeCanvas  from './QRCodeCanvas';

function App() {
  const [text, setText] = useState("")
  return (
    <div className='App'>
      <input onChange= {(element) => {setText(element.target.value)}} value={text} ></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
    </div>
  );
}

export default App;
