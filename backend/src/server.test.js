const app = require('./app');
const mongoose = require('mongoose');
const supertest = require('supertest');
const config = require('config');

describe('REST API integration tests', () => {
    beforeEach(done => {
        const { host, user, pass } = config.get('database');
        mongoose.connect(`mongodb+srv://${host}`, {
            user,
            pass,
        }).then(conn => {
            console.log('Connection success!');
            done();
        })
        .catch(err => {
            throw new Error(err.message);
        });
    });

    afterEach( done => {
        mongoose.connection.close( () => done() );
    });

    test('GET /products', done => {
       supertest(app).get('/products').expect(200)
        .then(response => {
            expect(Array.isArray(response.body)).toBeTruthy();
            // expect(response.body.length).toEqual(insertData.length);

            // // Check data
            // response.body.forEach((person, idx) => {
            // expect(person.firstName).toBe(insertData[idx].firstName);
            // expect(person.lastName).toBe(insertData[idx].lastName);
            // expect(person.email).toBe(insertData[idx].email);
            done();
        });
    });

    test('GET /categories', done => {
        supertest(app).get('/categories').expect(200)
         .then(response => {
             expect(Array.isArray(response.body)).toBeTruthy();
             done();
         });
     });

     test('GET /users', done => {
        supertest(app).get('/users').expect(200)
         .then(response => {
             expect(Array.isArray(response.body)).toBeTruthy();
             done();
         });
     });

     test('POST /login without body', done => {
        supertest(app).post('/login').expect(401)
        .then(response => {
            done();
        })
     });

     test('POST /login with existing user in the body', done => {
        supertest(app).post('/login')
        .send({email:'test@test.hu', password:'test789'}) // x-www-form-urlencoded upload
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
            done();
        })
     });

     test('GET /orders', done => {
        supertest(app).get('/orders').expect(200)
         .then(response => {
             expect(Array.isArray(response.body)).toBeTruthy();
             done();
         });
     });

     test('GET /addresses', done => {
        supertest(app).get('/addresses').expect(200)
         .then(response => {
             expect(Array.isArray(response.body)).toBeTruthy();
             done();
         });
     });
});
