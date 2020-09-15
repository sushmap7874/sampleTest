const request = require('supertest');
const nock = require('nock');

describe('API test with mocked backend', function () {
    it('should call the get request and responds with json', function (done) {

        const res = {
            data: {
                id: 2,
                email: 'janet.weaver@reqres.in',
                first_name: 'Janet',
                last_name: 'Weaver',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
            },
            ad: {
                company: 'StatusCode Weekly',
                url: 'http://statuscode.org/',
                text: 'A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things.'
            }
        }
        nock('https://reqres.in')
            .get('/api/users/2')
            .reply(200, res);
        done();
    });

    it('should call the post request and responds with json', function (done) {
        let user = {
            "name": "alisa",
            "job": "gane"
        };

        const res = {
            "name": "alisa",
            "job": "gane",
            "id": 9,
            "createdAt": "2020-09-11T11:50:18.309Z"
        }
        nock('https://reqres.in')
            .post('/api/users', user)
            .reply(201, res);
        done();
    });
});