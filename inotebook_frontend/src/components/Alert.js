import React from 'react'

const Alert = (props) => {

    console.log("ALert = ", props.message);
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                {props.message}
            </div>

        </div>
    )
}

export default Alert
