"undefined"==typeof global&&(global=window),global.Interface=function(t,e){var i,n;return i=t&&e?t:this,n=t&&e?e:t||"interface"+Math.random().toString(),function(t){return t.isInterface=!0,t.name=n,i[n]=t,i[n]}},global.Module=function(t,e){var i,n,r,s;return i=t&&e?t:this,n=t&&e?e:t||"module"+Math.random().toString(),s={moduleName:n,prototype:{},__includedModules:[],include:function(t){var e;for(e in t)t.hasOwnProperty(e)&&"prototype"!==e&&"isModule"!==e&&"__includedModules"!==e&&"include"!==e&&"moduleName"!==e&&(s[e]=t[e]);if(t.hasOwnProperty("prototype")&&t.prototype)for(e in t.prototype)t.prototype.hasOwnProperty(e)&&(s.prototype[e]=t.prototype[e]);else t.prototype={};return this.__includedModules.push(t),this}},(r=function(t){var e;for(e in s.isModule=!0,t)t.hasOwnProperty(e)&&"prototype"!==e&&"isModule"!==e&&"__includedModules"!==e&&"include"!==e&&"moduleName"!==e&&(s[e]=t[e]);if(t.hasOwnProperty("prototype")&&t.prototype)for(e in t.prototype)t.prototype.hasOwnProperty(e)&&(s.prototype[e]=t.prototype[e]);return i[n]=s,i[n]}).includes=function(){for(var t=0;t<arguments.length;t++)s.include(arguments[t]);return r},r},global.Class=function(t,e){var i,n,r;return i=t&&e?t:global,e=t&&e?e:t||"class"+Math.random().toString(),(n=function(){this.init&&this.init.apply(this,arguments)}).__descendants=[],n.__implementedInterfaces=[],n.__includedModules=[],n.className=e,n.include=function(t){var e;for(e in t)t.hasOwnProperty(e)&&"prototype"!=e&&"constructor"!=e&&"isModule"!=e&&"superClass"!=e&&"include"!=e&&(n[e]=t[e]);if(t.hasOwnProperty("prototype")&&t.prototype)for(e in t.prototype)t.prototype.hasOwnProperty(e)&&(n.prototype[e]=t.prototype[e]);else t.prototype={};return n.__includedModules.push(t),this},(r=function(t){var r,s,o,a,l,h=t.prototype;if(h){for(l in h)h.hasOwnProperty(l)&&(n.prototype[l]=h[l]);delete t.prototype}for(l in t)t.hasOwnProperty(l)&&(n[l]=t[l]);for(r=0,s=n.__implementedInterfaces.length;r<s;r++){for(o=0,a=n.__implementedInterfaces[r].constructor.length;o<a;o++)if(!n[n.__implementedInterfaces[r].constructor[o]]){console.log("must implement static "+n.__implementedInterfaces[r].name);break}if(n.__implementedInterfaces[r].hasOwnProperty("prototype")&&n.__implementedInterfaces[r].prototype)for(o=0,a=n.__implementedInterfaces[r].prototype.length;o<a;o++)if(!n.prototype[n.__implementedInterfaces[r].prototype[o]]){console.log("must implement prototype "+n.__implementedInterfaces[r].name);break}}try{Li&&Li.ObjectSpy&&Li.Spy&&((n.__objectSpy=new Li.ObjectSpy).spy(n),n.__objectSpy.spy(n.prototype))}catch(t){}return i[e]=n,n}).inherits=function(t){var e,i;for(e in n.superClass=t,t.hasOwnProperty("__descendants")&&t.__descendants.push(n),(i=function(){}).prototype=t.prototype,(n.prototype=new i).constructor=n,t)t.hasOwnProperty(e)&&"prototype"!=e&&"className"!==e&&"superClass"!==e&&"include"!==e&&"__descendants"!=e&&(n[e]=t[e]);return delete this.inherits,this},r.ensures=function(t){for(var e=0;e<arguments.length;e++)n.__implementedInterfaces.push(arguments[e]);return delete this.ensures,r},r.includes=function(){for(var t=0;t<arguments.length;t++)n.include(arguments[t]);return r},r},Module("BubblingSupport")({dispatch:function(t,e){e=e||{};var i=CustomEventSupport.prototype.dispatch.call(this,t,e);return!1===i.isPropagationStopped&&this.parent&&this.parent.dispatch&&(e.target=i.target,e.currentTarget=this.parent,this.parent.dispatch(i.type,e)),i},prototype:{dispatch:function(t,e){e=e||{};var i=CustomEventSupport.prototype.dispatch.call(this,t,e);return!1===i.isPropagationStopped&&!0===i.bubbles&&this.parent&&this.parent.dispatch&&(e.target=i.target,e.currentTarget=this.parent,this.parent.dispatch(i.type,e)),i}}}),Class("CustomEvent")({prototype:{bubbles:!0,cancelable:!0,currentTarget:null,timeStamp:0,target:null,type:"",isPropagationStopped:!1,isDefaultPrevented:!1,isImmediatePropagationStopped:!1,areImmediateHandlersPrevented:!1,init:function(t,e){if(this.type=t,void 0!==e)for(var i in e)e.hasOwnProperty(i)&&(this[i]=e[i])},stopPropagation:function(){this.isPropagationStopped=!0},preventDefault:function(){this.isDefaultPrevented=!0},stopImmediatePropagation:function(){this.preventImmediateHandlers(),this.stopPropagation()},preventImmediateHandlers:function(){this.areImmediateHandlersPrevented=!0}}}),Module("CustomEventSupport")({eventListeners:null,bind:function(t,e){var i,n,r;for(this.eventListeners||(this.eventListeners={}),this.eventListeners[t]||(this.eventListeners[t]=[]),i=!1,r=this.eventListeners[t],n=0;n<r.length;n++)if(r[n]===e){i=!0;break}return i||this.eventListeners[t].push(e),this},unbind:function(t,e){var i,n,r;for(n=!1,this.eventListeners||(this.eventListeners={}),void 0===e&&(this.eventListeners[t]=[]),r=this.eventListeners[t],i=0;i<r.length;i++)if(r[i]===e){n=!0;break}return n&&this.eventListeners[t].splice(i,1),this},dispatch:function(t,e){var i,n,r;for(null===this.eventListeners&&(this.eventListeners={}),void 0===e&&(e={}),!1===e.hasOwnProperty("target")&&(e.target=this),i=new CustomEvent(t,e),n=this.eventListeners[t]||[],this,r=0;r<n.length&&(n[r].call(this,i),!0!==i.areImmediateHandlersPrevented);r+=1);return i},prototype:{eventListeners:null,bind:function(t,e){var i,n,r;for(this.eventListeners||(this.eventListeners={}),this.eventListeners[t]||(this.eventListeners[t]=[]),i=!1,r=this.eventListeners[t],n=0;n<r.length;n++)if(r[n]===e){i=!0;break}return i||this.eventListeners[t].push(e),this},unbind:function(t,e){var i,n,r;for(n=!1,i=0,this.eventListeners||(this.eventListeners={}),void 0===e&&(this.eventListeners[t]=[]),r=this.eventListeners[t],i=0;i<r.length;i++)if(r[i]==e){n=!0;break}return n&&this.eventListeners[t].splice(i,1),this},dispatch:function(t,e){var i,n,r;for(null===this.eventListeners&&(this.eventListeners={}),void 0===e&&(e={}),!1===e.hasOwnProperty("target")&&(e.target=this),i=new CustomEvent(t,e),n=this.eventListeners[t]||[],this,r=0;r<n.length&&(n[r].call(this,i),!0!==i.areImmediateHandlersPrevented);r+=1);return i}}}),"undefined"!=typeof require&&(require("./custom_event"),require("./custom_event_support"),require("./node_support"),require("./bubbling_support")),Module("NodeSupport")({prototype:{parent:null,children:[],appendChild:function(t){return t.parent&&t.parent.removeChild(t),this.hasOwnProperty("children")||(this.children=[]),this.children.push(t),this[t.name]=t,t.setParent(this),t},insertBefore:function(t,e){var i;return t.parent&&t.parent.removeChild(t),this.hasOwnProperty("children")||(this.children=[]),void 0===e?this.appendChild(t):(i=this.children.indexOf(e),this.children.splice(i,0,t),this[t.name]=t,t.setParent(this)),t},insertChild:function(t,e){return console.warn("NodeSupport insertChild method is deprecated, try insertBefore"),t.parent&&t.parent.removeChild(t),this.hasOwnProperty("children")||(this.children=[]),void 0===e?(this.children.push(t),this[t.name]=t,t.setParent(this),t):(this.children.splice(e,0,t),this[t.name]=t,t.setParent(this),t)},removeChild:function(t){var e=this.children.indexOf(t);return-1!==e&&(this.children.splice(e,1),delete this[t.name],t.parent=null),t},setParent:function(t){return this.parent=t,this},getDescendants:function(){var t=[];return this.children.forEach((function(e){t.push(e)})),this.children.forEach((function(e){t=t.concat(e.getDescendants())})),t},getPreviousSibling:function(){if(void 0!==this.parent&&this.parent.children[0]!==this)return this.parent.children[this.parent.children.indexOf(this)-1]},getNextSibling:function(){if(void 0!==this.parent&&this.parent.children[this.parent.children.length-1]!==this)return this.parent.children[this.parent.children.indexOf(this)+1]}}}),
/**
 * values.js - Get the tints and shades of a color
 * @version v1.0.3
 * @link http://noeldelgado.github.io/values.js/
 * @license MIT
 */
