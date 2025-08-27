/*! For license information please see 2503.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[2503],{1608:(t,e,i)=>{"use strict";var r=i(97199),n=i(25707),o=i(35198),a=i(26109),l=i(43494);const s=i(67569).AH`
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
`;var h=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends r.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const t={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`\n      --local-width: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};\n      --local-height: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};\n      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?r.qy`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?r.qy`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:r.qy`<img src=${(0,o.J)(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};c.styles=[a.W5,s],h([(0,n.MZ)()],c.prototype,"src",void 0),h([(0,n.MZ)()],c.prototype,"logo",void 0),h([(0,n.MZ)()],c.prototype,"icon",void 0),h([(0,n.MZ)()],c.prototype,"iconColor",void 0),h([(0,n.MZ)()],c.prototype,"alt",void 0),h([(0,n.MZ)()],c.prototype,"size",void 0),h([(0,n.MZ)({type:Boolean})],c.prototype,"boxed",void 0),h([(0,n.MZ)({type:Boolean})],c.prototype,"rounded",void 0),h([(0,n.MZ)({type:Boolean})],c.prototype,"fullSize",void 0),c=h([(0,l.E)("wui-image")],c)},2731:(t,e)=>{const i=new Uint8Array(512),r=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)i[e]=t,r[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)i[t]=i[t-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return r[t]},e.exp=function(t){return i[t]},e.mul=function(t,e){return 0===t||0===e?0:i[r[t]+r[e]]}},6421:(t,e,i)=>{const r=i(56886).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,i=r(t),n=145===i?26:2*Math.ceil((i-13)/(2*e-2)),o=[i-7];for(let t=1;t<e-1;t++)o[t]=o[t-1]-n;return o.push(6),o.reverse()},e.getPositions=function(t){const i=[],r=e.getRowColCoords(t),n=r.length;for(let t=0;t<n;t++)for(let e=0;e<n;e++)0===t&&0===e||0===t&&e===n-1||t===n-1&&0===e||i.push([r[t],r[e]]);return i}},7756:(t,e,i)=>{const r=i(56886).getSymbolSize;e.getPositions=function(t){const e=r(t);return[[0,0],[e-7,0],[0,e-7]]}},7804:(t,e,i)=>{"use strict";i.d(e,{OA:()=>r,WL:()=>o,u$:()=>n});const r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8820:t=>{function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,i,r){const n=t*this.size+e;this.data[n]=i,r&&(this.reservedBit[n]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},11433:(t,e,i)=>{const r=i(30208),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(t){this.mode=r.ALPHANUMERIC,this.data=t}o.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let i=45*n.indexOf(this.data[e]);i+=n.indexOf(this.data[e+1]),t.put(i,11)}this.data.length%2&&t.put(n.indexOf(this.data[e]),6)},t.exports=o},21878:(t,e)=>{e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},24357:(t,e,i)=>{const r=i(30208);function n(t){this.mode=r.NUMERIC,this.data=t.toString()}n.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let e,i,r;for(e=0;e+3<=this.data.length;e+=3)i=this.data.substr(e,3),r=parseInt(i,10),t.put(r,10);const n=this.data.length-e;n>0&&(i=this.data.substr(e),r=parseInt(i,10),t.put(r,3*n+1))},t.exports=n},24861:(t,e,i)=>{const r=i(30208),n=i(56886);function o(t){this.mode=r.KANJI,this.data=t}o.getBitsLength=function(t){return 13*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=n.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else{if(!(i>=57408&&i<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");i-=49472}i=192*(i>>>8&255)+(255&i),t.put(i,13)}},t.exports=o},25707:(t,e,i)=>{"use strict";i.d(e,{MZ:()=>r.M,wk:()=>n.w});var r=i(75694),n=i(44290)},25822:(t,e,i)=>{const r=i(69049),n=i(30208);function o(t){this.mode=n.BYTE,"string"==typeof t&&(t=r(t)),this.data=new Uint8Array(t)}o.getBitsLength=function(t){return 8*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)},t.exports=o},29801:(t,e,i)=>{const r=i(30208),n=i(24357),o=i(11433),a=i(25822),l=i(24861),s=i(67044),h=i(56886),c=i(76320);function f(t){return unescape(encodeURIComponent(t)).length}function g(t,e,i){const r=[];let n;for(;null!==(n=t.exec(i));)r.push({data:n[0],index:n.index,mode:e,length:n[0].length});return r}function p(t){const e=g(s.NUMERIC,r.NUMERIC,t),i=g(s.ALPHANUMERIC,r.ALPHANUMERIC,t);let n,o;h.isKanjiModeEnabled()?(n=g(s.BYTE,r.BYTE,t),o=g(s.KANJI,r.KANJI,t)):(n=g(s.BYTE_KANJI,r.BYTE,t),o=[]);return e.concat(i,n,o).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function u(t,e){switch(e){case r.NUMERIC:return n.getBitsLength(t);case r.ALPHANUMERIC:return o.getBitsLength(t);case r.KANJI:return l.getBitsLength(t);case r.BYTE:return a.getBitsLength(t)}}function d(t,e){let i;const s=r.getBestModeForData(t);if(i=r.from(e,s),i!==r.BYTE&&i.bit<s.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(i)+".\n Suggested mode is: "+r.toString(s));switch(i!==r.KANJI||h.isKanjiModeEnabled()||(i=r.BYTE),i){case r.NUMERIC:return new n(t);case r.ALPHANUMERIC:return new o(t);case r.KANJI:return new l(t);case r.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(d(e,null)):e.data&&t.push(d(e.data,e.mode)),t},[])},e.fromString=function(t,i){const n=function(t){const e=[];for(let i=0;i<t.length;i++){const n=t[i];switch(n.mode){case r.NUMERIC:e.push([n,{data:n.data,mode:r.ALPHANUMERIC,length:n.length},{data:n.data,mode:r.BYTE,length:n.length}]);break;case r.ALPHANUMERIC:e.push([n,{data:n.data,mode:r.BYTE,length:n.length}]);break;case r.KANJI:e.push([n,{data:n.data,mode:r.BYTE,length:f(n.data)}]);break;case r.BYTE:e.push([{data:n.data,mode:r.BYTE,length:f(n.data)}])}}return e}(p(t,h.isKanjiModeEnabled())),o=function(t,e){const i={},n={start:{}};let o=["start"];for(let a=0;a<t.length;a++){const l=t[a],s=[];for(let t=0;t<l.length;t++){const h=l[t],c=""+a+t;s.push(c),i[c]={node:h,lastCount:0},n[c]={};for(let t=0;t<o.length;t++){const a=o[t];i[a]&&i[a].node.mode===h.mode?(n[a][c]=u(i[a].lastCount+h.length,h.mode)-u(i[a].lastCount,h.mode),i[a].lastCount+=h.length):(i[a]&&(i[a].lastCount=h.length),n[a][c]=u(h.length,h.mode)+4+r.getCharCountIndicator(h.mode,e))}}o=s}for(let t=0;t<o.length;t++)n[o[t]].end=0;return{map:n,table:i}}(n,i),a=c.find_path(o.map,"start","end"),l=[];for(let t=1;t<a.length-1;t++)l.push(o.table[a[t]].node);return e.fromArray(function(t){return t.reduce(function(t,e){const i=t.length-1>=0?t[t.length-1]:null;return i&&i.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}(l))},e.rawSplit=function(t){return e.fromArray(p(t,h.isKanjiModeEnabled()))}},30208:(t,e,i)=>{const r=i(21878),n=i(67044);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,i){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(t){return i}}},31427:(t,e,i)=>{const r=i(56886),n=i(97518),o=i(49953),a=i(30208),l=i(21878),s=r.getBCHDigit(7973);function h(t,e){return a.getCharCountIndicator(t,e)+4}function c(t,e){let i=0;return t.forEach(function(t){const r=h(t.mode,e);i+=r+t.getBitsLength()}),i}e.from=function(t,e){return l.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,i){if(!l.isValid(t))throw new Error("Invalid QR Code version");void 0===i&&(i=a.BYTE);const o=8*(r.getSymbolTotalCodewords(t)-n.getTotalCodewordsCount(t,e));if(i===a.MIXED)return o;const s=o-h(i,t);switch(i){case a.NUMERIC:return Math.floor(s/10*3);case a.ALPHANUMERIC:return Math.floor(s/11*2);case a.KANJI:return Math.floor(s/13);case a.BYTE:default:return Math.floor(s/8)}},e.getBestVersionForData=function(t,i){let r;const n=o.from(i,o.M);if(Array.isArray(t)){if(t.length>1)return function(t,i){for(let r=1;r<=40;r++)if(c(t,r)<=e.getCapacity(r,i,a.MIXED))return r}(t,n);if(0===t.length)return 1;r=t[0]}else r=t;return function(t,i,r){for(let n=1;n<=40;n++)if(i<=e.getCapacity(n,r,t))return n}(r.mode,r.getLength(),n)},e.getEncodedBits=function(t){if(!l.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;r.getBCHDigit(e)-s>=0;)e^=7973<<r.getBCHDigit(e)-s;return t<<12|e}},35198:(t,e,i)=>{"use strict";i.d(e,{J:()=>n});var r=i(36752);const n=t=>t??r.s6},44290:(t,e,i)=>{"use strict";i.d(e,{w:()=>n});var r=i(75694);function n(t){return(0,r.M)({...t,state:!0,attribute:!1})}},44360:(t,e,i)=>{"use strict";var r=i(97199),n=i(25707),o=(i(96478),i(1608),i(48832),i(87583));function a(t,e,i){if(t===e)return!1;return(t-e<0?e-t:t-e)<=i+.1}const l={generate({uri:t,size:e,logoSize:i,padding:n=8,dotColor:l="var(--apkt-tokens-theme-textInvert)"}){const s=10,h=[],c=function(t,e){const i=Array.prototype.slice.call(o.create(t,{errorCorrectionLevel:e}).modules.data,0),r=Math.sqrt(i.length);return i.reduce((t,e,i)=>(i%r===0?t.push([e]):t[t.length-1].push(e))&&t,[])}(t,"Q"),f=(e-2*n)/c.length,g=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];g.forEach(({x:t,y:e})=>{const i=(c.length-7)*f*t+n,o=(c.length-7)*f*e+n,a=.45;for(let t=0;t<g.length;t+=1){const e=f*(7-2*t);h.push(r.JW`
            <rect
              fill=${2===t?"var(--apkt-tokens-theme-textInvert)":"var(--apkt-tokens-theme-textPrimary)"}
              width=${0===t?e-s:e}
              rx= ${0===t?(e-s)*a:e*a}
              ry= ${0===t?(e-s)*a:e*a}
              stroke=${l}
              stroke-width=${0===t?s:0}
              height=${0===t?e-s:e}
              x= ${0===t?o+f*t+5:o+f*t}
              y= ${0===t?i+f*t+5:i+f*t}
            />
          `)}});const p=Math.floor((i+25)/f),u=c.length/2-p/2,d=c.length/2+p/2-1,m=[];c.forEach((t,e)=>{t.forEach((t,i)=>{if(c[e][i]&&!(e<7&&i<7||e>c.length-8&&i<7||e<7&&i>c.length-8||e>u&&e<d&&i>u&&i<d)){const t=e*f+f/2+n,r=i*f+f/2+n;m.push([t,r])}})});const w={};return m.forEach(([t,e])=>{w[t]?w[t]?.push(e):w[t]=[e]}),Object.entries(w).map(([t,e])=>{const i=e.filter(t=>e.every(e=>!a(t,e,f)));return[Number(t),i]}).forEach(([t,e])=>{e.forEach(e=>{h.push(r.JW`<circle cx=${t} cy=${e} fill=${l} r=${f/2.5} />`)})}),Object.entries(w).filter(([t,e])=>e.length>1).map(([t,e])=>{const i=e.filter(t=>e.some(e=>a(t,e,f)));return[Number(t),i]}).map(([t,e])=>{e.sort((t,e)=>t<e?-1:1);const i=[];for(const t of e){const e=i.find(e=>e.some(e=>a(t,e,f)));e?e.push(t):i.push([t])}return[t,i.map(t=>[t[0],t[t.length-1]])]}).forEach(([t,e])=>{e.forEach(([e,i])=>{h.push(r.JW`
              <line
                x1=${t}
                x2=${t}
                y1=${e}
                y2=${i}
                stroke=${l}
                stroke-width=${f/1.25}
                stroke-linecap="round"
              />
            `)})}),h}};var s=i(26109),h=i(43494);const c=i(67569).AH`
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
`;var f=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let g=class extends r.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,r.qy`<wui-flex
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
        ${l.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?r.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?r.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:r.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};g.styles=[s.W5,c],f([(0,n.MZ)()],g.prototype,"uri",void 0),f([(0,n.MZ)({type:Number})],g.prototype,"size",void 0),f([(0,n.MZ)()],g.prototype,"theme",void 0),f([(0,n.MZ)()],g.prototype,"imageSrc",void 0),f([(0,n.MZ)()],g.prototype,"alt",void 0),f([(0,n.MZ)({type:Boolean})],g.prototype,"arenaClear",void 0),f([(0,n.MZ)({type:Boolean})],g.prototype,"farcaster",void 0),g=f([(0,h.E)("wui-qr-code")],g)},45090:(t,e,i)=>{"use strict";i(84206)},47899:(t,e,i)=>{const r=i(92726);e.render=function(t,e,i){let n=i,o=e;void 0!==n||e&&e.getContext||(n=e,e=void 0),e||(o=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),n=r.getOptions(n);const a=r.getImageWidth(t.modules.size,n),l=o.getContext("2d"),s=l.createImageData(a,a);return r.qrToImageData(s.data,t,n),function(t,e,i){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=i,e.width=i,e.style.height=i+"px",e.style.width=i+"px"}(l,o,a),l.putImageData(s,0,0),o},e.renderToDataURL=function(t,i,r){let n=r;void 0!==n||i&&i.getContext||(n=i,i=void 0),n||(n={});const o=e.render(t,i,n),a=n.type||"image/png",l=n.rendererOpts||{};return o.toDataURL(a,l.quality)}},48832:(t,e,i)=>{"use strict";var r=i(97199),n=i(25707),o=i(26109),a=i(63612),l=i(43494);const s=r.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;var h=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let c=class extends r.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&a.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&a.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&a.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&a.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&a.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&a.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&a.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&a.Z.getSpacingStyles(this.margin,3)};\n      width: ${this.width};\n    `,r.qy`<slot></slot>`}};c.styles=[o.W5,s],h([(0,n.MZ)()],c.prototype,"flexDirection",void 0),h([(0,n.MZ)()],c.prototype,"flexWrap",void 0),h([(0,n.MZ)()],c.prototype,"flexBasis",void 0),h([(0,n.MZ)()],c.prototype,"flexGrow",void 0),h([(0,n.MZ)()],c.prototype,"flexShrink",void 0),h([(0,n.MZ)()],c.prototype,"alignItems",void 0),h([(0,n.MZ)()],c.prototype,"justifyContent",void 0),h([(0,n.MZ)()],c.prototype,"columnGap",void 0),h([(0,n.MZ)()],c.prototype,"rowGap",void 0),h([(0,n.MZ)()],c.prototype,"gap",void 0),h([(0,n.MZ)()],c.prototype,"padding",void 0),h([(0,n.MZ)()],c.prototype,"margin",void 0),h([(0,n.MZ)()],c.prototype,"width",void 0),c=h([(0,l.E)("wui-flex")],c)},49953:(t,e)=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,i){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return i}}},56756:(t,e,i)=>{const r=i(92726);function n(t,e){const i=t.a/255,r=e+'="'+t.hex+'"';return i<1?r+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function o(t,e,i){let r=t+e;return void 0!==i&&(r+=" "+i),r}e.render=function(t,e,i){const a=r.getOptions(e),l=t.modules.size,s=t.modules.data,h=l+2*a.margin,c=a.color.light.a?"<path "+n(a.color.light,"fill")+' d="M0 0h'+h+"v"+h+'H0z"/>':"",f="<path "+n(a.color.dark,"stroke")+' d="'+function(t,e,i){let r="",n=0,a=!1,l=0;for(let s=0;s<t.length;s++){const h=Math.floor(s%e),c=Math.floor(s/e);h||a||(a=!0),t[s]?(l++,s>0&&h>0&&t[s-1]||(r+=a?o("M",h+i,.5+c+i):o("m",n,0),n=0,a=!1),h+1<e&&t[s+1]||(r+=o("h",l),l=0)):n++}return r}(s,l,a.margin)+'"/>',g='viewBox="0 0 '+h+" "+h+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+g+' shape-rendering="crispEdges">'+c+f+"</svg>\n";return"function"==typeof i&&i(null,p),p}},56886:(t,e)=>{let i;const r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return r[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');i=t},e.isKanjiModeEnabled=function(){return void 0!==i},e.toSJIS=function(t){return i(t)}},60310:(t,e,i)=>{"use strict";i(48832)},64713:(t,e,i)=>{const r=i(2731);e.mul=function(t,e){const i=new Uint8Array(t.length+e.length-1);for(let n=0;n<t.length;n++)for(let o=0;o<e.length;o++)i[n+o]^=r.mul(t[n],e[o]);return i},e.mod=function(t,e){let i=new Uint8Array(t);for(;i.length-e.length>=0;){const t=i[0];for(let n=0;n<e.length;n++)i[n]^=r.mul(e[n],t);let n=0;for(;n<i.length&&0===i[n];)n++;i=i.slice(n)}return i},e.generateECPolynomial=function(t){let i=new Uint8Array([1]);for(let n=0;n<t;n++)i=e.mul(i,new Uint8Array([1,r.exp(n)]));return i}},67044:(t,e)=>{const i="[0-9]+";let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(n,"g"),e.NUMERIC=new RegExp(i,"g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const o=new RegExp("^"+r+"$"),a=new RegExp("^"+i+"$"),l=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return o.test(t)},e.testNumeric=function(t){return a.test(t)},e.testAlphanumeric=function(t){return l.test(t)}},69049:t=>{"use strict";t.exports=function(t){for(var e=[],i=t.length,r=0;r<i;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&i>r+1){var o=t.charCodeAt(r+1);o>=56320&&o<=57343&&(n=1024*(n-55296)+o-56320+65536,r+=1)}n<128?e.push(n):n<2048?(e.push(n>>6|192),e.push(63&n|128)):n<55296||n>=57344&&n<65536?(e.push(n>>12|224),e.push(n>>6&63|128),e.push(63&n|128)):n>=65536&&n<=1114111?(e.push(n>>18|240),e.push(n>>12&63|128),e.push(n>>6&63|128),e.push(63&n|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},74764:(t,e,i)=>{const r=i(64713);function n(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(t){this.degree=t,this.genPoly=r.generateECPolynomial(this.degree)},n.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const i=r.mod(e,this.genPoly),n=this.degree-i.length;if(n>0){const t=new Uint8Array(this.degree);return t.set(i,n),t}return i},t.exports=n},75694:(t,e,i)=>{"use strict";i.d(e,{M:()=>a});var r=i(36124);const n={attribute:!0,type:String,converter:r.W3,reflect:!1,hasChanged:r.Ec},o=(t=n,e,i)=>{const{kind:r,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,n,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const n=this[r];e.call(this,i),this.requestUpdate(r,n,t)}}throw Error("Unsupported decorator location: "+r)};function a(t){return(e,i)=>"object"==typeof i?o(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}},76320:t=>{"use strict";var e={single_source_shortest_paths:function(t,i,r){var n={},o={};o[i]=0;var a,l,s,h,c,f,g,p=e.PriorityQueue.make();for(p.push(i,0);!p.empty();)for(s in l=(a=p.pop()).value,h=a.cost,c=t[l]||{})c.hasOwnProperty(s)&&(f=h+c[s],g=o[s],(void 0===o[s]||g>f)&&(o[s]=f,p.push(s,f),n[s]=l));if(void 0!==r&&void 0===o[r]){var u=["Could not find a path from ",i," to ",r,"."].join("");throw new Error(u)}return n},extract_shortest_path_from_predecessor_list:function(t,e){for(var i=[],r=e;r;)i.push(r),t[r],r=t[r];return i.reverse(),i},find_path:function(t,i,r){var n=e.single_source_shortest_paths(t,i,r);return e.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(t){var i,r=e.PriorityQueue,n={};for(i in t=t||{},r)r.hasOwnProperty(i)&&(n[i]=r[i]);return n.queue=[],n.sorter=t.sorter||r.default_sorter,n},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var i={value:t,cost:e};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},81332:(t,e)=>{e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const i=3,r=3,n=40,o=10;function a(t,i,r){switch(t){case e.Patterns.PATTERN000:return(i+r)%2==0;case e.Patterns.PATTERN001:return i%2==0;case e.Patterns.PATTERN010:return r%3==0;case e.Patterns.PATTERN011:return(i+r)%3==0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(r/3))%2==0;case e.Patterns.PATTERN101:return i*r%2+i*r%3==0;case e.Patterns.PATTERN110:return(i*r%2+i*r%3)%2==0;case e.Patterns.PATTERN111:return(i*r%3+(i+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,n=0,o=0,a=null,l=null;for(let s=0;s<e;s++){n=o=0,a=l=null;for(let h=0;h<e;h++){let e=t.get(s,h);e===a?n++:(n>=5&&(r+=i+(n-5)),a=e,n=1),e=t.get(h,s),e===l?o++:(o>=5&&(r+=i+(o-5)),l=e,o=1)}n>=5&&(r+=i+(n-5)),o>=5&&(r+=i+(o-5))}return r},e.getPenaltyN2=function(t){const e=t.size;let i=0;for(let r=0;r<e-1;r++)for(let n=0;n<e-1;n++){const e=t.get(r,n)+t.get(r,n+1)+t.get(r+1,n)+t.get(r+1,n+1);4!==e&&0!==e||i++}return i*r},e.getPenaltyN3=function(t){const e=t.size;let i=0,r=0,o=0;for(let n=0;n<e;n++){r=o=0;for(let a=0;a<e;a++)r=r<<1&2047|t.get(n,a),a>=10&&(1488===r||93===r)&&i++,o=o<<1&2047|t.get(a,n),a>=10&&(1488===o||93===o)&&i++}return i*n},e.getPenaltyN4=function(t){let e=0;const i=t.data.length;for(let r=0;r<i;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/i/5)-10)*o},e.applyMask=function(t,e){const i=e.size;for(let r=0;r<i;r++)for(let n=0;n<i;n++)e.isReserved(n,r)||e.xor(n,r,a(t,n,r))},e.getBestMask=function(t,i){const r=Object.keys(e.Patterns).length;let n=0,o=1/0;for(let a=0;a<r;a++){i(a),e.applyMask(a,t);const r=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),r<o&&(o=r,n=a)}return n}},84206:(t,e,i)=>{"use strict";var r=i(97199),n=i(25707),o=i(99605),a=i(67569),l=i(26109),s=i(43494);const h=a.AH`
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
`;var c=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const f={primary:a.f.tokens.theme.textPrimary,secondary:a.f.tokens.theme.textSecondary,tertiary:a.f.tokens.theme.textTertiary,invert:a.f.tokens.theme.textInvert,error:a.f.tokens.core.textError,warning:a.f.tokens.core.textWarning,"accent-primary":a.f.tokens.core.textAccentPrimary};let g=class extends r.WF{constructor(){super(...arguments),this.variant="md-regular",this.color="inherit",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: ${"inherit"===this.color?"inherit":f[this.color??"primary"]};\n      `,r.qy`<slot class=${(0,o.H)(t)}></slot>`}};g.styles=[l.W5,h],c([(0,n.MZ)()],g.prototype,"variant",void 0),c([(0,n.MZ)()],g.prototype,"color",void 0),c([(0,n.MZ)()],g.prototype,"align",void 0),c([(0,n.MZ)()],g.prototype,"lineClamp",void 0),g=c([(0,s.E)("wui-text")],g)},84565:(t,e,i)=>{const r=i(56886),n=r.getBCHDigit(1335);e.getEncodedBits=function(t,e){const i=t.bit<<3|e;let o=i<<10;for(;r.getBCHDigit(o)-n>=0;)o^=1335<<r.getBCHDigit(o)-n;return 21522^(i<<10|o)}},87583:(t,e,i)=>{const r=i(91333),n=i(90157),o=i(47899),a=i(56756);function l(t,e,i,o,a){const l=[].slice.call(arguments,1),s=l.length,h="function"==typeof l[s-1];if(!h&&!r())throw new Error("Callback required as last argument");if(!h){if(s<1)throw new Error("Too few arguments provided");return 1===s?(i=e,e=o=void 0):2!==s||e.getContext||(o=i,i=e,e=void 0),new Promise(function(r,a){try{const a=n.create(i,o);r(t(a,e,o))}catch(t){a(t)}})}if(s<2)throw new Error("Too few arguments provided");2===s?(a=i,i=e,e=o=void 0):3===s&&(e.getContext&&void 0===a?(a=o,o=void 0):(a=o,o=i,i=e,e=void 0));try{const r=n.create(i,o);a(null,t(r,e,o))}catch(t){a(t)}}e.create=n.create,e.toCanvas=l.bind(null,o.render),e.toDataURL=l.bind(null,o.renderToDataURL),e.toString=l.bind(null,function(t,e,i){return a.render(t,i)})},90157:(t,e,i)=>{const r=i(56886),n=i(49953),o=i(99899),a=i(8820),l=i(6421),s=i(7756),h=i(81332),c=i(97518),f=i(74764),g=i(31427),p=i(84565),u=i(30208),d=i(29801);function m(t,e,i){const r=t.size,n=p.getEncodedBits(e,i);let o,a;for(o=0;o<15;o++)a=1==(n>>o&1),o<6?t.set(o,8,a,!0):o<8?t.set(o+1,8,a,!0):t.set(r-15+o,8,a,!0),o<8?t.set(8,r-o-1,a,!0):o<9?t.set(8,15-o-1+1,a,!0):t.set(8,15-o-1,a,!0);t.set(r-8,8,1,!0)}function w(t,e,i){const n=new o;i.forEach(function(e){n.put(e.mode.bit,4),n.put(e.getLength(),u.getCharCountIndicator(e.mode,t)),e.write(n)});const a=8*(r.getSymbolTotalCodewords(t)-c.getTotalCodewordsCount(t,e));for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);const l=(a-n.getLengthInBits())/8;for(let t=0;t<l;t++)n.put(t%2?17:236,8);return function(t,e,i){const n=r.getSymbolTotalCodewords(e),o=c.getTotalCodewordsCount(e,i),a=n-o,l=c.getBlocksCount(e,i),s=n%l,h=l-s,g=Math.floor(n/l),p=Math.floor(a/l),u=p+1,d=g-p,m=new f(d);let w=0;const y=new Array(l),v=new Array(l);let C=0;const b=new Uint8Array(t.buffer);for(let t=0;t<l;t++){const e=t<h?p:u;y[t]=b.slice(w,w+e),v[t]=m.encode(y[t]),w+=e,C=Math.max(C,e)}const x=new Uint8Array(n);let $,k,M=0;for($=0;$<C;$++)for(k=0;k<l;k++)$<y[k].length&&(x[M++]=y[k][$]);for($=0;$<d;$++)for(k=0;k<l;k++)x[M++]=v[k][$];return x}(n,t,e)}function y(t,e,i,n){let o;if(Array.isArray(t))o=d.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let r=e;if(!r){const e=d.rawSplit(t);r=g.getBestVersionForData(e,i)}o=d.fromString(t,r||40)}}const c=g.getBestVersionForData(o,i);if(!c)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<c)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+c+".\n")}else e=c;const f=w(e,i,o),p=r.getSymbolSize(e),u=new a(p);return function(t,e){const i=t.size,r=s.getPositions(e);for(let e=0;e<r.length;e++){const n=r[e][0],o=r[e][1];for(let e=-1;e<=7;e++)if(!(n+e<=-1||i<=n+e))for(let r=-1;r<=7;r++)o+r<=-1||i<=o+r||(e>=0&&e<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===e||6===e)||e>=2&&e<=4&&r>=2&&r<=4?t.set(n+e,o+r,!0,!0):t.set(n+e,o+r,!1,!0))}}(u,e),function(t){const e=t.size;for(let i=8;i<e-8;i++){const e=i%2==0;t.set(i,6,e,!0),t.set(6,i,e,!0)}}(u),function(t,e){const i=l.getPositions(e);for(let e=0;e<i.length;e++){const r=i[e][0],n=i[e][1];for(let e=-2;e<=2;e++)for(let i=-2;i<=2;i++)-2===e||2===e||-2===i||2===i||0===e&&0===i?t.set(r+e,n+i,!0,!0):t.set(r+e,n+i,!1,!0)}}(u,e),m(u,i,0),e>=7&&function(t,e){const i=t.size,r=g.getEncodedBits(e);let n,o,a;for(let e=0;e<18;e++)n=Math.floor(e/3),o=e%3+i-8-3,a=1==(r>>e&1),t.set(n,o,a,!0),t.set(o,n,a,!0)}(u,e),function(t,e){const i=t.size;let r=-1,n=i-1,o=7,a=0;for(let l=i-1;l>0;l-=2)for(6===l&&l--;;){for(let i=0;i<2;i++)if(!t.isReserved(n,l-i)){let r=!1;a<e.length&&(r=1==(e[a]>>>o&1)),t.set(n,l-i,r),o--,-1===o&&(a++,o=7)}if(n+=r,n<0||i<=n){n-=r,r=-r;break}}}(u,f),isNaN(n)&&(n=h.getBestMask(u,m.bind(null,u,i))),h.applyMask(n,u),m(u,i,n),{modules:u,version:e,errorCorrectionLevel:i,maskPattern:n,segments:o}}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let i,o,a=n.M;return void 0!==e&&(a=n.from(e.errorCorrectionLevel,n.M),i=g.from(e.version),o=h.from(e.maskPattern),e.toSJISFunc&&r.setToSJISFunction(e.toSJISFunc)),y(t,i,a,o)}},91333:t=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},92503:(t,e,i)=>{"use strict";i.r(e),i.d(e,{W3mWalletReceiveView:()=>$});var r=i(97199),n=i(25707),o=i(35198),a=i(63450),l=i(6056),s=i(21871),h=i(27601),c=i(68996),f=i(74496),g=i(78508),p=i(26742),u=i(69161),d=(i(96478),i(1608),i(84206),i(48832),i(26109)),m=i(43494);const w=i(67569).AH`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:t})=>t[4]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[3]};
    border: none;
    padding: ${({spacing:t})=>t[3]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  wui-text {
    flex: 1;
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${({spacing:t})=>t["01"]};
  }

  wui-icon {
    color: ${({tokens:t})=>t.theme.iconDefault};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:t})=>t[4]};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${({borderRadius:t})=>t[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.core.glass010};
  }
`;var y=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let v=class extends r.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return r.qy`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const t=this.networkImages.slice(0,5);return r.qy` <wui-flex class="networks">
      ${t?.map(t=>r.qy` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`)}
    </wui-flex>`}};v.styles=[d.W5,d.fD,w],y([(0,n.MZ)({type:Array})],v.prototype,"networkImages",void 0),y([(0,n.MZ)()],v.prototype,"text",void 0),v=y([(0,m.E)("wui-compatible-network")],v);i(60310),i(44360),i(45090);var C=i(10152);const b=u.AH`
  wui-compatible-network {
    margin-top: ${({spacing:t})=>t[4]};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;var x=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let $=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.address=a.U.state.address,this.profileName=a.U.state.profileName,this.network=l.W.state.activeCaipNetwork,this.unsubscribe.push(a.U.subscribe(t=>{t.address?(this.address=t.address,this.profileName=t.profileName):s.P.showError("Account not found")}),l.W.subscribeKey("activeCaipNetwork",t=>{t?.id&&(this.network=t)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const t=h.$.getNetworkImage(this.network);return r.qy` <wui-flex
      flexDirection="column"
      .padding=${["0","4","4","4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${u.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${t||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4","0","0","0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${c.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,o.J)(c.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=l.W.getAllRequestedCaipNetworks(),e=l.W.checkIfSmartAccountEnabled(),i=l.W.state.activeCaipNetwork,n=t.filter(t=>t?.chainNamespace===i?.chainNamespace);if((0,f.lj)(i?.chainNamespace)===C.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e)return i?r.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[h.$.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const o=n?.filter(t=>t?.assets?.imageId)?.slice(0,5),a=o.map(h.$.getNetworkImage).filter(Boolean);return r.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${a}
    ></wui-compatible-network>`}onReceiveClick(){g.I.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(p.w.copyToClopboard(this.address),s.P.showSuccess("Address copied"))}catch{s.P.showError("Failed to copy")}}};$.styles=b,x([(0,n.wk)()],$.prototype,"address",void 0),x([(0,n.wk)()],$.prototype,"profileName",void 0),x([(0,n.wk)()],$.prototype,"network",void 0),$=x([(0,u.EM)("w3m-wallet-receive-view")],$)},92726:(t,e)=>{function i(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");const i=parseInt(e.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:255&i,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,n=t.scale||4;return{width:r,scale:r?4:n,margin:e,color:{dark:i(t.color.dark||"#000000ff"),light:i(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,i){const r=e.getScale(t,i);return Math.floor((t+2*i.margin)*r)},e.qrToImageData=function(t,i,r){const n=i.modules.size,o=i.modules.data,a=e.getScale(n,r),l=Math.floor((n+2*r.margin)*a),s=r.margin*a,h=[r.color.light,r.color.dark];for(let e=0;e<l;e++)for(let i=0;i<l;i++){let c=4*(e*l+i),f=r.color.light;if(e>=s&&i>=s&&e<l-s&&i<l-s){f=h[o[Math.floor((e-s)/a)*n+Math.floor((i-s)/a)]?1:0]}t[c++]=f.r,t[c++]=f.g,t[c++]=f.b,t[c]=f.a}}},96478:(t,e,i)=>{"use strict";var r=i(97199),n=i(25707),o=i(36752);const a=Symbol.for(""),l=t=>{if(t?.r===a)return t?._$litStatic$},s=new Map,h=t=>(e,...i)=>{const r=i.length;let n,o;const a=[],h=[];let c,f=0,g=!1;for(;f<r;){for(c=e[f];f<r&&void 0!==(o=i[f],n=l(o));)c+=n+e[++f],g=!0;f!==r&&h.push(o),a.push(c),f++}if(f===r&&a.push(e[r]),g){const t=a.join("$$lit$$");void 0===(e=s.get(t))&&(a.raw=a,s.set(t,e=a)),i=h}return t(e,...i)},c=h(o.qy),f=(h(o.JW),h(o.ej),r.JW`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
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
</svg>`),g=r.JW`<svg fill="none" viewBox="0 0 40 40">
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
`,u=r.JW`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
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
</svg>`,d=r.JW` <svg fill="none" viewBox="0 0 13 4">
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
</svg>`,w=r.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`,y=r.JW`<svg fill="none" viewBox="0 0 16 16">
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
</svg>`,C=r.JW`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
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
</svg>`,b=r.JW`<svg fill="none" viewBox="0 0 40 40">
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

`,M=r.JW`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`,E=r.JW`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
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
</svg>`,L=r.JW`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`,S=r.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,P=r.JW`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`,A=r.JW`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`,B=r.JW`
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
`,z=r.JW`<svg fill="none" viewBox="0 0 41 40">
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
</svg>`;var Z=i(67569),I=i(26109),T=i(43494);const R=r.AH`
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
`;var N=function(t,e,i,r){var n,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(a=(o<3?n(a):o>3?n(e,i,a):n(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const W={add:"ph-plus",allWallets:"ph-dots-three",arrowBottom:"ph-arrow-down",arrowBottomCircle:"ph-arrow-circle-down",arrowClockWise:"ph-arrow-clockwise",arrowLeft:"ph-arrow-left",arrowRight:"ph-arrow-right",arrowTop:"ph-arrow-up",arrowTopRight:"ph-arrow-up-right",bank:"ph-bank",bin:"ph-trash",browser:"ph-browser",card:"ph-credit-card",checkmark:"ph-check",checkmarkBold:"ph-check",chevronBottom:"ph-caret-down",chevronLeft:"ph-caret-left",chevronRight:"ph-caret-right",chevronTop:"ph-caret-up",clock:"ph-clock",close:"ph-x",coinPlaceholder:"ph-circle-half",compass:"ph-compass",copy:"ph-copy",desktop:"ph-desktop",dollar:"ph-currency-dollar",download:"ph-vault",exclamationCircle:"ph-warning-circle",extension:"ph-puzzle-piece",externalLink:"ph-arrow-square-out",filters:"ph-funnel-simple",helpCircle:"ph-question",id:"ph-identification-card",image:"ph-image",info:"ph-info",lightbulb:"ph-lightbulb",mail:"ph-envelope",mobile:"ph-device-mobile",more:"ph-dots-three",networkPlaceholder:"ph-globe",nftPlaceholder:"ph-image",plus:"ph-plus",power:"ph-power",qrCode:"ph-qr-code",questionMark:"ph-question",refresh:"ph-arrow-clockwise",recycleHorizontal:"ph-arrows-clockwise",search:"ph-magnifying-glass",sealCheck:"ph-seal-check",send:"ph-paper-plane-right",signOut:"ph-sign-out",spinner:"ph-spinner",swapHorizontal:"ph-arrows-left-right",swapVertical:"ph-arrows-down-up",threeDots:"ph-dots-three",user:"ph-user",verify:"ph-seal-check",verifyFilled:"ph-seal-check",wallet:"ph-wallet",warning:"ph-warning",warningCircle:"ph-warning-circle",appStore:"",apple:"",bitcoin:"",chromeStore:"",cursor:"",discord:"",ethereum:"",etherscan:"",facebook:"",farcaster:"",github:"",google:"",playStore:"",reown:"",solana:"",telegram:"",twitch:"",twitterIcon:"",twitter:"",walletConnect:"",walletConnectBrown:"",walletConnectLightBrown:"",x:""},F={"ph-arrow-circle-down":()=>i.e(485).then(i.bind(i,30485)),"ph-arrow-clockwise":()=>i.e(7753).then(i.bind(i,27753)),"ph-arrow-down":()=>i.e(9657).then(i.bind(i,69657)),"ph-arrow-left":()=>i.e(4438).then(i.bind(i,64438)),"ph-arrow-right":()=>i.e(4217).then(i.bind(i,44217)),"ph-arrow-square-out":()=>i.e(9296).then(i.bind(i,59296)),"ph-arrows-down-up":()=>i.e(6283).then(i.bind(i,6283)),"ph-arrows-left-right":()=>i.e(6903).then(i.bind(i,46903)),"ph-arrow-up":()=>i.e(3462).then(i.bind(i,73462)),"ph-arrow-up-right":()=>i.e(8920).then(i.bind(i,38920)),"ph-arrows-clockwise":()=>i.e(8058).then(i.bind(i,88058)),"ph-bank":()=>i.e(336).then(i.bind(i,70336)),"ph-browser":()=>i.e(858).then(i.bind(i,20858)),"ph-caret-down":()=>i.e(3851).then(i.bind(i,83851)),"ph-caret-left":()=>i.e(312).then(i.bind(i,60312)),"ph-caret-right":()=>i.e(3203).then(i.bind(i,73203)),"ph-caret-up":()=>i.e(6412).then(i.bind(i,36412)),"ph-check":()=>i.e(6570).then(i.bind(i,86570)),"ph-circle-half":()=>i.e(9229).then(i.bind(i,79229)),"ph-clock":()=>i.e(1992).then(i.bind(i,71992)),"ph-compass":()=>i.e(5882).then(i.bind(i,25882)),"ph-copy":()=>i.e(1349).then(i.bind(i,61349)),"ph-credit-card":()=>i.e(2143).then(i.bind(i,62143)),"ph-currency-dollar":()=>i.e(8589).then(i.bind(i,28589)),"ph-desktop":()=>i.e(6738).then(i.bind(i,66738)),"ph-device-mobile":()=>i.e(6262).then(i.bind(i,56262)),"ph-dots-three":()=>i.e(3638).then(i.bind(i,3638)),"ph-vault":()=>i.e(6598).then(i.bind(i,66598)),"ph-envelope":()=>i.e(2798).then(i.bind(i,12798)),"ph-funnel-simple":()=>i.e(7040).then(i.bind(i,37040)),"ph-globe":()=>i.e(5845).then(i.bind(i,95845)),"ph-identification-card":()=>i.e(6238).then(i.bind(i,86238)),"ph-image":()=>i.e(7805).then(i.bind(i,67805)),"ph-info":()=>i.e(6526).then(i.bind(i,66526)),"ph-lightbulb":()=>i.e(9571).then(i.bind(i,59571)),"ph-magnifying-glass":()=>i.e(5803).then(i.bind(i,55803)),"ph-paper-plane-right":()=>i.e(5264).then(i.bind(i,5264)),"ph-plus":()=>i.e(1634).then(i.bind(i,1634)),"ph-power":()=>i.e(3617).then(i.bind(i,53617)),"ph-puzzle-piece":()=>i.e(2272).then(i.bind(i,92272)),"ph-qr-code":()=>i.e(9780).then(i.bind(i,89780)),"ph-question":()=>i.e(654).then(i.bind(i,90654)),"ph-question-circle":()=>i.e(9237).then(i.bind(i,79237)),"ph-seal-check":()=>i.e(4771).then(i.bind(i,34771)),"ph-sign-out":()=>i.e(4899).then(i.bind(i,84899)),"ph-spinner":()=>i.e(3317).then(i.bind(i,53317)),"ph-trash":()=>i.e(1884).then(i.bind(i,21884)),"ph-user":()=>i.e(5195).then(i.bind(i,25195)),"ph-wallet":()=>i.e(2125).then(i.bind(i,92125)),"ph-warning":()=>i.e(3758).then(i.bind(i,23758)),"ph-warning-circle":()=>i.e(4042).then(i.bind(i,84042)),"ph-x":()=>i.e(626).then(i.bind(i,10626))},U={appStore:f,apple:g,bitcoin:p,chromeStore:u,cursor:d,discord:m,ethereum:w,etherscan:y,facebook:v,farcaster:C,github:b,google:x,playStore:$,reown:k,solana:M,telegram:E,twitch:L,twitter:z,twitterIcon:S,walletConnect:P,walletConnectInvert:A,walletConnectBrown:H,walletConnectLightBrown:B,x:z},_={"accent-primary":Z.f.tokens.core.iconAccentPrimary,"accent-certified":Z.f.tokens.core.iconAccentCertified,default:Z.f.tokens.theme.iconDefault,success:Z.f.tokens.core.iconSuccess,error:Z.f.tokens.core.iconError,warning:Z.f.tokens.core.iconWarning,inverse:Z.f.tokens.theme.iconInverse};let V=class extends r.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.weight="bold",this.color="inherit"}render(){this.style.cssText=`\n      --local-width: ${"inherit"===this.size?"inherit":`var(--apkt-spacing-${{xxs:"2",xs:"3",sm:"3",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7",inherit:"inherit"}[this.size]})`};\n      --local-color: ${"inherit"===this.color?"inherit":_[this.color]}\n    `;const t=W[this.name];if(t&&""!==t){const e=F[t];e&&e();const i={_$litStatic$:t,r:a};return c`<${i} size=${{xxs:"0.5em",xs:"0.75em",sm:"0.75em",md:"1em",mdl:"1.25em",lg:"1.25em",xl:"1.5em",xxl:"1.75em"}[this.size]} weight="${this.weight}"></${i}>`}return U[this.name]||c``}};V.styles=[I.W5,R],N([(0,n.MZ)()],V.prototype,"size",void 0),N([(0,n.MZ)()],V.prototype,"name",void 0),N([(0,n.MZ)()],V.prototype,"weight",void 0),N([(0,n.MZ)()],V.prototype,"color",void 0),V=N([(0,T.E)("wui-icon")],V)},97518:(t,e,i)=>{const r=i(49953),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],o=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case r.L:return n[4*(t-1)+0];case r.M:return n[4*(t-1)+1];case r.Q:return n[4*(t-1)+2];case r.H:return n[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}}},99605:(t,e,i)=>{"use strict";i.d(e,{H:()=>o});var r=i(36752),n=i(7804);const o=(0,n.u$)(class extends n.WL{constructor(t){if(super(t),t.type!==n.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const r=!!e[t];r===this.st.has(t)||this.nt?.has(t)||(r?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return r.c0}})},99899:t=>{function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e}}]);