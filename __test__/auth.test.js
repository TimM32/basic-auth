'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelize } = require('../src/auth/models');
const { describe, test } = require('node:test');

const request = super(app);

beforeAll( async () => {
    await sequelize.sync();
});

afterAll(async () => {
    await sequelize.drop();
});

describe('Auth Routes', (() => {
    test('allow for users signup', async() => {
        const response = await request.post('/signup').sen({
            username: 'Bob'
            password: 'joy'
        });

        expect(response.status).toEqual(200);
        expect(response.body.username).toEqual('Bob');
    });
}));
