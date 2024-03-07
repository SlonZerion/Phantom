(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){function e(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d24;t.register("iI3S3",(function(n,l){var a,i,o,r,s;a=n.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),i=n.exports,o="default",r=function(){return v},Object.defineProperty(i,o,{get:r,set:s,enumerable:!0,configurable:!0});var f=t("3ljHn"),u=t("43063"),c=t("29o0l"),d=t("gkfw3"),p=t("j81qC"),g=t("27SDj"),b=t("gX5Te"),m=t("feAoQ");const h=d.default.div`
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
`,w=(0,d.default)(g.Text)`
  color: #777;
  font-size: 14px;
  font-weight: 500;
  margin-left: 4px;
`,x=d.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,y=e(c).memo((({ariaLabel:t,slippageTolerance:n,showSettings:l})=>e(c).createElement(h,{"data-testid":"slippage-settings-menu-open-button",onClick:l,role:"button","aria-label":t},e(c).createElement(x,null,e(c).createElement(p.IconTokenListSettings,{className:"settingsMenuIcon",width:16,stroke:"#777"}),n?e(c).createElement(w,null,`${n}%`):null))));var v=()=>{const{t:t}=(0,u.useTranslation)(),{data:[n]}=(0,f.useFeatureFlags)(["enable-custom-slippage"]),{handleShowModalVisibility:l}=(0,m.useModals)(),a=(0,c.useCallback)((()=>{l("slippageSettings")}),[l]),{data:i}=b.hooks.useSlippageTolerance();return n?e(c).createElement(y,{ariaLabel:t("commandOpen"),slippageTolerance:i,showSettings:a}):null}}))}();
//# sourceMappingURL=SwapSettingsButton.6a1f394d.js.map
define=__define;})(window.define);