(self.webpackChunk=self.webpackChunk||[]).push([[7369],{1608:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(35198),a=i(26109),s=i(43494);const l=i(67569).AH`
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
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const e={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`\n      --local-width: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      --local-height: ${this.size?`var(--apkt-spacing-${e[this.size]});`:"100%"};\n      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?o.qy`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?o.qy`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:o.qy`<img src=${(0,r.J)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};d.styles=[a.W5,l],c([(0,n.MZ)()],d.prototype,"src",void 0),c([(0,n.MZ)()],d.prototype,"logo",void 0),c([(0,n.MZ)()],d.prototype,"icon",void 0),c([(0,n.MZ)()],d.prototype,"iconColor",void 0),c([(0,n.MZ)()],d.prototype,"alt",void 0),c([(0,n.MZ)()],d.prototype,"size",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"boxed",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"rounded",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"fullSize",void 0),d=c([(0,s.E)("wui-image")],d)},1971:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(35198),a=i(91629),s=(i(96478),i(84206),i(26109)),l=i(43494);const c=i(67569).AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var d=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,a._)(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return o.qy` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,a.K)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,r.J)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?o.qy`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?o.qy`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?o.qy`<wui-icon name="spinner" size="md"></wui-icon>`:o.qy`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?o.qy`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?o.qy`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};u.styles=[s.W5,s.fD,c],d([(0,n.MZ)()],u.prototype,"icon",void 0),d([(0,n.MZ)({type:Boolean})],u.prototype,"disabled",void 0),d([(0,n.MZ)({type:Boolean})],u.prototype,"loading",void 0),d([(0,n.MZ)()],u.prototype,"placeholder",void 0),d([(0,n.MZ)()],u.prototype,"type",void 0),d([(0,n.MZ)()],u.prototype,"value",void 0),d([(0,n.MZ)()],u.prototype,"errorText",void 0),d([(0,n.MZ)()],u.prototype,"warningText",void 0),d([(0,n.MZ)()],u.prototype,"onSubmit",void 0),d([(0,n.MZ)()],u.prototype,"size",void 0),d([(0,n.MZ)({attribute:!1})],u.prototype,"onKeyDown",void 0),u=d([(0,l.E)("wui-input-text")],u)},2550:(e,t,i)=>{"use strict";var o,n=i(97199),r=i(25707),a=i(48169),s=i(6056),l=i(86360),c=i(26742),d=i(78508),u=i(26),h=i(90184),p=i(74496),g=i(69161),w=(i(60310),i(77616),i(26751),i(45090),i(35198)),f=(i(84206),i(26109));!function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"}(o||(o={}));var m=i(43494),y=(i(1608),i(38436),i(67569));const b=y.AH`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var v=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let x=class extends n.WF{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images;this.images.length||(this.dataset.noImages="true");const i="NFT"===e?.type,o=i?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",r=(t?.url?"NFT"===t.type:i)?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`\n    --local-left-border-radius: ${o};\n    --local-right-border-radius: ${r};\n    `,n.qy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,i=e?.type;return 2===this.images.length&&(e?.url||t?.url)?n.qy`<div class="swap-images-container">
        ${e?.url?n.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?n.qy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?n.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===i?n.qy`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:n.qy`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-primary";return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?n.qy`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${e}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontal":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};x.styles=[b],v([(0,r.MZ)()],x.prototype,"type",void 0),v([(0,r.MZ)()],x.prototype,"status",void 0),v([(0,r.MZ)()],x.prototype,"direction",void 0),v([(0,r.MZ)({type:Boolean})],x.prototype,"onlyDirectionIcon",void 0),v([(0,r.MZ)({type:Array})],x.prototype,"images",void 0),v([(0,r.MZ)({type:Object})],x.prototype,"secondImage",void 0),x=v([(0,m.E)("wui-transaction-visual")],x);const C=y.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var k=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $=class extends n.WF{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return n.qy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,w.J)(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${o[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?n.qy`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?n.qy`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};$.styles=[f.W5,C],k([(0,r.MZ)()],$.prototype,"type",void 0),k([(0,r.MZ)({type:Array})],$.prototype,"descriptions",void 0),k([(0,r.MZ)()],$.prototype,"date",void 0),k([(0,r.MZ)({type:Boolean})],$.prototype,"onlyDirectionIcon",void 0),k([(0,r.MZ)()],$.prototype,"status",void 0),k([(0,r.MZ)()],$.prototype,"direction",void 0),k([(0,r.MZ)({type:Array})],$.prototype,"images",void 0),$=k([(0,m.E)("wui-transaction-list-item")],$);i(92286),i(48832),i(96478);const E=y.AH`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var A=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const S={sm:"xxs",lg:"md"};let I=class extends n.WF{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return n.qy`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[e,t]=this.images;return 2===this.images.length&&(e||t)?n.qy`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${t} alt="Swap image"></wui-image>
      `:e?n.qy`<wui-image src=${e} alt="Swap image"></wui-image>`:null}fiatTemplate(){return n.qy`<wui-icon
      class="fallback-icon"
      size=${S[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return n.qy`<wui-icon
      class="fallback-icon"
      size=${S[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[e]=this.images;return e?n.qy`<wui-image src=${e} alt="Token image"></wui-image> `:n.qy`<wui-icon
      class="fallback-icon"
      name=${"nft"===this.type?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?n.qy`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:n.qy`<wui-icon
      class="direction-icon"
      size=${S[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return"trade"===this.type?"arrowClockWise":"arrowBottom"}};I.styles=[E],A([(0,r.MZ)()],I.prototype,"type",void 0),A([(0,r.MZ)()],I.prototype,"size",void 0),A([(0,r.MZ)()],I.prototype,"statusImageUrl",void 0),A([(0,r.MZ)({type:Array})],I.prototype,"images",void 0),I=A([(0,m.E)("wui-transaction-thumbnail")],I);const R=y.AH`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var M=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let W=class extends n.WF{render(){return n.qy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};W.styles=[f.W5,R],W=M([(0,m.E)("wui-transaction-list-item-loader")],W);var T=i(10152);const P=g.AH`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var O=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const N="last-transaction";let L=class extends n.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=s.W.state.activeCaipAddress,this.transactionsByYear=l.W.state.transactionsByYear,this.loading=l.W.state.loading,this.empty=l.W.state.empty,this.next=l.W.state.next,l.W.clearCursor(),this.unsubscribe.push(s.W.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(l.W.resetTransactions(),l.W.fetchTransactions(e)),this.caipAddress=e}),s.W.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),l.W.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return n.qy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){l.W.resetTransactions(),this.caipAddress&&l.W.fetchTransactions(c.w.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{const t=parseInt(e,10),i=new Array(12).fill(null).map((e,i)=>{const o=g.tt.getTransactionGroupTitle(t,i),n=this.transactionsByYear[t]?.[i];return{groupTitle:o,transactions:n}}).filter(({transactions:e})=>e).reverse();return i.map(({groupTitle:e,transactions:t},o)=>{const r=o===i.length-1;return t?n.qy`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${r?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${e}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(t,r)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,t){const{date:i,descriptions:o,direction:r,isAllNFT:a,images:s,status:l,transfers:c,type:d}=this.getTransactionListItemProps(e),u=c?.length>1;return 2===c?.length&&!a?n.qy`
        <wui-transaction-list-item
          date=${i}
          .direction=${r}
          id=${t&&this.next?N:""}
          status=${l}
          type=${d}
          .images=${s}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:u?c.map((e,o)=>{const r=g.tt.getTransferDescription(e),a=t&&o===c.length-1;return n.qy` <wui-transaction-list-item
          date=${i}
          direction=${e.direction}
          id=${a&&this.next?N:""}
          status=${l}
          type=${d}
          .onlyDirectionIcon=${!0}
          .images=${[s[o]]}
          .descriptions=${[r]}
        ></wui-transaction-list-item>`}):n.qy`
      <wui-transaction-list-item
        date=${i}
        .direction=${r}
        id=${t&&this.next?N:""}
        status=${l}
        type=${d}
        .images=${s}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map((i,o)=>{const r=t&&o===e.length-1;return n.qy`${this.templateRenderTransaction(i,r)}`})}emptyStateActivity(){return n.qy`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return n.qy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?n.qy`${this.emptyStateAccount()}`:n.qy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(n.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){d.I.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=u.H.state;this.paginationObserver=new IntersectionObserver(([t])=>{t?.isIntersecting&&!this.loading&&(l.W.fetchTransactions(c.w.getPlainAddress(this.caipAddress)),h.E.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:c.w.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:(0,p.lj)(s.W.state.activeChain)===T.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${N}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const t=a.r.formatDate(e?.metadata?.minedAt),i=g.tt.getTransactionDescriptions(e),o=e?.transfers,n=e?.transfers?.[0],r=Boolean(n)&&e?.transfers?.every(e=>Boolean(e.nft_info)),s=g.tt.getTransactionImages(o);return{date:t,direction:n?.direction,descriptions:i,isAllNFT:r,images:s,status:e.metadata?.status,transfers:o,type:e.metadata?.operationType}}};L.styles=P,O([(0,r.MZ)()],L.prototype,"page",void 0),O([(0,r.wk)()],L.prototype,"caipAddress",void 0),O([(0,r.wk)()],L.prototype,"transactionsByYear",void 0),O([(0,r.wk)()],L.prototype,"loading",void 0),O([(0,r.wk)()],L.prototype,"empty",void 0),O([(0,r.wk)()],L.prototype,"next",void 0),L=O([(0,g.EM)("w3m-activity-list")],L)},2731:(e,t)=>{const i=new Uint8Array(512),o=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)i[t]=e,o[e]=t,e<<=1,256&e&&(e^=285);for(let e=255;e<512;e++)i[e]=i[e-255]}(),t.log=function(e){if(e<1)throw new Error("log("+e+")");return o[e]},t.exp=function(e){return i[e]},t.mul=function(e,t){return 0===e||0===t?0:i[o[e]+o[t]]}},3206:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(35198),a=(i(84206),i(26109)),s=i(43494);i(46162);const l=i(67569).AH`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};d.styles=[a.W5,a.fD,l],c([(0,n.MZ)()],d.prototype,"logo",void 0),c([(0,n.MZ)()],d.prototype,"name",void 0),c([(0,n.MZ)()],d.prototype,"tabIdx",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"disabled",void 0),d=c([(0,s.E)("wui-list-social")],d)},3830:(e,t,i)=>{"use strict";i.d(t,{J:()=>c});var o=i(97199),n=i(25707),r=i(78508),a=i(69161);i(89056);const s=a.AH`
  :host {
    display: block;
    width: inherit;
  }
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.viewState=r.I.state.view,this.history=r.I.state.history.join(","),this.unsubscribe.push(r.I.subscribeKey("view",()=>{this.history=r.I.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return o.qy`${this.templatePageContainer()}`}templatePageContainer(){return o.qy`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=r.I.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return o.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return o.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return o.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return o.qy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return o.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return o.qy`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return o.qy`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return o.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return o.qy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return o.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return o.qy`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return o.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return o.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return o.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return o.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return o.qy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return o.qy`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return o.qy`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return o.qy`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return o.qy`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`}}};c.styles=[s],l([(0,n.wk)()],c.prototype,"viewState",void 0),l([(0,n.wk)()],c.prototype,"history",void 0),c=l([(0,a.EM)("w3m-router")],c)},4401:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(35198),a=(i(96478),i(84206),i(26109)),s=i(43494);i(1971);const l=o.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.disabled=!1}render(){return o.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,r.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?o.qy`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};d.styles=[a.W5,l],c([(0,n.MZ)()],d.prototype,"errorMessage",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,n.MZ)()],d.prototype,"value",void 0),c([(0,n.MZ)()],d.prototype,"tabIdx",void 0),d=c([(0,s.E)("wui-email-input")],d)},6421:(e,t,i)=>{const o=i(56886).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];const t=Math.floor(e/7)+2,i=o(e),n=145===i?26:2*Math.ceil((i-13)/(2*t-2)),r=[i-7];for(let e=1;e<t-1;e++)r[e]=r[e-1]-n;return r.push(6),r.reverse()},t.getPositions=function(e){const i=[],o=t.getRowColCoords(e),n=o.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)0===e&&0===t||0===e&&t===n-1||e===n-1&&0===t||i.push([o[e],o[t]]);return i}},7336:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=(i(96478),i(1608),i(26109)),a=i(43494);i(38436);const s=i(67569).AH`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 32px;
    height: 32px;
  }

  wui-icon[data-parent-size='md'] {
    width: 40px;
    height: 40px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="1";return"lg"===this.size?e="4":"md"===this.size?e="2":"sm"===this.size&&(e="1"),this.style.cssText=`\n       --local-border-radius: var(--apkt-borderRadius-${e});\n   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),o.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?o.qy`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:o.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};c.styles=[r.W5,s],l([(0,n.MZ)()],c.prototype,"size",void 0),l([(0,n.MZ)()],c.prototype,"name",void 0),l([(0,n.MZ)()],c.prototype,"imageSrc",void 0),l([(0,n.MZ)()],c.prototype,"walletIcon",void 0),l([(0,n.MZ)({type:Boolean})],c.prototype,"installed",void 0),l([(0,n.MZ)()],c.prototype,"badgeSize",void 0),c=l([(0,a.E)("wui-wallet-image")],c)},7565:(e,t,i)=>{"use strict";i.d(t,{C5:()=>r,Ky:()=>n,PG:()=>o});const o=/[.*+?^${}()|[\]\\]/gu,n=/[0-9,.]/u,r="https://reown.com"},7756:(e,t,i)=>{const o=i(56886).getSymbolSize;t.getPositions=function(e){const t=o(e);return[[0,0],[t-7,0],[0,t-7]]}},7804:(e,t,i)=>{"use strict";i.d(t,{OA:()=>o,WL:()=>r,u$:()=>n});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8163:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(67569),a=i(26109),s=i(43494);const l=o.AH`
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
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){const e={primary:r.f.tokens.theme.textPrimary,secondary:r.f.tokens.theme.textSecondary,tertiary:r.f.tokens.theme.textTertiary,invert:r.f.tokens.theme.textInvert,error:r.f.tokens.core.textError,warning:r.f.tokens.core.textWarning,"accent-primary":r.f.tokens.core.textAccentPrimary};return this.style.cssText=`\n      --local-color: ${"inherit"===this.color?"inherit":e[this.color]};\n      `,this.dataset.size=this.size,o.qy`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};d.styles=[a.W5,l],c([(0,n.MZ)()],d.prototype,"color",void 0),c([(0,n.MZ)()],d.prototype,"size",void 0),d=c([(0,s.E)("wui-loading-spinner")],d)},8820:e=>{function t(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,i,o){const n=e*this.size+t;this.data[n]=i,o&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},9060:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707);const r=o.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var a=i(27512);const s=o.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;i(96478),i(1608);var l=i(26109),c=i(43494);const d=i(67569).AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var u=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let h=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:a.a,lg:r},this.selected=!1,this.round=!1}render(){const e={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--apkt-spacing-10);\n      --local-height: var(--apkt-spacing-10);\n      --local-icon-size: var(--apkt-spacing-4);\n    "):this.style.cssText=`\n\n      --local-path: var(--apkt-path-network-${this.size});\n      --local-width:  var(--apkt-width-network-${this.size});\n      --local-height:  var(--apkt-height-network-${this.size});\n      --local-icon-size:  var(--apkt-spacing-${e[this.size]});\n    `,o.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.qy`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};h.styles=[l.W5,d],u([(0,n.MZ)()],h.prototype,"size",void 0),u([(0,n.MZ)()],h.prototype,"name",void 0),u([(0,n.MZ)({type:Object})],h.prototype,"networkImagesBySize",void 0),u([(0,n.MZ)()],h.prototype,"imageSrc",void 0),u([(0,n.MZ)({type:Boolean})],h.prototype,"selected",void 0),u([(0,n.MZ)({type:Boolean})],h.prototype,"round",void 0),h=u([(0,c.E)("wui-network-image")],h)},11433:(e,t,i)=>{const o=i(30208),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function r(e){this.mode=o.ALPHANUMERIC,this.data=e}r.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let i=45*n.indexOf(this.data[t]);i+=n.indexOf(this.data[t+1]),e.put(i,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=r},12965:(e,t,i)=>{"use strict";i(1971)},14955:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=(i(96478),i(8163),i(84206),i(26109)),a=i(43494);const s=i(67569).AH`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
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
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const c={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},d={lg:"md",md:"md",sm:"sm"};let u=class extends o.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n     `;const e=this.textVariant??c[this.size];return o.qy`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const e=d[this.size],t="neutral-primary"===this.variant||"accent-primary"===this.variant?"invert":"primary";return o.qy`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return null}};u.styles=[r.W5,r.fD,s],l([(0,n.MZ)()],u.prototype,"size",void 0),l([(0,n.MZ)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,n.MZ)({type:Boolean})],u.prototype,"fullWidth",void 0),l([(0,n.MZ)({type:Boolean})],u.prototype,"loading",void 0),l([(0,n.MZ)()],u.prototype,"variant",void 0),l([(0,n.MZ)()],u.prototype,"textVariant",void 0),u=l([(0,a.E)("wui-button")],u)},16784:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(35198),a=(i(8163),i(84206),i(26109)),s=i(43494);const l=i(67569).AH`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",o.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        tabindex=${(0,r.J)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?o.qy`<wui-image
        icon=${this.icon}
        iconColor=${(0,r.J)(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:o.qy`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?o.qy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:o.qy`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};d.styles=[a.W5,a.fD,l],c([(0,n.MZ)()],d.prototype,"imageSrc",void 0),c([(0,n.MZ)()],d.prototype,"icon",void 0),c([(0,n.MZ)()],d.prototype,"iconColor",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"loading",void 0),c([(0,n.MZ)()],d.prototype,"tabIdx",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"disabled",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"rightIcon",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"rounded",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"fullSize",void 0),d=c([(0,s.E)("wui-list-item")],d)},21878:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},24357:(e,t,i)=>{const o=i(30208);function n(e){this.mode=o.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,i,o;for(t=0;t+3<=this.data.length;t+=3)i=this.data.substr(t,3),o=parseInt(i,10),e.put(o,10);const n=this.data.length-t;n>0&&(i=this.data.substr(t),o=parseInt(i,10),e.put(o,3*n+1))},e.exports=n},24861:(e,t,i)=>{const o=i(30208),n=i(56886);function r(e){this.mode=o.KANJI,this.data=e}r.getBitsLength=function(e){return 13*e},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=n.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else{if(!(i>=57408&&i<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");i-=49472}i=192*(i>>>8&255)+(255&i),e.put(i,13)}},e.exports=r},24954:(e,t,i)=>{"use strict";var o=i(97199),n=(i(96478),i(84206),i(48832),i(7565)),r=i(26109),a=i(43494);const s=i(67569).AH`
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
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{render(){return o.qy`
      <a
        data-testid="ux-branding-reown"
        href=${n.C5}
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
    `}};c.styles=[r.W5,r.fD,s],c=l([(0,a.E)("wui-ux-by-reown")],c)},25707:(e,t,i)=>{"use strict";i.d(t,{MZ:()=>o.M,wk:()=>n.w});var o=i(75694),n=i(44290)},25822:(e,t,i)=>{const o=i(69049),n=i(30208);function r(e){this.mode=n.BYTE,"string"==typeof e&&(e=o(e)),this.data=new Uint8Array(e)}r.getBitsLength=function(e){return 8*e},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)},e.exports=r},26751:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=(i(96478),i(84206),i(26109)),a=i(43494);const s=i(67569).AH`
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
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const c={sm:"sm-medium",md:"md-medium"},d={accent:"accent-primary",secondary:"secondary"};let u=class extends o.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${d[this.variant]}
          variant=${c[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?o.qy`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};u.styles=[r.W5,r.fD,s],l([(0,n.MZ)()],u.prototype,"size",void 0),l([(0,n.MZ)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,n.MZ)()],u.prototype,"variant",void 0),l([(0,n.MZ)()],u.prototype,"icon",void 0),u=l([(0,a.E)("wui-link")],u)},27512:(e,t,i)=>{"use strict";i.d(t,{a:()=>o});const o=i(97199).JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`},29801:(e,t,i)=>{const o=i(30208),n=i(24357),r=i(11433),a=i(25822),s=i(24861),l=i(67044),c=i(56886),d=i(76320);function u(e){return unescape(encodeURIComponent(e)).length}function h(e,t,i){const o=[];let n;for(;null!==(n=e.exec(i));)o.push({data:n[0],index:n.index,mode:t,length:n[0].length});return o}function p(e){const t=h(l.NUMERIC,o.NUMERIC,e),i=h(l.ALPHANUMERIC,o.ALPHANUMERIC,e);let n,r;c.isKanjiModeEnabled()?(n=h(l.BYTE,o.BYTE,e),r=h(l.KANJI,o.KANJI,e)):(n=h(l.BYTE_KANJI,o.BYTE,e),r=[]);return t.concat(i,n,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function g(e,t){switch(t){case o.NUMERIC:return n.getBitsLength(e);case o.ALPHANUMERIC:return r.getBitsLength(e);case o.KANJI:return s.getBitsLength(e);case o.BYTE:return a.getBitsLength(e)}}function w(e,t){let i;const l=o.getBestModeForData(e);if(i=o.from(t,l),i!==o.BYTE&&i.bit<l.bit)throw new Error('"'+e+'" cannot be encoded with mode '+o.toString(i)+".\n Suggested mode is: "+o.toString(l));switch(i!==o.KANJI||c.isKanjiModeEnabled()||(i=o.BYTE),i){case o.NUMERIC:return new n(e);case o.ALPHANUMERIC:return new r(e);case o.KANJI:return new s(e);case o.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(w(t,null)):t.data&&e.push(w(t.data,t.mode)),e},[])},t.fromString=function(e,i){const n=function(e){const t=[];for(let i=0;i<e.length;i++){const n=e[i];switch(n.mode){case o.NUMERIC:t.push([n,{data:n.data,mode:o.ALPHANUMERIC,length:n.length},{data:n.data,mode:o.BYTE,length:n.length}]);break;case o.ALPHANUMERIC:t.push([n,{data:n.data,mode:o.BYTE,length:n.length}]);break;case o.KANJI:t.push([n,{data:n.data,mode:o.BYTE,length:u(n.data)}]);break;case o.BYTE:t.push([{data:n.data,mode:o.BYTE,length:u(n.data)}])}}return t}(p(e,c.isKanjiModeEnabled())),r=function(e,t){const i={},n={start:{}};let r=["start"];for(let a=0;a<e.length;a++){const s=e[a],l=[];for(let e=0;e<s.length;e++){const c=s[e],d=""+a+e;l.push(d),i[d]={node:c,lastCount:0},n[d]={};for(let e=0;e<r.length;e++){const a=r[e];i[a]&&i[a].node.mode===c.mode?(n[a][d]=g(i[a].lastCount+c.length,c.mode)-g(i[a].lastCount,c.mode),i[a].lastCount+=c.length):(i[a]&&(i[a].lastCount=c.length),n[a][d]=g(c.length,c.mode)+4+o.getCharCountIndicator(c.mode,t))}}r=l}for(let e=0;e<r.length;e++)n[r[e]].end=0;return{map:n,table:i}}(n,i),a=d.find_path(r.map,"start","end"),s=[];for(let e=1;e<a.length-1;e++)s.push(r.table[a[e]].node);return t.fromArray(function(e){return e.reduce(function(e,t){const i=e.length-1>=0?e[e.length-1]:null;return i&&i.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}(s))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},30208:(e,t,i)=>{const o=i(21878),n=i(67044);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!o.isValid(t))throw new Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,i){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(e){return i}}},31427:(e,t,i)=>{const o=i(56886),n=i(97518),r=i(49953),a=i(30208),s=i(21878),l=o.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}function d(e,t){let i=0;return e.forEach(function(e){const o=c(e.mode,t);i+=o+e.getBitsLength()}),i}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,i){if(!s.isValid(e))throw new Error("Invalid QR Code version");void 0===i&&(i=a.BYTE);const r=8*(o.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t));if(i===a.MIXED)return r;const l=r-c(i,e);switch(i){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,i){let o;const n=r.from(i,r.M);if(Array.isArray(e)){if(e.length>1)return function(e,i){for(let o=1;o<=40;o++)if(d(e,o)<=t.getCapacity(o,i,a.MIXED))return o}(e,n);if(0===e.length)return 1;o=e[0]}else o=e;return function(e,i,o){for(let n=1;n<=40;n++)if(i<=t.getCapacity(n,o,e))return n}(o.mode,o.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;o.getBCHDigit(t)-l>=0;)t^=7973<<o.getBCHDigit(t)-l;return e<<12|t}},34558:(e,t,i)=>{"use strict";i.d(t,{y:()=>s});var o=i(24376),n=i(78508),r=i(26),a=i(41482);const s={getTabsByNamespace:e=>Boolean(e)&&e===o.o.CHAIN.EVM?!1===r.H.state.remoteFeatures?.activity?a.o.ACCOUNT_TABS.filter(e=>"Activity"!==e.label):a.o.ACCOUNT_TABS:[],isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const e=n.I.state.view;if(a.o.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.H.state,i=r.H.state.features?.legalCheckbox;return!(!e&&!t||i)}return a.o.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}}},35090:(e,t,i)=>{"use strict";i(92286)},35198:(e,t,i)=>{"use strict";i.d(t,{J:()=>n});var o=i(36752);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=e=>e??o.s6},38253:(e,t,i)=>{"use strict";i(81355)},38436:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(35198),a=(i(96478),i(26109)),s=i(43494);const l=i(67569).AH`
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
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,o.qy`
      <wui-icon size=${(0,r.J)(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};d.styles=[a.W5,a.fD,l],c([(0,n.MZ)()],d.prototype,"icon",void 0),c([(0,n.MZ)()],d.prototype,"size",void 0),c([(0,n.MZ)()],d.prototype,"padding",void 0),c([(0,n.MZ)()],d.prototype,"color",void 0),d=c([(0,s.E)("wui-icon-box")],d)},41684:(e,t,i)=>{"use strict";i(7336)},44290:(e,t,i)=>{"use strict";i.d(t,{w:()=>n});var o=i(75694);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function n(e){return(0,o.M)({...e,state:!0,attribute:!1})}},44360:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=(i(96478),i(1608),i(48832),i(87583));function a(e,t,i){if(e===t)return!1;return(e-t<0?t-e:e-t)<=i+.1}const s={generate({uri:e,size:t,logoSize:i,padding:n=8,dotColor:s="var(--apkt-tokens-theme-textInvert)"}){const l=10,c=[],d=function(e,t){const i=Array.prototype.slice.call(r.create(e,{errorCorrectionLevel:t}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((e,t,i)=>(i%o===0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,"Q"),u=(t-2*n)/d.length,h=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];h.forEach(({x:e,y:t})=>{const i=(d.length-7)*u*e+n,r=(d.length-7)*u*t+n,a=.45;for(let e=0;e<h.length;e+=1){const t=u*(7-2*e);c.push(o.JW`
            <rect
              fill=${2===e?"var(--apkt-tokens-theme-textInvert)":"var(--apkt-tokens-theme-textPrimary)"}
              width=${0===e?t-l:t}
              rx= ${0===e?(t-l)*a:t*a}
              ry= ${0===e?(t-l)*a:t*a}
              stroke=${s}
              stroke-width=${0===e?l:0}
              height=${0===e?t-l:t}
              x= ${0===e?r+u*e+5:r+u*e}
              y= ${0===e?i+u*e+5:i+u*e}
            />
          `)}});const p=Math.floor((i+25)/u),g=d.length/2-p/2,w=d.length/2+p/2-1,f=[];d.forEach((e,t)=>{e.forEach((e,i)=>{if(d[t][i]&&!(t<7&&i<7||t>d.length-8&&i<7||t<7&&i>d.length-8||t>g&&t<w&&i>g&&i<w)){const e=t*u+u/2+n,o=i*u+u/2+n;f.push([e,o])}})});const m={};return f.forEach(([e,t])=>{m[e]?m[e]?.push(t):m[e]=[t]}),Object.entries(m).map(([e,t])=>{const i=t.filter(e=>t.every(t=>!a(e,t,u)));return[Number(e),i]}).forEach(([e,t])=>{t.forEach(t=>{c.push(o.JW`<circle cx=${e} cy=${t} fill=${s} r=${u/2.5} />`)})}),Object.entries(m).filter(([e,t])=>t.length>1).map(([e,t])=>{const i=t.filter(e=>t.some(t=>a(e,t,u)));return[Number(e),i]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);const i=[];for(const e of t){const t=i.find(t=>t.some(t=>a(e,t,u)));t?t.push(e):i.push([e])}return[e,i.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,i])=>{c.push(o.JW`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${i}
                stroke=${s}
                stroke-width=${u/1.25}
                stroke-linecap="round"
              />
            `)})}),c}};var l=i(26109),c=i(43494);const d=i(67569).AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
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
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
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
`;var u=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let h=class extends o.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,o.qy`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return o.JW`
      <svg height=${this.size} width=${this.size}>
        ${s.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?o.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:o.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};h.styles=[l.W5,d],u([(0,n.MZ)()],h.prototype,"uri",void 0),u([(0,n.MZ)({type:Number})],h.prototype,"size",void 0),u([(0,n.MZ)()],h.prototype,"theme",void 0),u([(0,n.MZ)()],h.prototype,"imageSrc",void 0),u([(0,n.MZ)()],h.prototype,"alt",void 0),u([(0,n.MZ)({type:Boolean})],h.prototype,"arenaClear",void 0),u([(0,n.MZ)({type:Boolean})],h.prototype,"farcaster",void 0),h=u([(0,c.E)("wui-qr-code")],h)},45090:(e,t,i)=>{"use strict";i(84206)},45839:(e,t,i)=>{"use strict";i.d(t,{T:()=>o});const o={URLS:{FAQ:"https://walletconnect.com/faq"}}},46162:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=(i(96478),i(26109)),a=i(43494);const s=i(67569).AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{constructor(){super(...arguments),this.logo="google"}render(){return o.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[r.W5,s],l([(0,n.MZ)()],c.prototype,"logo",void 0),c=l([(0,a.E)("wui-logo")],c)},46515:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(58144),a=(i(96478),i(1608),i(84206),i(48832),i(26109)),s=i(43494);const l=i(67569).AH`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return o.qy`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${this.tokenName}</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${r.S.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${r.S.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?o.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:o.qy`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};d.styles=[a.W5,a.fD,l],c([(0,n.MZ)()],d.prototype,"tokenName",void 0),c([(0,n.MZ)()],d.prototype,"tokenImageUrl",void 0),c([(0,n.MZ)({type:Number})],d.prototype,"tokenValue",void 0),c([(0,n.MZ)()],d.prototype,"tokenAmount",void 0),c([(0,n.MZ)()],d.prototype,"tokenCurrency",void 0),c([(0,n.MZ)({type:Boolean})],d.prototype,"clickable",void 0),d=c([(0,s.E)("wui-list-token")],d)},47899:(e,t,i)=>{const o=i(92726);t.render=function(e,t,i){let n=i,r=t;void 0!==n||t&&t.getContext||(n=t,t=void 0),t||(r=function(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}()),n=o.getOptions(n);const a=o.getImageWidth(e.modules.size,n),s=r.getContext("2d"),l=s.createImageData(a,a);return o.qrToImageData(l.data,e,n),function(e,t,i){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=i,t.width=i,t.style.height=i+"px",t.style.width=i+"px"}(s,r,a),s.putImageData(l,0,0),r},t.renderToDataURL=function(e,i,o){let n=o;void 0!==n||i&&i.getContext||(n=i,i=void 0),n||(n={});const r=t.render(e,i,n),a=n.type||"image/png",s=n.rendererOpts||{};return r.toDataURL(a,s.quality)}},48832:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(26109),a=i(63612),s=i(43494);const l=o.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&a.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&a.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&a.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&a.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&a.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&a.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&a.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&a.Z.getSpacingStyles(this.margin,3)};\n      width: ${this.width};\n    `,o.qy`<slot></slot>`}};d.styles=[r.W5,l],c([(0,n.MZ)()],d.prototype,"flexDirection",void 0),c([(0,n.MZ)()],d.prototype,"flexWrap",void 0),c([(0,n.MZ)()],d.prototype,"flexBasis",void 0),c([(0,n.MZ)()],d.prototype,"flexGrow",void 0),c([(0,n.MZ)()],d.prototype,"flexShrink",void 0),c([(0,n.MZ)()],d.prototype,"alignItems",void 0),c([(0,n.MZ)()],d.prototype,"justifyContent",void 0),c([(0,n.MZ)()],d.prototype,"columnGap",void 0),c([(0,n.MZ)()],d.prototype,"rowGap",void 0),c([(0,n.MZ)()],d.prototype,"gap",void 0),c([(0,n.MZ)()],d.prototype,"padding",void 0),c([(0,n.MZ)()],d.prototype,"margin",void 0),c([(0,n.MZ)()],d.prototype,"width",void 0),d=c([(0,s.E)("wui-flex")],d)},49953:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,i){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(e){return i}}},51454:(e,t,i)=>{"use strict";i.d(t,{o:()=>a});var o=i(52095),n=i(4707);const r=(0,o.BX)({isLegalCheckboxChecked:!1}),a={state:r,subscribe:e=>(0,o.B1)(r,()=>e(r)),subscribeKey:(e,t)=>(0,n.u$)(r,e,t),setIsLegalCheckboxChecked(e){r.isLegalCheckboxChecked=e}}},51636:(e,t,i)=>{"use strict";i(96478)},52799:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=(i(96478),i(26109)),a=i(43494);const s=i(67569).AH`
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
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return o.qy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};c.styles=[r.W5,r.fD,s],l([(0,n.MZ)()],c.prototype,"size",void 0),l([(0,n.MZ)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,n.MZ)()],c.prototype,"icon",void 0),l([(0,n.MZ)()],c.prototype,"iconColor",void 0),l([(0,n.MZ)()],c.prototype,"variant",void 0),c=l([(0,a.E)("wui-icon-link")],c)},55743:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(26),a=i(69161);i(60310),i(45090),i(24954);const s=a.AH`
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
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=r.H.state.remoteFeatures,this.unsubscribe.push(r.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.H.state,i=r.H.state.features?.legalCheckbox;return!e&&!t||i?o.qy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:o.qy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=r.H.state;return e?o.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=r.H.state;return e?o.qy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?o.qy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};c.styles=[s],l([(0,n.wk)()],c.prototype,"remoteFeatures",void 0),c=l([(0,a.EM)("w3m-legal-footer")],c)},56756:(e,t,i)=>{const o=i(92726);function n(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function r(e,t,i){let o=e+t;return void 0!==i&&(o+=" "+i),o}t.render=function(e,t,i){const a=o.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,d=a.color.light.a?"<path "+n(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",u="<path "+n(a.color.dark,"stroke")+' d="'+function(e,t,i){let o="",n=0,a=!1,s=0;for(let l=0;l<e.length;l++){const c=Math.floor(l%t),d=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(o+=a?r("M",c+i,.5+d+i):r("m",n,0),n=0,a=!1),c+1<t&&e[l+1]||(o+=r("h",s),s=0)):n++}return o}(l,s,a.margin)+'"/>',h='viewBox="0 0 '+c+" "+c+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+h+' shape-rendering="crispEdges">'+d+u+"</svg>\n";return"function"==typeof i&&i(null,p),p}},56886:(e,t)=>{let i;const o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return o[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');i=e},t.isKanjiModeEnabled=function(){return void 0!==i},t.toSJIS=function(e){return i(e)}},58461:(e,t,i)=>{"use strict";i(14955)},60310:(e,t,i)=>{"use strict";i(48832)},61600:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(51454),a=i(26),s=i(69161),l=i(35198),c=i(91629),d=(i(96478),i(84206),i(26109)),u=i(43494);const h=i(67569).AH`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
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
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
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
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var p=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const g={lg:"md",md:"sm",sm:"sm"};let w=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,c._)(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){const e=g[this.size];return o.qy`
      <label data-size=${this.size}>
        <input
          ${(0,c.K)(this.inputElementRef)}
          ?checked=${(0,l.J)(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${e}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};w.styles=[d.W5,h],p([(0,n.MZ)({type:Boolean})],w.prototype,"checked",void 0),p([(0,n.MZ)({type:Boolean})],w.prototype,"disabled",void 0),p([(0,n.MZ)()],w.prototype,"size",void 0),w=p([(0,u.E)("wui-checkbox")],w);i(45090);const f=s.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e[3]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`;var m=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let y=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=r.o.state.isLegalCheckboxChecked,this.unsubscribe.push(r.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,i=a.H.state.features?.legalCheckbox;return(e||t)&&i?o.qy`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=a.H.state;return e?o.qy`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=a.H.state;return e?o.qy`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){r.o.setIsLegalCheckboxChecked(!this.checked)}};y.styles=[f],m([(0,n.wk)()],y.prototype,"checked",void 0),y=m([(0,s.EM)("w3m-legal-checkbox")],y)},62388:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=(i(1608),i(26109)),a=i(63612),s=i(43494);const l=i(67569).AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var c=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let d=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){const e={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`\n    --local-width: var(--apkt-spacing-${e[this.size??"xl"]});\n    --local-height: var(--apkt-spacing-${e[this.size??"xl"]});\n    `,o.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=a.Z.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset.variant="default",null}};d.styles=[r.W5,l],c([(0,n.MZ)()],d.prototype,"imageSrc",void 0),c([(0,n.MZ)()],d.prototype,"alt",void 0),c([(0,n.MZ)()],d.prototype,"address",void 0),c([(0,n.MZ)()],d.prototype,"size",void 0),d=c([(0,s.E)("wui-avatar")],d)},64713:(e,t,i)=>{const o=i(2731);t.mul=function(e,t){const i=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let r=0;r<t.length;r++)i[n+r]^=o.mul(e[n],t[r]);return i},t.mod=function(e,t){let i=new Uint8Array(e);for(;i.length-t.length>=0;){const e=i[0];for(let n=0;n<t.length;n++)i[n]^=o.mul(t[n],e);let n=0;for(;n<i.length&&0===i[n];)n++;i=i.slice(n)}return i},t.generateECPolynomial=function(e){let i=new Uint8Array([1]);for(let n=0;n<e;n++)i=t.mul(i,new Uint8Array([1,o.exp(n)]));return i}},64865:(e,t,i)=>{"use strict";i(52799)},67044:(e,t)=>{const i="[0-9]+";let o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";o=o.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+o+")(?:.|[\r\n]))+";t.KANJI=new RegExp(o,"g"),t.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=new RegExp(n,"g"),t.NUMERIC=new RegExp(i,"g"),t.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const r=new RegExp("^"+o+"$"),a=new RegExp("^"+i+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return r.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},67369:(e,t,i)=>{"use strict";i.r(t),i.d(t,{AppKitAccountButton:()=>$,AppKitButton:()=>R,AppKitConnectButton:()=>L,AppKitNetworkButton:()=>U,W3mAccountButton:()=>k,W3mAccountSettingsView:()=>de,W3mAccountView:()=>Ge,W3mAllWalletsView:()=>Jt,W3mButton:()=>I,W3mChooseAccountNameView:()=>Po,W3mConnectButton:()=>N,W3mConnectView:()=>Vi,W3mConnectWalletsView:()=>Uo,W3mConnectingExternalView:()=>ro,W3mConnectingMultiChainView:()=>lo,W3mConnectingWcBasicView:()=>Ro,W3mConnectingWcView:()=>So,W3mDownloadsView:()=>No,W3mFooter:()=>V.H,W3mGetWalletView:()=>zo,W3mNetworkButton:()=>F,W3mNetworkSwitchView:()=>Yo,W3mNetworksView:()=>rn,W3mProfileWalletsView:()=>mt,W3mRouter:()=>_.J,W3mSIWXSignMessageView:()=>Mn,W3mSwitchActiveChainView:()=>cn,W3mUnsupportedChainView:()=>wn,W3mWalletCompatibleNetworksView:()=>xn,W3mWhatIsANetworkView:()=>hn,W3mWhatIsAWalletView:()=>Bo});var o=i(97199),n=i(25707),r=i(35198),a=i(26),s=i(6056),l=i(73337),c=i(27601),d=i(63450),u=i(26742),h=i(96396),p=i(69161),g=(i(96478),i(1608),i(8163),i(84206),i(48832),i(26109)),w=i(63612),f=i(43494),m=(i(62388),i(67569));const y=m.AH`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var b=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let v=class extends o.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <button
        ?disabled=${this.disabled}
        class=${(0,r.J)(this.balance?void 0:"local-no-balance")}
        data-error=${(0,r.J)(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const e=this.networkSrc?o.qy`<wui-image src=${this.networkSrc}></wui-image>`:o.qy` <wui-icon size="inherit" color="inherit" icon="networkPlaceholder"></wui-icon> `;return o.qy`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return o.qy`<wui-text variant="md-regular" color="inherit">
      ${this.address?w.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const e=this.loading?o.qy`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:o.qy`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return o.qy`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};v.styles=[g.W5,g.fD,y],b([(0,n.MZ)()],v.prototype,"networkSrc",void 0),b([(0,n.MZ)()],v.prototype,"avatarSrc",void 0),b([(0,n.MZ)()],v.prototype,"balance",void 0),b([(0,n.MZ)({type:Boolean})],v.prototype,"isUnsupportedChain",void 0),b([(0,n.MZ)({type:Boolean})],v.prototype,"disabled",void 0),b([(0,n.MZ)({type:Boolean})],v.prototype,"loading",void 0),b([(0,n.MZ)()],v.prototype,"address",void 0),b([(0,n.MZ)()],v.prototype,"profileName",void 0),b([(0,n.MZ)()],v.prototype,"charsStart",void 0),b([(0,n.MZ)()],v.prototype,"charsEnd",void 0),v=b([(0,f.E)("wui-account-button")],v);var x=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class C extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=!!a.H.state.allowUnsupportedChain||(!s.W.state.activeChain||s.W.checkIfSupportedNetwork(s.W.state.activeChain))}connectedCallback(){super.connectedCallback(),this.setAccountData(s.W.getAccountData(this.namespace)),this.setNetworkData(s.W.getNetworkData(this.namespace))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(s.W.subscribeChainProp("accountState",e=>{this.setAccountData(e)},e),s.W.subscribeChainProp("networkState",t=>{this.setNetworkData(t),this.isSupported=s.W.checkIfSupportedNetwork(e,t?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(l.j.subscribeNetworkImages(()=>{this.networkImage=c.$.getNetworkImage(this.network)}),s.W.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),d.U.subscribeKey("balance",e=>this.balanceVal=e),d.U.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),d.U.subscribeKey("profileName",e=>this.profileName=e),d.U.subscribeKey("profileImage",e=>this.profileImage=e),s.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=c.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||s.W.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!s.W.state.activeChain)return null;const e="show"===this.balance,t="string"!=typeof this.balanceVal,{formattedText:i}=u.w.parseBalance(this.balanceVal,this.balanceSymbol);return o.qy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!a.H.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,r.J)(u.w.getPlainAddress(this.caipAddress))}
        profileName=${(0,r.J)(this.profileName)}
        networkSrc=${(0,r.J)(this.networkImage)}
        avatarSrc=${(0,r.J)(this.profileImage)}
        balance=${e?i:""}
        @click=${this.onClick.bind(this)}
        data-testid=${"account-button"+(this.namespace?`-${this.namespace}`:"")}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||a.H.state.allowUnsupportedChain?h.W.open({namespace:this.namespace}):h.W.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await c.$.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=c.$.getNetworkImage(e.caipNetwork))}}x([(0,n.MZ)({type:Boolean})],C.prototype,"disabled",void 0),x([(0,n.MZ)()],C.prototype,"balance",void 0),x([(0,n.MZ)()],C.prototype,"charsStart",void 0),x([(0,n.MZ)()],C.prototype,"charsEnd",void 0),x([(0,n.MZ)()],C.prototype,"namespace",void 0),x([(0,n.wk)()],C.prototype,"caipAddress",void 0),x([(0,n.wk)()],C.prototype,"balanceVal",void 0),x([(0,n.wk)()],C.prototype,"balanceSymbol",void 0),x([(0,n.wk)()],C.prototype,"profileName",void 0),x([(0,n.wk)()],C.prototype,"profileImage",void 0),x([(0,n.wk)()],C.prototype,"network",void 0),x([(0,n.wk)()],C.prototype,"networkImage",void 0),x([(0,n.wk)()],C.prototype,"isSupported",void 0);let k=class extends C{};k=x([(0,p.EM)("w3m-account-button")],k);let $=class extends C{};$=x([(0,p.EM)("appkit-account-button")],$);const E=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var A=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class S extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?s.W.state.chains.get(this.namespace)?.accountState?.caipAddress:s.W.state.activeCaipAddress,this.namespace?this.unsubscribe.push(s.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(s.W.subscribeKey("activeCaipAddress",e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?o.qy`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,r.J)(this.balance)}
            .charsStart=${(0,r.J)(this.charsStart)}
            .charsEnd=${(0,r.J)(this.charsEnd)}
            namespace=${(0,r.J)(this.namespace)}
          >
          </appkit-account-button>
        `:o.qy`
          <appkit-connect-button
            size=${(0,r.J)(this.size)}
            label=${(0,r.J)(this.label)}
            loadingLabel=${(0,r.J)(this.loadingLabel)}
            namespace=${(0,r.J)(this.namespace)}
          ></appkit-connect-button>
        `}}S.styles=E,A([(0,n.MZ)({type:Boolean})],S.prototype,"disabled",void 0),A([(0,n.MZ)()],S.prototype,"balance",void 0),A([(0,n.MZ)()],S.prototype,"size",void 0),A([(0,n.MZ)()],S.prototype,"label",void 0),A([(0,n.MZ)()],S.prototype,"loadingLabel",void 0),A([(0,n.MZ)()],S.prototype,"charsStart",void 0),A([(0,n.MZ)()],S.prototype,"charsEnd",void 0),A([(0,n.MZ)()],S.prototype,"namespace",void 0),A([(0,n.wk)()],S.prototype,"caipAddress",void 0);let I=class extends S{};I=A([(0,p.EM)("w3m-button")],I);let R=class extends S{};R=A([(0,p.EM)("appkit-button")],R);const M=m.AH`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`;var W=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let T=class extends o.WF{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return o.qy`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const e={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},t={primary:"invert",secondary:"accent-primary"};return this.loading?o.qy`<wui-loading-spinner
      color=${t[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:o.qy` <wui-text variant=${e[this.size]} color=${t[this.variant]}>
        ${this.text}
      </wui-text>`}};T.styles=[g.W5,g.fD,M],W([(0,n.MZ)()],T.prototype,"size",void 0),W([(0,n.MZ)()],T.prototype,"variant",void 0),W([(0,n.MZ)({type:Boolean})],T.prototype,"loading",void 0),W([(0,n.MZ)()],T.prototype,"text",void 0),T=W([(0,f.E)("wui-connect-button")],T);var P=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class O extends o.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=h.W.state.open,this.loading=this.namespace?h.W.state.loadingNamespaceMap.get(this.namespace):h.W.state.loading,this.unsubscribe.push(h.W.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-connect-button
        size=${(0,r.J)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${"connect-button"+(this.namespace?`-${this.namespace}`:"")}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?h.W.close():this.loading||h.W.open({view:"Connect",namespace:this.namespace})}}P([(0,n.MZ)()],O.prototype,"size",void 0),P([(0,n.MZ)()],O.prototype,"label",void 0),P([(0,n.MZ)()],O.prototype,"loadingLabel",void 0),P([(0,n.MZ)()],O.prototype,"namespace",void 0),P([(0,n.wk)()],O.prototype,"open",void 0),P([(0,n.wk)()],O.prototype,"loading",void 0);let N=class extends O{};N=P([(0,p.EM)("w3m-connect-button")],N);let L=class extends O{};L=P([(0,p.EM)("appkit-connect-button")],L);var z=i(90184);i(38436);const j=m.AH`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`;var Z=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let q=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){return o.qy`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${{sm:"sm-regular",md:"md-regular",lg:"lg-regular"}[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?o.qy` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:o.qy` <wui-icon-box color="default" icon="networkPlaceholder"></wui-icon-box> `}};q.styles=[g.W5,g.fD,j],Z([(0,n.MZ)()],q.prototype,"imageSrc",void 0),Z([(0,n.MZ)({type:Boolean})],q.prototype,"isUnsupportedChain",void 0),Z([(0,n.MZ)({type:Boolean})],q.prototype,"disabled",void 0),Z([(0,n.MZ)()],q.prototype,"size",void 0),q=Z([(0,f.E)("wui-network-button")],q);const D=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var B=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class H extends o.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=s.W.state.activeCaipNetwork,this.networkImage=c.$.getNetworkImage(this.network),this.caipAddress=s.W.state.activeCaipAddress,this.loading=h.W.state.loading,this.isSupported=!!a.H.state.allowUnsupportedChain||(!s.W.state.activeChain||s.W.checkIfSupportedNetwork(s.W.state.activeChain)),this.unsubscribe.push(l.j.subscribeNetworkImages(()=>{this.networkImage=c.$.getNetworkImage(this.network)}),s.W.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),s.W.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=c.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||s.W.checkIfSupportedNetwork(e.chainNamespace),c.$.fetchNetworkImage(e?.assets?.imageId)}),h.W.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){c.$.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=!this.network||s.W.checkIfSupportedNetwork(this.network.chainNamespace);return o.qy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!a.H.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,r.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||a.H.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(z.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),h.W.open({view:"Networks"}))}}H.styles=D,B([(0,n.MZ)({type:Boolean})],H.prototype,"disabled",void 0),B([(0,n.MZ)({type:String})],H.prototype,"label",void 0),B([(0,n.wk)()],H.prototype,"network",void 0),B([(0,n.wk)()],H.prototype,"networkImage",void 0),B([(0,n.wk)()],H.prototype,"caipAddress",void 0),B([(0,n.wk)()],H.prototype,"loading",void 0),B([(0,n.wk)()],H.prototype,"isSupported",void 0);let F=class extends H{};F=B([(0,p.EM)("w3m-network-button")],F);let U=class extends H{};U=B([(0,p.EM)("appkit-network-button")],U);var _=i(3830),V=i(89056),J=i(24376),K=i(36010),G=i(62944),Y=i(21871),X=i(74496),Q=i(78508),ee=i(18121),te=i(8351);i(60310),i(64865),i(16784),i(14955);const ie=m.AH`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`;var oe=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ne=class extends o.WF{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return o.qy`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};ne.styles=[g.W5,g.fD,ie],oe([(0,n.MZ)()],ne.prototype,"label",void 0),oe([(0,n.MZ)()],ne.prototype,"description",void 0),oe([(0,n.MZ)()],ne.prototype,"icon",void 0),ne=oe([(0,f.E)("wui-notice-card")],ne);i(45090);var re=i(10152),ae=i(27508),se=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let le=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=ae.i.getConnectedSocialProvider(),this.socialUsername=ae.i.getConnectedSocialUsername(),this.namespace=s.W.state.activeChain,this.unsubscribe.push(s.W.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=K.a.getConnectorId(this.namespace),t=K.a.getAuthConnector();if(!t||e!==J.o.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const i=t.provider.getEmail()??"";return i||this.socialUsername?o.qy`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||Q.I.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};se([(0,n.wk)()],le.prototype,"namespace",void 0),le=se([(0,p.EM)("w3m-account-auth-button")],le);var ce=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let de=class extends o.WF{constructor(){super(),this.usubscribe=[],this.networkImages=l.j.state.networkImages,this.address=d.U.state.address,this.profileImage=d.U.state.profileImage,this.profileName=d.U.state.profileName,this.network=s.W.state.activeCaipNetwork,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.remoteFeatures=a.H.state.remoteFeatures,this.usubscribe.push(d.U.subscribe(e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),s.W.subscribeKey("activeCaipNetwork",e=>{e?.id&&(this.network=e)}),a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.assets?.imageId??""];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,r.J)(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${p.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${(0,r.J)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=this.network?.chainNamespace,t=K.a.getConnectorId(e),i=K.a.getAuthConnector();return s.W.checkIfNamesSupported()&&i&&t===J.o.CONNECTOR_ID.AUTH&&!this.profileName?o.qy`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=K.a.getConnectorId(this.network?.chainNamespace),t=K.a.getAuthConnector(),{origin:i}=location;return!t||e!==J.o.CONNECTOR_ID.AUTH||i.includes(G.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=s.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find(({id:e})=>e===this.network?.id);return t||!i}onCopyAddress(){try{this.address&&(u.w.copyToClopboard(this.address),Y.P.showSuccess("Address copied"))}catch{Y.P.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=this.network?.chainNamespace,t=s.W.checkIfSmartAccountEnabled(),i=K.a.getConnectorId(e);return K.a.getAuthConnector()&&i===J.o.CONNECTOR_ID.AUTH&&t?(this.switched||(this.text=(0,X.lj)(e)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),o.qy`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){Q.I.push("ChooseAccountName")}async changePreferredAccountType(){const e=this.network?.chainNamespace,t=s.W.checkIfSmartAccountEnabled(),i=(0,X.lj)(e)!==re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t?re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:re.Vl.ACCOUNT_TYPES.EOA;K.a.getAuthConnector()&&(this.loading=!0,await ee.x.setPreferredAccountType(i,e),this.text=i===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,te.R.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&Q.I.push("Networks")}async onDisconnect(){try{this.disconnecting=!0;const e=this.network?.chainNamespace,t=ee.x.getConnections(e).length>0,i=e&&K.a.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await ee.x.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(Q.I.push("ProfileWallets"),Y.P.showSuccess("Wallet deleted"))}catch{z.E.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),Y.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){z.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Q.I.push("UpgradeEmailWallet")}};ce([(0,n.wk)()],de.prototype,"address",void 0),ce([(0,n.wk)()],de.prototype,"profileImage",void 0),ce([(0,n.wk)()],de.prototype,"profileName",void 0),ce([(0,n.wk)()],de.prototype,"network",void 0),ce([(0,n.wk)()],de.prototype,"disconnecting",void 0),ce([(0,n.wk)()],de.prototype,"loading",void 0),ce([(0,n.wk)()],de.prototype,"switched",void 0),ce([(0,n.wk)()],de.prototype,"text",void 0),ce([(0,n.wk)()],de.prototype,"remoteFeatures",void 0),de=ce([(0,p.EM)("w3m-account-settings-view")],de);i(58461),i(51636);const ue=m.AH`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var he=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const pe={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},ge={lg:"md",md:"sm",sm:"sm"};let we=class extends o.WF{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return o.qy`
      <button data-active=${this.active}>
        ${this.icon?o.qy`<wui-icon size=${ge[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${pe[this.size]}> ${this.label} </wui-text>
      </button>
    `}};we.styles=[g.W5,g.fD,ue],he([(0,n.MZ)()],we.prototype,"icon",void 0),he([(0,n.MZ)()],we.prototype,"size",void 0),he([(0,n.MZ)()],we.prototype,"label",void 0),he([(0,n.MZ)({type:Boolean})],we.prototype,"active",void 0),we=he([(0,f.E)("wui-tab-item")],we);const fe=m.AH`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var me=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ye=class extends o.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{const i=t===this.activeTab;return o.qy`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${i}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};ye.styles=[g.W5,g.fD,fe],me([(0,n.MZ)({type:Array})],ye.prototype,"tabs",void 0),me([(0,n.MZ)()],ye.prototype,"onTabChange",void 0),me([(0,n.MZ)()],ye.prototype,"size",void 0),me([(0,n.wk)()],ye.prototype,"activeTab",void 0),ye=me([(0,f.E)("wui-tabs")],ye);i(38253);const be=m.AH`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var ve=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xe=class extends o.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?o.qy`<wui-icon
          size=${(0,r.J)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:o.qy`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return o.qy`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return o.qy`
      <wui-text variant="lg-regular" color="primary">
        ${w.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return o.qy`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};xe.styles=[g.W5,g.fD,be],ve([(0,n.MZ)()],xe.prototype,"address",void 0),ve([(0,n.MZ)()],xe.prototype,"profileName",void 0),ve([(0,n.MZ)()],xe.prototype,"alt",void 0),ve([(0,n.MZ)()],xe.prototype,"imageSrc",void 0),ve([(0,n.MZ)()],xe.prototype,"icon",void 0),ve([(0,n.MZ)()],xe.prototype,"iconSize",void 0),ve([(0,n.MZ)({type:Boolean})],xe.prototype,"loading",void 0),ve([(0,n.MZ)({type:Number})],xe.prototype,"charsStart",void 0),ve([(0,n.MZ)({type:Number})],xe.prototype,"charsEnd",void 0),xe=ve([(0,f.E)("wui-wallet-switch")],xe);const Ce=p.AH`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e["ease-out-power-1"]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var ke=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $e=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.caipAddress=d.U.state.caipAddress,this.address=u.w.getPlainAddress(d.U.state.caipAddress),this.profileImage=d.U.state.profileImage,this.profileName=d.U.state.profileName,this.disconnecting=!1,this.balance=d.U.state.balance,this.balanceSymbol=d.U.state.balanceSymbol,this.features=a.H.state.features,this.remoteFeatures=a.H.state.remoteFeatures,this.namespace=s.W.state.activeChain,this.activeConnectorIds=K.a.state.activeConnectorIds,this.unsubscribe.push(d.U.subscribeKey("caipAddress",e=>{this.address=u.w.getPlainAddress(e),this.caipAddress=e}),d.U.subscribeKey("balance",e=>this.balance=e),d.U.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),d.U.subscribeKey("profileName",e=>this.profileName=e),d.U.subscribeKey("profileImage",e=>this.profileImage=e),a.H.subscribeKey("features",e=>this.features=e),a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),K.a.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.W.subscribeKey("activeChain",e=>this.namespace=e),s.W.subscribeKey("activeCaipNetwork",e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],t=e?K.a.getConnectorById(e):void 0,i=c.$.getConnectorImage(t),{value:n,decimals:a,symbol:s}=u.w.parseBalance(this.balance,this.balanceSymbol);return o.qy`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${(0,r.J)(this.caipAddress)}
          address=${(0,r.J)(u.w.getPlainAddress(this.caipAddress))}
          imageSrc=${(0,r.J)(null===this.profileImage?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${i}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <wui-flex flexDirection="row" alignItems="flex-end" justifyContent="center" gap="1">
          <wui-text variant="h3-regular" color="primary">${n}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${a}</wui-text>
          <wui-text variant="h6-medium" color="primary">${s}</wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const e=G.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=G.oU.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=Boolean(this.features?.receive),n=this.remoteFeatures?.onramp&&e,r=this.remoteFeatures?.payWithExchange&&t;return n||i||r?o.qy`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||G.oU.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){if(!this.namespace)return null;return this.remoteFeatures?.activity&&G.oU.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?o.qy` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,t=s.W.state.activeChain===J.o.CHAIN.EVM;return e&&t?o.qy`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){const e=this.features?.send,t=s.W.state.activeChain;if(!t)throw new Error("SendController:sendTemplate - namespace is required");const i=G.oU.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?o.qy`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=s.W.state.activeChain;if(!e)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const t=K.a.getConnectorId(e),i=K.a.getAuthConnector(),{origin:n}=location;return!i||t!==J.o.CONNECTOR_ID.AUTH||n.includes(G.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){Q.I.push("FundWallet")}handleClickSwap(){Q.I.push("Swap")}handleClickSend(){Q.I.push("WalletSend")}explorerBtnTemplate(){return d.U.state.addressExplorerUrl?o.qy`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){z.E.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:(0,X.lj)(s.W.state.activeChain)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0;const e=ee.x.getConnections(this.namespace).length>0,t=this.namespace&&K.a.state.activeConnectorIds[this.namespace],i=this.remoteFeatures?.multiWallet;await ee.x.disconnect(i?{id:t,namespace:this.namespace}:{}),e&&i&&(Q.I.push("ProfileWallets"),Y.P.showSuccess("Wallet deleted"))}catch{z.E.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),Y.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=d.U.state.addressExplorerUrl;e&&u.w.openHref(e,"_blank")}onGoToUpgradeView(){z.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),Q.I.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){Q.I.push("ProfileWallets")}};$e.styles=Ce,ke([(0,n.wk)()],$e.prototype,"caipAddress",void 0),ke([(0,n.wk)()],$e.prototype,"address",void 0),ke([(0,n.wk)()],$e.prototype,"profileImage",void 0),ke([(0,n.wk)()],$e.prototype,"profileName",void 0),ke([(0,n.wk)()],$e.prototype,"disconnecting",void 0),ke([(0,n.wk)()],$e.prototype,"balance",void 0),ke([(0,n.wk)()],$e.prototype,"balanceSymbol",void 0),ke([(0,n.wk)()],$e.prototype,"features",void 0),ke([(0,n.wk)()],$e.prototype,"remoteFeatures",void 0),ke([(0,n.wk)()],$e.prototype,"namespace",void 0),ke([(0,n.wk)()],$e.prototype,"activeConnectorIds",void 0),$e=ke([(0,p.EM)("w3m-account-default-widget")],$e);const Ee=m.AH`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var Ae=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Se=class extends o.WF{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return o.qy`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Se.styles=[g.W5,Ee],Ae([(0,n.MZ)()],Se.prototype,"dollars",void 0),Ae([(0,n.MZ)()],Se.prototype,"pennies",void 0),Se=Ae([(0,f.E)("wui-balance")],Se);i(82515);const Ie=m.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
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
`;var Re=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Me={sm:"sm-regular",md:"md-regular"};let We=class extends o.WF{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,o.qy`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${Me[this.size]}>${this.message}</wui-text>`}};We.styles=[g.W5,g.fD,Ie],Re([(0,n.MZ)()],We.prototype,"placement",void 0),Re([(0,n.MZ)()],We.prototype,"variant",void 0),Re([(0,n.MZ)()],We.prototype,"size",void 0),Re([(0,n.MZ)()],We.prototype,"message",void 0),We=Re([(0,f.E)("wui-tooltip")],We);var Te=i(56092),Pe=i(34558);i(2550);const Oe=o.AH`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var Ne=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Le=class extends o.WF{render(){return o.qy`<w3m-activity-list page="account"></w3m-activity-list>`}};Le.styles=Oe,Le=Ne([(0,p.EM)("w3m-account-activity-widget")],Le);i(77616),i(26751);const ze=p.AH`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var je=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ze=class extends o.WF{render(){return o.qy`${this.nftTemplate()}`}nftTemplate(){return o.qy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="5"
    >
      <wui-icon-box icon="wallet" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="md-regular"
          align="center"
          color="primary"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="sm-regular"
          align="center"
          color="secondary"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){Q.I.push("WalletReceive")}};Ze.styles=ze,Ze=je([(0,p.EM)("w3m-account-nfts-widget")],Ze);i(81355);const qe=m.AH`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var De=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Be=class extends o.WF{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?o.qy`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?o.qy`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};Be.styles=[g.W5,g.fD,qe],De([(0,n.MZ)()],Be.prototype,"icon",void 0),De([(0,n.MZ)()],Be.prototype,"text",void 0),De([(0,n.MZ)()],Be.prototype,"description",void 0),De([(0,n.MZ)()],Be.prototype,"tag",void 0),De([(0,n.MZ)({type:Boolean})],Be.prototype,"disabled",void 0),Be=De([(0,f.E)("wui-list-description")],Be);i(46515);const He=o.AH`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var Fe=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ue=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=d.U.state.tokenBalance,this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(d.U.subscribe(e=>{this.tokenBalance=e.tokenBalance}),a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?o.qy`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:o.qy` <wui-flex flexDirection="column" gap="2"
      >${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?o.qy`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:o.qy``}tokenItemTemplate(){return this.tokenBalance?.map(e=>o.qy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){Q.I.push("WalletReceive")}onBuyClick(){z.E.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:(0,X.lj)(s.W.state.activeChain)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("OnRampProviders")}};Ue.styles=He,Fe([(0,n.wk)()],Ue.prototype,"tokenBalance",void 0),Fe([(0,n.wk)()],Ue.prototype,"remoteFeatures",void 0),Ue=Fe([(0,p.EM)("w3m-account-tokens-widget")],Ue);i(70146),i(74625);const _e=p.AH`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Ve=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Je=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.address=d.U.state.address,this.profileName=d.U.state.profileName,this.network=s.W.state.activeCaipNetwork,this.currentTab=d.U.state.currentTab,this.tokenBalance=d.U.state.tokenBalance,this.features=a.H.state.features,this.namespace=s.W.state.activeChain,this.activeConnectorIds=K.a.state.activeConnectorIds,this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(d.U.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):h.W.close()}),K.a.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.W.subscribeKey("activeChain",e=>this.namespace=e),s.W.subscribeKey("activeCaipNetwork",e=>this.network=e),a.H.subscribeKey("features",e=>this.features=e),a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){d.U.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");if(!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],t=e?K.a.getConnectorById(e):void 0,{icon:i,iconSize:n}=this.getAuthData();return o.qy`<wui-flex
      flexDirection="column"
      .padding=${["0","5","4","5"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${i}
          iconSize=${n}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const e=this.features?.walletFeaturesOrder||G.oU.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(e=>"send"===e||"receive"===e?!this.features?.[e]:"swaps"!==e&&"onramp"!==e||!this.remoteFeatures?.[e]))return null;const t=e.map(e=>"receive"===e||"onramp"===e?"fund":e),i=[...new Set(t)];return o.qy`<wui-flex gap="3">
      ${i.map(e=>{switch(e){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;const e=G.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=G.oU.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=this.features?.receive,n=this.remoteFeatures?.onramp&&e,r=this.remoteFeatures?.payWithExchange&&t;return n||i||r?o.qy`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-icon-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          icon="dollar"
          variant="accent"
          fullWidth
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){const e=this.remoteFeatures?.swaps,t=s.W.state.activeChain===J.o.CHAIN.EVM;return e&&t?o.qy`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
          variant="accent"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){const e=this.features?.send,t=s.W.state.activeChain,i=G.oU.SEND_SUPPORTED_NAMESPACES.includes(t);return e&&i?o.qy`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
          variant="accent"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval(()=>d.U.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){if(e instanceof Error&&e.cause instanceof Response){e.cause.status===J.o.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}}listContentTemplate(){return 0===this.currentTab?o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?o.qy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?o.qy`<w3m-account-activity-widget></w3m-account-activity-widget>`:o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=u.w.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=u.w.formatTokenBalance(e);return o.qy`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return o.qy`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=Pe.y.getTabsByNamespace(s.W.state.activeChain);return 0===e.length?null:o.qy`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){d.U.setCurrentTab(e)}onFundWalletClick(){Q.I.push("FundWallet")}onSwapClick(){this.network?.caipNetworkId&&!G.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?Q.I.push("UnsupportedChain",{swapUnsupportedChain:!0}):(z.E.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,X.lj)(s.W.state.activeChain)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("Swap"))}getAuthData(){const e=ae.i.getConnectedSocialProvider(),t=ae.i.getConnectedSocialUsername(),i=K.a.getAuthConnector(),o=i?.provider.getEmail()??"";return{name:Te.g.getAuthName({email:o,socialUsername:t,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){Q.I.push("ProfileWallets")}onSendClick(){z.E.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:(0,X.lj)(s.W.state.activeChain)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),Q.I.push("WalletSend")}};Je.styles=_e,Ve([(0,n.wk)()],Je.prototype,"watchTokenBalance",void 0),Ve([(0,n.wk)()],Je.prototype,"address",void 0),Ve([(0,n.wk)()],Je.prototype,"profileName",void 0),Ve([(0,n.wk)()],Je.prototype,"network",void 0),Ve([(0,n.wk)()],Je.prototype,"currentTab",void 0),Ve([(0,n.wk)()],Je.prototype,"tokenBalance",void 0),Ve([(0,n.wk)()],Je.prototype,"features",void 0),Ve([(0,n.wk)()],Je.prototype,"namespace",void 0),Ve([(0,n.wk)()],Je.prototype,"activeConnectorIds",void 0),Ve([(0,n.wk)()],Je.prototype,"remoteFeatures",void 0),Je=Ve([(0,p.EM)("w3m-account-wallet-features-widget")],Je);var Ke=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ge=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.namespace=s.W.state.activeChain,this.unsubscribe.push(s.W.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;const e=K.a.getConnectorId(this.namespace),t=K.a.getAuthConnector();return o.qy`
      ${t&&e===J.o.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return o.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return o.qy`<w3m-account-default-widget></w3m-account-default-widget>`}};Ke([(0,n.wk)()],Ge.prototype,"namespace",void 0),Ge=Ke([(0,p.EM)("w3m-account-view")],Ge);var Ye=i(99605),Xe=i(75910),Qe=i(8577);i(52799),i(7336);const et=m.AH`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var tt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let it=class extends o.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return o.qy`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?o.qy`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return o.qy` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?o.qy`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?o.qy`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:o.qy`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return 0===this.content.length?null:o.qy`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:i,description:n,enableButton:r,buttonType:a,buttonLabel:s,buttonVariant:l,tagVariant:c,tagLabel:d,alignItems:u="flex-end"}){return o.qy`
      <wui-flex justifyContent="space-between" alignItems=${u} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${i?o.qy`<wui-text variant="sm-medium" color="secondary">${i}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${w.Z.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?"end":"middle"})}
            </wui-text>

            ${c&&d?o.qy`<wui-tag variant=${c} size="sm">${d}</wui-tag>`:null}
          </wui-flex>

          ${n?o.qy`<wui-text variant="sm-regular" color="secondary">${n}</wui-text>`:null}
        </wui-flex>

        ${r?this.buttonTemplate({buttonType:a,buttonLabel:s,buttonVariant:l}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:i}){return o.qy`
      <wui-button
        size="sm"
        variant=${i}
        @click=${"disconnect"===e?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${"disconnect"===e?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};it.styles=[g.W5,g.fD,et],tt([(0,n.MZ)()],it.prototype,"address",void 0),tt([(0,n.MZ)()],it.prototype,"profileName",void 0),tt([(0,n.MZ)({type:Array})],it.prototype,"content",void 0),tt([(0,n.MZ)()],it.prototype,"alt",void 0),tt([(0,n.MZ)()],it.prototype,"imageSrc",void 0),tt([(0,n.MZ)()],it.prototype,"icon",void 0),tt([(0,n.MZ)()],it.prototype,"iconSize",void 0),tt([(0,n.MZ)()],it.prototype,"iconBadge",void 0),tt([(0,n.MZ)()],it.prototype,"iconBadgeSize",void 0),tt([(0,n.MZ)()],it.prototype,"buttonVariant",void 0),tt([(0,n.MZ)({type:Boolean})],it.prototype,"enableMoreButton",void 0),tt([(0,n.MZ)({type:Number})],it.prototype,"charsStart",void 0),tt([(0,n.MZ)({type:Number})],it.prototype,"charsEnd",void 0),it=tt([(0,f.E)("wui-active-profile-wallet-item")],it);const ot=m.AH`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var nt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let rt=class extends o.WF{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?o.qy`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?o.qy`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:o.qy`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return o.qy`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${w.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return o.qy`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${(0,r.J)(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};rt.styles=[g.W5,g.fD,ot],nt([(0,n.MZ)()],rt.prototype,"address",void 0),nt([(0,n.MZ)()],rt.prototype,"profileName",void 0),nt([(0,n.MZ)()],rt.prototype,"alt",void 0),nt([(0,n.MZ)()],rt.prototype,"buttonLabel",void 0),nt([(0,n.MZ)()],rt.prototype,"buttonVariant",void 0),nt([(0,n.MZ)()],rt.prototype,"imageSrc",void 0),nt([(0,n.MZ)()],rt.prototype,"icon",void 0),nt([(0,n.MZ)()],rt.prototype,"iconSize",void 0),nt([(0,n.MZ)()],rt.prototype,"iconBadge",void 0),nt([(0,n.MZ)()],rt.prototype,"iconBadgeSize",void 0),nt([(0,n.MZ)()],rt.prototype,"rightIcon",void 0),nt([(0,n.MZ)()],rt.prototype,"rightIconSize",void 0),nt([(0,n.MZ)({type:Boolean})],rt.prototype,"loading",void 0),nt([(0,n.MZ)({type:Number})],rt.prototype,"charsStart",void 0),nt([(0,n.MZ)({type:Number})],rt.prototype,"charsEnd",void 0),rt=nt([(0,f.E)("wui-inactive-profile-wallet-item")],rt);i(96796);var at=i(35306);const st={getAuthData(e){const t=e.connectorId===J.o.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const i=e?.auth?.name??ae.i.getConnectedSocialProvider(),o=e?.auth?.username??ae.i.getConnectedSocialUsername(),n=K.a.getAuthConnector(),r=n?.provider.getEmail()??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:t?Te.g.getAuthName({email:r,socialUsername:o,socialProvider:i}):void 0}}},lt=p.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var ct=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const dt={START:4,END:6},ut={SIZE:"md",ICON:"lightbulb"},ht=50,pt=[0,1],gt={eip155:"ethereum",solana:"solana",bip122:"bitcoin"},wt=[{namespace:"eip155",icon:gt.eip155,label:"EVM"},{namespace:"solana",icon:gt.solana,label:"Solana"},{namespace:"bip122",icon:gt.bip122,label:"Bitcoin"}],ft={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"}};let mt=class extends o.WF{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=s.W.state.activeChain,this.namespaces=Array.from(s.W.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=K.a.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=s.W.state.activeCaipNetwork,this.user=d.U.state.user,this.remoteFeatures=a.H.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=s.W.getAccountData(this.namespace)?.caipAddress,this.profileName=s.W.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(ee.x.subscribeKey("connections",()=>this.onConnectionsChange()),ee.x.subscribeKey("recentConnections",()=>this.requestUpdate()),K.a.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),s.W.subscribeKey("activeCaipNetwork",e=>this.caipNetwork=e),d.U.subscribeKey("user",e=>this.user=e),a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.chainListener=s.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){const e=this.shadowRoot?.querySelector(".wallet-list");if(!e)return;const t=()=>this.updateScrollOpacity(e);requestAnimationFrame(t),e.addEventListener("scroll",t),this.resizeObserver=new ResizeObserver(t),this.resizeObserver.observe(e),t()}render(){const e=this.namespace;if(!e)throw new Error("Namespace is not set");return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){const e=wt.filter(e=>this.namespaces.includes(e.namespace));return e.length>1?o.qy`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){const t=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+(this.caipAddress?1:0);return o.qy`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${gt[e]??gt.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${t>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>ee.x.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){const t=this.hasAnyConnections(e),i={"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t};return o.qy`
      <wui-flex flexDirection="column" class=${(0,Ye.H)(i)} rowgap="3">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){const t=this.getActiveConnections(e),i=this.activeConnectorIds[e],n=this.getPlainAddress();return o.qy`
      ${n||i||t.length>0?o.qy`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){const t=this.activeConnectorIds[e];if(!t)return null;const{connections:i}=Qe.b.getConnectionsData(e),n=K.a.getConnectorById(t),r=c.$.getConnectorImage(n),a=this.getPlainAddress();if(!a)return null;const s=e===J.o.CHAIN.BITCOIN,l=st.getAuthData({connectorId:t,accounts:[]}),d=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,u=i.find(e=>e.connectorId===t),h=u?.accounts.filter(e=>!at.y.isLowerCaseMatch(e.address,a));return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${a}
          alt=${n?.name}
          .content=${this.getProfileContent({address:a,connections:i,connectorId:t,namespace:e})}
          .charsStart=${dt.START}
          .charsEnd=${dt.END}
          .icon=${l.icon}
          .iconSize=${l.iconSize}
          .iconBadge=${this.isSmartAccount(a)?ut.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(a)?ut.SIZE:void 0}
          imageSrc=${r}
          ?enableMoreButton=${l.isAuth}
          @copy=${()=>this.handleCopyAddress(a)}
          @disconnect=${()=>this.handleDisconnect(e,{id:t})}
          @switch=${()=>{s&&u&&h?.[0]&&this.handleSwitchWallet(u,h[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(a)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${d?o.qy`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){const t=this.getActiveConnections(e);return 0===t.length?null:o.qy`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){const{recentConnections:t}=Qe.b.getConnectionsData(e);return 0===t.flatMap(e=>e.accounts).length?null:o.qy`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,i){return e.filter(e=>e.accounts.length>0).map((e,n)=>{const r=K.a.getConnectorById(e.connectorId),a=c.$.getConnectorImage(r)??"",s=st.getAuthData(e);return e.accounts.map((r,l)=>{const c=0!==n||0!==l,d=this.isAccountLoading(e.connectorId,r.address);return o.qy`
            <wui-flex flexDirection="column">
              ${c?o.qy`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${r.address}
                alt=${e.connectorId}
                buttonLabel=${t?"Connect":"Switch"}
                buttonVariant=${t?"neutral-secondary":"accent-secondary"}
                rightIcon=${t?"bin":"power"}
                rightIconSize="sm"
                class=${t?"recent-connection":"active-connection"}
                data-testid=${t?"recent-connection":"active-connection"}
                imageSrc=${a}
                .iconBadge=${this.isSmartAccount(r.address)?ut.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(r.address)?ut.SIZE:void 0}
                .icon=${s.icon}
                .iconSize=${s.iconSize}
                .loading=${d}
                .showBalance=${!1}
                .charsStart=${dt.START}
                .charsEnd=${dt.END}
                @buttonClick=${()=>this.handleSwitchWallet(e,r.address,i)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:r.address,isRecentConnection:t,namespace:i})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress)return null;if(!this.hasAnyConnections(e))return null;const{title:t}=this.getChainLabelInfo(e);return o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){const{title:t,description:i}=this.getChainLabelInfo(e);return o.qy`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${i}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${t}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){const t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=s.W.getAccountData(t)?.caipAddress,this.profileName=s.W.getAccountData(t)?.profileName,this.chainListener=s.W.subscribeChainProp("accountState",e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,i){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,await ee.x.switchConnection({connection:e,address:t,namespace:i,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?Y.P.showSuccess("Wallet switched"):e&&Y.P.showSuccess("Account switched")}})}catch(e){Y.P.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){const{connection:t,address:i,isRecentConnection:o,namespace:n}=e;o?(ae.i.deleteAddressFromConnection({connectorId:t.connectorId,address:i,namespace:n}),ee.x.syncStorageConnections(),Y.P.showSuccess("Wallet deleted")):this.handleDisconnect(n,{id:t.connectorId})}async handleDisconnect(e,{id:t}){try{await ee.x.disconnect({id:t,namespace:e}),Y.P.showSuccess("Wallet disconnected")}catch{Y.P.showError("Failed to disconnect wallet")}}handleCopyAddress(e){u.w.copyToClopboard(e),Y.P.showSuccess("Address copied")}handleMore(){Q.I.push("AccountSettings")}handleExternalLink(e){const t=this.caipNetwork?.blockExplorers?.default.url;t&&u.w.openHref(`${t}/address/${e}`,"_blank")}handleAddConnection(e){K.a.setFilterByNamespace(e),Q.I.push("Connect")}getChainLabelInfo(e){return ft[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){if(!this.namespace)return!1;const t=this.user?.accounts?.find(e=>"smartAccount"===e.type);return!(!t||!e)&&at.y.isLowerCaseMatch(t.address,e)}getPlainAddress(){return this.caipAddress?u.w.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){const t=this.activeConnectorIds[e],{connections:i}=Qe.b.getConnectionsData(e),[o]=i.filter(e=>at.y.isLowerCaseMatch(e.connectorId,t));if(!t)return i;const n=e===J.o.CHAIN.BITCOIN,{address:r}=this.caipAddress?Xe.C.parseCaipAddress(this.caipAddress):{};let a=[...r?[r]:[]];return n&&o&&(a=o.accounts.map(e=>e.address)||[]),Qe.b.excludeConnectorAddressFromConnections({connectorId:t,addresses:a,connections:i})}hasAnyConnections(e){const t=this.getActiveConnections(e),{recentConnections:i}=Qe.b.getConnectionsData(e);return Boolean(this.caipAddress)||t.length>0||i.length>0}isAccountLoading(e,t){return at.y.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&at.y.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){const{address:t,connections:i,connectorId:o,namespace:n}=e,[r]=i.filter(e=>at.y.isLowerCaseMatch(e.connectorId,o));if(n===J.o.CHAIN.BITCOIN&&r?.accounts.every(e=>"string"==typeof e.type))return this.getBitcoinProfileContent(r.accounts,t);const a=st.getAuthData({connectorId:o,accounts:[]});return[{address:t,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...a.isAuth?{description:this.isSmartAccount(t)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,t){const i=e.length>1,o=this.getPlainAddress();return e.map(e=>{const n=at.y.isLowerCaseMatch(e.address,o);let r="PAYMENT";return"ordinal"===e.type&&(r="ORDINALS"),{address:e.address,tagLabel:at.y.isLowerCaseMatch(e.address,t)?"Active":void 0,tagVariant:at.y.isLowerCaseMatch(e.address,t)?"success":void 0,enableButton:!0,...i?{label:r,alignItems:"flex-end",buttonType:n?"disconnect":"switch",buttonLabel:n?"Disconnect":"Switch",buttonVariant:n?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){const e=this.shadowRoot?.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return Boolean(this.remoteFeatures?.multiWallet)}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",p.z8.interpolate([0,ht],pt,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",p.z8.interpolate([0,ht],pt,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:e}=Qe.b.getConnectionsData(this.namespace);0===e.length&&Q.I.reset("ProfileWallets")}this.requestUpdate()}};mt.styles=lt,ct([(0,n.wk)()],mt.prototype,"currentTab",void 0),ct([(0,n.wk)()],mt.prototype,"namespace",void 0),ct([(0,n.wk)()],mt.prototype,"namespaces",void 0),ct([(0,n.wk)()],mt.prototype,"caipAddress",void 0),ct([(0,n.wk)()],mt.prototype,"profileName",void 0),ct([(0,n.wk)()],mt.prototype,"activeConnectorIds",void 0),ct([(0,n.wk)()],mt.prototype,"lastSelectedAddress",void 0),ct([(0,n.wk)()],mt.prototype,"lastSelectedConnectorId",void 0),ct([(0,n.wk)()],mt.prototype,"isSwitching",void 0),ct([(0,n.wk)()],mt.prototype,"caipNetwork",void 0),ct([(0,n.wk)()],mt.prototype,"user",void 0),ct([(0,n.wk)()],mt.prototype,"remoteFeatures",void 0),mt=ct([(0,p.EM)("w3m-profile-wallets-view")],mt);var yt=i(91629);const bt=m.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var vt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xt=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,yt._)(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return o.qy`
      <label data-size=${this.size}>
        <input
          ${(0,yt.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};xt.styles=[g.W5,g.fD,bt],vt([(0,n.MZ)({type:Boolean})],xt.prototype,"checked",void 0),vt([(0,n.MZ)({type:Boolean})],xt.prototype,"disabled",void 0),vt([(0,n.MZ)()],xt.prototype,"size",void 0),xt=vt([(0,f.E)("wui-toggle")],xt);const Ct=m.AH`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var kt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let $t=class extends o.WF{constructor(){super(...arguments),this.checked=!1}render(){return o.qy`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};$t.styles=[g.W5,g.fD,Ct],kt([(0,n.MZ)({type:Boolean})],$t.prototype,"checked",void 0),$t=kt([(0,f.E)("wui-certified-switch")],$t);i(1971);const Et=m.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var At=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let St=class extends o.WF{constructor(){super(...arguments),this.inputComponentRef=(0,yt._)(),this.inputValue=""}render(){return o.qy`
      <wui-input-text
        ${(0,yt.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?o.qy`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};St.styles=[g.W5,Et],At([(0,n.MZ)()],St.prototype,"inputValue",void 0),St=At([(0,f.E)("wui-search-bar")],St);var It=i(88249),Rt=i(27512);i(92286);const Mt=m.AH`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Wt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Tt=class extends o.WF{constructor(){super(...arguments),this.type="wallet"}render(){return o.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?o.qy` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Rt.a}`:o.qy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};Tt.styles=[g.W5,g.fD,Mt],Wt([(0,n.MZ)()],Tt.prototype,"type",void 0),Tt=Wt([(0,f.E)("wui-card-select-loader")],Tt);const Pt=o.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Ot=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Nt=class extends o.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&w.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&w.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&w.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&w.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&w.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&w.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&w.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&w.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};Nt.styles=[g.W5,Pt],Ot([(0,n.MZ)()],Nt.prototype,"gridTemplateRows",void 0),Ot([(0,n.MZ)()],Nt.prototype,"gridTemplateColumns",void 0),Ot([(0,n.MZ)()],Nt.prototype,"justifyItems",void 0),Ot([(0,n.MZ)()],Nt.prototype,"alignItems",void 0),Ot([(0,n.MZ)()],Nt.prototype,"justifyContent",void 0),Ot([(0,n.MZ)()],Nt.prototype,"alignContent",void 0),Ot([(0,n.MZ)()],Nt.prototype,"columnGap",void 0),Ot([(0,n.MZ)()],Nt.prototype,"rowGap",void 0),Ot([(0,n.MZ)()],Nt.prototype,"gap",void 0),Ot([(0,n.MZ)()],Nt.prototype,"padding",void 0),Ot([(0,n.MZ)()],Nt.prototype,"margin",void 0),Nt=Ot([(0,f.E)("wui-grid")],Nt);var Lt=i(65042);i(35090),i(41684);const zt=p.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var jt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Zt=class extends o.WF{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return o.qy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,r.J)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?o.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():o.qy`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,r.J)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return o.qy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=c.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await c.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Zt.styles=zt,jt([(0,n.wk)()],Zt.prototype,"visible",void 0),jt([(0,n.wk)()],Zt.prototype,"imageSrc",void 0),jt([(0,n.wk)()],Zt.prototype,"imageLoading",void 0),jt([(0,n.MZ)()],Zt.prototype,"wallet",void 0),Zt=jt([(0,p.EM)("w3m-all-wallets-list-item")],Zt);const qt=p.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Dt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Bt="local-paginator";let Ht=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!It.N.state.wallets.length,this.wallets=It.N.state.wallets,this.recommended=It.N.state.recommended,this.featured=It.N.state.featured,this.filteredWallets=It.N.state.filteredWallets,this.unsubscribe.push(It.N.subscribeKey("wallets",e=>this.wallets=e),It.N.subscribeKey("recommended",e=>this.recommended=e),It.N.subscribeKey("featured",e=>this.featured=e),It.N.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return o.qy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await It.N.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>o.qy`
        <wui-card-select-loader type="wallet" id=${(0,r.J)(t)}></wui-card-select-loader>
      `)}getWallets(){const e=[...this.featured,...this.recommended];this.filteredWallets?.length>0?e.push(...this.filteredWallets):e.push(...this.wallets);const t=u.w.uniqueBy(e,"id"),i=Lt.A.markWalletsAsInstalled(t);return Lt.A.markWalletsWithDisplayIndex(i)}walletsTemplate(){return this.getWallets().map(e=>o.qy`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:o}=It.N.state,n=window.innerWidth<352?3:4,r=e.length+t.length;let a=Math.ceil(r/n)*n-r+n;return a-=e.length?i.length%n:0,0===o&&i.length>0?null:0===o||[...i,...e,...t].length<o?this.shimmerTemplate(a,Bt):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${Bt}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){const{page:e,count:t,wallets:i}=It.N.state;i.length<t&&It.N.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){K.a.selectWalletConnector(e)}};Ht.styles=qt,Dt([(0,n.wk)()],Ht.prototype,"loading",void 0),Dt([(0,n.wk)()],Ht.prototype,"wallets",void 0),Dt([(0,n.wk)()],Ht.prototype,"recommended",void 0),Dt([(0,n.wk)()],Ht.prototype,"featured",void 0),Dt([(0,n.wk)()],Ht.prototype,"filteredWallets",void 0),Ht=Dt([(0,p.EM)("w3m-all-wallets-list")],Ht);i(93373);const Ft=o.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Ut=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let _t=class extends o.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?o.qy`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await It.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=It.N.state,t=Lt.A.markWalletsAsInstalled(e);return e.length?o.qy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${t.map(e=>o.qy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:o.qy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){K.a.selectWalletConnector(e)}};_t.styles=Ft,Ut([(0,n.wk)()],_t.prototype,"loading",void 0),Ut([(0,n.MZ)()],_t.prototype,"query",void 0),Ut([(0,n.MZ)()],_t.prototype,"badge",void 0),_t=Ut([(0,p.EM)("w3m-all-wallets-search")],_t);var Vt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Jt=class extends o.WF{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=u.w.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return o.qy`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?o.qy`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:o.qy`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",Y.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return u.w.isMobile()?o.qy`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Q.I.push("ConnectingWalletConnect")}};Vt([(0,n.wk)()],Jt.prototype,"search",void 0),Vt([(0,n.wk)()],Jt.prototype,"badge",void 0),Jt=Vt([(0,p.EM)("w3m-all-wallets-view")],Jt);var Kt=i(44290),Gt=i(51454);const Yt=m.AH`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var Xt=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Qt=class extends o.WF{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const e=`${this.size}-regular`;return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};Qt.styles=[g.W5,g.fD,Yt],Xt([(0,n.MZ)()],Qt.prototype,"text",void 0),Xt([(0,n.MZ)({type:Boolean})],Qt.prototype,"disabled",void 0),Xt([(0,n.MZ)()],Qt.prototype,"size",void 0),Xt([(0,n.MZ)()],Qt.prototype,"icon",void 0),Xt([(0,n.MZ)()],Qt.prototype,"tabIdx",void 0),Qt=Xt([(0,f.E)("wui-list-button")],Qt);i(24954);var ei=i(69510),ti=i(71655),ii=(i(4401),i(21785));const oi=p.AH`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`;var ni=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ri=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.formRef=(0,yt._)(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener("keydown",e=>{"Enter"===e.key&&this.onSubmitEmail(e)})}render(){const e=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.AUTH);return o.qy`
      <form ${(0,yt.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,r.J)(this.tabIdx)}
          ?disabled=${e}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?o.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?o.qy`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!Pe.y.isValidEmail(this.email))return void ti.h.open({displayMessage:ii.R.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");if(!J.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===s.W.state.activeChain)){const e=s.W.getFirstCaipNetworkSupportsAuthConnector();if(e)return void Q.I.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=K.a.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await t.provider.connectEmail({email:this.email});if(z.E.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i)z.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),Q.I.push("EmailVerifyOtp",{email:this.email});else if("VERIFY_DEVICE"===i)Q.I.push("EmailVerifyDevice",{email:this.email});else if("CONNECT"===i){const e=this.remoteFeatures?.multiWallet;await ee.x.connectExternal(t,s.W.state.activeChain),e?(Q.I.replace("ProfileWallets"),Y.P.showSuccess("New Wallet Added")):Q.I.replace("Account")}}catch(e){const t=u.w.parseError(e);t?.includes("Invalid email")?this.error="Invalid email. Try again.":Y.P.showError(e)}finally{this.loading=!1}}onFocusEvent(){z.E.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};ri.styles=oi,ni([(0,n.MZ)()],ri.prototype,"tabIdx",void 0),ni([(0,n.wk)()],ri.prototype,"email",void 0),ni([(0,n.wk)()],ri.prototype,"loading",void 0),ni([(0,n.wk)()],ri.prototype,"error",void 0),ni([(0,n.wk)()],ri.prototype,"remoteFeatures",void 0),ri=ni([(0,p.EM)("w3m-email-login-widget")],ri);i(61600);var ai=i(71801);i(3206),i(46162);const si=m.AH`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  button > wui-icon {
    width: 24px;
    height: 24px;
  }
`;var li=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ci=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-icon name=${this.logo}></wui-icon>
      </button>
    `}};ci.styles=[g.W5,g.fD,si],li([(0,n.MZ)()],ci.prototype,"logo",void 0),li([(0,n.MZ)({type:Boolean})],ci.prototype,"disabled",void 0),li([(0,n.MZ)()],ci.prototype,"tabIdx",void 0),ci=li([(0,f.E)("wui-logo-select")],ci);var di=i(12710);const ui=p.AH`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var hi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let pi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.remoteFeatures=a.H.state.remoteFeatures,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isPwaLoading=!1,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const e="explore"===this.walletGuide;let t=this.remoteFeatures?.socials;return!t&&e?(t=G.oU.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?o.qy` <wui-flex gap="2">
        ${e.slice(0,2).map(e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:o.qy` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${(0,r.J)(e[0])}
      text=${`Continue with ${e[0]}`}
      tabIdx=${(0,r.J)(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials;const t="explore"===this.walletGuide;return(!this.authConnector||!e||0===e.length)&&t&&(e=G.oU.DEFAULT_SOCIALS),e?e.length<=2?null:e&&e.length>6?o.qy`<wui-flex gap="2">
        ${e.slice(1,5).map(e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,r.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?o.qy`<wui-flex gap="2">
      ${e.slice(1,e.length).map(e=>o.qy`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,r.J)(this.tabIdx)}
            ?focusable=${void 0!==this.tabIdx&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null:null}onMoreSocialsClick(){Q.I.push("ConnectSocials")}async onSocialClick(e){if(!J.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===s.W.state.activeChain)){const e=s.W.getFirstCaipNetworkSupportsAuthConnector();if(e)return void Q.I.push("SwitchNetwork",{network:e})}e&&await(0,ai.Up)(e)}async handlePwaFrameLoad(){if(u.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof di.Y&&await this.authConnector.provider.init()}catch(e){ti.h.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return ee.x.hasAnyConnection(J.o.CONNECTOR_ID.AUTH)}};pi.styles=ui,hi([(0,n.MZ)()],pi.prototype,"walletGuide",void 0),hi([(0,n.MZ)()],pi.prototype,"tabIdx",void 0),hi([(0,n.wk)()],pi.prototype,"connectors",void 0),hi([(0,n.wk)()],pi.prototype,"remoteFeatures",void 0),hi([(0,n.wk)()],pi.prototype,"authConnector",void 0),hi([(0,n.wk)()],pi.prototype,"isPwaLoading",void 0),pi=hi([(0,p.EM)("w3m-social-login-widget")],pi);const gi=m.AH`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var wi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let fi=class extends o.WF{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return o.qy`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>o.qy`
          <wui-wallet-image
            size="sm"
            imageSrc=${e}
            name=${(0,r.J)(t)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(4-this.walletImages.length)].map(()=>o.qy` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};fi.styles=[g.W5,gi],wi([(0,n.MZ)({type:Array})],fi.prototype,"walletImages",void 0),fi=wi([(0,f.E)("wui-all-wallets-image")],fi);const mi=m.AH`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }
`;var yi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let bi=class extends o.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,o.qy`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${(0,r.J)(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?o.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?o.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?o.qy`<wui-wallet-image
        size=${(0,r.J)("sm"===this.size?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:o.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?o.qy`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?o.qy`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};bi.styles=[g.W5,g.fD,mi],yi([(0,n.MZ)({type:Array})],bi.prototype,"walletImages",void 0),yi([(0,n.MZ)()],bi.prototype,"imageSrc",void 0),yi([(0,n.MZ)()],bi.prototype,"name",void 0),yi([(0,n.MZ)()],bi.prototype,"size",void 0),yi([(0,n.MZ)()],bi.prototype,"tagLabel",void 0),yi([(0,n.MZ)()],bi.prototype,"tagVariant",void 0),yi([(0,n.MZ)()],bi.prototype,"walletIcon",void 0),yi([(0,n.MZ)()],bi.prototype,"tabIdx",void 0),yi([(0,n.MZ)({type:Boolean})],bi.prototype,"disabled",void 0),yi([(0,n.MZ)({type:Boolean})],bi.prototype,"showAllWallets",void 0),yi([(0,n.MZ)({type:Boolean})],bi.prototype,"loading",void 0),yi([(0,n.MZ)({type:String})],bi.prototype,"loadingSpinnerColor",void 0),bi=yi([(0,f.E)("wui-list-wallet")],bi);var vi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.count=It.N.state.count,this.filteredCount=It.N.state.filteredWallets.length,this.isFetchingRecommendedWallets=It.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e),It.N.subscribeKey("count",e=>this.count=e),It.N.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),It.N.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(e=>"walletConnect"===e.id),{allWallets:t}=a.H.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!u.w.isMobile())return null;const i=It.N.state.featured.length,n=this.count+i,s=n<10?n:10*Math.floor(n/10),l=this.filteredCount>0?this.filteredCount:s;let c=`${l}`;this.filteredCount>0?c=`${this.filteredCount}`:l<n&&(c=`${l}+`);const d=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,r.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${d}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){z.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Q.I.push("AllWallets")}};vi([(0,n.MZ)()],xi.prototype,"tabIdx",void 0),vi([(0,n.wk)()],xi.prototype,"connectors",void 0),vi([(0,n.wk)()],xi.prototype,"count",void 0),vi([(0,n.wk)()],xi.prototype,"filteredCount",void 0),vi([(0,n.wk)()],xi.prototype,"isFetchingRecommendedWallets",void 0),xi=vi([(0,p.EM)("w3m-all-wallets-widget")],xi);var Ci=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ki=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.connections=ee.x.state.connections,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e),ee.x.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(e=>"ANNOUNCED"===e.type);return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${e.filter(Te.g.showConnector).map(e=>{const t=(this.connections.get(e.chain)??[]).some(t=>at.y.isLowerCaseMatch(t.connectorId,e.id));return o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(c.$.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant=${t?"info":"success"}
              tagLabel=${t?"connected":"installed"}
              size="sm"
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?u.w.isMobile()?Q.I.push("AllWallets"):Q.I.push("ConnectingWalletConnect"):Q.I.push("ConnectingExternal",{connector:e})}};Ci([(0,n.MZ)()],ki.prototype,"tabIdx",void 0),Ci([(0,n.wk)()],ki.prototype,"connectors",void 0),Ci([(0,n.wk)()],ki.prototype,"connections",void 0),ki=Ci([(0,p.EM)("w3m-connect-announced-widget")],ki);var $i=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ei=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.loading=!1,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e)),u.w.isTelegram()&&u.w.isIos()&&(this.loading=!ee.x.state.wcUri,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=a.H.state;if(!e?.length)return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e),i=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`<wui-flex flexDirection="column" gap="2">
      ${t.map(e=>o.qy`
          <wui-list-wallet
            imageSrc=${(0,r.J)(c.$.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            size="sm"
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,r.J)(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${i}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=ae.i.getRecentWallets(),i=this.connectors.map(e=>e.info?.rdns).filter(Boolean),o=t.map(e=>e.rdns).filter(Boolean),n=i.concat(o);if(n.includes("io.metamask.mobile")&&u.w.isMobile()){const e=n.indexOf("io.metamask.mobile");n[e]="io.metamask"}return e.filter(e=>!n.includes(String(e?.rdns)))}onConnectWallet(e){this.loading||Q.I.push("ConnectingWalletConnect",{wallet:e})}};$i([(0,n.MZ)()],Ei.prototype,"tabIdx",void 0),$i([(0,n.wk)()],Ei.prototype,"connectors",void 0),$i([(0,n.wk)()],Ei.prototype,"loading",void 0),Ei=$i([(0,p.EM)("w3m-connect-custom-widget")],Ei);var Ai=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Si=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(e=>"EXTERNAL"===e.type).filter(Te.g.showConnector).filter(e=>e.id!==J.o.CONNECTOR_ID.COINBASE_SDK);if(!e?.length)return this.style.cssText="display: none",null;const t=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(c.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnector(e){Q.I.push("ConnectingExternal",{connector:e})}};Ai([(0,n.MZ)()],Si.prototype,"tabIdx",void 0),Ai([(0,n.wk)()],Si.prototype,"connectors",void 0),Si=Ai([(0,p.EM)("w3m-connect-external-widget")],Si);var Ii=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ri=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const e=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${this.wallets.map(t=>o.qy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,r.J)(c.$.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,r.J)(this.tabIdx)}
              size="sm"
              ?disabled=${e}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){K.a.selectWalletConnector(e)}};Ii([(0,n.MZ)()],Ri.prototype,"tabIdx",void 0),Ii([(0,n.MZ)()],Ri.prototype,"wallets",void 0),Ri=Ii([(0,p.EM)("w3m-connect-featured-widget")],Ri);var Mi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Wi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=[],this.connections=ee.x.state.connections,this.unsubscribe.push(ee.x.subscribeKey("connections",e=>this.connections=e))}render(){const e=this.connectors.filter(Te.g.showConnector);return 0===e.length?(this.style.cssText="display: none",null):o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>{const t=(this.connections.get(e.chain)??[]).some(t=>at.y.isLowerCaseMatch(t.connectorId,e.id));return o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(c.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant=${t?"info":"success"}
              tagLabel=${t?"connected":"installed"}
              data-testid=${`wallet-selector-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){K.a.setActiveConnector(e),Q.I.push("ConnectingExternal",{connector:e})}};Mi([(0,n.MZ)()],Wi.prototype,"tabIdx",void 0),Mi([(0,n.MZ)()],Wi.prototype,"connectors",void 0),Mi([(0,n.wk)()],Wi.prototype,"connections",void 0),Wi=Mi([(0,p.EM)("w3m-connect-injected-widget")],Wi);var Ti=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Pi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name);return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(c.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="info"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              size="sm"
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){K.a.setActiveConnector(e),Q.I.push("ConnectingMultiChain")}};Ti([(0,n.MZ)()],Pi.prototype,"tabIdx",void 0),Ti([(0,n.wk)()],Pi.prototype,"connectors",void 0),Pi=Ti([(0,p.EM)("w3m-connect-multi-chain-widget")],Pi);var Oi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ni=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.loading=!1,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e)),u.w.isTelegram()&&u.w.isIos()&&(this.loading=!ee.x.state.wcUri,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const e=ae.i.getRecentWallets().filter(e=>!Lt.A.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));if(!e.length)return this.style.cssText="display: none",null;const t=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${e.map(e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(c.$.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="info"
              size="sm"
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${t}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||K.a.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(t=>t.id===e.id||t.name===e.name)}isWalletCompatibleWithCurrentChain(e){const t=s.W.state.activeChain;return!t||!e.chains||e.chains.some(e=>{const i=e.split(":")[0];return t===i})}};Oi([(0,n.MZ)()],Ni.prototype,"tabIdx",void 0),Oi([(0,n.wk)()],Ni.prototype,"connectors",void 0),Oi([(0,n.wk)()],Ni.prototype,"loading",void 0),Ni=Oi([(0,p.EM)("w3m-connect-recent-widget")],Ni);var Li=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let zi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,u.w.isTelegram()&&u.w.isIos()&&(this.loading=!ee.x.state.wcUri,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=K.a.state,{customWallets:t,featuredWalletIds:i}=a.H.state,n=ae.i.getRecentWallets(),s=e.find(e=>"walletConnect"===e.id),l=e.filter(e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type).filter(e=>"Browser Wallet"!==e.name);if(!s)return null;if(i||t||!this.wallets.length)return this.style.cssText="display: none",null;const d=l.length+n.length,u=Math.max(0,2-d),h=Lt.A.filterOutDuplicateWallets(this.wallets).slice(0,u);if(!h.length)return this.style.cssText="display: none",null;const p=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-flex flexDirection="column" gap="2">
        ${h.map(e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(c.$.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              size="sm"
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${p}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;const t=K.a.getConnector({id:e.id,rdns:e.rdns});t?Q.I.push("ConnectingExternal",{connector:t}):Q.I.push("ConnectingWalletConnect",{wallet:e})}};Li([(0,n.MZ)()],zi.prototype,"tabIdx",void 0),Li([(0,n.MZ)()],zi.prototype,"wallets",void 0),Li([(0,n.wk)()],zi.prototype,"loading",void 0),zi=Li([(0,p.EM)("w3m-connect-recommended-widget")],zi);var ji=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Zi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.connectorImages=l.j.state.connectorImages,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e),l.j.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(u.w.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(e=>"walletConnect"===e.id);if(!e)return this.style.cssText="display: none",null;const t=e.imageUrl||this.connectorImages[e?.imageId??""],i=ee.x.hasAnyConnection(J.o.CONNECTOR_ID.WALLET_CONNECT);return o.qy`
      <wui-list-wallet
        imageSrc=${(0,r.J)(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="accent"
        tabIdx=${(0,r.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        size="sm"
        ?disabled=${i}
      >
      </wui-list-wallet>
    `}onConnector(e){K.a.setActiveConnector(e),Q.I.push("ConnectingWalletConnect")}};ji([(0,n.MZ)()],Zi.prototype,"tabIdx",void 0),ji([(0,n.wk)()],Zi.prototype,"connectors",void 0),ji([(0,n.wk)()],Zi.prototype,"connectorImages",void 0),Zi=ji([(0,p.EM)("w3m-connect-walletconnect-widget")],Zi);const qi=p.AH`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Di=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Bi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.a.state.connectors,this.recommended=It.N.state.recommended,this.featured=It.N.state.featured,this.unsubscribe.push(K.a.subscribeKey("connectors",e=>this.connectors=e),It.N.subscribeKey("recommended",e=>this.recommended=e),It.N.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:t,announced:i,injected:n,multiChain:a,recommended:s,featured:l,external:c}=Te.g.getConnectorsByType(this.connectors,this.recommended,this.featured);return Te.g.getConnectorTypeOrder({custom:e,recent:t,announced:i,injected:n,multiChain:a,recommended:s,featured:l,external:c}).map(e=>{switch(e){case"injected":return o.qy`
            ${a.length?o.qy`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?o.qy`<w3m-connect-announced-widget
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${n.length?o.qy`<w3m-connect-injected-widget
                  .connectors=${n}
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return o.qy`<w3m-connect-walletconnect-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return o.qy`<w3m-connect-recent-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return o.qy`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return o.qy`<w3m-connect-custom-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return o.qy`<w3m-connect-external-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return o.qy`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${e}`),null}})}};Bi.styles=qi,Di([(0,n.MZ)()],Bi.prototype,"tabIdx",void 0),Di([(0,n.wk)()],Bi.prototype,"connectors",void 0),Di([(0,n.wk)()],Bi.prototype,"recommended",void 0),Di([(0,n.wk)()],Bi.prototype,"featured",void 0),Bi=Di([(0,p.EM)("w3m-connector-list")],Bi);var Hi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Fi=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0}render(){return o.qy`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${(0,r.J)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,r.J)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Hi([(0,n.MZ)()],Fi.prototype,"tabIdx",void 0),Fi=Hi([(0,p.EM)("w3m-wallet-login-list")],Fi);const Ui=p.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var _i=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Vi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=K.a.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.features=a.H.state.features,this.remoteFeatures=a.H.state.remoteFeatures,this.enableWallets=a.H.state.enableWallets,this.noAdapters=s.W.state.noAdapters,this.walletGuide="get-started",this.checked=Gt.o.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!s.W.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!s.W.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(K.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),a.H.subscribeKey("features",e=>{this.features=e}),a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),a.H.subscribeKey("enableWallets",e=>this.enableWallets=e),s.W.subscribeKey("noAdapters",e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),Gt.o.subscribeKey("isLegalCheckboxChecked",e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect();const e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,i=a.H.state.features?.legalCheckbox,n=Boolean(e||t)&&Boolean(i)&&"get-started"===this.walletGuide&&!this.checked,r={connect:!0,disabled:n},s=a.H.state.enableWalletGuide,l=this.enableWallets,c=this.isSocialEnabled||this.authConnector,d=n?-1:void 0;return o.qy`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${(0,Ye.H)(r)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${c&&l&&s&&"get-started"===this.walletGuide?["1","3","0","3"]:["1","3","3","3"]}
          >
            ${this.renderConnectMethod(d)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){return Pe.y.hasFooter()?null:this.remoteFeatures?.reownBranding?o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){const t=e.filter(e=>e.type===ei.o.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return J.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){const t=Lt.A.getConnectOrderMethod(this.features,this.connectors);return o.qy`${t.map((t,i)=>{switch(t){case"email":return o.qy`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return o.qy`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return o.qy`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const t=Lt.A.getConnectOrderMethod(this.features,this.connectors)[e+1];if(!t)return;return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){const i=this.checkIsThereNextMethod(e),n="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&i&&!n?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const e="social"===i;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&i?o.qy`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const e="email"===i;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&i?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?o.qy`<w3m-email-login-widget tabIdx=${(0,r.J)(e)}></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?o.qy`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,r.J)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){const t=this.enableWallets,i=!1===this.features?.emailShowWallets,n=this.features?.collapseWallets,a=i||n;if(!t)return null;if(u.w.isTelegram()&&(u.w.isSafari()||u.w.isIos())&&ee.x.connectWalletConnect().catch(e=>({})),"explore"===this.walletGuide)return null;return this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&a?o.qy`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,r.J)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:o.qy`<w3m-wallet-login-list tabIdx=${(0,r.J)(e)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:o.qy`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".connect");if(!e)return;e.scrollHeight>470?(e.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 100px,\n          black calc(100% - 100px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--connect-scroll--top-opacity",p.z8.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",p.z8.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){Q.I.push("ConnectWallets")}};Vi.styles=Ui,_i([(0,Kt.w)()],Vi.prototype,"connectors",void 0),_i([(0,Kt.w)()],Vi.prototype,"authConnector",void 0),_i([(0,Kt.w)()],Vi.prototype,"features",void 0),_i([(0,Kt.w)()],Vi.prototype,"remoteFeatures",void 0),_i([(0,Kt.w)()],Vi.prototype,"enableWallets",void 0),_i([(0,Kt.w)()],Vi.prototype,"noAdapters",void 0),_i([(0,n.MZ)()],Vi.prototype,"walletGuide",void 0),_i([(0,Kt.w)()],Vi.prototype,"checked",void 0),_i([(0,Kt.w)()],Vi.prototype,"isEmailEnabled",void 0),_i([(0,Kt.w)()],Vi.prototype,"isSocialEnabled",void 0),_i([(0,Kt.w)()],Vi.prototype,"isAuthEnabled",void 0),Vi=_i([(0,p.EM)("w3m-connect-view")],Vi);var Ji=i(68996);i(91035);const Ki=m.AH`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var Gi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Yi=class extends o.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return o.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Yi.styles=[g.W5,g.fD,Ki],Gi([(0,n.MZ)({type:Boolean})],Yi.prototype,"disabled",void 0),Gi([(0,n.MZ)()],Yi.prototype,"label",void 0),Gi([(0,n.MZ)()],Yi.prototype,"buttonLabel",void 0),Yi=Gi([(0,f.E)("wui-cta-button")],Yi);const Xi=p.AH`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var Qi=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let eo=class extends o.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:n,homepage:r}=this.wallet,a=u.w.isMobile(),s=u.w.isIos(),l=u.w.isAndroid(),c=[t,i,r,n].filter(Boolean).length>1,d=p.Zv.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!a?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>Q.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&r?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&u.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&u.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&u.w.openHref(this.wallet.homepage,"_blank")}};eo.styles=[Xi],Qi([(0,n.MZ)({type:Object})],eo.prototype,"wallet",void 0),eo=Qi([(0,p.EM)("w3m-mobile-download-links")],eo);const to=p.AH`
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

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var io=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class oo extends o.WF{constructor(){super(),this.wallet=Q.I.state.data?.wallet,this.connector=Q.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=c.$.getWalletImage(this.wallet)??c.$.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=ee.x.state.wcUri,this.error=ee.x.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(ee.x.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),ee.x.subscribeKey("wcError",e=>this.error=e)),(u.w.isTelegram()||u.w.isSafari())&&u.w.isIos()&&ee.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),ee.x.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t="";return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t="Connection declined")),o.qy`
      <wui-flex
        data-error=${(0,r.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,r.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?o.qy`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?o.qy`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){ee.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const e=Ji.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(u.w.copyToClopboard(this.uri),Y.P.showSuccess("Link copied"))}catch{Y.P.showError("Failed to copy")}}}oo.styles=to,io([(0,n.wk)()],oo.prototype,"isRetrying",void 0),io([(0,n.wk)()],oo.prototype,"uri",void 0),io([(0,n.wk)()],oo.prototype,"error",void 0),io([(0,n.wk)()],oo.prototype,"ready",void 0),io([(0,n.wk)()],oo.prototype,"showRetry",void 0),io([(0,n.wk)()],oo.prototype,"label",void 0),io([(0,n.wk)()],oo.prototype,"secondaryBtnLabel",void 0),io([(0,n.wk)()],oo.prototype,"secondaryLabel",void 0),io([(0,n.wk)()],oo.prototype,"isLoading",void 0),io([(0,n.MZ)({type:Boolean})],oo.prototype,"isMobile",void 0),io([(0,n.MZ)()],oo.prototype,"onRetry",void 0);var no=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ro=class extends oo{constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=ee.x.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=a.H.state.remoteFeatures,this.currentActiveConnectorId=K.a.state.activeConnectorIds[this.connector?.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),z.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:this.wallet?.display_index}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(K.a.subscribeKey("activeConnectorIds",t=>{const i=t[e],o=this.remoteFeatures?.multiWallet;i!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&o?(Q.I.replace("ProfileWallets"),Y.P.showSuccess("New Wallet Added")):h.W.close())}),ee.x.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;this.connector.id===J.o.CONNECTOR_ID.COINBASE_SDK&&this.error||(await ee.x.connectExternal(this.connector,this.connector.chain),z.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}}catch(e){z.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const t=e.get(this.connector.chain)??[],i=this.remoteFeatures?.multiWallet;if(0===t.length)Q.I.replace("Connect");else{const e=Qe.b.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),o=Qe.b.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);if(0===o.length)this.hasMultipleConnections&&i?(Q.I.replace("ProfileWallets"),Y.P.showSuccess("Wallet deleted")):h.W.close();else{!e.every(e=>o.some(t=>at.y.isLowerCaseMatch(e.address,t.address)))&&i&&Q.I.replace("ProfileWallets")}}}}isAlreadyConnected(e){return Boolean(e)&&this.connectionsByNamespace.some(t=>at.y.isLowerCaseMatch(t.connectorId,e.id))}};ro=no([(0,p.EM)("w3m-connecting-external-view")],ro);const ao=o.AH`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var so=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let lo=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.activeConnector=K.a.state.activeConnector,this.unsubscribe.push(K.a.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,r.J)(c.$.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map(e=>e.name?o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(c.$.getChainImage(e.chain))}
              name=${J.o.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null)}onConnector(e){const t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain);t?"walletConnect"===t.id?u.w.isMobile()?Q.I.push("AllWallets"):Q.I.push("ConnectingWalletConnect"):Q.I.push("ConnectingExternal",{connector:t}):Y.P.showError("Failed to find connector")}};lo.styles=ao,so([(0,n.wk)()],lo.prototype,"activeConnector",void 0),lo=so([(0,p.EM)("w3m-connecting-multi-chain-view")],lo);var co=i(92948),uo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ho=class extends o.WF{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return o.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};uo([(0,n.MZ)({type:Array})],ho.prototype,"platforms",void 0),uo([(0,n.MZ)()],ho.prototype,"onSelectPlatfrom",void 0),ho=uo([(0,p.EM)("w3m-connecting-header")],ho);var po=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let go=class extends oo{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),z.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=K.a.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name);if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await ee.x.connectExternal(t,t.chain),h.W.close(),z.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){z.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};go=po([(0,p.EM)("w3m-connecting-wc-browser")],go);var wo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let fo=class extends oo{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),z.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=u.w.formatNativeUrl(e,this.uri);ee.x.setWcLinking({name:t,href:o}),ee.x.setRecentWallet(this.wallet),u.w.openHref(i,"_blank")}catch{this.error=!0}}};fo=wo([(0,p.EM)("w3m-connecting-wc-desktop")],fo);var mo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let yo=class extends oo{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=a.H.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,link_mode:t,name:i}=this.wallet,{redirect:o,redirectUniversalLink:n,href:r}=u.w.formatNativeUrl(e,this.uri,t);this.redirectDeeplink=o,this.redirectUniversalLink=n,this.target=u.w.isIframe()?"_top":"_self",ee.x.setWcLinking({name:i,href:r}),ee.x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?u.w.openHref(this.redirectUniversalLink,this.target):u.w.openHref(this.redirectDeeplink,this.target)}catch(e){z.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=G.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(ee.x.subscribeKey("wcUri",()=>{this.onHandleURI()})),z.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){ee.x.setWcError(!1),this.onConnect?.()}};mo([(0,n.wk)()],yo.prototype,"redirectDeeplink",void 0),mo([(0,n.wk)()],yo.prototype,"redirectUniversalLink",void 0),mo([(0,n.wk)()],yo.prototype,"target",void 0),mo([(0,n.wk)()],yo.prototype,"preferUniversalLinks",void 0),mo([(0,n.wk)()],yo.prototype,"isLoading",void 0),yo=mo([(0,p.EM)("w3m-connecting-wc-mobile")],yo);i(44360);const bo=p.AH`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var vo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xo=class extends oo{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),z.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return ee.x.setWcLinking(void 0),ee.x.setRecentWallet(this.wallet),o.qy` <wui-qr-code
      size=${e}
      theme=${Ji.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,r.J)(c.$.getWalletImage(this.wallet))}
      color=${(0,r.J)(Ji.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,r.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.qy`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};xo.styles=bo,xo=vo([(0,p.EM)("w3m-connecting-wc-qrcode")],xo);var Co=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let ko=class extends o.WF{constructor(){if(super(),this.wallet=Q.I.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");z.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index}})}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,r.J)(c.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};ko=Co([(0,p.EM)("w3m-connecting-wc-unsupported")],ko);var $o=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Eo=class extends oo{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=G.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(ee.x.subscribeKey("wcUri",()=>{this.updateLoadingState()})),z.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=u.w.formatUniversalUrl(e,this.uri);ee.x.setWcLinking({name:t,href:o}),ee.x.setRecentWallet(this.wallet),u.w.openHref(i,"_blank")}catch{this.error=!0}}};$o([(0,n.wk)()],Eo.prototype,"isLoading",void 0),Eo=$o([(0,p.EM)("w3m-connecting-wc-web")],Eo);var Ao=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let So=class extends o.WF{constructor(){super(),this.wallet=Q.I.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(a.H.state.siwx),this.remoteFeatures=a.H.state.remoteFeatures,this.displayBranding=!0,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding&&this.displayBranding?o.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(e=!1){if("browser"!==this.platform&&(!a.H.state.manualWCControl||e))try{const{wcPairingExpiry:t,status:i}=ee.x.state;if(e||a.H.state.enableEmbedded||u.w.isPairingExpired(t)||"connecting"===i){const e=ee.x.getConnections(s.W.state.activeChain),t=this.remoteFeatures?.multiWallet,i=e.length>0;await ee.x.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(i&&t?(Q.I.replace("ProfileWallets"),Y.P.showSuccess("New Wallet Added")):h.W.close())}}catch(e){if(e instanceof Error&&e.message.includes("An error occurred when attempting to switch chain")&&!a.H.state.enableNetworkSwitch&&s.W.state.activeChain)return s.W.setActiveCaipNetwork(co.R.getUnsupportedNetwork(`${s.W.state.activeChain}:${s.W.state.activeCaipNetwork?.id}`)),void s.W.showUnsupportedChainUI();z.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),ee.x.setWcError(!0),Y.P.showError(e.message??"Connection error"),ee.x.resetWcConnection(),Q.I.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:n}=this.wallet,r=o?.map(({injected_id:e})=>e).filter(Boolean),l=[...n?[n]:r??[]],c=!a.H.state.isUniversalProvider&&l.length,d=e,h=i,p=ee.x.checkInstalled(l),g=c&&p,w=t&&!u.w.isMobile();g&&!s.W.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(u.w.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),w&&this.platforms.push("desktop"),g||!c||s.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return o.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return o.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return o.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return o.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?o.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Ao([(0,n.wk)()],So.prototype,"platform",void 0),Ao([(0,n.wk)()],So.prototype,"platforms",void 0),Ao([(0,n.wk)()],So.prototype,"isSiwxEnabled",void 0),Ao([(0,n.wk)()],So.prototype,"remoteFeatures",void 0),Ao([(0,n.MZ)({type:Boolean})],So.prototype,"displayBranding",void 0),So=Ao([(0,p.EM)("w3m-connecting-wc-view")],So);var Io=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Ro=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.isMobile=u.w.isMobile(),this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(a.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:t}=It.N.state,{customWallets:i}=a.H.state,n=ae.i.getRecentWallets(),r=e.length||t.length||i?.length||n.length;return o.qy`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${r?o.qy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return o.qy`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?o.qy` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Io([(0,n.wk)()],Ro.prototype,"isMobile",void 0),Io([(0,n.wk)()],Ro.prototype,"remoteFeatures",void 0),Ro=Io([(0,p.EM)("w3m-connecting-wc-basic-view")],Ro);var Mo=i(45839);const Wo=o.AH`
  .continue-button-container {
    width: 100%;
  }
`;var To=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Po=class extends o.WF{constructor(){super(...arguments),this.loading=!1}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{u.w.openHref(Mo.T.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.qy`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){Q.I.push("RegisterAccountName"),z.E.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:(0,X.lj)(s.W.state.activeChain)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Po.styles=Wo,To([(0,n.wk)()],Po.prototype,"loading",void 0),Po=To([(0,p.EM)("w3m-choose-account-name-view")],Po);var Oo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let No=class extends o.WF{constructor(){super(...arguments),this.wallet=Q.I.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return o.qy`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?o.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?o.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?o.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?o.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&u.w.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&u.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&u.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&u.w.openHref(this.wallet.homepage,"_blank")}};No=Oo([(0,p.EM)("w3m-downloads-view")],No);var Lo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let zo=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{u.w.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=It.N.state,{customWallets:i}=a.H.state;return[...t,...i??[],...e].slice(0,4).map(e=>o.qy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${(0,r.J)(c.$.getWalletImage(e))}
          @click=${()=>{u.w.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};zo=Lo([(0,p.EM)("w3m-get-wallet-view")],zo);i(96210);var jo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Zo=class extends o.WF{constructor(){super(...arguments),this.data=[]}render(){return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>o.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(e=>o.qy`<wui-visual size="sm" name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};jo([(0,n.MZ)({type:Array})],Zo.prototype,"data",void 0),Zo=jo([(0,p.EM)("w3m-help-widget")],Zo);var qo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Do=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Bo=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Do}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){z.E.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),Q.I.push("GetWallet")}};Bo=qo([(0,p.EM)("w3m-what-is-a-wallet-view")],Bo);const Ho=p.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
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
`;var Fo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Uo=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=Gt.o.state.isLegalCheckboxChecked,this.unsubscribe.push(Gt.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=a.H.state,i=a.H.state.features?.legalCheckbox,n=Boolean(e||t)&&Boolean(i),s=n&&!this.checked,l=s?-1:void 0;return o.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","3","3","3"]:"3"}
        gap="2"
        class=${(0,r.J)(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,r.J)(l)}></w3m-wallet-login-list>
      </wui-flex>
    `}};Uo.styles=Ho,Fo([(0,n.wk)()],Uo.prototype,"checked",void 0),Uo=Fo([(0,p.EM)("w3m-connect-wallets-view")],Uo);const _o=m.AH`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Vo=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Jo=class extends o.WF{render(){return o.qy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Jo.styles=[g.W5,_o],Jo=Vo([(0,f.E)("wui-loading-hexagon")],Jo);i(9060);const Ko=o.AH`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Go=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Yo=class extends o.WF{constructor(){super(),this.network=Q.I.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return o.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,r.J)(c.$.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:o.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=K.a.getConnectorId(s.W.state.activeChain);return K.a.getAuthConnector()&&e===J.o.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=K.a.getConnectorId(s.W.state.activeChain);return K.a.getAuthConnector()&&e===J.o.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,s.W.state.activeChain!==this.network?.chainNamespace&&s.W.setIsSwitchingNamespace(!0),this.network&&await s.W.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};Yo.styles=Ko,Go([(0,n.wk)()],Yo.prototype,"showRetry",void 0),Go([(0,n.wk)()],Yo.prototype,"error",void 0),Yo=Go([(0,p.EM)("w3m-network-switch-view")],Yo);var Xo=i(58751);i(12965);const Qo=m.AH`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var en=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let tn=class extends o.WF{constructor(){super(...arguments),this.imageSrc="ethereum",this.name="Ethereum",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};tn.styles=[g.W5,g.fD,Qo],en([(0,n.MZ)()],tn.prototype,"imageSrc",void 0),en([(0,n.MZ)()],tn.prototype,"name",void 0),en([(0,n.MZ)()],tn.prototype,"tabIdx",void 0),en([(0,n.MZ)({type:Boolean})],tn.prototype,"disabled",void 0),tn=en([(0,f.E)("wui-list-network")],tn);const on=o.AH`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var nn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let rn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.network=s.W.state.activeCaipNetwork,this.requestedCaipNetworks=s.W.getCaipNetworks(),this.search="",this.onDebouncedSearch=u.w.debounce(e=>{this.search=e},100),this.unsubscribe.push(l.j.subscribeNetworkImages(()=>this.requestUpdate()),s.W.subscribeKey("activeCaipNetwork",e=>this.network=e),s.W.subscribe(()=>{this.requestedCaipNetworks=s.W.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return o.qy`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){const e=s.W.getAllApprovedCaipNetworkIds(),t=u.w.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=t?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=t,this.filteredNetworks?.map(e=>o.qy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,r.J)(c.$.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}getNetworkDisabled(e){const t=e.chainNamespace,i=d.U.getCaipAddress(t),o=s.W.getAllApprovedCaipNetworkIds(),n=!1!==s.W.getNetworkProp("supportsAllNetworks",t),r=K.a.getConnectorId(t),a=K.a.getAuthConnector(),l=r===J.o.CONNECTOR_ID.AUTH&&a;return!(!i||n||l)&&!o?.includes(e.caipNetworkId)}onSwitchNetwork(e){Xo.L.onSwitchNetwork({network:e})}};rn.styles=on,nn([(0,n.wk)()],rn.prototype,"network",void 0),nn([(0,n.wk)()],rn.prototype,"requestedCaipNetworks",void 0),nn([(0,n.wk)()],rn.prototype,"filteredNetworks",void 0),nn([(0,n.wk)()],rn.prototype,"search",void 0),rn=nn([(0,p.EM)("w3m-networks-view")],rn);const an=p.AH`
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

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var sn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const ln={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let cn=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=Q.I.state.data?.switchToChain,this.caipNetwork=Q.I.state.data?.network,this.activeChain=s.W.state.activeChain}firstUpdated(){this.unsubscribe.push(s.W.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?J.o.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t=J.o.CHAIN_NAME_MAP[this.switchToChain];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${(0,r.J)(ln[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${t}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${t}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(s.W.setIsSwitchingNamespace(!0),K.a.setFilterByNamespace(this.switchToChain),this.caipNetwork?await s.W.switchActiveNetwork(this.caipNetwork):s.W.setActiveNamespace(this.switchToChain),Q.I.reset("Connect"))}};cn.styles=an,sn([(0,n.MZ)()],cn.prototype,"activeChain",void 0),cn=sn([(0,p.EM)("w3m-switch-active-chain-view")],cn);var dn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const un=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let hn=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${un}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{u.w.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};hn=dn([(0,p.EM)("w3m-what-is-a-network-view")],hn);const pn=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var gn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let wn=class extends o.WF{constructor(){super(),this.swapUnsupportedChain=Q.I.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=a.H.state.remoteFeatures,this.unsubscribe.push(l.j.subscribeNetworkImages(()=>this.requestUpdate()),a.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?o.qy`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:o.qy`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=s.W.getAllRequestedCaipNetworks(),t=s.W.getAllApprovedCaipNetworkIds(),i=u.w.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?i.filter(e=>G.oU.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):i).map(e=>o.qy`
        <wui-list-network
          imageSrc=${(0,r.J)(c.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;const e=s.W.state.activeChain,t=ee.x.getConnections(e).length>0,i=e&&K.a.state.activeConnectorIds[e],o=this.remoteFeatures?.multiWallet;await ee.x.disconnect(o?{id:i,namespace:e}:{}),t&&o&&(Q.I.push("ProfileWallets"),Y.P.showSuccess("Wallet deleted"))}catch{z.E.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),Y.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){const t=d.U.state.caipAddress,i=s.W.getAllApprovedCaipNetworkIds(),o=(s.W.getNetworkProp("supportsAllNetworks",e.chainNamespace),Q.I.state.data);t?i?.includes(e.caipNetworkId)?await s.W.switchActiveNetwork(e):Q.I.push("SwitchNetwork",{...o,network:e}):t||(s.W.setActiveCaipNetwork(e),Q.I.push("Connect"))}};wn.styles=pn,gn([(0,n.wk)()],wn.prototype,"disconnecting",void 0),gn([(0,n.wk)()],wn.prototype,"remoteFeatures",void 0),wn=gn([(0,p.EM)("w3m-unsupported-chain-view")],wn);const fn=m.AH`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var mn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let yn=class extends o.WF{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return o.qy`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};yn.styles=[g.W5,g.fD,fn],mn([(0,n.MZ)()],yn.prototype,"icon",void 0),mn([(0,n.MZ)()],yn.prototype,"text",void 0),mn([(0,n.MZ)()],yn.prototype,"type",void 0),yn=mn([(0,f.E)("wui-banner")],yn);const bn=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var vn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let xn=class extends o.WF{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.qy` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=s.W.getAllRequestedCaipNetworks(),t=s.W.getAllApprovedCaipNetworkIds(),i=s.W.state.activeCaipNetwork,n=s.W.checkIfSmartAccountEnabled();let a=u.w.sortRequestedNetworks(t,e);if(n&&(0,X.lj)(i?.chainNamespace)===re.Vl.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;a=[i]}return a.filter(e=>e.chainNamespace===i?.chainNamespace).map(e=>o.qy`
        <wui-list-network
          imageSrc=${(0,r.J)(c.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};xn.styles=bn,xn=vn([(0,p.EM)("w3m-wallet-compatible-networks-view")],xn);var Cn=i(1122);const kn=m.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var $n=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let En=class extends o.WF{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",o.qy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:o.qy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};En.styles=[g.W5,kn],$n([(0,n.MZ)()],En.prototype,"imageSrc",void 0),$n([(0,n.MZ)()],En.prototype,"alt",void 0),$n([(0,n.MZ)({type:Boolean})],En.prototype,"borderRadiusFull",void 0),En=$n([(0,f.E)("wui-visual-thumbnail")],En);const An=p.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Sn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let In=class extends o.WF{constructor(){super(...arguments),this.dappImageUrl=a.H.state.metadata?.icons,this.walletImageUrl=d.U.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return o.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};In.styles=An,In=Sn([(0,p.EM)("w3m-siwx-sign-message-thumbnails")],In);var Rn=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let Mn=class extends o.WF{constructor(){super(...arguments),this.dappName=a.H.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await Cn.U.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required"))return Y.P.showError({message:"Something went wrong. We need to verify your account again."}),void Q.I.replace("DataCapture");throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await Cn.U.cancelSignMessage().finally(()=>this.isCancelling=!1)}};Rn([(0,n.wk)()],Mn.prototype,"isCancelling",void 0),Rn([(0,n.wk)()],Mn.prototype,"isSigning",void 0),Mn=Rn([(0,p.EM)("w3m-siwx-sign-message-view")],Mn)},69049:e=>{"use strict";e.exports=function(e){for(var t=[],i=e.length,o=0;o<i;o++){var n=e.charCodeAt(o);if(n>=55296&&n<=56319&&i>o+1){var r=e.charCodeAt(o+1);r>=56320&&r<=57343&&(n=1024*(n-55296)+r-56320+65536,o+=1)}n<128?t.push(n):n<2048?(t.push(n>>6|192),t.push(63&n|128)):n<55296||n>=57344&&n<65536?(t.push(n>>12|224),t.push(n>>6&63|128),t.push(63&n|128)):n>=65536&&n<=1114111?(t.push(n>>18|240),t.push(n>>12&63|128),t.push(n>>6&63|128),t.push(63&n|128)):t.push(239,191,189)}return new Uint8Array(t).buffer}},70146:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(99598),a=i(78508),s=i(96396),l=i(69161);const c=o.AH`
  :host {
    width: 100%;
    display: block;
  }
`;var d=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=r.I.state.open,this.unsubscribe.push(a.I.subscribeKey("view",()=>{r.I.hide()}),s.W.subscribeKey("open",e=>{e||r.I.hide()}),r.I.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),r.I.hide()}render(){return o.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o.qy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),i={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const o=t.getBoundingClientRect();i.left=e.left-(window.innerWidth-o.width)/2,i.top=e.top-(window.innerHeight-o.height)/2}r.I.showTooltip({message:this.text,triggerRect:i,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||r.I.hide()}};u.styles=[c],d([(0,n.MZ)()],u.prototype,"text",void 0),d([(0,n.wk)()],u.prototype,"open",void 0),u=d([(0,l.EM)("w3m-tooltip-trigger")],u)},71801:(e,t,i)=>{"use strict";i.d(t,{Up:()=>p});var o=i(24376),n=i(63450),r=i(6056),a=i(36010),s=i(90184),l=i(78508),c=i(21871),d=i(26742),u=i(27508);async function h(e){l.I.push("ConnectingSocial");const t=a.a.getAuthConnector();let i=null;try{const a=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(d.w.isTelegram()||(i=function(){try{return d.w.returnOpenHref(`${o.o.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),i)n.U.setSocialWindow(i,r.W.state.activeChain);else if(!d.w.isTelegram())throw new Error("Could not create social popup");const{uri:s}=await t.provider.getSocialRedirectUri({provider:e});if(!s)throw i?.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=s),d.w.isTelegram()){u.i.setTelegramSocialProvider(e);const t=d.w.formatTelegramSocialLoginUrl(s);d.w.openHref(t,"_top")}clearTimeout(a)}}catch(e){i?.close(),c.P.showError(e?.message)}}async function p(e){n.U.setSocialProvider(e,r.W.state.activeChain),s.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await async function(){l.I.push("ConnectingFarcaster");const e=a.a.getAuthConnector();if(e&&!n.U.state.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();n.U.setFarcasterUrl(t,r.W.state.activeChain)}catch(e){l.I.goBack(),c.P.showError(e)}}():await h(e)}},74625:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(99598),a=i(69161);i(60310),i(51636),i(45090);const s=a.AH`
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
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.open=r.I.state.open,this.message=r.I.state.message,this.triggerRect=r.I.state.triggerRect,this.variant=r.I.state.variant,this.unsubscribe.push(r.I.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,o.qy`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};c.styles=[s],l([(0,n.wk)()],c.prototype,"open",void 0),l([(0,n.wk)()],c.prototype,"message",void 0),l([(0,n.wk)()],c.prototype,"triggerRect",void 0),l([(0,n.wk)()],c.prototype,"variant",void 0),c=l([(0,a.EM)("w3m-tooltip")],c)},74764:(e,t,i)=>{const o=i(64713);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=o.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const i=o.mod(t,this.genPoly),n=this.degree-i.length;if(n>0){const e=new Uint8Array(this.degree);return e.set(i,n),e}return i},e.exports=n},75694:(e,t,i)=>{"use strict";i.d(t,{M:()=>a});var o=i(36124);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n={attribute:!0,type:String,converter:o.W3,reflect:!1,hasChanged:o.Ec},r=(e=n,t,i)=>{const{kind:o,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const n=this[o];t.call(this,i),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)};function a(e){return(t,i)=>"object"==typeof i?r(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}},76320:e=>{"use strict";var t={single_source_shortest_paths:function(e,i,o){var n={},r={};r[i]=0;var a,s,l,c,d,u,h,p=t.PriorityQueue.make();for(p.push(i,0);!p.empty();)for(l in s=(a=p.pop()).value,c=a.cost,d=e[s]||{})d.hasOwnProperty(l)&&(u=c+d[l],h=r[l],(void 0===r[l]||h>u)&&(r[l]=u,p.push(l,u),n[l]=s));if(void 0!==o&&void 0===r[o]){var g=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(g)}return n},extract_shortest_path_from_predecessor_list:function(e,t){for(var i=[],o=t;o;)i.push(o),e[o],o=e[o];return i.reverse(),i},find_path:function(e,i,o){var n=t.single_source_shortest_paths(e,i,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(e){var i,o=t.PriorityQueue,n={};for(i in e=e||{},o)o.hasOwnProperty(i)&&(n[i]=o[i]);return n.queue=[],n.sorter=e.sorter||o.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var i={value:e,cost:t};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},77616:(e,t,i)=>{"use strict";i(38436)},78306:(e,t,i)=>{"use strict";var o=i(97199),n=i(26),r=i(90184),a=i(74496),s=i(6056),l=i(78508),c=i(69161),d=(i(60310),i(51636),i(26751),i(45090),i(10152));const u=o.AH``;var h=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let p=class extends o.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state;return e||t?o.qy`
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
    `:null}howDoesItWorkTemplate(){return o.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){r.E.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,a.lj)(s.W.state.activeChain)===d.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),l.I.push("WhatIsABuy")}};p.styles=[u],p=h([(0,c.EM)("w3m-onramp-providers-footer")],p)},81332:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const i=3,o=3,n=40,r=10;function a(e,i,o){switch(e){case t.Patterns.PATTERN000:return(i+o)%2==0;case t.Patterns.PATTERN001:return i%2==0;case t.Patterns.PATTERN010:return o%3==0;case t.Patterns.PATTERN011:return(i+o)%3==0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2==0;case t.Patterns.PATTERN101:return i*o%2+i*o%3==0;case t.Patterns.PATTERN110:return(i*o%2+i*o%3)%2==0;case t.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){const t=e.size;let o=0,n=0,r=0,a=null,s=null;for(let l=0;l<t;l++){n=r=0,a=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===a?n++:(n>=5&&(o+=i+(n-5)),a=t,n=1),t=e.get(c,l),t===s?r++:(r>=5&&(o+=i+(r-5)),s=t,r=1)}n>=5&&(o+=i+(n-5)),r>=5&&(o+=i+(r-5))}return o},t.getPenaltyN2=function(e){const t=e.size;let i=0;for(let o=0;o<t-1;o++)for(let n=0;n<t-1;n++){const t=e.get(o,n)+e.get(o,n+1)+e.get(o+1,n)+e.get(o+1,n+1);4!==t&&0!==t||i++}return i*o},t.getPenaltyN3=function(e){const t=e.size;let i=0,o=0,r=0;for(let n=0;n<t;n++){o=r=0;for(let a=0;a<t;a++)o=o<<1&2047|e.get(n,a),a>=10&&(1488===o||93===o)&&i++,r=r<<1&2047|e.get(a,n),a>=10&&(1488===r||93===r)&&i++}return i*n},t.getPenaltyN4=function(e){let t=0;const i=e.data.length;for(let o=0;o<i;o++)t+=e.data[o];return Math.abs(Math.ceil(100*t/i/5)-10)*r},t.applyMask=function(e,t){const i=t.size;for(let o=0;o<i;o++)for(let n=0;n<i;n++)t.isReserved(n,o)||t.xor(n,o,a(e,n,o))},t.getBestMask=function(e,i){const o=Object.keys(t.Patterns).length;let n=0,r=1/0;for(let a=0;a<o;a++){i(a),t.applyMask(a,e);const o=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),o<r&&(r=o,n=a)}return n}},81355:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=(i(96478),i(84206),i(26109)),a=i(43494);const s=i(67569).AH`
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
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e="md"===this.size?"md-medium":"sm-medium",t="md"===this.size?"md":"sm";return o.qy`
      ${this.icon?o.qy`<wui-icon size=${t} name=${this.icon}></wui-icon>`:null}
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};c.styles=[r.W5,s],l([(0,n.MZ)()],c.prototype,"variant",void 0),l([(0,n.MZ)()],c.prototype,"size",void 0),l([(0,n.MZ)()],c.prototype,"icon",void 0),c=l([(0,a.E)("wui-tag")],c)},82515:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=(i(96478),i(26109)),a=i(43494);const s=i(67569).AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  @media (hover: hover) {
    button:hover:enabled {
      border-radius: ${({borderRadius:e})=>e[32]};
    }
  }

  button[data-variant='accent'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 24px;
    height: 24px;
  }

  button[data-full-width] {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{constructor(){super(...arguments),this.icon="card",this.variant="accent",this.size="md",this.fullWidth=!1,this.disabled=!1}render(){return o.qy`<button
      data-variant=${this.variant}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color=${{accent:"accent-primary",secondary:"inverse"}[this.variant]} name=${this.icon}></wui-icon>
    </button>`}};c.styles=[r.W5,r.fD,s],l([(0,n.MZ)()],c.prototype,"icon",void 0),l([(0,n.MZ)()],c.prototype,"variant",void 0),l([(0,n.MZ)()],c.prototype,"size",void 0),l([(0,n.MZ)({type:Boolean})],c.prototype,"fullWidth",void 0),l([(0,n.MZ)({type:Boolean})],c.prototype,"disabled",void 0),c=l([(0,a.E)("wui-icon-button")],c)},84206:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(99605),a=i(67569),s=i(26109),l=i(43494);const c=a.AH`
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
`;var d=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const u={primary:a.f.tokens.theme.textPrimary,secondary:a.f.tokens.theme.textSecondary,tertiary:a.f.tokens.theme.textTertiary,invert:a.f.tokens.theme.textInvert,error:a.f.tokens.core.textError,warning:a.f.tokens.core.textWarning,"accent-primary":a.f.tokens.core.textAccentPrimary};let h=class extends o.WF{constructor(){super(...arguments),this.variant="md-regular",this.color="inherit",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: ${"inherit"===this.color?"inherit":u[this.color??"primary"]};\n      `,o.qy`<slot class=${(0,r.H)(e)}></slot>`}};h.styles=[s.W5,c],d([(0,n.MZ)()],h.prototype,"variant",void 0),d([(0,n.MZ)()],h.prototype,"color",void 0),d([(0,n.MZ)()],h.prototype,"align",void 0),d([(0,n.MZ)()],h.prototype,"lineClamp",void 0),h=d([(0,l.E)("wui-text")],h)},84565:(e,t,i)=>{const o=i(56886),n=o.getBCHDigit(1335);t.getEncodedBits=function(e,t){const i=e.bit<<3|t;let r=i<<10;for(;o.getBCHDigit(r)-n>=0;)r^=1335<<o.getBCHDigit(r)-n;return 21522^(i<<10|r)}},87583:(e,t,i)=>{const o=i(91333),n=i(90157),r=i(47899),a=i(56756);function s(e,t,i,r,a){const s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!o())throw new Error("Callback required as last argument");if(!c){if(l<1)throw new Error("Too few arguments provided");return 1===l?(i=t,t=r=void 0):2!==l||t.getContext||(r=i,i=t,t=void 0),new Promise(function(o,a){try{const a=n.create(i,r);o(e(a,t,r))}catch(e){a(e)}})}if(l<2)throw new Error("Too few arguments provided");2===l?(a=i,i=t,t=r=void 0):3===l&&(t.getContext&&void 0===a?(a=r,r=void 0):(a=r,r=i,i=t,t=void 0));try{const o=n.create(i,r);a(null,e(o,t,r))}catch(e){a(e)}}t.create=n.create,t.toCanvas=s.bind(null,r.render),t.toDataURL=s.bind(null,r.renderToDataURL),t.toString=s.bind(null,function(e,t,i){return a.render(e,i)})},89056:(e,t,i)=>{"use strict";i.d(t,{H:()=>u});var o=i(97199),n=i(25707),r=i(78508),a=i(90184),s=i(69161),l=(i(55743),i(78306),i(34558));const c=s.AH`
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
`;var d=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends o.WF{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=r.I.state.view}firstUpdated(){this.status=l.y.hasFooter()?"show":"hide",this.unsubscribe.push(r.I.subscribeKey("view",e=>{if(this.view=e,this.status=l.y.hasFooter()?"show":"hide","hide"===this.status){document.documentElement.style.setProperty("--apkt-footer-height","0px")}})),this.resizeObserver=new ResizeObserver(e=>{for(const t of e)if(t.target===this.getWrapper()){const e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}}),this.resizeObserver.observe(this.getWrapper())}render(){return o.qy`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return l.y.hasFooter()?o.qy` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return o.qy`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return o.qy`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return o.qy` <wui-flex
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
    </wui-flex>`}onNetworkHelp(){a.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),r.I.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};u.styles=[c],d([(0,n.wk)()],u.prototype,"status",void 0),d([(0,n.wk)()],u.prototype,"view",void 0),u=d([(0,s.EM)("w3m-footer")],u)},90157:(e,t,i)=>{const o=i(56886),n=i(49953),r=i(99899),a=i(8820),s=i(6421),l=i(7756),c=i(81332),d=i(97518),u=i(74764),h=i(31427),p=i(84565),g=i(30208),w=i(29801);function f(e,t,i){const o=e.size,n=p.getEncodedBits(t,i);let r,a;for(r=0;r<15;r++)a=1==(n>>r&1),r<6?e.set(r,8,a,!0):r<8?e.set(r+1,8,a,!0):e.set(o-15+r,8,a,!0),r<8?e.set(8,o-r-1,a,!0):r<9?e.set(8,15-r-1+1,a,!0):e.set(8,15-r-1,a,!0);e.set(o-8,8,1,!0)}function m(e,t,i){const n=new r;i.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),g.getCharCountIndicator(t.mode,e)),t.write(n)});const a=8*(o.getSymbolTotalCodewords(e)-d.getTotalCodewordsCount(e,t));for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);const s=(a-n.getLengthInBits())/8;for(let e=0;e<s;e++)n.put(e%2?17:236,8);return function(e,t,i){const n=o.getSymbolTotalCodewords(t),r=d.getTotalCodewordsCount(t,i),a=n-r,s=d.getBlocksCount(t,i),l=n%s,c=s-l,h=Math.floor(n/s),p=Math.floor(a/s),g=p+1,w=h-p,f=new u(w);let m=0;const y=new Array(s),b=new Array(s);let v=0;const x=new Uint8Array(e.buffer);for(let e=0;e<s;e++){const t=e<c?p:g;y[e]=x.slice(m,m+t),b[e]=f.encode(y[e]),m+=t,v=Math.max(v,t)}const C=new Uint8Array(n);let k,$,E=0;for(k=0;k<v;k++)for($=0;$<s;$++)k<y[$].length&&(C[E++]=y[$][k]);for(k=0;k<w;k++)for($=0;$<s;$++)C[E++]=b[$][k];return C}(n,e,t)}function y(e,t,i,n){let r;if(Array.isArray(e))r=w.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");{let o=t;if(!o){const t=w.rawSplit(e);o=h.getBestVersionForData(t,i)}r=w.fromString(e,o||40)}}const d=h.getBestVersionForData(r,i);if(!d)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<d)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+d+".\n")}else t=d;const u=m(t,i,r),p=o.getSymbolSize(t),g=new a(p);return function(e,t){const i=e.size,o=l.getPositions(t);for(let t=0;t<o.length;t++){const n=o[t][0],r=o[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1||i<=n+t))for(let o=-1;o<=7;o++)r+o<=-1||i<=r+o||(t>=0&&t<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===t||6===t)||t>=2&&t<=4&&o>=2&&o<=4?e.set(n+t,r+o,!0,!0):e.set(n+t,r+o,!1,!0))}}(g,t),function(e){const t=e.size;for(let i=8;i<t-8;i++){const t=i%2==0;e.set(i,6,t,!0),e.set(6,i,t,!0)}}(g),function(e,t){const i=s.getPositions(t);for(let t=0;t<i.length;t++){const o=i[t][0],n=i[t][1];for(let t=-2;t<=2;t++)for(let i=-2;i<=2;i++)-2===t||2===t||-2===i||2===i||0===t&&0===i?e.set(o+t,n+i,!0,!0):e.set(o+t,n+i,!1,!0)}}(g,t),f(g,i,0),t>=7&&function(e,t){const i=e.size,o=h.getEncodedBits(t);let n,r,a;for(let t=0;t<18;t++)n=Math.floor(t/3),r=t%3+i-8-3,a=1==(o>>t&1),e.set(n,r,a,!0),e.set(r,n,a,!0)}(g,t),function(e,t){const i=e.size;let o=-1,n=i-1,r=7,a=0;for(let s=i-1;s>0;s-=2)for(6===s&&s--;;){for(let i=0;i<2;i++)if(!e.isReserved(n,s-i)){let o=!1;a<t.length&&(o=1==(t[a]>>>r&1)),e.set(n,s-i,o),r--,-1===r&&(a++,r=7)}if(n+=o,n<0||i<=n){n-=o,o=-o;break}}}(g,u),isNaN(n)&&(n=c.getBestMask(g,f.bind(null,g,i))),c.applyMask(n,g),f(g,i,n),{modules:g,version:t,errorCorrectionLevel:i,maskPattern:n,segments:r}}t.create=function(e,t){if(void 0===e||""===e)throw new Error("No input text");let i,r,a=n.M;return void 0!==t&&(a=n.from(t.errorCorrectionLevel,n.M),i=h.from(t.version),r=c.from(t.maskPattern),t.toSJISFunc&&o.setToSJISFunction(t.toSJISFunc)),y(e,i,a,r)}},91035:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(26109),a=i(43494);const s=i(67569).AH`
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
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,i=116+t,n=245+t,r=360+1.75*t;return o.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${n}"
          stroke-dashoffset=${r}
        />
      </svg>
    `}};c.styles=[r.W5,s],l([(0,n.MZ)({type:Number})],c.prototype,"radius",void 0),c=l([(0,a.E)("wui-loading-thumbnail")],c)},91333:e=>{e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},91629:(e,t,i)=>{"use strict";i.d(t,{_:()=>p,K:()=>f});var o=i(36752);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:n}=o.ge;var r=i(7804);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),a(e,t);return!0},s=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},l=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),u(t)}};function c(e){void 0!==this._$AN?(s(this),this._$AM=e,l(this)):this._$AM=e}function d(e,t=!1,i=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(o))for(let e=i;e<o.length;e++)a(o[e],!1),s(o[e]);else null!=o&&(a(o,!1),s(o));else a(this,e)}const u=e=>{e.type==r.OA.CHILD&&(e._$AP??=d,e._$AQ??=c)};class h extends r.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),l(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(a(this,e),s(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const p=()=>new g;class g{}const w=new WeakMap,f=(0,r.u$)(class extends h{render(e){return o.s6}update(e,[t]){const i=t!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let i=w.get(t);void 0===i&&(i=new WeakMap,w.set(t,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?w.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},92286:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(43494);const a=i(67569).AH`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var s=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let l=class extends o.WF{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n    `,this.dataset.rounded=this.rounded?"true":"false",o.qy`<slot></slot>`}};l.styles=[a],s([(0,n.MZ)()],l.prototype,"width",void 0),s([(0,n.MZ)()],l.prototype,"height",void 0),s([(0,n.MZ)()],l.prototype,"variant",void 0),s([(0,n.MZ)({type:Boolean})],l.prototype,"rounded",void 0),l=s([(0,r.E)("wui-shimmer")],l)},92726:(e,t)=>{function i(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");const i=parseInt(t.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,o=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:o,scale:o?4:n,margin:t,color:{dark:i(e.color.dark||"#000000ff"),light:i(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,i){const o=t.getScale(e,i);return Math.floor((e+2*i.margin)*o)},t.qrToImageData=function(e,i,o){const n=i.modules.size,r=i.modules.data,a=t.getScale(n,o),s=Math.floor((n+2*o.margin)*a),l=o.margin*a,c=[o.color.light,o.color.dark];for(let t=0;t<s;t++)for(let i=0;i<s;i++){let d=4*(t*s+i),u=o.color.light;if(t>=l&&i>=l&&t<s-l&&i<s-l){u=c[r[Math.floor((t-l)/a)*n+Math.floor((i-l)/a)]?1:0]}e[d++]=u.r,e[d++]=u.g,e[d++]=u.b,e[d]=u.a}}},93373:(e,t,i)=>{"use strict";i(8163)},96210:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707);const r=o.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="#F7931A"/>
  <g clip-path="url(#clip0_1045_17)">
    <path d="M63.0394 39.7409C58.7654 56.8839 41.4024 67.3169 24.2574 63.0419C7.11937 58.7679 -3.31363 41.4039 0.962367 24.2619C5.23437 7.11686 22.5974 -3.31714 39.7374 0.956863C56.8814 5.23086 67.3134 22.5969 63.0394 39.7409Z" fill="#F7931A"/>
    <path d="M46.1092 27.4409C46.7462 23.1829 43.5042 20.8939 39.0712 19.3669L40.5092 13.5989L36.9982 12.7239L35.5982 18.3399C34.6752 18.1099 33.7272 17.8929 32.7852 17.6779L34.1952 12.0249L30.6862 11.1499L29.2472 16.9159C28.4832 16.7419 27.7332 16.5699 27.0052 16.3889L27.0092 16.3709L22.1672 15.1619L21.2332 18.9119C21.2332 18.9119 23.8382 19.5089 23.7832 19.5459C25.2052 19.9009 25.4622 20.8419 25.4192 21.5879L23.7812 28.1589C23.8792 28.1839 24.0062 28.2199 24.1462 28.2759C24.0292 28.2469 23.9042 28.2149 23.7752 28.1839L21.4792 37.3889C21.3052 37.8209 20.8642 38.4689 19.8702 38.2229C19.9052 38.2739 17.3182 37.5859 17.3182 37.5859L15.5752 41.6049L20.1442 42.7439C20.9942 42.9569 21.8272 43.1799 22.6472 43.3899L21.1942 49.2239L24.7012 50.0989L26.1402 44.3269C27.0982 44.5869 28.0282 44.8269 28.9382 45.0529L27.5042 50.7979L31.0152 51.6729L32.4682 45.8499C38.4552 46.9829 42.9572 46.5259 44.8522 41.1109C46.3792 36.7509 44.7762 34.2359 41.6262 32.5959C43.9202 32.0669 45.6482 30.5579 46.1092 27.4409ZM38.0872 38.6899C37.0022 43.0499 29.6612 40.6929 27.2812 40.1019L29.2092 32.3729C31.5892 32.9669 39.2212 34.1429 38.0872 38.6899ZM39.1732 27.3779C38.1832 31.3439 32.0732 29.3289 30.0912 28.8349L31.8392 21.8249C33.8212 22.3189 40.2042 23.2409 39.1732 27.3779Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1045_17">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,a=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,s=o.JW`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,l=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,c=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,d=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,u=o.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,h=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,p=o.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,g=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,w=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,f=o.JW`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,m=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,y=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,b=o.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,v=o.JW`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,x=o.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,C=o.JW`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,k=o.JW`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `,$=o.JW`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var E=i(26109),A=i(43494);const S=o.AH`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var I=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const R={browser:a,dao:s,defi:l,defiAlt:c,eth:d,layers:h,lock:g,login:w,network:m,nft:y,noun:b,profile:C,system:$,meld:f,onrampCard:v,google:u,pencil:x,lightbulb:p,solana:k,bitcoin:r};let M=class extends o.WF{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`\n       --local-size: var(--apkt-visual-size-${this.size});\n   `,o.qy`${R[this.name]}`}};M.styles=[E.W5,S],I([(0,n.MZ)()],M.prototype,"name",void 0),I([(0,n.MZ)()],M.prototype,"size",void 0),M=I([(0,A.E)("wui-visual")],M)},96478:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=i(36752);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=Symbol.for(""),s=e=>{if(e?.r===a)return e?._$litStatic$},l=new Map,c=e=>(t,...i)=>{const o=i.length;let n,r;const a=[],c=[];let d,u=0,h=!1;for(;u<o;){for(d=t[u];u<o&&void 0!==(r=i[u],n=s(r));)d+=n+t[++u],h=!0;u!==o&&c.push(r),a.push(d),u++}if(u===o&&a.push(t[o]),h){const e=a.join("$$lit$$");void 0===(t=l.get(e))&&(a.raw=a,l.set(e,t=a)),i=c}return e(t,...i)},d=c(r.qy),u=(c(r.JW),c(r.ej),o.JW`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
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
</svg>`),h=o.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,p=o.JW`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`,g=o.JW`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
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
</svg>`,w=o.JW` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,f=o.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,m=o.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`,y=o.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,b=o.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,v=o.JW`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
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
</svg>`,x=o.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,C=o.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,k=o.JW` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`,$=o.JW`<svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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

`,E=o.JW`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`,A=o.JW`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
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
</svg>`,S=o.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,I=o.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,R=o.JW`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`,M=o.JW`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`,W=o.JW`
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
`,T=o.JW`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,P=o.JW`<svg fill="none" viewBox="0 0 41 40">
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
</svg>`;var O=i(67569),N=i(26109),L=i(43494);const z=o.AH`
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
`;var j=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};const Z={add:"ph-plus",allWallets:"ph-dots-three",arrowBottom:"ph-arrow-down",arrowBottomCircle:"ph-arrow-circle-down",arrowClockWise:"ph-arrow-clockwise",arrowLeft:"ph-arrow-left",arrowRight:"ph-arrow-right",arrowTop:"ph-arrow-up",arrowTopRight:"ph-arrow-up-right",bank:"ph-bank",bin:"ph-trash",browser:"ph-browser",card:"ph-credit-card",checkmark:"ph-check",checkmarkBold:"ph-check",chevronBottom:"ph-caret-down",chevronLeft:"ph-caret-left",chevronRight:"ph-caret-right",chevronTop:"ph-caret-up",clock:"ph-clock",close:"ph-x",coinPlaceholder:"ph-circle-half",compass:"ph-compass",copy:"ph-copy",desktop:"ph-desktop",dollar:"ph-currency-dollar",download:"ph-vault",exclamationCircle:"ph-warning-circle",extension:"ph-puzzle-piece",externalLink:"ph-arrow-square-out",filters:"ph-funnel-simple",helpCircle:"ph-question",id:"ph-identification-card",image:"ph-image",info:"ph-info",lightbulb:"ph-lightbulb",mail:"ph-envelope",mobile:"ph-device-mobile",more:"ph-dots-three",networkPlaceholder:"ph-globe",nftPlaceholder:"ph-image",plus:"ph-plus",power:"ph-power",qrCode:"ph-qr-code",questionMark:"ph-question",refresh:"ph-arrow-clockwise",recycleHorizontal:"ph-arrows-clockwise",search:"ph-magnifying-glass",sealCheck:"ph-seal-check",send:"ph-paper-plane-right",signOut:"ph-sign-out",spinner:"ph-spinner",swapHorizontal:"ph-arrows-left-right",swapVertical:"ph-arrows-down-up",threeDots:"ph-dots-three",user:"ph-user",verify:"ph-seal-check",verifyFilled:"ph-seal-check",wallet:"ph-wallet",warning:"ph-warning",warningCircle:"ph-warning-circle",appStore:"",apple:"",bitcoin:"",chromeStore:"",cursor:"",discord:"",ethereum:"",etherscan:"",facebook:"",farcaster:"",github:"",google:"",playStore:"",reown:"",solana:"",telegram:"",twitch:"",twitterIcon:"",twitter:"",walletConnect:"",walletConnectBrown:"",walletConnectLightBrown:"",x:""},q={"ph-arrow-circle-down":()=>i.e(485).then(i.bind(i,30485)),"ph-arrow-clockwise":()=>i.e(7753).then(i.bind(i,27753)),"ph-arrow-down":()=>i.e(9657).then(i.bind(i,69657)),"ph-arrow-left":()=>i.e(4438).then(i.bind(i,64438)),"ph-arrow-right":()=>i.e(4217).then(i.bind(i,44217)),"ph-arrow-square-out":()=>i.e(9296).then(i.bind(i,59296)),"ph-arrows-down-up":()=>i.e(6283).then(i.bind(i,6283)),"ph-arrows-left-right":()=>i.e(6903).then(i.bind(i,46903)),"ph-arrow-up":()=>i.e(3462).then(i.bind(i,73462)),"ph-arrow-up-right":()=>i.e(8920).then(i.bind(i,38920)),"ph-arrows-clockwise":()=>i.e(8058).then(i.bind(i,88058)),"ph-bank":()=>i.e(336).then(i.bind(i,70336)),"ph-browser":()=>i.e(858).then(i.bind(i,20858)),"ph-caret-down":()=>i.e(3851).then(i.bind(i,83851)),"ph-caret-left":()=>i.e(312).then(i.bind(i,60312)),"ph-caret-right":()=>i.e(3203).then(i.bind(i,73203)),"ph-caret-up":()=>i.e(6412).then(i.bind(i,36412)),"ph-check":()=>i.e(6570).then(i.bind(i,86570)),"ph-circle-half":()=>i.e(9229).then(i.bind(i,79229)),"ph-clock":()=>i.e(1992).then(i.bind(i,71992)),"ph-compass":()=>i.e(5882).then(i.bind(i,25882)),"ph-copy":()=>i.e(1349).then(i.bind(i,61349)),"ph-credit-card":()=>i.e(2143).then(i.bind(i,62143)),"ph-currency-dollar":()=>i.e(8589).then(i.bind(i,28589)),"ph-desktop":()=>i.e(6738).then(i.bind(i,66738)),"ph-device-mobile":()=>i.e(6262).then(i.bind(i,56262)),"ph-dots-three":()=>i.e(3638).then(i.bind(i,3638)),"ph-vault":()=>i.e(6598).then(i.bind(i,66598)),"ph-envelope":()=>i.e(2798).then(i.bind(i,12798)),"ph-funnel-simple":()=>i.e(7040).then(i.bind(i,37040)),"ph-globe":()=>i.e(5845).then(i.bind(i,95845)),"ph-identification-card":()=>i.e(6238).then(i.bind(i,86238)),"ph-image":()=>i.e(7805).then(i.bind(i,67805)),"ph-info":()=>i.e(6526).then(i.bind(i,66526)),"ph-lightbulb":()=>i.e(9571).then(i.bind(i,59571)),"ph-magnifying-glass":()=>i.e(5803).then(i.bind(i,55803)),"ph-paper-plane-right":()=>i.e(5264).then(i.bind(i,5264)),"ph-plus":()=>i.e(1634).then(i.bind(i,1634)),"ph-power":()=>i.e(3617).then(i.bind(i,53617)),"ph-puzzle-piece":()=>i.e(2272).then(i.bind(i,92272)),"ph-qr-code":()=>i.e(9780).then(i.bind(i,89780)),"ph-question":()=>i.e(654).then(i.bind(i,90654)),"ph-question-circle":()=>i.e(9237).then(i.bind(i,79237)),"ph-seal-check":()=>i.e(4771).then(i.bind(i,34771)),"ph-sign-out":()=>i.e(4899).then(i.bind(i,84899)),"ph-spinner":()=>i.e(3317).then(i.bind(i,53317)),"ph-trash":()=>i.e(1884).then(i.bind(i,21884)),"ph-user":()=>i.e(5195).then(i.bind(i,25195)),"ph-wallet":()=>i.e(2125).then(i.bind(i,92125)),"ph-warning":()=>i.e(3758).then(i.bind(i,23758)),"ph-warning-circle":()=>i.e(4042).then(i.bind(i,84042)),"ph-x":()=>i.e(626).then(i.bind(i,10626))},D={appStore:u,apple:h,bitcoin:p,chromeStore:g,cursor:w,discord:f,ethereum:m,etherscan:y,facebook:b,farcaster:v,github:x,google:C,playStore:k,reown:$,solana:E,telegram:A,twitch:S,twitter:P,twitterIcon:I,walletConnect:R,walletConnectInvert:M,walletConnectBrown:T,walletConnectLightBrown:W,x:P},B={"accent-primary":O.f.tokens.core.iconAccentPrimary,"accent-certified":O.f.tokens.core.iconAccentCertified,default:O.f.tokens.theme.iconDefault,success:O.f.tokens.core.iconSuccess,error:O.f.tokens.core.iconError,warning:O.f.tokens.core.iconWarning,inverse:O.f.tokens.theme.iconInverse};let H=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.weight="bold",this.color="inherit"}render(){this.style.cssText=`\n      --local-width: ${"inherit"===this.size?"inherit":`var(--apkt-spacing-${{xxs:"2",xs:"3",sm:"3",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7",inherit:"inherit"}[this.size]})`};\n      --local-color: ${"inherit"===this.color?"inherit":B[this.color]}\n    `;const e=Z[this.name];if(e&&""!==e){const t=q[e];t&&t();const i={_$litStatic$:e,r:a};return d`<${i} size=${{xxs:"0.5em",xs:"0.75em",sm:"0.75em",md:"1em",mdl:"1.25em",lg:"1.25em",xl:"1.5em",xxl:"1.75em"}[this.size]} weight="${this.weight}"></${i}>`}return D[this.name]||d``}};H.styles=[N.W5,z],j([(0,n.MZ)()],H.prototype,"size",void 0),j([(0,n.MZ)()],H.prototype,"name",void 0),j([(0,n.MZ)()],H.prototype,"weight",void 0),j([(0,n.MZ)()],H.prototype,"color",void 0),H=j([(0,L.E)("wui-icon")],H)},96796:(e,t,i)=>{"use strict";var o=i(97199),n=i(25707),r=(i(84206),i(26109)),a=i(43494);const s=i(67569).AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }
`;var l=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let c=class extends o.WF{constructor(){super(...arguments),this.text=""}render(){return o.qy`${this.template()}`}template(){return this.text?o.qy`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};c.styles=[r.W5,s],l([(0,n.MZ)()],c.prototype,"text",void 0),c=l([(0,a.E)("wui-separator")],c)},97518:(e,t,i)=>{const o=i(49953),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],r=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case o.L:return n[4*(e-1)+0];case o.M:return n[4*(e-1)+1];case o.Q:return n[4*(e-1)+2];case o.H:return n[4*(e-1)+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case o.L:return r[4*(e-1)+0];case o.M:return r[4*(e-1)+1];case o.Q:return r[4*(e-1)+2];case o.H:return r[4*(e-1)+3];default:return}}},99598:(e,t,i)=>{"use strict";i.d(t,{I:()=>l});var o=i(52095),n=i(4707),r=i(23082);const a=(0,o.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),s={state:a,subscribe:e=>(0,o.B1)(a,()=>e(a)),subscribeKey:(e,t)=>(0,n.u$)(a,e,t),showTooltip({message:e,triggerRect:t,variant:i}){a.open=!0,a.message=e,a.triggerRect=t,a.variant=i},hide(){a.open=!1,a.message="",a.triggerRect={width:0,height:0,top:0,left:0}}},l=(0,r.X)(s)},99605:(e,t,i)=>{"use strict";i.d(t,{H:()=>r});var o=i(36752),n=i(7804);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=(0,n.u$)(class extends n.WL{constructor(e){if(super(e),e.type!==n.OA.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return o.c0}})},99899:e=>{function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){const t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let i=0;i<t;i++)this.putBit(1==(e>>>t-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t}}]);