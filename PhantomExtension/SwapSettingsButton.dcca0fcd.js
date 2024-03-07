(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;t.register("4jJyn",(function(n,l){var a,i,o,r,s;a=n.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),i=n.exports,o="default",r=function(){return x},Object.defineProperty(i,o,{get:r,set:s,enumerable:!0,configurable:!0});var u=t("lBuGR"),f=t("lMzyG"),c=t("lDSNw"),p=t("cZIbv"),d=t("aanFI"),g=t("kn91D"),b=t("gMNJN"),m=t("2LZGp");const y=p.default.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  gap: 4px;
  right: 8px;
  cursor: pointer;
  &:hover {
    svg {
      fill: #ab9ff2;
      path {
        stroke: #ab9ff2;
      }
      circle {
        stroke: #ab9ff2;
      }
    }
    p {
      color: #ab9ff2;
    }
  }
`,h=(0,p.default)(g.Text)`
  color: #777;
  font-size: 14px;
  font-weight: 500;
  margin-left: 4px;
`,v=p.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,w=e(c).memo((({ariaLabel:t,slippageTolerance:n,showSettings:l})=>e(c).createElement(y,{"data-testid":"slippage-settings-menu-open-button",onClick:l,role:"button","aria-label":t},e(c).createElement(v,null,e(c).createElement(d.IconTokenListSettings,{className:"settingsMenuIcon",width:16,stroke:"#777"}),n?e(c).createElement(h,null,`${n}%`):null))));var x=()=>{const{t:t}=(0,f.useTranslation)(),{data:[n]}=(0,u.useFeatureFlags)(["enable-custom-slippage"]),{handleShowModalVisibility:l}=(0,m.useModals)(),a=(0,c.useCallback)((()=>{l("slippageSettings")}),[l]),{data:i}=b.hooks.useSlippageTolerance();return n?e(c).createElement(w,{ariaLabel:t("commandOpen"),slippageTolerance:i,showSettings:a}):null}}));
//# sourceMappingURL=SwapSettingsButton.dcca0fcd.js.map
define=__define;})(window.define);