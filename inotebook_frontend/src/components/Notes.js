import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteItems from './NoteItems'
import noteContext from '../context/Notes/noteContext'
import AddNote from './AddNote'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Notes = () => {


  const navigate = useNavigate();

  // let inputref = useRef(null);
  const context = useContext(noteContext)
  const { notes, getAllNotes, editNote } = context;

  const [note, setNotes] = useState({ "title": "", "description": "", "tag": "" });

  useEffect(() => {
   
    if(localStorage.getItem('token'))
        getAllNotes();
    else 
       {
        navigate('/login');
       }
    // eslint-disable-next-line
  }, []);

 

  const UpdateNote = (currentnote) => {
    setShow(true);
    setNotes(currentnote);
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    editNote(note._id, note.title, note.description, note.tag);
    
    document.getElementById("myForm").reset();
    handleClose();
  }

  const handleOnchange = (e) => {

    setNotes({ ...note, [e.target.name]: e.target.value });

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AddNote />

      <Button variant="primary d-none" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>




        <form className='my-3' id="myForm">
          <div className="form-group my-3 mx-3">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" minLength={5} required value={note.title} placeholder="title" onChange={handleOnchange} />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group my-3 mx-3">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input type="text" className="form-control" id="description" name="description" placeholder="description" minLength={5} required value={note.description} onChange={handleOnchange} />
          </div>
          <div className="form-group my-3 mx-3">
            <label htmlFor="exampleInputPassword1">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" placeholder="tag" value={note.tag} onChange={handleOnchange} />
          </div>


        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" disabled={note.title.length < 5 || note.description.length < 5} onClick={handleUpdate}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='row my-3'>
        <h2>Your Notes</h2>
          <div className="container mx-3">
            {!notes.length && 'No Notes available'}
          </div>
          {notes.map((note, id) => {
            return <NoteItems key={id} note={note} UpdateNote={UpdateNote} />
          })
          }

        </div>
      </>
      )
}

      export default Notes
