import React, { Children, useState } from 'react'
import { Alert } from 'react-bootstrap';
import alertContext from './alertContext';


const AlertState = (props) => {

    const [alert, setAlert] = useState(null);
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
        <alertContext.Provider value={{handleAlert, alert}}> 
            {/* props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Captilise(props.alert.type)}</strong> : {props.alert.msg} */}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                {/* <Alert alert = {alert}/> */}
                {props.children}
            

        </alertContext.Provider>
    )
}

export default AlertState
