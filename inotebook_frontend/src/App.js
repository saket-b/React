import React, { useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/Notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import AlertState from './context/Notes/AlertState';
import alertContext from './context/Notes/alertContext';

function App() {

//  const context = useContext(alertContext);
//  const {alert} = context;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJzYWtldDkiLCJlbWFpbCI6InNha2V0OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1In0sImlhdCI6MTY4MTQwODk2Mn0.LOtOVRT7cqJKUVTbVjqjWfciukLMLHnK40Hlx7CSm5M
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJzYWtldDkiLCJlbWFpbCI6InNha2V0OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1In0sImlhdCI6MTY4MTQwODk2Mn0.LOtOVRT7cqJKUVTbVjqjWfciukLMLHnK40Hlx7CSm5M
  return (

    <React.StrictMode>
      <AlertState>
      <NoteState>
        
        <Router>
          <Navbar />
          <Alert />
          <div className="container my-3">
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/login' element={< Login/>}></Route>
              <Route exact path='/signup' element={< Signup />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
      </AlertState>
    </React.StrictMode>
  );
}

export default App;
