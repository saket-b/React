const express = require('express');
const notesRouter = express.Router();
const fetchUser = require("../middleware/fetchuser");
const { body, validationResult } = require('express-validator')
const notesModel = require("../models/Notes")
//Route 1: /api/notes/getAllNotes , log in required
// for particular user.id how many notes available
notesRouter.get('/getAllNotes', fetchUser, async (req, res) => {
  try {
    // give the allnote with the help of user.id(which is come from fetUser middleware function)

    const AllNotes = await notesModel.find({ user: req.user });
   // console.log("Notes =", AllNotes);
    res.json({ "allnotes": AllNotes });

  } catch (error) {
    res.json({ "Message": error.message });
  }

})


//Route 2: /api/notes/addNote , log in required
// In this Route user add new note 
// user provide title, description, tag in body
notesRouter.post('/addNote', fetchUser, [
  body('title', "Enter valid title").isLength({ min: 3 }),
  // password must be at least 5 chars long
  body('description', "Enter valid description").isLength({ min: 3 }),
], async (req, res) => {

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // console.log("hello");
    const { title, description, tag } = req.body;

    let note = new notesModel({
      title, description, tag,
      user: req.user
    });
    //console.log("hello2 = ", req.user);
    const noteCreated = await note.save();
    res.json({ "addnote": noteCreated });

  } catch (error) {

    res.status(401).json({ "error": error.message });
  }

})

//Route 3: /api/notes/addNote , log in required for updating News
// This route for updating note for particular id
// user provide body for updating
notesRouter.patch("/updateNote/:id", fetchUser, async (req, res) => {

  try {
    const { title, description, tag } = req.body;
    // here this is for create new note
    const New_note = {};
    if (title) { New_note.title = title };
    if (description) { New_note.description = description };
    if (tag) { New_note.tag = tag };
    let Note = await notesModel.findById(req.params.id);
    

    if (Note.user.toString() !== req.user) {
      return res.status(401).json({ "Message": "User Not Found" })
    }

    Note = await notesModel.findByIdAndUpdate(req.params.id, New_note, {new : true});
    await Note.save();
    res.json({ "updated": Note });

  } catch (error) {

    res.status(500).json({ "message": error.message });
  }

})


//Route 4: /api/notes/deleteNote , log in required for updating News

notesRouter.delete("/deleteNote/:id", fetchUser, async (req, res) => {

  try {
   
    let Note = await notesModel.findById(req.params.id);

    if (Note.user.toString() !== req.user) {
      return res.status(401).json({ "Message": "User Not Found" })
    }

    Note = await notesModel.findByIdAndDelete(req.params.id)
    res.json({ "deleted": Note });

  } catch (error) {

    res.status(500).json({ "Error": error.message });
  }

})


module.exports = notesRouter;


