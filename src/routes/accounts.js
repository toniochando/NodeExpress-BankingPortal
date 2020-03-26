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

/*
In app.js locate the savings, checking, and credit get routes, cut and paste these routes in accounts.js below the require statements. Now in accounts.js update the routes to be part of the router by replacing app.get with router.get.
*/
router.get('/savings', (req, res) =>  res.render('account', { account: accounts.savings }));
router.get('/checking', (req, res) => res.render('account', { account: accounts.checking }));
router.get('/credit', (req, res) => res.render('account', { account: accounts.credit }));

/*
Export the Router

In accounts.js export the router using the module.exports syntax.
Error

src/routes/accounts.js is not exporting the router function.
*/
module.exports = router;