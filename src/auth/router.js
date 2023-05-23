'use strict';

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Users } = require('./models');
const base64 = require('base-64');
const basicAuth = require('./middleware/')

router.post('/signup', async (request, response, next) => {

    app.post('/signup', async (req, res) => {

        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const record = await Users.create(req.body);
            res.status(200).json(record);
        } catch (e) { res.status(403).send('Error Creating User'); }
    });
},


  app.post('/signin', async (req, res) => {



    let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'am9objpmb28=']
    let encodedString = basicHeaderParts.pop();  // am9objpmb28=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':'); // username, password


    try {
        const user = await Users.findOne({ where: { username: username } });
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
            req.user = user;
            next();
            res.status(200).json(user);
        }
        else {
            throw new Error('Invalid User');
        }
    } catch (error) { next('Invalid Login. message: ', error.message); }

}),

module.exports = router;
