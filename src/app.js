/*In app.js require the built-in library fs and store a reference to it in a const called fs. Next, require the built-in library path and store a reference to it in a const called path.
*/
const fs = require('fs');
const path = require('path');

/*In app.js, require the express framework and store a reference to it in a const called express. Next, call the express function and store it in a const called app
*/
const express = require('express');
const app = new express();

/*
In app.js locate the lines that are responsible for reading and parsing JSON from the src/json/accounts.json file. Copy and paste them to the new data.js file below the require statements.
Back In app.js require data.js and at the same time use object destructing to create three constants for accounts, users, and writeJSON.

Remove the lines in app.js that create the accountData, accounts, userData, and users consts.

accounts, users, and the writeJSON function are now brought in by the require statement. Note: use relative paths to require the data module './data'
Error

data.js is not exporting the accounts object.
*/
const { accounts, users, writeJSON } = require('./data.js');

/*Still in app.js, use the set function of your newly created app to configure the directory where our views can be found. Hint: path.join() & __dirname

Using the same set function, set the view engine to ejs. 
*/
app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

/*All of our CSS/JS for the client-side is found in the public directory. We need to point express to public.
*/
app.use(express.static(path.join(__dirname, '/public')));

/*In app.js near your other app.use statement add express middleware to handle POST data. With the use function add the express.urlencoded middleware to app. Make sure to set the extended option to true.
*/
app.use(express.urlencoded({ extended: true }));


/*In app.js above the index route, use the readFileSync function of the built-in fs library to read the contents of the file located at src/json/accounts.json. Note: read the file with the UTF8 encoding.

Declare a const called accountData to store the contents of the file. accountData now contains JSON, use JSON.parse to convert it to a javascript object.

Declare a const called accounts to store this javascript object.
*/
/*const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const accounts = JSON.parse(accountData);
*/


/* In app.js near the index route, use the readFileSync function of the built-in fs library to read the contents of the file located at src/json/users.json. Note: read the file with the UTF8 encoding.

Declare a const called userData to store the contents of the file. userData now contains JSON, use JSON.parse to convert it to a javascript object.

Declare a const called users to store this javascript object.
*/

/*
const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');
const users = JSON.parse(userData);
*/


/*
In app.js create a get route that points at the root URL path '/'. Render the index view and pass an object with a single key value pair, title: 'Index'.
Hint: render is a function on the response object.

app.get('/', (req, res) => res.render('index', { title: 'Index' }));
*/

/*In app.js update the object passed to the existing index route. The title should be Account Summary, and a new key value pair should be added, accounts: accounts.
*/
app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts }));

/*In app.js near the index route, create a get route that points at the /savings URL path. Render the account view and pass an object with the following key value pair:

    account: accounts.savings

Now that you have created the savings account route, create similar routes for the checking and credit accounts in the app.js file.

Move Account Routes

In app.js locate the savings, checking, and credit get routes, cut and paste these routes in accounts.js below the require statements. Now in accounts.js update the routes to be part of the router by replacing app.get with router.get.
*/
/*
app.get('/savings', (req, res) => res.render('account', { account: accounts.savings }));
app.get('/checking', (req, res) => res.render('account', { account: accounts.checking }));
app.get('/credit', (req, res) => res.render('account', { account: accounts.credit }));
*/

/*Near your other routes in app.js create a get route that points to the /transfer URL path. It should render the transfer view
*/
app.get('/transfer', (req, res) =>  res.render('transfer'));

/*
Switch back to app.js and create a post route that points to the /transfer URL path. We will fill in the body of the function for this route in the next few steps.
*/
/*--> services.js
app.post('/transfer', (req, res) => {
*/
    /*Still in app.js and in the function body of the post route we are going to calculate the new balances for the account we are transferring from.
    We have several values that have been entered into the HTML form in transfer.ejs. Upon form submission the request body will contain from, to, and amount. Current account balances are stored in the accounts object.
    As an example to access the current balance for the savings account use accounts["savings"].balance. Using these values, calculate the new balance of the account we are transferring from. Then set the balance to that amount.
    
    accounts[req.body.from].balance -= req.body.amount;
    accounts[req.body.to].balance += parseInt(req.body.amount, 10);
    */

    /*In app.js locate the lines in the transfer post route function body that are responsible for writing JSON data to a file and replace them with a call to the writeJSON() function.
    
    writeJSON();
    */
    

    /*Still in app.js and in the function body of the post route, convert the accounts javascript object to a string using the JSON.stringify function save this string in a variable called accountsJSON.
       
    let accountsJSON = JSON.stringify(accounts, null, 4)
    */

    /*Still in app.js and in the function body of the post route, use the writeFileSync function of the built-in fs library to write the variable accountsJSON to the file located at json/accounts.json.

    Notes:
    If at any point accounts.json gets overwritten and you would like the original back copy the JSON from account_backup.json to account.json
    Specify the absolute file path using path.join & __dirname
    Write the file with the UTF8 encoding.
    
    fs.writeFileSync(path.join(__dirname, 'json','accounts.json'), accountsJSON, 'utf8');
    */
    /*Still in app.js and in the function body of the post route, render the transfer view and pass an object with the following key value pair:
    message: "Transfer Completed"
    */
   /*
    res.render('transfer', {message: 'Transfer Completed'});
});
*/

/*The payment feature of the application is similar to the transfer feature. Add this new feature using this general outline of the steps:

    Near your existing routes in app.js create a get route with a URL path of /payment that renders the payment view and passes in an object with a key-value pair of account: accounts.credit.

    Below the payment get route create a post route with a URL path of /payment and an empty function.

    In the body of the payment post route function:
        Subtract req.body.amount from accounts.credit.balance and save it back to accounts.credit.balance
        Add req.body.amount to accounts.credit.available and save it back to accounts.credit.available remember to use parseInt() on both values when adding.
        Convert the accounts javascript object to a JSON string and save it to a variable called accountsJSON
        Write accountsJSON to a file. Note: write the file with the UTF8 encoding.
        Render the payment view and pass an object with the following key value pairs, { message: "Payment Successful", account: accounts.credit }
*/
app.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}));
app.post('/payment', (req, res) => {
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available += parseInt(req.body.amount);

    /*In app.js locate the lines in the payment post route function body that are responsible for writing JSON data to a file and replace them with a call to the writeJSON() function.
    */
   writeJSON();

   /* 
   let accountsJSON = JSON.stringify(accounts, null, 4)
    fs.writeFileSync(path.join(__dirname, 'json','accounts.json'), accountsJSON, 'utf8');
    */
    res.render('payment', {message: 'Payment Successful', account: accounts.credit});
});

/*In app.js below the account get routes create a get route that points at the /profile URL path. Render the profile view and pass an object with the following key value pair:

    user: users[0]
*/
app.get('/profile', (req, res) =>  res.render('profile', { user: users[0] }));

/*In app.js use the listen function to create a server that listens on port 3000 and then prints the message PS Project Running on port 3000! to the console after the server is created.
*/
app.listen(3000, () => { console.log('PS Project Running on port 3000!') });