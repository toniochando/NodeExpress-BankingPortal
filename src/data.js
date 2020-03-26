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
    /*    In app.js locate the lines in the transfer post route function body that are responsible for writing JSON data to a file. Hint: there are two lines. Copy these lines to the body of the writeJSON function in the data.js file.
    */
    fs.writeFileSync(path.join(__dirname, 'json','accounts.json'), accountsJSON, 'utf8');
}
/*In data.js use module.exports to export an object containing the constants accounts, users, and the writeJSON function.
Error

data.js is not exporting the accounts object.
*/
module.exports = {
    accounts,
    users,
    writeJSON
  };