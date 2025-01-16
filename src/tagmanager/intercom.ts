import Intercom from '@intercom/messenger-js-sdk';
import data from "../data";
import { Env } from "../types";

function initializeAndPageView(env: Env) {
  let appId = data.intercom.dev.appId;
  if (env === Env.prod) {
    appId = data.intercom.prod.appId;
  }

  console.log('intercom initializeAndPageView');

  Intercom({
    app_id: appId,
  });
}

const intercom = {
  initAndPageView: initializeAndPageView,
};

export default intercom;
