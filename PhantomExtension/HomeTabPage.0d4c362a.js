(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;n.register("bNkV0",(function(a,i){var l;l=a.exports,Object.defineProperty(l,"__esModule",{value:!0,configurable:!0}),t(a.exports,"default",(function(){return z}),(function(e){return z=e}));var o=n("6Tvfa"),r=n("belzv"),s=n("lBuGR"),c=n("gYh0e"),u=n("lMzyG"),d=n("8NH57"),g=n("4y59b"),m=n("fvKRK"),p=n("lDSNw"),h=n("5jGDu"),f=n("cyeOH"),b=n("44I6u"),x=n("bKtYH"),k=n("6ha3o"),y=n("aXzxc"),v=n("eQcMe"),w=n("7J3aJ"),E=n("hnhp8"),S=n("e9bgh"),A=n("iKm61"),T=n("iTDlK"),M=n("gMNJN"),C=n("2LZGp"),D=n("1j4wJ"),B=n("h5kyv"),F=n("8egSn"),I=function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function r(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))};const L=e(p).memo((({fungibles:t,isMainnet:n,onMouseEnter:a})=>{var i;const{t:l}=(0,u.useTranslation)(),{pushDetailView:o}=(0,k.useDetailViews)(),s=(0,p.useRef)(document.getElementById("tab-content"));(0,p.useEffect)((()=>{const e=document.getElementById("tab-content");e&&(s.current=e)}),[]);const c=(0,p.useCallback)((({networkID:t,chainName:n,fungibleKey:a,name:i,symbol:l,tokenAddress:s,type:c,walletAddress:u})=>{B.analytics.capture("assetDetailClick",{asset:{type:"fungible",chain:n,isNativeOfType:n,address:s},data:{networkId:t,chainId:r.Chains.getChainID(t)}}),o(e(p).createElement(F.FungibleDetailPage,{networkID:t,chainName:n,name:i,symbol:l,fungibleKey:a,tokenAddress:s,type:c,walletAddress:u}))}),[o]),d=(0,p.useCallback)((({key:i,index:o,style:r})=>{const s=Math.min(o+1,t.length),u=[];for(let i=o;i<s;i++){const r=t[i],s=r.type,{chain:d,name:g,symbol:m,key:h,tokenAddress:f,walletAddress:b}=r.data,x=null!=g?g:l("assetDetailUnknownToken");u.push(e(p).createElement(E.FungibleTokenRow,Object.assign({},(0,E.fungibleToProps)(r),{key:`${h}-${o}`,onClick:()=>c({networkID:d.id,chainName:d.name,fungibleKey:h,name:x,symbol:m,tokenAddress:f,type:s,walletAddress:b}),onMouseEnter:a,showBalance:!0,showCurrencyValues:n})))}return e(p).createElement("div",{key:i,style:r},u)}),[t,n,c,a,l]);return e(p).createElement(h.WindowScroller,{scrollElement:null!==(i=s.current)&&void 0!==i?i:void 0},(({height:n=0,isScrolling:a,registerChild:i,scrollTop:l})=>e(p).createElement(h.AutoSizer,{disableHeight:!0,style:{width:"100%"}},(({width:o})=>e(p).createElement("div",{ref:i},e(p).createElement(h.List,{autoHeight:!0,width:o,height:n,scrollTop:l,isScrolling:a,rowCount:t.length,rowHeight:E.FUNGIBLE_TOKEN_ROW_HEIGHT+10,rowRenderer:d}))))))})),N=(0,g.toMilliseconds)({seconds:5}),P=(0,g.toMilliseconds)({seconds:10});var z=()=>{const{data:t,isHidingAllFungibles:n,isLoading:a,isErrorTokens:i,isReadOnlyAccount:l,refetch:r,disableActionBanners:g,showHelloBitcoinModal:h}=(()=>{const e=(0,m.useQueryClient)(),{showDepositListModal:t,showFungibleVisibilityModal:n,showBuyFungibleSelectionModal:a,showSendFungibleSelectionModal:i}=(0,y.useLegacyModals)(),{handleShowModalVisibility:l,handleHideModalVisibility:r}=(0,C.useModals)(),{data:[g,h]}=(0,s.useFeatureFlags)(["kill-action-banners","enable-bitcoin"]),{isOpen:f}=(0,v.useMenu)(),{isOpen:b}=(0,w.useSettingsMenu)(),{isBitcoinEnabled:x}=M.hooks.useEnabledChainsInfo(),{data:k,isSuccess:E}=M.hooks.useHasSeenInterstitial(d.InterstitialFeature.HelloBitcoin),S=!f&&!b&&h&&x&&E&&!k,{t:A}=(0,u.useTranslation)(),T=(0,p.useMemo)((()=>({manageTokenList:A("homeManageTokenList"),receive:A("commandReceive"),send:A("commandSend"),buy:A("commandBuy"),errorTitle:A("homeErrorTitle"),errorDescription:A("homeErrorDescription"),errorButton:A("homeErrorButtonText")})),[A]);M.hooks.useHomeViewState();const{data:B}=M.hooks.useSelectedMultiChainAccount(),{accountBalance:F,accountId:L}=(0,p.useMemo)((()=>{var e,t;return{accountBalance:null===(e=null==B?void 0:B.balance)||void 0===e?void 0:e.value,accountId:null!==(t=null==B?void 0:B.identifier)&&void 0!==t?t:""}}),[B]),z=null==B?void 0:B.isReadOnly,H=!M.hooks.useIsTestnetMode(),R=(0,c.useFungiblesStore)((e=>e.resetSendSlice));(0,p.useEffect)((function(){L&&R()}),[L,R]);const{fungibles:O,visibilityOverrides:V,portfolio:$,isHidingAllFungibles:j,isLoadingVisibilityOverrides:W,isLoadingTokens:G,isLoadingPrices:U,isErrorTokens:Z,refetch:K}=M.hooks.useFungibles({useTokenQueryOptions:{staleTime:N,refetchInterval:P}}),{mutate:_}=M.hooks.useSetMultiChainAccountBalance();(0,o.useSetAccountBalanceEffect)({accountBalance:F,accountId:L,value:$.value,setAccountBalance:_});const J=M.hooks.useSelectedNetworks();(0,D.useWalletBalanceAnalytics)(O,J,L);const Y=(0,p.useCallback)((()=>I(void 0,void 0,void 0,(function*(){return yield(0,c.prefetchSPLTokenMap)(e)}))),[e]),Q=(0,p.useMemo)((()=>O.filter((e=>!(0,c.isHiddenMint)(V,{key:e.data.key})))),[O,V]);return{data:(0,p.useMemo)((()=>({fungibles:Q,earnings:$.earnings,value:$.value,isMainnet:H,translations:T,showDepositListModal:t,showBuyFungibleSelectionModal:a,showSendFungibleSelectionModal:i,showFungibleVisibilityModal:n,handlePrefetchSPLTokenMap:Y,handleShowModalVisibility:l,handleHideModalVisibility:r})),[Q,$,n,T,H,a,t,i,Y,l,r]),isHidingAllFungibles:j,isLoading:W||G||U,isErrorTokens:Z,isReadOnlyAccount:z,refetch:K,disableActionBanners:g,showHelloBitcoinModal:S}})(),{fungibles:k,translations:E,isMainnet:B,earnings:F,value:z,showDepositListModal:H,showBuyFungibleSelectionModal:R,showSendFungibleSelectionModal:O,handlePrefetchSPLTokenMap:V,handleShowModalVisibility:$}=t,{manageTokenList:j,receive:W,send:G,buy:U,errorTitle:Z,errorDescription:K,errorButton:_}=E,J=k.length>0;return(0,p.useEffect)((()=>{h&&$("helloBitcoin")}),[$,h]),e(p).createElement(b.Column,{align:"center"},e(p).createElement(S.Header,{earnings:F,value:z,buyButtonText:U,receiveButtonText:W,hasFungibles:J,isErrorTokens:i,isLoading:a,isHidingAllFungibles:n,isReadOnlyAccount:l,sendButtonText:G,showDollarValues:B,prefetchSPLTokenMap:V,showSendFungibleSelectionModal:O,showDepositListModal:H,showBuyFungibleSelectionModal:R}),!l&&!g&&e(p).createElement(f.ActionBanners,null),a?[1,2,3].map((t=>e(p).createElement(x.RowSkeletonLoader,{key:`fungible-token-row-loader-${t}`}))):J?e(p).createElement(L,{fungibles:k,isMainnet:B,onMouseEnter:V}):n?null:e(p).createElement(A.HomeError,{title:Z,description:K,buttonText:_,refetch:r}),a?null:J||n?e(p).createElement(T.ManageTokenListButton,{buttonText:j,onClick:()=>$("fungibleVisibility")}):null)}})),n.register("cyeOH",(function(a,i){t(a.exports,"ActionBanners",(function(){return w}));var l=n("8NH57"),o=n("lDSNw"),r=n("lQxWu"),s=n("cZIbv"),c=n("gMNJN"),u=n("c3wGO"),d=n("d1qx3"),g=n("aanFI"),m=n("3ou76"),p=n("57LGC"),h=n("eayxI");const f=s.default.div`
  height: 0;
  transition: height 0.2s ease-in-out;
  width: 100%;
  ${e=>e.animate?"height: "+(e.shouldCollapse?"100px":"120px"):""}
`,b=s.default.div`
  transition: transform 0.5s ease;
  width: 100%;
`,x=(0,s.default)(m.IconBackground)``,k=s.default.div`
  visibility: ${e=>e.isVisible?"visible":"hidden"};
`,y=s.default.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,v=e(o).memo((({banners:t,currentIndex:n,hasNextBanner:a,hasPrevBanner:i,onNextBannerClick:l,onPrevBannerClick:r})=>{const s=t.length<=1;return e(o).createElement(f,{animate:t.length>0,shouldCollapse:s},e(o).createElement(b,null,e(o).createElement(h.ActionBannerList,{banners:t,currentIndex:n}),!s&&e(o).createElement(y,null,e(o).createElement(k,{isVisible:i},e(o).createElement(x,{onClick:r},e(o).createElement(g.IconArrowLeftShort,null))),e(o).createElement(p.default,{numOfItems:t.length,currentIndex:n,maxVisible:5}),e(o).createElement(k,{isVisible:a},e(o).createElement(x,{onClick:l},e(o).createElement(g.IconArrowRightShort,null))))))})),w=()=>{const t=(()=>{const{data:t={banners:[]}}=c.hooks.useActionBanners({platform:"extension",appVersion:(0,d.getManifestVersion)()}),{data:n}=c.hooks.useSelectedMultiChainAccountIdentifier(),{banners:a}=t,i=e(r)(n),[s,g]=(0,o.useState)(0),m=(0,o.useCallback)((()=>{g((e=>e+1))}),[]),p=(0,o.useCallback)((()=>{g((e=>e-1))}),[]);return(0,o.useEffect)((()=>{if(a.length&&n)if(i!==n)g(0);else if(s>=a.length)g(a.length-1);else{const e=a[s],t=(0,l.generateActionBannerBaseAnalyticsPayload)(e);u.actionBannerAnalytics.onBannerSeen(t)}}),[s,a,n,i]),(0,o.useMemo)((()=>({banners:a,currentIndex:s,hasNextBanner:s<a.length-1,hasPrevBanner:s>0,onNextBannerClick:m,onPrevBannerClick:p})),[a,s,p,m])})();return e(o).createElement(v,Object.assign({},t))}})),n.register("c3wGO",(function(e,a){t(e.exports,"actionBannerAnalytics",(function(){return o}));var i=n("8NH57"),l=n("h5kyv");const o=new(0,i.ActionBannerAnalytics)(l.analytics)})),n.register("57LGC",(function(a,i){t(a.exports,"default",(function(){return d}));var l=n("lDSNw"),o=n("cZIbv");const r=o.default.div`
  display: flex;
  justify-content: ${e=>e.shouldCenter?"center":"flex-start"};
  align-items: center;
  position: relative;
  overflow: hidden;
  width: ${e=>9*(e.maxVisible-1)+18}px;
`,s=o.default.div`
  align-items: center;
  display: flex;
  ${e=>e.shouldShift&&o.css`
      transform: translateX(calc(-${9}px * ${e.shiftAmount}));
      transition: transform 0.3s ease-in-out;
    `}
`,c=o.default.div`
  align-items: center;
  background-color: #999999;
  border-radius: 95px;
  display: flex;
  height: ${5}px;
  justify-content: center;
  margin: 0 ${2}px;
  min-width: ${5}px;
  transition: all 0.3s ease-in-out;
  ${e=>e.isActive&&o.css`
      min-width: ${14}px;
    `}
  ${e=>e.isSmall&&o.css`
      min-width: 3px;
      margin: 0 ${2}px;
      height: 3px;
    `}
`,u=o.default.div`
  width: ${14}px;
  height: ${5}px;
  border-radius: 95px;
  position: absolute;
  margin: 0 ${2}px;
  background-color: #ab9ff2;
  transition: transform 0.3s ease-in-out;
  ${e=>e.position&&o.css`
      transform: translateX(${9*e.position}px);
    `}
`;var d=({numOfItems:t,currentIndex:n,maxVisible:a=5})=>{const i=t>a&&n>a-3,o=i?n-(a-3):0;return e(l).createElement(r,{shouldCenter:a>t,maxVisible:a},e(l).createElement(s,{shouldShift:i,shiftAmount:o},Array.from({length:t}).map(((t,a)=>{const o=(a===n-2||a===n+2)&&i;return e(l).createElement(c,{key:`pagination-dot-${a}`,isActive:n===a,isSmall:o})})),e(l).createElement(u,{position:n})))}})),n.register("eayxI",(function(a,i){t(a.exports,"ActionBannerList",(function(){return u}));var l=n("lDSNw"),o=n("cZIbv"),r=n("8BRi0");const s=o.default.ul`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  transition: transform 0.5s ease;
  transform: ${e=>`translateX(${-100*e.currentIndex}%)`};
`,c=o.default.li`
  align-items: center;
  display: flex;
  height: 74px;
  flex: 0 0 100%;
  padding: ${e=>e.isActive?"0":e.isNext||e.isPrevious?"0 6px":"0"};
`,u=({banners:t,currentIndex:n})=>e(l).createElement(s,{currentIndex:n},t.map(((t,a)=>e(l).createElement(c,{key:t.id,isActive:n===a,isNext:n+1===a,isPrevious:n-1===a},e(l).createElement(r.ActionBannerListItem,{banner:t,isActive:n===a})))))})),n.register("8BRi0",(function(a,i){t(a.exports,"ActionBannerListItem",(function(){return E}));var l=n("lMzyG"),o=n("8NH57"),r=n("c1thM"),s=n("lDSNw"),c=n("cZIbv"),u=n("gMNJN"),d=n("jl49C"),g=n("2LZGp"),m=n("c3wGO"),p=n("laYjG"),h=n("aanFI"),f=n("kn91D");const b=(0,c.default)(r.motion.button)`
  background: none;
  background-color: rgba(60, 49, 91, 0.4);
  border: 1px solid rgb(60, 49, 91);
  border-radius: 8px;
  cursor: pointer;
  height: ${e=>e.isActive?74:.9*74}px; /* 0.9 is taken from parallaxAdjacentItemScale from the carousel on mobile */
  padding: 10px 12px;
  width: 100%;

  &:hover {
    background-color: rgba(60, 49, 91, 0.6);
  }
`,x=(0,c.default)(r.motion.div)`
  align-items: center;
  display: flex;
`,k=c.default.img`
  margin-right: 12px;
  width: 44px;
`,y=(0,c.default)(f.Text).attrs({lineHeight:17,size:14})`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  flex: 1;
  overflow: hidden;
  text-align: left;
`,v=c.default.div`
  position: relative;
  top: -15px;
  right: -3px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  height: 20px;
  justify-content: center;
  width: 20px;
`,w=e(s).memo((({banner:t,isActive:n,onClickBanner:a,onCloseBanner:i})=>e(s).createElement(b,{layout:!0,onClick:a,isActive:n},e(s).createElement(x,{layout:!0},e(s).createElement(k,{src:t.imageUrl}),e(s).createElement(y,{weight:600},t.description),e(s).createElement(v,{onClick:i},e(s).createElement(h.IconClose,{fill:"#ffffff",width:8})))))),E=t=>{const n=(({banner:t,isActive:n})=>{const{t:a}=(0,l.useTranslation)(),i=(0,d.useDeepLink)(),{mutateAsync:r}=u.hooks.useDismissActionBanner(),{handleShowModalVisibility:c,handleHideModalVisibility:h}=(0,g.useModals)(),f=(0,s.useCallback)((n=>{const l=(0,o.generateActionBannerBaseAnalyticsPayload)(t);switch(m.actionBannerAnalytics.onBannerClick(l),t.bannerType){case o.ActionBannerType.DirectLink:{const{destinationType:e,url:a}=t;i(n,{destinationType:e,url:a});break}case o.ActionBannerType.Modal:{const{interstitial:l,destinationType:r,url:u}=t,{title:d,lineItems:g=[],imageUrl:f,primaryButtonText:b=a("commandContinue"),secondaryButtonText:x=a("commandDismiss")}=l,k=(0,o.generateActionBannerInterstitialAnalyticsPayload)(t),y=g.map((e=>({icon:e.imageUrl,subtitle:e.description,title:e.title})));c("interstitial",{bodyTitle:d,details:y,icon:f,onDismiss:()=>{m.actionBannerAnalytics.onInterstitialDismiss(k)},FooterComponent:()=>e(s).createElement(p.ButtonPair,{primaryText:b,secondaryText:x,onPrimaryClicked:()=>{i(n,{destinationType:r,url:u}),m.actionBannerAnalytics.onInterstitialPrimaryClick(k),h("interstitial")},onSecondaryClicked:()=>{m.actionBannerAnalytics.onInterstitialSecondaryClick(k),h("interstitial")}})}),m.actionBannerAnalytics.onInterstitialSeen(k);break}}}),[t,c,h,a,i]),b=(0,s.useCallback)((e=>{e.stopPropagation(),r({actionBannerId:t.id});const n=(0,o.generateActionBannerBaseAnalyticsPayload)(t);m.actionBannerAnalytics.onBannerDismiss(n)}),[t,r]);return(0,s.useMemo)((()=>({isActive:n,banner:t,onClickBanner:f,onCloseBanner:b})),[t,n,f,b])})(t);return e(s).createElement(w,Object.assign({},n))}})),n.register("jl49C",(function(a,i){t(a.exports,"useDeepLink",(function(){return m}));var l=n("8NH57"),o=n("lDSNw"),r=n("lz7nT"),s=n("aXzxc"),c=n("7J3aJ"),u=n("8182A"),d=n("d1qx3"),g=n("lrImj");const m=()=>{const{showSettingsMenu:t}=(0,c.useSettingsMenu)(),{showBuyFungibleSelectionModal:n}=(0,s.useLegacyModals)(),a=(0,r.useNavigate)();return(0,o.useCallback)(((i,r)=>{const{destinationType:s,url:c}=r;switch(s){case l.DeepLinkDestination.ExternalLink:(0,d.openTabAsync)({url:c});break;case l.DeepLinkDestination.Buy:n();break;case l.DeepLinkDestination.Collectibles:a(u.Path.Collectibles);break;case l.DeepLinkDestination.Explore:a(u.Path.Explore);break;case l.DeepLinkDestination.Quests:a(u.Path.Explore,{state:{tab:"quests",date:Date.now()}});break;case l.DeepLinkDestination.Swapper:a(u.Path.Swap);break;case l.DeepLinkDestination.SettingsImportSeedPhrase:(0,d.openTabAsync)({url:"onboarding.html?append=true"});break;case l.DeepLinkDestination.ConnectHardwareWallet:(0,d.openTabAsync)({url:"connect_hardware.html"});break;default:{const n=(0,g.getSanityComponentMapping)(s);if(!n)return;t(i,e(o).createElement(n,null))}}}),[a,t,n])}})),n.register("lrImj",(function(e,a){t(e.exports,"getSanityComponentMapping",(function(){return o}));var i=n("8NH57"),l=n("i14LG");const o=e=>{if(e===i.DeepLinkDestination.SettingsSecurityAndPrivacy)return l.MultiChainSecurity}})),n.register("e9bgh",(function(a,i){t(a.exports,"Header",(function(){return I}));var l=n("lMzyG"),o=n("4QHep"),r=n("jlKgL"),s=n("4y59b"),c=n("lDSNw"),u=n("gmVmN"),d=n("cZIbv"),g=n("44I6u"),m=n("aanFI"),p=n("6l2nq"),h=n("goqEN"),f=n("hjnIF"),b=n("kn91D"),x=n("ibYAx");const k=(0,d.default)(g.Column).attrs({align:"center"})`
  width: ${x.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,y=(0,d.default)(g.Column).attrs({align:"center",margin:"2rem 0"})``,v=(0,d.default)(g.Column).attrs({align:"center",justify:"center",width:"100%"})`
  height: 5.3rem;
`,w=(0,d.default)(f.SkeletonLoader).attrs({height:"8px",borderRadius:"6px",backgroundColor:"#484848"})`
  opacity: 0.2;
`,E=(0,d.default)(p.Row)`
  height: 8px;
  border-radius: 6px;
  background-color: ${(0,s.hexToRGB)("#999999",.5)};
  opacity: 0.5;
`,S=(0,d.default)(h.ShrinkingText)`
  margin-bottom: 11px;
`,A=d.default.div`
  display: flex;
  flex-direction: row;
  padding: 16px 5px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;
  border-radius: 62px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.2);
`,T=(0,d.default)(b.Text).attrs({size:15,weight:"600",color:"#FFF",lineHeight:20})``,M=(0,d.default)(b.Text).attrs({size:36,weight:"bold",color:"#777"})``,C=(0,d.default)(p.Row).attrs({justify:"center"})``,D=(0,d.default)(b.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,B=(0,d.default)(b.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,F=d.default.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 326px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,I=e(c).memo((({buyButtonText:t,receiveButtonText:n,hasFungibles:a,isErrorTokens:i,isLoading:o,isHidingAllFungibles:u,isReadOnlyAccount:d,showBuyFungibleSelectionModal:g,showDepositListModal:p,showSendFungibleSelectionModal:h,value:f,earnings:b,prefetchSPLTokenMap:x,sendButtonText:I,showDollarValues:O})=>{const{t:V}=(0,l.useTranslation)(),$=N(b),j=L({earnings:b,isNeutral:!O||o||u}),W=P(f),G=z(b),U=H(f,b),{buttonTheme:Z,buttonDisabled:K}=R({isLoading:o,isEnabled:a||u,isErrorTokens:i});return e(c).createElement(k,{background:j},e(c).createElement(y,null,O?o?e(c).createElement(v,null,e(c).createElement(w,{width:"184px",margin:"0 0 10px 0"}),e(c).createElement(w,{width:"112px"})):a||u?e(c).createElement(e(c).Fragment,null,e(c).createElement(S,{maxFontSize:38,fontWeight:600},W),e(c).createElement(C,null,e(c).createElement(D,{color:$},G),e(c).createElement(B,{color:$,backgroundColor:(0,s.hexToRGB)($,.1)},U))):i?e(c).createElement(v,null,e(c).createElement(E,{width:"184px",margin:"0 0 10px 0"}),e(c).createElement(E,{width:"112px"})):null:e(c).createElement(v,null,e(c).createElement(M,null,"–"))),d?e(c).createElement(F,null,e(c).createElement(A,null,e(c).createElement(m.IconEye,{width:20,height:20,fill:"#FFFFFF"}),e(c).createElement(T,null,V("readOnlyAccountBannerWarning")))):e(c).createElement(F,null,e(c).createElement(r.Button,{onMouseEnter:x,onClick:p,disabled:K,variant:{theme:Z}},n),e(c).createElement(r.Button,{onClick:g,variant:{theme:Z},disabled:K},t),e(c).createElement(r.Button,{onClick:h,variant:{theme:Z},disabled:K},I)))})),L=({earnings:e,isNeutral:t})=>t||void 0===e||0===e?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":e>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)",N=e=>void 0===e||0===e?"#777777":e>0?"#21E56F":"#EB3742",P=e=>void 0===e?"-":0===e?"$0.00":(0,u.formatDollarAmount)(e),z=e=>void 0===e?"-":0===e?"+$0.00":(0,u.formatDollarAmount)(e,{includePlusPrefix:!0}),H=(e,t)=>{const n=void 0===t;return void 0===e||n?"-":`${n||t>=0?"+":"-"}${Math.abs((0,o.calculatePercentChange)(e-t,e)).toFixed(2)}%`},R=({isLoading:e,isEnabled:t,isErrorTokens:n})=>{let a="primary",i=!1;switch(!0){case e:a="secondary",i=!0;break;case t:a="primary",i=!1;break;case n:a="secondary",i=!0}return{buttonTheme:a,buttonDisabled:i}}})),n.register("goqEN",(function(a,i){t(a.exports,"ShrinkingText",(function(){return d}));var l=n("lDSNw"),o=n("cZIbv"),r=n("gw3Qt"),s=n("kn91D");const c=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${e=>`${e.fontSize}px`};
  width: 100%;
`,u=(0,o.default)(s.Text)`
  font-size: ${e=>e.fontSize};
  line-height: 120%;
  font-weight: ${e=>e.fontWeight};
`,d=e(l).memo((({children:t,className:n,maxFontSize:a,fontWeight:i=500})=>{const[o,s]=(0,r.useFitText)();return e(l).createElement(c,{className:n,ref:s,fontSize:a},e(l).createElement(u,{fontSize:o,weight:i,noWrap:!0},t))}))})),n.register("gw3Qt",(function(e,a){t(e.exports,"useFitText",(function(){return l}));var i=n("lDSNw");const l=()=>{const e=(0,i.useRef)(null),[t,n]=(0,i.useState)({fontSize:100,fontSizePrev:20,fontSizeMax:100,fontSizeMin:20}),{fontSize:a,fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}=t;return(0,i.useEffect)((()=>{const t=Math.abs(a-r)<=5,i=null!==e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),s=a>r;if(t){if(i){n({fontSize:r<a?r:a-(r-a),fontSizeMax:l,fontSizeMin:o,fontSizePrev:r})}return}let c,u=l,d=o;i?(c=s?r-a:o-a,u=Math.min(l,a)):(c=s?l-a:r-a,d=Math.max(o,a)),n({fontSize:a+c/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:a})}),[a,l,o,r,e]),[`${a}%`,e]}})),n.register("iKm61",(function(a,i){t(a.exports,"HomeError",(function(){return b}));var l=n("lDSNw"),o=n("cZIbv"),r=n("44I6u"),s=n("aanFI"),c=n("6l2nq"),u=n("kn91D");const d=(0,o.default)(r.Column).attrs({align:"center"})``,g=o.default.div`
  width: 48px;
  height: 48px;
  position: relative;
  margin-bottom: 15px;
  border-radius: 100%;
  background: rgba(255, 220, 98, 0.2);
`,m=(0,o.default)(c.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,p=(0,o.default)(u.Text).attrs({size:17,weight:500,lineHeight:22,margin:"0 0 10px 0"})``,h=(0,o.default)(u.Text).attrs({size:15,weight:500,lineHeight:21,margin:"0 0 15px 0",color:"#777777"})``,f=(0,o.default)(u.Text).attrs({size:16,weight:500,lineHeight:22,margin:"0",color:"#AB9FF2"})``,b=e(l).memo((t=>e(l).createElement(d,null,e(l).createElement(g,null,e(l).createElement(m,null,e(l).createElement(s.IconExclamationMarkCircle,{width:22,exclamationFill:"transparent",circleFill:"#FFE920"}))),e(l).createElement(p,null,t.title),e(l).createElement(h,null,t.description),e(l).createElement(f,{onClick:t.refetch},t.buttonText))))})),n.register("iTDlK",(function(a,i){t(a.exports,"ManageTokenListButton",(function(){return m}));var l=n("lDSNw"),o=n("cZIbv"),r=n("aanFI"),s=n("3ou76"),c=n("6l2nq"),u=n("kn91D");const d=(0,o.default)(c.Row).attrs({justify:"center",margin:"0 auto",width:"auto"})`
  cursor: pointer;
  height: 48px;
  margin-bottom: 10px;
  p {
    font-weight: 500;
  }
  &:hover {
    p {
      color: #ab9ff2 !important;
    }
    svg {
      fill: #ab9ff2;
      path {
        stroke: #ab9ff2;
      }
      circle {
        stroke: #ab9ff2;
      }
    }
  }
`,g=(0,o.default)(u.Text).attrs({size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0})``,m=e(l).memo((t=>e(l).createElement(d,{onClick:t.onClick},e(l).createElement(s.IconWrapper,null,e(l).createElement(r.IconTokenListSettings,null)),e(l).createElement(g,null,t.buttonText))))})),n.register("1j4wJ",(function(e,a){t(e.exports,"useWalletBalanceAnalytics",(function(){return r}));var i=n("lDSNw"),l=n("iyZMg"),o=n("gMNJN");function r(e,t,n){const a=o.hooks.useIsTestnetMode(),[r,s]=(0,i.useState)(!1);(0,i.useEffect)((()=>{a||s(!1)}),[n,a]),(0,i.useEffect)((()=>{!r&&t.length&&e.length&&!a&&(l.fungibleAnalytics.walletBalance(n,t,e),s(!0))}),[n,t,e,r,a])}})),n.register("iyZMg",(function(e,a){t(e.exports,"fungibleAnalytics",(function(){return o}));var i=n("gYh0e"),l=n("h5kyv");const o=new(0,i.FungibleAnalytics)(l.analytics)})),n.register("8egSn",(function(a,i){t(a.exports,"FungibleDetailPage",(function(){return j}),(function(e){return j=e}));var l=n("6Tvfa"),o=n("belzv"),r=n("lBuGR"),s=n("gYh0e"),c=n("5VjGu"),u=n("lMzyG"),d=n("4y59b"),g=n("kd2w2"),m=n("3yHS8"),p=n("lDSNw"),h=n("lz7nT"),f=n("NQvFB"),b=n("HLcoo"),x=n("cZIbv"),k=n("jQk2k"),y=n("aLflh"),v=n("lLIZI"),w=n("aXzxc"),E=n("gPZGr"),S=n("fskOJ"),A=n("7CjHJ"),T=n("jBYwZ"),M=n("2pb0B"),C=n("1HSLJ"),D=n("3OE1H"),B=n("lKTPx"),F=n("gMNJN"),I=n("2XM7d"),L=n("2LZGp"),N=n("8182A"),P=n("h5kyv"),z=function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function r(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}s((a=a.apply(e,t||[])).next())}))};const H=x.default.div`
  margin: 24px 0 0 0;
  width: 100%;
`,R=x.default.div`
  margin: 24px 0 0 0;
  width: 100%;
`,O=x.default.div`
  margin-bottom: 9px;
  width: 100%;
`,V=e=>{const{networkID:t,fungibleKey:n}=e,{data:[a=!1]}=(0,r.useFeatureFlags)(["enable-asset-details"]),{t:i}=(0,u.useTranslation)(),{data:l}=F.hooks.useSelectedMultiChainAccount(),c=null==l?void 0:l.isReadOnly,{addresses:d,accountIdentifier:m}=(0,p.useMemo)((()=>{var e,t;return{addresses:null!==(e=null==l?void 0:l.addresses)&&void 0!==e?e:[],accountIdentifier:null!==(t=null==l?void 0:l.identifier)&&void 0!==t?t:""}}),[l]),{fungible:x}=F.hooks.useFungible({key:n}),{fungible:k}=F.hooks.useFungible({key:s.FungibleTokenType.SolanaNative}),y=(null==x?void 0:x.type)===s.FungibleTokenType.SolanaNative&&!c,v=void 0!==x?(0,s.parseOwnerAddress)(x):"",E=F.hooks.useFungibleExplorerUrl(x),{explorerName:S,explorerUrl:A}={explorerName:null==E?void 0:E.explorerName,explorerUrl:null==E?void 0:E.explorerUrl},T=(0,p.useMemo)((()=>({viewInExplorer:i("assetDetailViewOnExplorer",{explorer:S}),stakeSolText:i("assetDetailStakeSOL"),unwrapAllText:i("assetDetailUnwrapAll"),unwrappingSOLText:i("assetDetailUnwrappingSOL"),copyAddress:i("commandCopyTokenAddress")})),[S,i]),{showValidatorListModal:M,hideValidatorListModal:C}=(0,w.useLegacyModals)(),D=(0,h.useNavigate)(),B=o.Chains.isSolanaNetworkID(t)?(0,b.getClusterBySolanaChainId)(t):"mainnet-beta",{mutateAsync:L}=F.hooks.useUnwrapSOL((0,b.createConnection)(B)),P=(0,s.useTokenAddressFromFungible)(x);return(0,p.useMemo)((()=>{const e=[];if((null==x?void 0:x.type)===s.FungibleTokenType.SPL&&x.data.mintAddress===g.NATIVE_MINT.toBase58()){const t=k,n=d.find(o.isSolanaChainAddress);!!x.data.splTokenAccountPubkey&&void 0!==n&&!!t&&+t.data.amount>f.DEFAULT_FEE.toNumber()&&!c&&e.unshift({key:"unwrap-all",label:T.unwrapAllText,onClick:()=>{z(void 0,void 0,void 0,(function*(){yield L({accountIdentifier:m,solanaChainAddress:n,unwrapSOLText:T.unwrappingSOLText}),D(N.Path.Notifications)}))}})}return v&&!a&&(e.push({key:"view-in-explorer",label:T.viewInExplorer,onClick:()=>{window.open(A,"_blank")}}),P&&e.push({key:"copy-address",label:T.copyAddress,onClick:()=>{(0,I.copyToClipboard)(P)}})),y&&!a&&e.push({key:"stake-sol",label:T.stakeSolText,onClick:()=>M({onClose:C})}),e}),[x,v,y,k,d,T.unwrapAllText,T.unwrappingSOLText,T.viewInExplorer,T.stakeSolText,T.copyAddress,L,m,D,A,M,C,a,c,P])},$=e(p).memo((t=>{var n;const{chainAddress:a,fungible:i,fungibleName:l,actionItems:o,tokenAddress:s,fungibleSymbol:u,fungibleBalance:d,fungiblePrice:g,fungibleTokenType:m,fungiblePermanentDelegate:h,summaryItems:f,canStake:b,showUnwrapBlurEth:x,showDollarValue:w,i18nStrings:A,accounts:B,pageHeader:F,isDeveloperMode:I,developerModeStatus:N,handleShowSendModal:P,handleShowDepositFungibleModal:z,handleSwapClick:V,enableAssetDetails:$,walletAddress:j,isReadOnlyAccount:W}=t,G=e(p).createElement(e(p).Fragment,null,e(p).createElement(k.PageHeader,{isSticky:!0,items:o.length>0?o:void 0},F),e(p).createElement(O,null,$&&i?e(p).createElement(e(p).Fragment,null,e(p).createElement(M.FungibleSummaryCard,{type:i.type,chain:i.data.chain,logoUri:i.data.logoUri,name:i.data.name,price:i.data.price,priceChange24h:i.data.priceChange24h,symbol:i.data.symbol,tokenAddress:i.data.tokenAddress}),!W&&e(p).createElement(E.FungibleCallToAction,{fungible:i,walletAddress:j})):e(p).createElement(S.FungibleDetailHeader,{chainAddress:a,balance:d,symbol:u,mint:s,dollarValue:g,fungibleTokenType:m,showDollarValue:w,sendButtonText:A.sendButtonText,receiveButtonText:A.receiveButtonText,swapButtonText:A.swapButtonText,handleShowSendModal:P,handleShowDepositFungibleModal:z,handleSwapClick:V,isReadOnlyAccount:W}),b&&e(p).createElement(H,null,e(p).createElement(C.StartEarningSol,null)),x&&i?e(p).createElement(H,null,e(p).createElement(D.ButtonUnwrapFungible,{fungible:i})):null,h&&e(p).createElement(R,null,e(p).createElement(v.WarningDialog,{message:A.permanentDelegateWarning,variant:"warning"})),f.length>0?e(p).createElement(T.FungibleSummary,{name:l,items:f}):null)),U=(0,c.useFetchInfiniteHistoryItems)(B),Z=U.isLoading||"loading"===N,{isError:K}=(0,c.useFetchRefreshInfiniteHistoryItems)(B),{handleShowModalVisibility:_}=(0,L.useModals)(),J=(0,p.useCallback)((e=>_("historyItem",e)),[_]),Y=(0,p.useCallback)((e=>_("pendingTransaction",e)),[_]),{data:[Q=!1]}=(0,r.useFeatureFlags)(["enable-spam-filtering"]);return void 0===i?G:e(p).createElement(y.HistoryList,Object.assign({header:G,dataPages:null===(n=U.data)||void 0===n?void 0:n.pages,isLoading:Z,fetchNextPage:U.fetchNextPage,refetch:U.refetch,hasNextPage:U.hasNextPage,isFetchingNextPage:U.isFetchingNextPage,isError:U.isError,isRefreshError:K,isRefreshingConfirmedTxs:!1,isDeveloperMode:I,showHistoryItemModal:J,showPendingTransactionModal:Y},Q?{filter:e=>!(0,c.isSpamTransaction)(e,a?[a]:[])}:{}))})),j=e(p).memo((t=>{const{data:n,loading:a}=(t=>{const{networkID:n,fungibleKey:a,name:i,symbol:g,tokenAddress:h,walletAddress:f}=t,{data:[x=!1]}=(0,r.useFeatureFlags)(["enable-asset-details"]),{showSendFungibleFormModal:k,showDepositFungibleModal:y,hideDepositFungibleModal:v}=(0,w.useLegacyModals)(),{data:E,isLoading:S}=F.hooks.useSelectedMultiChainAccount(),A=null==E?void 0:E.isReadOnly,{data:T=l.DEFAULT_DEVELOPER_MODE,status:M}=F.hooks.useDeveloperMode(),C=T.isDeveloperMode,{fungibles:D,isLoadingTokens:I,refetch:L}=F.hooks.useFungibles(),N=(0,s.useFungiblesStore)((e=>e.setSendFungibleKey)),{fungible:z,fungibleName:H,fungibleSymbol:R,fungibleBalance:O,fungiblePrice:$,fungibleTokenType:j,fungiblePermanentDelegate:W}=(0,p.useMemo)((()=>{var t,n,l;const o=D.find((e=>e.data.key===a)),r=(0,s.getPermananetDelegateAddress)(o);return{fungible:o,fungibleName:null!==(t=null==o?void 0:o.data.name)&&void 0!==t?t:i,fungibleSymbol:null!==(n=null==o?void 0:o.data.symbol)&&void 0!==n?n:g,fungibleBalance:null!==(l=null==o?void 0:o.data.balance)&&void 0!==l?l:new(e(m))(0),fungiblePrice:null==o?void 0:o.data.usd,fungibleTokenType:null==o?void 0:o.type,fungiblePermanentDelegate:r}}),[a,D,i,g]),{data:G}=F.hooks.useSelectedChainAddress({networkID:n,address:null==z?void 0:z.data.walletAddress}),{t:U}=(0,u.useTranslation)(),Z=(0,p.useMemo)((()=>({recentActivityText:U("assetDetailRecentActivity"),sendButtonText:U("commandSend"),receiveButtonText:U("commandReceive"),swapButtonText:U("commandSwap"),permanentDelegateWarning:U("assetDetailPermanentDelegateWarning",{delegate:W})})),[U,W]),K=H,_=(0,d.truncateString)(K,20),J=(0,c.getTokenHistoryFilterId)(z),Y=(0,p.useMemo)((()=>{const e=G?[G]:[];return(0,c.getAccountsWithFilter)(e,n,J)}),[G,n,J]),Q=(null==z?void 0:z.data.tokenAddress)===s.BLUR_ETH_MINT_ADDRESS&&!A,q=(0,p.useCallback)((()=>{z&&(N(null==z?void 0:z.data.key),k(z))}),[z,N,k]),X=(0,p.useCallback)((()=>{var e;y({accountName:null!==(e=null==E?void 0:E.name)&&void 0!==e?e:"",walletAddress:f,address:h,symbol:R,onClose:v,networkID:n})}),[null==E?void 0:E.name,v,h,f,y,R,n]),ee=!o.Chains.isSolanaNetworkID(n)||"mainnet-beta"===(0,b.getClusterBySolanaChainId)(n),{isSolana:te}=(0,p.useMemo)((()=>{const e=D.find((e=>e.data.key===a));return{isSolana:(null==e?void 0:e.type)===s.FungibleTokenType.SolanaNative}}),[a,D]),ne=te&&!A,ae=V(t),{summaryItems:ie}=F.hooks.useFungibleDetailViewState(a),le=(0,p.useMemo)((()=>{if(z)return(0,o.encodeCaip19)((0,s.getFungibleCaip19FromFungible)(z))}),[z]),oe=(0,B.useNavigateToSwapper)(),re=(0,p.useCallback)((()=>{z&&le&&(P.analytics.capture("fungibleSwapClick",{data:{caip19:le}}),oe({sellFungible:z}))}),[z,le,oe]);return{data:(0,p.useMemo)((()=>({chainAddress:G,fungible:z,tokenAddress:h,fungibleName:H,fungibleSymbol:R,fungibleBalance:O,fungiblePrice:$,fungibleTokenType:j,fungiblePermanentDelegate:W,summaryItems:ie,canStake:ne,showUnwrapBlurEth:Q,showDollarValue:ee,i18nStrings:Z,accounts:Y,actionItems:ae,pageHeader:_,isDeveloperMode:C,developerModeStatus:M,handleShowSendModal:q,handleShowDepositFungibleModal:X,handleSwapClick:re,refetch:L,enableAssetDetails:x,walletAddress:f,isReadOnlyAccount:A})),[G,z,h,H,R,O,$,j,W,ie,ne,Q,ee,Z,Y,ae,_,C,M,q,X,re,L,x,f,A]),loading:S||I}})(t);return a?e(p).createElement(A.FungibleDetailLoader,{depositText:n.i18nStrings.receiveButtonText,sendText:n.i18nStrings.sendButtonText}):e(p).createElement($,Object.assign({},n))}))})),n.register("lLIZI",(function(e,a){t(e.exports,"WarningDialog",(function(){return g}));var i=n("4raQz"),l=n("lDSNw"),o=n("cZIbv"),r=n("aanFI"),s=n("kn91D");const c=o.default.div`
  display: flex;
  background-color: ${e=>e.color};
  padding: 16px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${e=>e.color};
  border-radius: 12px;
  gap: 8px;

  & + & {
    margin-top: 8px;
  }
`,u=o.default.div`
  padding: 3px;
`,d=(0,o.default)(s.Text).attrs({size:14,weight:400,lineHeight:17,textAlign:"left",wordBreak:"break-word"})``,g=({message:e,inverted:t=!1,variant:n="warning"})=>{let a="#2A2A2A",o="#222222",s=l.createElement(r.IconDangerOctagon,{fill:o,width:18,height:18});switch(n){case"warning":a=i.simulations.WARNING_COLOR,t||(s=l.createElement(r.IconDangerTriangle,{fill:"#222222",width:18,height:18}));break;case"danger":a=i.simulations.DANGER_COLOR;break;case"error":a="#2A2A2A",o=i.simulations.ERROR_COLOR;break;default:a=i.simulations.WARNING_COLOR}return l.createElement(c,{color:a},l.createElement(u,null,s),l.createElement(d,{color:o,padding:"4px 0","data-testid":"approval-warning-text"},e))}})),n.register("gPZGr",(function(a,i){t(a.exports,"FungibleCallToAction",(function(){return E}));var l=n("belzv"),o=n("gYh0e"),r=n("lMzyG"),s=n("4y59b"),c=n("lDSNw"),u=n("hjWkM"),d=n("aanFI"),g=n("6ha3o"),m=n("aXzxc"),p=n("gMNJN"),h=n("h5kyv"),f=n("lKTPx"),b=n("jEKlY");function x({fungible:e,walletAddress:t}){const{data:n}=p.hooks.useSelectedMultiChainAccount(),{showDepositFungibleModal:a,hideDepositFungibleModal:i}=(0,m.useLegacyModals)();return(0,c.useCallback)((()=>{var l;e.data.symbol&&a({accountName:null!==(l=null==n?void 0:n.name)&&void 0!==l?l:"",walletAddress:t,address:e.data.tokenAddress,symbol:e.data.symbol,onClose:i,networkID:e.data.chain.id})}),[null==n?void 0:n.name,i,e,t,a])}function k(){const{pushDetailView:t}=(0,g.useDetailViews)();return(0,c.useCallback)((()=>{t(e(c).createElement(b.FungibleStaking,null))}),[t])}function y({fungible:e}){const{showSendFungibleFormModal:t}=(0,m.useLegacyModals)();return(0,c.useCallback)((()=>{o.useFungiblesStore.getState().setSendFungibleKey(e.data.key),t(e)}),[e,t])}function v({fungible:e}){const t=(0,f.useNavigateToSwapper)();return(0,c.useCallback)((()=>{const n=(0,l.encodeCaip19)((0,o.getFungibleCaip19FromFungible)(e));h.analytics.capture("fungibleSwapClick",{data:{caip19:n}}),t({sellFungible:e})}),[e,t])}function w({explorer:e}){return(0,c.useCallback)((()=>{e&&window.open(e.explorerUrl,"_blank")}),[e])}const E=e(c).memo((t=>{const{ctaButtons:n,handleShowSendModal:a,handleReceive:i,handleSwap:l,handleExplorer:g,handleStakeAction:m}=function({fungible:t,walletAddress:n}){const{t:a}=(0,r.useTranslation)(),i=p.hooks.useFungibleExplorerUrl(t),l=(0,c.useMemo)((()=>({viewInExplorer:a("assetDetailViewOnExplorer",{explorer:null==i?void 0:i.explorerName}),sendButtonText:a("commandSend"),receiveButtonText:a("commandReceive"),stakeButtonText:a("commandStake"),buyButtonText:a("commandBuy"),swapButtonText:a("commandSwap")})),[a,i]),u=t.type===o.FungibleTokenType.SolanaNative;return{ctaButtons:(0,c.useMemo)((()=>[{text:l.sendButtonText,icon:e(c).createElement(d.IconArrowUpRight,{height:20,fill:"currentColor"}),value:"send"},{text:l.swapButtonText,icon:e(c).createElement(d.IconArrowDouble,{height:20,fill:"currentColor"}),value:"swap"},u&&{text:l.stakeButtonText,icon:e(c).createElement(d.IconShortcutsStake2,{height:20,fill:"currentColor"}),value:"stake"},{text:l.receiveButtonText,icon:e(c).createElement(d.IconArrowDownRight,{height:20,fill:"currentColor"}),value:"receive"},{text:l.buyButtonText,icon:e(c).createElement(d.IconDollar,{height:20,fill:"currentColor"}),value:"buy"},{text:l.viewInExplorer,icon:e(c).createElement(d.IconExternal,{height:20,fill:"currentColor"}),value:"explorer"}].filter(s.filterBoolean)),[u,l]),handleShowSendModal:y({fungible:t}),handleSwap:v({fungible:t}),handleReceive:x({fungible:t,walletAddress:n}),handleExplorer:w({explorer:i}),handleStakeAction:k()}}(t);return e(c).createElement(u.CTABar,{buttons:n,uiContext:{name:"fungibleDetail"},onClick:e=>{switch(e){case"send":return a();case"stake":return m();case"swap":return l();case"explorer":return g();case"receive":return i();case"buy":break;default:throw(0,s.assertNever)(e)}}})}))})),n.register("hjWkM",(function(a,i){t(a.exports,"CTABar",(function(){return h}));var l=n("lDSNw"),o=n("cZIbv"),r=n("2LZGp"),s=n("iyZMg"),c=n("aanFI");const u=o.default.div`
  margin: 8px 0;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${e=>`repeat(${e.buttonCount}, minmax(0, 1fr));`};
`,d=o.default.button`
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 16px;
  gap: 4px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`,g=o.default.div`
  height: 20px;
  overflow: hidden;
`,m=(0,o.default)(d)`
  background: #ab9ff2;
  * {
    color: #222222;
  }
  &:hover:enabled {
    background: #e2dffe;
  }

  svg {
    fill: #222222;
  }
`,p=(0,o.default)(d)`
  background: #333333;
  * {
    color: #ffffff;
  }
  &:hover:enabled {
    background: #444444;
  }

  svg {
    fill: #ffffff;
  }
`;function h({buttons:t,onClick:n,maxButtons:a=4,uiContext:i}){const o=t.length>a?t.slice(a-1):[],d=o.length>0?t.slice(0,a-1):t,h=t.length,{handleShowModalVisibility:f,handleHideModalVisibility:b}=(0,r.useModals)();return e(l).createElement(u,{buttonCount:Math.min(t.length,a)},d.map(((t,r)=>e(l).createElement(m,{key:t.value,type:"button",onClick:()=>{s.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:i,index:r,position:"primary",value:t.value,maxButtons:a,totalButtons:h,primaryButtons:d,moreButtons:o}),n(t.value)}},e(l).createElement(g,null,t.icon),e(l).createElement("span",null,t.text)))),o.length>0?e(l).createElement(p,{type:"button",onClick:()=>{s.fungibleAnalytics.ctaBarTrackMoreButtonClick({uiContext:i,maxButtons:a,totalButtons:h}),f("callToActionSheet",{buttons:o,onClick:(e,t)=>{b("callToActionSheet"),s.fungibleAnalytics.ctaBarTrackPrimaryButtonsClick({uiContext:i,index:t,position:"more",value:e,maxButtons:a,totalButtons:h,primaryButtons:d,moreButtons:o}),n(e)}})}},e(l).createElement(c.IconMore,{height:20}),e(l).createElement("span",null,"More")):null)}})),n.register("lKTPx",(function(e,a){t(e.exports,"useNavigateToSwapper",(function(){return u}));var i=n("belzv"),l=n("gYh0e"),o=n("lDSNw"),r=n("lz7nT"),s=n("8182A");const c=e=>{const t=(0,l.getFungibleCaip19FromFungible)(e);return(0,i.encodeCaip19)(t)},u=()=>{const e=(0,r.useNavigate)();return(0,o.useCallback)((({sellFungible:t,buyFungible:n,sellAmount:a})=>{const i=new URLSearchParams;t&&i.append("sellFungible",c(t)),n&&i.append("buyFungible",c(n)),a&&i.append("sellAmount",a),e(`/${s.Path.Swap}?${i.toString()}`)}),[e])}})),n.register("jEKlY",(function(a,i){t(a.exports,"FungibleStaking",(function(){return x}));var l=n("lMzyG"),o=n("gd9Oy"),r=n("4y59b"),s=n("lDSNw"),c=n("cZIbv"),u=n("aanFI"),d=n("02iAW"),g=n("gMNJN"),m=n("1di4e"),p=n("a8kcR");const h=c.default.div`
  height: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,f=c.default.div`
  font-size: 28px;
`,b=c.default.div`
  font-size: 14px;
  color: #a09fa6;
`;function x(){const{t:t}=(0,l.useTranslation)(),{connection:n,publicKey:a}=function(){var e;const{data:t}=g.hooks.useSelectedChainAddress(o.AddressType.Solana),n=null!==(e=null==t?void 0:t.address)&&void 0!==e?e:"",{connection:a}=g.hooks.useSelectedSolanaConnection();return(0,s.useMemo)((()=>({connection:a,publicKey:n})),[a,n])}(),i=g.hooks.useStakeAccounts(n,a);switch((0,s.useMemo)((()=>!i.isLoading&&!i.isFetching&&i.isSuccess&&i.data?"STAKE_LIST":"LOADING"),[i.isLoading,i.isFetching,i.isSuccess,i.data])){case"LOADING":return e(s).createElement(h,null,e(s).createElement(u.IconSVGContainer,{size:72},e(s).createElement(u.Shape,{shape:"circle",color:(0,r.hexToRGB)(p.theme.purple,.2)},e(s).createElement(d.Spinner,{color:p.theme.purple,diameter:48,position:"absolute"}))),e(s).createElement(f,null,t("startEarningSolLoading")),e(s).createElement(b,null,t("startEarningSolSearching")));case"STAKE_LIST":return e(s).createElement(m.StakeAccountListPage,null);default:return null}}})),n.register("1di4e",(function(a,i){t(a.exports,"StakeAccountListPage",(function(){return h}));var l=n("belzv"),o=n("lMzyG"),r=n("lDSNw"),s=n("HLcoo"),c=n("jQk2k"),u=n("aanFI"),d=n("ll4uk"),g=n("aXzxc"),m=n("7sEvl"),p=n("gMNJN");const h=()=>{const{t:t}=(0,o.useTranslation)(),{showValidatorListModal:n,hideValidatorListModal:a}=(0,g.useLegacyModals)(),{data:i}=p.hooks.useSelectedMultiChainAccount(),{solanaPublicKey:h,connection:f}=(0,r.useMemo)((()=>{var e,t;const n=(null!==(e=null==i?void 0:i.addresses)&&void 0!==e?e:[]).find((e=>l.Chains.isSolanaNetworkID(e.networkID))),a=null!==(t=null==n?void 0:n.address)&&void 0!==t?t:"",o=null==n?void 0:n.networkID;return{solanaPublicKey:a,connection:(0,s.createConnection)((0,s.getClusterBySolanaChainId)(o))}}),[i]),b=p.hooks.useStakeAccounts(f,h);return e(r).createElement(e(r).Fragment,null,e(r).createElement(c.PageHeader,{onIconClick:()=>n({onClose:a}),icon:e(r).createElement(u.IconPlus,null)},t("stakeAccountListViewPrimaryText")),e(r).createElement(d.FullHeightLoadingContent,{isLoading:!b.isFetched},e(r).createElement(m.StakeAccountList,null)))}})),n.register("7sEvl",(function(a,i){t(a.exports,"StakeAccountList",(function(){return v}));var l=n("belzv"),o=n("lMzyG"),r=n("6oMdZ"),s=n("lDSNw"),c=n("HLcoo"),u=n("gmVmN"),d=n("cZIbv"),g=n("bpx2y"),m=n("ll4uk"),p=n("bkZ83"),h=n("jAo12"),f=n("4tc9b"),b=n("kn91D"),x=n("aXzxc"),k=n("gMNJN"),y=n("h5kyv");const v=()=>{var t;const{t:n}=(0,o.useTranslation)();(0,s.useEffect)((()=>(y.analytics.capture("showStakeAccountList"),()=>{y.analytics.capture("hideStakeAccountList")})),[]);const{data:a}=k.hooks.useSelectedMultiChainAccount(),{solanaPublicKey:i,connection:r}=(0,s.useMemo)((()=>{var e,t;const n=(null!==(e=null==a?void 0:a.addresses)&&void 0!==e?e:[]).find((e=>l.Chains.isSolanaNetworkID(e.networkID))),i=null!==(t=null==n?void 0:n.address)&&void 0!==t?t:"",o=null==n?void 0:n.networkID;return{solanaChainAddress:n,solanaPublicKey:i,connection:(0,c.createConnection)((0,c.getClusterBySolanaChainId)(o))}}),[a]),u=k.hooks.useStakeAccounts(r,i),d=null!==(t=u.data)&&void 0!==t?t:[];return e(s).createElement(m.FullHeightLoadingContent,{isLoading:!u.isFetched},u.isError?e(s).createElement(g.ErrorView,{title:n("errorAndOfflineSomethingWentWrong"),description:n("stakeAccountListErrorFetching"),refetch:()=>{u.isFetching||u.refetch()}}):e(s).createElement(w,{data:d,connection:r}),e(s).createElement("br",null))},w=t=>{const{t:n}=(0,o.useTranslation)(),a=F(t.connection),i=t.data.slice().sort(((e,t)=>e.lamports>t.lamports?-1:1)),l=i.filter((e=>e.type===r.StakeAccountType.Delegated)),c=i.filter((e=>e.type===r.StakeAccountType.Initialized));return l.length||c.length?e(s).createElement(e(s).Fragment,null,l.length>0&&e(s).createElement(e(s).Fragment,null,l.map((n=>{var i,l,o;const{stake:r,voter:c}=n.info.stake.delegation,u=a.get(c),d=null===(i=null==u?void 0:u.info)||void 0===i?void 0:i.name,g=null===(l=null==u?void 0:u.info)||void 0===l?void 0:l.keybaseUsername,m=null===(o=null==u?void 0:u.info)||void 0===o?void 0:o.iconUrl;return e(s).createElement(D,{key:n.pubkey,pubkey:n.pubkey,balance:n.lamports,delegatedStake:Number(r),inflationReward:n.inflationReward,voteAccountPubkey:c,name:d,keybaseUsername:g,iconUrl:m,connection:t.connection})}))),c.length>0&&e(s).createElement(e(s).Fragment,null,c.map((n=>e(s).createElement(B,{key:n.pubkey,pubkey:n.pubkey,balance:n.lamports,inflationReward:n.inflationReward,connection:t.connection}))))):e(s).createElement(E,null,e(s).createElement(b.Text,{size:16,color:"#666666"},n("stakeAccountListNoStakingAccounts")))},E=d.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 42px);
`,S=(0,d.default)(f.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,A=(0,d.default)(h.TokenImage).attrs({width:44})``,T=d.default.div`
  overflow: hidden;
`,M=d.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,C=(0,d.default)(b.Text)`
  color: ${e=>"active"===e.activationState?"#21E56F":"inactive"===e.activationState?"#EB3742":"activating"===e.activationState||"deactivating"===e.activationState?"#FFE920":"#777777"};
`,D=t=>{var n,a,i;const{t:l}=(0,o.useTranslation)(),{showStakeAccountDetailModal:r}=(0,x.useLegacyModals)(),{data:c}=k.hooks.useKeybaseUserAvatar(t.keybaseUsername),d=null!==(a=null!==(n=t.name)&&void 0!==n?n:t.keybaseUsername)&&void 0!==a?a:(0,u.formatHashMedium)(t.voteAccountPubkey),g=k.hooks.useStakeActivationData(t.connection,t.pubkey).data,m=t.inflationReward&&t.inflationReward>0;return e(s).createElement(S,{onClick:()=>{r({stakeAccountPubkey:t.pubkey})}},e(s).createElement(A,{iconUrl:null!==(i=t.iconUrl)&&void 0!==i?i:c}),e(s).createElement(T,null,e(s).createElement(M,null,e(s).createElement(b.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},d),e(s).createElement(b.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(s).createElement(p.SolBalance,null,t.delegatedStake))),e(s).createElement(M,null,e(s).createElement(C,{size:14,activationState:null==g?void 0:g.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==g?void 0:g.state)?l("stakeAccountListActivationActivating"):"","active"===(null==g?void 0:g.state)?l("stakeAccountListActivationActive"):"","inactive"===(null==g?void 0:g.state)?l("stakeAccountListActivationInactive"):"","deactivating"===(null==g?void 0:g.state)?l("stakeAccountListActivationDeactivating"):""),e(s).createElement(b.Text,{size:14,color:""+(m?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},m?e(s).createElement(e(s).Fragment,null,"+",e(s).createElement(p.SolBalance,null,t.inflationReward)):"-"))))},B=t=>{const{t:n}=(0,o.useTranslation)(),{showStakeAccountDetailModal:a}=(0,x.useLegacyModals)(),i=k.hooks.useStakeActivationData(t.connection,t.pubkey).data,l=t.inflationReward&&t.inflationReward>0;return e(s).createElement(S,{onClick:()=>a({stakeAccountPubkey:t.pubkey})},e(s).createElement(A,null),e(s).createElement(T,null,e(s).createElement(M,null,e(s).createElement(b.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},t.pubkey),e(s).createElement(b.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(s).createElement(p.SolBalance,null,t.balance))),e(s).createElement(M,null,e(s).createElement(C,{size:14,activationState:null==i?void 0:i.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==i?void 0:i.state)?n("stakeAccountListActivationActivating"):"","active"===(null==i?void 0:i.state)?n("stakeAccountListActivationActive"):"","inactive"===(null==i?void 0:i.state)?n("stakeAccountListActivationInactive"):"","deactivating"===(null==i?void 0:i.state)?n("stakeAccountListActivationDeactivating"):""),e(s).createElement(b.Text,{size:14,color:""+(l?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},l&&"+",e(s).createElement(p.SolBalance,null,t.inflationReward)))))},F=e=>{var t;const n=k.hooks.useValidators(e),a=null!==(t=n.results)&&void 0!==t?t:[],i=(0,s.useRef)(a);i.current=a;return(0,s.useMemo)((()=>new Map(i.current.map((e=>[e.voteAccountPubkey,e])))),[n.dataUpdatedAt,i])}})),n.register("fskOJ",(function(a,i){t(a.exports,"FungibleDetailHeader",(function(){return x}));var l=n("gYh0e"),o=n("lDSNw"),r=n("gmVmN"),s=n("cZIbv"),c=n("laYjG"),u=n("44I6u"),d=n("goqEN"),g=n("kn91D"),m=n("gMNJN"),p=n("h5kyv");const h=(0,s.default)(u.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
`,f=(0,s.default)(g.Text).attrs({size:16,color:"#777777"})`
  margin-top: 7px;
`,b=(0,s.default)(c.ButtonGroup)`
  margin-top: 20px;
`,x=e(o).memo((t=>{const{mint:n,symbol:a,balance:i,dollarValue:s,fungibleTokenType:u,showDollarValue:g,sendButtonText:x,receiveButtonText:k,swapButtonText:y,chainAddress:v,isReadOnlyAccount:w,handleShowSendModal:E,handleShowDepositFungibleModal:S,handleSwapClick:A}=t,T=n?(0,r.formatAddressShort)(n):void 0,M=`${(0,r.formatTokenAmount)(i)} ${null!=a?a:T}`,C=(0,o.useCallback)((e=>e!==l.FungibleTokenType.BRC20||!(0,p.isFeatureEnabled)("kill-brc20-sends")),[]),D=m.hooks.useCanSendFungible({balance:i,fungibleTokenType:u,chainAddress:v,isSendEnabledForTokenType:C}),B=m.hooks.useCanSwapWithNetworkID({networkID:null==v?void 0:v.networkID}),F=!w;return e(o).createElement(h,null,e(o).createElement(d.ShrinkingText,{maxFontSize:38},M),g&&e(o).createElement(f,null,s?(0,r.formatDollarAmount)(s):"–"),F&&e(o).createElement(b,{buttonStyle:c.ButtonPairStyle.Small,buttons:[{theme:"primary",text:k,onClick:S},{theme:D?"primary":"default",text:x,onClick:E,disabled:!D},B&&{theme:"primary",text:y,onClick:A}].filter(Boolean)}))}))})),n.register("7CjHJ",(function(a,i){t(a.exports,"FungibleDetailLoader",(function(){return f}));var l=n("lDSNw"),o=n("cZIbv"),r=n("laYjG"),s=n("44I6u"),c=n("6l2nq"),u=n("hjnIF");const d=[1,2],g=(0,o.default)(c.Row)`
  height: 35px;
`,m=(0,o.default)(s.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
  margin-bottom: 24px;
`,p=o.default.div`
  width: 44px;
  height: 44px;
  margin-right: 10px;
`,h=(0,o.default)(u.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,f=e(l).memo((t=>e(l).createElement(e(l).Fragment,null,e(l).createElement(g,{justify:"center"},e(l).createElement(h,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(l).createElement(m,null,e(l).createElement(u.SkeletonLoader,{width:"100%",height:"70px",padding:"15px 0 30px 0"},e(l).createElement(s.Column,null,e(l).createElement(c.Row,{justify:"center",margin:"0 auto"},e(l).createElement(h,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(l).createElement(c.Row,{justify:"center",margin:"0 auto"},e(l).createElement(h,{width:"60px",height:"8px"})))),e(l).createElement(r.ButtonPair,{primaryText:t.sendText,primaryDisabled:!0,primaryTheme:"default",secondaryText:t.depositText,secondaryDisabled:!0,secondaryTheme:"default",buttonPairStyle:r.ButtonPairStyle.Small})),d.map((t=>e(l).createElement(u.SkeletonLoader,{key:`fungible-detail-row-loader-${t}`,align:"center",width:"100%",height:"74px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(l).createElement(p,null,e(l).createElement(u.SkeletonLoader,{width:"44px",height:"44px",backgroundColor:"#434343",borderRadius:"50%"})),e(l).createElement(s.Column,null,e(l).createElement(c.Row,{margin:"0 0 10px",justify:"space-between"},e(l).createElement(h,{width:"120px"}),e(l).createElement(h,{width:"60px"})),e(l).createElement(c.Row,{justify:"space-between"},e(l).createElement(h,{width:"75px"}),e(l).createElement(h,{width:"35px"})))))))))})),n.register("jBYwZ",(function(a,i){t(a.exports,"FungibleSummary",(function(){return g}));var l=n("lMzyG"),o=n("lDSNw"),r=n("cZIbv"),s=n("ks67t"),c=n("kn91D");const u=r.default.div`
  margin: 24px auto 0 auto;
  width: 100%;
`,d=(0,r.default)(c.Text).attrs({size:16,weight:500,color:"#777777",textAlign:"left",margin:"0 auto 16px 0",noWrap:!0})``,g=({name:t,items:n})=>{const{t:a}=(0,l.useTranslation)();return e(o).createElement(u,null,e(o).createElement(d,null,a("assetDetailAboutLabel",{fungibleName:t})),e(o).createElement(s.Summary,{rows:n}))}})),n.register("2pb0B",(function(a,i){t(a.exports,"FungibleSummaryCard",(function(){return f}));var l=n("belzv"),o=n("lDSNw"),r=n("gmVmN"),s=n("cZIbv"),c=n("6EObQ");const u=s.default.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`,d=s.default.div`
  display: flex;
  flex-direction: column;
`,g=s.default.div`
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  word-break: break-all;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`,m=s.default.div`
  font-size: 15px;
  line-height: 20px;
  text-align: right;
  color: ${e=>e.positive?"#21E56F;":"#EB3742;"};
`,p=s.default.div`
  display: flex;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
  word-break: break-all;
  color: #777777;
  font-size: 15px;
  line-height: 20px;
  text-align: ${e=>{var t;return null!==(t=e.textAlign)&&void 0!==t?t:"left"}};
`,h=s.default.figure`
  margin-right: 12px;
`,f=({logoUri:t,symbol:n,tokenAddress:a,chain:i,price:s,priceChange24h:f,name:b,type:x})=>{if(i.id===l.BitcoinNetworkID.Mainnet||i.id===l.BitcoinNetworkID.Testnet)return null;const k="number"==typeof f?f:e(o).createElement(e(o).Fragment,null,"—");return e(o).createElement(u,null,e(o).createElement(h,null,e(o).createElement(c.EcosystemImage,{image:{type:"fungible",src:t,fallback:n||a},tokenType:x,chainMeta:i})),e(o).createElement(d,null,e(o).createElement(g,null,b," "),e(o).createElement(p,null,n," • ",(0,r.formatDollarAmount)(s||0)," ","number"==typeof k&&0!==k?e(o).createElement(m,{positive:k>0},(0,r.formatNumber)(k,{includePlusPrefix:!0,suffix:"%"})):e(o).createElement(e(o).Fragment,null,(0,r.formatNumber)(0,{includePlusPrefix:!0,suffix:"%"})))))}})),n.register("1HSLJ",(function(a,i){t(a.exports,"StartEarningSol",(function(){return A}));var l=n("lMzyG"),o=n("gd9Oy"),r=n("4y59b"),s=n("lDSNw"),c=n("HLcoo"),u=n("cZIbv"),d=n("miiws"),g=n("aanFI"),m=n("bkZ83"),p=n("02iAW"),h=n("4tc9b"),f=n("kn91D"),b=n("6ha3o"),x=n("aXzxc"),k=n("gMNJN"),y=n("1di4e");const v=(0,u.default)(h.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
  margin-bottom: 0;
`,w=u.default.div`
  overflow: hidden;
`,E=u.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,S=u.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,A=()=>{var t;const{t:n}=(0,l.useTranslation)(),{pushDetailView:a}=(0,b.useDetailViews)(),{showValidatorListModal:i,hideValidatorListModal:u}=(0,x.useLegacyModals)(),{data:h}=k.hooks.useSelectedChainAddress(o.AddressType.Solana),A=null!==(t=null==h?void 0:h.address)&&void 0!==t?t:"",T=(0,s.useMemo)((()=>(0,c.createConnectionBySolanaNetworkID)(null==h?void 0:h.networkID)),[null==h?void 0:h.networkID]),M=k.hooks.useStakeAccounts(T,A),{isFetching:C,isError:D}=M,{totalStake:B,totalRewards:F,numAccounts:I}=(0,s.useMemo)((()=>{var e;const t=null!==(e=M.data)&&void 0!==e?e:[];return{totalStake:t.reduce(((e,t)=>e+t.lamports),0),totalRewards:t.reduce(((e,t)=>{var n;return e+(null!==(n=t.inflationReward)&&void 0!==n?n:0)}),0),numAccounts:t.length}}),[M.data]);return e(s).createElement(v,{role:"button",isDisabled:C,onClick:()=>{D?M.refetch():C||(I>0?a(e(s).createElement(y.StakeAccountListPage,null)):i({onClose:u}))}},C?e(s).createElement(d.Circle,{diameter:44,color:(0,r.hexToRGB)("#AB9FF2",.2)},e(s).createElement(p.Spinner,{diameter:28})):D?e(s).createElement(d.Circle,{diameter:44,color:(0,r.hexToRGB)("#EB3742",.1)},e(s).createElement(g.IconFailure,null)):e(s).createElement(d.Circle,{diameter:44,color:"#3F3D29"},e(s).createElement(g.IconStar,null)),e(s).createElement(w,null,C?e(s).createElement(E,null,e(s).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolLoading")),e(s).createElement(f.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolSearching"))):D?e(s).createElement(E,null,e(s).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolErrorTroubleLoading")),e(s).createElement(f.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolErrorClosePhantom"))):I?e(s).createElement(e(s).Fragment,null,e(s).createElement(S,null,e(s).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolYourStake")),e(s).createElement(f.Text,{size:14,weight:400,lineHeight:17,textAlign:"right",noWrap:!0},e(s).createElement(m.SolBalance,null,B))),e(s).createElement(S,null,e(s).createElement(f.Text,{color:"#777777",size:14,lineHeight:19,textAlign:"left",noWrap:!0},I," ",1===I?"account":"accounts"),e(s).createElement(f.Text,{size:14,color:""+(F>0?"#21E56F":"#777777"),lineHeight:17,textAlign:"right",noWrap:!0},F>0?e(s).createElement(e(s).Fragment,null,"+",e(s).createElement(m.SolBalance,null,F)):"–"))):e(s).createElement(E,null,e(s).createElement(f.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolPrimaryText")),e(s).createElement(f.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolStakeTokens")))))}})),n.register("3OE1H",(function(a,i){t(a.exports,"ButtonUnwrapFungible",(function(){return h}));var l=n("lMzyG"),o=n("lDSNw"),r=n("cZIbv"),s=n("6EObQ"),c=n("4tc9b"),u=n("kn91D"),d=n("2LZGp");const g=(0,r.default)(c.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
  margin-bottom: 0;
`,m=r.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,p=(0,r.default)(u.Text)`
  margin-top: 5px;
`,h=({fungible:t})=>{const{symbol:n,name:a,logoUri:i,chain:r}=t.data,{t:c}=(0,l.useTranslation)(),{handleShowModalVisibility:h}=(0,d.useModals)(),f=(0,o.useCallback)((()=>{h("approveUnwrapFungible",{fungible:t})}),[t,h]);return e(o).createElement(g,{onClick:f},e(o).createElement(s.EcosystemImage,{image:{type:"icon",preset:"swap"},size:48,badge:{src:null!=i?i:""}}),e(o).createElement(m,null,e(o).createElement(u.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},c("unwrapFungibleTitle",{tokenSymbol:n})),e(o).createElement(p,{color:"#777777",size:14,lineHeight:17,textAlign:"left"},c("unwrapFungibleDescription",{fromToken:a,toToken:r.symbol}))))}}));
//# sourceMappingURL=HomeTabPage.0d4c362a.js.map
define=__define;})(window.define);