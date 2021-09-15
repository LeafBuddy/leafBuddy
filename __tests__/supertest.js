const fs = require('fs');
const path = require('path');
import 'regenerator-runtime/runtime';
const request = require('supertest');
const express = require('express');
const app = express();
const testJsonFile = path.join(__dirname, '...', 'server');

const server = 'http://localhost:4000/plaid/linktoken';

describe('Get Routers integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () =>
        request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200));
    });
  });
  //   describe('/style/style.scss', () => {
  //     describe('GET', () => {
  //       it('css file should respond with text/css content type', () =>
  //         request(app)
  //           .get('/style/style.scss')
  //           .expect('Content-Type', /text\/html/));
  //     });
  //   });

  //   describe('google auth', () => {
  //     describe('GET', () => {
  //       it('should redirect to callback url', () =>
  //         request(app)
  //           .get('/auth/google/callback')
  //           .expect('Content-Type', /text\/html/));
  //     });
  //   });

  //   describe('google auth', () => {
  //     describe('GET', () => {
  //       it('should redirect to callback url', () =>
  //         request(app)
  //           .get('/auth/google/callback')
  //           .expect('Content-Type', /text\/html/));
  //     });
  //   });
});
