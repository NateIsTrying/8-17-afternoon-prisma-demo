const express = require('express');

const app = express();

const PORT = 3005;

app.get('/', (req,res) => {
    console.log(req.body);
    res.send('<h1>Hello World</h1> Choo Choo!')
})

app.listen(PORT, (err) => {
    if(!err) {
        console.log(`Server is listening on port ${PORT}`);
    } else {
        console.log("Something went wrong");
    }
});