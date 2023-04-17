import React , {useContext}from 'react'
import noteContext from '../context/Notes/noteContext'


const NoteItems = (props) => {

    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note, UpdateNote} = props;

    const handleDelete =()=>{
        
        
        let id = props.note._id;
        deleteNote(id);
    }
   

    return (
        <div className='col-md-3'>
            <div className="card my-3" >

                <div className="card-body">
                <div className= "d-flex justify-content-space-between " >
                <h5 className="card-title">{props.note.title}</h5>
                        <i className="fa-solid fa-trash-can mx-3 " onClick={handleDelete}></i>
                        <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>UpdateNote(note)}></i>
                    </div>
                    
                    <p className="card-text">{props.note.description} </p>
                </div>
            </div>

        </div>
    )
}

export default NoteItems
