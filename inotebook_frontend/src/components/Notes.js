import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteItems from './NoteItems'
import noteContext from '../context/Notes/noteContext'
import AddNote from './AddNote'
import { Modal, Button } from 'react-bootstrap'
const Notes = () => {




  // let inputref = useRef(null);
  const context = useContext(noteContext)
  const { notes, getAllNotes, editNote } = context;
 

  const [note, setNotes] = useState({ "title": "", "description": "", "tag": "" });

  useEffect(() => {
    // console.log("inside in useEffect");
    getAllNotes();
    // eslint-disable-next-line
  }, []);


  const UpdateNote = (currentnote) => {
    setShow(true);
    setNotes(currentnote);
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(note);
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
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} placeholder="title"
              onChange={handleOnchange} />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <div className="form-group my-3 mx-3">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input type="text" className="form-control" id="description" name="description" placeholder="description" value={note.description}  onChange={handleOnchange} />
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
          <Button variant="primary" onClick={handleUpdate}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='row my-3'>
        <h2>Your Notes</h2>
        {notes.map((note, id) => {
          return <NoteItems key={id} note={note} UpdateNote={UpdateNote} />
        })
        }

      </div>
    </>
  )
}

export default Notes
