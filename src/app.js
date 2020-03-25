/*In app.js require the built-in library fs and store a reference to it in a const called fs. Next, require the built-in library path and store a reference to it in a const called path.
*/
const fs = require('fs');
const path = require('path');

/*In app.js, require the express framework and store a reference to it in a const called express. Next, call the express function and store it in a const called app
*/
const express = require('express');
const app = new express();

/*Still in app.js, use the set function of your newly created app to configure the directory where our views can be found. Hint: path.join() & __dirname

Using the same set function, set the view engine to ejs. 
*/
app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

/*All of our CSS/JS for the client-side is found in the public directory. We need to point express to public.
*/
app.use(express.static(path.join(__dirname, '/public')));

/*In app.js above the index route, use the readFileSync function of the built-in fs library to read the contents of the file located at src/json/accounts.json. Note: read the file with the UTF8 encoding.

Declare a const called accountData to store the contents of the file. accountData now contains JSON, use JSON.parse to convert it to a javascript object.

Declare a const called accounts to store this javascript object.
*/
const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const accounts = JSON.parse(accountData);

/* In app.js near the index route, use the readFileSync function of the built-in fs library to read the contents of the file located at src/json/users.json. Note: read the file with the UTF8 encoding.

Declare a const called userData to store the contents of the file. userData now contains JSON, use JSON.parse to convert it to a javascript object.

Declare a const called users to store this javascript object.
*/
const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');
const users = JSON.parse(userData);

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
*/
app.get('/savings', (req, res) => res.render('account', { account: accounts.savings }));
app.get('/checking', (req, res) => res.render('account', { account: accounts.checking }));
app.get('/credit', (req, res) => res.render('account', { account: accounts.credit }));

/*In app.js below the account get routes create a get route that points at the /profile URL path. Render the profile view and pass an object with the following key value pair:

    user: users[0]
*/
app.get('/profile', (req, res) =>  res.render('profile', { user: users[0] }));

/*In app.js use the listen function to create a server that listens on port 3000 and then prints the message PS Project Running on port 3000! to the console after the server is created.
*/
app.listen(3000, () => { console.log('PS Project Running on port 3000!') });