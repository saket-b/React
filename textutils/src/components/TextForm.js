import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = (event)=>{
        
        let textnew = text.toUpperCase();
        setText(textnew);

    }
    
    const handleLoClick = (event)=>{
     
        let textnew = text.toLowerCase();
        setText(textnew);

    }
    const handleChange = (event)=>{
        // console.log("inside onchange");
        setText(event.target.value);
    }
    const handleClear = () =>{
        let newtext ="";
        setText(newtext);
    }

    const handleExtraspace = ()=>{

        console.log("inside handle extra space");
        let textnew = text.split(/[ ]+/);
        // console.log(textnew);
        setText(textnew.join(" "));
    }
    const handleCopyText = async()=>{

        let textnew = document.getElementById("myBox");
        textnew.select();
        //document.execCommand("copy");
        //console.log(textnew);
        await navigator.clipboard.writeText(textnew.value);

    }


const [text, setText]= useState("");
  return (
    <>
        <div className='container' style={{color : props.mode === "light" ?"black":"white"}}>

            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleChange} value={text}
                style={{backgroundColor : props.mode === "light" ?"white":"grey",color : props.mode === "light" ?"black":"white"}}
                > </textarea>
            </div> 
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear} >Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText} id="myBox" >Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraspace} >Remove ExtraSpace</button>
        </div>
        <div className='conatainer my-3 mx  -2' style={{color : props.mode === "light" ?"black":"white"}}>
            <h1 >Text Summary</h1>
            <p > <b>{text.split(" ").length}</b> Total Words  <b>{text.length}</b> Total letters  </p>
            <p>Read in <b>{0.008 * text.split(" ").length}</b> minutes</p>
            <h2>Preview </h2>
            <p> {text.length === 0 ? "Enter Something in text": text}</p>
        </div>
    </>
  )
}
