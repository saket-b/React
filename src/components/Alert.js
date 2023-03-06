import React from 'react'

function Alert(props) {
    const Captilise = (msg) =>{
        const newtext = msg[0].toUpperCase() + msg.slice(1); 
        return newtext;
    }
  return (
    <div style={{height : '50px'}}>
            { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
                        <strong>{Captilise(props.alert.type)}</strong> : {props.alert.msg}
                        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                    </div>}
    </div>
  )
}

export default Alert
