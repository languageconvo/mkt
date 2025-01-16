import tagManager from './tagmanager/tagmanager';
// our error logger. we break convention regarding importing, and initialize our error logger
// here first so that we ensure any errors that occur during imports are caught
import logErr from './modules/logErr';
import { Env } from './types';

// TODO: probably should NOT be waiting for content to load, to do the loading of the tagmanager scripts, but
//  we would want it for tag events?
// ensure the document has fully loaded before we run our js code
// @ts-ignore
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
    return;
  }
  document.addEventListener('DOMContentLoaded', fn);
}

ready(function(){
  // determine if we're in dev or prod
  let theEnv: Env = Env.prod;
  if(window.location.href.indexOf('webflow') > -1) {
    theEnv = Env.dev;
  }

  // if we detect that we're in prod, ensure the url contains our actual url name! otherwise log a major
  // error
  if (theEnv === Env.prod) {
    if(window.location.href.indexOf('farii.com') === -1 && window.location.href.indexOf('languageconvo.com') === -1) {
      logErr.msg('MAJOR ERROR: code detected were in prod, but URL does not contain farri.com');
    }
  }

  console.log('the env is', theEnv);

  tagManager.initAndPageView(theEnv);
});
