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
const controllers = require("./controllers");

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send("Hello World!"));

app.get('/testingDb', async (req, res) => {

    const users = await utils.getHackathons("name", "==", "AthenaHacks");

    res.send(JSON.stringify(users));
});

app.post('/accounts', async (req, res) => {

    const newAccount = req.body;

    try {
        
        const response = await controllers.AccountController.saveNewAccount(newAccount);

        res.status(204).send(JSON.stringify(response));
    } catch(error) {
        res.status(500).send(JSON.stringify(error));
    }
});

app.get('/accountByUsrname', async (req, res) => {

    const { usrname } = req.query;

    if (!usrname || usrname.length === 0) {
        res.status(400).send("No usrname is provided");
        return;
    }

    try {

        const response = await controllers.AccountController.getAccountByUsrname(usrname);

        if (response.length === 0) {
            res.status(404).send("No record is found!");
        } else {
            res.status(200).send(JSON.stringify(response[0]));
        }
    } catch(error) {
        res.status(500).send(JSON.stringify(error));
    }
});

app.post('/hackathons', async (req, res) => {

    const newHackathon = req.body;

    try {

        const response = await controllers.HackathonController.saveNewHackathon(newHackathon);

        res.status(204).send(JSON.stringify(response));
    } catch(error) {
        res.status(500).send(JSON.stringify(error));
    }
});

app.get('/hackathons', async (req, res) => {

    try {

        const response = await controllers.HackathonController.getAllHackathons();

        res.status(200).send(JSON.stringify(response));
    } catch(error) {
        res.status(500).send(JSON.stringify(error));
    }
})

app.listen(port, () => console.log(`Listening on port ${port}!`));