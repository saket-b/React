import React, {useState} from 'react'

export default function About() {
  
  
    const [textStyle, setStyle] = useState({
            color:"black",
            backgroundColor :'white'
    });

    const [toggleBtn , setBtn] = useState("Dark Mode Enable");

   const toggleStyle = ()=>{

        if( textStyle.color === 'black')
        {
            setStyle({
                color:"white",
                backgroundColor :'black'
        });
            setBtn("Dark Mode Disable")
        }
        else 
        { 
            setStyle({
                color:"black",
                backgroundcolor :'white'
        });
        setBtn("Dark Mode Enable")

        }
        
    }


  
  
return (

    <>
    
    <div className='conatainer ' style={textStyle} >
    <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={textStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Why we created it?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={textStyle}>
        <strong>Text-Utils</strong>is  learning exercise to practice our text. 
        , we continue to refactor, redesign, improve, and implement new features. 
        And we could say that we learned a lot since we started, by including the experience here and 
        in the overall development world. As long our spirit allows us to continue learning and coding, we will continue improving this website.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={textStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What does it do?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={textStyle}>
        <strong>Text-Utils</strong> is a web tool to assist developers and other people in daily tasks by providing tools for manipulating text data.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"  style={textStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Why is it different?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={textStyle}>
      Fast, secure and easy. This is a summary of what Text-Utils.com is. All we design is intended to be fast, really fast. Other than that, all our utilities are client-side, meaning your data will not go through our servers to be processed. 
      Your data is secure. Finally, Text-Utils.com is also quite easy. 
      Everything can be found on the page very quickly, in just a few clicks.
      </div>
    </div>
  </div>
  {/* <button className='btn btn-primary my-3' onClick={toggleStyle}>{toggleBtn}</button> */}
</div>
</div>
</>
  )
}
