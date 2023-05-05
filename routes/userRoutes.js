const express = require('express');
const jsonfile = require('jsonfile');
const bodyParser = require('body-parser');

const DB_USERS = './DB/users.json';

const router = express.Router();
router.use(bodyParser.json())

router.get("/users", (req, res) => {
    console.log("Fetching users...");

    jsonfile.readFile('./DB/users.json', function (err, content) {
        if (err) {
            console.error(err);
            res.status(500).send("Error reading file");
            return;
        }
        res.send(content);
    });
});

router.post('/users/new', (req, res) => {
    let {reqemail, requsername} = req.body;

    console.log(reqemail)

    jsonfile.readFile(DB_USERS, function (err, content) {
        content.push({reqemail, requsername});

        jsonfile.writeFile('./DB/users.json', content, function (err) {
            if (err) {
                console.log(err);
                res.status(500).send("Error writing file");
                return;
            }
            console.log(`Added ${reqemail} & ${requsername} to ${DB_USERS}.`);
            res.sendStatus(200);
        });
    })
})

router.delete('/users/destroy', (req, res) => {
    let reqemail = req.body.email;
    jsonfile.readFile(DB_USERS, function (err, content) {
        for (let i = content.length - 1; i >= 0; i--) {
            if (content[i].email === reqemail) {
                console.log(`Deleting ${content[i].email} from ${DB_USERS}`);
                content.pop();
            }
        }
        jsonfile.writeFile(DB_USERS, content, function (err) {
            console.log(err);
        });
        res.sendStatus(200);
    });
});

router.put('/user', (req, res) => {
    let user,
        requsername = req.body.username,
        reqemail = req.query.email;

    jsonfile.readFile(DB_USERS, function (err, content) {
        for (let i = content.length - 1; i >= 0; i--) {
            if (content[i].email === reqemail) {
                console.log(`Updated username ${reqemail}. Their username is now ${requsername}. Gratz!`);

                user = content[i];
                user.username = requsername;
            }
        }
        jsonfile.writeFile(DB_USERS, content, function(err) {
            if (err) {

            console.log(err);
            }
        });
    res.sendStatus(200);
    });
})

router.get('/user', (req, res) => {
    let user;
    let reqemail = req.query.email;

    jsonfile.readFile(DB_USERS, function(err, content) {
        if (err) {
            console.log(err);
        }
        for (let i = content.length - 1; i >= 0; i--) {
            if (content[i].email === reqemail) {
                user = content[i];
                console.log(`User ${content[i].username} found!`);
            }
        }
        res.sendStatus(200);
    });
});

module.exports = router;
