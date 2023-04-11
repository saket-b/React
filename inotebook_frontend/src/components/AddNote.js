import React, {useContext, useState} from 'react'
import Alert from './Alert';
import noteContext from '../context/Notes/noteContext';
import alertContext from '../context/Notes/alertContext';
const AddNote = () => {

    const context = useContext(noteContext)
    const { addNote} = context;
    const alertcontext = useContext(alertContext);
    const { handleAlert} = alertcontext;

    const [note, setNotes] = useState({"title":"", "description":"", "tag":"default"});

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(note);
        if( !note.title || !note.description || !note.tag)
            {
                //console.log("inside if ");
                handleAlert("please enter Detail", "warning");
            //    setTimeout(()=>{
//               <Alert />

            //    },1000)
               return;
            }
        addNote(note.title, note.description, note.tag);
        handleAlert("Note added successfully", "success");
        setNotes({"title":"", "description":"", "tag":"default"});
       
         document.getElementById("myForm").reset();
    }
    const handleOnchange = (e) =>{
        // TODO
        // console.log({...note})
        setNotes({...note, [e.target.name]: e.target.value});   

    }
    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form className='my-3' id = "myForm">
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control" id="title" name = "title" minLength={5} required aria-describedby="emailHelp" 
                        onChange={handleOnchange} />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input type="text" className="form-control" id="description" name = "description" minLength={5} required  onChange={handleOnchange}/>
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputPassword1">Tag</label>
                        <input type="text" className="form-control" id="tag" name = "tag" onChange={handleOnchange}/>
                    </div>
                    
                    <button  disabled= {note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
                </form>
            </div>
            <div className="container my-3"></div>
        </div>
    )
}

export default AddNote
