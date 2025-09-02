"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2670],{1608:(e,t,o)=>{var i=o(97199),r=o(25707),a=o(35198),n=o(26109),s=o(43494);const c=o(67569).AH`
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
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
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
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var l=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let d=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const e={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`\n      --local-width: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      --local-height: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?i.qy`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?i.qy`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:i.qy`<img src=${(0,a.J)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};d.styles=[n.W5,c],l([(0,r.MZ)()],d.prototype,"src",void 0),l([(0,r.MZ)()],d.prototype,"logo",void 0),l([(0,r.MZ)()],d.prototype,"icon",void 0),l([(0,r.MZ)()],d.prototype,"iconColor",void 0),l([(0,r.MZ)()],d.prototype,"alt",void 0),l([(0,r.MZ)()],d.prototype,"size",void 0),l([(0,r.MZ)({type:Boolean})],d.prototype,"boxed",void 0),l([(0,r.MZ)({type:Boolean})],d.prototype,"rounded",void 0),l([(0,r.MZ)({type:Boolean})],d.prototype,"fullSize",void 0),d=l([(0,s.E)("wui-image")],d)},3830:(e,t,o)=>{o.d(t,{J:()=>l});var i=o(97199),r=o(25707),a=o(78508),n=o(69161);o(89056);const s=n.AH`
  :host {
    display: block;
    width: inherit;
  }
`;var c=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let l=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.viewState=a.I.state.view,this.history=a.I.state.history.join(","),this.unsubscribe.push(a.I.subscribeKey("view",()=>{this.history=a.I.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return i.qy`${this.templatePageContainer()}`}templatePageContainer(){return i.qy`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=a.I.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return i.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return i.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return i.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return i.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return i.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return i.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return i.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return i.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return i.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return i.qy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return i.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return i.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return i.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return i.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return i.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return i.qy`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return i.qy`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return i.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return i.qy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return i.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return i.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return i.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return i.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return i.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return i.qy`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return i.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return i.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return i.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return i.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return i.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return i.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return i.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return i.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return i.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return i.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return i.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return i.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return i.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return i.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return i.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return i.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return i.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return i.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return i.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return i.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return i.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return i.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return i.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return i.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return i.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return i.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return i.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return i.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return i.qy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return i.qy`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return i.qy`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return i.qy`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return i.qy`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`}}};l.styles=[s],c([(0,r.wk)()],l.prototype,"viewState",void 0),c([(0,r.wk)()],l.prototype,"history",void 0),l=c([(0,n.EM)("w3m-router")],l)},7565:(e,t,o)=>{o.d(t,{C5:()=>a,Ky:()=>r,PG:()=>i});const i=/[.*+?^${}()|[\]\\]/gu,r=/[0-9,.]/u,a="https://reown.com"},7804:(e,t,o)=>{o.d(t,{OA:()=>i,WL:()=>a,u$:()=>r});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=e=>(...t)=>({_$litDirective$:e,values:t});class a{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8163:(e,t,o)=>{var i=o(97199),r=o(25707),a=o(67569),n=o(26109),s=o(43494);const c=i.AH`
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
`;var l=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let d=class extends i.WF{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){const e={primary:a.f.tokens.theme.textPrimary,secondary:a.f.tokens.theme.textSecondary,tertiary:a.f.tokens.theme.textTertiary,invert:a.f.tokens.theme.textInvert,error:a.f.tokens.core.textError,warning:a.f.tokens.core.textWarning,"accent-primary":a.f.tokens.core.textAccentPrimary};return this.style.cssText=`\n      --local-color: ${"inherit"===this.color?"inherit":e[this.color]};\n      `,this.dataset.size=this.size,i.qy`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};d.styles=[n.W5,c],l([(0,r.MZ)()],d.prototype,"color",void 0),l([(0,r.MZ)()],d.prototype,"size",void 0),d=l([(0,s.E)("wui-loading-spinner")],d)},24954:(e,t,o)=>{var i=o(97199),r=(o(96478),o(84206),o(48832),o(7565)),a=o(26109),n=o(43494);const s=o(67569).AH`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var c=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let l=class extends i.WF{render(){return i.qy`
      <a
        data-testid="ux-branding-reown"
        href=${r.C5}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};l.styles=[a.W5,a.fD,s],l=c([(0,n.E)("wui-ux-by-reown")],l)},25707:(e,t,o)=>{o.d(t,{MZ:()=>i.M,wk:()=>r.w});var i=o(75694),r=o(44290)},26751:(e,t,o)=>{var i=o(97199),r=o(25707),a=(o(96478),o(84206),o(26109)),n=o(43494);const s=o(67569).AH`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({spacing:e})=>e[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var c=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const l={sm:"sm-medium",md:"md-medium"},d={accent:"accent-primary",secondary:"secondary"};let h=class extends i.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return i.qy`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${d[this.variant]}
          variant=${l[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?i.qy`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};h.styles=[a.W5,a.fD,s],c([(0,r.MZ)()],h.prototype,"size",void 0),c([(0,r.MZ)({type:Boolean})],h.prototype,"disabled",void 0),c([(0,r.MZ)()],h.prototype,"variant",void 0),c([(0,r.MZ)()],h.prototype,"icon",void 0),h=c([(0,n.E)("wui-link")],h)},34558:(e,t,o)=>{o.d(t,{y:()=>s});var i=o(24376),r=o(78508),a=o(26),n=o(41482);const s={getTabsByNamespace:e=>Boolean(e)&&e===i.o.CHAIN.EVM?!1===a.H.state.remoteFeatures?.activity?n.o.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):n.o.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const e=r.I.state.view;if(n.o.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,o=a.H.state.features?.legalCheckbox;return!(!e&&!t||o)}return n.o.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}}},35198:(e,t,o)=>{o.d(t,{J:()=>r});var i=o(36752);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=e=>e??i.s6},38253:(e,t,o)=>{o(81355)},38436:(e,t,o)=>{var i=o(97199),r=o(25707),a=o(35198),n=(o(96478),o(26109)),s=o(43494);const c=o(67569).AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} !important;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:e})=>e[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:e})=>e.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:e})=>e.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var l=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let d=class extends i.WF{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,i.qy`
      <wui-icon size=${(0,a.J)(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};d.styles=[n.W5,n.fD,c],l([(0,r.MZ)()],d.prototype,"icon",void 0),l([(0,r.MZ)()],d.prototype,"size",void 0),l([(0,r.MZ)()],d.prototype,"padding",void 0),l([(0,r.MZ)()],d.prototype,"color",void 0),d=l([(0,s.E)("wui-icon-box")],d)},42670:(e,t,o)=>{o.r(t),o.d(t,{AppKitModal:()=>de,W3mModal:()=>le,W3mModalBase:()=>ce,W3mRouterContainer:()=>ue});var i=o(97199),r=o(25707),a=o(35198),n=o(75910),s=o(24376),c=o(26),l=o(96396),d=o(6056),h=o(36010),p=o(88249),u=o(78508),g=o(18121),m=o(1122);const f={isUnsupportedChainView:()=>"UnsupportedChain"===u.I.state.view||"SwitchNetwork"===u.I.state.view&&u.I.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void l.W.shake();await m.U.isSIWXCloseDisabled()?l.W.shake():("DataCapture"!==u.I.state.view&&"DataCaptureOtpConfirm"!==u.I.state.view||g.x.disconnect(),l.W.close())}};var w=o(68996),y=o(21871),v=o(26742),b=o(81760),k=o(69161),x=o(26109),C=o(43494),$=o(67569);const S=$.AH`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
  }
`;var T=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let P=class extends i.WF{render(){return i.qy`<slot></slot>`}};P.styles=[x.W5,S],P=T([(0,C.E)("wui-card")],P);o(60310);var A=o(71655);o(96478),o(84206),o(48832);const W=$.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var E=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const I={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let M=class extends i.WF{constructor(){super(...arguments),this.message="",this.type="info"}render(){return i.qy`
      <wui-flex
        data-type=${(0,a.J)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${I[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){A.h.close()}};M.styles=[x.W5,W],E([(0,r.MZ)()],M.prototype,"message",void 0),E([(0,r.MZ)()],M.prototype,"type",void 0),M=E([(0,C.E)("wui-alertbar")],M);const z=k.AH`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;var H=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const L={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let R=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.open=A.h.state.open,this.onOpen(!0),this.unsubscribe.push(A.h.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=A.h.state,o=L[t];return i.qy`
      <wui-alertbar
        message=${e}
        backgroundColor=${o?.backgroundColor}
        iconColor=${o?.iconColor}
        icon=${o?.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};R.styles=z,H([(0,r.wk)()],R.prototype,"open",void 0),R=H([(0,k.EM)("w3m-alertbar")],R);var Z=o(63450),N=o(27601),O=o(73337),B=o(90184);o(64865),o(1608);const D=$.AH`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var q=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const F={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},U={lg:"lg",md:"md",sm:"sm"};let j=class extends i.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return i.qy`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const e=F[this.size];return this.text?i.qy`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return i.qy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const e=U[this.size];return i.qy` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};j.styles=[x.W5,x.fD,D],q([(0,r.MZ)()],j.prototype,"imageSrc",void 0),q([(0,r.MZ)()],j.prototype,"text",void 0),q([(0,r.MZ)()],j.prototype,"size",void 0),q([(0,r.MZ)()],j.prototype,"type",void 0),q([(0,r.MZ)({type:Boolean})],j.prototype,"disabled",void 0),j=q([(0,C.E)("wui-select")],j);o(38253),o(45090);var V=o(41482);const _=k.AH`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var G=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const J=["SmartSessionList"];function K(){const e=u.I.state.data?.connector?.name,t=u.I.state.data?.wallet?.name,o=u.I.state.data?.network?.name,i=t??e,r=h.a.getConnectors();return{Connect:`Connect ${1===r.length&&"w3m-email"===r[0]?.id?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:i?`Get ${i}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:o??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:Z.U.state.socialProvider?Z.U.state.socialProvider.charAt(0).toUpperCase()+Z.U.state.socialProvider.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in Progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from an Exchange",PayWithExchangeSelectAsset:"Select Asset"}}let Y=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.heading=K()[u.I.state.view],this.network=d.W.state.activeCaipNetwork,this.networkImage=N.$.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.I.state.view,this.viewDirection="",this.unsubscribe.push(O.j.subscribeNetworkImages(()=>{this.networkImage=N.$.getNetworkImage(this.network)}),u.I.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.heading=K()[e]},V.o.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),d.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=N.$.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return i.qy`
      <wui-flex
        .padding=${["0","5","0","5"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){B.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.I.push("WhatIsAWallet")}async onClose(){await f.safeClose()}rightHeaderTemplate(){const e=c.H?.state?.features?.smartSessions;return"Account"===u.I.state.view&&e?i.qy`<wui-flex>
      <wui-icon-link
        icon="clock"
        variant="primary"
        @click=${()=>u.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return i.qy`
      <wui-icon-link
        icon="close"
        variant="primary"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=J.includes(this.view);return i.qy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text variant="lg-regular" color="primary" data-testid="w3m-header-text">
          ${this.heading}
        </wui-text>
        ${e?i.qy`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=u.I.state,t="Connect"===e,o=c.H.state.enableEmbedded,r="ApproveTransaction"===e,n="ConnectingSiwe"===e,s="Account"===e,l=c.H.state.enableNetworkSwitch,d=r||n||t&&o;return s&&l?i.qy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,a.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,a.J)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?i.qy`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:i.qy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(B.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.I.push("Networks"))}isAllowedNetworkSwitch(){const e=d.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,o=e?.find(({id:e})=>e===this.network?.id);return t||!o}onViewChange(){const{history:e}=u.I.state;let t=V.o.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=V.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=u.I.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.I.goBack()}};Y.styles=_,G([(0,r.wk)()],Y.prototype,"heading",void 0),G([(0,r.wk)()],Y.prototype,"network",void 0),G([(0,r.wk)()],Y.prototype,"networkImage",void 0),G([(0,r.wk)()],Y.prototype,"showBack",void 0),G([(0,r.wk)()],Y.prototype,"prevHistoryLength",void 0),G([(0,r.wk)()],Y.prototype,"view",void 0),G([(0,r.wk)()],Y.prototype,"viewDirection",void 0),Y=G([(0,k.EM)("w3m-header")],Y);o(8163),o(38436);const X=$.AH`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var Q=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let ee=class extends i.WF{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return i.qy`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?i.qy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:i.qy`<wui-icon-box
      size="md"
      color=${{success:"success",error:"error",warning:"warning",info:"default"}[this.variant]}
      icon=${{success:"checkmark",error:"warning",warning:"warningCircle",info:"info"}[this.variant]}
    ></wui-icon-box>`}};ee.styles=[x.W5,X],Q([(0,r.MZ)()],ee.prototype,"message",void 0),Q([(0,r.MZ)()],ee.prototype,"variant",void 0),ee=Q([(0,C.E)("wui-snackbar")],ee);const te=i.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var oe=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let ie=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=y.P.state.open,this.unsubscribe.push(y.P.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=y.P.state;return i.qy` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),y.P.state.autoClose&&(this.timeout=setTimeout(()=>y.P.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ie.styles=te,oe([(0,r.wk)()],ie.prototype,"open",void 0),ie=oe([(0,k.EM)("w3m-snackbar")],ie);o(74625);var re=o(34558);o(89056),o(3830);const ae=k.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: ${({spacing:e})=>e[1]};
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var ne=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const se="scroll-lock";class ce extends i.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=c.H.state.enableEmbedded,this.open=l.W.state.open,this.caipAddress=d.W.state.activeCaipAddress,this.caipNetwork=d.W.state.activeCaipNetwork,this.shake=l.W.state.shake,this.filterByNamespace=h.a.state.filterByNamespace,this.initializeTheming(),p.N.prefetchAnalyticsConfig(),this.unsubscribe.push(l.W.subscribeKey("open",e=>e?this.onOpen():this.onClose()),l.W.subscribeKey("shake",e=>this.shake=e),d.W.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),d.W.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),c.H.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),h.a.subscribeKey("filterByNamespace",e=>{this.filterByNamespace===e||d.W.getAccountData(e)?.caipAddress||(p.N.fetchRecommendedWallets(),this.filterByNamespace=e)}),u.I.subscribeKey("view",()=>{this.dataset.border=re.y.hasFooter()?"true":"false"}))}firstUpdated(){if(this.dataset.border=re.y.hasFooter()?"true":"false",this.caipAddress){if(this.enableEmbedded)return l.W.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--apkt-borderRadius-8), 44px)":"0px"};\n    `,this.enableEmbedded?i.qy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?i.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return i.qy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,a.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){await f.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=w.W.state,o=k.Zv.getColorTheme(t);(0,k.RF)(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),y.P.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=se,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${se}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:o}=t.target;!o||o.includes("W3M-")||o.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const t=d.W.state.isSwitchingNamespace,o="ProfileWallets"===u.I.state.view;e?await this.onConnected({caipAddress:e,isSwitchingNamespace:t,isInProfileView:o}):t||this.enableEmbedded||o||l.W.close(),await m.U.initializeIfEnabled(e),this.caipAddress=e,d.W.setIsSwitchingNamespace(!1)}async onConnected(e){if(e.isInProfileView)return;const{chainNamespace:t,chainId:o,address:i}=n.C.parseCaipAddress(e.caipAddress),r=`${t}:${o}`,a=!v.w.getPlainAddress(this.caipAddress),s=await m.U.getSessions({address:i,caipNetworkId:r}),c=!m.U.getSIWX()||s.some(e=>e.data.accountAddress===i),d=e.isSwitchingNamespace&&c&&!this.enableEmbedded,h=this.enableEmbedded&&a;d?u.I.goBack():h&&l.W.close()}onNewNetwork(e){const t=this.caipNetwork,o=t?.caipNetworkId?.toString(),i=t?.chainNamespace,r=e?.caipNetworkId?.toString(),a=e?.chainNamespace,n=o!==r,c=n&&!(i!==a),h=t?.name===s.o.UNSUPPORTED_NETWORK_NAME,p="ConnectingExternal"===u.I.state.view,g="ProfileWallets"===u.I.state.view,m=!d.W.getAccountData(e?.chainNamespace)?.caipAddress,f="UnsupportedChain"===u.I.state.view,w=l.W.state.open;let y=!1;this.enableEmbedded&&"SwitchNetwork"===u.I.state.view&&(y=!0),n&&b.GN.resetState(),!w||p||g||(m?n&&(y=!0):(f||c&&!h)&&(y=!0)),y&&"SIWXSignMessage"!==u.I.state.view&&u.I.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(p.N.prefetch(),p.N.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}ce.styles=ae,ne([(0,r.MZ)({type:Boolean})],ce.prototype,"enableEmbedded",void 0),ne([(0,r.wk)()],ce.prototype,"open",void 0),ne([(0,r.wk)()],ce.prototype,"caipAddress",void 0),ne([(0,r.wk)()],ce.prototype,"caipNetwork",void 0),ne([(0,r.wk)()],ce.prototype,"shake",void 0),ne([(0,r.wk)()],ce.prototype,"filterByNamespace",void 0);let le=class extends ce{};le=ne([(0,k.EM)("w3m-modal")],le);let de=class extends ce{};de=ne([(0,k.EM)("appkit-modal")],de);const he=k.AH`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var pe=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let ue=class extends i.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px"}updated(e){if(e.has("history")){const e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(e=>{for(const t of e)if(t.target===this.getWrapper()){let e=t.contentRect.height;const o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");e=e+o,this.style.setProperty("--local-border-bottom-radius",o?"var(--apkt-borderRadius-5)":"0px"),this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){const e=this.getWrapper();e&&this.resizeObserver&&this.resizeObserver.unobserve(e)}render(){return i.qy`
      <div class="container">
        <div class="page" view-direction="${this.viewDirection}">
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){const t=e.split(",").filter(Boolean),o=this.historyState.split(",").filter(Boolean),i=o.length,r=t.length,a=t[t.length-1]||"",n=k.Zv.cssDurationToNumber(this.transitionDuration);let s="";r>i?s="next":r<i?s="prev":r===i&&t[r-1]!==o[i-1]&&(s="next"),this.viewDirection=`${s}-${a}`,setTimeout(()=>{this.historyState=e,this.setView?.(a)},n),setTimeout(()=>{this.viewDirection=""},2*n)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}};ue.styles=[he],pe([(0,r.MZ)({type:String})],ue.prototype,"transitionDuration",void 0),pe([(0,r.MZ)({type:String})],ue.prototype,"transitionFunction",void 0),pe([(0,r.MZ)({type:String})],ue.prototype,"history",void 0),pe([(0,r.MZ)({type:String})],ue.prototype,"view",void 0),pe([(0,r.MZ)({attribute:!1})],ue.prototype,"setView",void 0),pe([(0,r.wk)()],ue.prototype,"viewDirection",void 0),pe([(0,r.wk)()],ue.prototype,"historyState",void 0),pe([(0,r.wk)()],ue.prototype,"previousHeight",void 0),ue=pe([(0,k.EM)("w3m-router-container")],ue)},44290:(e,t,o)=>{o.d(t,{w:()=>r});var i=o(75694);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(e){return(0,i.M)({...e,state:!0,attribute:!1})}},45090:(e,t,o)=>{o(84206)},48832:(e,t,o)=>{var i=o(97199),r=o(25707),a=o(26109),n=o(63612),s=o(43494);const c=i.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;var l=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let d=class extends i.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&n.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&n.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&n.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&n.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&n.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&n.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&n.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&n.Z.getSpacingStyles(this.margin,3)};\n      width: ${this.width};\n    `,i.qy`<slot></slot>`}};d.styles=[a.W5,c],l([(0,r.MZ)()],d.prototype,"flexDirection",void 0),l([(0,r.MZ)()],d.prototype,"flexWrap",void 0),l([(0,r.MZ)()],d.prototype,"flexBasis",void 0),l([(0,r.MZ)()],d.prototype,"flexGrow",void 0),l([(0,r.MZ)()],d.prototype,"flexShrink",void 0),l([(0,r.MZ)()],d.prototype,"alignItems",void 0),l([(0,r.MZ)()],d.prototype,"justifyContent",void 0),l([(0,r.MZ)()],d.prototype,"columnGap",void 0),l([(0,r.MZ)()],d.prototype,"rowGap",void 0),l([(0,r.MZ)()],d.prototype,"gap",void 0),l([(0,r.MZ)()],d.prototype,"padding",void 0),l([(0,r.MZ)()],d.prototype,"margin",void 0),l([(0,r.MZ)()],d.prototype,"width",void 0),d=l([(0,s.E)("wui-flex")],d)},51636:(e,t,o)=>{o(96478)},52799:(e,t,o)=>{var i=o(97199),r=o(25707),a=(o(96478),o(26109)),n=o(43494);const s=o(67569).AH`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var c=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return i.qy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};l.styles=[a.W5,a.fD,s],c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),c([(0,r.MZ)()],l.prototype,"iconColor",void 0),c([(0,r.MZ)()],l.prototype,"variant",void 0),l=c([(0,n.E)("wui-icon-link")],l)},55743:(e,t,o)=>{var i=o(97199),r=o(25707),a=o(26),n=o(69161);o(60310),o(45090),o(24954);const s=n.AH`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var c=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let l=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,o=a.H.state.features?.legalCheckbox;return!e&&!t||o?i.qy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:i.qy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=a.H.state;return e?i.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=a.H.state;return e?i.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?i.qy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:i.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};l.styles=[s],c([(0,r.wk)()],l.prototype,"remoteFeatures",void 0),l=c([(0,n.EM)("w3m-legal-footer")],l)},60310:(e,t,o)=>{o(48832)},64865:(e,t,o)=>{o(52799)},74625:(e,t,o)=>{var i=o(97199),r=o(25707),a=o(99598),n=o(69161);o(60310),o(51636),o(45090);const s=n.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var c=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let l=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.open=a.I.state.open,this.message=a.I.state.message,this.triggerRect=a.I.state.triggerRect,this.variant=a.I.state.variant,this.unsubscribe.push(a.I.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,i.qy`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};l.styles=[s],c([(0,r.wk)()],l.prototype,"open",void 0),c([(0,r.wk)()],l.prototype,"message",void 0),c([(0,r.wk)()],l.prototype,"triggerRect",void 0),c([(0,r.wk)()],l.prototype,"variant",void 0),l=c([(0,n.EM)("w3m-tooltip")],l)},75694:(e,t,o)=>{o.d(t,{M:()=>n});var i=o(36124);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r={attribute:!0,type:String,converter:i.W3,reflect:!1,hasChanged:i.Ec},a=(e=r,t,o)=>{const{kind:i,metadata:a}=o;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),n.set(o.name,e),"accessor"===i){const{name:i}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=o;return function(o){const r=this[i];t.call(this,o),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function n(e){return(t,o)=>"object"==typeof o?a(e,t,o):((e,t,o)=>{const i=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}},78306:(e,t,o)=>{var i=o(97199),r=o(26),a=o(90184),n=o(74496),s=o(6056),c=o(78508),l=o(69161),d=(o(60310),o(51636),o(26751),o(45090),o(10152));const h=i.AH``;var p=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let u=class extends i.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.H.state;return e||t?i.qy`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return i.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){a.E.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,n.lj)(s.W.state.activeChain)===d.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),c.I.push("WhatIsABuy")}};u.styles=[h],u=p([(0,l.EM)("w3m-onramp-providers-footer")],u)},81355:(e,t,o)=>{var i=o(97199),r=o(25707),a=(o(96478),o(84206),o(26109)),n=o(43494);const s=o(67569).AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var c=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let l=class extends i.WF{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e="md"===this.size?"md-medium":"sm-medium",t="md"===this.size?"md":"sm";return i.qy`
      ${this.icon?i.qy`<wui-icon size=${t} name=${this.icon}></wui-icon>`:null}
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};l.styles=[a.W5,s],c([(0,r.MZ)()],l.prototype,"variant",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),l=c([(0,n.E)("wui-tag")],l)},81760:(e,t,o)=>{o.d(t,{GN:()=>A});var i=o(52095),r=o(4707),a=o(58144),n=o(24376),s=o(10152),c=o(85455),l=o(74496),d=o(62944),h=o(26742),p=o(80036);const u={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,o){const i=u.getGasPriceInEther(t,o);return a.S.bigNumber(e).times(i).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:o,toTokenAmount:i}){const r=a.S.bigNumber(e).times(t),n=a.S.bigNumber(i).times(o);return r.minus(n).div(r).times(100).toNumber()},getMaxSlippage(e,t){const o=a.S.bigNumber(e).div(100);return a.S.multiply(t,o).toNumber()},getProviderFee:(e,t=.0085)=>a.S.bigNumber(e).times(t).toString(),isInsufficientNetworkTokenForGas(e,t){const o=t||"0";return!!a.S.bigNumber(e).eq(0)||a.S.bigNumber(a.S.bigNumber(o)).gt(e)},isInsufficientSourceTokenForSwap(e,t,o){const i=o?.find(e=>e.address===t)?.quantity?.numeric;return a.S.bigNumber(i||"0").lt(e)}};var g=o(23082),m=o(63450),f=o(71655),w=o(75595),y=o(6056),v=o(18121),b=o(36010),k=o(90184),x=o(78508),C=o(21871);const $=15e4;Error;const S={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:d.oU.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},T=(0,i.BX)({...S}),P={state:T,subscribe:e=>(0,i.B1)(T,()=>e(T)),subscribeKey:(e,t)=>(0,r.u$)(T,e,t),getParams(){const e=y.W.state.activeChain,t=m.U.getCaipAddress(e)??y.W.state.activeCaipAddress,o=h.w.getPlainAddress(t),i=(0,l.K1)(),r=b.a.getConnectorId(y.W.state.activeChain);if(!o)throw new Error("No address found to swap the tokens from.");const s=!T.toToken?.address||!T.toToken?.decimals,c=!T.sourceToken?.address||!T.sourceToken?.decimals||!a.S.bigNumber(T.sourceTokenAmount).gt(0),d=!T.sourceTokenAmount;return{networkAddress:i,fromAddress:o,fromCaipAddress:t,sourceTokenAddress:T.sourceToken?.address,toTokenAddress:T.toToken?.address,toTokenAmount:T.toTokenAmount,toTokenDecimals:T.toToken?.decimals,sourceTokenAmount:T.sourceTokenAmount,sourceTokenDecimals:T.sourceToken?.decimals,invalidToToken:s,invalidSourceToken:c,invalidSourceTokenAmount:d,availableToSwap:t&&!s&&!c&&!d,isAuthConnector:r===n.o.CONNECTOR_ID.AUTH}},setSourceToken(e){if(!e)return T.sourceToken=e,T.sourceTokenAmount="",void(T.sourceTokenPriceInUSD=0);T.sourceToken=e,A.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){T.sourceTokenAmount=e},setToToken(e){if(!e)return T.toToken=e,T.toTokenAmount="",void(T.toTokenPriceInUSD=0);T.toToken=e,A.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){T.toTokenAmount=e?a.S.toFixed(e,6):""},async setTokenPrice(e,t){let o=T.tokensPriceMap[e]||0;o||(T.loadingPrices=!0,o=await A.getAddressPrice(e)),"sourceToken"===t?T.sourceTokenPriceInUSD=o:"toToken"===t&&(T.toTokenPriceInUSD=o),T.loadingPrices&&(T.loadingPrices=!1),A.getParams().availableToSwap&&A.swapTokens()},switchTokens(){if(T.initializing||!T.initialized)return;const e=T.toToken?{...T.toToken}:void 0,t=T.sourceToken?{...T.sourceToken}:void 0,o=e&&""===T.toTokenAmount?"1":T.toTokenAmount;A.setSourceToken(e),A.setToToken(t),A.setSourceTokenAmount(o),A.setToTokenAmount(""),A.swapTokens()},resetState(){T.myTokensWithBalance=S.myTokensWithBalance,T.tokensPriceMap=S.tokensPriceMap,T.initialized=S.initialized,T.initializing=S.initializing,T.sourceToken=S.sourceToken,T.sourceTokenAmount=S.sourceTokenAmount,T.sourceTokenPriceInUSD=S.sourceTokenPriceInUSD,T.toToken=S.toToken,T.toTokenAmount=S.toTokenAmount,T.toTokenPriceInUSD=S.toTokenPriceInUSD,T.networkPrice=S.networkPrice,T.networkTokenSymbol=S.networkTokenSymbol,T.networkBalanceInUSD=S.networkBalanceInUSD,T.inputError=S.inputError},resetValues(){const{networkAddress:e}=A.getParams(),t=T.tokens?.find(t=>t.address===e);A.setSourceToken(t),A.setToToken(void 0)},getApprovalLoadingState:()=>T.loadingApprovalTransaction,clearError(){T.transactionError=void 0},async initializeState(){if(!T.initializing){if(T.initializing=!0,!T.initialized)try{await A.fetchTokens(),T.initialized=!0}catch(e){T.initialized=!1,C.P.showError("Failed to initialize swap"),x.I.goBack()}T.initializing=!1}},async fetchTokens(){const{networkAddress:e}=A.getParams();await A.getNetworkTokenPrice(),await A.getMyTokensWithBalance();const t=T.myTokensWithBalance?.find(t=>t.address===e);t&&(T.networkTokenSymbol=t.symbol,A.setSourceToken(t),A.setSourceTokenAmount("0"))},async getTokenList(){const e=y.W.state.activeCaipNetwork?.caipNetworkId;if(T.caipNetworkId!==e||!T.tokens)try{T.tokensLoading=!0;const t=await p.s.getTokenList(e);T.tokens=t,T.caipNetworkId=e,T.popularTokens=t.sort((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0),T.suggestedTokens=t.filter(e=>!!d.oU.SWAP_SUGGESTED_TOKENS.includes(e.symbol))}catch(e){T.tokens=[],T.popularTokens=[],T.suggestedTokens=[]}finally{T.tokensLoading=!1}},async getAddressPrice(e){const t=T.tokensPriceMap[e];if(t)return t;const o=await w.T.fetchTokenPrice({addresses:[e]}),i=o?.fungibles||[],r=[...T.tokens||[],...T.myTokensWithBalance||[]],a=r?.find(t=>t.address===e)?.symbol,n=i.find(e=>e.symbol.toLowerCase()===a?.toLowerCase())?.price||0,s=parseFloat(n.toString());return T.tokensPriceMap[e]=s,s},async getNetworkTokenPrice(){const{networkAddress:e}=A.getParams(),t=await w.T.fetchTokenPrice({addresses:[e]}).catch(()=>(C.P.showError("Failed to fetch network token price"),{fungibles:[]})),o=t.fungibles?.[0],i=o?.price.toString()||"0";T.tokensPriceMap[e]=parseFloat(i),T.networkTokenSymbol=o?.symbol||"",T.networkPrice=i},async getMyTokensWithBalance(e){const t=await c.Z.getMyTokensWithBalance(e),o=p.s.mapBalancesToSwapTokens(t);o&&(await A.getInitialGasPrice(),A.setBalances(o))},setBalances(e){const{networkAddress:t}=A.getParams(),o=y.W.state.activeCaipNetwork;if(!o)return;const i=e.find(e=>e.address===t);e.forEach(e=>{T.tokensPriceMap[e.address]=e.price||0}),T.myTokensWithBalance=e.filter(e=>e.address.startsWith(o.caipNetworkId)),T.networkBalanceInUSD=i?a.S.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){const e=await p.s.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(y.W.state?.activeCaipNetwork?.chainNamespace){case n.o.CHAIN.SOLANA:return T.gasFee=e.standard??"0",T.gasPriceInUSD=a.S.multiply(e.standard,T.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(T.gasFee),gasPriceInUSD:Number(T.gasPriceInUSD)};case n.o.CHAIN.EVM:default:const t=e.standard??"0",o=BigInt(t),i=BigInt($),r=u.getGasPriceInUSD(T.networkPrice,i,o);return T.gasFee=t,T.gasPriceInUSD=r,{gasPrice:o,gasPriceInUSD:r}}},async swapTokens(){const e=m.U.state.address,t=T.sourceToken,o=T.toToken,i=a.S.bigNumber(T.sourceTokenAmount).gt(0);if(i||A.setToTokenAmount(""),!o||!t||T.loadingPrices||!i)return;T.loadingQuote=!0;const r=a.S.bigNumber(T.sourceTokenAmount).times(10**t.decimals).round(0);try{const i=await w.T.fetchSwapQuote({userAddress:e,from:t.address,to:o.address,gasPrice:T.gasFee,amount:r.toString()});T.loadingQuote=!1;const n=i?.quotes?.[0]?.toAmount;if(!n)return void f.h.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");const s=a.S.bigNumber(n).div(10**o.decimals).toString();A.setToTokenAmount(s);A.hasInsufficientToken(T.sourceTokenAmount,t.address)?T.inputError="Insufficient balance":(T.inputError=void 0,A.setTransactionDetails())}catch(e){T.loadingQuote=!1,T.inputError="Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=A.getParams(),o=T.sourceToken,i=T.toToken;if(e&&t&&o&&i&&!T.loadingQuote)try{T.loadingBuildTransaction=!0;let t;return t=await p.s.fetchSwapAllowance({userAddress:e,tokenAddress:o.address,sourceTokenAmount:T.sourceTokenAmount,sourceTokenDecimals:o.decimals})?await A.createSwapTransaction():await A.createAllowanceTransaction(),T.loadingBuildTransaction=!1,T.fetchError=!1,t}catch(e){return x.I.goBack(),C.P.showError("Failed to check allowance"),T.loadingBuildTransaction=!1,T.approvalTransaction=void 0,T.swapTransaction=void 0,void(T.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:o}=A.getParams();if(e&&o){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const i=await w.T.generateApproveCalldata({from:t,to:o,userAddress:e}),r=h.w.getPlainAddress(i.tx.from);if(!r)throw new Error("SwapController:createAllowanceTransaction - address is required");const a={data:i.tx.data,to:r,gasPrice:BigInt(i.tx.eip155.gasPrice),value:BigInt(i.tx.value),toAmount:T.toTokenAmount};return T.swapTransaction=void 0,T.approvalTransaction={data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount},{data:a.data,to:a.to,gasPrice:a.gasPrice,value:a.value,toAmount:a.toAmount}}catch(e){return x.I.goBack(),C.P.showError("Failed to create approval transaction"),T.approvalTransaction=void 0,T.swapTransaction=void 0,void(T.fetchError=!0)}}},async createSwapTransaction(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:o}=A.getParams(),i=T.sourceToken,r=T.toToken;if(!(t&&o&&i&&r))return;const a=v.x.parseUnits(o,i.decimals)?.toString();try{const o=await w.T.generateSwapCalldata({userAddress:t,from:i.address,to:r.address,amount:a,disableEstimate:!0}),n=i.address===e,s=BigInt(o.tx.eip155.gas),c=BigInt(o.tx.eip155.gasPrice),l=h.w.getPlainAddress(o.tx.to);if(!l)throw new Error("SwapController:createSwapTransaction - address is required");const d={data:o.tx.data,to:l,gas:s,gasPrice:c,value:n?BigInt(a??"0"):BigInt("0"),toAmount:T.toTokenAmount};return T.gasPriceInUSD=u.getGasPriceInUSD(T.networkPrice,s,c),T.approvalTransaction=void 0,T.swapTransaction=d,d}catch(e){return x.I.goBack(),C.P.showError("Failed to create transaction"),T.approvalTransaction=void 0,T.swapTransaction=void 0,void(T.fetchError=!0)}},onEmbeddedWalletApprovalSuccess(){C.P.showLoading("Approve limit increase in your wallet"),x.I.replace("SwapPreview")},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:o}=A.getParams();T.loadingApprovalTransaction=!0;o?x.I.pushTransactionStack({onSuccess:A.onEmbeddedWalletApprovalSuccess}):C.P.showLoading("Approve limit increase in your wallet");try{await v.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.o.CHAIN.EVM}),await A.swapTokens(),await A.getTransaction(),T.approvalTransaction=void 0,T.loadingApprovalTransaction=!1}catch(e){const t=e;T.transactionError=t?.displayMessage,T.loadingApprovalTransaction=!1,C.P.showError(t?.displayMessage||"Transaction error"),k.E.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:t?.displayMessage||t?.message||"Unknown",network:y.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:A.state.sourceToken?.symbol||"",swapToToken:A.state.toToken?.symbol||"",swapFromAmount:A.state.sourceTokenAmount||"",swapToAmount:A.state.toTokenAmount||"",isSmartAccount:(0,l.lj)(n.o.CHAIN.EVM)===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;const{fromAddress:t,toTokenAmount:o,isAuthConnector:i}=A.getParams();T.loadingTransaction=!0;const r=`Swapping ${T.sourceToken?.symbol} to ${a.S.formatNumberToLocalString(o,3)} ${T.toToken?.symbol}`,c=`Swapped ${T.sourceToken?.symbol} to ${a.S.formatNumberToLocalString(o,3)} ${T.toToken?.symbol}`;i?x.I.pushTransactionStack({onSuccess(){x.I.replace("Account"),C.P.showLoading(r),P.resetState()}}):C.P.showLoading("Confirm transaction in your wallet");try{const o=[T.sourceToken?.address,T.toToken?.address].join(","),r=await v.x.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:n.o.CHAIN.EVM});return T.loadingTransaction=!1,C.P.showSuccess(c),k.E.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:y.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:A.state.sourceToken?.symbol||"",swapToToken:A.state.toToken?.symbol||"",swapFromAmount:A.state.sourceTokenAmount||"",swapToAmount:A.state.toTokenAmount||"",isSmartAccount:(0,l.lj)(n.o.CHAIN.EVM)===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),P.resetState(),i||x.I.replace("Account"),P.getMyTokensWithBalance(o),r}catch(e){const t=e;return T.transactionError=t?.displayMessage,T.loadingTransaction=!1,C.P.showError(t?.displayMessage||"Transaction error"),void k.E.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:t?.displayMessage||t?.message||"Unknown",network:y.W.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:A.state.sourceToken?.symbol||"",swapToToken:A.state.toToken?.symbol||"",swapFromAmount:A.state.sourceTokenAmount||"",swapToAmount:A.state.toTokenAmount||"",isSmartAccount:(0,l.lj)(n.o.CHAIN.EVM)===s.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken:(e,t)=>u.isInsufficientSourceTokenForSwap(e,t,T.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=A.getParams();e&&t&&(T.gasPriceInUSD=u.getGasPriceInUSD(T.networkPrice,BigInt(T.gasFee),BigInt($)),T.priceImpact=u.getPriceImpact({sourceTokenAmount:T.sourceTokenAmount,sourceTokenPriceInUSD:T.sourceTokenPriceInUSD,toTokenPriceInUSD:T.toTokenPriceInUSD,toTokenAmount:T.toTokenAmount}),T.maxSlippage=u.getMaxSlippage(T.slippage,T.toTokenAmount),T.providerFee=u.getProviderFee(T.sourceTokenAmount))}},A=(0,g.X)(P)},84206:(e,t,o)=>{var i=o(97199),r=o(25707),a=o(99605),n=o(67569),s=o(26109),c=o(43494);const l=n.AH`
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
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h1-regular {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h1-medium {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-regular-mono {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h2-regular {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-medium {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-regular-mono {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h3-regular {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-medium {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-regular-mono {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h4-regular {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-medium {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-regular-mono {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h5-regular {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-medium {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-regular-mono {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h6-regular {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-medium {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-regular-mono {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-lg-regular {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-medium {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-regular-mono {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-md-regular {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-medium {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-regular-mono {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-sm-regular {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-medium {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }
`;var d=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const h={primary:n.f.tokens.theme.textPrimary,secondary:n.f.tokens.theme.textSecondary,tertiary:n.f.tokens.theme.textTertiary,invert:n.f.tokens.theme.textInvert,error:n.f.tokens.core.textError,warning:n.f.tokens.core.textWarning,"accent-primary":n.f.tokens.core.textAccentPrimary};let p=class extends i.WF{constructor(){super(...arguments),this.variant="md-regular",this.color="inherit",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: ${"inherit"===this.color?"inherit":h[this.color??"primary"]};\n      `,i.qy`<slot class=${(0,a.H)(e)}></slot>`}};p.styles=[s.W5,l],d([(0,r.MZ)()],p.prototype,"variant",void 0),d([(0,r.MZ)()],p.prototype,"color",void 0),d([(0,r.MZ)()],p.prototype,"align",void 0),d([(0,r.MZ)()],p.prototype,"lineClamp",void 0),p=d([(0,c.E)("wui-text")],p)},89056:(e,t,o)=>{o.d(t,{H:()=>h});var i=o(97199),r=o(25707),a=o(78508),n=o(90184),s=o(69161),c=(o(55743),o(78306),o(34558));const l=s.AH`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var d=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let h=class extends i.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=a.I.state.view}firstUpdated(){this.status=c.y.hasFooter()?"show":"hide",this.unsubscribe.push(a.I.subscribeKey("view",e=>{if(this.view=e,this.status=c.y.hasFooter()?"show":"hide","hide"===this.status){document.documentElement.style.setProperty("--apkt-footer-height","0px")}})),this.resizeObserver=new ResizeObserver(e=>{for(const t of e)if(t.target===this.getWrapper()){const e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}}),this.resizeObserver.observe(this.getWrapper())}render(){return i.qy`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return c.y.hasFooter()?i.qy` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return i.qy`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return i.qy`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return i.qy` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){n.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),a.I.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};h.styles=[l],d([(0,r.wk)()],h.prototype,"status",void 0),d([(0,r.wk)()],h.prototype,"view",void 0),h=d([(0,s.EM)("w3m-footer")],h)},96478:(e,t,o)=>{var i=o(97199),r=o(25707),a=o(36752);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=Symbol.for(""),s=e=>{if(e?.r===n)return e?._$litStatic$},c=new Map,l=e=>(t,...o)=>{const i=o.length;let r,a;const n=[],l=[];let d,h=0,p=!1;for(;h<i;){for(d=t[h];h<i&&void 0!==(a=o[h],r=s(a));)d+=r+t[++h],p=!0;h!==i&&l.push(a),n.push(d),h++}if(h===i&&n.push(t[i]),p){const e=n.join("$$lit$$");void 0===(t=c.get(e))&&(n.raw=n,c.set(e,t=n)),o=l}return e(t,...o)},d=l(a.qy),h=(l(a.JW),l(a.ej),i.JW`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
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
</svg>`),p=i.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,u=i.JW`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`,g=i.JW`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
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
</svg>`,m=i.JW` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,f=i.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,w=i.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`,y=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,v=i.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,b=i.JW`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
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
</svg>`,k=i.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,x=i.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,C=i.JW` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`,$=i.JW`<svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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

`,S=i.JW`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`,T=i.JW`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
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
</svg>`,P=i.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,A=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,W=i.JW`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`,E=i.JW`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`,I=i.JW`
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
`,M=i.JW`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,z=i.JW`<svg fill="none" viewBox="0 0 41 40">
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
</svg>`;var H=o(67569),L=o(26109),R=o(43494);const Z=i.AH`
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
`;var N=function(e,t,o,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,o,n):r(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const O={add:"ph-plus",allWallets:"ph-dots-three",arrowBottom:"ph-arrow-down",arrowBottomCircle:"ph-arrow-circle-down",arrowClockWise:"ph-arrow-clockwise",arrowLeft:"ph-arrow-left",arrowRight:"ph-arrow-right",arrowTop:"ph-arrow-up",arrowTopRight:"ph-arrow-up-right",bank:"ph-bank",bin:"ph-trash",browser:"ph-browser",card:"ph-credit-card",checkmark:"ph-check",checkmarkBold:"ph-check",chevronBottom:"ph-caret-down",chevronLeft:"ph-caret-left",chevronRight:"ph-caret-right",chevronTop:"ph-caret-up",clock:"ph-clock",close:"ph-x",coinPlaceholder:"ph-circle-half",compass:"ph-compass",copy:"ph-copy",desktop:"ph-desktop",dollar:"ph-currency-dollar",download:"ph-vault",exclamationCircle:"ph-warning-circle",extension:"ph-puzzle-piece",externalLink:"ph-arrow-square-out",filters:"ph-funnel-simple",helpCircle:"ph-question",id:"ph-identification-card",image:"ph-image",info:"ph-info",lightbulb:"ph-lightbulb",mail:"ph-envelope",mobile:"ph-device-mobile",more:"ph-dots-three",networkPlaceholder:"ph-globe",nftPlaceholder:"ph-image",plus:"ph-plus",power:"ph-power",qrCode:"ph-qr-code",questionMark:"ph-question",refresh:"ph-arrow-clockwise",recycleHorizontal:"ph-arrows-clockwise",search:"ph-magnifying-glass",sealCheck:"ph-seal-check",send:"ph-paper-plane-right",signOut:"ph-sign-out",spinner:"ph-spinner",swapHorizontal:"ph-arrows-left-right",swapVertical:"ph-arrows-down-up",threeDots:"ph-dots-three",user:"ph-user",verify:"ph-seal-check",verifyFilled:"ph-seal-check",wallet:"ph-wallet",warning:"ph-warning",warningCircle:"ph-warning-circle",appStore:"",apple:"",bitcoin:"",chromeStore:"",cursor:"",discord:"",ethereum:"",etherscan:"",facebook:"",farcaster:"",github:"",google:"",playStore:"",reown:"",solana:"",telegram:"",twitch:"",twitterIcon:"",twitter:"",walletConnect:"",walletConnectBrown:"",walletConnectLightBrown:"",x:""},B={"ph-arrow-circle-down":()=>o.e(485).then(o.bind(o,30485)),"ph-arrow-clockwise":()=>o.e(7753).then(o.bind(o,27753)),"ph-arrow-down":()=>o.e(9657).then(o.bind(o,69657)),"ph-arrow-left":()=>o.e(4438).then(o.bind(o,64438)),"ph-arrow-right":()=>o.e(4217).then(o.bind(o,44217)),"ph-arrow-square-out":()=>o.e(9296).then(o.bind(o,59296)),"ph-arrows-down-up":()=>o.e(6283).then(o.bind(o,6283)),"ph-arrows-left-right":()=>o.e(6903).then(o.bind(o,46903)),"ph-arrow-up":()=>o.e(3462).then(o.bind(o,73462)),"ph-arrow-up-right":()=>o.e(8920).then(o.bind(o,38920)),"ph-arrows-clockwise":()=>o.e(8058).then(o.bind(o,88058)),"ph-bank":()=>o.e(336).then(o.bind(o,70336)),"ph-browser":()=>o.e(858).then(o.bind(o,20858)),"ph-caret-down":()=>o.e(3851).then(o.bind(o,83851)),"ph-caret-left":()=>o.e(312).then(o.bind(o,60312)),"ph-caret-right":()=>o.e(3203).then(o.bind(o,73203)),"ph-caret-up":()=>o.e(6412).then(o.bind(o,36412)),"ph-check":()=>o.e(6570).then(o.bind(o,86570)),"ph-circle-half":()=>o.e(9229).then(o.bind(o,79229)),"ph-clock":()=>o.e(1992).then(o.bind(o,71992)),"ph-compass":()=>o.e(5882).then(o.bind(o,25882)),"ph-copy":()=>o.e(1349).then(o.bind(o,61349)),"ph-credit-card":()=>o.e(2143).then(o.bind(o,62143)),"ph-currency-dollar":()=>o.e(8589).then(o.bind(o,28589)),"ph-desktop":()=>o.e(6738).then(o.bind(o,66738)),"ph-device-mobile":()=>o.e(6262).then(o.bind(o,56262)),"ph-dots-three":()=>o.e(3638).then(o.bind(o,3638)),"ph-vault":()=>o.e(6598).then(o.bind(o,66598)),"ph-envelope":()=>o.e(2798).then(o.bind(o,12798)),"ph-funnel-simple":()=>o.e(7040).then(o.bind(o,37040)),"ph-globe":()=>o.e(5845).then(o.bind(o,95845)),"ph-identification-card":()=>o.e(6238).then(o.bind(o,86238)),"ph-image":()=>o.e(7805).then(o.bind(o,67805)),"ph-info":()=>o.e(6526).then(o.bind(o,66526)),"ph-lightbulb":()=>o.e(9571).then(o.bind(o,59571)),"ph-magnifying-glass":()=>o.e(5803).then(o.bind(o,55803)),"ph-paper-plane-right":()=>o.e(5264).then(o.bind(o,5264)),"ph-plus":()=>o.e(1634).then(o.bind(o,1634)),"ph-power":()=>o.e(3617).then(o.bind(o,53617)),"ph-puzzle-piece":()=>o.e(2272).then(o.bind(o,92272)),"ph-qr-code":()=>o.e(9780).then(o.bind(o,89780)),"ph-question":()=>o.e(654).then(o.bind(o,90654)),"ph-question-circle":()=>o.e(9237).then(o.bind(o,79237)),"ph-seal-check":()=>o.e(4771).then(o.bind(o,34771)),"ph-sign-out":()=>o.e(4899).then(o.bind(o,84899)),"ph-spinner":()=>o.e(3317).then(o.bind(o,53317)),"ph-trash":()=>o.e(1884).then(o.bind(o,21884)),"ph-user":()=>o.e(5195).then(o.bind(o,25195)),"ph-wallet":()=>o.e(2125).then(o.bind(o,92125)),"ph-warning":()=>o.e(3758).then(o.bind(o,23758)),"ph-warning-circle":()=>o.e(4042).then(o.bind(o,84042)),"ph-x":()=>o.e(626).then(o.bind(o,10626))},D={appStore:h,apple:p,bitcoin:u,chromeStore:g,cursor:m,discord:f,ethereum:w,etherscan:y,facebook:v,farcaster:b,github:k,google:x,playStore:C,reown:$,solana:S,telegram:T,twitch:P,twitter:z,twitterIcon:A,walletConnect:W,walletConnectInvert:E,walletConnectBrown:M,walletConnectLightBrown:I,x:z},q={"accent-primary":H.f.tokens.core.iconAccentPrimary,"accent-certified":H.f.tokens.core.iconAccentCertified,default:H.f.tokens.theme.iconDefault,success:H.f.tokens.core.iconSuccess,error:H.f.tokens.core.iconError,warning:H.f.tokens.core.iconWarning,inverse:H.f.tokens.theme.iconInverse};let F=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.weight="bold",this.color="inherit"}render(){this.style.cssText=`\n      --local-width: ${"inherit"===this.size?"inherit":`var(--apkt-spacing-${{xxs:"2",xs:"3",sm:"3",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7",inherit:"inherit"}[this.size]})`};\n      --local-color: ${"inherit"===this.color?"inherit":q[this.color]}\n    `;const e=O[this.name];if(e&&""!==e){const t=B[e];t&&t();const o={_$litStatic$:e,r:n};return d`<${o} size=${{xxs:"0.5em",xs:"0.75em",sm:"0.75em",md:"1em",mdl:"1.25em",lg:"1.25em",xl:"1.5em",xxl:"1.75em"}[this.size]} weight="${this.weight}"></${o}>`}return D[this.name]||d``}};F.styles=[L.W5,Z],N([(0,r.MZ)()],F.prototype,"size",void 0),N([(0,r.MZ)()],F.prototype,"name",void 0),N([(0,r.MZ)()],F.prototype,"weight",void 0),N([(0,r.MZ)()],F.prototype,"color",void 0),F=N([(0,R.E)("wui-icon")],F)},99598:(e,t,o)=>{o.d(t,{I:()=>c});var i=o(52095),r=o(4707),a=o(23082);const n=(0,i.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),s={state:n,subscribe:e=>(0,i.B1)(n,()=>e(n)),subscribeKey:(e,t)=>(0,r.u$)(n,e,t),showTooltip({message:e,triggerRect:t,variant:o}){n.open=!0,n.message=e,n.triggerRect=t,n.variant=o},hide(){n.open=!1,n.message="",n.triggerRect={width:0,height:0,top:0,left:0}}},c=(0,a.X)(s)},99605:(e,t,o)=>{o.d(t,{H:()=>a});var i=o(36752),r=o(7804);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=(0,r.u$)(class extends r.WL{constructor(e){if(super(e),e.type!==r.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const o=e.element.classList;for(const e of this.st)e in t||(o.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return i.c0}})}}]);