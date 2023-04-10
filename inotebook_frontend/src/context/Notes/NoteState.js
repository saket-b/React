import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {

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
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjAxNzQ5NzUzM2FmNTVhYTk1OTJkNyIsImlhdCI6MTY3OTkzODkzNH0.YNjZ30yaz8cOzf6zUJEf5QSp2OVQptWl7gCBiSX8XyU",
                },
                // body: JSON.stringify(), // body data type must match "Content-Type" header
            });
            let json = await response.json(); // parses JSON response into native JavaScript objects
            //console.log("message = ", json.message);
            setNotes(json.message);

    }


    // ADDNOTE function
    const addNote = async  ( title, description, tag) => {
        // api me add note karna baki hai

        const response = await fetch( `${host}/api/notes/addNote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjAxNzQ5NzUzM2FmNTVhYTk1OTJkNyIsImlhdCI6MTY3OTkzODkzNH0.YNjZ30yaz8cOzf6zUJEf5QSp2OVQptWl7gCBiSX8XyU",
            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });
      
        console.log("=============");
        let note = await response.json();
        console.log("inside note add ", note);
       
         setNotes(notes.concat(note.success));
         console.log( "Notes = ", notes);
    }

    // delete Note function
    const deleteNote = async(id) => {

        const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjAxNzQ5NzUzM2FmNTVhYTk1OTJkNyIsImlhdCI6MTY3OTkzODkzNH0.YNjZ30yaz8cOzf6zUJEf5QSp2OVQptWl7gCBiSX8XyU",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }
            
          });
         // const json = await response.json();
        //   console.log(json);
        //todo API CALL KARNA baki hai
        setNotes(notes.filter((element) => { return element._id !== id }));
    }

    // edit Note function
    const editNote = async (id, title, description, tag) => {



        // API UPDAT?E karna baki hai
        console.log(id);
        const response = await fetch(`${host}/api/notes/updateNote/${id}`, {
            method: "PATCH", // *GET, POST, PUT, DELETE, etc.
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjAxNzQ5NzUzM2FmNTVhYTk1OTJkNyIsImlhdCI6MTY3OTkzODkzNH0.YNjZ30yaz8cOzf6zUJEf5QSp2OVQptWl7gCBiSX8XyU",

            //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjAxNzQ5NzUzM2FmNTVhYTk1OTJkNyIsImlhdCI6MTY3OTkzODkzNH0.YNjZ30yaz8cOzf6zUJEf5QSp2OVQptWl7gCBiSX8XyU",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            //   "mode": 'no-cors',  
            },
            body: JSON.stringify({title,description, tag}), // body data type must match "Content-Type" header
          });
        //   console.log(await response.json());
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

        console.log("new notes =", newnotes);
        setNotes(newnotes);
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote , getAllNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;