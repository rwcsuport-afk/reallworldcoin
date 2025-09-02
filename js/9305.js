(self.webpackChunk=self.webpackChunk||[]).push([[9305],{1608:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=i(35198),a=i(26109),s=i(43494);const l=i(67569).AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:t})=>t[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:t})=>t[16]};
  }
`;var c=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends r.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const t={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`\n      --local-width: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};\n      --local-height: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};\n      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?r.qy`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?r.qy`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:r.qy`<img src=${(0,n.J)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};h.styles=[a.W5,l],c([(0,o.MZ)()],h.prototype,"src",void 0),c([(0,o.MZ)()],h.prototype,"logo",void 0),c([(0,o.MZ)()],h.prototype,"icon",void 0),c([(0,o.MZ)()],h.prototype,"iconColor",void 0),c([(0,o.MZ)()],h.prototype,"alt",void 0),c([(0,o.MZ)()],h.prototype,"size",void 0),c([(0,o.MZ)({type:Boolean})],h.prototype,"boxed",void 0),c([(0,o.MZ)({type:Boolean})],h.prototype,"rounded",void 0),c([(0,o.MZ)({type:Boolean})],h.prototype,"fullSize",void 0),h=c([(0,s.E)("wui-image")],h)},2731:(t,e)=>{const i=new Uint8Array(512),r=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)i[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)i[t]=i[t-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return i[t]},e.mul=function(t,e){return 0===t||0===e?0:i[r[t]+r[e]]}},3206:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=i(35198),a=(i(84206),i(26109)),s=i(43494);i(46162);const l=i(67569).AH`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var c=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends r.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return r.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};h.styles=[a.W5,a.fD,l],c([(0,o.MZ)()],h.prototype,"logo",void 0),c([(0,o.MZ)()],h.prototype,"name",void 0),c([(0,o.MZ)()],h.prototype,"tabIdx",void 0),c([(0,o.MZ)({type:Boolean})],h.prototype,"disabled",void 0),h=c([(0,s.E)("wui-list-social")],h)},6421:(t,e,i)=>{const r=i(56886).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,i=r(t),o=145===i?26:2*Math.ceil((i-13)/(2*e-2)),n=[i-7];for(let t=1;t<e-1;t++)n[t]=n[t-1]-o;return n.push(6),n.reverse()},e.getPositions=function(t){const i=[],r=e.getRowColCoords(t),o=r.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)0===t&&0===e||0===t&&e===o-1||t===o-1&&0===e||i.push([r[t],r[e]]);return i}},7756:(t,e,i)=>{const r=i(56886).getSymbolSize;e.getPositions=function(t){const e=r(t);return[[0,0],[e-7,0],[0,e-7]]}},7804:(t,e,i)=>{"use strict";i.d(e,{OA:()=>r,WL:()=>n,u$:()=>o});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8163:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=i(67569),a=i(26109),s=i(43494);const l=r.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;var c=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends r.WF{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){const t={primary:n.f.tokens.theme.textPrimary,secondary:n.f.tokens.theme.textSecondary,tertiary:n.f.tokens.theme.textTertiary,invert:n.f.tokens.theme.textInvert,error:n.f.tokens.core.textError,warning:n.f.tokens.core.textWarning,"accent-primary":n.f.tokens.core.textAccentPrimary};return this.style.cssText=`\n      --local-color: ${"inherit"===this.color?"inherit":t[this.color]};\n      `,this.dataset.size=this.size,r.qy`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};h.styles=[a.W5,l],c([(0,o.MZ)()],h.prototype,"color",void 0),c([(0,o.MZ)()],h.prototype,"size",void 0),h=c([(0,s.E)("wui-loading-spinner")],h)},8820:t=>{function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,i,r){const o=t*this.size+e;this.data[o]=i,r&&(this.reservedBit[o]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},11433:(t,e,i)=>{const r=i(30208),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(t){this.mode=r.ALPHANUMERIC,this.data=t}n.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let i=45*o.indexOf(this.data[e]);i+=o.indexOf(this.data[e+1]),t.put(i,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=n},14955:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=(i(96478),i(8163),i(84206),i(26109)),a=i(43494);const s=i(67569).AH`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:t})=>t[2]};
    transition:
      scale ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-1"]},
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      border-radius ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:t})=>t[2]};
    padding: 0 ${({spacing:t})=>t[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:t})=>t[3]};
    padding: 0 ${({spacing:t})=>t[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: 0 ${({spacing:t})=>t[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:t})=>t.core.backgroundAccentPrimary};
    color: ${({tokens:t})=>t.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:t})=>t.theme.backgroundInvert};
    color: ${({tokens:t})=>t.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:t})=>t.theme.borderSecondary};
    color: ${({tokens:t})=>t.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    color: ${({tokens:t})=>t.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:t})=>t.core.textError};
    color: ${({tokens:t})=>t.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:t})=>t.core.backgroundError};
    color: ${({tokens:t})=>t.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var l=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};const c={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},h={lg:"md",md:"md",sm:"sm"};let d=class extends r.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n     `;const t=this.textVariant??c[this.size];return r.qy`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=h[this.size],e="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return r.qy`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return null}};d.styles=[n.W5,n.fD,s],l([(0,o.MZ)()],d.prototype,"size",void 0),l([(0,o.MZ)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,o.MZ)({type:Boolean})],d.prototype,"fullWidth",void 0),l([(0,o.MZ)({type:Boolean})],d.prototype,"loading",void 0),l([(0,o.MZ)()],d.prototype,"variant",void 0),l([(0,o.MZ)()],d.prototype,"textVariant",void 0),d=l([(0,a.E)("wui-button")],d)},21878:(t,e)=>{e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},24357:(t,e,i)=>{const r=i(30208);function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e,i,r;for(e=0;e+3<=this.data.length;e+=3)i=this.data.substr(e,3),r=parseInt(i,10),t.put(r,10);const o=this.data.length-e;o>0&&(i=this.data.substr(e),r=parseInt(i,10),t.put(r,3*o+1))},t.exports=o},24861:(t,e,i)=>{const r=i(30208),o=i(56886);function n(t){this.mode=r.KANJI,this.data=t}n.getBitsLength=function(t){return 13*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=o.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else{if(!(i>=57408&&i<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");i-=49472}i=192*(i>>>8&255)+(255&i),t.put(i,13)}},t.exports=n},25707:(t,e,i)=>{"use strict";i.d(e,{MZ:()=>r.M,wk:()=>o.w});var r=i(75694),o=i(44290)},25822:(t,e,i)=>{const r=i(69049),o=i(30208);function n(t){this.mode=o.BYTE,"string"==typeof t&&(t=r(t)),this.data=new Uint8Array(t)}n.getBitsLength=function(t){return 8*t},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)},t.exports=n},29801:(t,e,i)=>{const r=i(30208),o=i(24357),n=i(11433),a=i(25822),s=i(24861),l=i(67044),c=i(56886),h=i(76320);function d(t){return unescape(encodeURIComponent(t)).length}function u(t,e,i){const r=[];let o;for(;null!==(o=t.exec(i));)r.push({data:o[0],index:o.index,mode:e,length:o[0].length});return r}function p(t){const e=u(l.NUMERIC,r.NUMERIC,t),i=u(l.ALPHANUMERIC,r.ALPHANUMERIC,t);let o,n;c.isKanjiModeEnabled()?(o=u(l.BYTE,r.BYTE,t),n=u(l.KANJI,r.KANJI,t)):(o=u(l.BYTE_KANJI,r.BYTE,t),n=[]);return e.concat(i,o,n).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function g(t,e){switch(e){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return n.getBitsLength(t);case r.KANJI:return s.getBitsLength(t);case r.BYTE:return a.getBitsLength(t)}}function f(t,e){let i;const l=r.getBestModeForData(t);if(i=r.from(e,l),i!==r.BYTE&&i.bit<l.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(i)+".\n Suggested mode is: "+r.toString(l));switch(i!==r.KANJI||c.isKanjiModeEnabled()||(i=r.BYTE),i){case r.NUMERIC:return new o(t);case r.ALPHANUMERIC:return new n(t);case r.KANJI:return new s(t);case r.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(f(e,null)):e.data&&t.push(f(e.data,e.mode)),t},[])},e.fromString=function(t,i){const o=function(t){const e=[];for(let i=0;i<t.length;i++){const o=t[i];switch(o.mode){case r.NUMERIC:e.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:e.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:e.push([o,{data:o.data,mode:r.BYTE,length:d(o.data)}]);break;case r.BYTE:e.push([{data:o.data,mode:r.BYTE,length:d(o.data)}])}}return e}(p(t,c.isKanjiModeEnabled())),n=function(t,e){const i={},o={start:{}};let n=["start"];for(let a=0;a<t.length;a++){const s=t[a],l=[];for(let t=0;t<s.length;t++){const c=s[t],h=""+a+t;l.push(h),i[h]={node:c,lastCount:0},o[h]={};for(let t=0;t<n.length;t++){const a=n[t];i[a]&&i[a].node.mode===c.mode?(o[a][h]=g(i[a].lastCount+c.length,c.mode)-g(i[a].lastCount,c.mode),i[a].lastCount+=c.length):(i[a]&&(i[a].lastCount=c.length),o[a][h]=g(c.length,c.mode)+4+r.getCharCountIndicator(c.mode,e))}}n=l}for(let t=0;t<n.length;t++)o[n[t]].end=0;return{map:o,table:i}}(o,i),a=h.find_path(n.map,"start","end"),s=[];for(let t=1;t<a.length-1;t++)s.push(n.table[a[t]].node);return e.fromArray(function(t){return t.reduce(function(t,e){const i=t.length-1>=0?t[t.length-1]:null;return i&&i.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}(s))},e.rawSplit=function(t){return e.fromArray(p(t,c.isKanjiModeEnabled()))}},30208:(t,e,i)=>{const r=i(21878),o=i(67044);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,i){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return i}}},31427:(t,e,i)=>{const r=i(56886),o=i(97518),n=i(49953),a=i(30208),s=i(21878),l=r.getBCHDigit(7973);function c(t,e){return a.getCharCountIndicator(t,e)+4}function h(t,e){let i=0;return t.forEach(function(t){const r=c(t.mode,e);i+=r+t.getBitsLength()}),i}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,i){if(!s.isValid(t))throw new Error("Invalid QR Code version");void 0===i&&(i=a.BYTE);const n=8*(r.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e));if(i===a.MIXED)return n;const l=n-c(i,t);switch(i){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},e.getBestVersionForData=function(t,i){let r;const o=n.from(i,n.M);if(Array.isArray(t)){if(t.length>1)return function(t,i){for(let r=1;r<=40;r++)if(h(t,r)<=e.getCapacity(r,i,a.MIXED))return r}(t,o);if(0===t.length)return 1;r=t[0]}else r=t;return function(t,i,r){for(let o=1;o<=40;o++)if(i<=e.getCapacity(o,r,t))return o}(r.mode,r.getLength(),o)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;r.getBCHDigit(e)-l>=0;)e^=7973<<r.getBCHDigit(e)-l;return t<<12|e}},35090:(t,e,i)=>{"use strict";i(92286)},35198:(t,e,i)=>{"use strict";i.d(e,{J:()=>o});var r=i(36752);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=t=>t??r.s6},38436:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=i(35198),a=(i(96478),i(26109)),s=i(43494);const l=i(67569).AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:t})=>t[2]};
    padding: ${({spacing:t})=>t[1]} !important;
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:t})=>t[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:t})=>t.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:t})=>t.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:t})=>t.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:t})=>t.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:t})=>t.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:t})=>t.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var c=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends r.WF{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,r.qy`
      <wui-icon size=${(0,n.J)(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};h.styles=[a.W5,a.fD,l],c([(0,o.MZ)()],h.prototype,"icon",void 0),c([(0,o.MZ)()],h.prototype,"size",void 0),c([(0,o.MZ)()],h.prototype,"padding",void 0),c([(0,o.MZ)()],h.prototype,"color",void 0),h=c([(0,s.E)("wui-icon-box")],h)},44290:(t,e,i)=>{"use strict";i.d(e,{w:()=>o});var r=i(75694);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o(t){return(0,r.M)({...t,state:!0,attribute:!1})}},44360:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=(i(96478),i(1608),i(48832),i(87583));function a(t,e,i){if(t===e)return!1;return(t-e<0?e-t:t-e)<=i+.1}const s={generate({uri:t,size:e,logoSize:i,padding:o=8,dotColor:s="var(--apkt-tokens-theme-textInvert)"}){const l=10,c=[],h=function(t,e){const i=Array.prototype.slice.call(n.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(i.length);return i.reduce((t,e,i)=>(i%r===0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t,"Q"),d=(e-2*o)/h.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:t,y:e})=>{const i=(h.length-7)*d*t+o,n=(h.length-7)*d*e+o,a=.45;for(let t=0;t<u.length;t+=1){const e=d*(7-2*t);c.push(r.JW`
            <rect
              fill=${2===t?"var(--apkt-tokens-theme-textInvert)":"var(--apkt-tokens-theme-textPrimary)"}
              width=${0===t?e-l:e}
              rx= ${0===t?(e-l)*a:e*a}
              ry= ${0===t?(e-l)*a:e*a}
              stroke=${s}
              stroke-width=${0===t?l:0}
              height=${0===t?e-l:e}
              x= ${0===t?n+d*t+5:n+d*t}
              y= ${0===t?i+d*t+5:i+d*t}
            />
          `)}});const p=Math.floor((i+25)/d),g=h.length/2-p/2,f=h.length/2+p/2-1,m=[];h.forEach((t,e)=>{t.forEach((t,i)=>{if(h[e][i]&&!(e<7&&i<7||e>h.length-8&&i<7||e<7&&i>h.length-8||e>g&&e<f&&i>g&&i<f)){const t=e*d+d/2+o,r=i*d+d/2+o;m.push([t,r])}})});const y={};return m.forEach(([t,e])=>{y[t]?y[t]?.push(e):y[t]=[e]}),Object.entries(y).map(([t,e])=>{const i=e.filter(t=>e.every(e=>!a(t,e,d)));return[Number(t),i]}).forEach(([t,e])=>{e.forEach(e=>{c.push(r.JW`<circle cx=${t} cy=${e} fill=${s} r=${d/2.5} />`)})}),Object.entries(y).filter(([t,e])=>e.length>1).map(([t,e])=>{const i=e.filter(t=>e.some(e=>a(t,e,d)));return[Number(t),i]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);const i=[];for(const t of e){const e=i.find(e=>e.some(e=>a(t,e,d)));e?e.push(t):i.push([t])}return[t,i.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,i])=>{c.push(r.JW`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${i}
                stroke=${s}
                stroke-width=${d/1.25}
                stroke-linecap="round"
              />
            `)})}),c}};var l=i(26109),c=i(43494);const h=i(67569).AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({tokens:t})=>t.theme.backgroundInvert};
    color: ${({tokens:t})=>t.theme.textInvert};
  }

  :host {
    border-radius: ${({borderRadius:t})=>t[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: ${({borderRadius:t})=>t[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var d=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let u=class extends r.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,r.qy`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return r.JW`
      <svg height=${this.size} width=${this.size}>
        ${s.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?r.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:r.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};u.styles=[l.W5,h],d([(0,o.MZ)()],u.prototype,"uri",void 0),d([(0,o.MZ)({type:Number})],u.prototype,"size",void 0),d([(0,o.MZ)()],u.prototype,"theme",void 0),d([(0,o.MZ)()],u.prototype,"imageSrc",void 0),d([(0,o.MZ)()],u.prototype,"alt",void 0),d([(0,o.MZ)({type:Boolean})],u.prototype,"arenaClear",void 0),d([(0,o.MZ)({type:Boolean})],u.prototype,"farcaster",void 0),u=d([(0,c.E)("wui-qr-code")],u)},45090:(t,e,i)=>{"use strict";i(84206)},46162:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=(i(96478),i(26109)),a=i(43494);const s=i(67569).AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:t})=>t[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var l=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends r.WF{constructor(){super(...arguments),this.logo="google"}render(){return r.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[n.W5,s],l([(0,o.MZ)()],c.prototype,"logo",void 0),c=l([(0,a.E)("wui-logo")],c)},47899:(t,e,i)=>{const r=i(92726);e.render=function(t,e,i){let o=i,n=e;void 0!==o||e&&e.getContext||(o=e,e=void 0),e||(n=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=r.getOptions(o);const a=r.getImageWidth(t.modules.size,o),s=n.getContext("2d"),l=s.createImageData(a,a);return r.qrToImageData(l.data,t,o),function(t,e,i){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=i,e.width=i,e.style.height=i+"px",e.style.width=i+"px"}(s,n,a),s.putImageData(l,0,0),n},e.renderToDataURL=function(t,i,r){let o=r;void 0!==o||i&&i.getContext||(o=i,i=void 0),o||(o={});const n=e.render(t,i,o),a=o.type||"image/png",s=o.rendererOpts||{};return n.toDataURL(a,s.quality)}},48832:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=i(26109),a=i(63612),s=i(43494);const l=r.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;var c=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends r.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&a.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&a.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&a.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&a.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&a.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&a.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&a.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&a.Z.getSpacingStyles(this.margin,3)};\n      width: ${this.width};\n    `,r.qy`<slot></slot>`}};h.styles=[n.W5,l],c([(0,o.MZ)()],h.prototype,"flexDirection",void 0),c([(0,o.MZ)()],h.prototype,"flexWrap",void 0),c([(0,o.MZ)()],h.prototype,"flexBasis",void 0),c([(0,o.MZ)()],h.prototype,"flexGrow",void 0),c([(0,o.MZ)()],h.prototype,"flexShrink",void 0),c([(0,o.MZ)()],h.prototype,"alignItems",void 0),c([(0,o.MZ)()],h.prototype,"justifyContent",void 0),c([(0,o.MZ)()],h.prototype,"columnGap",void 0),c([(0,o.MZ)()],h.prototype,"rowGap",void 0),c([(0,o.MZ)()],h.prototype,"gap",void 0),c([(0,o.MZ)()],h.prototype,"padding",void 0),c([(0,o.MZ)()],h.prototype,"margin",void 0),c([(0,o.MZ)()],h.prototype,"width",void 0),h=c([(0,s.E)("wui-flex")],h)},49953:(t,e)=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,i){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return i}}},51454:(t,e,i)=>{"use strict";i.d(e,{o:()=>a});var r=i(52095),o=i(4707);const n=(0,r.BX)({isLegalCheckboxChecked:!1}),a={state:n,subscribe:t=>(0,r.B1)(n,()=>t(n)),subscribeKey:(t,e)=>(0,o.u$)(n,t,e),setIsLegalCheckboxChecked(t){n.isLegalCheckboxChecked=t}}},51636:(t,e,i)=>{"use strict";i(96478)},56756:(t,e,i)=>{const r=i(92726);function o(t,e){const i=t.a/255,r=e+'="'+t.hex+'"';return i<1?r+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function n(t,e,i){let r=t+e;return void 0!==i&&(r+=" "+i),r}e.render=function(t,e,i){const a=r.getOptions(e),s=t.modules.size,l=t.modules.data,c=s+2*a.margin,h=a.color.light.a?"<path "+o(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+o(a.color.dark,"stroke")+' d="'+function(t,e,i){let r="",o=0,a=!1,s=0;for(let l=0;l<t.length;l++){const c=Math.floor(l%e),h=Math.floor(l/e);c||a||(a=!0),t[l]?(s++,l>0&&c>0&&t[l-1]||(r+=a?n("M",c+i,.5+h+i):n("m",o,0),o=0,a=!1),c+1<e&&t[l+1]||(r+=n("h",s),s=0)):o++}return r}(l,s,a.margin)+'"/>',u='viewBox="0 0 '+c+" "+c+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+u+' shape-rendering="crispEdges">'+h+d+"</svg>\n";return"function"==typeof i&&i(null,p),p}},56886:(t,e)=>{let i;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');i=t},e.isKanjiModeEnabled=function(){return void 0!==i},e.toSJIS=function(t){return i(t)}},58461:(t,e,i)=>{"use strict";i(14955)},60310:(t,e,i)=>{"use strict";i(48832)},61600:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=i(51454),a=i(26),s=i(69161),l=i(35198),c=i(91629),h=(i(96478),i(84206),i(26109)),d=i(43494);const u=i(67569).AH`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:t})=>t[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:t})=>t.neutrals400};
    color: ${({colors:t})=>t.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:t})=>t.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:t})=>t.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:t})=>t[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:t})=>t[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:t})=>t.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:t})=>t.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:t})=>t.neutrals700};
    background-color: ${({colors:t})=>t.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:t})=>t.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:t})=>t.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var p=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};const g={lg:"md",md:"sm",sm:"sm"};let f=class extends r.WF{constructor(){super(...arguments),this.inputElementRef=(0,c._)(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){const t=g[this.size];return r.qy`
      <label data-size=${this.size}>
        <input
          ${(0,c.K)(this.inputElementRef)}
          ?checked=${(0,l.J)(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${t}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};f.styles=[h.W5,u],p([(0,o.MZ)({type:Boolean})],f.prototype,"checked",void 0),p([(0,o.MZ)({type:Boolean})],f.prototype,"disabled",void 0),p([(0,o.MZ)()],f.prototype,"size",void 0),f=p([(0,d.E)("wui-checkbox")],f);i(45090);const m=s.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:t})=>t[3]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:t})=>t.theme.textSecondary};
    font-weight: 500;
  }
`;var y=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let w=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.checked=n.o.state.isLegalCheckboxChecked,this.unsubscribe.push(n.o.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=a.H.state,i=a.H.state.features?.legalCheckbox;return(t||e)&&i?r.qy`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=a.H.state;return t&&e?"and":""}termsTemplate(){const{termsConditionsUrl:t}=a.H.state;return t?r.qy`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=a.H.state;return t?r.qy`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`:null}onCheckboxChange(){n.o.setIsLegalCheckboxChecked(!this.checked)}};w.styles=[m],y([(0,o.wk)()],w.prototype,"checked",void 0),w=y([(0,s.EM)("w3m-legal-checkbox")],w)},64713:(t,e,i)=>{const r=i(2731);e.mul=function(t,e){const i=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let n=0;n<e.length;n++)i[o+n]^=r.mul(t[o],e[n]);return i},e.mod=function(t,e){let i=new Uint8Array(t);for(;i.length-e.length>=0;){const t=i[0];for(let o=0;o<e.length;o++)i[o]^=r.mul(e[o],t);let o=0;for(;o<i.length&&0===i[o];)o++;i=i.slice(o)}return i},e.generateECPolynomial=function(t){let i=new Uint8Array([1]);for(let o=0;o<t;o++)i=e.mul(i,new Uint8Array([1,r.exp(o)]));return i}},67044:(t,e)=>{const i="[0-9]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const o="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(o,"g"),e.NUMERIC=new RegExp(i,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const n=new RegExp("^"+r+"$"),a=new RegExp("^"+i+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return n.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return s.test(t)}},69049:t=>{"use strict";t.exports=function(t){for(var e=[],i=t.length,r=0;r<i;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&i>r+1){var n=t.charCodeAt(r+1);n>=56320&&n<=57343&&(o=1024*(o-55296)+n-56320+65536,r+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},71801:(t,e,i)=>{"use strict";i.d(e,{Up:()=>p});var r=i(24376),o=i(63450),n=i(6056),a=i(36010),s=i(90184),l=i(78508),c=i(21871),h=i(26742),d=i(27508);async function u(t){l.I.push("ConnectingSocial");const e=a.a.getAuthConnector();let i=null;try{const a=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(e&&t){if(h.w.isTelegram()||(i=function(){try{return h.w.returnOpenHref(`${r.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(t){throw new Error("Could not open social popup")}}()),i)o.U.setSocialWindow(i,n.W.state.activeChain);else if(!h.w.isTelegram())throw new Error("Could not create social popup");const{uri:s}=await e.provider.getSocialRedirectUri({provider:t});if(!s)throw i?.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=s),h.w.isTelegram()){d.i.setTelegramSocialProvider(t);const e=h.w.formatTelegramSocialLoginUrl(s);h.w.openHref(e,"_top")}clearTimeout(a)}}catch(t){i?.close(),c.P.showError(t?.message)}}async function p(t){o.U.setSocialProvider(t,n.W.state.activeChain),s.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:t}}),"farcaster"===t?await async function(){l.I.push("ConnectingFarcaster");const t=a.a.getAuthConnector();if(t&&!o.U.state.farcasterUrl)try{const{url:e}=await t.provider.getFarcasterUri();o.U.setFarcasterUrl(e,n.W.state.activeChain)}catch(t){l.I.goBack(),c.P.showError(t)}}():await u(t)}},74764:(t,e,i)=>{const r=i(64713);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const i=r.mod(e,this.genPoly),o=this.degree-i.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(i,o),t}return i},t.exports=o},75694:(t,e,i)=>{"use strict";i.d(e,{M:()=>a});var r=i(36124);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:r.W3,reflect:!1,hasChanged:r.Ec},n=(t=o,e,i)=>{const{kind:r,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function a(t){return(e,i)=>"object"==typeof i?n(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},76320:t=>{"use strict";var e={single_source_shortest_paths:function(t,i,r){var o={},n={};n[i]=0;var a,s,l,c,h,d,u,p=e.PriorityQueue.make();for(p.push(i,0);!p.empty();)for(l in s=(a=p.pop()).value,c=a.cost,h=t[s]||{})h.hasOwnProperty(l)&&(d=c+h[l],u=n[l],(void 0===n[l]||u>d)&&(n[l]=d,p.push(l,d),o[l]=s));if(void 0!==r&&void 0===n[r]){var g=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var i=[],r=e;r;)i.push(r),t[r],r=t[r];return i.reverse(),i},find_path:function(t,i,r){var o=e.single_source_shortest_paths(t,i,r);return e.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var i,r=e.PriorityQueue,o={};for(i in t=t||{},r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var i={value:t,cost:e};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},77616:(t,e,i)=>{"use strict";i(38436)},81332:(t,e)=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const i=3,r=3,o=40,n=10;function a(t,i,r){switch(t){case e.Patterns.PATTERN000:return(i+r)%2==0;case e.Patterns.PATTERN001:return i%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(i+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return i*r%2+i*r%3==0;case e.Patterns.PATTERN110:return(i*r%2+i*r%3)%2==0;case e.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,o=0,n=0,a=null,s=null;for(let l=0;l<e;l++){o=n=0,a=s=null;for(let c=0;c<e;c++){let e=t.get(l,c);e===a?o++:(o>=5&&(r+=i+(o-5)),a=e,o=1),e=t.get(c,l),e===s?n++:(n>=5&&(r+=i+(n-5)),s=e,n=1)}o>=5&&(r+=i+(o-5)),n>=5&&(r+=i+(n-5))}return r},e.getPenaltyN2=function(t){const e=t.size;let i=0;for(let r=0;r<e-1;r++)for(let o=0;o<e-1;o++){const e=t.get(r,o)+t.get(r,o+1)+t.get(r+1,o)+t.get(r+1,o+1);4!==e&&0!==e||i++}return i*r},e.getPenaltyN3=function(t){const e=t.size;let i=0,r=0,n=0;for(let o=0;o<e;o++){r=n=0;for(let a=0;a<e;a++)r=r<<1&2047|t.get(o,a),a>=10&&(1488===r||93===r)&&i++,n=n<<1&2047|t.get(a,o),a>=10&&(1488===n||93===n)&&i++}return i*o},e.getPenaltyN4=function(t){let e=0;const i=t.data.length;for(let r=0;r<i;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/i/5)-10)*n},e.applyMask=function(t,e){const i=e.size;for(let r=0;r<i;r++)for(let o=0;o<i;o++)e.isReserved(o,r)||e.xor(o,r,a(t,o,r))},e.getBestMask=function(t,i){const r=Object.keys(e.Patterns).length;let o=0,n=1/0;for(let a=0;a<r;a++){i(a),e.applyMask(a,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),r<n&&(n=r,o=a)}return o}},84206:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=i(99605),a=i(67569),s=i(26109),l=i(43494);const c=a.AH`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  /* -- Headings --------------------------------------------------- */
  .wui-font-h1-regular-mono {
    font-size: ${({textSize:t})=>t.h1};
    line-height: ${({typography:t})=>t["h1-regular-mono"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h1-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.mono};
  }

  .wui-font-h1-regular {
    font-size: ${({textSize:t})=>t.h1};
    line-height: ${({typography:t})=>t["h1-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h1-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h1-medium {
    font-size: ${({textSize:t})=>t.h1};
    line-height: ${({typography:t})=>t["h1-medium"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h1-medium"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.medium};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-regular-mono {
    font-size: ${({textSize:t})=>t.h2};
    line-height: ${({typography:t})=>t["h2-regular-mono"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h2-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.mono};
  }

  .wui-font-h2-regular {
    font-size: ${({textSize:t})=>t.h2};
    line-height: ${({typography:t})=>t["h2-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h2-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-medium {
    font-size: ${({textSize:t})=>t.h2};
    line-height: ${({typography:t})=>t["h2-medium"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h2-medium"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.medium};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-regular-mono {
    font-size: ${({textSize:t})=>t.h3};
    line-height: ${({typography:t})=>t["h3-regular-mono"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h3-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.mono};
  }

  .wui-font-h3-regular {
    font-size: ${({textSize:t})=>t.h3};
    line-height: ${({typography:t})=>t["h3-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h3-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-medium {
    font-size: ${({textSize:t})=>t.h3};
    line-height: ${({typography:t})=>t["h3-medium"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h3-medium"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.medium};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-regular-mono {
    font-size: ${({textSize:t})=>t.h4};
    line-height: ${({typography:t})=>t["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h4-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.mono};
  }

  .wui-font-h4-regular {
    font-size: ${({textSize:t})=>t.h4};
    line-height: ${({typography:t})=>t["h4-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h4-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-medium {
    font-size: ${({textSize:t})=>t.h4};
    line-height: ${({typography:t})=>t["h4-medium"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h4-medium"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.medium};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-regular-mono {
    font-size: ${({textSize:t})=>t.h5};
    line-height: ${({typography:t})=>t["h5-regular-mono"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h5-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.mono};
  }

  .wui-font-h5-regular {
    font-size: ${({textSize:t})=>t.h5};
    line-height: ${({typography:t})=>t["h5-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h5-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-medium {
    font-size: ${({textSize:t})=>t.h5};
    line-height: ${({typography:t})=>t["h5-medium"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h5-medium"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.medium};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-regular-mono {
    font-size: ${({textSize:t})=>t.h6};
    line-height: ${({typography:t})=>t["h6-regular-mono"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h6-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.mono};
  }

  .wui-font-h6-regular {
    font-size: ${({textSize:t})=>t.h6};
    line-height: ${({typography:t})=>t["h6-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h6-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-medium {
    font-size: ${({textSize:t})=>t.h6};
    line-height: ${({typography:t})=>t["h6-medium"].lineHeight};
    letter-spacing: ${({typography:t})=>t["h6-medium"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.medium};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-regular-mono {
    font-size: ${({textSize:t})=>t.large};
    line-height: ${({typography:t})=>t["lg-regular-mono"].lineHeight};
    letter-spacing: ${({typography:t})=>t["lg-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.mono};
  }

  .wui-font-lg-regular {
    font-size: ${({textSize:t})=>t.large};
    line-height: ${({typography:t})=>t["lg-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-medium {
    font-size: ${({textSize:t})=>t.large};
    line-height: ${({typography:t})=>t["lg-medium"].lineHeight};
    letter-spacing: ${({typography:t})=>t["lg-medium"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.medium};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-regular-mono {
    font-size: ${({textSize:t})=>t.medium};
    line-height: ${({typography:t})=>t["md-regular-mono"].lineHeight};
    letter-spacing: ${({typography:t})=>t["md-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.mono};
  }

  .wui-font-md-regular {
    font-size: ${({textSize:t})=>t.medium};
    line-height: ${({typography:t})=>t["md-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["md-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-medium {
    font-size: ${({textSize:t})=>t.medium};
    line-height: ${({typography:t})=>t["md-medium"].lineHeight};
    letter-spacing: ${({typography:t})=>t["md-medium"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.medium};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-regular-mono {
    font-size: ${({textSize:t})=>t.small};
    line-height: ${({typography:t})=>t["sm-regular-mono"].lineHeight};
    letter-spacing: ${({typography:t})=>t["sm-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.mono};
  }

  .wui-font-sm-regular {
    font-size: ${({textSize:t})=>t.small};
    line-height: ${({typography:t})=>t["sm-regular"].lineHeight};
    letter-spacing: ${({typography:t})=>t["sm-regular"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.regular};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-medium {
    font-size: ${({textSize:t})=>t.small};
    line-height: ${({typography:t})=>t["sm-medium"].lineHeight};
    letter-spacing: ${({typography:t})=>t["sm-medium"].letterSpacing};
    font-weight: ${({fontWeight:t})=>t.medium};
    font-family: ${({fontFamily:t})=>t.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }
`;var h=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};const d={primary:a.f.tokens.theme.textPrimary,secondary:a.f.tokens.theme.textSecondary,tertiary:a.f.tokens.theme.textTertiary,invert:a.f.tokens.theme.textInvert,error:a.f.tokens.core.textError,warning:a.f.tokens.core.textWarning,"accent-primary":a.f.tokens.core.textAccentPrimary};let u=class extends r.WF{constructor(){super(...arguments),this.variant="md-regular",this.color="inherit",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: ${"inherit"===this.color?"inherit":d[this.color??"primary"]};\n      `,r.qy`<slot class=${(0,n.H)(t)}></slot>`}};u.styles=[s.W5,c],h([(0,o.MZ)()],u.prototype,"variant",void 0),h([(0,o.MZ)()],u.prototype,"color",void 0),h([(0,o.MZ)()],u.prototype,"align",void 0),h([(0,o.MZ)()],u.prototype,"lineClamp",void 0),u=h([(0,l.E)("wui-text")],u)},84565:(t,e,i)=>{const r=i(56886),o=r.getBCHDigit(1335);e.getEncodedBits=function(t,e){const i=t.bit<<3|e;let n=i<<10;for(;r.getBCHDigit(n)-o>=0;)n^=1335<<r.getBCHDigit(n)-o;return 21522^(i<<10|n)}},87583:(t,e,i)=>{const r=i(91333),o=i(90157),n=i(47899),a=i(56756);function s(t,e,i,n,a){const s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!r())throw new Error("Callback required as last argument");if(!c){if(l<1)throw new Error("Too few arguments provided");return 1===l?(i=e,e=n=void 0):2!==l||e.getContext||(n=i,i=e,e=void 0),new Promise(function(r,a){try{const a=o.create(i,n);r(t(a,e,n))}catch(t){a(t)}})}if(l<2)throw new Error("Too few arguments provided");2===l?(a=i,i=e,e=n=void 0):3===l&&(e.getContext&&void 0===a?(a=n,n=void 0):(a=n,n=i,i=e,e=void 0));try{const r=o.create(i,n);a(null,t(r,e,n))}catch(t){a(t)}}e.create=o.create,e.toCanvas=s.bind(null,n.render),e.toDataURL=s.bind(null,n.renderToDataURL),e.toString=s.bind(null,function(t,e,i){return a.render(t,i)})},89305:(t,e,i)=>{"use strict";i.r(e),i.d(e,{W3mConnectSocialsView:()=>C,W3mConnectingFarcasterView:()=>T,W3mConnectingSocialView:()=>I});var r=i(97199),o=i(25707),n=i(35198),a=i(51454),s=i(26),l=i(69161),c=(i(60310),i(61600),i(36010)),h=i(78508),d=i(62944),u=i(71655),p=i(71801),g=i(26742),f=(i(3206),i(12710));const m=l.AH`
  :host {
    margin-top: ${({spacing:t})=>t[1]};
  }
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[2]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var y=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let w=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=c.a.state.connectors,this.authConnector=this.connectors.find(t=>"AUTH"===t.type),this.remoteFeatures=s.H.state.remoteFeatures,this.isPwaLoading=!1,this.unsubscribe.push(c.a.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(t=>"AUTH"===t.type)}),s.H.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let t=this.remoteFeatures?.socials||[];const e=Boolean(this.authConnector),i=t?.length,o="ConnectSocials"===h.I.state.view;return e&&i||o?(o&&!i&&(t=d.oU.DEFAULT_SOCIALS),r.qy` <wui-flex flexDirection="column" gap="2">
      ${t.map(t=>r.qy`<wui-list-social
            @click=${()=>{this.onSocialClick(t)}}
            data-testid=${`social-selector-${t}`}
            name=${t}
            logo=${t}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`):null}async onSocialClick(t){t&&await(0,p.Up)(t)}async handlePwaFrameLoad(){if(g.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof f.Y&&await this.authConnector.provider.init()}catch(t){u.h.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}};w.styles=m,y([(0,o.MZ)()],w.prototype,"tabIdx",void 0),y([(0,o.wk)()],w.prototype,"connectors",void 0),y([(0,o.wk)()],w.prototype,"authConnector",void 0),y([(0,o.wk)()],w.prototype,"remoteFeatures",void 0),y([(0,o.wk)()],w.prototype,"isPwaLoading",void 0),w=y([(0,l.EM)("w3m-social-login-list")],w);const v=l.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:t})=>t.md}
      ${({easings:t})=>t["ease-out-power-1"]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var b=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let C=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.checked=a.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.o.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:e}=s.H.state,i=s.H.state.features?.legalCheckbox,o=Boolean(t||e)&&Boolean(i)&&!this.checked,a=o?-1:void 0;return r.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${(0,n.J)(o?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,n.J)(a)}></w3m-social-login-list>
      </wui-flex>
    `}};C.styles=v,b([(0,o.wk)()],C.prototype,"checked",void 0),C=b([(0,l.EM)("w3m-connect-socials-view")],C);var x=i(63450),$=i(18121),k=i(6056),E=i(90184),M=i(27508),P=i(21871),L=i(96396),S=i(68996),A=(i(77616),i(91035),i(46162),i(45090),i(21785)),z=i(41482);const H=l.AH`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:t})=>t[8]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:t})=>t["ease-out-power-2"]}
      ${({durations:t})=>t.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var R=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let I=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=x.U.state.socialProvider,this.socialWindow=x.U.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=s.H.state.remoteFeatures,this.address=x.U.state.address,this.connectionsByNamespace=$.x.getConnections(k.W.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=c.a.getAuthConnector(),this.handleSocialConnection=async t=>{if(t.data?.resultUri)if(t.origin===z.o.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),x.U.setSocialWindow(void 0,k.W.state.activeChain)),this.connecting=!0,this.updateMessage();const e=t.data.resultUri;this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await $.x.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:e},this.authConnector.chain),this.socialProvider&&(M.i.setConnectedSocialProvider(this.socialProvider),E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(t){this.error=!0,this.updateMessage(),this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else h.I.goBack(),P.P.showError("Untrusted Origin"),this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})};A.R.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.socialWindow&&(this.socialWindow.close(),x.U.setSocialWindow(void 0,k.W.state.activeChain))}),this.unsubscribe.push(x.U.subscribe(t=>{t.socialProvider&&(this.socialProvider=t.socialProvider),t.socialWindow&&(this.socialWindow=t.socialWindow)}),s.H.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}),x.U.subscribeKey("address",t=>{const e=this.remoteFeatures?.multiWallet;t&&t!==this.address&&(this.hasMultipleConnections&&e?(h.I.replace("ProfileWallets"),P.P.showSuccess("New Wallet Added")):(L.W.state.open||s.H.state.enableEmbedded)&&L.W.close())})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),window.removeEventListener("message",this.handleSocialConnection,!1),this.socialWindow?.close(),x.U.setSocialWindow(void 0,k.W.state.activeChain)}render(){return r.qy`
      <wui-flex
        data-error=${(0,n.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,n.J)(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?"error":"secondary"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const t=S.W.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return r.qy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}connectSocial(){const t=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==h.I.state.view||(this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),h.I.goBack()),clearInterval(t))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};I.styles=H,R([(0,o.wk)()],I.prototype,"socialProvider",void 0),R([(0,o.wk)()],I.prototype,"socialWindow",void 0),R([(0,o.wk)()],I.prototype,"error",void 0),R([(0,o.wk)()],I.prototype,"connecting",void 0),R([(0,o.wk)()],I.prototype,"message",void 0),R([(0,o.wk)()],I.prototype,"remoteFeatures",void 0),I=R([(0,l.EM)("w3m-connecting-social-view")],I);i(58461),i(51636),i(44360),i(35090);const Z=l.AH`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:t})=>t[8]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var B=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let T=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=x.U.state.socialProvider,this.uri=x.U.state.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=s.H.state.remoteFeatures,this.authConnector=c.a.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(x.U.subscribeKey("farcasterUrl",t=>{t&&(this.uri=t,this.connectFarcaster())}),x.U.subscribeKey("socialProvider",t=>{t&&(this.socialProvider=t)}),s.H.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),r.qy`${this.platformTemplate()}`}platformTemplate(){return g.w.isMobile()?r.qy`${this.mobileTemplate()}`:r.qy`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?r.qy`${this.loadingTemplate()}`:r.qy`${this.qrTemplate()}`}qrTemplate(){return r.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return r.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["5","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return r.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["10","5","5","5"]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const t=S.W.state.themeVariables["--w3m-border-radius-master"],e=t?parseInt(t.replace("px",""),10):4;return r.qy`<wui-loading-thumbnail radius=${9*e}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await(this.authConnector?.provider.connectFarcaster()),this.socialProvider&&(M.i.setConnectedSocialProvider(this.socialProvider),E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;const t=$.x.getConnections(this.authConnector.chain).length>0;await $.x.connectExternal(this.authConnector,this.authConnector.chain);const e=this.remoteFeatures?.multiWallet;this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,t&&e?(h.I.replace("ProfileWallets"),P.P.showSuccess("New Wallet Added")):L.W.close()}catch(t){this.socialProvider&&E.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),h.I.goBack(),P.P.showError(t)}}mobileLinkTemplate(){return r.qy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&g.w.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40;return r.qy` <wui-qr-code
      size=${t}
      theme=${S.W.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,n.J)(S.W.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return r.qy`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(g.w.copyToClopboard(this.uri),P.P.showSuccess("Link copied"))}catch{P.P.showError("Failed to copy")}}};T.styles=Z,B([(0,o.wk)()],T.prototype,"socialProvider",void 0),B([(0,o.wk)()],T.prototype,"uri",void 0),B([(0,o.wk)()],T.prototype,"ready",void 0),B([(0,o.wk)()],T.prototype,"loading",void 0),B([(0,o.wk)()],T.prototype,"remoteFeatures",void 0),T=B([(0,l.EM)("w3m-connecting-farcaster-view")],T)},90157:(t,e,i)=>{const r=i(56886),o=i(49953),n=i(99899),a=i(8820),s=i(6421),l=i(7756),c=i(81332),h=i(97518),d=i(74764),u=i(31427),p=i(84565),g=i(30208),f=i(29801);function m(t,e,i){const r=t.size,o=p.getEncodedBits(e,i);let n,a;for(n=0;n<15;n++)a=1==(o>>n&1),n<6?t.set(n,8,a,!0):n<8?t.set(n+1,8,a,!0):t.set(r-15+n,8,a,!0),n<8?t.set(8,r-n-1,a,!0):n<9?t.set(8,15-n-1+1,a,!0):t.set(8,15-n-1,a,!0);t.set(r-8,8,1,!0)}function y(t,e,i){const o=new n;i.forEach(function(e){o.put(e.mode.bit,4),o.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(o)});const a=8*(r.getSymbolTotalCodewords(t)-h.getTotalCodewordsCount(t,e));for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);const s=(a-o.getLengthInBits())/8;for(let t=0;t<s;t++)o.put(t%2?17:236,8);return function(t,e,i){const o=r.getSymbolTotalCodewords(e),n=h.getTotalCodewordsCount(e,i),a=o-n,s=h.getBlocksCount(e,i),l=o%s,c=s-l,u=Math.floor(o/s),p=Math.floor(a/s),g=p+1,f=u-p,m=new d(f);let y=0;const w=new Array(s),v=new Array(s);let b=0;const C=new Uint8Array(t.buffer);for(let t=0;t<s;t++){const e=t<c?p:g;w[t]=C.slice(y,y+e),v[t]=m.encode(w[t]),y+=e,b=Math.max(b,e)}const x=new Uint8Array(o);let $,k,E=0;for($=0;$<b;$++)for(k=0;k<s;k++)$<w[k].length&&(x[E++]=w[k][$]);for($=0;$<f;$++)for(k=0;k<s;k++)x[E++]=v[k][$];return x}(o,t,e)}function w(t,e,i,o){let n;if(Array.isArray(t))n=f.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=f.rawSplit(t);r=u.getBestVersionForData(e,i)}n=f.fromString(t,r||40)}}const h=u.getBestVersionForData(n,i);if(!h)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<h)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+h+".\n")}else e=h;const d=y(e,i,n),p=r.getSymbolSize(e),g=new a(p);return function(t,e){const i=t.size,r=l.getPositions(e);for(let e=0;e<r.length;e++){const o=r[e][0],n=r[e][1];for(let e=-1;e<=7;e++)if(!(o+e<=-1||i<=o+e))for(let r=-1;r<=7;r++)n+r<=-1||i<=n+r||(e>=0&&e<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===e||6===e)||e>=2&&e<=4&&r>=2&&r<=4?t.set(o+e,n+r,!0,!0):t.set(o+e,n+r,!1,!0))}}(g,e),function(t){const e=t.size;for(let i=8;i<e-8;i++){const e=i%2==0;t.set(i,6,e,!0),t.set(6,i,e,!0)}}(g),function(t,e){const i=s.getPositions(e);for(let e=0;e<i.length;e++){const r=i[e][0],o=i[e][1];for(let e=-2;e<=2;e++)for(let i=-2;i<=2;i++)-2===e||2===e||-2===i||2===i||0===e&&0===i?t.set(r+e,o+i,!0,!0):t.set(r+e,o+i,!1,!0)}}(g,e),m(g,i,0),e>=7&&function(t,e){const i=t.size,r=u.getEncodedBits(e);let o,n,a;for(let e=0;e<18;e++)o=Math.floor(e/3),n=e%3+i-8-3,a=1==(r>>e&1),t.set(o,n,a,!0),t.set(n,o,a,!0)}(g,e),function(t,e){const i=t.size;let r=-1,o=i-1,n=7,a=0;for(let s=i-1;s>0;s-=2)for(6===s&&s--;;){for(let i=0;i<2;i++)if(!t.isReserved(o,s-i)){let r=!1;a<e.length&&(r=1==(e[a]>>>n&1)),t.set(o,s-i,r),n--,-1===n&&(a++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}(g,d),isNaN(o)&&(o=c.getBestMask(g,m.bind(null,g,i))),c.applyMask(o,g),m(g,i,o),{modules:g,version:e,errorCorrectionLevel:i,maskPattern:o,segments:n}}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let i,n,a=o.M;return void 0!==e&&(a=o.from(e.errorCorrectionLevel,o.M),i=u.from(e.version),n=c.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),w(t,i,a,n)}},91035:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=i(26109),a=i(43494);const s=i(67569).AH`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${t=>t.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var l=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends r.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,i=116+e,o=245+e,n=360+1.75*e;return r.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};c.styles=[n.W5,s],l([(0,o.MZ)({type:Number})],c.prototype,"radius",void 0),c=l([(0,a.E)("wui-loading-thumbnail")],c)},91333:t=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},91629:(t,e,i)=>{"use strict";i.d(e,{_:()=>p,K:()=>m});var r=i(36752);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:o}=r.ge;var n=i(7804);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),a(t,e);return!0},s=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},l=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),d(e)}};function c(t){void 0!==this._$AN?(s(this),this._$AM=t,l(this)):this._$AM=t}function h(t,e=!1,i=0){const r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(r))for(let t=i;t<r.length;t++)a(r[t],!1),s(r[t]);else null!=r&&(a(r,!1),s(r));else a(this,t)}const d=t=>{t.type==n.OA.CHILD&&(t._$AP??=h,t._$AQ??=c)};class u extends n.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),l(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(a(this,t),s(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const p=()=>new g;class g{}const f=new WeakMap,m=(0,n.u$)(class extends u{render(t){return r.s6}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),r.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=f.get(e);void 0===i&&(i=new WeakMap,f.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?f.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},92286:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=i(43494);const a=i(67569).AH`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:t})=>t.theme.foregroundSecondary} 0%,
      ${({tokens:t})=>t.theme.foregroundTertiary} 50%,
      ${({tokens:t})=>t.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:t})=>t[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var s=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};let l=class extends r.WF{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n    `,this.dataset.rounded=this.rounded?"true":"false",r.qy`<slot></slot>`}};l.styles=[a],s([(0,o.MZ)()],l.prototype,"width",void 0),s([(0,o.MZ)()],l.prototype,"height",void 0),s([(0,o.MZ)()],l.prototype,"variant",void 0),s([(0,o.MZ)({type:Boolean})],l.prototype,"rounded",void 0),l=s([(0,n.E)("wui-shimmer")],l)},92726:(t,e)=>{function i(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");const i=parseInt(e.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:i(t.color.dark||"#000000ff"),light:i(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,i){const r=e.getScale(t,i);return Math.floor((t+2*i.margin)*r)},e.qrToImageData=function(t,i,r){const o=i.modules.size,n=i.modules.data,a=e.getScale(o,r),s=Math.floor((o+2*r.margin)*a),l=r.margin*a,c=[r.color.light,r.color.dark];for(let e=0;e<s;e++)for(let i=0;i<s;i++){let h=4*(e*s+i),d=r.color.light;if(e>=l&&i>=l&&e<s-l&&i<s-l){d=c[n[Math.floor((e-l)/a)*o+Math.floor((i-l)/a)]?1:0]}t[h++]=d.r,t[h++]=d.g,t[h++]=d.b,t[h]=d.a}}},96478:(t,e,i)=>{"use strict";var r=i(97199),o=i(25707),n=i(36752);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=Symbol.for(""),s=t=>{if(t?.r===a)return t?._$litStatic$},l=new Map,c=t=>(e,...i)=>{const r=i.length;let o,n;const a=[],c=[];let h,d=0,u=!1;for(;d<r;){for(h=e[d];d<r&&void 0!==(n=i[d],o=s(n));)h+=o+e[++d],u=!0;d!==r&&c.push(n),a.push(h),d++}if(d===r&&a.push(e[r]),u){const t=a.join("$$lit$$");void 0===(e=l.get(t))&&(a.raw=a,l.set(t,e=a)),i=c}return t(e,...i)},h=c(n.qy),d=(c(n.JW),c(n.ej),r.JW`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_87_33)">
    <path d="M23.9367 2.29447e-07H6.05917C5.26333 -0.000218805 4.47526 0.156384 3.73997 0.46086C3.00469 0.765337 2.33661 1.21172 1.77391 1.7745C1.21121 2.33727 0.764917 3.00542 0.460542 3.74074C0.156167 4.47607 -0.000327963 5.26417 5.16031e-07 6.06V23.9433C4.48257e-07 24.7389 0.156744 25.5267 0.461276 26.2617C0.765808 26.9967 1.21216 27.6645 1.77484 28.2269C2.33752 28.7894 3.0055 29.2355 3.74061 29.5397C4.47573 29.8439 5.26358 30.0003 6.05917 30H23.9417C25.5486 29.9996 27.0895 29.3609 28.2257 28.2245C29.3618 27.0881 30 25.5469 30 23.94V6.06C29.9993 4.45241 29.3602 2.91091 28.2232 1.77449C27.0861 0.638064 25.5443 -0.000220881 23.9367 2.29447e-07Z" fill="url(#paint0_linear_87_33)"/>
    <path d="M14.8708 6.89259L15.4783 5.84259C15.5679 5.68703 15.6873 5.55064 15.8296 5.44122C15.9719 5.3318 16.1344 5.25148 16.3078 5.20486C16.4812 5.15824 16.662 5.14622 16.8401 5.1695C17.0181 5.19277 17.1898 5.25088 17.3453 5.34051C17.5009 5.43013 17.6373 5.54952 17.7467 5.69186C17.8561 5.83419 17.9364 5.99669 17.9831 6.17006C18.0297 6.34344 18.0417 6.5243 18.0184 6.70232C17.9952 6.88034 17.9371 7.05203 17.8474 7.20759L11.9949 17.3401H16.2283C17.5999 17.3401 18.3691 18.9526 17.7724 20.0701H5.36159C5.18215 20.0707 5.00436 20.0359 4.83845 19.9675C4.67254 19.8992 4.5218 19.7986 4.39492 19.6718C4.26803 19.5449 4.16751 19.3941 4.09915 19.2282C4.03079 19.0623 3.99593 18.8845 3.99659 18.7051C3.99659 17.9476 4.60492 17.3401 5.36159 17.3401H8.84159L13.2958 9.61926L11.9041 7.20426C11.738 6.89096 11.7 6.52543 11.7982 6.18469C11.8963 5.84395 12.1229 5.5546 12.4301 5.37763C12.7374 5.20065 13.1014 5.14987 13.4454 5.23599C13.7893 5.3221 14.0864 5.53838 14.2741 5.83926L14.8708 6.89259ZM9.60659 21.4759L8.29409 23.7526C8.20446 23.9082 8.08506 24.0446 7.94271 24.1541C7.80035 24.2636 7.63783 24.344 7.46441 24.3906C7.291 24.4373 7.11009 24.4493 6.93202 24.4261C6.75395 24.4028 6.58221 24.3447 6.42659 24.2551C6.27097 24.1655 6.13454 24.0461 6.02506 23.9037C5.91559 23.7613 5.83523 23.5988 5.78857 23.4254C5.74191 23.252 5.72986 23.0711 5.75311 22.893C5.77637 22.715 5.83446 22.5432 5.92409 22.3876L6.89909 20.7001C8.00159 20.3584 8.89742 20.6209 9.60659 21.4759ZM20.9066 17.3476H24.4583C25.2158 17.3476 25.8233 17.9551 25.8233 18.7126C25.8233 19.4701 25.2149 20.0776 24.4583 20.0776H22.4858L23.8166 22.3876C24.1916 23.0443 23.9708 23.8726 23.3149 24.2551C23.0006 24.4359 22.6274 24.4845 22.2772 24.3903C21.927 24.2961 21.6286 24.0667 21.4474 23.7526C19.2058 19.8643 17.5216 16.9534 16.4041 15.0151C15.2608 13.0426 16.0783 11.0626 16.8841 10.3909C17.7799 11.9293 19.1191 14.2501 20.9074 17.3476H20.9066Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_87_33" x1="15" y1="2.29447e-07" x2="15" y2="30" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB"/>
      <stop offset="1" stop-color="#2072F3"/>
    </linearGradient>
    <clipPath id="clip0_87_33">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>`),u=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,p=r.JW`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`,g=r.JW`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M14.9978 7.80003H27.4668C26.2032 5.61107 24.3857 3.79333 22.1968 2.52955C20.008 1.26577 17.525 0.600485 14.9975 0.600586C12.47 0.600687 9.98712 1.26617 7.79838 2.53012C5.60964 3.79408 3.79221 5.61197 2.52881 7.80103L8.76281 18.599L8.76881 18.598C8.13412 17.5044 7.79906 16.2628 7.79743 14.9983C7.79579 13.7339 8.12764 12.4914 8.7595 11.3961C9.39136 10.3008 10.3009 9.39159 11.3963 8.76005C12.4918 8.12851 13.7344 7.79702 14.9988 7.79903L14.9978 7.80003Z" fill="url(#paint0_linear_87_32)"/>
<path d="M21.237 18.5981L15.003 29.3961C17.5305 29.3961 20.0134 28.7308 22.2022 27.467C24.391 26.2032 26.2086 24.3854 27.4721 22.1965C28.7356 20.0075 29.4006 17.5245 29.4003 14.997C29.3999 12.4695 28.7342 9.9867 27.47 7.7981H15.002L15 7.8041C16.2642 7.80168 17.5067 8.13257 18.6022 8.76342C19.6977 9.39428 20.6076 10.3028 21.2401 11.3974C21.8726 12.492 22.2053 13.734 22.2048 14.9982C22.2042 16.2623 21.8704 17.504 21.237 18.5981Z" fill="url(#paint1_linear_87_32)"/>
<path d="M8.76502 18.601L2.53102 7.80298C1.26664 9.99172 0.600848 12.4748 0.600586 15.0025C0.600324 17.5302 1.2656 20.0134 2.52953 22.2024C3.79345 24.3914 5.61145 26.209 7.80071 27.4725C9.98998 28.736 12.4733 29.4008 15.001 29.4L21.236 18.602L21.232 18.598C20.6022 19.6941 19.6944 20.6049 18.6003 21.2383C17.5062 21.8717 16.2644 22.2055 15.0002 22.2059C13.7359 22.2063 12.4939 21.8733 11.3994 21.2406C10.3049 20.6079 9.39657 19.6977 8.76602 18.602L8.76502 18.601Z" fill="url(#paint2_linear_87_32)"/>
<path d="M14.9998 22.2C16.9094 22.2 18.7407 21.4415 20.091 20.0912C21.4412 18.741 22.1998 16.9096 22.1998 15C22.1998 13.0905 21.4412 11.2591 20.091 9.90888C18.7407 8.55862 16.9094 7.80005 14.9998 7.80005C13.0902 7.80005 11.2589 8.55862 9.90864 9.90888C8.55837 11.2591 7.7998 13.0905 7.7998 15C7.7998 16.9096 8.55837 18.741 9.90864 20.0912C11.2589 21.4415 13.0902 22.2 14.9998 22.2Z" fill="white"/>
<path d="M14.9998 20.7C16.5115 20.7 17.9614 20.0995 19.0303 19.0306C20.0993 17.9616 20.6998 16.5118 20.6998 15C20.6998 13.4883 20.0993 12.0385 19.0303 10.9695C17.9614 9.90058 16.5115 9.30005 14.9998 9.30005C13.4881 9.30005 12.0383 9.90058 10.9693 10.9695C9.90034 12.0385 9.2998 13.4883 9.2998 15C9.2998 16.5118 9.90034 17.9616 10.9693 19.0306C12.0383 20.0995 13.4881 20.7 14.9998 20.7Z" fill="#1A73E8"/>
<defs>
  <linearGradient id="paint0_linear_87_32" x1="3.29381" y1="2.99503" x2="38.0998" y2="2.99503" gradientUnits="userSpaceOnUse">
    <stop stop-color="#D93025"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
  <linearGradient id="paint1_linear_87_32" x1="17.953" y1="29.1431" x2="34.194" y2="-0.298904" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FCC934"/>
    <stop offset="1" stop-color="#FBBC04"/>
  </linearGradient>
  <linearGradient id="paint2_linear_87_32" x1="22.873" y1="28.2" x2="6.63202" y2="-1.24102" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1E8E3E"/>
    <stop offset="1" stop-color="#34A853"/>
  </linearGradient>
</defs>
</svg>`,f=r.JW` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,m=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,y=r.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`,w=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,v=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,b=r.JW`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,C=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,x=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,$=r.JW` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`,k=r.JW`<svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 5.83334C11.6666 2.61168 14.2783 0 17.5 0H25.8334C29.055 0 31.6666 2.61168 31.6666 5.83334V14.1666C31.6666 17.3883 29.055 20 25.8334 20H17.5C14.2783 20 11.6666 17.3883 11.6666 14.1666V5.83334Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M19.5068 13.7499L22.4309 5.83331H23.2895L20.3654 13.7499H19.5068Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M0 5.41666C0 2.42513 2.42513 0 5.41666 0C8.40821 0 10.8334 2.42513 10.8334 5.41666V14.5833C10.8334 17.5748 8.40821 20 5.41666 20C2.42513 20 0 17.5748 0 14.5833V5.41666Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M4.89581 12.4997V11.458H5.93747V12.4997H4.89581Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M32.5 10C32.5 4.47715 36.6896 0 41.8578 0H65.6422C70.8104 0 75 4.47715 75 10C75 15.5229 70.8104 20 65.6422 20H41.8578C36.6896 20 32.5 15.5229 32.5 10Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M61.7108 12.4475V7.82751H62.5266V8.52418C62.8199 8.01084 63.4157 7.70834 64.0757 7.70834C65.0749 7.70834 65.7715 8.34084 65.7715 9.56918V12.4475H64.9649V9.61503C64.9649 8.80831 64.5066 8.38668 63.8374 8.38668C63.1132 8.38668 62.5266 8.9642 62.5266 9.78001V12.4475H61.7108Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M56.5671 12.4475L55.7147 7.82748H56.4846L57.0896 11.6409L57.8871 9.12916H58.6479L59.4363 11.6134L60.0505 7.82748H60.8204L59.9679 12.4475H59.0513L58.2721 10.0458L57.4838 12.4475H56.5671Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M52.9636 12.5666C51.5611 12.5666 50.7361 11.5217 50.7361 10.1375C50.7361 8.76254 51.5611 7.70834 52.9636 7.70834C54.3661 7.70834 55.1911 8.76254 55.1911 10.1375C55.1911 11.5217 54.3661 12.5666 52.9636 12.5666ZM52.9636 11.8883C53.9719 11.8883 54.357 11.0266 54.357 10.1283C54.357 9.23914 53.9719 8.38668 52.9636 8.38668C51.9552 8.38668 51.5702 9.23914 51.5702 10.1283C51.5702 11.0266 51.9552 11.8883 52.9636 11.8883Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M47.8507 12.5666C46.494 12.5666 45.6415 11.5308 45.6415 10.1375C45.6415 8.75337 46.494 7.70834 47.8507 7.70834C48.9965 7.70834 50.0048 8.35917 49.8948 10.3483H46.4756C46.5398 11.2009 46.934 11.8975 47.8507 11.8975C48.4648 11.8975 48.8681 11.5217 49.0057 11.0908H49.8123C49.684 11.8609 48.9598 12.5666 47.8507 12.5666ZM46.494 9.73416H49.1065C49.0423 8.80831 48.6114 8.37751 47.8507 8.37751C47.0165 8.37751 46.604 8.98254 46.494 9.73416Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M41.7284 12.4475V7.82748H42.5625V8.60665C42.8559 8.09332 43.3601 7.82748 43.8825 7.82748H44.9917V8.60665H43.8184C43.0851 8.60665 42.5625 9.08331 42.5625 10.0092V12.4475H41.7284Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>

`,E=r.JW`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`,M=r.JW`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,P=r.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,L=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,S=r.JW`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`,A=r.JW`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`,z=r.JW`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,H=r.JW`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,R=r.JW`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var I=i(67569),Z=i(26109),B=i(43494);const T=r.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    height: inherit;
    width: inherit;
    object-fit: contain;
    object-position: center;
  }
`;var W=function(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a};const _={add:"ph-plus",allWallets:"ph-dots-three",arrowBottom:"ph-arrow-down",arrowBottomCircle:"ph-arrow-circle-down",arrowClockWise:"ph-arrow-clockwise",arrowLeft:"ph-arrow-left",arrowRight:"ph-arrow-right",arrowTop:"ph-arrow-up",arrowTopRight:"ph-arrow-up-right",bank:"ph-bank",bin:"ph-trash",browser:"ph-browser",card:"ph-credit-card",checkmark:"ph-check",checkmarkBold:"ph-check",chevronBottom:"ph-caret-down",chevronLeft:"ph-caret-left",chevronRight:"ph-caret-right",chevronTop:"ph-caret-up",clock:"ph-clock",close:"ph-x",coinPlaceholder:"ph-circle-half",compass:"ph-compass",copy:"ph-copy",desktop:"ph-desktop",dollar:"ph-currency-dollar",download:"ph-vault",exclamationCircle:"ph-warning-circle",extension:"ph-puzzle-piece",externalLink:"ph-arrow-square-out",filters:"ph-funnel-simple",helpCircle:"ph-question",id:"ph-identification-card",image:"ph-image",info:"ph-info",lightbulb:"ph-lightbulb",mail:"ph-envelope",mobile:"ph-device-mobile",more:"ph-dots-three",networkPlaceholder:"ph-globe",nftPlaceholder:"ph-image",plus:"ph-plus",power:"ph-power",qrCode:"ph-qr-code",questionMark:"ph-question",refresh:"ph-arrow-clockwise",recycleHorizontal:"ph-arrows-clockwise",search:"ph-magnifying-glass",sealCheck:"ph-seal-check",send:"ph-paper-plane-right",signOut:"ph-sign-out",spinner:"ph-spinner",swapHorizontal:"ph-arrows-left-right",swapVertical:"ph-arrows-down-up",threeDots:"ph-dots-three",user:"ph-user",verify:"ph-seal-check",verifyFilled:"ph-seal-check",wallet:"ph-wallet",warning:"ph-warning",warningCircle:"ph-warning-circle",appStore:"",apple:"",bitcoin:"",chromeStore:"",cursor:"",discord:"",ethereum:"",etherscan:"",facebook:"",farcaster:"",github:"",google:"",playStore:"",reown:"",solana:"",telegram:"",twitch:"",twitterIcon:"",twitter:"",walletConnect:"",walletConnectBrown:"",walletConnectLightBrown:"",x:""},U={"ph-arrow-circle-down":()=>i.e(485).then(i.bind(i,30485)),"ph-arrow-clockwise":()=>i.e(7753).then(i.bind(i,27753)),"ph-arrow-down":()=>i.e(9657).then(i.bind(i,69657)),"ph-arrow-left":()=>i.e(4438).then(i.bind(i,64438)),"ph-arrow-right":()=>i.e(4217).then(i.bind(i,44217)),"ph-arrow-square-out":()=>i.e(9296).then(i.bind(i,59296)),"ph-arrows-down-up":()=>i.e(6283).then(i.bind(i,6283)),"ph-arrows-left-right":()=>i.e(6903).then(i.bind(i,46903)),"ph-arrow-up":()=>i.e(3462).then(i.bind(i,73462)),"ph-arrow-up-right":()=>i.e(8920).then(i.bind(i,38920)),"ph-arrows-clockwise":()=>i.e(8058).then(i.bind(i,88058)),"ph-bank":()=>i.e(336).then(i.bind(i,70336)),"ph-browser":()=>i.e(858).then(i.bind(i,20858)),"ph-caret-down":()=>i.e(3851).then(i.bind(i,83851)),"ph-caret-left":()=>i.e(312).then(i.bind(i,60312)),"ph-caret-right":()=>i.e(3203).then(i.bind(i,73203)),"ph-caret-up":()=>i.e(6412).then(i.bind(i,36412)),"ph-check":()=>i.e(6570).then(i.bind(i,86570)),"ph-circle-half":()=>i.e(9229).then(i.bind(i,79229)),"ph-clock":()=>i.e(1992).then(i.bind(i,71992)),"ph-compass":()=>i.e(5882).then(i.bind(i,25882)),"ph-copy":()=>i.e(1349).then(i.bind(i,61349)),"ph-credit-card":()=>i.e(2143).then(i.bind(i,62143)),"ph-currency-dollar":()=>i.e(8589).then(i.bind(i,28589)),"ph-desktop":()=>i.e(6738).then(i.bind(i,66738)),"ph-device-mobile":()=>i.e(6262).then(i.bind(i,56262)),"ph-dots-three":()=>i.e(3638).then(i.bind(i,3638)),"ph-vault":()=>i.e(6598).then(i.bind(i,66598)),"ph-envelope":()=>i.e(2798).then(i.bind(i,12798)),"ph-funnel-simple":()=>i.e(7040).then(i.bind(i,37040)),"ph-globe":()=>i.e(5845).then(i.bind(i,95845)),"ph-identification-card":()=>i.e(6238).then(i.bind(i,86238)),"ph-image":()=>i.e(7805).then(i.bind(i,67805)),"ph-info":()=>i.e(6526).then(i.bind(i,66526)),"ph-lightbulb":()=>i.e(9571).then(i.bind(i,59571)),"ph-magnifying-glass":()=>i.e(5803).then(i.bind(i,55803)),"ph-paper-plane-right":()=>i.e(5264).then(i.bind(i,5264)),"ph-plus":()=>i.e(1634).then(i.bind(i,1634)),"ph-power":()=>i.e(3617).then(i.bind(i,53617)),"ph-puzzle-piece":()=>i.e(2272).then(i.bind(i,92272)),"ph-qr-code":()=>i.e(9780).then(i.bind(i,89780)),"ph-question":()=>i.e(654).then(i.bind(i,90654)),"ph-question-circle":()=>i.e(9237).then(i.bind(i,79237)),"ph-seal-check":()=>i.e(4771).then(i.bind(i,34771)),"ph-sign-out":()=>i.e(4899).then(i.bind(i,84899)),"ph-spinner":()=>i.e(3317).then(i.bind(i,53317)),"ph-trash":()=>i.e(1884).then(i.bind(i,21884)),"ph-user":()=>i.e(5195).then(i.bind(i,25195)),"ph-wallet":()=>i.e(2125).then(i.bind(i,92125)),"ph-warning":()=>i.e(3758).then(i.bind(i,23758)),"ph-warning-circle":()=>i.e(4042).then(i.bind(i,84042)),"ph-x":()=>i.e(626).then(i.bind(i,10626))},F={appStore:d,apple:u,bitcoin:p,chromeStore:g,cursor:f,discord:m,ethereum:y,etherscan:w,facebook:v,farcaster:b,github:C,google:x,playStore:$,reown:k,solana:E,telegram:M,twitch:P,twitter:R,twitterIcon:L,walletConnect:S,walletConnectInvert:A,walletConnectBrown:H,walletConnectLightBrown:z,x:R},O={"accent-primary":I.f.tokens.core.iconAccentPrimary,"accent-certified":I.f.tokens.core.iconAccentCertified,default:I.f.tokens.theme.iconDefault,success:I.f.tokens.core.iconSuccess,error:I.f.tokens.core.iconError,warning:I.f.tokens.core.iconWarning,inverse:I.f.tokens.theme.iconInverse};let N=class extends r.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.weight="bold",this.color="inherit"}render(){this.style.cssText=`\n      --local-width: ${"inherit"===this.size?"inherit":`var(--apkt-spacing-${{xxs:"2",xs:"3",sm:"3",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7",inherit:"inherit"}[this.size]})`};\n      --local-color: ${"inherit"===this.color?"inherit":O[this.color]}\n    `;const t=_[this.name];if(t&&""!==t){const e=U[t];e&&e();const i={_$litStatic$:t,r:a};return h`<${i} size=${{xxs:"0.5em",xs:"0.75em",sm:"0.75em",md:"1em",mdl:"1.25em",lg:"1.25em",xl:"1.5em",xxl:"1.75em"}[this.size]} weight="${this.weight}"></${i}>`}return F[this.name]||h``}};N.styles=[Z.W5,T],W([(0,o.MZ)()],N.prototype,"size",void 0),W([(0,o.MZ)()],N.prototype,"name",void 0),W([(0,o.MZ)()],N.prototype,"weight",void 0),W([(0,o.MZ)()],N.prototype,"color",void 0),N=W([(0,B.E)("wui-icon")],N)},97518:(t,e,i)=>{const r=i(49953),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return n[4*(t-1)+0];case r.M:return n[4*(t-1)+1];case r.Q:return n[4*(t-1)+2];case r.H:return n[4*(t-1)+3];default:return}}},99605:(t,e,i)=>{"use strict";i.d(e,{H:()=>n});var r=i(36752),o=i(7804);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=(0,o.u$)(class extends o.WL{constructor(t){if(super(t),t.type!==o.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return r.c0}})},99899:t=>{function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e}}]);