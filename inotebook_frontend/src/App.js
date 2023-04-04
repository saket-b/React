import React from 'react';
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

function App() {
  return (

    <React.StrictMode>
      <NoteState>
        <Router>
          <Navbar />
          
          <div className="container">
            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/about' element={< About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </React.StrictMode>
  );
}

export default App;
