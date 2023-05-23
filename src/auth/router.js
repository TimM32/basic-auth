'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const usersModel = require('./models/users-model');

router.post('/signup', async (request, response, next) => {
    try {
        let { username, password } = request.body;
        let encryptedPassword = await bcrypt.hash(password, 6);
        let user =await usersModel.create({
            username,
            password: encryptedPassword,
        });
        response.status(200).send(user);

    } catch (error) {
        next('Signup Error Occurred');
    }
});
