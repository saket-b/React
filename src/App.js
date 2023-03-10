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


  const removeClassColor =()=>{

    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');

  }
  const handleToggle = (cls)=>{

        removeClassColor();
       // console.log("indide toggle");
      // document.body.classList.add('bg-'+cls);
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
    <Router>
      <Navbar   title = "TextUtils"  aboutText = "About" mode = {mode} handleToggle = {handleToggle}
         />
     <Alert alert = {alert}/>
 
      <div className="container my-3">
    
              {/* <About />  */}
               {/* <TextForm  heading = "Enter The Text to Analyze " mode ={mode} handleAlert = {handleAlert} /> */}
            <Routes>
              if not write exact similar type path can render
               <Route exact path="/about" element= {<About    mode = {mode}/>}/>
              <Route path="/" element = {<TextForm  heading = "TextUtils - Word Counter | Charater Counter " mode ={mode} handleAlert = {handleAlert} />}
              />

            </Routes> 
        
      </div>
      
    </Router>
      

    </>
   
    

  );
}

export default App;
