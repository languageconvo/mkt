import { Env } from "../types";
import fb from "./fb";
import intercom from "./intercom";
import rudderstack from "./rudderstack";
import googleanalytics from "./googleanalytics";
import logErr from "../modules/logErr";

function initializeAndPageView(env: Env) {
  console.log('initializeAndPageView');
  try {
    fb.initAndPageView(env);
  } catch (e){ 
    logErr.err(e);
  }
  try {
    intercom.initAndPageView(env);
  } catch (e){ 
    logErr.err(e);
  }
  try {
    rudderstack.initAndPageView(env);
  } catch (e){ 
    logErr.err(e);
  }
  try {
    googleanalytics.initAndPageView(env);
  } catch (e){ 
    logErr.err(e);
  }
}

const tagManager = {
  initAndPageView: initializeAndPageView,
};
export default tagManager;