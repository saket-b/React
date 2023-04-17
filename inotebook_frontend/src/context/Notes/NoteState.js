import NoteContext from "./noteContext";
import React, { useState, useContext } from "react";
import alertContext from "./alertContext";
const NoteState = (props) => {

    const alertcontext = useContext(alertContext);
    const { handleAlert} = alertcontext;

    const host = "http://localhost:5000";

    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial)
    


    // GETALL notes
    const getAllNotes = async () => {

        // Example POST method implementation:

           
            const response = await fetch( `${host}/api/notes/getAllNotes`, {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem('token'),
                },
                // body: JSON.stringify(), // body data type must match "Content-Type" header
            });
            let json = await response.json(); // parses JSON response into native JavaScript objects
            setNotes(json.allnotes);

    }


    // ADDNOTE function
    const addNote = async  ( title, description, tag) => {
        // api me add note karna baki hai

        const response = await fetch( `${host}/api/notes/addNote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token'),
            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });
      
        
        let note = await response.json();
       
         setNotes(notes.concat(note.addnote));
         handleAlert("Note added successfully", "success");
        
    }

    // delete Note function
    const deleteNote = async(id) => {

        const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              "token": localStorage.getItem('token'),
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }
            
          });
         // const json = await response.json();
        //todo API CALL KARNA baki hai
        setNotes(notes.filter((element) => { return element._id !== id }));
        handleAlert("Note deleted successfully", "danger");

    }

    // edit Note function
    const editNote = async (id, title, description, tag) => {



        // API UPDAT?E karna baki hai
       
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: "PATCH", // *GET, POST, PUT, DELETE, etc.
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
              "token": localStorage.getItem('token'),

            //   "mode": 'no-cors',  
            },
            body: JSON.stringify({title,description, tag}), // body data type must match "Content-Type" header
          });
        
          let newnotes = JSON.parse(JSON.stringify(notes));
          
        for (let index = 0; index < newnotes.length; index++) {
            let element = newnotes[index];
            if (element._id === id) {
                newnotes[index].title = title;
                newnotes[index].description = description;
                newnotes[index].tag = tag;
                break;
            }
        }

        setNotes(newnotes);
        handleAlert("Note Updated successfully", "success");

    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote , getAllNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;