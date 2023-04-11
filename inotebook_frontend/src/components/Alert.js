import React, {useContext} from 'react'
import alertContext from '../context/Notes/alertContext';


function Alert(props) {

  const context = useContext(alertContext);
 const {alert} = context;

    const Captilise = (msg) =>{
        const newtext = msg[0].toUpperCase() + msg.slice(1); 
        return newtext;
    }
  return (
    alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`}role="alert">
                        <strong>{Captilise(alert.type)}</strong> : {alert.msg}
                        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                    </div>
  )
}


export default Alert
