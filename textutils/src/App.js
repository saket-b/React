// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState} from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  const handleToggle = ()=>{
       // console.log("indide toggle");
    if( mode === 'light')
    {
      setMode("dark");
      document.body.style.background = "#05315e";
      handleAlert("Dark Mode Enable", "success");

      /* for popup message */
      // // document.title ="Light Mode " // for title dynamiclly
      // setInterval(() => {
      // document.title ="Text utils amzing" // for title dynamiclly
        
      // }, 2000);
      // setInterval(() => {
      //   document.title ="install text utils" // for title dynamiclly
          
      //   }, 1500);

    }
    else if( mode === 'dark')
    {
      setMode("light");
      document.body.style.background = "white";
      handleAlert("Light Mode Enable", "success");
      // document.title ="Dark Mode "

    }
  }


  const handleToggleGreen = ()=>{
    // console.log("indide toggle");
 if( mode === 'light')
 {
   setMode("green");
   document.body.style.background = "#03723f";
   handleAlert("Green Mode Enable", "success");
 }
 else if(mode === 'green')
 {
   setMode("light");
   document.body.style.background = "white";
   handleAlert("Light Mode Enable", "success");
 }
}


const handleTogglePink= ()=>{
  // console.log("indide toggle");
if( mode === 'light')
{
 setMode("pink");
 document.body.style.background = "#d63384";
 handleAlert("Pink Mode Enable", "success");
}
else if(mode === 'pink')
{
 setMode("light");
 document.body.style.background = "white";
 handleAlert("Light Mode Enable", "success");
}
}

  const handleAlert =(message, type)=>{

    setAlert({
      msg : message,
      type : type
    })
   
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  return (
   
    <>
    {/* <Router> */}
      <Navbar   title = "TextUtils"  aboutText = "About" mode = {mode} handleToggle = {handleToggle} handleToggleGreen ={handleToggleGreen} 
          handleTogglePink = {handleTogglePink}/>
     <Alert alert = {alert}/>
 
      <div className="container my-3">
    
              {/* <About />  */}
               <TextForm  heading = "Enter The Text to Analyze " mode ={mode} handleAlert = {handleAlert} />
            {/* <Routes> */}
              {/* if not write exact similar type path can render */}
              {/* <Route exact path="/about" element= {<About />}/>
              <Route exact path="/" element = {<TextForm  heading = "Enter The Text to Analyze " mode ={mode} handleAlert = {handleAlert} />}
              />

            </Routes> */}
        
      </div>
      
    {/* </Router> */}
      

    </>
   
    

  );
}

export default App;
