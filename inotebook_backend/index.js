const connectMongo = require('./db');
const express = require('express')
const authRouter = require('./routes/auth');
const notesRouter = require('./routes/notes')
const cors = require("cors")


connectMongo();

const app = express()
const port = 5000

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/notes', notesRouter);

app.get('/', (req, res) => {
  
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})