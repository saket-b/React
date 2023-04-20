import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import alertContext from '../context/Notes/alertContext';
const Signup = () => {

    const [credential, setcredential] = useState({ "name": "", "email": "", "password": "" });
    const context = useContext(alertContext);
    const { handleAlert} = context;
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
       
       
        const response = await fetch('http://localhost:5000/api/auth/createUser', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjAxNzQ5NzUzM2FmNTVhYTk1OTJkNyIsImlhdCI6MTY3OTkzODkzNH0.YNjZ30yaz8cOzf6zUJEf5QSp2OVQptWl7gCBiSX8XyU",
            },
            body: JSON.stringify({ name: credential.name, email: credential.email, password: credential.password }), // body data type must match "Content-Type" header
        });

        let json = await response.json();
        
        if (json.success) {
            localStorage.setItem("token", json.token);
            localStorage.setItem("username", json.username);
            handleAlert("signup successfully", "success");
            navigate('/');

        }
        else {
            // alert("Invalid credentials")
            handleAlert("Invalid credentials", "warning");
        }
    }

    const handleonchange = (e) => {

        
        setcredential({ ...credential, [e.target.name]: e.target.value });

    }

    return (
        <div className='my-3'>
            <form onSubmit={handleSignup} >
                <div className="mb-3">
                    <label forhtml="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={handleonchange} aria-describedby="emailHelp" required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label forhtml="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={handleonchange} aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label forhtml="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={handleonchange} required minLength={5} />
                </div>

                <button type="submit" className="btn btn-primary" >Signup</button>
            </form>

        </div>
    )
}

export default Signup
