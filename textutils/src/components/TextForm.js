import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = (event)=>{
        // console.log("click on upper casebtn");
        // console.log(event.target.value);
        // console.log(text);
        let textnew = text.toUpperCase();
        setText(textnew);

    }
    // const VowelConsonant= ()=>{

    //     const vowels =['a', 'e', 'i', 'o', 'u'];
    //     let v_count =0;
    //     for(let i=0; i<text.length; i++)
    //     {
    //         if( vowels.includes(text[i]))
    //             v_count++;
    //     }
    //     return v_count;
    // }
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


const [text, setText]= useState("");
  return (
    <>
        <div className='container'>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" onChange={handleChange} value={text}></textarea>
            </div> 
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear} >Clear Text</button>
        </div>
        <div className='conatainer my-3 mx  -2'>
            <h1 >Text Summary</h1>
            <p > <b>{text.split(" ").length}</b> Total Words  <b>{text.length}</b> Total letters  </p>
            <p>Read in <b>{0.008 * text.split(" ").length}</b> minutes</p>
            <h2>Preview </h2>
            <p> {text}</p>
        </div>
    </>
  )
}
