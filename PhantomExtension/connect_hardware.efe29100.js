(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=r.parcelRequire1d24;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},r.parcelRequire1d24=i),i.register("6lblj",(function(e,t){e.exports=Promise.all([i("22S8I")(new URL(i("5V6iE").resolve("9Dpy0"),import.meta.url).toString()),import("./"+i("5V6iE").resolve("dvOvK")),import("./"+i("5V6iE").resolve("azrTG")),import("./"+i("5V6iE").resolve("7Yz5u"))]).then((()=>i("7CSQK")))})),i.register("22S8I",(function(e,t){var r=i("bDExm");e.exports=r((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("link");if([].concat(n).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var a=document.createElement("link");a.rel="stylesheet",a.href=e,a.onerror=function(e){a.onerror=a.onload=null,a.remove(),r(e)},a.onload=function(){a.onerror=a.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(a)}}))}))})),i.register("bDExm",(function(e,t){var r={},n={},a={};e.exports=function(e,t){return function(i){var o=function(e){switch(e){case"preload":return n;case"prefetch":return a;default:return r}}(t);return o[i]?o[i]:o[i]=e.apply(null,arguments).catch((function(e){throw delete o[i],e}))}}})),i.register("tv9Be",(function(t,r){e(t.exports,"useInfiniteQuery",(function(){return l}));var n=i("bUcw9"),a=i("23gDC"),o=i("fMZKM");function l(e,t,r){const i=(0,a.parseQueryArgs)(e,t,r);return(0,o.useBaseQuery)(i,n.InfiniteQueryObserver)}})),i.register("bUcw9",(function(t,r){e(t.exports,"InfiniteQueryObserver",(function(){return o}));var n=i("f4Jbh"),a=i("8dVOS");class o extends n.QueryObserver{bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,a.infiniteQueryBehavior)()},t)}getOptimisticResult(e){return e.behavior=(0,a.infiniteQueryBehavior)(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"forward",pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"backward",pageParam:e}}})}createResult(e,t){var r,n,i,o,l,s;const{state:c}=e;return{...super.createResult(e,t),fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,a.hasNextPage)(t,null==(r=c.data)?void 0:r.pages),hasPreviousPage:(0,a.hasPreviousPage)(t,null==(n=c.data)?void 0:n.pages),isFetchingNextPage:"fetching"===c.fetchStatus&&"forward"===(null==(i=c.fetchMeta)||null==(o=i.fetchMore)?void 0:o.direction),isFetchingPreviousPage:"fetching"===c.fetchStatus&&"backward"===(null==(l=c.fetchMeta)||null==(s=l.fetchMore)?void 0:s.direction)}}constructor(e,t){super(e,t)}}})),i.register("8dVOS",(function(t,r){function n(){return{onFetch:e=>{e.fetchFn=()=>{var t,r,n,o,l,s;const c=null==(t=e.fetchOptions)||null==(r=t.meta)?void 0:r.refetchPage,u=null==(n=e.fetchOptions)||null==(o=n.meta)?void 0:o.fetchMore,d=null==u?void 0:u.pageParam,f="forward"===(null==u?void 0:u.direction),g="backward"===(null==u?void 0:u.direction),p=(null==(l=e.state.data)?void 0:l.pages)||[],h=(null==(s=e.state.data)?void 0:s.pageParams)||[];let m=h,v=!1;const P=e.options.queryFn||(()=>Promise.reject("Missing queryFn")),b=(e,t,r,n)=>(m=n?[t,...m]:[...m,t],n?[r,...e]:[...e,r]),y=(t,r,n,a)=>{if(v)return Promise.reject("Cancelled");if(void 0===n&&!r&&t.length)return Promise.resolve(t);const i={queryKey:e.queryKey,pageParam:n,meta:e.meta};var o;o=i,Object.defineProperty(o,"signal",{enumerable:!0,get:()=>{var t,r;return null!=(t=e.signal)&&t.aborted?v=!0:null==(r=e.signal)||r.addEventListener("abort",(()=>{v=!0})),e.signal}});const l=P(i);return Promise.resolve(l).then((e=>b(t,n,e,a)))};let x;if(p.length)if(f){const t=void 0!==d,r=t?d:a(e.options,p);x=y(p,t,r)}else if(g){const t=void 0!==d,r=t?d:i(e.options,p);x=y(p,t,r,!0)}else{m=[];const t=void 0===e.options.getNextPageParam;x=!c||!p[0]||c(p[0],0,p)?y([],t,h[0]):Promise.resolve(b([],h[0],p[0]));for(let r=1;r<p.length;r++)x=x.then((n=>{if(!c||!p[r]||c(p[r],r,p)){const i=t?h[r]:a(e.options,n);return y(n,t,i)}return Promise.resolve(b(n,h[r],p[r]))}))}else x=y([]);return x.then((e=>({pages:e,pageParams:m})))}}}}function a(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}function i(e,t){return null==e.getPreviousPageParam?void 0:e.getPreviousPageParam(t[0],t)}function o(e,t){if(e.getNextPageParam&&Array.isArray(t)){const r=a(e,t);return null!=r&&!1!==r}}function l(e,t){if(e.getPreviousPageParam&&Array.isArray(t)){const r=i(e,t);return null!=r&&!1!==r}}e(t.exports,"infiniteQueryBehavior",(function(){return n})),e(t.exports,"hasNextPage",(function(){return o})),e(t.exports,"hasPreviousPage",(function(){return l}))})),i("5V6iE").register(JSON.parse('{"8iUX0":"connect_hardware.efe29100.js","7Yz5u":"ConnectHardwareMultichainFlow.f0a3e674.js","azrTG":"staking.037c2788.js","dvOvK":"ConnectHardwareMultichainFlow.a3a7a798.js","9Dpy0":"popup.5cbd182e.css","2Drrw":"phishing.b0d2a409.js","dIWgK":"metaplex.04cfb981.js","kJjdp":"metaplex.8ad40d27.js","7jMPF":"collectibles.4fd9b29c.js","amlOx":"swapper.c615a942.js","6exud":"connect_hardware.a68df81f.js"}'));var o=i("lDSNw"),l=i("lz7nT"),s=i("cZIbv");i("1KK14");var c=i("4yY1D"),u=i("dU2RF"),d=i("kBpKb"),f=i("lMzyG"),g=(o=i("lDSNw"),i("NQvFB")),p=(s=i("cZIbv"),i("aanFI")),h=i("kn91D");const m=s.default.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`,v=s.default.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 250ms;
  transition-property: color;
  color: #aaa;
  svg {
    fill: #222222;
    color: inherit;
    * {
      color: inherit;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`,P=s.default.a`
  display: flex;
  color: #aaa;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 250ms;
  transition-property: color;
  svg {
    fill: #222222;
    color: inherit;
    * {
      color: inherit;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;var b=i("5Doro"),y=i("a8kcR"),x=i("h5kyv"),w=i("8DCD7"),E=i("bLLpR"),O=i("bcqzL");const N=t(o).lazy((()=>i("6lblj")));c.fileLogger.init({provider:E.ClientFileLoggerProvider}),c.telemetry.init(),c.telemetry.setUser({id:x.analytics.getDeviceId()}),(0,w.initializeFeatureFlags)();const M=document.getElementById("root");(0,u.createRoot)(M).render(t(o).createElement(l.BrowserRouter,null,t(o).createElement(s.ThemeProvider,{theme:y.theme},t(o).createElement(b.QueryProvider,null,t(o).createElement(O.ThemedGlobalStyle,{backgroundColor:"#E2DFFE"}),t(o).createElement((()=>{const{t:e}=(0,f.useTranslation)();return t(o).createElement(m,null,t(o).createElement(P,{href:g.PHANTOM_WEBSITE_URL,target:"_blank",rel:"noopener noreferrer"},t(o).createElement(p.IconPhantomLogo,{width:32})),t(o).createElement(v,{"data-testid":"full-page-header-support-link",href:g.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},t(o).createElement(p.IconHelp,null),t(o).createElement(h.Text,{color:"#222222",size:16,weight:500,margin:"0 0 0 8px"},e("fullPageHeaderHelp"))))}),null),t(o).createElement(d.OnboardingAndConnectHardwareErrorBoundary,null,t(o).createElement(o.Suspense,{fallback:null},t(o).createElement(N,null))))))),x.analytics.capture("connectHardwareOpen");
//# sourceMappingURL=connect_hardware.efe29100.js.map
define=__define;})(window.define);