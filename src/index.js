// our error logger. we break convention regarding importing, and initialize our error logger
// here first so that we ensure any errors that occur during imports are caught
import logErr from './modules/logErr';

// allow jquery to be imported after our error logger and site data
// eslint-disable-next-line import/order
import jQuery from 'jquery';

// make jquery available globally
window.$ = jQuery;
window.jQuery = jQuery;

console.log('hello new world!');

// here we wait for the page to be ready; one reason for doing this is we need the `window.theEnv` value from
// webflow custom js, before we load our own code
$(document).ready(() => {
  // get the env value that we set in webflow interface
  const theEnv = window.theEnv;
  logErr.msg(`in our webpack project - we got this env value: ${theEnv}`);
});
