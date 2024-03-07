(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("3qeW6",(function(r,a){var o;o=r.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),t(r.exports,"default",(function(){return g}));var i=n("1fwzV"),c=n("lz5BI"),s=n("29o0l"),l=n("84vNm"),d=n("1wtq7"),u=n("bQfjx"),p=n("krk0C"),m=n("V2q0K"),f=n("3Kg4v");var g=()=>{var t;const{hardwareStepStack:n,pushStep:r,popStep:a,currentStep:o}=(0,m.useHardwareOnboardingStore)(),g=(0,l.default)(n,((e,t)=>(null==e?void 0:e.length)===t.length)),h=(0,s.useCallback)((()=>{var e,t,n,r,i;(null===(e=o())||void 0===e?void 0:e.props.preventBack)||((null===(t=o())||void 0===t?void 0:t.props.onBackCallback)&&(null===(i=null===(n=o())||void 0===n?void 0:(r=n.props).onBackCallback)||void 0===i||i.call(r)),a())}),[o,a]);(0,s.useEffect)((()=>{r(e(s).createElement(p.ConnectHardwareMultichain,null))}),[r]);const y=n.length>(null!=g?g:[]).length,w=0===(null==g?void 0:g.length),v={initial:{x:w?0:y?150:-150,opacity:w?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(s).createElement(d.ConnectHardwareContainer,null,e(s).createElement(u.StepHeader,{totalSteps:f.TOTAL_CONNECT_HARDWARE_STEPS,onBackClick:h,showBackButton:!(null===(t=o())||void 0===t?void 0:t.props.preventBack),currentStepIndex:n.length-1}),e(s).createElement(i.AnimatePresence,{mode:"wait"},e(s).createElement(c.motion.div,Object.assign({style:{display:"flex",flexGrow:1},key:`${n.length}_${null==g?void 0:g.length}`},v),o())))}})),n.register("1wtq7",(function(e,r){t(e.exports,"ConnectHardwareContainer",(function(){return a}));const a=n("gkfw3").default.main`
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
`})),n.register("bQfjx",(function(r,a){t(r.exports,"StepHeader",(function(){return g}));var o=n("RVqnc"),i=n("29o0l"),c=n("gkfw3"),s=n("lSd3H"),l=n("6UMd8"),d=n("j81qC"),u=n("634r8");const p=(0,c.default)(u.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
`,m=c.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,f=c.default.div`
  width: 24px;
  height: 24px;
`,g=({onBackClick:t,totalSteps:n,currentStepIndex:r,isHidden:a,showBackButtonOnFirstStep:c,showBackButton:u=!0})=>{const g=u&&(c||0!==r);return e(i).createElement(p,{opacity:a?0:1},g?e(i).createElement(s.ChevronCircle,{right:1,onClick:t},e(i).createElement(d.IconChevronLeft,null)):e(i).createElement(f,null),e(i).createElement(m,null,(0,o.range)(n).map((t=>{const n=t<=r?"#AB9FF2":"#333";return e(i).createElement(l.Circle,{key:t,diameter:12,color:n})}))),e(i).createElement(f,null))}})),n.register("lSd3H",(function(e,r){t(e.exports,"ChevronCircle",(function(){return i}));var a=n("gkfw3"),o=n("6UMd8");const i=(0,a.default)(o.Circle)`
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
`})),n.register("krk0C",(function(r,a){t(r.exports,"ConnectHardwareMultichain",(function(){return b}));var o=n("iOvk1"),i=n("3ljHn"),c=n("43063"),s=n("29o0l"),l=n("9CoSy"),d=n("gX5Te"),u=n("hFkH3"),p=n("cb8KS"),m=n("kFW5d"),f=n("3mrWC"),g=n("j81qC"),h=n("bhnmm"),y=n("efSU2"),w=n("ivB1q"),v=n("V2q0K");const x=()=>{(0,i.usePrefetchFeatureFlagsEffect)();const t=(0,v.useHardwareOnboardingStore)((e=>e.pushStep)),n=(0,v.useHardwareOnboardingStore)((e=>e.setSelectedChains)),{t:r}=(0,c.useTranslation)(),a=d.hooks.useEnabledNetworkIDs(),g=d.hooks.useEnabledAddressTypes(),{data:[x]}=(0,i.useFeatureFlags)(["enable-bitcoin-ledger"]),b=(0,s.useMemo)((()=>x?g:g.filter((e=>!o.Chains.getAddressTypes(o.BitcoinNetworkID.Mainnet).includes(e)))),[g,x]),S=(0,s.useMemo)((()=>x?a:a.filter((e=>!o.Chains.isBitcoinNetworkID(e)))),[a,x]),{data:C,isFetching:E,refetch:k}=d.hooks.useRequestLedgerPermission(!0,!0),{buttonDisabled:T,defaultIcon:I,primaryText:A,secondaryText:H,buttonText:O,iconType:D,onClick:P}=(0,s.useMemo)((()=>{var a,i;let c=!1;const d=e(s).createElement(h.SpinnerIcon,null);let u,m,f,g=p.ConfirmationIconType.Default,v=l.NOOP;if(E)u=r("connectHardwareSearching"),m=r("connectHardwareMakeSureConnected"),f=r("commandContinue"),c=!0;else if("granted"===(null==C?void 0:C.type)){const l=null!==(i=null===(a=C.transport.deviceModel)||void 0===a?void 0:a.productName)&&void 0!==i?i:"Ledger";g=p.ConfirmationIconType.Success,u=r("connectHardwarePairSuccessPrimary",{productName:l}),m=r("connectHardwarePairSuccessSecondary",{productName:l}),f=r("commandContinue"),c=!1,v=()=>{if(1===b.length){const r=new Map;r.set(b[0],{});for(const e of S){const t=o.Chains.getAddressTypes(e);for(const n of t)r.set(n,{[e]:!0})}n(b,r),t(e(s).createElement(y.ConnectHardwareMultichainOpenApp,{preventBack:!0}))}else t(e(s).createElement(w.ConnectHardwareMultichainSelectChain,{onBackCallback:()=>{n([],new Map)}}))}}else"denied"===(null==C?void 0:C.type)?(g=p.ConfirmationIconType.Failure,u=r("connectHardwarePermissionDeniedPrimary"),m=r("connectHardwarePermissionDeniedSecondary"),f=r("commandTryAgain"),c=!1,v=k):C&&"unable-to-connect"!==C.type||(g=p.ConfirmationIconType.Failure,u=r("connectHardwarePermissionUnableToConnect"),m=r("connectHardwareWaitingForApplicationSecondaryText"),f=r("commandTryAgain"),c=!1,v=k);return{buttonDisabled:c,defaultIcon:d,primaryText:u,secondaryText:m,buttonText:f,iconType:g,onClick:v}}),[S,b,C,t,k,E,n,r]);return e(s).createElement(m.ConnectHardwareStepContainer,null,e(s).createElement(f.IconHeader,{icon:e(s).createElement(p.ConfirmationIcon,{defaultIcon:I,type:D}),primaryText:A,headerStyle:f.IconHeaderStyle.Large,secondaryText:H}),e(s).createElement(u.Button,{onClick:P,theme:"primary",disabled:T},O))},b=()=>{const{pushSubStep:t}=(0,v.useHardwareOnboardingStore)(),{t:n}=(0,c.useTranslation)();return e(s).createElement(m.ConnectHardwareStepContainer,null,e(s).createElement(f.IconHeader,{icon:e(s).createElement(g.IconLedgerLogo,null),primaryText:n("connectHardwareLedger"),headerStyle:f.IconHeaderStyle.Large,secondaryText:n("connectHardwareStartConnection"),animateText:!0}),e(s).createElement(u.Button,{onClick:()=>{t(e(s).createElement(x,null))},theme:"primary"},n("commandConnect")))}})),n.register("cb8KS",(function(r,a){t(r.exports,"ConfirmationIconType",(function(){return f})),t(r.exports,"ConfirmationIcon",(function(){return h}));var o=n("1fwzV"),i=n("lz5BI"),c=n("29o0l"),s=n("gkfw3"),l=n("6UMd8"),d=n("j81qC");const u=s.default.div`
  position: relative;
`,p=(0,s.default)(i.motion.div)`
  width: ${e=>e.width}px;
  height: ${e=>e.width}px;
`,m=(0,s.default)(i.motion.div)`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;var f,g;(g=f||(f={})).Default="default",g.Warning="warning",g.Failure="failure",g.Success="success";const h=({type:t,iconWidth:n,defaultIcon:r,backgroundWidth:a=94})=>e(c).createElement(u,null,e(c).createElement(o.AnimatePresence,{mode:"wait",initial:!1},e(c).createElement(p,{width:a,key:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}},(()=>{switch(t){case f.Default:return e(c).createElement(l.Circle,{diameter:a,color:"#181818",includeDarkBoxShadow:!0});case f.Warning:return e(c).createElement(l.Circle,{diameter:a,color:"#FFDC62",opacity:.1});case f.Failure:return e(c).createElement(l.Circle,{diameter:a,color:"#EB3742",opacity:.1});case f.Success:return e(c).createElement(l.Circle,{diameter:a,color:"#21E56F",opacity:.1})}})())),e(c).createElement(o.AnimatePresence,{mode:"wait",initial:!0},e(c).createElement(m,{key:t,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},(()=>{switch(t){case f.Default:return null!=r?r:e(c).createElement(d.IconQuestionMark,{width:null!=n?n:30});case f.Warning:return e(c).createElement(d.IconExclamationMarkCircle,{width:40,height:40,circleFill:"#FFDC62",exclamationFill:"#00000000"});case f.Failure:return e(c).createElement(d.IconFailure,{width:null!=n?n:30});case f.Success:return e(c).createElement(d.IconCheckmark,{height:"100%",width:null!=n?n:40,fill:"#21E56F"})}})())))})),n.register("kFW5d",(function(e,r){t(e.exports,"ConnectHardwareStepContainer",(function(){return a}));const a=n("gkfw3").default.div`
  padding: 55px 20px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`})),n.register("3mrWC",(function(r,a){t(r.exports,"IconHeaderStyle",(function(){return v}),(function(e){return v=e})),t(r.exports,"IconHeader",(function(){return E}),(function(e){return E=e})),t(r.exports,"TabIconHeader",(function(){return A}),(function(e){return A=e}));var o=n("29o0l"),i=n("gkfw3"),c=n("eWzmJ"),s=n("91Dw6"),l=n("j81qC"),d=n("izu1Y"),u=n("27SDj"),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const m=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,f=i.keyframes`
  0% {
    top: 15px;
    opacity: 0;
  };
  100% {
    top: 0px;
    opacity: 1;
  };
`,g=i.default.div`
  animation-name: ${e=>e.animateText?f:"none"};
  animation-duration: ${e=>e.animateText?".5s":"0s"};
  position: relative;
`,h=(0,i.default)(u.Text)`
  margin: ${e=>e.margin};
`;h.defaultProps={margin:"20px auto 0 auto"};const y=(0,i.default)(u.Text)`
  margin: ${e=>e.margin};
`;y.defaultProps={margin:"15px 0px 0px 0px"};const w=i.default.div`
  position: relative;
  left: 38px;
  bottom: 22px;
`;var v,x;(x=v||(v={})).Medium="medium",x.Large="large",x.Small="small";const b={[v.Large]:30,[v.Medium]:28,[v.Small]:24},S={[v.Large]:34,[v.Medium]:34,[v.Small]:29},C={[v.Large]:18,[v.Medium]:16,[v.Small]:14},E=({className:t,icon:n,primaryText:r,secondaryText:a,headerStyle:i,showWarning:c=!1,showError:d=!1,animateText:u=!1})=>{i=null!=i?i:v.Medium;const p=b[i],f=S[i],x=C[i],E={[v.Large]:22,[v.Medium]:19,[v.Small]:17}[i],k="small"===i?"16px 0 0 0":void 0,T=d?s.ERROR_COLOR:"#777777";return e(o).createElement(m,{className:t},null!=n?n:e(o).createElement(l.IconUnknownOrigin,null),c?e(o).createElement(w,null,e(o).createElement(l.IconExclamationMarkCircle,null)):e(o).createElement(e(o).Fragment,null),e(o).createElement(g,{animateText:u},r&&e(o).createElement(h,{margin:k,weight:500,size:p,lineHeight:f,maxWidth:"320px"},r),a&&e(o).createElement(y,{margin:k,wordBreak:"break-word",size:x,lineHeight:E,color:T},a)))};E.defaultProps={headerStyle:v.Medium};const k=i.css`
  border-radius: 20px;
  width: 90px;
  height: 90px;
`,T=(0,i.default)(d.PImage)`
  ${k}
  object-fit: scale-down;
  filter: ${e=>e.showError?"grayscale(1)":"none"};
`,I=i.default.div`
  ${k}
`,A=t=>{var{tabId:n,iconUrl:r}=t,a=p(t,["tabId","iconUrl"]);const i=(0,c.useTabMeta)(n);let s=null==i?void 0:i.iconUrl;return r&&(s=r),e(o).createElement(E,Object.assign({icon:s?e(o).createElement(T,{showError:a.showError,src:s,fallback:e(o).createElement(l.IconUnknownOrigin,null),loader:e(o).createElement(I,null)}):e(o).createElement(I,null),primaryText:null==i?void 0:i.title},a))}})),n.register("eWzmJ",(function(e,r){t(e.exports,"useTabMeta",(function(){return s}),(function(e){return s=e}));var a=n("lofhi"),o=n("hulLf"),i=n("gcdBN"),c=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))};const s=e=>{const{value:t}=(0,a.default)((()=>c(void 0,void 0,void 0,(function*(){var t,n;if(void 0===e)return;const r=yield o.browser.tabs.get(e),a=yield(0,i.getTabMarkupMeta)(e);return{iconUrl:null!==(t=null==a?void 0:a.iconUrl)&&void 0!==t?t:null==r?void 0:r.favIconUrl,title:null!==(n=null==a?void 0:a.title)&&void 0!==n?n:null==r?void 0:r.title}}))),[e]);return null!=t?t:{}}})),n.register("lofhi",(function(e,r){t(e.exports,"default",(function(){return i}));var a=n("29o0l"),o=n("d6194");function i(e,t){void 0===t&&(t=[]);var n=(0,o.default)(e,t,{loading:!0}),r=n[0],i=n[1];return(0,a.useEffect)((function(){i()}),[i]),r}})),n.register("d6194",(function(e,r){t(e.exports,"default",(function(){return c}));var a=n("YZf6l"),o=n("29o0l"),i=n("3Y2rr");function c(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var r=(0,o.useRef)(0),c=(0,i.default)(),s=(0,o.useState)(n),l=s[0],d=s[1],u=(0,o.useCallback)((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var o=++r.current;return l.loading||d((function(e){return(0,a.__assign)((0,a.__assign)({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return c()&&o===r.current&&d({value:e,loading:!1}),e}),(function(e){return c()&&o===r.current&&d({error:e,loading:!1}),e}))}),t);return[l,u]}})),n.register("3Y2rr",(function(e,r){t(e.exports,"default",(function(){return o}));var a=n("29o0l");function o(){var e=(0,a.useRef)(!1),t=(0,a.useCallback)((function(){return e.current}),[]);return(0,a.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t}})),n.register("91Dw6",(function(e,n){t(e.exports,"WARNING_COLOR",(function(){return r})),t(e.exports,"DANGER_COLOR",(function(){return a})),t(e.exports,"ERROR_COLOR",(function(){return o}));const r="#FFDC62",a="#EB3742",o="#eb3742"})),n.register("izu1Y",(function(r,a){t(r.exports,"PImage",(function(){return d}),(function(e){return d=e}));var o=n("29o0l"),i=n("3YDVy"),c=n("gkfw3"),s=n("hiI91"),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const d=t=>{var{src:n,fallback:r,loader:a,onLoad:c,onError:s,loaderEnabled:d}=t,p=l(t,["src","fallback","loader","onLoad","onError","loaderEnabled"]);const[m,f]=(0,o.useState)("init"),[g,h]=(0,o.useState)(!1),y=(0,o.useMemo)((()=>function(e,t,n){if(e)return e.startsWith("data://")?e:"string"==typeof t||"string"==typeof n?(0,i.getImageThroughProxy)(e):t&&n?(0,i.getScaledImageURIExt)(e,t,n):t?(0,i.getScaledImageURI)(e,"width",t):n?(0,i.getScaledImageURI)(e,"height",n):(0,i.getImageThroughProxy)(e)}(n,p.width,p.height)),[p.height,p.width,n]),w=(0,o.useMemo)((()=>g?n:y),[n,y,g]),v=(0,o.useCallback)((e=>{g?(f("error"),null==s||s(e)):(f("retrying"),h(!0))}),[g,f,s,h]);return"error"!==m&&n?e(o).createElement(e(o).Fragment,null,e(o).createElement("img",Object.assign({src:w,onLoad:c,onError:v},p)),"loading"===m&&d&&e(o).createElement(e(o).Fragment,null,a||e(o).createElement(u,null))):e(o).createElement(e(o).Fragment,null,null!=r?r:null)},u=(0,c.default)(s.SkeletonLoader)`
  width: 100%;
  height: 100%;
`})),n.register("3YDVy",(function(e,r){t(e.exports,"getImageThroughProxy",(function(){return s})),t(e.exports,"getScaledImageURI",(function(){return l})),t(e.exports,"getScaledImageURIExt",(function(){return d}));var a,o,i=n("jF6Pg");(o=a||(a={})).NonFungible="NonFungible",o.SemiFungible="SemiFungible",o.Fungible="Fungible",o.NonFungibleEdition="NonFungibleEdition",o.ProgrammableNonFungible="ProgrammableNonFungible";const c=e=>(0,i.getDevicePixelRatio)()*e,s=(e,t=!1)=>`https://api.phantom.app/image-proxy/?image=${encodeURIComponent(e)}${t?"&anim=false":""}`,l=(e,t,n,r=!1)=>{const a=c(n);return`${s(e)}&fit=scale-down&${t}=${a}${r?"&anim=false":""}`},d=(e,t,n,r=!1)=>{const a=c(t),o=c(n);return`${s(e)}&fit=cover&width=${a}&height=${o}${r?"&anim=false":""}`}})),n.register("jF6Pg",(function(e,n){t(e.exports,"getDevicePixelRatio",(function(){return r}));const r=()=>(null===window||void 0===window?void 0:window.devicePixelRatio)||1})),n.register("hiI91",(function(e,r){t(e.exports,"SkeletonLoader",(function(){return i}));var a=n("gkfw3");const o=a.keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`,i=a.default.div`
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
`})),n.register("efSU2",(function(r,a){t(r.exports,"ConnectHardwareMultichainOpenApp",(function(){return O}),(function(e){return O=e}));var o=n("4xbAj"),i=n("jZpRu"),c=n("iOvk1"),s=n("3ljHn"),l=n("eJxop"),d=n("43063"),u=n("7mQ3Y"),p=n("g9PKp"),m=n("29o0l"),f=n("gkfw3"),g=n("creZv"),h=n("gX5Te"),y=n("gcdBN"),w=n("hFkH3"),v=n("cGJ3C"),x=n("cb8KS"),b=n("kFW5d"),S=n("3mrWC"),C=n("bhnmm"),E=n("27SDj"),k=n("6NY04"),T=n("V2q0K"),I=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((r=r.apply(e,t||[])).next())}))};const A=f.default.div`
  align-self: center;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 80px;
  padding: 8px 16px;
  max-width: 150px;
`,H=f.default.div`
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
`,O=()=>{const t=(0,T.useHardwareOnboardingStore)((e=>e.chainImportStep)),n=(0,T.useHardwareOnboardingStore)((e=>e.setIncrementChainImportStep)),r=(0,T.useHardwareOnboardingStore)((e=>e.selectedChains)),a=(0,T.useHardwareOnboardingStore)((e=>e.selectedChainsMap)),f=(0,T.useHardwareOnboardingStore)((e=>e.pushStep)),D=(0,T.useHardwareOnboardingStore)((e=>e.pushSubStep)),P=(0,T.useHardwareOnboardingStore)((e=>e.setDiscoveredAccounts)),B=(0,T.useHardwareOnboardingStore)((e=>e.setDerivedAccountGroups)),M=(0,m.useRef)(T.useHardwareOnboardingStore.getState().derivedAccountGroups),{t:F,i18n:j}=(0,d.useTranslation)(),N=r[t-1],{data:L=[],isFetched:$,isError:R}=h.hooks.useAllMultiChainAccounts(),[W,U]=(0,m.useState)(!1),_=(0,m.useMemo)((()=>{const e=[],t=a.get(N)||{};for(const[n,r]of Object.entries(t))r&&e.push(n);return e}),[N,a]),{chainNameTextOr:K,chainNameTextAnd:q}=(0,m.useMemo)((()=>{const e=_.map((e=>c.Chains.getChainName(e))),t=new Intl.ListFormat(j.resolvedLanguage,{style:"long",type:"disjunction"}),n=new Intl.ListFormat(j.resolvedLanguage,{style:"long",type:"conjunction"});return{chainNameTextOr:t.format(e),chainNameTextAnd:n.format(e)}}),[_,j]),V=(0,m.useMemo)((()=>_.map((t=>e(m).createElement(v.ChainLogo,{key:t,networkID:t,width:90,height:90,strokeWidth:1})))),[_]);(0,m.useEffect)((()=>{const e=T.useHardwareOnboardingStore.subscribe((e=>M.current=e.derivedAccountGroups));return()=>e()}),[]);const z=(0,m.useMemo)((()=>{const e=[];switch(N){case u.AddressType.Solana:e.push({pathType:i.DerivationPathType.Bip44RootSolana});break;case u.AddressType.EVM:e.push({pathType:i.DerivationPathType.Bip44RootEthereum});case u.AddressType.BitcoinTaproot:case u.AddressType.BitcoinNativeSegwit:case u.AddressType.BitcoinNestedSegwit:case u.AddressType.BitcoinLegacy:}for(let t=0;t<19;++t)switch(N){case u.AddressType.Solana:e.push({index:t,pathType:i.DerivationPathType.Bip44ChangeSolana}),e.push({index:t,pathType:i.DerivationPathType.Bip44Solana});break;case u.AddressType.EVM:e.push({index:t,pathType:i.DerivationPathType.Bip44Ethereum}),e.push({index:t,pathType:i.DerivationPathType.Bip44EthereumSecondary});break;case u.AddressType.BitcoinTaproot:case u.AddressType.BitcoinNativeSegwit:case u.AddressType.BitcoinNestedSegwit:case u.AddressType.BitcoinLegacy:e.push({index:t,pathType:i.DerivationPathType.BitcoinTaproot},{index:t,pathType:i.DerivationPathType.BitcoinNativeSegwit})}return e}),[N]),[G,Y]=(0,m.useState)(!0),{data:Q=l.LEDGER_NOT_CONNECTED_STATE}=h.hooks.useLedgerWireTransportState(G,!0),{data:[J]}=(0,s.useFeatureFlags)(["kill-ledger-xpub-derivation"]),{data:Z,error:X,fetchStatus:ee,refetch:te}=h.hooks.useLedgerAddresses(Q,z,!0,!J),ne="fetching"===ee,re=!Q.isConnected&&"reconnecting"!==Q.status,[ae,oe]=(0,m.useState)(!1),{data:ie,refetch:ce}=h.hooks.useRequestLedgerPermission(ae,!0);(0,m.useEffect)((()=>{re&&Y(!1)}),[re]),(0,m.useEffect)((()=>{"granted"===(null==ie?void 0:ie.type)&&(Y(!0),oe(!1))}),[ie]);const se=(0,m.useCallback)((()=>I(void 0,void 0,void 0,(function*(){var n;if(Z&&Object.keys(Z).length){const a=[...M.current];let i=0;for(const e of Object.values(Z)){const t=null!==(n=a[i])&&void 0!==n?n:{accounts:{}},r={accounts:Object.assign({},t.accounts),derivationIndex:z[i].index};switch(e.addressType){case u.AddressType.EVM:_.includes(c.NetworkIDs.Polygon.Mainnet)&&(r.accounts[`${c.NetworkIDs.Polygon.Mainnet}-${e.address}`]={chainType:e.addressType,chainId:c.NetworkIDs.Polygon.Mainnet,address:e.address,publicKey:e.publicKey,pathParams:z[i]}),_.includes(c.NetworkIDs.Ethereum.Mainnet)&&(r.accounts[`${c.NetworkIDs.Ethereum.Mainnet}-${e.address}`]={chainType:e.addressType,chainId:c.NetworkIDs.Ethereum.Mainnet,address:e.address,publicKey:e.publicKey,pathParams:z[i]});break;case u.AddressType.Solana:r.accounts[`${c.NetworkIDs.Solana.Mainnet}-${e.address}`]={chainType:e.addressType,address:e.address,publicKey:e.publicKey,chainId:c.NetworkIDs.Solana.Mainnet,pathParams:z[i]};break;case u.AddressType.BitcoinTaproot:case u.AddressType.BitcoinNativeSegwit:case u.AddressType.BitcoinNestedSegwit:case u.AddressType.BitcoinLegacy:r.accounts[`${c.NetworkIDs.Bitcoin.Mainnet}-${e.address}`]={chainType:e.addressType,address:e.address,publicKey:e.publicKey,chainId:c.NetworkIDs.Bitcoin.Mainnet,pathParams:z[i]}}a[i]=r,i++}if(B(a),$&&r.length===t){U(!0);const t=(e=>{const t=new Set;for(const n of e)for(const{address:e}of n.addresses)t.add(e);return t})(L),n=a.reduce(((e,n)=>{let r=!1;for(const{address:e}of Object.values(n.accounts))r=r||t.has(e);return r||e.push(n),e}),[]),r=[],i=[];for(let e=0;e<n.length;e+=p.BATCH_SIZE_BY_PLATFORM.extension){const t=n.slice(e,e+p.BATCH_SIZE_BY_PLATFORM.extension).map((e=>Object.entries(e.accounts).reduce(((e,[t,n])=>(e[t]={account:n},e)),{})));i.push(t)}for(const e of i)r.push((0,p.discoverAccounts)(e));const c=(yield Promise.all(r)).flat().map((e=>{switch(e.status){case"discovered":return Object.assign(Object.assign({},e),{accounts:e.accounts.filter((e=>e.hasAccountActivity||(0,o.isRecommendedDerivationPathType)(e.derivationPathType)))});case"undiscovered":return Object.assign(Object.assign({},e),{accounts:e.accounts.filter((e=>(0,o.isRecommendedDerivationPathType)(e.derivationPathType)))})}})).filter((e=>e.accounts.length>0)).map((e=>{const t=(0,g.default)();return Object.assign(Object.assign({},e),{discoveryIdentifier:t})})),s=c.filter((e=>"undiscovered"===e.status||e.isSelectedByDefault)),l=c.filter((e=>!("undiscovered"===e.status||e.isSelectedByDefault))).slice(0,2),d=s.length>0,u=L.filter((e=>e.type===o.AccountType.Ledger)).length,h=(d?[...s,...l]:c.filter((e=>!e.accounts.some((e=>!(0,o.isRecommendedDerivationPathType)(e.derivationPathType))))).slice(0,3)).map(((e,t)=>Object.assign(Object.assign({},e),{accountIndex:u+t})));P(h,d),f(e(m).createElement(k.ConnectHardwareMultichainImportAccount,{preventBack:!0}))}}}))),[Z,B,$,r.length,t,z,_,L,P,f]);let le,de,ue,pe;(0,m.useEffect)((()=>{Z&&Object.keys(Z).length===z.length&&(se(),r.length!==t&&(n(),D(e(m).createElement(O,{preventBack:!0}))))}),[Z,z,f,D,t,r,se,n]);let me=()=>{};return R?(le=e(m).createElement(x.ConfirmationIcon,{type:x.ConfirmationIconType.Failure}),de=F("connectHardwareErrorLedgerGeneric"),ue=F("connectHardwareErrorLedgerPhantomLocked"),me=()=>I(void 0,void 0,void 0,(function*(){const e=yield(0,y.getCurrentTabAsync)();void 0!==e.id&&(0,y.closeTabAsync)(e.id)})),pe=F("commandClose")):ie&&"granted"!==ie.type?(le=e(m).createElement(x.ConfirmationIcon,{type:x.ConfirmationIconType.Warning}),de=F("connectHardwarePermissionDeniedPrimary"),ue=F("connectHardwarePermissionDeniedSecondary"),pe=F("homeErrorButtonText"),me=ce):re?(le=e(m).createElement(x.ConfirmationIcon,{type:x.ConfirmationIconType.Warning}),de=F("connectHardwarePermissionUnableToConnect"),ue=F("connectHardwarePermissionUnableToConnectDescription"),pe=F("commandConnect"),me=ce):X instanceof l.LedgerLockedError?(le=e(m).createElement(x.ConfirmationIcon,{type:x.ConfirmationIconType.Failure}),de=F("connectHardwareErrorLedgerLocked"),ue=F("connectHardwareErrorLedgerLockedDescription"),pe=F("homeErrorButtonText"),me=te):X?(le=e(m).createElement(x.ConfirmationIcon,{type:x.ConfirmationIconType.Failure}),de=F("connectHardwareErrorLedgerGeneric"),ue=F("connectHardwareErrorLedgerGenericDescription"),pe=F("homeErrorButtonText"),me=te):"reconnecting"==Q.status?(le=e(m).createElement(x.ConfirmationIcon,{defaultIcon:e(m).createElement(C.SpinnerIcon,null),type:x.ConfirmationIconType.Default}),de=F("connectHardwareConnecting"),ue=F("connectHardwareConnectingDescription")):W?(le=e(m).createElement(x.ConfirmationIcon,{defaultIcon:e(m).createElement(C.SpinnerIcon,null),type:x.ConfirmationIconType.Default}),de=F("connectHardwareDiscoveringAccounts"),ue=F("connectHardwareDiscoveringAccountsDescription")):ne?(le=e(m).createElement(x.ConfirmationIcon,{defaultIcon:e(m).createElement(C.SpinnerIcon,null),type:x.ConfirmationIconType.Default}),de=F("connectHardwareConnectingAccounts"),ue=F("connectHardwareFindingAccountsWithActivity",{chainName:q})):(le=e(m).createElement(H,{logoCount:V.length},V),de=F("connectHardwareOpenAppInterpolated",{app:K}),ue=F("connectHardwareOpenAppDescription")),e(m).createElement(b.ConnectHardwareStepContainer,null,e(m).createElement(S.IconHeader,{icon:le,primaryText:de,headerStyle:S.IconHeaderStyle.Large,secondaryText:ue}),pe?e(m).createElement(w.Button,{onClick:me,theme:"primary"},pe):e(m).createElement(A,null,e(m).createElement(E.Text,{color:"#999999",size:14},F("connectHardwareAccountsStepOfSteps",{stepNum:t,totalSteps:r.length}))))}})),n.register("6NY04",(function(r,a){t(r.exports,"ConnectHardwareMultichainImportAccount",(function(){return y}));var o=n("43063"),i=n("29o0l"),c=n("gkfw3"),s=n("hFkH3"),l=n("cb8KS"),d=n("kFW5d"),u=n("3mrWC"),p=n("2QUtj"),m=n("eNcWQ"),f=n("V2q0K");const g=c.default.div`
  margin-bottom: 35px;
`,h=(0,c.default)(s.Button)`
  margin-bottom: 10px;
`,y=()=>{const t=(0,f.useHardwareOnboardingStore)((e=>e.discoveredAccounts)),n=(0,f.useHardwareOnboardingStore)((e=>e.activeAccountsFound)),r=(0,f.useHardwareOnboardingStore)((e=>e.setSelectedAccounts)),a=(0,f.useHardwareOnboardingStore)((e=>e.pushSubStep)),{t:c}=(0,o.useTranslation)(),y=(0,i.useMemo)((()=>{let e;if(n){const n=t.filter((e=>"undiscovered"===e.status||e.isSelectedByDefault));e=c(1===n.length?"connectHardwareFoundAccountsWithActivitySingular":"connectHardwareFoundAccountsWithActivity",{numOfAccounts:n.length})}else e=c("connectHardwareFoundSomeAccounts");return e}),[n,c,t]),w=(0,i.useCallback)((()=>{a(e(i).createElement(m.ConnectHardwareMultichainSelectAccounts,{activeAccounts:t}))}),[a,t]),v=(0,i.useCallback)((()=>{a(e(i).createElement(p.ConnectHardwareMultichainImportConfirmation,{preventBack:!0}))}),[a]);return(0,i.useEffect)((()=>{const e=t.reduce(((e,t,n)=>(("discovered"===t.status&&t.isSelectedByDefault||0===n)&&(e[t.discoveryIdentifier]=!0),e)),{});r(e)}),[t,r,n,c]),e(i).createElement(d.ConnectHardwareStepContainer,null,e(i).createElement(g,null,e(i).createElement(u.IconHeader,{icon:e(i).createElement(l.ConfirmationIcon,{type:l.ConfirmationIconType.Success}),primaryText:c("connectHardwareConnectAccounts"),headerStyle:u.IconHeaderStyle.Large,secondaryText:y})),e(i).createElement(h,{onClick:w,theme:"default"},c("connectHardwareSelectAccounts")),e(i).createElement(s.Button,{onClick:v,theme:"primary"},c("commandContinue")))}})),n.register("2QUtj",(function(r,a){t(r.exports,"ConnectHardwareMultichainImportConfirmation",(function(){return f}));var o=n("jZpRu"),i=n("43063"),c=n("29o0l"),s=n("gX5Te"),l=n("hFkH3"),d=n("cb8KS"),u=n("kFW5d"),p=n("3mrWC"),m=n("V2q0K");const f=()=>{const t=(0,m.useHardwareOnboardingStore)((e=>e.discoveredAccounts)),n=(0,m.useHardwareOnboardingStore)((e=>e.selectedAccounts)),{t:r}=(0,i.useTranslation)(),{mutateAsync:a}=s.hooks.useConnectLedgerAccounts(),{mutateAsync:f}=s.hooks.useUpdateVisibleBitcoinAddressTypes(),[g,h]=(0,c.useState)(!1),y=(0,c.useMemo)((()=>t.filter((e=>!!n[e.discoveryIdentifier]))),[t,n]);return(0,c.useEffect)((()=>{if(y.length){const e=[],t=new Set;for(const n of y){const{accounts:r,seedIndex:a,accountIndex:i}=n,c=[],s=[];for(const e of r)(0,o.isBitcoinDerivationPathType)(e.derivationPathType)?(s.push({pathType:e.derivationPathType,value:e.publicKey}),"amount"in e&&0===parseFloat(e.amount)||t.add(e.chainType)):((0,o.isEVMDerivationPathType)(e.derivationPathType)||(0,o.isSolanaDerivationPathType)(e.derivationPathType))&&c.push({pathType:e.derivationPathType,value:e.address});e.push({derivationIndex:a,addresses:c,publicKeys:s,accountIndex:i})}a({accounts:e}).then((()=>{t.size>0&&f({addressTypes:Array.from(t)})})).finally((()=>h(!0)))}else h(!0)}),[y,a,f]),e(c).createElement(u.ConnectHardwareStepContainer,null,e(c).createElement(p.IconHeader,{icon:e(c).createElement(d.ConfirmationIcon,{type:d.ConfirmationIconType.Success}),primaryText:r("connectHardwareAccountsAddedInterpolated",{numOfAccounts:y.length}),headerStyle:p.IconHeaderStyle.Large,secondaryText:r("connectHardwareFinishSecondaryText")}),e(c).createElement(l.Button,{onClick:()=>{window.close()},theme:"primary",disabled:!g},r("pastParticipleDone")))}})),n.register("V2q0K",(function(r,a){t(r.exports,"useHardwareOnboardingStore",(function(){return l}));var o=n("RVqnc"),i=n("1I4L6"),c=n("gTwcH");const s={hardwareStepStack:[],hardwareStepSubStack:{},selectedChains:[],selectedChainsMap:new Map,chainImportStep:1,derivedAccountGroups:[],discoveredAccounts:[],activeAccountsFound:!1,selectedAccounts:{}},l=e(c)(((e,t)=>Object.assign(Object.assign({},s),{pushStep:n=>{const r=t().hardwareStepStack;e({hardwareStepStack:r.concat(n)})},popStep:()=>{var n;const r=t().hardwareStepStack.length-1;if((null!==(n=t().hardwareStepSubStack[r])&&void 0!==n?n:[]).length)return e((0,i.default)((e=>{e.hardwareStepSubStack[r]=e.hardwareStepSubStack[r].slice(0,-1)})));e((0,i.default)((e=>{e.hardwareStepStack=e.hardwareStepStack.slice(0,-1)})))},pushSubStep:n=>{var r;const a=t().hardwareStepStack.length-1,o=null!==(r=t().hardwareStepSubStack[a])&&void 0!==r?r:[];e((0,i.default)((e=>{e.hardwareStepSubStack[a]=o.concat([n])})))},currentStep:()=>{var e;const n=t().hardwareStepStack,r=t().hardwareStepSubStack,a=n.length>0?n.length-1:n.length;return(null===(e=r[a])||void 0===e?void 0:e.length)?(0,o.getLast)(r[a]):(0,o.getLast)(n)},setSelectedChains:(t,n)=>{e({selectedChains:t,selectedChainsMap:n})},setDecrementChainImportStep:()=>{const n=t().chainImportStep;e({chainImportStep:n-1})},setIncrementChainImportStep:()=>{const n=t().chainImportStep;e({chainImportStep:n+1})},setDerivedAccountGroups:t=>{e({derivedAccountGroups:t})},setDiscoveredAccounts:(t,n)=>{e({discoveredAccounts:t,activeAccountsFound:n})},selectAccount:n=>{const r=t().selectedAccounts,a=Object.assign({},r);a[n]=!0,e({selectedAccounts:a})},deselectAccount:n=>{const r=t().selectedAccounts,a=Object.assign({},r);delete a[n],e({selectedAccounts:a})},setSelectedAccounts:t=>{e({selectedAccounts:t})}})))})),n.register("eNcWQ",(function(r,a){t(r.exports,"ConnectHardwareMultichainSelectAccounts",(function(){return g}));var o=n("43063"),i=n("29o0l"),c=n("gkfw3"),s=n("hFkH3"),l=n("kFW5d"),d=n("ghHB9"),u=n("27SDj"),p=n("2QUtj"),m=n("V2q0K");const f=(0,c.default)(u.Text)`
  margin-top: 15px;
`,g=({activeAccounts:t})=>{const n=(0,m.useHardwareOnboardingStore)((e=>e.selectedAccounts)),r=(0,m.useHardwareOnboardingStore)((e=>e.selectAccount)),a=(0,m.useHardwareOnboardingStore)((e=>e.deselectAccount)),c=(0,m.useHardwareOnboardingStore)((e=>e.pushSubStep)),{t:g}=(0,o.useTranslation)(),h=(0,i.useMemo)((()=>0===Object.values(n).filter((e=>!!e)).length),[n]),y=(0,i.useCallback)((()=>{c(e(i).createElement(p.ConnectHardwareMultichainImportConfirmation,{preventBack:!0}))}),[c]);return e(i).createElement(l.ConnectHardwareStepContainer,null,e(i).createElement("div",{style:{marginBottom:15}},e(i).createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:30}},e(i).createElement(u.Text,{weight:500,size:30,lineHeight:34,maxWidth:"320px"},g("connectHardwareSelectAccounts")),e(i).createElement(f,{wordBreak:"break-word",size:18,lineHeight:22,color:"#777777"},g("connectHardwareChooseAccountsToConnect"))),e(i).createElement("div",{style:{maxHeight:420,overflowY:"scroll"}},t.map((({accounts:t,discoveryIdentifier:o,accountIndex:c})=>{const s=!!n[o];return e(i).createElement(d.ImportAccountRow,{key:o,accountType:"ledger",accounts:t,accountIndex:c,checked:s,onPress:()=>{s?a(o):r(o)}})})))),e(i).createElement(s.Button,{onClick:y,theme:"primary",disabled:h},g("commandContinue")))}})),n.register("ghHB9",(function(r,a){t(r.exports,"ImportAccountRow",(function(){return f}));var o=n("43063"),i=n("29o0l"),c=n("Nt4tV"),s=n("gkfw3"),l=n("cGJ3C"),d=n("lLNMU"),u=n("7bRVh"),p=n("27SDj");const m=({account:t})=>{const{t:n}=(0,o.useTranslation)();return e(i).createElement(b,null,e(i).createElement(h,null,e(i).createElement(l.ChainLogo,{networkID:t.chain.id,height:40,width:40,spacing:"large"})),e(i).createElement(y,null,e(i).createElement(v,null,e(i).createElement(u.TokenNameBadge,{networkID:t.chain.id,walletAddress:t.address},e(i).createElement(S,null,t.chain.name)),e(i).createElement(S,null,(0,c.formatHashMedium)(t.address,4))),e(i).createElement(w,null,"amount"in t&&"chain"in t?e(i).createElement(C,null,(0,c.formatTokenAmount)(t.amount)," ",t.chain.symbol):null,"amount"in t?e(i).createElement(C,null,t.lastActivityTimestamp?n("onboardingImportAccountsLastActive",{formattedTimestamp:(0,c.formatTimestampFromNow)(1e3*t.lastActivityTimestamp,!0)}):n("onboardingImportAccountsCreateNew")):null)))},f=e(i).memo((({accountType:t,accounts:n,checked:r,accountIndex:a,onPress:c})=>{const{t:s}=(0,o.useTranslation)(),l=a+1;return e(i).createElement(g,null,e(i).createElement(x,null,e(i).createElement(S,null,((e,t,n)=>{switch(t){case"seed":return e("onboardingImportAccountsAccountName",{walletIndex:n});case"ledger":return e("onboardingImportAccountsLedgerAccountName",{walletIndex:n})}})(s,t,l)),e(i).createElement(d.Checkbox,{checked:r,onChange:c})),n.map(((t,n)=>e(i).createElement(m,{key:`${t.address}-${n}`,account:t}))))})),g=s.default.div`
  margin-bottom: 24px;
  width: 100%;
`,h=s.default.div`
  flex-shrink: 0;
  margin-right: 10px;
`,y=s.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,w=s.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,v=(0,s.default)(w)`
  margin-bottom: 2px;
`,x=(0,s.default)(w)`
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
`,S=(0,s.default)(p.Text).attrs({size:16,lineHeight:19,weight:600})``,C=(0,s.default)(p.Text).attrs({size:14,lineHeight:17,weight:400,color:"#777777"})``})),n.register("ivB1q",(function(r,a){t(r.exports,"ConnectHardwareMultichainSelectChain",(function(){return E}));var o=n("iOvk1"),i=n("3ljHn"),c=n("43063"),s=n("29o0l"),l=n("gkfw3"),d=n("gX5Te"),u=n("cI6uH"),p=n("hFkH3"),m=n("cGJ3C"),f=n("lLNMU"),g=n("kFW5d"),h=n("27SDj"),y=n("efSU2"),w=n("V2q0K");const v=l.default.div`
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
`,C=({networkID:t,icon:n,onPressChain:r,isChecked:a})=>e(s).createElement(v,{onClick:()=>{r(t)}},e(s).createElement(S,null,e(s).createElement(x,null,n),e(s).createElement(h.Text,{size:16,weight:600},o.Chains.getNetworkName(t))),e(s).createElement(f.Checkbox,{checked:a})),E=()=>{const{pushSubStep:t,selectedChains:n,setSelectedChains:r,selectedChainsMap:a}=(0,w.useHardwareOnboardingStore)(),l=d.hooks.useEnabledNetworkIDs(),f=d.hooks.useEnabledAddressTypes(),{data:[v]}=(0,i.useFeatureFlags)(["enable-bitcoin-ledger"]),x=(0,s.useMemo)((()=>v?f:f.filter((e=>!o.Chains.getAddressTypes(o.BitcoinNetworkID.Mainnet).includes(e)))),[f,v]),S=(0,s.useMemo)((()=>v?l:l.filter((e=>!o.Chains.isBitcoinNetworkID(e)))),[l,v]),{t:E}=(0,c.useTranslation)(),k=(0,s.useCallback)((e=>{const t=new Map(a),n=o.Chains.getAddressTypes(e);for(const r of n){const n=a.get(r),o=null==n?void 0:n[e];t.set(r,Object.assign(Object.assign({},n),{[e]:!o}))}const i=x.filter((e=>{const n=t.get(e)||{};return Object.values(n).reduce(((e,t)=>t?++e:e),0)>0}));r(i,t)}),[x,r,a]);(0,u.useEffectOnce)((()=>{const e=new Map;for(const t of x)e.set(t,{});for(const t of S){const n=o.Chains.getAddressTypes(t);for(const r of n){const n=e.get(r);e.set(r,Object.assign(Object.assign({},n),{[t]:!1}))}}r(n,e)}),x.length>0&&S.length>0);const T=(0,s.useMemo)((()=>S.map((t=>{const n=o.Chains.getAddressTypes(t);let r=!1;for(const e of n){const n=a.get(e);r=(null==n?void 0:n[t])||r}return e(s).createElement(C,{key:t,icon:e(s).createElement(m.ChainLogo,{networkID:t,width:40,height:40,stroke:""}),networkID:t,onPressChain:k,isChecked:r})}))),[S,a,k]),I=(0,s.useMemo)((()=>{let e=0;for(const t of a.values())e+=Object.values(t).reduce(((e,t)=>t?++e:e),0);return 0===e}),[a]);return e(s).createElement(g.ConnectHardwareStepContainer,null,e(s).createElement("div",null,e(s).createElement(h.Text,{weight:500,size:28,lineHeight:34},E("connectHardwareSelectChains")),e(s).createElement(b,null,T)),e(s).createElement(p.Button,{onClick:()=>{t(e(s).createElement(y.ConnectHardwareMultichainOpenApp,{preventBack:!0}))},theme:"primary",disabled:I},E("commandContinue")))}})),n.register("cI6uH",(function(e,r){t(e.exports,"useEffectOnce",(function(){return o}));var a=n("29o0l");const o=(e,t)=>{const n=(0,a.useRef)(!1);(0,a.useEffect)((()=>{if(!n.current&&t)return n.current=!0,e()}))}})),n.register("3Kg4v",(function(e,n){t(e.exports,"TOTAL_CONNECT_HARDWARE_STEPS",(function(){return r}));const r=3}))}();
//# sourceMappingURL=ConnectHardwareMultichainFlow.727b05bc.js.map
define=__define;})(window.define);