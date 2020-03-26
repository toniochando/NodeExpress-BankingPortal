/*Require Express

In the new services.js require the express framework and store a reference to it in a const called express. Next, call the express.Router() function and store it in a const called router.
Error

Has the express framework been required in src/routes/services.js?
*/
const express = require('express');

const router = express.Router();

/*
In services.js require data.js and at the same time use object destructing to create two constants called accounts and writeJSON. Note: use relative paths to require the data module. Use '../data' since it is one level up.
*/
const { accounts, writeJSON } = require('../data.js');

/*
In app.js locate the transfer and payment post and get routes, cut and paste these routes to services.js below the require statements. Now in services.js update the routes to be part of the router by replacing app.get with router.get and app.post with router.post.
Error

Were all four routes moved to services.js?
*/
router.get('/transfer', (req, res) =>  res.render('transfer'));
router.post('/transfer', (req, res) => {
    accounts[req.body.from].balance -= req.body.amount;
    accounts[req.body.to].balance += parseInt(req.body.amount, 10);
    writeJSON();
    res.render('transfer', {message: 'Transfer Completed'});
});
router.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}));
router.post('/payment', (req, res) => {
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available += parseInt(req.body.amount);
    writeJSON();
    res.render('payment', {message: 'Payment Successful', account: accounts.credit});
});
/*In services.js export the router using the module.exports syntax.*/
module.exports = router;