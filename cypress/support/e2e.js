// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

import './commands'
import 'cypress-mochawesome-reporter/register';
require('cypress-xpath');
// import './commands'
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from failing the test
//   return false
// })
// Alternatively you can use CommonJS syntax:
// require('./commands')
