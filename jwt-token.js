'use strict';

const axios = require('axios');
const _ = require('lodash');

const url = 'https://dev-8410-37l.us.auth0.com/oauth/token';
const data = '{"client_id":"Qx4j4ZhdpQoS7rpNTzOe1RQFzuiuJnuH","client_secret":"A4UNDp0jiumSbKp9YsM-OFPRvI7xatJgfk025-929ssTzA6kDI3WzmA5MWsrDM4Z","audience":"https://dev-8410-37l.us.auth0.com/api/v2/","grant_type":"client_credentials"}';
const headers = { 'content-type': 'application/json' };

global.token = {};

async function buildToken() {
    try {
        global.token = await axios.post(url, data, {
            headers: headers
        });
        return global.token;
      } catch (error) {
        throw new Error(error);
      }

}

module.exports = {
    getToken: async()  => {
        if(_.isEmpty(global.token)) {
            global.token = await buildToken();
            return global.token;
        } else {
            return global.token;
        }
    }
}