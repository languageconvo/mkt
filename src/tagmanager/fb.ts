import data from "../data";
import { Env } from "../types";

function initializeAndPageView(env: Env) {
  let pixelId = data.facebook.dev.pixelId;
  if (env === Env.prod) {
    pixelId = data.facebook.prod.pixelId;
  }

  console.log('fb initializeAndPageView');

  // @ts-ignore
  !function(f,b,e,v,n,t,s)
  // @ts-ignore
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  // @ts-ignore
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  // @ts-ignore
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  // @ts-ignore
  n.queue=[];t=b.createElement(e);t.async=!0;
  // @ts-ignore
  t.src=v;s=b.getElementsByTagName(e)[0];
  // @ts-ignore
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  // @ts-ignore
  fbq('init', pixelId);
  // @ts-ignore
  fbq('track', 'PageView');
}

const fb = {
  initAndPageView: initializeAndPageView,
};

export default fb;
