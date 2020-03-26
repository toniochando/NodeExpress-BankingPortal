/*In data.js require the built-in library fs and store a reference to it in a const called fs. Next, require the built-in library path and store a reference to it in a const called path.
*/

const fs = require('fs');
const path = require('path');

/*In app.js locate the lines that are responsible for reading and parsing JSON from the src/json/accounts.json file. Copy and paste them to the new data.js file below the require statements.
*/
const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const accounts = JSON.parse(accountData);

/*In app.js locate the lines that are responsible for reading and parsing JSON from the src/json/users.json file. Copy and paste them to the new data.js file below the accounts const.
*/
const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');
const users = JSON.parse(userData)

/*
In data.js below the account and user data lines create a function called writeJSON. Hint: It is best to use ES6 arrow style function (=>).
Error

data.js does not contain a function called writeJSON.
*/
const writeJSON = () => {
    let accountsJSON = JSON.stringify(accounts, null, 4)
    fs.writeFileSync(path.join(__dirname, 'json','accounts.json'), accountsJSON, 'utf8');
}
