import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import alertContext from '../context/Notes/alertContext';
import { useContext } from 'react';
const Navbar = () => {

    const navigate = useNavigate();
    const alertcontext = useContext(alertContext);
    const {handleAlert} = alertcontext;

    let location = useLocation();
    // useEffect(() => {
    //     //console.log(localStorage.getItem('token'));
    //     // Google Analytics
    //     // console.log(location);
    // }, [location]);

    const handleLogout =() =>{
       

        localStorage.removeItem('token');
        navigate('/login');
        handleAlert("Logout successfully", "success");


    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNoteBook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>

                    </ul>
                    { !localStorage.getItem('token')?<form className='d-flex'>
                        <Link className="btn btn-primary mx-1" role="button" to="/signup"> Signup</Link>
                        <Link className="btn btn-primary mx-1" role="button" to="/login"> login</Link>
                    </form>:(<button className='btn btn-primary mx-1' onClick={handleLogout}> Logout</button>)
                    }


                </div>
            </div>
        </nav>

    )
}

export default Navbar
