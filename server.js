const express = require('express');
const app = express();
app.use(express.json());
const data = [
    {
        "id": 1,
        "name": "neil",
        "age": 22,
    },
    {
        "id": 2,
        "name": "dongs",
        "age": 25,
    }
]

app.get('/api/test', (req, res) => {
    res.send(data);
})

app.post('/api/test', (req, res) => {

    // data.push(req.body);
    // res.status(200).json(data);
    // Determine the new ID
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;

    // Create a new object with the ID and the rest of the payload
    const newEntry = { id: newId, ...req.body };

    // Add the new entry to the data array
    data.push(newEntry);

    // Respond with the updated data array
    res.status(200).json(data);
})

app.listen(3000, ()=>{
})
