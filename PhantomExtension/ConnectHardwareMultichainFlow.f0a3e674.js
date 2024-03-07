(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("7CSQK",(function(r,a){var o;o=r.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",(function(){return f}));var c=n("7dqns"),i=n("c1thM"),s=n("lDSNw"),l=n("LqQFk"),d=n("1zoRR"),u=n("03gS4"),p=n("6rQTd"),m=n("cOTPM"),g=n("l7cFC");var f=()=>{var t;const{hardwareStepStack:n,pushStep:r,popStep:a,currentStep:o}=(0,m.useHardwareOnboardingStore)(),f=(0,l.default)(n,((e,t)=>(null==e?void 0:e.length)===t.length)),h=(0,s.useCallback)((()=>{var e,t,n,r,c;(null===(e=o())||void 0===e?void 0:e.props.preventBack)||((null===(t=o())||void 0===t?void 0:t.props.onBackCallback)&&(null===(c=null===(n=o())||void 0===n?void 0:(r=n.props).onBackCallback)||void 0===c||c.call(r)),a())}),[o,a]);(0,s.useEffect)((()=>{r(e(s).createElement(p.ConnectHardwareMultichain,null))}),[r]);const y=n.length>(null!=f?f:[]).length,v=0===(null==f?void 0:f.length),w={initial:{x:v?0:y?150:-150,opacity:v?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(s).createElement(d.ConnectHardwareContainer,null,e(s).createElement(u.StepHeader,{totalSteps:g.TOTAL_CONNECT_HARDWARE_STEPS,onBackClick:h,showBackButton:!(null===(t=o())||void 0===t?void 0:t.props.preventBack),currentStepIndex:n.length-1}),e(s).createElement(c.AnimatePresence,{mode:"wait"},e(s).createElement(i.motion.div,Object.assign({style:{display:"flex",flexGrow:1},key:`${n.length}_${null==f?void 0:f.length}`},w),o())))}})),n.register("1zoRR",(function(e,r){t(e.exports,"ConnectHardwareContainer",(function(){return a}));const a=n("cZIbv").default.main`
  width: 400px;
  min-height: 450px;
  background-color: #222222;
  border: 1px solid #323232;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`})),n.register("03gS4",(function(r,a){t(r.exports,"StepHeader",(function(){return f}));var o=n("4y59b"),c=n("lDSNw"),i=n("cZIbv"),s=n("gR1av"),l=n("miiws"),d=n("aanFI"),u=n("6l2nq");const p=(0,i.default)(u.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
`,m=i.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,g=i.default.div`
  width: 24px;
  height: 24px;
`,f=({onBackClick:t,totalSteps:n,currentStepIndex:r,isHidden:a,showBackButtonOnFirstStep:i,showBackButton:u=!0})=>{const f=u&&(i||0!==r);return e(c).createElement(p,{opacity:a?0:1},f?e(c).createElement(s.ChevronCircle,{right:1,onClick:t},e(c).createElement(d.IconChevronLeft,null)):e(c).createElement(g,null),e(c).createElement(m,null,(0,o.range)(n).map((t=>{const n=t<=r?"#AB9FF2":"#333";return e(c).createElement(l.Circle,{key:t,diameter:12,color:n})}))),e(c).createElement(g,null))}})),n.register("gR1av",(function(e,r){t(e.exports,"ChevronCircle",(function(){return c}));var a=n("cZIbv"),o=n("miiws");const c=(0,a.default)(o.Circle)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${e=>e.$isExpanded?"#000":"#333"} !important;
  :hover {
    background-color: #444444;
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${e=>e.$isExpanded?"white":"#666666"};
    transition: fill 200ms ease;
    position: relative;
    ${e=>e.top?`top: ${e.top}px;`:""}
    ${e=>e.right?`right: ${e.right}px;`:""}
  }
`})),n.register("6rQTd",(function(r,a){t(r.exports,"ConnectHardwareMultichain",(function(){return b}));var o=n("belzv"),c=n("lBuGR"),i=n("lMzyG"),s=n("lDSNw"),l=n("NQvFB"),d=n("gMNJN"),u=n("laYjG"),p=n("5ftLv"),m=n("6eOa4"),g=n("kpxNY"),f=n("aanFI"),h=n("02iAW"),y=n("4YoIT"),v=n("7zNi3"),w=n("cOTPM");const x=()=>{(0,c.usePrefetchFeatureFlagsEffect)();const t=(0,w.useHardwareOnboardingStore)((e=>e.pushStep)),n=(0,w.useHardwareOnboardingStore)((e=>e.setSelectedChains)),{t:r}=(0,i.useTranslation)(),a=d.hooks.useEnabledNetworkIDs(),f=d.hooks.useEnabledAddressTypes(),{data:[x]}=(0,c.useFeatureFlags)(["enable-bitcoin-ledger"]),b=(0,s.useMemo)((()=>x?f:f.filter((e=>!o.Chains.getAddressTypes(o.BitcoinNetworkID.Mainnet).includes(e)))),[f,x]),S=(0,s.useMemo)((()=>x?a:a.filter((e=>!o.Chains.isBitcoinNetworkID(e)))),[a,x]),{data:E,isFetching:T,refetch:C}=d.hooks.useRequestLedgerPermission(!0,!0),{buttonDisabled:I,defaultIcon:k,primaryText:A,secondaryText:O,buttonText:H,iconType:M,onClick:D}=(0,s.useMemo)((()=>{var a,c;let i=!1;const d=e(s).createElement(h.SpinnerIcon,null);let u,m,g,f=p.ConfirmationIconType.Default,w=l.NOOP;if(T)u=r("connectHardwareSearching"),m=r("connectHardwareMakeSureConnected"),g=r("commandContinue"),i=!0;else if("granted"===(null==E?void 0:E.type)){const l=null!==(c=null===(a=E.transport.deviceModel)||void 0===a?void 0:a.productName)&&void 0!==c?c:"Ledger";f=p.ConfirmationIconType.Success,u=r("connectHardwarePairSuccessPrimary",{productName:l}),m=r("connectHardwarePairSuccessSecondary",{productName:l}),g=r("commandContinue"),i=!1,w=()=>{if(1===b.length){const r=new Map;r.set(b[0],{});for(const e of S){const t=o.Chains.getAddressTypes(e);for(const n of t)r.set(n,{[e]:!0})}n(b,r),t(e(s).createElement(y.ConnectHardwareMultichainOpenApp,{preventBack:!0}))}else t(e(s).createElement(v.ConnectHardwareMultichainSelectChain,{onBackCallback:()=>{n([],new Map)}}))}}else"denied"===(null==E?void 0:E.type)?(f=p.ConfirmationIconType.Failure,u=r("connectHardwarePermissionDeniedPrimary"),m=r("connectHardwarePermissionDeniedSecondary"),g=r("commandTryAgain"),i=!1,w=C):E&&"unable-to-connect"!==E.type||(f=p.ConfirmationIconType.Failure,u=r("connectHardwarePermissionUnableToConnect"),m=r("connectHardwareWaitingForApplicationSecondaryText"),g=r("commandTryAgain"),i=!1,w=C);return{buttonDisabled:i,defaultIcon:d,primaryText:u,secondaryText:m,buttonText:g,iconType:f,onClick:w}}),[S,b,E,t,C,T,n,r]);return e(s).createElement(m.ConnectHardwareStepContainer,null,e(s).createElement(g.IconHeader,{icon:e(s).createElement(p.ConfirmationIcon,{defaultIcon:k,type:M}),primaryText:A,headerStyle:g.IconHeaderStyle.Large,secondaryText:O}),e(s).createElement(u.Button,{onClick:D,theme:"primary",disabled:I},H))},b=()=>{const{pushSubStep:t}=(0,w.useHardwareOnboardingStore)(),{t:n}=(0,i.useTranslation)();return e(s).createElement(m.ConnectHardwareStepContainer,null,e(s).createElement(g.IconHeader,{icon:e(s).createElement(f.IconLedgerLogo,null),primaryText:n("connectHardwareLedger"),headerStyle:g.IconHeaderStyle.Large,secondaryText:n("connectHardwareStartConnection"),animateText:!0}),e(s).createElement(u.Button,{onClick:()=>{t(e(s).createElement(x,null))},theme:"primary"},n("commandConnect")))}})),n.register("5ftLv",(function(r,a){t(r.exports,"ConfirmationIconType",(function(){return g})),t(r.exports,"ConfirmationIcon",(function(){return h}));var o=n("7dqns"),c=n("c1thM"),i=n("lDSNw"),s=n("cZIbv"),l=n("miiws"),d=n("aanFI");const u=s.default.div`
  position: relative;
`,p=(0,s.default)(c.motion.div)`
  width: ${e=>e.width}px;
  height: ${e=>e.width}px;
`,m=(0,s.default)(c.motion.div)`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;var g,f;(f=g||(g={})).Default="default",f.Warning="warning",f.Failure="failure",f.Success="success";const h=({type:t,iconWidth:n,defaultIcon:r,backgroundWidth:a=94})=>e(i).createElement(u,null,e(i).createElement(o.AnimatePresence,{mode:"wait",initial:!1},e(i).createElement(p,{width:a,key:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},(()=>{switch(t){case g.Default:return e(i).createElement(l.Circle,{diameter:a,color:"#181818",includeDarkBoxShadow:!0});case g.Warning:return e(i).createElement(l.Circle,{diameter:a,color:"#FFDC62",opacity:.1});case g.Failure:return e(i).createElement(l.Circle,{diameter:a,color:"#EB3742",opacity:.1});case g.Success:return e(i).createElement(l.Circle,{diameter:a,color:"#21E56F",opacity:.1})}})())),e(i).createElement(o.AnimatePresence,{mode:"wait",initial:!0},e(i).createElement(m,{key:t,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},(()=>{switch(t){case g.Default:return null!=r?r:e(i).createElement(d.IconQuestionMark,{width:null!=n?n:30});case g.Warning:return e(i).createElement(d.IconExclamationMarkCircle,{width:40,height:40,circleFill:"#FFDC62",exclamationFill:"#00000000"});case g.Failure:return e(i).createElement(d.IconFailure,{width:null!=n?n:30});case g.Success:return e(i).createElement(d.IconCheckmark,{height:"100%",width:null!=n?n:40,fill:"#21E56F"})}})())))})),n.register("6eOa4",(function(e,r){t(e.exports,"ConnectHardwareStepContainer",(function(){return a}));const a=n("cZIbv").default.div`
  padding: 55px 20px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`})),n.register("kpxNY",(function(r,a){t(r.exports,"IconHeaderStyle",(function(){return w}),(function(e){return w=e})),t(r.exports,"IconHeader",(function(){return T}),(function(e){return T=e})),t(r.exports,"TabIconHeader",(function(){return A}),(function(e){return A=e}));var o=n("lDSNw"),c=n("cZIbv"),i=n("4xX9U"),s=n("e0omL"),l=n("aanFI"),d=n("c6Gae"),u=n("kn91D"),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const m=c.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,g=c.keyframes`
  0% {
    top: 15px;
    opacity: 0;
  };
  100% {
    top: 0px;
    opacity: 1;
  };
`,f=c.default.div`
  animation-name: ${e=>e.animateText?g:"none"};
  animation-duration: ${e=>e.animateText?".5s":"0s"};
  position: relative;
`,h=(0,c.default)(u.Text)`
  margin: ${e=>e.margin};
`;h.defaultProps={margin:"20px auto 0 auto"};const y=(0,c.default)(u.Text)`
  margin: ${e=>e.margin};
`;y.defaultProps={margin:"15px 0px 0px 0px"};const v=c.default.div`
  position: relative;
  left: 38px;
  bottom: 22px;
`;var w,x;(x=w||(w={})).Medium="medium",x.Large="large",x.Small="small";const b={[w.Large]:30,[w.Medium]:28,[w.Small]:24},S={[w.Large]:34,[w.Medium]:34,[w.Small]:29},E={[w.Large]:18,[w.Medium]:16,[w.Small]:14},T=({className:t,icon:n,primaryText:r,secondaryText:a,headerStyle:c,showWarning:i=!1,showError:d=!1,animateText:u=!1})=>{c=null!=c?c:w.Medium;const p=b[c],g=S[c],x=E[c],T={[w.Large]:22,[w.Medium]:19,[w.Small]:17}[c],C="small"===c?"16px 0 0 0":void 0,I=d?s.ERROR_COLOR:"#777777";return e(o).createElement(m,{className:t},null!=n?n:e(o).createElement(l.IconUnknownOrigin,null),i?e(o).createElement(v,null,e(o).createElement(l.IconExclamationMarkCircle,null)):e(o).createElement(e(o).Fragment,null),e(o).createElement(f,{animateText:u},r&&e(o).createElement(h,{margin:C,weight:500,size:p,lineHeight:g,maxWidth:"320px"},r),a&&e(o).createElement(y,{margin:C,wordBreak:"break-word",size:x,lineHeight:T,color:I},a)))};T.defaultProps={headerStyle:w.Medium};const C=c.css`
  border-radius: 20px;
  width: 90px;
  height: 90px;
`,I=(0,c.default)(d.PImage)`
  ${C}
  object-fit: scale-down;
  filter: ${e=>e.showError?"grayscale(1)":"none"};
`,k=c.default.div`
  ${C}
`,A=t=>{var{tabId:n,iconUrl:r}=t,a=p(t,["tabId","iconUrl"]);const c=(0,i.useTabMeta)(n);let s=null==c?void 0:c.iconUrl;return r&&(s=r),e(o).createElement(T,Object.assign({icon:s?e(o).createElement(I,{showError:a.showError,src:s,fallback:e(o).createElement(l.IconUnknownOrigin,null),loader:e(o).createElement(k,null)}):e(o).createElement(k,null),primaryText:null==c?void 0:c.title},a))}})),n.register("4xX9U",(function(e,r){t(e.exports,"useTabMeta",(function(){return s}),(function(e){return s=e}));var a=n("8EEKH"),o=n("f44BS"),c=n("d1qx3"),i=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function c(e){try{s(r.next(e))}catch(e){o(e)}}function i(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((r=r.apply(e,t||[])).next())}))};const s=e=>{const{value:t}=(0,a.default)((()=>i(void 0,void 0,void 0,(function*(){var t,n;if(void 0===e)return;const r=yield o.browser.tabs.get(e),a=yield(0,c.getTabMarkupMeta)(e);return{iconUrl:null!==(t=null==a?void 0:a.iconUrl)&&void 0!==t?t:null==r?void 0:r.favIconUrl,title:null!==(n=null==a?void 0:a.title)&&void 0!==n?n:null==r?void 0:r.title}}))),[e]);return null!=t?t:{}}})),n.register("8EEKH",(function(e,r){t(e.exports,"default",(function(){return c}));var a=n("lDSNw"),o=n("ideXn");function c(e,t){void 0===t&&(t=[]);var n=(0,o.default)(e,t,{loading:!0}),r=n[0],c=n[1];return(0,a.useEffect)((function(){c()}),[c]),r}})),n.register("ideXn",(function(e,r){t(e.exports,"default",(function(){return i}));var a=n("2WUgS"),o=n("lDSNw"),c=n("l24v6");function i(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var r=(0,o.useRef)(0),i=(0,c.default)(),s=(0,o.useState)(n),l=s[0],d=s[1],u=(0,o.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o=++r.current;return l.loading||d((function(e){return(0,a.__assign)((0,a.__assign)({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return i()&&o===r.current&&d({value:e,loading:!1}),e}),(function(e){return i()&&o===r.current&&d({error:e,loading:!1}),e}))}),t);return[l,u]}})),n.register("l24v6",(function(e,r){t(e.exports,"default",(function(){return o}));var a=n("lDSNw");function o(){var e=(0,a.useRef)(!1),t=(0,a.useCallback)((function(){return e.current}),[]);return(0,a.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t}})),n.register("e0omL",(function(e,n){t(e.exports,"WARNING_COLOR",(function(){return r})),t(e.exports,"DANGER_COLOR",(function(){return a})),t(e.exports,"ERROR_COLOR",(function(){return o}));const r="#FFDC62",a="#EB3742",o="#eb3742"})),n.register("c6Gae",(function(r,a){t(r.exports,"PImage",(function(){return d}),(function(e){return d=e}));var o=n("lDSNw"),c=n("9Khz2"),i=n("cZIbv"),s=n("hjnIF"),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const d=t=>{var{src:n,fallback:r,loader:a,onLoad:i,onError:s,loaderEnabled:d}=t,p=l(t,["src","fallback","loader","onLoad","onError","loaderEnabled"]);const[m,g]=(0,o.useState)("init"),[f,h]=(0,o.useState)(!1),y=(0,o.useMemo)((()=>function(e,t,n){if(e)return e.startsWith("data://")?e:"string"==typeof t||"string"==typeof n?(0,c.getImageThroughProxy)(e):t&&n?(0,c.getScaledImageURIExt)(e,t,n):t?(0,c.getScaledImageURI)(e,"width",t):n?(0,c.getScaledImageURI)(e,"height",n):(0,c.getImageThroughProxy)(e)}(n,p.width,p.height)),[p.height,p.width,n]),v=(0,o.useMemo)((()=>f?n:y),[n,y,f]),w=(0,o.useCallback)((e=>{f?(g("error"),null==s||s(e)):(g("retrying"),h(!0))}),[f,g,s,h]);return"error"!==m&&n?e(o).createElement(e(o).Fragment,null,e(o).createElement("img",Object.assign({src:v,onLoad:i,onError:w},p)),"loading"===m&&d&&e(o).createElement(e(o).Fragment,null,a||e(o).createElement(u,null))):e(o).createElement(e(o).Fragment,null,null!=r?r:null)},u=(0,i.default)(s.SkeletonLoader)`
  width: 100%;
  height: 100%;
`})),n.register("9Khz2",(function(e,r){t(e.exports,"getImageThroughProxy",(function(){return s})),t(e.exports,"getScaledImageURI",(function(){return l})),t(e.exports,"getScaledImageURIExt",(function(){return d}));var a,o,c=n("eZFrU");(o=a||(a={})).NonFungible="NonFungible",o.SemiFungible="SemiFungible",o.Fungible="Fungible",o.NonFungibleEdition="NonFungibleEdition",o.ProgrammableNonFungible="ProgrammableNonFungible";const i=e=>(0,c.getDevicePixelRatio)()*e,s=(e,t=!1)=>`https://api.phantom.app/image-proxy/?image=${encodeURIComponent(e)}${t?"&anim=false":""}`,l=(e,t,n,r=!1)=>{const a=i(n);return`${s(e)}&fit=scale-down&${t}=${a}${r?"&anim=false":""}`},d=(e,t,n,r=!1)=>{const a=i(t),o=i(n);return`${s(e)}&fit=cover&width=${a}&height=${o}${r?"&anim=false":""}`}})),n.register("eZFrU",(function(e,n){t(e.exports,"getDevicePixelRatio",(function(){return r}));const r=()=>(null===window||void 0===window?void 0:window.devicePixelRatio)||1})),n.register("hjnIF",(function(e,r){t(e.exports,"SkeletonLoader",(function(){return c}));var a=n("cZIbv");const o=a.keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`,c=a.default.div`
  display: flex;
  aspect-ratio: ${({aspectRatio:e})=>e};
  flex-direction: ${({flexDirection:e})=>e};
  flex-wrap: ${({flexWrap:e})=>e};
  align-items: ${({align:e})=>e};
  justify-content: ${({justify:e})=>e};
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  margin: ${({margin:e})=>e};
  margin-bottom: ${({marginBottom:e})=>e};
  padding: ${({padding:e})=>e};
  border-radius: ${({borderRadius:e})=>e};
  background-color: ${e=>e.backgroundColor||e.theme.skeletonLight};
  animation: ${o} 2s ease-in-out infinite;
`})),n.register("4YoIT",(function(r,a){t(r.exports,"ConnectHardwareMultichainOpenApp",(function(){return H}),(function(e){return H=e}));var o=n("6Tvfa"),c=n("d0go3"),i=n("belzv"),s=n("lBuGR"),l=n("hsoDC"),d=n("lMzyG"),u=n("gd9Oy"),p=n("W0Kfy"),m=n("lDSNw"),g=n("cZIbv"),f=n("8PPME"),h=n("gMNJN"),y=n("d1qx3"),v=n("laYjG"),w=n("03QiC"),x=n("5ftLv"),b=n("6eOa4"),S=n("kpxNY"),E=n("02iAW"),T=n("kn91D"),C=n("hvJaJ"),I=n("cOTPM"),k=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function c(e){try{s(r.next(e))}catch(e){o(e)}}function i(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}s((r=r.apply(e,t||[])).next())}))};const A=g.default.div`
  align-self: center;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 80px;
  padding: 8px 16px;
  max-width: 150px;
`,O=g.default.div`
  display: flex;

  svg {
    position: relative;

    :first-child {
      left: ${e=>e.logoCount>1?"12.5px":0};
    }

    :nth-child(2) {
      left: ${e=>e.logoCount>1?"-12.5px":0};
    }
  }
`,H=()=>{const t=(0,I.useHardwareOnboardingStore)((e=>e.chainImportStep)),n=(0,I.useHardwareOnboardingStore)((e=>e.setIncrementChainImportStep)),r=(0,I.useHardwareOnboardingStore)((e=>e.selectedChains)),a=(0,I.useHardwareOnboardingStore)((e=>e.selectedChainsMap)),g=(0,I.useHardwareOnboardingStore)((e=>e.pushStep)),M=(0,I.useHardwareOnboardingStore)((e=>e.pushSubStep)),D=(0,I.useHardwareOnboardingStore)((e=>e.setDiscoveredAccounts)),N=(0,I.useHardwareOnboardingStore)((e=>e.setDerivedAccountGroups)),P=(0,m.useRef)(I.useHardwareOnboardingStore.getState().derivedAccountGroups),{t:B,i18n:F}=(0,d.useTranslation)(),L=r[t-1],{data:j=[],isFetched:R,isError:$}=h.hooks.useAllMultiChainAccounts(),[G,z]=(0,m.useState)(!1),_=(0,m.useMemo)((()=>{const e=[],t=a.get(L)||{};for(const[n,r]of Object.entries(t))r&&e.push(n);return e}),[L,a]),{chainNameTextOr:W,chainNameTextAnd:U}=(0,m.useMemo)((()=>{const e=_.map((e=>i.Chains.getChainName(e))),t=new Intl.ListFormat(F.resolvedLanguage,{style:"long",type:"disjunction"}),n=new Intl.ListFormat(F.resolvedLanguage,{style:"long",type:"conjunction"});return{chainNameTextOr:t.format(e),chainNameTextAnd:n.format(e)}}),[_,F]),K=(0,m.useMemo)((()=>_.map((t=>e(m).createElement(w.ChainLogo,{key:t,networkID:t,width:90,height:90,strokeWidth:1})))),[_]);(0,m.useEffect)((()=>{const e=I.useHardwareOnboardingStore.subscribe((e=>P.current=e.derivedAccountGroups));return()=>e()}),[]);const Y=(0,m.useMemo)((()=>{const e=[];switch(L){case u.AddressType.Solana:e.push({pathType:c.DerivationPathType.Bip44RootSolana});break;case u.AddressType.EVM:e.push({pathType:c.DerivationPathType.Bip44RootEthereum});case u.AddressType.BitcoinTaproot:case u.AddressType.BitcoinNativeSegwit:case u.AddressType.BitcoinNestedSegwit:case u.AddressType.BitcoinLegacy:}for(let t=0;t<19;++t)switch(L){case u.AddressType.Solana:e.push({index:t,pathType:c.DerivationPathType.Bip44ChangeSolana}),e.push({index:t,pathType:c.DerivationPathType.Bip44Solana});break;case u.AddressType.EVM:e.push({index:t,pathType:c.DerivationPathType.Bip44Ethereum}),e.push({index:t,pathType:c.DerivationPathType.Bip44EthereumSecondary});break;case u.AddressType.BitcoinTaproot:case u.AddressType.BitcoinNativeSegwit:case u.AddressType.BitcoinNestedSegwit:case u.AddressType.BitcoinLegacy:e.push({index:t,pathType:c.DerivationPathType.BitcoinTaproot},{index:t,pathType:c.DerivationPathType.BitcoinNativeSegwit})}return e}),[L]),[Z,q]=(0,m.useState)(!0),{data:Q=l.LEDGER_NOT_CONNECTED_STATE}=h.hooks.useLedgerWireTransportState(Z,!0),{data:[J]}=(0,s.useFeatureFlags)(["kill-ledger-xpub-derivation"]),{data:V,error:X,fetchStatus:ee,refetch:te}=h.hooks.useLedgerAddresses(Q,Y,!0,!J),ne="fetching"===ee,re=!Q.isConnected&&"reconnecting"!==Q.status,[ae,oe]=(0,m.useState)(!1),{data:ce,refetch:ie}=h.hooks.useRequestLedgerPermission(ae,!0);(0,m.useEffect)((()=>{re&&q(!1)}),[re]),(0,m.useEffect)((()=>{"granted"===(null==ce?void 0:ce.type)&&(q(!0),oe(!1))}),[ce]);const se=(0,m.useCallback)((()=>k(void 0,void 0,void 0,(function*(){var n;if(V&&Object.keys(V).length){const a=[...P.current];let c=0;for(const e of Object.values(V)){const t=null!==(n=a[c])&&void 0!==n?n:{accounts:{}},r={accounts:Object.assign({},t.accounts),derivationIndex:Y[c].index};switch(e.addressType){case u.AddressType.EVM:_.includes(i.NetworkIDs.Polygon.Mainnet)&&(r.accounts[`${i.NetworkIDs.Polygon.Mainnet}-${e.address}`]={chainType:e.addressType,chainId:i.NetworkIDs.Polygon.Mainnet,address:e.address,publicKey:e.publicKey,pathParams:Y[c]}),_.includes(i.NetworkIDs.Ethereum.Mainnet)&&(r.accounts[`${i.NetworkIDs.Ethereum.Mainnet}-${e.address}`]={chainType:e.addressType,chainId:i.NetworkIDs.Ethereum.Mainnet,address:e.address,publicKey:e.publicKey,pathParams:Y[c]});break;case u.AddressType.Solana:r.accounts[`${i.NetworkIDs.Solana.Mainnet}-${e.address}`]={chainType:e.addressType,address:e.address,publicKey:e.publicKey,chainId:i.NetworkIDs.Solana.Mainnet,pathParams:Y[c]};break;case u.AddressType.BitcoinTaproot:case u.AddressType.BitcoinNativeSegwit:case u.AddressType.BitcoinNestedSegwit:case u.AddressType.BitcoinLegacy:r.accounts[`${i.NetworkIDs.Bitcoin.Mainnet}-${e.address}`]={chainType:e.addressType,address:e.address,publicKey:e.publicKey,chainId:i.NetworkIDs.Bitcoin.Mainnet,pathParams:Y[c]}}a[c]=r,c++}if(N(a),R&&r.length===t){z(!0);const t=(e=>{const t=new Set;for(const n of e)for(const{address:e}of n.addresses)t.add(e);return t})(j),n=a.reduce(((e,n)=>{let r=!1;for(const{address:e}of Object.values(n.accounts))r=r||t.has(e);return r||e.push(n),e}),[]),r=[],c=[];for(let e=0;e<n.length;e+=p.BATCH_SIZE_BY_PLATFORM.extension){const t=n.slice(e,e+p.BATCH_SIZE_BY_PLATFORM.extension).map((e=>Object.entries(e.accounts).reduce(((e,[t,n])=>(e[t]={account:n},e)),{})));c.push(t)}for(const e of c)r.push((0,p.discoverAccounts)(e));const i=(yield Promise.all(r)).flat().map((e=>{switch(e.status){case"discovered":return Object.assign(Object.assign({},e),{accounts:e.accounts.filter((e=>e.hasAccountActivity||(0,o.isRecommendedDerivationPathType)(e.derivationPathType)))});case"undiscovered":return Object.assign(Object.assign({},e),{accounts:e.accounts.filter((e=>(0,o.isRecommendedDerivationPathType)(e.derivationPathType)))})}})).filter((e=>e.accounts.length>0)).map((e=>{const t=(0,f.default)();return Object.assign(Object.assign({},e),{discoveryIdentifier:t})})),s=i.filter((e=>"undiscovered"===e.status||e.isSelectedByDefault)),l=i.filter((e=>!("undiscovered"===e.status||e.isSelectedByDefault))).slice(0,2),d=s.length>0,u=j.filter((e=>e.type===o.AccountType.Ledger)).length,h=(d?[...s,...l]:i.filter((e=>!e.accounts.some((e=>!(0,o.isRecommendedDerivationPathType)(e.derivationPathType))))).slice(0,3)).map(((e,t)=>Object.assign(Object.assign({},e),{accountIndex:u+t})));D(h,d),g(e(m).createElement(C.ConnectHardwareMultichainImportAccount,{preventBack:!0}))}}}))),[V,N,R,r.length,t,Y,_,j,D,g]);let le,de,ue,pe;(0,m.useEffect)((()=>{V&&Object.keys(V).length===Y.length&&(se(),r.length!==t&&(n(),M(e(m).createElement(H,{preventBack:!0}))))}),[V,Y,g,M,t,r,se,n]);let me=()=>{};return $?(le=e(m).createElement(x.ConfirmationIcon,{type:x.ConfirmationIconType.Failure}),de=B("connectHardwareErrorLedgerGeneric"),ue=B("connectHardwareErrorLedgerPhantomLocked"),me=()=>k(void 0,void 0,void 0,(function*(){const e=yield(0,y.getCurrentTabAsync)();void 0!==e.id&&(0,y.closeTabAsync)(e.id)})),pe=B("commandClose")):ce&&"granted"!==ce.type?(le=e(m).createElement(x.ConfirmationIcon,{type:x.ConfirmationIconType.Warning}),de=B("connectHardwarePermissionDeniedPrimary"),ue=B("connectHardwarePermissionDeniedSecondary"),pe=B("homeErrorButtonText"),me=ie):re?(le=e(m).createElement(x.ConfirmationIcon,{type:x.ConfirmationIconType.Warning}),de=B("connectHardwarePermissionUnableToConnect"),ue=B("connectHardwarePermissionUnableToConnectDescription"),pe=B("commandConnect"),me=ie):X instanceof l.LedgerLockedError?(le=e(m).createElement(x.ConfirmationIcon,{type:x.ConfirmationIconType.Failure}),de=B("connectHardwareErrorLedgerLocked"),ue=B("connectHardwareErrorLedgerLockedDescription"),pe=B("homeErrorButtonText"),me=te):X?(le=e(m).createElement(x.ConfirmationIcon,{type:x.ConfirmationIconType.Failure}),de=B("connectHardwareErrorLedgerGeneric"),ue=B("connectHardwareErrorLedgerGenericDescription"),pe=B("homeErrorButtonText"),me=te):"reconnecting"==Q.status?(le=e(m).createElement(x.ConfirmationIcon,{defaultIcon:e(m).createElement(E.SpinnerIcon,null),type:x.ConfirmationIconType.Default}),de=B("connectHardwareConnecting"),ue=B("connectHardwareConnectingDescription")):G?(le=e(m).createElement(x.ConfirmationIcon,{defaultIcon:e(m).createElement(E.SpinnerIcon,null),type:x.ConfirmationIconType.Default}),de=B("connectHardwareDiscoveringAccounts"),ue=B("connectHardwareDiscoveringAccountsDescription")):ne?(le=e(m).createElement(x.ConfirmationIcon,{defaultIcon:e(m).createElement(E.SpinnerIcon,null),type:x.ConfirmationIconType.Default}),de=B("connectHardwareConnectingAccounts"),ue=B("connectHardwareFindingAccountsWithActivity",{chainName:U})):(le=e(m).createElement(O,{logoCount:K.length},K),de=B("connectHardwareOpenAppInterpolated",{app:W}),ue=B("connectHardwareOpenAppDescription")),e(m).createElement(b.ConnectHardwareStepContainer,null,e(m).createElement(S.IconHeader,{icon:le,primaryText:de,headerStyle:S.IconHeaderStyle.Large,secondaryText:ue}),pe?e(m).createElement(v.Button,{onClick:me,theme:"primary"},pe):e(m).createElement(A,null,e(m).createElement(T.Text,{color:"#999999",size:14},B("connectHardwareAccountsStepOfSteps",{stepNum:t,totalSteps:r.length}))))}})),n.register("hvJaJ",(function(r,a){t(r.exports,"ConnectHardwareMultichainImportAccount",(function(){return y}));var o=n("lMzyG"),c=n("lDSNw"),i=n("cZIbv"),s=n("laYjG"),l=n("5ftLv"),d=n("6eOa4"),u=n("kpxNY"),p=n("7R0Mp"),m=n("ajvrz"),g=n("cOTPM");const f=i.default.div`
  margin-bottom: 35px;
`,h=(0,i.default)(s.Button)`
  margin-bottom: 10px;
`,y=()=>{const t=(0,g.useHardwareOnboardingStore)((e=>e.discoveredAccounts)),n=(0,g.useHardwareOnboardingStore)((e=>e.activeAccountsFound)),r=(0,g.useHardwareOnboardingStore)((e=>e.setSelectedAccounts)),a=(0,g.useHardwareOnboardingStore)((e=>e.pushSubStep)),{t:i}=(0,o.useTranslation)(),y=(0,c.useMemo)((()=>{let e;if(n){const n=t.filter((e=>"undiscovered"===e.status||e.isSelectedByDefault));e=i(1===n.length?"connectHardwareFoundAccountsWithActivitySingular":"connectHardwareFoundAccountsWithActivity",{numOfAccounts:n.length})}else e=i("connectHardwareFoundSomeAccounts");return e}),[n,i,t]),v=(0,c.useCallback)((()=>{a(e(c).createElement(m.ConnectHardwareMultichainSelectAccounts,{activeAccounts:t}))}),[a,t]),w=(0,c.useCallback)((()=>{a(e(c).createElement(p.ConnectHardwareMultichainImportConfirmation,{preventBack:!0}))}),[a]);return(0,c.useEffect)((()=>{const e=t.reduce(((e,t,n)=>(("discovered"===t.status&&t.isSelectedByDefault||0===n)&&(e[t.discoveryIdentifier]=!0),e)),{});r(e)}),[t,r,n,i]),e(c).createElement(d.ConnectHardwareStepContainer,null,e(c).createElement(f,null,e(c).createElement(u.IconHeader,{icon:e(c).createElement(l.ConfirmationIcon,{type:l.ConfirmationIconType.Success}),primaryText:i("connectHardwareConnectAccounts"),headerStyle:u.IconHeaderStyle.Large,secondaryText:y})),e(c).createElement(h,{onClick:v,theme:"default"},i("connectHardwareSelectAccounts")),e(c).createElement(s.Button,{onClick:w,theme:"primary"},i("commandContinue")))}})),n.register("7R0Mp",(function(r,a){t(r.exports,"ConnectHardwareMultichainImportConfirmation",(function(){return g}));var o=n("d0go3"),c=n("lMzyG"),i=n("lDSNw"),s=n("gMNJN"),l=n("laYjG"),d=n("5ftLv"),u=n("6eOa4"),p=n("kpxNY"),m=n("cOTPM");const g=()=>{const t=(0,m.useHardwareOnboardingStore)((e=>e.discoveredAccounts)),n=(0,m.useHardwareOnboardingStore)((e=>e.selectedAccounts)),{t:r}=(0,c.useTranslation)(),{mutateAsync:a}=s.hooks.useConnectLedgerAccounts(),{mutateAsync:g}=s.hooks.useUpdateVisibleBitcoinAddressTypes(),[f,h]=(0,i.useState)(!1),y=(0,i.useMemo)((()=>t.filter((e=>!!n[e.discoveryIdentifier]))),[t,n]);return(0,i.useEffect)((()=>{if(y.length){const e=[],t=new Set;for(const n of y){const{accounts:r,seedIndex:a,accountIndex:c}=n,i=[],s=[];for(const e of r)(0,o.isBitcoinDerivationPathType)(e.derivationPathType)?(s.push({pathType:e.derivationPathType,value:e.publicKey}),"amount"in e&&0===parseFloat(e.amount)||t.add(e.chainType)):((0,o.isEVMDerivationPathType)(e.derivationPathType)||(0,o.isSolanaDerivationPathType)(e.derivationPathType))&&i.push({pathType:e.derivationPathType,value:e.address});e.push({derivationIndex:a,addresses:i,publicKeys:s,accountIndex:c})}a({accounts:e}).then((()=>{t.size>0&&g({addressTypes:Array.from(t)})})).finally((()=>h(!0)))}else h(!0)}),[y,a,g]),e(i).createElement(u.ConnectHardwareStepContainer,null,e(i).createElement(p.IconHeader,{icon:e(i).createElement(d.ConfirmationIcon,{type:d.ConfirmationIconType.Success}),primaryText:r("connectHardwareAccountsAddedInterpolated",{numOfAccounts:y.length}),headerStyle:p.IconHeaderStyle.Large,secondaryText:r("connectHardwareFinishSecondaryText")}),e(i).createElement(l.Button,{onClick:()=>{window.close()},theme:"primary",disabled:!f},r("pastParticipleDone")))}})),n.register("cOTPM",(function(r,a){t(r.exports,"useHardwareOnboardingStore",(function(){return l}));var o=n("4y59b"),c=n("90BMT"),i=n("9xrNA");const s={hardwareStepStack:[],hardwareStepSubStack:{},selectedChains:[],selectedChainsMap:new Map,chainImportStep:1,derivedAccountGroups:[],discoveredAccounts:[],activeAccountsFound:!1,selectedAccounts:{}},l=e(i)(((e,t)=>Object.assign(Object.assign({},s),{pushStep:n=>{const r=t().hardwareStepStack;e({hardwareStepStack:r.concat(n)})},popStep:()=>{var n;const r=t().hardwareStepStack.length-1;if((null!==(n=t().hardwareStepSubStack[r])&&void 0!==n?n:[]).length)return e((0,c.default)((e=>{e.hardwareStepSubStack[r]=e.hardwareStepSubStack[r].slice(0,-1)})));e((0,c.default)((e=>{e.hardwareStepStack=e.hardwareStepStack.slice(0,-1)})))},pushSubStep:n=>{var r;const a=t().hardwareStepStack.length-1,o=null!==(r=t().hardwareStepSubStack[a])&&void 0!==r?r:[];e((0,c.default)((e=>{e.hardwareStepSubStack[a]=o.concat([n])})))},currentStep:()=>{var e;const n=t().hardwareStepStack,r=t().hardwareStepSubStack,a=n.length>0?n.length-1:n.length;return(null===(e=r[a])||void 0===e?void 0:e.length)?(0,o.getLast)(r[a]):(0,o.getLast)(n)},setSelectedChains:(t,n)=>{e({selectedChains:t,selectedChainsMap:n})},setDecrementChainImportStep:()=>{const n=t().chainImportStep;e({chainImportStep:n-1})},setIncrementChainImportStep:()=>{const n=t().chainImportStep;e({chainImportStep:n+1})},setDerivedAccountGroups:t=>{e({derivedAccountGroups:t})},setDiscoveredAccounts:(t,n)=>{e({discoveredAccounts:t,activeAccountsFound:n})},selectAccount:n=>{const r=t().selectedAccounts,a=Object.assign({},r);a[n]=!0,e({selectedAccounts:a})},deselectAccount:n=>{const r=t().selectedAccounts,a=Object.assign({},r);delete a[n],e({selectedAccounts:a})},setSelectedAccounts:t=>{e({selectedAccounts:t})}})))})),n.register("ajvrz",(function(r,a){t(r.exports,"ConnectHardwareMultichainSelectAccounts",(function(){return f}));var o=n("lMzyG"),c=n("lDSNw"),i=n("cZIbv"),s=n("laYjG"),l=n("6eOa4"),d=n("6cxMh"),u=n("kn91D"),p=n("7R0Mp"),m=n("cOTPM");const g=(0,i.default)(u.Text)`
  margin-top: 15px;
`,f=({activeAccounts:t})=>{const n=(0,m.useHardwareOnboardingStore)((e=>e.selectedAccounts)),r=(0,m.useHardwareOnboardingStore)((e=>e.selectAccount)),a=(0,m.useHardwareOnboardingStore)((e=>e.deselectAccount)),i=(0,m.useHardwareOnboardingStore)((e=>e.pushSubStep)),{t:f}=(0,o.useTranslation)(),h=(0,c.useMemo)((()=>0===Object.values(n).filter((e=>!!e)).length),[n]),y=(0,c.useCallback)((()=>{i(e(c).createElement(p.ConnectHardwareMultichainImportConfirmation,{preventBack:!0}))}),[i]);return e(c).createElement(l.ConnectHardwareStepContainer,null,e(c).createElement("div",{style:{marginBottom:15}},e(c).createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:30}},e(c).createElement(u.Text,{weight:500,size:30,lineHeight:34,maxWidth:"320px"},f("connectHardwareSelectAccounts")),e(c).createElement(g,{wordBreak:"break-word",size:18,lineHeight:22,color:"#777777"},f("connectHardwareChooseAccountsToConnect"))),e(c).createElement("div",{style:{maxHeight:420,overflowY:"scroll"}},t.map((({accounts:t,discoveryIdentifier:o,accountIndex:i})=>{const s=!!n[o];return e(c).createElement(d.ImportAccountRow,{key:o,accountType:"ledger",accounts:t,accountIndex:i,checked:s,onPress:()=>{s?a(o):r(o)}})})))),e(c).createElement(s.Button,{onClick:y,theme:"primary",disabled:h},f("commandContinue")))}})),n.register("6cxMh",(function(r,a){t(r.exports,"ImportAccountRow",(function(){return g}));var o=n("lMzyG"),c=n("lDSNw"),i=n("gmVmN"),s=n("cZIbv"),l=n("03QiC"),d=n("7E6dj"),u=n("e4sKe"),p=n("kn91D");const m=({account:t})=>{const{t:n}=(0,o.useTranslation)();return e(c).createElement(b,null,e(c).createElement(h,null,e(c).createElement(l.ChainLogo,{networkID:t.chain.id,height:40,width:40,spacing:"large"})),e(c).createElement(y,null,e(c).createElement(w,null,e(c).createElement(u.TokenNameBadge,{networkID:t.chain.id,walletAddress:t.address},e(c).createElement(S,null,t.chain.name)),e(c).createElement(S,null,(0,i.formatHashMedium)(t.address,4))),e(c).createElement(v,null,"amount"in t&&"chain"in t?e(c).createElement(E,null,(0,i.formatTokenAmount)(t.amount)," ",t.chain.symbol):null,"amount"in t?e(c).createElement(E,null,t.lastActivityTimestamp?n("onboardingImportAccountsLastActive",{formattedTimestamp:(0,i.formatTimestampFromNow)(1e3*t.lastActivityTimestamp,!0)}):n("onboardingImportAccountsCreateNew")):null)))},g=e(c).memo((({accountType:t,accounts:n,checked:r,accountIndex:a,onPress:i})=>{const{t:s}=(0,o.useTranslation)(),l=a+1;return e(c).createElement(f,null,e(c).createElement(x,null,e(c).createElement(S,null,((e,t,n)=>{switch(t){case"seed":return e("onboardingImportAccountsAccountName",{walletIndex:n});case"ledger":return e("onboardingImportAccountsLedgerAccountName",{walletIndex:n})}})(s,t,l)),e(c).createElement(d.Checkbox,{checked:r,onChange:i})),n.map(((t,n)=>e(c).createElement(m,{key:`${t.address}-${n}`,account:t}))))})),f=s.default.div`
  margin-bottom: 24px;
  width: 100%;
`,h=s.default.div`
  flex-shrink: 0;
  margin-right: 10px;
`,y=s.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,v=s.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,w=(0,s.default)(v)`
  margin-bottom: 2px;
`,x=(0,s.default)(v)`
  background: #2a2a2a;
  margin-bottom: 1px;
  padding: 12px 16px 12px 14px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  & > span {
    margin-right: 0;
  }
`,b=s.default.div`
  background: #2a2a2a;
  margin-top: 1px;
  padding: 17px 16px 17px 14px;
  width: 100%;
  display: flex;
  align-items: center;

  &:last-of-type {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`,S=(0,s.default)(p.Text).attrs({size:16,lineHeight:19,weight:600})``,E=(0,s.default)(p.Text).attrs({size:14,lineHeight:17,weight:400,color:"#777777"})``})),n.register("7zNi3",(function(r,a){t(r.exports,"ConnectHardwareMultichainSelectChain",(function(){return T}));var o=n("belzv"),c=n("lBuGR"),i=n("lMzyG"),s=n("lDSNw"),l=n("cZIbv"),d=n("gMNJN"),u=n("gdILj"),p=n("laYjG"),m=n("03QiC"),g=n("7E6dj"),f=n("6eOa4"),h=n("kn91D"),y=n("4YoIT"),v=n("cOTPM");const w=l.default.div`
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 16px 24px 16px 12px;

  :last-child {
    margin-bottom: 28px;
  }

  > span {
    margin-right: 0px;
  }
`,x=l.default.div`
  margin-right: 12px;
`,b=l.default.div`
  margin-top: 30px;
`,S=l.default.div`
  display: flex;
  align-items: center;
`,E=({networkID:t,icon:n,onPressChain:r,isChecked:a})=>e(s).createElement(w,{onClick:()=>{r(t)}},e(s).createElement(S,null,e(s).createElement(x,null,n),e(s).createElement(h.Text,{size:16,weight:600},o.Chains.getNetworkName(t))),e(s).createElement(g.Checkbox,{checked:a})),T=()=>{const{pushSubStep:t,selectedChains:n,setSelectedChains:r,selectedChainsMap:a}=(0,v.useHardwareOnboardingStore)(),l=d.hooks.useEnabledNetworkIDs(),g=d.hooks.useEnabledAddressTypes(),{data:[w]}=(0,c.useFeatureFlags)(["enable-bitcoin-ledger"]),x=(0,s.useMemo)((()=>w?g:g.filter((e=>!o.Chains.getAddressTypes(o.BitcoinNetworkID.Mainnet).includes(e)))),[g,w]),S=(0,s.useMemo)((()=>w?l:l.filter((e=>!o.Chains.isBitcoinNetworkID(e)))),[l,w]),{t:T}=(0,i.useTranslation)(),C=(0,s.useCallback)((e=>{const t=new Map(a),n=o.Chains.getAddressTypes(e);for(const r of n){const n=a.get(r),o=null==n?void 0:n[e];t.set(r,Object.assign(Object.assign({},n),{[e]:!o}))}const c=x.filter((e=>{const n=t.get(e)||{};return Object.values(n).reduce(((e,t)=>t?++e:e),0)>0}));r(c,t)}),[x,r,a]);(0,u.useEffectOnce)((()=>{const e=new Map;for(const t of x)e.set(t,{});for(const t of S){const n=o.Chains.getAddressTypes(t);for(const r of n){const n=e.get(r);e.set(r,Object.assign(Object.assign({},n),{[t]:!1}))}}r(n,e)}),x.length>0&&S.length>0);const I=(0,s.useMemo)((()=>S.map((t=>{const n=o.Chains.getAddressTypes(t);let r=!1;for(const e of n){const n=a.get(e);r=(null==n?void 0:n[t])||r}return e(s).createElement(E,{key:t,icon:e(s).createElement(m.ChainLogo,{networkID:t,width:40,height:40,stroke:""}),networkID:t,onPressChain:C,isChecked:r})}))),[S,a,C]),k=(0,s.useMemo)((()=>{let e=0;for(const t of a.values())e+=Object.values(t).reduce(((e,t)=>t?++e:e),0);return 0===e}),[a]);return e(s).createElement(f.ConnectHardwareStepContainer,null,e(s).createElement("div",null,e(s).createElement(h.Text,{weight:500,size:28,lineHeight:34},T("connectHardwareSelectChains")),e(s).createElement(b,null,I)),e(s).createElement(p.Button,{onClick:()=>{t(e(s).createElement(y.ConnectHardwareMultichainOpenApp,{preventBack:!0}))},theme:"primary",disabled:k},T("commandContinue")))}})),n.register("gdILj",(function(e,r){t(e.exports,"useEffectOnce",(function(){return o}));var a=n("lDSNw");const o=(e,t)=>{const n=(0,a.useRef)(!1);(0,a.useEffect)((()=>{if(!n.current&&t)return n.current=!0,e()}))}})),n.register("l7cFC",(function(e,n){t(e.exports,"TOTAL_CONNECT_HARDWARE_STEPS",(function(){return r}));const r=3}));
//# sourceMappingURL=ConnectHardwareMultichainFlow.f0a3e674.js.map
define=__define;})(window.define);