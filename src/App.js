import React,{ useState , useEffect } from 'react';
import './App.css';
import Display from './Display'
import Btn from './Btn';
function App() {
  async function RandomAdvice(){
    const res=await fetch("https://api.adviceslip.com/advice");
    const val=await res.json();
    setadvice(val.slip.advice);
  }
  const [advice,setadvice]=useState([]);
  useEffect(()=>{
    RandomAdvice();
  },[]);
  return (
    <div style={{height:"100vh",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div>
        <h2 style={{padding:"10px",marginBottom:"50px",fontSize:"1.5rem"}}>A RandomAdvice Will Be Shown.</h2>
        <Display advice = {advice} />
        <br/>
        <Btn action={RandomAdvice} value="Radom Advice"/>
      </div>
    </div>
  );
}

export default App;
