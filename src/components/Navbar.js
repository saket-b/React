    import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props ) {
   
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
        </ul>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
        </form>

        {/* <div className='d-flex'>
            <div className='bg-primary rounded mx-2' style={{height:'20px', width:'30px'}} onClick = {()=>props.handleToggle('primary')}>
            </div>
            <div className='bg-warning rounded mx-2' style={{height:'20px', width:'30px'}} onClick = {()=>props.handleToggle('warning')}>
            </div>
            <div className='bg-success rounded mx-2' style={{height:'20px', width:'30px'}} onClick = {()=>props.handleToggle('success')}>
            </div>

        </div> */}
     
        <div className={`form-check form-switch mx-3 text-${props.mode === "dark"? "light":"dark"}`}>
            <input className="form-check-input" onClick={props.handleToggle}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode === "dark"? "Disable":"Enable"} Dark Mode </label>
        </div>
        {/* for adding more toggle button */}
        {/* <div className={`form-check form-switch mx-3 text-${props.mode === "dark"? "light":"dark"}`}>
            <input className="form-check-input" onClick={props.handleToggleGreen}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode === "dark"? "Disable":"Enable"} Green Mode </label>
        </div>
        <div className={`form-check form-switch mx-3 text-${props.mode === "dark"? "light":"dark"}`}>
            <input className="form-check-input" onClick={props.handleTogglePink}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode === "dark"? "Disable":"Enable"} Pink Mode </label>
        </div> */}
    </div>
    </div>
    </nav>
  )
}

Navbar.propTypes = {
    title :PropTypes.string.isRequired,
    aboutText : PropTypes.string

}

// Navbar.defaultProps ={
//     title : 'Text',
//     aboutText :"About Text"

// }