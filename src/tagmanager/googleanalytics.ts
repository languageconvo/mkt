import { Env } from "../types";

function initializeAndPageView(env: Env) {
  console.log('googleanalytics initializeAndPageView');

  // currently, we're only loading google analytics in production
  if (env === Env.prod) {
    // load the js file
    // @ts-ignore
    (function(d, script) {
      // @ts-ignore
      script = d.createElement('script');
      // @ts-ignore
      script.type = 'text/javascript';
      // @ts-ignore
      script.async = true;
      // @ts-ignore
      script.onload = function(){
      // remote script has loaded
      };
      // @ts-ignore
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-W8Z0HSVYZS';
      // @ts-ignore
      d.getElementsByTagName('head')[0].appendChild(script);
    }(document));

    // pageview
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    function gtag(){dataLayer.push(arguments);}
    // @ts-ignore
    gtag('js', new Date());
    // @ts-ignore
    gtag('config', 'G-W8Z0HSVYZS');
  }
}

const googleanalytics = {
  initAndPageView: initializeAndPageView,
};

export default googleanalytics;
