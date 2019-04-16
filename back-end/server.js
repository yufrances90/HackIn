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

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send("Hello World!"));

app.get('/testingDb', async (req, res) => {

    const users = await utils.getHackathons("name", "==", "AthenaHacks");

    res.send(JSON.stringify(users));
});

app.post('/accounts', async (req, res) => {
    res.send(JSON.stringify(req));
})

app.listen(port, () => console.log(`Listening on port ${port}!`));