const request = require('supertest');
const expect = require('chai').expect;

describe.only('API test', function () {
    it('should call the get request and responds with json', function (done) {
        request('https://reqres.in')
            .get('/api/users/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should call the get request and get list of resurces', function (done) {
        request('https://reqres.in')
            .get('/api/unknown')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                console.log('res=======', response.body);
                if (err) {
                    console.log('error=====', err);
                }
                done();
            });
    });

    it('should call the get request with not found response', function (done) {
        request('https://reqres.in')
            .get('/api/unknown/23')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
    });

    it('should call the post request and responds with json', function (done) {
        let user = {
            "name": "alisa",
            "job": "gane"
        };
        request('https://reqres.in')
            .post('/api/users')
            .send(user)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err, response) => {
                expect(response.body.job).to.equal(user.job);
                expect(response.body.name).to.equal(user.name);
                done();
            });
    });

    it('should call the put request and responds with json', function (done) {
        let user = {
            "name": "alisa",
            "job": "gane"
        };
        request('https://reqres.in')
            .put('/api/users/1')
            .send(user)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, response) => {
                expect(response.body.job).to.equal(user.job);
                expect(response.body.name).to.equal(user.name);
                done();
            });
    });

    it('should call the delete request', function (done) {
        request('https://reqres.in')
            .delete('/api/users/1')
            .set('Accept', 'application/json')
            .expect(204, done);
    });

    it('should call the post request and for login the user', function (done) {
        let user = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        };
        request('https://reqres.in')
            .post('/api/login')
            .send(user)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, response) => {
                console.log('res=======', response.body);
                if (err) {
                    console.log('error=====', err);
                }
                done();
            });
    });


    it('should call the post request and for register the user', function (done) {
        let user = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        };
        request('https://reqres.in')
            .post('/api/register')
            .send(user)
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, response) => {
                console.log('res=======', response.body);
                if (err) {
                    console.log('error=====', err);
                }
                done();
            });
    });

    it('should call the post request and for unsuccessful registration', function (done) {
        let user = {
            "email": "sydney@fife"
        };
        request('https://reqres.in')
            .post('/api/register')
            .send(user)
            .set('Accept', 'application/json')
            .expect(400, done);
    });

    it('should call the post request and for unsuccessful login', function (done) {
        let user = {
            "email": "peter@klaven"
        };
        request('https://reqres.in')
            .post('/api/login')
            .send(user)
            .set('Accept', 'application/json')
            .expect(400, done);
    });

    it('should call the get request and for delayed response', function (done) {
        request('https://reqres.in')
            .get('/api/users?delay=3')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, response) => {
                console.log('res=======', response.body);
                if (err) {
                    console.log('error=====', err);
                }
                done();
            });
    });
});