function(){var t={reHash:new RegExp("^#"),reHEX:new RegExp("^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$"),reRGB:new RegExp("rgba?\\s*\\((\\d+)\\,\\s*(\\d+)\\,\\s*(\\d+)(,\\s*((\\d+)?(\\.\\d+)?))?\\)","i"),reHSL:new RegExp("hsla?\\((\\d+),\\s*([\\d.]+)%,\\s*([\\d.]+)%,?\\s*(?:0?(\\.\\d+)?|1(\\.0)?)?\\)","i"),isHEX:function(t){return this.reHEX.test(t)},isRGB:function(t){var e=t.match(this.reRGB);return!!(e&&e[1]<=255&&e[2]<=255&&e[3]<=255)},isHSL:function(t){var e=t.match(this.reHSL);return!!(e&&e[1]<=360&&e[2]<=100&&e[3]<=100)},HEXtoRGB:function(t){if(3===(t=t.replace("#","")).length){var e=t.charAt(0),i=t.charAt(1),n=t.charAt(2);t=e+e+i+i+n+n}var r=parseInt(t,16);return{r:r>>16&255,g:r>>8&255,b:255&r}},RGBtoHEX:function(t,e,i){return(16777216+(t<<16)+(e<<8)+i).toString(16).slice(1)},RGBtoHSL:function(t,e,i){var n,r,s,o,a;if(t/=255,e/=255,i/=255,a=((r=Math.max(t,e,i))+(n=Math.min(t,e,i)))/2,r===n)s=o=0;else{var l=r-n;o=a>.5?l/(2-r-n):l/(r+n),r===t?s=(e-i)/l+(e<i?6:0):r===e?s=(i-t)/l+2:r===i&&(s=(t-e)/l+4),s/=6}return{h:Math.round(360*s),s:Math.round(100*o),l:Math.round(100*a)}},HUEtoRGB:function(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),6*i<1?t+6*(e-t)*i:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t},HSLtoRGB:function(t,e,i){var n,r,s;if(t/=360,i/=100,0===(e/=100))n=r=s=i;else{var o=i<.5?i*(1+e):i+e-i*e,a=2*i-o;n=this.HUEtoRGB(a,o,t+1/3),r=this.HUEtoRGB(a,o,t),s=this.HUEtoRGB(a,o,t-1/3)}return{r:Math.round(255*n),g:Math.round(255*r),b:Math.round(255*s)}},mix:function(i,n,r){var s=2*((r=void 0===r?50:r)/100)-1,o=((0*s==-1?s:(s+0)/(1+0*s))+1)/2,a=1-o,l=Math.round(i.rgb.r*o+n.rgb.r*a),h=Math.round(i.rgb.g*o+n.rgb.g*a),c=Math.round(i.rgb.b*o+n.rgb.b*a),d=new e(t.RGBtoHEX(l,h,c));return d.percentage=r,d}};function e(t){return this.hex="",this.hsl={},this.rgb={},t?this.setColor(t):this}e.Utils=t,e.prototype.setColor=function(e){return t.isHEX(e)?this._setFromHexString(e):t.isRGB(e)?this._setFromRGBString(e):t.isHSL(e)?this._setFromHSLString(e):new Error("Invalid Color Format")},e.prototype.tint=function(e){return t.mix({rgb:{r:255,g:255,b:255}},this,e)},e.prototype.shade=function(e){return t.mix({rgb:{r:0,g:0,b:0}},this,e)},e.prototype.tints=function(t){for(var e,i=t=t||10,n=[];i<=100;)e=this.tint(i),e.isTint=!0,n.push(e),i+=t;return n},e.prototype.shades=function(t){for(var e=t=t||10,i=[];e<=100;)shade=this.shade(e),shade.isShade=!0,i.push(shade),e+=t;return i},e.prototype.all=function(t){var e=this.tints(t).reverse(),i=this.shades(t);return e.push(Object.assign(this,{isBaseColor:!0})),e.concat(i)},e.prototype.getBrightness=function(){var t=this.rgb.r+this.rgb.g+this.rgb.b;return Math.round(t/765*100)},e.prototype.hexString=function(){return"#"+this.hex},e.prototype.rgbString=function(){return"rgb("+this.rgb.r+", "+this.rgb.g+", "+this.rgb.b+")"},e.prototype.hslString=function(){return"hsl("+this.hsl.h+", "+this.hsl.s+"%, "+this.hsl.l+"%)"},e.prototype._setFromHexString=function(e){return this.hex=t.reHash.test(e)?e.replace("#",""):e,this.rgb=t.HEXtoRGB(e),this.hsl=t.RGBtoHSL(this.rgb.r,this.rgb.g,this.rgb.b),this},e.prototype._setFromRGBString=function(e){var i=e.replace(/[^\d,]/g,"").split(","),n=parseInt(i[0],10),r=parseInt(i[1],10),s=parseInt(i[2],10);return this.rgb={r:n,g:r,b:s},this.hex=t.RGBtoHEX(n,r,s),this.hsl=t.RGBtoHSL(this.rgb.r,this.rgb.g,this.rgb.b),this},e.prototype._setFromHSLString=function(e){var i=e.match(t.reHSL),n=Math.round(i[1]),r=Math.round(i[2]),s=Math.round(i[3]);return this.hsl={h:n,s:r,l:s},this.rgb=t.HSLtoRGB(n,r,s),this.hex=t.RGBtoHEX(this.rgb.r,this.rgb.g,this.rgb.b),this},"undefined"!=typeof module&&void 0!==module.exports?module.exports=e:window.Values=e}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},r=function(){return i.apply(this instanceof n&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return n.prototype=this.prototype,r.prototype=new n,r}),function(){if(!(void 0===window.Element||"classList"in document.documentElement)){var t,e,i,n=Array.prototype,r=n.push,s=n.splice,o=n.join;a.prototype={add:function(t){this.contains(t)||(r.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var e=0;e<this.length&&this[e]!=t;e++);s.call(this,e,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=a,t=Element.prototype,e="classList",i=function(){return new a(this)},Object.defineProperty?Object.defineProperty(t,e,{get:i}):t.__defineGetter__(e,i)}function a(t){this.el=t;for(var e=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<e.length;i++)r.call(this,e[i])}}(),window.Sl={},Sl.UI={},Class("Widget").includes(CustomEventSupport,NodeSupport)({HTML:"<div></div>",ELEMENT_CLASS:"widget",prototype:{active:!1,disabled:!1,__destroyed:!1,init:function(t){var e;Object.keys(t||{}).forEach((function(e){this[e]=t[e]}),this),null==this.element&&((e=document.createElement("div")).innerHTML=this.constructor.HTML.replace(/\s\s+/g,""),this.element=e.firstChild,this.constructor.ELEMENT_CLASS.split(" ").forEach((function(t){this.element.classList.add(t)}),this),e=null),!0===this.hasOwnProperty("className")&&this.className.split(" ").forEach((function(t){this.element.classList.add(t)}),this)},_activate:function(){this.active=!0,this.element.classList.add("active")},activate:function(){return!0===this.__destroyed&&console.warn("calling on destroyed object"),this.dispatch("beforeActivate"),this._activate(),this.dispatch("activate"),this},_deactivate:function(){this.active=!1,this.element.classList.remove("active")},deactivate:function(){return!0===this.__destroyed&&console.warn("calling on destroyed object"),this.dispatch("beforeDeactivate"),this._deactivate(),this.dispatch("deactivate"),this},_enable:function(){this.disabled=!1,this.element.classList.remove("disable")},enable:function(){return!0===this.__destroyed&&console.warn("calling on destroyed object"),this.dispatch("beforeEnable"),this._enable(),this.dispatch("enable"),this},_disable:function(){this.disabled=!0,this.element.classList.add("disable")},disable:function(){return!0===this.__destroyed&&console.warn("calling on destroyed object"),this.dispatch("beforeDisable"),this._disable(),this.dispatch("disable"),this},_destroy:function(){var t;if(this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),null!==this.children)for(t=this.children.length;t>0;)this.children[0].destroy(),this.children.length===t&&this.children.shift(),t--;this.parent&&this.parent.removeChild(this),this.children=null,this.element=null},destroy:function(){return!0===this.__destroyed&&console.warn("calling on destroyed object"),this.dispatch("beforeDestroy"),this._destroy(),this.dispatch("destroy"),this.eventListeners=null,this.__destroyed=!0,null},render:function(t,e){return!0===this.__destroyed&&console.warn("calling on destroyed object"),this.dispatch("beforeRender",{element:t,beforeElement:e}),e?t.insertBefore(this.element,e):t.appendChild(this.element),this.dispatch("render"),this}}}),Class(Sl.UI,"Checkbox").inherits(Widget)({HTML:'        <div class="checkbox-wrapper">            <label>                <input type="checkbox">                <span class="checkbox-ui"></span>                <span class="checkbox-label"></span>            </label>        </div>        ',prototype:{id:null,checkbox:null,label:null,init:function(t){Widget.prototype.init.call(this,t),this.checkbox=this.element.querySelector('[type="checkbox"]'),this.label=this.element.querySelector("label"),this.text=this.element.querySelector(".checkbox-label"),this.checkbox.setAttribute("id",this.id),this.label.setAttribute("for",this.id),this.text.appendChild(document.createTextNode(this.id)),this._bindEvents()},_bindEvents:function(){return this.checkbox.addEventListener("change",this._checkboxChangeHandler.bind(this),!1),this},_checkboxChangeHandler:function(){this.constructor.dispatch("change",this)},toggle:function(){return this.checkbox.click(),this},destroy:function(){this.id=null,this.checkbox=null,this.label=null,Widget.prototype.destroy.call(this)}}}),Class(Sl.UI,"Color").inherits(Widget)({HTML:'        <div class="item">            <div class="item_percent">                <svg class="icon-shade" width="12" height="12" viewBox="0 0 24 24">                    <path fill="currentColor" d="M12 2A10 10 0 1 1 2 12A10 10 0 0 1 12 2Z" />                </svg>                <svg class="icon-tint" width="12" height="12" viewBox="0 0 24 24">                    <path d="M12 20A8 8 0 1 1 20 12A8 8 0 0 1 12 20M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Z" />                </svg>            </div>        </div>    ',prototype:{init:function(t){Widget.prototype.init.call(this,t),this.appendChild(new Sl.UI.Paragraph({name:"percentage",className:"percentage--label"})).render(this.element.querySelector(".item_percent"),this.element.querySelector(".item_percent").firstElementChild),this.appendChild(new Sl.UI.Paragraph({name:"hexLabel",className:"hex--label"})).render(this.element)},getElement:function(){return this.element},setBackgroundColor:function(t){return this.element.style.backgroundColor=t,this},setColor:function(t){return this.element.style.color=t,this},destroy:function(){return Widget.prototype.destroy.call(this),null}}}),Class(Sl.UI,"ColorsCollection").inherits(Widget)({HTML:'<div class="colors-collection"></div>',prototype:{_cached:null,init:function(t){Widget.prototype.init.call(this,t),this._cached=[],this._storeInMemory(201)},_storeInMemory:function(t){var e;for(e=0;e<t;e++)this._cached.push(new Sl.UI.Color);return this},getElement:function(){return this.element},renderColors:function(){return this._cached.forEach((function(t){this.appendChild(t).render(this.element)}),this),this}}}),Class(Sl.UI,"CreditsModal").inherits(Widget)({HTML:'        <div class="modal credits">          <div class="modal__wrapper">            <div class="modal__inner">                <button class="btn btn-icon btn-ghost modal__close">                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">                        <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />                    </svg>                </button>              <section>                <h3>About</h3>                <p>Color tints and shades generator tool.</p>                <ul>                    <li>Color input accepts hex, rgb and hsl CSS color strings.                    <li>The accepted percent factor range goes from 1 to 100. The math is <code>round(100 / &lt;percent&gt;)</code>, so:                    <ul>                        <li>1 will produce 100 tints and 100 shades                        <li>2 will produce 50 tints and 50 shades                        <li>3 will produce 33 tints and 33 shades                        <li>5 will produce 20 tints and 20 shades                        <li>10 will produce 10 tints and 10 shades                        <li>...                    </ul>                </ul>                <h3>Credits</h3>                <ul>                    <li><a href="https://github.com/azendal/neon" target="_blank">Neon</a> Class System by Fernando Trasviña.</li>                    <li><a href="https://github.com/noeldelgado/values.js" target="_blank">values.js</a> — JS library to get the tints and shades.</li>                    <li>Material Design Icons by <a href="https://twitter.com/Google" target="_blank">@Google</a>.</li>                    <li>“Percent” icon by Austin Andrews <a href="https://twitter.com/templarian" target="_blank">@templarian</a></li>                </ul>              </section>            </div>          </div>        </div>        ',prototype:{_doc:null,_previousFocusedElement:null,init:function(t){Widget.prototype.init.call(this,t),this._doc=document,this.closeModal=this.element.querySelector(".modal__close"),this._bindEvents()},_bindEvents:function(){return this._doc.addEventListener("keydown",this._keyDownHandler.bind(this),!1),this.element.addEventListener("click",function(t){this._checkBeforeClose(t)}.bind(this),!1),this.closeModal.addEventListener("click",this.deactivate.bind(this),!1),this},_keyDownHandler:function(t){27===t.which&&this.deactivate()},_checkBeforeClose:function(t){return t.target.classList.contains("modal__wrapper")&&this.deactivate(),this},activate:function(){var t=this;return Widget.prototype.activate.call(t),t._previousFocusedElement=document.activeElement,t.element.addEventListener("transitionend",(function(){t.closeModal.focus()}),{once:!0}),t},deactivate:function(){return Widget.prototype.deactivate.call(this),this._previousFocusedElement&&this._previousFocusedElement.focus(),this._previousFocusedElement=null,this},destroy:function(){this.closeModal=null,Widget.prototype.destroy.call(this)}}}),Class(Sl.UI,"Paragraph").inherits(Widget)({HTML:"<p></p>",prototype:{init:function(t){Widget.prototype.init.call(this,t)},getElement:function(){return this.element},setText:function(t){return this.element.textContent=t,this},destroy:function(){return Widget.prototype.destroy.call(this),null}}});const{log:log}=console;Class(Sl,"App").includes(CustomEventSupport,NodeSupport)({prototype:{_body:null,_values:null,_hash:null,_ui:null,init:function(t){Object.assign(this,{percentage:10},t),this._body=document.body,this._hash=window.location.hash,this._ui={colorPicker:document.querySelector('input[type="color"]'),colorPickerBtn:document.querySelector("button[data-color-picker-btn]"),preview:document.querySelector(".preview__color"),rangeInput:document.querySelector('input[type="number"]'),input:document.querySelector('input[name="input"]'),randomColorBtn:document.querySelector(".random-color-btn"),infoBtn:document.querySelector("button[data-info-btn]")},this._ui.rangeInput.value=this.percentage},run:function(){var t;return t=this._isValidColorModel(this._hash)?this._hash:this._getRandomHexColor(),this._values=new Values,this.appendChild(new Sl.UI.ColorsCollection({name:"colorsContainer"})).renderColors().render(document.querySelector("main")),this.appendChild(new Sl.UI.CreditsModal({name:"creditsModal"})).render(this._body),this.updateUI(t),this._bindEvents(),this},_bindEvents:function(){return window.addEventListener("hashchange",this._hashChangeHandler.bind(this),!1),this._ui.colorPickerBtn.addEventListener("click",this._previewClickHandler.bind(this)),this._ui.colorPicker.addEventListener("change",this._colorPickerChangeHandler.bind(this)),this._ui.input.addEventListener("keypress",this._inputKeypressHandler.bind(this),!1),this._ui.rangeInput.addEventListener("change",this._rangeInputChangeHandler.bind(this)),this._ui.input.addEventListener("click",function(t){t.target.select()}.bind(this)),this._ui.randomColorBtn.addEventListener("click",this._randomColorClickHandler.bind(this)),this._ui.infoBtn.addEventListener("click",this._creditsClickHandler.bind(this)),this.creditsModal.bind("render",function(){var t=this;setTimeout((function(){t.creditsModal.activate()}),0)}.bind(this)),this},_hashChangeHandler:function(){var t=window.location.hash;return this._hash!==t&&this._isValidColorModel(t)&&this.updateUI(t),t=null,this},_previewClickHandler:function(){return this._ui.colorPicker.click(),this},_colorPickerChangeTimer:null,_colorPickerChangeHandler:function(){var t=this;return clearTimeout(t._colorPickerChangeTimer),t._colorPickerChangeTimer=setTimeout((function(){t.updateUI(t._ui.colorPicker.value)}),200),t},_inputKeypressHandler:function(t){var e;return 13===("number"==typeof t.which?t.which:t.keyCode)&&(e=this._ui.input.value,this._isValidColorModel(e)?(this.updateUI(e),this._ui.input.classList.remove("-error")):this._ui.input.classList.add("-error")),e=null,this},_rangeInputChangeHandler:function(t){var e=t.target;if(!e.validity.valid)return log("%cno valid","background: red; color: white"),e.classList.add("-error");this.percentage=Number(e.value),this.updateUI(this._values.hexString()),e.classList.remove("-error")},_creditsClickHandler:function(t){return t.preventDefault(),this.creditsModal.activate(),this},_randomColorClickHandler:function(t){return this.updateUI(this._getRandomHexColor())},_isValidColorModel:function(t){return!!Values.Utils.isHEX(t)||(!!Values.Utils.isRGB(t)||!!Values.Utils.isHSL(t))},_updateHash:function(t){return this._hash=window.location.hash=t,this},_getRandomHexColor:function(){return"#"+Math.random().toString(16).slice(2,8)},updateUI:function(t){var e;this._values.setColor(t),this._updateHash(this._values.hex.toUpperCase()),this._ui.preview.style.backgroundColor=this._values.hexString(),this._ui.colorPicker.value=this._values.hexString(),this._ui.input.value=this._values.hexString();const i=this._values.all(this.percentage);return this.colorsContainer.children.forEach((function(t,n){var r,s;if(!(r=i[n]))return t.deactivate();s=t.getElement(),t.activate(),t.element.classList.remove("current-color","-is-tint","-is-shade","-is-light","-is-dark"),t.element.classList.add("-is-"+(r.getBrightness()>50?"light":"dark")),t.setBackgroundColor(r.hexString()),r.isTint&&t.element.classList.add("-is-tint"),r.isShade&&t.element.classList.add("-is-shade"),r.percentage?t.percentage.setText(r.percentage+"%"):t.percentage.setText(),r.isBaseColor&&(s.classList.add("current-color"),e=s),t.hexLabel.setText(r.hexString()),r=s=null}),this),this._body.scrollTop=0,void 0!==e&&(this._body.scrollTop=e.getBoundingClientRect().top-80),e=null,this},destroy:function(){this._body=null,this._values=null,this._hash=null,this._ui=null,Widget.prototype.destroy.call(this)}}}),Shadowlord=new Sl.App({percentage:3}),Shadowlord.run(),window.Shadowlord=Shadowlord;