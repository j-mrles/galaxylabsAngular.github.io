import './polyfills.server.mjs';
import{a as At,b as Mt,c as Tt,f as St,l as Ft}from"./chunk-Z5W7FY2U.mjs";import{Aa as h,Ba as c,Ca as v,E as bt,F as ht,H as ft,J as gt,K as f,L as p,La as Et,N as V,P as l,Q as S,T as g,U as b,Ua as kt,W as vt,Ya as T,bb as Ct,c as ct,da as E,eb as Dt,f as dt,fa as C,ja as _t,ka as U,la as yt,n as B,o as lt,q as mt,qa as H,ra as xt,sa as wt,ua as It,v as ut,x as pt,ya as r,za as s}from"./chunk-JTMRCU5W.mjs";import{a as M}from"./chunk-5XUXGTUW.mjs";var Ot=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=g({type:t,selectors:[["app-navbar"]],standalone:!0,features:[v],decls:3,vars:0,consts:[["id","navbar"],["id","logonav","src","images/galaxylabsicon.png","alt","Galaxy Labs Logo"],["id","navigation"]],template:function(n,a){n&1&&(r(0,"nav",0),h(1,"img",1)(2,"div",2),s())},styles:["#logonav[_ngcontent-%COMP%]{max-height:50px;width:auto;vertical-align:middle;display:inline}#navbar[_ngcontent-%COMP%]{background-color:#000;position:fixed;top:0;width:100%;z-index:1000;box-shadow:0 2px 4px #0000001a;transition:top .3s;justify-content:space-between;align-items:center;padding:0 10px;display:flex}#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:left;display:block;color:#fff;text-align:center;padding:15px 20px;text-decoration:none;font-size:1em}#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#495057;color:#f8f9fa}"]});let e=t;return e})();var W;try{W=typeof Intl<"u"&&Intl.v8BreakIterator}catch{W=!1}var O=(()=>{let t=class t{constructor(i){this._platformId=i,this.isBrowser=this._platformId?Dt(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||W)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(n){return new(n||t)(l(_t))},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var F;function de(){if(F==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>F=!0}))}finally{F=F||!1}return F}function $(e){return de()?e:!!e.capture}function Rt(e){return e.composedPath?e.composedPath()[0]:e.target}function Nt(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Y(e){return Array.isArray(e)?e:[e]}function G(e){return e instanceof C?e.nativeElement:e}var Lt=new Set,D,le=(()=>{let t=class t{constructor(i,n){this._platform=i,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ue}matchMedia(i){return(this._platform.WEBKIT||this._platform.BLINK)&&me(i,this._nonce),this._matchMedia(i)}};t.\u0275fac=function(n){return new(n||t)(l(O),l(yt,8))},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function me(e,t){if(!Lt.has(e))try{D||(D=document.createElement("style"),t&&D.setAttribute("nonce",t),D.setAttribute("type","text/css"),document.head.appendChild(D)),D.sheet&&(D.sheet.insertRule(`@media ${e} {body{ }}`,0),Lt.add(e))}catch(o){console.error(o)}}function ue(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var zt=(()=>{let t=class t{constructor(i,n){this._mediaMatcher=i,this._zone=n,this._queries=new Map,this._destroySubject=new dt}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(i){return Pt(Y(i)).some(a=>this._registerQuery(a).mql.matches)}observe(i){let a=Pt(Y(i)).map(u=>this._registerQuery(u).observable),d=lt(a);return d=mt(d.pipe(pt(1)),d.pipe(bt(1),ut(0))),d.pipe(B(u=>{let x={matches:!1,breakpoints:{}};return u.forEach(({matches:I,query:m})=>{x.matches=x.matches||I,x.breakpoints[m]=I}),x}))}_registerQuery(i){if(this._queries.has(i))return this._queries.get(i);let n=this._mediaMatcher.matchMedia(i),d={observable:new ct(u=>{let x=I=>this._zone.run(()=>u.next(I));return n.addListener(x),()=>{n.removeListener(x)}}).pipe(ht(n),B(({matches:u})=>({query:i,matches:u})),ft(this._destroySubject)),mql:n};return this._queries.set(i,d),d}};t.\u0275fac=function(n){return new(n||t)(l(le),l(E))},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Pt(e){return e.map(t=>t.split(",")).reduce((t,o)=>t.concat(o)).map(t=>t.trim())}function Ut(e){return e.buttons===0||e.detail===0}function Ht(e){let t=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var A=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(A||{}),Bt="cdk-high-contrast-black-on-white",Vt="cdk-high-contrast-white-on-black",Z="cdk-high-contrast-active",Wt=(()=>{let t=class t{constructor(i,n){this._platform=i,this._document=n,this._breakpointSubscription=S(zt).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return A.NONE;let i=this._document.createElement("div");i.style.backgroundColor="rgb(1,2,3)",i.style.position="absolute",this._document.body.appendChild(i);let n=this._document.defaultView||window,a=n&&n.getComputedStyle?n.getComputedStyle(i):null,d=(a&&a.backgroundColor||"").replace(/ /g,"");switch(i.remove(),d){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return A.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return A.BLACK_ON_WHITE}return A.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let i=this._document.body.classList;i.remove(Z,Bt,Vt),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===A.BLACK_ON_WHITE?i.add(Z,Bt):n===A.WHITE_ON_BLACK&&i.add(Z,Vt)}}};t.\u0275fac=function(n){return new(n||t)(l(O),l(T))},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var X=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b({type:t}),t.\u0275inj=p({});let e=t;return e})();function ge(){return!0}var ve=new V("mat-sanity-checks",{providedIn:"root",factory:ge}),w=(()=>{let t=class t{constructor(i,n,a){this._sanityChecks=n,this._document=a,this._hasDoneGlobalChecks=!1,i._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(i){return Nt()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[i]}};t.\u0275fac=function(n){return new(n||t)(l(Wt),l(ve,8),l(T))},t.\u0275mod=b({type:t}),t.\u0275inj=p({imports:[X,X]});let e=t;return e})();var y=function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e}(y||{}),Q=class{constructor(t,o,i,n=!1){this._renderer=t,this.element=o,this.config=i,this._animationForciblyDisabledThroughCss=n,this.state=y.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},$t=$({passive:!0,capture:!0}),J=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let o=Rt(t);o&&this._events.get(t.type)?.forEach((i,n)=>{(n===o||n.contains(o))&&i.forEach(a=>a.handleEvent(t))})}}addHandler(t,o,i,n){let a=this._events.get(o);if(a){let d=a.get(i);d?d.add(n):a.set(i,new Set([n]))}else this._events.set(o,new Map([[i,new Set([n])]])),t.runOutsideAngular(()=>{document.addEventListener(o,this._delegateEventHandler,$t)})}removeHandler(t,o,i){let n=this._events.get(t);if(!n)return;let a=n.get(o);a&&(a.delete(i),a.size===0&&n.delete(o),n.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,$t)))}},Yt={enterDuration:225,exitDuration:150},_e=800,Gt=$({passive:!0,capture:!0}),Zt=["mousedown","touchstart"],Kt=["mouseup","mouseleave","touchend","touchcancel"],R=class R{constructor(t,o,i,n){this._target=t,this._ngZone=o,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=G(i))}fadeInRipple(t,o,i={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),a=M(M({},Yt),i.animation);i.centered&&(t=n.left+n.width/2,o=n.top+n.height/2);let d=i.radius||ye(t,o,n),u=t-n.left,x=o-n.top,I=a.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${u-d}px`,m.style.top=`${x-d}px`,m.style.height=`${d*2}px`,m.style.width=`${d*2}px`,i.color!=null&&(m.style.backgroundColor=i.color),m.style.transitionDuration=`${I}ms`,this._containerElement.appendChild(m);let ot=window.getComputedStyle(m),ce=ot.transitionProperty,at=ot.transitionDuration,P=ce==="none"||at==="0s"||at==="0s, 0s"||n.width===0&&n.height===0,k=new Q(this,m,i,P);m.style.transform="scale3d(1, 1, 1)",k.state=y.FADING_IN,i.persistent||(this._mostRecentTransientRipple=k);let N=null;return!P&&(I||a.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let rt=()=>{N&&(N.fallbackTimer=null),clearTimeout(st),this._finishRippleTransition(k)},z=()=>this._destroyRipple(k),st=setTimeout(z,I+100);m.addEventListener("transitionend",rt),m.addEventListener("transitioncancel",z),N={onTransitionEnd:rt,onTransitionCancel:z,fallbackTimer:st}}),this._activeRipples.set(k,N),(P||!I)&&this._finishRippleTransition(k),k}fadeOutRipple(t){if(t.state===y.FADING_OUT||t.state===y.HIDDEN)return;let o=t.element,i=M(M({},Yt),t.config.animation);o.style.transitionDuration=`${i.exitDuration}ms`,o.style.opacity="0",t.state=y.FADING_OUT,(t._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let o=G(t);!this._platform.isBrowser||!o||o===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=o,Zt.forEach(i=>{R._eventManager.addHandler(this._ngZone,i,o,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Kt.forEach(o=>{this._triggerElement.addEventListener(o,this,Gt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===y.FADING_IN?this._startFadeOutTransition(t):t.state===y.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let o=t===this._mostRecentTransientRipple,{persistent:i}=t.config;t.state=y.VISIBLE,!i&&(!o||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let o=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=y.HIDDEN,o!==null&&(t.element.removeEventListener("transitionend",o.onTransitionEnd),t.element.removeEventListener("transitioncancel",o.onTransitionCancel),o.fallbackTimer!==null&&clearTimeout(o.fallbackTimer)),t.element.remove()}_onMousedown(t){let o=Ut(t),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+_e;!this._target.rippleDisabled&&!o&&!i&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Ht(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let o=t.changedTouches;if(o)for(let i=0;i<o.length;i++)this.fadeInRipple(o[i].clientX,o[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let o=t.state===y.VISIBLE||t.config.terminateOnPointerUp&&t.state===y.FADING_IN;!t.config.persistent&&o&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Zt.forEach(o=>R._eventManager.removeHandler(o,t,this)),this._pointerUpEventsRegistered&&(Kt.forEach(o=>t.removeEventListener(o,this,Gt)),this._pointerUpEventsRegistered=!1))}};R._eventManager=new J;var qt=R;function ye(e,t,o){let i=Math.max(Math.abs(e-o.left),Math.abs(e-o.right)),n=Math.max(Math.abs(t-o.top),Math.abs(t-o.bottom));return Math.sqrt(i*i+n*n)}var Xt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b({type:t}),t.\u0275inj=p({imports:[w,w]});let e=t;return e})();var Qt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b({type:t}),t.\u0275inj=p({imports:[w,Ct,w]});let e=t;return e})();var Jt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b({type:t}),t.\u0275inj=p({imports:[w,Xt,w]});let e=t;return e})();var te=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b({type:t}),t.\u0275inj=p({imports:[w,w]});let e=t;return e})();var ee=(()=>{let t=class t{constructor(){this.services=[{icon:"computer",title:"Software Development",description:"We offer custom software development services."},{icon:"settings",title:"IT Consulting",description:"Our experts provide top-notch IT consulting services."},{icon:"cloud",title:"Cloud Solutions",description:"We deliver scalable cloud solutions to meet your business needs."}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=g({type:t,selectors:[["app-homepage"]],standalone:!0,features:[v],decls:83,vars:0,consts:[[1,"container"],["id","home",2,"position","relative","text-align","center","color","white"],["id","logo","src","images/galaxylabslogo.png","alt","Galaxy Labs Logo",2,"max-width","100%","height","auto"],[1,"slide-in-left",2,"font-size","2rem","margin-top","20px"],["href","https://www.instagram.com/galaxylabsinsta/","target","_blank"],[1,"button",2,"background-color","#00bcd4","color","white","border","none","padding","10px 20px","border-radius","4px","cursor","pointer","font-size","1rem"],["autoplay","","loop","","muted","","playsinline","","id","background-video",2,"position","absolute","top","0","left","0","width","100%","height","100%","object-fit","cover"],["src","images/medicalx.mp4","type","video/mp4"],[2,"position","relative","width","100%","height","100vh","overflow","hidden"],["src","images/earth-fade.png","alt","Background Image",2,"position","absolute","top","0","left","0","width","100%","height","100%","object-fit","cover"],["id","about",2,"position","absolute","top","50%","left","50%","transform","translate(-50%, -50%)","text-align","center","color","white","background","rgba(0, 0, 0, 0.5)","padding","20px","border-radius","8px"],["id","more-services",2,"background-color","black","color","white","padding","40px 100px"],[2,"color","white","text-align","center"],[1,"services-grid",2,"display","grid","grid-template-columns","repeat(auto-fill, minmax(250px, 1fr))","gap","20px"],[1,"service",2,"background-color","#333","padding","20px","border-radius","8px","margin-bottom","20px"],["href","#learn-more-custom-software",1,"learn-more",2,"color","#00bcd4","text-decoration","none"],["href","#learn-more-mobile-apps",1,"learn-more",2,"color","#00bcd4","text-decoration","none"],["href","#learn-more-web-app-dev",1,"learn-more",2,"color","#00bcd4","text-decoration","none"],["href","#learn-more-api-integration",1,"learn-more",2,"color","#00bcd4","text-decoration","none"],["src","images/galaxy.png","alt","Background Image",2,"position","absolute","top","0","left","0","width","100%","height","100%","object-fit","cover","z-index","-1"],["id","software-problem",2,"display","flex","flex-wrap","wrap","justify-content","space-between","position","relative","padding","100px 20px"],[1,"left-section",2,"flex","1","min-width","300px","display","flex","align-items","center","justify-content","center","text-align","center"],[1,"stacked-text",2,"color","white","font-size","2rem","line-height","1.5","margin","0"],[1,"right-section",2,"flex","1","min-width","300px","padding","20px","background-color","#333","border-radius","8px"],[1,"info-section",2,"text-align","center"],[2,"margin-bottom","10px"],[2,"margin-bottom","20px"],["href","https://www.instagram.com/galaxylabsinsta/",2,"text-decoration","none","color","white"],[2,"margin","0","font-size","1.5rem","color","#00bcd4"],["id","genesis",2,"position","relative","text-align","center","color","white","padding","100px 20px","height","100vh","overflow","hidden","background","rgba(0, 0, 0, 0.7)"],["autoplay","","loop","","muted","","playsinline","","id","background-video",2,"position","absolute","top","0","left","0","width","100%","height","100%","object-fit","cover","z-index","-1"],["src","images/medical_background.mp4","type","video/mp4"],[2,"position","relative","z-index","1","display","flex","flex-direction","column","align-items","center","justify-content","center","height","100%","text-align","center"],[2,"font-size","3rem","margin-bottom","20px"],[2,"font-size","1.25rem","margin-bottom","40px","max-width","600px","line-height","1.5"],[1,"button",2,"background-color","#00bcd4","color","white","border","none","padding","15px 30px","border-radius","4px","cursor","pointer","font-size","1.25rem","transition","background-color 0.3s"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"header",1),h(2,"img",2),r(3,"p",3),c(4,"Innovating the Future"),s(),r(5,"a",4)(6,"button",5),c(7," Learn More "),s()(),r(8,"video",6),h(9,"source",7),c(10," Your browser does not support the video tag. "),s()(),r(11,"div",8),h(12,"img",9),r(13,"section",10)(14,"h2"),c(15,"What We Do"),s(),r(16,"p"),c(17," At Galaxy Labs, we are dedicated to pushing the boundaries of technology to create innovative solutions that improve lives. Our team of experts is passionate about developing cutting-edge software and hardware to meet the needs of our clients and drive the tech industry forward. "),s()()(),r(18,"div",11)(19,"h2",12),c(20,"More Services"),s(),r(21,"div",13)(22,"div",14)(23,"h3"),c(24,"Software Solutions"),s(),r(25,"p"),c(26,"Our team of experienced developers will work closely with you to understand your business requirements, goals, and pain points to develop a solution that is tailored to your unique needs."),s(),r(27,"a",15),c(28,"Learn More"),s()(),r(29,"div",14)(30,"h3"),c(31,"Mobile Applications"),s(),r(32,"p"),c(33,"Our team of developers can create, design, and rebuild any application to attract more customers and increase your business revenue."),s(),r(34,"a",16),c(35,"Learn More"),s()(),r(36,"div",14)(37,"h3"),c(38,"Web Applications"),s(),r(39,"p"),c(40,"Our team of experienced developers has a deep understanding of the latest technologies and frameworks that are essential for creating high-performance, scalable, and secure web applications."),s(),r(41,"a",17),c(42,"Learn More"),s()(),r(43,"div",14)(44,"h3"),c(45,"API Integration"),s(),r(46,"p"),c(47,"We can integrate your off-the-shelf software utilizing API configurations into your custom software. Whether you need to integrate your CRM system with your accounting software or connect your e-commerce platform with your shipping provider, our team can help."),s(),r(48,"a",18),c(49,"Learn More"),s()()()(),r(50,"div",8),h(51,"img",19),r(52,"div",20)(53,"div",21)(54,"p",22),c(55," Building."),h(56,"br")(57,"br"),c(58," Innovating."),h(59,"br")(60,"br"),c(61," Together. "),s()(),r(62,"div",23)(63,"div",24)(64,"h2",25),c(65,"Have a Software Problem?"),s(),r(66,"p",26),c(67,"Together, let\u2019s find a solution."),s(),r(68,"a",27)(69,"h1",28),c(70,"Contact Us Here"),s()()()()()(),r(71,"div",29)(72,"video",30),h(73,"source",31),c(74," Your browser does not support the video tag. "),s(),r(75,"div",32)(76,"h2",33),c(77,"Introducing Genesis"),s(),r(78,"p",34),c(79," Using algorithms and medical data, Genesis offers health assessments and accurate diagnostics. "),s(),r(80,"a",4)(81,"button",35),c(82," Launching soon "),s()()()()())},dependencies:[Qt,Jt,te],styles:[".container[_ngcontent-%COMP%]{margin:0 auto}header#home[_ngcontent-%COMP%]{position:relative;overflow:hidden;text-align:center;color:#fff;padding:280px 20px;top:-20%}#logo[_ngcontent-%COMP%]{max-width:1000px;margin-bottom:20px}.button[_ngcontent-%COMP%], .learn-more[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:10px 20px;font-size:1rem;border-radius:5px;cursor:pointer;text-decoration:none}#background-video[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-1}#about[_ngcontent-%COMP%]{text-align:center;padding:50px 20px}#about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:20px}#about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.6}#more-services[_ngcontent-%COMP%]{background:#343a40;color:#fff;padding:50px 20px}#more-services[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:30px}.services-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px}#software-problem[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}"]});let e=t;return e})();var ie=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=g({type:t,selectors:[["app-footer"]],standalone:!0,features:[v],decls:4,vars:0,consts:[[2,"background-color","#000000","color","white","padding","20px 0","text-align","center"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"footer")(2,"p"),c(3,"\xA9 2024 Galaxy Labs. All rights reserved."),s()()())}});let e=t;return e})();var ne=(()=>{let t=class t{constructor(){this.title="galaxylabs"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=g({type:t,selectors:[["app-root"]],standalone:!0,features:[v],decls:3,vars:0,template:function(n,a){n&1&&h(0,"app-navbar")(1,"app-homepage")(2,"app-footer")},dependencies:[Ot,ee,ie],styles:["body[_ngcontent-%COMP%]{margin:0;padding:0;font-family:Arial,sans-serif;font-size:16px;line-height:1.6;color:#333;overflow-x:hidden;position:relative;height:100vh;width:100vw;background-color:#000}#background-video[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-1}.container[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center}header[_ngcontent-%COMP%]{margin:0}#logo[_ngcontent-%COMP%]{width:150px}.slide-in-left[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideInLeft 1s ease-out}.button[_ngcontent-%COMP%]{background-color:#fff;border:none;color:#333;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:10px;cursor:pointer;border-radius:5px}@keyframes _ngcontent-%COMP%_slideInLeft{0%{transform:translate(-100%);opacity:0}to{transform:translate(0);opacity:1}}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin:0;font-weight:400;color:#007bff}p[_ngcontent-%COMP%]{margin:0;padding:0;line-height:1.8}a[_ngcontent-%COMP%]{text-decoration:none;color:#007bff;transition:color .3s ease}a[_ngcontent-%COMP%]:hover{color:#0056b3}ul[_ngcontent-%COMP%]{padding-left:20px}button[_ngcontent-%COMP%]{font-family:inherit;cursor:pointer;border-radius:4px}img[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block}.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:20px}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{box-sizing:border-box}header[_ngcontent-%COMP%]{margin-bottom:50px}section[_ngcontent-%COMP%]{padding:50px 0;background-color:#fff;border-radius:8px;margin-bottom:50px}footer[_ngcontent-%COMP%]{background-color:#000;color:#fff;text-align:center;padding:20px 0;font-size:14px;margin-top:50px}@media (max-width: 768px){.container[_ngcontent-%COMP%]{padding:10px}section[_ngcontent-%COMP%]{padding:30px 15px}}"]});let e=t;return e})();var oe=[];var we="@",Ie=(()=>{let t=class t{constructor(i,n,a,d,u){this.doc=i,this.delegate=n,this.zone=a,this.animationType=d,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=S(xt,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-TLROYA4U.mjs").then(n=>n)).catch(n=>{throw new gt(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:a})=>{this._engine=n(this.animationType,this.doc);let d=new a(this.delegate,this._engine,this.zone);return this.delegate=d,d})}createRenderer(i,n){let a=this.delegate.createRenderer(i,n);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let d=new nt(a);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let x=u.createRenderer(i,n);d.use(x),this.scheduler?.notify(9)}).catch(u=>{d.use(a)}),d}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(n){H()},t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})(),nt=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let o of this.replay)o(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,o){return this.delegate.createElement(t,o)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,o){this.delegate.appendChild(t,o)}insertBefore(t,o,i,n){this.delegate.insertBefore(t,o,i,n)}removeChild(t,o,i){this.delegate.removeChild(t,o,i)}selectRootElement(t,o){return this.delegate.selectRootElement(t,o)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,o,i,n){this.delegate.setAttribute(t,o,i,n)}removeAttribute(t,o,i){this.delegate.removeAttribute(t,o,i)}addClass(t,o){this.delegate.addClass(t,o)}removeClass(t,o){this.delegate.removeClass(t,o)}setStyle(t,o,i,n){this.delegate.setStyle(t,o,i,n)}removeStyle(t,o,i){this.delegate.removeStyle(t,o,i)}setProperty(t,o,i){this.shouldReplay(o)&&this.replay.push(n=>n.setProperty(t,o,i)),this.delegate.setProperty(t,o,i)}setValue(t,o){this.delegate.setValue(t,o)}listen(t,o,i){return this.shouldReplay(o)&&this.replay.push(n=>n.listen(t,o,i)),this.delegate.listen(t,o,i)}shouldReplay(t){return this.replay!==null&&t.startsWith(we)}};function ae(e="animations"){return It("NgAsyncAnimations"),vt([{provide:wt,useFactory:(t,o,i)=>new Ie(t,o,i,e),deps:[T,At,E]},{provide:U,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var re={providers:[Et({eventCoalescing:!0}),Ft(oe),Tt(),ae()]};var Ee={providers:[St()]},se=kt(re,Ee);var ke=()=>Mt(ne,se),Fn=ke;export{Fn as a};
