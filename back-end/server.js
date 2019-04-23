const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ 
    extended: true 
})); // support encoded bodies

const controllers = require("./controllers");

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send("Hello World!"));

app.post('/accounts', async (req, res) => {

    const newAccount = req.body;

    try {
        
        const response = await controllers.AccountController.saveNewAccount(newAccount);

        res.status(204).send(JSON.stringify(response));
    } catch(err) {
        
        const error = {
            message: err.message,
            name: err.name
        };

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
    } catch(err) {
        
        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.post('/hackathons', async (req, res) => {

    const newHackathon = req.body;

    try {

        const response = await controllers.HackathonController.saveNewHackathon(newHackathon);

        res.status(204).send(JSON.stringify(response));
    } catch(err) {
        
        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.get('/hackathons', async (req, res) => {

    try {

        const response = await controllers.HackathonController.getAllHackathons();

        res.status(200).send(JSON.stringify(response));
    } catch(err) {
        
        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.get("/hackathonById/:hackathonId", async (req, res) => {

    const { hackathonId } = req.params;

    try {

        const response = await controllers.HackathonController.getHackathonById(hackathonId);

        res.status(200).send(JSON.stringify(response));
    } catch(err) {
        
        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
});

app.get("/coordinatesByAddress", async (req, res) => {

    const { address } = req.query;

    try {

        const response = await controllers.UtilController.getCoordinatesByAddress(address);

        res.status(200).send(JSON.stringify(response));
    } catch(err) {

        const error = {
            message: err.message,
            name: err.name
        };

        res.status(500).send(JSON.stringify(error));
    }
})

app.listen(port, () => console.log(`Listening on port ${port}!`));