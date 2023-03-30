import React , {useContext}from 'react'
import NoteItems from './NoteItems'
import noteContext from '../context/Notes/noteContext'

const Notes = () => {

    const context = useContext(noteContext)
    const {notes, setNotes} = context;
    //console.log(context.notes);
  return (
    <div className='row my-3'>
        <h2>Your Notes</h2>
        { notes.map((note)=>{
            return <NoteItems note = {note}/>
        })
        }
        
    </div>
  )
}

export default Notes
