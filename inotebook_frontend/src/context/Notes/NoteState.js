import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    let notesInitial = [
        {
            "id": "6421f409472728765abfd60a",
            "user" : "642017497533af55aa9592d7",
            "title": "My updated Note4 ",
            "description": "Hello World",
            "tag": "Updated Coding",
            "__v": 0
        },
        {
            "_id": "642329b0e2ec692b87929e61",
            "user": "642017497533af55aa9592d7",
            "title": "My  Note 2",
            "description": "Hello codingfee    world 2",
            "tag": " Coding",
            "__v": 0
        },
        {
            "id": "6421f409472728765abfd60a",
            "user" : "642017497533af55aa9592d7",
            "title": "My updated Note4 ",
            "description": "Hello World",
            "tag": "Updated Coding",
            "__v": 0
        },
        {
            "_id": "642329b0e2ec692b87929e61",
            "user": "642017497533af55aa9592d7",
            "title": "My  Note 2",
            "description": "Hello codingfee    world 2",
            "tag": " Coding",
            "__v": 0
        },
        {
            "id": "6421f409472728765abfd60a",
            "user" : "642017497533af55aa9592d7",
            "title": "My updated Note4 ",
            "description": "Hello World",
            "tag": "Updated Coding",
            "__v": 0
        },
        {
            "_id": "642329b0e2ec692b87929e61",
            "user": "642017497533af55aa9592d7",
            "title": "My  Note 2",
            "description": "Hello codingfee    world 2",
            "tag": " Coding",
            "__v": 0
        }
        
    ]

    const [notes, setNotes] = useState(notesInitial)


  
    return (
        <NoteContext.Provider value={{ notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;