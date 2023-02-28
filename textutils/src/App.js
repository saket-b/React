// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'



function App() {
  const [mode, setMode] = useState("light");
  const handleToggle = ()=>{

    console.log("indide toggle");
  if( mode === 'light')
   {
     setMode("dark");
     document.body.style.background = "#05315e";
   }
  else 
  {
      setMode("light");
    document.body.style.background = "white";
  }

  }

  return (
   
    <>
    <Navbar   title = "TextUtils"  aboutText = "About" mode = {mode} handleMode = {handleToggle}/>
    <div className="container my-3"> 
        <TextForm  heading = "Enter The Text to Analyze " mode ={mode}/>
        {/* <About/> */}
    </div>
        
   
    </>
   
    

  );
}

export default App;
