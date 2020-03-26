/*In data.js require the built-in library fs and store a reference to it in a const called fs. Next, require the built-in library path and store a reference to it in a const called path.
*/

const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const accounts = JSON.parse(accountData);
