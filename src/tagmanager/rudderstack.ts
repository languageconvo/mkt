// note: we did not use their package because:
//  #1 it caused the output js to be huge
//  #2 we'll have to remember to update these packages to keep up with the newest js sdk version
// import { RudderAnalytics } from '@rudderstack/analytics-js';
import data from "../data";
import { Env } from "../types";

function initializeAndPageView(env: Env) {
  let writeKey = data.rudderstack.dev.writeKey;
  let dataplaneUrl = data.rudderstack.dev.dataplaneUrl;
  if (env === Env.prod) {
    writeKey = data.rudderstack.prod.writeKey;
    dataplaneUrl = data.rudderstack.prod.dataplaneUrl;
  }

  console.log('rudderstack initializeAndPageView');


  (function() {
    "use strict";
    // @ts-ignore
    window.RudderSnippetVersion = "3.0.32";
    var identifier = "rudderanalytics";
    // @ts-ignore
    if (!window[identifier]) {
      // @ts-ignore
      window[identifier] = [];
    }
    // @ts-ignore
    var rudderanalytics = window[identifier];
    if (Array.isArray(rudderanalytics)) {
      // @ts-ignore
      if (rudderanalytics.snippetExecuted === true && window.console && console.error) {
        console.error("RudderStack JavaScript SDK snippet included more than once.");
      } else {
        // @ts-ignore
        rudderanalytics.snippetExecuted = true;
        // @ts-ignore
        window.rudderAnalyticsBuildType = "legacy";
        var sdkBaseUrl = "https://cdn.rudderlabs.com/v3";
        var sdkName = "rsa.min.js";
        var scriptLoadingMode = "async";
        var methods = [ "setDefaultInstanceKey", "load", "ready", "page", "track", "identify", "alias", "group", "reset", "setAnonymousId", "startSession", "endSession", "consent" ];
        for (var i = 0; i < methods.length; i++) {
          // @ts-ignore
          var method = methods[i];
          // @ts-ignore
          rudderanalytics[method] = function(methodName) {
            return function() {
              // @ts-ignore
              if (Array.isArray(window[identifier])) {
                rudderanalytics.push([ methodName ].concat(Array.prototype.slice.call(arguments)));
              } else {
                var _methodName;
                // @ts-ignore
                (_methodName = window[identifier][methodName]) === null || _methodName === void 0 || _methodName.apply(window[identifier], arguments);
              }
            };
          }(method);
        }
        try {
          new Function('class Test{field=()=>{};test({prop=[]}={}){return prop?(prop?.property??[...prop]):import("");}}');
          // @ts-ignore
          window.rudderAnalyticsBuildType = "modern";
        } catch (e) {}
        var head = document.head || document.getElementsByTagName("head")[0];
        var body = document.body || document.getElementsByTagName("body")[0];
        // @ts-ignore
        window.rudderAnalyticsAddScript = function(url, extraAttributeKey, extraAttributeVal) {
          var scriptTag = document.createElement("script");
          scriptTag.src = url;
          scriptTag.setAttribute("data-loader", "RS_JS_SDK");
          if (extraAttributeKey && extraAttributeVal) {
            scriptTag.setAttribute(extraAttributeKey, extraAttributeVal);
          }
          if (scriptLoadingMode === "async") {
            scriptTag.async = true;
          } else if (scriptLoadingMode === "defer") {
            scriptTag.defer = true;
          }
          if (head) {
            head.insertBefore(scriptTag, head.firstChild);
          } else {
            body.insertBefore(scriptTag, body.firstChild);
          }
        };
        // @ts-ignore
        window.rudderAnalyticsMount = function() {
          (function() {
            if (typeof globalThis === "undefined") {
              var getGlobal = function getGlobal() {
                if (typeof self !== "undefined") {
                  return self;
                }
                if (typeof window !== "undefined") {
                  return window;
                }
                return null;
              };
              var global = getGlobal();
              if (global) {
                Object.defineProperty(global, "globalThis", {
                  value: global,
                  configurable: true
                });
              }
            }
          })();
            // @ts-ignore
            window.rudderAnalyticsAddScript("".concat(sdkBaseUrl, "/").concat(window.rudderAnalyticsBuildType, "/").concat(sdkName), "data-rsa-write-key", writeKey);
        };
        if (typeof Promise === "undefined" || typeof globalThis === "undefined") {
          // @ts-ignore
          window.rudderAnalyticsAddScript("https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&features=Symbol%2CPromise&callback=rudderAnalyticsMount");
        } else {
          // @ts-ignore
          window.rudderAnalyticsMount();
        }
        var loadOptions = {};
        // @ts-ignore
        rudderanalytics.load(writeKey, dataplaneUrl, loadOptions);
      }
    }
  })();

  // in rudderstack js v3, we have to call page view manually
  // @ts-ignore
  window.rudderanalytics.page();
}

const rudderstack = {
  initAndPageView: initializeAndPageView,
};

export default rudderstack;
