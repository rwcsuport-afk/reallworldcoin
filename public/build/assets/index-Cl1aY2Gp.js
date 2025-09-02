import{c as p,r as f,e as h,i as b,N as d,x as m}from"./app-DIoACSbB.js";import{n as i,c as w}from"./index-dvHJPhjQ.js";import"./index-C3z0_pdE.js";const g=p`
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
`;var n=function(e,r,a,u){var l=arguments.length,o=l<3?r:u===null?u=Object.getOwnPropertyDescriptor(r,a):u,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,r,a,u);else for(var s=e.length-1;s>=0;s--)(c=e[s])&&(o=(l<3?c(o):l>3?c(r,a,o):c(r,a))||o);return l>3&&o&&Object.defineProperty(r,a,o),o};let t=class extends b{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return m`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="space-between" gap="1">
            <wui-text variant="md-regular" color="primary">${this.tokenName}</wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${d.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
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
            ${d.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?m`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:m`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};t.styles=[f,h,g];n([i()],t.prototype,"tokenName",void 0);n([i()],t.prototype,"tokenImageUrl",void 0);n([i({type:Number})],t.prototype,"tokenValue",void 0);n([i()],t.prototype,"tokenAmount",void 0);n([i()],t.prototype,"tokenCurrency",void 0);n([i({type:Boolean})],t.prototype,"clickable",void 0);t=n([w("wui-list-token")],t);
