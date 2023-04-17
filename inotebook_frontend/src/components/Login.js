import React, { useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import alertContext from '../context/Notes/alertContext';
const Login = () => {

    const [credential, setcredential] = useState({"email":"", "password":""});
    
    const alertcontext = useContext(alertContext);
    const {handleAlert} = alertcontext;


    const navigate = useNavigate();
    const handleLogin = async (e) =>{
        e.preventDefault();
        
       
        const response = await fetch( 'http://localhost:5000/api/auth/login', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjAxNzQ5NzUzM2FmNTVhYTk1OTJkNyIsImlhdCI6MTY3OTkzODkzNH0.YNjZ30yaz8cOzf6zUJEf5QSp2OVQptWl7gCBiSX8XyU",
            },
            body: JSON.stringify({email:credential.email, password:credential.password}), // body data type must match "Content-Type" header
        });

        let json = await response.json();
        if(json.success)
        {
            localStorage.setItem('token',json.token);
            navigate('/');
            handleAlert("login successfully", "success");
        }
        else 
        {
            handleAlert("credential Error", "warning");
            alert("Invalid credentials")
        }
    }

    const handleonchange = (e) => {
        
      //  console.log("email = ", credential.email);
        setcredential({ ...credential, [e.target.name]: e.target.value });
    
      }
    

    

    return (
        <div>
            <h2 className='my-3'>Login to use iNoteBook</h2>
            <form onSubmit={handleLogin}>
                <div className="my-3">
                    <label forhtml="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={handleonchange} id="email"  name = "email" />
                </div>
                <div className="mb-3">
                    <label forhtml="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  onChange={handleonchange} id="password" name = "password"/>
                </div>
               
               
                <button type="submit" className="btn btn-primary"  >Login</button>
            </form>

        </div>
    )
}

export default Login
