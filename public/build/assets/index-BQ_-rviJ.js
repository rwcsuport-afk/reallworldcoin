import{c as h,r as l,i as u,x as f}from"./app-DIoACSbB.js";import{n as p,c as m}from"./index-dvHJPhjQ.js";const g=h`
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
    stroke: ${r=>r.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var c=function(r,e,a,s){var n=arguments.length,t=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,a):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,a,s);else for(var d=r.length-1;d>=0;d--)(o=r[d])&&(t=(n<3?o(t):n>3?o(e,a,t):o(e,a))||t);return n>3&&t&&Object.defineProperty(e,a,t),t};let i=class extends u{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,s=36-e,n=116+s,t=245+s,o=360+s*1.75;return f`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${n} ${t}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};i.styles=[l,g];c([p({type:Number})],i.prototype,"radius",void 0);i=c([m("wui-loading-thumbnail")],i);
