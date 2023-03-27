const express = require('express');
const notesRouter  = express.Router();

notesRouter.get('/', (req, res)=>{

    res.send("notes route started");
})

module.exports = notesRouter;


