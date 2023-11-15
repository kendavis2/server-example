const express = require('express')
const cors = require('cors')
const database = require('./database')

const db = database.db();
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome.");
})

app.get('/users', (req, res) => {
    res.send(db.users.list());
})

// http://localhost:3000/users/mark.taylor@gmail.com
app.get('/users/user/:username', (req, res) => {
    res.send(db.users.find(req.params.username));
})

app.put('/users/user', (req, res) => {
    db.users.upsert(JSON.parse(req.body));
})

app.delete('/users/user/:username', (req, res) => {
    db.users.delete(req.params.username);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})