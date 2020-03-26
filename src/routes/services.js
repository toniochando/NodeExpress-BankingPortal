/*Require Express

In the new services.js require the express framework and store a reference to it in a const called express. Next, call the express.Router() function and store it in a const called router.
Error

Has the express framework been required in src/routes/services.js?
*/
const express = require('express');

const router = express.Router();

const { accounts, writeJSON } = require('../data.js');