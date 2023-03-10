import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = (event)=>{
        
        let textnew = text.toUpperCase();
        setText(textnew);
        props.handleAlert("Converted to UpperCase!", "success");

    }
    
    const handleLoClick = (event)=>{
     
        let textnew = text.toLowerCase();
        setText(textnew);
        props.handleAlert("Converted to LowwerCase!", "success");

    }
    const handleChange = (event)=>{
        // console.log("inside onchange");
        setText(event.target.value);
    }
    const handleClear = () =>{
        let newtext ="";
        setText(newtext);
        props.handleAlert("Text to be Clear!", "success");

    }

    const handleExtraspace = ()=>{

        // console.log("inside handle extra space");
        let textnew = text.split(/[ ]+/);
        // console.log(textnew);
        setText(textnew.join(" "));
        props.handleAlert("Extra Space Removed!", "success");

    }
    const handleCopyText = async()=>{

        let textnew = document.getElementById("myBox");
        textnew.select();
        //document.execCommand("copy");
        //console.log(textnew);
        await navigator.clipboard.writeText(textnew.value);
        props.handleAlert("Clipboard copy!", "success");


    }
    const countWord = (text)=>{
        return text.split(/\s+/).filter((element)=>{
            return element.length !== 0;
        }).length;
    }
    const countLetter = (text)=>{
        
        
       return text.length;
       // return 0;
    }


const [text, setText]= useState("");
  return (
    <>
        <div className='container' style={{color : props.mode === "light" ?"black":"white"}}>

            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleChange} value={text}
                style={{backgroundColor : props.mode === "light" ?"white":"grey",color : props.mode === "light" ?"black":"white"}}
                > </textarea>
            </div> 
            <button className="btn btn-primary mx-2 my-2" disabled= {text.length === 0} onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-2" disabled= {text.length === 0} onClick={handleLoClick} >Convert to lowerCase</button>
            <button className="btn btn-primary mx-2 my-2" disabled= {text.length === 0} onClick={handleClear} >Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" disabled= {text.length === 0} onClick={handleCopyText} id="myBox" >Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" disabled= {text.length === 0} onClick={handleExtraspace} >Remove ExtraSpace</button>
        </div>
        <div className='container my-3 mx  -2' style={{color : props.mode === "light" ?"black":"white"}}>
            <h1 >Text Summary</h1>
            <p > <b>{countWord(text)}</b> Total Words  <b>{countLetter(text)}</b> Total letters  </p>
            <p>Read in <b>{0.008 * countWord(text)}</b> minutes</p>
            <h2>Preview </h2>
            <p> {text.length === 0 ? "Enter Something in text": text}</p>
        </div>
    </>
  )
}
