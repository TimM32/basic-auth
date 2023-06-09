'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const { sequelize } = require('../src/auth/models');
const basicAuth = require('../src/auth/models/index');
const request = supertest(app);

let user = {
  username: 'Bob',
  password: 'luckydog',
};

beforeAll( async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Auth Routes', (() => {
  test('allow for users signup', async() => {
    const response = await request.post('/signup').send(user);


    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Bob');
  });

  test('allow for user sign-in', async () => {
    const response = await request.post('/sign-in').set('Authorization', 'Basic');

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Testing approved');
  });

  test('/sign-in failed', async () => {
    let request = { headers: { authorization: 'Bad Basic'} };
    let response = { status: jest.fn() };
    let next = jest.fn();
    await basicAuth(request, response, next);

    expect(next).toHaveBeenCalledWith('Login Failed');
  });

}));
