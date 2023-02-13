import React,{useState} from "react";
import "./app.css";
import Keypad from "./components/Keypad";

const App = ()=>{
  const [input , setInput] = useState('');

  const handleClick =(value)=>{
     setInput (input + value)
  }
  const handleEqual =()=>{
   setInput(eval(input).toString());
  }
  const handleClear = ()=>{
   setInput("");
  }
  return(
    <div className="App">
      <div className="calculator">
        <input className="display" type="text" value={input} readOnly />
        <Keypad   
        handleClick ={handleClick}
        handleEqual ={handleEqual}
        handleClear ={handleClear}
        />
      </div>
    </div>
  )
}
export default App;
