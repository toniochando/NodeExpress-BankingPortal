/*In the new accounts.js require the express framework and store a reference to it in a const called express. Next, call the express.Router() function and store it in a const called router.
Error
Has the express framework been required in src/routes/accounts.js?
*/
const express = require('express');
const router = express.Router();

/*In accounts.js require data.js and at the same time use object destructuring to create one constant called accounts. Note: use relative paths to require the data module. Use '../data' since it is one level up.
Error

Has data.js been required and the accounts const been created in src/routes/accounts.js?
*/
const { accounts } = require('../data.js');