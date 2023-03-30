import React from 'react'



const NoteItems = (props) => {


    return (
        <div className='col-md-3'>
            <div className="card my-3" >

                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text">{props.note.description} Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Eos at explicabo magnam esse deserunt optio velit asperiores doloribus 
                    laboriosam ut fuga, voluptatem quisquam voluptatibus eius, labore minus sit repellendus quidem?</p>

                </div>
            </div>

        </div>
    )
}

export default NoteItems
