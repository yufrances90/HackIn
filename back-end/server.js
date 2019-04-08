const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ 
    extended: true 
})); // support encoded bodies

const utils = require("./utils");

const port = "8000";

app.get('/', (req, res) => res.send("Hello World!"));

app.get('/testingDb', (req, res) => {

    utils.testFirebaseDB();

    res.send("Testing Firebase DB...");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));