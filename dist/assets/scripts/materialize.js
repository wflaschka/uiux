// Check for jQuery.
if (typeof(jQuery) === 'undefined') {
  var jQuery;
  // Check if require is a defined function.
  if (typeof(require) === 'function') {
    jQuery = $ = require('jquery');
  // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}

/*
 * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(['jquery'], function ($) {
			return factory($);
		});
	} else if (typeof module === "object" && typeof module.exports === "object") {
		exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
})(function($){

// Preserve the original jQuery "swing" easing as "jswing"
$.easing['jswing'] = $.easing['swing'];

var pow = Math.pow,
	sqrt = Math.sqrt,
	sin = Math.sin,
	cos = Math.cos,
	PI = Math.PI,
	c1 = 1.70158,
	c2 = c1 * 1.525,
	c3 = c1 + 1,
	c4 = ( 2 * PI ) / 3,
	c5 = ( 2 * PI ) / 4.5;

// x is the fraction of animation progress, in the range 0..1
function bounceOut(x) {
	var n1 = 7.5625,
		d1 = 2.75;
	if ( x < 1/d1 ) {
		return n1*x*x;
	} else if ( x < 2/d1 ) {
		return n1*(x-=(1.5/d1))*x + .75;
	} else if ( x < 2.5/d1 ) {
		return n1*(x-=(2.25/d1))*x + .9375;
	} else {
		return n1*(x-=(2.625/d1))*x + .984375;
	}
}

$.extend( $.easing,
{
	def: 'easeOutQuad',
	swing: function (x) {
		return $.easing[$.easing.def](x);
	},
	easeInQuad: function (x) {
		return x * x;
	},
	easeOutQuad: function (x) {
		return 1 - ( 1 - x ) * ( 1 - x );
	},
	easeInOutQuad: function (x) {
		return x < 0.5 ?
			2 * x * x :
			1 - pow( -2 * x + 2, 2 ) / 2;
	},
	easeInCubic: function (x) {
		return x * x * x;
	},
	easeOutCubic: function (x) {
		return 1 - pow( 1 - x, 3 );
	},
	easeInOutCubic: function (x) {
		return x < 0.5 ?
			4 * x * x * x :
			1 - pow( -2 * x + 2, 3 ) / 2;
	},
	easeInQuart: function (x) {
		return x * x * x * x;
	},
	easeOutQuart: function (x) {
		return 1 - pow( 1 - x, 4 );
	},
	easeInOutQuart: function (x) {
		return x < 0.5 ?
			8 * x * x * x * x :
			1 - pow( -2 * x + 2, 4 ) / 2;
	},
	easeInQuint: function (x) {
		return x * x * x * x * x;
	},
	easeOutQuint: function (x) {
		return 1 - pow( 1 - x, 5 );
	},
	easeInOutQuint: function (x) {
		return x < 0.5 ?
			16 * x * x * x * x * x :
			1 - pow( -2 * x + 2, 5 ) / 2;
	},
	easeInSine: function (x) {
		return 1 - cos( x * PI/2 );
	},
	easeOutSine: function (x) {
		return sin( x * PI/2 );
	},
	easeInOutSine: function (x) {
		return -( cos( PI * x ) - 1 ) / 2;
	},
	easeInExpo: function (x) {
		return x === 0 ? 0 : pow( 2, 10 * x - 10 );
	},
	easeOutExpo: function (x) {
		return x === 1 ? 1 : 1 - pow( 2, -10 * x );
	},
	easeInOutExpo: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			pow( 2, 20 * x - 10 ) / 2 :
			( 2 - pow( 2, -20 * x + 10 ) ) / 2;
	},
	easeInCirc: function (x) {
		return 1 - sqrt( 1 - pow( x, 2 ) );
	},
	easeOutCirc: function (x) {
		return sqrt( 1 - pow( x - 1, 2 ) );
	},
	easeInOutCirc: function (x) {
		return x < 0.5 ?
			( 1 - sqrt( 1 - pow( 2 * x, 2 ) ) ) / 2 :
			( sqrt( 1 - pow( -2 * x + 2, 2 ) ) + 1 ) / 2;
	},
	easeInElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			-pow( 2, 10 * x - 10 ) * sin( ( x * 10 - 10.75 ) * c4 );
	},
	easeOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 :
			pow( 2, -10 * x ) * sin( ( x * 10 - 0.75 ) * c4 ) + 1;
	},
	easeInOutElastic: function (x) {
		return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
			-( pow( 2, 20 * x - 10 ) * sin( ( 20 * x - 11.125 ) * c5 )) / 2 :
			pow( 2, -20 * x + 10 ) * sin( ( 20 * x - 11.125 ) * c5 ) / 2 + 1;
	},
	easeInBack: function (x) {
		return c3 * x * x * x - c1 * x * x;
	},
	easeOutBack: function (x) {
		return 1 + c3 * pow( x - 1, 3 ) + c1 * pow( x - 1, 2 );
	},
	easeInOutBack: function (x) {
		return x < 0.5 ?
			( pow( 2 * x, 2 ) * ( ( c2 + 1 ) * 2 * x - c2 ) ) / 2 :
			( pow( 2 * x - 2, 2 ) *( ( c2 + 1 ) * ( x * 2 - 2 ) + c2 ) + 2 ) / 2;
	},
	easeInBounce: function (x) {
		return 1 - bounceOut( 1 - x );
	},
	easeOutBounce: bounceOut,
	easeInOutBounce: function (x) {
		return x < 0.5 ?
			( 1 - bounceOut( 1 - 2 * x ) ) / 2 :
			( 1 + bounceOut( 2 * x - 1 ) ) / 2;
	}
});

});
// Custom Easing
jQuery.extend( jQuery.easing,
{
  easeInOutMaterial: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return c/4*((t-=2)*t*t + 2) + b;
  }
});
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));

!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));

// Required for Meteor package, the use of window prevents export by Meteor
(function(window){
  if(window.Package){
    Materialize = {};
  } else {
    window.Materialize = {};
  }
})(window);


/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */
(function(window) {
  var lastTime = 0,
    vendors = ['webkit', 'moz'],
    requestAnimationFrame = window.requestAnimationFrame,
    cancelAnimationFrame = window.cancelAnimationFrame,
    i = vendors.length;

  // try to un-prefix existing raf
  while (--i >= 0 && !requestAnimationFrame) {
    requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
    cancelAnimationFrame = window[vendors[i] + 'CancelRequestAnimationFrame'];
  }

  // polyfill with setTimeout fallback
  // heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function(callback) {
      var now = +Date.now(),
        nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function() {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    cancelAnimationFrame = clearTimeout;
  }

  // export to window
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
}(window));


/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */
Materialize.objectSelectorString = function(obj) {
  var tagStr = obj.prop('tagName') || '';
  var idStr = obj.attr('id') || '';
  var classStr = obj.attr('class') || '';
  return (tagStr + idStr + classStr).replace(/\s/g,'');
};


// Unique Random ID
Materialize.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
Materialize.escapeHash = function(hash) {
  return hash.replace( /(:|\.|\[|\]|,|=)/g, "\\$1" );
};

Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function(){
        if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
        }
    });
    return isFixed;
};


/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var getTime = (Date.now || function () {
  return new Date().getTime();
});


/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
Materialize.throttle = function(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  options || (options = {});
  var later = function () {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function () {
    var now = getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};


// Velocity has conflicts when loaded with jQuery, this will check for it
// First, check if in noConflict mode
var Vel;
if (jQuery) {
  Vel = jQuery.Velocity;
} else if ($) {
  Vel = $.Velocity;
} else {
  Vel = Velocity;
}

(function ($) {
  $.fn.collapsible = function(options, methodParam) {
    var defaults = {
      accordion: undefined,
      onOpen: undefined,
      onClose: undefined
    };

    var methodName = options;
    options = $.extend(defaults, options);


    return this.each(function() {

      var $this = $(this);

      var $panel_headers = $(this).find('> li > .collapsible-header');

      var collapsible_type = $this.data("collapsible");

      /****************
      Helper Functions
      ****************/

      // Accordion Open
      function accordionOpen(object) {
        $panel_headers = $this.find('> li > .collapsible-header');
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        }
        else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }

        $panel_headers.not(object).removeClass('active').parent().removeClass('active');

        // Close previously open accordion elements.
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).each(function() {
          if ($(this).is(':visible')) {
            $(this).slideUp({
              duration: 350,
              easing: "easeOutQuart",
              queue: false,
              complete:
                function() {
                  $(this).css('height', '');
                  execCallbacks($(this).siblings('.collapsible-header'));
                }
            });
          }
        });
      }

      // Expandable Open
      function expandableOpen(object) {
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        }
        else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
        else {
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
      }

      // Open collapsible. object: .collapsible-header
      function collapsibleOpen(object, noToggle) {
        if (!noToggle) {
          object.toggleClass('active');
        }

        if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
          accordionOpen(object);
        } else { // Handle Expandables
          expandableOpen(object);
        }

        execCallbacks(object);
      }

      // Handle callbacks
      function execCallbacks(object) {
        if (object.hasClass('active')) {
          if (typeof(options.onOpen) === "function") {
            options.onOpen.call(this, object.parent());
          }
        } else {
          if (typeof(options.onClose) === "function") {
            options.onClose.call(this, object.parent());
          }
        }
      }

      /**
       * Check if object is children of panel header
       * @param  {Object}  object Jquery object
       * @return {Boolean} true if it is children
       */
      function isChildrenOfPanelHeader(object) {

        var panelHeader = getPanelHeader(object);

        return panelHeader.length > 0;
      }

      /**
       * Get panel header from a children element
       * @param  {Object} object Jquery object
       * @return {Object} panel header object
       */
      function getPanelHeader(object) {

        return object.closest('li > .collapsible-header');
      }


      // Turn off any existing event handlers
      function removeEventHandlers() {
        $this.off('click.collapse', '> li > .collapsible-header');
      }

      /*****  End Helper Functions  *****/


      // Methods
      if (methodName === 'destroy') {
        removeEventHandlers();
        return;
      } else if (methodParam >= 0 &&
          methodParam < $panel_headers.length) {
        var $curr_header = $panel_headers.eq(methodParam);
        if ($curr_header.length &&
            (methodName === 'open' ||
            (methodName === 'close' &&
            $curr_header.hasClass('active')))) {
          collapsibleOpen($curr_header);
        }
        return;
      }


      removeEventHandlers();


      // Add click handler to only direct collapsible header children
      $this.on('click.collapse', '> li > .collapsible-header', function(e) {
        var element = $(e.target);

        if (isChildrenOfPanelHeader(element)) {
          element = getPanelHeader(element);
        }

        collapsibleOpen(element);
      });


      // Open first active
      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
        collapsibleOpen($panel_headers.filter('.active').first(), true);

      } else { // Handle Expandables
        $panel_headers.filter('.active').each(function() {
          collapsibleOpen($(this), true);
        });
      }

    });
  };

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
}( jQuery ));
(function ($) {

  // Add posibility to scroll to selected option
  // usefull for select for example
  $.fn.scrollTo = function(elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (options) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    };

    // Open dropdown.
    if (options === "open") {
      this.each(function() {
        $(this).trigger('open');
      });
      return false;
    }

    // Close dropdown.
    if (options === "close") {
      this.each(function() {
        $(this).trigger('close');
      });
      return false;
    }

    this.each(function(){
      var origin = $(this);
      var curr_options = $.extend({}, defaults, options);
      var isFocused = false;

      // Dropdown menu
      var activates = $("#"+ origin.attr('data-activates'));

      function updateOptions() {
        if (origin.data('induration') !== undefined)
          curr_options.inDuration = origin.data('induration');
        if (origin.data('outduration') !== undefined)
          curr_options.outDuration = origin.data('outduration');
        if (origin.data('constrainwidth') !== undefined)
          curr_options.constrainWidth = origin.data('constrainwidth');
        if (origin.data('hover') !== undefined)
          curr_options.hover = origin.data('hover');
        if (origin.data('gutter') !== undefined)
          curr_options.gutter = origin.data('gutter');
        if (origin.data('beloworigin') !== undefined)
          curr_options.belowOrigin = origin.data('beloworigin');
        if (origin.data('alignment') !== undefined)
          curr_options.alignment = origin.data('alignment');
        if (origin.data('stoppropagation') !== undefined)
          curr_options.stopPropagation = origin.data('stoppropagation');
      }

      updateOptions();

      // Attach dropdown to its activator
      origin.after(activates);

      /*
        Helper function to position and resize dropdown.
        Used in hover and click handler.
      */
      function placeDropdown(eventType) {
        // Check for simultaneous focus and click events.
        if (eventType === 'focus') {
          isFocused = true;
        }

        // Check html data attributes
        updateOptions();

        // Set Dropdown state
        activates.addClass('active');
        origin.addClass('active');

        var originWidth = origin[0].getBoundingClientRect().width;

        // Constrain width
        if (curr_options.constrainWidth === true) {
          activates.css('width', originWidth);

        } else {
          activates.css('white-space', 'nowrap');
        }

        // Offscreen detection
        var windowHeight = window.innerHeight;
        var originHeight = origin.innerHeight();
        var offsetLeft = origin.offset().left;
        var offsetTop = origin.offset().top - $(window).scrollTop();
        var currAlignment = curr_options.alignment;
        var gutterSpacing = 0;
        var leftPosition = 0;

        // Below Origin
        var verticalOffset = 0;
        if (curr_options.belowOrigin === true) {
          verticalOffset = originHeight;
        }

        // Check for scrolling positioned container.
        var scrollYOffset = 0;
        var scrollXOffset = 0;
        var wrapper = origin.parent();
        if (!wrapper.is('body')) {
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
            scrollYOffset = wrapper[0].scrollTop;
          }
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
            scrollXOffset = wrapper[0].scrollLeft;
          }
        }


        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          // Dropdown goes past screen on right, force right alignment
          currAlignment = 'right';

        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          // Dropdown goes past screen on left, force left alignment
          currAlignment = 'left';
        }
        // Vertical bottom offscreen detection
        if (offsetTop + activates.innerHeight() > windowHeight) {
          // If going upwards still goes offscreen, just crop height of dropdown.
          if (offsetTop + originHeight - activates.innerHeight() < 0) {
            var adjustedHeight = windowHeight - offsetTop - verticalOffset;
            activates.css('max-height', adjustedHeight);
          } else {
            // Flow upwards.
            if (!verticalOffset) {
              verticalOffset += originHeight;
            }
            verticalOffset -= activates.innerHeight();
          }
        }

        // Handle edge alignment
        if (currAlignment === 'left') {
          gutterSpacing = curr_options.gutter;
          leftPosition = origin.position().left + gutterSpacing;
        }
        else if (currAlignment === 'right') {
          // Material icons fix
          activates
            .stop(true, true)
            .css({
              opacity: 0,
              left: 0
            })

          var offsetRight = origin.position().left + originWidth - activates.width();
          gutterSpacing = -curr_options.gutter;
          leftPosition =  offsetRight + gutterSpacing;
        }

        // Position dropdown
        activates.css({
          position: 'absolute',
          top: origin.position().top + verticalOffset + scrollYOffset,
          left: leftPosition + scrollXOffset
        });

        // Show dropdown
        activates
          .slideDown({
            queue: false,
            duration: curr_options.inDuration,
            easing: 'easeOutCubic',
            complete: function() {
              $(this).css('height', '');
            }
          })
          .animate( {opacity: 1}, {queue: false, duration: curr_options.inDuration, easing: 'easeOutSine'});

        // Add click close handler to document
        setTimeout(function() {
          $(document).on('click.'+ activates.attr('id'), function (e) {
            hideDropdown();
            $(document).off('click.'+ activates.attr('id'));
          });
        }, 0);
      }

      function hideDropdown() {
        // Check for simultaneous focus and click events.
        isFocused = false;
        activates.fadeOut(curr_options.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        $(document).off('click.'+ activates.attr('id'));
        setTimeout(function() { activates.css('max-height', ''); }, curr_options.outDuration);
      }

      // Hover
      if (curr_options.hover) {
        var open = false;
        origin.off('click.' + origin.attr('id'));
        // Hover handler to show dropdown
        origin.on('mouseenter', function(e){ // Mouse over
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', function(e){
          // If hover on origin then to something other than dropdown content, then close
          var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
          if(!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        activates.on('mouseleave', function(e){ // Mouse out
          var toEl = e.toElement || e.relatedTarget;
          if(!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        // Click
      } else {
        // Click handler to show dropdown
        origin.off('click.' + origin.attr('id'));
        origin.on('click.'+origin.attr('id'), function(e){
          if (!isFocused) {
            if ( origin[0] == e.currentTarget &&
                 !origin.hasClass('active') &&
                 ($(e.target).closest('.dropdown-content').length === 0)) {
              e.preventDefault(); // Prevents button click from moving window
              if (curr_options.stopPropagation) {
                e.stopPropagation();
              }
              placeDropdown('click');
            }
            // If origin is clicked and menu is open, close menu
            else if (origin.hasClass('active')) {
              hideDropdown();
              $(document).off('click.'+ activates.attr('id'));
            }
          }
        });

      } // End else

      // Listen to open and close event - useful for select component
      origin.on('open', function(e, eventType) {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);


    });
  }; // End dropdown plugin

  $(document).ready(function(){
    $('.dropdown-button').dropdown();
  });
}( jQuery ));

(function($) {
  'use strict';

  let _defaults = {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    ready: undefined,
    complete: undefined,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  };


  /**
   * @class
   *
   */
  class Modal {
    /**
     * Construct Modal instance and set up overlay
     * @constructor
     * @param {jQuery} $el
     * @param {Object} options
     */
    constructor($el, options) {

      // If exists, destroy and reinitialize
      if (!!$el[0].M_Modal) {
        $el[0].M_Modal.destroy();
      }

      /**
       * The jQuery element
       * @type {jQuery}
       */
      this.$el = $el;

      /**
       * Options for the modal
       * @member Modal#options
       * @prop {Number} [opacity=0.5] - Opacity of the modal overlay
       * @prop {Number} [inDuration=250] - Length in ms of enter transition
       * @prop {Number} [outDuration=250] - Length in ms of exit transition
       * @prop {Function} ready - Callback function called when modal is finished entering
       * @prop {Function} complete - Callback function called when modal is finished exiting
       * @prop {Boolean} [dismissible=true] - Allow modal to be dismissed by keyboard or overlay click
       * @prop {String} [startingTop='4%'] - startingTop
       * @prop {String} [endingTop='10%'] - endingTop
       */
      this.options = $.extend({}, Modal.defaults, options);

      /**
       * Describes open/close state of modal
       * @type {Boolean}
       */
      this.isOpen = false;

      this.$el[0].M_Modal = this;
      this.id = $el.attr('id');
      this.openingTrigger = undefined;
      this.$overlay = $('<div class="modal-overlay"></div>');

      Modal._increment++;
      Modal._count++;
      this.$overlay[0].style.zIndex = 1000 + Modal._increment * 2;
      this.$el[0].style.zIndex = 1000 + Modal._increment * 2 + 1;
      this.setupEventHandlers();
    }

    static get defaults() {
      return _defaults;
    }

    static init($els, options) {
      let arr = [];
      $els.each(function() {
        arr.push(new Modal($(this), options));
      });
      return arr;
    }

    /**
     * Get Instance
     */
    getInstance() {
      return this;
    }

    /**
     * Teardown component
     */
    destroy() {
      this.removeEventHandlers();
      this.$el[0].removeAttribute('style')
      if (!!this.$overlay[0].parentNode) {
        this.$overlay[0].parentNode.removeChild(this.$overlay[0]);
      }
      this.$el[0].M_Modal = undefined;
      Modal._count--;
    }

    /**
     * Setup Event Handlers
     */
    setupEventHandlers() {
      this.handleOverlayClickBound = this.handleOverlayClick.bind(this);
      this.handleModalCloseClickBound = this.handleModalCloseClick.bind(this);

      if (Modal._count === 1) {
        document.addEventListener('click', this.handleTriggerClick);
      }
      this.$overlay[0].addEventListener('click', this.handleOverlayClickBound);
      this.$el[0].addEventListener('click', this.handleModalCloseClickBound);
    }

    /**
     * Remove Event Handlers
     */
    removeEventHandlers() {
      if (Modal._count === 0) {
        document.removeEventListener('click', this.handleTriggerClick);
      }
      this.$overlay[0].removeEventListener('click', this.handleOverlayClickBound);
      this.$el[0].removeEventListener('click', this.handleModalCloseClickBound);
    }

    /**
     * Handle Trigger Click
     * @param {Event} e
     */
    handleTriggerClick(e) {
      let $trigger =  $(e.target).closest('.modal-trigger');
      if (e.target && $trigger.length) {
        let modalId = $trigger[0].getAttribute('href');
        if (modalId) {
          modalId = modalId.slice(1);
        } else {
          modalId = $trigger[0].getAttribute('data-target');
        }
        let modalInstance = document.getElementById(modalId).M_Modal;
        if (modalInstance) {
          modalInstance.open($trigger);
        }
        e.preventDefault();
      }
    }

    /**
     * Handle Overlay Click
     */
    handleOverlayClick() {
      if (this.options.dismissible) {
        this.close();
      }
    }

    /**
     * Handle Modal Close Click
     * @param {Event} e
     */
    handleModalCloseClick(e) {
      let $closeTrigger =  $(e.target).closest('.modal-close');
      if (e.target && $closeTrigger.length) {
        this.close();
      }
    }

    /**
     * Handle Keydown
     * @param {Event} e
     */
    handleKeydown(e) {
      // ESC key
      if (e.keyCode === 27 && this.options.dismissible) {
        this.close();
      }
    }

    /**
     * Animate in modal
     */
    animateIn() {
      // Set initial styles
      $.extend(this.$el[0].style, {
        display: 'block',
        opacity: 0
      });
      $.extend(this.$overlay[0].style, {
        display: 'block',
        opacity: 0
      });

      // Animate overlay
      Vel(
        this.$overlay[0],
        {opacity: this.options.opacity},
        {duration: this.options.inDuration, queue: false, ease: 'easeOutCubic'}
      );


      // Define modal animation options
      let enterVelocityOptions = {
        duration: this.options.inDuration,
        queue: false,
        ease: 'easeOutCubic',
        // Handle modal ready callback
        complete: () => {
          if (typeof(this.options.ready) === 'function') {
            this.options.ready.call(this, this.$el, this.openingTrigger);
          }
        }
      };

      // Bottom sheet animation
      if (this.$el[0].classList.contains('bottom-sheet')) {
        Vel(
          this.$el[0],
          {bottom: 0, opacity: 1},
          enterVelocityOptions);

      // Normal modal animation
      } else {
        Vel.hook(this.$el[0], 'scaleX', 0.7);
        this.$el[0].style.top = this.options.startingTop;
        Vel(
          this.$el[0],
          {top: this.options.endingTop, opacity: 1, scaleX: 1},
          enterVelocityOptions
        );
      }
    }

    /**
     * Animate out modal
     */
    animateOut() {
      // Animate overlay
      Vel(
        this.$overlay[0],
        { opacity: 0},
        {duration: this.options.outDuration, queue: false, ease: 'easeOutQuart'}
      );

      // Define modal animation options
      var exitVelocityOptions = {
        duration: this.options.outDuration,
        queue: false,
        ease: 'easeOutCubic',
        // Handle modal ready callback
        complete: () => {
          this.$el[0].style.display = 'none';
          // Call complete callback
          if (typeof(this.options.complete) === 'function') {
            this.options.complete.call(this, this.$el);
          }
          this.$overlay[0].remove();
        }
      };

      // Bottom sheet animation
      if (this.$el[0].classList.contains('bottom-sheet')) {
        Vel(
          this.$el[0],
          {bottom: '-100%', opacity: 0},
          exitVelocityOptions
        );

      // Normal modal animation
      } else {
        Vel(
          this.$el[0],
          {top: this.options.startingTop, opacity: 0, scaleX: 0.7},
          exitVelocityOptions
        );
      }
    }


    /**
     * Open Modal
     * @param {jQuery} [$trigger]
     */
    open($trigger) {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true;
      let body = document.body;
      body.style.overflow = 'hidden';
      this.$el[0].classList.add('open');
      body.appendChild(this.$overlay[0]);

      // Set opening trigger, undefined indicates modal was opened by javascript
      this.openingTrigger = !!$trigger ? $trigger : undefined;


      if (this.options.dismissible) {
        this.handleKeydownBound = this.handleKeydown.bind(this);
        document.addEventListener('keydown', this.handleKeydownBound);
      }

      this.animateIn();

      return this;
    }

    /**
     * Close Modal
     */
    close() {
      if (!this.isOpen) {
        return;
      }

      this.isOpen = false;
      this.$el[0].classList.remove('open');
      document.body.style.overflow = null;

      if (this.options.dismissible) {
        document.removeEventListener('keydown', this.handleKeydownBound);
      }

      this.animateOut();

      return this;
    }
  }

  /**
   * @static
   * @memberof Modal
   */
  Modal._increment = 0;

  /**
   * @static
   * @memberof Modal
   */
  Modal._count = 0;

  window.Materialize.Modal = Modal;

  $.fn.modal = function(methodOrOptions) {
    // Call plugin method if valid method name is passed in
    if (Modal.prototype[methodOrOptions]) {
      // Getter methods
      if (methodOrOptions.slice(0,3) === 'get') {
        return this.first()[0].M_Modal[methodOrOptions]();

      // Void methods
      } else {
        return this.each(function() {
          this.M_Modal[methodOrOptions]();
        });
      }

    // Initialize plugin if options or no argument is passed in
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      Modal.init(this, arguments[0]);
      return this;

    // Return error if an unrecognized  method name is passed in
    } else {
      $.error(`Method ${methodOrOptions} does not exist on jQuery.modal`);
    }
  };

})(jQuery);

(function ($) {

  $.fn.materialbox = function () {

    return this.each(function() {

      if ($(this).hasClass('initialized')) {
        return;
      }

      $(this).addClass('initialized');

      var overlayActive = false;
      var doneAnimating = true;
      var inDuration = 275;
      var outDuration = 200;
      var origin = $(this);
      var placeholder = $('<div></div>').addClass('material-placeholder');
      var originalWidth = 0;
      var originalHeight = 0;
      var ancestorsChanged;
      var ancestor;
      var originInlineStyles = origin.attr('style');
      origin.wrap(placeholder);


      // Start click handler
      origin.on('click', function() {
        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.width();
        var originalHeight = origin.height();


        // If already modal, return to original
        if (doneAnimating === false) {
          returnToOriginal();
          return false;
        }
        else if (overlayActive && doneAnimating===true) {
          returnToOriginal();
          return false;
        }


        // Set states
        doneAnimating = false;
        origin.addClass('active');
        overlayActive = true;

        // Set positioning for placeholder
        placeholder.css({
          width: placeholder[0].getBoundingClientRect().width,
          height: placeholder[0].getBoundingClientRect().height,
          position: 'relative',
          top: 0,
          left: 0
        });

        // Find ancestor with overflow: hidden; and remove it
        ancestorsChanged = undefined;
        ancestor = placeholder[0].parentNode;
        var count = 0;
        while (ancestor !== null && !$(ancestor).is(document)) {
          var curr = $(ancestor);
          if (curr.css('overflow') !== 'visible') {
            curr.css('overflow', 'visible');
            if (ancestorsChanged === undefined) {
              ancestorsChanged = curr;
            }
            else {
              ancestorsChanged = ancestorsChanged.add(curr);
            }
          }
          ancestor = ancestor.parentNode;
        }

        // Set css on origin
        origin.css({
          position: 'absolute',
          'z-index': 1000,
          'will-change': 'left, top, width, height'
        })
        .data('width', originalWidth)
        .data('height', originalHeight);

        // Add overlay
        var overlay = $('<div id="materialbox-overlay"></div>')
          .css({
            opacity: 0
          })
          .click(function(){
            if (doneAnimating === true)
            returnToOriginal();
          });

        // Put before in origin image to preserve z-index layering.
        origin.before(overlay);

        // Set dimensions if needed
        var overlayOffset = overlay[0].getBoundingClientRect();
        overlay.css({
          width: windowWidth,
          height: windowHeight,
          left: -1 * overlayOffset.left,
          top: -1 * overlayOffset.top
        })

        // Animate Overlay
        overlay.velocity({opacity: 1},
                           {duration: inDuration, queue: false, easing: 'easeOutQuad'} );

        // Add and animate caption if it exists
        if (origin.data('caption') !== "") {
          var $photo_caption = $('<div class="materialbox-caption"></div>');
          $photo_caption.text(origin.data('caption'));
          $('body').append($photo_caption);
          $photo_caption.css({ "display": "inline" });
          $photo_caption.velocity({opacity: 1}, {duration: inDuration, queue: false, easing: 'easeOutQuad'});
        }

        // Resize Image
        var ratio = 0;
        var widthPercent = originalWidth / windowWidth;
        var heightPercent = originalHeight / windowHeight;
        var newWidth = 0;
        var newHeight = 0;

        if (widthPercent > heightPercent) {
          ratio = originalHeight / originalWidth;
          newWidth = windowWidth * 0.9;
          newHeight = windowWidth * 0.9 * ratio;
        }
        else {
          ratio = originalWidth / originalHeight;
          newWidth = (windowHeight * 0.9) * ratio;
          newHeight = windowHeight * 0.9;
        }

        // Animate image + set z-index
        if(origin.hasClass('responsive-img')) {
          origin.velocity({'max-width': newWidth, 'width': originalWidth}, {duration: 0, queue: false,
            complete: function(){
              origin.css({left: 0, top: 0})
              .velocity(
                {
                  height: newHeight,
                  width: newWidth,
                  left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
                  top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
                },
                {
                  duration: inDuration,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function(){doneAnimating = true;}
                }
              );
            } // End Complete
          }); // End Velocity
        }
        else {
          origin.css('left', 0)
          .css('top', 0)
          .velocity(
            {
              height: newHeight,
              width: newWidth,
              left: $(document).scrollLeft() + windowWidth/2 - origin.parent('.material-placeholder').offset().left - newWidth/2,
              top: $(document).scrollTop() + windowHeight/2 - origin.parent('.material-placeholder').offset().top - newHeight/ 2
            },
            {
              duration: inDuration,
              queue: false,
              easing: 'easeOutQuad',
              complete: function(){doneAnimating = true;}
            }
            ); // End Velocity
        }

        // Handle Exit triggers
        $(window).on('scroll.materialbox', function() {
          if (overlayActive) {
            returnToOriginal();
          }
        });

        $(window).on('resize.materialbox', function() {
          if (overlayActive) {
            returnToOriginal();
          }
        });

        $(document).on('keyup.materialbox', function(e) {
          // ESC key
          if (e.keyCode === 27 &&
              doneAnimating === true &&
              overlayActive) {
            returnToOriginal();
          }
        });

      }); // End click handler


      // This function returns the modaled image to the original spot
      function returnToOriginal() {

        doneAnimating = false;

        var placeholder = origin.parent('.material-placeholder');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var originalWidth = origin.data('width');
        var originalHeight = origin.data('height');

        origin.velocity("stop", true);
        $('#materialbox-overlay').velocity("stop", true);
        $('.materialbox-caption').velocity("stop", true);

        // disable exit handlers
        $(window).off('scroll.materialbox');
        $(document).off('keyup.materialbox');
        $(window).off('resize.materialbox');

        $('#materialbox-overlay').velocity({opacity: 0}, {
          duration: outDuration, // Delay prevents animation overlapping
          queue: false, easing: 'easeOutQuad',
          complete: function(){
            // Remove Overlay
            overlayActive = false;
            $(this).remove();
          }
        });

        // Resize Image
        origin.velocity(
          {
            width: originalWidth,
            height: originalHeight,
            left: 0,
            top: 0
          },
          {
            duration: outDuration,
            queue: false, easing: 'easeOutQuad',
            complete: function() {
              placeholder.css({
                height: '',
                width: '',
                position: '',
                top: '',
                left: ''
              });

              origin.removeAttr('style');
              origin.attr('style', originInlineStyles);

              // Remove class
              origin.removeClass('active');
              doneAnimating = true;

              // Remove overflow overrides on ancestors
              if (ancestorsChanged) {
                ancestorsChanged.css('overflow', '');
              }
            }
          }
        );

        // Remove Caption + reset css settings on image
        $('.materialbox-caption').velocity({opacity: 0}, {
          duration: outDuration, // Delay prevents animation overlapping
          queue: false, easing: 'easeOutQuad',
          complete: function(){
            $(this).remove();
          }
        });

      }
    });
  };

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

}( jQuery ));

(function ($) {

  $.fn.parallax = function () {
    var window_width = $(window).width();
    // Parallax Scripts
    return this.each(function(i) {
      var $this = $(this);
      $this.addClass('parallax');

      function updateParallax(initial) {
        var container_height;
        if (window_width < 601) {
          container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
        }
        else {
          container_height = ($this.height() > 0) ? $this.height() : 500;
        }
        var $img = $this.children("img").first();
        var img_height = $img.height();
        var parallax_dist = img_height - container_height;
        var bottom = $this.offset().top + container_height;
        var top = $this.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
        var parallax = Math.round((parallax_dist * percentScrolled));

        if (initial) {
          $img.css('display', 'block');
        }
        if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
          $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
        }

      }

      // Wait for image load
      $this.children("img").one("load", function() {
        updateParallax(true);
      }).each(function() {
        if (this.complete) $(this).trigger("load");
      });

      $(window).scroll(function() {
        window_width = $(window).width();
        updateParallax(false);
      });

      $(window).resize(function() {
        window_width = $(window).width();
        updateParallax(false);
      });

    });

  };
}( jQuery ));

(function ($) {

  var methods = {
    init : function(options) {
      var defaults = {
        onShow: null,
        swipeable: false,
        responsiveThreshold: Infinity, // breakpoint for swipeable
      };
      options = $.extend(defaults, options);
      var namespace = Materialize.objectSelectorString($(this));

      return this.each(function(i) {

      var uniqueNamespace = namespace+i;

      // For each set of tabs, we want to keep track of
      // which tab is active and its associated content
      var $this = $(this),
          window_width = $(window).width();

      var $active, $content, $links = $this.find('li.tab a'),
          $tabs_width = $this.width(),
          $tabs_content = $(),
          $tabs_wrapper,
          $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,
          $indicator,
          index = prev_index = 0,
          clicked = false,
          clickedTimeout,
          transition = 300;


      // Finds right attribute for indicator based on active tab.
      // el: jQuery Object
        var calcRightPos = function(el) {
          return Math.ceil($tabs_width - el.position().left - el[0].getBoundingClientRect().width - $this.scrollLeft());
      };

      // Finds left attribute for indicator based on active tab.
      // el: jQuery Object
      var calcLeftPos = function(el) {
        return Math.floor(el.position().left + $this.scrollLeft());
      };

      // Animates Indicator to active tab.
      // prev_index: Number
      var animateIndicator = function(prev_index) {
        if ((index - prev_index) >= 0) {
          $indicator.velocity({"right": calcRightPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"left": calcLeftPos($active) }, {duration: transition, queue: false, easing: 'easeOutQuad', delay: 90});

        } else {
          $indicator.velocity({"left": calcLeftPos($active) }, { duration: transition, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"right": calcRightPos($active) }, {duration: transition, queue: false, easing: 'easeOutQuad', delay: 90});
        }
      };

      // Change swipeable according to responsive threshold
      if (options.swipeable) {
        if (window_width > options.responsiveThreshold) {
          options.swipeable = false;
        }
      }


      // If the location.hash matches one of the links, use that as the active tab.
      $active = $($links.filter('[href="'+location.hash+'"]'));

      // If no match is found, use the first link or any with class 'active' as the initial active tab.
      if ($active.length === 0) {
        $active = $(this).find('li.tab a.active').first();
      }
      if ($active.length === 0) {
        $active = $(this).find('li.tab a').first();
      }

      $active.addClass('active');
      index = $links.index($active);
      if (index < 0) {
        index = 0;
      }

      if ($active[0] !== undefined) {
        $content = $($active[0].hash);
        $content.addClass('active');
      }

      // append indicator then set indicator width to tab width
      if (!$this.find('.indicator').length) {
        $this.append('<li class="indicator"></li>');
      }
      $indicator = $this.find('.indicator');

      // we make sure that the indicator is at the end of the tabs
      $this.append($indicator);

      if ($this.is(":visible")) {
        // $indicator.css({"right": $tabs_width - ((index + 1) * $tab_width)});
        // $indicator.css({"left": index * $tab_width});
        setTimeout(function() {
          $indicator.css({"right": calcRightPos($active) });
          $indicator.css({"left": calcLeftPos($active) });
        }, 0);
      }
      $(window).off('resize.tabs-'+uniqueNamespace).on('resize.tabs-'+uniqueNamespace, function () {
        $tabs_width = $this.width();
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;
        if (index < 0) {
          index = 0;
        }
        if ($tab_width !== 0 && $tabs_width !== 0) {
          $indicator.css({"right": calcRightPos($active) });
          $indicator.css({"left": calcLeftPos($active) });
        }
      });

      // Initialize Tabs Content.
      if (options.swipeable) {
        // TODO: Duplicate calls with swipeable? handle multiple div wrapping.
        $links.each(function () {
          var $curr_content = $(Materialize.escapeHash(this.hash));
          $curr_content.addClass('carousel-item');
          $tabs_content = $tabs_content.add($curr_content);
        });
        $tabs_wrapper = $tabs_content.wrapAll('<div class="tabs-content carousel"></div>');
        $tabs_content.css('display', '');
        $('.tabs-content.carousel').carousel({
          fullWidth: true,
          noWrap: true,
          onCycleTo: function(item) {
            if (!clicked) {
              var prev_index = index;
              index = $tabs_wrapper.index(item);
              $active.removeClass('active');
              $active = $links.eq(index);
              $active.addClass('active');
              animateIndicator(prev_index);
              if (typeof(options.onShow) === "function") {
                options.onShow.call($this[0], $content);
              }
            }
          },
        });
      } else {
        // Hide the remaining content
        $links.not($active).each(function () {
          $(Materialize.escapeHash(this.hash)).hide();
        });
      }


      // Bind the click event handler
      $this.off('click.tabs').on('click.tabs', 'a', function(e) {
        if ($(this).parent().hasClass('disabled')) {
          e.preventDefault();
          return;
        }

        // Act as regular link if target attribute is specified.
        if (!!$(this).attr("target")) {
          return;
        }

        clicked = true;
        $tabs_width = $this.width();
        $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;

        // Make the old tab inactive.
        $active.removeClass('active');
        var $oldContent = $content

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(Materialize.escapeHash(this.hash));
        $links = $this.find('li.tab a');
        var activeRect = $active.position();

        // Make the tab active.
        $active.addClass('active');
        prev_index = index;
        index = $links.index($(this));
        if (index < 0) {
          index = 0;
        }
        // Change url to current tab
        // window.location.hash = $active.attr('href');

        // Swap content
        if (options.swipeable) {
          if ($tabs_content.length) {
            $tabs_content.carousel('set', index, function() {
              if (typeof(options.onShow) === "function") {
                options.onShow.call($this[0], $content);
              }
            });
          }
        } else {
          if ($content !== undefined) {
            $content.show();
            $content.addClass('active');
            if (typeof(options.onShow) === "function") {
              options.onShow.call(this, $content);
            }
          }

          if ($oldContent !== undefined &&
              !$oldContent.is($content)) {
            $oldContent.hide();
            $oldContent.removeClass('active');
          }
        }

        // Reset clicked state
        clickedTimeout = setTimeout(function(){ clicked = false; }, transition);

        // Update indicator
        animateIndicator(prev_index);

        // Prevent the anchor's default click action
        e.preventDefault();
      });
    });

    },
    select_tab : function( id ) {
      this.find('a[href="#' + id + '"]').trigger('click');
    }
  };

  $.fn.tabs = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tabs' );
    }
  };

  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
}( jQuery ));

(function ($) {
    $.fn.tooltip = function (options) {
      var timeout = null,
      margin = 5;

      // Defaults
      var defaults = {
        delay: 350,
        tooltip: '',
        position: 'bottom',
        html: false
      };

      // Remove tooltip from the activator
      if (options === "remove") {
        this.each(function() {
          $('#' + $(this).attr('data-tooltip-id')).remove();
          $(this).removeAttr('data-tooltip-id');
          $(this).off('mouseenter.tooltip mouseleave.tooltip');
        });
        return false;
      }

      options = $.extend(defaults, options);

      return this.each(function() {
        var tooltipId = Materialize.guid();
        var origin = $(this);

        // Destroy old tooltip
        if (origin.attr('data-tooltip-id')) {
          $('#' + origin.attr('data-tooltip-id')).remove();
        }

        origin.attr('data-tooltip-id', tooltipId);

        // Get attributes.
        var allowHtml,
            tooltipDelay,
            tooltipPosition,
            tooltipText,
            tooltipEl,
            backdrop;
        var setAttributes = function() {
          allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;
          tooltipDelay = origin.attr('data-delay');
          tooltipDelay = (tooltipDelay === undefined || tooltipDelay === '') ?
              options.delay : tooltipDelay;
          tooltipPosition = origin.attr('data-position');
          tooltipPosition = (tooltipPosition === undefined || tooltipPosition === '') ?
              options.position : tooltipPosition;
          tooltipText = origin.attr('data-tooltip');
          tooltipText = (tooltipText === undefined || tooltipText === '') ?
              options.tooltip : tooltipText;
        };
        setAttributes();

        var renderTooltipEl = function() {
          var tooltip = $('<div class="material-tooltip"></div>');

          // Create Text span
          if (allowHtml) {
            tooltipText = $('<span></span>').html(tooltipText);
          } else{
            tooltipText = $('<span></span>').text(tooltipText);
          }

          // Create tooltip
          tooltip.append(tooltipText)
            .appendTo($('body'))
            .attr('id', tooltipId);

          // Create backdrop
          backdrop = $('<div class="backdrop"></div>');
          backdrop.appendTo(tooltip);
          return tooltip;
        };
        tooltipEl = renderTooltipEl();

        // Destroy previously binded events
        origin.off('mouseenter.tooltip mouseleave.tooltip');
        // Mouse In
        var started = false, timeoutRef;
        origin.on({'mouseenter.tooltip': function(e) {
          var showTooltip = function() {
            setAttributes();
            started = true;
            tooltipEl.velocity('stop');
            backdrop.velocity('stop');
            tooltipEl.css({ visibility: 'visible', left: '0px', top: '0px' });

            // Tooltip positioning
            var originWidth = origin.outerWidth();
            var originHeight = origin.outerHeight();
            var tooltipHeight = tooltipEl.outerHeight();
            var tooltipWidth = tooltipEl.outerWidth();
            var tooltipVerticalMovement = '0px';
            var tooltipHorizontalMovement = '0px';
            var backdropOffsetWidth = backdrop[0].offsetWidth;
            var backdropOffsetHeight = backdrop[0].offsetHeight;
            var scaleXFactor = 8;
            var scaleYFactor = 8;
            var scaleFactor = 0;
            var targetTop, targetLeft, newCoordinates;

            if (tooltipPosition === "top") {
              // Top Position
              targetTop = origin.offset().top - tooltipHeight - margin;
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              tooltipVerticalMovement = '-10px';
              backdrop.css({
                bottom: 0,
                left: 0,
                borderRadius: '14px 14px 0 0',
                transformOrigin: '50% 100%',
                marginTop: tooltipHeight,
                marginLeft: (tooltipWidth/2) - (backdropOffsetWidth/2)
              });
            }
            // Left Position
            else if (tooltipPosition === "left") {
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
              targetLeft =  origin.offset().left - tooltipWidth - margin;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipHorizontalMovement = '-10px';
              backdrop.css({
                top: '-7px',
                right: 0,
                width: '14px',
                height: '14px',
                borderRadius: '14px 0 0 14px',
                transformOrigin: '95% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: tooltipWidth
              });
            }
            // Right Position
            else if (tooltipPosition === "right") {
              targetTop = origin.offset().top + originHeight/2 - tooltipHeight/2;
              targetLeft = origin.offset().left + originWidth + margin;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipHorizontalMovement = '+10px';
              backdrop.css({
                top: '-7px',
                left: 0,
                width: '14px',
                height: '14px',
                borderRadius: '0 14px 14px 0',
                transformOrigin: '5% 50%',
                marginTop: tooltipHeight/2,
                marginLeft: '0px'
              });
            }
            else {
              // Bottom Position
              targetTop = origin.offset().top + origin.outerHeight() + margin;
              targetLeft = origin.offset().left + originWidth/2 - tooltipWidth/2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              tooltipVerticalMovement = '+10px';
              backdrop.css({
                top: 0,
                left: 0,
                marginLeft: (tooltipWidth/2) - (backdropOffsetWidth/2)
              });
            }

            // Set tooptip css placement
            tooltipEl.css({
              top: newCoordinates.y,
              left: newCoordinates.x
            });

            // Calculate Scale to fill
            scaleXFactor = Math.SQRT2 * tooltipWidth / parseInt(backdropOffsetWidth);
            scaleYFactor = Math.SQRT2 * tooltipHeight / parseInt(backdropOffsetHeight);
            scaleFactor = Math.max(scaleXFactor, scaleYFactor);

            tooltipEl.velocity({ translateY: tooltipVerticalMovement, translateX: tooltipHorizontalMovement}, { duration: 350, queue: false })
              .velocity({opacity: 1}, {duration: 300, delay: 50, queue: false});
            backdrop.css({ visibility: 'visible' })
              .velocity({opacity:1},{duration: 55, delay: 0, queue: false})
              .velocity({scaleX: scaleFactor, scaleY: scaleFactor}, {duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad'});
          };

          timeoutRef = setTimeout(showTooltip, tooltipDelay); // End Interval

        // Mouse Out
        },
        'mouseleave.tooltip': function(){
          // Reset State
          started = false;
          clearTimeout(timeoutRef);

          // Animate back
          setTimeout(function() {
            if (started !== true) {
              tooltipEl.velocity({
                opacity: 0, translateY: 0, translateX: 0}, { duration: 225, queue: false});
              backdrop.velocity({opacity: 0, scaleX: 1, scaleY: 1}, {
                duration:225,
                queue: false,
                complete: function(){
                  backdrop.css({ visibility: 'hidden' });
                  tooltipEl.css({ visibility: 'hidden' });
                  started = false;}
              });
            }
          },225);
        }
        });
    });
  };

  var repositionWithinScreen = function(x, y, width, height) {
    var newX = x;
    var newY = y;

    if (newX < 0) {
      newX = 4;
    } else if (newX + width > window.innerWidth) {
      newX -= newX + width - window.innerWidth;
    }

    if (newY < 0) {
      newY = 4;
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {
      newY -= newY + height - window.innerHeight;
    }

    return {x: newX, y: newY};
  };

  $(document).ready(function(){
     $('.tooltipped').tooltip();
   });
}( jQuery ));

/*!
 * Waves v0.6.4
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */

;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function(e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos         = offset(el);
            var relativeY   = (e.pageY - pos.top);
            var relativeX   = (e.pageX - pos.left);
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';

            // Support for touch devices
            if ('touches' in e) {
              relativeY   = (e.touches[0].pageY - pos.top);
              relativeX   = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY+'px',
                'left': relativeX+'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity   = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
            rippleStyle['transition-duration']         = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function(e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX   = ripple.getAttribute('data-x');
            var relativeY   = ripple.getAttribute('data-y');
            var scale       = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function() {
                var style = {
                    'top': relativeY+'px',
                    'left': relativeX+'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch(e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function(e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function() {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function(e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentNode !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            }
            target = target.parentNode;
        }
        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
            element.addEventListener('dragend', Effect.hide, false);
        }
    }

    Waves.displayEffect = function(options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function(element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentNode;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function() {
        Waves.displayEffect();
    }, false);

})(window);

(function($) {
  'use strict';

  let _defaults = {
    displayLength: Infinity,
    inDuration: 300,
    outDuration: 375,
    className: undefined,
    completeCallback: undefined,
    activationPercent: 0.8
  };

  class Toast {
    constructor(message, displayLength, className, completeCallback) {
      if (!message) {
        return;
      }


      /**
       * Options for the toast
       * @member Toast#options
       */
      this.options = {
        displayLength: displayLength,
        className: className,
        completeCallback: completeCallback
      };

      this.options = $.extend({}, Toast.defaults, this.options);
      this.message = message;

      /**
       * Describes current pan state toast
       * @type {Boolean}
       */
      this.panning = false;

      /**
       * Time remaining until toast is removed
       */
      this.timeRemaining = this.options.displayLength;

      if (Toast._toasts.length === 0) {
        Toast._createContainer();
      }

      // Create new toast
      Toast._toasts.push(this);
      let toastElement = this.createToast();
      toastElement.M_Toast = this;
      this.el = toastElement;
      this._animateIn();
      this.setTimer();
    }

    static get defaults() {
      return _defaults;
    }

    /**
     * Append toast container and add event handlers
     */
    static _createContainer() {
      let container = document.createElement('div');
      container.setAttribute('id', 'toast-container');

      // Add event handler
      container.addEventListener('touchstart', Toast._onDragStart);
      container.addEventListener('touchmove', Toast._onDragMove);
      container.addEventListener('touchend', Toast._onDragEnd);

      container.addEventListener('mousedown', Toast._onDragStart);
      document.addEventListener('mousemove', Toast._onDragMove);
      document.addEventListener('mouseup', Toast._onDragEnd);

      document.body.appendChild(container);
      Toast._container = container;
    }

    /**
     * Remove toast container and event handlers
     */
    static _removeContainer() {
      // Add event handler
      document.removeEventListener('mousemove', Toast._onDragMove);
      document.removeEventListener('mouseup', Toast._onDragEnd);

      Toast._container.parentNode.removeChild(Toast._container);
      Toast._container = null;
    }

    /**
     * Begin drag handler
     * @param {Event} e
     */
    static _onDragStart(e) {
      if (e.target && $(e.target).closest('.toast').length) {
        let $toast = $(e.target).closest('.toast');
        let toast = $toast[0].M_Toast;
        toast.panning = true;
        Toast._draggedToast = toast;
        toast.el.classList.add('panning');
        toast.el.style.transition = null;
        toast.startingXPos = Toast._xPos(e);
        toast.time = Date.now();
        toast.xPos = Toast._xPos(e);
      }
    }

    /**
     * Drag move handler
     * @param {Event} e
     */
    static _onDragMove(e) {
      if (!!Toast._draggedToast) {
        e.preventDefault();
        let toast = Toast._draggedToast;
        toast.deltaX = Math.abs(toast.xPos - Toast._xPos(e));
        toast.xPos = Toast._xPos(e);
        toast.velocityX = toast.deltaX / (Date.now() - toast.time);
        toast.time = Date.now();

        let totalDeltaX = toast.xPos - toast.startingXPos;
        let activationDistance =
            toast.el.offsetWidth * toast.options.activationPercent;
        toast.el.style.transform = `translateX(${totalDeltaX}px)`;
        toast.el.style.opacity = 1-Math.abs(totalDeltaX / activationDistance);
      }
    }

    /**
     * End drag handler
     * @param {Event} e
     */
    static _onDragEnd(e) {
      if (!!Toast._draggedToast) {
        let toast = Toast._draggedToast;
        toast.panning = false;
        toast.el.classList.remove('panning');

        let totalDeltaX = toast.xPos - toast.startingXPos;
        let activationDistance =
            toast.el.offsetWidth * toast.options.activationPercent;
        let shouldBeDismissed = Math.abs(totalDeltaX) > activationDistance ||
            toast.velocityX > 1;

        // Remove toast
        if (shouldBeDismissed) {
          toast.wasSwiped = true;
          toast.remove();

        // Animate toast back to original position
        } else {
          toast.el.style.transition = 'transform .2s, opacity .2s';
          toast.el.style.transform = null;
          toast.el.style.opacity = null;
        }
        Toast._draggedToast = null;
      }
    }

    /**
     * Get x position of mouse or touch event
     * @param {Event} e
     */
    static _xPos(e) {
      if (e.targetTouches && (e.targetTouches.length >= 1)) {
        return e.targetTouches[0].clientX;
      }
      // mouse event
      return e.clientX;
    }

    /**
     * Remove all toasts
     */
    static removeAll() {
      for(let toastIndex in Toast._toasts) {
        Toast._toasts[toastIndex].remove();
      }
    }


    /**
     * Create toast and append it to toast container
     */
    createToast() {
      let toast = document.createElement('div');
      toast.classList.add('toast');

      // Add custom classes onto toast
      if (this.options.className) {
        let classes = this.options.className.split(' ');
        let i, count;
        for (i = 0, count = classes.length; i < count; i++) {
          toast.classList.add(classes[i]);
        }
      }

      // Set content
      if ( typeof HTMLElement === 'object' ?
           this.message instanceof HTMLElement :
           this.message && typeof this.message === 'object' &&
           this.message !== null && this.message.nodeType === 1 &&
           typeof this.message.nodeName==='string'
         ) {
        toast.appendChild(this.message);

      // Check if it is jQuery object
      } else if (this.message instanceof jQuery) {
        $(toast).append(this.message);

        // Insert as text;
      } else {
        toast.innerHTML = this.message;
      }

      // Append toasft
      Toast._container.appendChild(toast);
      return toast;
    }

    /**
     * Animate in toast
     */
    _animateIn() {
      // Animate toast in
      Vel(this.el, {top: 0,  opacity: 1 }, {
        duration: 300,
        easing: 'easeOutCubic',
        queue: false
      });
    }


    /**
     * Create setInterval which automatically removes toast when timeRemaining >= 0
     * has been reached
     */
    setTimer() {
      if (this.timeRemaining !== Infinity)  {
        this.counterInterval = setInterval(() => {
          // If toast is not being dragged, decrease its time remaining
          if (!this.panning) {
            this.timeRemaining -= 20;
          }

          // Animate toast out
          if (this.timeRemaining <= 0) {
            this.remove();
          }
        }, 20);
      }
    }


    /**
     * Dismiss toast with animation
     */
    remove() {
      window.clearInterval(this.counterInterval);
      let activationDistance =
          this.el.offsetWidth * this.options.activationPercent;

      if(this.wasSwiped) {
        this.el.style.transition = 'transform .05s, opacity .05s';
        this.el.style.transform = `translateX(${activationDistance}px)`;
        this.el.style.opacity = 0;
      }

      Vel(
        this.el,
        {opacity: 0, marginTop: '-40px'},
        {
          duration: this.options.outDuration,
          easing: 'easeOutExpo',
          queue: false,
          complete: () => {
            // Call the optional callback
            if(typeof(this.options.completeCallback) === 'function') {
              this.options.completeCallback();
            }
            // Remove toast from DOM
            this.el.parentNode.removeChild(this.el);
            Toast._toasts.splice(Toast._toasts.indexOf(this), 1);
            if (Toast._toasts.length === 0) {
              Toast._removeContainer();
            }
          }
        }
      );
    }
  }

  /**
   * @static
   * @memberof Toast
   * @type {Array.<Toast>}
   */
  Toast._toasts = [];

  /**
   * @static
   * @memberof Toast
   */
  Toast._container = null;

  /**
   * @static
   * @memberof Toast
   * @type {Toast}
   */
  Toast._draggedToast = null;

  window.Materialize.Toast = Toast;
  window.Materialize.toast = function(message, displayLength, className, completeCallback) {
    return new Toast(message, displayLength, className, completeCallback);
  }
})(jQuery);

(function ($) {

  var methods = {
    init : function(options) {
      var defaults = {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false,
        draggable: true,
        onOpen: null,
        onClose: null
      };
      options = $.extend(defaults, options);

      $(this).each(function(){
        var $this = $(this);
        var menuId = $this.attr('data-activates');
        var menu = $("#"+ menuId);

        // Set to width
        if (options.menuWidth != 300) {
          menu.css('width', options.menuWidth);
        }

        // Add Touch Area
        var $dragTarget = $('.drag-target[data-sidenav="' + menuId + '"]');
        if (options.draggable) {
          // Regenerate dragTarget
          if ($dragTarget.length) {
            $dragTarget.remove();
          }

          $dragTarget = $('<div class="drag-target"></div>').attr('data-sidenav', menuId);
          $('body').append($dragTarget);
        } else {
          $dragTarget = $();
        }

        if (options.edge == 'left') {
          menu.css('transform', 'translateX(-100%)');
          $dragTarget.css({'left': 0}); // Add Touch Area
        }
        else {
          menu.addClass('right-aligned') // Change text-alignment to right
            .css('transform', 'translateX(100%)');
          $dragTarget.css({'right': 0}); // Add Touch Area
        }

        // If fixed sidenav, bring menu out
        if (menu.hasClass('fixed')) {
            if (window.innerWidth > 992) {
              menu.css('transform', 'translateX(0)');
            }
          }

        // Window resize to reset on large screens fixed
        if (menu.hasClass('fixed')) {
          $(window).resize( function() {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ($('#sidenav-overlay').length !== 0 && menuOut) {
                removeMenu(true);
              }
              else {
                // menu.removeAttr('style');
                menu.css('transform', 'translateX(0%)');
                // menu.css('width', options.menuWidth);
              }
            }
            else if (menuOut === false){
              if (options.edge === 'left') {
                menu.css('transform', 'translateX(-100%)');
              } else {
                menu.css('transform', 'translateX(100%)');
              }

            }

          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if (options.closeOnClick === true) {
          menu.on("click.itemclick", "a:not(.collapsible-header)", function(){
            if (!(window.innerWidth > 992 && menu.hasClass('fixed'))){
              removeMenu();
            }
          });
        }

        var removeMenu = function(restoreNav) {
          panning = false;
          menuOut = false;
          // Reenable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          $('#sidenav-overlay').velocity({opacity: 0}, {duration: 200,
              queue: false, easing: 'easeOutQuad',
            complete: function() {
              $(this).remove();
            } });
          if (options.edge === 'left') {
            // Reset phantom div
            $dragTarget.css({width: '', right: '', left: '0'});
            menu.velocity(
              {'translateX': '-100%'},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu.removeAttr('style');
                    menu.css('width', options.menuWidth);
                  }
                }

            });
          }
          else {
            // Reset phantom div
            $dragTarget.css({width: '', right: '0', left: ''});
            menu.velocity(
              {'translateX': '100%'},
              { duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    // Restore Fixed sidenav
                    menu.removeAttr('style');
                    menu.css('width', options.menuWidth);
                  }
                }
              });
          }

          // Callback
          if (typeof(options.onClose) === 'function') {
            options.onClose.call(this, menu);
          }
        }



        // Touch Event
        var panning = false;
        var menuOut = false;

        if (options.draggable) {
          $dragTarget.on('click', function(){
            if (menuOut) {
              removeMenu();
            }
          });

          $dragTarget.hammer({
            prevent_default: false
          }).on('pan', function(e) {

            if (e.gesture.pointerType == "touch") {

              var direction = e.gesture.direction;
              var x = e.gesture.center.x;
              var y = e.gesture.center.y;
              var velocityX = e.gesture.velocityX;

              // Vertical scroll bugfix
              if (x === 0 && y === 0) {
                return;
              }

              // Disable Scrolling
              var $body = $('body');
              var $overlay = $('#sidenav-overlay');
              var oldWidth = $body.innerWidth();
              $body.css('overflow', 'hidden');
              $body.width(oldWidth);

              // If overlay does not exist, create one and if it is clicked, close menu
              if ($overlay.length === 0) {
                $overlay = $('<div id="sidenav-overlay"></div>');
                $overlay.css('opacity', 0).click( function(){
                  removeMenu();
                });

                // Run 'onOpen' when sidenav is opened via touch/swipe if applicable
                if (typeof(options.onOpen) === 'function') {
                  options.onOpen.call(this, menu);
                }

                $('body').append($overlay);
              }

              // Keep within boundaries
              if (options.edge === 'left') {
                if (x > options.menuWidth) { x = options.menuWidth; }
                else if (x < 0) { x = 0; }
              }

              if (options.edge === 'left') {
                // Left Direction
                if (x < (options.menuWidth / 2)) { menuOut = false; }
                // Right Direction
                else if (x >= (options.menuWidth / 2)) { menuOut = true; }
                menu.css('transform', 'translateX(' + (x - options.menuWidth) + 'px)');
              }
              else {
                // Left Direction
                if (x < (window.innerWidth - options.menuWidth / 2)) {
                  menuOut = true;
                }
                // Right Direction
                else if (x >= (window.innerWidth - options.menuWidth / 2)) {
                 menuOut = false;
               }
                var rightPos = (x - options.menuWidth / 2);
                if (rightPos < 0) {
                  rightPos = 0;
                }

                menu.css('transform', 'translateX(' + rightPos + 'px)');
              }


              // Percentage overlay
              var overlayPerc;
              if (options.edge === 'left') {
                overlayPerc = x / options.menuWidth;
                $overlay.velocity({opacity: overlayPerc }, {duration: 10, queue: false, easing: 'easeOutQuad'});
              }
              else {
                overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
                $overlay.velocity({opacity: overlayPerc }, {duration: 10, queue: false, easing: 'easeOutQuad'});
              }
            }

          }).on('panend', function(e) {

            if (e.gesture.pointerType == "touch") {
              var $overlay = $('#sidenav-overlay');
              var velocityX = e.gesture.velocityX;
              var x = e.gesture.center.x;
              var leftPos = x - options.menuWidth;
              var rightPos = x - options.menuWidth / 2;
              if (leftPos > 0 ) {
                leftPos = 0;
              }
              if (rightPos < 0) {
                rightPos = 0;
              }
              panning = false;

              if (options.edge === 'left') {
                // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
                if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
                  // Return menu to open
                  if (leftPos !== 0) {
                    menu.velocity({'translateX': [0, leftPos]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                  }

                  $overlay.velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                  $dragTarget.css({width: '50%', right: 0, left: ''});
                  menuOut = true;
                }
                else if (!menuOut || velocityX > 0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });
                  // Slide menu closed
                  menu.velocity({'translateX': [-1 * options.menuWidth - 10, leftPos]}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                  $overlay.velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function () {
                      // Run 'onClose' when sidenav is closed via touch/swipe if applicable
                      if (typeof(options.onClose) === 'function') {
                        options.onClose.call(this, menu);
                      }

                      $(this).remove();
                    }});
                  $dragTarget.css({width: '10px', right: '', left: 0});
                }
              }
              else {
                if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
                  // Return menu to open
                  if (rightPos !== 0) {
                    menu.velocity({'translateX': [0, rightPos]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
                  }

                  $overlay.velocity({opacity: 1 }, {duration: 50, queue: false, easing: 'easeOutQuad'});
                  $dragTarget.css({width: '50%', right: '', left: 0});
                  menuOut = true;
                }
                else if (!menuOut || velocityX < -0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });

                  // Slide menu closed
                  menu.velocity({'translateX': [options.menuWidth + 10, rightPos]}, {duration: 200, queue: false, easing: 'easeOutQuad'});
                  $overlay.velocity({opacity: 0 }, {duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function () {
                      // Run 'onClose' when sidenav is closed via touch/swipe if applicable
                      if (typeof(options.onClose) === 'function') {
                        options.onClose.call(this, menu);
                      }

                      $(this).remove();
                    }});
                  $dragTarget.css({width: '10px', right: 0, left: ''});
                }
              }

            }
          });
        }

        $this.off('click.sidenav').on('click.sidenav', function() {
          if (menuOut === true) {
            menuOut = false;
            panning = false;
            removeMenu();
          }
          else {

            // Disable Scrolling
            var $body = $('body');
            var $overlay = $('<div id="sidenav-overlay"></div>');
            var oldWidth = $body.innerWidth();
            $body.css('overflow', 'hidden');
            $body.width(oldWidth);

            // Push current drag target on top of DOM tree
            $('body').append($dragTarget);

            if (options.edge === 'left') {
              $dragTarget.css({width: '50%', right: 0, left: ''});
              menu.velocity({'translateX': [0, -1 * options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            else {
              $dragTarget.css({width: '50%', right: '', left: 0});
              menu.velocity({'translateX': [0, options.menuWidth]}, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }

            // Overlay close on click
            $overlay.css('opacity', 0)
              .click(function() {
                menuOut = false;
                panning = false;
                removeMenu();
                $overlay.velocity({opacity: 0}, {duration: 300, queue: false, easing: 'easeOutQuad',
                  complete: function() {
                    $(this).remove();
                  }
                });
              });

            // Append body
            $('body').append($overlay);
            $overlay.velocity({opacity: 1}, {duration: 300, queue: false, easing: 'easeOutQuad',
              complete: function () {
                menuOut = true;
                panning = false;
              }
            });

            // Callback
            if (typeof(options.onOpen) === 'function') {
              options.onOpen.call(this, menu);
            }
          }

          return false;
        });
      });


    },
    destroy: function () {
      var $overlay = $('#sidenav-overlay');
      var $dragTarget = $('.drag-target[data-sidenav="' + $(this).attr('data-activates') + '"]');
      $overlay.trigger('click');
      $dragTarget.remove();
      $(this).off('click');
      $overlay.remove();
    },
    show : function() {
      this.trigger('click');
    },
    hide : function() {
      $('#sidenav-overlay').trigger('click');
    }
  };


  $.fn.sideNav = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.sideNav' );
    }
  }; // Plugin end
}( jQuery ));

/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
(function($) {

	var jWindow = $(window);
	var elements = [];
	var elementsInView = [];
	var isSpying = false;
	var ticks = 0;
	var unique_id = 1;
	var offset = {
		top : 0,
		right : 0,
		bottom : 0,
		left : 0,
	}

	/**
	 * Find elements that are within the boundary
	 * @param {number} top
	 * @param {number} right
	 * @param {number} bottom
	 * @param {number} left
	 * @return {jQuery}		A collection of elements
	 */
	function findElements(top, right, bottom, left) {
		var hits = $();
		$.each(elements, function(i, element) {
			if (element.height() > 0) {
				var elTop = element.offset().top,
					elLeft = element.offset().left,
					elRight = elLeft + element.width(),
					elBottom = elTop + element.height();

				var isIntersect = !(elLeft > right ||
					elRight < left ||
					elTop > bottom ||
					elBottom < top);

				if (isIntersect) {
					hits.push(element);
				}
			}
		});

		return hits;
	}


	/**
	 * Called when the user scrolls the window
	 */
	function onScroll(scrollOffset) {
		// unique tick id
		++ticks;

		// viewport rectangle
		var top = jWindow.scrollTop(),
			left = jWindow.scrollLeft(),
			right = left + jWindow.width(),
			bottom = top + jWindow.height();

		// determine which elements are in view
		var intersections = findElements(top+offset.top + scrollOffset || 200, right+offset.right, bottom+offset.bottom, left+offset.left);
		$.each(intersections, function(i, element) {

			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick != 'number') {
				// entered into view
				element.triggerHandler('scrollSpy:enter');
			}

			// update tick id
			element.data('scrollSpy:ticks', ticks);
		});

		// determine which elements are no longer in view
		$.each(elementsInView, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick == 'number' && lastTick !== ticks) {
				// exited from view
				element.triggerHandler('scrollSpy:exit');
				element.data('scrollSpy:ticks', null);
			}
		});

		// remember elements in view for next tick
		elementsInView = intersections;
	}

	/**
	 * Called when window is resized
	*/
	function onWinSize() {
		jWindow.trigger('scrollSpy:winSize');
	}


	/**
	 * Enables ScrollSpy using a selector
	 * @param {jQuery|string} selector  The elements collection, or a selector
	 * @param {Object=} options	Optional.
        throttle : number -> scrollspy throttling. Default: 100 ms
        offsetTop : number -> offset from top. Default: 0
        offsetRight : number -> offset from right. Default: 0
        offsetBottom : number -> offset from bottom. Default: 0
        offsetLeft : number -> offset from left. Default: 0
				activeClass : string -> Class name to be added to the active link. Default: active
	 * @returns {jQuery}
	 */
	$.scrollSpy = function(selector, options) {
	  var defaults = {
			throttle: 100,
			scrollOffset: 200, // offset - 200 allows elements near bottom of page to scroll
			activeClass: 'active',
			getActiveElement: function(id) {
				return 'a[href="#' + id + '"]';
			}
    };
    options = $.extend(defaults, options);

		var visible = [];
		selector = $(selector);
		selector.each(function(i, element) {
			elements.push($(element));
			$(element).data("scrollSpy:id", i);
			// Smooth scroll to section
		  $('a[href="#' + $(element).attr('id') + '"]').click(function(e) {
		    e.preventDefault();
		    var offset = $(Materialize.escapeHash(this.hash)).offset().top + 1;
	    	$('html, body').animate({ scrollTop: offset - options.scrollOffset }, {duration: 400, queue: false, easing: 'easeOutCubic'});
		  });
		});

		offset.top = options.offsetTop || 0;
		offset.right = options.offsetRight || 0;
		offset.bottom = options.offsetBottom || 0;
		offset.left = options.offsetLeft || 0;

		var throttledScroll = Materialize.throttle(function() {
			onScroll(options.scrollOffset);
		}, options.throttle || 100);
		var readyScroll = function(){
			$(document).ready(throttledScroll);
		};

		if (!isSpying) {
			jWindow.on('scroll', readyScroll);
			jWindow.on('resize', readyScroll);
			isSpying = true;
		}

		// perform a scan once, after current execution context, and after dom is ready
		setTimeout(readyScroll, 0);


		selector.on('scrollSpy:enter', function() {
			visible = $.grep(visible, function(value) {
	      return value.height() != 0;
	    });

			var $this = $(this);

			if (visible[0]) {
				$(options.getActiveElement(visible[0].attr('id'))).removeClass(options.activeClass);
				if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
					visible.unshift($(this));
				}
				else {
					visible.push($(this));
				}
			}
			else {
				visible.push($(this));
			}


			$(options.getActiveElement(visible[0].attr('id'))).addClass(options.activeClass);
		});
		selector.on('scrollSpy:exit', function() {
			visible = $.grep(visible, function(value) {
	      return value.height() != 0;
	    });

			if (visible[0]) {
				$(options.getActiveElement(visible[0].attr('id'))).removeClass(options.activeClass);
				var $this = $(this);
				visible = $.grep(visible, function(value) {
	        return value.attr('id') != $this.attr('id');
	      });
	      if (visible[0]) { // Check if empty
					$(options.getActiveElement(visible[0].attr('id'))).addClass(options.activeClass);
	      }
			}
		});

		return selector;
	};

	/**
	 * Listen for window resize events
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
	 * @returns {jQuery}		$(window)
	 */
	$.winSizeSpy = function(options) {
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
		options = options || {
			throttle: 100
		};
		return jWindow.on('resize', Materialize.throttle(onWinSize, options.throttle || 100));
	};

	/**
	 * Enables ScrollSpy on a collection of elements
	 * e.g. $('.scrollSpy').scrollSpy()
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.fn.scrollSpy = function(options) {
		return $.scrollSpy($(this), options);
	};

})(jQuery);

(function ($) {
  $(document).ready(function() {

    // Function to update labels of text fields
    Materialize.updateTextFields = function() {
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function(index, element) {
        var $this = $(this);
        if ($(element).val().length > 0 || $(element).is(':focus') || element.autofocus || $this.attr('placeholder') !== undefined) {
          $this.siblings('label').addClass('active');
        } else if ($(element)[0].validity) {
          $this.siblings('label').toggleClass('active', $(element)[0].validity.badInput === true);
        } else {
          $this.siblings('label').removeClass('active');
        }
      });
    };

    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active');
      }
      validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function() {
      Materialize.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function(e) {
      var formReset = $(e.target);
      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(input_selector).each(function () {
          if ($(this).attr('value') === '') {
            $(this).siblings('label').removeClass('active');
          }
        });

        // Reset select
        formReset.find('select.initialized').each(function () {
          var reset_text = formReset.find('option[selected]').text();
          formReset.siblings('input.select-dropdown').val(reset_text);
        });
      }
    });

    // Add active when element has focus
    $(document).on('focus', input_selector, function () {
      $(this).siblings('label, .prefix').addClass('active');
    });

    $(document).on('blur', input_selector, function () {
      var $inputElement = $(this);
      var selector = ".prefix";

      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        selector += ", label";
      }

      $inputElement.siblings(selector).removeClass('active');

      validate_field($inputElement);
    });

    window.validate_field = function(object) {
      var hasLength = object.attr('data-length') !== undefined;
      var lenAttr = parseInt(object.attr('data-length'));
      var len = object.val().length;

      if (object.val().length === 0 && object[0].validity.badInput === false && !object.is(':required')) {
        if (object.hasClass('validate')) {
          object.removeClass('valid');
          object.removeClass('invalid');
        }
      }
      else {
        if (object.hasClass('validate')) {
          // Check for character counter attributes
          if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
            object.removeClass('invalid');
            object.addClass('valid');
          }
          else {
            object.removeClass('valid');
            object.addClass('invalid');
          }
        }
      }
    };

    // Radio and Checkbox focus class
    var radio_checkbox = 'input[type=radio], input[type=checkbox]';
    $(document).on('keyup.radio', radio_checkbox, function(e) {
      // TAB, check if tabbing to radio or checkbox.
      if (e.which === 9) {
        $(this).addClass('tabbed');
        var $this = $(this);
        $this.one('blur', function(e) {

          $(this).removeClass('tabbed');
        });
        return;
      }
    });

    // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }
    var text_area_selector = '.materialize-textarea';

    function textareaAutoResize($textarea) {
      // Set font properties of hiddenDiv

      var fontFamily = $textarea.css('font-family');
      var fontSize = $textarea.css('font-size');
      var lineHeight = $textarea.css('line-height');
      var padding = $textarea.css('padding');

      if (fontSize) { hiddenDiv.css('font-size', fontSize); }
      if (fontFamily) { hiddenDiv.css('font-family', fontFamily); }
      if (lineHeight) { hiddenDiv.css('line-height', lineHeight); }
      if (padding) { hiddenDiv.css('padding', padding); }

      // Set original-height, if none
      if (!$textarea.data('original-height')) {
        $textarea.data('original-height', $textarea.height());
      }

      if ($textarea.attr('wrap') === 'off') {
        hiddenDiv.css('overflow-wrap', 'normal')
                 .css('white-space', 'pre');
      }

      hiddenDiv.text($textarea.val() + '\n');
      var content = hiddenDiv.html().replace(/\n/g, '<br>');
      hiddenDiv.html(content);


      // When textarea is hidden, width goes crazy.
      // Approximate with half of window size

      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
      }
      else {
        hiddenDiv.css('width', $(window).width()/2);
      }


      /**
       * Resize if the new height is greater than the
       * original height of the textarea
       */
      if ($textarea.data('original-height') <= hiddenDiv.height()) {
        $textarea.css('height', hiddenDiv.height());
      } else if ($textarea.val().length < $textarea.data('previous-length')) {
        /**
         * In case the new height is less than original height, it
         * means the textarea has less text than before
         * So we set the height to the original one
         */
        $textarea.css('height', $textarea.data('original-height'));
      }
      $textarea.data('previous-length', $textarea.val().length);
    }

    $(text_area_selector).each(function () {
      var $textarea = $(this);
      /**
       * Instead of resizing textarea on document load,
       * store the original height and the original length
       */
      $textarea.data('original-height', $textarea.height());
      $textarea.data('previous-length', $textarea.val().length);
    });

    $('body').on('keyup keydown autoresize', text_area_selector, function () {
      textareaAutoResize($(this));
    });

    // File Input Path
    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files      = $(this)[0].files;
      var file_names = [];
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input.val(file_names.join(", "));
      path_input.trigger('change');
    });

    /****************
    *  Range Input  *
    ****************/

    var range_type = 'input[type=range]';
    var range_mousedown = false;
    var left;

    $(range_type).each(function () {
      var thumb = $('<span class="thumb"><span class="value"></span></span>');
      $(this).after(thumb);
    });

    var showRangeBubble = function(thumb) {
      var paddingLeft = parseInt(thumb.parent().css('padding-left'));
      var marginLeft = (-7 + paddingLeft) + 'px';
      thumb.velocity({ height: "30px", width: "30px", top: "-30px", marginLeft: marginLeft}, { duration: 300, easing: 'easeOutExpo' });
    };

    var calcRangeOffset = function(range) {
      var width = range.width() - 15;
      var max = parseFloat(range.attr('max'));
      var min = parseFloat(range.attr('min'));
      var percent = (parseFloat(range.val()) - min) / (max - min);
      return percent * width;
    }

    var range_wrapper = '.range-field';
    $(document).on('change', range_type, function(e) {
      var thumb = $(this).siblings('.thumb');
      thumb.find('.value').html($(this).val());

      if (!thumb.hasClass('active')) {
        showRangeBubble(thumb);
      }

      var offsetLeft = calcRangeOffset($(this));
      thumb.addClass('active').css('left', offsetLeft);
    });

    $(document).on('mousedown touchstart', range_type, function(e) {
      var thumb = $(this).siblings('.thumb');

      // If thumb indicator does not exist yet, create it
      if (thumb.length <= 0) {
        thumb = $('<span class="thumb"><span class="value"></span></span>');
        $(this).after(thumb);
      }

      // Set indicator value
      thumb.find('.value').html($(this).val());

      range_mousedown = true;
      $(this).addClass('active');

      if (!thumb.hasClass('active')) {
        showRangeBubble(thumb);
      }

      if (e.type !== 'input') {
        var offsetLeft = calcRangeOffset($(this));
        thumb.addClass('active').css('left', offsetLeft);
      }
    });

    $(document).on('mouseup touchend', range_wrapper, function() {
      range_mousedown = false;
      $(this).removeClass('active');
    });

    $(document).on('input mousemove touchmove', range_wrapper, function(e) {
      var thumb = $(this).children('.thumb');
      var left;
      var input = $(this).find(range_type);

      if (range_mousedown) {
        if (!thumb.hasClass('active')) {
          showRangeBubble(thumb);
        }

        var offsetLeft = calcRangeOffset(input);
        thumb.addClass('active').css('left', offsetLeft);
        thumb.find('.value').html(thumb.siblings(range_type).val());
      }
    });

    $(document).on('mouseout touchleave', range_wrapper, function() {
      if (!range_mousedown) {

        var thumb = $(this).children('.thumb');
        var paddingLeft = parseInt($(this).css('padding-left'));
        var marginLeft = (7 + paddingLeft) + 'px';

        if (thumb.hasClass('active')) {
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: marginLeft}, { duration: 100 });
        }
        thumb.removeClass('active');
      }
    });

    /**************************
     * Auto complete plugin  *
     *************************/
    $.fn.autocomplete = function (options) {
      // Defaults
      var defaults = {
        data: {},
        limit: Infinity,
        onAutocomplete: null,
        minLength: 1
      };

      options = $.extend(defaults, options);

      return this.each(function() {
        var $input = $(this);
        var data = options.data,
            count = 0,
            activeIndex = -1,
            oldVal,
            $inputDiv = $input.closest('.input-field'); // Div to append on

        // Check if data isn't empty
        if (!$.isEmptyObject(data)) {
          var $autocomplete = $('<ul class="autocomplete-content dropdown-content"></ul>');
          var $oldAutocomplete;

          // Append autocomplete element.
          // Prevent double structure init.
          if ($inputDiv.length) {
            $oldAutocomplete = $inputDiv.children('.autocomplete-content.dropdown-content').first();
            if (!$oldAutocomplete.length) {
              $inputDiv.append($autocomplete); // Set ul in body
            }
          } else {
            $oldAutocomplete = $input.next('.autocomplete-content.dropdown-content');
            if (!$oldAutocomplete.length) {
              $input.after($autocomplete);
            }
          }
          if ($oldAutocomplete.length) {
            $autocomplete = $oldAutocomplete;
          }

          // Highlight partial match.
          var highlight = function(string, $el) {
            var img = $el.find('img');
            var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase() + ""),
                matchEnd = matchStart + string.length - 1,
                beforeMatch = $el.text().slice(0, matchStart),
                matchText = $el.text().slice(matchStart, matchEnd + 1),
                afterMatch = $el.text().slice(matchEnd + 1);
            $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
            if (img.length) {
              $el.prepend(img);
            }
          };

          // Reset current element position
          var resetCurrentElement = function() {
            activeIndex = -1;
            $autocomplete.find('.active').removeClass('active');
          }

          // Remove autocomplete elements
          var removeAutocomplete = function() {
            $autocomplete.empty();
            resetCurrentElement();
            oldVal = undefined;
          };

          $input.off('blur.autocomplete').on('blur.autocomplete', function() {
            removeAutocomplete();
          });

          // Perform search
          $input.off('keyup.autocomplete focus.autocomplete').on('keyup.autocomplete focus.autocomplete', function (e) {
            // Reset count.
            count = 0;
            var val = $input.val().toLowerCase();

            // Don't capture enter or arrow key usage.
            if (e.which === 13 ||
                e.which === 38 ||
                e.which === 40) {
              return;
            }


            // Check if the input isn't empty
            if (oldVal !== val) {
              removeAutocomplete();

              if (val.length >= options.minLength) {
                for(var key in data) {
                  if (data.hasOwnProperty(key) &&
                      key.toLowerCase().indexOf(val) !== -1) {
                    // Break if past limit
                    if (count >= options.limit) {
                      break;
                    }

                    var autocompleteOption = $('<li></li>');
                    if (!!data[key]) {
                      autocompleteOption.append('<img src="'+ data[key] +'" class="right circle"><span>'+ key +'</span>');
                    } else {
                      autocompleteOption.append('<span>'+ key +'</span>');
                    }

                    $autocomplete.append(autocompleteOption);
                    highlight(val, autocompleteOption);
                    count++;
                  }
                }
              }
            }

            // Update oldVal
            oldVal = val;
          });

          $input.off('keydown.autocomplete').on('keydown.autocomplete', function (e) {
            // Arrow keys and enter key usage
            var keyCode = e.which,
                liElement,
                numItems = $autocomplete.children('li').length,
                $active = $autocomplete.children('.active').first();

            // select element on Enter
            if (keyCode === 13 && activeIndex >= 0) {
              liElement = $autocomplete.children('li').eq(activeIndex);
              if (liElement.length) {
                liElement.trigger('mousedown.autocomplete');
                e.preventDefault();
              }
              return;
            }

            // Capture up and down key
            if ( keyCode === 38 || keyCode === 40 ) {
              e.preventDefault();

              if (keyCode === 38 &&
                  activeIndex > 0) {
                activeIndex--;
              }

              if (keyCode === 40 &&
                  activeIndex < (numItems - 1)) {
                activeIndex++;
              }

              $active.removeClass('active');
              if (activeIndex >= 0) {
                $autocomplete.children('li').eq(activeIndex).addClass('active');
              }
            }
          });

          // Set input value
          $autocomplete.off('mousedown.autocomplete touchstart.autocomplete').on('mousedown.autocomplete touchstart.autocomplete', 'li', function () {
            var text = $(this).text().trim();
            $input.val(text);
            $input.trigger('change');
            removeAutocomplete();

            // Handle onAutocomplete callback.
            if (typeof(options.onAutocomplete) === "function") {
              options.onAutocomplete.call(this, text);
            }
          });

        // Empty data
        } else {
          $input.off('keyup.autocomplete focus.autocomplete');
        }
      });
    };

  }); // End of $(document).ready

  /*******************
   *  Select Plugin  *
   ******************/
  $.fn.material_select = function (callback) {
    $(this).each(function(){
      var $select = $(this);

      if ($select.hasClass('browser-default')) {
        return; // Continue to next (return false breaks out of entire loop)
      }

      var multiple = $select.attr('multiple') ? true : false,
          lastID = $select.attr('data-select-id'); // Tear down structure if Select needs to be rebuilt

      if (lastID) {
        $select.parent().find('span.caret').remove();
        $select.parent().find('input').remove();

        $select.unwrap();
        $('ul#select-options-'+lastID).remove();
      }

      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
      if(callback === 'destroy') {
        $select.removeAttr('data-select-id').removeClass('initialized');
        $(window).off('click.select');
        return;
      }

      var uniqueID = Materialize.guid();
      $select.attr('data-select-id', uniqueID);
      var wrapper = $('<div class="select-wrapper"></div>');
      wrapper.addClass($select.attr('class'));
      if ($select.is(':disabled'))
        wrapper.addClass('disabled');
      var options = $('<ul id="select-options-' + uniqueID +'" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
          selectChildren = $select.children('option, optgroup'),
          valuesSelected = [],
          optionsHover = false;

      var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";

      // Function that renders and appends the option taking into
      // account type and possible image icon.
      var appendOptionWithIcon = function(select, option, type) {
        // Add disabled attr if disabled
        var disabledClass = (option.is(':disabled')) ? 'disabled ' : '';
        var optgroupClass = (type === 'optgroup-option') ? 'optgroup-option ' : '';
        var multipleCheckbox = multiple ? '<input type="checkbox"' + disabledClass + '/><label></label>' : '';

        // add icons
        var icon_url = option.data('icon');
        var classes = option.attr('class');
        if (!!icon_url) {
          var classString = '';
          if (!!classes) classString = ' class="' + classes + '"';

          // Check for multiple type.
          options.append($('<li class="' + disabledClass + optgroupClass + '"><img alt="" src="' + icon_url + '"' + classString + '><span>' + multipleCheckbox + option.html() + '</span></li>'));
          return true;
        }

        // Check for multiple type.
        options.append($('<li class="' + disabledClass + optgroupClass + '"><span>' + multipleCheckbox + option.html() + '</span></li>'));
      };

      /* Create dropdown structure. */
      if (selectChildren.length) {
        selectChildren.each(function() {
          if ($(this).is('option')) {
            // Direct descendant option.
            if (multiple) {
              appendOptionWithIcon($select, $(this), 'multiple');

            } else {
              appendOptionWithIcon($select, $(this));
            }
          } else if ($(this).is('optgroup')) {
            // Optgroup.
            var selectOptions = $(this).children('option');
            options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));

            selectOptions.each(function() {
              appendOptionWithIcon($select, $(this), 'optgroup-option');
            });
          }
        });
      }

      options.find('li:not(.optgroup)').each(function (i) {
        $(this).click(function (e) {
          // Check if option element is disabled
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
            var selected = true;

            if (multiple) {
              $('input[type="checkbox"]', this).prop('checked', function(i, v) { return !v; });
              selected = toggleEntryFromArray(valuesSelected, i, $select);
              $newSelect.trigger('focus');
            } else {
              options.find('li').removeClass('active');
              $(this).toggleClass('active');
              $newSelect.val($(this).text());
            }

            activateOption(options, $(this));
            $select.find('option').eq(i).prop('selected', selected);
            // Trigger onchange() event
            $select.trigger('change');
            if (typeof callback !== 'undefined') callback();
          }

          e.stopPropagation();
        });
      });

      // Wrap Elements
      $select.wrap(wrapper);
      // Add Select Display Element
      var dropdownIcon = $('<span class="caret">&#9660;</span>');

      // escape double quotes
      var sanitizedLabelHtml = label.replace(/"/g, '&quot;');

      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID +'" value="'+ sanitizedLabelHtml +'"/>');
      $select.before($newSelect);
      $newSelect.before(dropdownIcon);

      $newSelect.after(options);
      // Check if section element is disabled
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({'hover': false});
      }

      // Copy tabindex
      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
      }

      $select.addClass('initialized');

      $newSelect.on({
        'focus': function (){
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
            $('input.select-dropdown').trigger('close');
            $(window).off('click.select');
          }
          if (!options.is(':visible')) {
            $(this).trigger('open', ['focus']);
            var label = $(this).val();
            if (multiple && label.indexOf(',') >= 0) {
              label = label.split(',')[0];
            }

            var selectedOption = options.find('li').filter(function() {
              return $(this).text().toLowerCase() === label.toLowerCase();
            })[0];
            activateOption(options, selectedOption, true);

            $(window).off('click.select').on('click.select', function () {
              multiple && (optionsHover || $newSelect.trigger('close'));
              $(window).off('click.select');
            });
          }
        },
        'click': function (e){
          e.stopPropagation();
        }
      });

      $newSelect.on('blur', function() {
        if (!multiple) {
          $(this).trigger('close');
          $(window).off('click.select');
        }
        options.find('li.selected').removeClass('selected');
      });

      options.hover(function() {
        optionsHover = true;
      }, function () {
        optionsHover = false;
      });

      // Add initial multiple selections.
      if (multiple) {
        $select.find("option:selected:not(:disabled)").each(function () {
          var index = $(this).index();

          toggleEntryFromArray(valuesSelected, index, $select);
          options.find("li").eq(index).find(":checkbox").prop("checked", true);
        });
      }

      /**
       * Make option as selected and scroll to selected position
       * @param {jQuery} collection  Select options jQuery element
       * @param {Element} newOption  element of the new option
       * @param {Boolean} firstActivation  If on first activation of select
       */
      var activateOption = function(collection, newOption, firstActivation) {
        if (newOption) {
          collection.find('li.selected').removeClass('selected');
          var option = $(newOption);
          option.addClass('selected');
          if (!multiple || !!firstActivation) {
            options.scrollTo(option);
          }
        }
      };

      // Allow user to search by typing
      // this array is cleared after 1 second
      var filterQuery = [],
          onKeyDown = function(e){
            // TAB - switch to another input
            if(e.which == 9){
              $newSelect.trigger('close');
              return;
            }

            // ARROW DOWN WHEN SELECT IS CLOSED - open select options
            if(e.which == 40 && !options.is(':visible')){
              $newSelect.trigger('open');
              return;
            }

            // ENTER WHEN SELECT IS CLOSED - submit form
            if(e.which == 13 && !options.is(':visible')){
              return;
            }

            e.preventDefault();

            // CASE WHEN USER TYPE LETTERS
            var letter = String.fromCharCode(e.which).toLowerCase(),
                nonLetters = [9,13,27,38,40];
            if (letter && (nonLetters.indexOf(e.which) === -1)) {
              filterQuery.push(letter);

              var string = filterQuery.join(''),
                  newOption = options.find('li').filter(function() {
                    return $(this).text().toLowerCase().indexOf(string) === 0;
                  })[0];

              if (newOption) {
                activateOption(options, newOption);
              }
            }

            // ENTER - select option and close when select options are opened
            if (e.which == 13) {
              var activeOption = options.find('li.selected:not(.disabled)')[0];
              if(activeOption){
                $(activeOption).trigger('click');
                if (!multiple) {
                  $newSelect.trigger('close');
                }
              }
            }

            // ARROW DOWN - move to next not disabled option
            if (e.which == 40) {
              if (options.find('li.selected').length) {
                newOption = options.find('li.selected').next('li:not(.disabled)')[0];
              } else {
                newOption = options.find('li:not(.disabled)')[0];
              }
              activateOption(options, newOption);
            }

            // ESC - close options
            if (e.which == 27) {
              $newSelect.trigger('close');
            }

            // ARROW UP - move to previous not disabled option
            if (e.which == 38) {
              newOption = options.find('li.selected').prev('li:not(.disabled)')[0];
              if(newOption)
                activateOption(options, newOption);
            }

            // Automaticaly clean filter query so user can search again by starting letters
            setTimeout(function(){ filterQuery = []; }, 1000);
          };

      $newSelect.on('keydown', onKeyDown);
    });

    function toggleEntryFromArray(entriesArray, entryIndex, select) {
      var index = entriesArray.indexOf(entryIndex),
          notAdded = index === -1;

      if (notAdded) {
        entriesArray.push(entryIndex);
      } else {
        entriesArray.splice(index, 1);
      }

      select.siblings('ul.dropdown-content').find('li:not(.optgroup)').eq(entryIndex).toggleClass('active');

      // use notAdded instead of true (to detect if the option is selected or not)
      select.find('option').eq(entryIndex).prop('selected', notAdded);
      setValueToInput(entriesArray, select);

      return notAdded;
    }

    function setValueToInput(entriesArray, select) {
      var value = '';

      for (var i = 0, count = entriesArray.length; i < count; i++) {
        var text = select.find('option').eq(entriesArray[i]).text();

        i === 0 ? value += text : value += ', ' + text;
      }

      if (value === '') {
        value = select.find('option:disabled').eq(0).text();
      }

      select.siblings('input.select-dropdown').val(value);
    }
  };

}( jQuery ));

(function ($) {

  var methods = {

    init : function(options) {
      var defaults = {
        indicators: true,
        height: 400,
        transition: 500,
        interval: 6000
      };
      options = $.extend(defaults, options);

      return this.each(function() {

        // For each slider, we want to keep track of
        // which slide is active and its associated content
        var $this = $(this);
        var $slider = $this.find('ul.slides').first();
        var $slides = $slider.find('> li');
        var $active_index = $slider.find('.active').index();
        var $active, $indicators, $interval;
        if ($active_index != -1) { $active = $slides.eq($active_index); }

        // Transitions the caption depending on alignment
        function captionTransition(caption, duration) {
          if (caption.hasClass("center-align")) {
            caption.velocity({opacity: 0, translateY: -100}, {duration: duration, queue: false});
          }
          else if (caption.hasClass("right-align")) {
            caption.velocity({opacity: 0, translateX: 100}, {duration: duration, queue: false});
          }
          else if (caption.hasClass("left-align")) {
            caption.velocity({opacity: 0, translateX: -100}, {duration: duration, queue: false});
          }
        }

        // This function will transition the slide to any index of the next slide
        function moveToSlide(index) {
          // Wrap around indices.
          if (index >= $slides.length) index = 0;
          else if (index < 0) index = $slides.length -1;

          $active_index = $slider.find('.active').index();

          // Only do if index changes
          if ($active_index != index) {
            $active = $slides.eq($active_index);
            $caption = $active.find('.caption');

            $active.removeClass('active');
            $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',
                              complete: function() {
                                $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
                              } });
            captionTransition($caption, options.transition);


            // Update indicators
            if (options.indicators) {
              $indicators.eq($active_index).removeClass('active');
            }

            $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
            $slides.eq(index).addClass('active');


            // Update indicators
            if (options.indicators) {
              $indicators.eq(index).addClass('active');
            }
          }
        }

        // Set height of slider
        // If fullscreen, do nothing
        if (!$this.hasClass('fullscreen')) {
          if (options.indicators) {
            // Add height if indicators are present
            $this.height(options.height + 40);
          }
          else {
            $this.height(options.height);
          }
          $slider.height(options.height);
        }


        // Set initial positions of captions
        $slides.find('.caption').each(function () {
          captionTransition($(this), 0);
        });

        // Move img src into background-image
        $slides.find('img').each(function () {
          var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
          if ($(this).attr('src') !== placeholderBase64) {
            $(this).css('background-image', 'url("' + $(this).attr('src') + '")' );
            $(this).attr('src', placeholderBase64);
          }
        });

        // dynamically add indicators
        if (options.indicators) {
          $indicators = $('<ul class="indicators"></ul>');
          $slides.each(function( index ) {
            var $indicator = $('<li class="indicator-item"></li>');

            // Handle clicks on indicators
            $indicator.click(function () {
              var $parent = $slider.parent();
              var curr_index = $parent.find($(this)).index();
              moveToSlide(curr_index);

              // reset interval
              clearInterval($interval);
              $interval = setInterval(
                function(){
                  $active_index = $slider.find('.active').index();
                  if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                  else $active_index += 1;

                  moveToSlide($active_index);

                }, options.transition + options.interval
              );
            });
            $indicators.append($indicator);
          });
          $this.append($indicators);
          $indicators = $this.find('ul.indicators').find('li.indicator-item');
        }

        if ($active) {
          $active.show();
        }
        else {
          $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});

          $active_index = 0;
          $active = $slides.eq($active_index);

          // Update indicators
          if (options.indicators) {
            $indicators.eq($active_index).addClass('active');
          }
        }

        // Adjust height to current slide
        $active.find('img').each(function() {
          $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
        });

        // auto scroll
        $interval = setInterval(
          function(){
            $active_index = $slider.find('.active').index();
            moveToSlide($active_index + 1);

          }, options.transition + options.interval
        );


        // HammerJS, Swipe navigation

        // Touch Event
        var panning = false;
        var swipeLeft = false;
        var swipeRight = false;

        $this.hammer({
            prevent_default: false
        }).on('pan', function(e) {
          if (e.gesture.pointerType === "touch") {

            // reset interval
            clearInterval($interval);

            var direction = e.gesture.direction;
            var x = e.gesture.deltaX;
            var velocityX = e.gesture.velocityX;
            var velocityY = e.gesture.velocityY;

            $curr_slide = $slider.find('.active');
            if (Math.abs(velocityX) > Math.abs(velocityY)) {
              $curr_slide.velocity({ translateX: x
                  }, {duration: 50, queue: false, easing: 'easeOutQuad'});
            }

            // Swipe Left
            if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
              swipeRight = true;
            }
            // Swipe Right
            else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
              swipeLeft = true;
            }

            // Make Slide Behind active slide visible
            var next_slide;
            if (swipeLeft) {
              next_slide = $curr_slide.next();
              if (next_slide.length === 0) {
                next_slide = $slides.first();
              }
              next_slide.velocity({ opacity: 1
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            if (swipeRight) {
              next_slide = $curr_slide.prev();
              if (next_slide.length === 0) {
                next_slide = $slides.last();
              }
              next_slide.velocity({ opacity: 1
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }


          }

        }).on('panend', function(e) {
          if (e.gesture.pointerType === "touch") {

            $curr_slide = $slider.find('.active');
            panning = false;
            curr_index = $slider.find('.active').index();

            if (!swipeRight && !swipeLeft || $slides.length <=1) {
              // Return to original spot
              $curr_slide.velocity({ translateX: 0
                  }, {duration: 300, queue: false, easing: 'easeOutQuad'});
            }
            else if (swipeLeft) {
              moveToSlide(curr_index + 1);
              $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });
            }
            else if (swipeRight) {
              moveToSlide(curr_index - 1);
              $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                    complete: function() {
                                      $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                    } });
            }
            swipeLeft = false;
            swipeRight = false;

            // Restart interval
            clearInterval($interval);
            $interval = setInterval(
              function(){
                $active_index = $slider.find('.active').index();
                if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
                else $active_index += 1;

                moveToSlide($active_index);

              }, options.transition + options.interval
            );
          }
        });

        $this.on('sliderPause', function() {
          clearInterval($interval);
        });

        $this.on('sliderStart', function() {
          clearInterval($interval);
          $interval = setInterval(
            function(){
              $active_index = $slider.find('.active').index();
              if ($slides.length == $active_index + 1) $active_index = 0; // loop to start
              else $active_index += 1;

              moveToSlide($active_index);

            }, options.transition + options.interval
          );
        });

        $this.on('sliderNext', function() {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index + 1);
        });

        $this.on('sliderPrev', function() {
          $active_index = $slider.find('.active').index();
          moveToSlide($active_index - 1);
        });

      });



    },
    pause : function() {
      $(this).trigger('sliderPause');
    },
    start : function() {
      $(this).trigger('sliderStart');
    },
    next : function() {
      $(this).trigger('sliderNext');
    },
    prev : function() {
      $(this).trigger('sliderPrev');
    }
  };


  $.fn.slider = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
    }
  }; // Plugin end
}( jQuery ));

(function ($) {
  $(document).ready(function() {

    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('> .card-reveal').length) {
        var $card = $(e.target).closest('.card');
        if ($card.data('initialOverflow') === undefined) {
          $card.data(
            'initialOverflow',
            $card.css('overflow') === undefined ? '' : $card.css('overflow')
          );
        }
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $(this).find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() {
                $(this).css({ display: 'none'});
                $card.css('overflow', $card.data('initialOverflow'));
              }
            }
          );
        }
        else if ($(e.target).is($('.card .activator')) ||
                 $(e.target).is($('.card .activator i')) ) {
          $card.css('overflow', 'hidden');
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }
      }
    });

  });
}( jQuery ));

(function ($) {
  var materialChipsDefaults = {
    data: [],
    placeholder: '',
    secondaryPlaceholder: '',
    autocompleteOptions: {},
  };

  $(document).ready(function() {
    // Handle removal of static chips.
    $(document).on('click', '.chip .close', function(e){
      var $chips = $(this).closest('.chips');
      if ($chips.attr('data-initialized')) {
        return;
      }
      $(this).closest('.chip').remove();
    });
  });

  $.fn.material_chip = function (options) {
    var self = this;
    this.$el = $(this);
    this.$document = $(document);
    this.SELS = {
      CHIPS: '.chips',
      CHIP: '.chip',
      INPUT: 'input',
      DELETE: '.material-icons',
      SELECTED_CHIP: '.selected',
    };

    if ('data' === options) {
      return this.$el.data('chips');
    }

    var curr_options = $.extend({}, materialChipsDefaults, options);
    self.hasAutocomplete = !$.isEmptyObject(curr_options.autocompleteOptions.data);

    // Initialize
    this.init = function() {
      var i = 0;
      var chips;
      self.$el.each(function(){
        var $chips = $(this);
        var chipId = Materialize.guid();
        self.chipId = chipId;

        if (!curr_options.data || !(curr_options.data instanceof Array)) {
          curr_options.data = [];
        }
        $chips.data('chips', curr_options.data);
        $chips.attr('data-index', i);
        $chips.attr('data-initialized', true);

        if (!$chips.hasClass(self.SELS.CHIPS)) {
          $chips.addClass('chips');
        }

        self.chips($chips, chipId);
        i++;
      });
    };

    this.handleEvents = function() {
      var SELS = self.SELS;

      self.$document.off('click.chips-focus', SELS.CHIPS).on('click.chips-focus', SELS.CHIPS, function(e){
        $(e.target).find(SELS.INPUT).focus();
      });

      self.$document.off('click.chips-select', SELS.CHIP).on('click.chips-select', SELS.CHIP, function(e){
        var $chip = $(e.target);
        if ($chip.length) {
          var wasSelected = $chip.hasClass('selected');
          var $chips = $chip.closest(SELS.CHIPS);
          $(SELS.CHIP).removeClass('selected');

          if (!wasSelected) {
            self.selectChip($chip.index(), $chips);
          }
        }
      });

      self.$document.off('keydown.chips').on('keydown.chips', function(e){
        if ($(e.target).is('input, textarea')) {
          return;
        }

        // delete
        var $chip = self.$document.find(SELS.CHIP + SELS.SELECTED_CHIP);
        var $chips = $chip.closest(SELS.CHIPS);
        var length = $chip.siblings(SELS.CHIP).length;
        var index;

        if (!$chip.length) {
          return;
        }

        if (e.which === 8 || e.which === 46) {
          e.preventDefault();

          index = $chip.index();
          self.deleteChip(index, $chips);

          var selectIndex = null;
          if ((index + 1) < length) {
            selectIndex = index;
          } else if (index === length || (index + 1) === length) {
            selectIndex = length - 1;
          }

          if (selectIndex < 0) selectIndex = null;

          if (null !== selectIndex) {
            self.selectChip(selectIndex, $chips);
          }
          if (!length) $chips.find('input').focus();

        // left
        } else if (e.which === 37) {
          index = $chip.index() - 1;
          if (index < 0) {
            return;
          }
          $(SELS.CHIP).removeClass('selected');
          self.selectChip(index, $chips);

        // right
        } else if (e.which === 39) {
          index = $chip.index() + 1;
          $(SELS.CHIP).removeClass('selected');
          if (index > length) {
            $chips.find('input').focus();
            return;
          }
          self.selectChip(index, $chips);
        }
      });

      self.$document.off('focusin.chips', SELS.CHIPS + ' ' + SELS.INPUT).on('focusin.chips', SELS.CHIPS + ' ' + SELS.INPUT, function(e){
        var $currChips = $(e.target).closest(SELS.CHIPS);
        $currChips.addClass('focus');
        $currChips.siblings('label, .prefix').addClass('active');
        $(SELS.CHIP).removeClass('selected');
      });

      self.$document.off('focusout.chips', SELS.CHIPS + ' ' + SELS.INPUT).on('focusout.chips', SELS.CHIPS + ' ' + SELS.INPUT, function(e){
        var $currChips = $(e.target).closest(SELS.CHIPS);
        $currChips.removeClass('focus');

        // Remove active if empty
        if ($currChips.data('chips') === undefined || !$currChips.data('chips').length) {
          $currChips.siblings('label').removeClass('active');
        }
        $currChips.siblings('.prefix').removeClass('active');
      });

      self.$document.off('keydown.chips-add', SELS.CHIPS + ' ' + SELS.INPUT).on('keydown.chips-add', SELS.CHIPS + ' ' + SELS.INPUT, function(e){
        var $target = $(e.target);
        var $chips = $target.closest(SELS.CHIPS);
        var chipsLength = $chips.children(SELS.CHIP).length;

        // enter
        if (13 === e.which) {
          // Override enter if autocompleting.
          if (self.hasAutocomplete &&
              $chips.find('.autocomplete-content.dropdown-content').length &&
              $chips.find('.autocomplete-content.dropdown-content').children().length) {
            return;
          }

          e.preventDefault();
          self.addChip({tag: $target.val()}, $chips);
          $target.val('');
          return;
        }

        // delete or left
        if ((8 === e.keyCode || 37 === e.keyCode) && '' === $target.val() && chipsLength) {
          e.preventDefault();
          self.selectChip(chipsLength - 1, $chips);
          $target.blur();
          return;
        }
      });

      // Click on delete icon in chip.
      self.$document.off('click.chips-delete', SELS.CHIPS + ' ' + SELS.DELETE).on('click.chips-delete', SELS.CHIPS + ' ' + SELS.DELETE, function(e) {
        var $target = $(e.target);
        var $chips = $target.closest(SELS.CHIPS);
        var $chip = $target.closest(SELS.CHIP);
        e.stopPropagation();
        self.deleteChip($chip.index(), $chips);
        $chips.find('input').focus();
      });
    };

    this.chips = function($chips, chipId) {
      $chips.empty();
      $chips.data('chips').forEach(function(elem){
        $chips.append(self.renderChip(elem));
      });
      $chips.append($('<input id="' + chipId +'" class="input" placeholder="">'));
      self.setPlaceholder($chips);

      // Set for attribute for label
      var label = $chips.next('label');
      if (label.length) {
        label.attr('for', chipId);

        if ($chips.data('chips')!== undefined && $chips.data('chips').length) {
          label.addClass('active');
        }
      }

      // Setup autocomplete if needed.
      var input = $('#' + chipId);
      if (self.hasAutocomplete) {
        curr_options.autocompleteOptions.onAutocomplete = function(val) {
          self.addChip({tag: val}, $chips);
          input.val('');
          input.focus();
        }
        input.autocomplete(curr_options.autocompleteOptions);
      }
    };

    /**
     * Render chip jQuery element.
     * @param {Object} elem
     * @return {jQuery}
     */
    this.renderChip = function(elem) {
      if (!elem.tag) return;

      var $renderedChip = $('<div class="chip"></div>');
      $renderedChip.text(elem.tag);
      if (elem.image) {
        $renderedChip.prepend($('<img />').attr('src', elem.image))
      }
      $renderedChip.append($('<i class="material-icons close">close</i>'));
      return $renderedChip;
    };

    this.setPlaceholder = function($chips) {
      if (($chips.data('chips') !== undefined && !$chips.data('chips').length) && curr_options.placeholder) {
        $chips.find('input').prop('placeholder', curr_options.placeholder);

      } else if (($chips.data('chips') === undefined || !!$chips.data('chips').length) && curr_options.secondaryPlaceholder) {
        $chips.find('input').prop('placeholder', curr_options.secondaryPlaceholder);
      }
    };

    this.isValid = function($chips, elem) {
      var chips = $chips.data('chips');
      var exists = false;
      for (var i=0; i < chips.length; i++) {
        if (chips[i].tag === elem.tag) {
            exists = true;
            return;
        }
      }
      return '' !== elem.tag && !exists;
    };

    this.addChip = function(elem, $chips) {
      if (!self.isValid($chips, elem)) {
        return;
      }
      var $renderedChip = self.renderChip(elem);
      var newData = [];
      var oldData = $chips.data('chips');
      for (var i = 0; i < oldData.length; i++) {
        newData.push(oldData[i]);
      }
      newData.push(elem);

      $chips.data('chips', newData);
      $renderedChip.insertBefore($chips.find('input'));
      $chips.trigger('chip.add', elem);
      self.setPlaceholder($chips);
    };

    this.deleteChip = function(chipIndex, $chips) {
      var chip = $chips.data('chips')[chipIndex];
      $chips.find('.chip').eq(chipIndex).remove();

      var newData = [];
      var oldData = $chips.data('chips');
      for (var i = 0; i < oldData.length; i++) {
        if (i !== chipIndex) {
          newData.push(oldData[i]);
        }
      }

      $chips.data('chips', newData);
      $chips.trigger('chip.delete', chip);
      self.setPlaceholder($chips);
    };

    this.selectChip = function(chipIndex, $chips) {
      var $chip = $chips.find('.chip').eq(chipIndex);
      if ($chip && false === $chip.hasClass('selected')) {
        $chip.addClass('selected');
        $chips.trigger('chip.select', $chips.data('chips')[chipIndex]);
      }
    };

    this.getChipsElement = function(index, $chips) {
      return $chips.eq(index);
    };

    // init
    this.init();

    this.handleEvents();
  };
}( jQuery ));

(function ($) {
  $.fn.pushpin = function (options) {
    // Defaults
    var defaults = {
      top: 0,
      bottom: Infinity,
      offset: 0
    };

    // Remove pushpin event and classes
    if (options === "remove") {
      this.each(function () {
        if (id = $(this).data('pushpin-id')) {
          $(window).off('scroll.' + id);
          $(this).removeData('pushpin-id').removeClass('pin-top pinned pin-bottom').removeAttr('style');
        }
      });
      return false;
    }

    options = $.extend(defaults, options);


    $index = 0;
    return this.each(function() {
      var $uniqueId = Materialize.guid(),
          $this = $(this),
          $original_offset = $(this).offset().top;

      function removePinClasses(object) {
        object.removeClass('pin-top');
        object.removeClass('pinned');
        object.removeClass('pin-bottom');
      }

      function updateElements(objects, scrolled) {
        objects.each(function () {
          // Add position fixed (because its between top and bottom)
          if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {
            removePinClasses($(this));
            $(this).css('top', options.offset);
            $(this).addClass('pinned');
          }

          // Add pin-top (when scrolled position is above top)
          if (scrolled < options.top && !$(this).hasClass('pin-top')) {
            removePinClasses($(this));
            $(this).css('top', 0);
            $(this).addClass('pin-top');
          }

          // Add pin-bottom (when scrolled position is below bottom)
          if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {
            removePinClasses($(this));
            $(this).addClass('pin-bottom');
            $(this).css('top', options.bottom - $original_offset);
          }
        });
      }

      $(this).data('pushpin-id', $uniqueId);
      updateElements($this, $(window).scrollTop());
      $(window).on('scroll.' + $uniqueId, function () {
        var $scrolled = $(window).scrollTop() + options.offset;
        updateElements($this, $scrolled);
      });

    });

  };
}( jQuery ));
(function ($) {
  $(document).ready(function() {

    // jQuery reverse
    $.fn.reverse = [].reverse;

    // Hover behaviour: make sure this doesn't work on .click-to-toggle FABs!
    $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function(e) {
      var $this = $(this);
      openFABMenu($this);
    });
    $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function(e) {
      var $this = $(this);
      closeFABMenu($this);
    });

    // Toggle-on-click behaviour.
    $(document).on('click.fabClickToggle', '.fixed-action-btn.click-to-toggle > a', function(e) {
      var $this = $(this);
      var $menu = $this.parent();
      if ($menu.hasClass('active')) {
        closeFABMenu($menu);
      } else {
        openFABMenu($menu);
      }
    });

    // Toolbar transition behaviour.
    $(document).on('click.fabToolbar', '.fixed-action-btn.toolbar > a', function(e) {
      var $this = $(this);
      var $menu = $this.parent();
      FABtoToolbar($menu);
    });

  });

  $.fn.extend({
    openFAB: function() {
      openFABMenu($(this));
    },
    closeFAB: function() {
      closeFABMenu($(this));
    },
    openToolbar: function() {
      FABtoToolbar($(this));
    },
    closeToolbar: function() {
      toolbarToFAB($(this));
    }
  });


  var openFABMenu = function (btn) {
    var $this = btn;
    if ($this.hasClass('active') === false) {

      // Get direction option
      var horizontal = $this.hasClass('horizontal');
      var offsetY, offsetX;

      if (horizontal === true) {
        offsetX = 40;
      } else {
        offsetY = 40;
      }

      $this.addClass('active');
      $this.find('ul .btn-floating').velocity(
        { scaleY: ".4", scaleX: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
        { duration: 0 });

      var time = 0;
      $this.find('ul .btn-floating').reverse().each( function () {
        $(this).velocity(
          { opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: '0'},
          { duration: 80, delay: time });
        time += 40;
      });
    }
  };

  var closeFABMenu = function (btn) {
    var $this = btn;
    // Get direction option
    var horizontal = $this.hasClass('horizontal');
    var offsetY, offsetX;

    if (horizontal === true) {
      offsetX = 40;
    } else {
      offsetY = 40;
    }

    $this.removeClass('active');
    var time = 0;
    $this.find('ul .btn-floating').velocity("stop", true);
    $this.find('ul .btn-floating').velocity(
      { opacity: "0", scaleX: ".4", scaleY: ".4", translateY: offsetY + 'px', translateX: offsetX + 'px'},
      { duration: 80 }
    );
  };


  /**
   * Transform FAB into toolbar
   * @param  {Object}  object jQuery object
   */
  var FABtoToolbar = function(btn) {
    if (btn.attr('data-open') === "true") {
      return;
    }

    var offsetX, offsetY, scaleFactor;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var btnRect = btn[0].getBoundingClientRect();
    var anchor = btn.find('> a').first();
    var menu = btn.find('> ul').first();
    var backdrop = $('<div class="fab-backdrop"></div>');
    var fabColor = anchor.css('background-color');
    anchor.append(backdrop);

    offsetX = btnRect.left - (windowWidth / 2) + (btnRect.width / 2);
    offsetY = windowHeight - btnRect.bottom;
    scaleFactor = windowWidth / backdrop.width();
    btn.attr('data-origin-bottom', btnRect.bottom);
    btn.attr('data-origin-left', btnRect.left);
    btn.attr('data-origin-width', btnRect.width);

    // Set initial state
    btn.addClass('active');
    btn.attr('data-open', true);
    btn.css({
      'text-align': 'center',
      width: '100%',
      bottom: 0,
      left: 0,
      transform: 'translateX(' + offsetX + 'px)',
      transition: 'none'
    });
    anchor.css({
      transform: 'translateY(' + -offsetY + 'px)',
      transition: 'none'
    });
    backdrop.css({
      'background-color': fabColor
    });


    setTimeout(function() {
      btn.css({
        transform: '',
        transition: 'transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s'
      });
      anchor.css({
        overflow: 'visible',
        transform: '',
        transition: 'transform .2s'
      });

      setTimeout(function() {
        btn.css({
          overflow: 'hidden',
          'background-color': fabColor
        });
        backdrop.css({
          transform: 'scale(' + scaleFactor + ')',
          transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
        });
        menu.find('> li > a').css({
          opacity: 1
        });

        // Scroll to close.
        $(window).on('scroll.fabToolbarClose', function() {
          toolbarToFAB(btn);
          $(window).off('scroll.fabToolbarClose');
          $(document).off('click.fabToolbarClose');
        });

        $(document).on('click.fabToolbarClose', function(e) {
          if (!$(e.target).closest(menu).length) {
            toolbarToFAB(btn);
            $(window).off('scroll.fabToolbarClose');
            $(document).off('click.fabToolbarClose');
          }
        });
      }, 100);
    }, 0);
  };

  /**
   * Transform toolbar back into FAB
   * @param  {Object}  object jQuery object
   */
  var toolbarToFAB = function(btn) {
    if (btn.attr('data-open') !== "true") {
      return;
    }

    var offsetX, offsetY, scaleFactor;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var btnWidth = btn.attr('data-origin-width');
    var btnBottom = btn.attr('data-origin-bottom');
    var btnLeft = btn.attr('data-origin-left');
    var anchor = btn.find('> .btn-floating').first();
    var menu = btn.find('> ul').first();
    var backdrop = btn.find('.fab-backdrop');
    var fabColor = anchor.css('background-color');

    offsetX = btnLeft - (windowWidth / 2) + (btnWidth / 2);
    offsetY = windowHeight - btnBottom;
    scaleFactor = windowWidth / backdrop.width();


    // Hide backdrop
    btn.removeClass('active');
    btn.attr('data-open', false);
    btn.css({
      'background-color': 'transparent',
      transition: 'none'
    });
    anchor.css({
      transition: 'none'
    });
    backdrop.css({
      transform: 'scale(0)',
      'background-color': fabColor
    });
    menu.find('> li > a').css({
      opacity: ''
    });

    setTimeout(function() {
      backdrop.remove();

      // Set initial state.
      btn.css({
        'text-align': '',
        width: '',
        bottom: '',
        left: '',
        overflow: '',
        'background-color': '',
        transform: 'translate3d(' + -offsetX + 'px,0,0)'
      });
      anchor.css({
        overflow: '',
        transform: 'translate3d(0,' + offsetY + 'px,0)'
      });

      setTimeout(function() {
        btn.css({
          transform: 'translate3d(0,0,0)',
          transition: 'transform .2s'
        });
        anchor.css({
          transform: 'translate3d(0,0,0)',
          transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
        });
      }, 20);
    }, 200);
  };


}( jQuery ));

(function ($) {
  // Image transition function
  Materialize.fadeInImage = function(selectorOrEl) {
    var element;
    if (typeof(selectorOrEl) === 'string') {
      element = $(selectorOrEl);
    } else if (typeof(selectorOrEl) === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    element.css({opacity: 0});
    $(element).velocity({opacity: 1}, {
      duration: 650,
      queue: false,
      easing: 'easeOutSine'
    });
    $(element).velocity({opacity: 1}, {
      duration: 1300,
      queue: false,
      easing: 'swing',
      step: function(now, fx) {
        fx.start = 100;
        var grayscale_setting = now/100;
        var brightness_setting = 150 - (100 - now)/1.75;

        if (brightness_setting < 100) {
          brightness_setting = 100;
        }
        if (now >= 0) {
          $(this).css({
              "-webkit-filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)",
              "filter": "grayscale("+grayscale_setting+")" + "brightness("+brightness_setting+"%)"
          });
        }
      }
    });
  };

  // Horizontal staggered list
  Materialize.showStaggeredList = function(selectorOrEl) {
    var element;
    if (typeof(selectorOrEl) === 'string') {
      element = $(selectorOrEl);
    } else if (typeof(selectorOrEl) === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    var time = 0;
    element.find('li').velocity(
        { translateX: "-100px"},
        { duration: 0 });

    element.find('li').each(function() {
      $(this).velocity(
        { opacity: "1", translateX: "0"},
        { duration: 800, delay: time, easing: [60, 10] });
      time += 120;
    });
  };


  $(document).ready(function() {
    // Hardcoded .staggered-list scrollFire
    // var staggeredListOptions = [];
    // $('ul.staggered-list').each(function (i) {

    //   var label = 'scrollFire-' + i;
    //   $(this).addClass(label);
    //   staggeredListOptions.push(
    //     {selector: 'ul.staggered-list.' + label,
    //      offset: 200,
    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});
    // });
    // scrollFire(staggeredListOptions);

    // HammerJS, Swipe navigation

    // Touch Event
    var swipeLeft = false;
    var swipeRight = false;


    // Dismissible Collections
    $('.dismissable').each(function() {
      $(this).hammer({
        prevent_default: false
      }).on('pan', function(e) {
        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;

          $this.velocity({ translateX: x
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});

          // Swipe Left
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {
            swipeLeft = true;
          }

          // Swipe Right
          if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {
            swipeRight = true;
          }
        }
      }).on('panend', function(e) {
        // Reset if collection is moved back into original position
        if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {
          swipeRight = false;
          swipeLeft = false;
        }

        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          if (swipeLeft || swipeRight) {
            var fullWidth;
            if (swipeLeft) { fullWidth = $this.innerWidth(); }
            else { fullWidth = -1 * $this.innerWidth(); }

            $this.velocity({ translateX: fullWidth,
              }, {duration: 100, queue: false, easing: 'easeOutQuad', complete:
              function() {
                $this.css('border', 'none');
                $this.velocity({ height: 0, padding: 0,
                  }, {duration: 200, queue: false, easing: 'easeOutQuad', complete:
                    function() { $this.remove(); }
                  });
              }
            });
          }
          else {
            $this.velocity({ translateX: 0,
              }, {duration: 100, queue: false, easing: 'easeOutQuad'});
          }
          swipeLeft = false;
          swipeRight = false;
        }
      });

    });


    // time = 0
    // // Vertical Staggered list
    // $('ul.staggered-list.vertical li').velocity(
    //     { translateY: "100px"},
    //     { duration: 0 });

    // $('ul.staggered-list.vertical li').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", translateY: "0"},
    //     { duration: 800, delay: time, easing: [60, 25] });
    //   time += 120;
    // });

    // // Fade in and Scale
    // $('.fade-in.scale').velocity(
    //     { scaleX: .4, scaleY: .4, translateX: -600},
    //     { duration: 0});
    // $('.fade-in').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},
    //     { duration: 800, easing: [60, 10] });
    // });
  });
}( jQuery ));

(function($) {

  var scrollFireEventsHandled = false;

  // Input: Array of JSON objects {selector, offset, callback}
  Materialize.scrollFire = function(options) {
    var onScroll = function() {
      var windowScroll = window.pageYOffset + window.innerHeight;

      for (var i = 0 ; i < options.length; i++) {
        // Get options from each line
        var value = options[i];
        var selector = value.selector,
            offset = value.offset,
            callback = value.callback;

        var currentElement = document.querySelector(selector);
        if ( currentElement !== null) {
          var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

          if (windowScroll > (elementOffset + offset)) {
            if (value.done !== true) {
              if (typeof(callback) === 'function') {
                callback.call(this, currentElement);
              } else if (typeof(callback) === 'string') {
                var callbackFunc = new Function(callback);
                callbackFunc(currentElement);
              }
              value.done = true;
            }
          }
        }
      }
    };


    var throttledScroll = Materialize.throttle(function() {
      onScroll();
    }, options.throttle || 100);

    if (!scrollFireEventsHandled) {
      window.addEventListener("scroll", throttledScroll);
      window.addEventListener("resize", throttledScroll);
      scrollFireEventsHandled = true;
    }

    // perform a scan once, after current execution context, and after dom is ready
    setTimeout(throttledScroll, 0);
  };

})(jQuery);

/*!
 * pickadate.js v3.5.0, 2014/04/13
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function ( factory ) {

    Materialize.Picker = factory( jQuery )

}(function( $ ) {

var $window = $( window )
var $document = $( document )
var $html = $( document.documentElement )


/**
 * The picker constructor that creates a blank picker.
 */
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

    // If there’s no element, return the picker constructor.
    if ( !ELEMENT ) return PickerConstructor


    var
        IS_DEFAULT_THEME = false,


        // The state of the picker.
        STATE = {
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) )
        },


        // Merge the defaults and options passed.
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


        // Merge the default classes with the settings classes.
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


        // The element node wrapper into a jQuery object.
        $ELEMENT = $( ELEMENT ),


        // Pseudo picker constructor.
        PickerInstance = function() {
            return this.start()
        },


        // The picker prototype.
        P = PickerInstance.prototype = {

            constructor: PickerInstance,

            $node: $ELEMENT,


            /**
             * Initialize everything
             */
            start: function() {

                // If it’s already started, do nothing.
                if ( STATE && STATE.start ) return P


                // Update the picker states.
                STATE.methods = {}
                STATE.start = true
                STATE.open = false
                STATE.type = ELEMENT.type


                // Confirm focus state, convert into text input to remove UA stylings,
                // and set as readonly to prevent keyboard popup.
                ELEMENT.autofocus = ELEMENT == getActiveElement()
                ELEMENT.readOnly = !SETTINGS.editable
                ELEMENT.id = ELEMENT.id || STATE.id
                if ( ELEMENT.type != 'text' ) {
                    ELEMENT.type = 'text'
                }


                // Create a new picker component with the settings.
                P.component = new COMPONENT(P, SETTINGS)


                // Create the picker root with a holder and then prepare it.
                P.$root = $( PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"') )
                prepareElementRoot()


                // If there’s a format for the hidden input element, create the element.
                if ( SETTINGS.formatSubmit ) {
                    prepareElementHidden()
                }


                // Prepare the input element.
                prepareElement()


                // Insert the root as specified in the settings.
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
                else $ELEMENT.before( P.$root )


                // Bind the default component and settings events.
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                })


                // Once we’re all set, check the theme in use.
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$root.children()[ 0 ] )


                // If the element has autofocus, open the picker.
                if ( ELEMENT.autofocus ) {
                    P.open()
                }


                // Trigger queued the “start” and “render” events.
                return P.trigger( 'start' ).trigger( 'render' )
            }, //start


            /**
             * Render a new picker
             */
            render: function( entireComponent ) {

                // Insert a new component holder in the root or box.
                if ( entireComponent ) P.$root.html( createWrappedComponent() )
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                // Trigger the queued “render” events.
                return P.trigger( 'render' )
            }, //render


            /**
             * Destroy everything
             */
            stop: function() {

                // If it’s already stopped, do nothing.
                if ( !STATE.start ) return P

                // Then close the picker.
                P.close()

                // Remove the hidden field.
                if ( P._hidden ) {
                    P._hidden.parentNode.removeChild( P._hidden )
                }

                // Remove the root.
                P.$root.remove()

                // Remove the input class, remove the stored data, and unbind
                // the events (after a tick for IE - see `P.close`).
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
                setTimeout( function() {
                    $ELEMENT.off( '.' + STATE.id )
                }, 0)

                // Restore the element state
                ELEMENT.type = STATE.type
                ELEMENT.readOnly = false

                // Trigger the queued “stop” events.
                P.trigger( 'stop' )

                // Reset the picker states.
                STATE.methods = {}
                STATE.start = false

                return P
            }, //stop


            /**
             * Open up the picker
             */
            open: function( dontGiveFocus ) {

                // If it’s already open, do nothing.
                if ( STATE.open ) return P

                // Add the “active” class.
                $ELEMENT.addClass( CLASSES.active )
                aria( ELEMENT, 'expanded', true )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So add the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Add the “opened” class to the picker root.
                    P.$root.addClass( CLASSES.opened )
                    aria( P.$root[0], 'hidden', false )

                }, 0 )

                // If we have to give focus, bind the element and doc events.
                if ( dontGiveFocus !== false ) {

                    // Set it as open.
                    STATE.open = true

                    // Prevent the page from scrolling.
                    if ( IS_DEFAULT_THEME ) {
                        $html.
                            css( 'overflow', 'hidden' ).
                            css( 'padding-right', '+=' + getScrollbarWidth() )
                    }

                    // Pass focus to the root element’s jQuery object.
                    // * Workaround for iOS8 to bring the picker’s root into view.
                    P.$root.eq(0).focus()

                    // Bind the document events.
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {

                        var target = event.target

                        // If the target of the event is not the element, close the picker picker.
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
                        //   Also, for Firefox, a click on an `option` element bubbles up directly
                        //   to the doc. So make sure the target wasn't the doc.
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
                        //   which causes the picker to unexpectedly close when right-clicking it. So make
                        //   sure the event wasn’t a right-click.
                        if ( target != ELEMENT && target != document && event.which != 3 ) {

                            // If the target was the holder that covers the screen,
                            // keep the element focused to maintain tabindex.
                            P.close( target === P.$root.children()[0] )
                        }

                    }).on( 'keydown.' + STATE.id, function( event ) {

                        var
                            // Get the keycode.
                            keycode = event.keyCode,

                            // Translate that to a selection change.
                            keycodeToMove = P.component.key[ keycode ],

                            // Grab the target.
                            target = event.target


                        // On escape, close the picker and give focus.
                        if ( keycode == 27 ) {
                            P.close( true )
                        }


                        // Check if there is a key movement or “enter” keypress on the element.
                        else if ( target == P.$root[0] && ( keycodeToMove || keycode == 13 ) ) {

                            // Prevent the default action to stop page movement.
                            event.preventDefault()

                            // Trigger the key movement action.
                            if ( keycodeToMove ) {
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }

                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                P.set( 'select', P.component.item.highlight )
                                if ( SETTINGS.closeOnSelect ) {
                                    P.close( true )
                                }
                            }
                        }


                        // If the target is within the root and “enter” is pressed,
                        // prevent the default action and trigger a click on the target instead.
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                            event.preventDefault()
                            target.click()
                        }
                    })
                }

                // Trigger the queued “open” events.
                return P.trigger( 'open' )
            }, //open


            /**
             * Close the picker
             */
            close: function( giveFocus ) {

                // If we need to give focus, do it before changing states.
                if ( giveFocus ) {
                    // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
                    // The focus is triggered *after* the close has completed - causing it
                    // to open again. So unbind and rebind the event at the next tick.
                    P.$root.off( 'focus.toOpen' ).eq(0).focus()
                    setTimeout( function() {
                        P.$root.on( 'focus.toOpen', handleFocusToOpenEvent )
                    }, 0 )
                }

                // Remove the “active” class.
                $ELEMENT.removeClass( CLASSES.active )
                aria( ELEMENT, 'expanded', false )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So remove the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Remove the “opened” and “focused” class from the picker root.
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                    aria( P.$root[0], 'hidden', true )

                }, 0 )

                // If it’s already closed, do nothing more.
                if ( !STATE.open ) return P

                // Set it as closed.
                STATE.open = false

                // Allow the page to scroll.
                if ( IS_DEFAULT_THEME ) {
                    $html.
                        css( 'overflow', '' ).
                        css( 'padding-right', '-=' + getScrollbarWidth() )
                }

                // Unbind the document events.
                $document.off( '.' + STATE.id )

                // Trigger the queued “close” events.
                return P.trigger( 'close' )
            }, //close


            /**
             * Clear the values
             */
            clear: function( options ) {
                return P.set( 'clear', null, options )
            }, //clear


            /**
             * Set something
             */
            set: function( thing, value, options ) {

                var thingItem, thingValue,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                // Make sure we have usable options.
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = value
                    }

                    // Go through the things of items to set.
                    for ( thingItem in thingObject ) {

                        // Grab the value of the thing.
                        thingValue = thingObject[ thingItem ]

                        // First, if the item exists and there’s a value, set it.
                        if ( thingItem in P.component.item ) {
                            if ( thingValue === undefined ) thingValue = null
                            P.component.set( thingItem, thingValue, options )
                        }

                        // Then, check to update the element value and broadcast a change.
                        if ( thingItem == 'select' || thingItem == 'clear' ) {
                            $ELEMENT.
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
                                trigger( 'change' )
                        }
                    }

                    // Render a new picker.
                    P.render()
                }

                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
                return options.muted ? P : P.trigger( 'set', thingObject )
            }, //set


            /**
             * Get something
             */
            get: function( thing, format ) {

                // Make sure there’s something to get.
                thing = thing || 'value'

                // If a picker state exists, return that.
                if ( STATE[ thing ] != null ) {
                    return STATE[ thing ]
                }

                // Return the submission value, if that.
                if ( thing == 'valueSubmit' ) {
                    if ( P._hidden ) {
                        return P._hidden.value
                    }
                    thing = 'value'
                }

                // Return the value, if that.
                if ( thing == 'value' ) {
                    return ELEMENT.value
                }

                // Check if a component item exists, return that.
                if ( thing in P.component.item ) {
                    if ( typeof format == 'string' ) {
                        var thingValue = P.component.get( thing )
                        return thingValue ?
                            PickerConstructor._.trigger(
                                P.component.formats.toString,
                                P.component,
                                [ format, thingValue ]
                            ) : ''
                    }
                    return P.component.get( thing )
                }
            }, //get



            /**
             * Bind events on the things.
             */
            on: function( thing, method, internal ) {

                var thingName, thingMethod,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = method
                    }

                    // Go through the things to bind to.
                    for ( thingName in thingObject ) {

                        // Grab the method of the thing.
                        thingMethod = thingObject[ thingName ]

                        // If it was an internal binding, prefix it.
                        if ( internal ) {
                            thingName = '_' + thingName
                        }

                        // Make sure the thing methods collection exists.
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

                        // Add the method to the relative method collection.
                        STATE.methods[ thingName ].push( thingMethod )
                    }
                }

                return P
            }, //on



            /**
             * Unbind events on the things.
             */
            off: function() {
                var i, thingName,
                    names = arguments;
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
                    thingName = names[i]
                    if ( thingName in STATE.methods ) {
                        delete STATE.methods[thingName]
                    }
                }
                return P
            },


            /**
             * Fire off method events.
             */
            trigger: function( name, data ) {
                var _trigger = function( name ) {
                    var methodList = STATE.methods[ name ]
                    if ( methodList ) {
                        methodList.map( function( method ) {
                            PickerConstructor._.trigger( method, P, [ data ] )
                        })
                    }
                }
                _trigger( '_' + name )
                _trigger( name )
                return P
            } //trigger
        } //PickerInstance.prototype


    /**
     * Wrap the picker holder components together.
     */
    function createWrappedComponent() {

        // Create a picker wrapper holder
        return PickerConstructor._.node( 'div',

            // Create a picker wrapper node
            PickerConstructor._.node( 'div',

                // Create a picker frame
                PickerConstructor._.node( 'div',

                    // Create a picker box node
                    PickerConstructor._.node( 'div',

                        // Create the components nodes.
                        P.component.nodes( STATE.open ),

                        // The picker box class
                        CLASSES.box
                    ),

                    // Picker wrap class
                    CLASSES.wrap
                ),

                // Picker frame class
                CLASSES.frame
            ),

            // Picker holder class
            CLASSES.holder
        ) //endreturn
    } //createWrappedComponent



    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

        $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the “input” class name.
            addClass(CLASSES.input).

            // Remove the tabindex.
            attr('tabindex', -1).

            // If there’s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            )


        // Only bind keydown events if the element isn’t editable.
        if ( !SETTINGS.editable ) {

            $ELEMENT.

                // On focus/click, focus onto the root to open it up.
                on( 'focus.' + STATE.id + ' click.' + STATE.id, function( event ) {
                    event.preventDefault()
                    P.$root.eq(0).focus()
                }).

                // Handle keyboard event based on the picker being opened or not.
                on( 'keydown.' + STATE.id, handleKeydownEvent )
        }


        // Update the aria attributes.
        aria(ELEMENT, {
            haspopup: true,
            expanded: false,
            readonly: false,
            owns: ELEMENT.id + '_root'
        })
    }


    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {

        P.$root.

            on({

                // For iOS8.
                keydown: handleKeydownEvent,

                // When something within the root is focused, stop from bubbling
                // to the doc and remove the “focused” state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the root holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = event.target

                    // Make sure the target isn’t the root holder so it can bubble up.
                    if ( target != P.$root.children()[ 0 ] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, don’t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {

                            event.preventDefault()

                            // Re-focus onto the root so that users can click away
                            // from elements focused within the picker.
                            P.$root.eq(0).focus()
                        }
                    }
                }
            }).

            // Add/remove the “target” class on focus and blur.
            on({
                focus: function() {
                    $ELEMENT.addClass( CLASSES.target )
                },
                blur: function() {
                    $ELEMENT.removeClass( CLASSES.target )
                }
            }).

            // Open the picker and adjust the root “focused” state
            on( 'focus.toOpen', handleFocusToOpenEvent ).

            // If there’s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = getActiveElement()
                    activeElement = activeElement && ( activeElement.type || activeElement.href )

                // If it’s disabled or nothing inside is actively focused, re-focus the element.
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
                    P.$root.eq(0).focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if ( !targetDisabled && targetData.nav ) {
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
                }

                // If something is picked, set `select` then close with focus.
                else if ( !targetDisabled && 'pick' in targetData ) {
                    P.set( 'select', targetData.pick )
                    if ( SETTINGS.closeOnSelect ) {
                        P.close( true )
                    }
                }

                // If a “clear” button is pressed, empty the values and close with focus.
                else if ( targetData.clear ) {
                    P.clear()
                    if ( SETTINGS.closeOnSelect ) {
                        P.close( true )
                    }
                }

                else if ( targetData.close ) {
                    P.close( true )
                }

            }) //P.$root

        aria( P.$root[0], 'hidden', true )
    }


     /**
      * Prepare the hidden input element along with all bindings.
      */
    function prepareElementHidden() {

        var name

        if ( SETTINGS.hiddenName === true ) {
            name = ELEMENT.name
            ELEMENT.name = ''
        }
        else {
            name = [
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
            ]
            name = name[0] + ELEMENT.name + name[1]
        }

        P._hidden = $(
            '<input ' +
            'type=hidden ' +

            // Create the name using the original input’s with a prefix and suffix.
            'name="' + name + '"' +

            // If the element has a value, set the hidden value as well.
            (
                $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
            ) +
            '>'
        )[0]

        $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            })


        // Insert the hidden input as specified in the settings.
        if ( SETTINGS.container ) $( SETTINGS.container ).append( P._hidden )
        else $ELEMENT.before( P._hidden )
    }


    // For iOS8.
    function handleKeydownEvent( event ) {

        var keycode = event.keyCode,

            // Check if one of the delete keys was pressed.
            isKeycodeDelete = /^(8|46)$/.test(keycode)

        // For some reason IE clears the input value on “escape”.
        if ( keycode == 27 ) {
            P.close()
            return false
        }

        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

            // Prevent it from moving the page and bubbling to doc.
            event.preventDefault()
            event.stopPropagation()

            // If `delete` was pressed, clear the values and close the picker.
            // Otherwise open the picker.
            if ( isKeycodeDelete ) { P.clear().close() }
            else { P.open() }
        }
    }


    // Separated for IE
    function handleFocusToOpenEvent( event ) {

        // Stop the event from propagating to the doc.
        event.stopPropagation()

        // If it’s a focus event, add the “focused” class to the root.
        if ( event.type == 'focus' ) {
            P.$root.addClass( CLASSES.focused )
        }

        // And then finally open the picker.
        P.open()
    }


    // Return a new picker instance.
    return new PickerInstance()
} //PickerConstructor



/**
 * The default classes and prefix to use for the HTML classes.
 */
PickerConstructor.klasses = function( prefix ) {
    prefix = prefix || 'picker'
    return {

        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',

        input: prefix + '__input',
        active: prefix + '__input--active',
        target: prefix + '__input--target',

        holder: prefix + '__holder',

        frame: prefix + '__frame',
        wrap: prefix + '__wrap',

        box: prefix + '__box'
    }
} //PickerConstructor.klasses



/**
 * Check if the default theme is being used.
 */
function isUsingDefaultTheme( element ) {

    var theme,
        prop = 'position'

    // For IE.
    if ( element.currentStyle ) {
        theme = element.currentStyle[prop]
    }

    // For normal browsers.
    else if ( window.getComputedStyle ) {
        theme = getComputedStyle( element )[prop]
    }

    return theme == 'fixed'
}



/**
 * Get the width of the browser’s scrollbar.
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
 */
function getScrollbarWidth() {

    if ( $html.height() <= $window.height() ) {
        return 0
    }

    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
        appendTo( 'body' )

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth

    // Force adding scrollbars.
    $outer.css( 'overflow', 'scroll' )

    // Add the inner div.
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth

    // Remove the divs.
    $outer.remove()

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll
}



/**
 * PickerConstructor helper methods.
 */
PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function( groupObject ) {

        var
            // Scope for the looped object
            loopObjectScope,

            // Create the nodes list
            nodesList = '',

            // The counter starts from the `min`
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


        // Loop from the `min` to `max`, incrementing by `i`
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

            // Trigger the `item` function within scope of the object
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

            // Splice the subgroup and create nodes out of the sub nodes
            nodesList += PickerConstructor._.node(
                groupObject.node,
                loopObjectScope[ 0 ],   // the node
                loopObjectScope[ 1 ],   // the classes
                loopObjectScope[ 2 ]    // the attributes
            )
        }

        // Return the list of nodes
        return nodesList
    }, //group


    /**
     * Create a dom node string
     */
    node: function( wrapper, item, klass, attribute ) {

        // If the item is false-y, just return an empty string
        if ( !item ) return ''

        // If the item is an array, do a join
        item = $.isArray( item ) ? item.join( '' ) : item

        // Check for the class
        klass = klass ? ' class="' + klass + '"' : ''

        // Check for any attributes
        attribute = attribute ? ' ' + attribute : ''

        // Return the wrapped item
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function( number ) {
        return ( number < 10 ? '0': '' ) + number
    },


    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function( callback, scope, args ) {
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
    },


    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function( string ) {
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
    },


    /**
     * Tell if something is a date object.
     */
    isDate: function( value ) {
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )
    },


    /**
     * Tell if something is an integer.
     */
    isInteger: function( value ) {
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
    },


    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
} //PickerConstructor._



/**
 * Extend the picker with a component and defaults.
 */
PickerConstructor.extend = function( name, Component ) {

    // Extend jQuery.
    $.fn[ name ] = function( options, action ) {

        // Grab the component data.
        var componentData = this.data( name )

        // If the picker is requested, return the data object.
        if ( options == 'picker' ) {
            return componentData
        }

        // If the component data exists and `options` is a string, carry out the action.
        if ( componentData && typeof options == 'string' ) {
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
        }

        // Otherwise go through each matched element and if the component
        // doesn’t exist, create a new picker using `this` element
        // and merging the defaults and options with a deep copy.
        return this.each( function() {
            var $this = $( this )
            if ( !$this.data( name ) ) {
                new PickerConstructor( this, name, Component, options )
            }
        })
    }

    // Set the defaults.
    $.fn[ name ].defaults = Component.defaults
} //PickerConstructor.extend



function aria(element, attribute, value) {
    if ( $.isPlainObject(attribute) ) {
        for ( var key in attribute ) {
            ariaSet(element, key, attribute[key])
        }
    }
    else {
        ariaSet(element, attribute, value)
    }
}
function ariaSet(element, attribute, value) {
    element.setAttribute(
        (attribute == 'role' ? '' : 'aria-') + attribute,
        value
    )
}
function ariaAttr(attribute, data) {
    if ( !$.isPlainObject(attribute) ) {
        attribute = { attribute: data }
    }
    data = ''
    for ( var key in attribute ) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key]
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
    }
    return data
}

// IE8 bug throws an error for activeElements within iframes.
function getActiveElement() {
    try {
        return document.activeElement
    } catch ( err ) { }
}



// Expose the picker constructor.
return PickerConstructor


}));

/*!
 * Date picker for pickadate.js v3.5.0
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function ( factory ) {
  factory( Materialize.Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var DAYS_IN_WEEK = 7,
    WEEKS_IN_CALENDAR = 6,
    _ = Picker._;



/**
 * The date picker constructor
 */
function DatePicker( picker, settings ) {

    var calendar = this,
        element = picker.$node[ 0 ],
        elementValue = element.value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function() {

            return element.currentStyle ?

                // For IE.
                element.currentStyle.direction == 'rtl' :

                // For normal browsers.
                getComputedStyle( picker.$root[0] ).direction == 'rtl'
        }

    calendar.settings = settings
    calendar.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    calendar.item = {}

    calendar.item.clear = null
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
    calendar.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( calendar.item.disable )

    calendar.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        calendar.set( 'select', valueString, { format: formatString })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        calendar.
            set( 'select', null ).
            set( 'highlight', calendar.item.now )
    }


    // The keycode to movement mapping.
    calendar.key = {
        40: 7, // Down
        38: -7, // Up
        39: function() { return isRTL() ? -1 : 1 }, // Right
        37: function() { return isRTL() ? 1 : -1 }, // Left
        go: function( timeChange ) {
            var highlightedObject = calendar.item.highlight,
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(
                'highlight',
                targetDate,
                { interval: timeChange }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
                }
            })
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
                }
            })
        }, 1 ).
        on( 'open', function() {
            var includeToday = ''
            if ( calendar.disabled( calendar.get('now') ) ) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button, select' ).attr( 'disabled', true )
        }, 1 )

} //DatePicker


/**
 * Set a datepicker item object.
 */
DatePicker.prototype.set = function( type, value, options ) {

    var calendar = this,
        calendarItem = calendar.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        calendarItem[ type ] = value
        return calendar
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        calendar.set( 'highlight', calendarItem.select, options )
    }
    else if ( type == 'highlight' ) {
        calendar.set( 'view', calendarItem.highlight, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
            calendar.set( 'select', calendarItem.select, options )
        }
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
            calendar.set( 'highlight', calendarItem.highlight, options )
        }
    }

    return calendar
} //DatePicker.prototype.set


/**
 * Get a datepicker item object.
 */
DatePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //DatePicker.prototype.get


/**
 * Create a picker date object.
 */
DatePicker.prototype.create = function( type, value, options ) {

    var isInfiniteValue,
        calendar = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value


    // If it’s infinity, update the value.
    if ( value == -Infinity || value == Infinity ) {
        isInfiniteValue = value
    }

    // If it’s an object, use the native date object.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.obj
    }

    // If it’s an array, convert it into a date and make sure
    // that it’s a valid date – otherwise default to today.
    else if ( $.isArray( value ) ) {
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )
        value = _.isDate( value ) ? value : calendar.create().obj
    }

    // If it’s a number or date object, make a normalized date.
    else if ( _.isInteger( value ) || _.isDate( value ) ) {
        value = calendar.normalize( new Date( value ), options )
    }

    // If it’s a literal true or any other case, set it to now.
    else /*if ( value === true )*/ {
        value = calendar.now( type, value, options )
    }

    // Return the compiled object.
    return {
        year: isInfiniteValue || value.getFullYear(),
        month: isInfiniteValue || value.getMonth(),
        date: isInfiniteValue || value.getDate(),
        day: isInfiniteValue || value.getDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
    }
} //DatePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
DatePicker.prototype.createRange = function( from, to ) {

    var calendar = this,
        createDate = function( date ) {
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
                return calendar.create( date )
            }
            return date
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createDate( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createDate( to )
    }

    // Create relative dates.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.year, to.month, to.date + from ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.year, from.month, from.date + to ];
    }

    return {
        from: createDate( from ),
        to: createDate( to )
    }
} //DatePicker.prototype.createRange


/**
 * Check if a date unit falls within a date range object.
 */
DatePicker.prototype.withinRange = function( range, dateUnit ) {
    range = this.createRange(range.from, range.to)
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
}


/**
 * Check if two date range objects overlap.
 */
DatePicker.prototype.overlapRanges = function( one, two ) {

    var calendar = this

    // Convert the ranges into comparable dates.
    one = calendar.createRange( one.from, one.to )
    two = calendar.createRange( two.from, two.to )

    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
}


/**
 * Get the date today.
 */
DatePicker.prototype.now = function( type, value, options ) {
    value = new Date()
    if ( options && options.rel ) {
        value.setDate( value.getDate() + options.rel )
    }
    return this.normalize( value, options )
}


/**
 * Navigate to next/prev month.
 */
DatePicker.prototype.navigate = function( type, value, options ) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray( value ),
        isTargetObject = $.isPlainObject( value ),
        viewsetObject = this.item.view/*,
        safety = 100*/


    if ( isTargetArray || isTargetObject ) {

        if ( isTargetObject ) {
            targetYear = value.year
            targetMonth = value.month
            targetDate = value.date
        }
        else {
            targetYear = +value[0]
            targetMonth = +value[1]
            targetDate = +value[2]
        }

        // If we’re navigating months but the view is in a different
        // month, navigate to the view’s year and month.
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
            targetYear = viewsetObject.year
            targetMonth = viewsetObject.month
        }

        // Figure out the expected target year and month.
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )
        targetYear = targetDateObject.getFullYear()
        targetMonth = targetDateObject.getMonth()

        // If the month we’re going to doesn’t have enough days,
        // keep decreasing the date until we reach the month’s last date.
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {
            targetDate -= 1
            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/
        }

        value = [ targetYear, targetMonth, targetDate ]
    }

    return value
} //DatePicker.prototype.navigate


/**
 * Normalize a date by setting the hours to midnight.
 */
DatePicker.prototype.normalize = function( value/*, options*/ ) {
    value.setHours( 0, 0, 0, 0 )
    return value
}


/**
 * Measure the range of dates.
 */
DatePicker.prototype.measure = function( type, value/*, options*/ ) {

    var calendar = this

    // If it’s anything false-y, remove the limits.
    if ( !value ) {
        value = type == 'min' ? -Infinity : Infinity
    }

    // If it’s a string, parse it.
    else if ( typeof value == 'string' ) {
        value = calendar.parse( type, value )
    }

    // If it's an integer, get a date relative to today.
    else if ( _.isInteger( value ) ) {
        value = calendar.now( type, value, { rel: value } )
    }

    return value
} ///DatePicker.prototype.measure


/**
 * Create a viewset object based on navigation.
 */
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
    return this.create([ dateObject.year, dateObject.month, 1 ])
}


/**
 * Validate a date as enabled and shift if needed.
 */
DatePicker.prototype.validate = function( type, dateObject, options ) {

    var calendar = this,

        // Keep a reference to the original date.
        originalDateObject = dateObject,

        // Make sure we have an interval.
        interval = options && options.interval ? options.interval : 1,

        // Check if the calendar enabled dates are inverted.
        isFlippedBase = calendar.item.enable === -1,

        // Check if we have any enabled dates after/before now.
        hasEnabledBeforeTarget, hasEnabledAfterTarget,

        // The min & max limits.
        minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,

        // Check if we’ve reached the limit during shifting.
        reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

            // If there’s a date, check where it is relative to the target.
            if ( $.isArray( value ) ) {
                var dateTime = calendar.create( value ).pick
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
            }

            // Return only integers for enabled weekdays.
            return _.isInteger( value )
        }).length/*,

        safety = 100*/



    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.
    if ( !options || !options.nav ) if (
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {


        // When inverted, flip the direction if there aren’t any enabled weekdays
        // and there are no enabled dates in the direction of the interval.
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1
        }


        // Keep looping until we reach an enabled date.
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/


            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject
                interval = interval > 0 ? 1 : -1
            }


            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {
                reachedMin = true
                interval = 1
                dateObject = calendar.create([
                    minLimitObject.year,
                    minLimitObject.month,
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                ])
            }
            else if ( dateObject.pick >= maxLimitObject.pick ) {
                reachedMax = true
                interval = -1
                dateObject = calendar.create([
                    maxLimitObject.year,
                    maxLimitObject.month,
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                ])
            }


            // If we’ve reached both limits, just break out of the loop.
            if ( reachedMin && reachedMax ) {
                break
            }


            // Finally, create the shifted date using the interval and keep looping.
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
        }

    } //endif


    // Return the date object settled on.
    return dateObject
} //DatePicker.prototype.validate


/**
 * Check if a date is disabled.
 */
DatePicker.prototype.disabled = function( dateToVerify ) {

    var
        calendar = this,

        // Filter through the disabled dates to check if this is one.
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

            // If the date is a number, match the weekday with 0index and `firstDay` check.
            if ( _.isInteger( dateToDisable ) ) {
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
            }

            // If it’s an array or a native JS date, create and match the exact date.
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                return dateToVerify.pick === calendar.create( dateToDisable ).pick
            }

            // If it’s an object, match a date within the “from” and “to” range.
            if ( $.isPlainObject( dateToDisable ) ) {
                return calendar.withinRange( dateToDisable, dateToVerify )
            }
        })

    // If this date matches a disabled date, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
    }).length

    // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        dateToVerify.pick < calendar.item.min.pick ||
        dateToVerify.pick > calendar.item.max.pick

} //DatePicker.prototype.disabled


/**
 * Parse a string into a usable type.
 */
DatePicker.prototype.parse = function( type, value, options ) {

    var calendar = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = calendar.settings.format
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray( options.format ).map( function( label ) {

        var
            // Grab the formatting label.
            formattingLabel = calendar.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            parsingObject[ label ] = value.substr( 0, formatLength )
        }

        // Update the value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Compensate for month 0index.
    return [
        parsingObject.yyyy || parsingObject.yy,
        +( parsingObject.mm || parsingObject.m ) - 1,
        parsingObject.dd || parsingObject.d
    ]
} //DatePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
DatePicker.prototype.formats = (function() {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection( string, collection, dateObject ) {

        // Grab the first word from the string.
        var word = string.match( /\w+/ )[ 0 ]

        // If there's no month index, add it to the date object
        if ( !dateObject.mm && !dateObject.m ) {
            dateObject.m = collection.indexOf( word ) + 1
        }

        // Return the length of the word.
        return word.length
    }

    // Get the length of the first word in a string.
    function getFirstWordLength( string ) {
        return string.match( /\w+/ )[ 0 ].length
    }

    return {

        d: function( string, dateObject ) {

            // If there's string, then get the digits length.
            // Otherwise return the selected date.
            return string ? _.digits( string ) : dateObject.date
        },
        dd: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected date with a leading zero.
            return string ? 2 : _.lead( dateObject.date )
        },
        ddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the short selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
        },
        dddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the full selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
        },
        m: function( string, dateObject ) {

            // If there's a string, then get the length of the digits
            // Otherwise return the selected month with 0index compensation.
            return string ? _.digits( string ) : dateObject.month + 1
        },
        mm: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected month with 0index and leading zero.
            return string ? 2 : _.lead( dateObject.month + 1 )
        },
        mmm: function( string, dateObject ) {

            var collection = this.settings.monthsShort

            // If there's a string, get length of the relevant month from the short
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        mmmm: function( string, dateObject ) {

            var collection = this.settings.monthsFull

            // If there's a string, get length of the relevant month from the full
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        yy: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected year by slicing out the first 2 digits.
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
        },
        yyyy: function( string, dateObject ) {

            // If there's a string, then the length is always 4.
            // Otherwise return the selected year.
            return string ? 4 : dateObject.year
        },

        // Create an array by splitting the formatting string passed.
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

        // Format an object into a string using the formatting options.
        toString: function ( formatString, itemObject ) {
            var calendar = this
            return calendar.formats.toArray( formatString ).map( function( label ) {
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )
        }
    }
})() //DatePicker.prototype.formats




/**
 * Check if two date units are the exact.
 */
DatePicker.prototype.isDateExact = function( one, two ) {

    var calendar = this

    // When we’re working with weekdays, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with date representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return calendar.create( one ).pick === calendar.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two date units overlap.
 */
DatePicker.prototype.isDateOverlap = function( one, two ) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0

    // When we’re working with a weekday index, compare the days.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        one = one % 7 + firstDay
        return one === calendar.create( two ).day + 1
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        two = two % 7 + firstDay
        return two === calendar.create( one ).day + 1
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
DatePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of dates as “disabled”.
 */
DatePicker.prototype.deactivate = function( type, datesToDisable ) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( datesToDisable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToDisable === false ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToDisable === true ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //DatePicker.prototype.deactivate


/**
 * Mark a collection of dates as “enabled”.
 */
DatePicker.prototype.activate = function( type, datesToEnable ) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( datesToEnable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToEnable === true ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToEnable === false ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isExactRange

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isExactRange = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an exact range of dates,
            // make sure there are no “inverted” dates because of it.
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //DatePicker.prototype.activate


/**
 * Create a string for the nodes in the picker.
 */
DatePicker.prototype.nodes = function( isOpen ) {

    var
        calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


        // Create the calendar table head using a copy of weekday labels collection.
        // * We do a copy so we don't mutate the original array.
        tableHead = (function( collection, fullCollection ) {

            // If the first day should be Monday, move Sunday to the end.
            if ( settings.firstDay ) {
                collection.push( collection.shift() )
                fullCollection.push( fullCollection.shift() )
            }

            // Create and return the table head group.
            return _.node(
                'thead',
                _.node(
                    'tr',
                    _.group({
                        min: 0,
                        max: DAYS_IN_WEEK - 1,
                        i: 1,
                        node: 'th',
                        item: function( counter ) {
                            return [
                                collection[ counter ],
                                settings.klass.weekdays,
                                'scope=col title="' + fullCollection[ counter ] + '"'
                            ]
                        }
                    })
                )
            ) //endreturn

        // Materialize modified
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


        // Create the nav for next/prev month.
        createMonthNav = function( next ) {

            // Otherwise, return the created month tag.
            return _.node(
                'div',
                ' ',
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

                    // If the focused month is outside the range, disabled the button.
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''
                ),
                'data-nav=' + ( next || -1 ) + ' ' +
                _.ariaAttr({
                    role: 'button',
                    controls: calendar.$node[0].id + '_table'
                }) + ' ' +
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
            ) //endreturn
        }, //createMonthNav


        // Create the month label.
        //Materialize modified
        createMonthLabel = function(override) {

            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

             // Materialize modified
            if (override == "short_months") {
              monthsCollection = settings.monthsShort;
            }

            // If there are months to select, add a dropdown menu.
            if ( settings.selectMonths  && override == undefined) {

                return _.node( 'select',
                    _.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: 'option',
                        item: function( loopedMonth ) {

                            return [

                                // The looped month and no classes.
                                monthsCollection[ loopedMonth ], 0,

                                // Set the value and selected index.
                                'value=' + loopedMonth +
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
                                (
                                    (
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?
                                    ' disabled' : ''
                                )
                            ]
                        }
                    }),
                    settings.klass.selectMonth + ' browser-default',
                    ( isOpen ? '' : 'disabled' ) + ' ' +
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelMonthSelect + '"'
                )
            }

            // Materialize modified
            if (override == "short_months")
                if (selectedObject != null)
                return monthsCollection[ selectedObject.month ];
                else return monthsCollection[ viewsetObject.month ];

            // If there's a need for a month selector
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
        }, //createMonthLabel


        // Create the year label.
        // Materialize modified
        createYearLabel = function(override) {

            var focusedYear = viewsetObject.year,

            // If years selector is set to a literal "true", set it to 5. Otherwise
            // divide in half to get half before and half after focused year.
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

            // If there are years to select, add a dropdown menu.
            if ( numberYears ) {

                var
                    minYear = minLimitObject.year,
                    maxYear = maxLimitObject.year,
                    lowestYear = focusedYear - numberYears,
                    highestYear = focusedYear + numberYears

                // If the min year is greater than the lowest year, increase the highest year
                // by the difference and set the lowest year to the min year.
                if ( minYear > lowestYear ) {
                    highestYear += minYear - lowestYear
                    lowestYear = minYear
                }

                // If the max year is less than the highest year, decrease the lowest year
                // by the lower of the two: available and needed years. Then set the
                // highest year to the max year.
                if ( maxYear < highestYear ) {

                    var availableYears = lowestYear - minYear,
                        neededYears = highestYear - maxYear

                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
                    highestYear = maxYear
                }

                if ( settings.selectYears  && override == undefined ) {
                    return _.node( 'select',
                        _.group({
                            min: lowestYear,
                            max: highestYear,
                            i: 1,
                            node: 'option',
                            item: function( loopedYear ) {
                                return [

                                    // The looped year and no classes.
                                    loopedYear, 0,

                                    // Set the value and selected index.
                                    'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
                                ]
                            }
                        }),
                        settings.klass.selectYear + ' browser-default',
                        ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                        'title="' + settings.labelYearSelect + '"'
                    )
                }
            }

            // Materialize modified
            if (override == "raw")
                return _.node( 'div', focusedYear )

            // Otherwise just return the year focused
            return _.node( 'div', focusedYear, settings.klass.year )
        } //createYearLabel


        // Materialize modified
        createDayLabel = function() {
                if (selectedObject != null)
                    return selectedObject.date
                else return nowObject.date
            }
        createWeekdayLabel = function() {
            var display_day;

            if (selectedObject != null)
                display_day = selectedObject.day;
            else
                display_day = nowObject.day;
            var weekday = settings.weekdaysShort[ display_day ];
            return weekday
        }


  // Create and return the entire calendar.

return _.node(
        // Date presentation View
        'div',
            _.node(
                // Div for Year
                'div',
                createYearLabel("raw") ,
                settings.klass.year_display
            )+
            _.node(
                'span',
                createWeekdayLabel() + ', ',
                "picker__weekday-display"
            )+
            _.node(
                // Div for short Month
                'span',
                createMonthLabel("short_months") + ' ',
                settings.klass.month_display
            )+
            _.node(
              // Div for Day
              'span',
              createDayLabel() ,
              settings.klass.day_display
            ),
        settings.klass.date_display
    )+
    // Calendar container
    _.node('div',
	    _.node('div',
		_.node('div',
		( settings.selectYears ?  createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel() ) +
		createMonthNav() + createMonthNav( 1 ),
		settings.klass.header
	    ) + _.node(
		'table',
		tableHead +
		_.node(
		    'tbody',
		    _.group({
		        min: 0,
		        max: WEEKS_IN_CALENDAR - 1,
		        i: 1,
		        node: 'tr',
		        item: function( rowCounter ) {

		            // If Monday is the first day and the month starts on Sunday, shift the date back a week.
		            var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

		            return [
		                _.group({
		                    min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
		                    max: function() {
		                        return this.min + DAYS_IN_WEEK - 1
		                    },
		                    i: 1,
		                    node: 'td',
		                    item: function( targetDate ) {

		                        // Convert the time date from a relative date to a target date.
		                        targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

		                        var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
		                            isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
		                            isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
		                            formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )

		                        return [
		                            _.node(
		                                'div',
		                                targetDate.date,
		                                (function( klasses ) {

		                                    // Add the `infocus` or `outfocus` classes based on month in view.
		                                    klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )

		                                    // Add the `today` class if needed.
		                                    if ( nowObject.pick == targetDate.pick ) {
		                                        klasses.push( settings.klass.now )
		                                    }

		                                    // Add the `selected` class if something's selected and the time matches.
		                                    if ( isSelected ) {
		                                        klasses.push( settings.klass.selected )
		                                    }

		                                    // Add the `highlighted` class if something's highlighted and the time matches.
		                                    if ( isHighlighted ) {
		                                        klasses.push( settings.klass.highlighted )
		                                    }

		                                    // Add the `disabled` class if something's disabled and the object matches.
		                                    if ( isDisabled ) {
		                                        klasses.push( settings.klass.disabled )
		                                    }

		                                    return klasses.join( ' ' )
		                                })([ settings.klass.day ]),
		                                'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
		                                    role: 'gridcell',
		                                    label: formattedDate,
		                                    selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
		                                    activedescendant: isHighlighted ? true : null,
		                                    disabled: isDisabled ? true : null
		                                }) + ' ' + (isDisabled ? '' : 'tabindex="0"')
		                            ),
		                            '',
		                            _.ariaAttr({ role: 'presentation' })
		                        ] //endreturn
		                    }
		                })
		            ] //endreturn
		        }
		    })
		),
		settings.klass.table,
		'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
		    role: 'grid',
		    controls: calendar.$node[0].id,
		    readonly: true
		})
	    )
	    , settings.klass.calendar_container) // end calendar

	     +

	    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
	    _.node(
		'div',
		_.node( 'button', settings.today, "btn-flat picker__today waves-effect",
		    'type=button data-pick=' + nowObject.pick +
		    ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
		    _.ariaAttr({ controls: calendar.$node[0].id }) ) +
		_.node( 'button', settings.clear, "btn-flat picker__clear waves-effect",
		    'type=button data-clear=1' +
		    ( isOpen ? '' : ' disabled' ) + ' ' +
		    _.ariaAttr({ controls: calendar.$node[0].id }) ) +
		_.node('button', settings.close, "btn-flat picker__close waves-effect",
		    'type=button data-close=true ' +
		    ( isOpen ? '' : ' disabled' ) + ' ' +
		    _.ariaAttr({ controls: calendar.$node[0].id }) ),
		settings.klass.footer
	    ), 'picker__container__wrapper'
	) //endreturn
} //DatePicker.prototype.nodes




/**
 * The date picker defaults.
 */
DatePicker.defaults = (function( prefix ) {

    return {

        // The title label to use for the month nav buttons
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Months and weekdays
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

        // Materialize modified
        weekdaysLetter: [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],

        // Today and clear
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',

        // Picker close behavior (Prevent a change in behaviour for backwards compatibility)
        closeOnSelect: false,

        // The format to show on the `input` element
        format: 'd mmmm, yyyy',

        // Classes
        klass: {

            table: prefix + 'table',

            header: prefix + 'header',


            // Materialize Added klasses
            date_display: prefix + 'date-display',
            day_display: prefix + 'day-display',
            month_display: prefix + 'month-display',
            year_display: prefix + 'year-display',
            calendar_container: prefix + 'calendar-container',
            // end



            navPrev: prefix + 'nav--prev',
            navNext: prefix + 'nav--next',
            navDisabled: prefix + 'nav--disabled',

            month: prefix + 'month',
            year: prefix + 'year',

            selectMonth: prefix + 'select--month',
            selectYear: prefix + 'select--year',

            weekdays: prefix + 'weekday',

            day: prefix + 'day',
            disabled: prefix + 'day--disabled',
            selected: prefix + 'day--selected',
            highlighted: prefix + 'day--highlighted',
            now: prefix + 'day--today',
            infocus: prefix + 'day--infocus',
            outfocus: prefix + 'day--outfocus',

            footer: prefix + 'footer',

            buttonClear: prefix + 'button--clear',
            buttonToday: prefix + 'button--today',
            buttonClose: prefix + 'button--close'
        }
    }
})( Picker.klasses().picker + '__' )





/**
 * Extend the picker to add the date picker.
 */
Picker.extend( 'pickadate', DatePicker )


}));

/*!
 * ClockPicker v0.0.7 (http://weareoutman.github.io/clockpicker/)
 * Copyright 2014 Wang Shenwei.
 * Licensed under MIT (https://github.com/weareoutman/clockpicker/blob/gh-pages/LICENSE)
 *
 * Further modified
 * Copyright 2015 Ching Yaw Hao.
 */

(function(){
	var $ = window.jQuery,
			$win = $(window),
			$doc = $(document);

	// Can I use inline svg ?
	var svgNS = 'http://www.w3.org/2000/svg',
		  svgSupported = 'SVGAngle' in window && (function() {
			  var supported,
				el = document.createElement('div');
				el.innerHTML = '<svg/>';
				supported = (el.firstChild && el.firstChild.namespaceURI) == svgNS;
				el.innerHTML = '';
				return supported;
			})();

	// Can I use transition ?
	var transitionSupported = (function() {
		var style = document.createElement('div').style;
		return 'transition' in style ||
					 'WebkitTransition' in style ||
				   'MozTransition' in style ||
					 'msTransition' in style ||
					 'OTransition' in style;
	})();

	// Listen touch events in touch screen device, instead of mouse events in desktop.
	var touchSupported = 'ontouchstart' in window,
			mousedownEvent = 'mousedown' + ( touchSupported ? ' touchstart' : ''),
			mousemoveEvent = 'mousemove.clockpicker' + ( touchSupported ? ' touchmove.clockpicker' : ''),
			mouseupEvent = 'mouseup.clockpicker' + ( touchSupported ? ' touchend.clockpicker' : '');

	// Vibrate the device if supported
	var vibrate = navigator.vibrate ? 'vibrate' : navigator.webkitVibrate ? 'webkitVibrate' : null;

	function createSvgElement(name) {
		return document.createElementNS(svgNS, name);
	}

	function leadingZero(num) {
		return (num < 10 ? '0' : '') + num;
	}

	// Get a unique id
	var idCounter = 0;
	function uniqueId(prefix) {
		var id = ++idCounter + '';
		return prefix ? prefix + id : id;
	}

	// Clock size
	var dialRadius = 135,
			outerRadius = 105,
			// innerRadius = 80 on 12 hour clock
			innerRadius = 80,
			tickRadius = 20,
			diameter = dialRadius * 2,
			duration = transitionSupported ? 350 : 1;

	// Popover template
	var tpl = [
		'<div class="clockpicker picker">',
			'<div class="picker__holder">',
				'<div class="picker__frame">',
					'<div class="picker__wrap">',
						'<div class="picker__box">',
							'<div class="picker__date-display">',
								'<div class="clockpicker-display">',
									'<div class="clockpicker-display-column">',
										'<span class="clockpicker-span-hours text-primary"></span>',
										':',
										'<span class="clockpicker-span-minutes"></span>',
									'</div>',
									'<div class="clockpicker-display-column clockpicker-display-am-pm">',
										'<div class="clockpicker-span-am-pm"></div>',
									'</div>',
								'</div>',
							'</div>',
							'<div class="picker__container__wrapper">',
								'<div class="picker__calendar-container">',
									'<div class="clockpicker-plate">',
										'<div class="clockpicker-canvas"></div>',
										'<div class="clockpicker-dial clockpicker-hours"></div>',
										'<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',
									'</div>',
									'<div class="clockpicker-am-pm-block">',
									'</div>',
								'</div>',
								'<div class="picker__footer">',
								'</div>',
							'</div>',
						'</div>',
					'</div>',
				'</div>',
			'</div>',
		'</div>'
	].join('');

	// ClockPicker
	function ClockPicker(element, options) {
		var popover = $(tpl),
				plate = popover.find('.clockpicker-plate'),
				holder = popover.find('.picker__holder'),
				hoursView = popover.find('.clockpicker-hours'),
				minutesView = popover.find('.clockpicker-minutes'),
				amPmBlock = popover.find('.clockpicker-am-pm-block'),
				isInput = element.prop('tagName') === 'INPUT',
				input = isInput ? element : element.find('input'),
				label = $("label[for=" + input.attr("id") + "]"),
				self = this;

		this.id = uniqueId('cp');
		this.element = element;
		this.holder = holder;
		this.options = options;
		this.isAppended = false;
		this.isShown = false;
		this.currentView = 'hours';
		this.isInput = isInput;
		this.input = input;
		this.label = label;
		this.popover = popover;
		this.plate = plate;
		this.hoursView = hoursView;
		this.minutesView = minutesView;
		this.amPmBlock = amPmBlock;
		this.spanHours = popover.find('.clockpicker-span-hours');
		this.spanMinutes = popover.find('.clockpicker-span-minutes');
		this.spanAmPm = popover.find('.clockpicker-span-am-pm');
		this.footer = popover.find('.picker__footer');
		this.amOrPm = "PM";

		// Setup for for 12 hour clock if option is selected
		if (options.twelvehour) {
			if (!options.ampmclickable) {
				this.spanAmPm.empty();
				$('<div id="click-am">AM</div>').appendTo(this.spanAmPm);
				$('<div id="click-pm">PM</div>').appendTo(this.spanAmPm);
			}
			else {
				this.spanAmPm.empty();
				$('<div id="click-am">AM</div>').on("click", function() {
					self.spanAmPm.children('#click-am').addClass("text-primary");
					self.spanAmPm.children('#click-pm').removeClass("text-primary");
					self.amOrPm = "AM";
				}).appendTo(this.spanAmPm);
				$('<div id="click-pm">PM</div>').on("click", function() {
					self.spanAmPm.children('#click-pm').addClass("text-primary");
					self.spanAmPm.children('#click-am').removeClass("text-primary");
					self.amOrPm = 'PM';
				}).appendTo(this.spanAmPm);
			}
		}

		// Add buttons to footer
		$('<button type="button" class="btn-flat picker__clear" tabindex="' + (options.twelvehour? '3' : '1') + '">' + options.cleartext + '</button>').click($.proxy(this.clear, this)).appendTo(this.footer);
		$('<button type="button" class="btn-flat picker__close" tabindex="' + (options.twelvehour? '3' : '1') + '">' + options.canceltext + '</button>').click($.proxy(this.hide, this)).appendTo(this.footer);
		$('<button type="button" class="btn-flat picker__close" tabindex="' + (options.twelvehour? '3' : '1') + '">' + options.donetext + '</button>').click($.proxy(this.done, this)).appendTo(this.footer);

		this.spanHours.click($.proxy(this.toggleView, this, 'hours'));
		this.spanMinutes.click($.proxy(this.toggleView, this, 'minutes'));

		// Show or toggle
		input.on('focus.clockpicker click.clockpicker', $.proxy(this.show, this));

		// Build ticks
		var tickTpl = $('<div class="clockpicker-tick"></div>'),
				i, tick, radian, radius;

		// Hours view
		if (options.twelvehour) {
			for (i = 1; i < 13; i += 1) {
				tick = tickTpl.clone();
				radian = i / 6 * Math.PI;
				radius = outerRadius;
				tick.css({
					left: dialRadius + Math.sin(radian) * radius - tickRadius,
					top: dialRadius - Math.cos(radian) * radius - tickRadius
				});
				tick.html(i === 0 ? '00' : i);
				hoursView.append(tick);
				tick.on(mousedownEvent, mousedown);
			}
		} else {
			for (i = 0; i < 24; i += 1) {
				tick = tickTpl.clone();
				radian = i / 6 * Math.PI;
				var inner = i > 0 && i < 13;
				radius = inner ? innerRadius : outerRadius;
				tick.css({
					left: dialRadius + Math.sin(radian) * radius - tickRadius,
					top: dialRadius - Math.cos(radian) * radius - tickRadius
				});
				tick.html(i === 0 ? '00' : i);
				hoursView.append(tick);
				tick.on(mousedownEvent, mousedown);
			}
		}

		// Minutes view
		for (i = 0; i < 60; i += 5) {
			tick = tickTpl.clone();
			radian = i / 30 * Math.PI;
			tick.css({
				left: dialRadius + Math.sin(radian) * outerRadius - tickRadius,
				top: dialRadius - Math.cos(radian) * outerRadius - tickRadius
			});
			tick.html(leadingZero(i));
			minutesView.append(tick);
			tick.on(mousedownEvent, mousedown);
		}

		// Clicking on minutes view space
		plate.on(mousedownEvent, function(e) {
			if ($(e.target).closest('.clockpicker-tick').length === 0) {
				mousedown(e, true);
      }
		});

		// Mousedown or touchstart
		function mousedown(e, space) {
			var offset = plate.offset(),
					isTouch = /^touch/.test(e.type),
					x0 = offset.left + dialRadius,
					y0 = offset.top + dialRadius,
					dx = (isTouch ? e.originalEvent.touches[0] : e).pageX - x0,
					dy = (isTouch ? e.originalEvent.touches[0] : e).pageY - y0,
					z = Math.sqrt(dx * dx + dy * dy),
					moved = false;

			// When clicking on minutes view space, check the mouse position
			if (space && (z < outerRadius - tickRadius || z > outerRadius + tickRadius)) {
				return;
      }
			e.preventDefault();

			// Set cursor style of body after 200ms
			var movingTimer = setTimeout(function(){
				self.popover.addClass('clockpicker-moving');
			}, 200);

			// Clock
			self.setHand(dx, dy, !space, true);

			// Mousemove on document
			$doc.off(mousemoveEvent).on(mousemoveEvent, function(e){
				e.preventDefault();
				var isTouch = /^touch/.test(e.type),
						x = (isTouch ? e.originalEvent.touches[0] : e).pageX - x0,
						y = (isTouch ? e.originalEvent.touches[0] : e).pageY - y0;
				if (! moved && x === dx && y === dy) {
					// Clicking in chrome on windows will trigger a mousemove event
					return;
        }
				moved = true;
				self.setHand(x, y, false, true);
			});

			// Mouseup on document
			$doc.off(mouseupEvent).on(mouseupEvent, function(e) {
				$doc.off(mouseupEvent);
				e.preventDefault();
				var isTouch = /^touch/.test(e.type),
						x = (isTouch ? e.originalEvent.changedTouches[0] : e).pageX - x0,
						y = (isTouch ? e.originalEvent.changedTouches[0] : e).pageY - y0;
				if ((space || moved) && x === dx && y === dy) {
					self.setHand(x, y);
        }

				if (self.currentView === 'hours') {
					self.toggleView('minutes', duration / 2);
        } else if (options.autoclose) {
					self.minutesView.addClass('clockpicker-dial-out');
					setTimeout(function(){
						self.done();
					}, duration / 2);
        }
				plate.prepend(canvas);

				// Reset cursor style of body
				clearTimeout(movingTimer);
				self.popover.removeClass('clockpicker-moving');

				// Unbind mousemove event
				$doc.off(mousemoveEvent);
			});
		}

		if (svgSupported) {
			// Draw clock hands and others
			var canvas = popover.find('.clockpicker-canvas'),
					svg = createSvgElement('svg');
			svg.setAttribute('class', 'clockpicker-svg');
			svg.setAttribute('width', diameter);
			svg.setAttribute('height', diameter);
			var g = createSvgElement('g');
			g.setAttribute('transform', 'translate(' + dialRadius + ',' + dialRadius + ')');
			var bearing = createSvgElement('circle');
			bearing.setAttribute('class', 'clockpicker-canvas-bearing');
			bearing.setAttribute('cx', 0);
			bearing.setAttribute('cy', 0);
			bearing.setAttribute('r', 4);
			var hand = createSvgElement('line');
			hand.setAttribute('x1', 0);
			hand.setAttribute('y1', 0);
			var bg = createSvgElement('circle');
			bg.setAttribute('class', 'clockpicker-canvas-bg');
			bg.setAttribute('r', tickRadius);
			g.appendChild(hand);
			g.appendChild(bg);
			g.appendChild(bearing);
			svg.appendChild(g);
			canvas.append(svg);

			this.hand = hand;
			this.bg = bg;
			this.bearing = bearing;
			this.g = g;
			this.canvas = canvas;
		}

		raiseCallback(this.options.init);
	}

	function raiseCallback(callbackFunction) {
		if (callbackFunction && typeof callbackFunction === "function")
			callbackFunction();
	}

	// Default options
	ClockPicker.DEFAULTS = {
		'default': '',         // default time, 'now' or '13:14' e.g.
		fromnow: 0,            // set default time to * milliseconds from now (using with default = 'now')
		donetext: 'Ok',      // done button text
		cleartext: 'Clear',
		canceltext: 'Cancel',
		autoclose: false,      // auto close when minute is selected
		ampmclickable: true,  // set am/pm button on itself
		darktheme: false,			 // set to dark theme
		twelvehour: true,      // change to 12 hour AM/PM clock from 24 hour
		vibrate: true          // vibrate the device when dragging clock hand
	};

	// Show or hide popover
	ClockPicker.prototype.toggle = function() {
		this[this.isShown ? 'hide' : 'show']();
	};

	// Set popover position
	ClockPicker.prototype.locate = function() {
		var element = this.element,
				popover = this.popover,
				offset = element.offset(),
				width = element.outerWidth(),
				height = element.outerHeight(),
				align = this.options.align,
				self = this;

		popover.show();
	};

	// Show popover
	ClockPicker.prototype.show = function(e){
		// Not show again
		if (this.isShown) {
			return;
		}
		raiseCallback(this.options.beforeShow);
		$(':input').each(function() {
			$(this).attr('tabindex', -1);
		})
		var self = this;
		// Initialize
		this.input.blur();
		this.popover.addClass('picker--opened');
		this.input.addClass('picker__input picker__input--active');
		$(document.body).css('overflow', 'hidden');
		// Get the time
		var value = ((this.input.prop('value') || this.options['default'] || '') + '').split(':');
		if (this.options.twelvehour && !(typeof value[1] === 'undefined')) {
			if (value[1].indexOf("AM") > 0){
				this.amOrPm = 'AM';
			} else {
				this.amOrPm = 'PM';
			}
			value[1] = value[1].replace("AM", "").replace("PM", "");
		}
		if (value[0] === 'now') {
			var now = new Date(+ new Date() + this.options.fromnow);
			value = [
				now.getHours(),
				now.getMinutes()
			];
      if (this.options.twelvehour) {
        this.amOrPm = value[0] >= 12 && value[0] < 24 ? 'PM' : 'AM';
      }
		}
		this.hours = + value[0] || 0;
		this.minutes = + value[1] || 0;
		this.spanHours.html(this.hours);
		this.spanMinutes.html(leadingZero(this.minutes));
		if (!this.isAppended) {
			// Append popover to body
			this.popover.insertAfter(this.input);
			if (this.options.twelvehour) {
				if (this.amOrPm === 'PM'){
					this.spanAmPm.children('#click-pm').addClass("text-primary");
					this.spanAmPm.children('#click-am').removeClass("text-primary");
				} else {
					this.spanAmPm.children('#click-am').addClass("text-primary");
					this.spanAmPm.children('#click-pm').removeClass("text-primary");
				}
			}
			// Reset position when resize
			$win.on('resize.clockpicker' + this.id, function() {
				if (self.isShown) {
					self.locate();
				}
			});
			this.isAppended = true;
		}
		// Toggle to hours view
		this.toggleView('hours');
		// Set position
		this.locate();
		this.isShown = true;
		// Hide when clicking or tabbing on any element except the clock and input
		$doc.on('click.clockpicker.' + this.id + ' focusin.clockpicker.' + this.id, function(e) {
			var target = $(e.target);
			if (target.closest(self.popover.find('.picker__wrap')).length === 0 && target.closest(self.input).length === 0) {
				self.hide();
      }
		});
		// Hide when ESC is pressed
		$doc.on('keyup.clockpicker.' + this.id, function(e){
			if (e.keyCode === 27) {
				self.hide();
      }
		});
		raiseCallback(this.options.afterShow);
	};
	// Hide popover
	ClockPicker.prototype.hide = function() {
		raiseCallback(this.options.beforeHide);
		this.input.removeClass('picker__input picker__input--active');
		this.popover.removeClass('picker--opened');
		$(document.body).css('overflow', 'visible');
		this.isShown = false;
		$(':input').each(function(index) {
			$(this).attr('tabindex', index + 1);
		});
		// Unbinding events on document
		$doc.off('click.clockpicker.' + this.id + ' focusin.clockpicker.' + this.id);
		$doc.off('keyup.clockpicker.' + this.id);
		this.popover.hide();
		raiseCallback(this.options.afterHide);
	};
	// Toggle to hours or minutes view
	ClockPicker.prototype.toggleView = function(view, delay) {
		var raiseAfterHourSelect = false;
		if (view === 'minutes' && $(this.hoursView).css("visibility") === "visible") {
			raiseCallback(this.options.beforeHourSelect);
			raiseAfterHourSelect = true;
		}
		var isHours = view === 'hours',
				nextView = isHours ? this.hoursView : this.minutesView,
				hideView = isHours ? this.minutesView : this.hoursView;
		this.currentView = view;

		this.spanHours.toggleClass('text-primary', isHours);
		this.spanMinutes.toggleClass('text-primary', ! isHours);

		// Let's make transitions
		hideView.addClass('clockpicker-dial-out');
		nextView.css('visibility', 'visible').removeClass('clockpicker-dial-out');

		// Reset clock hand
		this.resetClock(delay);

		// After transitions ended
		clearTimeout(this.toggleViewTimer);
		this.toggleViewTimer = setTimeout(function() {
			hideView.css('visibility', 'hidden');
		}, duration);

		if (raiseAfterHourSelect) {
			raiseCallback(this.options.afterHourSelect);
    }
	};

	// Reset clock hand
	ClockPicker.prototype.resetClock = function(delay) {
		var view = this.currentView,
				value = this[view],
				isHours = view === 'hours',
				unit = Math.PI / (isHours ? 6 : 30),
				radian = value * unit,
				radius = isHours && value > 0 && value < 13 ? innerRadius : outerRadius,
				x = Math.sin(radian) * radius,
				y = - Math.cos(radian) * radius,
				self = this;

		if (svgSupported && delay) {
			self.canvas.addClass('clockpicker-canvas-out');
			setTimeout(function(){
				self.canvas.removeClass('clockpicker-canvas-out');
				self.setHand(x, y);
			}, delay);
		} else
			this.setHand(x, y);
	};

	// Set clock hand to (x, y)
	ClockPicker.prototype.setHand = function(x, y, roundBy5, dragging) {
		var radian = Math.atan2(x, - y),
				isHours = this.currentView === 'hours',
				unit = Math.PI / (isHours || roundBy5? 6 : 30),
				z = Math.sqrt(x * x + y * y),
				options = this.options,
				inner = isHours && z < (outerRadius + innerRadius) / 2,
				radius = inner ? innerRadius : outerRadius,
				value;

		if (options.twelvehour) {
			radius = outerRadius;
    }

		// Radian should in range [0, 2PI]
		if (radian < 0) {
			radian = Math.PI * 2 + radian;
    }

		// Get the round value
		value = Math.round(radian / unit);

		// Get the round radian
		radian = value * unit;

		// Correct the hours or minutes
		if (options.twelvehour) {
			if (isHours) {
				if (value === 0)
					value = 12;
			} else {
				if (roundBy5)
					value *= 5;
				if (value === 60)
					value = 0;
			}
		} else {
			if (isHours) {
				if (value === 12)
					value = 0;
				value = inner ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
			} else {
				if (roundBy5)
					value *= 5;
				if (value === 60)
					value = 0;
			}
		}

		// Once hours or minutes changed, vibrate the device
		if (this[this.currentView] !== value) {
			if (vibrate && this.options.vibrate) {
				// Do not vibrate too frequently
				if (!this.vibrateTimer) {
					navigator[vibrate](10);
					this.vibrateTimer = setTimeout($.proxy(function(){
						this.vibrateTimer = null;
					}, this), 100);
				}
      }
    }

		this[this.currentView] = value;
    if (isHours) {
      this['spanHours'].html(value);
    } else {
      this['spanMinutes'].html(leadingZero(value));
    }

		// If svg is not supported, just add an active class to the tick
		if (!svgSupported) {
			this[isHours ? 'hoursView' : 'minutesView'].find('.clockpicker-tick').each(function(){
				var tick = $(this);
				tick.toggleClass('active', value === + tick.html());
			});
			return;
		}

		// Set clock hand and others' position
		var cx1 = Math.sin(radian) * (radius - tickRadius),
			  cy1 = - Math.cos(radian) * (radius - tickRadius),
		    cx2 = Math.sin(radian) * radius,
			  cy2 = - Math.cos(radian) * radius;
		this.hand.setAttribute('x2', cx1);
		this.hand.setAttribute('y2', cy1);
		this.bg.setAttribute('cx', cx2);
		this.bg.setAttribute('cy', cy2);
	};

	// Hours and minutes are selected
	ClockPicker.prototype.done = function() {
		raiseCallback(this.options.beforeDone);
		this.hide();
		this.label.addClass('active');

		var last = this.input.prop('value'),
				value = leadingZero(this.hours) + ':' + leadingZero(this.minutes);
		if (this.options.twelvehour) {
			value = value + this.amOrPm;
    }

		this.input.prop('value', value);
		if (value !== last) {
			this.input.triggerHandler('change');
			if (!this.isInput) {
				this.element.trigger('change');
      }
		}

		if (this.options.autoclose)
			this.input.trigger('blur');

		raiseCallback(this.options.afterDone);
	};

	// Clear input field
	ClockPicker.prototype.clear = function() {
		this.hide();
		this.label.removeClass('active');

		var last = this.input.prop('value'),
			  value = '';

		this.input.prop('value', value);
		if (value !== last) {
			this.input.triggerHandler('change');
			if (! this.isInput) {
				this.element.trigger('change');
			}
		}

		if (this.options.autoclose) {
			this.input.trigger('blur');
		}
	};

	// Remove clockpicker from input
	ClockPicker.prototype.remove = function() {
		this.element.removeData('clockpicker');
		this.input.off('focus.clockpicker click.clockpicker');
		if (this.isShown) {
			this.hide();
    }
		if (this.isAppended) {
			$win.off('resize.clockpicker' + this.id);
			this.popover.remove();
		}
	};

	// Extends $.fn.clockpicker
	$.fn.pickatime = function(option){
		var args = Array.prototype.slice.call(arguments, 1);
		return this.each(function(){
			var $this = $(this),
					data = $this.data('clockpicker');
			if (!data) {
				var options = $.extend({}, ClockPicker.DEFAULTS, $this.data(), typeof option == 'object' && option);
				$this.data('clockpicker', new ClockPicker($this, options));
			} else {
				// Manual operatsions. show, hide, remove, e.g.
				if (typeof data[option] === 'function') {
					data[option].apply(data, args);
        }
			}
		});
	};
}());

(function ($) {

  $.fn.characterCounter = function(){
    return this.each(function(){
      var $input = $(this);
      var $counterElement = $input.parent().find('span[class="character-counter"]');

      // character counter has already been added appended to the parent container
      if ($counterElement.length) {
        return;
      }

      var itHasLengthAttribute = $input.attr('data-length') !== undefined;

      if(itHasLengthAttribute){
        $input.on('input', updateCounter);
        $input.on('focus', updateCounter);
        $input.on('blur', removeCounterElement);

        addCounterElement($input);
      }

    });
  };

  function updateCounter(){
    var maxLength     = +$(this).attr('data-length'),
    actualLength      = +$(this).val().length,
    isValidLength     = actualLength <= maxLength;

    $(this).parent().find('span[class="character-counter"]')
                    .html( actualLength + '/' + maxLength);

    addInputStyle(isValidLength, $(this));
  }

  function addCounterElement($input) {
    var $counterElement = $input.parent().find('span[class="character-counter"]');

    if ($counterElement.length) {
      return;
    }

    $counterElement = $('<span/>')
                        .addClass('character-counter')
                        .css('float','right')
                        .css('font-size','12px')
                        .css('height', 1);

    $input.parent().append($counterElement);
  }

  function removeCounterElement(){
    $(this).parent().find('span[class="character-counter"]').html('');
  }

  function addInputStyle(isValidLength, $input){
    var inputHasInvalidClass = $input.hasClass('invalid');
    if (isValidLength && inputHasInvalidClass) {
      $input.removeClass('invalid');
    }
    else if(!isValidLength && !inputHasInvalidClass){
      $input.removeClass('valid');
      $input.addClass('invalid');
    }
  }

  $(document).ready(function(){
    $('input, textarea').characterCounter();
  });

}( jQuery ));

(function ($) {

  var methods = {

    init : function(options) {
      var defaults = {
        duration: 200, // ms
        dist: -100, // zoom scale TODO: make this more intuitive as an option
        shift: 0, // spacing for center image
        padding: 0, // Padding between non center items
        fullWidth: false, // Change to full width styles
        indicators: false, // Toggle indicators
        noWrap: false, // Don't wrap around and cycle through items.
        onCycleTo: null // Callback for when a new slide is cycled to.
      };
      options = $.extend(defaults, options);
      var namespace = Materialize.objectSelectorString($(this));

      return this.each(function(i) {

        var images, item_width, item_height, offset, center, pressed, dim, count,
            reference, referenceY, amplitude, target, velocity, scrolling,
            xform, frame, timestamp, ticker, dragged, vertical_dragged;
        var $indicators = $('<ul class="indicators"></ul>');
        var scrollingTimeout = null;
        var oneTimeCallback = null;


        // Initialize
        var view = $(this);
        var hasMultipleSlides = view.find('.carousel-item').length > 1;
        var showIndicators = (view.attr('data-indicators') || options.indicators) && hasMultipleSlides;
        var noWrap = (view.attr('data-no-wrap') || options.noWrap) || !hasMultipleSlides;
        var uniqueNamespace = view.attr('data-namespace') || namespace+i;
        view.attr('data-namespace', uniqueNamespace);


        // Options
        var setCarouselHeight = function(imageOnly) {
          var firstSlide = view.find('.carousel-item.active').length ? view.find('.carousel-item.active').first() : view.find('.carousel-item').first();
          var firstImage = firstSlide.find('img').first();
          if (firstImage.length) {
            if (firstImage[0].complete) {
              // If image won't trigger the load event
              var imageHeight = firstImage.height();
              if (imageHeight > 0) {
                view.css('height', firstImage.height());
              } else {
                // If image still has no height, use the natural dimensions to calculate
                var naturalWidth = firstImage[0].naturalWidth;
                var naturalHeight = firstImage[0].naturalHeight;
                var adjustedHeight = (view.width() / naturalWidth) * naturalHeight;
                view.css('height', adjustedHeight);
              }
            } else {
              // Get height when image is loaded normally
              firstImage.on('load', function(){
                view.css('height', $(this).height());
              });
            }
          } else if (!imageOnly) {
            var slideHeight = firstSlide.height();
            view.css('height', slideHeight);
          }
        };

        if (options.fullWidth) {
          options.dist = 0;
          setCarouselHeight();

          // Offset fixed items when indicators.
          if (showIndicators) {
            view.find('.carousel-fixed-item').addClass('with-indicators');
          }
        }


        // Don't double initialize.
        if (view.hasClass('initialized')) {
          // Recalculate variables
          $(window).trigger('resize');

          // Redraw carousel.
          view.trigger('carouselNext', [0.000001]);
          return true;
        }


        view.addClass('initialized');
        pressed = false;
        offset = target = 0;
        images = [];
        item_width = view.find('.carousel-item').first().innerWidth();
        item_height = view.find('.carousel-item').first().innerHeight();
        dim = item_width * 2 + options.padding;

        view.find('.carousel-item').each(function (i) {
          images.push($(this)[0]);
          if (showIndicators) {
            var $indicator = $('<li class="indicator-item"></li>');

            // Add active to first by default.
            if (i === 0) {
              $indicator.addClass('active');
            }

            // Handle clicks on indicators.
            $indicator.click(function (e) {
              e.stopPropagation();

              var index = $(this).index();
              cycleTo(index);
            });
            $indicators.append($indicator);
          }
        });

        if (showIndicators) {
          view.append($indicators);
        }
        count = images.length;


        function setupEvents() {
          if (typeof window.ontouchstart !== 'undefined') {
            view.on('touchstart.carousel', tap);
            view.on('touchmove.carousel', drag);
            view.on('touchend.carousel', release);
          }
          view.on('mousedown.carousel', tap);
          view.on('mousemove.carousel', drag);
          view.on('mouseup.carousel', release);
          view.on('mouseleave.carousel', release);
          view.on('click.carousel', click);
        }

        function xpos(e) {
          // touch event
          if (e.targetTouches && (e.targetTouches.length >= 1)) {
            return e.targetTouches[0].clientX;
          }

          // mouse event
          return e.clientX;
        }

        function ypos(e) {
          // touch event
          if (e.targetTouches && (e.targetTouches.length >= 1)) {
            return e.targetTouches[0].clientY;
          }

          // mouse event
          return e.clientY;
        }

        function wrap(x) {
          return (x >= count) ? (x % count) : (x < 0) ? wrap(count + (x % count)) : x;
        }

        function scroll(x) {
          // Track scrolling state
          scrolling = true;
          if (!view.hasClass('scrolling')) {
            view.addClass('scrolling');
          }
          if (scrollingTimeout != null) {
            window.clearTimeout(scrollingTimeout);
          }
          scrollingTimeout = window.setTimeout(function() {
            scrolling = false;
            view.removeClass('scrolling');
          }, options.duration);

          // Start actual scroll
          var i, half, delta, dir, tween, el, alignment, xTranslation;
          var lastCenter = center;

          offset = (typeof x === 'number') ? x : offset;
          center = Math.floor((offset + dim / 2) / dim);
          delta = offset - center * dim;
          dir = (delta < 0) ? 1 : -1;
          tween = -dir * delta * 2 / dim;
          half = count >> 1;

          if (!options.fullWidth) {
            alignment = 'translateX(' + (view[0].clientWidth - item_width) / 2 + 'px) ';
            alignment += 'translateY(' + (view[0].clientHeight - item_height) / 2 + 'px)';
          } else {
            alignment = 'translateX(0)';
          }

          // Set indicator active
          if (showIndicators) {
            var diff = (center % count);
            var activeIndicator = $indicators.find('.indicator-item.active');
            if (activeIndicator.index() !== diff) {
              activeIndicator.removeClass('active');
              $indicators.find('.indicator-item').eq(diff).addClass('active');
            }
          }

          // center
          // Don't show wrapped items.
          if (!noWrap || (center >= 0 && center < count)) {
            el = images[wrap(center)];

            // Add active class to center item.
            if (!$(el).hasClass('active')) {
              view.find('.carousel-item').removeClass('active');
              $(el).addClass('active');
            }
            el.style[xform] = alignment +
              ' translateX(' + (-delta / 2) + 'px)' +
              ' translateX(' + (dir * options.shift * tween * i) + 'px)' +
              ' translateZ(' + (options.dist * tween) + 'px)';
            el.style.zIndex = 0;
            if (options.fullWidth) { tweenedOpacity = 1; }
            else { tweenedOpacity = 1 - 0.2 * tween; }
            el.style.opacity = tweenedOpacity;
            el.style.display = 'block';
          }

          for (i = 1; i <= half; ++i) {
            // right side
            if (options.fullWidth) {
              zTranslation = options.dist;
              tweenedOpacity = (i === half && delta < 0) ? 1 - tween : 1;
            } else {
              zTranslation = options.dist * (i * 2 + tween * dir);
              tweenedOpacity = 1 - 0.2 * (i * 2 + tween * dir);
            }
            // Don't show wrapped items.
            if (!noWrap || center + i < count) {
              el = images[wrap(center + i)];
              el.style[xform] = alignment +
                ' translateX(' + (options.shift + (dim * i - delta) / 2) + 'px)' +
                ' translateZ(' + zTranslation + 'px)';
              el.style.zIndex = -i;
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }


            // left side
            if (options.fullWidth) {
              zTranslation = options.dist;
              tweenedOpacity = (i === half && delta > 0) ? 1 - tween : 1;
            } else {
              zTranslation = options.dist * (i * 2 - tween * dir);
              tweenedOpacity = 1 - 0.2 * (i * 2 - tween * dir);
            }
            // Don't show wrapped items.
            if (!noWrap || center - i >= 0) {
              el = images[wrap(center - i)];
              el.style[xform] = alignment +
                ' translateX(' + (-options.shift + (-dim * i - delta) / 2) + 'px)' +
                ' translateZ(' + zTranslation + 'px)';
              el.style.zIndex = -i;
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }
          }

          // center
          // Don't show wrapped items.
          if (!noWrap || (center >= 0 && center < count)) {
            el = images[wrap(center)];
            el.style[xform] = alignment +
              ' translateX(' + (-delta / 2) + 'px)' +
              ' translateX(' + (dir * options.shift * tween) + 'px)' +
              ' translateZ(' + (options.dist * tween) + 'px)';
            el.style.zIndex = 0;
            if (options.fullWidth) { tweenedOpacity = 1; }
            else { tweenedOpacity = 1 - 0.2 * tween; }
            el.style.opacity = tweenedOpacity;
            el.style.display = 'block';
          }

          // onCycleTo callback
          if (lastCenter !== center &&
              typeof(options.onCycleTo) === "function") {
            var $curr_item = view.find('.carousel-item').eq(wrap(center));
            options.onCycleTo.call(this, $curr_item, dragged);
          }

          // One time callback
          if (typeof(oneTimeCallback) === "function") {
            oneTimeCallback.call(this, $curr_item, dragged);
            oneTimeCallback = null;
          }
        }

        function track() {
          var now, elapsed, delta, v;

          now = Date.now();
          elapsed = now - timestamp;
          timestamp = now;
          delta = offset - frame;
          frame = offset;

          v = 1000 * delta / (1 + elapsed);
          velocity = 0.8 * v + 0.2 * velocity;
        }

        function autoScroll() {
          var elapsed, delta;

          if (amplitude) {
            elapsed = Date.now() - timestamp;
            delta = amplitude * Math.exp(-elapsed / options.duration);
            if (delta > 2 || delta < -2) {
                scroll(target - delta);
                requestAnimationFrame(autoScroll);
            } else {
                scroll(target);
            }
          }
        }

        function click(e) {
          // Disable clicks if carousel was dragged.
          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
            return false;

          } else if (!options.fullWidth) {
            var clickedIndex = $(e.target).closest('.carousel-item').index();
            var diff = wrap(center) - clickedIndex;

            // Disable clicks if carousel was shifted by click
            if (diff !== 0) {
              e.preventDefault();
              e.stopPropagation();
            }
            cycleTo(clickedIndex);
          }
        }

        function cycleTo(n) {
          var diff = (center % count) - n;

          // Account for wraparound.
          if (!noWrap) {
            if (diff < 0) {
              if (Math.abs(diff + count) < Math.abs(diff)) { diff += count; }

            } else if (diff > 0) {
              if (Math.abs(diff - count) < diff) { diff -= count; }
            }
          }

          // Call prev or next accordingly.
          if (diff < 0) {
            view.trigger('carouselNext', [Math.abs(diff)]);

          } else if (diff > 0) {
            view.trigger('carouselPrev', [diff]);
          }
        }

        function tap(e) {
          // Fixes firefox draggable image bug
          if (e.type === 'mousedown' && $(e.target).is('img')) {
            e.preventDefault();
          }
          pressed = true;
          dragged = false;
          vertical_dragged = false;
          reference = xpos(e);
          referenceY = ypos(e);

          velocity = amplitude = 0;
          frame = offset;
          timestamp = Date.now();
          clearInterval(ticker);
          ticker = setInterval(track, 100);
        }

        function drag(e) {
          var x, delta, deltaY;
          if (pressed) {
            x = xpos(e);
            y = ypos(e);
            delta = reference - x;
            deltaY = Math.abs(referenceY - y);
            if (deltaY < 30 && !vertical_dragged) {
              // If vertical scrolling don't allow dragging.
              if (delta > 2 || delta < -2) {
                dragged = true;
                reference = x;
                scroll(offset + delta);
              }

            } else if (dragged) {
              // If dragging don't allow vertical scroll.
              e.preventDefault();
              e.stopPropagation();
              return false;

            } else {
              // Vertical scrolling.
              vertical_dragged = true;
            }
          }

          if (dragged) {
            // If dragging don't allow vertical scroll.
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        }

        function release(e) {
          if (pressed) {
            pressed = false;
          } else {
            return;
          }

          clearInterval(ticker);
          target = offset;
          if (velocity > 10 || velocity < -10) {
            amplitude = 0.9 * velocity;
            target = offset + amplitude;
          }
          target = Math.round(target / dim) * dim;

          // No wrap of items.
          if (noWrap) {
            if (target >= dim * (count - 1)) {
              target = dim * (count - 1);
            } else if (target < 0) {
              target = 0;
            }
          }
          amplitude = target - offset;
          timestamp = Date.now();
          requestAnimationFrame(autoScroll);

          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
          }
          return false;
        }

        xform = 'transform';
        ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
          var e = prefix + 'Transform';
          if (typeof document.body.style[e] !== 'undefined') {
            xform = e;
            return false;
          }
          return true;
        });


        var throttledResize = Materialize.throttle(function() {
          if (options.fullWidth) {
            item_width = view.find('.carousel-item').first().innerWidth();
            var imageHeight = view.find('.carousel-item.active').height();
            dim = item_width * 2 + options.padding;
            offset = center * 2 * item_width;
            target = offset;
            setCarouselHeight(true);
          } else {
            scroll();
          }
        }, 200);
        $(window)
          .off('resize.carousel-'+uniqueNamespace)
          .on('resize.carousel-'+uniqueNamespace, throttledResize);

        setupEvents();
        scroll(offset);

        $(this).on('carouselNext', function(e, n, callback) {
          if (n === undefined) {
            n = 1;
          }
          if (typeof(callback) === "function") {
            oneTimeCallback = callback;
          }

          target = (dim * Math.round(offset / dim)) + (dim * n);
          if (offset !== target) {
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
          }
        });

        $(this).on('carouselPrev', function(e, n, callback) {
          if (n === undefined) {
            n = 1;
          }
          if (typeof(callback) === "function") {
            oneTimeCallback = callback;
          }

          target = (dim * Math.round(offset / dim)) - (dim * n);
          if (offset !== target) {
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
          }
        });

        $(this).on('carouselSet', function(e, n, callback) {
          if (n === undefined) {
            n = 0;
          }
          if (typeof(callback) === "function") {
            oneTimeCallback = callback;
          }

          cycleTo(n);
        });

      });



    },
    next : function(n, callback) {
      $(this).trigger('carouselNext', [n, callback]);
    },
    prev : function(n, callback) {
      $(this).trigger('carouselPrev', [n, callback]);
    },
    set : function(n, callback) {
      $(this).trigger('carouselSet', [n, callback]);
    },
    destroy : function() {
      var uniqueNamespace = $(this).attr('data-namespace');
      $(this).removeAttr('data-namespace');
      $(this).removeClass('initialized');
      $(this).find('.indicators').remove();

      // Remove event handlers
      $(this).off('carouselNext carouselPrev carouselSet');
      $(window).off('resize.carousel-'+uniqueNamespace);
      if (typeof window.ontouchstart !== 'undefined') {
        $(this).off('touchstart.carousel touchmove.carousel touchend.carousel');
      }
      $(this).off('mousedown.carousel mousemove.carousel mouseup.carousel mouseleave.carousel click.carousel');
    }
  };


    $.fn.carousel = function(methodOrOptions) {
      if ( methods[methodOrOptions] ) {
        return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.carousel' );
      }
    }; // Plugin end
}( jQuery ));

(function ($) {

  var methods = {
  init: function (options) {
    return this.each(function() {
    var origin = $('#'+$(this).attr('data-activates'));
    var screen = $('body');

    // Creating tap target
    var tapTargetEl = $(this);
    var tapTargetWrapper = tapTargetEl.parent('.tap-target-wrapper');
    var tapTargetWave = tapTargetWrapper.find('.tap-target-wave');
    var tapTargetOriginEl = tapTargetWrapper.find('.tap-target-origin');
    var tapTargetContentEl = tapTargetEl.find('.tap-target-content');

    // Creating wrapper
    if (!tapTargetWrapper.length) {
      tapTargetWrapper = tapTargetEl.wrap($('<div class="tap-target-wrapper"></div>')).parent();
    }

    // Creating content
    if (!tapTargetContentEl.length) {
      tapTargetContentEl = $('<div class="tap-target-content"></div>');
      tapTargetEl.append(tapTargetContentEl);
    }

    // Creating foreground wave
    if (!tapTargetWave.length) {
      tapTargetWave = $('<div class="tap-target-wave"></div>');

      // Creating origin
      if (!tapTargetOriginEl.length) {
        tapTargetOriginEl = origin.clone(true, true);
        tapTargetOriginEl.addClass('tap-target-origin');
        tapTargetOriginEl.removeAttr('id');
        tapTargetOriginEl.removeAttr('style');
        tapTargetWave.append(tapTargetOriginEl);
      }

      tapTargetWrapper.append(tapTargetWave);
    }

    // Open
    var openTapTarget = function() {
      if (tapTargetWrapper.is('.open')) {
        return;
      }

      // Adding open class
      tapTargetWrapper.addClass('open');

      setTimeout(function() {
        tapTargetOriginEl.off('click.tapTarget').on('click.tapTarget', function(e) {
          closeTapTarget();
          tapTargetOriginEl.off('click.tapTarget');
        });

        $(document).off('click.tapTarget').on('click.tapTarget', function(e) {
          closeTapTarget();
          $(document).off('click.tapTarget');
        });

        var throttledCalc = Materialize.throttle(function() {
          calculateTapTarget();
        }, 200);
        $(window).off('resize.tapTarget').on('resize.tapTarget', throttledCalc);
      }, 0);
    };

    // Close
    var closeTapTarget = function(){
      if (!tapTargetWrapper.is('.open')) {
        return;
      }

      tapTargetWrapper.removeClass('open');
      tapTargetOriginEl.off('click.tapTarget')
      $(document).off('click.tapTarget');
      $(window).off('resize.tapTarget');
    };

    // Pre calculate
    var calculateTapTarget = function() {
      // Element or parent is fixed position?
      var isFixed = origin.css('position') === 'fixed';
      if (!isFixed) {
        var parents = origin.parents();
        for(var i = 0; i < parents.length; i++) {
          isFixed = $(parents[i]).css('position') == 'fixed';
          if (isFixed) {
            break;
          }
        }
      }

      // Calculating origin
      var originWidth = origin.outerWidth();
      var originHeight = origin.outerHeight();
      var originTop = isFixed ? origin.offset().top - $(document).scrollTop() : origin.offset().top;
      var originLeft = isFixed ? origin.offset().left - $(document).scrollLeft() : origin.offset().left;

      // Calculating screen
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var centerX = windowWidth / 2;
      var centerY = windowHeight / 2;
      var isLeft = originLeft <= centerX;
      var isRight = originLeft > centerX;
      var isTop = originTop <= centerY;
      var isBottom = originTop > centerY;
      var isCenterX = originLeft >= windowWidth*0.25 && originLeft <= windowWidth*0.75;
      var isCenterY = originTop >= windowHeight*0.25 && originTop <= windowHeight*0.75;

      // Calculating tap target
      var tapTargetWidth = tapTargetEl.outerWidth();
      var tapTargetHeight = tapTargetEl.outerHeight();
      var tapTargetTop = originTop + originHeight/2 - tapTargetHeight/2;
      var tapTargetLeft = originLeft + originWidth/2 - tapTargetWidth/2;
      var tapTargetPosition = isFixed ? 'fixed' : 'absolute';

      // Calculating content
      var tapTargetTextWidth = isCenterX ? tapTargetWidth : tapTargetWidth/2 + originWidth;
      var tapTargetTextHeight = tapTargetHeight/2;
      var tapTargetTextTop = isTop ? tapTargetHeight/2 : 0;
      var tapTargetTextBottom = 0;
      var tapTargetTextLeft = isLeft && !isCenterX ? tapTargetWidth/2 - originWidth : 0;
      var tapTargetTextRight = 0;
      var tapTargetTextPadding = originWidth;
      var tapTargetTextAlign = isBottom ? 'bottom' : 'top';

      // Calculating wave
      var tapTargetWaveWidth = originWidth > originHeight ? originWidth*2 : originWidth*2;
      var tapTargetWaveHeight = tapTargetWaveWidth;
      var tapTargetWaveTop = tapTargetHeight/2 - tapTargetWaveHeight/2;
      var tapTargetWaveLeft = tapTargetWidth/2 - tapTargetWaveWidth/2;

      // Setting tap target
      var tapTargetWrapperCssObj = {};
      tapTargetWrapperCssObj.top = isTop ? tapTargetTop : '';
      tapTargetWrapperCssObj.right = isRight ? windowWidth - tapTargetLeft - tapTargetWidth : '';
      tapTargetWrapperCssObj.bottom = isBottom ? windowHeight - tapTargetTop - tapTargetHeight : '';
      tapTargetWrapperCssObj.left = isLeft ? tapTargetLeft : '';
      tapTargetWrapperCssObj.position = tapTargetPosition;
      tapTargetWrapper.css(tapTargetWrapperCssObj);

      // Setting content
      tapTargetContentEl.css({
        width: tapTargetTextWidth,
        height: tapTargetTextHeight,
        top: tapTargetTextTop,
        right: tapTargetTextRight,
        bottom: tapTargetTextBottom,
        left: tapTargetTextLeft,
        padding: tapTargetTextPadding,
        verticalAlign: tapTargetTextAlign
      });

      // Setting wave
      tapTargetWave.css({
        top: tapTargetWaveTop,
        left: tapTargetWaveLeft,
        width: tapTargetWaveWidth,
        height: tapTargetWaveHeight
      });
    }

    if (options == 'open') {
      calculateTapTarget();
      openTapTarget();
    }

    if (options == 'close')
      closeTapTarget();
    });
  },
  open: function() {},
  close: function() {}
  };

  $.fn.tapTarget = function(methodOrOptions) {
  if (methods[methodOrOptions] || typeof methodOrOptions === 'object')
    return methods.init.apply( this, arguments );

  $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tap-target' );
  };

}( jQuery ));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXRpYWwuanMiLCJqcXVlcnkuZWFzaW5nLjEuNC5qcyIsImFuaW1hdGlvbi5qcyIsInZlbG9jaXR5Lm1pbi5qcyIsImhhbW1lci5taW4uanMiLCJqcXVlcnkuaGFtbWVyLmpzIiwiZ2xvYmFsLmpzIiwiY29sbGFwc2libGUuanMiLCJkcm9wZG93bi5qcyIsIm1vZGFsLmpzIiwibWF0ZXJpYWxib3guanMiLCJwYXJhbGxheC5qcyIsInRhYnMuanMiLCJ0b29sdGlwLmpzIiwid2F2ZXMuanMiLCJ0b2FzdHMuanMiLCJzaWRlTmF2LmpzIiwic2Nyb2xsc3B5LmpzIiwiZm9ybXMuanMiLCJzbGlkZXIuanMiLCJjYXJkcy5qcyIsImNoaXBzLmpzIiwicHVzaHBpbi5qcyIsImJ1dHRvbnMuanMiLCJ0cmFuc2l0aW9ucy5qcyIsInNjcm9sbEZpcmUuanMiLCJwaWNrZXIuanMiLCJwaWNrZXIuZGF0ZS5qcyIsInBpY2tlci50aW1lLmpzIiwiY2hhcmFjdGVyX2NvdW50ZXIuanMiLCJjYXJvdXNlbC5qcyIsInRhcFRhcmdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25YQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDalNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzN5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ptQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaDVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWF0ZXJpYWxpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDaGVjayBmb3IgalF1ZXJ5LlxuaWYgKHR5cGVvZihqUXVlcnkpID09PSAndW5kZWZpbmVkJykge1xuICB2YXIgalF1ZXJ5O1xuICAvLyBDaGVjayBpZiByZXF1aXJlIGlzIGEgZGVmaW5lZCBmdW5jdGlvbi5cbiAgaWYgKHR5cGVvZihyZXF1aXJlKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGpRdWVyeSA9ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbiAgLy8gRWxzZSB1c2UgdGhlIGRvbGxhciBzaWduIGFsaWFzLlxuICB9IGVsc2Uge1xuICAgIGpRdWVyeSA9ICQ7XG4gIH1cbn1cbiIsIi8qXG4gKiBqUXVlcnkgRWFzaW5nIHYxLjQuMCAtIGh0dHA6Ly9nc2dkLmNvLnVrL3NhbmRib3gvanF1ZXJ5L2Vhc2luZy9cbiAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS5cbiAqIENvcHlyaWdodCDCqSAyMDA4IEdlb3JnZSBNY0dpbmxleSBTbWl0aFxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZ2RzbWl0aC9qcXVlcnktZWFzaW5nL21hc3Rlci9MSUNFTlNFXG4qL1xuXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uICgkKSB7XG5cdFx0XHRyZXR1cm4gZmFjdG9yeSgkKTtcblx0XHR9KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KGpRdWVyeSk7XG5cdH1cbn0pKGZ1bmN0aW9uKCQpe1xuXG4vLyBQcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgalF1ZXJ5IFwic3dpbmdcIiBlYXNpbmcgYXMgXCJqc3dpbmdcIlxuJC5lYXNpbmdbJ2pzd2luZyddID0gJC5lYXNpbmdbJ3N3aW5nJ107XG5cbnZhciBwb3cgPSBNYXRoLnBvdyxcblx0c3FydCA9IE1hdGguc3FydCxcblx0c2luID0gTWF0aC5zaW4sXG5cdGNvcyA9IE1hdGguY29zLFxuXHRQSSA9IE1hdGguUEksXG5cdGMxID0gMS43MDE1OCxcblx0YzIgPSBjMSAqIDEuNTI1LFxuXHRjMyA9IGMxICsgMSxcblx0YzQgPSAoIDIgKiBQSSApIC8gMyxcblx0YzUgPSAoIDIgKiBQSSApIC8gNC41O1xuXG4vLyB4IGlzIHRoZSBmcmFjdGlvbiBvZiBhbmltYXRpb24gcHJvZ3Jlc3MsIGluIHRoZSByYW5nZSAwLi4xXG5mdW5jdGlvbiBib3VuY2VPdXQoeCkge1xuXHR2YXIgbjEgPSA3LjU2MjUsXG5cdFx0ZDEgPSAyLjc1O1xuXHRpZiAoIHggPCAxL2QxICkge1xuXHRcdHJldHVybiBuMSp4Kng7XG5cdH0gZWxzZSBpZiAoIHggPCAyL2QxICkge1xuXHRcdHJldHVybiBuMSooeC09KDEuNS9kMSkpKnggKyAuNzU7XG5cdH0gZWxzZSBpZiAoIHggPCAyLjUvZDEgKSB7XG5cdFx0cmV0dXJuIG4xKih4LT0oMi4yNS9kMSkpKnggKyAuOTM3NTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbjEqKHgtPSgyLjYyNS9kMSkpKnggKyAuOTg0Mzc1O1xuXHR9XG59XG5cbiQuZXh0ZW5kKCAkLmVhc2luZyxcbntcblx0ZGVmOiAnZWFzZU91dFF1YWQnLFxuXHRzd2luZzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gJC5lYXNpbmdbJC5lYXNpbmcuZGVmXSh4KTtcblx0fSxcblx0ZWFzZUluUXVhZDogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCAqIHg7XG5cdH0sXG5cdGVhc2VPdXRRdWFkOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiAxIC0gKCAxIC0geCApICogKCAxIC0geCApO1xuXHR9LFxuXHRlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdDIgKiB4ICogeCA6XG5cdFx0XHQxIC0gcG93KCAtMiAqIHggKyAyLCAyICkgLyAyO1xuXHR9LFxuXHRlYXNlSW5DdWJpYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCAqIHggKiB4O1xuXHR9LFxuXHRlYXNlT3V0Q3ViaWM6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgLSBwb3coIDEgLSB4LCAzICk7XG5cdH0sXG5cdGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdDQgKiB4ICogeCAqIHggOlxuXHRcdFx0MSAtIHBvdyggLTIgKiB4ICsgMiwgMyApIC8gMjtcblx0fSxcblx0ZWFzZUluUXVhcnQ6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggKiB4ICogeCAqIHg7XG5cdH0sXG5cdGVhc2VPdXRRdWFydDogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gMSAtIHBvdyggMSAtIHgsIDQgKTtcblx0fSxcblx0ZWFzZUluT3V0UXVhcnQ6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggPCAwLjUgP1xuXHRcdFx0OCAqIHggKiB4ICogeCAqIHggOlxuXHRcdFx0MSAtIHBvdyggLTIgKiB4ICsgMiwgNCApIC8gMjtcblx0fSxcblx0ZWFzZUluUXVpbnQ6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggKiB4ICogeCAqIHggKiB4O1xuXHR9LFxuXHRlYXNlT3V0UXVpbnQ6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgLSBwb3coIDEgLSB4LCA1ICk7XG5cdH0sXG5cdGVhc2VJbk91dFF1aW50OiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdDE2ICogeCAqIHggKiB4ICogeCAqIHggOlxuXHRcdFx0MSAtIHBvdyggLTIgKiB4ICsgMiwgNSApIC8gMjtcblx0fSxcblx0ZWFzZUluU2luZTogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gMSAtIGNvcyggeCAqIFBJLzIgKTtcblx0fSxcblx0ZWFzZU91dFNpbmU6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHNpbiggeCAqIFBJLzIgKTtcblx0fSxcblx0ZWFzZUluT3V0U2luZTogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gLSggY29zKCBQSSAqIHggKSAtIDEgKSAvIDI7XG5cdH0sXG5cdGVhc2VJbkV4cG86IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggPT09IDAgPyAwIDogcG93KCAyLCAxMCAqIHggLSAxMCApO1xuXHR9LFxuXHRlYXNlT3V0RXhwbzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA9PT0gMSA/IDEgOiAxIC0gcG93KCAyLCAtMTAgKiB4ICk7XG5cdH0sXG5cdGVhc2VJbk91dEV4cG86IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOiB4IDwgMC41ID9cblx0XHRcdHBvdyggMiwgMjAgKiB4IC0gMTAgKSAvIDIgOlxuXHRcdFx0KCAyIC0gcG93KCAyLCAtMjAgKiB4ICsgMTAgKSApIC8gMjtcblx0fSxcblx0ZWFzZUluQ2lyYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gMSAtIHNxcnQoIDEgLSBwb3coIHgsIDIgKSApO1xuXHR9LFxuXHRlYXNlT3V0Q2lyYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gc3FydCggMSAtIHBvdyggeCAtIDEsIDIgKSApO1xuXHR9LFxuXHRlYXNlSW5PdXRDaXJjOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdCggMSAtIHNxcnQoIDEgLSBwb3coIDIgKiB4LCAyICkgKSApIC8gMiA6XG5cdFx0XHQoIHNxcnQoIDEgLSBwb3coIC0yICogeCArIDIsIDIgKSApICsgMSApIC8gMjtcblx0fSxcblx0ZWFzZUluRWxhc3RpYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6XG5cdFx0XHQtcG93KCAyLCAxMCAqIHggLSAxMCApICogc2luKCAoIHggKiAxMCAtIDEwLjc1ICkgKiBjNCApO1xuXHR9LFxuXHRlYXNlT3V0RWxhc3RpYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6XG5cdFx0XHRwb3coIDIsIC0xMCAqIHggKSAqIHNpbiggKCB4ICogMTAgLSAwLjc1ICkgKiBjNCApICsgMTtcblx0fSxcblx0ZWFzZUluT3V0RWxhc3RpYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA9PT0gMCA/IDAgOiB4ID09PSAxID8gMSA6IHggPCAwLjUgP1xuXHRcdFx0LSggcG93KCAyLCAyMCAqIHggLSAxMCApICogc2luKCAoIDIwICogeCAtIDExLjEyNSApICogYzUgKSkgLyAyIDpcblx0XHRcdHBvdyggMiwgLTIwICogeCArIDEwICkgKiBzaW4oICggMjAgKiB4IC0gMTEuMTI1ICkgKiBjNSApIC8gMiArIDE7XG5cdH0sXG5cdGVhc2VJbkJhY2s6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIGMzICogeCAqIHggKiB4IC0gYzEgKiB4ICogeDtcblx0fSxcblx0ZWFzZU91dEJhY2s6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgKyBjMyAqIHBvdyggeCAtIDEsIDMgKSArIGMxICogcG93KCB4IC0gMSwgMiApO1xuXHR9LFxuXHRlYXNlSW5PdXRCYWNrOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdCggcG93KCAyICogeCwgMiApICogKCAoIGMyICsgMSApICogMiAqIHggLSBjMiApICkgLyAyIDpcblx0XHRcdCggcG93KCAyICogeCAtIDIsIDIgKSAqKCAoIGMyICsgMSApICogKCB4ICogMiAtIDIgKSArIGMyICkgKyAyICkgLyAyO1xuXHR9LFxuXHRlYXNlSW5Cb3VuY2U6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgLSBib3VuY2VPdXQoIDEgLSB4ICk7XG5cdH0sXG5cdGVhc2VPdXRCb3VuY2U6IGJvdW5jZU91dCxcblx0ZWFzZUluT3V0Qm91bmNlOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdCggMSAtIGJvdW5jZU91dCggMSAtIDIgKiB4ICkgKSAvIDIgOlxuXHRcdFx0KCAxICsgYm91bmNlT3V0KCAyICogeCAtIDEgKSApIC8gMjtcblx0fVxufSk7XG5cbn0pOyIsIi8vIEN1c3RvbSBFYXNpbmdcbmpRdWVyeS5leHRlbmQoIGpRdWVyeS5lYXNpbmcsXG57XG4gIGVhc2VJbk91dE1hdGVyaWFsOiBmdW5jdGlvbiAoeCwgdCwgYiwgYywgZCkge1xuICAgIGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0ICsgYjtcbiAgICByZXR1cm4gYy80KigodC09MikqdCp0ICsgMikgKyBiO1xuICB9XG59KTsiLCIvKiEgVmVsb2NpdHlKUy5vcmcgKDEuMi4zKS4gKEMpIDIwMTQgSnVsaWFuIFNoYXBpcm8uIE1JVCBAbGljZW5zZTogZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlICovXG4vKiEgVmVsb2NpdHlKUy5vcmcgalF1ZXJ5IFNoaW0gKDEuMC4xKS4gKEMpIDIwMTQgVGhlIGpRdWVyeSBGb3VuZGF0aW9uLiBNSVQgQGxpY2Vuc2U6IGVuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZS4gKi9cbi8qISBOb3RlIHRoYXQgdGhpcyBoYXMgYmVlbiBtb2RpZmllZCBieSBNYXRlcmlhbGl6ZSB0byBjb25maXJtIHRoYXQgVmVsb2NpdHkgaXMgbm90IGFscmVhZHkgYmVpbmcgaW1wb3J0ZWQuICovXG5qUXVlcnkuVmVsb2NpdHk/Y29uc29sZS5sb2coXCJWZWxvY2l0eSBpcyBhbHJlYWR5IGxvYWRlZC4gWW91IG1heSBiZSBuZWVkbGVzc2x5IGltcG9ydGluZyBWZWxvY2l0eSBhZ2Fpbjsgbm90ZSB0aGF0IE1hdGVyaWFsaXplIGluY2x1ZGVzIFZlbG9jaXR5LlwiKTooIWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7dmFyIHQ9ZS5sZW5ndGgsYT1yLnR5cGUoZSk7cmV0dXJuXCJmdW5jdGlvblwiPT09YXx8ci5pc1dpbmRvdyhlKT8hMToxPT09ZS5ub2RlVHlwZSYmdD8hMDpcImFycmF5XCI9PT1hfHwwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJnQ+MCYmdC0xIGluIGV9aWYoIWUualF1ZXJ5KXt2YXIgcj1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgci5mbi5pbml0KGUsdCl9O3IuaXNXaW5kb3c9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJmU9PWUud2luZG93fSxyLnR5cGU9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP25baS5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX0sci5pc0FycmF5PUFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGUpe3JldHVyblwiYXJyYXlcIj09PXIudHlwZShlKX0sci5pc1BsYWluT2JqZWN0PWZ1bmN0aW9uKGUpe3ZhciB0O2lmKCFlfHxcIm9iamVjdFwiIT09ci50eXBlKGUpfHxlLm5vZGVUeXBlfHxyLmlzV2luZG93KGUpKXJldHVybiExO3RyeXtpZihlLmNvbnN0cnVjdG9yJiYhby5jYWxsKGUsXCJjb25zdHJ1Y3RvclwiKSYmIW8uY2FsbChlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIikpcmV0dXJuITF9Y2F0Y2goYSl7cmV0dXJuITF9Zm9yKHQgaW4gZSk7cmV0dXJuIHZvaWQgMD09PXR8fG8uY2FsbChlLHQpfSxyLmVhY2g9ZnVuY3Rpb24oZSxyLGEpe3ZhciBuLG89MCxpPWUubGVuZ3RoLHM9dChlKTtpZihhKXtpZihzKWZvcig7aT5vJiYobj1yLmFwcGx5KGVbb10sYSksbiE9PSExKTtvKyspO2Vsc2UgZm9yKG8gaW4gZSlpZihuPXIuYXBwbHkoZVtvXSxhKSxuPT09ITEpYnJlYWt9ZWxzZSBpZihzKWZvcig7aT5vJiYobj1yLmNhbGwoZVtvXSxvLGVbb10pLG4hPT0hMSk7bysrKTtlbHNlIGZvcihvIGluIGUpaWYobj1yLmNhbGwoZVtvXSxvLGVbb10pLG49PT0hMSlicmVhaztyZXR1cm4gZX0sci5kYXRhPWZ1bmN0aW9uKGUsdCxuKXtpZih2b2lkIDA9PT1uKXt2YXIgbz1lW3IuZXhwYW5kb10saT1vJiZhW29dO2lmKHZvaWQgMD09PXQpcmV0dXJuIGk7aWYoaSYmdCBpbiBpKXJldHVybiBpW3RdfWVsc2UgaWYodm9pZCAwIT09dCl7dmFyIG89ZVtyLmV4cGFuZG9dfHwoZVtyLmV4cGFuZG9dPSsrci51dWlkKTtyZXR1cm4gYVtvXT1hW29dfHx7fSxhW29dW3RdPW4sbn19LHIucmVtb3ZlRGF0YT1mdW5jdGlvbihlLHQpe3ZhciBuPWVbci5leHBhbmRvXSxvPW4mJmFbbl07byYmci5lYWNoKHQsZnVuY3Rpb24oZSx0KXtkZWxldGUgb1t0XX0pfSxyLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQsYSxuLG8saSxzPWFyZ3VtZW50c1swXXx8e30sbD0xLHU9YXJndW1lbnRzLmxlbmd0aCxjPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIHMmJihjPXMscz1hcmd1bWVudHNbbF18fHt9LGwrKyksXCJvYmplY3RcIiE9dHlwZW9mIHMmJlwiZnVuY3Rpb25cIiE9PXIudHlwZShzKSYmKHM9e30pLGw9PT11JiYocz10aGlzLGwtLSk7dT5sO2wrKylpZihudWxsIT0obz1hcmd1bWVudHNbbF0pKWZvcihuIGluIG8pZT1zW25dLGE9b1tuXSxzIT09YSYmKGMmJmEmJihyLmlzUGxhaW5PYmplY3QoYSl8fCh0PXIuaXNBcnJheShhKSkpPyh0Pyh0PSExLGk9ZSYmci5pc0FycmF5KGUpP2U6W10pOmk9ZSYmci5pc1BsYWluT2JqZWN0KGUpP2U6e30sc1tuXT1yLmV4dGVuZChjLGksYSkpOnZvaWQgMCE9PWEmJihzW25dPWEpKTtyZXR1cm4gc30sci5xdWV1ZT1mdW5jdGlvbihlLGEsbil7ZnVuY3Rpb24gbyhlLHIpe3ZhciBhPXJ8fFtdO3JldHVybiBudWxsIT1lJiYodChPYmplY3QoZSkpPyFmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0rdC5sZW5ndGgsYT0wLG49ZS5sZW5ndGg7cj5hOyllW24rK109dFthKytdO2lmKHIhPT1yKWZvcig7dm9pZCAwIT09dFthXTspZVtuKytdPXRbYSsrXTtyZXR1cm4gZS5sZW5ndGg9bixlfShhLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTpbXS5wdXNoLmNhbGwoYSxlKSksYX1pZihlKXthPShhfHxcImZ4XCIpK1wicXVldWVcIjt2YXIgaT1yLmRhdGEoZSxhKTtyZXR1cm4gbj8oIWl8fHIuaXNBcnJheShuKT9pPXIuZGF0YShlLGEsbyhuKSk6aS5wdXNoKG4pLGkpOml8fFtdfX0sci5kZXF1ZXVlPWZ1bmN0aW9uKGUsdCl7ci5lYWNoKGUubm9kZVR5cGU/W2VdOmUsZnVuY3Rpb24oZSxhKXt0PXR8fFwiZnhcIjt2YXIgbj1yLnF1ZXVlKGEsdCksbz1uLnNoaWZ0KCk7XCJpbnByb2dyZXNzXCI9PT1vJiYobz1uLnNoaWZ0KCkpLG8mJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLG8uY2FsbChhLGZ1bmN0aW9uKCl7ci5kZXF1ZXVlKGEsdCl9KSl9KX0sci5mbj1yLnByb3RvdHlwZT17aW5pdDpmdW5jdGlvbihlKXtpZihlLm5vZGVUeXBlKXJldHVybiB0aGlzWzBdPWUsdGhpczt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBET00gbm9kZS5cIil9LG9mZnNldDpmdW5jdGlvbigpe3ZhciB0PXRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0P3RoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6e3RvcDowLGxlZnQ6MH07cmV0dXJue3RvcDp0LnRvcCsoZS5wYWdlWU9mZnNldHx8ZG9jdW1lbnQuc2Nyb2xsVG9wfHwwKS0oZG9jdW1lbnQuY2xpZW50VG9wfHwwKSxsZWZ0OnQubGVmdCsoZS5wYWdlWE9mZnNldHx8ZG9jdW1lbnQuc2Nyb2xsTGVmdHx8MCktKGRvY3VtZW50LmNsaWVudExlZnR8fDApfX0scG9zaXRpb246ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7Zm9yKHZhciBlPXRoaXMub2Zmc2V0UGFyZW50fHxkb2N1bWVudDtlJiZcImh0bWxcIj09PSFlLm5vZGVUeXBlLnRvTG93ZXJDYXNlJiZcInN0YXRpY1wiPT09ZS5zdHlsZS5wb3NpdGlvbjspZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8ZG9jdW1lbnR9dmFyIHQ9dGhpc1swXSxlPWUuYXBwbHkodCksYT10aGlzLm9mZnNldCgpLG49L14oPzpib2R5fGh0bWwpJC9pLnRlc3QoZS5ub2RlTmFtZSk/e3RvcDowLGxlZnQ6MH06cihlKS5vZmZzZXQoKTtyZXR1cm4gYS50b3AtPXBhcnNlRmxvYXQodC5zdHlsZS5tYXJnaW5Ub3ApfHwwLGEubGVmdC09cGFyc2VGbG9hdCh0LnN0eWxlLm1hcmdpbkxlZnQpfHwwLGUuc3R5bGUmJihuLnRvcCs9cGFyc2VGbG9hdChlLnN0eWxlLmJvcmRlclRvcFdpZHRoKXx8MCxuLmxlZnQrPXBhcnNlRmxvYXQoZS5zdHlsZS5ib3JkZXJMZWZ0V2lkdGgpfHwwKSx7dG9wOmEudG9wLW4udG9wLGxlZnQ6YS5sZWZ0LW4ubGVmdH19fTt2YXIgYT17fTtyLmV4cGFuZG89XCJ2ZWxvY2l0eVwiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLHIudXVpZD0wO2Zvcih2YXIgbj17fSxvPW4uaGFzT3duUHJvcGVydHksaT1uLnRvU3RyaW5nLHM9XCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGw9MDtsPHMubGVuZ3RoO2wrKyluW1wiW29iamVjdCBcIitzW2xdK1wiXVwiXT1zW2xdLnRvTG93ZXJDYXNlKCk7ci5mbi5pbml0LnByb3RvdHlwZT1yLmZuLGUuVmVsb2NpdHk9e1V0aWxpdGllczpyfX19KHdpbmRvdyksZnVuY3Rpb24oZSl7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOmUoKX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSx0LHIsYSl7ZnVuY3Rpb24gbihlKXtmb3IodmFyIHQ9LTEscj1lP2UubGVuZ3RoOjAsYT1bXTsrK3Q8cjspe3ZhciBuPWVbdF07biYmYS5wdXNoKG4pfXJldHVybiBhfWZ1bmN0aW9uIG8oZSl7cmV0dXJuIG0uaXNXcmFwcGVkKGUpP2U9W10uc2xpY2UuY2FsbChlKTptLmlzTm9kZShlKSYmKGU9W2VdKSxlfWZ1bmN0aW9uIGkoZSl7dmFyIHQ9Zi5kYXRhKGUsXCJ2ZWxvY2l0eVwiKTtyZXR1cm4gbnVsbD09PXQ/YTp0fWZ1bmN0aW9uIHMoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLnJvdW5kKHQqZSkqKDEvZSl9fWZ1bmN0aW9uIGwoZSxyLGEsbil7ZnVuY3Rpb24gbyhlLHQpe3JldHVybiAxLTMqdCszKmV9ZnVuY3Rpb24gaShlLHQpe3JldHVybiAzKnQtNiplfWZ1bmN0aW9uIHMoZSl7cmV0dXJuIDMqZX1mdW5jdGlvbiBsKGUsdCxyKXtyZXR1cm4oKG8odCxyKSplK2kodCxyKSkqZStzKHQpKSplfWZ1bmN0aW9uIHUoZSx0LHIpe3JldHVybiAzKm8odCxyKSplKmUrMippKHQscikqZStzKHQpfWZ1bmN0aW9uIGModCxyKXtmb3IodmFyIG49MDttPm47KytuKXt2YXIgbz11KHIsZSxhKTtpZigwPT09bylyZXR1cm4gcjt2YXIgaT1sKHIsZSxhKS10O3ItPWkvb31yZXR1cm4gcn1mdW5jdGlvbiBwKCl7Zm9yKHZhciB0PTA7Yj50OysrdCl3W3RdPWwodCp4LGUsYSl9ZnVuY3Rpb24gZih0LHIsbil7dmFyIG8saSxzPTA7ZG8gaT1yKyhuLXIpLzIsbz1sKGksZSxhKS10LG8+MD9uPWk6cj1pO3doaWxlKE1hdGguYWJzKG8pPmgmJisrczx2KTtyZXR1cm4gaX1mdW5jdGlvbiBkKHQpe2Zvcih2YXIgcj0wLG49MSxvPWItMTtuIT1vJiZ3W25dPD10OysrbilyKz14Oy0tbjt2YXIgaT0odC13W25dKS8od1tuKzFdLXdbbl0pLHM9citpKngsbD11KHMsZSxhKTtyZXR1cm4gbD49eT9jKHQscyk6MD09bD9zOmYodCxyLHIreCl9ZnVuY3Rpb24gZygpe1Y9ITAsKGUhPXJ8fGEhPW4pJiZwKCl9dmFyIG09NCx5PS4wMDEsaD0xZS03LHY9MTAsYj0xMSx4PTEvKGItMSksUz1cIkZsb2F0MzJBcnJheVwiaW4gdDtpZig0IT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIFA9MDs0PlA7KytQKWlmKFwibnVtYmVyXCIhPXR5cGVvZiBhcmd1bWVudHNbUF18fGlzTmFOKGFyZ3VtZW50c1tQXSl8fCFpc0Zpbml0ZShhcmd1bWVudHNbUF0pKXJldHVybiExO2U9TWF0aC5taW4oZSwxKSxhPU1hdGgubWluKGEsMSksZT1NYXRoLm1heChlLDApLGE9TWF0aC5tYXgoYSwwKTt2YXIgdz1TP25ldyBGbG9hdDMyQXJyYXkoYik6bmV3IEFycmF5KGIpLFY9ITEsQz1mdW5jdGlvbih0KXtyZXR1cm4gVnx8ZygpLGU9PT1yJiZhPT09bj90OjA9PT10PzA6MT09PXQ/MTpsKGQodCkscixuKX07Qy5nZXRDb250cm9sUG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuW3t4OmUseTpyfSx7eDphLHk6bn1dfTt2YXIgVD1cImdlbmVyYXRlQmV6aWVyKFwiK1tlLHIsYSxuXStcIilcIjtyZXR1cm4gQy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBUfSxDfWZ1bmN0aW9uIHUoZSx0KXt2YXIgcj1lO3JldHVybiBtLmlzU3RyaW5nKGUpP2IuRWFzaW5nc1tlXXx8KHI9ITEpOnI9bS5pc0FycmF5KGUpJiYxPT09ZS5sZW5ndGg/cy5hcHBseShudWxsLGUpOm0uaXNBcnJheShlKSYmMj09PWUubGVuZ3RoP3guYXBwbHkobnVsbCxlLmNvbmNhdChbdF0pKTptLmlzQXJyYXkoZSkmJjQ9PT1lLmxlbmd0aD9sLmFwcGx5KG51bGwsZSk6ITEscj09PSExJiYocj1iLkVhc2luZ3NbYi5kZWZhdWx0cy5lYXNpbmddP2IuZGVmYXVsdHMuZWFzaW5nOnYpLHJ9ZnVuY3Rpb24gYyhlKXtpZihlKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxyPWIuU3RhdGUuY2FsbHMubGVuZ3RoO3I+MWU0JiYoYi5TdGF0ZS5jYWxscz1uKGIuU3RhdGUuY2FsbHMpKTtmb3IodmFyIG89MDtyPm87bysrKWlmKGIuU3RhdGUuY2FsbHNbb10pe3ZhciBzPWIuU3RhdGUuY2FsbHNbb10sbD1zWzBdLHU9c1syXSxkPXNbM10sZz0hIWQseT1udWxsO2R8fChkPWIuU3RhdGUuY2FsbHNbb11bM109dC0xNik7Zm9yKHZhciBoPU1hdGgubWluKCh0LWQpL3UuZHVyYXRpb24sMSksdj0wLHg9bC5sZW5ndGg7eD52O3YrKyl7dmFyIFA9bFt2XSxWPVAuZWxlbWVudDtpZihpKFYpKXt2YXIgQz0hMTtpZih1LmRpc3BsYXkhPT1hJiZudWxsIT09dS5kaXNwbGF5JiZcIm5vbmVcIiE9PXUuZGlzcGxheSl7aWYoXCJmbGV4XCI9PT11LmRpc3BsYXkpe3ZhciBUPVtcIi13ZWJraXQtYm94XCIsXCItbW96LWJveFwiLFwiLW1zLWZsZXhib3hcIixcIi13ZWJraXQtZmxleFwiXTtmLmVhY2goVCxmdW5jdGlvbihlLHQpe1Muc2V0UHJvcGVydHlWYWx1ZShWLFwiZGlzcGxheVwiLHQpfSl9Uy5zZXRQcm9wZXJ0eVZhbHVlKFYsXCJkaXNwbGF5XCIsdS5kaXNwbGF5KX11LnZpc2liaWxpdHkhPT1hJiZcImhpZGRlblwiIT09dS52aXNpYmlsaXR5JiZTLnNldFByb3BlcnR5VmFsdWUoVixcInZpc2liaWxpdHlcIix1LnZpc2liaWxpdHkpO2Zvcih2YXIgayBpbiBQKWlmKFwiZWxlbWVudFwiIT09ayl7dmFyIEEsRj1QW2tdLGo9bS5pc1N0cmluZyhGLmVhc2luZyk/Yi5FYXNpbmdzW0YuZWFzaW5nXTpGLmVhc2luZztpZigxPT09aClBPUYuZW5kVmFsdWU7ZWxzZXt2YXIgRT1GLmVuZFZhbHVlLUYuc3RhcnRWYWx1ZTtpZihBPUYuc3RhcnRWYWx1ZStFKmooaCx1LEUpLCFnJiZBPT09Ri5jdXJyZW50VmFsdWUpY29udGludWV9aWYoRi5jdXJyZW50VmFsdWU9QSxcInR3ZWVuXCI9PT1rKXk9QTtlbHNle2lmKFMuSG9va3MucmVnaXN0ZXJlZFtrXSl7dmFyIEg9Uy5Ib29rcy5nZXRSb290KGspLE49aShWKS5yb290UHJvcGVydHlWYWx1ZUNhY2hlW0hdO04mJihGLnJvb3RQcm9wZXJ0eVZhbHVlPU4pfXZhciBMPVMuc2V0UHJvcGVydHlWYWx1ZShWLGssRi5jdXJyZW50VmFsdWUrKDA9PT1wYXJzZUZsb2F0KEEpP1wiXCI6Ri51bml0VHlwZSksRi5yb290UHJvcGVydHlWYWx1ZSxGLnNjcm9sbERhdGEpO1MuSG9va3MucmVnaXN0ZXJlZFtrXSYmKGkoVikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtIXT1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSF0/Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0hdKFwiZXh0cmFjdFwiLG51bGwsTFsxXSk6TFsxXSksXCJ0cmFuc2Zvcm1cIj09PUxbMF0mJihDPSEwKX19dS5tb2JpbGVIQSYmaShWKS50cmFuc2Zvcm1DYWNoZS50cmFuc2xhdGUzZD09PWEmJihpKFYpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkPVwiKDBweCwgMHB4LCAwcHgpXCIsQz0hMCksQyYmUy5mbHVzaFRyYW5zZm9ybUNhY2hlKFYpfX11LmRpc3BsYXkhPT1hJiZcIm5vbmVcIiE9PXUuZGlzcGxheSYmKGIuU3RhdGUuY2FsbHNbb11bMl0uZGlzcGxheT0hMSksdS52aXNpYmlsaXR5IT09YSYmXCJoaWRkZW5cIiE9PXUudmlzaWJpbGl0eSYmKGIuU3RhdGUuY2FsbHNbb11bMl0udmlzaWJpbGl0eT0hMSksdS5wcm9ncmVzcyYmdS5wcm9ncmVzcy5jYWxsKHNbMV0sc1sxXSxoLE1hdGgubWF4KDAsZCt1LmR1cmF0aW9uLXQpLGQseSksMT09PWgmJnAobyl9fWIuU3RhdGUuaXNUaWNraW5nJiZ3KGMpfWZ1bmN0aW9uIHAoZSx0KXtpZighYi5TdGF0ZS5jYWxsc1tlXSlyZXR1cm4hMTtmb3IodmFyIHI9Yi5TdGF0ZS5jYWxsc1tlXVswXSxuPWIuU3RhdGUuY2FsbHNbZV1bMV0sbz1iLlN0YXRlLmNhbGxzW2VdWzJdLHM9Yi5TdGF0ZS5jYWxsc1tlXVs0XSxsPSExLHU9MCxjPXIubGVuZ3RoO2M+dTt1Kyspe3ZhciBwPXJbdV0uZWxlbWVudDtpZih0fHxvLmxvb3B8fChcIm5vbmVcIj09PW8uZGlzcGxheSYmUy5zZXRQcm9wZXJ0eVZhbHVlKHAsXCJkaXNwbGF5XCIsby5kaXNwbGF5KSxcImhpZGRlblwiPT09by52aXNpYmlsaXR5JiZTLnNldFByb3BlcnR5VmFsdWUocCxcInZpc2liaWxpdHlcIixvLnZpc2liaWxpdHkpKSxvLmxvb3AhPT0hMCYmKGYucXVldWUocClbMV09PT1hfHwhL1xcLnZlbG9jaXR5UXVldWVFbnRyeUZsYWcvaS50ZXN0KGYucXVldWUocClbMV0pKSYmaShwKSl7aShwKS5pc0FuaW1hdGluZz0hMSxpKHApLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGU9e307dmFyIGQ9ITE7Zi5lYWNoKFMuTGlzdHMudHJhbnNmb3JtczNELGZ1bmN0aW9uKGUsdCl7dmFyIHI9L15zY2FsZS8udGVzdCh0KT8xOjAsbj1pKHApLnRyYW5zZm9ybUNhY2hlW3RdO2kocCkudHJhbnNmb3JtQ2FjaGVbdF0hPT1hJiZuZXcgUmVnRXhwKFwiXlxcXFwoXCIrcitcIlteLl1cIikudGVzdChuKSYmKGQ9ITAsZGVsZXRlIGkocCkudHJhbnNmb3JtQ2FjaGVbdF0pfSksby5tb2JpbGVIQSYmKGQ9ITAsZGVsZXRlIGkocCkudHJhbnNmb3JtQ2FjaGUudHJhbnNsYXRlM2QpLGQmJlMuZmx1c2hUcmFuc2Zvcm1DYWNoZShwKSxTLlZhbHVlcy5yZW1vdmVDbGFzcyhwLFwidmVsb2NpdHktYW5pbWF0aW5nXCIpfWlmKCF0JiZvLmNvbXBsZXRlJiYhby5sb29wJiZ1PT09Yy0xKXRyeXtvLmNvbXBsZXRlLmNhbGwobixuKX1jYXRjaChnKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZ30sMSl9cyYmby5sb29wIT09ITAmJnMobiksaShwKSYmby5sb29wPT09ITAmJiF0JiYoZi5lYWNoKGkocCkudHdlZW5zQ29udGFpbmVyLGZ1bmN0aW9uKGUsdCl7L15yb3RhdGUvLnRlc3QoZSkmJjM2MD09PXBhcnNlRmxvYXQodC5lbmRWYWx1ZSkmJih0LmVuZFZhbHVlPTAsdC5zdGFydFZhbHVlPTM2MCksL15iYWNrZ3JvdW5kUG9zaXRpb24vLnRlc3QoZSkmJjEwMD09PXBhcnNlRmxvYXQodC5lbmRWYWx1ZSkmJlwiJVwiPT09dC51bml0VHlwZSYmKHQuZW5kVmFsdWU9MCx0LnN0YXJ0VmFsdWU9MTAwKX0pLGIocCxcInJldmVyc2VcIix7bG9vcDohMCxkZWxheTpvLmRlbGF5fSkpLG8ucXVldWUhPT0hMSYmZi5kZXF1ZXVlKHAsby5xdWV1ZSl9Yi5TdGF0ZS5jYWxsc1tlXT0hMTtmb3IodmFyIG09MCx5PWIuU3RhdGUuY2FsbHMubGVuZ3RoO3k+bTttKyspaWYoYi5TdGF0ZS5jYWxsc1ttXSE9PSExKXtsPSEwO2JyZWFrfWw9PT0hMSYmKGIuU3RhdGUuaXNUaWNraW5nPSExLGRlbGV0ZSBiLlN0YXRlLmNhbGxzLGIuU3RhdGUuY2FsbHM9W10pfXZhciBmLGQ9ZnVuY3Rpb24oKXtpZihyLmRvY3VtZW50TW9kZSlyZXR1cm4gci5kb2N1bWVudE1vZGU7Zm9yKHZhciBlPTc7ZT40O2UtLSl7dmFyIHQ9ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKHQuaW5uZXJIVE1MPVwiPCEtLVtpZiBJRSBcIitlK1wiXT48c3Bhbj48L3NwYW4+PCFbZW5kaWZdLS0+XCIsdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIikubGVuZ3RoKXJldHVybiB0PW51bGwsZX1yZXR1cm4gYX0oKSxnPWZ1bmN0aW9uKCl7dmFyIGU9MDtyZXR1cm4gdC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHQubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbih0KXt2YXIgcixhPShuZXcgRGF0ZSkuZ2V0VGltZSgpO3JldHVybiByPU1hdGgubWF4KDAsMTYtKGEtZSkpLGU9YStyLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KGErcil9LHIpfX0oKSxtPXtpc1N0cmluZzpmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZX0saXNBcnJheTpBcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9LGlzRnVuY3Rpb246ZnVuY3Rpb24oZSl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfSxpc05vZGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUubm9kZVR5cGV9LGlzTm9kZUxpc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGUmJi9eXFxbb2JqZWN0IChIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdHxPYmplY3QpXFxdJC8udGVzdChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpJiZlLmxlbmd0aCE9PWEmJigwPT09ZS5sZW5ndGh8fFwib2JqZWN0XCI9PXR5cGVvZiBlWzBdJiZlWzBdLm5vZGVUeXBlPjApfSxpc1dyYXBwZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJihlLmpxdWVyeXx8dC5aZXB0byYmdC5aZXB0by56ZXB0by5pc1ooZSkpfSxpc1NWRzpmdW5jdGlvbihlKXtyZXR1cm4gdC5TVkdFbGVtZW50JiZlIGluc3RhbmNlb2YgdC5TVkdFbGVtZW50fSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBlKXJldHVybiExO3JldHVybiEwfX0seT0hMTtpZihlLmZuJiZlLmZuLmpxdWVyeT8oZj1lLHk9ITApOmY9dC5WZWxvY2l0eS5VdGlsaXRpZXMsOD49ZCYmIXkpdGhyb3cgbmV3IEVycm9yKFwiVmVsb2NpdHk6IElFOCBhbmQgYmVsb3cgcmVxdWlyZSBqUXVlcnkgdG8gYmUgbG9hZGVkIGJlZm9yZSBWZWxvY2l0eS5cIik7aWYoNz49ZClyZXR1cm4gdm9pZChqUXVlcnkuZm4udmVsb2NpdHk9alF1ZXJ5LmZuLmFuaW1hdGUpO3ZhciBoPTQwMCx2PVwic3dpbmdcIixiPXtTdGF0ZTp7aXNNb2JpbGU6L0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGlzQW5kcm9pZDovQW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaXNHaW5nZXJicmVhZDovQW5kcm9pZCAyXFwuM1xcLlszLTddL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxpc0Nocm9tZTp0LmNocm9tZSxpc0ZpcmVmb3g6L0ZpcmVmb3gvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLHByZWZpeEVsZW1lbnQ6ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHByZWZpeE1hdGNoZXM6e30sc2Nyb2xsQW5jaG9yOm51bGwsc2Nyb2xsUHJvcGVydHlMZWZ0Om51bGwsc2Nyb2xsUHJvcGVydHlUb3A6bnVsbCxpc1RpY2tpbmc6ITEsY2FsbHM6W119LENTUzp7fSxVdGlsaXRpZXM6ZixSZWRpcmVjdHM6e30sRWFzaW5nczp7fSxQcm9taXNlOnQuUHJvbWlzZSxkZWZhdWx0czp7cXVldWU6XCJcIixkdXJhdGlvbjpoLGVhc2luZzp2LGJlZ2luOmEsY29tcGxldGU6YSxwcm9ncmVzczphLGRpc3BsYXk6YSx2aXNpYmlsaXR5OmEsbG9vcDohMSxkZWxheTohMSxtb2JpbGVIQTohMCxfY2FjaGVWYWx1ZXM6ITB9LGluaXQ6ZnVuY3Rpb24oZSl7Zi5kYXRhKGUsXCJ2ZWxvY2l0eVwiLHtpc1NWRzptLmlzU1ZHKGUpLGlzQW5pbWF0aW5nOiExLGNvbXB1dGVkU3R5bGU6bnVsbCx0d2VlbnNDb250YWluZXI6bnVsbCxyb290UHJvcGVydHlWYWx1ZUNhY2hlOnt9LHRyYW5zZm9ybUNhY2hlOnt9fSl9LGhvb2s6bnVsbCxtb2NrOiExLHZlcnNpb246e21ham9yOjEsbWlub3I6MixwYXRjaDoyfSxkZWJ1ZzohMX07dC5wYWdlWU9mZnNldCE9PWE/KGIuU3RhdGUuc2Nyb2xsQW5jaG9yPXQsYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eUxlZnQ9XCJwYWdlWE9mZnNldFwiLGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlUb3A9XCJwYWdlWU9mZnNldFwiKTooYi5TdGF0ZS5zY3JvbGxBbmNob3I9ci5kb2N1bWVudEVsZW1lbnR8fHIuYm9keS5wYXJlbnROb2RlfHxyLmJvZHksYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eUxlZnQ9XCJzY3JvbGxMZWZ0XCIsYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcD1cInNjcm9sbFRvcFwiKTt2YXIgeD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7cmV0dXJuLWUudGVuc2lvbiplLngtZS5mcmljdGlvbiplLnZ9ZnVuY3Rpb24gdCh0LHIsYSl7dmFyIG49e3g6dC54K2EuZHgqcix2OnQudithLmR2KnIsdGVuc2lvbjp0LnRlbnNpb24sZnJpY3Rpb246dC5mcmljdGlvbn07cmV0dXJue2R4Om4udixkdjplKG4pfX1mdW5jdGlvbiByKHIsYSl7dmFyIG49e2R4OnIudixkdjplKHIpfSxvPXQociwuNSphLG4pLGk9dChyLC41KmEsbykscz10KHIsYSxpKSxsPTEvNioobi5keCsyKihvLmR4K2kuZHgpK3MuZHgpLHU9MS82KihuLmR2KzIqKG8uZHYraS5kdikrcy5kdik7cmV0dXJuIHIueD1yLngrbCphLHIudj1yLnYrdSphLHJ9cmV0dXJuIGZ1bmN0aW9uIGEoZSx0LG4pe3ZhciBvLGkscyxsPXt4Oi0xLHY6MCx0ZW5zaW9uOm51bGwsZnJpY3Rpb246bnVsbH0sdT1bMF0sYz0wLHA9MWUtNCxmPS4wMTY7Zm9yKGU9cGFyc2VGbG9hdChlKXx8NTAwLHQ9cGFyc2VGbG9hdCh0KXx8MjAsbj1ufHxudWxsLGwudGVuc2lvbj1lLGwuZnJpY3Rpb249dCxvPW51bGwhPT1uLG8/KGM9YShlLHQpLGk9Yy9uKmYpOmk9ZjtzPXIoc3x8bCxpKSx1LnB1c2goMStzLngpLGMrPTE2LE1hdGguYWJzKHMueCk+cCYmTWF0aC5hYnMocy52KT5wOyk7cmV0dXJuIG8/ZnVuY3Rpb24oZSl7cmV0dXJuIHVbZSoodS5sZW5ndGgtMSl8MF19OmN9fSgpO2IuRWFzaW5ncz17bGluZWFyOmZ1bmN0aW9uKGUpe3JldHVybiBlfSxzd2luZzpmdW5jdGlvbihlKXtyZXR1cm4uNS1NYXRoLmNvcyhlKk1hdGguUEkpLzJ9LHNwcmluZzpmdW5jdGlvbihlKXtyZXR1cm4gMS1NYXRoLmNvcyg0LjUqZSpNYXRoLlBJKSpNYXRoLmV4cCg2Ki1lKX19LGYuZWFjaChbW1wiZWFzZVwiLFsuMjUsLjEsLjI1LDFdXSxbXCJlYXNlLWluXCIsWy40MiwwLDEsMV1dLFtcImVhc2Utb3V0XCIsWzAsMCwuNTgsMV1dLFtcImVhc2UtaW4tb3V0XCIsWy40MiwwLC41OCwxXV0sW1wiZWFzZUluU2luZVwiLFsuNDcsMCwuNzQ1LC43MTVdXSxbXCJlYXNlT3V0U2luZVwiLFsuMzksLjU3NSwuNTY1LDFdXSxbXCJlYXNlSW5PdXRTaW5lXCIsWy40NDUsLjA1LC41NSwuOTVdXSxbXCJlYXNlSW5RdWFkXCIsWy41NSwuMDg1LC42OCwuNTNdXSxbXCJlYXNlT3V0UXVhZFwiLFsuMjUsLjQ2LC40NSwuOTRdXSxbXCJlYXNlSW5PdXRRdWFkXCIsWy40NTUsLjAzLC41MTUsLjk1NV1dLFtcImVhc2VJbkN1YmljXCIsWy41NSwuMDU1LC42NzUsLjE5XV0sW1wiZWFzZU91dEN1YmljXCIsWy4yMTUsLjYxLC4zNTUsMV1dLFtcImVhc2VJbk91dEN1YmljXCIsWy42NDUsLjA0NSwuMzU1LDFdXSxbXCJlYXNlSW5RdWFydFwiLFsuODk1LC4wMywuNjg1LC4yMl1dLFtcImVhc2VPdXRRdWFydFwiLFsuMTY1LC44NCwuNDQsMV1dLFtcImVhc2VJbk91dFF1YXJ0XCIsWy43NywwLC4xNzUsMV1dLFtcImVhc2VJblF1aW50XCIsWy43NTUsLjA1LC44NTUsLjA2XV0sW1wiZWFzZU91dFF1aW50XCIsWy4yMywxLC4zMiwxXV0sW1wiZWFzZUluT3V0UXVpbnRcIixbLjg2LDAsLjA3LDFdXSxbXCJlYXNlSW5FeHBvXCIsWy45NSwuMDUsLjc5NSwuMDM1XV0sW1wiZWFzZU91dEV4cG9cIixbLjE5LDEsLjIyLDFdXSxbXCJlYXNlSW5PdXRFeHBvXCIsWzEsMCwwLDFdXSxbXCJlYXNlSW5DaXJjXCIsWy42LC4wNCwuOTgsLjMzNV1dLFtcImVhc2VPdXRDaXJjXCIsWy4wNzUsLjgyLC4xNjUsMV1dLFtcImVhc2VJbk91dENpcmNcIixbLjc4NSwuMTM1LC4xNSwuODZdXV0sZnVuY3Rpb24oZSx0KXtiLkVhc2luZ3NbdFswXV09bC5hcHBseShudWxsLHRbMV0pfSk7dmFyIFM9Yi5DU1M9e1JlZ0V4Ontpc0hleDovXiMoW0EtZlxcZF17M30pezEsMn0kL2ksdmFsdWVVbndyYXA6L15bQS16XStcXCgoLiopXFwpJC9pLHdyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQ6L1swLTkuXSsgWzAtOS5dKyBbMC05Ll0rKCBbMC05Ll0rKT8vLHZhbHVlU3BsaXQ6LyhbQS16XStcXCguK1xcKSl8KChbQS16MC05Iy0uXSs/KSg/PVxcc3wkKSkvZ2l9LExpc3RzOntjb2xvcnM6W1wiZmlsbFwiLFwic3Ryb2tlXCIsXCJzdG9wQ29sb3JcIixcImNvbG9yXCIsXCJiYWNrZ3JvdW5kQ29sb3JcIixcImJvcmRlckNvbG9yXCIsXCJib3JkZXJUb3BDb2xvclwiLFwiYm9yZGVyUmlnaHRDb2xvclwiLFwiYm9yZGVyQm90dG9tQ29sb3JcIixcImJvcmRlckxlZnRDb2xvclwiLFwib3V0bGluZUNvbG9yXCJdLHRyYW5zZm9ybXNCYXNlOltcInRyYW5zbGF0ZVhcIixcInRyYW5zbGF0ZVlcIixcInNjYWxlXCIsXCJzY2FsZVhcIixcInNjYWxlWVwiLFwic2tld1hcIixcInNrZXdZXCIsXCJyb3RhdGVaXCJdLHRyYW5zZm9ybXMzRDpbXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiLFwidHJhbnNsYXRlWlwiLFwic2NhbGVaXCIsXCJyb3RhdGVYXCIsXCJyb3RhdGVZXCJdfSxIb29rczp7dGVtcGxhdGVzOnt0ZXh0U2hhZG93OltcIkNvbG9yIFggWSBCbHVyXCIsXCJibGFjayAwcHggMHB4IDBweFwiXSxib3hTaGFkb3c6W1wiQ29sb3IgWCBZIEJsdXIgU3ByZWFkXCIsXCJibGFjayAwcHggMHB4IDBweCAwcHhcIl0sY2xpcDpbXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIixcIjBweCAwcHggMHB4IDBweFwiXSxiYWNrZ3JvdW5kUG9zaXRpb246W1wiWCBZXCIsXCIwJSAwJVwiXSx0cmFuc2Zvcm1PcmlnaW46W1wiWCBZIFpcIixcIjUwJSA1MCUgMHB4XCJdLHBlcnNwZWN0aXZlT3JpZ2luOltcIlggWVwiLFwiNTAlIDUwJVwiXX0scmVnaXN0ZXJlZDp7fSxyZWdpc3RlcjpmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8Uy5MaXN0cy5jb2xvcnMubGVuZ3RoO2UrKyl7dmFyIHQ9XCJjb2xvclwiPT09Uy5MaXN0cy5jb2xvcnNbZV0/XCIwIDAgMCAxXCI6XCIyNTUgMjU1IDI1NSAxXCI7Uy5Ib29rcy50ZW1wbGF0ZXNbUy5MaXN0cy5jb2xvcnNbZV1dPVtcIlJlZCBHcmVlbiBCbHVlIEFscGhhXCIsdF19dmFyIHIsYSxuO2lmKGQpZm9yKHIgaW4gUy5Ib29rcy50ZW1wbGF0ZXMpe2E9Uy5Ib29rcy50ZW1wbGF0ZXNbcl0sbj1hWzBdLnNwbGl0KFwiIFwiKTt2YXIgbz1hWzFdLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdCk7XCJDb2xvclwiPT09blswXSYmKG4ucHVzaChuLnNoaWZ0KCkpLG8ucHVzaChvLnNoaWZ0KCkpLFMuSG9va3MudGVtcGxhdGVzW3JdPVtuLmpvaW4oXCIgXCIpLG8uam9pbihcIiBcIildKX1mb3IociBpbiBTLkhvb2tzLnRlbXBsYXRlcyl7YT1TLkhvb2tzLnRlbXBsYXRlc1tyXSxuPWFbMF0uc3BsaXQoXCIgXCIpO2Zvcih2YXIgZSBpbiBuKXt2YXIgaT1yK25bZV0scz1lO1MuSG9va3MucmVnaXN0ZXJlZFtpXT1bcixzXX19fSxnZXRSb290OmZ1bmN0aW9uKGUpe3ZhciB0PVMuSG9va3MucmVnaXN0ZXJlZFtlXTtyZXR1cm4gdD90WzBdOmV9LGNsZWFuUm9vdFByb3BlcnR5VmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUy5SZWdFeC52YWx1ZVVud3JhcC50ZXN0KHQpJiYodD10Lm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApWzFdKSxTLlZhbHVlcy5pc0NTU051bGxWYWx1ZSh0KSYmKHQ9Uy5Ib29rcy50ZW1wbGF0ZXNbZV1bMV0pLHR9LGV4dHJhY3RWYWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPVMuSG9va3MucmVnaXN0ZXJlZFtlXTtpZihyKXt2YXIgYT1yWzBdLG49clsxXTtyZXR1cm4gdD1TLkhvb2tzLmNsZWFuUm9vdFByb3BlcnR5VmFsdWUoYSx0KSx0LnRvU3RyaW5nKCkubWF0Y2goUy5SZWdFeC52YWx1ZVNwbGl0KVtuXX1yZXR1cm4gdH0saW5qZWN0VmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3ZhciBhPVMuSG9va3MucmVnaXN0ZXJlZFtlXTtpZihhKXt2YXIgbixvLGk9YVswXSxzPWFbMV07cmV0dXJuIHI9Uy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGksciksbj1yLnRvU3RyaW5nKCkubWF0Y2goUy5SZWdFeC52YWx1ZVNwbGl0KSxuW3NdPXQsbz1uLmpvaW4oXCIgXCIpfXJldHVybiByfX0sTm9ybWFsaXphdGlvbnM6e3JlZ2lzdGVyZWQ6e2NsaXA6ZnVuY3Rpb24oZSx0LHIpe3N3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJjbGlwXCI7Y2FzZVwiZXh0cmFjdFwiOnZhciBhO3JldHVybiBTLlJlZ0V4LndyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQudGVzdChyKT9hPXI6KGE9ci50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApLGE9YT9hWzFdLnJlcGxhY2UoLywoXFxzKyk/L2csXCIgXCIpOnIpLGE7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuXCJyZWN0KFwiK3IrXCIpXCJ9fSxibHVyOmZ1bmN0aW9uKGUsdCxyKXtzd2l0Y2goZSl7Y2FzZVwibmFtZVwiOnJldHVybiBiLlN0YXRlLmlzRmlyZWZveD9cImZpbHRlclwiOlwiLXdlYmtpdC1maWx0ZXJcIjtjYXNlXCJleHRyYWN0XCI6dmFyIGE9cGFyc2VGbG9hdChyKTtpZighYSYmMCE9PWEpe3ZhciBuPXIudG9TdHJpbmcoKS5tYXRjaCgvYmx1clxcKChbMC05XStbQS16XSspXFwpL2kpO2E9bj9uWzFdOjB9cmV0dXJuIGE7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIHBhcnNlRmxvYXQocik/XCJibHVyKFwiK3IrXCIpXCI6XCJub25lXCJ9fSxvcGFjaXR5OmZ1bmN0aW9uKGUsdCxyKXtpZig4Pj1kKXN3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJmaWx0ZXJcIjtjYXNlXCJleHRyYWN0XCI6dmFyIGE9ci50b1N0cmluZygpLm1hdGNoKC9hbHBoYVxcKG9wYWNpdHk9KC4qKVxcKS9pKTtyZXR1cm4gcj1hP2FbMV0vMTAwOjE7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIHQuc3R5bGUuem9vbT0xLHBhcnNlRmxvYXQocik+PTE/XCJcIjpcImFscGhhKG9wYWNpdHk9XCIrcGFyc2VJbnQoMTAwKnBhcnNlRmxvYXQociksMTApK1wiKVwifWVsc2Ugc3dpdGNoKGUpe2Nhc2VcIm5hbWVcIjpyZXR1cm5cIm9wYWNpdHlcIjtjYXNlXCJleHRyYWN0XCI6cmV0dXJuIHI7Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIHJ9fX0scmVnaXN0ZXI6ZnVuY3Rpb24oKXs5Pj1kfHxiLlN0YXRlLmlzR2luZ2VyYnJlYWR8fChTLkxpc3RzLnRyYW5zZm9ybXNCYXNlPVMuTGlzdHMudHJhbnNmb3Jtc0Jhc2UuY29uY2F0KFMuTGlzdHMudHJhbnNmb3JtczNEKSk7Zm9yKHZhciBlPTA7ZTxTLkxpc3RzLnRyYW5zZm9ybXNCYXNlLmxlbmd0aDtlKyspIWZ1bmN0aW9uKCl7dmFyIHQ9Uy5MaXN0cy50cmFuc2Zvcm1zQmFzZVtlXTtTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbdF09ZnVuY3Rpb24oZSxyLG4pe3N3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuXCJ0cmFuc2Zvcm1cIjtjYXNlXCJleHRyYWN0XCI6cmV0dXJuIGkocik9PT1hfHxpKHIpLnRyYW5zZm9ybUNhY2hlW3RdPT09YT8vXnNjYWxlL2kudGVzdCh0KT8xOjA6aShyKS50cmFuc2Zvcm1DYWNoZVt0XS5yZXBsYWNlKC9bKCldL2csXCJcIik7Y2FzZVwiaW5qZWN0XCI6dmFyIG89ITE7c3dpdGNoKHQuc3Vic3RyKDAsdC5sZW5ndGgtMSkpe2Nhc2VcInRyYW5zbGF0ZVwiOm89IS8oJXxweHxlbXxyZW18dnd8dmh8XFxkKSQvaS50ZXN0KG4pO2JyZWFrO2Nhc2VcInNjYWxcIjpjYXNlXCJzY2FsZVwiOmIuU3RhdGUuaXNBbmRyb2lkJiZpKHIpLnRyYW5zZm9ybUNhY2hlW3RdPT09YSYmMT5uJiYobj0xKSxvPSEvKFxcZCkkL2kudGVzdChuKTticmVhaztjYXNlXCJza2V3XCI6bz0hLyhkZWd8XFxkKSQvaS50ZXN0KG4pO2JyZWFrO2Nhc2VcInJvdGF0ZVwiOm89IS8oZGVnfFxcZCkkL2kudGVzdChuKX1yZXR1cm4gb3x8KGkocikudHJhbnNmb3JtQ2FjaGVbdF09XCIoXCIrbitcIilcIiksaShyKS50cmFuc2Zvcm1DYWNoZVt0XX19fSgpO2Zvcih2YXIgZT0wO2U8Uy5MaXN0cy5jb2xvcnMubGVuZ3RoO2UrKykhZnVuY3Rpb24oKXt2YXIgdD1TLkxpc3RzLmNvbG9yc1tlXTtTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbdF09ZnVuY3Rpb24oZSxyLG4pe3N3aXRjaChlKXtjYXNlXCJuYW1lXCI6cmV0dXJuIHQ7Y2FzZVwiZXh0cmFjdFwiOnZhciBvO2lmKFMuUmVnRXgud3JhcHBlZFZhbHVlQWxyZWFkeUV4dHJhY3RlZC50ZXN0KG4pKW89bjtlbHNle3ZhciBpLHM9e2JsYWNrOlwicmdiKDAsIDAsIDApXCIsYmx1ZTpcInJnYigwLCAwLCAyNTUpXCIsZ3JheTpcInJnYigxMjgsIDEyOCwgMTI4KVwiLGdyZWVuOlwicmdiKDAsIDEyOCwgMClcIixyZWQ6XCJyZ2IoMjU1LCAwLCAwKVwiLHdoaXRlOlwicmdiKDI1NSwgMjU1LCAyNTUpXCJ9Oy9eW0Etel0rJC9pLnRlc3Qobik/aT1zW25dIT09YT9zW25dOnMuYmxhY2s6Uy5SZWdFeC5pc0hleC50ZXN0KG4pP2k9XCJyZ2IoXCIrUy5WYWx1ZXMuaGV4VG9SZ2Iobikuam9pbihcIiBcIikrXCIpXCI6L15yZ2JhP1xcKC9pLnRlc3Qobil8fChpPXMuYmxhY2spLG89KGl8fG4pLnRvU3RyaW5nKCkubWF0Y2goUy5SZWdFeC52YWx1ZVVud3JhcClbMV0ucmVwbGFjZSgvLChcXHMrKT8vZyxcIiBcIil9cmV0dXJuIDg+PWR8fDMhPT1vLnNwbGl0KFwiIFwiKS5sZW5ndGh8fChvKz1cIiAxXCIpLG87Y2FzZVwiaW5qZWN0XCI6cmV0dXJuIDg+PWQ/ND09PW4uc3BsaXQoXCIgXCIpLmxlbmd0aCYmKG49bi5zcGxpdCgvXFxzKy8pLnNsaWNlKDAsMykuam9pbihcIiBcIikpOjM9PT1uLnNwbGl0KFwiIFwiKS5sZW5ndGgmJihuKz1cIiAxXCIpLCg4Pj1kP1wicmdiXCI6XCJyZ2JhXCIpK1wiKFwiK24ucmVwbGFjZSgvXFxzKy9nLFwiLFwiKS5yZXBsYWNlKC9cXC4oXFxkKSsoPz0sKS9nLFwiXCIpK1wiKVwifX19KCl9fSxOYW1lczp7Y2FtZWxDYXNlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoLy0oXFx3KS9nLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX0pfSxTVkdBdHRyaWJ1dGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJ3aWR0aHxoZWlnaHR8eHx5fGN4fGN5fHJ8cnh8cnl8eDF8eDJ8eTF8eTJcIjtyZXR1cm4oZHx8Yi5TdGF0ZS5pc0FuZHJvaWQmJiFiLlN0YXRlLmlzQ2hyb21lKSYmKHQrPVwifHRyYW5zZm9ybVwiKSxuZXcgUmVnRXhwKFwiXihcIit0K1wiKSRcIixcImlcIikudGVzdChlKX0scHJlZml4Q2hlY2s6ZnVuY3Rpb24oZSl7aWYoYi5TdGF0ZS5wcmVmaXhNYXRjaGVzW2VdKXJldHVybltiLlN0YXRlLnByZWZpeE1hdGNoZXNbZV0sITBdO2Zvcih2YXIgdD1bXCJcIixcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiLFwiT1wiXSxyPTAsYT10Lmxlbmd0aDthPnI7cisrKXt2YXIgbjtpZihuPTA9PT1yP2U6dFtyXStlLnJlcGxhY2UoL15cXHcvLGZ1bmN0aW9uKGUpe3JldHVybiBlLnRvVXBwZXJDYXNlKCl9KSxtLmlzU3RyaW5nKGIuU3RhdGUucHJlZml4RWxlbWVudC5zdHlsZVtuXSkpcmV0dXJuIGIuU3RhdGUucHJlZml4TWF0Y2hlc1tlXT1uLFtuLCEwXX1yZXR1cm5bZSwhMV19fSxWYWx1ZXM6e2hleFRvUmdiOmZ1bmN0aW9uKGUpe3ZhciB0LHI9L14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaSxhPS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2k7cmV0dXJuIGU9ZS5yZXBsYWNlKHIsZnVuY3Rpb24oZSx0LHIsYSl7cmV0dXJuIHQrdCtyK3IrYSthfSksdD1hLmV4ZWMoZSksdD9bcGFyc2VJbnQodFsxXSwxNikscGFyc2VJbnQodFsyXSwxNikscGFyc2VJbnQodFszXSwxNildOlswLDAsMF19LGlzQ1NTTnVsbFZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiAwPT1lfHwvXihub25lfGF1dG98dHJhbnNwYXJlbnR8KHJnYmFcXCgwLCA/MCwgPzAsID8wXFwpKSkkL2kudGVzdChlKX0sZ2V0VW5pdFR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuL14ocm90YXRlfHNrZXcpL2kudGVzdChlKT9cImRlZ1wiOi8oXihzY2FsZXxzY2FsZVh8c2NhbGVZfHNjYWxlWnxhbHBoYXxmbGV4R3Jvd3xmbGV4SGVpZ2h0fHpJbmRleHxmb250V2VpZ2h0KSQpfCgob3BhY2l0eXxyZWR8Z3JlZW58Ymx1ZXxhbHBoYSkkKS9pLnRlc3QoZSk/XCJcIjpcInB4XCJ9LGdldERpc3BsYXlUeXBlOmZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUudGFnTmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7cmV0dXJuL14oYnxiaWd8aXxzbWFsbHx0dHxhYmJyfGFjcm9ueW18Y2l0ZXxjb2RlfGRmbnxlbXxrYmR8c3Ryb25nfHNhbXB8dmFyfGF8YmRvfGJyfGltZ3xtYXB8b2JqZWN0fHF8c2NyaXB0fHNwYW58c3VifHN1cHxidXR0b258aW5wdXR8bGFiZWx8c2VsZWN0fHRleHRhcmVhKSQvaS50ZXN0KHQpP1wiaW5saW5lXCI6L14obGkpJC9pLnRlc3QodCk/XCJsaXN0LWl0ZW1cIjovXih0cikkL2kudGVzdCh0KT9cInRhYmxlLXJvd1wiOi9eKHRhYmxlKSQvaS50ZXN0KHQpP1widGFibGVcIjovXih0Ym9keSkkL2kudGVzdCh0KT9cInRhYmxlLXJvdy1ncm91cFwiOlwiYmxvY2tcIn0sYWRkQ2xhc3M6ZnVuY3Rpb24oZSx0KXtlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5hZGQodCk6ZS5jbGFzc05hbWUrPShlLmNsYXNzTmFtZS5sZW5ndGg/XCIgXCI6XCJcIikrdH0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oZSx0KXtlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5yZW1vdmUodCk6ZS5jbGFzc05hbWU9ZS5jbGFzc05hbWUudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIit0LnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIihcXFxcc3wkKVwiLFwiZ2lcIiksXCIgXCIpfX0sZ2V0UHJvcGVydHlWYWx1ZTpmdW5jdGlvbihlLHIsbixvKXtmdW5jdGlvbiBzKGUscil7ZnVuY3Rpb24gbigpe3UmJlMuc2V0UHJvcGVydHlWYWx1ZShlLFwiZGlzcGxheVwiLFwibm9uZVwiKX12YXIgbD0wO2lmKDg+PWQpbD1mLmNzcyhlLHIpO2Vsc2V7dmFyIHU9ITE7aWYoL14od2lkdGh8aGVpZ2h0KSQvLnRlc3QocikmJjA9PT1TLmdldFByb3BlcnR5VmFsdWUoZSxcImRpc3BsYXlcIikmJih1PSEwLFMuc2V0UHJvcGVydHlWYWx1ZShlLFwiZGlzcGxheVwiLFMuVmFsdWVzLmdldERpc3BsYXlUeXBlKGUpKSksIW8pe2lmKFwiaGVpZ2h0XCI9PT1yJiZcImJvcmRlci1ib3hcIiE9PVMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm94U2l6aW5nXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7dmFyIGM9ZS5vZmZzZXRIZWlnaHQtKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3JkZXJUb3BXaWR0aFwiKSl8fDApLShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLFwiYm9yZGVyQm90dG9tV2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcInBhZGRpbmdUb3BcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcInBhZGRpbmdCb3R0b21cIikpfHwwKTtyZXR1cm4gbigpLGN9aWYoXCJ3aWR0aFwiPT09ciYmXCJib3JkZXItYm94XCIhPT1TLmdldFByb3BlcnR5VmFsdWUoZSxcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpe3ZhciBwPWUub2Zmc2V0V2lkdGgtKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJib3JkZXJMZWZ0V2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcImJvcmRlclJpZ2h0V2lkdGhcIikpfHwwKS0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSxcInBhZGRpbmdMZWZ0XCIpKXx8MCktKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsXCJwYWRkaW5nUmlnaHRcIikpfHwwKTtyZXR1cm4gbigpLHB9fXZhciBnO2c9aShlKT09PWE/dC5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCk6aShlKS5jb21wdXRlZFN0eWxlP2koZSkuY29tcHV0ZWRTdHlsZTppKGUpLmNvbXB1dGVkU3R5bGU9dC5nZXRDb21wdXRlZFN0eWxlKGUsbnVsbCksXCJib3JkZXJDb2xvclwiPT09ciYmKHI9XCJib3JkZXJUb3BDb2xvclwiKSxsPTk9PT1kJiZcImZpbHRlclwiPT09cj9nLmdldFByb3BlcnR5VmFsdWUocik6Z1tyXSwoXCJcIj09PWx8fG51bGw9PT1sKSYmKGw9ZS5zdHlsZVtyXSksbigpfWlmKFwiYXV0b1wiPT09bCYmL14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvaS50ZXN0KHIpKXt2YXIgbT1zKGUsXCJwb3NpdGlvblwiKTsoXCJmaXhlZFwiPT09bXx8XCJhYnNvbHV0ZVwiPT09bSYmL3RvcHxsZWZ0L2kudGVzdChyKSkmJihsPWYoZSkucG9zaXRpb24oKVtyXStcInB4XCIpfXJldHVybiBsfXZhciBsO2lmKFMuSG9va3MucmVnaXN0ZXJlZFtyXSl7dmFyIHU9cixjPVMuSG9va3MuZ2V0Um9vdCh1KTtuPT09YSYmKG49Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsUy5OYW1lcy5wcmVmaXhDaGVjayhjKVswXSkpLFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSYmKG49Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW2NdKFwiZXh0cmFjdFwiLGUsbikpLGw9Uy5Ib29rcy5leHRyYWN0VmFsdWUodSxuKX1lbHNlIGlmKFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXSl7dmFyIHAsZztwPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcIm5hbWVcIixlKSxcInRyYW5zZm9ybVwiIT09cCYmKGc9cyhlLFMuTmFtZXMucHJlZml4Q2hlY2socClbMF0pLFMuVmFsdWVzLmlzQ1NTTnVsbFZhbHVlKGcpJiZTLkhvb2tzLnRlbXBsYXRlc1tyXSYmKGc9Uy5Ib29rcy50ZW1wbGF0ZXNbcl1bMV0pKSxsPVMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcImV4dHJhY3RcIixlLGcpfWlmKCEvXltcXGQtXS8udGVzdChsKSlpZihpKGUpJiZpKGUpLmlzU1ZHJiZTLk5hbWVzLlNWR0F0dHJpYnV0ZShyKSlpZigvXihoZWlnaHR8d2lkdGgpJC9pLnRlc3QocikpdHJ5e2w9ZS5nZXRCQm94KClbcl19Y2F0Y2gobSl7bD0wfWVsc2UgbD1lLmdldEF0dHJpYnV0ZShyKTtlbHNlIGw9cyhlLFMuTmFtZXMucHJlZml4Q2hlY2socilbMF0pO3JldHVybiBTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShsKSYmKGw9MCksYi5kZWJ1Zz49MiYmY29uc29sZS5sb2coXCJHZXQgXCIrcitcIjogXCIrbCksbH0sc2V0UHJvcGVydHlWYWx1ZTpmdW5jdGlvbihlLHIsYSxuLG8pe3ZhciBzPXI7aWYoXCJzY3JvbGxcIj09PXIpby5jb250YWluZXI/by5jb250YWluZXJbXCJzY3JvbGxcIitvLmRpcmVjdGlvbl09YTpcIkxlZnRcIj09PW8uZGlyZWN0aW9uP3Quc2Nyb2xsVG8oYSxvLmFsdGVybmF0ZVZhbHVlKTp0LnNjcm9sbFRvKG8uYWx0ZXJuYXRlVmFsdWUsYSk7ZWxzZSBpZihTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0mJlwidHJhbnNmb3JtXCI9PT1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJuYW1lXCIsZSkpUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwiaW5qZWN0XCIsZSxhKSxzPVwidHJhbnNmb3JtXCIsYT1pKGUpLnRyYW5zZm9ybUNhY2hlW3JdO2Vsc2V7aWYoUy5Ib29rcy5yZWdpc3RlcmVkW3JdKXt2YXIgbD1yLHU9Uy5Ib29rcy5nZXRSb290KHIpO249bnx8Uy5nZXRQcm9wZXJ0eVZhbHVlKGUsdSksYT1TLkhvb2tzLmluamVjdFZhbHVlKGwsYSxuKSxyPXV9aWYoUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdJiYoYT1TLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJpbmplY3RcIixlLGEpLHI9Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwibmFtZVwiLGUpKSxzPVMuTmFtZXMucHJlZml4Q2hlY2socilbMF0sOD49ZCl0cnl7ZS5zdHlsZVtzXT1hfWNhdGNoKGMpe2IuZGVidWcmJmNvbnNvbGUubG9nKFwiQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFtcIithK1wiXSBmb3IgW1wiK3MrXCJdXCIpfWVsc2UgaShlKSYmaShlKS5pc1NWRyYmUy5OYW1lcy5TVkdBdHRyaWJ1dGUocik/ZS5zZXRBdHRyaWJ1dGUocixhKTplLnN0eWxlW3NdPWE7Yi5kZWJ1Zz49MiYmY29uc29sZS5sb2coXCJTZXQgXCIrcitcIiAoXCIrcytcIik6IFwiK2EpfXJldHVybltzLGFdfSxmbHVzaFRyYW5zZm9ybUNhY2hlOmZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsdCkpfXZhciByPVwiXCI7aWYoKGR8fGIuU3RhdGUuaXNBbmRyb2lkJiYhYi5TdGF0ZS5pc0Nocm9tZSkmJmkoZSkuaXNTVkcpe3ZhciBhPXt0cmFuc2xhdGU6W3QoXCJ0cmFuc2xhdGVYXCIpLHQoXCJ0cmFuc2xhdGVZXCIpXSxza2V3WDpbdChcInNrZXdYXCIpXSxza2V3WTpbdChcInNrZXdZXCIpXSxzY2FsZToxIT09dChcInNjYWxlXCIpP1t0KFwic2NhbGVcIiksdChcInNjYWxlXCIpXTpbdChcInNjYWxlWFwiKSx0KFwic2NhbGVZXCIpXSxyb3RhdGU6W3QoXCJyb3RhdGVaXCIpLDAsMF19O2YuZWFjaChpKGUpLnRyYW5zZm9ybUNhY2hlLGZ1bmN0aW9uKGUpey9edHJhbnNsYXRlL2kudGVzdChlKT9lPVwidHJhbnNsYXRlXCI6L15zY2FsZS9pLnRlc3QoZSk/ZT1cInNjYWxlXCI6L15yb3RhdGUvaS50ZXN0KGUpJiYoZT1cInJvdGF0ZVwiKSxhW2VdJiYocis9ZStcIihcIithW2VdLmpvaW4oXCIgXCIpK1wiKSBcIixkZWxldGUgYVtlXSl9KX1lbHNle3ZhciBuLG87Zi5lYWNoKGkoZSkudHJhbnNmb3JtQ2FjaGUsZnVuY3Rpb24odCl7cmV0dXJuIG49aShlKS50cmFuc2Zvcm1DYWNoZVt0XSxcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCI9PT10PyhvPW4sITApOig5PT09ZCYmXCJyb3RhdGVaXCI9PT10JiYodD1cInJvdGF0ZVwiKSx2b2lkKHIrPXQrbitcIiBcIikpfSksbyYmKHI9XCJwZXJzcGVjdGl2ZVwiK28rXCIgXCIrcil9Uy5zZXRQcm9wZXJ0eVZhbHVlKGUsXCJ0cmFuc2Zvcm1cIixyKX19O1MuSG9va3MucmVnaXN0ZXIoKSxTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyKCksYi5ob29rPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj1hO3JldHVybiBlPW8oZSksZi5lYWNoKGUsZnVuY3Rpb24oZSxvKXtpZihpKG8pPT09YSYmYi5pbml0KG8pLHI9PT1hKW49PT1hJiYobj1iLkNTUy5nZXRQcm9wZXJ0eVZhbHVlKG8sdCkpO2Vsc2V7dmFyIHM9Yi5DU1Muc2V0UHJvcGVydHlWYWx1ZShvLHQscik7XCJ0cmFuc2Zvcm1cIj09PXNbMF0mJmIuQ1NTLmZsdXNoVHJhbnNmb3JtQ2FjaGUobyksbj1zfX0pLG59O3ZhciBQPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3JldHVybiBzP2sucHJvbWlzZXx8bnVsbDpsfWZ1bmN0aW9uIG4oKXtmdW5jdGlvbiBlKGUpe2Z1bmN0aW9uIHAoZSx0KXt2YXIgcj1hLG49YSxpPWE7cmV0dXJuIG0uaXNBcnJheShlKT8ocj1lWzBdLCFtLmlzQXJyYXkoZVsxXSkmJi9eW1xcZC1dLy50ZXN0KGVbMV0pfHxtLmlzRnVuY3Rpb24oZVsxXSl8fFMuUmVnRXguaXNIZXgudGVzdChlWzFdKT9pPWVbMV06KG0uaXNTdHJpbmcoZVsxXSkmJiFTLlJlZ0V4LmlzSGV4LnRlc3QoZVsxXSl8fG0uaXNBcnJheShlWzFdKSkmJihuPXQ/ZVsxXTp1KGVbMV0scy5kdXJhdGlvbiksZVsyXSE9PWEmJihpPWVbMl0pKSk6cj1lLHR8fChuPW58fHMuZWFzaW5nKSxtLmlzRnVuY3Rpb24ocikmJihyPXIuY2FsbChvLFYsdykpLG0uaXNGdW5jdGlvbihpKSYmKGk9aS5jYWxsKG8sVix3KSksW3J8fDAsbixpXX1mdW5jdGlvbiBkKGUsdCl7dmFyIHIsYTtyZXR1cm4gYT0odHx8XCIwXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bJUEtel0rJC8sZnVuY3Rpb24oZSl7cmV0dXJuIHI9ZSxcIlwifSkscnx8KHI9Uy5WYWx1ZXMuZ2V0VW5pdFR5cGUoZSkpLFthLHJdfWZ1bmN0aW9uIGgoKXt2YXIgZT17bXlQYXJlbnQ6by5wYXJlbnROb2RlfHxyLmJvZHkscG9zaXRpb246Uy5nZXRQcm9wZXJ0eVZhbHVlKG8sXCJwb3NpdGlvblwiKSxmb250U2l6ZTpTLmdldFByb3BlcnR5VmFsdWUobyxcImZvbnRTaXplXCIpfSxhPWUucG9zaXRpb249PT1MLmxhc3RQb3NpdGlvbiYmZS5teVBhcmVudD09PUwubGFzdFBhcmVudCxuPWUuZm9udFNpemU9PT1MLmxhc3RGb250U2l6ZTtMLmxhc3RQYXJlbnQ9ZS5teVBhcmVudCxMLmxhc3RQb3NpdGlvbj1lLnBvc2l0aW9uLEwubGFzdEZvbnRTaXplPWUuZm9udFNpemU7dmFyIHM9MTAwLGw9e307aWYobiYmYSlsLmVtVG9QeD1MLmxhc3RFbVRvUHgsbC5wZXJjZW50VG9QeFdpZHRoPUwubGFzdFBlcmNlbnRUb1B4V2lkdGgsbC5wZXJjZW50VG9QeEhlaWdodD1MLmxhc3RQZXJjZW50VG9QeEhlaWdodDtlbHNle3ZhciB1PWkobykuaXNTVkc/ci5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwicmVjdFwiKTpyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yi5pbml0KHUpLGUubXlQYXJlbnQuYXBwZW5kQ2hpbGQodSksZi5lYWNoKFtcIm92ZXJmbG93XCIsXCJvdmVyZmxvd1hcIixcIm92ZXJmbG93WVwiXSxmdW5jdGlvbihlLHQpe2IuQ1NTLnNldFByb3BlcnR5VmFsdWUodSx0LFwiaGlkZGVuXCIpfSksYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LFwicG9zaXRpb25cIixlLnBvc2l0aW9uKSxiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsXCJmb250U2l6ZVwiLGUuZm9udFNpemUpLGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSxcImJveFNpemluZ1wiLFwiY29udGVudC1ib3hcIiksZi5lYWNoKFtcIm1pbldpZHRoXCIsXCJtYXhXaWR0aFwiLFwid2lkdGhcIixcIm1pbkhlaWdodFwiLFwibWF4SGVpZ2h0XCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oZSx0KXtiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsdCxzK1wiJVwiKX0pLGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSxcInBhZGRpbmdMZWZ0XCIscytcImVtXCIpLGwucGVyY2VudFRvUHhXaWR0aD1MLmxhc3RQZXJjZW50VG9QeFdpZHRoPShwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZSh1LFwid2lkdGhcIixudWxsLCEwKSl8fDEpL3MsbC5wZXJjZW50VG9QeEhlaWdodD1MLmxhc3RQZXJjZW50VG9QeEhlaWdodD0ocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUodSxcImhlaWdodFwiLG51bGwsITApKXx8MSkvcyxsLmVtVG9QeD1MLmxhc3RFbVRvUHg9KHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHUsXCJwYWRkaW5nTGVmdFwiKSl8fDEpL3MsZS5teVBhcmVudC5yZW1vdmVDaGlsZCh1KX1yZXR1cm4gbnVsbD09PUwucmVtVG9QeCYmKEwucmVtVG9QeD1wYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShyLmJvZHksXCJmb250U2l6ZVwiKSl8fDE2KSxudWxsPT09TC52d1RvUHgmJihMLnZ3VG9QeD1wYXJzZUZsb2F0KHQuaW5uZXJXaWR0aCkvMTAwLEwudmhUb1B4PXBhcnNlRmxvYXQodC5pbm5lckhlaWdodCkvMTAwKSxsLnJlbVRvUHg9TC5yZW1Ub1B4LGwudndUb1B4PUwudndUb1B4LGwudmhUb1B4PUwudmhUb1B4LGIuZGVidWc+PTEmJmNvbnNvbGUubG9nKFwiVW5pdCByYXRpb3M6IFwiK0pTT04uc3RyaW5naWZ5KGwpLG8pLGx9aWYocy5iZWdpbiYmMD09PVYpdHJ5e3MuYmVnaW4uY2FsbChnLGcpfWNhdGNoKHgpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyB4fSwxKX1pZihcInNjcm9sbFwiPT09QSl7dmFyIFAsQyxULEY9L154JC9pLnRlc3Qocy5heGlzKT9cIkxlZnRcIjpcIlRvcFwiLGo9cGFyc2VGbG9hdChzLm9mZnNldCl8fDA7cy5jb250YWluZXI/bS5pc1dyYXBwZWQocy5jb250YWluZXIpfHxtLmlzTm9kZShzLmNvbnRhaW5lcik/KHMuY29udGFpbmVyPXMuY29udGFpbmVyWzBdfHxzLmNvbnRhaW5lcixQPXMuY29udGFpbmVyW1wic2Nyb2xsXCIrRl0sVD1QK2YobykucG9zaXRpb24oKVtGLnRvTG93ZXJDYXNlKCldK2opOnMuY29udGFpbmVyPW51bGw6KFA9Yi5TdGF0ZS5zY3JvbGxBbmNob3JbYi5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIrRl1dLEM9Yi5TdGF0ZS5zY3JvbGxBbmNob3JbYi5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIrKFwiTGVmdFwiPT09Rj9cIlRvcFwiOlwiTGVmdFwiKV1dLFQ9ZihvKS5vZmZzZXQoKVtGLnRvTG93ZXJDYXNlKCldK2opLGw9e3Njcm9sbDp7cm9vdFByb3BlcnR5VmFsdWU6ITEsc3RhcnRWYWx1ZTpQLGN1cnJlbnRWYWx1ZTpQLGVuZFZhbHVlOlQsdW5pdFR5cGU6XCJcIixlYXNpbmc6cy5lYXNpbmcsc2Nyb2xsRGF0YTp7Y29udGFpbmVyOnMuY29udGFpbmVyLGRpcmVjdGlvbjpGLGFsdGVybmF0ZVZhbHVlOkN9fSxlbGVtZW50Om99LGIuZGVidWcmJmNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChzY3JvbGwpOiBcIixsLnNjcm9sbCxvKX1lbHNlIGlmKFwicmV2ZXJzZVwiPT09QSl7aWYoIWkobykudHdlZW5zQ29udGFpbmVyKXJldHVybiB2b2lkIGYuZGVxdWV1ZShvLHMucXVldWUpO1wibm9uZVwiPT09aShvKS5vcHRzLmRpc3BsYXkmJihpKG8pLm9wdHMuZGlzcGxheT1cImF1dG9cIiksXCJoaWRkZW5cIj09PWkobykub3B0cy52aXNpYmlsaXR5JiYoaShvKS5vcHRzLnZpc2liaWxpdHk9XCJ2aXNpYmxlXCIpLGkobykub3B0cy5sb29wPSExLGkobykub3B0cy5iZWdpbj1udWxsLGkobykub3B0cy5jb21wbGV0ZT1udWxsLHYuZWFzaW5nfHxkZWxldGUgcy5lYXNpbmcsdi5kdXJhdGlvbnx8ZGVsZXRlIHMuZHVyYXRpb24scz1mLmV4dGVuZCh7fSxpKG8pLm9wdHMscyk7dmFyIEU9Zi5leHRlbmQoITAse30saShvKS50d2VlbnNDb250YWluZXIpO2Zvcih2YXIgSCBpbiBFKWlmKFwiZWxlbWVudFwiIT09SCl7dmFyIE49RVtIXS5zdGFydFZhbHVlO0VbSF0uc3RhcnRWYWx1ZT1FW0hdLmN1cnJlbnRWYWx1ZT1FW0hdLmVuZFZhbHVlLEVbSF0uZW5kVmFsdWU9TixtLmlzRW1wdHlPYmplY3Qodil8fChFW0hdLmVhc2luZz1zLmVhc2luZyksYi5kZWJ1ZyYmY29uc29sZS5sb2coXCJyZXZlcnNlIHR3ZWVuc0NvbnRhaW5lciAoXCIrSCtcIik6IFwiK0pTT04uc3RyaW5naWZ5KEVbSF0pLG8pfWw9RX1lbHNlIGlmKFwic3RhcnRcIj09PUEpe3ZhciBFO2kobykudHdlZW5zQ29udGFpbmVyJiZpKG8pLmlzQW5pbWF0aW5nPT09ITAmJihFPWkobykudHdlZW5zQ29udGFpbmVyKSxmLmVhY2goeSxmdW5jdGlvbihlLHQpe2lmKFJlZ0V4cChcIl5cIitTLkxpc3RzLmNvbG9ycy5qb2luKFwiJHxeXCIpK1wiJFwiKS50ZXN0KGUpKXt2YXIgcj1wKHQsITApLG49clswXSxvPXJbMV0saT1yWzJdO2lmKFMuUmVnRXguaXNIZXgudGVzdChuKSl7Zm9yKHZhciBzPVtcIlJlZFwiLFwiR3JlZW5cIixcIkJsdWVcIl0sbD1TLlZhbHVlcy5oZXhUb1JnYihuKSx1PWk/Uy5WYWx1ZXMuaGV4VG9SZ2IoaSk6YSxjPTA7YzxzLmxlbmd0aDtjKyspe3ZhciBmPVtsW2NdXTtvJiZmLnB1c2gobyksdSE9PWEmJmYucHVzaCh1W2NdKSx5W2Urc1tjXV09Zn1kZWxldGUgeVtlXX19fSk7Zm9yKHZhciB6IGluIHkpe3ZhciBPPXAoeVt6XSkscT1PWzBdLCQ9T1sxXSxNPU9bMl07ej1TLk5hbWVzLmNhbWVsQ2FzZSh6KTt2YXIgST1TLkhvb2tzLmdldFJvb3QoeiksQj0hMTtpZihpKG8pLmlzU1ZHfHxcInR3ZWVuXCI9PT1JfHxTLk5hbWVzLnByZWZpeENoZWNrKEkpWzFdIT09ITF8fFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtJXSE9PWEpeyhzLmRpc3BsYXkhPT1hJiZudWxsIT09cy5kaXNwbGF5JiZcIm5vbmVcIiE9PXMuZGlzcGxheXx8cy52aXNpYmlsaXR5IT09YSYmXCJoaWRkZW5cIiE9PXMudmlzaWJpbGl0eSkmJi9vcGFjaXR5fGZpbHRlci8udGVzdCh6KSYmIU0mJjAhPT1xJiYoTT0wKSxzLl9jYWNoZVZhbHVlcyYmRSYmRVt6XT8oTT09PWEmJihNPUVbel0uZW5kVmFsdWUrRVt6XS51bml0VHlwZSksQj1pKG8pLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbSV0pOlMuSG9va3MucmVnaXN0ZXJlZFt6XT9NPT09YT8oQj1TLmdldFByb3BlcnR5VmFsdWUobyxJKSxNPVMuZ2V0UHJvcGVydHlWYWx1ZShvLHosQikpOkI9Uy5Ib29rcy50ZW1wbGF0ZXNbSV1bMV06TT09PWEmJihNPVMuZ2V0UHJvcGVydHlWYWx1ZShvLHopKTt2YXIgVyxHLFksRD0hMTtpZihXPWQoeixNKSxNPVdbMF0sWT1XWzFdLFc9ZCh6LHEpLHE9V1swXS5yZXBsYWNlKC9eKFsrLVxcLypdKT0vLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIEQ9dCxcIlwifSksRz1XWzFdLE09cGFyc2VGbG9hdChNKXx8MCxxPXBhcnNlRmxvYXQocSl8fDAsXCIlXCI9PT1HJiYoL14oZm9udFNpemV8bGluZUhlaWdodCkkLy50ZXN0KHopPyhxLz0xMDAsRz1cImVtXCIpOi9ec2NhbGUvLnRlc3Qoeik/KHEvPTEwMCxHPVwiXCIpOi8oUmVkfEdyZWVufEJsdWUpJC9pLnRlc3QoeikmJihxPXEvMTAwKjI1NSxHPVwiXCIpKSwvW1xcLypdLy50ZXN0KEQpKUc9WTtlbHNlIGlmKFkhPT1HJiYwIT09TSlpZigwPT09cSlHPVk7ZWxzZXtuPW58fGgoKTt2YXIgUT0vbWFyZ2lufHBhZGRpbmd8bGVmdHxyaWdodHx3aWR0aHx0ZXh0fHdvcmR8bGV0dGVyL2kudGVzdCh6KXx8L1gkLy50ZXN0KHopfHxcInhcIj09PXo/XCJ4XCI6XCJ5XCI7c3dpdGNoKFkpe2Nhc2VcIiVcIjpNKj1cInhcIj09PVE/bi5wZXJjZW50VG9QeFdpZHRoOm4ucGVyY2VudFRvUHhIZWlnaHQ7YnJlYWs7Y2FzZVwicHhcIjpicmVhaztkZWZhdWx0Ok0qPW5bWStcIlRvUHhcIl19c3dpdGNoKEcpe2Nhc2VcIiVcIjpNKj0xLyhcInhcIj09PVE/bi5wZXJjZW50VG9QeFdpZHRoOm4ucGVyY2VudFRvUHhIZWlnaHQpO2JyZWFrO2Nhc2VcInB4XCI6YnJlYWs7ZGVmYXVsdDpNKj0xL25bRytcIlRvUHhcIl19fXN3aXRjaChEKXtjYXNlXCIrXCI6cT1NK3E7YnJlYWs7Y2FzZVwiLVwiOnE9TS1xO2JyZWFrO2Nhc2VcIipcIjpxPU0qcTticmVhaztjYXNlXCIvXCI6cT1NL3F9bFt6XT17cm9vdFByb3BlcnR5VmFsdWU6QixzdGFydFZhbHVlOk0sY3VycmVudFZhbHVlOk0sZW5kVmFsdWU6cSx1bml0VHlwZTpHLGVhc2luZzokfSxiLmRlYnVnJiZjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoXCIreitcIik6IFwiK0pTT04uc3RyaW5naWZ5KGxbel0pLG8pfWVsc2UgYi5kZWJ1ZyYmY29uc29sZS5sb2coXCJTa2lwcGluZyBbXCIrSStcIl0gZHVlIHRvIGEgbGFjayBvZiBicm93c2VyIHN1cHBvcnQuXCIpfWwuZWxlbWVudD1vfWwuZWxlbWVudCYmKFMuVmFsdWVzLmFkZENsYXNzKG8sXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIiksUi5wdXNoKGwpLFwiXCI9PT1zLnF1ZXVlJiYoaShvKS50d2VlbnNDb250YWluZXI9bCxpKG8pLm9wdHM9cyksaShvKS5pc0FuaW1hdGluZz0hMCxWPT09dy0xPyhiLlN0YXRlLmNhbGxzLnB1c2goW1IsZyxzLG51bGwsay5yZXNvbHZlcl0pLGIuU3RhdGUuaXNUaWNraW5nPT09ITEmJihiLlN0YXRlLmlzVGlja2luZz0hMCxjKCkpKTpWKyspfXZhciBuLG89dGhpcyxzPWYuZXh0ZW5kKHt9LGIuZGVmYXVsdHMsdiksbD17fTtzd2l0Y2goaShvKT09PWEmJmIuaW5pdChvKSxwYXJzZUZsb2F0KHMuZGVsYXkpJiZzLnF1ZXVlIT09ITEmJmYucXVldWUobyxzLnF1ZXVlLGZ1bmN0aW9uKGUpe2IudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZz0hMCxpKG8pLmRlbGF5VGltZXI9e3NldFRpbWVvdXQ6c2V0VGltZW91dChlLHBhcnNlRmxvYXQocy5kZWxheSkpLG5leHQ6ZX19KSxzLmR1cmF0aW9uLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSl7Y2FzZVwiZmFzdFwiOnMuZHVyYXRpb249MjAwO2JyZWFrO2Nhc2VcIm5vcm1hbFwiOnMuZHVyYXRpb249aDticmVhaztjYXNlXCJzbG93XCI6cy5kdXJhdGlvbj02MDA7YnJlYWs7ZGVmYXVsdDpzLmR1cmF0aW9uPXBhcnNlRmxvYXQocy5kdXJhdGlvbil8fDF9Yi5tb2NrIT09ITEmJihiLm1vY2s9PT0hMD9zLmR1cmF0aW9uPXMuZGVsYXk9MToocy5kdXJhdGlvbio9cGFyc2VGbG9hdChiLm1vY2spfHwxLHMuZGVsYXkqPXBhcnNlRmxvYXQoYi5tb2NrKXx8MSkpLHMuZWFzaW5nPXUocy5lYXNpbmcscy5kdXJhdGlvbikscy5iZWdpbiYmIW0uaXNGdW5jdGlvbihzLmJlZ2luKSYmKHMuYmVnaW49bnVsbCkscy5wcm9ncmVzcyYmIW0uaXNGdW5jdGlvbihzLnByb2dyZXNzKSYmKHMucHJvZ3Jlc3M9bnVsbCkscy5jb21wbGV0ZSYmIW0uaXNGdW5jdGlvbihzLmNvbXBsZXRlKSYmKHMuY29tcGxldGU9bnVsbCkscy5kaXNwbGF5IT09YSYmbnVsbCE9PXMuZGlzcGxheSYmKHMuZGlzcGxheT1zLmRpc3BsYXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLFwiYXV0b1wiPT09cy5kaXNwbGF5JiYocy5kaXNwbGF5PWIuQ1NTLlZhbHVlcy5nZXREaXNwbGF5VHlwZShvKSkpLHMudmlzaWJpbGl0eSE9PWEmJm51bGwhPT1zLnZpc2liaWxpdHkmJihzLnZpc2liaWxpdHk9cy52aXNpYmlsaXR5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkscy5tb2JpbGVIQT1zLm1vYmlsZUhBJiZiLlN0YXRlLmlzTW9iaWxlJiYhYi5TdGF0ZS5pc0dpbmdlcmJyZWFkLHMucXVldWU9PT0hMT9zLmRlbGF5P3NldFRpbWVvdXQoZSxzLmRlbGF5KTplKCk6Zi5xdWV1ZShvLHMucXVldWUsZnVuY3Rpb24odCxyKXtyZXR1cm4gcj09PSEwPyhrLnByb21pc2UmJmsucmVzb2x2ZXIoZyksITApOihiLnZlbG9jaXR5UXVldWVFbnRyeUZsYWc9ITAsdm9pZCBlKHQpKX0pLFwiXCIhPT1zLnF1ZXVlJiZcImZ4XCIhPT1zLnF1ZXVlfHxcImlucHJvZ3Jlc3NcIj09PWYucXVldWUobylbMF18fGYuZGVxdWV1ZShvKX12YXIgcyxsLGQsZyx5LHYseD1hcmd1bWVudHNbMF0mJihhcmd1bWVudHNbMF0ucHx8Zi5pc1BsYWluT2JqZWN0KGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSYmIWFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzLm5hbWVzfHxtLmlzU3RyaW5nKGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzKSk7aWYobS5pc1dyYXBwZWQodGhpcyk/KHM9ITEsZD0wLGc9dGhpcyxsPXRoaXMpOihzPSEwLGQ9MSxnPXg/YXJndW1lbnRzWzBdLmVsZW1lbnRzfHxhcmd1bWVudHNbMF0uZTphcmd1bWVudHNbMF0pLGc9byhnKSl7eD8oeT1hcmd1bWVudHNbMF0ucHJvcGVydGllc3x8YXJndW1lbnRzWzBdLnAsdj1hcmd1bWVudHNbMF0ub3B0aW9uc3x8YXJndW1lbnRzWzBdLm8pOih5PWFyZ3VtZW50c1tkXSx2PWFyZ3VtZW50c1tkKzFdKTt2YXIgdz1nLmxlbmd0aCxWPTA7aWYoIS9eKHN0b3B8ZmluaXNoKSQvaS50ZXN0KHkpJiYhZi5pc1BsYWluT2JqZWN0KHYpKXt2YXIgQz1kKzE7dj17fTtmb3IodmFyIFQ9QztUPGFyZ3VtZW50cy5sZW5ndGg7VCsrKW0uaXNBcnJheShhcmd1bWVudHNbVF0pfHwhL14oZmFzdHxub3JtYWx8c2xvdykkL2kudGVzdChhcmd1bWVudHNbVF0pJiYhL15cXGQvLnRlc3QoYXJndW1lbnRzW1RdKT9tLmlzU3RyaW5nKGFyZ3VtZW50c1tUXSl8fG0uaXNBcnJheShhcmd1bWVudHNbVF0pP3YuZWFzaW5nPWFyZ3VtZW50c1tUXTptLmlzRnVuY3Rpb24oYXJndW1lbnRzW1RdKSYmKHYuY29tcGxldGU9YXJndW1lbnRzW1RdKTp2LmR1cmF0aW9uPWFyZ3VtZW50c1tUXX12YXIgaz17cHJvbWlzZTpudWxsLHJlc29sdmVyOm51bGwscmVqZWN0ZXI6bnVsbH07cyYmYi5Qcm9taXNlJiYoay5wcm9taXNlPW5ldyBiLlByb21pc2UoZnVuY3Rpb24oZSx0KXtrLnJlc29sdmVyPWUsay5yZWplY3Rlcj10fSkpO3ZhciBBO3N3aXRjaCh5KXtjYXNlXCJzY3JvbGxcIjpBPVwic2Nyb2xsXCI7YnJlYWs7Y2FzZVwicmV2ZXJzZVwiOkE9XCJyZXZlcnNlXCI7YnJlYWs7Y2FzZVwiZmluaXNoXCI6Y2FzZVwic3RvcFwiOmYuZWFjaChnLGZ1bmN0aW9uKGUsdCl7aSh0KSYmaSh0KS5kZWxheVRpbWVyJiYoY2xlYXJUaW1lb3V0KGkodCkuZGVsYXlUaW1lci5zZXRUaW1lb3V0KSxpKHQpLmRlbGF5VGltZXIubmV4dCYmaSh0KS5kZWxheVRpbWVyLm5leHQoKSxkZWxldGUgaSh0KS5kZWxheVRpbWVyKX0pO3ZhciBGPVtdO3JldHVybiBmLmVhY2goYi5TdGF0ZS5jYWxscyxmdW5jdGlvbihlLHQpe3QmJmYuZWFjaCh0WzFdLGZ1bmN0aW9uKHIsbil7dmFyIG89dj09PWE/XCJcIjp2O3JldHVybiBvPT09ITB8fHRbMl0ucXVldWU9PT1vfHx2PT09YSYmdFsyXS5xdWV1ZT09PSExP3ZvaWQgZi5lYWNoKGcsZnVuY3Rpb24ocixhKXthPT09biYmKCh2PT09ITB8fG0uaXNTdHJpbmcodikpJiYoZi5lYWNoKGYucXVldWUoYSxtLmlzU3RyaW5nKHYpP3Y6XCJcIiksZnVuY3Rpb24oZSx0KXtcbm0uaXNGdW5jdGlvbih0KSYmdChudWxsLCEwKX0pLGYucXVldWUoYSxtLmlzU3RyaW5nKHYpP3Y6XCJcIixbXSkpLFwic3RvcFwiPT09eT8oaShhKSYmaShhKS50d2VlbnNDb250YWluZXImJm8hPT0hMSYmZi5lYWNoKGkoYSkudHdlZW5zQ29udGFpbmVyLGZ1bmN0aW9uKGUsdCl7dC5lbmRWYWx1ZT10LmN1cnJlbnRWYWx1ZX0pLEYucHVzaChlKSk6XCJmaW5pc2hcIj09PXkmJih0WzJdLmR1cmF0aW9uPTEpKX0pOiEwfSl9KSxcInN0b3BcIj09PXkmJihmLmVhY2goRixmdW5jdGlvbihlLHQpe3AodCwhMCl9KSxrLnByb21pc2UmJmsucmVzb2x2ZXIoZykpLGUoKTtkZWZhdWx0OmlmKCFmLmlzUGxhaW5PYmplY3QoeSl8fG0uaXNFbXB0eU9iamVjdCh5KSl7aWYobS5pc1N0cmluZyh5KSYmYi5SZWRpcmVjdHNbeV0pe3ZhciBqPWYuZXh0ZW5kKHt9LHYpLEU9ai5kdXJhdGlvbixIPWouZGVsYXl8fDA7cmV0dXJuIGouYmFja3dhcmRzPT09ITAmJihnPWYuZXh0ZW5kKCEwLFtdLGcpLnJldmVyc2UoKSksZi5lYWNoKGcsZnVuY3Rpb24oZSx0KXtwYXJzZUZsb2F0KGouc3RhZ2dlcik/ai5kZWxheT1IK3BhcnNlRmxvYXQoai5zdGFnZ2VyKSplOm0uaXNGdW5jdGlvbihqLnN0YWdnZXIpJiYoai5kZWxheT1IK2ouc3RhZ2dlci5jYWxsKHQsZSx3KSksai5kcmFnJiYoai5kdXJhdGlvbj1wYXJzZUZsb2F0KEUpfHwoL14oY2FsbG91dHx0cmFuc2l0aW9uKS8udGVzdCh5KT8xZTM6aCksai5kdXJhdGlvbj1NYXRoLm1heChqLmR1cmF0aW9uKihqLmJhY2t3YXJkcz8xLWUvdzooZSsxKS93KSwuNzUqai5kdXJhdGlvbiwyMDApKSxiLlJlZGlyZWN0c1t5XS5jYWxsKHQsdCxqfHx7fSxlLHcsZyxrLnByb21pc2U/azphKX0pLGUoKX12YXIgTj1cIlZlbG9jaXR5OiBGaXJzdCBhcmd1bWVudCAoXCIreStcIikgd2FzIG5vdCBhIHByb3BlcnR5IG1hcCwgYSBrbm93biBhY3Rpb24sIG9yIGEgcmVnaXN0ZXJlZCByZWRpcmVjdC4gQWJvcnRpbmcuXCI7cmV0dXJuIGsucHJvbWlzZT9rLnJlamVjdGVyKG5ldyBFcnJvcihOKSk6Y29uc29sZS5sb2coTiksZSgpfUE9XCJzdGFydFwifXZhciBMPXtsYXN0UGFyZW50Om51bGwsbGFzdFBvc2l0aW9uOm51bGwsbGFzdEZvbnRTaXplOm51bGwsbGFzdFBlcmNlbnRUb1B4V2lkdGg6bnVsbCxsYXN0UGVyY2VudFRvUHhIZWlnaHQ6bnVsbCxsYXN0RW1Ub1B4Om51bGwscmVtVG9QeDpudWxsLHZ3VG9QeDpudWxsLHZoVG9QeDpudWxsfSxSPVtdO2YuZWFjaChnLGZ1bmN0aW9uKGUsdCl7bS5pc05vZGUodCkmJm4uY2FsbCh0KX0pO3ZhciB6LGo9Zi5leHRlbmQoe30sYi5kZWZhdWx0cyx2KTtpZihqLmxvb3A9cGFyc2VJbnQoai5sb29wKSx6PTIqai5sb29wLTEsai5sb29wKWZvcih2YXIgTz0wO3o+TztPKyspe3ZhciBxPXtkZWxheTpqLmRlbGF5LHByb2dyZXNzOmoucHJvZ3Jlc3N9O089PT16LTEmJihxLmRpc3BsYXk9ai5kaXNwbGF5LHEudmlzaWJpbGl0eT1qLnZpc2liaWxpdHkscS5jb21wbGV0ZT1qLmNvbXBsZXRlKSxQKGcsXCJyZXZlcnNlXCIscSl9cmV0dXJuIGUoKX19O2I9Zi5leHRlbmQoUCxiKSxiLmFuaW1hdGU9UDt2YXIgdz10LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZztyZXR1cm4gYi5TdGF0ZS5pc01vYmlsZXx8ci5oaWRkZW49PT1hfHxyLmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsZnVuY3Rpb24oKXtyLmhpZGRlbj8odz1mdW5jdGlvbihlKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2UoITApfSwxNil9LGMoKSk6dz10LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8Z30pLGUuVmVsb2NpdHk9YixlIT09dCYmKGUuZm4udmVsb2NpdHk9UCxlLmZuLnZlbG9jaXR5LmRlZmF1bHRzPWIuZGVmYXVsdHMpLGYuZWFjaChbXCJEb3duXCIsXCJVcFwiXSxmdW5jdGlvbihlLHQpe2IuUmVkaXJlY3RzW1wic2xpZGVcIit0XT1mdW5jdGlvbihlLHIsbixvLGkscyl7dmFyIGw9Zi5leHRlbmQoe30sciksdT1sLmJlZ2luLGM9bC5jb21wbGV0ZSxwPXtoZWlnaHQ6XCJcIixtYXJnaW5Ub3A6XCJcIixtYXJnaW5Cb3R0b206XCJcIixwYWRkaW5nVG9wOlwiXCIscGFkZGluZ0JvdHRvbTpcIlwifSxkPXt9O2wuZGlzcGxheT09PWEmJihsLmRpc3BsYXk9XCJEb3duXCI9PT10P1wiaW5saW5lXCI9PT1iLkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZSk/XCJpbmxpbmUtYmxvY2tcIjpcImJsb2NrXCI6XCJub25lXCIpLGwuYmVnaW49ZnVuY3Rpb24oKXt1JiZ1LmNhbGwoaSxpKTtmb3IodmFyIHIgaW4gcCl7ZFtyXT1lLnN0eWxlW3JdO3ZhciBhPWIuQ1NTLmdldFByb3BlcnR5VmFsdWUoZSxyKTtwW3JdPVwiRG93blwiPT09dD9bYSwwXTpbMCxhXX1kLm92ZXJmbG93PWUuc3R5bGUub3ZlcmZsb3csZS5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwifSxsLmNvbXBsZXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIGQpZS5zdHlsZVt0XT1kW3RdO2MmJmMuY2FsbChpLGkpLHMmJnMucmVzb2x2ZXIoaSl9LGIoZSxwLGwpfX0pLGYuZWFjaChbXCJJblwiLFwiT3V0XCJdLGZ1bmN0aW9uKGUsdCl7Yi5SZWRpcmVjdHNbXCJmYWRlXCIrdF09ZnVuY3Rpb24oZSxyLG4sbyxpLHMpe3ZhciBsPWYuZXh0ZW5kKHt9LHIpLHU9e29wYWNpdHk6XCJJblwiPT09dD8xOjB9LGM9bC5jb21wbGV0ZTtsLmNvbXBsZXRlPW4hPT1vLTE/bC5iZWdpbj1udWxsOmZ1bmN0aW9uKCl7YyYmYy5jYWxsKGksaSkscyYmcy5yZXNvbHZlcihpKX0sbC5kaXNwbGF5PT09YSYmKGwuZGlzcGxheT1cIkluXCI9PT10P1wiYXV0b1wiOlwibm9uZVwiKSxiKHRoaXMsdSxsKX19KSxifSh3aW5kb3cualF1ZXJ5fHx3aW5kb3cuWmVwdG98fHdpbmRvdyx3aW5kb3csZG9jdW1lbnQpfSkpO1xuIiwiIWZ1bmN0aW9uKGEsYixjLGQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGsoYSxiLGMpe3JldHVybiBzZXRUaW1lb3V0KHEoYSxjKSxiKX1mdW5jdGlvbiBsKGEsYixjKXtyZXR1cm4gQXJyYXkuaXNBcnJheShhKT8obShhLGNbYl0sYyksITApOiExfWZ1bmN0aW9uIG0oYSxiLGMpe3ZhciBlO2lmKGEpaWYoYS5mb3JFYWNoKWEuZm9yRWFjaChiLGMpO2Vsc2UgaWYoYS5sZW5ndGghPT1kKWZvcihlPTA7ZTxhLmxlbmd0aDspYi5jYWxsKGMsYVtlXSxlLGEpLGUrKztlbHNlIGZvcihlIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShlKSYmYi5jYWxsKGMsYVtlXSxlLGEpfWZ1bmN0aW9uIG4oYSxiLGMpe2Zvcih2YXIgZT1PYmplY3Qua2V5cyhiKSxmPTA7ZjxlLmxlbmd0aDspKCFjfHxjJiZhW2VbZl1dPT09ZCkmJihhW2VbZl1dPWJbZVtmXV0pLGYrKztyZXR1cm4gYX1mdW5jdGlvbiBvKGEsYil7cmV0dXJuIG4oYSxiLCEwKX1mdW5jdGlvbiBwKGEsYixjKXt2YXIgZSxkPWIucHJvdG90eXBlO2U9YS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShkKSxlLmNvbnN0cnVjdG9yPWEsZS5fc3VwZXI9ZCxjJiZuKGUsYyl9ZnVuY3Rpb24gcShhLGIpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24gcihhLGIpe3JldHVybiB0eXBlb2YgYT09Zz9hLmFwcGx5KGI/YlswXXx8ZDpkLGIpOmF9ZnVuY3Rpb24gcyhhLGIpe3JldHVybiBhPT09ZD9iOmF9ZnVuY3Rpb24gdChhLGIsYyl7bSh4KGIpLGZ1bmN0aW9uKGIpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gdShhLGIsYyl7bSh4KGIpLGZ1bmN0aW9uKGIpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSl9ZnVuY3Rpb24gdihhLGIpe2Zvcig7YTspe2lmKGE9PWIpcmV0dXJuITA7YT1hLnBhcmVudE5vZGV9cmV0dXJuITF9ZnVuY3Rpb24gdyhhLGIpe3JldHVybiBhLmluZGV4T2YoYik+LTF9ZnVuY3Rpb24geChhKXtyZXR1cm4gYS50cmltKCkuc3BsaXQoL1xccysvZyl9ZnVuY3Rpb24geShhLGIsYyl7aWYoYS5pbmRleE9mJiYhYylyZXR1cm4gYS5pbmRleE9mKGIpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7KXtpZihjJiZhW2RdW2NdPT1ifHwhYyYmYVtkXT09PWIpcmV0dXJuIGQ7ZCsrfXJldHVybi0xfWZ1bmN0aW9uIHooYSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsMCl9ZnVuY3Rpb24gQShhLGIsYyl7Zm9yKHZhciBkPVtdLGU9W10sZj0wO2Y8YS5sZW5ndGg7KXt2YXIgZz1iP2FbZl1bYl06YVtmXTt5KGUsZyk8MCYmZC5wdXNoKGFbZl0pLGVbZl09ZyxmKyt9cmV0dXJuIGMmJihkPWI/ZC5zb3J0KGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFbYl0+Y1tiXX0pOmQuc29ydCgpKSxkfWZ1bmN0aW9uIEIoYSxiKXtmb3IodmFyIGMsZixnPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGg9MDtoPGUubGVuZ3RoOyl7aWYoYz1lW2hdLGY9Yz9jK2c6YixmIGluIGEpcmV0dXJuIGY7aCsrfXJldHVybiBkfWZ1bmN0aW9uIEQoKXtyZXR1cm4gQysrfWZ1bmN0aW9uIEUoYSl7dmFyIGI9YS5vd25lckRvY3VtZW50O3JldHVybiBiLmRlZmF1bHRWaWV3fHxiLnBhcmVudFdpbmRvd31mdW5jdGlvbiBhYihhLGIpe3ZhciBjPXRoaXM7dGhpcy5tYW5hZ2VyPWEsdGhpcy5jYWxsYmFjaz1iLHRoaXMuZWxlbWVudD1hLmVsZW1lbnQsdGhpcy50YXJnZXQ9YS5vcHRpb25zLmlucHV0VGFyZ2V0LHRoaXMuZG9tSGFuZGxlcj1mdW5jdGlvbihiKXtyKGEub3B0aW9ucy5lbmFibGUsW2FdKSYmYy5oYW5kbGVyKGIpfSx0aGlzLmluaXQoKX1mdW5jdGlvbiBiYihhKXt2YXIgYixjPWEub3B0aW9ucy5pbnB1dENsYXNzO3JldHVybiBiPWM/YzpIP3diOkk/RWI6Rz9HYjpyYixuZXcgYihhLGNiKX1mdW5jdGlvbiBjYihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVycy5sZW5ndGgsZT1jLmNoYW5nZWRQb2ludGVycy5sZW5ndGgsZj1iJk8mJjA9PT1kLWUsZz1iJihRfFIpJiYwPT09ZC1lO2MuaXNGaXJzdD0hIWYsYy5pc0ZpbmFsPSEhZyxmJiYoYS5zZXNzaW9uPXt9KSxjLmV2ZW50VHlwZT1iLGRiKGEsYyksYS5lbWl0KFwiaGFtbWVyLmlucHV0XCIsYyksYS5yZWNvZ25pemUoYyksYS5zZXNzaW9uLnByZXZJbnB1dD1jfWZ1bmN0aW9uIGRiKGEsYil7dmFyIGM9YS5zZXNzaW9uLGQ9Yi5wb2ludGVycyxlPWQubGVuZ3RoO2MuZmlyc3RJbnB1dHx8KGMuZmlyc3RJbnB1dD1nYihiKSksZT4xJiYhYy5maXJzdE11bHRpcGxlP2MuZmlyc3RNdWx0aXBsZT1nYihiKToxPT09ZSYmKGMuZmlyc3RNdWx0aXBsZT0hMSk7dmFyIGY9Yy5maXJzdElucHV0LGc9Yy5maXJzdE11bHRpcGxlLGg9Zz9nLmNlbnRlcjpmLmNlbnRlcixpPWIuY2VudGVyPWhiKGQpO2IudGltZVN0YW1wPWooKSxiLmRlbHRhVGltZT1iLnRpbWVTdGFtcC1mLnRpbWVTdGFtcCxiLmFuZ2xlPWxiKGgsaSksYi5kaXN0YW5jZT1rYihoLGkpLGViKGMsYiksYi5vZmZzZXREaXJlY3Rpb249amIoYi5kZWx0YVgsYi5kZWx0YVkpLGIuc2NhbGU9Zz9uYihnLnBvaW50ZXJzLGQpOjEsYi5yb3RhdGlvbj1nP21iKGcucG9pbnRlcnMsZCk6MCxmYihjLGIpO3ZhciBrPWEuZWxlbWVudDt2KGIuc3JjRXZlbnQudGFyZ2V0LGspJiYoaz1iLnNyY0V2ZW50LnRhcmdldCksYi50YXJnZXQ9a31mdW5jdGlvbiBlYihhLGIpe3ZhciBjPWIuY2VudGVyLGQ9YS5vZmZzZXREZWx0YXx8e30sZT1hLnByZXZEZWx0YXx8e30sZj1hLnByZXZJbnB1dHx8e307KGIuZXZlbnRUeXBlPT09T3x8Zi5ldmVudFR5cGU9PT1RKSYmKGU9YS5wcmV2RGVsdGE9e3g6Zi5kZWx0YVh8fDAseTpmLmRlbHRhWXx8MH0sZD1hLm9mZnNldERlbHRhPXt4OmMueCx5OmMueX0pLGIuZGVsdGFYPWUueCsoYy54LWQueCksYi5kZWx0YVk9ZS55KyhjLnktZC55KX1mdW5jdGlvbiBmYihhLGIpe3ZhciBmLGcsaCxqLGM9YS5sYXN0SW50ZXJ2YWx8fGIsZT1iLnRpbWVTdGFtcC1jLnRpbWVTdGFtcDtpZihiLmV2ZW50VHlwZSE9UiYmKGU+Tnx8Yy52ZWxvY2l0eT09PWQpKXt2YXIgaz1jLmRlbHRhWC1iLmRlbHRhWCxsPWMuZGVsdGFZLWIuZGVsdGFZLG09aWIoZSxrLGwpO2c9bS54LGg9bS55LGY9aShtLngpPmkobS55KT9tLng6bS55LGo9amIoayxsKSxhLmxhc3RJbnRlcnZhbD1ifWVsc2UgZj1jLnZlbG9jaXR5LGc9Yy52ZWxvY2l0eVgsaD1jLnZlbG9jaXR5WSxqPWMuZGlyZWN0aW9uO2IudmVsb2NpdHk9ZixiLnZlbG9jaXR5WD1nLGIudmVsb2NpdHlZPWgsYi5kaXJlY3Rpb249an1mdW5jdGlvbiBnYihhKXtmb3IodmFyIGI9W10sYz0wO2M8YS5wb2ludGVycy5sZW5ndGg7KWJbY109e2NsaWVudFg6aChhLnBvaW50ZXJzW2NdLmNsaWVudFgpLGNsaWVudFk6aChhLnBvaW50ZXJzW2NdLmNsaWVudFkpfSxjKys7cmV0dXJue3RpbWVTdGFtcDpqKCkscG9pbnRlcnM6YixjZW50ZXI6aGIoYiksZGVsdGFYOmEuZGVsdGFYLGRlbHRhWTphLmRlbHRhWX19ZnVuY3Rpb24gaGIoYSl7dmFyIGI9YS5sZW5ndGg7aWYoMT09PWIpcmV0dXJue3g6aChhWzBdLmNsaWVudFgpLHk6aChhWzBdLmNsaWVudFkpfTtmb3IodmFyIGM9MCxkPTAsZT0wO2I+ZTspYys9YVtlXS5jbGllbnRYLGQrPWFbZV0uY2xpZW50WSxlKys7cmV0dXJue3g6aChjL2IpLHk6aChkL2IpfX1mdW5jdGlvbiBpYihhLGIsYyl7cmV0dXJue3g6Yi9hfHwwLHk6Yy9hfHwwfX1mdW5jdGlvbiBqYihhLGIpe3JldHVybiBhPT09Yj9TOmkoYSk+PWkoYik/YT4wP1Q6VTpiPjA/VjpXfWZ1bmN0aW9uIGtiKGEsYixjKXtjfHwoYz0kKTt2YXIgZD1iW2NbMF1dLWFbY1swXV0sZT1iW2NbMV1dLWFbY1sxXV07cmV0dXJuIE1hdGguc3FydChkKmQrZSplKX1mdW5jdGlvbiBsYihhLGIsYyl7Y3x8KGM9JCk7dmFyIGQ9YltjWzBdXS1hW2NbMF1dLGU9YltjWzFdXS1hW2NbMV1dO3JldHVybiAxODAqTWF0aC5hdGFuMihlLGQpL01hdGguUEl9ZnVuY3Rpb24gbWIoYSxiKXtyZXR1cm4gbGIoYlsxXSxiWzBdLF8pLWxiKGFbMV0sYVswXSxfKX1mdW5jdGlvbiBuYihhLGIpe3JldHVybiBrYihiWzBdLGJbMV0sXykva2IoYVswXSxhWzFdLF8pfWZ1bmN0aW9uIHJiKCl7dGhpcy5ldkVsPXBiLHRoaXMuZXZXaW49cWIsdGhpcy5hbGxvdz0hMCx0aGlzLnByZXNzZWQ9ITEsYWIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIHdiKCl7dGhpcy5ldkVsPXViLHRoaXMuZXZXaW49dmIsYWIuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuc3RvcmU9dGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cz1bXX1mdW5jdGlvbiBBYigpe3RoaXMuZXZUYXJnZXQ9eWIsdGhpcy5ldldpbj16Yix0aGlzLnN0YXJ0ZWQ9ITEsYWIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIEJiKGEsYil7dmFyIGM9eihhLnRvdWNoZXMpLGQ9eihhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiYoUXxSKSYmKGM9QShjLmNvbmNhdChkKSxcImlkZW50aWZpZXJcIiwhMCkpLFtjLGRdfWZ1bmN0aW9uIEViKCl7dGhpcy5ldlRhcmdldD1EYix0aGlzLnRhcmdldElkcz17fSxhYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gRmIoYSxiKXt2YXIgYz16KGEudG91Y2hlcyksZD10aGlzLnRhcmdldElkcztpZihiJihPfFApJiYxPT09Yy5sZW5ndGgpcmV0dXJuIGRbY1swXS5pZGVudGlmaWVyXT0hMCxbYyxjXTt2YXIgZSxmLGc9eihhLmNoYW5nZWRUb3VjaGVzKSxoPVtdLGk9dGhpcy50YXJnZXQ7aWYoZj1jLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gdihhLnRhcmdldCxpKX0pLGI9PT1PKWZvcihlPTA7ZTxmLmxlbmd0aDspZFtmW2VdLmlkZW50aWZpZXJdPSEwLGUrKztmb3IoZT0wO2U8Zy5sZW5ndGg7KWRbZ1tlXS5pZGVudGlmaWVyXSYmaC5wdXNoKGdbZV0pLGImKFF8UikmJmRlbGV0ZSBkW2dbZV0uaWRlbnRpZmllcl0sZSsrO3JldHVybiBoLmxlbmd0aD9bQShmLmNvbmNhdChoKSxcImlkZW50aWZpZXJcIiwhMCksaF06dm9pZCAwfWZ1bmN0aW9uIEdiKCl7YWIuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBhPXEodGhpcy5oYW5kbGVyLHRoaXMpO3RoaXMudG91Y2g9bmV3IEViKHRoaXMubWFuYWdlcixhKSx0aGlzLm1vdXNlPW5ldyByYih0aGlzLm1hbmFnZXIsYSl9ZnVuY3Rpb24gUGIoYSxiKXt0aGlzLm1hbmFnZXI9YSx0aGlzLnNldChiKX1mdW5jdGlvbiBRYihhKXtpZih3KGEsTWIpKXJldHVybiBNYjt2YXIgYj13KGEsTmIpLGM9dyhhLE9iKTtyZXR1cm4gYiYmYz9OYitcIiBcIitPYjpifHxjP2I/TmI6T2I6dyhhLExiKT9MYjpLYn1mdW5jdGlvbiBZYihhKXt0aGlzLmlkPUQoKSx0aGlzLm1hbmFnZXI9bnVsbCx0aGlzLm9wdGlvbnM9byhhfHx7fSx0aGlzLmRlZmF1bHRzKSx0aGlzLm9wdGlvbnMuZW5hYmxlPXModGhpcy5vcHRpb25zLmVuYWJsZSwhMCksdGhpcy5zdGF0ZT1SYix0aGlzLnNpbXVsdGFuZW91cz17fSx0aGlzLnJlcXVpcmVGYWlsPVtdfWZ1bmN0aW9uIFpiKGEpe3JldHVybiBhJldiP1wiY2FuY2VsXCI6YSZVYj9cImVuZFwiOmEmVGI/XCJtb3ZlXCI6YSZTYj9cInN0YXJ0XCI6XCJcIn1mdW5jdGlvbiAkYihhKXtyZXR1cm4gYT09Vz9cImRvd25cIjphPT1WP1widXBcIjphPT1UP1wibGVmdFwiOmE9PVU/XCJyaWdodFwiOlwiXCJ9ZnVuY3Rpb24gX2IoYSxiKXt2YXIgYz1iLm1hbmFnZXI7cmV0dXJuIGM/Yy5nZXQoYSk6YX1mdW5jdGlvbiBhYygpe1liLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBiYygpe2FjLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBYPW51bGwsdGhpcy5wWT1udWxsfWZ1bmN0aW9uIGNjKCl7YWMuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGRjKCl7WWIuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX3RpbWVyPW51bGwsdGhpcy5faW5wdXQ9bnVsbH1mdW5jdGlvbiBlYygpe2FjLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBmYygpe2FjLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiBnYygpe1liLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLnBUaW1lPSExLHRoaXMucENlbnRlcj0hMSx0aGlzLl90aW1lcj1udWxsLHRoaXMuX2lucHV0PW51bGwsdGhpcy5jb3VudD0wfWZ1bmN0aW9uIGhjKGEsYil7cmV0dXJuIGI9Ynx8e30sYi5yZWNvZ25pemVycz1zKGIucmVjb2duaXplcnMsaGMuZGVmYXVsdHMucHJlc2V0KSxuZXcga2MoYSxiKX1mdW5jdGlvbiBrYyhhLGIpe2I9Ynx8e30sdGhpcy5vcHRpb25zPW8oYixoYy5kZWZhdWx0cyksdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0PXRoaXMub3B0aW9ucy5pbnB1dFRhcmdldHx8YSx0aGlzLmhhbmRsZXJzPXt9LHRoaXMuc2Vzc2lvbj17fSx0aGlzLnJlY29nbml6ZXJzPVtdLHRoaXMuZWxlbWVudD1hLHRoaXMuaW5wdXQ9YmIodGhpcyksdGhpcy50b3VjaEFjdGlvbj1uZXcgUGIodGhpcyx0aGlzLm9wdGlvbnMudG91Y2hBY3Rpb24pLGxjKHRoaXMsITApLG0oYi5yZWNvZ25pemVycyxmdW5jdGlvbihhKXt2YXIgYj10aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSYmYi5yZWNvZ25pemVXaXRoKGFbMl0pLGFbM10mJmIucmVxdWlyZUZhaWx1cmUoYVszXSl9LHRoaXMpfWZ1bmN0aW9uIGxjKGEsYil7dmFyIGM9YS5lbGVtZW50O20oYS5vcHRpb25zLmNzc1Byb3BzLGZ1bmN0aW9uKGEsZCl7Yy5zdHlsZVtCKGMuc3R5bGUsZCldPWI/YTpcIlwifSl9ZnVuY3Rpb24gbWMoYSxjKXt2YXIgZD1iLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7ZC5pbml0RXZlbnQoYSwhMCwhMCksZC5nZXN0dXJlPWMsYy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKX12YXIgZT1bXCJcIixcIndlYmtpdFwiLFwibW96XCIsXCJNU1wiLFwibXNcIixcIm9cIl0sZj1iLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZz1cImZ1bmN0aW9uXCIsaD1NYXRoLnJvdW5kLGk9TWF0aC5hYnMsaj1EYXRlLm5vdyxDPTEsRj0vbW9iaWxlfHRhYmxldHxpcChhZHxob25lfG9kKXxhbmRyb2lkL2ksRz1cIm9udG91Y2hzdGFydFwiaW4gYSxIPUIoYSxcIlBvaW50ZXJFdmVudFwiKSE9PWQsST1HJiZGLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksSj1cInRvdWNoXCIsSz1cInBlblwiLEw9XCJtb3VzZVwiLE09XCJraW5lY3RcIixOPTI1LE89MSxQPTIsUT00LFI9OCxTPTEsVD0yLFU9NCxWPTgsVz0xNixYPVR8VSxZPVZ8VyxaPVh8WSwkPVtcInhcIixcInlcIl0sXz1bXCJjbGllbnRYXCIsXCJjbGllbnRZXCJdO2FiLnByb3RvdHlwZT17aGFuZGxlcjpmdW5jdGlvbigpe30saW5pdDpmdW5jdGlvbigpe3RoaXMuZXZFbCYmdCh0aGlzLmVsZW1lbnQsdGhpcy5ldkVsLHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldlRhcmdldCYmdCh0aGlzLnRhcmdldCx0aGlzLmV2VGFyZ2V0LHRoaXMuZG9tSGFuZGxlciksdGhpcy5ldldpbiYmdChFKHRoaXMuZWxlbWVudCksdGhpcy5ldldpbix0aGlzLmRvbUhhbmRsZXIpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5ldkVsJiZ1KHRoaXMuZWxlbWVudCx0aGlzLmV2RWwsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2VGFyZ2V0JiZ1KHRoaXMudGFyZ2V0LHRoaXMuZXZUYXJnZXQsdGhpcy5kb21IYW5kbGVyKSx0aGlzLmV2V2luJiZ1KEUodGhpcy5lbGVtZW50KSx0aGlzLmV2V2luLHRoaXMuZG9tSGFuZGxlcil9fTt2YXIgb2I9e21vdXNlZG93bjpPLG1vdXNlbW92ZTpQLG1vdXNldXA6UX0scGI9XCJtb3VzZWRvd25cIixxYj1cIm1vdXNlbW92ZSBtb3VzZXVwXCI7cChyYixhYix7aGFuZGxlcjpmdW5jdGlvbihhKXt2YXIgYj1vYlthLnR5cGVdO2ImTyYmMD09PWEuYnV0dG9uJiYodGhpcy5wcmVzc2VkPSEwKSxiJlAmJjEhPT1hLndoaWNoJiYoYj1RKSx0aGlzLnByZXNzZWQmJnRoaXMuYWxsb3cmJihiJlEmJih0aGlzLnByZXNzZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOlthXSxjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOkwsc3JjRXZlbnQ6YX0pKX19KTt2YXIgc2I9e3BvaW50ZXJkb3duOk8scG9pbnRlcm1vdmU6UCxwb2ludGVydXA6USxwb2ludGVyY2FuY2VsOlIscG9pbnRlcm91dDpSfSx0Yj17MjpKLDM6Syw0OkwsNTpNfSx1Yj1cInBvaW50ZXJkb3duXCIsdmI9XCJwb2ludGVybW92ZSBwb2ludGVydXAgcG9pbnRlcmNhbmNlbFwiO2EuTVNQb2ludGVyRXZlbnQmJih1Yj1cIk1TUG9pbnRlckRvd25cIix2Yj1cIk1TUG9pbnRlck1vdmUgTVNQb2ludGVyVXAgTVNQb2ludGVyQ2FuY2VsXCIpLHAod2IsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5zdG9yZSxjPSExLGQ9YS50eXBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZShcIm1zXCIsXCJcIiksZT1zYltkXSxmPXRiW2EucG9pbnRlclR5cGVdfHxhLnBvaW50ZXJUeXBlLGc9Zj09SixoPXkoYixhLnBvaW50ZXJJZCxcInBvaW50ZXJJZFwiKTtlJk8mJigwPT09YS5idXR0b258fGcpPzA+aCYmKGIucHVzaChhKSxoPWIubGVuZ3RoLTEpOmUmKFF8UikmJihjPSEwKSwwPmh8fChiW2hdPWEsdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsZSx7cG9pbnRlcnM6YixjaGFuZ2VkUG9pbnRlcnM6W2FdLHBvaW50ZXJUeXBlOmYsc3JjRXZlbnQ6YX0pLGMmJmIuc3BsaWNlKGgsMSkpfX0pO3ZhciB4Yj17dG91Y2hzdGFydDpPLHRvdWNobW92ZTpQLHRvdWNoZW5kOlEsdG91Y2hjYW5jZWw6Un0seWI9XCJ0b3VjaHN0YXJ0XCIsemI9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO3AoQWIsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9eGJbYS50eXBlXTtpZihiPT09TyYmKHRoaXMuc3RhcnRlZD0hMCksdGhpcy5zdGFydGVkKXt2YXIgYz1CYi5jYWxsKHRoaXMsYSxiKTtiJihRfFIpJiYwPT09Y1swXS5sZW5ndGgtY1sxXS5sZW5ndGgmJih0aGlzLnN0YXJ0ZWQ9ITEpLHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6SixzcmNFdmVudDphfSl9fX0pO3ZhciBDYj17dG91Y2hzdGFydDpPLHRvdWNobW92ZTpQLHRvdWNoZW5kOlEsdG91Y2hjYW5jZWw6Un0sRGI9XCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO3AoRWIsYWIse2hhbmRsZXI6ZnVuY3Rpb24oYSl7dmFyIGI9Q2JbYS50eXBlXSxjPUZiLmNhbGwodGhpcyxhLGIpO2MmJnRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLGIse3BvaW50ZXJzOmNbMF0sY2hhbmdlZFBvaW50ZXJzOmNbMV0scG9pbnRlclR5cGU6SixzcmNFdmVudDphfSl9fSkscChHYixhYix7aGFuZGxlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9Yy5wb2ludGVyVHlwZT09SixlPWMucG9pbnRlclR5cGU9PUw7aWYoZCl0aGlzLm1vdXNlLmFsbG93PSExO2Vsc2UgaWYoZSYmIXRoaXMubW91c2UuYWxsb3cpcmV0dXJuO2ImKFF8UikmJih0aGlzLm1vdXNlLmFsbG93PSEwKSx0aGlzLmNhbGxiYWNrKGEsYixjKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMudG91Y2guZGVzdHJveSgpLHRoaXMubW91c2UuZGVzdHJveSgpfX0pO3ZhciBIYj1CKGYuc3R5bGUsXCJ0b3VjaEFjdGlvblwiKSxJYj1IYiE9PWQsSmI9XCJjb21wdXRlXCIsS2I9XCJhdXRvXCIsTGI9XCJtYW5pcHVsYXRpb25cIixNYj1cIm5vbmVcIixOYj1cInBhbi14XCIsT2I9XCJwYW4teVwiO1BiLnByb3RvdHlwZT17c2V0OmZ1bmN0aW9uKGEpe2E9PUpiJiYoYT10aGlzLmNvbXB1dGUoKSksSWImJih0aGlzLm1hbmFnZXIuZWxlbWVudC5zdHlsZVtIYl09YSksdGhpcy5hY3Rpb25zPWEudG9Mb3dlckNhc2UoKS50cmltKCl9LHVwZGF0ZTpmdW5jdGlvbigpe3RoaXMuc2V0KHRoaXMubWFuYWdlci5vcHRpb25zLnRvdWNoQWN0aW9uKX0sY29tcHV0ZTpmdW5jdGlvbigpe3ZhciBhPVtdO3JldHVybiBtKHRoaXMubWFuYWdlci5yZWNvZ25pemVycyxmdW5jdGlvbihiKXtyKGIub3B0aW9ucy5lbmFibGUsW2JdKSYmKGE9YS5jb25jYXQoYi5nZXRUb3VjaEFjdGlvbigpKSl9KSxRYihhLmpvaW4oXCIgXCIpKX0scHJldmVudERlZmF1bHRzOmZ1bmN0aW9uKGEpe2lmKCFJYil7dmFyIGI9YS5zcmNFdmVudCxjPWEub2Zmc2V0RGlyZWN0aW9uO2lmKHRoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZClyZXR1cm4gYi5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgMDt2YXIgZD10aGlzLmFjdGlvbnMsZT13KGQsTWIpLGY9dyhkLE9iKSxnPXcoZCxOYik7cmV0dXJuIGV8fGYmJmMmWHx8ZyYmYyZZP3RoaXMucHJldmVudFNyYyhiKTp2b2lkIDB9fSxwcmV2ZW50U3JjOmZ1bmN0aW9uKGEpe3RoaXMubWFuYWdlci5zZXNzaW9uLnByZXZlbnRlZD0hMCxhLnByZXZlbnREZWZhdWx0KCl9fTt2YXIgUmI9MSxTYj0yLFRiPTQsVWI9OCxWYj1VYixXYj0xNixYYj0zMjtZYi5wcm90b3R5cGU9e2RlZmF1bHRzOnt9LHNldDpmdW5jdGlvbihhKXtyZXR1cm4gbih0aGlzLm9wdGlvbnMsYSksdGhpcy5tYW5hZ2VyJiZ0aGlzLm1hbmFnZXIudG91Y2hBY3Rpb24udXBkYXRlKCksdGhpc30scmVjb2duaXplV2l0aDpmdW5jdGlvbihhKXtpZihsKGEsXCJyZWNvZ25pemVXaXRoXCIsdGhpcykpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5zaW11bHRhbmVvdXM7cmV0dXJuIGE9X2IoYSx0aGlzKSxiW2EuaWRdfHwoYlthLmlkXT1hLGEucmVjb2duaXplV2l0aCh0aGlzKSksdGhpc30sZHJvcFJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGwoYSxcImRyb3BSZWNvZ25pemVXaXRoXCIsdGhpcyk/dGhpczooYT1fYihhLHRoaXMpLGRlbGV0ZSB0aGlzLnNpbXVsdGFuZW91c1thLmlkXSx0aGlzKX0scmVxdWlyZUZhaWx1cmU6ZnVuY3Rpb24oYSl7aWYobChhLFwicmVxdWlyZUZhaWx1cmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlcXVpcmVGYWlsO3JldHVybiBhPV9iKGEsdGhpcyksLTE9PT15KGIsYSkmJihiLnB1c2goYSksYS5yZXF1aXJlRmFpbHVyZSh0aGlzKSksdGhpc30sZHJvcFJlcXVpcmVGYWlsdXJlOmZ1bmN0aW9uKGEpe2lmKGwoYSxcImRyb3BSZXF1aXJlRmFpbHVyZVwiLHRoaXMpKXJldHVybiB0aGlzO2E9X2IoYSx0aGlzKTt2YXIgYj15KHRoaXMucmVxdWlyZUZhaWwsYSk7cmV0dXJuIGI+LTEmJnRoaXMucmVxdWlyZUZhaWwuc3BsaWNlKGIsMSksdGhpc30saGFzUmVxdWlyZUZhaWx1cmVzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVxdWlyZUZhaWwubGVuZ3RoPjB9LGNhblJlY29nbml6ZVdpdGg6ZnVuY3Rpb24oYSl7cmV0dXJuISF0aGlzLnNpbXVsdGFuZW91c1thLmlkXX0sZW1pdDpmdW5jdGlvbihhKXtmdW5jdGlvbiBkKGQpe2IubWFuYWdlci5lbWl0KGIub3B0aW9ucy5ldmVudCsoZD9aYihjKTpcIlwiKSxhKX12YXIgYj10aGlzLGM9dGhpcy5zdGF0ZTtVYj5jJiZkKCEwKSxkKCksYz49VWImJmQoITApfSx0cnlFbWl0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmNhbkVtaXQoKT90aGlzLmVtaXQoYSk6KHRoaXMuc3RhdGU9WGIsdm9pZCAwKX0sY2FuRW1pdDpmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8dGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KXtpZighKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUmKFhifFJiKSkpcmV0dXJuITE7YSsrfXJldHVybiEwfSxyZWNvZ25pemU6ZnVuY3Rpb24oYSl7dmFyIGI9bih7fSxhKTtyZXR1cm4gcih0aGlzLm9wdGlvbnMuZW5hYmxlLFt0aGlzLGJdKT8odGhpcy5zdGF0ZSYoVmJ8V2J8WGIpJiYodGhpcy5zdGF0ZT1SYiksdGhpcy5zdGF0ZT10aGlzLnByb2Nlc3MoYiksdGhpcy5zdGF0ZSYoU2J8VGJ8VWJ8V2IpJiZ0aGlzLnRyeUVtaXQoYiksdm9pZCAwKToodGhpcy5yZXNldCgpLHRoaXMuc3RhdGU9WGIsdm9pZCAwKX0scHJvY2VzczpmdW5jdGlvbigpe30sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt9LHJlc2V0OmZ1bmN0aW9uKCl7fX0scChhYyxZYix7ZGVmYXVsdHM6e3BvaW50ZXJzOjF9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5wb2ludGVycztyZXR1cm4gMD09PWJ8fGEucG9pbnRlcnMubGVuZ3RoPT09Yn0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLnN0YXRlLGM9YS5ldmVudFR5cGUsZD1iJihTYnxUYiksZT10aGlzLmF0dHJUZXN0KGEpO3JldHVybiBkJiYoYyZSfHwhZSk/YnxXYjpkfHxlP2MmUT9ifFViOmImU2I/YnxUYjpTYjpYYn19KSxwKGJjLGFjLHtkZWZhdWx0czp7ZXZlbnQ6XCJwYW5cIix0aHJlc2hvbGQ6MTAscG9pbnRlcnM6MSxkaXJlY3Rpb246Wn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9wdGlvbnMuZGlyZWN0aW9uLGI9W107cmV0dXJuIGEmWCYmYi5wdXNoKE9iKSxhJlkmJmIucHVzaChOYiksYn0sZGlyZWN0aW9uVGVzdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz0hMCxkPWEuZGlzdGFuY2UsZT1hLmRpcmVjdGlvbixmPWEuZGVsdGFYLGc9YS5kZWx0YVk7cmV0dXJuIGUmYi5kaXJlY3Rpb258fChiLmRpcmVjdGlvbiZYPyhlPTA9PT1mP1M6MD5mP1Q6VSxjPWYhPXRoaXMucFgsZD1NYXRoLmFicyhhLmRlbHRhWCkpOihlPTA9PT1nP1M6MD5nP1Y6VyxjPWchPXRoaXMucFksZD1NYXRoLmFicyhhLmRlbHRhWSkpKSxhLmRpcmVjdGlvbj1lLGMmJmQ+Yi50aHJlc2hvbGQmJmUmYi5kaXJlY3Rpb259LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3JldHVybiBhYy5wcm90b3R5cGUuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYodGhpcy5zdGF0ZSZTYnx8ISh0aGlzLnN0YXRlJlNiKSYmdGhpcy5kaXJlY3Rpb25UZXN0KGEpKX0sZW1pdDpmdW5jdGlvbihhKXt0aGlzLnBYPWEuZGVsdGFYLHRoaXMucFk9YS5kZWx0YVk7dmFyIGI9JGIoYS5kaXJlY3Rpb24pO2ImJnRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpLHRoaXMuX3N1cGVyLmVtaXQuY2FsbCh0aGlzLGEpfX0pLHAoY2MsYWMse2RlZmF1bHRzOntldmVudDpcInBpbmNoXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bTWJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5zY2FsZS0xKT50aGlzLm9wdGlvbnMudGhyZXNob2xkfHx0aGlzLnN0YXRlJlNiKX0sZW1pdDpmdW5jdGlvbihhKXtpZih0aGlzLl9zdXBlci5lbWl0LmNhbGwodGhpcyxhKSwxIT09YS5zY2FsZSl7dmFyIGI9YS5zY2FsZTwxP1wiaW5cIjpcIm91dFwiO3RoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCtiLGEpfX19KSxwKGRjLFliLHtkZWZhdWx0czp7ZXZlbnQ6XCJwcmVzc1wiLHBvaW50ZXJzOjEsdGltZTo1MDAsdGhyZXNob2xkOjV9LGdldFRvdWNoQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuW0tiXX0scHJvY2VzczpmdW5jdGlvbihhKXt2YXIgYj10aGlzLm9wdGlvbnMsYz1hLnBvaW50ZXJzLmxlbmd0aD09PWIucG9pbnRlcnMsZD1hLmRpc3RhbmNlPGIudGhyZXNob2xkLGU9YS5kZWx0YVRpbWU+Yi50aW1lO2lmKHRoaXMuX2lucHV0PWEsIWR8fCFjfHxhLmV2ZW50VHlwZSYoUXxSKSYmIWUpdGhpcy5yZXNldCgpO2Vsc2UgaWYoYS5ldmVudFR5cGUmTyl0aGlzLnJlc2V0KCksdGhpcy5fdGltZXI9ayhmdW5jdGlvbigpe3RoaXMuc3RhdGU9VmIsdGhpcy50cnlFbWl0KCl9LGIudGltZSx0aGlzKTtlbHNlIGlmKGEuZXZlbnRUeXBlJlEpcmV0dXJuIFZiO3JldHVybiBYYn0scmVzZXQ6ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpfSxlbWl0OmZ1bmN0aW9uKGEpe3RoaXMuc3RhdGU9PT1WYiYmKGEmJmEuZXZlbnRUeXBlJlE/dGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50K1widXBcIixhKToodGhpcy5faW5wdXQudGltZVN0YW1wPWooKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsdGhpcy5faW5wdXQpKSl9fSkscChlYyxhYyx7ZGVmYXVsdHM6e2V2ZW50Olwicm90YXRlXCIsdGhyZXNob2xkOjAscG9pbnRlcnM6Mn0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bTWJdfSxhdHRyVGVzdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiYoTWF0aC5hYnMoYS5yb3RhdGlvbik+dGhpcy5vcHRpb25zLnRocmVzaG9sZHx8dGhpcy5zdGF0ZSZTYil9fSkscChmYyxhYyx7ZGVmYXVsdHM6e2V2ZW50Olwic3dpcGVcIix0aHJlc2hvbGQ6MTAsdmVsb2NpdHk6LjY1LGRpcmVjdGlvbjpYfFkscG9pbnRlcnM6MX0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm4gYmMucHJvdG90eXBlLmdldFRvdWNoQWN0aW9uLmNhbGwodGhpcyl9LGF0dHJUZXN0OmZ1bmN0aW9uKGEpe3ZhciBjLGI9dGhpcy5vcHRpb25zLmRpcmVjdGlvbjtyZXR1cm4gYiYoWHxZKT9jPWEudmVsb2NpdHk6YiZYP2M9YS52ZWxvY2l0eVg6YiZZJiYoYz1hLnZlbG9jaXR5WSksdGhpcy5fc3VwZXIuYXR0clRlc3QuY2FsbCh0aGlzLGEpJiZiJmEuZGlyZWN0aW9uJiZhLmRpc3RhbmNlPnRoaXMub3B0aW9ucy50aHJlc2hvbGQmJmkoYyk+dGhpcy5vcHRpb25zLnZlbG9jaXR5JiZhLmV2ZW50VHlwZSZRfSxlbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPSRiKGEuZGlyZWN0aW9uKTtiJiZ0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQrYixhKSx0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQsYSl9fSkscChnYyxZYix7ZGVmYXVsdHM6e2V2ZW50OlwidGFwXCIscG9pbnRlcnM6MSx0YXBzOjEsaW50ZXJ2YWw6MzAwLHRpbWU6MjUwLHRocmVzaG9sZDoyLHBvc1RocmVzaG9sZDoxMH0sZ2V0VG91Y2hBY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm5bTGJdfSxwcm9jZXNzOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucyxjPWEucG9pbnRlcnMubGVuZ3RoPT09Yi5wb2ludGVycyxkPWEuZGlzdGFuY2U8Yi50aHJlc2hvbGQsZT1hLmRlbHRhVGltZTxiLnRpbWU7aWYodGhpcy5yZXNldCgpLGEuZXZlbnRUeXBlJk8mJjA9PT10aGlzLmNvdW50KXJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7aWYoZCYmZSYmYyl7aWYoYS5ldmVudFR5cGUhPVEpcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTt2YXIgZj10aGlzLnBUaW1lP2EudGltZVN0YW1wLXRoaXMucFRpbWU8Yi5pbnRlcnZhbDohMCxnPSF0aGlzLnBDZW50ZXJ8fGtiKHRoaXMucENlbnRlcixhLmNlbnRlcik8Yi5wb3NUaHJlc2hvbGQ7dGhpcy5wVGltZT1hLnRpbWVTdGFtcCx0aGlzLnBDZW50ZXI9YS5jZW50ZXIsZyYmZj90aGlzLmNvdW50Kz0xOnRoaXMuY291bnQ9MSx0aGlzLl9pbnB1dD1hO3ZhciBoPXRoaXMuY291bnQlYi50YXBzO2lmKDA9PT1oKXJldHVybiB0aGlzLmhhc1JlcXVpcmVGYWlsdXJlcygpPyh0aGlzLl90aW1lcj1rKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1WYix0aGlzLnRyeUVtaXQoKX0sYi5pbnRlcnZhbCx0aGlzKSxTYik6VmJ9cmV0dXJuIFhifSxmYWlsVGltZW91dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl90aW1lcj1rKGZ1bmN0aW9uKCl7dGhpcy5zdGF0ZT1YYn0sdGhpcy5vcHRpb25zLmludGVydmFsLHRoaXMpLFhifSxyZXNldDpmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLl90aW1lcil9LGVtaXQ6ZnVuY3Rpb24oKXt0aGlzLnN0YXRlPT1WYiYmKHRoaXMuX2lucHV0LnRhcENvdW50PXRoaXMuY291bnQsdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LHRoaXMuX2lucHV0KSl9fSksaGMuVkVSU0lPTj1cIjIuMC40XCIsaGMuZGVmYXVsdHM9e2RvbUV2ZW50czohMSx0b3VjaEFjdGlvbjpKYixlbmFibGU6ITAsaW5wdXRUYXJnZXQ6bnVsbCxpbnB1dENsYXNzOm51bGwscHJlc2V0OltbZWMse2VuYWJsZTohMX1dLFtjYyx7ZW5hYmxlOiExfSxbXCJyb3RhdGVcIl1dLFtmYyx7ZGlyZWN0aW9uOlh9XSxbYmMse2RpcmVjdGlvbjpYfSxbXCJzd2lwZVwiXV0sW2djXSxbZ2Mse2V2ZW50OlwiZG91YmxldGFwXCIsdGFwczoyfSxbXCJ0YXBcIl1dLFtkY11dLGNzc1Byb3BzOnt1c2VyU2VsZWN0OlwiZGVmYXVsdFwiLHRvdWNoU2VsZWN0Olwibm9uZVwiLHRvdWNoQ2FsbG91dDpcIm5vbmVcIixjb250ZW50Wm9vbWluZzpcIm5vbmVcIix1c2VyRHJhZzpcIm5vbmVcIix0YXBIaWdobGlnaHRDb2xvcjpcInJnYmEoMCwwLDAsMClcIn19O3ZhciBpYz0xLGpjPTI7a2MucHJvdG90eXBlPXtzZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4odGhpcy5vcHRpb25zLGEpLGEudG91Y2hBY3Rpb24mJnRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksYS5pbnB1dFRhcmdldCYmKHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuaW5wdXQudGFyZ2V0PWEuaW5wdXRUYXJnZXQsdGhpcy5pbnB1dC5pbml0KCkpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oYSl7dGhpcy5zZXNzaW9uLnN0b3BwZWQ9YT9qYzppY30scmVjb2duaXplOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuc2Vzc2lvbjtpZighYi5zdG9wcGVkKXt0aGlzLnRvdWNoQWN0aW9uLnByZXZlbnREZWZhdWx0cyhhKTt2YXIgYyxkPXRoaXMucmVjb2duaXplcnMsZT1iLmN1clJlY29nbml6ZXI7KCFlfHxlJiZlLnN0YXRlJlZiKSYmKGU9Yi5jdXJSZWNvZ25pemVyPW51bGwpO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7KWM9ZFtmXSxiLnN0b3BwZWQ9PT1qY3x8ZSYmYyE9ZSYmIWMuY2FuUmVjb2duaXplV2l0aChlKT9jLnJlc2V0KCk6Yy5yZWNvZ25pemUoYSksIWUmJmMuc3RhdGUmKFNifFRifFViKSYmKGU9Yi5jdXJSZWNvZ25pemVyPWMpLGYrK319LGdldDpmdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2YgWWIpcmV0dXJuIGE7Zm9yKHZhciBiPXRoaXMucmVjb2duaXplcnMsYz0wO2M8Yi5sZW5ndGg7YysrKWlmKGJbY10ub3B0aW9ucy5ldmVudD09YSlyZXR1cm4gYltjXTtyZXR1cm4gbnVsbH0sYWRkOmZ1bmN0aW9uKGEpe2lmKGwoYSxcImFkZFwiLHRoaXMpKXJldHVybiB0aGlzO3ZhciBiPXRoaXMuZ2V0KGEub3B0aW9ucy5ldmVudCk7cmV0dXJuIGImJnRoaXMucmVtb3ZlKGIpLHRoaXMucmVjb2duaXplcnMucHVzaChhKSxhLm1hbmFnZXI9dGhpcyx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLGF9LHJlbW92ZTpmdW5jdGlvbihhKXtpZihsKGEsXCJyZW1vdmVcIix0aGlzKSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLnJlY29nbml6ZXJzO3JldHVybiBhPXRoaXMuZ2V0KGEpLGIuc3BsaWNlKHkoYixhKSwxKSx0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLHRoaXN9LG9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gbSh4KGEpLGZ1bmN0aW9uKGEpe2NbYV09Y1thXXx8W10sY1thXS5wdXNoKGIpfSksdGhpc30sb2ZmOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5oYW5kbGVycztyZXR1cm4gbSh4KGEpLGZ1bmN0aW9uKGEpe2I/Y1thXS5zcGxpY2UoeShjW2FdLGIpLDEpOmRlbGV0ZSBjW2FdfSksdGhpc30sZW1pdDpmdW5jdGlvbihhLGIpe3RoaXMub3B0aW9ucy5kb21FdmVudHMmJm1jKGEsYik7dmFyIGM9dGhpcy5oYW5kbGVyc1thXSYmdGhpcy5oYW5kbGVyc1thXS5zbGljZSgpO2lmKGMmJmMubGVuZ3RoKXtiLnR5cGU9YSxiLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yi5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpfTtmb3IodmFyIGQ9MDtkPGMubGVuZ3RoOyljW2RdKGIpLGQrK319LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLmVsZW1lbnQmJmxjKHRoaXMsITEpLHRoaXMuaGFuZGxlcnM9e30sdGhpcy5zZXNzaW9uPXt9LHRoaXMuaW5wdXQuZGVzdHJveSgpLHRoaXMuZWxlbWVudD1udWxsfX0sbihoYyx7SU5QVVRfU1RBUlQ6TyxJTlBVVF9NT1ZFOlAsSU5QVVRfRU5EOlEsSU5QVVRfQ0FOQ0VMOlIsU1RBVEVfUE9TU0lCTEU6UmIsU1RBVEVfQkVHQU46U2IsU1RBVEVfQ0hBTkdFRDpUYixTVEFURV9FTkRFRDpVYixTVEFURV9SRUNPR05JWkVEOlZiLFNUQVRFX0NBTkNFTExFRDpXYixTVEFURV9GQUlMRUQ6WGIsRElSRUNUSU9OX05PTkU6UyxESVJFQ1RJT05fTEVGVDpULERJUkVDVElPTl9SSUdIVDpVLERJUkVDVElPTl9VUDpWLERJUkVDVElPTl9ET1dOOlcsRElSRUNUSU9OX0hPUklaT05UQUw6WCxESVJFQ1RJT05fVkVSVElDQUw6WSxESVJFQ1RJT05fQUxMOlosTWFuYWdlcjprYyxJbnB1dDphYixUb3VjaEFjdGlvbjpQYixUb3VjaElucHV0OkViLE1vdXNlSW5wdXQ6cmIsUG9pbnRlckV2ZW50SW5wdXQ6d2IsVG91Y2hNb3VzZUlucHV0OkdiLFNpbmdsZVRvdWNoSW5wdXQ6QWIsUmVjb2duaXplcjpZYixBdHRyUmVjb2duaXplcjphYyxUYXA6Z2MsUGFuOmJjLFN3aXBlOmZjLFBpbmNoOmNjLFJvdGF0ZTplYyxQcmVzczpkYyxvbjp0LG9mZjp1LGVhY2g6bSxtZXJnZTpvLGV4dGVuZDpuLGluaGVyaXQ6cCxiaW5kRm46cSxwcmVmaXhlZDpCfSksdHlwZW9mIGRlZmluZT09ZyYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gaGN9KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1oYzphW2NdPWhjfSh3aW5kb3csZG9jdW1lbnQsXCJIYW1tZXJcIik7IiwiKGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeScsICdoYW1tZXJqcyddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpLCByZXF1aXJlKCdoYW1tZXJqcycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSwgSGFtbWVyKTtcbiAgICB9XG59KGZ1bmN0aW9uKCQsIEhhbW1lcikge1xuICAgIGZ1bmN0aW9uIGhhbW1lcmlmeShlbCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgJGVsID0gJChlbCk7XG4gICAgICAgIGlmKCEkZWwuZGF0YShcImhhbW1lclwiKSkge1xuICAgICAgICAgICAgJGVsLmRhdGEoXCJoYW1tZXJcIiwgbmV3IEhhbW1lcigkZWxbMF0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQuZm4uaGFtbWVyID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaGFtbWVyaWZ5KHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gZXh0ZW5kIHRoZSBlbWl0IG1ldGhvZCB0byBhbHNvIHRyaWdnZXIgalF1ZXJ5IGV2ZW50c1xuICAgIEhhbW1lci5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0ID0gKGZ1bmN0aW9uKG9yaWdpbmFsRW1pdCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odHlwZSwgZGF0YSkge1xuICAgICAgICAgICAgb3JpZ2luYWxFbWl0LmNhbGwodGhpcywgdHlwZSwgZGF0YSk7XG4gICAgICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBnZXN0dXJlOiBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KShIYW1tZXIuTWFuYWdlci5wcm90b3R5cGUuZW1pdCk7XG59KSk7XG4iLCIvLyBSZXF1aXJlZCBmb3IgTWV0ZW9yIHBhY2thZ2UsIHRoZSB1c2Ugb2Ygd2luZG93IHByZXZlbnRzIGV4cG9ydCBieSBNZXRlb3JcbihmdW5jdGlvbih3aW5kb3cpe1xuICBpZih3aW5kb3cuUGFja2FnZSl7XG4gICAgTWF0ZXJpYWxpemUgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuTWF0ZXJpYWxpemUgPSB7fTtcbiAgfVxufSkod2luZG93KTtcblxuXG4vKlxuICogcmFmLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmdyeW1hbi9yYWYuanNcbiAqXG4gKiBvcmlnaW5hbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyXG4gKiBpbnNwaXJlZCBmcm9tIHBhdWxfaXJpc2ggZ2lzdCBhbmQgcG9zdFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMyBuZ3J5bWFuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbih3aW5kb3cpIHtcbiAgdmFyIGxhc3RUaW1lID0gMCxcbiAgICB2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J10sXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSxcbiAgICBpID0gdmVuZG9ycy5sZW5ndGg7XG5cbiAgLy8gdHJ5IHRvIHVuLXByZWZpeCBleGlzdGluZyByYWZcbiAgd2hpbGUgKC0taSA+PSAwICYmICFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICB9XG5cbiAgLy8gcG9seWZpbGwgd2l0aCBzZXRUaW1lb3V0IGZhbGxiYWNrXG4gIC8vIGhlYXZpbHkgaW5zcGlyZWQgZnJvbSBAZGFyaXVzIGdpc3QgbW9kOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MSNjb21tZW50LTgzNzk0NVxuICBpZiAoIXJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAhY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgdmFyIG5vdyA9ICtEYXRlLm5vdygpLFxuICAgICAgICBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2sobGFzdFRpbWUgPSBuZXh0VGltZSk7XG4gICAgICB9LCBuZXh0VGltZSAtIG5vdyk7XG4gICAgfTtcblxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xuICB9XG5cbiAgLy8gZXhwb3J0IHRvIHdpbmRvd1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYW5jZWxBbmltYXRpb25GcmFtZTtcbn0od2luZG93KSk7XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSBhcHByb3hpbWF0ZWQgc2VsZWN0b3Igc3RyaW5nIGZvciBhIGpRdWVyeSBvYmplY3RcbiAqIEBwYXJhbSB7alF1ZXJ5fSBvYmogIGpRdWVyeSBvYmplY3QgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5NYXRlcmlhbGl6ZS5vYmplY3RTZWxlY3RvclN0cmluZyA9IGZ1bmN0aW9uKG9iaikge1xuICB2YXIgdGFnU3RyID0gb2JqLnByb3AoJ3RhZ05hbWUnKSB8fCAnJztcbiAgdmFyIGlkU3RyID0gb2JqLmF0dHIoJ2lkJykgfHwgJyc7XG4gIHZhciBjbGFzc1N0ciA9IG9iai5hdHRyKCdjbGFzcycpIHx8ICcnO1xuICByZXR1cm4gKHRhZ1N0ciArIGlkU3RyICsgY2xhc3NTdHIpLnJlcGxhY2UoL1xccy9nLCcnKTtcbn07XG5cblxuLy8gVW5pcXVlIFJhbmRvbSBJRFxuTWF0ZXJpYWxpemUuZ3VpZCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gczQoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAuc3Vic3RyaW5nKDEpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG4gICAgICAgICAgIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG4gIH07XG59KSgpO1xuXG4vKipcbiAqIEVzY2FwZXMgaGFzaCBmcm9tIHNwZWNpYWwgY2hhcmFjdGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IGhhc2ggIFN0cmluZyByZXR1cm5lZCBmcm9tIHRoaXMuaGFzaFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCA9IGZ1bmN0aW9uKGhhc2gpIHtcbiAgcmV0dXJuIGhhc2gucmVwbGFjZSggLyg6fFxcLnxcXFt8XFxdfCx8PSkvZywgXCJcXFxcJDFcIiApO1xufTtcblxuTWF0ZXJpYWxpemUuZWxlbWVudE9yUGFyZW50SXNGaXhlZCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIHZhciAkY2hlY2tFbGVtZW50cyA9ICRlbGVtZW50LmFkZCgkZWxlbWVudC5wYXJlbnRzKCkpO1xuICAgIHZhciBpc0ZpeGVkID0gZmFsc2U7XG4gICAgJGNoZWNrRWxlbWVudHMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBpZiAoJCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICBpc0ZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpc0ZpeGVkO1xufTtcblxuXG4vKipcbiAqIEdldCB0aW1lIGluIG1zXG4gKiBAbGljZW5zZSBodHRwczovL3Jhdy5naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL21hc3Rlci9MSUNFTlNFXG4gKiBAdHlwZSB7ZnVuY3Rpb259XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBnZXRUaW1lID0gKERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufSk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAqIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICogYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICogYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAqIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtudW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5NYXRlcmlhbGl6ZS50aHJvdHRsZSA9IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGNvbnRleHQsIGFyZ3MsIHJlc3VsdDtcbiAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICB2YXIgcHJldmlvdXMgPSAwO1xuICBvcHRpb25zIHx8IChvcHRpb25zID0ge30pO1xuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IGdldFRpbWUoKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbm93ID0gZ2V0VGltZSgpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgcmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLy8gVmVsb2NpdHkgaGFzIGNvbmZsaWN0cyB3aGVuIGxvYWRlZCB3aXRoIGpRdWVyeSwgdGhpcyB3aWxsIGNoZWNrIGZvciBpdFxuLy8gRmlyc3QsIGNoZWNrIGlmIGluIG5vQ29uZmxpY3QgbW9kZVxudmFyIFZlbDtcbmlmIChqUXVlcnkpIHtcbiAgVmVsID0galF1ZXJ5LlZlbG9jaXR5O1xufSBlbHNlIGlmICgkKSB7XG4gIFZlbCA9ICQuVmVsb2NpdHk7XG59IGVsc2Uge1xuICBWZWwgPSBWZWxvY2l0eTtcbn1cbiIsIihmdW5jdGlvbiAoJCkge1xuICAkLmZuLmNvbGxhcHNpYmxlID0gZnVuY3Rpb24ob3B0aW9ucywgbWV0aG9kUGFyYW0pIHtcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICBhY2NvcmRpb246IHVuZGVmaW5lZCxcbiAgICAgIG9uT3BlbjogdW5kZWZpbmVkLFxuICAgICAgb25DbG9zZTogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIHZhciBtZXRob2ROYW1lID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICB2YXIgJHBhbmVsX2hlYWRlcnMgPSAkKHRoaXMpLmZpbmQoJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XG5cbiAgICAgIHZhciBjb2xsYXBzaWJsZV90eXBlID0gJHRoaXMuZGF0YShcImNvbGxhcHNpYmxlXCIpO1xuXG4gICAgICAvKioqKioqKioqKioqKioqKlxuICAgICAgSGVscGVyIEZ1bmN0aW9uc1xuICAgICAgKioqKioqKioqKioqKioqKi9cblxuICAgICAgLy8gQWNjb3JkaW9uIE9wZW5cbiAgICAgIGZ1bmN0aW9uIGFjY29yZGlvbk9wZW4ob2JqZWN0KSB7XG4gICAgICAgICRwYW5lbF9oZWFkZXJzID0gJHRoaXMuZmluZCgnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInKTtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG9iamVjdC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iamVjdC5wYXJlbnQoKS5oYXNDbGFzcygnYWN0aXZlJykpe1xuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsZmFsc2UpLnNsaWRlRG93bih7IGR1cmF0aW9uOiAzNTAsIGVhc2luZzogXCJlYXNlT3V0UXVhcnRcIiwgcXVldWU6IGZhbHNlLCBjb21wbGV0ZTogZnVuY3Rpb24oKSB7JCh0aGlzKS5jc3MoJ2hlaWdodCcsICcnKTt9fSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5zbGlkZVVwKHsgZHVyYXRpb246IDM1MCwgZWFzaW5nOiBcImVhc2VPdXRRdWFydFwiLCBxdWV1ZTogZmFsc2UsIGNvbXBsZXRlOiBmdW5jdGlvbigpIHskKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO319KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwYW5lbF9oZWFkZXJzLm5vdChvYmplY3QpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgLy8gQ2xvc2UgcHJldmlvdXNseSBvcGVuIGFjY29yZGlvbiBlbGVtZW50cy5cbiAgICAgICAgJHBhbmVsX2hlYWRlcnMubm90KG9iamVjdCkucGFyZW50KCkuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICgkKHRoaXMpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNsaWRlVXAoe1xuICAgICAgICAgICAgICBkdXJhdGlvbjogMzUwLFxuICAgICAgICAgICAgICBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsXG4gICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgY29tcGxldGU6XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygnaGVpZ2h0JywgJycpO1xuICAgICAgICAgICAgICAgICAgZXhlY0NhbGxiYWNrcygkKHRoaXMpLnNpYmxpbmdzKCcuY29sbGFwc2libGUtaGVhZGVyJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEV4cGFuZGFibGUgT3BlblxuICAgICAgZnVuY3Rpb24gZXhwYW5kYWJsZU9wZW4ob2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgb2JqZWN0LnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvYmplY3QucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmplY3QucGFyZW50KCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAgICAgICBvYmplY3Quc2libGluZ3MoJy5jb2xsYXBzaWJsZS1ib2R5Jykuc3RvcCh0cnVlLGZhbHNlKS5zbGlkZURvd24oeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7fX0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG9iamVjdC5zaWJsaW5ncygnLmNvbGxhcHNpYmxlLWJvZHknKS5zdG9wKHRydWUsZmFsc2UpLnNsaWRlVXAoeyBkdXJhdGlvbjogMzUwLCBlYXNpbmc6IFwiZWFzZU91dFF1YXJ0XCIsIHF1ZXVlOiBmYWxzZSwgY29tcGxldGU6IGZ1bmN0aW9uKCkgeyQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7fX0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9wZW4gY29sbGFwc2libGUuIG9iamVjdDogLmNvbGxhcHNpYmxlLWhlYWRlclxuICAgICAgZnVuY3Rpb24gY29sbGFwc2libGVPcGVuKG9iamVjdCwgbm9Ub2dnbGUpIHtcbiAgICAgICAgaWYgKCFub1RvZ2dsZSkge1xuICAgICAgICAgIG9iamVjdC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hY2NvcmRpb24gfHwgY29sbGFwc2libGVfdHlwZSA9PT0gXCJhY2NvcmRpb25cIiB8fCBjb2xsYXBzaWJsZV90eXBlID09PSB1bmRlZmluZWQpIHsgLy8gSGFuZGxlIEFjY29yZGlvblxuICAgICAgICAgIGFjY29yZGlvbk9wZW4ob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHsgLy8gSGFuZGxlIEV4cGFuZGFibGVzXG4gICAgICAgICAgZXhwYW5kYWJsZU9wZW4ob2JqZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4ZWNDYWxsYmFja3Mob2JqZWN0KTtcbiAgICAgIH1cblxuICAgICAgLy8gSGFuZGxlIGNhbGxiYWNrc1xuICAgICAgZnVuY3Rpb24gZXhlY0NhbGxiYWNrcyhvYmplY3QpIHtcbiAgICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMub25PcGVuKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uT3Blbi5jYWxsKHRoaXMsIG9iamVjdC5wYXJlbnQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vbkNsb3NlKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvcHRpb25zLm9uQ2xvc2UuY2FsbCh0aGlzLCBvYmplY3QucGFyZW50KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIG9iamVjdCBpcyBjaGlsZHJlbiBvZiBwYW5lbCBoZWFkZXJcbiAgICAgICAqIEBwYXJhbSAge09iamVjdH0gIG9iamVjdCBKcXVlcnkgb2JqZWN0XG4gICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGl0IGlzIGNoaWxkcmVuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGlzQ2hpbGRyZW5PZlBhbmVsSGVhZGVyKG9iamVjdCkge1xuXG4gICAgICAgIHZhciBwYW5lbEhlYWRlciA9IGdldFBhbmVsSGVhZGVyKG9iamVjdCk7XG5cbiAgICAgICAgcmV0dXJuIHBhbmVsSGVhZGVyLmxlbmd0aCA+IDA7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHBhbmVsIGhlYWRlciBmcm9tIGEgY2hpbGRyZW4gZWxlbWVudFxuICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgSnF1ZXJ5IG9iamVjdFxuICAgICAgICogQHJldHVybiB7T2JqZWN0fSBwYW5lbCBoZWFkZXIgb2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIGdldFBhbmVsSGVhZGVyKG9iamVjdCkge1xuXG4gICAgICAgIHJldHVybiBvYmplY3QuY2xvc2VzdCgnbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XG4gICAgICB9XG5cblxuICAgICAgLy8gVHVybiBvZmYgYW55IGV4aXN0aW5nIGV2ZW50IGhhbmRsZXJzXG4gICAgICBmdW5jdGlvbiByZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICAkdGhpcy5vZmYoJ2NsaWNrLmNvbGxhcHNlJywgJz4gbGkgPiAuY29sbGFwc2libGUtaGVhZGVyJyk7XG4gICAgICB9XG5cbiAgICAgIC8qKioqKiAgRW5kIEhlbHBlciBGdW5jdGlvbnMgICoqKioqL1xuXG5cbiAgICAgIC8vIE1ldGhvZHNcbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnZGVzdHJveScpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZFBhcmFtID49IDAgJiZcbiAgICAgICAgICBtZXRob2RQYXJhbSA8ICRwYW5lbF9oZWFkZXJzLmxlbmd0aCkge1xuICAgICAgICB2YXIgJGN1cnJfaGVhZGVyID0gJHBhbmVsX2hlYWRlcnMuZXEobWV0aG9kUGFyYW0pO1xuICAgICAgICBpZiAoJGN1cnJfaGVhZGVyLmxlbmd0aCAmJlxuICAgICAgICAgICAgKG1ldGhvZE5hbWUgPT09ICdvcGVuJyB8fFxuICAgICAgICAgICAgKG1ldGhvZE5hbWUgPT09ICdjbG9zZScgJiZcbiAgICAgICAgICAgICRjdXJyX2hlYWRlci5oYXNDbGFzcygnYWN0aXZlJykpKSkge1xuICAgICAgICAgIGNvbGxhcHNpYmxlT3BlbigkY3Vycl9oZWFkZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuXG4gICAgICByZW1vdmVFdmVudEhhbmRsZXJzKCk7XG5cblxuICAgICAgLy8gQWRkIGNsaWNrIGhhbmRsZXIgdG8gb25seSBkaXJlY3QgY29sbGFwc2libGUgaGVhZGVyIGNoaWxkcmVuXG4gICAgICAkdGhpcy5vbignY2xpY2suY29sbGFwc2UnLCAnPiBsaSA+IC5jb2xsYXBzaWJsZS1oZWFkZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gJChlLnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGlzQ2hpbGRyZW5PZlBhbmVsSGVhZGVyKGVsZW1lbnQpKSB7XG4gICAgICAgICAgZWxlbWVudCA9IGdldFBhbmVsSGVhZGVyKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGFwc2libGVPcGVuKGVsZW1lbnQpO1xuICAgICAgfSk7XG5cblxuICAgICAgLy8gT3BlbiBmaXJzdCBhY3RpdmVcbiAgICAgIGlmIChvcHRpb25zLmFjY29yZGlvbiB8fCBjb2xsYXBzaWJsZV90eXBlID09PSBcImFjY29yZGlvblwiIHx8IGNvbGxhcHNpYmxlX3R5cGUgPT09IHVuZGVmaW5lZCkgeyAvLyBIYW5kbGUgQWNjb3JkaW9uXG4gICAgICAgIGNvbGxhcHNpYmxlT3BlbigkcGFuZWxfaGVhZGVycy5maWx0ZXIoJy5hY3RpdmUnKS5maXJzdCgpLCB0cnVlKTtcblxuICAgICAgfSBlbHNlIHsgLy8gSGFuZGxlIEV4cGFuZGFibGVzXG4gICAgICAgICRwYW5lbF9oZWFkZXJzLmZpbHRlcignLmFjdGl2ZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY29sbGFwc2libGVPcGVuKCQodGhpcyksIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLmNvbGxhcHNpYmxlJykuY29sbGFwc2libGUoKTtcbiAgfSk7XG59KCBqUXVlcnkgKSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgLy8gQWRkIHBvc2liaWxpdHkgdG8gc2Nyb2xsIHRvIHNlbGVjdGVkIG9wdGlvblxuICAvLyB1c2VmdWxsIGZvciBzZWxlY3QgZm9yIGV4YW1wbGVcbiAgJC5mbi5zY3JvbGxUbyA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAkKHRoaXMpLnNjcm9sbFRvcCgkKHRoaXMpLnNjcm9sbFRvcCgpIC0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKGVsZW0pLm9mZnNldCgpLnRvcCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgJC5mbi5kcm9wZG93biA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgaW5EdXJhdGlvbjogMzAwLFxuICAgICAgb3V0RHVyYXRpb246IDIyNSxcbiAgICAgIGNvbnN0cmFpbldpZHRoOiB0cnVlLCAvLyBDb25zdHJhaW5zIHdpZHRoIG9mIGRyb3Bkb3duIHRvIHRoZSBhY3RpdmF0b3JcbiAgICAgIGhvdmVyOiBmYWxzZSxcbiAgICAgIGd1dHRlcjogMCwgLy8gU3BhY2luZyBmcm9tIGVkZ2VcbiAgICAgIGJlbG93T3JpZ2luOiBmYWxzZSxcbiAgICAgIGFsaWdubWVudDogJ2xlZnQnLFxuICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmYWxzZVxuICAgIH07XG5cbiAgICAvLyBPcGVuIGRyb3Bkb3duLlxuICAgIGlmIChvcHRpb25zID09PSBcIm9wZW5cIikge1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ29wZW4nKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENsb3NlIGRyb3Bkb3duLlxuICAgIGlmIChvcHRpb25zID09PSBcImNsb3NlXCIpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgb3JpZ2luID0gJCh0aGlzKTtcbiAgICAgIHZhciBjdXJyX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgICAvLyBEcm9wZG93biBtZW51XG4gICAgICB2YXIgYWN0aXZhdGVzID0gJChcIiNcIisgb3JpZ2luLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJykpO1xuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKCkge1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2luZHVyYXRpb24nKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5pbkR1cmF0aW9uID0gb3JpZ2luLmRhdGEoJ2luZHVyYXRpb24nKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdvdXRkdXJhdGlvbicpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgY3Vycl9vcHRpb25zLm91dER1cmF0aW9uID0gb3JpZ2luLmRhdGEoJ291dGR1cmF0aW9uJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnY29uc3RyYWlud2lkdGgnKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5jb25zdHJhaW5XaWR0aCA9IG9yaWdpbi5kYXRhKCdjb25zdHJhaW53aWR0aCcpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2hvdmVyJykgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICBjdXJyX29wdGlvbnMuaG92ZXIgPSBvcmlnaW4uZGF0YSgnaG92ZXInKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdndXR0ZXInKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5ndXR0ZXIgPSBvcmlnaW4uZGF0YSgnZ3V0dGVyJyk7XG4gICAgICAgIGlmIChvcmlnaW4uZGF0YSgnYmVsb3dvcmlnaW4nKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5iZWxvd09yaWdpbiA9IG9yaWdpbi5kYXRhKCdiZWxvd29yaWdpbicpO1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2FsaWdubWVudCcpICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgY3Vycl9vcHRpb25zLmFsaWdubWVudCA9IG9yaWdpbi5kYXRhKCdhbGlnbm1lbnQnKTtcbiAgICAgICAgaWYgKG9yaWdpbi5kYXRhKCdzdG9wcHJvcGFnYXRpb24nKSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGN1cnJfb3B0aW9ucy5zdG9wUHJvcGFnYXRpb24gPSBvcmlnaW4uZGF0YSgnc3RvcHByb3BhZ2F0aW9uJyk7XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZU9wdGlvbnMoKTtcblxuICAgICAgLy8gQXR0YWNoIGRyb3Bkb3duIHRvIGl0cyBhY3RpdmF0b3JcbiAgICAgIG9yaWdpbi5hZnRlcihhY3RpdmF0ZXMpO1xuXG4gICAgICAvKlxuICAgICAgICBIZWxwZXIgZnVuY3Rpb24gdG8gcG9zaXRpb24gYW5kIHJlc2l6ZSBkcm9wZG93bi5cbiAgICAgICAgVXNlZCBpbiBob3ZlciBhbmQgY2xpY2sgaGFuZGxlci5cbiAgICAgICovXG4gICAgICBmdW5jdGlvbiBwbGFjZURyb3Bkb3duKGV2ZW50VHlwZSkge1xuICAgICAgICAvLyBDaGVjayBmb3Igc2ltdWx0YW5lb3VzIGZvY3VzIGFuZCBjbGljayBldmVudHMuXG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdmb2N1cycpIHtcbiAgICAgICAgICBpc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaHRtbCBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgdXBkYXRlT3B0aW9ucygpO1xuXG4gICAgICAgIC8vIFNldCBEcm9wZG93biBzdGF0ZVxuICAgICAgICBhY3RpdmF0ZXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBvcmlnaW4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIHZhciBvcmlnaW5XaWR0aCA9IG9yaWdpblswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblxuICAgICAgICAvLyBDb25zdHJhaW4gd2lkdGhcbiAgICAgICAgaWYgKGN1cnJfb3B0aW9ucy5jb25zdHJhaW5XaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFjdGl2YXRlcy5jc3MoJ3dpZHRoJywgb3JpZ2luV2lkdGgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0aXZhdGVzLmNzcygnd2hpdGUtc3BhY2UnLCAnbm93cmFwJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPZmZzY3JlZW4gZGV0ZWN0aW9uXG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciBvcmlnaW5IZWlnaHQgPSBvcmlnaW4uaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSBvcmlnaW4ub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgdmFyIG9mZnNldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciBjdXJyQWxpZ25tZW50ID0gY3Vycl9vcHRpb25zLmFsaWdubWVudDtcbiAgICAgICAgdmFyIGd1dHRlclNwYWNpbmcgPSAwO1xuICAgICAgICB2YXIgbGVmdFBvc2l0aW9uID0gMDtcblxuICAgICAgICAvLyBCZWxvdyBPcmlnaW5cbiAgICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgaWYgKGN1cnJfb3B0aW9ucy5iZWxvd09yaWdpbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gb3JpZ2luSGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNjcm9sbGluZyBwb3NpdGlvbmVkIGNvbnRhaW5lci5cbiAgICAgICAgdmFyIHNjcm9sbFlPZmZzZXQgPSAwO1xuICAgICAgICB2YXIgc2Nyb2xsWE9mZnNldCA9IDA7XG4gICAgICAgIHZhciB3cmFwcGVyID0gb3JpZ2luLnBhcmVudCgpO1xuICAgICAgICBpZiAoIXdyYXBwZXIuaXMoJ2JvZHknKSkge1xuICAgICAgICAgIGlmICh3cmFwcGVyWzBdLnNjcm9sbEhlaWdodCA+IHdyYXBwZXJbMF0uY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgICAgICBzY3JvbGxZT2Zmc2V0ID0gd3JhcHBlclswXS5zY3JvbGxUb3A7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3cmFwcGVyWzBdLnNjcm9sbFdpZHRoID4gd3JhcHBlclswXS5jbGllbnRXaWR0aCkge1xuICAgICAgICAgICAgc2Nyb2xsWE9mZnNldCA9IHdyYXBwZXJbMF0uc2Nyb2xsTGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChvZmZzZXRMZWZ0ICsgYWN0aXZhdGVzLmlubmVyV2lkdGgoKSA+ICQod2luZG93KS53aWR0aCgpKSB7XG4gICAgICAgICAgLy8gRHJvcGRvd24gZ29lcyBwYXN0IHNjcmVlbiBvbiByaWdodCwgZm9yY2UgcmlnaHQgYWxpZ25tZW50XG4gICAgICAgICAgY3VyckFsaWdubWVudCA9ICdyaWdodCc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXRMZWZ0IC0gYWN0aXZhdGVzLmlubmVyV2lkdGgoKSArIG9yaWdpbi5pbm5lcldpZHRoKCkgPCAwKSB7XG4gICAgICAgICAgLy8gRHJvcGRvd24gZ29lcyBwYXN0IHNjcmVlbiBvbiBsZWZ0LCBmb3JjZSBsZWZ0IGFsaWdubWVudFxuICAgICAgICAgIGN1cnJBbGlnbm1lbnQgPSAnbGVmdCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVmVydGljYWwgYm90dG9tIG9mZnNjcmVlbiBkZXRlY3Rpb25cbiAgICAgICAgaWYgKG9mZnNldFRvcCArIGFjdGl2YXRlcy5pbm5lckhlaWdodCgpID4gd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgLy8gSWYgZ29pbmcgdXB3YXJkcyBzdGlsbCBnb2VzIG9mZnNjcmVlbiwganVzdCBjcm9wIGhlaWdodCBvZiBkcm9wZG93bi5cbiAgICAgICAgICBpZiAob2Zmc2V0VG9wICsgb3JpZ2luSGVpZ2h0IC0gYWN0aXZhdGVzLmlubmVySGVpZ2h0KCkgPCAwKSB7XG4gICAgICAgICAgICB2YXIgYWRqdXN0ZWRIZWlnaHQgPSB3aW5kb3dIZWlnaHQgLSBvZmZzZXRUb3AgLSB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgICAgIGFjdGl2YXRlcy5jc3MoJ21heC1oZWlnaHQnLCBhZGp1c3RlZEhlaWdodCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZsb3cgdXB3YXJkcy5cbiAgICAgICAgICAgIGlmICghdmVydGljYWxPZmZzZXQpIHtcbiAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgKz0gb3JpZ2luSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgLT0gYWN0aXZhdGVzLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIGVkZ2UgYWxpZ25tZW50XG4gICAgICAgIGlmIChjdXJyQWxpZ25tZW50ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBndXR0ZXJTcGFjaW5nID0gY3Vycl9vcHRpb25zLmd1dHRlcjtcbiAgICAgICAgICBsZWZ0UG9zaXRpb24gPSBvcmlnaW4ucG9zaXRpb24oKS5sZWZ0ICsgZ3V0dGVyU3BhY2luZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjdXJyQWxpZ25tZW50ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgLy8gTWF0ZXJpYWwgaWNvbnMgZml4XG4gICAgICAgICAgYWN0aXZhdGVzXG4gICAgICAgICAgICAuc3RvcCh0cnVlLCB0cnVlKVxuICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICB2YXIgb2Zmc2V0UmlnaHQgPSBvcmlnaW4ucG9zaXRpb24oKS5sZWZ0ICsgb3JpZ2luV2lkdGggLSBhY3RpdmF0ZXMud2lkdGgoKTtcbiAgICAgICAgICBndXR0ZXJTcGFjaW5nID0gLWN1cnJfb3B0aW9ucy5ndXR0ZXI7XG4gICAgICAgICAgbGVmdFBvc2l0aW9uID0gIG9mZnNldFJpZ2h0ICsgZ3V0dGVyU3BhY2luZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvc2l0aW9uIGRyb3Bkb3duXG4gICAgICAgIGFjdGl2YXRlcy5jc3Moe1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogb3JpZ2luLnBvc2l0aW9uKCkudG9wICsgdmVydGljYWxPZmZzZXQgKyBzY3JvbGxZT2Zmc2V0LFxuICAgICAgICAgIGxlZnQ6IGxlZnRQb3NpdGlvbiArIHNjcm9sbFhPZmZzZXRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2hvdyBkcm9wZG93blxuICAgICAgICBhY3RpdmF0ZXNcbiAgICAgICAgICAuc2xpZGVEb3duKHtcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBjdXJyX29wdGlvbnMuaW5EdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICQodGhpcykuY3NzKCdoZWlnaHQnLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYW5pbWF0ZSgge29wYWNpdHk6IDF9LCB7cXVldWU6IGZhbHNlLCBkdXJhdGlvbjogY3Vycl9vcHRpb25zLmluRHVyYXRpb24sIGVhc2luZzogJ2Vhc2VPdXRTaW5lJ30pO1xuXG4gICAgICAgIC8vIEFkZCBjbGljayBjbG9zZSBoYW5kbGVyIHRvIGRvY3VtZW50XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrLicrIGFjdGl2YXRlcy5hdHRyKCdpZCcpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLicrIGFjdGl2YXRlcy5hdHRyKCdpZCcpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhpZGVEcm9wZG93bigpIHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNpbXVsdGFuZW91cyBmb2N1cyBhbmQgY2xpY2sgZXZlbnRzLlxuICAgICAgICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgYWN0aXZhdGVzLmZhZGVPdXQoY3Vycl9vcHRpb25zLm91dER1cmF0aW9uKTtcbiAgICAgICAgYWN0aXZhdGVzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgb3JpZ2luLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay4nKyBhY3RpdmF0ZXMuYXR0cignaWQnKSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGFjdGl2YXRlcy5jc3MoJ21heC1oZWlnaHQnLCAnJyk7IH0sIGN1cnJfb3B0aW9ucy5vdXREdXJhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIEhvdmVyXG4gICAgICBpZiAoY3Vycl9vcHRpb25zLmhvdmVyKSB7XG4gICAgICAgIHZhciBvcGVuID0gZmFsc2U7XG4gICAgICAgIG9yaWdpbi5vZmYoJ2NsaWNrLicgKyBvcmlnaW4uYXR0cignaWQnKSk7XG4gICAgICAgIC8vIEhvdmVyIGhhbmRsZXIgdG8gc2hvdyBkcm9wZG93blxuICAgICAgICBvcmlnaW4ub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKXsgLy8gTW91c2Ugb3ZlclxuICAgICAgICAgIGlmIChvcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcGxhY2VEcm9wZG93bigpO1xuICAgICAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgb3JpZ2luLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgLy8gSWYgaG92ZXIgb24gb3JpZ2luIHRoZW4gdG8gc29tZXRoaW5nIG90aGVyIHRoYW4gZHJvcGRvd24gY29udGVudCwgdGhlbiBjbG9zZVxuICAgICAgICAgIHZhciB0b0VsID0gZS50b0VsZW1lbnQgfHwgZS5yZWxhdGVkVGFyZ2V0OyAvLyBhZGRlZCBicm93c2VyIGNvbXBhdGliaWxpdHkgZm9yIHRhcmdldCBlbGVtZW50XG4gICAgICAgICAgaWYoISQodG9FbCkuY2xvc2VzdCgnLmRyb3Bkb3duLWNvbnRlbnQnKS5pcyhhY3RpdmF0ZXMpKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgb3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWN0aXZhdGVzLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7IC8vIE1vdXNlIG91dFxuICAgICAgICAgIHZhciB0b0VsID0gZS50b0VsZW1lbnQgfHwgZS5yZWxhdGVkVGFyZ2V0O1xuICAgICAgICAgIGlmKCEkKHRvRWwpLmNsb3Nlc3QoJy5kcm9wZG93bi1idXR0b24nKS5pcyhvcmlnaW4pKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZXMuc3RvcCh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgb3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2xpY2tcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENsaWNrIGhhbmRsZXIgdG8gc2hvdyBkcm9wZG93blxuICAgICAgICBvcmlnaW4ub2ZmKCdjbGljay4nICsgb3JpZ2luLmF0dHIoJ2lkJykpO1xuICAgICAgICBvcmlnaW4ub24oJ2NsaWNrLicrb3JpZ2luLmF0dHIoJ2lkJyksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGlmICghaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICBpZiAoIG9yaWdpblswXSA9PSBlLmN1cnJlbnRUYXJnZXQgJiZcbiAgICAgICAgICAgICAgICAgIW9yaWdpbi5oYXNDbGFzcygnYWN0aXZlJykgJiZcbiAgICAgICAgICAgICAgICAgKCQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bi1jb250ZW50JykubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnRzIGJ1dHRvbiBjbGljayBmcm9tIG1vdmluZyB3aW5kb3dcbiAgICAgICAgICAgICAgaWYgKGN1cnJfb3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBsYWNlRHJvcGRvd24oJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBvcmlnaW4gaXMgY2xpY2tlZCBhbmQgbWVudSBpcyBvcGVuLCBjbG9zZSBtZW51XG4gICAgICAgICAgICBlbHNlIGlmIChvcmlnaW4uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgIGhpZGVEcm9wZG93bigpO1xuICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrLicrIGFjdGl2YXRlcy5hdHRyKCdpZCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICB9IC8vIEVuZCBlbHNlXG5cbiAgICAgIC8vIExpc3RlbiB0byBvcGVuIGFuZCBjbG9zZSBldmVudCAtIHVzZWZ1bCBmb3Igc2VsZWN0IGNvbXBvbmVudFxuICAgICAgb3JpZ2luLm9uKCdvcGVuJywgZnVuY3Rpb24oZSwgZXZlbnRUeXBlKSB7XG4gICAgICAgIHBsYWNlRHJvcGRvd24oZXZlbnRUeXBlKTtcbiAgICAgIH0pO1xuICAgICAgb3JpZ2luLm9uKCdjbG9zZScsIGhpZGVEcm9wZG93bik7XG5cblxuICAgIH0pO1xuICB9OyAvLyBFbmQgZHJvcGRvd24gcGx1Z2luXG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcuZHJvcGRvd24tYnV0dG9uJykuZHJvcGRvd24oKTtcbiAgfSk7XG59KCBqUXVlcnkgKSk7XG4iLCIoZnVuY3Rpb24oJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgbGV0IF9kZWZhdWx0cyA9IHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgaW5EdXJhdGlvbjogMjUwLFxuICAgIG91dER1cmF0aW9uOiAyNTAsXG4gICAgcmVhZHk6IHVuZGVmaW5lZCxcbiAgICBjb21wbGV0ZTogdW5kZWZpbmVkLFxuICAgIGRpc21pc3NpYmxlOiB0cnVlLFxuICAgIHN0YXJ0aW5nVG9wOiAnNCUnLFxuICAgIGVuZGluZ1RvcDogJzEwJSdcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG4gIGNsYXNzIE1vZGFsIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgTW9kYWwgaW5zdGFuY2UgYW5kIHNldCB1cCBvdmVybGF5XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICRlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoJGVsLCBvcHRpb25zKSB7XG5cbiAgICAgIC8vIElmIGV4aXN0cywgZGVzdHJveSBhbmQgcmVpbml0aWFsaXplXG4gICAgICBpZiAoISEkZWxbMF0uTV9Nb2RhbCkge1xuICAgICAgICAkZWxbMF0uTV9Nb2RhbC5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGpRdWVyeSBlbGVtZW50XG4gICAgICAgKiBAdHlwZSB7alF1ZXJ5fVxuICAgICAgICovXG4gICAgICB0aGlzLiRlbCA9ICRlbDtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgbW9kYWxcbiAgICAgICAqIEBtZW1iZXIgTW9kYWwjb3B0aW9uc1xuICAgICAgICogQHByb3Age051bWJlcn0gW29wYWNpdHk9MC41XSAtIE9wYWNpdHkgb2YgdGhlIG1vZGFsIG92ZXJsYXlcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFtpbkR1cmF0aW9uPTI1MF0gLSBMZW5ndGggaW4gbXMgb2YgZW50ZXIgdHJhbnNpdGlvblxuICAgICAgICogQHByb3Age051bWJlcn0gW291dER1cmF0aW9uPTI1MF0gLSBMZW5ndGggaW4gbXMgb2YgZXhpdCB0cmFuc2l0aW9uXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IHJlYWR5IC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gbW9kYWwgaXMgZmluaXNoZWQgZW50ZXJpbmdcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gY29tcGxldGUgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBtb2RhbCBpcyBmaW5pc2hlZCBleGl0aW5nXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gW2Rpc21pc3NpYmxlPXRydWVdIC0gQWxsb3cgbW9kYWwgdG8gYmUgZGlzbWlzc2VkIGJ5IGtleWJvYXJkIG9yIG92ZXJsYXkgY2xpY2tcbiAgICAgICAqIEBwcm9wIHtTdHJpbmd9IFtzdGFydGluZ1RvcD0nNCUnXSAtIHN0YXJ0aW5nVG9wXG4gICAgICAgKiBAcHJvcCB7U3RyaW5nfSBbZW5kaW5nVG9wPScxMCUnXSAtIGVuZGluZ1RvcFxuICAgICAgICovXG4gICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTW9kYWwuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2NyaWJlcyBvcGVuL2Nsb3NlIHN0YXRlIG9mIG1vZGFsXG4gICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgdGhpcy4kZWxbMF0uTV9Nb2RhbCA9IHRoaXM7XG4gICAgICB0aGlzLmlkID0gJGVsLmF0dHIoJ2lkJyk7XG4gICAgICB0aGlzLm9wZW5pbmdUcmlnZ2VyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJtb2RhbC1vdmVybGF5XCI+PC9kaXY+Jyk7XG5cbiAgICAgIE1vZGFsLl9pbmNyZW1lbnQrKztcbiAgICAgIE1vZGFsLl9jb3VudCsrO1xuICAgICAgdGhpcy4kb3ZlcmxheVswXS5zdHlsZS56SW5kZXggPSAxMDAwICsgTW9kYWwuX2luY3JlbWVudCAqIDI7XG4gICAgICB0aGlzLiRlbFswXS5zdHlsZS56SW5kZXggPSAxMDAwICsgTW9kYWwuX2luY3JlbWVudCAqIDIgKyAxO1xuICAgICAgdGhpcy5zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdCgkZWxzLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJyID0gW107XG4gICAgICAkZWxzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGFyci5wdXNoKG5ldyBNb2RhbCgkKHRoaXMpLCBvcHRpb25zKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICB0aGlzLiRlbFswXS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgIGlmICghIXRoaXMuJG92ZXJsYXlbMF0ucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLiRvdmVybGF5WzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kb3ZlcmxheVswXSk7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbFswXS5NX01vZGFsID0gdW5kZWZpbmVkO1xuICAgICAgTW9kYWwuX2NvdW50LS07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgKi9cbiAgICBzZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICB0aGlzLmhhbmRsZU92ZXJsYXlDbGlja0JvdW5kID0gdGhpcy5oYW5kbGVPdmVybGF5Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlTW9kYWxDbG9zZUNsaWNrQm91bmQgPSB0aGlzLmhhbmRsZU1vZGFsQ2xvc2VDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICBpZiAoTW9kYWwuX2NvdW50ID09PSAxKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVUcmlnZ2VyQ2xpY2spO1xuICAgICAgfVxuICAgICAgdGhpcy4kb3ZlcmxheVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3ZlcmxheUNsaWNrQm91bmQpO1xuICAgICAgdGhpcy4kZWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU1vZGFsQ2xvc2VDbGlja0JvdW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgaWYgKE1vZGFsLl9jb3VudCA9PT0gMCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlVHJpZ2dlckNsaWNrKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJG92ZXJsYXlbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU92ZXJsYXlDbGlja0JvdW5kKTtcbiAgICAgIHRoaXMuJGVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVNb2RhbENsb3NlQ2xpY2tCb3VuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIFRyaWdnZXIgQ2xpY2tcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgaGFuZGxlVHJpZ2dlckNsaWNrKGUpIHtcbiAgICAgIGxldCAkdHJpZ2dlciA9ICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubW9kYWwtdHJpZ2dlcicpO1xuICAgICAgaWYgKGUudGFyZ2V0ICYmICR0cmlnZ2VyLmxlbmd0aCkge1xuICAgICAgICBsZXQgbW9kYWxJZCA9ICR0cmlnZ2VyWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBpZiAobW9kYWxJZCkge1xuICAgICAgICAgIG1vZGFsSWQgPSBtb2RhbElkLnNsaWNlKDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZGFsSWQgPSAkdHJpZ2dlclswXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vZGFsSW5zdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbElkKS5NX01vZGFsO1xuICAgICAgICBpZiAobW9kYWxJbnN0YW5jZSkge1xuICAgICAgICAgIG1vZGFsSW5zdGFuY2Uub3BlbigkdHJpZ2dlcik7XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBPdmVybGF5IENsaWNrXG4gICAgICovXG4gICAgaGFuZGxlT3ZlcmxheUNsaWNrKCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNtaXNzaWJsZSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIE1vZGFsIENsb3NlIENsaWNrXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGhhbmRsZU1vZGFsQ2xvc2VDbGljayhlKSB7XG4gICAgICBsZXQgJGNsb3NlVHJpZ2dlciA9ICAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubW9kYWwtY2xvc2UnKTtcbiAgICAgIGlmIChlLnRhcmdldCAmJiAkY2xvc2VUcmlnZ2VyLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIEtleWRvd25cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgaGFuZGxlS2V5ZG93bihlKSB7XG4gICAgICAvLyBFU0Mga2V5XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNyAmJiB0aGlzLm9wdGlvbnMuZGlzbWlzc2libGUpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGUgaW4gbW9kYWxcbiAgICAgKi9cbiAgICBhbmltYXRlSW4oKSB7XG4gICAgICAvLyBTZXQgaW5pdGlhbCBzdHlsZXNcbiAgICAgICQuZXh0ZW5kKHRoaXMuJGVsWzBdLnN0eWxlLCB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pO1xuICAgICAgJC5leHRlbmQodGhpcy4kb3ZlcmxheVswXS5zdHlsZSwge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9KTtcblxuICAgICAgLy8gQW5pbWF0ZSBvdmVybGF5XG4gICAgICBWZWwoXG4gICAgICAgIHRoaXMuJG92ZXJsYXlbMF0sXG4gICAgICAgIHtvcGFjaXR5OiB0aGlzLm9wdGlvbnMub3BhY2l0eX0sXG4gICAgICAgIHtkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzZTogJ2Vhc2VPdXRDdWJpYyd9XG4gICAgICApO1xuXG5cbiAgICAgIC8vIERlZmluZSBtb2RhbCBhbmltYXRpb24gb3B0aW9uc1xuICAgICAgbGV0IGVudGVyVmVsb2NpdHlPcHRpb25zID0ge1xuICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgZWFzZTogJ2Vhc2VPdXRDdWJpYycsXG4gICAgICAgIC8vIEhhbmRsZSBtb2RhbCByZWFkeSBjYWxsYmFja1xuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5vcHRpb25zLnJlYWR5KSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlYWR5LmNhbGwodGhpcywgdGhpcy4kZWwsIHRoaXMub3BlbmluZ1RyaWdnZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gQm90dG9tIHNoZWV0IGFuaW1hdGlvblxuICAgICAgaWYgKHRoaXMuJGVsWzBdLmNsYXNzTGlzdC5jb250YWlucygnYm90dG9tLXNoZWV0JykpIHtcbiAgICAgICAgVmVsKFxuICAgICAgICAgIHRoaXMuJGVsWzBdLFxuICAgICAgICAgIHtib3R0b206IDAsIG9wYWNpdHk6IDF9LFxuICAgICAgICAgIGVudGVyVmVsb2NpdHlPcHRpb25zKTtcblxuICAgICAgLy8gTm9ybWFsIG1vZGFsIGFuaW1hdGlvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgVmVsLmhvb2sodGhpcy4kZWxbMF0sICdzY2FsZVgnLCAwLjcpO1xuICAgICAgICB0aGlzLiRlbFswXS5zdHlsZS50b3AgPSB0aGlzLm9wdGlvbnMuc3RhcnRpbmdUb3A7XG4gICAgICAgIFZlbChcbiAgICAgICAgICB0aGlzLiRlbFswXSxcbiAgICAgICAgICB7dG9wOiB0aGlzLm9wdGlvbnMuZW5kaW5nVG9wLCBvcGFjaXR5OiAxLCBzY2FsZVg6IDF9LFxuICAgICAgICAgIGVudGVyVmVsb2NpdHlPcHRpb25zXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW5pbWF0ZSBvdXQgbW9kYWxcbiAgICAgKi9cbiAgICBhbmltYXRlT3V0KCkge1xuICAgICAgLy8gQW5pbWF0ZSBvdmVybGF5XG4gICAgICBWZWwoXG4gICAgICAgIHRoaXMuJG92ZXJsYXlbMF0sXG4gICAgICAgIHsgb3BhY2l0eTogMH0sXG4gICAgICAgIHtkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2U6ICdlYXNlT3V0UXVhcnQnfVxuICAgICAgKTtcblxuICAgICAgLy8gRGVmaW5lIG1vZGFsIGFuaW1hdGlvbiBvcHRpb25zXG4gICAgICB2YXIgZXhpdFZlbG9jaXR5T3B0aW9ucyA9IHtcbiAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICBlYXNlOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgLy8gSGFuZGxlIG1vZGFsIHJlYWR5IGNhbGxiYWNrXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy4kZWxbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAvLyBDYWxsIGNvbXBsZXRlIGNhbGxiYWNrXG4gICAgICAgICAgaWYgKHR5cGVvZih0aGlzLm9wdGlvbnMuY29tcGxldGUpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29tcGxldGUuY2FsbCh0aGlzLCB0aGlzLiRlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJG92ZXJsYXlbMF0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIEJvdHRvbSBzaGVldCBhbmltYXRpb25cbiAgICAgIGlmICh0aGlzLiRlbFswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2JvdHRvbS1zaGVldCcpKSB7XG4gICAgICAgIFZlbChcbiAgICAgICAgICB0aGlzLiRlbFswXSxcbiAgICAgICAgICB7Ym90dG9tOiAnLTEwMCUnLCBvcGFjaXR5OiAwfSxcbiAgICAgICAgICBleGl0VmVsb2NpdHlPcHRpb25zXG4gICAgICAgICk7XG5cbiAgICAgIC8vIE5vcm1hbCBtb2RhbCBhbmltYXRpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFZlbChcbiAgICAgICAgICB0aGlzLiRlbFswXSxcbiAgICAgICAgICB7dG9wOiB0aGlzLm9wdGlvbnMuc3RhcnRpbmdUb3AsIG9wYWNpdHk6IDAsIHNjYWxlWDogMC43fSxcbiAgICAgICAgICBleGl0VmVsb2NpdHlPcHRpb25zXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIE1vZGFsXG4gICAgICogQHBhcmFtIHtqUXVlcnl9IFskdHJpZ2dlcl1cbiAgICAgKi9cbiAgICBvcGVuKCR0cmlnZ2VyKSB7XG4gICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB0aGlzLiRlbFswXS5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKHRoaXMuJG92ZXJsYXlbMF0pO1xuXG4gICAgICAvLyBTZXQgb3BlbmluZyB0cmlnZ2VyLCB1bmRlZmluZWQgaW5kaWNhdGVzIG1vZGFsIHdhcyBvcGVuZWQgYnkgamF2YXNjcmlwdFxuICAgICAgdGhpcy5vcGVuaW5nVHJpZ2dlciA9ICEhJHRyaWdnZXIgPyAkdHJpZ2dlciA6IHVuZGVmaW5lZDtcblxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRpc21pc3NpYmxlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5ZG93bkJvdW5kID0gdGhpcy5oYW5kbGVLZXlkb3duLmJpbmQodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25Cb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5pbWF0ZUluKCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIE1vZGFsXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuJGVsWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRpc21pc3NpYmxlKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd25Cb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dCgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgTW9kYWxcbiAgICovXG4gIE1vZGFsLl9pbmNyZW1lbnQgPSAwO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBNb2RhbFxuICAgKi9cbiAgTW9kYWwuX2NvdW50ID0gMDtcblxuICB3aW5kb3cuTWF0ZXJpYWxpemUuTW9kYWwgPSBNb2RhbDtcblxuICAkLmZuLm1vZGFsID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gICAgLy8gQ2FsbCBwbHVnaW4gbWV0aG9kIGlmIHZhbGlkIG1ldGhvZCBuYW1lIGlzIHBhc3NlZCBpblxuICAgIGlmIChNb2RhbC5wcm90b3R5cGVbbWV0aG9kT3JPcHRpb25zXSkge1xuICAgICAgLy8gR2V0dGVyIG1ldGhvZHNcbiAgICAgIGlmIChtZXRob2RPck9wdGlvbnMuc2xpY2UoMCwzKSA9PT0gJ2dldCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3QoKVswXS5NX01vZGFsW21ldGhvZE9yT3B0aW9uc10oKTtcblxuICAgICAgLy8gVm9pZCBtZXRob2RzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuTV9Nb2RhbFttZXRob2RPck9wdGlvbnNdKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBwbHVnaW4gaWYgb3B0aW9ucyBvciBubyBhcmd1bWVudCBpcyBwYXNzZWQgaW5cbiAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZE9yT3B0aW9ucyApIHtcbiAgICAgIE1vZGFsLmluaXQodGhpcywgYXJndW1lbnRzWzBdKTtcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgLy8gUmV0dXJuIGVycm9yIGlmIGFuIHVucmVjb2duaXplZCAgbWV0aG9kIG5hbWUgaXMgcGFzc2VkIGluXG4gICAgfSBlbHNlIHtcbiAgICAgICQuZXJyb3IoYE1ldGhvZCAke21ldGhvZE9yT3B0aW9uc30gZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5Lm1vZGFsYCk7XG4gICAgfVxuICB9O1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgJC5mbi5tYXRlcmlhbGJveCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdpbml0aWFsaXplZCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5pdGlhbGl6ZWQnKTtcblxuICAgICAgdmFyIG92ZXJsYXlBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHZhciBkb25lQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIHZhciBpbkR1cmF0aW9uID0gMjc1O1xuICAgICAgdmFyIG91dER1cmF0aW9uID0gMjAwO1xuICAgICAgdmFyIG9yaWdpbiA9ICQodGhpcyk7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSAkKCc8ZGl2PjwvZGl2PicpLmFkZENsYXNzKCdtYXRlcmlhbC1wbGFjZWhvbGRlcicpO1xuICAgICAgdmFyIG9yaWdpbmFsV2lkdGggPSAwO1xuICAgICAgdmFyIG9yaWdpbmFsSGVpZ2h0ID0gMDtcbiAgICAgIHZhciBhbmNlc3RvcnNDaGFuZ2VkO1xuICAgICAgdmFyIGFuY2VzdG9yO1xuICAgICAgdmFyIG9yaWdpbklubGluZVN0eWxlcyA9IG9yaWdpbi5hdHRyKCdzdHlsZScpO1xuICAgICAgb3JpZ2luLndyYXAocGxhY2Vob2xkZXIpO1xuXG5cbiAgICAgIC8vIFN0YXJ0IGNsaWNrIGhhbmRsZXJcbiAgICAgIG9yaWdpbi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgb3JpZ2luYWxXaWR0aCA9IG9yaWdpbi53aWR0aCgpO1xuICAgICAgICB2YXIgb3JpZ2luYWxIZWlnaHQgPSBvcmlnaW4uaGVpZ2h0KCk7XG5cblxuICAgICAgICAvLyBJZiBhbHJlYWR5IG1vZGFsLCByZXR1cm4gdG8gb3JpZ2luYWxcbiAgICAgICAgaWYgKGRvbmVBbmltYXRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuVG9PcmlnaW5hbCgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvdmVybGF5QWN0aXZlICYmIGRvbmVBbmltYXRpbmc9PT10cnVlKSB7XG4gICAgICAgICAgcmV0dXJuVG9PcmlnaW5hbCgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gU2V0IHN0YXRlc1xuICAgICAgICBkb25lQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIG9yaWdpbi5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIG92ZXJsYXlBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIC8vIFNldCBwb3NpdGlvbmluZyBmb3IgcGxhY2Vob2xkZXJcbiAgICAgICAgcGxhY2Vob2xkZXIuY3NzKHtcbiAgICAgICAgICB3aWR0aDogcGxhY2Vob2xkZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBwbGFjZWhvbGRlclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQsXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRmluZCBhbmNlc3RvciB3aXRoIG92ZXJmbG93OiBoaWRkZW47IGFuZCByZW1vdmUgaXRcbiAgICAgICAgYW5jZXN0b3JzQ2hhbmdlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgYW5jZXN0b3IgPSBwbGFjZWhvbGRlclswXS5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICB3aGlsZSAoYW5jZXN0b3IgIT09IG51bGwgJiYgISQoYW5jZXN0b3IpLmlzKGRvY3VtZW50KSkge1xuICAgICAgICAgIHZhciBjdXJyID0gJChhbmNlc3Rvcik7XG4gICAgICAgICAgaWYgKGN1cnIuY3NzKCdvdmVyZmxvdycpICE9PSAndmlzaWJsZScpIHtcbiAgICAgICAgICAgIGN1cnIuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICBpZiAoYW5jZXN0b3JzQ2hhbmdlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGFuY2VzdG9yc0NoYW5nZWQgPSBjdXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGFuY2VzdG9yc0NoYW5nZWQgPSBhbmNlc3RvcnNDaGFuZ2VkLmFkZChjdXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGNzcyBvbiBvcmlnaW5cbiAgICAgICAgb3JpZ2luLmNzcyh7XG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgJ3otaW5kZXgnOiAxMDAwLFxuICAgICAgICAgICd3aWxsLWNoYW5nZSc6ICdsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQnXG4gICAgICAgIH0pXG4gICAgICAgIC5kYXRhKCd3aWR0aCcsIG9yaWdpbmFsV2lkdGgpXG4gICAgICAgIC5kYXRhKCdoZWlnaHQnLCBvcmlnaW5hbEhlaWdodCk7XG5cbiAgICAgICAgLy8gQWRkIG92ZXJsYXlcbiAgICAgICAgdmFyIG92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwibWF0ZXJpYWxib3gtb3ZlcmxheVwiPjwvZGl2PicpXG4gICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChkb25lQW5pbWF0aW5nID09PSB0cnVlKVxuICAgICAgICAgICAgcmV0dXJuVG9PcmlnaW5hbCgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFB1dCBiZWZvcmUgaW4gb3JpZ2luIGltYWdlIHRvIHByZXNlcnZlIHotaW5kZXggbGF5ZXJpbmcuXG4gICAgICAgIG9yaWdpbi5iZWZvcmUob3ZlcmxheSk7XG5cbiAgICAgICAgLy8gU2V0IGRpbWVuc2lvbnMgaWYgbmVlZGVkXG4gICAgICAgIHZhciBvdmVybGF5T2Zmc2V0ID0gb3ZlcmxheVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgb3ZlcmxheS5jc3Moe1xuICAgICAgICAgIHdpZHRoOiB3aW5kb3dXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHdpbmRvd0hlaWdodCxcbiAgICAgICAgICBsZWZ0OiAtMSAqIG92ZXJsYXlPZmZzZXQubGVmdCxcbiAgICAgICAgICB0b3A6IC0xICogb3ZlcmxheU9mZnNldC50b3BcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBBbmltYXRlIE92ZXJsYXlcbiAgICAgICAgb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7ZHVyYXRpb246IGluRHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSApO1xuXG4gICAgICAgIC8vIEFkZCBhbmQgYW5pbWF0ZSBjYXB0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICBpZiAob3JpZ2luLmRhdGEoJ2NhcHRpb24nKSAhPT0gXCJcIikge1xuICAgICAgICAgIHZhciAkcGhvdG9fY2FwdGlvbiA9ICQoJzxkaXYgY2xhc3M9XCJtYXRlcmlhbGJveC1jYXB0aW9uXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgJHBob3RvX2NhcHRpb24udGV4dChvcmlnaW4uZGF0YSgnY2FwdGlvbicpKTtcbiAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRwaG90b19jYXB0aW9uKTtcbiAgICAgICAgICAkcGhvdG9fY2FwdGlvbi5jc3MoeyBcImRpc3BsYXlcIjogXCJpbmxpbmVcIiB9KTtcbiAgICAgICAgICAkcGhvdG9fY2FwdGlvbi52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtkdXJhdGlvbjogaW5EdXJhdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2l6ZSBJbWFnZVxuICAgICAgICB2YXIgcmF0aW8gPSAwO1xuICAgICAgICB2YXIgd2lkdGhQZXJjZW50ID0gb3JpZ2luYWxXaWR0aCAvIHdpbmRvd1dpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0UGVyY2VudCA9IG9yaWdpbmFsSGVpZ2h0IC8gd2luZG93SGVpZ2h0O1xuICAgICAgICB2YXIgbmV3V2lkdGggPSAwO1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gMDtcblxuICAgICAgICBpZiAod2lkdGhQZXJjZW50ID4gaGVpZ2h0UGVyY2VudCkge1xuICAgICAgICAgIHJhdGlvID0gb3JpZ2luYWxIZWlnaHQgLyBvcmlnaW5hbFdpZHRoO1xuICAgICAgICAgIG5ld1dpZHRoID0gd2luZG93V2lkdGggKiAwLjk7XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93V2lkdGggKiAwLjkgKiByYXRpbztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByYXRpbyA9IG9yaWdpbmFsV2lkdGggLyBvcmlnaW5hbEhlaWdodDtcbiAgICAgICAgICBuZXdXaWR0aCA9ICh3aW5kb3dIZWlnaHQgKiAwLjkpICogcmF0aW87XG4gICAgICAgICAgbmV3SGVpZ2h0ID0gd2luZG93SGVpZ2h0ICogMC45O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5pbWF0ZSBpbWFnZSArIHNldCB6LWluZGV4XG4gICAgICAgIGlmKG9yaWdpbi5oYXNDbGFzcygncmVzcG9uc2l2ZS1pbWcnKSkge1xuICAgICAgICAgIG9yaWdpbi52ZWxvY2l0eSh7J21heC13aWR0aCc6IG5ld1dpZHRoLCAnd2lkdGgnOiBvcmlnaW5hbFdpZHRofSwge2R1cmF0aW9uOiAwLCBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgb3JpZ2luLmNzcyh7bGVmdDogMCwgdG9wOiAwfSlcbiAgICAgICAgICAgICAgLnZlbG9jaXR5KFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogbmV3SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgICAgICAgICAgICAgbGVmdDogJChkb2N1bWVudCkuc2Nyb2xsTGVmdCgpICsgd2luZG93V2lkdGgvMiAtIG9yaWdpbi5wYXJlbnQoJy5tYXRlcmlhbC1wbGFjZWhvbGRlcicpLm9mZnNldCgpLmxlZnQgLSBuZXdXaWR0aC8yLFxuICAgICAgICAgICAgICAgICAgdG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIHdpbmRvd0hlaWdodC8yIC0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJykub2Zmc2V0KCkudG9wIC0gbmV3SGVpZ2h0LyAyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogaW5EdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe2RvbmVBbmltYXRpbmcgPSB0cnVlO31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IC8vIEVuZCBDb21wbGV0ZVxuICAgICAgICAgIH0pOyAvLyBFbmQgVmVsb2NpdHlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvcmlnaW4uY3NzKCdsZWZ0JywgMClcbiAgICAgICAgICAuY3NzKCd0b3AnLCAwKVxuICAgICAgICAgIC52ZWxvY2l0eShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBuZXdIZWlnaHQsXG4gICAgICAgICAgICAgIHdpZHRoOiBuZXdXaWR0aCxcbiAgICAgICAgICAgICAgbGVmdDogJChkb2N1bWVudCkuc2Nyb2xsTGVmdCgpICsgd2luZG93V2lkdGgvMiAtIG9yaWdpbi5wYXJlbnQoJy5tYXRlcmlhbC1wbGFjZWhvbGRlcicpLm9mZnNldCgpLmxlZnQgLSBuZXdXaWR0aC8yLFxuICAgICAgICAgICAgICB0b3A6ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgd2luZG93SGVpZ2h0LzIgLSBvcmlnaW4ucGFyZW50KCcubWF0ZXJpYWwtcGxhY2Vob2xkZXInKS5vZmZzZXQoKS50b3AgLSBuZXdIZWlnaHQvIDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBpbkR1cmF0aW9uLFxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7ZG9uZUFuaW1hdGluZyA9IHRydWU7fVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTsgLy8gRW5kIFZlbG9jaXR5XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgRXhpdCB0cmlnZ2Vyc1xuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5tYXRlcmlhbGJveCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChvdmVybGF5QWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm5Ub09yaWdpbmFsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5tYXRlcmlhbGJveCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChvdmVybGF5QWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm5Ub09yaWdpbmFsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAubWF0ZXJpYWxib3gnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgLy8gRVNDIGtleVxuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3ICYmXG4gICAgICAgICAgICAgIGRvbmVBbmltYXRpbmcgPT09IHRydWUgJiZcbiAgICAgICAgICAgICAgb3ZlcmxheUFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuVG9PcmlnaW5hbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH0pOyAvLyBFbmQgY2xpY2sgaGFuZGxlclxuXG5cbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgbW9kYWxlZCBpbWFnZSB0byB0aGUgb3JpZ2luYWwgc3BvdFxuICAgICAgZnVuY3Rpb24gcmV0dXJuVG9PcmlnaW5hbCgpIHtcblxuICAgICAgICBkb25lQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gb3JpZ2luLnBhcmVudCgnLm1hdGVyaWFsLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgb3JpZ2luYWxXaWR0aCA9IG9yaWdpbi5kYXRhKCd3aWR0aCcpO1xuICAgICAgICB2YXIgb3JpZ2luYWxIZWlnaHQgPSBvcmlnaW4uZGF0YSgnaGVpZ2h0Jyk7XG5cbiAgICAgICAgb3JpZ2luLnZlbG9jaXR5KFwic3RvcFwiLCB0cnVlKTtcbiAgICAgICAgJCgnI21hdGVyaWFsYm94LW92ZXJsYXknKS52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgICAgICQoJy5tYXRlcmlhbGJveC1jYXB0aW9uJykudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuXG4gICAgICAgIC8vIGRpc2FibGUgZXhpdCBoYW5kbGVyc1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzY3JvbGwubWF0ZXJpYWxib3gnKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cC5tYXRlcmlhbGJveCcpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUubWF0ZXJpYWxib3gnKTtcblxuICAgICAgICAkKCcjbWF0ZXJpYWxib3gtb3ZlcmxheScpLnZlbG9jaXR5KHtvcGFjaXR5OiAwfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiBvdXREdXJhdGlvbiwgLy8gRGVsYXkgcHJldmVudHMgYW5pbWF0aW9uIG92ZXJsYXBwaW5nXG4gICAgICAgICAgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBSZW1vdmUgT3ZlcmxheVxuICAgICAgICAgICAgb3ZlcmxheUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBJbWFnZVxuICAgICAgICBvcmlnaW4udmVsb2NpdHkoXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IG9yaWdpbmFsV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG9yaWdpbmFsSGVpZ2h0LFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZHVyYXRpb246IG91dER1cmF0aW9uLFxuICAgICAgICAgICAgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyLmNzcyh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgICAgICAgICAgIHRvcDogJycsXG4gICAgICAgICAgICAgICAgbGVmdDogJydcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgb3JpZ2luLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgIG9yaWdpbi5hdHRyKCdzdHlsZScsIG9yaWdpbklubGluZVN0eWxlcyk7XG5cbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIGNsYXNzXG4gICAgICAgICAgICAgIG9yaWdpbi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIGRvbmVBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIC8vIFJlbW92ZSBvdmVyZmxvdyBvdmVycmlkZXMgb24gYW5jZXN0b3JzXG4gICAgICAgICAgICAgIGlmIChhbmNlc3RvcnNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgYW5jZXN0b3JzQ2hhbmdlZC5jc3MoJ292ZXJmbG93JywgJycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFJlbW92ZSBDYXB0aW9uICsgcmVzZXQgY3NzIHNldHRpbmdzIG9uIGltYWdlXG4gICAgICAgICQoJy5tYXRlcmlhbGJveC1jYXB0aW9uJykudmVsb2NpdHkoe29wYWNpdHk6IDB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IG91dER1cmF0aW9uLCAvLyBEZWxheSBwcmV2ZW50cyBhbmltYXRpb24gb3ZlcmxhcHBpbmdcbiAgICAgICAgICBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLm1hdGVyaWFsYm94ZWQnKS5tYXRlcmlhbGJveCgpO1xuICB9KTtcblxufSggalF1ZXJ5ICkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgJC5mbi5wYXJhbGxheCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgLy8gUGFyYWxsYXggU2NyaXB0c1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLmFkZENsYXNzKCdwYXJhbGxheCcpO1xuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVQYXJhbGxheChpbml0aWFsKSB7XG4gICAgICAgIHZhciBjb250YWluZXJfaGVpZ2h0O1xuICAgICAgICBpZiAod2luZG93X3dpZHRoIDwgNjAxKSB7XG4gICAgICAgICAgY29udGFpbmVyX2hlaWdodCA9ICgkdGhpcy5oZWlnaHQoKSA+IDApID8gJHRoaXMuaGVpZ2h0KCkgOiAkdGhpcy5jaGlsZHJlbihcImltZ1wiKS5oZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXJfaGVpZ2h0ID0gKCR0aGlzLmhlaWdodCgpID4gMCkgPyAkdGhpcy5oZWlnaHQoKSA6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgJGltZyA9ICR0aGlzLmNoaWxkcmVuKFwiaW1nXCIpLmZpcnN0KCk7XG4gICAgICAgIHZhciBpbWdfaGVpZ2h0ID0gJGltZy5oZWlnaHQoKTtcbiAgICAgICAgdmFyIHBhcmFsbGF4X2Rpc3QgPSBpbWdfaGVpZ2h0IC0gY29udGFpbmVyX2hlaWdodDtcbiAgICAgICAgdmFyIGJvdHRvbSA9ICR0aGlzLm9mZnNldCgpLnRvcCArIGNvbnRhaW5lcl9oZWlnaHQ7XG4gICAgICAgIHZhciB0b3AgPSAkdGhpcy5vZmZzZXQoKS50b3A7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciB3aW5kb3dCb3R0b20gPSBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQ7XG4gICAgICAgIHZhciBwZXJjZW50U2Nyb2xsZWQgPSAod2luZG93Qm90dG9tIC0gdG9wKSAvIChjb250YWluZXJfaGVpZ2h0ICsgd2luZG93SGVpZ2h0KTtcbiAgICAgICAgdmFyIHBhcmFsbGF4ID0gTWF0aC5yb3VuZCgocGFyYWxsYXhfZGlzdCAqIHBlcmNlbnRTY3JvbGxlZCkpO1xuXG4gICAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgICAgJGltZy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGJvdHRvbSA+IHNjcm9sbFRvcCkgJiYgKHRvcCA8IChzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQpKSkge1xuICAgICAgICAgICRpbWcuY3NzKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNEKC01MCUsXCIgKyBwYXJhbGxheCArIFwicHgsIDApXCIpO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgLy8gV2FpdCBmb3IgaW1hZ2UgbG9hZFxuICAgICAgJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikub25lKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgodHJ1ZSk7XG4gICAgICB9KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wbGV0ZSkgJCh0aGlzKS50cmlnZ2VyKFwibG9hZFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvd193aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICB1cGRhdGVQYXJhbGxheChmYWxzZSk7XG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gIH07XG59KCBqUXVlcnkgKSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBvblNob3c6IG51bGwsXG4gICAgICAgIHN3aXBlYWJsZTogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmVUaHJlc2hvbGQ6IEluZmluaXR5LCAvLyBicmVha3BvaW50IGZvciBzd2lwZWFibGVcbiAgICAgIH07XG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgdmFyIG5hbWVzcGFjZSA9IE1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nKCQodGhpcykpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgdmFyIHVuaXF1ZU5hbWVzcGFjZSA9IG5hbWVzcGFjZStpO1xuXG4gICAgICAvLyBGb3IgZWFjaCBzZXQgb2YgdGFicywgd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mXG4gICAgICAvLyB3aGljaCB0YWIgaXMgYWN0aXZlIGFuZCBpdHMgYXNzb2NpYXRlZCBjb250ZW50XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgIHdpbmRvd193aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICB2YXIgJGFjdGl2ZSwgJGNvbnRlbnQsICRsaW5rcyA9ICR0aGlzLmZpbmQoJ2xpLnRhYiBhJyksXG4gICAgICAgICAgJHRhYnNfd2lkdGggPSAkdGhpcy53aWR0aCgpLFxuICAgICAgICAgICR0YWJzX2NvbnRlbnQgPSAkKCksXG4gICAgICAgICAgJHRhYnNfd3JhcHBlcixcbiAgICAgICAgICAkdGFiX3dpZHRoID0gTWF0aC5tYXgoJHRhYnNfd2lkdGgsICR0aGlzWzBdLnNjcm9sbFdpZHRoKSAvICRsaW5rcy5sZW5ndGgsXG4gICAgICAgICAgJGluZGljYXRvcixcbiAgICAgICAgICBpbmRleCA9IHByZXZfaW5kZXggPSAwLFxuICAgICAgICAgIGNsaWNrZWQgPSBmYWxzZSxcbiAgICAgICAgICBjbGlja2VkVGltZW91dCxcbiAgICAgICAgICB0cmFuc2l0aW9uID0gMzAwO1xuXG5cbiAgICAgIC8vIEZpbmRzIHJpZ2h0IGF0dHJpYnV0ZSBmb3IgaW5kaWNhdG9yIGJhc2VkIG9uIGFjdGl2ZSB0YWIuXG4gICAgICAvLyBlbDogalF1ZXJ5IE9iamVjdFxuICAgICAgICB2YXIgY2FsY1JpZ2h0UG9zID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCR0YWJzX3dpZHRoIC0gZWwucG9zaXRpb24oKS5sZWZ0IC0gZWxbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSAkdGhpcy5zY3JvbGxMZWZ0KCkpO1xuICAgICAgfTtcblxuICAgICAgLy8gRmluZHMgbGVmdCBhdHRyaWJ1dGUgZm9yIGluZGljYXRvciBiYXNlZCBvbiBhY3RpdmUgdGFiLlxuICAgICAgLy8gZWw6IGpRdWVyeSBPYmplY3RcbiAgICAgIHZhciBjYWxjTGVmdFBvcyA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGVsLnBvc2l0aW9uKCkubGVmdCArICR0aGlzLnNjcm9sbExlZnQoKSk7XG4gICAgICB9O1xuXG4gICAgICAvLyBBbmltYXRlcyBJbmRpY2F0b3IgdG8gYWN0aXZlIHRhYi5cbiAgICAgIC8vIHByZXZfaW5kZXg6IE51bWJlclxuICAgICAgdmFyIGFuaW1hdGVJbmRpY2F0b3IgPSBmdW5jdGlvbihwcmV2X2luZGV4KSB7XG4gICAgICAgIGlmICgoaW5kZXggLSBwcmV2X2luZGV4KSA+PSAwKSB7XG4gICAgICAgICAgJGluZGljYXRvci52ZWxvY2l0eSh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSwgeyBkdXJhdGlvbjogdHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAkaW5kaWNhdG9yLnZlbG9jaXR5KHtcImxlZnRcIjogY2FsY0xlZnRQb3MoJGFjdGl2ZSkgfSwge2R1cmF0aW9uOiB0cmFuc2l0aW9uLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJywgZGVsYXk6IDkwfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkaW5kaWNhdG9yLnZlbG9jaXR5KHtcImxlZnRcIjogY2FsY0xlZnRQb3MoJGFjdGl2ZSkgfSwgeyBkdXJhdGlvbjogdHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAkaW5kaWNhdG9yLnZlbG9jaXR5KHtcInJpZ2h0XCI6IGNhbGNSaWdodFBvcygkYWN0aXZlKSB9LCB7ZHVyYXRpb246IHRyYW5zaXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLCBkZWxheTogOTB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gQ2hhbmdlIHN3aXBlYWJsZSBhY2NvcmRpbmcgdG8gcmVzcG9uc2l2ZSB0aHJlc2hvbGRcbiAgICAgIGlmIChvcHRpb25zLnN3aXBlYWJsZSkge1xuICAgICAgICBpZiAod2luZG93X3dpZHRoID4gb3B0aW9ucy5yZXNwb25zaXZlVGhyZXNob2xkKSB7XG4gICAgICAgICAgb3B0aW9ucy5zd2lwZWFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIC8vIElmIHRoZSBsb2NhdGlvbi5oYXNoIG1hdGNoZXMgb25lIG9mIHRoZSBsaW5rcywgdXNlIHRoYXQgYXMgdGhlIGFjdGl2ZSB0YWIuXG4gICAgICAkYWN0aXZlID0gJCgkbGlua3MuZmlsdGVyKCdbaHJlZj1cIicrbG9jYXRpb24uaGFzaCsnXCJdJykpO1xuXG4gICAgICAvLyBJZiBubyBtYXRjaCBpcyBmb3VuZCwgdXNlIHRoZSBmaXJzdCBsaW5rIG9yIGFueSB3aXRoIGNsYXNzICdhY3RpdmUnIGFzIHRoZSBpbml0aWFsIGFjdGl2ZSB0YWIuXG4gICAgICBpZiAoJGFjdGl2ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgJGFjdGl2ZSA9ICQodGhpcykuZmluZCgnbGkudGFiIGEuYWN0aXZlJykuZmlyc3QoKTtcbiAgICAgIH1cbiAgICAgIGlmICgkYWN0aXZlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkYWN0aXZlID0gJCh0aGlzKS5maW5kKCdsaS50YWIgYScpLmZpcnN0KCk7XG4gICAgICB9XG5cbiAgICAgICRhY3RpdmUuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgaW5kZXggPSAkbGlua3MuaW5kZXgoJGFjdGl2ZSk7XG4gICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCRhY3RpdmVbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAkY29udGVudCA9ICQoJGFjdGl2ZVswXS5oYXNoKTtcbiAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICAvLyBhcHBlbmQgaW5kaWNhdG9yIHRoZW4gc2V0IGluZGljYXRvciB3aWR0aCB0byB0YWIgd2lkdGhcbiAgICAgIGlmICghJHRoaXMuZmluZCgnLmluZGljYXRvcicpLmxlbmd0aCkge1xuICAgICAgICAkdGhpcy5hcHBlbmQoJzxsaSBjbGFzcz1cImluZGljYXRvclwiPjwvbGk+Jyk7XG4gICAgICB9XG4gICAgICAkaW5kaWNhdG9yID0gJHRoaXMuZmluZCgnLmluZGljYXRvcicpO1xuXG4gICAgICAvLyB3ZSBtYWtlIHN1cmUgdGhhdCB0aGUgaW5kaWNhdG9yIGlzIGF0IHRoZSBlbmQgb2YgdGhlIHRhYnNcbiAgICAgICR0aGlzLmFwcGVuZCgkaW5kaWNhdG9yKTtcblxuICAgICAgaWYgKCR0aGlzLmlzKFwiOnZpc2libGVcIikpIHtcbiAgICAgICAgLy8gJGluZGljYXRvci5jc3Moe1wicmlnaHRcIjogJHRhYnNfd2lkdGggLSAoKGluZGV4ICsgMSkgKiAkdGFiX3dpZHRoKX0pO1xuICAgICAgICAvLyAkaW5kaWNhdG9yLmNzcyh7XCJsZWZ0XCI6IGluZGV4ICogJHRhYl93aWR0aH0pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRpbmRpY2F0b3IuY3NzKHtcInJpZ2h0XCI6IGNhbGNSaWdodFBvcygkYWN0aXZlKSB9KTtcbiAgICAgICAgICAkaW5kaWNhdG9yLmNzcyh7XCJsZWZ0XCI6IGNhbGNMZWZ0UG9zKCRhY3RpdmUpIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS50YWJzLScrdW5pcXVlTmFtZXNwYWNlKS5vbigncmVzaXplLnRhYnMtJyt1bmlxdWVOYW1lc3BhY2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHRhYnNfd2lkdGggPSAkdGhpcy53aWR0aCgpO1xuICAgICAgICAkdGFiX3dpZHRoID0gTWF0aC5tYXgoJHRhYnNfd2lkdGgsICR0aGlzWzBdLnNjcm9sbFdpZHRoKSAvICRsaW5rcy5sZW5ndGg7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCR0YWJfd2lkdGggIT09IDAgJiYgJHRhYnNfd2lkdGggIT09IDApIHtcbiAgICAgICAgICAkaW5kaWNhdG9yLmNzcyh7XCJyaWdodFwiOiBjYWxjUmlnaHRQb3MoJGFjdGl2ZSkgfSk7XG4gICAgICAgICAgJGluZGljYXRvci5jc3Moe1wibGVmdFwiOiBjYWxjTGVmdFBvcygkYWN0aXZlKSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEluaXRpYWxpemUgVGFicyBDb250ZW50LlxuICAgICAgaWYgKG9wdGlvbnMuc3dpcGVhYmxlKSB7XG4gICAgICAgIC8vIFRPRE86IER1cGxpY2F0ZSBjYWxscyB3aXRoIHN3aXBlYWJsZT8gaGFuZGxlIG11bHRpcGxlIGRpdiB3cmFwcGluZy5cbiAgICAgICAgJGxpbmtzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciAkY3Vycl9jb250ZW50ID0gJChNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpO1xuICAgICAgICAgICRjdXJyX2NvbnRlbnQuYWRkQ2xhc3MoJ2Nhcm91c2VsLWl0ZW0nKTtcbiAgICAgICAgICAkdGFic19jb250ZW50ID0gJHRhYnNfY29udGVudC5hZGQoJGN1cnJfY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkdGFic193cmFwcGVyID0gJHRhYnNfY29udGVudC53cmFwQWxsKCc8ZGl2IGNsYXNzPVwidGFicy1jb250ZW50IGNhcm91c2VsXCI+PC9kaXY+Jyk7XG4gICAgICAgICR0YWJzX2NvbnRlbnQuY3NzKCdkaXNwbGF5JywgJycpO1xuICAgICAgICAkKCcudGFicy1jb250ZW50LmNhcm91c2VsJykuY2Fyb3VzZWwoe1xuICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgICAgb25DeWNsZVRvOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgdmFyIHByZXZfaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgaW5kZXggPSAkdGFic193cmFwcGVyLmluZGV4KGl0ZW0pO1xuICAgICAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgJGFjdGl2ZSA9ICRsaW5rcy5lcShpbmRleCk7XG4gICAgICAgICAgICAgICRhY3RpdmUuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICBhbmltYXRlSW5kaWNhdG9yKHByZXZfaW5kZXgpO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMub25TaG93KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vblNob3cuY2FsbCgkdGhpc1swXSwgJGNvbnRlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIaWRlIHRoZSByZW1haW5pbmcgY29udGVudFxuICAgICAgICAkbGlua3Mubm90KCRhY3RpdmUpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQoTWF0ZXJpYWxpemUuZXNjYXBlSGFzaCh0aGlzLmhhc2gpKS5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG5cbiAgICAgIC8vIEJpbmQgdGhlIGNsaWNrIGV2ZW50IGhhbmRsZXJcbiAgICAgICR0aGlzLm9mZignY2xpY2sudGFicycpLm9uKCdjbGljay50YWJzJywgJ2EnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFjdCBhcyByZWd1bGFyIGxpbmsgaWYgdGFyZ2V0IGF0dHJpYnV0ZSBpcyBzcGVjaWZpZWQuXG4gICAgICAgIGlmICghISQodGhpcykuYXR0cihcInRhcmdldFwiKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAkdGFic193aWR0aCA9ICR0aGlzLndpZHRoKCk7XG4gICAgICAgICR0YWJfd2lkdGggPSBNYXRoLm1heCgkdGFic193aWR0aCwgJHRoaXNbMF0uc2Nyb2xsV2lkdGgpIC8gJGxpbmtzLmxlbmd0aDtcblxuICAgICAgICAvLyBNYWtlIHRoZSBvbGQgdGFiIGluYWN0aXZlLlxuICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdmFyICRvbGRDb250ZW50ID0gJGNvbnRlbnRcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHZhcmlhYmxlcyB3aXRoIHRoZSBuZXcgbGluayBhbmQgY29udGVudFxuICAgICAgICAkYWN0aXZlID0gJCh0aGlzKTtcbiAgICAgICAgJGNvbnRlbnQgPSAkKE1hdGVyaWFsaXplLmVzY2FwZUhhc2godGhpcy5oYXNoKSk7XG4gICAgICAgICRsaW5rcyA9ICR0aGlzLmZpbmQoJ2xpLnRhYiBhJyk7XG4gICAgICAgIHZhciBhY3RpdmVSZWN0ID0gJGFjdGl2ZS5wb3NpdGlvbigpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHRhYiBhY3RpdmUuXG4gICAgICAgICRhY3RpdmUuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBwcmV2X2luZGV4ID0gaW5kZXg7XG4gICAgICAgIGluZGV4ID0gJGxpbmtzLmluZGV4KCQodGhpcykpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoYW5nZSB1cmwgdG8gY3VycmVudCB0YWJcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSAkYWN0aXZlLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAvLyBTd2FwIGNvbnRlbnRcbiAgICAgICAgaWYgKG9wdGlvbnMuc3dpcGVhYmxlKSB7XG4gICAgICAgICAgaWYgKCR0YWJzX2NvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAkdGFic19jb250ZW50LmNhcm91c2VsKCdzZXQnLCBpbmRleCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vblNob3cpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9uU2hvdy5jYWxsKCR0aGlzWzBdLCAkY29udGVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoJGNvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgJGNvbnRlbnQuc2hvdygpO1xuICAgICAgICAgICAgJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uU2hvdykgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBvcHRpb25zLm9uU2hvdy5jYWxsKHRoaXMsICRjb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJG9sZENvbnRlbnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAhJG9sZENvbnRlbnQuaXMoJGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAkb2xkQ29udGVudC5oaWRlKCk7XG4gICAgICAgICAgICAkb2xkQ29udGVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzZXQgY2xpY2tlZCBzdGF0ZVxuICAgICAgICBjbGlja2VkVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgY2xpY2tlZCA9IGZhbHNlOyB9LCB0cmFuc2l0aW9uKTtcblxuICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yXG4gICAgICAgIGFuaW1hdGVJbmRpY2F0b3IocHJldl9pbmRleCk7XG5cbiAgICAgICAgLy8gUHJldmVudCB0aGUgYW5jaG9yJ3MgZGVmYXVsdCBjbGljayBhY3Rpb25cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB9LFxuICAgIHNlbGVjdF90YWIgOiBmdW5jdGlvbiggaWQgKSB7XG4gICAgICB0aGlzLmZpbmQoJ2FbaHJlZj1cIiMnICsgaWQgKyAnXCJdJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG4gIH07XG5cbiAgJC5mbi50YWJzID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gICAgaWYgKCBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgISBtZXRob2RPck9wdGlvbnMgKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhYnMnICk7XG4gICAgfVxuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgndWwudGFicycpLnRhYnMoKTtcbiAgfSk7XG59KCBqUXVlcnkgKSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICAkLmZuLnRvb2x0aXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIHRpbWVvdXQgPSBudWxsLFxuICAgICAgbWFyZ2luID0gNTtcblxuICAgICAgLy8gRGVmYXVsdHNcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgZGVsYXk6IDM1MCxcbiAgICAgICAgdG9vbHRpcDogJycsXG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgaHRtbDogZmFsc2VcbiAgICAgIH07XG5cbiAgICAgIC8vIFJlbW92ZSB0b29sdGlwIGZyb20gdGhlIGFjdGl2YXRvclxuICAgICAgaWYgKG9wdGlvbnMgPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJyMnICsgJCh0aGlzKS5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnKSkucmVtb3ZlKCk7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLXRvb2x0aXAtaWQnKTtcbiAgICAgICAgICAkKHRoaXMpLm9mZignbW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdG9vbHRpcElkID0gTWF0ZXJpYWxpemUuZ3VpZCgpO1xuICAgICAgICB2YXIgb3JpZ2luID0gJCh0aGlzKTtcblxuICAgICAgICAvLyBEZXN0cm95IG9sZCB0b29sdGlwXG4gICAgICAgIGlmIChvcmlnaW4uYXR0cignZGF0YS10b29sdGlwLWlkJykpIHtcbiAgICAgICAgICAkKCcjJyArIG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAtaWQnKSkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnaW4uYXR0cignZGF0YS10b29sdGlwLWlkJywgdG9vbHRpcElkKTtcblxuICAgICAgICAvLyBHZXQgYXR0cmlidXRlcy5cbiAgICAgICAgdmFyIGFsbG93SHRtbCxcbiAgICAgICAgICAgIHRvb2x0aXBEZWxheSxcbiAgICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbixcbiAgICAgICAgICAgIHRvb2x0aXBUZXh0LFxuICAgICAgICAgICAgdG9vbHRpcEVsLFxuICAgICAgICAgICAgYmFja2Ryb3A7XG4gICAgICAgIHZhciBzZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYWxsb3dIdG1sID0gb3JpZ2luLmF0dHIoJ2RhdGEtaHRtbCcpID8gb3JpZ2luLmF0dHIoJ2RhdGEtaHRtbCcpID09PSAndHJ1ZScgOiBvcHRpb25zLmh0bWw7XG4gICAgICAgICAgdG9vbHRpcERlbGF5ID0gb3JpZ2luLmF0dHIoJ2RhdGEtZGVsYXknKTtcbiAgICAgICAgICB0b29sdGlwRGVsYXkgPSAodG9vbHRpcERlbGF5ID09PSB1bmRlZmluZWQgfHwgdG9vbHRpcERlbGF5ID09PSAnJykgP1xuICAgICAgICAgICAgICBvcHRpb25zLmRlbGF5IDogdG9vbHRpcERlbGF5O1xuICAgICAgICAgIHRvb2x0aXBQb3NpdGlvbiA9IG9yaWdpbi5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgdG9vbHRpcFBvc2l0aW9uID0gKHRvb2x0aXBQb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHRvb2x0aXBQb3NpdGlvbiA9PT0gJycpID9cbiAgICAgICAgICAgICAgb3B0aW9ucy5wb3NpdGlvbiA6IHRvb2x0aXBQb3NpdGlvbjtcbiAgICAgICAgICB0b29sdGlwVGV4dCA9IG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAnKTtcbiAgICAgICAgICB0b29sdGlwVGV4dCA9ICh0b29sdGlwVGV4dCA9PT0gdW5kZWZpbmVkIHx8IHRvb2x0aXBUZXh0ID09PSAnJykgP1xuICAgICAgICAgICAgICBvcHRpb25zLnRvb2x0aXAgOiB0b29sdGlwVGV4dDtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0QXR0cmlidXRlcygpO1xuXG4gICAgICAgIHZhciByZW5kZXJUb29sdGlwRWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdG9vbHRpcCA9ICQoJzxkaXYgY2xhc3M9XCJtYXRlcmlhbC10b29sdGlwXCI+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAvLyBDcmVhdGUgVGV4dCBzcGFuXG4gICAgICAgICAgaWYgKGFsbG93SHRtbCkge1xuICAgICAgICAgICAgdG9vbHRpcFRleHQgPSAkKCc8c3Bhbj48L3NwYW4+JykuaHRtbCh0b29sdGlwVGV4dCk7XG4gICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdG9vbHRpcFRleHQgPSAkKCc8c3Bhbj48L3NwYW4+JykudGV4dCh0b29sdGlwVGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ3JlYXRlIHRvb2x0aXBcbiAgICAgICAgICB0b29sdGlwLmFwcGVuZCh0b29sdGlwVGV4dClcbiAgICAgICAgICAgIC5hcHBlbmRUbygkKCdib2R5JykpXG4gICAgICAgICAgICAuYXR0cignaWQnLCB0b29sdGlwSWQpO1xuXG4gICAgICAgICAgLy8gQ3JlYXRlIGJhY2tkcm9wXG4gICAgICAgICAgYmFja2Ryb3AgPSAkKCc8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIj48L2Rpdj4nKTtcbiAgICAgICAgICBiYWNrZHJvcC5hcHBlbmRUbyh0b29sdGlwKTtcbiAgICAgICAgICByZXR1cm4gdG9vbHRpcDtcbiAgICAgICAgfTtcbiAgICAgICAgdG9vbHRpcEVsID0gcmVuZGVyVG9vbHRpcEVsKCk7XG5cbiAgICAgICAgLy8gRGVzdHJveSBwcmV2aW91c2x5IGJpbmRlZCBldmVudHNcbiAgICAgICAgb3JpZ2luLm9mZignbW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcCcpO1xuICAgICAgICAvLyBNb3VzZSBJblxuICAgICAgICB2YXIgc3RhcnRlZCA9IGZhbHNlLCB0aW1lb3V0UmVmO1xuICAgICAgICBvcmlnaW4ub24oeydtb3VzZWVudGVyLnRvb2x0aXAnOiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgdmFyIHNob3dUb29sdGlwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSgnc3RvcCcpO1xuICAgICAgICAgICAgYmFja2Ryb3AudmVsb2NpdHkoJ3N0b3AnKTtcbiAgICAgICAgICAgIHRvb2x0aXBFbC5jc3MoeyB2aXNpYmlsaXR5OiAndmlzaWJsZScsIGxlZnQ6ICcwcHgnLCB0b3A6ICcwcHgnIH0pO1xuXG4gICAgICAgICAgICAvLyBUb29sdGlwIHBvc2l0aW9uaW5nXG4gICAgICAgICAgICB2YXIgb3JpZ2luV2lkdGggPSBvcmlnaW4ub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIG9yaWdpbkhlaWdodCA9IG9yaWdpbi5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHRvb2x0aXBIZWlnaHQgPSB0b29sdGlwRWwub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciB0b29sdGlwV2lkdGggPSB0b29sdGlwRWwub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50ID0gJzBweCc7XG4gICAgICAgICAgICB2YXIgdG9vbHRpcEhvcml6b250YWxNb3ZlbWVudCA9ICcwcHgnO1xuICAgICAgICAgICAgdmFyIGJhY2tkcm9wT2Zmc2V0V2lkdGggPSBiYWNrZHJvcFswXS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHZhciBiYWNrZHJvcE9mZnNldEhlaWdodCA9IGJhY2tkcm9wWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHZhciBzY2FsZVhGYWN0b3IgPSA4O1xuICAgICAgICAgICAgdmFyIHNjYWxlWUZhY3RvciA9IDg7XG4gICAgICAgICAgICB2YXIgc2NhbGVGYWN0b3IgPSAwO1xuICAgICAgICAgICAgdmFyIHRhcmdldFRvcCwgdGFyZ2V0TGVmdCwgbmV3Q29vcmRpbmF0ZXM7XG5cbiAgICAgICAgICAgIGlmICh0b29sdGlwUG9zaXRpb24gPT09IFwidG9wXCIpIHtcbiAgICAgICAgICAgICAgLy8gVG9wIFBvc2l0aW9uXG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgLSB0b29sdGlwSGVpZ2h0IC0gbWFyZ2luO1xuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQgKyBvcmlnaW5XaWR0aC8yIC0gdG9vbHRpcFdpZHRoLzI7XG4gICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XG4gICAgICAgICAgICAgIHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50ID0gJy0xMHB4JztcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNHB4IDE0cHggMCAwJyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJScsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0LFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICh0b29sdGlwV2lkdGgvMikgLSAoYmFja2Ryb3BPZmZzZXRXaWR0aC8yKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExlZnQgUG9zaXRpb25cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb2x0aXBQb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0VG9wID0gb3JpZ2luLm9mZnNldCgpLnRvcCArIG9yaWdpbkhlaWdodC8yIC0gdG9vbHRpcEhlaWdodC8yO1xuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIG9yaWdpbi5vZmZzZXQoKS5sZWZ0IC0gdG9vbHRpcFdpZHRoIC0gbWFyZ2luO1xuICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xuXG4gICAgICAgICAgICAgIHRvb2x0aXBIb3Jpem9udGFsTW92ZW1lbnQgPSAnLTEwcHgnO1xuICAgICAgICAgICAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgICAgICAgICAgIHRvcDogJy03cHgnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTRweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTRweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTRweCAwIDAgMTRweCcsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnOTUlIDUwJScsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0LzIsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdG9vbHRpcFdpZHRoXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmlnaHQgUG9zaXRpb25cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb2x0aXBQb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgKyBvcmlnaW5IZWlnaHQvMiAtIHRvb2x0aXBIZWlnaHQvMjtcbiAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0ICsgb3JpZ2luV2lkdGggKyBtYXJnaW47XG4gICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XG5cbiAgICAgICAgICAgICAgdG9vbHRpcEhvcml6b250YWxNb3ZlbWVudCA9ICcrMTBweCc7XG4gICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgICAgICAgdG9wOiAnLTdweCcsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE0cHgnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzE0cHgnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzAgMTRweCAxNHB4IDAnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzUlIDUwJScsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0LzIsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzBweCdcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQm90dG9tIFBvc2l0aW9uXG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgKyBvcmlnaW4ub3V0ZXJIZWlnaHQoKSArIG1hcmdpbjtcbiAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0ICsgb3JpZ2luV2lkdGgvMiAtIHRvb2x0aXBXaWR0aC8yO1xuICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xuICAgICAgICAgICAgICB0b29sdGlwVmVydGljYWxNb3ZlbWVudCA9ICcrMTBweCc7XG4gICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogKHRvb2x0aXBXaWR0aC8yKSAtIChiYWNrZHJvcE9mZnNldFdpZHRoLzIpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgdG9vcHRpcCBjc3MgcGxhY2VtZW50XG4gICAgICAgICAgICB0b29sdGlwRWwuY3NzKHtcbiAgICAgICAgICAgICAgdG9wOiBuZXdDb29yZGluYXRlcy55LFxuICAgICAgICAgICAgICBsZWZ0OiBuZXdDb29yZGluYXRlcy54XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIFNjYWxlIHRvIGZpbGxcbiAgICAgICAgICAgIHNjYWxlWEZhY3RvciA9IE1hdGguU1FSVDIgKiB0b29sdGlwV2lkdGggLyBwYXJzZUludChiYWNrZHJvcE9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgIHNjYWxlWUZhY3RvciA9IE1hdGguU1FSVDIgKiB0b29sdGlwSGVpZ2h0IC8gcGFyc2VJbnQoYmFja2Ryb3BPZmZzZXRIZWlnaHQpO1xuICAgICAgICAgICAgc2NhbGVGYWN0b3IgPSBNYXRoLm1heChzY2FsZVhGYWN0b3IsIHNjYWxlWUZhY3Rvcik7XG5cbiAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSh7IHRyYW5zbGF0ZVk6IHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50LCB0cmFuc2xhdGVYOiB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50fSwgeyBkdXJhdGlvbjogMzUwLCBxdWV1ZTogZmFsc2UgfSlcbiAgICAgICAgICAgICAgLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge2R1cmF0aW9uOiAzMDAsIGRlbGF5OiA1MCwgcXVldWU6IGZhbHNlfSk7XG4gICAgICAgICAgICBiYWNrZHJvcC5jc3MoeyB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSlcbiAgICAgICAgICAgICAgLnZlbG9jaXR5KHtvcGFjaXR5OjF9LHtkdXJhdGlvbjogNTUsIGRlbGF5OiAwLCBxdWV1ZTogZmFsc2V9KVxuICAgICAgICAgICAgICAudmVsb2NpdHkoe3NjYWxlWDogc2NhbGVGYWN0b3IsIHNjYWxlWTogc2NhbGVGYWN0b3J9LCB7ZHVyYXRpb246IDMwMCwgZGVsYXk6IDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCd9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGltZW91dFJlZiA9IHNldFRpbWVvdXQoc2hvd1Rvb2x0aXAsIHRvb2x0aXBEZWxheSk7IC8vIEVuZCBJbnRlcnZhbFxuXG4gICAgICAgIC8vIE1vdXNlIE91dFxuICAgICAgICB9LFxuICAgICAgICAnbW91c2VsZWF2ZS50b29sdGlwJzogZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBSZXNldCBTdGF0ZVxuICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZik7XG5cbiAgICAgICAgICAvLyBBbmltYXRlIGJhY2tcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0ZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgdG9vbHRpcEVsLnZlbG9jaXR5KHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLCB0cmFuc2xhdGVZOiAwLCB0cmFuc2xhdGVYOiAwfSwgeyBkdXJhdGlvbjogMjI1LCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICAgICAgYmFja2Ryb3AudmVsb2NpdHkoe29wYWNpdHk6IDAsIHNjYWxlWDogMSwgc2NhbGVZOiAxfSwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOjIyNSxcbiAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICBiYWNrZHJvcC5jc3MoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXBFbC5jc3MoeyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTt9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sMjI1KTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwb3NpdGlvbldpdGhpblNjcmVlbiA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgbmV3WCA9IHg7XG4gICAgdmFyIG5ld1kgPSB5O1xuXG4gICAgaWYgKG5ld1ggPCAwKSB7XG4gICAgICBuZXdYID0gNDtcbiAgICB9IGVsc2UgaWYgKG5ld1ggKyB3aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICBuZXdYIC09IG5ld1ggKyB3aWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIH1cblxuICAgIGlmIChuZXdZIDwgMCkge1xuICAgICAgbmV3WSA9IDQ7XG4gICAgfSBlbHNlIGlmIChuZXdZICsgaGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0ICsgJCh3aW5kb3cpLnNjcm9sbFRvcCkge1xuICAgICAgbmV3WSAtPSBuZXdZICsgaGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiB7eDogbmV3WCwgeTogbmV3WX07XG4gIH07XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgJCgnLnRvb2x0aXBwZWQnKS50b29sdGlwKCk7XG4gICB9KTtcbn0oIGpRdWVyeSApKTtcbiIsIi8qIVxuICogV2F2ZXMgdjAuNi40XG4gKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICpcbiAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZpYW5zL1dhdmVzL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG47KGZ1bmN0aW9uKHdpbmRvdykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBXYXZlcyA9IFdhdmVzIHx8IHt9O1xuICAgIHZhciAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XG5cbiAgICAvLyBGaW5kIGV4YWN0IHBvc2l0aW9uIG9mIGVsZW1lbnRcbiAgICBmdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0VmlldztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvZmZzZXQoZWxlbSkge1xuICAgICAgICB2YXIgZG9jRWxlbSwgd2luLFxuICAgICAgICAgICAgYm94ID0ge3RvcDogMCwgbGVmdDogMH0sXG4gICAgICAgICAgICBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcblxuICAgICAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICBpZiAodHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSB0eXBlb2YgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wOiBib3gudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRUb3AsXG4gICAgICAgICAgICBsZWZ0OiBib3gubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsZW0uY2xpZW50TGVmdFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRTdHlsZShvYmopIHtcbiAgICAgICAgdmFyIHN0eWxlID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgYSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoYSkpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSAoYSArICc6JyArIG9ialthXSArICc7Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgdmFyIEVmZmVjdCA9IHtcblxuICAgICAgICAvLyBFZmZlY3QgZGVsYXlcbiAgICAgICAgZHVyYXRpb246IDc1MCxcblxuICAgICAgICBzaG93OiBmdW5jdGlvbihlLCBlbGVtZW50KSB7XG5cbiAgICAgICAgICAgIC8vIERpc2FibGUgcmlnaHQgY2xpY2tcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudCB8fCB0aGlzO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgcmlwcGxlXG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NOYW1lID0gJ3dhdmVzLXJpcHBsZSc7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChyaXBwbGUpO1xuXG4gICAgICAgICAgICAvLyBHZXQgY2xpY2sgY29vcmRpbmF0ZSBhbmQgZWxlbWVudCB3aXRkaFxuICAgICAgICAgICAgdmFyIHBvcyAgICAgICAgID0gb2Zmc2V0KGVsKTtcbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVkgICA9IChlLnBhZ2VZIC0gcG9zLnRvcCk7XG4gICAgICAgICAgICB2YXIgcmVsYXRpdmVYICAgPSAoZS5wYWdlWCAtIHBvcy5sZWZ0KTtcbiAgICAgICAgICAgIHZhciBzY2FsZSAgICAgICA9ICdzY2FsZSgnKygoZWwuY2xpZW50V2lkdGggLyAxMDApICogMTApKycpJztcblxuICAgICAgICAgICAgLy8gU3VwcG9ydCBmb3IgdG91Y2ggZGV2aWNlc1xuICAgICAgICAgICAgaWYgKCd0b3VjaGVzJyBpbiBlKSB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlWSAgID0gKGUudG91Y2hlc1swXS5wYWdlWSAtIHBvcy50b3ApO1xuICAgICAgICAgICAgICByZWxhdGl2ZVggICA9IChlLnRvdWNoZXNbMF0ucGFnZVggLSBwb3MubGVmdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEF0dGFjaCBkYXRhIHRvIGVsZW1lbnRcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaG9sZCcsIERhdGUubm93KCkpO1xuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1zY2FsZScsIHNjYWxlKTtcbiAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIHJlbGF0aXZlWCk7XG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLXknLCByZWxhdGl2ZVkpO1xuXG4gICAgICAgICAgICAvLyBTZXQgcmlwcGxlIHBvc2l0aW9uXG4gICAgICAgICAgICB2YXIgcmlwcGxlU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgJ3RvcCc6IHJlbGF0aXZlWSsncHgnLFxuICAgICAgICAgICAgICAgICdsZWZ0JzogcmVsYXRpdmVYKydweCdcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSByaXBwbGUuY2xhc3NOYW1lICsgJyB3YXZlcy1ub3RyYW5zaXRpb24nO1xuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb252ZXJ0U3R5bGUocmlwcGxlU3R5bGUpKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSByaXBwbGUuY2xhc3NOYW1lLnJlcGxhY2UoJ3dhdmVzLW5vdHJhbnNpdGlvbicsICcnKTtcblxuICAgICAgICAgICAgLy8gU2NhbGUgdGhlIHJpcHBsZVxuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctbW96LXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW1zLXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLW8tdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlLnRyYW5zZm9ybSA9IHNjYWxlO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGUub3BhY2l0eSAgID0gJzEnO1xuXG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uJ10gPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbiddICAgID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctby10cmFuc2l0aW9uLWR1cmF0aW9uJ10gICAgICA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsndHJhbnNpdGlvbi1kdXJhdGlvbiddICAgICAgICAgPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuXG4gICAgICAgICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuICAgICAgICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSAgICA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcbiAgICAgICAgICAgIHJpcHBsZVN0eWxlWyctby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddICAgICAgPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG4gICAgICAgICAgICByaXBwbGVTdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSAgICAgICAgID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuXG4gICAgICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShyaXBwbGVTdHlsZSkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIFRvdWNoSGFuZGxlci50b3VjaHVwKGUpO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gZWwuY2xpZW50V2lkdGggKiAxLjQ7XG5cbiAgICAgICAgICAgIC8vIEdldCBmaXJzdCByaXBwbGVcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBudWxsO1xuICAgICAgICAgICAgdmFyIHJpcHBsZXMgPSBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3YXZlcy1yaXBwbGUnKTtcbiAgICAgICAgICAgIGlmIChyaXBwbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByaXBwbGUgPSByaXBwbGVzW3JpcHBsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlbGF0aXZlWCAgID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS14Jyk7XG4gICAgICAgICAgICB2YXIgcmVsYXRpdmVZICAgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXknKTtcbiAgICAgICAgICAgIHZhciBzY2FsZSAgICAgICA9IHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2NhbGUnKTtcblxuICAgICAgICAgICAgLy8gR2V0IGRlbGF5IGJlZXR3ZWVuIG1vdXNlZG93biBhbmQgbW91c2UgbGVhdmVcbiAgICAgICAgICAgIHZhciBkaWZmID0gRGF0ZS5ub3coKSAtIE51bWJlcihyaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLWhvbGQnKSk7XG4gICAgICAgICAgICB2YXIgZGVsYXkgPSAzNTAgLSBkaWZmO1xuXG4gICAgICAgICAgICBpZiAoZGVsYXkgPCAwKSB7XG4gICAgICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGYWRlIG91dCByaXBwbGUgYWZ0ZXIgZGVsYXlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAndG9wJzogcmVsYXRpdmVZKydweCcsXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogcmVsYXRpdmVYKydweCcsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzAnLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIER1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAgICAgICAgICAgJy1vLXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zZm9ybSc6IHNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgJy1vLXRyYW5zZm9ybSc6IHNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHN0eWxlKSk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBFZmZlY3QuZHVyYXRpb24pO1xuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIExpdHRsZSBoYWNrIHRvIG1ha2UgPGlucHV0PiBjYW4gcGVyZm9ybSB3YXZlcyBlZmZlY3RcbiAgICAgICAgd3JhcElucHV0OiBmdW5jdGlvbihlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBlbGVtZW50cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IGVsZW1lbnRzW2FdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBpbnB1dCBhbHJlYWR5IGhhdmUgcGFyZW50IGp1c3QgcGFzcyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaScgJiYgcGFyZW50LmNsYXNzTmFtZS5pbmRleE9mKCd3YXZlcy1lZmZlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHV0IGVsZW1lbnQgY2xhc3MgYW5kIHN0eWxlIHRvIHRoZSBzcGVjaWZpZWQgcGFyZW50XG4gICAgICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZSArICcgd2F2ZXMtaW5wdXQtd3JhcHBlcic7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRTdHlsZSA9IGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBlbGVtZW50U3R5bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICd3YXZlcy1idXR0b24taW5wdXQnO1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHV0IGVsZW1lbnQgYXMgY2hpbGRcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZCh3cmFwcGVyLCBlbCk7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgbW91c2Vkb3duIGV2ZW50IGZvciA1MDBtcyBkdXJpbmcgYW5kIGFmdGVyIHRvdWNoXG4gICAgICovXG4gICAgdmFyIFRvdWNoSGFuZGxlciA9IHtcbiAgICAgICAgLyogdXNlcyBhbiBpbnRlZ2VyIHJhdGhlciB0aGFuIGJvb2wgc28gdGhlcmUncyBubyBpc3N1ZXMgd2l0aFxuICAgICAgICAgKiBuZWVkaW5nIHRvIGNsZWFyIHRpbWVvdXRzIGlmIGFub3RoZXIgdG91Y2ggZXZlbnQgb2NjdXJyZWRcbiAgICAgICAgICogd2l0aGluIHRoZSA1MDBtcy4gQ2Fubm90IG1vdXNldXAgYmV0d2VlbiB0b3VjaHN0YXJ0IGFuZFxuICAgICAgICAgKiB0b3VjaGVuZCwgbm9yIGluIHRoZSA1MDBtcyBhZnRlciB0b3VjaGVuZC4gKi9cbiAgICAgICAgdG91Y2hlczogMCxcbiAgICAgICAgYWxsb3dFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGFsbG93ID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgVG91Y2hIYW5kbGVyLnRvdWNoZXMgKz0gMTsgLy9wdXNoXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoVG91Y2hIYW5kbGVyLnRvdWNoZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUb3VjaEhhbmRsZXIudG91Y2hlcyAtPSAxOyAvL3BvcCBhZnRlciA1MDBtc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiBUb3VjaEhhbmRsZXIudG91Y2hlcyA+IDApIHtcbiAgICAgICAgICAgICAgICBhbGxvdyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWxsb3c7XG4gICAgICAgIH0sXG4gICAgICAgIHRvdWNodXA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIFRvdWNoSGFuZGxlci5hbGxvd0V2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogRGVsZWdhdGVkIGNsaWNrIGhhbmRsZXIgZm9yIC53YXZlcy1lZmZlY3QgZWxlbWVudC5cbiAgICAgKiByZXR1cm5zIG51bGwgd2hlbiAud2F2ZXMtZWZmZWN0IGVsZW1lbnQgbm90IGluIFwiY2xpY2sgdHJlZVwiXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0V2F2ZXNFZmZlY3RFbGVtZW50KGUpIHtcbiAgICAgICAgaWYgKFRvdWNoSGFuZGxlci5hbGxvd0V2ZW50KGUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICAgICAgd2hpbGUgKHRhcmdldC5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSAmJiB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3dhdmVzLWVmZmVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWJibGUgdGhlIGNsaWNrIGFuZCBzaG93IGVmZmVjdCBpZiAud2F2ZXMtZWZmZWN0IGVsZW0gd2FzIGZvdW5kXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2hvd0VmZmVjdChlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZ2V0V2F2ZXNFZmZlY3RFbGVtZW50KGUpO1xuXG4gICAgICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBFZmZlY3Quc2hvdyhlLCBlbGVtZW50KTtcblxuICAgICAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBXYXZlcy5kaXNwbGF5RWZmZWN0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBpZiAoJ2R1cmF0aW9uJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBFZmZlY3QuZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9XcmFwIGlucHV0IGluc2lkZSA8aT4gdGFnXG4gICAgICAgIEVmZmVjdC53cmFwSW5wdXQoJCQoJy53YXZlcy1lZmZlY3QnKSk7XG5cbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCBXYXZlcyB0byBhbiBpbnB1dCBlbGVtZW50IChvciBhbnkgZWxlbWVudCB3aGljaCBkb2Vzbid0XG4gICAgICogYnViYmxlIG1vdXNldXAvbW91c2Vkb3duIGV2ZW50cykuXG4gICAgICogICBJbnRlbmRlZCB0byBiZSB1c2VkIHdpdGggZHluYW1pY2FsbHkgbG9hZGVkIGZvcm1zL2lucHV0cywgb3JcbiAgICAgKiB3aGVyZSB0aGUgdXNlciBkb2Vzbid0IHdhbnQgYSBkZWxlZ2F0ZWQgY2xpY2sgaGFuZGxlci5cbiAgICAgKi9cbiAgICBXYXZlcy5hdHRhY2ggPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIC8vRlVUVVJFOiBhdXRvbWF0aWNhbGx5IGFkZCB3YXZlcyBjbGFzc2VzIGFuZCBhbGxvdyB1c2Vyc1xuICAgICAgICAvLyB0byBzcGVjaWZ5IHRoZW0gd2l0aCBhbiBvcHRpb25zIHBhcmFtPyBFZy4gbGlnaHQvY2xhc3NpYy9idXR0b25cbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICBFZmZlY3Qud3JhcElucHV0KFtlbGVtZW50XSk7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5XYXZlcyA9IFdhdmVzO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBXYXZlcy5kaXNwbGF5RWZmZWN0KCk7XG4gICAgfSwgZmFsc2UpO1xuXG59KSh3aW5kb3cpO1xuIiwiKGZ1bmN0aW9uKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGxldCBfZGVmYXVsdHMgPSB7XG4gICAgZGlzcGxheUxlbmd0aDogSW5maW5pdHksXG4gICAgaW5EdXJhdGlvbjogMzAwLFxuICAgIG91dER1cmF0aW9uOiAzNzUsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgY29tcGxldGVDYWxsYmFjazogdW5kZWZpbmVkLFxuICAgIGFjdGl2YXRpb25QZXJjZW50OiAwLjhcbiAgfTtcblxuICBjbGFzcyBUb2FzdCB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgZGlzcGxheUxlbmd0aCwgY2xhc3NOYW1lLCBjb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIHRvYXN0XG4gICAgICAgKiBAbWVtYmVyIFRvYXN0I29wdGlvbnNcbiAgICAgICAqL1xuICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICBkaXNwbGF5TGVuZ3RoOiBkaXNwbGF5TGVuZ3RoLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgY29tcGxldGVDYWxsYmFjazogY29tcGxldGVDYWxsYmFja1xuICAgICAgfTtcblxuICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIFRvYXN0LmRlZmF1bHRzLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNjcmliZXMgY3VycmVudCBwYW4gc3RhdGUgdG9hc3RcbiAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICB0aGlzLnBhbm5pbmcgPSBmYWxzZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBUaW1lIHJlbWFpbmluZyB1bnRpbCB0b2FzdCBpcyByZW1vdmVkXG4gICAgICAgKi9cbiAgICAgIHRoaXMudGltZVJlbWFpbmluZyA9IHRoaXMub3B0aW9ucy5kaXNwbGF5TGVuZ3RoO1xuXG4gICAgICBpZiAoVG9hc3QuX3RvYXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgVG9hc3QuX2NyZWF0ZUNvbnRhaW5lcigpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgbmV3IHRvYXN0XG4gICAgICBUb2FzdC5fdG9hc3RzLnB1c2godGhpcyk7XG4gICAgICBsZXQgdG9hc3RFbGVtZW50ID0gdGhpcy5jcmVhdGVUb2FzdCgpO1xuICAgICAgdG9hc3RFbGVtZW50Lk1fVG9hc3QgPSB0aGlzO1xuICAgICAgdGhpcy5lbCA9IHRvYXN0RWxlbWVudDtcbiAgICAgIHRoaXMuX2FuaW1hdGVJbigpO1xuICAgICAgdGhpcy5zZXRUaW1lcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCB0b2FzdCBjb250YWluZXIgYW5kIGFkZCBldmVudCBoYW5kbGVyc1xuICAgICAqL1xuICAgIHN0YXRpYyBfY3JlYXRlQ29udGFpbmVyKCkge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9hc3QtY29udGFpbmVyJyk7XG5cbiAgICAgIC8vIEFkZCBldmVudCBoYW5kbGVyXG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIFRvYXN0Ll9vbkRyYWdTdGFydCk7XG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgVG9hc3QuX29uRHJhZ01vdmUpO1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgVG9hc3QuX29uRHJhZ0VuZCk7XG5cbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBUb2FzdC5fb25EcmFnU3RhcnQpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgVG9hc3QuX29uRHJhZ01vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIFRvYXN0Ll9vbkRyYWdFbmQpO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICBUb2FzdC5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0b2FzdCBjb250YWluZXIgYW5kIGV2ZW50IGhhbmRsZXJzXG4gICAgICovXG4gICAgc3RhdGljIF9yZW1vdmVDb250YWluZXIoKSB7XG4gICAgICAvLyBBZGQgZXZlbnQgaGFuZGxlclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgVG9hc3QuX29uRHJhZ01vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIFRvYXN0Ll9vbkRyYWdFbmQpO1xuXG4gICAgICBUb2FzdC5fY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoVG9hc3QuX2NvbnRhaW5lcik7XG4gICAgICBUb2FzdC5fY29udGFpbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCZWdpbiBkcmFnIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgc3RhdGljIF9vbkRyYWdTdGFydChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLnRvYXN0JykubGVuZ3RoKSB7XG4gICAgICAgIGxldCAkdG9hc3QgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcudG9hc3QnKTtcbiAgICAgICAgbGV0IHRvYXN0ID0gJHRvYXN0WzBdLk1fVG9hc3Q7XG4gICAgICAgIHRvYXN0LnBhbm5pbmcgPSB0cnVlO1xuICAgICAgICBUb2FzdC5fZHJhZ2dlZFRvYXN0ID0gdG9hc3Q7XG4gICAgICAgIHRvYXN0LmVsLmNsYXNzTGlzdC5hZGQoJ3Bhbm5pbmcnKTtcbiAgICAgICAgdG9hc3QuZWwuc3R5bGUudHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICAgIHRvYXN0LnN0YXJ0aW5nWFBvcyA9IFRvYXN0Ll94UG9zKGUpO1xuICAgICAgICB0b2FzdC50aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdG9hc3QueFBvcyA9IFRvYXN0Ll94UG9zKGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERyYWcgbW92ZSBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIHN0YXRpYyBfb25EcmFnTW92ZShlKSB7XG4gICAgICBpZiAoISFUb2FzdC5fZHJhZ2dlZFRvYXN0KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRvYXN0ID0gVG9hc3QuX2RyYWdnZWRUb2FzdDtcbiAgICAgICAgdG9hc3QuZGVsdGFYID0gTWF0aC5hYnModG9hc3QueFBvcyAtIFRvYXN0Ll94UG9zKGUpKTtcbiAgICAgICAgdG9hc3QueFBvcyA9IFRvYXN0Ll94UG9zKGUpO1xuICAgICAgICB0b2FzdC52ZWxvY2l0eVggPSB0b2FzdC5kZWx0YVggLyAoRGF0ZS5ub3coKSAtIHRvYXN0LnRpbWUpO1xuICAgICAgICB0b2FzdC50aW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBsZXQgdG90YWxEZWx0YVggPSB0b2FzdC54UG9zIC0gdG9hc3Quc3RhcnRpbmdYUG9zO1xuICAgICAgICBsZXQgYWN0aXZhdGlvbkRpc3RhbmNlID1cbiAgICAgICAgICAgIHRvYXN0LmVsLm9mZnNldFdpZHRoICogdG9hc3Qub3B0aW9ucy5hY3RpdmF0aW9uUGVyY2VudDtcbiAgICAgICAgdG9hc3QuZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0b3RhbERlbHRhWH1weClgO1xuICAgICAgICB0b2FzdC5lbC5zdHlsZS5vcGFjaXR5ID0gMS1NYXRoLmFicyh0b3RhbERlbHRhWCAvIGFjdGl2YXRpb25EaXN0YW5jZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW5kIGRyYWcgaGFuZGxlclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBzdGF0aWMgX29uRHJhZ0VuZChlKSB7XG4gICAgICBpZiAoISFUb2FzdC5fZHJhZ2dlZFRvYXN0KSB7XG4gICAgICAgIGxldCB0b2FzdCA9IFRvYXN0Ll9kcmFnZ2VkVG9hc3Q7XG4gICAgICAgIHRvYXN0LnBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdG9hc3QuZWwuY2xhc3NMaXN0LnJlbW92ZSgncGFubmluZycpO1xuXG4gICAgICAgIGxldCB0b3RhbERlbHRhWCA9IHRvYXN0LnhQb3MgLSB0b2FzdC5zdGFydGluZ1hQb3M7XG4gICAgICAgIGxldCBhY3RpdmF0aW9uRGlzdGFuY2UgPVxuICAgICAgICAgICAgdG9hc3QuZWwub2Zmc2V0V2lkdGggKiB0b2FzdC5vcHRpb25zLmFjdGl2YXRpb25QZXJjZW50O1xuICAgICAgICBsZXQgc2hvdWxkQmVEaXNtaXNzZWQgPSBNYXRoLmFicyh0b3RhbERlbHRhWCkgPiBhY3RpdmF0aW9uRGlzdGFuY2UgfHxcbiAgICAgICAgICAgIHRvYXN0LnZlbG9jaXR5WCA+IDE7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRvYXN0XG4gICAgICAgIGlmIChzaG91bGRCZURpc21pc3NlZCkge1xuICAgICAgICAgIHRvYXN0Lndhc1N3aXBlZCA9IHRydWU7XG4gICAgICAgICAgdG9hc3QucmVtb3ZlKCk7XG5cbiAgICAgICAgLy8gQW5pbWF0ZSB0b2FzdCBiYWNrIHRvIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9hc3QuZWwuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjJzLCBvcGFjaXR5IC4ycyc7XG4gICAgICAgICAgdG9hc3QuZWwuc3R5bGUudHJhbnNmb3JtID0gbnVsbDtcbiAgICAgICAgICB0b2FzdC5lbC5zdHlsZS5vcGFjaXR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBUb2FzdC5fZHJhZ2dlZFRvYXN0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgeCBwb3NpdGlvbiBvZiBtb3VzZSBvciB0b3VjaCBldmVudFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBzdGF0aWMgX3hQb3MoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiAoZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+PSAxKSkge1xuICAgICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICB9XG4gICAgICAvLyBtb3VzZSBldmVudFxuICAgICAgcmV0dXJuIGUuY2xpZW50WDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIHRvYXN0c1xuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmVBbGwoKSB7XG4gICAgICBmb3IobGV0IHRvYXN0SW5kZXggaW4gVG9hc3QuX3RvYXN0cykge1xuICAgICAgICBUb2FzdC5fdG9hc3RzW3RvYXN0SW5kZXhdLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIHRvYXN0IGFuZCBhcHBlbmQgaXQgdG8gdG9hc3QgY29udGFpbmVyXG4gICAgICovXG4gICAgY3JlYXRlVG9hc3QoKSB7XG4gICAgICBsZXQgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoJ3RvYXN0Jyk7XG5cbiAgICAgIC8vIEFkZCBjdXN0b20gY2xhc3NlcyBvbnRvIHRvYXN0XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNsYXNzTmFtZSkge1xuICAgICAgICBsZXQgY2xhc3NlcyA9IHRoaXMub3B0aW9ucy5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IGksIGNvdW50O1xuICAgICAgICBmb3IgKGkgPSAwLCBjb3VudCA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGNvbnRlbnRcbiAgICAgIGlmICggdHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0JyA/XG4gICAgICAgICAgIHRoaXMubWVzc2FnZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDpcbiAgICAgICAgICAgdGhpcy5tZXNzYWdlICYmIHR5cGVvZiB0aGlzLm1lc3NhZ2UgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgIHRoaXMubWVzc2FnZSAhPT0gbnVsbCAmJiB0aGlzLm1lc3NhZ2Uubm9kZVR5cGUgPT09IDEgJiZcbiAgICAgICAgICAgdHlwZW9mIHRoaXMubWVzc2FnZS5ub2RlTmFtZT09PSdzdHJpbmcnXG4gICAgICAgICApIHtcbiAgICAgICAgdG9hc3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgalF1ZXJ5IG9iamVjdFxuICAgICAgfSBlbHNlIGlmICh0aGlzLm1lc3NhZ2UgaW5zdGFuY2VvZiBqUXVlcnkpIHtcbiAgICAgICAgJCh0b2FzdCkuYXBwZW5kKHRoaXMubWVzc2FnZSk7XG5cbiAgICAgICAgLy8gSW5zZXJ0IGFzIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdC5pbm5lckhUTUwgPSB0aGlzLm1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGVuZCB0b2FzZnRcbiAgICAgIFRvYXN0Ll9jb250YWluZXIuYXBwZW5kQ2hpbGQodG9hc3QpO1xuICAgICAgcmV0dXJuIHRvYXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGUgaW4gdG9hc3RcbiAgICAgKi9cbiAgICBfYW5pbWF0ZUluKCkge1xuICAgICAgLy8gQW5pbWF0ZSB0b2FzdCBpblxuICAgICAgVmVsKHRoaXMuZWwsIHt0b3A6IDAsICBvcGFjaXR5OiAxIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgcXVldWU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBzZXRJbnRlcnZhbCB3aGljaCBhdXRvbWF0aWNhbGx5IHJlbW92ZXMgdG9hc3Qgd2hlbiB0aW1lUmVtYWluaW5nID49IDBcbiAgICAgKiBoYXMgYmVlbiByZWFjaGVkXG4gICAgICovXG4gICAgc2V0VGltZXIoKSB7XG4gICAgICBpZiAodGhpcy50aW1lUmVtYWluaW5nICE9PSBJbmZpbml0eSkgIHtcbiAgICAgICAgdGhpcy5jb3VudGVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgLy8gSWYgdG9hc3QgaXMgbm90IGJlaW5nIGRyYWdnZWQsIGRlY3JlYXNlIGl0cyB0aW1lIHJlbWFpbmluZ1xuICAgICAgICAgIGlmICghdGhpcy5wYW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVSZW1haW5pbmcgLT0gMjA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQW5pbWF0ZSB0b2FzdCBvdXRcbiAgICAgICAgICBpZiAodGhpcy50aW1lUmVtYWluaW5nIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAyMCk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEaXNtaXNzIHRvYXN0IHdpdGggYW5pbWF0aW9uXG4gICAgICovXG4gICAgcmVtb3ZlKCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5jb3VudGVySW50ZXJ2YWwpO1xuICAgICAgbGV0IGFjdGl2YXRpb25EaXN0YW5jZSA9XG4gICAgICAgICAgdGhpcy5lbC5vZmZzZXRXaWR0aCAqIHRoaXMub3B0aW9ucy5hY3RpdmF0aW9uUGVyY2VudDtcblxuICAgICAgaWYodGhpcy53YXNTd2lwZWQpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAuMDVzLCBvcGFjaXR5IC4wNXMnO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7YWN0aXZhdGlvbkRpc3RhbmNlfXB4KWA7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIFZlbChcbiAgICAgICAgdGhpcy5lbCxcbiAgICAgICAge29wYWNpdHk6IDAsIG1hcmdpblRvcDogJy00MHB4J30sXG4gICAgICAgIHtcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcbiAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIG9wdGlvbmFsIGNhbGxiYWNrXG4gICAgICAgICAgICBpZih0eXBlb2YodGhpcy5vcHRpb25zLmNvbXBsZXRlQ2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgdG9hc3QgZnJvbSBET01cbiAgICAgICAgICAgIHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcbiAgICAgICAgICAgIFRvYXN0Ll90b2FzdHMuc3BsaWNlKFRvYXN0Ll90b2FzdHMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgICAgICBpZiAoVG9hc3QuX3RvYXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgVG9hc3QuX3JlbW92ZUNvbnRhaW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgVG9hc3RcbiAgICogQHR5cGUge0FycmF5LjxUb2FzdD59XG4gICAqL1xuICBUb2FzdC5fdG9hc3RzID0gW107XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFRvYXN0XG4gICAqL1xuICBUb2FzdC5fY29udGFpbmVyID0gbnVsbDtcblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgVG9hc3RcbiAgICogQHR5cGUge1RvYXN0fVxuICAgKi9cbiAgVG9hc3QuX2RyYWdnZWRUb2FzdCA9IG51bGw7XG5cbiAgd2luZG93Lk1hdGVyaWFsaXplLlRvYXN0ID0gVG9hc3Q7XG4gIHdpbmRvdy5NYXRlcmlhbGl6ZS50b2FzdCA9IGZ1bmN0aW9uKG1lc3NhZ2UsIGRpc3BsYXlMZW5ndGgsIGNsYXNzTmFtZSwgY29tcGxldGVDYWxsYmFjaykge1xuICAgIHJldHVybiBuZXcgVG9hc3QobWVzc2FnZSwgZGlzcGxheUxlbmd0aCwgY2xhc3NOYW1lLCBjb21wbGV0ZUNhbGxiYWNrKTtcbiAgfVxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuXG4gIHZhciBtZXRob2RzID0ge1xuICAgIGluaXQgOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIG1lbnVXaWR0aDogMzAwLFxuICAgICAgICBlZGdlOiAnbGVmdCcsXG4gICAgICAgIGNsb3NlT25DbGljazogZmFsc2UsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgb25PcGVuOiBudWxsLFxuICAgICAgICBvbkNsb3NlOiBudWxsXG4gICAgICB9O1xuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBtZW51SWQgPSAkdGhpcy5hdHRyKCdkYXRhLWFjdGl2YXRlcycpO1xuICAgICAgICB2YXIgbWVudSA9ICQoXCIjXCIrIG1lbnVJZCk7XG5cbiAgICAgICAgLy8gU2V0IHRvIHdpZHRoXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVXaWR0aCAhPSAzMDApIHtcbiAgICAgICAgICBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgVG91Y2ggQXJlYVxuICAgICAgICB2YXIgJGRyYWdUYXJnZXQgPSAkKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJyArIG1lbnVJZCArICdcIl0nKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgLy8gUmVnZW5lcmF0ZSBkcmFnVGFyZ2V0XG4gICAgICAgICAgaWYgKCRkcmFnVGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgJGRyYWdUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJGRyYWdUYXJnZXQgPSAkKCc8ZGl2IGNsYXNzPVwiZHJhZy10YXJnZXRcIj48L2Rpdj4nKS5hdHRyKCdkYXRhLXNpZGVuYXYnLCBtZW51SWQpO1xuICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGRyYWdUYXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRkcmFnVGFyZ2V0ID0gJCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PSAnbGVmdCcpIHtcbiAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTEwMCUpJyk7XG4gICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsnbGVmdCc6IDB9KTsgLy8gQWRkIFRvdWNoIEFyZWFcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtZW51LmFkZENsYXNzKCdyaWdodC1hbGlnbmVkJykgLy8gQ2hhbmdlIHRleHQtYWxpZ25tZW50IHRvIHJpZ2h0XG4gICAgICAgICAgICAuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgxMDAlKScpO1xuICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7J3JpZ2h0JzogMH0pOyAvLyBBZGQgVG91Y2ggQXJlYVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgZml4ZWQgc2lkZW5hdiwgYnJpbmcgbWVudSBvdXRcbiAgICAgICAgaWYgKG1lbnUuaGFzQ2xhc3MoJ2ZpeGVkJykpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5Mikge1xuICAgICAgICAgICAgICBtZW51LmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gV2luZG93IHJlc2l6ZSB0byByZXNldCBvbiBsYXJnZSBzY3JlZW5zIGZpeGVkXG4gICAgICAgIGlmIChtZW51Lmhhc0NsYXNzKCdmaXhlZCcpKSB7XG4gICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTIpIHtcbiAgICAgICAgICAgICAgLy8gQ2xvc2UgbWVudSBpZiB3aW5kb3cgaXMgcmVzaXplZCBiaWdnZXIgdGhhbiA5OTIgYW5kIHVzZXIgaGFzIGZpeGVkIHNpZGVuYXZcbiAgICAgICAgICAgICAgaWYgKCQoJyNzaWRlbmF2LW92ZXJsYXknKS5sZW5ndGggIT09IDAgJiYgbWVudU91dCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lbnUodHJ1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgICAgICAvLyBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1lbnVPdXQgPT09IGZhbHNlKXtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKC0xMDAlKScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgxMDAlKScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgY2xvc2VPbkNsaWNrLCB0aGVuIGFkZCBjbG9zZSBldmVudCBmb3IgYWxsIGEgdGFncyBpbiBzaWRlIHNpZGVOYXZcbiAgICAgICAgaWYgKG9wdGlvbnMuY2xvc2VPbkNsaWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgbWVudS5vbihcImNsaWNrLml0ZW1jbGlja1wiLCBcImE6bm90KC5jb2xsYXBzaWJsZS1oZWFkZXIpXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoISh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5MiAmJiBtZW51Lmhhc0NsYXNzKCdmaXhlZCcpKSl7XG4gICAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZW1vdmVNZW51ID0gZnVuY3Rpb24ocmVzdG9yZU5hdikge1xuICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgLy8gUmVlbmFibGUgc2Nyb2xsaW5nXG4gICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICQoJyNzaWRlbmF2LW92ZXJsYXknKS52ZWxvY2l0eSh7b3BhY2l0eTogMH0sIHtkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAvLyBSZXNldCBwaGFudG9tIGRpdlxuICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJycsIHJpZ2h0OiAnJywgbGVmdDogJzAnfSk7XG4gICAgICAgICAgICBtZW51LnZlbG9jaXR5KFxuICAgICAgICAgICAgICB7J3RyYW5zbGF0ZVgnOiAnLTEwMCUnfSxcbiAgICAgICAgICAgICAgeyBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlTmF2ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgRml4ZWQgc2lkZW5hdlxuICAgICAgICAgICAgICAgICAgICBtZW51LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHBoYW50b20gZGl2XG4gICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnJywgcmlnaHQ6ICcwJywgbGVmdDogJyd9KTtcbiAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoXG4gICAgICAgICAgICAgIHsndHJhbnNsYXRlWCc6ICcxMDAlJ30sXG4gICAgICAgICAgICAgIHsgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzdG9yZU5hdiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIEZpeGVkIHNpZGVuYXZcbiAgICAgICAgICAgICAgICAgICAgbWVudS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICBtZW51LmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxsYmFja1xuICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vbkNsb3NlKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb3B0aW9ucy5vbkNsb3NlLmNhbGwodGhpcywgbWVudSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vIFRvdWNoIEV2ZW50XG4gICAgICAgIHZhciBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBtZW51T3V0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgJGRyYWdUYXJnZXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChtZW51T3V0KSB7XG4gICAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRkcmFnVGFyZ2V0LmhhbW1lcih7XG4gICAgICAgICAgICBwcmV2ZW50X2RlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgfSkub24oJ3BhbicsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PSBcInRvdWNoXCIpIHtcblxuICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gZS5nZXN0dXJlLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgdmFyIHggPSBlLmdlc3R1cmUuY2VudGVyLng7XG4gICAgICAgICAgICAgIHZhciB5ID0gZS5nZXN0dXJlLmNlbnRlci55O1xuICAgICAgICAgICAgICB2YXIgdmVsb2NpdHlYID0gZS5nZXN0dXJlLnZlbG9jaXR5WDtcblxuICAgICAgICAgICAgICAvLyBWZXJ0aWNhbCBzY3JvbGwgYnVnZml4XG4gICAgICAgICAgICAgIGlmICh4ID09PSAwICYmIHkgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBEaXNhYmxlIFNjcm9sbGluZ1xuICAgICAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICAgIHZhciAkb3ZlcmxheSA9ICQoJyNzaWRlbmF2LW92ZXJsYXknKTtcbiAgICAgICAgICAgICAgdmFyIG9sZFdpZHRoID0gJGJvZHkuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAkYm9keS53aWR0aChvbGRXaWR0aCk7XG5cbiAgICAgICAgICAgICAgLy8gSWYgb3ZlcmxheSBkb2VzIG5vdCBleGlzdCwgY3JlYXRlIG9uZSBhbmQgaWYgaXQgaXMgY2xpY2tlZCwgY2xvc2UgbWVudVxuICAgICAgICAgICAgICBpZiAoJG92ZXJsYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkuY3NzKCdvcGFjaXR5JywgMCkuY2xpY2soIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSdW4gJ29uT3Blbicgd2hlbiBzaWRlbmF2IGlzIG9wZW5lZCB2aWEgdG91Y2gvc3dpcGUgaWYgYXBwbGljYWJsZVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5vbk9wZW4pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zLm9uT3Blbi5jYWxsKHRoaXMsIG1lbnUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJG92ZXJsYXkpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gS2VlcCB3aXRoaW4gYm91bmRhcmllc1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA+IG9wdGlvbnMubWVudVdpZHRoKSB7IHggPSBvcHRpb25zLm1lbnVXaWR0aDsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHggPCAwKSB7IHggPSAwOyB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IERpcmVjdGlvblxuICAgICAgICAgICAgICAgIGlmICh4IDwgKG9wdGlvbnMubWVudVdpZHRoIC8gMikpIHsgbWVudU91dCA9IGZhbHNlOyB9XG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA+PSAob3B0aW9ucy5tZW51V2lkdGggLyAyKSkgeyBtZW51T3V0ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgICAgIG1lbnUuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgnICsgKHggLSBvcHRpb25zLm1lbnVXaWR0aCkgKyAncHgpJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdCBEaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoeCA8ICh3aW5kb3cuaW5uZXJXaWR0aCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMikpIHtcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSaWdodCBEaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4ID49ICh3aW5kb3cuaW5uZXJXaWR0aCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMikpIHtcbiAgICAgICAgICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByaWdodFBvcyA9ICh4IC0gb3B0aW9ucy5tZW51V2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocmlnaHRQb3MgPCAwKSB7XG4gICAgICAgICAgICAgICAgICByaWdodFBvcyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWVudS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyByaWdodFBvcyArICdweCknKTtcbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgLy8gUGVyY2VudGFnZSBvdmVybGF5XG4gICAgICAgICAgICAgIHZhciBvdmVybGF5UGVyYztcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheVBlcmMgPSB4IC8gb3B0aW9ucy5tZW51V2lkdGg7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IG92ZXJsYXlQZXJjIH0sIHtkdXJhdGlvbjogMTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheVBlcmMgPSBNYXRoLmFicygoeCAtIHdpbmRvdy5pbm5lcldpZHRoKSAvIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogb3ZlcmxheVBlcmMgfSwge2R1cmF0aW9uOiAxMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSkub24oJ3BhbmVuZCcsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PSBcInRvdWNoXCIpIHtcbiAgICAgICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnI3NpZGVuYXYtb3ZlcmxheScpO1xuICAgICAgICAgICAgICB2YXIgdmVsb2NpdHlYID0gZS5nZXN0dXJlLnZlbG9jaXR5WDtcbiAgICAgICAgICAgICAgdmFyIHggPSBlLmdlc3R1cmUuY2VudGVyLng7XG4gICAgICAgICAgICAgIHZhciBsZWZ0UG9zID0geCAtIG9wdGlvbnMubWVudVdpZHRoO1xuICAgICAgICAgICAgICB2YXIgcmlnaHRQb3MgPSB4IC0gb3B0aW9ucy5tZW51V2lkdGggLyAyO1xuICAgICAgICAgICAgICBpZiAobGVmdFBvcyA+IDAgKSB7XG4gICAgICAgICAgICAgICAgbGVmdFBvcyA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHJpZ2h0UG9zIDwgMCkge1xuICAgICAgICAgICAgICAgIHJpZ2h0UG9zID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdmVsb2NpdHlYIDw9IDAuMyB0aGVuIHRoZSB1c2VyIGlzIGZsaW5naW5nIHRoZSBtZW51IGNsb3NlZCBzbyBpZ25vcmUgbWVudU91dFxuICAgICAgICAgICAgICAgIGlmICgobWVudU91dCAmJiB2ZWxvY2l0eVggPD0gMC4zKSB8fCB2ZWxvY2l0eVggPCAtMC41KSB7XG4gICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gbWVudSB0byBvcGVuXG4gICAgICAgICAgICAgICAgICBpZiAobGVmdFBvcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFswLCBsZWZ0UG9zXX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMSB9LCB7ZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJzUwJScsIHJpZ2h0OiAwLCBsZWZ0OiAnJ30pO1xuICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFtZW51T3V0IHx8IHZlbG9jaXR5WCA+IDAuMykge1xuICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIFNjcm9sbGluZ1xuICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcnXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIC8vIFNsaWRlIG1lbnUgY2xvc2VkXG4gICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFstMSAqIG9wdGlvbnMubWVudVdpZHRoIC0gMTAsIGxlZnRQb3NdfSwge2R1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMCB9LCB7ZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gUnVuICdvbkNsb3NlJyB3aGVuIHNpZGVuYXYgaXMgY2xvc2VkIHZpYSB0b3VjaC9zd2lwZSBpZiBhcHBsaWNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uQ2xvc2UpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uQ2xvc2UuY2FsbCh0aGlzLCBtZW51KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9fSk7XG4gICAgICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnMTBweCcsIHJpZ2h0OiAnJywgbGVmdDogMH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoKG1lbnVPdXQgJiYgdmVsb2NpdHlYID49IC0wLjMpIHx8IHZlbG9jaXR5WCA+IDAuNSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG1lbnUgdG8gb3BlblxuICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0UG9zICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyd0cmFuc2xhdGVYJzogWzAsIHJpZ2h0UG9zXX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMSB9LCB7ZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHt3aWR0aDogJzUwJScsIHJpZ2h0OiAnJywgbGVmdDogMH0pO1xuICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFtZW51T3V0IHx8IHZlbG9jaXR5WCA8IC0wLjMpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBTY3JvbGxpbmdcbiAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnJ1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFNsaWRlIG1lbnUgY2xvc2VkXG4gICAgICAgICAgICAgICAgICBtZW51LnZlbG9jaXR5KHsndHJhbnNsYXRlWCc6IFtvcHRpb25zLm1lbnVXaWR0aCArIDEwLCByaWdodFBvc119LCB7ZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHtvcGFjaXR5OiAwIH0sIHtkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBSdW4gJ29uQ2xvc2UnIHdoZW4gc2lkZW5hdiBpcyBjbG9zZWQgdmlhIHRvdWNoL3N3aXBlIGlmIGFwcGxpY2FibGVcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mKG9wdGlvbnMub25DbG9zZSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25DbG9zZS5jYWxsKHRoaXMsIG1lbnUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH19KTtcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICcxMHB4JywgcmlnaHQ6IDAsIGxlZnQ6ICcnfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICR0aGlzLm9mZignY2xpY2suc2lkZW5hdicpLm9uKCdjbGljay5zaWRlbmF2JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKG1lbnVPdXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIERpc2FibGUgU2Nyb2xsaW5nXG4gICAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwic2lkZW5hdi1vdmVybGF5XCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICB2YXIgb2xkV2lkdGggPSAkYm9keS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgJGJvZHkud2lkdGgob2xkV2lkdGgpO1xuXG4gICAgICAgICAgICAvLyBQdXNoIGN1cnJlbnQgZHJhZyB0YXJnZXQgb24gdG9wIG9mIERPTSB0cmVlXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRkcmFnVGFyZ2V0KTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7d2lkdGg6ICc1MCUnLCByaWdodDogMCwgbGVmdDogJyd9KTtcbiAgICAgICAgICAgICAgbWVudS52ZWxvY2l0eSh7J3RyYW5zbGF0ZVgnOiBbMCwgLTEgKiBvcHRpb25zLm1lbnVXaWR0aF19LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3Moe3dpZHRoOiAnNTAlJywgcmlnaHQ6ICcnLCBsZWZ0OiAwfSk7XG4gICAgICAgICAgICAgIG1lbnUudmVsb2NpdHkoeyd0cmFuc2xhdGVYJzogWzAsIG9wdGlvbnMubWVudVdpZHRoXX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPdmVybGF5IGNsb3NlIG9uIGNsaWNrXG4gICAgICAgICAgICAkb3ZlcmxheS5jc3MoJ29wYWNpdHknLCAwKVxuICAgICAgICAgICAgICAuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbWVudU91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoe29wYWNpdHk6IDB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgYm9keVxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkb3ZlcmxheSk7XG4gICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtZW51T3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFja1xuICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uT3BlbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5vbk9wZW4uY2FsbCh0aGlzLCBtZW51KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cblxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRvdmVybGF5ID0gJCgnI3NpZGVuYXYtb3ZlcmxheScpO1xuICAgICAgdmFyICRkcmFnVGFyZ2V0ID0gJCgnLmRyYWctdGFyZ2V0W2RhdGEtc2lkZW5hdj1cIicgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJykgKyAnXCJdJyk7XG4gICAgICAkb3ZlcmxheS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgJGRyYWdUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAkKHRoaXMpLm9mZignY2xpY2snKTtcbiAgICAgICRvdmVybGF5LnJlbW92ZSgpO1xuICAgIH0sXG4gICAgc2hvdyA6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0sXG4gICAgaGlkZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgJCgnI3NpZGVuYXYtb3ZlcmxheScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuICB9O1xuXG5cbiAgJC5mbi5zaWRlTmF2ID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gICAgaWYgKCBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgISBtZXRob2RPck9wdGlvbnMgKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnNpZGVOYXYnICk7XG4gICAgfVxuICB9OyAvLyBQbHVnaW4gZW5kXG59KCBqUXVlcnkgKSk7XG4iLCIvKipcbiAqIEV4dGVuZCBqcXVlcnkgd2l0aCBhIHNjcm9sbHNweSBwbHVnaW4uXG4gKiBUaGlzIHdhdGNoZXMgdGhlIHdpbmRvdyBzY3JvbGwgYW5kIGZpcmVzIGV2ZW50cyB3aGVuIGVsZW1lbnRzIGFyZSBzY3JvbGxlZCBpbnRvIHZpZXdwb3J0LlxuICpcbiAqIHRocm90dGxlKCkgYW5kIGdldFRpbWUoKSB0YWtlbiBmcm9tIFVuZGVyc2NvcmUuanNcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZVxuICpcbiAqIEBhdXRob3IgQ29weXJpZ2h0IDIwMTMgSm9obiBTbWFydFxuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS90aGVzbWFydC9qcXVlcnktc2Nyb2xsc3B5L21hc3Rlci9MSUNFTlNFXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90aGVzbWFydFxuICogQHZlcnNpb24gMC4xLjJcbiAqL1xuKGZ1bmN0aW9uKCQpIHtcblxuXHR2YXIgaldpbmRvdyA9ICQod2luZG93KTtcblx0dmFyIGVsZW1lbnRzID0gW107XG5cdHZhciBlbGVtZW50c0luVmlldyA9IFtdO1xuXHR2YXIgaXNTcHlpbmcgPSBmYWxzZTtcblx0dmFyIHRpY2tzID0gMDtcblx0dmFyIHVuaXF1ZV9pZCA9IDE7XG5cdHZhciBvZmZzZXQgPSB7XG5cdFx0dG9wIDogMCxcblx0XHRyaWdodCA6IDAsXG5cdFx0Ym90dG9tIDogMCxcblx0XHRsZWZ0IDogMCxcblx0fVxuXG5cdC8qKlxuXHQgKiBGaW5kIGVsZW1lbnRzIHRoYXQgYXJlIHdpdGhpbiB0aGUgYm91bmRhcnlcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRvcFxuXHQgKiBAcGFyYW0ge251bWJlcn0gcmlnaHRcblx0ICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbVxuXHQgKiBAcGFyYW0ge251bWJlcn0gbGVmdFxuXHQgKiBAcmV0dXJuIHtqUXVlcnl9XHRcdEEgY29sbGVjdGlvbiBvZiBlbGVtZW50c1xuXHQgKi9cblx0ZnVuY3Rpb24gZmluZEVsZW1lbnRzKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkge1xuXHRcdHZhciBoaXRzID0gJCgpO1xuXHRcdCQuZWFjaChlbGVtZW50cywgZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuXHRcdFx0aWYgKGVsZW1lbnQuaGVpZ2h0KCkgPiAwKSB7XG5cdFx0XHRcdHZhciBlbFRvcCA9IGVsZW1lbnQub2Zmc2V0KCkudG9wLFxuXHRcdFx0XHRcdGVsTGVmdCA9IGVsZW1lbnQub2Zmc2V0KCkubGVmdCxcblx0XHRcdFx0XHRlbFJpZ2h0ID0gZWxMZWZ0ICsgZWxlbWVudC53aWR0aCgpLFxuXHRcdFx0XHRcdGVsQm90dG9tID0gZWxUb3AgKyBlbGVtZW50LmhlaWdodCgpO1xuXG5cdFx0XHRcdHZhciBpc0ludGVyc2VjdCA9ICEoZWxMZWZ0ID4gcmlnaHQgfHxcblx0XHRcdFx0XHRlbFJpZ2h0IDwgbGVmdCB8fFxuXHRcdFx0XHRcdGVsVG9wID4gYm90dG9tIHx8XG5cdFx0XHRcdFx0ZWxCb3R0b20gPCB0b3ApO1xuXG5cdFx0XHRcdGlmIChpc0ludGVyc2VjdCkge1xuXHRcdFx0XHRcdGhpdHMucHVzaChlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGhpdHM7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBzY3JvbGxzIHRoZSB3aW5kb3dcblx0ICovXG5cdGZ1bmN0aW9uIG9uU2Nyb2xsKHNjcm9sbE9mZnNldCkge1xuXHRcdC8vIHVuaXF1ZSB0aWNrIGlkXG5cdFx0Kyt0aWNrcztcblxuXHRcdC8vIHZpZXdwb3J0IHJlY3RhbmdsZVxuXHRcdHZhciB0b3AgPSBqV2luZG93LnNjcm9sbFRvcCgpLFxuXHRcdFx0bGVmdCA9IGpXaW5kb3cuc2Nyb2xsTGVmdCgpLFxuXHRcdFx0cmlnaHQgPSBsZWZ0ICsgaldpbmRvdy53aWR0aCgpLFxuXHRcdFx0Ym90dG9tID0gdG9wICsgaldpbmRvdy5oZWlnaHQoKTtcblxuXHRcdC8vIGRldGVybWluZSB3aGljaCBlbGVtZW50cyBhcmUgaW4gdmlld1xuXHRcdHZhciBpbnRlcnNlY3Rpb25zID0gZmluZEVsZW1lbnRzKHRvcCtvZmZzZXQudG9wICsgc2Nyb2xsT2Zmc2V0IHx8IDIwMCwgcmlnaHQrb2Zmc2V0LnJpZ2h0LCBib3R0b20rb2Zmc2V0LmJvdHRvbSwgbGVmdCtvZmZzZXQubGVmdCk7XG5cdFx0JC5lYWNoKGludGVyc2VjdGlvbnMsIGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcblxuXHRcdFx0dmFyIGxhc3RUaWNrID0gZWxlbWVudC5kYXRhKCdzY3JvbGxTcHk6dGlja3MnKTtcblx0XHRcdGlmICh0eXBlb2YgbGFzdFRpY2sgIT0gJ251bWJlcicpIHtcblx0XHRcdFx0Ly8gZW50ZXJlZCBpbnRvIHZpZXdcblx0XHRcdFx0ZWxlbWVudC50cmlnZ2VySGFuZGxlcignc2Nyb2xsU3B5OmVudGVyJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHVwZGF0ZSB0aWNrIGlkXG5cdFx0XHRlbGVtZW50LmRhdGEoJ3Njcm9sbFNweTp0aWNrcycsIHRpY2tzKTtcblx0XHR9KTtcblxuXHRcdC8vIGRldGVybWluZSB3aGljaCBlbGVtZW50cyBhcmUgbm8gbG9uZ2VyIGluIHZpZXdcblx0XHQkLmVhY2goZWxlbWVudHNJblZpZXcsIGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcblx0XHRcdHZhciBsYXN0VGljayA9IGVsZW1lbnQuZGF0YSgnc2Nyb2xsU3B5OnRpY2tzJyk7XG5cdFx0XHRpZiAodHlwZW9mIGxhc3RUaWNrID09ICdudW1iZXInICYmIGxhc3RUaWNrICE9PSB0aWNrcykge1xuXHRcdFx0XHQvLyBleGl0ZWQgZnJvbSB2aWV3XG5cdFx0XHRcdGVsZW1lbnQudHJpZ2dlckhhbmRsZXIoJ3Njcm9sbFNweTpleGl0Jyk7XG5cdFx0XHRcdGVsZW1lbnQuZGF0YSgnc2Nyb2xsU3B5OnRpY2tzJywgbnVsbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyByZW1lbWJlciBlbGVtZW50cyBpbiB2aWV3IGZvciBuZXh0IHRpY2tcblx0XHRlbGVtZW50c0luVmlldyA9IGludGVyc2VjdGlvbnM7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcblx0Ki9cblx0ZnVuY3Rpb24gb25XaW5TaXplKCkge1xuXHRcdGpXaW5kb3cudHJpZ2dlcignc2Nyb2xsU3B5OndpblNpemUnKTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIEVuYWJsZXMgU2Nyb2xsU3B5IHVzaW5nIGEgc2VsZWN0b3Jcblx0ICogQHBhcmFtIHtqUXVlcnl8c3RyaW5nfSBzZWxlY3RvciAgVGhlIGVsZW1lbnRzIGNvbGxlY3Rpb24sIG9yIGEgc2VsZWN0b3Jcblx0ICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXHRPcHRpb25hbC5cbiAgICAgICAgdGhyb3R0bGUgOiBudW1iZXIgLT4gc2Nyb2xsc3B5IHRocm90dGxpbmcuIERlZmF1bHQ6IDEwMCBtc1xuICAgICAgICBvZmZzZXRUb3AgOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gdG9wLiBEZWZhdWx0OiAwXG4gICAgICAgIG9mZnNldFJpZ2h0IDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIHJpZ2h0LiBEZWZhdWx0OiAwXG4gICAgICAgIG9mZnNldEJvdHRvbSA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSBib3R0b20uIERlZmF1bHQ6IDBcbiAgICAgICAgb2Zmc2V0TGVmdCA6IG51bWJlciAtPiBvZmZzZXQgZnJvbSBsZWZ0LiBEZWZhdWx0OiAwXG5cdFx0XHRcdGFjdGl2ZUNsYXNzIDogc3RyaW5nIC0+IENsYXNzIG5hbWUgdG8gYmUgYWRkZWQgdG8gdGhlIGFjdGl2ZSBsaW5rLiBEZWZhdWx0OiBhY3RpdmVcblx0ICogQHJldHVybnMge2pRdWVyeX1cblx0ICovXG5cdCQuc2Nyb2xsU3B5ID0gZnVuY3Rpb24oc2VsZWN0b3IsIG9wdGlvbnMpIHtcblx0ICB2YXIgZGVmYXVsdHMgPSB7XG5cdFx0XHR0aHJvdHRsZTogMTAwLFxuXHRcdFx0c2Nyb2xsT2Zmc2V0OiAyMDAsIC8vIG9mZnNldCAtIDIwMCBhbGxvd3MgZWxlbWVudHMgbmVhciBib3R0b20gb2YgcGFnZSB0byBzY3JvbGxcblx0XHRcdGFjdGl2ZUNsYXNzOiAnYWN0aXZlJyxcblx0XHRcdGdldEFjdGl2ZUVsZW1lbnQ6IGZ1bmN0aW9uKGlkKSB7XG5cdFx0XHRcdHJldHVybiAnYVtocmVmPVwiIycgKyBpZCArICdcIl0nO1xuXHRcdFx0fVxuICAgIH07XG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHRcdHZhciB2aXNpYmxlID0gW107XG5cdFx0c2VsZWN0b3IgPSAkKHNlbGVjdG9yKTtcblx0XHRzZWxlY3Rvci5lYWNoKGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnRzLnB1c2goJChlbGVtZW50KSk7XG5cdFx0XHQkKGVsZW1lbnQpLmRhdGEoXCJzY3JvbGxTcHk6aWRcIiwgaSk7XG5cdFx0XHQvLyBTbW9vdGggc2Nyb2xsIHRvIHNlY3Rpb25cblx0XHQgICQoJ2FbaHJlZj1cIiMnICsgJChlbGVtZW50KS5hdHRyKCdpZCcpICsgJ1wiXScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHQgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCAgICB2YXIgb2Zmc2V0ID0gJChNYXRlcmlhbGl6ZS5lc2NhcGVIYXNoKHRoaXMuaGFzaCkpLm9mZnNldCgpLnRvcCArIDE7XG5cdCAgICBcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiBvZmZzZXQgLSBvcHRpb25zLnNjcm9sbE9mZnNldCB9LCB7ZHVyYXRpb246IDQwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnfSk7XG5cdFx0ICB9KTtcblx0XHR9KTtcblxuXHRcdG9mZnNldC50b3AgPSBvcHRpb25zLm9mZnNldFRvcCB8fCAwO1xuXHRcdG9mZnNldC5yaWdodCA9IG9wdGlvbnMub2Zmc2V0UmlnaHQgfHwgMDtcblx0XHRvZmZzZXQuYm90dG9tID0gb3B0aW9ucy5vZmZzZXRCb3R0b20gfHwgMDtcblx0XHRvZmZzZXQubGVmdCA9IG9wdGlvbnMub2Zmc2V0TGVmdCB8fCAwO1xuXG5cdFx0dmFyIHRocm90dGxlZFNjcm9sbCA9IE1hdGVyaWFsaXplLnRocm90dGxlKGZ1bmN0aW9uKCkge1xuXHRcdFx0b25TY3JvbGwob3B0aW9ucy5zY3JvbGxPZmZzZXQpO1xuXHRcdH0sIG9wdGlvbnMudGhyb3R0bGUgfHwgMTAwKTtcblx0XHR2YXIgcmVhZHlTY3JvbGwgPSBmdW5jdGlvbigpe1xuXHRcdFx0JChkb2N1bWVudCkucmVhZHkodGhyb3R0bGVkU2Nyb2xsKTtcblx0XHR9O1xuXG5cdFx0aWYgKCFpc1NweWluZykge1xuXHRcdFx0aldpbmRvdy5vbignc2Nyb2xsJywgcmVhZHlTY3JvbGwpO1xuXHRcdFx0aldpbmRvdy5vbigncmVzaXplJywgcmVhZHlTY3JvbGwpO1xuXHRcdFx0aXNTcHlpbmcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIHBlcmZvcm0gYSBzY2FuIG9uY2UsIGFmdGVyIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHQsIGFuZCBhZnRlciBkb20gaXMgcmVhZHlcblx0XHRzZXRUaW1lb3V0KHJlYWR5U2Nyb2xsLCAwKTtcblxuXG5cdFx0c2VsZWN0b3Iub24oJ3Njcm9sbFNweTplbnRlcicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmlzaWJsZSA9ICQuZ3JlcCh2aXNpYmxlLCBmdW5jdGlvbih2YWx1ZSkge1xuXHQgICAgICByZXR1cm4gdmFsdWUuaGVpZ2h0KCkgIT0gMDtcblx0ICAgIH0pO1xuXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG5cdFx0XHRpZiAodmlzaWJsZVswXSkge1xuXHRcdFx0XHQkKG9wdGlvbnMuZ2V0QWN0aXZlRWxlbWVudCh2aXNpYmxlWzBdLmF0dHIoJ2lkJykpKS5yZW1vdmVDbGFzcyhvcHRpb25zLmFjdGl2ZUNsYXNzKTtcblx0XHRcdFx0aWYgKCR0aGlzLmRhdGEoJ3Njcm9sbFNweTppZCcpIDwgdmlzaWJsZVswXS5kYXRhKCdzY3JvbGxTcHk6aWQnKSkge1xuXHRcdFx0XHRcdHZpc2libGUudW5zaGlmdCgkKHRoaXMpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHR2aXNpYmxlLnB1c2goJCh0aGlzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR2aXNpYmxlLnB1c2goJCh0aGlzKSk7XG5cdFx0XHR9XG5cblxuXHRcdFx0JChvcHRpb25zLmdldEFjdGl2ZUVsZW1lbnQodmlzaWJsZVswXS5hdHRyKCdpZCcpKSkuYWRkQ2xhc3Mob3B0aW9ucy5hY3RpdmVDbGFzcyk7XG5cdFx0fSk7XG5cdFx0c2VsZWN0b3Iub24oJ3Njcm9sbFNweTpleGl0JywgZnVuY3Rpb24oKSB7XG5cdFx0XHR2aXNpYmxlID0gJC5ncmVwKHZpc2libGUsIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdCAgICAgIHJldHVybiB2YWx1ZS5oZWlnaHQoKSAhPSAwO1xuXHQgICAgfSk7XG5cblx0XHRcdGlmICh2aXNpYmxlWzBdKSB7XG5cdFx0XHRcdCQob3B0aW9ucy5nZXRBY3RpdmVFbGVtZW50KHZpc2libGVbMF0uYXR0cignaWQnKSkpLnJlbW92ZUNsYXNzKG9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXHRcdFx0XHR2aXNpYmxlID0gJC5ncmVwKHZpc2libGUsIGZ1bmN0aW9uKHZhbHVlKSB7XG5cdCAgICAgICAgcmV0dXJuIHZhbHVlLmF0dHIoJ2lkJykgIT0gJHRoaXMuYXR0cignaWQnKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIGlmICh2aXNpYmxlWzBdKSB7IC8vIENoZWNrIGlmIGVtcHR5XG5cdFx0XHRcdFx0JChvcHRpb25zLmdldEFjdGl2ZUVsZW1lbnQodmlzaWJsZVswXS5hdHRyKCdpZCcpKSkuYWRkQ2xhc3Mob3B0aW9ucy5hY3RpdmVDbGFzcyk7XG5cdCAgICAgIH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBzZWxlY3Rvcjtcblx0fTtcblxuXHQvKipcblx0ICogTGlzdGVuIGZvciB3aW5kb3cgcmVzaXplIGV2ZW50c1xuXHQgKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcdFx0XHRcdFx0XHRPcHRpb25hbC4gU2V0IHsgdGhyb3R0bGU6IG51bWJlciB9IHRvIGNoYW5nZSB0aHJvdHRsaW5nLiBEZWZhdWx0OiAxMDAgbXNcblx0ICogQHJldHVybnMge2pRdWVyeX1cdFx0JCh3aW5kb3cpXG5cdCAqL1xuXHQkLndpblNpemVTcHkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0JC53aW5TaXplU3B5ID0gZnVuY3Rpb24oKSB7IHJldHVybiBqV2luZG93OyB9OyAvLyBsb2NrIGZyb20gbXVsdGlwbGUgY2FsbHNcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7XG5cdFx0XHR0aHJvdHRsZTogMTAwXG5cdFx0fTtcblx0XHRyZXR1cm4galdpbmRvdy5vbigncmVzaXplJywgTWF0ZXJpYWxpemUudGhyb3R0bGUob25XaW5TaXplLCBvcHRpb25zLnRocm90dGxlIHx8IDEwMCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFbmFibGVzIFNjcm9sbFNweSBvbiBhIGNvbGxlY3Rpb24gb2YgZWxlbWVudHNcblx0ICogZS5nLiAkKCcuc2Nyb2xsU3B5Jykuc2Nyb2xsU3B5KClcblx0ICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXHRPcHRpb25hbC5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aHJvdHRsZSA6IG51bWJlciAtPiBzY3JvbGxzcHkgdGhyb3R0bGluZy4gRGVmYXVsdDogMTAwIG1zXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0VG9wIDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIHRvcC4gRGVmYXVsdDogMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldFJpZ2h0IDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIHJpZ2h0LiBEZWZhdWx0OiAwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2Zmc2V0Qm90dG9tIDogbnVtYmVyIC0+IG9mZnNldCBmcm9tIGJvdHRvbS4gRGVmYXVsdDogMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldExlZnQgOiBudW1iZXIgLT4gb2Zmc2V0IGZyb20gbGVmdC4gRGVmYXVsdDogMFxuXHQgKiBAcmV0dXJucyB7alF1ZXJ5fVxuXHQgKi9cblx0JC5mbi5zY3JvbGxTcHkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0cmV0dXJuICQuc2Nyb2xsU3B5KCQodGhpcyksIG9wdGlvbnMpO1xuXHR9O1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIGxhYmVscyBvZiB0ZXh0IGZpZWxkc1xuICAgIE1hdGVyaWFsaXplLnVwZGF0ZVRleHRGaWVsZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbnB1dF9zZWxlY3RvciA9ICdpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgdGV4dGFyZWEnO1xuICAgICAgJChpbnB1dF9zZWxlY3RvcikuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICBpZiAoJChlbGVtZW50KS52YWwoKS5sZW5ndGggPiAwIHx8ICQoZWxlbWVudCkuaXMoJzpmb2N1cycpIHx8IGVsZW1lbnQuYXV0b2ZvY3VzIHx8ICR0aGlzLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmICgkKGVsZW1lbnQpWzBdLnZhbGlkaXR5KSB7XG4gICAgICAgICAgJHRoaXMuc2libGluZ3MoJ2xhYmVsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScsICQoZWxlbWVudClbMF0udmFsaWRpdHkuYmFkSW5wdXQgPT09IHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFRleHQgYmFzZWQgaW5wdXRzXG4gICAgdmFyIGlucHV0X3NlbGVjdG9yID0gJ2lucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCB0ZXh0YXJlYSc7XG5cbiAgICAvLyBBZGQgYWN0aXZlIGlmIGZvcm0gYXV0byBjb21wbGV0ZVxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCBpbnB1dF9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYoJCh0aGlzKS52YWwoKS5sZW5ndGggIT09IDAgfHwgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICB2YWxpZGF0ZV9maWVsZCgkKHRoaXMpKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBhY3RpdmUgaWYgaW5wdXQgZWxlbWVudCBoYXMgYmVlbiBwcmUtcG9wdWxhdGVkIG9uIGRvY3VtZW50IHJlYWR5XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICBNYXRlcmlhbGl6ZS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBIVE1MIERPTSBGT1JNIFJFU0VUIGhhbmRsaW5nXG4gICAgJChkb2N1bWVudCkub24oJ3Jlc2V0JywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGZvcm1SZXNldCA9ICQoZS50YXJnZXQpO1xuICAgICAgaWYgKGZvcm1SZXNldC5pcygnZm9ybScpKSB7XG4gICAgICAgIGZvcm1SZXNldC5maW5kKGlucHV0X3NlbGVjdG9yKS5yZW1vdmVDbGFzcygndmFsaWQnKS5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgICAgICBmb3JtUmVzZXQuZmluZChpbnB1dF9zZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCQodGhpcykuYXR0cigndmFsdWUnKSA9PT0gJycpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzZXQgc2VsZWN0XG4gICAgICAgIGZvcm1SZXNldC5maW5kKCdzZWxlY3QuaW5pdGlhbGl6ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgcmVzZXRfdGV4dCA9IGZvcm1SZXNldC5maW5kKCdvcHRpb25bc2VsZWN0ZWRdJykudGV4dCgpO1xuICAgICAgICAgIGZvcm1SZXNldC5zaWJsaW5ncygnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJykudmFsKHJlc2V0X3RleHQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEFkZCBhY3RpdmUgd2hlbiBlbGVtZW50IGhhcyBmb2N1c1xuICAgICQoZG9jdW1lbnQpLm9uKCdmb2N1cycsIGlucHV0X3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCdsYWJlbCwgLnByZWZpeCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdibHVyJywgaW5wdXRfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkaW5wdXRFbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgIHZhciBzZWxlY3RvciA9IFwiLnByZWZpeFwiO1xuXG4gICAgICBpZiAoJGlucHV0RWxlbWVudC52YWwoKS5sZW5ndGggPT09IDAgJiYgJGlucHV0RWxlbWVudFswXS52YWxpZGl0eS5iYWRJbnB1dCAhPT0gdHJ1ZSAmJiAkaW5wdXRFbGVtZW50LmF0dHIoJ3BsYWNlaG9sZGVyJykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZWxlY3RvciArPSBcIiwgbGFiZWxcIjtcbiAgICAgIH1cblxuICAgICAgJGlucHV0RWxlbWVudC5zaWJsaW5ncyhzZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICB2YWxpZGF0ZV9maWVsZCgkaW5wdXRFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy52YWxpZGF0ZV9maWVsZCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgdmFyIGhhc0xlbmd0aCA9IG9iamVjdC5hdHRyKCdkYXRhLWxlbmd0aCcpICE9PSB1bmRlZmluZWQ7XG4gICAgICB2YXIgbGVuQXR0ciA9IHBhcnNlSW50KG9iamVjdC5hdHRyKCdkYXRhLWxlbmd0aCcpKTtcbiAgICAgIHZhciBsZW4gPSBvYmplY3QudmFsKCkubGVuZ3RoO1xuXG4gICAgICBpZiAob2JqZWN0LnZhbCgpLmxlbmd0aCA9PT0gMCAmJiBvYmplY3RbMF0udmFsaWRpdHkuYmFkSW5wdXQgPT09IGZhbHNlICYmICFvYmplY3QuaXMoJzpyZXF1aXJlZCcpKSB7XG4gICAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ3ZhbGlkYXRlJykpIHtcbiAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdpbnZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCd2YWxpZGF0ZScpKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIGNoYXJhY3RlciBjb3VudGVyIGF0dHJpYnV0ZXNcbiAgICAgICAgICBpZiAoKG9iamVjdC5pcygnOnZhbGlkJykgJiYgaGFzTGVuZ3RoICYmIChsZW4gPD0gbGVuQXR0cikpIHx8IChvYmplY3QuaXMoJzp2YWxpZCcpICYmICFoYXNMZW5ndGgpKSB7XG4gICAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIG9iamVjdC5hZGRDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgICBvYmplY3QuYWRkQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gUmFkaW8gYW5kIENoZWNrYm94IGZvY3VzIGNsYXNzXG4gICAgdmFyIHJhZGlvX2NoZWNrYm94ID0gJ2lucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XSc7XG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwLnJhZGlvJywgcmFkaW9fY2hlY2tib3gsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vIFRBQiwgY2hlY2sgaWYgdGFiYmluZyB0byByYWRpbyBvciBjaGVja2JveC5cbiAgICAgIGlmIChlLndoaWNoID09PSA5KSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RhYmJlZCcpO1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5vbmUoJ2JsdXInLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0YWJiZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRleHRhcmVhIEF1dG8gUmVzaXplXG4gICAgdmFyIGhpZGRlbkRpdiA9ICQoJy5oaWRkZW5kaXYnKS5maXJzdCgpO1xuICAgIGlmICghaGlkZGVuRGl2Lmxlbmd0aCkge1xuICAgICAgaGlkZGVuRGl2ID0gJCgnPGRpdiBjbGFzcz1cImhpZGRlbmRpdiBjb21tb25cIj48L2Rpdj4nKTtcbiAgICAgICQoJ2JvZHknKS5hcHBlbmQoaGlkZGVuRGl2KTtcbiAgICB9XG4gICAgdmFyIHRleHRfYXJlYV9zZWxlY3RvciA9ICcubWF0ZXJpYWxpemUtdGV4dGFyZWEnO1xuXG4gICAgZnVuY3Rpb24gdGV4dGFyZWFBdXRvUmVzaXplKCR0ZXh0YXJlYSkge1xuICAgICAgLy8gU2V0IGZvbnQgcHJvcGVydGllcyBvZiBoaWRkZW5EaXZcblxuICAgICAgdmFyIGZvbnRGYW1pbHkgPSAkdGV4dGFyZWEuY3NzKCdmb250LWZhbWlseScpO1xuICAgICAgdmFyIGZvbnRTaXplID0gJHRleHRhcmVhLmNzcygnZm9udC1zaXplJyk7XG4gICAgICB2YXIgbGluZUhlaWdodCA9ICR0ZXh0YXJlYS5jc3MoJ2xpbmUtaGVpZ2h0Jyk7XG4gICAgICB2YXIgcGFkZGluZyA9ICR0ZXh0YXJlYS5jc3MoJ3BhZGRpbmcnKTtcblxuICAgICAgaWYgKGZvbnRTaXplKSB7IGhpZGRlbkRpdi5jc3MoJ2ZvbnQtc2l6ZScsIGZvbnRTaXplKTsgfVxuICAgICAgaWYgKGZvbnRGYW1pbHkpIHsgaGlkZGVuRGl2LmNzcygnZm9udC1mYW1pbHknLCBmb250RmFtaWx5KTsgfVxuICAgICAgaWYgKGxpbmVIZWlnaHQpIHsgaGlkZGVuRGl2LmNzcygnbGluZS1oZWlnaHQnLCBsaW5lSGVpZ2h0KTsgfVxuICAgICAgaWYgKHBhZGRpbmcpIHsgaGlkZGVuRGl2LmNzcygncGFkZGluZycsIHBhZGRpbmcpOyB9XG5cbiAgICAgIC8vIFNldCBvcmlnaW5hbC1oZWlnaHQsIGlmIG5vbmVcbiAgICAgIGlmICghJHRleHRhcmVhLmRhdGEoJ29yaWdpbmFsLWhlaWdodCcpKSB7XG4gICAgICAgICR0ZXh0YXJlYS5kYXRhKCdvcmlnaW5hbC1oZWlnaHQnLCAkdGV4dGFyZWEuaGVpZ2h0KCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHRleHRhcmVhLmF0dHIoJ3dyYXAnKSA9PT0gJ29mZicpIHtcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnb3ZlcmZsb3ctd3JhcCcsICdub3JtYWwnKVxuICAgICAgICAgICAgICAgICAuY3NzKCd3aGl0ZS1zcGFjZScsICdwcmUnKTtcbiAgICAgIH1cblxuICAgICAgaGlkZGVuRGl2LnRleHQoJHRleHRhcmVhLnZhbCgpICsgJ1xcbicpO1xuICAgICAgdmFyIGNvbnRlbnQgPSBoaWRkZW5EaXYuaHRtbCgpLnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpO1xuICAgICAgaGlkZGVuRGl2Lmh0bWwoY29udGVudCk7XG5cblxuICAgICAgLy8gV2hlbiB0ZXh0YXJlYSBpcyBoaWRkZW4sIHdpZHRoIGdvZXMgY3JhenkuXG4gICAgICAvLyBBcHByb3hpbWF0ZSB3aXRoIGhhbGYgb2Ygd2luZG93IHNpemVcblxuICAgICAgaWYgKCR0ZXh0YXJlYS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICBoaWRkZW5EaXYuY3NzKCd3aWR0aCcsICR0ZXh0YXJlYS53aWR0aCgpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBoaWRkZW5EaXYuY3NzKCd3aWR0aCcsICQod2luZG93KS53aWR0aCgpLzIpO1xuICAgICAgfVxuXG5cbiAgICAgIC8qKlxuICAgICAgICogUmVzaXplIGlmIHRoZSBuZXcgaGVpZ2h0IGlzIGdyZWF0ZXIgdGhhbiB0aGVcbiAgICAgICAqIG9yaWdpbmFsIGhlaWdodCBvZiB0aGUgdGV4dGFyZWFcbiAgICAgICAqL1xuICAgICAgaWYgKCR0ZXh0YXJlYS5kYXRhKCdvcmlnaW5hbC1oZWlnaHQnKSA8PSBoaWRkZW5EaXYuaGVpZ2h0KCkpIHtcbiAgICAgICAgJHRleHRhcmVhLmNzcygnaGVpZ2h0JywgaGlkZGVuRGl2LmhlaWdodCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoJHRleHRhcmVhLnZhbCgpLmxlbmd0aCA8ICR0ZXh0YXJlYS5kYXRhKCdwcmV2aW91cy1sZW5ndGgnKSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogSW4gY2FzZSB0aGUgbmV3IGhlaWdodCBpcyBsZXNzIHRoYW4gb3JpZ2luYWwgaGVpZ2h0LCBpdFxuICAgICAgICAgKiBtZWFucyB0aGUgdGV4dGFyZWEgaGFzIGxlc3MgdGV4dCB0aGFuIGJlZm9yZVxuICAgICAgICAgKiBTbyB3ZSBzZXQgdGhlIGhlaWdodCB0byB0aGUgb3JpZ2luYWwgb25lXG4gICAgICAgICAqL1xuICAgICAgICAkdGV4dGFyZWEuY3NzKCdoZWlnaHQnLCAkdGV4dGFyZWEuZGF0YSgnb3JpZ2luYWwtaGVpZ2h0JykpO1xuICAgICAgfVxuICAgICAgJHRleHRhcmVhLmRhdGEoJ3ByZXZpb3VzLWxlbmd0aCcsICR0ZXh0YXJlYS52YWwoKS5sZW5ndGgpO1xuICAgIH1cblxuICAgICQodGV4dF9hcmVhX3NlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGV4dGFyZWEgPSAkKHRoaXMpO1xuICAgICAgLyoqXG4gICAgICAgKiBJbnN0ZWFkIG9mIHJlc2l6aW5nIHRleHRhcmVhIG9uIGRvY3VtZW50IGxvYWQsXG4gICAgICAgKiBzdG9yZSB0aGUgb3JpZ2luYWwgaGVpZ2h0IGFuZCB0aGUgb3JpZ2luYWwgbGVuZ3RoXG4gICAgICAgKi9cbiAgICAgICR0ZXh0YXJlYS5kYXRhKCdvcmlnaW5hbC1oZWlnaHQnLCAkdGV4dGFyZWEuaGVpZ2h0KCkpO1xuICAgICAgJHRleHRhcmVhLmRhdGEoJ3ByZXZpb3VzLWxlbmd0aCcsICR0ZXh0YXJlYS52YWwoKS5sZW5ndGgpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdrZXl1cCBrZXlkb3duIGF1dG9yZXNpemUnLCB0ZXh0X2FyZWFfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRleHRhcmVhQXV0b1Jlc2l6ZSgkKHRoaXMpKTtcbiAgICB9KTtcblxuICAgIC8vIEZpbGUgSW5wdXQgUGF0aFxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmZpbGUtZmllbGQgaW5wdXRbdHlwZT1cImZpbGVcIl0nLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmlsZV9maWVsZCA9ICQodGhpcykuY2xvc2VzdCgnLmZpbGUtZmllbGQnKTtcbiAgICAgIHZhciBwYXRoX2lucHV0ID0gZmlsZV9maWVsZC5maW5kKCdpbnB1dC5maWxlLXBhdGgnKTtcbiAgICAgIHZhciBmaWxlcyAgICAgID0gJCh0aGlzKVswXS5maWxlcztcbiAgICAgIHZhciBmaWxlX25hbWVzID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbGVfbmFtZXMucHVzaChmaWxlc1tpXS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHBhdGhfaW5wdXQudmFsKGZpbGVfbmFtZXMuam9pbihcIiwgXCIpKTtcbiAgICAgIHBhdGhfaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG5cbiAgICAvKioqKioqKioqKioqKioqKlxuICAgICogIFJhbmdlIElucHV0ICAqXG4gICAgKioqKioqKioqKioqKioqKi9cblxuICAgIHZhciByYW5nZV90eXBlID0gJ2lucHV0W3R5cGU9cmFuZ2VdJztcbiAgICB2YXIgcmFuZ2VfbW91c2Vkb3duID0gZmFsc2U7XG4gICAgdmFyIGxlZnQ7XG5cbiAgICAkKHJhbmdlX3R5cGUpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRodW1iID0gJCgnPHNwYW4gY2xhc3M9XCJ0aHVtYlwiPjxzcGFuIGNsYXNzPVwidmFsdWVcIj48L3NwYW4+PC9zcGFuPicpO1xuICAgICAgJCh0aGlzKS5hZnRlcih0aHVtYik7XG4gICAgfSk7XG5cbiAgICB2YXIgc2hvd1JhbmdlQnViYmxlID0gZnVuY3Rpb24odGh1bWIpIHtcbiAgICAgIHZhciBwYWRkaW5nTGVmdCA9IHBhcnNlSW50KHRodW1iLnBhcmVudCgpLmNzcygncGFkZGluZy1sZWZ0JykpO1xuICAgICAgdmFyIG1hcmdpbkxlZnQgPSAoLTcgKyBwYWRkaW5nTGVmdCkgKyAncHgnO1xuICAgICAgdGh1bWIudmVsb2NpdHkoeyBoZWlnaHQ6IFwiMzBweFwiLCB3aWR0aDogXCIzMHB4XCIsIHRvcDogXCItMzBweFwiLCBtYXJnaW5MZWZ0OiBtYXJnaW5MZWZ0fSwgeyBkdXJhdGlvbjogMzAwLCBlYXNpbmc6ICdlYXNlT3V0RXhwbycgfSk7XG4gICAgfTtcblxuICAgIHZhciBjYWxjUmFuZ2VPZmZzZXQgPSBmdW5jdGlvbihyYW5nZSkge1xuICAgICAgdmFyIHdpZHRoID0gcmFuZ2Uud2lkdGgoKSAtIDE1O1xuICAgICAgdmFyIG1heCA9IHBhcnNlRmxvYXQocmFuZ2UuYXR0cignbWF4JykpO1xuICAgICAgdmFyIG1pbiA9IHBhcnNlRmxvYXQocmFuZ2UuYXR0cignbWluJykpO1xuICAgICAgdmFyIHBlcmNlbnQgPSAocGFyc2VGbG9hdChyYW5nZS52YWwoKSkgLSBtaW4pIC8gKG1heCAtIG1pbik7XG4gICAgICByZXR1cm4gcGVyY2VudCAqIHdpZHRoO1xuICAgIH1cblxuICAgIHZhciByYW5nZV93cmFwcGVyID0gJy5yYW5nZS1maWVsZCc7XG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsIHJhbmdlX3R5cGUsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciB0aHVtYiA9ICQodGhpcykuc2libGluZ3MoJy50aHVtYicpO1xuICAgICAgdGh1bWIuZmluZCgnLnZhbHVlJykuaHRtbCgkKHRoaXMpLnZhbCgpKTtcblxuICAgICAgaWYgKCF0aHVtYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgc2hvd1JhbmdlQnViYmxlKHRodW1iKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9mZnNldExlZnQgPSBjYWxjUmFuZ2VPZmZzZXQoJCh0aGlzKSk7XG4gICAgICB0aHVtYi5hZGRDbGFzcygnYWN0aXZlJykuY3NzKCdsZWZ0Jywgb2Zmc2V0TGVmdCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignbW91c2Vkb3duIHRvdWNoc3RhcnQnLCByYW5nZV90eXBlLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdGh1bWIgPSAkKHRoaXMpLnNpYmxpbmdzKCcudGh1bWInKTtcblxuICAgICAgLy8gSWYgdGh1bWIgaW5kaWNhdG9yIGRvZXMgbm90IGV4aXN0IHlldCwgY3JlYXRlIGl0XG4gICAgICBpZiAodGh1bWIubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdGh1bWIgPSAkKCc8c3BhbiBjbGFzcz1cInRodW1iXCI+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgICAgICQodGhpcykuYWZ0ZXIodGh1bWIpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgaW5kaWNhdG9yIHZhbHVlXG4gICAgICB0aHVtYi5maW5kKCcudmFsdWUnKS5odG1sKCQodGhpcykudmFsKCkpO1xuXG4gICAgICByYW5nZV9tb3VzZWRvd24gPSB0cnVlO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIGlmICghdGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHNob3dSYW5nZUJ1YmJsZSh0aHVtYik7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnR5cGUgIT09ICdpbnB1dCcpIHtcbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSBjYWxjUmFuZ2VPZmZzZXQoJCh0aGlzKSk7XG4gICAgICAgIHRodW1iLmFkZENsYXNzKCdhY3RpdmUnKS5jc3MoJ2xlZnQnLCBvZmZzZXRMZWZ0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwIHRvdWNoZW5kJywgcmFuZ2Vfd3JhcHBlciwgZnVuY3Rpb24oKSB7XG4gICAgICByYW5nZV9tb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2lucHV0IG1vdXNlbW92ZSB0b3VjaG1vdmUnLCByYW5nZV93cmFwcGVyLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgdGh1bWIgPSAkKHRoaXMpLmNoaWxkcmVuKCcudGh1bWInKTtcbiAgICAgIHZhciBsZWZ0O1xuICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5maW5kKHJhbmdlX3R5cGUpO1xuXG4gICAgICBpZiAocmFuZ2VfbW91c2Vkb3duKSB7XG4gICAgICAgIGlmICghdGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgc2hvd1JhbmdlQnViYmxlKHRodW1iKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gY2FsY1JhbmdlT2Zmc2V0KGlucHV0KTtcbiAgICAgICAgdGh1bWIuYWRkQ2xhc3MoJ2FjdGl2ZScpLmNzcygnbGVmdCcsIG9mZnNldExlZnQpO1xuICAgICAgICB0aHVtYi5maW5kKCcudmFsdWUnKS5odG1sKHRodW1iLnNpYmxpbmdzKHJhbmdlX3R5cGUpLnZhbCgpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdtb3VzZW91dCB0b3VjaGxlYXZlJywgcmFuZ2Vfd3JhcHBlciwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXJhbmdlX21vdXNlZG93bikge1xuXG4gICAgICAgIHZhciB0aHVtYiA9ICQodGhpcykuY2hpbGRyZW4oJy50aHVtYicpO1xuICAgICAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYXJzZUludCgkKHRoaXMpLmNzcygncGFkZGluZy1sZWZ0JykpO1xuICAgICAgICB2YXIgbWFyZ2luTGVmdCA9ICg3ICsgcGFkZGluZ0xlZnQpICsgJ3B4JztcblxuICAgICAgICBpZiAodGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgdGh1bWIudmVsb2NpdHkoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgdG9wOiAnMTBweCcsIG1hcmdpbkxlZnQ6IG1hcmdpbkxlZnR9LCB7IGR1cmF0aW9uOiAxMDAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGh1bWIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICogQXV0byBjb21wbGV0ZSBwbHVnaW4gICpcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAkLmZuLmF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAvLyBEZWZhdWx0c1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgbGltaXQ6IEluZmluaXR5LFxuICAgICAgICBvbkF1dG9jb21wbGV0ZTogbnVsbCxcbiAgICAgICAgbWluTGVuZ3RoOiAxXG4gICAgICB9O1xuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGEsXG4gICAgICAgICAgICBjb3VudCA9IDAsXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IC0xLFxuICAgICAgICAgICAgb2xkVmFsLFxuICAgICAgICAgICAgJGlucHV0RGl2ID0gJGlucHV0LmNsb3Nlc3QoJy5pbnB1dC1maWVsZCcpOyAvLyBEaXYgdG8gYXBwZW5kIG9uXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgZGF0YSBpc24ndCBlbXB0eVxuICAgICAgICBpZiAoISQuaXNFbXB0eU9iamVjdChkYXRhKSkge1xuICAgICAgICAgIHZhciAkYXV0b2NvbXBsZXRlID0gJCgnPHVsIGNsYXNzPVwiYXV0b2NvbXBsZXRlLWNvbnRlbnQgZHJvcGRvd24tY29udGVudFwiPjwvdWw+Jyk7XG4gICAgICAgICAgdmFyICRvbGRBdXRvY29tcGxldGU7XG5cbiAgICAgICAgICAvLyBBcHBlbmQgYXV0b2NvbXBsZXRlIGVsZW1lbnQuXG4gICAgICAgICAgLy8gUHJldmVudCBkb3VibGUgc3RydWN0dXJlIGluaXQuXG4gICAgICAgICAgaWYgKCRpbnB1dERpdi5sZW5ndGgpIHtcbiAgICAgICAgICAgICRvbGRBdXRvY29tcGxldGUgPSAkaW5wdXREaXYuY2hpbGRyZW4oJy5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50JykuZmlyc3QoKTtcbiAgICAgICAgICAgIGlmICghJG9sZEF1dG9jb21wbGV0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgJGlucHV0RGl2LmFwcGVuZCgkYXV0b2NvbXBsZXRlKTsgLy8gU2V0IHVsIGluIGJvZHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG9sZEF1dG9jb21wbGV0ZSA9ICRpbnB1dC5uZXh0KCcuYXV0b2NvbXBsZXRlLWNvbnRlbnQuZHJvcGRvd24tY29udGVudCcpO1xuICAgICAgICAgICAgaWYgKCEkb2xkQXV0b2NvbXBsZXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAkaW5wdXQuYWZ0ZXIoJGF1dG9jb21wbGV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgkb2xkQXV0b2NvbXBsZXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZSA9ICRvbGRBdXRvY29tcGxldGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSGlnaGxpZ2h0IHBhcnRpYWwgbWF0Y2guXG4gICAgICAgICAgdmFyIGhpZ2hsaWdodCA9IGZ1bmN0aW9uKHN0cmluZywgJGVsKSB7XG4gICAgICAgICAgICB2YXIgaW1nID0gJGVsLmZpbmQoJ2ltZycpO1xuICAgICAgICAgICAgdmFyIG1hdGNoU3RhcnQgPSAkZWwudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIlwiICsgc3RyaW5nLnRvTG93ZXJDYXNlKCkgKyBcIlwiKSxcbiAgICAgICAgICAgICAgICBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyBzdHJpbmcubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICBiZWZvcmVNYXRjaCA9ICRlbC50ZXh0KCkuc2xpY2UoMCwgbWF0Y2hTdGFydCksXG4gICAgICAgICAgICAgICAgbWF0Y2hUZXh0ID0gJGVsLnRleHQoKS5zbGljZShtYXRjaFN0YXJ0LCBtYXRjaEVuZCArIDEpLFxuICAgICAgICAgICAgICAgIGFmdGVyTWF0Y2ggPSAkZWwudGV4dCgpLnNsaWNlKG1hdGNoRW5kICsgMSk7XG4gICAgICAgICAgICAkZWwuaHRtbChcIjxzcGFuPlwiICsgYmVmb3JlTWF0Y2ggKyBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPlwiICsgbWF0Y2hUZXh0ICsgXCI8L3NwYW4+XCIgKyBhZnRlck1hdGNoICsgXCI8L3NwYW4+XCIpO1xuICAgICAgICAgICAgaWYgKGltZy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgJGVsLnByZXBlbmQoaW1nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gUmVzZXQgY3VycmVudCBlbGVtZW50IHBvc2l0aW9uXG4gICAgICAgICAgdmFyIHJlc2V0Q3VycmVudEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gLTE7XG4gICAgICAgICAgICAkYXV0b2NvbXBsZXRlLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIGF1dG9jb21wbGV0ZSBlbGVtZW50c1xuICAgICAgICAgIHZhciByZW1vdmVBdXRvY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRhdXRvY29tcGxldGUuZW1wdHkoKTtcbiAgICAgICAgICAgIHJlc2V0Q3VycmVudEVsZW1lbnQoKTtcbiAgICAgICAgICAgIG9sZFZhbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgJGlucHV0Lm9mZignYmx1ci5hdXRvY29tcGxldGUnKS5vbignYmx1ci5hdXRvY29tcGxldGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZUF1dG9jb21wbGV0ZSgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gUGVyZm9ybSBzZWFyY2hcbiAgICAgICAgICAkaW5wdXQub2ZmKCdrZXl1cC5hdXRvY29tcGxldGUgZm9jdXMuYXV0b2NvbXBsZXRlJykub24oJ2tleXVwLmF1dG9jb21wbGV0ZSBmb2N1cy5hdXRvY29tcGxldGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gUmVzZXQgY291bnQuXG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgdmFsID0gJGlucHV0LnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIERvbid0IGNhcHR1cmUgZW50ZXIgb3IgYXJyb3cga2V5IHVzYWdlLlxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzIHx8XG4gICAgICAgICAgICAgICAgZS53aGljaCA9PT0gMzggfHxcbiAgICAgICAgICAgICAgICBlLndoaWNoID09PSA0MCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGlucHV0IGlzbid0IGVtcHR5XG4gICAgICAgICAgICBpZiAob2xkVmFsICE9PSB2YWwpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlQXV0b2NvbXBsZXRlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPj0gb3B0aW9ucy5taW5MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmXG4gICAgICAgICAgICAgICAgICAgICAga2V5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBCcmVhayBpZiBwYXN0IGxpbWl0XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA+PSBvcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXV0b2NvbXBsZXRlT3B0aW9uID0gJCgnPGxpPjwvbGk+Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIWRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZU9wdGlvbi5hcHBlbmQoJzxpbWcgc3JjPVwiJysgZGF0YVtrZXldICsnXCIgY2xhc3M9XCJyaWdodCBjaXJjbGVcIj48c3Bhbj4nKyBrZXkgKyc8L3NwYW4+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlT3B0aW9uLmFwcGVuZCgnPHNwYW4+Jysga2V5ICsnPC9zcGFuPicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5hcHBlbmQoYXV0b2NvbXBsZXRlT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0KHZhbCwgYXV0b2NvbXBsZXRlT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIG9sZFZhbFxuICAgICAgICAgICAgb2xkVmFsID0gdmFsO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJGlucHV0Lm9mZigna2V5ZG93bi5hdXRvY29tcGxldGUnKS5vbigna2V5ZG93bi5hdXRvY29tcGxldGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gQXJyb3cga2V5cyBhbmQgZW50ZXIga2V5IHVzYWdlXG4gICAgICAgICAgICB2YXIga2V5Q29kZSA9IGUud2hpY2gsXG4gICAgICAgICAgICAgICAgbGlFbGVtZW50LFxuICAgICAgICAgICAgICAgIG51bUl0ZW1zID0gJGF1dG9jb21wbGV0ZS5jaGlsZHJlbignbGknKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgJGFjdGl2ZSA9ICRhdXRvY29tcGxldGUuY2hpbGRyZW4oJy5hY3RpdmUnKS5maXJzdCgpO1xuXG4gICAgICAgICAgICAvLyBzZWxlY3QgZWxlbWVudCBvbiBFbnRlclxuICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IDEzICYmIGFjdGl2ZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgbGlFbGVtZW50ID0gJGF1dG9jb21wbGV0ZS5jaGlsZHJlbignbGknKS5lcShhY3RpdmVJbmRleCk7XG4gICAgICAgICAgICAgIGlmIChsaUVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGlFbGVtZW50LnRyaWdnZXIoJ21vdXNlZG93bi5hdXRvY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXB0dXJlIHVwIGFuZCBkb3duIGtleVxuICAgICAgICAgICAgaWYgKCBrZXlDb2RlID09PSAzOCB8fCBrZXlDb2RlID09PSA0MCApIHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSAzOCAmJlxuICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXgtLTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSA0MCAmJlxuICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPCAobnVtSXRlbXMgLSAxKSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAkYXV0b2NvbXBsZXRlLmNoaWxkcmVuKCdsaScpLmVxKGFjdGl2ZUluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFNldCBpbnB1dCB2YWx1ZVxuICAgICAgICAgICRhdXRvY29tcGxldGUub2ZmKCdtb3VzZWRvd24uYXV0b2NvbXBsZXRlIHRvdWNoc3RhcnQuYXV0b2NvbXBsZXRlJykub24oJ21vdXNlZG93bi5hdXRvY29tcGxldGUgdG91Y2hzdGFydC5hdXRvY29tcGxldGUnLCAnbGknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9ICQodGhpcykudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgICAgICRpbnB1dC52YWwodGV4dCk7XG4gICAgICAgICAgICAkaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICByZW1vdmVBdXRvY29tcGxldGUoKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIG9uQXV0b2NvbXBsZXRlIGNhbGxiYWNrLlxuICAgICAgICAgICAgaWYgKHR5cGVvZihvcHRpb25zLm9uQXV0b2NvbXBsZXRlKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMub25BdXRvY29tcGxldGUuY2FsbCh0aGlzLCB0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBFbXB0eSBkYXRhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGlucHV0Lm9mZigna2V5dXAuYXV0b2NvbXBsZXRlIGZvY3VzLmF1dG9jb21wbGV0ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gIH0pOyAvLyBFbmQgb2YgJChkb2N1bWVudCkucmVhZHlcblxuICAvKioqKioqKioqKioqKioqKioqKlxuICAgKiAgU2VsZWN0IFBsdWdpbiAgKlxuICAgKioqKioqKioqKioqKioqKioqL1xuICAkLmZuLm1hdGVyaWFsX3NlbGVjdCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICQodGhpcykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoJHNlbGVjdC5oYXNDbGFzcygnYnJvd3Nlci1kZWZhdWx0JykpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBDb250aW51ZSB0byBuZXh0IChyZXR1cm4gZmFsc2UgYnJlYWtzIG91dCBvZiBlbnRpcmUgbG9vcClcbiAgICAgIH1cblxuICAgICAgdmFyIG11bHRpcGxlID0gJHNlbGVjdC5hdHRyKCdtdWx0aXBsZScpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgIGxhc3RJRCA9ICRzZWxlY3QuYXR0cignZGF0YS1zZWxlY3QtaWQnKTsgLy8gVGVhciBkb3duIHN0cnVjdHVyZSBpZiBTZWxlY3QgbmVlZHMgdG8gYmUgcmVidWlsdFxuXG4gICAgICBpZiAobGFzdElEKSB7XG4gICAgICAgICRzZWxlY3QucGFyZW50KCkuZmluZCgnc3Bhbi5jYXJldCcpLnJlbW92ZSgpO1xuICAgICAgICAkc2VsZWN0LnBhcmVudCgpLmZpbmQoJ2lucHV0JykucmVtb3ZlKCk7XG5cbiAgICAgICAgJHNlbGVjdC51bndyYXAoKTtcbiAgICAgICAgJCgndWwjc2VsZWN0LW9wdGlvbnMtJytsYXN0SUQpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBkZXN0cm95aW5nIHRoZSBzZWxlY3QsIHJlbW92ZSB0aGUgc2VsZWxjdC1pZCBhbmQgcmVzZXQgaXQgdG8gaXQncyB1bmluaXRpYWxpemVkIHN0YXRlLlxuICAgICAgaWYoY2FsbGJhY2sgPT09ICdkZXN0cm95Jykge1xuICAgICAgICAkc2VsZWN0LnJlbW92ZUF0dHIoJ2RhdGEtc2VsZWN0LWlkJykucmVtb3ZlQ2xhc3MoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ2NsaWNrLnNlbGVjdCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB1bmlxdWVJRCA9IE1hdGVyaWFsaXplLmd1aWQoKTtcbiAgICAgICRzZWxlY3QuYXR0cignZGF0YS1zZWxlY3QtaWQnLCB1bmlxdWVJRCk7XG4gICAgICB2YXIgd3JhcHBlciA9ICQoJzxkaXYgY2xhc3M9XCJzZWxlY3Qtd3JhcHBlclwiPjwvZGl2PicpO1xuICAgICAgd3JhcHBlci5hZGRDbGFzcygkc2VsZWN0LmF0dHIoJ2NsYXNzJykpO1xuICAgICAgaWYgKCRzZWxlY3QuaXMoJzpkaXNhYmxlZCcpKVxuICAgICAgICB3cmFwcGVyLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgdmFyIG9wdGlvbnMgPSAkKCc8dWwgaWQ9XCJzZWxlY3Qtb3B0aW9ucy0nICsgdW5pcXVlSUQgKydcIiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnQgc2VsZWN0LWRyb3Bkb3duICcgKyAobXVsdGlwbGUgPyAnbXVsdGlwbGUtc2VsZWN0LWRyb3Bkb3duJyA6ICcnKSArICdcIj48L3VsPicpLFxuICAgICAgICAgIHNlbGVjdENoaWxkcmVuID0gJHNlbGVjdC5jaGlsZHJlbignb3B0aW9uLCBvcHRncm91cCcpLFxuICAgICAgICAgIHZhbHVlc1NlbGVjdGVkID0gW10sXG4gICAgICAgICAgb3B0aW9uc0hvdmVyID0gZmFsc2U7XG5cbiAgICAgIHZhciBsYWJlbCA9ICRzZWxlY3QuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuaHRtbCgpIHx8ICRzZWxlY3QuZmluZCgnb3B0aW9uOmZpcnN0JykuaHRtbCgpIHx8IFwiXCI7XG5cbiAgICAgIC8vIEZ1bmN0aW9uIHRoYXQgcmVuZGVycyBhbmQgYXBwZW5kcyB0aGUgb3B0aW9uIHRha2luZyBpbnRvXG4gICAgICAvLyBhY2NvdW50IHR5cGUgYW5kIHBvc3NpYmxlIGltYWdlIGljb24uXG4gICAgICB2YXIgYXBwZW5kT3B0aW9uV2l0aEljb24gPSBmdW5jdGlvbihzZWxlY3QsIG9wdGlvbiwgdHlwZSkge1xuICAgICAgICAvLyBBZGQgZGlzYWJsZWQgYXR0ciBpZiBkaXNhYmxlZFxuICAgICAgICB2YXIgZGlzYWJsZWRDbGFzcyA9IChvcHRpb24uaXMoJzpkaXNhYmxlZCcpKSA/ICdkaXNhYmxlZCAnIDogJyc7XG4gICAgICAgIHZhciBvcHRncm91cENsYXNzID0gKHR5cGUgPT09ICdvcHRncm91cC1vcHRpb24nKSA/ICdvcHRncm91cC1vcHRpb24gJyA6ICcnO1xuICAgICAgICB2YXIgbXVsdGlwbGVDaGVja2JveCA9IG11bHRpcGxlID8gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIicgKyBkaXNhYmxlZENsYXNzICsgJy8+PGxhYmVsPjwvbGFiZWw+JyA6ICcnO1xuXG4gICAgICAgIC8vIGFkZCBpY29uc1xuICAgICAgICB2YXIgaWNvbl91cmwgPSBvcHRpb24uZGF0YSgnaWNvbicpO1xuICAgICAgICB2YXIgY2xhc3NlcyA9IG9wdGlvbi5hdHRyKCdjbGFzcycpO1xuICAgICAgICBpZiAoISFpY29uX3VybCkge1xuICAgICAgICAgIHZhciBjbGFzc1N0cmluZyA9ICcnO1xuICAgICAgICAgIGlmICghIWNsYXNzZXMpIGNsYXNzU3RyaW5nID0gJyBjbGFzcz1cIicgKyBjbGFzc2VzICsgJ1wiJztcblxuICAgICAgICAgIC8vIENoZWNrIGZvciBtdWx0aXBsZSB0eXBlLlxuICAgICAgICAgIG9wdGlvbnMuYXBwZW5kKCQoJzxsaSBjbGFzcz1cIicgKyBkaXNhYmxlZENsYXNzICsgb3B0Z3JvdXBDbGFzcyArICdcIj48aW1nIGFsdD1cIlwiIHNyYz1cIicgKyBpY29uX3VybCArICdcIicgKyBjbGFzc1N0cmluZyArICc+PHNwYW4+JyArIG11bHRpcGxlQ2hlY2tib3ggKyBvcHRpb24uaHRtbCgpICsgJzwvc3Bhbj48L2xpPicpKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciBtdWx0aXBsZSB0eXBlLlxuICAgICAgICBvcHRpb25zLmFwcGVuZCgkKCc8bGkgY2xhc3M9XCInICsgZGlzYWJsZWRDbGFzcyArIG9wdGdyb3VwQ2xhc3MgKyAnXCI+PHNwYW4+JyArIG11bHRpcGxlQ2hlY2tib3ggKyBvcHRpb24uaHRtbCgpICsgJzwvc3Bhbj48L2xpPicpKTtcbiAgICAgIH07XG5cbiAgICAgIC8qIENyZWF0ZSBkcm9wZG93biBzdHJ1Y3R1cmUuICovXG4gICAgICBpZiAoc2VsZWN0Q2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHNlbGVjdENoaWxkcmVuLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKCQodGhpcykuaXMoJ29wdGlvbicpKSB7XG4gICAgICAgICAgICAvLyBEaXJlY3QgZGVzY2VuZGFudCBvcHRpb24uXG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgYXBwZW5kT3B0aW9uV2l0aEljb24oJHNlbGVjdCwgJCh0aGlzKSwgJ211bHRpcGxlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFwcGVuZE9wdGlvbldpdGhJY29uKCRzZWxlY3QsICQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5pcygnb3B0Z3JvdXAnKSkge1xuICAgICAgICAgICAgLy8gT3B0Z3JvdXAuXG4gICAgICAgICAgICB2YXIgc2VsZWN0T3B0aW9ucyA9ICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9ucy5hcHBlbmQoJCgnPGxpIGNsYXNzPVwib3B0Z3JvdXBcIj48c3Bhbj4nICsgJCh0aGlzKS5hdHRyKCdsYWJlbCcpICsgJzwvc3Bhbj48L2xpPicpKTtcblxuICAgICAgICAgICAgc2VsZWN0T3B0aW9ucy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBhcHBlbmRPcHRpb25XaXRoSWNvbigkc2VsZWN0LCAkKHRoaXMpLCAnb3B0Z3JvdXAtb3B0aW9uJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmZpbmQoJ2xpOm5vdCgub3B0Z3JvdXApJykuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAkKHRoaXMpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgb3B0aW9uIGVsZW1lbnQgaXMgZGlzYWJsZWRcbiAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykgJiYgISQodGhpcykuaGFzQ2xhc3MoJ29wdGdyb3VwJykpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAgICAgICAkKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLCB0aGlzKS5wcm9wKCdjaGVja2VkJywgZnVuY3Rpb24oaSwgdikgeyByZXR1cm4gIXY7IH0pO1xuICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRvZ2dsZUVudHJ5RnJvbUFycmF5KHZhbHVlc1NlbGVjdGVkLCBpLCAkc2VsZWN0KTtcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb3B0aW9ucy5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICRuZXdTZWxlY3QudmFsKCQodGhpcykudGV4dCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgJCh0aGlzKSk7XG4gICAgICAgICAgICAkc2VsZWN0LmZpbmQoJ29wdGlvbicpLmVxKGkpLnByb3AoJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgICAgICAgLy8gVHJpZ2dlciBvbmNoYW5nZSgpIGV2ZW50XG4gICAgICAgICAgICAkc2VsZWN0LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ3VuZGVmaW5lZCcpIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gV3JhcCBFbGVtZW50c1xuICAgICAgJHNlbGVjdC53cmFwKHdyYXBwZXIpO1xuICAgICAgLy8gQWRkIFNlbGVjdCBEaXNwbGF5IEVsZW1lbnRcbiAgICAgIHZhciBkcm9wZG93bkljb24gPSAkKCc8c3BhbiBjbGFzcz1cImNhcmV0XCI+JiM5NjYwOzwvc3Bhbj4nKTtcblxuICAgICAgLy8gZXNjYXBlIGRvdWJsZSBxdW90ZXNcbiAgICAgIHZhciBzYW5pdGl6ZWRMYWJlbEh0bWwgPSBsYWJlbC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbiAgICAgIHZhciAkbmV3U2VsZWN0ID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25cIiByZWFkb25seT1cInRydWVcIiAnICsgKCgkc2VsZWN0LmlzKCc6ZGlzYWJsZWQnKSkgPyAnZGlzYWJsZWQnIDogJycpICsgJyBkYXRhLWFjdGl2YXRlcz1cInNlbGVjdC1vcHRpb25zLScgKyB1bmlxdWVJRCArJ1wiIHZhbHVlPVwiJysgc2FuaXRpemVkTGFiZWxIdG1sICsnXCIvPicpO1xuICAgICAgJHNlbGVjdC5iZWZvcmUoJG5ld1NlbGVjdCk7XG4gICAgICAkbmV3U2VsZWN0LmJlZm9yZShkcm9wZG93bkljb24pO1xuXG4gICAgICAkbmV3U2VsZWN0LmFmdGVyKG9wdGlvbnMpO1xuICAgICAgLy8gQ2hlY2sgaWYgc2VjdGlvbiBlbGVtZW50IGlzIGRpc2FibGVkXG4gICAgICBpZiAoISRzZWxlY3QuaXMoJzpkaXNhYmxlZCcpKSB7XG4gICAgICAgICRuZXdTZWxlY3QuZHJvcGRvd24oeydob3Zlcic6IGZhbHNlfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgdGFiaW5kZXhcbiAgICAgIGlmICgkc2VsZWN0LmF0dHIoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgJCgkbmV3U2VsZWN0WzBdKS5hdHRyKCd0YWJpbmRleCcsICRzZWxlY3QuYXR0cigndGFiaW5kZXgnKSk7XG4gICAgICB9XG5cbiAgICAgICRzZWxlY3QuYWRkQ2xhc3MoJ2luaXRpYWxpemVkJyk7XG5cbiAgICAgICRuZXdTZWxlY3Qub24oe1xuICAgICAgICAnZm9jdXMnOiBmdW5jdGlvbiAoKXtcbiAgICAgICAgICBpZiAoJCgndWwuc2VsZWN0LWRyb3Bkb3duJykubm90KG9wdGlvbnNbMF0pLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkKCdpbnB1dC5zZWxlY3QtZHJvcGRvd24nKS50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9mZignY2xpY2suc2VsZWN0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghb3B0aW9ucy5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdvcGVuJywgWydmb2N1cyddKTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBpZiAobXVsdGlwbGUgJiYgbGFiZWwuaW5kZXhPZignLCcpID49IDApIHtcbiAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5zcGxpdCgnLCcpWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKSA9PT0gbGFiZWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgc2VsZWN0ZWRPcHRpb24sIHRydWUpO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykub2ZmKCdjbGljay5zZWxlY3QnKS5vbignY2xpY2suc2VsZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBtdWx0aXBsZSAmJiAob3B0aW9uc0hvdmVyIHx8ICRuZXdTZWxlY3QudHJpZ2dlcignY2xvc2UnKSk7XG4gICAgICAgICAgICAgICQod2luZG93KS5vZmYoJ2NsaWNrLnNlbGVjdCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnY2xpY2snOiBmdW5jdGlvbiAoZSl7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgICRuZXdTZWxlY3Qub24oJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKCdjbGljay5zZWxlY3QnKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICB9KTtcblxuICAgICAgb3B0aW9ucy5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgb3B0aW9uc0hvdmVyID0gdHJ1ZTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3B0aW9uc0hvdmVyID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIGluaXRpYWwgbXVsdGlwbGUgc2VsZWN0aW9ucy5cbiAgICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgICAkc2VsZWN0LmZpbmQoXCJvcHRpb246c2VsZWN0ZWQ6bm90KDpkaXNhYmxlZClcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5pbmRleCgpO1xuXG4gICAgICAgICAgdG9nZ2xlRW50cnlGcm9tQXJyYXkodmFsdWVzU2VsZWN0ZWQsIGluZGV4LCAkc2VsZWN0KTtcbiAgICAgICAgICBvcHRpb25zLmZpbmQoXCJsaVwiKS5lcShpbmRleCkuZmluZChcIjpjaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTWFrZSBvcHRpb24gYXMgc2VsZWN0ZWQgYW5kIHNjcm9sbCB0byBzZWxlY3RlZCBwb3NpdGlvblxuICAgICAgICogQHBhcmFtIHtqUXVlcnl9IGNvbGxlY3Rpb24gIFNlbGVjdCBvcHRpb25zIGpRdWVyeSBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5ld09wdGlvbiAgZWxlbWVudCBvZiB0aGUgbmV3IG9wdGlvblxuICAgICAgICogQHBhcmFtIHtCb29sZWFufSBmaXJzdEFjdGl2YXRpb24gIElmIG9uIGZpcnN0IGFjdGl2YXRpb24gb2Ygc2VsZWN0XG4gICAgICAgKi9cbiAgICAgIHZhciBhY3RpdmF0ZU9wdGlvbiA9IGZ1bmN0aW9uKGNvbGxlY3Rpb24sIG5ld09wdGlvbiwgZmlyc3RBY3RpdmF0aW9uKSB7XG4gICAgICAgIGlmIChuZXdPcHRpb24pIHtcbiAgICAgICAgICBjb2xsZWN0aW9uLmZpbmQoJ2xpLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgdmFyIG9wdGlvbiA9ICQobmV3T3B0aW9uKTtcbiAgICAgICAgICBvcHRpb24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgaWYgKCFtdWx0aXBsZSB8fCAhIWZpcnN0QWN0aXZhdGlvbikge1xuICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxUbyhvcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gQWxsb3cgdXNlciB0byBzZWFyY2ggYnkgdHlwaW5nXG4gICAgICAvLyB0aGlzIGFycmF5IGlzIGNsZWFyZWQgYWZ0ZXIgMSBzZWNvbmRcbiAgICAgIHZhciBmaWx0ZXJRdWVyeSA9IFtdLFxuICAgICAgICAgIG9uS2V5RG93biA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgLy8gVEFCIC0gc3dpdGNoIHRvIGFub3RoZXIgaW5wdXRcbiAgICAgICAgICAgIGlmKGUud2hpY2ggPT0gOSl7XG4gICAgICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBUlJPVyBET1dOIFdIRU4gU0VMRUNUIElTIENMT1NFRCAtIG9wZW4gc2VsZWN0IG9wdGlvbnNcbiAgICAgICAgICAgIGlmKGUud2hpY2ggPT0gNDAgJiYgIW9wdGlvbnMuaXMoJzp2aXNpYmxlJykpe1xuICAgICAgICAgICAgICAkbmV3U2VsZWN0LnRyaWdnZXIoJ29wZW4nKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFTlRFUiBXSEVOIFNFTEVDVCBJUyBDTE9TRUQgLSBzdWJtaXQgZm9ybVxuICAgICAgICAgICAgaWYoZS53aGljaCA9PSAxMyAmJiAhb3B0aW9ucy5pcygnOnZpc2libGUnKSl7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBDQVNFIFdIRU4gVVNFUiBUWVBFIExFVFRFUlNcbiAgICAgICAgICAgIHZhciBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgbm9uTGV0dGVycyA9IFs5LDEzLDI3LDM4LDQwXTtcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgJiYgKG5vbkxldHRlcnMuaW5kZXhPZihlLndoaWNoKSA9PT0gLTEpKSB7XG4gICAgICAgICAgICAgIGZpbHRlclF1ZXJ5LnB1c2gobGV0dGVyKTtcblxuICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gZmlsdGVyUXVlcnkuam9pbignJyksXG4gICAgICAgICAgICAgICAgICBuZXdPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpJykuZmlsdGVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0cmluZykgPT09IDA7XG4gICAgICAgICAgICAgICAgICB9KVswXTtcblxuICAgICAgICAgICAgICBpZiAobmV3T3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgbmV3T3B0aW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFTlRFUiAtIHNlbGVjdCBvcHRpb24gYW5kIGNsb3NlIHdoZW4gc2VsZWN0IG9wdGlvbnMgYXJlIG9wZW5lZFxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMTMpIHtcbiAgICAgICAgICAgICAgdmFyIGFjdGl2ZU9wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQ6bm90KC5kaXNhYmxlZCknKVswXTtcbiAgICAgICAgICAgICAgaWYoYWN0aXZlT3B0aW9uKXtcbiAgICAgICAgICAgICAgICAkKGFjdGl2ZU9wdGlvbikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAkbmV3U2VsZWN0LnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFSUk9XIERPV04gLSBtb3ZlIHRvIG5leHQgbm90IGRpc2FibGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gNDApIHtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXdPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykubmV4dCgnbGk6bm90KC5kaXNhYmxlZCknKVswXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpOm5vdCguZGlzYWJsZWQpJylbMF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgbmV3T3B0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRVNDIC0gY2xvc2Ugb3B0aW9uc1xuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMjcpIHtcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBUlJPVyBVUCAtIG1vdmUgdG8gcHJldmlvdXMgbm90IGRpc2FibGVkIG9wdGlvblxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMzgpIHtcbiAgICAgICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaS5zZWxlY3RlZCcpLnByZXYoJ2xpOm5vdCguZGlzYWJsZWQpJylbMF07XG4gICAgICAgICAgICAgIGlmKG5ld09wdGlvbilcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCBuZXdPcHRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBdXRvbWF0aWNhbHkgY2xlYW4gZmlsdGVyIHF1ZXJ5IHNvIHVzZXIgY2FuIHNlYXJjaCBhZ2FpbiBieSBzdGFydGluZyBsZXR0ZXJzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGZpbHRlclF1ZXJ5ID0gW107IH0sIDEwMDApO1xuICAgICAgICAgIH07XG5cbiAgICAgICRuZXdTZWxlY3Qub24oJ2tleWRvd24nLCBvbktleURvd24pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlRW50cnlGcm9tQXJyYXkoZW50cmllc0FycmF5LCBlbnRyeUluZGV4LCBzZWxlY3QpIHtcbiAgICAgIHZhciBpbmRleCA9IGVudHJpZXNBcnJheS5pbmRleE9mKGVudHJ5SW5kZXgpLFxuICAgICAgICAgIG5vdEFkZGVkID0gaW5kZXggPT09IC0xO1xuXG4gICAgICBpZiAobm90QWRkZWQpIHtcbiAgICAgICAgZW50cmllc0FycmF5LnB1c2goZW50cnlJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbnRyaWVzQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LnNpYmxpbmdzKCd1bC5kcm9wZG93bi1jb250ZW50JykuZmluZCgnbGk6bm90KC5vcHRncm91cCknKS5lcShlbnRyeUluZGV4KS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIC8vIHVzZSBub3RBZGRlZCBpbnN0ZWFkIG9mIHRydWUgKHRvIGRldGVjdCBpZiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkIG9yIG5vdClcbiAgICAgIHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShlbnRyeUluZGV4KS5wcm9wKCdzZWxlY3RlZCcsIG5vdEFkZGVkKTtcbiAgICAgIHNldFZhbHVlVG9JbnB1dChlbnRyaWVzQXJyYXksIHNlbGVjdCk7XG5cbiAgICAgIHJldHVybiBub3RBZGRlZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRWYWx1ZVRvSW5wdXQoZW50cmllc0FycmF5LCBzZWxlY3QpIHtcbiAgICAgIHZhciB2YWx1ZSA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgY291bnQgPSBlbnRyaWVzQXJyYXkubGVuZ3RoOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICB2YXIgdGV4dCA9IHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShlbnRyaWVzQXJyYXlbaV0pLnRleHQoKTtcblxuICAgICAgICBpID09PSAwID8gdmFsdWUgKz0gdGV4dCA6IHZhbHVlICs9ICcsICcgKyB0ZXh0O1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gc2VsZWN0LmZpbmQoJ29wdGlvbjpkaXNhYmxlZCcpLmVxKDApLnRleHQoKTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LnNpYmxpbmdzKCdpbnB1dC5zZWxlY3QtZHJvcGRvd24nKS52YWwodmFsdWUpO1xuICAgIH1cbiAgfTtcblxufSggalF1ZXJ5ICkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG5cbiAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBpbmRpY2F0b3JzOiB0cnVlLFxuICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgdHJhbnNpdGlvbjogNTAwLFxuICAgICAgICBpbnRlcnZhbDogNjAwMFxuICAgICAgfTtcbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gRm9yIGVhY2ggc2xpZGVyLCB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2ZcbiAgICAgICAgLy8gd2hpY2ggc2xpZGUgaXMgYWN0aXZlIGFuZCBpdHMgYXNzb2NpYXRlZCBjb250ZW50XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciAkc2xpZGVyID0gJHRoaXMuZmluZCgndWwuc2xpZGVzJykuZmlyc3QoKTtcbiAgICAgICAgdmFyICRzbGlkZXMgPSAkc2xpZGVyLmZpbmQoJz4gbGknKTtcbiAgICAgICAgdmFyICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICB2YXIgJGFjdGl2ZSwgJGluZGljYXRvcnMsICRpbnRlcnZhbDtcbiAgICAgICAgaWYgKCRhY3RpdmVfaW5kZXggIT0gLTEpIHsgJGFjdGl2ZSA9ICRzbGlkZXMuZXEoJGFjdGl2ZV9pbmRleCk7IH1cblxuICAgICAgICAvLyBUcmFuc2l0aW9ucyB0aGUgY2FwdGlvbiBkZXBlbmRpbmcgb24gYWxpZ25tZW50XG4gICAgICAgIGZ1bmN0aW9uIGNhcHRpb25UcmFuc2l0aW9uKGNhcHRpb24sIGR1cmF0aW9uKSB7XG4gICAgICAgICAgaWYgKGNhcHRpb24uaGFzQ2xhc3MoXCJjZW50ZXItYWxpZ25cIikpIHtcbiAgICAgICAgICAgIGNhcHRpb24udmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVk6IC0xMDB9LCB7ZHVyYXRpb246IGR1cmF0aW9uLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoY2FwdGlvbi5oYXNDbGFzcyhcInJpZ2h0LWFsaWduXCIpKSB7XG4gICAgICAgICAgICBjYXB0aW9uLnZlbG9jaXR5KHtvcGFjaXR5OiAwLCB0cmFuc2xhdGVYOiAxMDB9LCB7ZHVyYXRpb246IGR1cmF0aW9uLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoY2FwdGlvbi5oYXNDbGFzcyhcImxlZnQtYWxpZ25cIikpIHtcbiAgICAgICAgICAgIGNhcHRpb24udmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVg6IC0xMDB9LCB7ZHVyYXRpb246IGR1cmF0aW9uLCBxdWV1ZTogZmFsc2V9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgdHJhbnNpdGlvbiB0aGUgc2xpZGUgdG8gYW55IGluZGV4IG9mIHRoZSBuZXh0IHNsaWRlXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVUb1NsaWRlKGluZGV4KSB7XG4gICAgICAgICAgLy8gV3JhcCBhcm91bmQgaW5kaWNlcy5cbiAgICAgICAgICBpZiAoaW5kZXggPj0gJHNsaWRlcy5sZW5ndGgpIGluZGV4ID0gMDtcbiAgICAgICAgICBlbHNlIGlmIChpbmRleCA8IDApIGluZGV4ID0gJHNsaWRlcy5sZW5ndGggLTE7XG5cbiAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcblxuICAgICAgICAgIC8vIE9ubHkgZG8gaWYgaW5kZXggY2hhbmdlc1xuICAgICAgICAgIGlmICgkYWN0aXZlX2luZGV4ICE9IGluZGV4KSB7XG4gICAgICAgICAgICAkYWN0aXZlID0gJHNsaWRlcy5lcSgkYWN0aXZlX2luZGV4KTtcbiAgICAgICAgICAgICRjYXB0aW9uID0gJGFjdGl2ZS5maW5kKCcuY2FwdGlvbicpO1xuXG4gICAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICRhY3RpdmUudmVsb2NpdHkoe29wYWNpdHk6IDB9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzbGlkZXMubm90KCcuYWN0aXZlJykudmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVg6IDAsIHRyYW5zbGF0ZVk6IDB9LCB7ZHVyYXRpb246IDAsIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgIGNhcHRpb25UcmFuc2l0aW9uKCRjYXB0aW9uLCBvcHRpb25zLnRyYW5zaXRpb24pO1xuXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JzXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICAgICRpbmRpY2F0b3JzLmVxKCRhY3RpdmVfaW5kZXgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNsaWRlcy5lcShpbmRleCkudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICRzbGlkZXMuZXEoaW5kZXgpLmZpbmQoJy5jYXB0aW9uJykudmVsb2NpdHkoe29wYWNpdHk6IDEsIHRyYW5zbGF0ZVg6IDAsIHRyYW5zbGF0ZVk6IDB9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgZGVsYXk6IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgICRzbGlkZXMuZXEoaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yc1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgICAgICAkaW5kaWNhdG9ycy5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBoZWlnaHQgb2Ygc2xpZGVyXG4gICAgICAgIC8vIElmIGZ1bGxzY3JlZW4sIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKCEkdGhpcy5oYXNDbGFzcygnZnVsbHNjcmVlbicpKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgICAgLy8gQWRkIGhlaWdodCBpZiBpbmRpY2F0b3JzIGFyZSBwcmVzZW50XG4gICAgICAgICAgICAkdGhpcy5oZWlnaHQob3B0aW9ucy5oZWlnaHQgKyA0MCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJHRoaXMuaGVpZ2h0KG9wdGlvbnMuaGVpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHNsaWRlci5oZWlnaHQob3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBTZXQgaW5pdGlhbCBwb3NpdGlvbnMgb2YgY2FwdGlvbnNcbiAgICAgICAgJHNsaWRlcy5maW5kKCcuY2FwdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhcHRpb25UcmFuc2l0aW9uKCQodGhpcyksIDApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNb3ZlIGltZyBzcmMgaW50byBiYWNrZ3JvdW5kLWltYWdlXG4gICAgICAgICRzbGlkZXMuZmluZCgnaW1nJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHBsYWNlaG9sZGVyQmFzZTY0ID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ3NyYycpICE9PSBwbGFjZWhvbGRlckJhc2U2NCkge1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKFwiJyArICQodGhpcykuYXR0cignc3JjJykgKyAnXCIpJyApO1xuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzcmMnLCBwbGFjZWhvbGRlckJhc2U2NCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkeW5hbWljYWxseSBhZGQgaW5kaWNhdG9yc1xuICAgICAgICBpZiAob3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgJGluZGljYXRvcnMgPSAkKCc8dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+PC91bD4nKTtcbiAgICAgICAgICAkc2xpZGVzLmVhY2goZnVuY3Rpb24oIGluZGV4ICkge1xuICAgICAgICAgICAgdmFyICRpbmRpY2F0b3IgPSAkKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3ItaXRlbVwiPjwvbGk+Jyk7XG5cbiAgICAgICAgICAgIC8vIEhhbmRsZSBjbGlja3Mgb24gaW5kaWNhdG9yc1xuICAgICAgICAgICAgJGluZGljYXRvci5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciAkcGFyZW50ID0gJHNsaWRlci5wYXJlbnQoKTtcbiAgICAgICAgICAgICAgdmFyIGN1cnJfaW5kZXggPSAkcGFyZW50LmZpbmQoJCh0aGlzKSkuaW5kZXgoKTtcbiAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoY3Vycl9pbmRleCk7XG5cbiAgICAgICAgICAgICAgLy8gcmVzZXQgaW50ZXJ2YWxcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAkaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICBpZiAoJHNsaWRlcy5sZW5ndGggPT0gJGFjdGl2ZV9pbmRleCArIDEpICRhY3RpdmVfaW5kZXggPSAwOyAvLyBsb29wIHRvIHN0YXJ0XG4gICAgICAgICAgICAgICAgICBlbHNlICRhY3RpdmVfaW5kZXggKz0gMTtcblxuICAgICAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCk7XG5cbiAgICAgICAgICAgICAgICB9LCBvcHRpb25zLnRyYW5zaXRpb24gKyBvcHRpb25zLmludGVydmFsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRpbmRpY2F0b3JzLmFwcGVuZCgkaW5kaWNhdG9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAkdGhpcy5hcHBlbmQoJGluZGljYXRvcnMpO1xuICAgICAgICAgICRpbmRpY2F0b3JzID0gJHRoaXMuZmluZCgndWwuaW5kaWNhdG9ycycpLmZpbmQoJ2xpLmluZGljYXRvci1pdGVtJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFjdGl2ZSkge1xuICAgICAgICAgICRhY3RpdmUuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICRzbGlkZXMuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJykudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcblxuICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAwO1xuICAgICAgICAgICRhY3RpdmUgPSAkc2xpZGVzLmVxKCRhY3RpdmVfaW5kZXgpO1xuXG4gICAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvcnNcbiAgICAgICAgICBpZiAob3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICAkaW5kaWNhdG9ycy5lcSgkYWN0aXZlX2luZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRqdXN0IGhlaWdodCB0byBjdXJyZW50IHNsaWRlXG4gICAgICAgICRhY3RpdmUuZmluZCgnaW1nJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkYWN0aXZlLmZpbmQoJy5jYXB0aW9uJykudmVsb2NpdHkoe29wYWNpdHk6IDEsIHRyYW5zbGF0ZVg6IDAsIHRyYW5zbGF0ZVk6IDB9LCB7ZHVyYXRpb246IG9wdGlvbnMudHJhbnNpdGlvbiwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYXV0byBzY3JvbGxcbiAgICAgICAgJGludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCArIDEpO1xuXG4gICAgICAgICAgfSwgb3B0aW9ucy50cmFuc2l0aW9uICsgb3B0aW9ucy5pbnRlcnZhbFxuICAgICAgICApO1xuXG5cbiAgICAgICAgLy8gSGFtbWVySlMsIFN3aXBlIG5hdmlnYXRpb25cblxuICAgICAgICAvLyBUb3VjaCBFdmVudFxuICAgICAgICB2YXIgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICB2YXIgc3dpcGVMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHZhciBzd2lwZVJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgJHRoaXMuaGFtbWVyKHtcbiAgICAgICAgICAgIHByZXZlbnRfZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSkub24oJ3BhbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIpIHtcblxuICAgICAgICAgICAgLy8gcmVzZXQgaW50ZXJ2YWxcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoJGludGVydmFsKTtcblxuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUuZ2VzdHVyZS5kaXJlY3Rpb247XG4gICAgICAgICAgICB2YXIgeCA9IGUuZ2VzdHVyZS5kZWx0YVg7XG4gICAgICAgICAgICB2YXIgdmVsb2NpdHlYID0gZS5nZXN0dXJlLnZlbG9jaXR5WDtcbiAgICAgICAgICAgIHZhciB2ZWxvY2l0eVkgPSBlLmdlc3R1cmUudmVsb2NpdHlZO1xuXG4gICAgICAgICAgICAkY3Vycl9zbGlkZSA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHZlbG9jaXR5WCkgPiBNYXRoLmFicyh2ZWxvY2l0eVkpKSB7XG4gICAgICAgICAgICAgICRjdXJyX3NsaWRlLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogeFxuICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiA1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3dpcGUgTGVmdFxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gNCAmJiAoeCA+ICgkdGhpcy5pbm5lcldpZHRoKCkgLyAyKSB8fCB2ZWxvY2l0eVggPCAtMC42NSkpIHtcbiAgICAgICAgICAgICAgc3dpcGVSaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTd2lwZSBSaWdodFxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAyICYmICh4IDwgKC0xICogJHRoaXMuaW5uZXJXaWR0aCgpIC8gMikgfHwgdmVsb2NpdHlYID4gMC42NSkpIHtcbiAgICAgICAgICAgICAgc3dpcGVMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWFrZSBTbGlkZSBCZWhpbmQgYWN0aXZlIHNsaWRlIHZpc2libGVcbiAgICAgICAgICAgIHZhciBuZXh0X3NsaWRlO1xuICAgICAgICAgICAgaWYgKHN3aXBlTGVmdCkge1xuICAgICAgICAgICAgICBuZXh0X3NsaWRlID0gJGN1cnJfc2xpZGUubmV4dCgpO1xuICAgICAgICAgICAgICBpZiAobmV4dF9zbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXh0X3NsaWRlID0gJHNsaWRlcy5maXJzdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5leHRfc2xpZGUudmVsb2NpdHkoeyBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzd2lwZVJpZ2h0KSB7XG4gICAgICAgICAgICAgIG5leHRfc2xpZGUgPSAkY3Vycl9zbGlkZS5wcmV2KCk7XG4gICAgICAgICAgICAgIGlmIChuZXh0X3NsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5leHRfc2xpZGUgPSAkc2xpZGVzLmxhc3QoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuZXh0X3NsaWRlLnZlbG9jaXR5KHsgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgICAgfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgIH1cblxuICAgICAgICB9KS5vbigncGFuZW5kJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIikge1xuXG4gICAgICAgICAgICAkY3Vycl9zbGlkZSA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpO1xuICAgICAgICAgICAgcGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgY3Vycl9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG5cbiAgICAgICAgICAgIGlmICghc3dpcGVSaWdodCAmJiAhc3dpcGVMZWZ0IHx8ICRzbGlkZXMubGVuZ3RoIDw9MSkge1xuICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gb3JpZ2luYWwgc3BvdFxuICAgICAgICAgICAgICAkY3Vycl9zbGlkZS52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IDBcbiAgICAgICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3dpcGVMZWZ0KSB7XG4gICAgICAgICAgICAgIG1vdmVUb1NsaWRlKGN1cnJfaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe3RyYW5zbGF0ZVg6IC0xICogJHRoaXMuaW5uZXJXaWR0aCgpIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVg6IDB9LCB7ZHVyYXRpb246IDAsIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN3aXBlUmlnaHQpIHtcbiAgICAgICAgICAgICAgbW92ZVRvU2xpZGUoY3Vycl9pbmRleCAtIDEpO1xuICAgICAgICAgICAgICAkY3Vycl9zbGlkZS52ZWxvY2l0eSh7dHJhbnNsYXRlWDogJHRoaXMuaW5uZXJXaWR0aCgpIH0sIHtkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1cnJfc2xpZGUudmVsb2NpdHkoe29wYWNpdHk6IDAsIHRyYW5zbGF0ZVg6IDB9LCB7ZHVyYXRpb246IDAsIHF1ZXVlOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXBlTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgc3dpcGVSaWdodCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBSZXN0YXJ0IGludGVydmFsXG4gICAgICAgICAgICBjbGVhckludGVydmFsKCRpbnRlcnZhbCk7XG4gICAgICAgICAgICAkaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICBpZiAoJHNsaWRlcy5sZW5ndGggPT0gJGFjdGl2ZV9pbmRleCArIDEpICRhY3RpdmVfaW5kZXggPSAwOyAvLyBsb29wIHRvIHN0YXJ0XG4gICAgICAgICAgICAgICAgZWxzZSAkYWN0aXZlX2luZGV4ICs9IDE7XG5cbiAgICAgICAgICAgICAgICBtb3ZlVG9TbGlkZSgkYWN0aXZlX2luZGV4KTtcblxuICAgICAgICAgICAgICB9LCBvcHRpb25zLnRyYW5zaXRpb24gKyBvcHRpb25zLmludGVydmFsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRoaXMub24oJ3NsaWRlclBhdXNlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCgkaW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5vbignc2xpZGVyU3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKCRpbnRlcnZhbCk7XG4gICAgICAgICAgJGludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAkYWN0aXZlX2luZGV4ID0gJHNsaWRlci5maW5kKCcuYWN0aXZlJykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgaWYgKCRzbGlkZXMubGVuZ3RoID09ICRhY3RpdmVfaW5kZXggKyAxKSAkYWN0aXZlX2luZGV4ID0gMDsgLy8gbG9vcCB0byBzdGFydFxuICAgICAgICAgICAgICBlbHNlICRhY3RpdmVfaW5kZXggKz0gMTtcblxuICAgICAgICAgICAgICBtb3ZlVG9TbGlkZSgkYWN0aXZlX2luZGV4KTtcblxuICAgICAgICAgICAgfSwgb3B0aW9ucy50cmFuc2l0aW9uICsgb3B0aW9ucy5pbnRlcnZhbFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aGlzLm9uKCdzbGlkZXJOZXh0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJGFjdGl2ZV9pbmRleCA9ICRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgICAgbW92ZVRvU2xpZGUoJGFjdGl2ZV9pbmRleCArIDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdGhpcy5vbignc2xpZGVyUHJldicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICRhY3RpdmVfaW5kZXggPSAkc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICAgIG1vdmVUb1NsaWRlKCRhY3RpdmVfaW5kZXggLSAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuXG5cblxuICAgIH0sXG4gICAgcGF1c2UgOiBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignc2xpZGVyUGF1c2UnKTtcbiAgICB9LFxuICAgIHN0YXJ0IDogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3NsaWRlclN0YXJ0Jyk7XG4gICAgfSxcbiAgICBuZXh0IDogZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3NsaWRlck5leHQnKTtcbiAgICB9LFxuICAgIHByZXYgOiBmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignc2xpZGVyUHJldicpO1xuICAgIH1cbiAgfTtcblxuXG4gICQuZm4uc2xpZGVyID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gICAgaWYgKCBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gKSB7XG4gICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XG4gICAgfSBlbHNlIGlmICggdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcgfHwgISBtZXRob2RPck9wdGlvbnMgKSB7XG4gICAgICAvLyBEZWZhdWx0IHRvIFwiaW5pdFwiXG4gICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRvb2x0aXAnICk7XG4gICAgfVxuICB9OyAvLyBQbHVnaW4gZW5kXG59KCBqUXVlcnkgKSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2suY2FyZCcsICcuY2FyZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoJCh0aGlzKS5maW5kKCc+IC5jYXJkLXJldmVhbCcpLmxlbmd0aCkge1xuICAgICAgICB2YXIgJGNhcmQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY2FyZCcpO1xuICAgICAgICBpZiAoJGNhcmQuZGF0YSgnaW5pdGlhbE92ZXJmbG93JykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICRjYXJkLmRhdGEoXG4gICAgICAgICAgICAnaW5pdGlhbE92ZXJmbG93JyxcbiAgICAgICAgICAgICRjYXJkLmNzcygnb3ZlcmZsb3cnKSA9PT0gdW5kZWZpbmVkID8gJycgOiAkY2FyZC5jc3MoJ292ZXJmbG93JylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygkKCcuY2FyZC1yZXZlYWwgLmNhcmQtdGl0bGUnKSkgfHwgJChlLnRhcmdldCkuaXMoJCgnLmNhcmQtcmV2ZWFsIC5jYXJkLXRpdGxlIGknKSkpIHtcbiAgICAgICAgICAvLyBNYWtlIFJldmVhbCBhbmltYXRlIGRvd24gYW5kIGRpc3BsYXkgbm9uZVxuICAgICAgICAgICQodGhpcykuZmluZCgnLmNhcmQtcmV2ZWFsJykudmVsb2NpdHkoXG4gICAgICAgICAgICB7dHJhbnNsYXRlWTogMH0sIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIyNSxcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyxcbiAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHsgZGlzcGxheTogJ25vbmUnfSk7XG4gICAgICAgICAgICAgICAgJGNhcmQuY3NzKCdvdmVyZmxvdycsICRjYXJkLmRhdGEoJ2luaXRpYWxPdmVyZmxvdycpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJChlLnRhcmdldCkuaXMoJCgnLmNhcmQgLmFjdGl2YXRvcicpKSB8fFxuICAgICAgICAgICAgICAgICAkKGUudGFyZ2V0KS5pcygkKCcuY2FyZCAuYWN0aXZhdG9yIGknKSkgKSB7XG4gICAgICAgICAgJGNhcmQuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5jYXJkLXJldmVhbCcpLmNzcyh7IGRpc3BsYXk6ICdibG9jayd9KS52ZWxvY2l0eShcInN0b3BcIiwgZmFsc2UpLnZlbG9jaXR5KHt0cmFuc2xhdGVZOiAnLTEwMCUnfSwge2R1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCd9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pO1xufSggalF1ZXJ5ICkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gIHZhciBtYXRlcmlhbENoaXBzRGVmYXVsdHMgPSB7XG4gICAgZGF0YTogW10sXG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIHNlY29uZGFyeVBsYWNlaG9sZGVyOiAnJyxcbiAgICBhdXRvY29tcGxldGVPcHRpb25zOiB7fSxcbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBIYW5kbGUgcmVtb3ZhbCBvZiBzdGF0aWMgY2hpcHMuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jaGlwIC5jbG9zZScsIGZ1bmN0aW9uKGUpe1xuICAgICAgdmFyICRjaGlwcyA9ICQodGhpcykuY2xvc2VzdCgnLmNoaXBzJyk7XG4gICAgICBpZiAoJGNoaXBzLmF0dHIoJ2RhdGEtaW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGlwJykucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gICQuZm4ubWF0ZXJpYWxfY2hpcCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuJGVsID0gJCh0aGlzKTtcbiAgICB0aGlzLiRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICAgIHRoaXMuU0VMUyA9IHtcbiAgICAgIENISVBTOiAnLmNoaXBzJyxcbiAgICAgIENISVA6ICcuY2hpcCcsXG4gICAgICBJTlBVVDogJ2lucHV0JyxcbiAgICAgIERFTEVURTogJy5tYXRlcmlhbC1pY29ucycsXG4gICAgICBTRUxFQ1RFRF9DSElQOiAnLnNlbGVjdGVkJyxcbiAgICB9O1xuXG4gICAgaWYgKCdkYXRhJyA9PT0gb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuJGVsLmRhdGEoJ2NoaXBzJyk7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBtYXRlcmlhbENoaXBzRGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgIHNlbGYuaGFzQXV0b2NvbXBsZXRlID0gISQuaXNFbXB0eU9iamVjdChjdXJyX29wdGlvbnMuYXV0b2NvbXBsZXRlT3B0aW9ucy5kYXRhKTtcblxuICAgIC8vIEluaXRpYWxpemVcbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHZhciBjaGlwcztcbiAgICAgIHNlbGYuJGVsLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyICRjaGlwcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBjaGlwSWQgPSBNYXRlcmlhbGl6ZS5ndWlkKCk7XG4gICAgICAgIHNlbGYuY2hpcElkID0gY2hpcElkO1xuXG4gICAgICAgIGlmICghY3Vycl9vcHRpb25zLmRhdGEgfHwgIShjdXJyX29wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgIGN1cnJfb3B0aW9ucy5kYXRhID0gW107XG4gICAgICAgIH1cbiAgICAgICAgJGNoaXBzLmRhdGEoJ2NoaXBzJywgY3Vycl9vcHRpb25zLmRhdGEpO1xuICAgICAgICAkY2hpcHMuYXR0cignZGF0YS1pbmRleCcsIGkpO1xuICAgICAgICAkY2hpcHMuYXR0cignZGF0YS1pbml0aWFsaXplZCcsIHRydWUpO1xuXG4gICAgICAgIGlmICghJGNoaXBzLmhhc0NsYXNzKHNlbGYuU0VMUy5DSElQUykpIHtcbiAgICAgICAgICAkY2hpcHMuYWRkQ2xhc3MoJ2NoaXBzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmNoaXBzKCRjaGlwcywgY2hpcElkKTtcbiAgICAgICAgaSsrO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgU0VMUyA9IHNlbGYuU0VMUztcblxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdjbGljay5jaGlwcy1mb2N1cycsIFNFTFMuQ0hJUFMpLm9uKCdjbGljay5jaGlwcy1mb2N1cycsIFNFTFMuQ0hJUFMsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAkKGUudGFyZ2V0KS5maW5kKFNFTFMuSU5QVVQpLmZvY3VzKCk7XG4gICAgICB9KTtcblxuICAgICAgc2VsZi4kZG9jdW1lbnQub2ZmKCdjbGljay5jaGlwcy1zZWxlY3QnLCBTRUxTLkNISVApLm9uKCdjbGljay5jaGlwcy1zZWxlY3QnLCBTRUxTLkNISVAsIGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgJGNoaXAgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKCRjaGlwLmxlbmd0aCkge1xuICAgICAgICAgIHZhciB3YXNTZWxlY3RlZCA9ICRjaGlwLmhhc0NsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHZhciAkY2hpcHMgPSAkY2hpcC5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xuICAgICAgICAgICQoU0VMUy5DSElQKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblxuICAgICAgICAgIGlmICghd2FzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0Q2hpcCgkY2hpcC5pbmRleCgpLCAkY2hpcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNlbGYuJGRvY3VtZW50Lm9mZigna2V5ZG93bi5jaGlwcycpLm9uKCdrZXlkb3duLmNoaXBzJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygnaW5wdXQsIHRleHRhcmVhJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWxldGVcbiAgICAgICAgdmFyICRjaGlwID0gc2VsZi4kZG9jdW1lbnQuZmluZChTRUxTLkNISVAgKyBTRUxTLlNFTEVDVEVEX0NISVApO1xuICAgICAgICB2YXIgJGNoaXBzID0gJGNoaXAuY2xvc2VzdChTRUxTLkNISVBTKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9ICRjaGlwLnNpYmxpbmdzKFNFTFMuQ0hJUCkubGVuZ3RoO1xuICAgICAgICB2YXIgaW5kZXg7XG5cbiAgICAgICAgaWYgKCEkY2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS53aGljaCA9PT0gOCB8fCBlLndoaWNoID09PSA0Nikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGluZGV4ID0gJGNoaXAuaW5kZXgoKTtcbiAgICAgICAgICBzZWxmLmRlbGV0ZUNoaXAoaW5kZXgsICRjaGlwcyk7XG5cbiAgICAgICAgICB2YXIgc2VsZWN0SW5kZXggPSBudWxsO1xuICAgICAgICAgIGlmICgoaW5kZXggKyAxKSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBsZW5ndGggfHwgKGluZGV4ICsgMSkgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZWN0SW5kZXggPSBsZW5ndGggLSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxlY3RJbmRleCA8IDApIHNlbGVjdEluZGV4ID0gbnVsbDtcblxuICAgICAgICAgIGlmIChudWxsICE9PSBzZWxlY3RJbmRleCkge1xuICAgICAgICAgICAgc2VsZi5zZWxlY3RDaGlwKHNlbGVjdEluZGV4LCAkY2hpcHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWxlbmd0aCkgJGNoaXBzLmZpbmQoJ2lucHV0JykuZm9jdXMoKTtcblxuICAgICAgICAvLyBsZWZ0XG4gICAgICAgIH0gZWxzZSBpZiAoZS53aGljaCA9PT0gMzcpIHtcbiAgICAgICAgICBpbmRleCA9ICRjaGlwLmluZGV4KCkgLSAxO1xuICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJChTRUxTLkNISVApLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIHNlbGYuc2VsZWN0Q2hpcChpbmRleCwgJGNoaXBzKTtcblxuICAgICAgICAvLyByaWdodFxuICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDM5KSB7XG4gICAgICAgICAgaW5kZXggPSAkY2hpcC5pbmRleCgpICsgMTtcbiAgICAgICAgICAkKFNFTFMuQ0hJUCkucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgaWYgKGluZGV4ID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICAkY2hpcHMuZmluZCgnaW5wdXQnKS5mb2N1cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLnNlbGVjdENoaXAoaW5kZXgsICRjaGlwcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2ZvY3VzaW4uY2hpcHMnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5JTlBVVCkub24oJ2ZvY3VzaW4uY2hpcHMnLCBTRUxTLkNISVBTICsgJyAnICsgU0VMUy5JTlBVVCwgZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciAkY3VyckNoaXBzID0gJChlLnRhcmdldCkuY2xvc2VzdChTRUxTLkNISVBTKTtcbiAgICAgICAgJGN1cnJDaGlwcy5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgICAgJGN1cnJDaGlwcy5zaWJsaW5ncygnbGFiZWwsIC5wcmVmaXgnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoU0VMUy5DSElQKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2ZvY3Vzb3V0LmNoaXBzJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQpLm9uKCdmb2N1c291dC5jaGlwcycsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLklOUFVULCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyICRjdXJyQ2hpcHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xuICAgICAgICAkY3VyckNoaXBzLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhY3RpdmUgaWYgZW1wdHlcbiAgICAgICAgaWYgKCRjdXJyQ2hpcHMuZGF0YSgnY2hpcHMnKSA9PT0gdW5kZWZpbmVkIHx8ICEkY3VyckNoaXBzLmRhdGEoJ2NoaXBzJykubGVuZ3RoKSB7XG4gICAgICAgICAgJGN1cnJDaGlwcy5zaWJsaW5ncygnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgJGN1cnJDaGlwcy5zaWJsaW5ncygnLnByZWZpeCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2tleWRvd24uY2hpcHMtYWRkJywgU0VMUy5DSElQUyArICcgJyArIFNFTFMuSU5QVVQpLm9uKCdrZXlkb3duLmNoaXBzLWFkZCcsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLklOUFVULCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgdmFyICRjaGlwcyA9ICR0YXJnZXQuY2xvc2VzdChTRUxTLkNISVBTKTtcbiAgICAgICAgdmFyIGNoaXBzTGVuZ3RoID0gJGNoaXBzLmNoaWxkcmVuKFNFTFMuQ0hJUCkubGVuZ3RoO1xuXG4gICAgICAgIC8vIGVudGVyXG4gICAgICAgIGlmICgxMyA9PT0gZS53aGljaCkge1xuICAgICAgICAgIC8vIE92ZXJyaWRlIGVudGVyIGlmIGF1dG9jb21wbGV0aW5nLlxuICAgICAgICAgIGlmIChzZWxmLmhhc0F1dG9jb21wbGV0ZSAmJlxuICAgICAgICAgICAgICAkY2hpcHMuZmluZCgnLmF1dG9jb21wbGV0ZS1jb250ZW50LmRyb3Bkb3duLWNvbnRlbnQnKS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgJGNoaXBzLmZpbmQoJy5hdXRvY29tcGxldGUtY29udGVudC5kcm9wZG93bi1jb250ZW50JykuY2hpbGRyZW4oKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VsZi5hZGRDaGlwKHt0YWc6ICR0YXJnZXQudmFsKCl9LCAkY2hpcHMpO1xuICAgICAgICAgICR0YXJnZXQudmFsKCcnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWxldGUgb3IgbGVmdFxuICAgICAgICBpZiAoKDggPT09IGUua2V5Q29kZSB8fCAzNyA9PT0gZS5rZXlDb2RlKSAmJiAnJyA9PT0gJHRhcmdldC52YWwoKSAmJiBjaGlwc0xlbmd0aCkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZWxmLnNlbGVjdENoaXAoY2hpcHNMZW5ndGggLSAxLCAkY2hpcHMpO1xuICAgICAgICAgICR0YXJnZXQuYmx1cigpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENsaWNrIG9uIGRlbGV0ZSBpY29uIGluIGNoaXAuXG4gICAgICBzZWxmLiRkb2N1bWVudC5vZmYoJ2NsaWNrLmNoaXBzLWRlbGV0ZScsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLkRFTEVURSkub24oJ2NsaWNrLmNoaXBzLWRlbGV0ZScsIFNFTFMuQ0hJUFMgKyAnICcgKyBTRUxTLkRFTEVURSwgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuICAgICAgICB2YXIgJGNoaXBzID0gJHRhcmdldC5jbG9zZXN0KFNFTFMuQ0hJUFMpO1xuICAgICAgICB2YXIgJGNoaXAgPSAkdGFyZ2V0LmNsb3Nlc3QoU0VMUy5DSElQKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgc2VsZi5kZWxldGVDaGlwKCRjaGlwLmluZGV4KCksICRjaGlwcyk7XG4gICAgICAgICRjaGlwcy5maW5kKCdpbnB1dCcpLmZvY3VzKCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5jaGlwcyA9IGZ1bmN0aW9uKCRjaGlwcywgY2hpcElkKSB7XG4gICAgICAkY2hpcHMuZW1wdHkoKTtcbiAgICAgICRjaGlwcy5kYXRhKCdjaGlwcycpLmZvckVhY2goZnVuY3Rpb24oZWxlbSl7XG4gICAgICAgICRjaGlwcy5hcHBlbmQoc2VsZi5yZW5kZXJDaGlwKGVsZW0pKTtcbiAgICAgIH0pO1xuICAgICAgJGNoaXBzLmFwcGVuZCgkKCc8aW5wdXQgaWQ9XCInICsgY2hpcElkICsnXCIgY2xhc3M9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiXCI+JykpO1xuICAgICAgc2VsZi5zZXRQbGFjZWhvbGRlcigkY2hpcHMpO1xuXG4gICAgICAvLyBTZXQgZm9yIGF0dHJpYnV0ZSBmb3IgbGFiZWxcbiAgICAgIHZhciBsYWJlbCA9ICRjaGlwcy5uZXh0KCdsYWJlbCcpO1xuICAgICAgaWYgKGxhYmVsLmxlbmd0aCkge1xuICAgICAgICBsYWJlbC5hdHRyKCdmb3InLCBjaGlwSWQpO1xuXG4gICAgICAgIGlmICgkY2hpcHMuZGF0YSgnY2hpcHMnKSE9PSB1bmRlZmluZWQgJiYgJGNoaXBzLmRhdGEoJ2NoaXBzJykubGVuZ3RoKSB7XG4gICAgICAgICAgbGFiZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNldHVwIGF1dG9jb21wbGV0ZSBpZiBuZWVkZWQuXG4gICAgICB2YXIgaW5wdXQgPSAkKCcjJyArIGNoaXBJZCk7XG4gICAgICBpZiAoc2VsZi5oYXNBdXRvY29tcGxldGUpIHtcbiAgICAgICAgY3Vycl9vcHRpb25zLmF1dG9jb21wbGV0ZU9wdGlvbnMub25BdXRvY29tcGxldGUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICBzZWxmLmFkZENoaXAoe3RhZzogdmFsfSwgJGNoaXBzKTtcbiAgICAgICAgICBpbnB1dC52YWwoJycpO1xuICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuYXV0b2NvbXBsZXRlKGN1cnJfb3B0aW9ucy5hdXRvY29tcGxldGVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIGNoaXAgalF1ZXJ5IGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1cbiAgICAgKiBAcmV0dXJuIHtqUXVlcnl9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJDaGlwID0gZnVuY3Rpb24oZWxlbSkge1xuICAgICAgaWYgKCFlbGVtLnRhZykgcmV0dXJuO1xuXG4gICAgICB2YXIgJHJlbmRlcmVkQ2hpcCA9ICQoJzxkaXYgY2xhc3M9XCJjaGlwXCI+PC9kaXY+Jyk7XG4gICAgICAkcmVuZGVyZWRDaGlwLnRleHQoZWxlbS50YWcpO1xuICAgICAgaWYgKGVsZW0uaW1hZ2UpIHtcbiAgICAgICAgJHJlbmRlcmVkQ2hpcC5wcmVwZW5kKCQoJzxpbWcgLz4nKS5hdHRyKCdzcmMnLCBlbGVtLmltYWdlKSlcbiAgICAgIH1cbiAgICAgICRyZW5kZXJlZENoaXAuYXBwZW5kKCQoJzxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgY2xvc2VcIj5jbG9zZTwvaT4nKSk7XG4gICAgICByZXR1cm4gJHJlbmRlcmVkQ2hpcDtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uKCRjaGlwcykge1xuICAgICAgaWYgKCgkY2hpcHMuZGF0YSgnY2hpcHMnKSAhPT0gdW5kZWZpbmVkICYmICEkY2hpcHMuZGF0YSgnY2hpcHMnKS5sZW5ndGgpICYmIGN1cnJfb3B0aW9ucy5wbGFjZWhvbGRlcikge1xuICAgICAgICAkY2hpcHMuZmluZCgnaW5wdXQnKS5wcm9wKCdwbGFjZWhvbGRlcicsIGN1cnJfb3B0aW9ucy5wbGFjZWhvbGRlcik7XG5cbiAgICAgIH0gZWxzZSBpZiAoKCRjaGlwcy5kYXRhKCdjaGlwcycpID09PSB1bmRlZmluZWQgfHwgISEkY2hpcHMuZGF0YSgnY2hpcHMnKS5sZW5ndGgpICYmIGN1cnJfb3B0aW9ucy5zZWNvbmRhcnlQbGFjZWhvbGRlcikge1xuICAgICAgICAkY2hpcHMuZmluZCgnaW5wdXQnKS5wcm9wKCdwbGFjZWhvbGRlcicsIGN1cnJfb3B0aW9ucy5zZWNvbmRhcnlQbGFjZWhvbGRlcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaXNWYWxpZCA9IGZ1bmN0aW9uKCRjaGlwcywgZWxlbSkge1xuICAgICAgdmFyIGNoaXBzID0gJGNoaXBzLmRhdGEoJ2NoaXBzJyk7XG4gICAgICB2YXIgZXhpc3RzID0gZmFsc2U7XG4gICAgICBmb3IgKHZhciBpPTA7IGkgPCBjaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hpcHNbaV0udGFnID09PSBlbGVtLnRhZykge1xuICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICcnICE9PSBlbGVtLnRhZyAmJiAhZXhpc3RzO1xuICAgIH07XG5cbiAgICB0aGlzLmFkZENoaXAgPSBmdW5jdGlvbihlbGVtLCAkY2hpcHMpIHtcbiAgICAgIGlmICghc2VsZi5pc1ZhbGlkKCRjaGlwcywgZWxlbSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyICRyZW5kZXJlZENoaXAgPSBzZWxmLnJlbmRlckNoaXAoZWxlbSk7XG4gICAgICB2YXIgbmV3RGF0YSA9IFtdO1xuICAgICAgdmFyIG9sZERhdGEgPSAkY2hpcHMuZGF0YSgnY2hpcHMnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXdEYXRhLnB1c2gob2xkRGF0YVtpXSk7XG4gICAgICB9XG4gICAgICBuZXdEYXRhLnB1c2goZWxlbSk7XG5cbiAgICAgICRjaGlwcy5kYXRhKCdjaGlwcycsIG5ld0RhdGEpO1xuICAgICAgJHJlbmRlcmVkQ2hpcC5pbnNlcnRCZWZvcmUoJGNoaXBzLmZpbmQoJ2lucHV0JykpO1xuICAgICAgJGNoaXBzLnRyaWdnZXIoJ2NoaXAuYWRkJywgZWxlbSk7XG4gICAgICBzZWxmLnNldFBsYWNlaG9sZGVyKCRjaGlwcyk7XG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlQ2hpcCA9IGZ1bmN0aW9uKGNoaXBJbmRleCwgJGNoaXBzKSB7XG4gICAgICB2YXIgY2hpcCA9ICRjaGlwcy5kYXRhKCdjaGlwcycpW2NoaXBJbmRleF07XG4gICAgICAkY2hpcHMuZmluZCgnLmNoaXAnKS5lcShjaGlwSW5kZXgpLnJlbW92ZSgpO1xuXG4gICAgICB2YXIgbmV3RGF0YSA9IFtdO1xuICAgICAgdmFyIG9sZERhdGEgPSAkY2hpcHMuZGF0YSgnY2hpcHMnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSAhPT0gY2hpcEluZGV4KSB7XG4gICAgICAgICAgbmV3RGF0YS5wdXNoKG9sZERhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRjaGlwcy5kYXRhKCdjaGlwcycsIG5ld0RhdGEpO1xuICAgICAgJGNoaXBzLnRyaWdnZXIoJ2NoaXAuZGVsZXRlJywgY2hpcCk7XG4gICAgICBzZWxmLnNldFBsYWNlaG9sZGVyKCRjaGlwcyk7XG4gICAgfTtcblxuICAgIHRoaXMuc2VsZWN0Q2hpcCA9IGZ1bmN0aW9uKGNoaXBJbmRleCwgJGNoaXBzKSB7XG4gICAgICB2YXIgJGNoaXAgPSAkY2hpcHMuZmluZCgnLmNoaXAnKS5lcShjaGlwSW5kZXgpO1xuICAgICAgaWYgKCRjaGlwICYmIGZhbHNlID09PSAkY2hpcC5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAkY2hpcC5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgJGNoaXBzLnRyaWdnZXIoJ2NoaXAuc2VsZWN0JywgJGNoaXBzLmRhdGEoJ2NoaXBzJylbY2hpcEluZGV4XSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0Q2hpcHNFbGVtZW50ID0gZnVuY3Rpb24oaW5kZXgsICRjaGlwcykge1xuICAgICAgcmV0dXJuICRjaGlwcy5lcShpbmRleCk7XG4gICAgfTtcblxuICAgIC8vIGluaXRcbiAgICB0aGlzLmluaXQoKTtcblxuICAgIHRoaXMuaGFuZGxlRXZlbnRzKCk7XG4gIH07XG59KCBqUXVlcnkgKSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgJC5mbi5wdXNocGluID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvLyBEZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogSW5maW5pdHksXG4gICAgICBvZmZzZXQ6IDBcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlIHB1c2hwaW4gZXZlbnQgYW5kIGNsYXNzZXNcbiAgICBpZiAob3B0aW9ucyA9PT0gXCJyZW1vdmVcIikge1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlkID0gJCh0aGlzKS5kYXRhKCdwdXNocGluLWlkJykpIHtcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKCdzY3JvbGwuJyArIGlkKTtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZURhdGEoJ3B1c2hwaW4taWQnKS5yZW1vdmVDbGFzcygncGluLXRvcCBwaW5uZWQgcGluLWJvdHRvbScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9wdGlvbnMgPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cblxuICAgICRpbmRleCA9IDA7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciAkdW5pcXVlSWQgPSBNYXRlcmlhbGl6ZS5ndWlkKCksXG4gICAgICAgICAgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICRvcmlnaW5hbF9vZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcblxuICAgICAgZnVuY3Rpb24gcmVtb3ZlUGluQ2xhc3NlcyhvYmplY3QpIHtcbiAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdwaW4tdG9wJyk7XG4gICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygncGlubmVkJyk7XG4gICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygncGluLWJvdHRvbScpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVFbGVtZW50cyhvYmplY3RzLCBzY3JvbGxlZCkge1xuICAgICAgICBvYmplY3RzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEFkZCBwb3NpdGlvbiBmaXhlZCAoYmVjYXVzZSBpdHMgYmV0d2VlbiB0b3AgYW5kIGJvdHRvbSlcbiAgICAgICAgICBpZiAob3B0aW9ucy50b3AgPD0gc2Nyb2xsZWQgJiYgb3B0aW9ucy5ib3R0b20gPj0gc2Nyb2xsZWQgJiYgISQodGhpcykuaGFzQ2xhc3MoJ3Bpbm5lZCcpKSB7XG4gICAgICAgICAgICByZW1vdmVQaW5DbGFzc2VzKCQodGhpcykpO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIG9wdGlvbnMub2Zmc2V0KTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Bpbm5lZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCBwaW4tdG9wICh3aGVuIHNjcm9sbGVkIHBvc2l0aW9uIGlzIGFib3ZlIHRvcClcbiAgICAgICAgICBpZiAoc2Nyb2xsZWQgPCBvcHRpb25zLnRvcCAmJiAhJCh0aGlzKS5oYXNDbGFzcygncGluLXRvcCcpKSB7XG4gICAgICAgICAgICByZW1vdmVQaW5DbGFzc2VzKCQodGhpcykpO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIDApO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncGluLXRvcCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZCBwaW4tYm90dG9tICh3aGVuIHNjcm9sbGVkIHBvc2l0aW9uIGlzIGJlbG93IGJvdHRvbSlcbiAgICAgICAgICBpZiAoc2Nyb2xsZWQgPiBvcHRpb25zLmJvdHRvbSAmJiAhJCh0aGlzKS5oYXNDbGFzcygncGluLWJvdHRvbScpKSB7XG4gICAgICAgICAgICByZW1vdmVQaW5DbGFzc2VzKCQodGhpcykpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncGluLWJvdHRvbScpO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3MoJ3RvcCcsIG9wdGlvbnMuYm90dG9tIC0gJG9yaWdpbmFsX29mZnNldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS5kYXRhKCdwdXNocGluLWlkJywgJHVuaXF1ZUlkKTtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzKCR0aGlzLCAkKHdpbmRvdykuc2Nyb2xsVG9wKCkpO1xuICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwuJyArICR1bmlxdWVJZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHNjcm9sbGVkID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgb3B0aW9ucy5vZmZzZXQ7XG4gICAgICAgIHVwZGF0ZUVsZW1lbnRzKCR0aGlzLCAkc2Nyb2xsZWQpO1xuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICB9O1xufSggalF1ZXJ5ICkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgIC8vIGpRdWVyeSByZXZlcnNlXG4gICAgJC5mbi5yZXZlcnNlID0gW10ucmV2ZXJzZTtcblxuICAgIC8vIEhvdmVyIGJlaGF2aW91cjogbWFrZSBzdXJlIHRoaXMgZG9lc24ndCB3b3JrIG9uIC5jbGljay10by10b2dnbGUgRkFCcyFcbiAgICAkKGRvY3VtZW50KS5vbignbW91c2VlbnRlci5maXhlZEFjdGlvbkJ0bicsICcuZml4ZWQtYWN0aW9uLWJ0bjpub3QoLmNsaWNrLXRvLXRvZ2dsZSk6bm90KC50b29sYmFyKScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBvcGVuRkFCTWVudSgkdGhpcyk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlbGVhdmUuZml4ZWRBY3Rpb25CdG4nLCAnLmZpeGVkLWFjdGlvbi1idG46bm90KC5jbGljay10by10b2dnbGUpOm5vdCgudG9vbGJhciknLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgY2xvc2VGQUJNZW51KCR0aGlzKTtcbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZS1vbi1jbGljayBiZWhhdmlvdXIuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmZhYkNsaWNrVG9nZ2xlJywgJy5maXhlZC1hY3Rpb24tYnRuLmNsaWNrLXRvLXRvZ2dsZSA+IGEnLCBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgdmFyICRtZW51ID0gJHRoaXMucGFyZW50KCk7XG4gICAgICBpZiAoJG1lbnUuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGNsb3NlRkFCTWVudSgkbWVudSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcGVuRkFCTWVudSgkbWVudSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUb29sYmFyIHRyYW5zaXRpb24gYmVoYXZpb3VyLlxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5mYWJUb29sYmFyJywgJy5maXhlZC1hY3Rpb24tYnRuLnRvb2xiYXIgPiBhJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIHZhciAkbWVudSA9ICR0aGlzLnBhcmVudCgpO1xuICAgICAgRkFCdG9Ub29sYmFyKCRtZW51KTtcbiAgICB9KTtcblxuICB9KTtcblxuICAkLmZuLmV4dGVuZCh7XG4gICAgb3BlbkZBQjogZnVuY3Rpb24oKSB7XG4gICAgICBvcGVuRkFCTWVudSgkKHRoaXMpKTtcbiAgICB9LFxuICAgIGNsb3NlRkFCOiBmdW5jdGlvbigpIHtcbiAgICAgIGNsb3NlRkFCTWVudSgkKHRoaXMpKTtcbiAgICB9LFxuICAgIG9wZW5Ub29sYmFyOiBmdW5jdGlvbigpIHtcbiAgICAgIEZBQnRvVG9vbGJhcigkKHRoaXMpKTtcbiAgICB9LFxuICAgIGNsb3NlVG9vbGJhcjogZnVuY3Rpb24oKSB7XG4gICAgICB0b29sYmFyVG9GQUIoJCh0aGlzKSk7XG4gICAgfVxuICB9KTtcblxuXG4gIHZhciBvcGVuRkFCTWVudSA9IGZ1bmN0aW9uIChidG4pIHtcbiAgICB2YXIgJHRoaXMgPSBidG47XG4gICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSA9PT0gZmFsc2UpIHtcblxuICAgICAgLy8gR2V0IGRpcmVjdGlvbiBvcHRpb25cbiAgICAgIHZhciBob3Jpem9udGFsID0gJHRoaXMuaGFzQ2xhc3MoJ2hvcml6b250YWwnKTtcbiAgICAgIHZhciBvZmZzZXRZLCBvZmZzZXRYO1xuXG4gICAgICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBvZmZzZXRYID0gNDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXRZID0gNDA7XG4gICAgICB9XG5cbiAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS52ZWxvY2l0eShcbiAgICAgICAgeyBzY2FsZVk6IFwiLjRcIiwgc2NhbGVYOiBcIi40XCIsIHRyYW5zbGF0ZVk6IG9mZnNldFkgKyAncHgnLCB0cmFuc2xhdGVYOiBvZmZzZXRYICsgJ3B4J30sXG4gICAgICAgIHsgZHVyYXRpb246IDAgfSk7XG5cbiAgICAgIHZhciB0aW1lID0gMDtcbiAgICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS5yZXZlcnNlKCkuZWFjaCggZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnZlbG9jaXR5KFxuICAgICAgICAgIHsgb3BhY2l0eTogXCIxXCIsIHNjYWxlWDogXCIxXCIsIHNjYWxlWTogXCIxXCIsIHRyYW5zbGF0ZVk6IFwiMFwiLCB0cmFuc2xhdGVYOiAnMCd9LFxuICAgICAgICAgIHsgZHVyYXRpb246IDgwLCBkZWxheTogdGltZSB9KTtcbiAgICAgICAgdGltZSArPSA0MDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgY2xvc2VGQUJNZW51ID0gZnVuY3Rpb24gKGJ0bikge1xuICAgIHZhciAkdGhpcyA9IGJ0bjtcbiAgICAvLyBHZXQgZGlyZWN0aW9uIG9wdGlvblxuICAgIHZhciBob3Jpem9udGFsID0gJHRoaXMuaGFzQ2xhc3MoJ2hvcml6b250YWwnKTtcbiAgICB2YXIgb2Zmc2V0WSwgb2Zmc2V0WDtcblxuICAgIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICBvZmZzZXRYID0gNDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldFkgPSA0MDtcbiAgICB9XG5cbiAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgdmFyIHRpbWUgPSAwO1xuICAgICR0aGlzLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKS52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgJHRoaXMuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnZlbG9jaXR5KFxuICAgICAgeyBvcGFjaXR5OiBcIjBcIiwgc2NhbGVYOiBcIi40XCIsIHNjYWxlWTogXCIuNFwiLCB0cmFuc2xhdGVZOiBvZmZzZXRZICsgJ3B4JywgdHJhbnNsYXRlWDogb2Zmc2V0WCArICdweCd9LFxuICAgICAgeyBkdXJhdGlvbjogODAgfVxuICAgICk7XG4gIH07XG5cblxuICAvKipcbiAgICogVHJhbnNmb3JtIEZBQiBpbnRvIHRvb2xiYXJcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb2JqZWN0IGpRdWVyeSBvYmplY3RcbiAgICovXG4gIHZhciBGQUJ0b1Rvb2xiYXIgPSBmdW5jdGlvbihidG4pIHtcbiAgICBpZiAoYnRuLmF0dHIoJ2RhdGEtb3BlbicpID09PSBcInRydWVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvZmZzZXRYLCBvZmZzZXRZLCBzY2FsZUZhY3RvcjtcbiAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBidG5SZWN0ID0gYnRuWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBhbmNob3IgPSBidG4uZmluZCgnPiBhJykuZmlyc3QoKTtcbiAgICB2YXIgbWVudSA9IGJ0bi5maW5kKCc+IHVsJykuZmlyc3QoKTtcbiAgICB2YXIgYmFja2Ryb3AgPSAkKCc8ZGl2IGNsYXNzPVwiZmFiLWJhY2tkcm9wXCI+PC9kaXY+Jyk7XG4gICAgdmFyIGZhYkNvbG9yID0gYW5jaG9yLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIGFuY2hvci5hcHBlbmQoYmFja2Ryb3ApO1xuXG4gICAgb2Zmc2V0WCA9IGJ0blJlY3QubGVmdCAtICh3aW5kb3dXaWR0aCAvIDIpICsgKGJ0blJlY3Qud2lkdGggLyAyKTtcbiAgICBvZmZzZXRZID0gd2luZG93SGVpZ2h0IC0gYnRuUmVjdC5ib3R0b207XG4gICAgc2NhbGVGYWN0b3IgPSB3aW5kb3dXaWR0aCAvIGJhY2tkcm9wLndpZHRoKCk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLWJvdHRvbScsIGJ0blJlY3QuYm90dG9tKTtcbiAgICBidG4uYXR0cignZGF0YS1vcmlnaW4tbGVmdCcsIGJ0blJlY3QubGVmdCk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3JpZ2luLXdpZHRoJywgYnRuUmVjdC53aWR0aCk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZVxuICAgIGJ0bi5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgYnRuLmF0dHIoJ2RhdGEtb3BlbicsIHRydWUpO1xuICAgIGJ0bi5jc3Moe1xuICAgICAgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgb2Zmc2V0WCArICdweCknLFxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgfSk7XG4gICAgYW5jaG9yLmNzcyh7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCcgKyAtb2Zmc2V0WSArICdweCknLFxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgfSk7XG4gICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmFiQ29sb3JcbiAgICB9KTtcblxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGJ0bi5jc3Moe1xuICAgICAgICB0cmFuc2Zvcm06ICcnLFxuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIGxpbmVhciAuMnMnXG4gICAgICB9KTtcbiAgICAgIGFuY2hvci5jc3Moe1xuICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxuICAgICAgICB0cmFuc2Zvcm06ICcnLFxuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycydcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBidG4uY3NzKHtcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxuICAgICAgICB9KTtcbiAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgnICsgc2NhbGVGYWN0b3IgKyAnKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1lbnUuZmluZCgnPiBsaSA+IGEnKS5jc3Moe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2Nyb2xsIHRvIGNsb3NlLlxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbC5mYWJUb29sYmFyQ2xvc2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0b29sYmFyVG9GQUIoYnRuKTtcbiAgICAgICAgICAkKHdpbmRvdykub2ZmKCdzY3JvbGwuZmFiVG9vbGJhckNsb3NlJyk7XG4gICAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5mYWJUb29sYmFyQ2xvc2UnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrLmZhYlRvb2xiYXJDbG9zZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QobWVudSkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b29sYmFyVG9GQUIoYnRuKTtcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoJ3Njcm9sbC5mYWJUb29sYmFyQ2xvc2UnKTtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2suZmFiVG9vbGJhckNsb3NlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSB0b29sYmFyIGJhY2sgaW50byBGQUJcbiAgICogQHBhcmFtICB7T2JqZWN0fSAgb2JqZWN0IGpRdWVyeSBvYmplY3RcbiAgICovXG4gIHZhciB0b29sYmFyVG9GQUIgPSBmdW5jdGlvbihidG4pIHtcbiAgICBpZiAoYnRuLmF0dHIoJ2RhdGEtb3BlbicpICE9PSBcInRydWVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvZmZzZXRYLCBvZmZzZXRZLCBzY2FsZUZhY3RvcjtcbiAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHZhciBidG5XaWR0aCA9IGJ0bi5hdHRyKCdkYXRhLW9yaWdpbi13aWR0aCcpO1xuICAgIHZhciBidG5Cb3R0b20gPSBidG4uYXR0cignZGF0YS1vcmlnaW4tYm90dG9tJyk7XG4gICAgdmFyIGJ0bkxlZnQgPSBidG4uYXR0cignZGF0YS1vcmlnaW4tbGVmdCcpO1xuICAgIHZhciBhbmNob3IgPSBidG4uZmluZCgnPiAuYnRuLWZsb2F0aW5nJykuZmlyc3QoKTtcbiAgICB2YXIgbWVudSA9IGJ0bi5maW5kKCc+IHVsJykuZmlyc3QoKTtcbiAgICB2YXIgYmFja2Ryb3AgPSBidG4uZmluZCgnLmZhYi1iYWNrZHJvcCcpO1xuICAgIHZhciBmYWJDb2xvciA9IGFuY2hvci5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcblxuICAgIG9mZnNldFggPSBidG5MZWZ0IC0gKHdpbmRvd1dpZHRoIC8gMikgKyAoYnRuV2lkdGggLyAyKTtcbiAgICBvZmZzZXRZID0gd2luZG93SGVpZ2h0IC0gYnRuQm90dG9tO1xuICAgIHNjYWxlRmFjdG9yID0gd2luZG93V2lkdGggLyBiYWNrZHJvcC53aWR0aCgpO1xuXG5cbiAgICAvLyBIaWRlIGJhY2tkcm9wXG4gICAgYnRuLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBidG4uYXR0cignZGF0YS1vcGVuJywgZmFsc2UpO1xuICAgIGJ0bi5jc3Moe1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgfSk7XG4gICAgYW5jaG9yLmNzcyh7XG4gICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICB9KTtcbiAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxuICAgIH0pO1xuICAgIG1lbnUuZmluZCgnPiBsaSA+IGEnKS5jc3Moe1xuICAgICAgb3BhY2l0eTogJydcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBiYWNrZHJvcC5yZW1vdmUoKTtcblxuICAgICAgLy8gU2V0IGluaXRpYWwgc3RhdGUuXG4gICAgICBidG4uY3NzKHtcbiAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICBib3R0b206ICcnLFxuICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgLW9mZnNldFggKyAncHgsMCwwKSdcbiAgICAgIH0pO1xuICAgICAgYW5jaG9yLmNzcyh7XG4gICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwnICsgb2Zmc2V0WSArICdweCwwKSdcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBidG4uY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzJ1xuICAgICAgICB9KTtcbiAgICAgICAgYW5jaG9yLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApJ1xuICAgICAgICB9KTtcbiAgICAgIH0sIDIwKTtcbiAgICB9LCAyMDApO1xuICB9O1xuXG5cbn0oIGpRdWVyeSApKTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAvLyBJbWFnZSB0cmFuc2l0aW9uIGZ1bmN0aW9uXG4gIE1hdGVyaWFsaXplLmZhZGVJbkltYWdlID0gZnVuY3Rpb24oc2VsZWN0b3JPckVsKSB7XG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgaWYgKHR5cGVvZihzZWxlY3Rvck9yRWwpID09PSAnc3RyaW5nJykge1xuICAgICAgZWxlbWVudCA9ICQoc2VsZWN0b3JPckVsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZihzZWxlY3Rvck9yRWwpID09PSAnb2JqZWN0Jykge1xuICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbGVtZW50LmNzcyh7b3BhY2l0eTogMH0pO1xuICAgICQoZWxlbWVudCkudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7XG4gICAgICBkdXJhdGlvbjogNjUwLFxuICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgZWFzaW5nOiAnZWFzZU91dFNpbmUnXG4gICAgfSk7XG4gICAgJChlbGVtZW50KS52ZWxvY2l0eSh7b3BhY2l0eTogMX0sIHtcbiAgICAgIGR1cmF0aW9uOiAxMzAwLFxuICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgZWFzaW5nOiAnc3dpbmcnLFxuICAgICAgc3RlcDogZnVuY3Rpb24obm93LCBmeCkge1xuICAgICAgICBmeC5zdGFydCA9IDEwMDtcbiAgICAgICAgdmFyIGdyYXlzY2FsZV9zZXR0aW5nID0gbm93LzEwMDtcbiAgICAgICAgdmFyIGJyaWdodG5lc3Nfc2V0dGluZyA9IDE1MCAtICgxMDAgLSBub3cpLzEuNzU7XG5cbiAgICAgICAgaWYgKGJyaWdodG5lc3Nfc2V0dGluZyA8IDEwMCkge1xuICAgICAgICAgIGJyaWdodG5lc3Nfc2V0dGluZyA9IDEwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm93ID49IDApIHtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAgIFwiLXdlYmtpdC1maWx0ZXJcIjogXCJncmF5c2NhbGUoXCIrZ3JheXNjYWxlX3NldHRpbmcrXCIpXCIgKyBcImJyaWdodG5lc3MoXCIrYnJpZ2h0bmVzc19zZXR0aW5nK1wiJSlcIixcbiAgICAgICAgICAgICAgXCJmaWx0ZXJcIjogXCJncmF5c2NhbGUoXCIrZ3JheXNjYWxlX3NldHRpbmcrXCIpXCIgKyBcImJyaWdodG5lc3MoXCIrYnJpZ2h0bmVzc19zZXR0aW5nK1wiJSlcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gSG9yaXpvbnRhbCBzdGFnZ2VyZWQgbGlzdFxuICBNYXRlcmlhbGl6ZS5zaG93U3RhZ2dlcmVkTGlzdCA9IGZ1bmN0aW9uKHNlbGVjdG9yT3JFbCkge1xuICAgIHZhciBlbGVtZW50O1xuICAgIGlmICh0eXBlb2Yoc2VsZWN0b3JPckVsKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsZW1lbnQgPSAkKHNlbGVjdG9yT3JFbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Yoc2VsZWN0b3JPckVsKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWUgPSAwO1xuICAgIGVsZW1lbnQuZmluZCgnbGknKS52ZWxvY2l0eShcbiAgICAgICAgeyB0cmFuc2xhdGVYOiBcIi0xMDBweFwifSxcbiAgICAgICAgeyBkdXJhdGlvbjogMCB9KTtcblxuICAgIGVsZW1lbnQuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS52ZWxvY2l0eShcbiAgICAgICAgeyBvcGFjaXR5OiBcIjFcIiwgdHJhbnNsYXRlWDogXCIwXCJ9LFxuICAgICAgICB7IGR1cmF0aW9uOiA4MDAsIGRlbGF5OiB0aW1lLCBlYXNpbmc6IFs2MCwgMTBdIH0pO1xuICAgICAgdGltZSArPSAxMjA7XG4gICAgfSk7XG4gIH07XG5cblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBIYXJkY29kZWQgLnN0YWdnZXJlZC1saXN0IHNjcm9sbEZpcmVcbiAgICAvLyB2YXIgc3RhZ2dlcmVkTGlzdE9wdGlvbnMgPSBbXTtcbiAgICAvLyAkKCd1bC5zdGFnZ2VyZWQtbGlzdCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcblxuICAgIC8vICAgdmFyIGxhYmVsID0gJ3Njcm9sbEZpcmUtJyArIGk7XG4gICAgLy8gICAkKHRoaXMpLmFkZENsYXNzKGxhYmVsKTtcbiAgICAvLyAgIHN0YWdnZXJlZExpc3RPcHRpb25zLnB1c2goXG4gICAgLy8gICAgIHtzZWxlY3RvcjogJ3VsLnN0YWdnZXJlZC1saXN0LicgKyBsYWJlbCxcbiAgICAvLyAgICAgIG9mZnNldDogMjAwLFxuICAgIC8vICAgICAgY2FsbGJhY2s6ICdzaG93U3RhZ2dlcmVkTGlzdChcInVsLnN0YWdnZXJlZC1saXN0LicgKyBsYWJlbCArICdcIiknfSk7XG4gICAgLy8gfSk7XG4gICAgLy8gc2Nyb2xsRmlyZShzdGFnZ2VyZWRMaXN0T3B0aW9ucyk7XG5cbiAgICAvLyBIYW1tZXJKUywgU3dpcGUgbmF2aWdhdGlvblxuXG4gICAgLy8gVG91Y2ggRXZlbnRcbiAgICB2YXIgc3dpcGVMZWZ0ID0gZmFsc2U7XG4gICAgdmFyIHN3aXBlUmlnaHQgPSBmYWxzZTtcblxuXG4gICAgLy8gRGlzbWlzc2libGUgQ29sbGVjdGlvbnNcbiAgICAkKCcuZGlzbWlzc2FibGUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzKS5oYW1tZXIoe1xuICAgICAgICBwcmV2ZW50X2RlZmF1bHQ6IGZhbHNlXG4gICAgICB9KS5vbigncGFuJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5nZXN0dXJlLnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIpIHtcbiAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBlLmdlc3R1cmUuZGlyZWN0aW9uO1xuICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmRlbHRhWDtcbiAgICAgICAgICB2YXIgdmVsb2NpdHlYID0gZS5nZXN0dXJlLnZlbG9jaXR5WDtcblxuICAgICAgICAgICR0aGlzLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogeFxuICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuXG4gICAgICAgICAgLy8gU3dpcGUgTGVmdFxuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDQgJiYgKHggPiAoJHRoaXMuaW5uZXJXaWR0aCgpIC8gMikgfHwgdmVsb2NpdHlYIDwgLTAuNzUpKSB7XG4gICAgICAgICAgICBzd2lwZUxlZnQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFN3aXBlIFJpZ2h0XG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gMiAmJiAoeCA8ICgtMSAqICR0aGlzLmlubmVyV2lkdGgoKSAvIDIpIHx8IHZlbG9jaXR5WCA+IDAuNzUpKSB7XG4gICAgICAgICAgICBzd2lwZVJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLm9uKCdwYW5lbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIFJlc2V0IGlmIGNvbGxlY3Rpb24gaXMgbW92ZWQgYmFjayBpbnRvIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgIGlmIChNYXRoLmFicyhlLmdlc3R1cmUuZGVsdGFYKSA8ICgkKHRoaXMpLmlubmVyV2lkdGgoKSAvIDIpKSB7XG4gICAgICAgICAgc3dpcGVSaWdodCA9IGZhbHNlO1xuICAgICAgICAgIHN3aXBlTGVmdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiKSB7XG4gICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICBpZiAoc3dpcGVMZWZ0IHx8IHN3aXBlUmlnaHQpIHtcbiAgICAgICAgICAgIHZhciBmdWxsV2lkdGg7XG4gICAgICAgICAgICBpZiAoc3dpcGVMZWZ0KSB7IGZ1bGxXaWR0aCA9ICR0aGlzLmlubmVyV2lkdGgoKTsgfVxuICAgICAgICAgICAgZWxzZSB7IGZ1bGxXaWR0aCA9IC0xICogJHRoaXMuaW5uZXJXaWR0aCgpOyB9XG5cbiAgICAgICAgICAgICR0aGlzLnZlbG9jaXR5KHsgdHJhbnNsYXRlWDogZnVsbFdpZHRoLFxuICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDEwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsIGNvbXBsZXRlOlxuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkdGhpcy5jc3MoJ2JvcmRlcicsICdub25lJyk7XG4gICAgICAgICAgICAgICAgJHRoaXMudmVsb2NpdHkoeyBoZWlnaHQ6IDAsIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICB9LCB7ZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsIGNvbXBsZXRlOlxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgJHRoaXMucmVtb3ZlKCk7IH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IDAsXG4gICAgICAgICAgICAgIH0sIHtkdXJhdGlvbjogMTAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ30pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzd2lwZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgICBzd2lwZVJpZ2h0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxuICAgIC8vIHRpbWUgPSAwXG4gICAgLy8gLy8gVmVydGljYWwgU3RhZ2dlcmVkIGxpc3RcbiAgICAvLyAkKCd1bC5zdGFnZ2VyZWQtbGlzdC52ZXJ0aWNhbCBsaScpLnZlbG9jaXR5KFxuICAgIC8vICAgICB7IHRyYW5zbGF0ZVk6IFwiMTAwcHhcIn0sXG4gICAgLy8gICAgIHsgZHVyYXRpb246IDAgfSk7XG5cbiAgICAvLyAkKCd1bC5zdGFnZ2VyZWQtbGlzdC52ZXJ0aWNhbCBsaScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gICAkKHRoaXMpLnZlbG9jaXR5KFxuICAgIC8vICAgICB7IG9wYWNpdHk6IFwiMVwiLCB0cmFuc2xhdGVZOiBcIjBcIn0sXG4gICAgLy8gICAgIHsgZHVyYXRpb246IDgwMCwgZGVsYXk6IHRpbWUsIGVhc2luZzogWzYwLCAyNV0gfSk7XG4gICAgLy8gICB0aW1lICs9IDEyMDtcbiAgICAvLyB9KTtcblxuICAgIC8vIC8vIEZhZGUgaW4gYW5kIFNjYWxlXG4gICAgLy8gJCgnLmZhZGUtaW4uc2NhbGUnKS52ZWxvY2l0eShcbiAgICAvLyAgICAgeyBzY2FsZVg6IC40LCBzY2FsZVk6IC40LCB0cmFuc2xhdGVYOiAtNjAwfSxcbiAgICAvLyAgICAgeyBkdXJhdGlvbjogMH0pO1xuICAgIC8vICQoJy5mYWRlLWluJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAvLyAgICQodGhpcykudmVsb2NpdHkoXG4gICAgLy8gICAgIHsgb3BhY2l0eTogXCIxXCIsIHNjYWxlWDogMSwgc2NhbGVZOiAxLCB0cmFuc2xhdGVYOiAwfSxcbiAgICAvLyAgICAgeyBkdXJhdGlvbjogODAwLCBlYXNpbmc6IFs2MCwgMTBdIH0pO1xuICAgIC8vIH0pO1xuICB9KTtcbn0oIGpRdWVyeSApKTtcbiIsIihmdW5jdGlvbigkKSB7XG5cbiAgdmFyIHNjcm9sbEZpcmVFdmVudHNIYW5kbGVkID0gZmFsc2U7XG5cbiAgLy8gSW5wdXQ6IEFycmF5IG9mIEpTT04gb2JqZWN0cyB7c2VsZWN0b3IsIG9mZnNldCwgY2FsbGJhY2t9XG4gIE1hdGVyaWFsaXplLnNjcm9sbEZpcmUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIG9uU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgd2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICBmb3IgKHZhciBpID0gMCA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEdldCBvcHRpb25zIGZyb20gZWFjaCBsaW5lXG4gICAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbaV07XG4gICAgICAgIHZhciBzZWxlY3RvciA9IHZhbHVlLnNlbGVjdG9yLFxuICAgICAgICAgICAgb2Zmc2V0ID0gdmFsdWUub2Zmc2V0LFxuICAgICAgICAgICAgY2FsbGJhY2sgPSB2YWx1ZS5jYWxsYmFjaztcblxuICAgICAgICB2YXIgY3VycmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKCBjdXJyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciBlbGVtZW50T2Zmc2V0ID0gY3VycmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgICAgICAgaWYgKHdpbmRvd1Njcm9sbCA+IChlbGVtZW50T2Zmc2V0ICsgb2Zmc2V0KSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmRvbmUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIGN1cnJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja0Z1bmMgPSBuZXcgRnVuY3Rpb24oY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuYyhjdXJyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFsdWUuZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgdmFyIHRocm90dGxlZFNjcm9sbCA9IE1hdGVyaWFsaXplLnRocm90dGxlKGZ1bmN0aW9uKCkge1xuICAgICAgb25TY3JvbGwoKTtcbiAgICB9LCBvcHRpb25zLnRocm90dGxlIHx8IDEwMCk7XG5cbiAgICBpZiAoIXNjcm9sbEZpcmVFdmVudHNIYW5kbGVkKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aHJvdHRsZWRTY3JvbGwpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhyb3R0bGVkU2Nyb2xsKTtcbiAgICAgIHNjcm9sbEZpcmVFdmVudHNIYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBwZXJmb3JtIGEgc2NhbiBvbmNlLCBhZnRlciBjdXJyZW50IGV4ZWN1dGlvbiBjb250ZXh0LCBhbmQgYWZ0ZXIgZG9tIGlzIHJlYWR5XG4gICAgc2V0VGltZW91dCh0aHJvdHRsZWRTY3JvbGwsIDApO1xuICB9O1xuXG59KShqUXVlcnkpO1xuIiwiLyohXG4gKiBwaWNrYWRhdGUuanMgdjMuNS4wLCAyMDE0LzA0LzEzXG4gKiBCeSBBbXN1bCwgaHR0cDovL2Ftc3VsLmNhXG4gKiBIb3N0ZWQgb24gaHR0cDovL2Ftc3VsLmdpdGh1Yi5pby9waWNrYWRhdGUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVFxuICovXG5cbihmdW5jdGlvbiAoIGZhY3RvcnkgKSB7XG5cbiAgICBNYXRlcmlhbGl6ZS5QaWNrZXIgPSBmYWN0b3J5KCBqUXVlcnkgKVxuXG59KGZ1bmN0aW9uKCAkICkge1xuXG52YXIgJHdpbmRvdyA9ICQoIHdpbmRvdyApXG52YXIgJGRvY3VtZW50ID0gJCggZG9jdW1lbnQgKVxudmFyICRodG1sID0gJCggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IClcblxuXG4vKipcbiAqIFRoZSBwaWNrZXIgY29uc3RydWN0b3IgdGhhdCBjcmVhdGVzIGEgYmxhbmsgcGlja2VyLlxuICovXG5mdW5jdGlvbiBQaWNrZXJDb25zdHJ1Y3RvciggRUxFTUVOVCwgTkFNRSwgQ09NUE9ORU5ULCBPUFRJT05TICkge1xuXG4gICAgLy8gSWYgdGhlcmXigJlzIG5vIGVsZW1lbnQsIHJldHVybiB0aGUgcGlja2VyIGNvbnN0cnVjdG9yLlxuICAgIGlmICggIUVMRU1FTlQgKSByZXR1cm4gUGlja2VyQ29uc3RydWN0b3JcblxuXG4gICAgdmFyXG4gICAgICAgIElTX0RFRkFVTFRfVEhFTUUgPSBmYWxzZSxcblxuXG4gICAgICAgIC8vIFRoZSBzdGF0ZSBvZiB0aGUgcGlja2VyLlxuICAgICAgICBTVEFURSA9IHtcbiAgICAgICAgICAgIGlkOiBFTEVNRU5ULmlkIHx8ICdQJyArIE1hdGguYWJzKCB+fihNYXRoLnJhbmRvbSgpICogbmV3IERhdGUoKSkgKVxuICAgICAgICB9LFxuXG5cbiAgICAgICAgLy8gTWVyZ2UgdGhlIGRlZmF1bHRzIGFuZCBvcHRpb25zIHBhc3NlZC5cbiAgICAgICAgU0VUVElOR1MgPSBDT01QT05FTlQgPyAkLmV4dGVuZCggdHJ1ZSwge30sIENPTVBPTkVOVC5kZWZhdWx0cywgT1BUSU9OUyApIDogT1BUSU9OUyB8fCB7fSxcblxuXG4gICAgICAgIC8vIE1lcmdlIHRoZSBkZWZhdWx0IGNsYXNzZXMgd2l0aCB0aGUgc2V0dGluZ3MgY2xhc3Nlcy5cbiAgICAgICAgQ0xBU1NFUyA9ICQuZXh0ZW5kKCB7fSwgUGlja2VyQ29uc3RydWN0b3Iua2xhc3NlcygpLCBTRVRUSU5HUy5rbGFzcyApLFxuXG5cbiAgICAgICAgLy8gVGhlIGVsZW1lbnQgbm9kZSB3cmFwcGVyIGludG8gYSBqUXVlcnkgb2JqZWN0LlxuICAgICAgICAkRUxFTUVOVCA9ICQoIEVMRU1FTlQgKSxcblxuXG4gICAgICAgIC8vIFBzZXVkbyBwaWNrZXIgY29uc3RydWN0b3IuXG4gICAgICAgIFBpY2tlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpXG4gICAgICAgIH0sXG5cblxuICAgICAgICAvLyBUaGUgcGlja2VyIHByb3RvdHlwZS5cbiAgICAgICAgUCA9IFBpY2tlckluc3RhbmNlLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAgICAgY29uc3RydWN0b3I6IFBpY2tlckluc3RhbmNlLFxuXG4gICAgICAgICAgICAkbm9kZTogJEVMRU1FTlQsXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbml0aWFsaXplIGV2ZXJ5dGhpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXTigJlzIGFscmVhZHkgc3RhcnRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICBpZiAoIFNUQVRFICYmIFNUQVRFLnN0YXJ0ICkgcmV0dXJuIFBcblxuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBwaWNrZXIgc3RhdGVzLlxuICAgICAgICAgICAgICAgIFNUQVRFLm1ldGhvZHMgPSB7fVxuICAgICAgICAgICAgICAgIFNUQVRFLnN0YXJ0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIFNUQVRFLm9wZW4gPSBmYWxzZVxuICAgICAgICAgICAgICAgIFNUQVRFLnR5cGUgPSBFTEVNRU5ULnR5cGVcblxuXG4gICAgICAgICAgICAgICAgLy8gQ29uZmlybSBmb2N1cyBzdGF0ZSwgY29udmVydCBpbnRvIHRleHQgaW5wdXQgdG8gcmVtb3ZlIFVBIHN0eWxpbmdzLFxuICAgICAgICAgICAgICAgIC8vIGFuZCBzZXQgYXMgcmVhZG9ubHkgdG8gcHJldmVudCBrZXlib2FyZCBwb3B1cC5cbiAgICAgICAgICAgICAgICBFTEVNRU5ULmF1dG9mb2N1cyA9IEVMRU1FTlQgPT0gZ2V0QWN0aXZlRWxlbWVudCgpXG4gICAgICAgICAgICAgICAgRUxFTUVOVC5yZWFkT25seSA9ICFTRVRUSU5HUy5lZGl0YWJsZVxuICAgICAgICAgICAgICAgIEVMRU1FTlQuaWQgPSBFTEVNRU5ULmlkIHx8IFNUQVRFLmlkXG4gICAgICAgICAgICAgICAgaWYgKCBFTEVNRU5ULnR5cGUgIT0gJ3RleHQnICkge1xuICAgICAgICAgICAgICAgICAgICBFTEVNRU5ULnR5cGUgPSAndGV4dCdcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwaWNrZXIgY29tcG9uZW50IHdpdGggdGhlIHNldHRpbmdzLlxuICAgICAgICAgICAgICAgIFAuY29tcG9uZW50ID0gbmV3IENPTVBPTkVOVChQLCBTRVRUSU5HUylcblxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBwaWNrZXIgcm9vdCB3aXRoIGEgaG9sZGVyIGFuZCB0aGVuIHByZXBhcmUgaXQuXG4gICAgICAgICAgICAgICAgUC4kcm9vdCA9ICQoIFBpY2tlckNvbnN0cnVjdG9yLl8ubm9kZSgnZGl2JywgY3JlYXRlV3JhcHBlZENvbXBvbmVudCgpLCBDTEFTU0VTLnBpY2tlciwgJ2lkPVwiJyArIEVMRU1FTlQuaWQgKyAnX3Jvb3RcIiB0YWJpbmRleD1cIjBcIicpIClcbiAgICAgICAgICAgICAgICBwcmVwYXJlRWxlbWVudFJvb3QoKVxuXG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZeKAmXMgYSBmb3JtYXQgZm9yIHRoZSBoaWRkZW4gaW5wdXQgZWxlbWVudCwgY3JlYXRlIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgIGlmICggU0VUVElOR1MuZm9ybWF0U3VibWl0ICkge1xuICAgICAgICAgICAgICAgICAgICBwcmVwYXJlRWxlbWVudEhpZGRlbigpXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAvLyBQcmVwYXJlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHByZXBhcmVFbGVtZW50KClcblxuXG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHRoZSByb290IGFzIHNwZWNpZmllZCBpbiB0aGUgc2V0dGluZ3MuXG4gICAgICAgICAgICAgICAgaWYgKCBTRVRUSU5HUy5jb250YWluZXIgKSAkKCBTRVRUSU5HUy5jb250YWluZXIgKS5hcHBlbmQoIFAuJHJvb3QgKVxuICAgICAgICAgICAgICAgIGVsc2UgJEVMRU1FTlQuYmVmb3JlKCBQLiRyb290IClcblxuXG4gICAgICAgICAgICAgICAgLy8gQmluZCB0aGUgZGVmYXVsdCBjb21wb25lbnQgYW5kIHNldHRpbmdzIGV2ZW50cy5cbiAgICAgICAgICAgICAgICBQLm9uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFAuY29tcG9uZW50Lm9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogUC5jb21wb25lbnQub25SZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgIHN0b3A6IFAuY29tcG9uZW50Lm9uU3RvcCxcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogUC5jb21wb25lbnQub25PcGVuLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZTogUC5jb21wb25lbnQub25DbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBQLmNvbXBvbmVudC5vblNldFxuICAgICAgICAgICAgICAgIH0pLm9uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFNFVFRJTkdTLm9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogU0VUVElOR1Mub25SZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgIHN0b3A6IFNFVFRJTkdTLm9uU3RvcCxcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogU0VUVElOR1Mub25PcGVuLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZTogU0VUVElOR1Mub25DbG9zZSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBTRVRUSU5HUy5vblNldFxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIC8vIE9uY2Ugd2XigJlyZSBhbGwgc2V0LCBjaGVjayB0aGUgdGhlbWUgaW4gdXNlLlxuICAgICAgICAgICAgICAgIElTX0RFRkFVTFRfVEhFTUUgPSBpc1VzaW5nRGVmYXVsdFRoZW1lKCBQLiRyb290LmNoaWxkcmVuKClbIDAgXSApXG5cblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGhhcyBhdXRvZm9jdXMsIG9wZW4gdGhlIHBpY2tlci5cbiAgICAgICAgICAgICAgICBpZiAoIEVMRU1FTlQuYXV0b2ZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICBQLm9wZW4oKVxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBxdWV1ZWQgdGhlIOKAnHN0YXJ04oCdIGFuZCDigJxyZW5kZXLigJ0gZXZlbnRzLlxuICAgICAgICAgICAgICAgIHJldHVybiBQLnRyaWdnZXIoICdzdGFydCcgKS50cmlnZ2VyKCAncmVuZGVyJyApXG4gICAgICAgICAgICB9LCAvL3N0YXJ0XG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW5kZXIgYSBuZXcgcGlja2VyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oIGVudGlyZUNvbXBvbmVudCApIHtcblxuICAgICAgICAgICAgICAgIC8vIEluc2VydCBhIG5ldyBjb21wb25lbnQgaG9sZGVyIGluIHRoZSByb290IG9yIGJveC5cbiAgICAgICAgICAgICAgICBpZiAoIGVudGlyZUNvbXBvbmVudCApIFAuJHJvb3QuaHRtbCggY3JlYXRlV3JhcHBlZENvbXBvbmVudCgpIClcbiAgICAgICAgICAgICAgICBlbHNlIFAuJHJvb3QuZmluZCggJy4nICsgQ0xBU1NFUy5ib3ggKS5odG1sKCBQLmNvbXBvbmVudC5ub2RlcyggU1RBVEUub3BlbiApIClcblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHF1ZXVlZCDigJxyZW5kZXLigJ0gZXZlbnRzLlxuICAgICAgICAgICAgICAgIHJldHVybiBQLnRyaWdnZXIoICdyZW5kZXInIClcbiAgICAgICAgICAgIH0sIC8vcmVuZGVyXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXN0cm95IGV2ZXJ5dGhpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBpdOKAmXMgYWxyZWFkeSBzdG9wcGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIGlmICggIVNUQVRFLnN0YXJ0ICkgcmV0dXJuIFBcblxuICAgICAgICAgICAgICAgIC8vIFRoZW4gY2xvc2UgdGhlIHBpY2tlci5cbiAgICAgICAgICAgICAgICBQLmNsb3NlKClcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgaGlkZGVuIGZpZWxkLlxuICAgICAgICAgICAgICAgIGlmICggUC5faGlkZGVuICkge1xuICAgICAgICAgICAgICAgICAgICBQLl9oaWRkZW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggUC5faGlkZGVuIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHJvb3QuXG4gICAgICAgICAgICAgICAgUC4kcm9vdC5yZW1vdmUoKVxuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBpbnB1dCBjbGFzcywgcmVtb3ZlIHRoZSBzdG9yZWQgZGF0YSwgYW5kIHVuYmluZFxuICAgICAgICAgICAgICAgIC8vIHRoZSBldmVudHMgKGFmdGVyIGEgdGljayBmb3IgSUUgLSBzZWUgYFAuY2xvc2VgKS5cbiAgICAgICAgICAgICAgICAkRUxFTUVOVC5yZW1vdmVDbGFzcyggQ0xBU1NFUy5pbnB1dCApLnJlbW92ZURhdGEoIE5BTUUgKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkRUxFTUVOVC5vZmYoICcuJyArIFNUQVRFLmlkIClcbiAgICAgICAgICAgICAgICB9LCAwKVxuXG4gICAgICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgZWxlbWVudCBzdGF0ZVxuICAgICAgICAgICAgICAgIEVMRU1FTlQudHlwZSA9IFNUQVRFLnR5cGVcbiAgICAgICAgICAgICAgICBFTEVNRU5ULnJlYWRPbmx5ID0gZmFsc2VcblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHF1ZXVlZCDigJxzdG9w4oCdIGV2ZW50cy5cbiAgICAgICAgICAgICAgICBQLnRyaWdnZXIoICdzdG9wJyApXG5cbiAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgcGlja2VyIHN0YXRlcy5cbiAgICAgICAgICAgICAgICBTVEFURS5tZXRob2RzID0ge31cbiAgICAgICAgICAgICAgICBTVEFURS5zdGFydCA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUFxuICAgICAgICAgICAgfSwgLy9zdG9wXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBPcGVuIHVwIHRoZSBwaWNrZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24oIGRvbnRHaXZlRm9jdXMgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBpdOKAmXMgYWxyZWFkeSBvcGVuLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIGlmICggU1RBVEUub3BlbiApIHJldHVybiBQXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIOKAnGFjdGl2ZeKAnSBjbGFzcy5cbiAgICAgICAgICAgICAgICAkRUxFTUVOVC5hZGRDbGFzcyggQ0xBU1NFUy5hY3RpdmUgKVxuICAgICAgICAgICAgICAgIGFyaWEoIEVMRU1FTlQsICdleHBhbmRlZCcsIHRydWUgKVxuXG4gICAgICAgICAgICAgICAgLy8gKiBBIEZpcmVmb3ggYnVnLCB3aGVuIGBodG1sYCBoYXMgYG92ZXJmbG93OmhpZGRlbmAsIHJlc3VsdHMgaW5cbiAgICAgICAgICAgICAgICAvLyAgIGtpbGxpbmcgdHJhbnNpdGlvbnMgOiguIFNvIGFkZCB0aGUg4oCcb3BlbmVk4oCdIHN0YXRlIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgICAgICAgICAgICAgLy8gICBCdWc6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTYyNTI4OVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUg4oCcb3BlbmVk4oCdIGNsYXNzIHRvIHRoZSBwaWNrZXIgcm9vdC5cbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5hZGRDbGFzcyggQ0xBU1NFUy5vcGVuZWQgKVxuICAgICAgICAgICAgICAgICAgICBhcmlhKCBQLiRyb290WzBdLCAnaGlkZGVuJywgZmFsc2UgKVxuXG4gICAgICAgICAgICAgICAgfSwgMCApXG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHRvIGdpdmUgZm9jdXMsIGJpbmQgdGhlIGVsZW1lbnQgYW5kIGRvYyBldmVudHMuXG4gICAgICAgICAgICAgICAgaWYgKCBkb250R2l2ZUZvY3VzICE9PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgaXQgYXMgb3Blbi5cbiAgICAgICAgICAgICAgICAgICAgU1RBVEUub3BlbiA9IHRydWVcblxuICAgICAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IHRoZSBwYWdlIGZyb20gc2Nyb2xsaW5nLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIElTX0RFRkFVTFRfVEhFTUUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaHRtbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3MoICdvdmVyZmxvdycsICdoaWRkZW4nICkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzKCAncGFkZGluZy1yaWdodCcsICcrPScgKyBnZXRTY3JvbGxiYXJXaWR0aCgpIClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgZm9jdXMgdG8gdGhlIHJvb3QgZWxlbWVudOKAmXMgalF1ZXJ5IG9iamVjdC5cbiAgICAgICAgICAgICAgICAgICAgLy8gKiBXb3JrYXJvdW5kIGZvciBpT1M4IHRvIGJyaW5nIHRoZSBwaWNrZXLigJlzIHJvb3QgaW50byB2aWV3LlxuICAgICAgICAgICAgICAgICAgICBQLiRyb290LmVxKDApLmZvY3VzKClcblxuICAgICAgICAgICAgICAgICAgICAvLyBCaW5kIHRoZSBkb2N1bWVudCBldmVudHMuXG4gICAgICAgICAgICAgICAgICAgICRkb2N1bWVudC5vbiggJ2NsaWNrLicgKyBTVEFURS5pZCArICcgZm9jdXNpbi4nICsgU1RBVEUuaWQsIGZ1bmN0aW9uKCBldmVudCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IG9mIHRoZSBldmVudCBpcyBub3QgdGhlIGVsZW1lbnQsIGNsb3NlIHRoZSBwaWNrZXIgcGlja2VyLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBEb27igJl0IHdvcnJ5IGFib3V0IGNsaWNrcyBvciBmb2N1c2lucyBvbiB0aGUgcm9vdCBiZWNhdXNlIHRob3NlIGRvbuKAmXQgYnViYmxlIHVwLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBBbHNvLCBmb3IgRmlyZWZveCwgYSBjbGljayBvbiBhbiBgb3B0aW9uYCBlbGVtZW50IGJ1YmJsZXMgdXAgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdG8gdGhlIGRvYy4gU28gbWFrZSBzdXJlIHRoZSB0YXJnZXQgd2Fzbid0IHRoZSBkb2MuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAqIEluIEZpcmVmb3ggc3RvcFByb3BhZ2F0aW9uKCkgZG9lc27igJl0IHByZXZlbnQgcmlnaHQtY2xpY2sgZXZlbnRzIGZyb20gYnViYmxpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdoaWNoIGNhdXNlcyB0aGUgcGlja2VyIHRvIHVuZXhwZWN0ZWRseSBjbG9zZSB3aGVuIHJpZ2h0LWNsaWNraW5nIGl0LiBTbyBtYWtlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHN1cmUgdGhlIGV2ZW50IHdhc27igJl0IGEgcmlnaHQtY2xpY2suXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRhcmdldCAhPSBFTEVNRU5UICYmIHRhcmdldCAhPSBkb2N1bWVudCAmJiBldmVudC53aGljaCAhPSAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCB3YXMgdGhlIGhvbGRlciB0aGF0IGNvdmVycyB0aGUgc2NyZWVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgdGhlIGVsZW1lbnQgZm9jdXNlZCB0byBtYWludGFpbiB0YWJpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0YXJnZXQgPT09IFAuJHJvb3QuY2hpbGRyZW4oKVswXSApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSkub24oICdrZXlkb3duLicgKyBTVEFURS5pZCwgZnVuY3Rpb24oIGV2ZW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGtleWNvZGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Y29kZSA9IGV2ZW50LmtleUNvZGUsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFuc2xhdGUgdGhhdCB0byBhIHNlbGVjdGlvbiBjaGFuZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Y29kZVRvTW92ZSA9IFAuY29tcG9uZW50LmtleVsga2V5Y29kZSBdLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR3JhYiB0aGUgdGFyZ2V0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uIGVzY2FwZSwgY2xvc2UgdGhlIHBpY2tlciBhbmQgZ2l2ZSBmb2N1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgga2V5Y29kZSA9PSAyNyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIGtleSBtb3ZlbWVudCBvciDigJxlbnRlcuKAnSBrZXlwcmVzcyBvbiB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCB0YXJnZXQgPT0gUC4kcm9vdFswXSAmJiAoIGtleWNvZGVUb01vdmUgfHwga2V5Y29kZSA9PSAxMyApICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBhY3Rpb24gdG8gc3RvcCBwYWdlIG1vdmVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIGtleSBtb3ZlbWVudCBhY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBrZXljb2RlVG9Nb3ZlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIFAuY29tcG9uZW50LmtleS5nbywgUCwgWyBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGtleWNvZGVUb01vdmUgKSBdIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbiDigJxlbnRlcuKAnSwgaWYgdGhlIGhpZ2hsaWdodGVkIGl0ZW0gaXNu4oCZdCBkaXNhYmxlZCwgc2V0IHRoZSB2YWx1ZSBhbmQgY2xvc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoICFQLiRyb290LmZpbmQoICcuJyArIENMQVNTRVMuaGlnaGxpZ2h0ZWQgKS5oYXNDbGFzcyggQ0xBU1NFUy5kaXNhYmxlZCApICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLnNldCggJ3NlbGVjdCcsIFAuY29tcG9uZW50Lml0ZW0uaGlnaGxpZ2h0IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBTRVRUSU5HUy5jbG9zZU9uU2VsZWN0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUC5jbG9zZSggdHJ1ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyB3aXRoaW4gdGhlIHJvb3QgYW5kIOKAnGVudGVy4oCdIGlzIHByZXNzZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IHRoZSBkZWZhdWx0IGFjdGlvbiBhbmQgdHJpZ2dlciBhIGNsaWNrIG9uIHRoZSB0YXJnZXQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAkLmNvbnRhaW5zKCBQLiRyb290WzBdLCB0YXJnZXQgKSAmJiBrZXljb2RlID09IDEzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHF1ZXVlZCDigJxvcGVu4oCdIGV2ZW50cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gUC50cmlnZ2VyKCAnb3BlbicgKVxuICAgICAgICAgICAgfSwgLy9vcGVuXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDbG9zZSB0aGUgcGlja2VyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiggZ2l2ZUZvY3VzICkge1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgbmVlZCB0byBnaXZlIGZvY3VzLCBkbyBpdCBiZWZvcmUgY2hhbmdpbmcgc3RhdGVzLlxuICAgICAgICAgICAgICAgIGlmICggZ2l2ZUZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICAvLyAuLi4uYWggeWVzISBJdCB3b3VsZOKAmXZlIGJlZW4gaW5jb21wbGV0ZSB3aXRob3V0IGEgY3Jhenkgd29ya2Fyb3VuZCBmb3IgSUUgOnxcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGZvY3VzIGlzIHRyaWdnZXJlZCAqYWZ0ZXIqIHRoZSBjbG9zZSBoYXMgY29tcGxldGVkIC0gY2F1c2luZyBpdFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBvcGVuIGFnYWluLiBTbyB1bmJpbmQgYW5kIHJlYmluZCB0aGUgZXZlbnQgYXQgdGhlIG5leHQgdGljay5cbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5vZmYoICdmb2N1cy50b09wZW4nICkuZXEoMCkuZm9jdXMoKVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFAuJHJvb3Qub24oICdmb2N1cy50b09wZW4nLCBoYW5kbGVGb2N1c1RvT3BlbkV2ZW50IClcbiAgICAgICAgICAgICAgICAgICAgfSwgMCApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSDigJxhY3RpdmXigJ0gY2xhc3MuXG4gICAgICAgICAgICAgICAgJEVMRU1FTlQucmVtb3ZlQ2xhc3MoIENMQVNTRVMuYWN0aXZlIClcbiAgICAgICAgICAgICAgICBhcmlhKCBFTEVNRU5ULCAnZXhwYW5kZWQnLCBmYWxzZSApXG5cbiAgICAgICAgICAgICAgICAvLyAqIEEgRmlyZWZveCBidWcsIHdoZW4gYGh0bWxgIGhhcyBgb3ZlcmZsb3c6aGlkZGVuYCwgcmVzdWx0cyBpblxuICAgICAgICAgICAgICAgIC8vICAga2lsbGluZyB0cmFuc2l0aW9ucyA6KC4gU28gcmVtb3ZlIHRoZSDigJxvcGVuZWTigJ0gc3RhdGUgb24gdGhlIG5leHQgdGljay5cbiAgICAgICAgICAgICAgICAvLyAgIEJ1ZzogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjI1Mjg5XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSDigJxvcGVuZWTigJ0gYW5kIOKAnGZvY3VzZWTigJ0gY2xhc3MgZnJvbSB0aGUgcGlja2VyIHJvb3QuXG4gICAgICAgICAgICAgICAgICAgIFAuJHJvb3QucmVtb3ZlQ2xhc3MoIENMQVNTRVMub3BlbmVkICsgJyAnICsgQ0xBU1NFUy5mb2N1c2VkIClcbiAgICAgICAgICAgICAgICAgICAgYXJpYSggUC4kcm9vdFswXSwgJ2hpZGRlbicsIHRydWUgKVxuXG4gICAgICAgICAgICAgICAgfSwgMCApXG5cbiAgICAgICAgICAgICAgICAvLyBJZiBpdOKAmXMgYWxyZWFkeSBjbG9zZWQsIGRvIG5vdGhpbmcgbW9yZS5cbiAgICAgICAgICAgICAgICBpZiAoICFTVEFURS5vcGVuICkgcmV0dXJuIFBcblxuICAgICAgICAgICAgICAgIC8vIFNldCBpdCBhcyBjbG9zZWQuXG4gICAgICAgICAgICAgICAgU1RBVEUub3BlbiA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAvLyBBbGxvdyB0aGUgcGFnZSB0byBzY3JvbGwuXG4gICAgICAgICAgICAgICAgaWYgKCBJU19ERUZBVUxUX1RIRU1FICkge1xuICAgICAgICAgICAgICAgICAgICAkaHRtbC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcyggJ292ZXJmbG93JywgJycgKS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcyggJ3BhZGRpbmctcmlnaHQnLCAnLT0nICsgZ2V0U2Nyb2xsYmFyV2lkdGgoKSApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBkb2N1bWVudCBldmVudHMuXG4gICAgICAgICAgICAgICAgJGRvY3VtZW50Lm9mZiggJy4nICsgU1RBVEUuaWQgKVxuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcXVldWVkIOKAnGNsb3Nl4oCdIGV2ZW50cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gUC50cmlnZ2VyKCAnY2xvc2UnIClcbiAgICAgICAgICAgIH0sIC8vY2xvc2VcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENsZWFyIHRoZSB2YWx1ZXNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY2xlYXI6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQLnNldCggJ2NsZWFyJywgbnVsbCwgb3B0aW9ucyApXG4gICAgICAgICAgICB9LCAvL2NsZWFyXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTZXQgc29tZXRoaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24oIHRoaW5nLCB2YWx1ZSwgb3B0aW9ucyApIHtcblxuICAgICAgICAgICAgICAgIHZhciB0aGluZ0l0ZW0sIHRoaW5nVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaW5nSXNPYmplY3QgPSAkLmlzUGxhaW5PYmplY3QoIHRoaW5nICksXG4gICAgICAgICAgICAgICAgICAgIHRoaW5nT2JqZWN0ID0gdGhpbmdJc09iamVjdCA/IHRoaW5nIDoge31cblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIHVzYWJsZSBvcHRpb25zLlxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB0aGluZ0lzT2JqZWN0ICYmICQuaXNQbGFpbk9iamVjdCggdmFsdWUgKSA/IHZhbHVlIDogb3B0aW9ucyB8fCB7fVxuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGluZyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGhpbmcgaXNu4oCZdCBhbiBvYmplY3QsIG1ha2UgaXQgb25lLlxuICAgICAgICAgICAgICAgICAgICBpZiAoICF0aGluZ0lzT2JqZWN0ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpbmdPYmplY3RbIHRoaW5nIF0gPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gR28gdGhyb3VnaCB0aGUgdGhpbmdzIG9mIGl0ZW1zIHRvIHNldC5cbiAgICAgICAgICAgICAgICAgICAgZm9yICggdGhpbmdJdGVtIGluIHRoaW5nT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHcmFiIHRoZSB2YWx1ZSBvZiB0aGUgdGhpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGluZ1ZhbHVlID0gdGhpbmdPYmplY3RbIHRoaW5nSXRlbSBdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpcnN0LCBpZiB0aGUgaXRlbSBleGlzdHMgYW5kIHRoZXJl4oCZcyBhIHZhbHVlLCBzZXQgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaW5nSXRlbSBpbiBQLmNvbXBvbmVudC5pdGVtICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGhpbmdWYWx1ZSA9PT0gdW5kZWZpbmVkICkgdGhpbmdWYWx1ZSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNvbXBvbmVudC5zZXQoIHRoaW5nSXRlbSwgdGhpbmdWYWx1ZSwgb3B0aW9ucyApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZW4sIGNoZWNrIHRvIHVwZGF0ZSB0aGUgZWxlbWVudCB2YWx1ZSBhbmQgYnJvYWRjYXN0IGEgY2hhbmdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aGluZ0l0ZW0gPT0gJ3NlbGVjdCcgfHwgdGhpbmdJdGVtID09ICdjbGVhcicgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJEVMRU1FTlQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCggdGhpbmdJdGVtID09ICdjbGVhcicgPyAnJyA6IFAuZ2V0KCB0aGluZ0l0ZW0sIFNFVFRJTkdTLmZvcm1hdCApICkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIoICdjaGFuZ2UnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciBhIG5ldyBwaWNrZXIuXG4gICAgICAgICAgICAgICAgICAgIFAucmVuZGVyKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBtZXRob2QgaXNu4oCZdCBtdXRlZCwgdHJpZ2dlciBxdWV1ZWQg4oCcc2V04oCdIGV2ZW50cyBhbmQgcGFzcyB0aGUgYHRoaW5nT2JqZWN0YC5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5tdXRlZCA/IFAgOiBQLnRyaWdnZXIoICdzZXQnLCB0aGluZ09iamVjdCApXG4gICAgICAgICAgICB9LCAvL3NldFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogR2V0IHNvbWV0aGluZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCB0aGluZywgZm9ybWF0ICkge1xuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZXJl4oCZcyBzb21ldGhpbmcgdG8gZ2V0LlxuICAgICAgICAgICAgICAgIHRoaW5nID0gdGhpbmcgfHwgJ3ZhbHVlJ1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBwaWNrZXIgc3RhdGUgZXhpc3RzLCByZXR1cm4gdGhhdC5cbiAgICAgICAgICAgICAgICBpZiAoIFNUQVRFWyB0aGluZyBdICE9IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTVEFURVsgdGhpbmcgXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgc3VibWlzc2lvbiB2YWx1ZSwgaWYgdGhhdC5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaW5nID09ICd2YWx1ZVN1Ym1pdCcgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggUC5faGlkZGVuICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFAuX2hpZGRlbi52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaW5nID0gJ3ZhbHVlJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgdmFsdWUsIGlmIHRoYXQuXG4gICAgICAgICAgICAgICAgaWYgKCB0aGluZyA9PSAndmFsdWUnICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRUxFTUVOVC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGEgY29tcG9uZW50IGl0ZW0gZXhpc3RzLCByZXR1cm4gdGhhdC5cbiAgICAgICAgICAgICAgICBpZiAoIHRoaW5nIGluIFAuY29tcG9uZW50Lml0ZW0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZvcm1hdCA9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aGluZ1ZhbHVlID0gUC5jb21wb25lbnQuZ2V0KCB0aGluZyApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpbmdWYWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNvbXBvbmVudC5mb3JtYXRzLnRvU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQLmNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBmb3JtYXQsIHRoaW5nVmFsdWUgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQLmNvbXBvbmVudC5nZXQoIHRoaW5nIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAvL2dldFxuXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBCaW5kIGV2ZW50cyBvbiB0aGUgdGhpbmdzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvbjogZnVuY3Rpb24oIHRoaW5nLCBtZXRob2QsIGludGVybmFsICkge1xuXG4gICAgICAgICAgICAgICAgdmFyIHRoaW5nTmFtZSwgdGhpbmdNZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHRoaW5nSXNPYmplY3QgPSAkLmlzUGxhaW5PYmplY3QoIHRoaW5nICksXG4gICAgICAgICAgICAgICAgICAgIHRoaW5nT2JqZWN0ID0gdGhpbmdJc09iamVjdCA/IHRoaW5nIDoge31cblxuICAgICAgICAgICAgICAgIGlmICggdGhpbmcgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRoaW5nIGlzbuKAmXQgYW4gb2JqZWN0LCBtYWtlIGl0IG9uZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCAhdGhpbmdJc09iamVjdCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaW5nT2JqZWN0WyB0aGluZyBdID0gbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBHbyB0aHJvdWdoIHRoZSB0aGluZ3MgdG8gYmluZCB0by5cbiAgICAgICAgICAgICAgICAgICAgZm9yICggdGhpbmdOYW1lIGluIHRoaW5nT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHcmFiIHRoZSBtZXRob2Qgb2YgdGhlIHRoaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpbmdNZXRob2QgPSB0aGluZ09iamVjdFsgdGhpbmdOYW1lIF1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQgd2FzIGFuIGludGVybmFsIGJpbmRpbmcsIHByZWZpeCBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaW50ZXJuYWwgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpbmdOYW1lID0gJ18nICsgdGhpbmdOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGhpbmcgbWV0aG9kcyBjb2xsZWN0aW9uIGV4aXN0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNUQVRFLm1ldGhvZHNbIHRoaW5nTmFtZSBdID0gU1RBVEUubWV0aG9kc1sgdGhpbmdOYW1lIF0gfHwgW11cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBtZXRob2QgdG8gdGhlIHJlbGF0aXZlIG1ldGhvZCBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgU1RBVEUubWV0aG9kc1sgdGhpbmdOYW1lIF0ucHVzaCggdGhpbmdNZXRob2QgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBcbiAgICAgICAgICAgIH0sIC8vb25cblxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVW5iaW5kIGV2ZW50cyBvbiB0aGUgdGhpbmdzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBvZmY6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBpLCB0aGluZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgIGZvciAoIGkgPSAwLCBuYW1lc0NvdW50ID0gbmFtZXMubGVuZ3RoOyBpIDwgbmFtZXNDb3VudDsgaSArPSAxICkge1xuICAgICAgICAgICAgICAgICAgICB0aGluZ05hbWUgPSBuYW1lc1tpXVxuICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaW5nTmFtZSBpbiBTVEFURS5tZXRob2RzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIFNUQVRFLm1ldGhvZHNbdGhpbmdOYW1lXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBQXG4gICAgICAgICAgICB9LFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmlyZSBvZmYgbWV0aG9kIGV2ZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24oIG5hbWUsIGRhdGEgKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90cmlnZ2VyID0gZnVuY3Rpb24oIG5hbWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXRob2RMaXN0ID0gU1RBVEUubWV0aG9kc1sgbmFtZSBdXG4gICAgICAgICAgICAgICAgICAgIGlmICggbWV0aG9kTGlzdCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZExpc3QubWFwKCBmdW5jdGlvbiggbWV0aG9kICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBpY2tlckNvbnN0cnVjdG9yLl8udHJpZ2dlciggbWV0aG9kLCBQLCBbIGRhdGEgXSApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90cmlnZ2VyKCAnXycgKyBuYW1lIClcbiAgICAgICAgICAgICAgICBfdHJpZ2dlciggbmFtZSApXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBcbiAgICAgICAgICAgIH0gLy90cmlnZ2VyXG4gICAgICAgIH0gLy9QaWNrZXJJbnN0YW5jZS5wcm90b3R5cGVcblxuXG4gICAgLyoqXG4gICAgICogV3JhcCB0aGUgcGlja2VyIGhvbGRlciBjb21wb25lbnRzIHRvZ2V0aGVyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVdyYXBwZWRDb21wb25lbnQoKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgcGlja2VyIHdyYXBwZXIgaG9sZGVyXG4gICAgICAgIHJldHVybiBQaWNrZXJDb25zdHJ1Y3Rvci5fLm5vZGUoICdkaXYnLFxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBwaWNrZXIgd3JhcHBlciBub2RlXG4gICAgICAgICAgICBQaWNrZXJDb25zdHJ1Y3Rvci5fLm5vZGUoICdkaXYnLFxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcGlja2VyIGZyYW1lXG4gICAgICAgICAgICAgICAgUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKCAnZGl2JyxcblxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBwaWNrZXIgYm94IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgUGlja2VyQ29uc3RydWN0b3IuXy5ub2RlKCAnZGl2JyxcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBjb21wb25lbnRzIG5vZGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgUC5jb21wb25lbnQubm9kZXMoIFNUQVRFLm9wZW4gKSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHBpY2tlciBib3ggY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIENMQVNTRVMuYm94XG4gICAgICAgICAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUGlja2VyIHdyYXAgY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgQ0xBU1NFUy53cmFwXG4gICAgICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgICAgIC8vIFBpY2tlciBmcmFtZSBjbGFzc1xuICAgICAgICAgICAgICAgIENMQVNTRVMuZnJhbWVcbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIC8vIFBpY2tlciBob2xkZXIgY2xhc3NcbiAgICAgICAgICAgIENMQVNTRVMuaG9sZGVyXG4gICAgICAgICkgLy9lbmRyZXR1cm5cbiAgICB9IC8vY3JlYXRlV3JhcHBlZENvbXBvbmVudFxuXG5cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmUgdGhlIGlucHV0IGVsZW1lbnQgd2l0aCBhbGwgYmluZGluZ3MuXG4gICAgICovXG4gICAgZnVuY3Rpb24gcHJlcGFyZUVsZW1lbnQoKSB7XG5cbiAgICAgICAgJEVMRU1FTlQuXG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBwaWNrZXIgZGF0YSBieSBjb21wb25lbnQgbmFtZS5cbiAgICAgICAgICAgIGRhdGEoTkFNRSwgUCkuXG5cbiAgICAgICAgICAgIC8vIEFkZCB0aGUg4oCcaW5wdXTigJ0gY2xhc3MgbmFtZS5cbiAgICAgICAgICAgIGFkZENsYXNzKENMQVNTRVMuaW5wdXQpLlxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHRhYmluZGV4LlxuICAgICAgICAgICAgYXR0cigndGFiaW5kZXgnLCAtMSkuXG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJl4oCZcyBhIGBkYXRhLXZhbHVlYCwgdXBkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudC5cbiAgICAgICAgICAgIHZhbCggJEVMRU1FTlQuZGF0YSgndmFsdWUnKSA/XG4gICAgICAgICAgICAgICAgUC5nZXQoJ3NlbGVjdCcsIFNFVFRJTkdTLmZvcm1hdCkgOlxuICAgICAgICAgICAgICAgIEVMRU1FTlQudmFsdWVcbiAgICAgICAgICAgIClcblxuXG4gICAgICAgIC8vIE9ubHkgYmluZCBrZXlkb3duIGV2ZW50cyBpZiB0aGUgZWxlbWVudCBpc27igJl0IGVkaXRhYmxlLlxuICAgICAgICBpZiAoICFTRVRUSU5HUy5lZGl0YWJsZSApIHtcblxuICAgICAgICAgICAgJEVMRU1FTlQuXG5cbiAgICAgICAgICAgICAgICAvLyBPbiBmb2N1cy9jbGljaywgZm9jdXMgb250byB0aGUgcm9vdCB0byBvcGVuIGl0IHVwLlxuICAgICAgICAgICAgICAgIG9uKCAnZm9jdXMuJyArIFNUQVRFLmlkICsgJyBjbGljay4nICsgU1RBVEUuaWQsIGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICBQLiRyb290LmVxKDApLmZvY3VzKClcbiAgICAgICAgICAgICAgICB9KS5cblxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBrZXlib2FyZCBldmVudCBiYXNlZCBvbiB0aGUgcGlja2VyIGJlaW5nIG9wZW5lZCBvciBub3QuXG4gICAgICAgICAgICAgICAgb24oICdrZXlkb3duLicgKyBTVEFURS5pZCwgaGFuZGxlS2V5ZG93bkV2ZW50IClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBhcmlhIGF0dHJpYnV0ZXMuXG4gICAgICAgIGFyaWEoRUxFTUVOVCwge1xuICAgICAgICAgICAgaGFzcG9wdXA6IHRydWUsXG4gICAgICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgICAgICByZWFkb25seTogZmFsc2UsXG4gICAgICAgICAgICBvd25zOiBFTEVNRU5ULmlkICsgJ19yb290J1xuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZSB0aGUgcm9vdCBwaWNrZXIgZWxlbWVudCB3aXRoIGFsbCBiaW5kaW5ncy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcmVwYXJlRWxlbWVudFJvb3QoKSB7XG5cbiAgICAgICAgUC4kcm9vdC5cblxuICAgICAgICAgICAgb24oe1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIGlPUzguXG4gICAgICAgICAgICAgICAga2V5ZG93bjogaGFuZGxlS2V5ZG93bkV2ZW50LFxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBzb21ldGhpbmcgd2l0aGluIHRoZSByb290IGlzIGZvY3VzZWQsIHN0b3AgZnJvbSBidWJibGluZ1xuICAgICAgICAgICAgICAgIC8vIHRvIHRoZSBkb2MgYW5kIHJlbW92ZSB0aGUg4oCcZm9jdXNlZOKAnSBzdGF0ZSBmcm9tIHRoZSByb290LlxuICAgICAgICAgICAgICAgIGZvY3VzaW46IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5yZW1vdmVDbGFzcyggQ0xBU1NFUy5mb2N1c2VkIClcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gV2hlbiBzb21ldGhpbmcgd2l0aGluIHRoZSByb290IGhvbGRlciBpcyBjbGlja2VkLCBzdG9wIGl0XG4gICAgICAgICAgICAgICAgLy8gZnJvbSBidWJibGluZyB0byB0aGUgZG9jLlxuICAgICAgICAgICAgICAgICdtb3VzZWRvd24gY2xpY2snOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdGFyZ2V0IGlzbuKAmXQgdGhlIHJvb3QgaG9sZGVyIHNvIGl0IGNhbiBidWJibGUgdXAuXG4gICAgICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0ICE9IFAuJHJvb3QuY2hpbGRyZW4oKVsgMCBdICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAqIEZvciBtb3VzZWRvd24gZXZlbnRzLCBjYW5jZWwgdGhlIGRlZmF1bHQgYWN0aW9uIGluIG9yZGVyIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHByZXZlbnQgY2FzZXMgd2hlcmUgZm9jdXMgaXMgc2hpZnRlZCBvbnRvIGV4dGVybmFsIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHdoZW4gdXNpbmcgdGhpbmdzIGxpa2UgalF1ZXJ5IG1vYmlsZSBvciBNYWduaWZpY1BvcHVwIChyZWY6ICMyNDkgJiAjMTIwKS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgQWxzbywgZm9yIEZpcmVmb3gsIGRvbuKAmXQgcHJldmVudCBhY3Rpb24gb24gdGhlIGBvcHRpb25gIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicgJiYgISQoIHRhcmdldCApLmlzKCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb3B0aW9uJyApKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZS1mb2N1cyBvbnRvIHRoZSByb290IHNvIHRoYXQgdXNlcnMgY2FuIGNsaWNrIGF3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIGVsZW1lbnRzIGZvY3VzZWQgd2l0aGluIHRoZSBwaWNrZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUC4kcm9vdC5lcSgwKS5mb2N1cygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5cblxuICAgICAgICAgICAgLy8gQWRkL3JlbW92ZSB0aGUg4oCcdGFyZ2V04oCdIGNsYXNzIG9uIGZvY3VzIGFuZCBibHVyLlxuICAgICAgICAgICAgb24oe1xuICAgICAgICAgICAgICAgIGZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJEVMRU1FTlQuYWRkQ2xhc3MoIENMQVNTRVMudGFyZ2V0IClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkRUxFTUVOVC5yZW1vdmVDbGFzcyggQ0xBU1NFUy50YXJnZXQgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLlxuXG4gICAgICAgICAgICAvLyBPcGVuIHRoZSBwaWNrZXIgYW5kIGFkanVzdCB0aGUgcm9vdCDigJxmb2N1c2Vk4oCdIHN0YXRlXG4gICAgICAgICAgICBvbiggJ2ZvY3VzLnRvT3BlbicsIGhhbmRsZUZvY3VzVG9PcGVuRXZlbnQgKS5cblxuICAgICAgICAgICAgLy8gSWYgdGhlcmXigJlzIGEgY2xpY2sgb24gYW4gYWN0aW9uYWJsZSBlbGVtZW50LCBjYXJyeSBvdXQgdGhlIGFjdGlvbnMuXG4gICAgICAgICAgICBvbiggJ2NsaWNrJywgJ1tkYXRhLXBpY2tdLCBbZGF0YS1uYXZdLCBbZGF0YS1jbGVhcl0sIFtkYXRhLWNsb3NlXScsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKCB0aGlzICksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldERhdGEgPSAkdGFyZ2V0LmRhdGEoKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGlzYWJsZWQgPSAkdGFyZ2V0Lmhhc0NsYXNzKCBDTEFTU0VTLm5hdkRpc2FibGVkICkgfHwgJHRhcmdldC5oYXNDbGFzcyggQ0xBU1NFUy5kaXNhYmxlZCApLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vICogRm9yIElFLCBub24tZm9jdXNhYmxlIGVsZW1lbnRzIGNhbiBiZSBhY3RpdmUgZWxlbWVudHMgYXMgd2VsbFxuICAgICAgICAgICAgICAgICAgICAvLyAgIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjg0NTYxKS5cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGdldEFjdGl2ZUVsZW1lbnQoKVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudCAmJiAoIGFjdGl2ZUVsZW1lbnQudHlwZSB8fCBhY3RpdmVFbGVtZW50LmhyZWYgKVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXTigJlzIGRpc2FibGVkIG9yIG5vdGhpbmcgaW5zaWRlIGlzIGFjdGl2ZWx5IGZvY3VzZWQsIHJlLWZvY3VzIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgIGlmICggdGFyZ2V0RGlzYWJsZWQgfHwgYWN0aXZlRWxlbWVudCAmJiAhJC5jb250YWlucyggUC4kcm9vdFswXSwgYWN0aXZlRWxlbWVudCApICkge1xuICAgICAgICAgICAgICAgICAgICBQLiRyb290LmVxKDApLmZvY3VzKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBzb21ldGhpbmcgaXMgc3VwZXJmaWNpYWxseSBjaGFuZ2VkLCB1cGRhdGUgdGhlIGBoaWdobGlnaHRgIGJhc2VkIG9uIHRoZSBgbmF2YC5cbiAgICAgICAgICAgICAgICBpZiAoICF0YXJnZXREaXNhYmxlZCAmJiB0YXJnZXREYXRhLm5hdiApIHtcbiAgICAgICAgICAgICAgICAgICAgUC5zZXQoICdoaWdobGlnaHQnLCBQLmNvbXBvbmVudC5pdGVtLmhpZ2hsaWdodCwgeyBuYXY6IHRhcmdldERhdGEubmF2IH0gKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHNvbWV0aGluZyBpcyBwaWNrZWQsIHNldCBgc2VsZWN0YCB0aGVuIGNsb3NlIHdpdGggZm9jdXMuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoICF0YXJnZXREaXNhYmxlZCAmJiAncGljaycgaW4gdGFyZ2V0RGF0YSApIHtcbiAgICAgICAgICAgICAgICAgICAgUC5zZXQoICdzZWxlY3QnLCB0YXJnZXREYXRhLnBpY2sgKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIFNFVFRJTkdTLmNsb3NlT25TZWxlY3QgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGEg4oCcY2xlYXLigJ0gYnV0dG9uIGlzIHByZXNzZWQsIGVtcHR5IHRoZSB2YWx1ZXMgYW5kIGNsb3NlIHdpdGggZm9jdXMuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIHRhcmdldERhdGEuY2xlYXIgKSB7XG4gICAgICAgICAgICAgICAgICAgIFAuY2xlYXIoKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIFNFVFRJTkdTLmNsb3NlT25TZWxlY3QgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCB0YXJnZXREYXRhLmNsb3NlICkge1xuICAgICAgICAgICAgICAgICAgICBQLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pIC8vUC4kcm9vdFxuXG4gICAgICAgIGFyaWEoIFAuJHJvb3RbMF0sICdoaWRkZW4nLCB0cnVlIClcbiAgICB9XG5cblxuICAgICAvKipcbiAgICAgICogUHJlcGFyZSB0aGUgaGlkZGVuIGlucHV0IGVsZW1lbnQgYWxvbmcgd2l0aCBhbGwgYmluZGluZ3MuXG4gICAgICAqL1xuICAgIGZ1bmN0aW9uIHByZXBhcmVFbGVtZW50SGlkZGVuKCkge1xuXG4gICAgICAgIHZhciBuYW1lXG5cbiAgICAgICAgaWYgKCBTRVRUSU5HUy5oaWRkZW5OYW1lID09PSB0cnVlICkge1xuICAgICAgICAgICAgbmFtZSA9IEVMRU1FTlQubmFtZVxuICAgICAgICAgICAgRUxFTUVOVC5uYW1lID0gJydcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5hbWUgPSBbXG4gICAgICAgICAgICAgICAgdHlwZW9mIFNFVFRJTkdTLmhpZGRlblByZWZpeCA9PSAnc3RyaW5nJyA/IFNFVFRJTkdTLmhpZGRlblByZWZpeCA6ICcnLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBTRVRUSU5HUy5oaWRkZW5TdWZmaXggPT0gJ3N0cmluZycgPyBTRVRUSU5HUy5oaWRkZW5TdWZmaXggOiAnX3N1Ym1pdCdcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lWzBdICsgRUxFTUVOVC5uYW1lICsgbmFtZVsxXVxuICAgICAgICB9XG5cbiAgICAgICAgUC5faGlkZGVuID0gJChcbiAgICAgICAgICAgICc8aW5wdXQgJyArXG4gICAgICAgICAgICAndHlwZT1oaWRkZW4gJyArXG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbmFtZSB1c2luZyB0aGUgb3JpZ2luYWwgaW5wdXTigJlzIHdpdGggYSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAgICAgICAgICduYW1lPVwiJyArIG5hbWUgKyAnXCInICtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgdmFsdWUsIHNldCB0aGUgaGlkZGVuIHZhbHVlIGFzIHdlbGwuXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgJEVMRU1FTlQuZGF0YSgndmFsdWUnKSB8fCBFTEVNRU5ULnZhbHVlID9cbiAgICAgICAgICAgICAgICAgICAgJyB2YWx1ZT1cIicgKyBQLmdldCgnc2VsZWN0JywgU0VUVElOR1MuZm9ybWF0U3VibWl0KSArICdcIicgOlxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAnPidcbiAgICAgICAgKVswXVxuXG4gICAgICAgICRFTEVNRU5ULlxuXG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgY2hhbmdlcywgdXBkYXRlIHRoZSBoaWRkZW4gaW5wdXQgd2l0aCB0aGUgY29ycmVjdCBmb3JtYXQuXG4gICAgICAgICAgICBvbignY2hhbmdlLicgKyBTVEFURS5pZCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgUC5faGlkZGVuLnZhbHVlID0gRUxFTUVOVC52YWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgIFAuZ2V0KCdzZWxlY3QnLCBTRVRUSU5HUy5mb3JtYXRTdWJtaXQpIDpcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAvLyBJbnNlcnQgdGhlIGhpZGRlbiBpbnB1dCBhcyBzcGVjaWZpZWQgaW4gdGhlIHNldHRpbmdzLlxuICAgICAgICBpZiAoIFNFVFRJTkdTLmNvbnRhaW5lciApICQoIFNFVFRJTkdTLmNvbnRhaW5lciApLmFwcGVuZCggUC5faGlkZGVuIClcbiAgICAgICAgZWxzZSAkRUxFTUVOVC5iZWZvcmUoIFAuX2hpZGRlbiApXG4gICAgfVxuXG5cbiAgICAvLyBGb3IgaU9TOC5cbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlkb3duRXZlbnQoIGV2ZW50ICkge1xuXG4gICAgICAgIHZhciBrZXljb2RlID0gZXZlbnQua2V5Q29kZSxcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgb25lIG9mIHRoZSBkZWxldGUga2V5cyB3YXMgcHJlc3NlZC5cbiAgICAgICAgICAgIGlzS2V5Y29kZURlbGV0ZSA9IC9eKDh8NDYpJC8udGVzdChrZXljb2RlKVxuXG4gICAgICAgIC8vIEZvciBzb21lIHJlYXNvbiBJRSBjbGVhcnMgdGhlIGlucHV0IHZhbHVlIG9uIOKAnGVzY2FwZeKAnS5cbiAgICAgICAgaWYgKCBrZXljb2RlID09IDI3ICkge1xuICAgICAgICAgICAgUC5jbG9zZSgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIGBzcGFjZWAgb3IgYGRlbGV0ZWAgd2FzIHByZXNzZWQgb3IgdGhlIHBpY2tlciBpcyBjbG9zZWQgd2l0aCBhIGtleSBtb3ZlbWVudC5cbiAgICAgICAgaWYgKCBrZXljb2RlID09IDMyIHx8IGlzS2V5Y29kZURlbGV0ZSB8fCAhU1RBVEUub3BlbiAmJiBQLmNvbXBvbmVudC5rZXlba2V5Y29kZV0gKSB7XG5cbiAgICAgICAgICAgIC8vIFByZXZlbnQgaXQgZnJvbSBtb3ZpbmcgdGhlIHBhZ2UgYW5kIGJ1YmJsaW5nIHRvIGRvYy5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgICAgICAgIC8vIElmIGBkZWxldGVgIHdhcyBwcmVzc2VkLCBjbGVhciB0aGUgdmFsdWVzIGFuZCBjbG9zZSB0aGUgcGlja2VyLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIG9wZW4gdGhlIHBpY2tlci5cbiAgICAgICAgICAgIGlmICggaXNLZXljb2RlRGVsZXRlICkgeyBQLmNsZWFyKCkuY2xvc2UoKSB9XG4gICAgICAgICAgICBlbHNlIHsgUC5vcGVuKCkgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBTZXBhcmF0ZWQgZm9yIElFXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9jdXNUb09wZW5FdmVudCggZXZlbnQgKSB7XG5cbiAgICAgICAgLy8gU3RvcCB0aGUgZXZlbnQgZnJvbSBwcm9wYWdhdGluZyB0byB0aGUgZG9jLlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIC8vIElmIGl04oCZcyBhIGZvY3VzIGV2ZW50LCBhZGQgdGhlIOKAnGZvY3VzZWTigJ0gY2xhc3MgdG8gdGhlIHJvb3QuXG4gICAgICAgIGlmICggZXZlbnQudHlwZSA9PSAnZm9jdXMnICkge1xuICAgICAgICAgICAgUC4kcm9vdC5hZGRDbGFzcyggQ0xBU1NFUy5mb2N1c2VkIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuZCB0aGVuIGZpbmFsbHkgb3BlbiB0aGUgcGlja2VyLlxuICAgICAgICBQLm9wZW4oKVxuICAgIH1cblxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IHBpY2tlciBpbnN0YW5jZS5cbiAgICByZXR1cm4gbmV3IFBpY2tlckluc3RhbmNlKClcbn0gLy9QaWNrZXJDb25zdHJ1Y3RvclxuXG5cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBjbGFzc2VzIGFuZCBwcmVmaXggdG8gdXNlIGZvciB0aGUgSFRNTCBjbGFzc2VzLlxuICovXG5QaWNrZXJDb25zdHJ1Y3Rvci5rbGFzc2VzID0gZnVuY3Rpb24oIHByZWZpeCApIHtcbiAgICBwcmVmaXggPSBwcmVmaXggfHwgJ3BpY2tlcidcbiAgICByZXR1cm4ge1xuXG4gICAgICAgIHBpY2tlcjogcHJlZml4LFxuICAgICAgICBvcGVuZWQ6IHByZWZpeCArICctLW9wZW5lZCcsXG4gICAgICAgIGZvY3VzZWQ6IHByZWZpeCArICctLWZvY3VzZWQnLFxuXG4gICAgICAgIGlucHV0OiBwcmVmaXggKyAnX19pbnB1dCcsXG4gICAgICAgIGFjdGl2ZTogcHJlZml4ICsgJ19faW5wdXQtLWFjdGl2ZScsXG4gICAgICAgIHRhcmdldDogcHJlZml4ICsgJ19faW5wdXQtLXRhcmdldCcsXG5cbiAgICAgICAgaG9sZGVyOiBwcmVmaXggKyAnX19ob2xkZXInLFxuXG4gICAgICAgIGZyYW1lOiBwcmVmaXggKyAnX19mcmFtZScsXG4gICAgICAgIHdyYXA6IHByZWZpeCArICdfX3dyYXAnLFxuXG4gICAgICAgIGJveDogcHJlZml4ICsgJ19fYm94J1xuICAgIH1cbn0gLy9QaWNrZXJDb25zdHJ1Y3Rvci5rbGFzc2VzXG5cblxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBkZWZhdWx0IHRoZW1lIGlzIGJlaW5nIHVzZWQuXG4gKi9cbmZ1bmN0aW9uIGlzVXNpbmdEZWZhdWx0VGhlbWUoIGVsZW1lbnQgKSB7XG5cbiAgICB2YXIgdGhlbWUsXG4gICAgICAgIHByb3AgPSAncG9zaXRpb24nXG5cbiAgICAvLyBGb3IgSUUuXG4gICAgaWYgKCBlbGVtZW50LmN1cnJlbnRTdHlsZSApIHtcbiAgICAgICAgdGhlbWUgPSBlbGVtZW50LmN1cnJlbnRTdHlsZVtwcm9wXVxuICAgIH1cblxuICAgIC8vIEZvciBub3JtYWwgYnJvd3NlcnMuXG4gICAgZWxzZSBpZiAoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICkge1xuICAgICAgICB0aGVtZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW1lbnQgKVtwcm9wXVxuICAgIH1cblxuICAgIHJldHVybiB0aGVtZSA9PSAnZml4ZWQnXG59XG5cblxuXG4vKipcbiAqIEdldCB0aGUgd2lkdGggb2YgdGhlIGJyb3dzZXLigJlzIHNjcm9sbGJhci5cbiAqIFRha2VuIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9Wb2RrYUJlYXJzL1JlbW9kYWwvYmxvYi9tYXN0ZXIvc3JjL2pxdWVyeS5yZW1vZGFsLmpzXG4gKi9cbmZ1bmN0aW9uIGdldFNjcm9sbGJhcldpZHRoKCkge1xuXG4gICAgaWYgKCAkaHRtbC5oZWlnaHQoKSA8PSAkd2luZG93LmhlaWdodCgpICkge1xuICAgICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIHZhciAkb3V0ZXIgPSAkKCAnPGRpdiBzdHlsZT1cInZpc2liaWxpdHk6aGlkZGVuO3dpZHRoOjEwMHB4XCIgLz4nICkuXG4gICAgICAgIGFwcGVuZFRvKCAnYm9keScgKVxuXG4gICAgLy8gR2V0IHRoZSB3aWR0aCB3aXRob3V0IHNjcm9sbGJhcnMuXG4gICAgdmFyIHdpZHRoV2l0aG91dFNjcm9sbCA9ICRvdXRlclswXS5vZmZzZXRXaWR0aFxuXG4gICAgLy8gRm9yY2UgYWRkaW5nIHNjcm9sbGJhcnMuXG4gICAgJG91dGVyLmNzcyggJ292ZXJmbG93JywgJ3Njcm9sbCcgKVxuXG4gICAgLy8gQWRkIHRoZSBpbm5lciBkaXYuXG4gICAgdmFyICRpbm5lciA9ICQoICc8ZGl2IHN0eWxlPVwid2lkdGg6MTAwJVwiIC8+JyApLmFwcGVuZFRvKCAkb3V0ZXIgKVxuXG4gICAgLy8gR2V0IHRoZSB3aWR0aCB3aXRoIHNjcm9sbGJhcnMuXG4gICAgdmFyIHdpZHRoV2l0aFNjcm9sbCA9ICRpbm5lclswXS5vZmZzZXRXaWR0aFxuXG4gICAgLy8gUmVtb3ZlIHRoZSBkaXZzLlxuICAgICRvdXRlci5yZW1vdmUoKVxuXG4gICAgLy8gUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHdpZHRocy5cbiAgICByZXR1cm4gd2lkdGhXaXRob3V0U2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsXG59XG5cblxuXG4vKipcbiAqIFBpY2tlckNvbnN0cnVjdG9yIGhlbHBlciBtZXRob2RzLlxuICovXG5QaWNrZXJDb25zdHJ1Y3Rvci5fID0ge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZ3JvdXAgb2Ygbm9kZXMuIEV4cGVjdHM6XG4gICAgICogYFxuICAgICAgICB7XG4gICAgICAgICAgICBtaW46ICAgIHtJbnRlZ2VyfSxcbiAgICAgICAgICAgIG1heDogICAge0ludGVnZXJ9LFxuICAgICAgICAgICAgaTogICAgICB7SW50ZWdlcn0sXG4gICAgICAgICAgICBub2RlOiAgIHtTdHJpbmd9LFxuICAgICAgICAgICAgaXRlbTogICB7RnVuY3Rpb259XG4gICAgICAgIH1cbiAgICAgKiBgXG4gICAgICovXG4gICAgZ3JvdXA6IGZ1bmN0aW9uKCBncm91cE9iamVjdCApIHtcblxuICAgICAgICB2YXJcbiAgICAgICAgICAgIC8vIFNjb3BlIGZvciB0aGUgbG9vcGVkIG9iamVjdFxuICAgICAgICAgICAgbG9vcE9iamVjdFNjb3BlLFxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIG5vZGVzIGxpc3RcbiAgICAgICAgICAgIG5vZGVzTGlzdCA9ICcnLFxuXG4gICAgICAgICAgICAvLyBUaGUgY291bnRlciBzdGFydHMgZnJvbSB0aGUgYG1pbmBcbiAgICAgICAgICAgIGNvdW50ZXIgPSBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGdyb3VwT2JqZWN0Lm1pbiwgZ3JvdXBPYmplY3QgKVxuXG5cbiAgICAgICAgLy8gTG9vcCBmcm9tIHRoZSBgbWluYCB0byBgbWF4YCwgaW5jcmVtZW50aW5nIGJ5IGBpYFxuICAgICAgICBmb3IgKCA7IGNvdW50ZXIgPD0gUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKCBncm91cE9iamVjdC5tYXgsIGdyb3VwT2JqZWN0LCBbIGNvdW50ZXIgXSApOyBjb3VudGVyICs9IGdyb3VwT2JqZWN0LmkgKSB7XG5cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIGBpdGVtYCBmdW5jdGlvbiB3aXRoaW4gc2NvcGUgb2YgdGhlIG9iamVjdFxuICAgICAgICAgICAgbG9vcE9iamVjdFNjb3BlID0gUGlja2VyQ29uc3RydWN0b3IuXy50cmlnZ2VyKCBncm91cE9iamVjdC5pdGVtLCBncm91cE9iamVjdCwgWyBjb3VudGVyIF0gKVxuXG4gICAgICAgICAgICAvLyBTcGxpY2UgdGhlIHN1Ymdyb3VwIGFuZCBjcmVhdGUgbm9kZXMgb3V0IG9mIHRoZSBzdWIgbm9kZXNcbiAgICAgICAgICAgIG5vZGVzTGlzdCArPSBQaWNrZXJDb25zdHJ1Y3Rvci5fLm5vZGUoXG4gICAgICAgICAgICAgICAgZ3JvdXBPYmplY3Qubm9kZSxcbiAgICAgICAgICAgICAgICBsb29wT2JqZWN0U2NvcGVbIDAgXSwgICAvLyB0aGUgbm9kZVxuICAgICAgICAgICAgICAgIGxvb3BPYmplY3RTY29wZVsgMSBdLCAgIC8vIHRoZSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgbG9vcE9iamVjdFNjb3BlWyAyIF0gICAgLy8gdGhlIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiB0aGUgbGlzdCBvZiBub2Rlc1xuICAgICAgICByZXR1cm4gbm9kZXNMaXN0XG4gICAgfSwgLy9ncm91cFxuXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBkb20gbm9kZSBzdHJpbmdcbiAgICAgKi9cbiAgICBub2RlOiBmdW5jdGlvbiggd3JhcHBlciwgaXRlbSwga2xhc3MsIGF0dHJpYnV0ZSApIHtcblxuICAgICAgICAvLyBJZiB0aGUgaXRlbSBpcyBmYWxzZS15LCBqdXN0IHJldHVybiBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgaWYgKCAhaXRlbSApIHJldHVybiAnJ1xuXG4gICAgICAgIC8vIElmIHRoZSBpdGVtIGlzIGFuIGFycmF5LCBkbyBhIGpvaW5cbiAgICAgICAgaXRlbSA9ICQuaXNBcnJheSggaXRlbSApID8gaXRlbS5qb2luKCAnJyApIDogaXRlbVxuXG4gICAgICAgIC8vIENoZWNrIGZvciB0aGUgY2xhc3NcbiAgICAgICAga2xhc3MgPSBrbGFzcyA/ICcgY2xhc3M9XCInICsga2xhc3MgKyAnXCInIDogJydcblxuICAgICAgICAvLyBDaGVjayBmb3IgYW55IGF0dHJpYnV0ZXNcbiAgICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlID8gJyAnICsgYXR0cmlidXRlIDogJydcblxuICAgICAgICAvLyBSZXR1cm4gdGhlIHdyYXBwZWQgaXRlbVxuICAgICAgICByZXR1cm4gJzwnICsgd3JhcHBlciArIGtsYXNzICsgYXR0cmlidXRlICsgJz4nICsgaXRlbSArICc8LycgKyB3cmFwcGVyICsgJz4nXG4gICAgfSwgLy9ub2RlXG5cblxuICAgIC8qKlxuICAgICAqIExlYWQgbnVtYmVycyBiZWxvdyAxMCB3aXRoIGEgemVyby5cbiAgICAgKi9cbiAgICBsZWFkOiBmdW5jdGlvbiggbnVtYmVyICkge1xuICAgICAgICByZXR1cm4gKCBudW1iZXIgPCAxMCA/ICcwJzogJycgKSArIG51bWJlclxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgYSBmdW5jdGlvbiBvdGhlcndpc2UgcmV0dXJuIHRoZSB2YWx1ZS5cbiAgICAgKi9cbiAgICB0cmlnZ2VyOiBmdW5jdGlvbiggY2FsbGJhY2ssIHNjb3BlLCBhcmdzICkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgPyBjYWxsYmFjay5hcHBseSggc2NvcGUsIGFyZ3MgfHwgW10gKSA6IGNhbGxiYWNrXG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHNlY29uZCBjaGFyYWN0ZXIgaXMgYSBkaWdpdCwgbGVuZ3RoIGlzIDIgb3RoZXJ3aXNlIDEuXG4gICAgICovXG4gICAgZGlnaXRzOiBmdW5jdGlvbiggc3RyaW5nICkge1xuICAgICAgICByZXR1cm4gKCAvXFxkLyApLnRlc3QoIHN0cmluZ1sgMSBdICkgPyAyIDogMVxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFRlbGwgaWYgc29tZXRoaW5nIGlzIGEgZGF0ZSBvYmplY3QuXG4gICAgICovXG4gICAgaXNEYXRlOiBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICAgIHJldHVybiB7fS50b1N0cmluZy5jYWxsKCB2YWx1ZSApLmluZGV4T2YoICdEYXRlJyApID4gLTEgJiYgdGhpcy5pc0ludGVnZXIoIHZhbHVlLmdldERhdGUoKSApXG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogVGVsbCBpZiBzb21ldGhpbmcgaXMgYW4gaW50ZWdlci5cbiAgICAgKi9cbiAgICBpc0ludGVnZXI6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwoIHZhbHVlICkuaW5kZXhPZiggJ051bWJlcicgKSA+IC0xICYmIHZhbHVlICUgMSA9PT0gMFxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBBUklBIGF0dHJpYnV0ZSBzdHJpbmdzLlxuICAgICAqL1xuICAgIGFyaWFBdHRyOiBhcmlhQXR0clxufSAvL1BpY2tlckNvbnN0cnVjdG9yLl9cblxuXG5cbi8qKlxuICogRXh0ZW5kIHRoZSBwaWNrZXIgd2l0aCBhIGNvbXBvbmVudCBhbmQgZGVmYXVsdHMuXG4gKi9cblBpY2tlckNvbnN0cnVjdG9yLmV4dGVuZCA9IGZ1bmN0aW9uKCBuYW1lLCBDb21wb25lbnQgKSB7XG5cbiAgICAvLyBFeHRlbmQgalF1ZXJ5LlxuICAgICQuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBvcHRpb25zLCBhY3Rpb24gKSB7XG5cbiAgICAgICAgLy8gR3JhYiB0aGUgY29tcG9uZW50IGRhdGEuXG4gICAgICAgIHZhciBjb21wb25lbnREYXRhID0gdGhpcy5kYXRhKCBuYW1lIClcblxuICAgICAgICAvLyBJZiB0aGUgcGlja2VyIGlzIHJlcXVlc3RlZCwgcmV0dXJuIHRoZSBkYXRhIG9iamVjdC5cbiAgICAgICAgaWYgKCBvcHRpb25zID09ICdwaWNrZXInICkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudERhdGFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBjb21wb25lbnQgZGF0YSBleGlzdHMgYW5kIGBvcHRpb25zYCBpcyBhIHN0cmluZywgY2Fycnkgb3V0IHRoZSBhY3Rpb24uXG4gICAgICAgIGlmICggY29tcG9uZW50RGF0YSAmJiB0eXBlb2Ygb3B0aW9ucyA9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgIHJldHVybiBQaWNrZXJDb25zdHJ1Y3Rvci5fLnRyaWdnZXIoIGNvbXBvbmVudERhdGFbIG9wdGlvbnMgXSwgY29tcG9uZW50RGF0YSwgWyBhY3Rpb24gXSApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UgZ28gdGhyb3VnaCBlYWNoIG1hdGNoZWQgZWxlbWVudCBhbmQgaWYgdGhlIGNvbXBvbmVudFxuICAgICAgICAvLyBkb2VzbuKAmXQgZXhpc3QsIGNyZWF0ZSBhIG5ldyBwaWNrZXIgdXNpbmcgYHRoaXNgIGVsZW1lbnRcbiAgICAgICAgLy8gYW5kIG1lcmdpbmcgdGhlIGRlZmF1bHRzIGFuZCBvcHRpb25zIHdpdGggYSBkZWVwIGNvcHkuXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCggdGhpcyApXG4gICAgICAgICAgICBpZiAoICEkdGhpcy5kYXRhKCBuYW1lICkgKSB7XG4gICAgICAgICAgICAgICAgbmV3IFBpY2tlckNvbnN0cnVjdG9yKCB0aGlzLCBuYW1lLCBDb21wb25lbnQsIG9wdGlvbnMgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdHMuXG4gICAgJC5mblsgbmFtZSBdLmRlZmF1bHRzID0gQ29tcG9uZW50LmRlZmF1bHRzXG59IC8vUGlja2VyQ29uc3RydWN0b3IuZXh0ZW5kXG5cblxuXG5mdW5jdGlvbiBhcmlhKGVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBpZiAoICQuaXNQbGFpbk9iamVjdChhdHRyaWJ1dGUpICkge1xuICAgICAgICBmb3IgKCB2YXIga2V5IGluIGF0dHJpYnV0ZSApIHtcbiAgICAgICAgICAgIGFyaWFTZXQoZWxlbWVudCwga2V5LCBhdHRyaWJ1dGVba2V5XSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXJpYVNldChlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKVxuICAgIH1cbn1cbmZ1bmN0aW9uIGFyaWFTZXQoZWxlbWVudCwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAoYXR0cmlidXRlID09ICdyb2xlJyA/ICcnIDogJ2FyaWEtJykgKyBhdHRyaWJ1dGUsXG4gICAgICAgIHZhbHVlXG4gICAgKVxufVxuZnVuY3Rpb24gYXJpYUF0dHIoYXR0cmlidXRlLCBkYXRhKSB7XG4gICAgaWYgKCAhJC5pc1BsYWluT2JqZWN0KGF0dHJpYnV0ZSkgKSB7XG4gICAgICAgIGF0dHJpYnV0ZSA9IHsgYXR0cmlidXRlOiBkYXRhIH1cbiAgICB9XG4gICAgZGF0YSA9ICcnXG4gICAgZm9yICggdmFyIGtleSBpbiBhdHRyaWJ1dGUgKSB7XG4gICAgICAgIHZhciBhdHRyID0gKGtleSA9PSAncm9sZScgPyAnJyA6ICdhcmlhLScpICsga2V5LFxuICAgICAgICAgICAgYXR0clZhbCA9IGF0dHJpYnV0ZVtrZXldXG4gICAgICAgIGRhdGEgKz0gYXR0clZhbCA9PSBudWxsID8gJycgOiBhdHRyICsgJz1cIicgKyBhdHRyaWJ1dGVba2V5XSArICdcIidcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLy8gSUU4IGJ1ZyB0aHJvd3MgYW4gZXJyb3IgZm9yIGFjdGl2ZUVsZW1lbnRzIHdpdGhpbiBpZnJhbWVzLlxuZnVuY3Rpb24gZ2V0QWN0aXZlRWxlbWVudCgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgIH0gY2F0Y2ggKCBlcnIgKSB7IH1cbn1cblxuXG5cbi8vIEV4cG9zZSB0aGUgcGlja2VyIGNvbnN0cnVjdG9yLlxucmV0dXJuIFBpY2tlckNvbnN0cnVjdG9yXG5cblxufSkpO1xuIiwiLyohXG4gKiBEYXRlIHBpY2tlciBmb3IgcGlja2FkYXRlLmpzIHYzLjUuMFxuICogaHR0cDovL2Ftc3VsLmdpdGh1Yi5pby9waWNrYWRhdGUuanMvZGF0ZS5odG1cbiAqL1xuXG4oZnVuY3Rpb24gKCBmYWN0b3J5ICkge1xuICBmYWN0b3J5KCBNYXRlcmlhbGl6ZS5QaWNrZXIsIGpRdWVyeSApXG5cbn0oZnVuY3Rpb24oIFBpY2tlciwgJCApIHtcblxuXG4vKipcbiAqIEdsb2JhbHMgYW5kIGNvbnN0YW50c1xuICovXG52YXIgREFZU19JTl9XRUVLID0gNyxcbiAgICBXRUVLU19JTl9DQUxFTkRBUiA9IDYsXG4gICAgXyA9IFBpY2tlci5fO1xuXG5cblxuLyoqXG4gKiBUaGUgZGF0ZSBwaWNrZXIgY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRGF0ZVBpY2tlciggcGlja2VyLCBzZXR0aW5ncyApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIGVsZW1lbnQgPSBwaWNrZXIuJG5vZGVbIDAgXSxcbiAgICAgICAgZWxlbWVudFZhbHVlID0gZWxlbWVudC52YWx1ZSxcbiAgICAgICAgZWxlbWVudERhdGFWYWx1ZSA9IHBpY2tlci4kbm9kZS5kYXRhKCAndmFsdWUnICksXG4gICAgICAgIHZhbHVlU3RyaW5nID0gZWxlbWVudERhdGFWYWx1ZSB8fCBlbGVtZW50VmFsdWUsXG4gICAgICAgIGZvcm1hdFN0cmluZyA9IGVsZW1lbnREYXRhVmFsdWUgPyBzZXR0aW5ncy5mb3JtYXRTdWJtaXQgOiBzZXR0aW5ncy5mb3JtYXQsXG4gICAgICAgIGlzUlRMID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmN1cnJlbnRTdHlsZSA/XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgSUUuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jdXJyZW50U3R5bGUuZGlyZWN0aW9uID09ICdydGwnIDpcblxuICAgICAgICAgICAgICAgIC8vIEZvciBub3JtYWwgYnJvd3NlcnMuXG4gICAgICAgICAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZSggcGlja2VyLiRyb290WzBdICkuZGlyZWN0aW9uID09ICdydGwnXG4gICAgICAgIH1cblxuICAgIGNhbGVuZGFyLnNldHRpbmdzID0gc2V0dGluZ3NcbiAgICBjYWxlbmRhci4kbm9kZSA9IHBpY2tlci4kbm9kZVxuXG4gICAgLy8gVGhlIHF1ZXVlIG9mIG1ldGhvZHMgdGhhdCB3aWxsIGJlIHVzZWQgdG8gYnVpbGQgaXRlbSBvYmplY3RzLlxuICAgIGNhbGVuZGFyLnF1ZXVlID0ge1xuICAgICAgICBtaW46ICdtZWFzdXJlIGNyZWF0ZScsXG4gICAgICAgIG1heDogJ21lYXN1cmUgY3JlYXRlJyxcbiAgICAgICAgbm93OiAnbm93IGNyZWF0ZScsXG4gICAgICAgIHNlbGVjdDogJ3BhcnNlIGNyZWF0ZSB2YWxpZGF0ZScsXG4gICAgICAgIGhpZ2hsaWdodDogJ3BhcnNlIG5hdmlnYXRlIGNyZWF0ZSB2YWxpZGF0ZScsXG4gICAgICAgIHZpZXc6ICdwYXJzZSBjcmVhdGUgdmFsaWRhdGUgdmlld3NldCcsXG4gICAgICAgIGRpc2FibGU6ICdkZWFjdGl2YXRlJyxcbiAgICAgICAgZW5hYmxlOiAnYWN0aXZhdGUnXG4gICAgfVxuXG4gICAgLy8gVGhlIGNvbXBvbmVudCdzIGl0ZW0gb2JqZWN0LlxuICAgIGNhbGVuZGFyLml0ZW0gPSB7fVxuXG4gICAgY2FsZW5kYXIuaXRlbS5jbGVhciA9IG51bGxcbiAgICBjYWxlbmRhci5pdGVtLmRpc2FibGUgPSAoIHNldHRpbmdzLmRpc2FibGUgfHwgW10gKS5zbGljZSggMCApXG4gICAgY2FsZW5kYXIuaXRlbS5lbmFibGUgPSAtKGZ1bmN0aW9uKCBjb2xsZWN0aW9uRGlzYWJsZWQgKSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uRGlzYWJsZWRbIDAgXSA9PT0gdHJ1ZSA/IGNvbGxlY3Rpb25EaXNhYmxlZC5zaGlmdCgpIDogLTFcbiAgICB9KSggY2FsZW5kYXIuaXRlbS5kaXNhYmxlIClcblxuICAgIGNhbGVuZGFyLlxuICAgICAgICBzZXQoICdtaW4nLCBzZXR0aW5ncy5taW4gKS5cbiAgICAgICAgc2V0KCAnbWF4Jywgc2V0dGluZ3MubWF4ICkuXG4gICAgICAgIHNldCggJ25vdycgKVxuXG4gICAgLy8gV2hlbiB0aGVyZeKAmXMgYSB2YWx1ZSwgc2V0IHRoZSBgc2VsZWN0YCwgd2hpY2ggaW4gdHVyblxuICAgIC8vIGFsc28gc2V0cyB0aGUgYGhpZ2hsaWdodGAgYW5kIGB2aWV3YC5cbiAgICBpZiAoIHZhbHVlU3RyaW5nICkge1xuICAgICAgICBjYWxlbmRhci5zZXQoICdzZWxlY3QnLCB2YWx1ZVN0cmluZywgeyBmb3JtYXQ6IGZvcm1hdFN0cmluZyB9KVxuICAgIH1cblxuICAgIC8vIElmIHRoZXJl4oCZcyBubyB2YWx1ZSwgZGVmYXVsdCB0byBoaWdobGlnaHRpbmcg4oCcdG9kYXnigJ0uXG4gICAgZWxzZSB7XG4gICAgICAgIGNhbGVuZGFyLlxuICAgICAgICAgICAgc2V0KCAnc2VsZWN0JywgbnVsbCApLlxuICAgICAgICAgICAgc2V0KCAnaGlnaGxpZ2h0JywgY2FsZW5kYXIuaXRlbS5ub3cgKVxuICAgIH1cblxuXG4gICAgLy8gVGhlIGtleWNvZGUgdG8gbW92ZW1lbnQgbWFwcGluZy5cbiAgICBjYWxlbmRhci5rZXkgPSB7XG4gICAgICAgIDQwOiA3LCAvLyBEb3duXG4gICAgICAgIDM4OiAtNywgLy8gVXBcbiAgICAgICAgMzk6IGZ1bmN0aW9uKCkgeyByZXR1cm4gaXNSVEwoKSA/IC0xIDogMSB9LCAvLyBSaWdodFxuICAgICAgICAzNzogZnVuY3Rpb24oKSB7IHJldHVybiBpc1JUTCgpID8gMSA6IC0xIH0sIC8vIExlZnRcbiAgICAgICAgZ286IGZ1bmN0aW9uKCB0aW1lQ2hhbmdlICkge1xuICAgICAgICAgICAgdmFyIGhpZ2hsaWdodGVkT2JqZWN0ID0gY2FsZW5kYXIuaXRlbS5oaWdobGlnaHQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKCBoaWdobGlnaHRlZE9iamVjdC55ZWFyLCBoaWdobGlnaHRlZE9iamVjdC5tb250aCwgaGlnaGxpZ2h0ZWRPYmplY3QuZGF0ZSArIHRpbWVDaGFuZ2UgKVxuICAgICAgICAgICAgY2FsZW5kYXIuc2V0KFxuICAgICAgICAgICAgICAgICdoaWdobGlnaHQnLFxuICAgICAgICAgICAgICAgIHRhcmdldERhdGUsXG4gICAgICAgICAgICAgICAgeyBpbnRlcnZhbDogdGltZUNoYW5nZSB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIEJpbmQgc29tZSBwaWNrZXIgZXZlbnRzLlxuICAgIHBpY2tlci5cbiAgICAgICAgb24oICdyZW5kZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnLicgKyBzZXR0aW5ncy5rbGFzcy5zZWxlY3RNb250aCApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAgIGlmICggdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlci5zZXQoICdoaWdobGlnaHQnLCBbIHBpY2tlci5nZXQoICd2aWV3JyApLnllYXIsIHZhbHVlLCBwaWNrZXIuZ2V0KCAnaGlnaGxpZ2h0JyApLmRhdGUgXSApXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnLicgKyBzZXR0aW5ncy5rbGFzcy5zZWxlY3RNb250aCApLnRyaWdnZXIoICdmb2N1cycgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJy4nICsgc2V0dGluZ3Mua2xhc3Muc2VsZWN0WWVhciApLm9uKCAnY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAgIGlmICggdmFsdWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHBpY2tlci5zZXQoICdoaWdobGlnaHQnLCBbIHZhbHVlLCBwaWNrZXIuZ2V0KCAndmlldycgKS5tb250aCwgcGlja2VyLmdldCggJ2hpZ2hsaWdodCcgKS5kYXRlIF0gKVxuICAgICAgICAgICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJy4nICsgc2V0dGluZ3Mua2xhc3Muc2VsZWN0WWVhciApLnRyaWdnZXIoICdmb2N1cycgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEgKS5cbiAgICAgICAgb24oICdvcGVuJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaW5jbHVkZVRvZGF5ID0gJydcbiAgICAgICAgICAgIGlmICggY2FsZW5kYXIuZGlzYWJsZWQoIGNhbGVuZGFyLmdldCgnbm93JykgKSApIHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlVG9kYXkgPSAnOm5vdCguJyArIHNldHRpbmdzLmtsYXNzLmJ1dHRvblRvZGF5ICsgJyknXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwaWNrZXIuJHJvb3QuZmluZCggJ2J1dHRvbicgKyBpbmNsdWRlVG9kYXkgKyAnLCBzZWxlY3QnICkuYXR0ciggJ2Rpc2FibGVkJywgZmFsc2UgKVxuICAgICAgICB9LCAxICkuXG4gICAgICAgIG9uKCAnY2xvc2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBpY2tlci4kcm9vdC5maW5kKCAnYnV0dG9uLCBzZWxlY3QnICkuYXR0ciggJ2Rpc2FibGVkJywgdHJ1ZSApXG4gICAgICAgIH0sIDEgKVxuXG59IC8vRGF0ZVBpY2tlclxuXG5cbi8qKlxuICogU2V0IGEgZGF0ZXBpY2tlciBpdGVtIG9iamVjdC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLCBvcHRpb25zICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgY2FsZW5kYXJJdGVtID0gY2FsZW5kYXIuaXRlbVxuXG4gICAgLy8gSWYgdGhlIHZhbHVlIGlzIGBudWxsYCBqdXN0IHNldCBpdCBpbW1lZGlhdGVseS5cbiAgICBpZiAoIHZhbHVlID09PSBudWxsICkge1xuICAgICAgICBpZiAoIHR5cGUgPT0gJ2NsZWFyJyApIHR5cGUgPSAnc2VsZWN0J1xuICAgICAgICBjYWxlbmRhckl0ZW1bIHR5cGUgXSA9IHZhbHVlXG4gICAgICAgIHJldHVybiBjYWxlbmRhclxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBnbyB0aHJvdWdoIHRoZSBxdWV1ZSBvZiBtZXRob2RzLCBhbmQgaW52b2tlIHRoZSBmdW5jdGlvbnMuXG4gICAgLy8gVXBkYXRlIHRoaXMgYXMgdGhlIHRpbWUgdW5pdCwgYW5kIHNldCB0aGUgZmluYWwgdmFsdWUgYXMgdGhpcyBpdGVtLlxuICAgIC8vICogSW4gdGhlIGNhc2Ugb2YgYGVuYWJsZWAsIGtlZXAgdGhlIHF1ZXVlIGJ1dCBzZXQgYGRpc2FibGVgIGluc3RlYWQuXG4gICAgLy8gICBBbmQgaW4gdGhlIGNhc2Ugb2YgYGZsaXBgLCBrZWVwIHRoZSBxdWV1ZSBidXQgc2V0IGBlbmFibGVgIGluc3RlYWQuXG4gICAgY2FsZW5kYXJJdGVtWyAoIHR5cGUgPT0gJ2VuYWJsZScgPyAnZGlzYWJsZScgOiB0eXBlID09ICdmbGlwJyA/ICdlbmFibGUnIDogdHlwZSApIF0gPSBjYWxlbmRhci5xdWV1ZVsgdHlwZSBdLnNwbGl0KCAnICcgKS5tYXAoIGZ1bmN0aW9uKCBtZXRob2QgKSB7XG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXJbIG1ldGhvZCBdKCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApXG4gICAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0pLnBvcCgpXG5cbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGNhc2NhZGUgdGhyb3VnaCBtb3JlIHVwZGF0ZXMuXG4gICAgaWYgKCB0eXBlID09ICdzZWxlY3QnICkge1xuICAgICAgICBjYWxlbmRhci5zZXQoICdoaWdobGlnaHQnLCBjYWxlbmRhckl0ZW0uc2VsZWN0LCBvcHRpb25zIClcbiAgICB9XG4gICAgZWxzZSBpZiAoIHR5cGUgPT0gJ2hpZ2hsaWdodCcgKSB7XG4gICAgICAgIGNhbGVuZGFyLnNldCggJ3ZpZXcnLCBjYWxlbmRhckl0ZW0uaGlnaGxpZ2h0LCBvcHRpb25zIClcbiAgICB9XG4gICAgZWxzZSBpZiAoIHR5cGUubWF0Y2goIC9eKGZsaXB8bWlufG1heHxkaXNhYmxlfGVuYWJsZSkkLyApICkge1xuICAgICAgICBpZiAoIGNhbGVuZGFySXRlbS5zZWxlY3QgJiYgY2FsZW5kYXIuZGlzYWJsZWQoIGNhbGVuZGFySXRlbS5zZWxlY3QgKSApIHtcbiAgICAgICAgICAgIGNhbGVuZGFyLnNldCggJ3NlbGVjdCcsIGNhbGVuZGFySXRlbS5zZWxlY3QsIG9wdGlvbnMgKVxuICAgICAgICB9XG4gICAgICAgIGlmICggY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCAmJiBjYWxlbmRhci5kaXNhYmxlZCggY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCApICkge1xuICAgICAgICAgICAgY2FsZW5kYXIuc2V0KCAnaGlnaGxpZ2h0JywgY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCwgb3B0aW9ucyApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FsZW5kYXJcbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5zZXRcblxuXG4vKipcbiAqIEdldCBhIGRhdGVwaWNrZXIgaXRlbSBvYmplY3QuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKCB0eXBlICkge1xuICAgIHJldHVybiB0aGlzLml0ZW1bIHR5cGUgXVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmdldFxuXG5cbi8qKlxuICogQ3JlYXRlIGEgcGlja2VyIGRhdGUgb2JqZWN0LlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiggdHlwZSwgdmFsdWUsIG9wdGlvbnMgKSB7XG5cbiAgICB2YXIgaXNJbmZpbml0ZVZhbHVlLFxuICAgICAgICBjYWxlbmRhciA9IHRoaXNcblxuICAgIC8vIElmIHRoZXJl4oCZcyBubyB2YWx1ZSwgdXNlIHRoZSB0eXBlIGFzIHRoZSB2YWx1ZS5cbiAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyB0eXBlIDogdmFsdWVcblxuXG4gICAgLy8gSWYgaXTigJlzIGluZmluaXR5LCB1cGRhdGUgdGhlIHZhbHVlLlxuICAgIGlmICggdmFsdWUgPT0gLUluZmluaXR5IHx8IHZhbHVlID09IEluZmluaXR5ICkge1xuICAgICAgICBpc0luZmluaXRlVmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIC8vIElmIGl04oCZcyBhbiBvYmplY3QsIHVzZSB0aGUgbmF0aXZlIGRhdGUgb2JqZWN0LlxuICAgIGVsc2UgaWYgKCAkLmlzUGxhaW5PYmplY3QoIHZhbHVlICkgJiYgXy5pc0ludGVnZXIoIHZhbHVlLnBpY2sgKSApIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5vYmpcbiAgICB9XG5cbiAgICAvLyBJZiBpdOKAmXMgYW4gYXJyYXksIGNvbnZlcnQgaXQgaW50byBhIGRhdGUgYW5kIG1ha2Ugc3VyZVxuICAgIC8vIHRoYXQgaXTigJlzIGEgdmFsaWQgZGF0ZSDigJMgb3RoZXJ3aXNlIGRlZmF1bHQgdG8gdG9kYXkuXG4gICAgZWxzZSBpZiAoICQuaXNBcnJheSggdmFsdWUgKSApIHtcbiAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSggdmFsdWVbIDAgXSwgdmFsdWVbIDEgXSwgdmFsdWVbIDIgXSApXG4gICAgICAgIHZhbHVlID0gXy5pc0RhdGUoIHZhbHVlICkgPyB2YWx1ZSA6IGNhbGVuZGFyLmNyZWF0ZSgpLm9ialxuICAgIH1cblxuICAgIC8vIElmIGl04oCZcyBhIG51bWJlciBvciBkYXRlIG9iamVjdCwgbWFrZSBhIG5vcm1hbGl6ZWQgZGF0ZS5cbiAgICBlbHNlIGlmICggXy5pc0ludGVnZXIoIHZhbHVlICkgfHwgXy5pc0RhdGUoIHZhbHVlICkgKSB7XG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXIubm9ybWFsaXplKCBuZXcgRGF0ZSggdmFsdWUgKSwgb3B0aW9ucyApXG4gICAgfVxuXG4gICAgLy8gSWYgaXTigJlzIGEgbGl0ZXJhbCB0cnVlIG9yIGFueSBvdGhlciBjYXNlLCBzZXQgaXQgdG8gbm93LlxuICAgIGVsc2UgLyppZiAoIHZhbHVlID09PSB0cnVlICkqLyB7XG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXIubm93KCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBjb21waWxlZCBvYmplY3QuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeWVhcjogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG1vbnRoOiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUuZ2V0TW9udGgoKSxcbiAgICAgICAgZGF0ZTogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLmdldERhdGUoKSxcbiAgICAgICAgZGF5OiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUuZ2V0RGF5KCksXG4gICAgICAgIG9iajogaXNJbmZpbml0ZVZhbHVlIHx8IHZhbHVlLFxuICAgICAgICBwaWNrOiBpc0luZmluaXRlVmFsdWUgfHwgdmFsdWUuZ2V0VGltZSgpXG4gICAgfVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmNyZWF0ZVxuXG5cbi8qKlxuICogQ3JlYXRlIGEgcmFuZ2UgbGltaXQgb2JqZWN0IHVzaW5nIGFuIGFycmF5LCBkYXRlIG9iamVjdCxcbiAqIGxpdGVyYWwg4oCcdHJ1ZeKAnSwgb3IgaW50ZWdlciByZWxhdGl2ZSB0byBhbm90aGVyIHRpbWUuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmNyZWF0ZVJhbmdlID0gZnVuY3Rpb24oIGZyb20sIHRvICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgY3JlYXRlRGF0ZSA9IGZ1bmN0aW9uKCBkYXRlICkge1xuICAgICAgICAgICAgaWYgKCBkYXRlID09PSB0cnVlIHx8ICQuaXNBcnJheSggZGF0ZSApIHx8IF8uaXNEYXRlKCBkYXRlICkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGVuZGFyLmNyZWF0ZSggZGF0ZSApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0ZVxuICAgICAgICB9XG5cbiAgICAvLyBDcmVhdGUgb2JqZWN0cyBpZiBwb3NzaWJsZS5cbiAgICBpZiAoICFfLmlzSW50ZWdlciggZnJvbSApICkge1xuICAgICAgICBmcm9tID0gY3JlYXRlRGF0ZSggZnJvbSApXG4gICAgfVxuICAgIGlmICggIV8uaXNJbnRlZ2VyKCB0byApICkge1xuICAgICAgICB0byA9IGNyZWF0ZURhdGUoIHRvIClcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgcmVsYXRpdmUgZGF0ZXMuXG4gICAgaWYgKCBfLmlzSW50ZWdlciggZnJvbSApICYmICQuaXNQbGFpbk9iamVjdCggdG8gKSApIHtcbiAgICAgICAgZnJvbSA9IFsgdG8ueWVhciwgdG8ubW9udGgsIHRvLmRhdGUgKyBmcm9tIF07XG4gICAgfVxuICAgIGVsc2UgaWYgKCBfLmlzSW50ZWdlciggdG8gKSAmJiAkLmlzUGxhaW5PYmplY3QoIGZyb20gKSApIHtcbiAgICAgICAgdG8gPSBbIGZyb20ueWVhciwgZnJvbS5tb250aCwgZnJvbS5kYXRlICsgdG8gXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmcm9tOiBjcmVhdGVEYXRlKCBmcm9tICksXG4gICAgICAgIHRvOiBjcmVhdGVEYXRlKCB0byApXG4gICAgfVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmNyZWF0ZVJhbmdlXG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIGRhdGUgdW5pdCBmYWxscyB3aXRoaW4gYSBkYXRlIHJhbmdlIG9iamVjdC5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUud2l0aGluUmFuZ2UgPSBmdW5jdGlvbiggcmFuZ2UsIGRhdGVVbml0ICkge1xuICAgIHJhbmdlID0gdGhpcy5jcmVhdGVSYW5nZShyYW5nZS5mcm9tLCByYW5nZS50bylcbiAgICByZXR1cm4gZGF0ZVVuaXQucGljayA+PSByYW5nZS5mcm9tLnBpY2sgJiYgZGF0ZVVuaXQucGljayA8PSByYW5nZS50by5waWNrXG59XG5cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gZGF0ZSByYW5nZSBvYmplY3RzIG92ZXJsYXAuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLm92ZXJsYXBSYW5nZXMgPSBmdW5jdGlvbiggb25lLCB0d28gKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzXG5cbiAgICAvLyBDb252ZXJ0IHRoZSByYW5nZXMgaW50byBjb21wYXJhYmxlIGRhdGVzLlxuICAgIG9uZSA9IGNhbGVuZGFyLmNyZWF0ZVJhbmdlKCBvbmUuZnJvbSwgb25lLnRvIClcbiAgICB0d28gPSBjYWxlbmRhci5jcmVhdGVSYW5nZSggdHdvLmZyb20sIHR3by50byApXG5cbiAgICByZXR1cm4gY2FsZW5kYXIud2l0aGluUmFuZ2UoIG9uZSwgdHdvLmZyb20gKSB8fCBjYWxlbmRhci53aXRoaW5SYW5nZSggb25lLCB0d28udG8gKSB8fFxuICAgICAgICBjYWxlbmRhci53aXRoaW5SYW5nZSggdHdvLCBvbmUuZnJvbSApIHx8IGNhbGVuZGFyLndpdGhpblJhbmdlKCB0d28sIG9uZS50byApXG59XG5cblxuLyoqXG4gKiBHZXQgdGhlIGRhdGUgdG9kYXkuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLm5vdyA9IGZ1bmN0aW9uKCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApIHtcbiAgICB2YWx1ZSA9IG5ldyBEYXRlKClcbiAgICBpZiAoIG9wdGlvbnMgJiYgb3B0aW9ucy5yZWwgKSB7XG4gICAgICAgIHZhbHVlLnNldERhdGUoIHZhbHVlLmdldERhdGUoKSArIG9wdGlvbnMucmVsIClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsaXplKCB2YWx1ZSwgb3B0aW9ucyApXG59XG5cblxuLyoqXG4gKiBOYXZpZ2F0ZSB0byBuZXh0L3ByZXYgbW9udGguXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLm5hdmlnYXRlID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLCBvcHRpb25zICkge1xuXG4gICAgdmFyIHRhcmdldERhdGVPYmplY3QsXG4gICAgICAgIHRhcmdldFllYXIsXG4gICAgICAgIHRhcmdldE1vbnRoLFxuICAgICAgICB0YXJnZXREYXRlLFxuICAgICAgICBpc1RhcmdldEFycmF5ID0gJC5pc0FycmF5KCB2YWx1ZSApLFxuICAgICAgICBpc1RhcmdldE9iamVjdCA9ICQuaXNQbGFpbk9iamVjdCggdmFsdWUgKSxcbiAgICAgICAgdmlld3NldE9iamVjdCA9IHRoaXMuaXRlbS52aWV3LyosXG4gICAgICAgIHNhZmV0eSA9IDEwMCovXG5cblxuICAgIGlmICggaXNUYXJnZXRBcnJheSB8fCBpc1RhcmdldE9iamVjdCApIHtcblxuICAgICAgICBpZiAoIGlzVGFyZ2V0T2JqZWN0ICkge1xuICAgICAgICAgICAgdGFyZ2V0WWVhciA9IHZhbHVlLnllYXJcbiAgICAgICAgICAgIHRhcmdldE1vbnRoID0gdmFsdWUubW9udGhcbiAgICAgICAgICAgIHRhcmdldERhdGUgPSB2YWx1ZS5kYXRlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRZZWFyID0gK3ZhbHVlWzBdXG4gICAgICAgICAgICB0YXJnZXRNb250aCA9ICt2YWx1ZVsxXVxuICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9ICt2YWx1ZVsyXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2XigJlyZSBuYXZpZ2F0aW5nIG1vbnRocyBidXQgdGhlIHZpZXcgaXMgaW4gYSBkaWZmZXJlbnRcbiAgICAgICAgLy8gbW9udGgsIG5hdmlnYXRlIHRvIHRoZSB2aWV34oCZcyB5ZWFyIGFuZCBtb250aC5cbiAgICAgICAgaWYgKCBvcHRpb25zICYmIG9wdGlvbnMubmF2ICYmIHZpZXdzZXRPYmplY3QgJiYgdmlld3NldE9iamVjdC5tb250aCAhPT0gdGFyZ2V0TW9udGggKSB7XG4gICAgICAgICAgICB0YXJnZXRZZWFyID0gdmlld3NldE9iamVjdC55ZWFyXG4gICAgICAgICAgICB0YXJnZXRNb250aCA9IHZpZXdzZXRPYmplY3QubW9udGhcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpZ3VyZSBvdXQgdGhlIGV4cGVjdGVkIHRhcmdldCB5ZWFyIGFuZCBtb250aC5cbiAgICAgICAgdGFyZ2V0RGF0ZU9iamVjdCA9IG5ldyBEYXRlKCB0YXJnZXRZZWFyLCB0YXJnZXRNb250aCArICggb3B0aW9ucyAmJiBvcHRpb25zLm5hdiA/IG9wdGlvbnMubmF2IDogMCApLCAxIClcbiAgICAgICAgdGFyZ2V0WWVhciA9IHRhcmdldERhdGVPYmplY3QuZ2V0RnVsbFllYXIoKVxuICAgICAgICB0YXJnZXRNb250aCA9IHRhcmdldERhdGVPYmplY3QuZ2V0TW9udGgoKVxuXG4gICAgICAgIC8vIElmIHRoZSBtb250aCB3ZeKAmXJlIGdvaW5nIHRvIGRvZXNu4oCZdCBoYXZlIGVub3VnaCBkYXlzLFxuICAgICAgICAvLyBrZWVwIGRlY3JlYXNpbmcgdGhlIGRhdGUgdW50aWwgd2UgcmVhY2ggdGhlIG1vbnRo4oCZcyBsYXN0IGRhdGUuXG4gICAgICAgIHdoaWxlICggLypzYWZldHkgJiYqLyBuZXcgRGF0ZSggdGFyZ2V0WWVhciwgdGFyZ2V0TW9udGgsIHRhcmdldERhdGUgKS5nZXRNb250aCgpICE9PSB0YXJnZXRNb250aCApIHtcbiAgICAgICAgICAgIHRhcmdldERhdGUgLT0gMVxuICAgICAgICAgICAgLypzYWZldHkgLT0gMVxuICAgICAgICAgICAgaWYgKCAhc2FmZXR5ICkge1xuICAgICAgICAgICAgICAgIHRocm93ICdGZWxsIGludG8gYW4gaW5maW5pdGUgbG9vcCB3aGlsZSBuYXZpZ2F0aW5nIHRvICcgKyBuZXcgRGF0ZSggdGFyZ2V0WWVhciwgdGFyZ2V0TW9udGgsIHRhcmdldERhdGUgKSArICcuJ1xuICAgICAgICAgICAgfSovXG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IFsgdGFyZ2V0WWVhciwgdGFyZ2V0TW9udGgsIHRhcmdldERhdGUgXVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLm5hdmlnYXRlXG5cblxuLyoqXG4gKiBOb3JtYWxpemUgYSBkYXRlIGJ5IHNldHRpbmcgdGhlIGhvdXJzIHRvIG1pZG5pZ2h0LlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiggdmFsdWUvKiwgb3B0aW9ucyovICkge1xuICAgIHZhbHVlLnNldEhvdXJzKCAwLCAwLCAwLCAwIClcbiAgICByZXR1cm4gdmFsdWVcbn1cblxuXG4vKipcbiAqIE1lYXN1cmUgdGhlIHJhbmdlIG9mIGRhdGVzLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5tZWFzdXJlID0gZnVuY3Rpb24oIHR5cGUsIHZhbHVlLyosIG9wdGlvbnMqLyApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXNcblxuICAgIC8vIElmIGl04oCZcyBhbnl0aGluZyBmYWxzZS15LCByZW1vdmUgdGhlIGxpbWl0cy5cbiAgICBpZiAoICF2YWx1ZSApIHtcbiAgICAgICAgdmFsdWUgPSB0eXBlID09ICdtaW4nID8gLUluZmluaXR5IDogSW5maW5pdHlcbiAgICB9XG5cbiAgICAvLyBJZiBpdOKAmXMgYSBzdHJpbmcsIHBhcnNlIGl0LlxuICAgIGVsc2UgaWYgKCB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgKSB7XG4gICAgICAgIHZhbHVlID0gY2FsZW5kYXIucGFyc2UoIHR5cGUsIHZhbHVlIClcbiAgICB9XG5cbiAgICAvLyBJZiBpdCdzIGFuIGludGVnZXIsIGdldCBhIGRhdGUgcmVsYXRpdmUgdG8gdG9kYXkuXG4gICAgZWxzZSBpZiAoIF8uaXNJbnRlZ2VyKCB2YWx1ZSApICkge1xuICAgICAgICB2YWx1ZSA9IGNhbGVuZGFyLm5vdyggdHlwZSwgdmFsdWUsIHsgcmVsOiB2YWx1ZSB9IClcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVcbn0gLy8vRGF0ZVBpY2tlci5wcm90b3R5cGUubWVhc3VyZVxuXG5cbi8qKlxuICogQ3JlYXRlIGEgdmlld3NldCBvYmplY3QgYmFzZWQgb24gbmF2aWdhdGlvbi5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUudmlld3NldCA9IGZ1bmN0aW9uKCB0eXBlLCBkYXRlT2JqZWN0LyosIG9wdGlvbnMqLyApIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoWyBkYXRlT2JqZWN0LnllYXIsIGRhdGVPYmplY3QubW9udGgsIDEgXSlcbn1cblxuXG4vKipcbiAqIFZhbGlkYXRlIGEgZGF0ZSBhcyBlbmFibGVkIGFuZCBzaGlmdCBpZiBuZWVkZWQuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24oIHR5cGUsIGRhdGVPYmplY3QsIG9wdGlvbnMgKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxuXG4gICAgICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGRhdGUuXG4gICAgICAgIG9yaWdpbmFsRGF0ZU9iamVjdCA9IGRhdGVPYmplY3QsXG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYW4gaW50ZXJ2YWwuXG4gICAgICAgIGludGVydmFsID0gb3B0aW9ucyAmJiBvcHRpb25zLmludGVydmFsID8gb3B0aW9ucy5pbnRlcnZhbCA6IDEsXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNhbGVuZGFyIGVuYWJsZWQgZGF0ZXMgYXJlIGludmVydGVkLlxuICAgICAgICBpc0ZsaXBwZWRCYXNlID0gY2FsZW5kYXIuaXRlbS5lbmFibGUgPT09IC0xLFxuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW55IGVuYWJsZWQgZGF0ZXMgYWZ0ZXIvYmVmb3JlIG5vdy5cbiAgICAgICAgaGFzRW5hYmxlZEJlZm9yZVRhcmdldCwgaGFzRW5hYmxlZEFmdGVyVGFyZ2V0LFxuXG4gICAgICAgIC8vIFRoZSBtaW4gJiBtYXggbGltaXRzLlxuICAgICAgICBtaW5MaW1pdE9iamVjdCA9IGNhbGVuZGFyLml0ZW0ubWluLFxuICAgICAgICBtYXhMaW1pdE9iamVjdCA9IGNhbGVuZGFyLml0ZW0ubWF4LFxuXG4gICAgICAgIC8vIENoZWNrIGlmIHdl4oCZdmUgcmVhY2hlZCB0aGUgbGltaXQgZHVyaW5nIHNoaWZ0aW5nLlxuICAgICAgICByZWFjaGVkTWluLCByZWFjaGVkTWF4LFxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjYWxlbmRhciBpcyBpbnZlcnRlZCBhbmQgYXQgbGVhc3Qgb25lIHdlZWtkYXkgaXMgZW5hYmxlZC5cbiAgICAgICAgaGFzRW5hYmxlZFdlZWtkYXlzID0gaXNGbGlwcGVkQmFzZSAmJiBjYWxlbmRhci5pdGVtLmRpc2FibGUuZmlsdGVyKCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJl4oCZcyBhIGRhdGUsIGNoZWNrIHdoZXJlIGl0IGlzIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICBpZiAoICQuaXNBcnJheSggdmFsdWUgKSApIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZVRpbWUgPSBjYWxlbmRhci5jcmVhdGUoIHZhbHVlICkucGlja1xuICAgICAgICAgICAgICAgIGlmICggZGF0ZVRpbWUgPCBkYXRlT2JqZWN0LnBpY2sgKSBoYXNFbmFibGVkQmVmb3JlVGFyZ2V0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBkYXRlVGltZSA+IGRhdGVPYmplY3QucGljayApIGhhc0VuYWJsZWRBZnRlclRhcmdldCA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmV0dXJuIG9ubHkgaW50ZWdlcnMgZm9yIGVuYWJsZWQgd2Vla2RheXMuXG4gICAgICAgICAgICByZXR1cm4gXy5pc0ludGVnZXIoIHZhbHVlIClcbiAgICAgICAgfSkubGVuZ3RoLyosXG5cbiAgICAgICAgc2FmZXR5ID0gMTAwKi9cblxuXG5cbiAgICAvLyBDYXNlcyB0byB2YWxpZGF0ZSBmb3I6XG4gICAgLy8gWzFdIE5vdCBpbnZlcnRlZCBhbmQgZGF0ZSBkaXNhYmxlZC5cbiAgICAvLyBbMl0gSW52ZXJ0ZWQgYW5kIHNvbWUgZGF0ZXMgZW5hYmxlZC5cbiAgICAvLyBbM10gTm90IGludmVydGVkIGFuZCBvdXQgb2YgcmFuZ2UuXG4gICAgLy9cbiAgICAvLyBDYXNlcyB0byAqKm5vdCoqIHZhbGlkYXRlIGZvcjpcbiAgICAvLyDigKIgTmF2aWdhdGluZyBtb250aHMuXG4gICAgLy8g4oCiIE5vdCBpbnZlcnRlZCBhbmQgZGF0ZSBlbmFibGVkLlxuICAgIC8vIOKAoiBJbnZlcnRlZCBhbmQgYWxsIGRhdGVzIGRpc2FibGVkLlxuICAgIC8vIOKAoiAuLmFuZCBhbnl0aGluZyBlbHNlLlxuICAgIGlmICggIW9wdGlvbnMgfHwgIW9wdGlvbnMubmF2ICkgaWYgKFxuICAgICAgICAvKiAxICovICggIWlzRmxpcHBlZEJhc2UgJiYgY2FsZW5kYXIuZGlzYWJsZWQoIGRhdGVPYmplY3QgKSApIHx8XG4gICAgICAgIC8qIDIgKi8gKCBpc0ZsaXBwZWRCYXNlICYmIGNhbGVuZGFyLmRpc2FibGVkKCBkYXRlT2JqZWN0ICkgJiYgKCBoYXNFbmFibGVkV2Vla2RheXMgfHwgaGFzRW5hYmxlZEJlZm9yZVRhcmdldCB8fCBoYXNFbmFibGVkQWZ0ZXJUYXJnZXQgKSApIHx8XG4gICAgICAgIC8qIDMgKi8gKCAhaXNGbGlwcGVkQmFzZSAmJiAoZGF0ZU9iamVjdC5waWNrIDw9IG1pbkxpbWl0T2JqZWN0LnBpY2sgfHwgZGF0ZU9iamVjdC5waWNrID49IG1heExpbWl0T2JqZWN0LnBpY2spIClcbiAgICApIHtcblxuXG4gICAgICAgIC8vIFdoZW4gaW52ZXJ0ZWQsIGZsaXAgdGhlIGRpcmVjdGlvbiBpZiB0aGVyZSBhcmVu4oCZdCBhbnkgZW5hYmxlZCB3ZWVrZGF5c1xuICAgICAgICAvLyBhbmQgdGhlcmUgYXJlIG5vIGVuYWJsZWQgZGF0ZXMgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgaW50ZXJ2YWwuXG4gICAgICAgIGlmICggaXNGbGlwcGVkQmFzZSAmJiAhaGFzRW5hYmxlZFdlZWtkYXlzICYmICggKCAhaGFzRW5hYmxlZEFmdGVyVGFyZ2V0ICYmIGludGVydmFsID4gMCApIHx8ICggIWhhc0VuYWJsZWRCZWZvcmVUYXJnZXQgJiYgaW50ZXJ2YWwgPCAwICkgKSApIHtcbiAgICAgICAgICAgIGludGVydmFsICo9IC0xXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIEtlZXAgbG9vcGluZyB1bnRpbCB3ZSByZWFjaCBhbiBlbmFibGVkIGRhdGUuXG4gICAgICAgIHdoaWxlICggLypzYWZldHkgJiYqLyBjYWxlbmRhci5kaXNhYmxlZCggZGF0ZU9iamVjdCApICkge1xuXG4gICAgICAgICAgICAvKnNhZmV0eSAtPSAxXG4gICAgICAgICAgICBpZiAoICFzYWZldHkgKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0ZlbGwgaW50byBhbiBpbmZpbml0ZSBsb29wIHdoaWxlIHZhbGlkYXRpbmcgJyArIGRhdGVPYmplY3Qub2JqICsgJy4nXG4gICAgICAgICAgICB9Ki9cblxuXG4gICAgICAgICAgICAvLyBJZiB3ZeKAmXZlIGxvb3BlZCBpbnRvIHRoZSBuZXh0L3ByZXYgbW9udGggd2l0aCBhIGxhcmdlIGludGVydmFsLCByZXR1cm4gdG8gdGhlIG9yaWdpbmFsIGRhdGUgYW5kIGZsYXR0ZW4gdGhlIGludGVydmFsLlxuICAgICAgICAgICAgaWYgKCBNYXRoLmFicyggaW50ZXJ2YWwgKSA+IDEgJiYgKCBkYXRlT2JqZWN0Lm1vbnRoIDwgb3JpZ2luYWxEYXRlT2JqZWN0Lm1vbnRoIHx8IGRhdGVPYmplY3QubW9udGggPiBvcmlnaW5hbERhdGVPYmplY3QubW9udGggKSApIHtcbiAgICAgICAgICAgICAgICBkYXRlT2JqZWN0ID0gb3JpZ2luYWxEYXRlT2JqZWN0XG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBpbnRlcnZhbCA+IDAgPyAxIDogLTFcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLyBJZiB3ZeKAmXZlIHJlYWNoZWQgdGhlIG1pbi9tYXggbGltaXQsIHJldmVyc2UgdGhlIGRpcmVjdGlvbiwgZmxhdHRlbiB0aGUgaW50ZXJ2YWwgYW5kIHNldCBpdCB0byB0aGUgbGltaXQuXG4gICAgICAgICAgICBpZiAoIGRhdGVPYmplY3QucGljayA8PSBtaW5MaW1pdE9iamVjdC5waWNrICkge1xuICAgICAgICAgICAgICAgIHJlYWNoZWRNaW4gPSB0cnVlXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSAxXG4gICAgICAgICAgICAgICAgZGF0ZU9iamVjdCA9IGNhbGVuZGFyLmNyZWF0ZShbXG4gICAgICAgICAgICAgICAgICAgIG1pbkxpbWl0T2JqZWN0LnllYXIsXG4gICAgICAgICAgICAgICAgICAgIG1pbkxpbWl0T2JqZWN0Lm1vbnRoLFxuICAgICAgICAgICAgICAgICAgICBtaW5MaW1pdE9iamVjdC5kYXRlICsgKGRhdGVPYmplY3QucGljayA9PT0gbWluTGltaXRPYmplY3QucGljayA/IDAgOiAtMSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIGRhdGVPYmplY3QucGljayA+PSBtYXhMaW1pdE9iamVjdC5waWNrICkge1xuICAgICAgICAgICAgICAgIHJlYWNoZWRNYXggPSB0cnVlXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSAtMVxuICAgICAgICAgICAgICAgIGRhdGVPYmplY3QgPSBjYWxlbmRhci5jcmVhdGUoW1xuICAgICAgICAgICAgICAgICAgICBtYXhMaW1pdE9iamVjdC55ZWFyLFxuICAgICAgICAgICAgICAgICAgICBtYXhMaW1pdE9iamVjdC5tb250aCxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGltaXRPYmplY3QuZGF0ZSArIChkYXRlT2JqZWN0LnBpY2sgPT09IG1heExpbWl0T2JqZWN0LnBpY2sgPyAwIDogMSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIElmIHdl4oCZdmUgcmVhY2hlZCBib3RoIGxpbWl0cywganVzdCBicmVhayBvdXQgb2YgdGhlIGxvb3AuXG4gICAgICAgICAgICBpZiAoIHJlYWNoZWRNaW4gJiYgcmVhY2hlZE1heCApIHtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIEZpbmFsbHksIGNyZWF0ZSB0aGUgc2hpZnRlZCBkYXRlIHVzaW5nIHRoZSBpbnRlcnZhbCBhbmQga2VlcCBsb29waW5nLlxuICAgICAgICAgICAgZGF0ZU9iamVjdCA9IGNhbGVuZGFyLmNyZWF0ZShbIGRhdGVPYmplY3QueWVhciwgZGF0ZU9iamVjdC5tb250aCwgZGF0ZU9iamVjdC5kYXRlICsgaW50ZXJ2YWwgXSlcbiAgICAgICAgfVxuXG4gICAgfSAvL2VuZGlmXG5cblxuICAgIC8vIFJldHVybiB0aGUgZGF0ZSBvYmplY3Qgc2V0dGxlZCBvbi5cbiAgICByZXR1cm4gZGF0ZU9iamVjdFxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLnZhbGlkYXRlXG5cblxuLyoqXG4gKiBDaGVjayBpZiBhIGRhdGUgaXMgZGlzYWJsZWQuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmRpc2FibGVkID0gZnVuY3Rpb24oIGRhdGVUb1ZlcmlmeSApIHtcblxuICAgIHZhclxuICAgICAgICBjYWxlbmRhciA9IHRoaXMsXG5cbiAgICAgICAgLy8gRmlsdGVyIHRocm91Z2ggdGhlIGRpc2FibGVkIGRhdGVzIHRvIGNoZWNrIGlmIHRoaXMgaXMgb25lLlxuICAgICAgICBpc0Rpc2FibGVkTWF0Y2ggPSBjYWxlbmRhci5pdGVtLmRpc2FibGUuZmlsdGVyKCBmdW5jdGlvbiggZGF0ZVRvRGlzYWJsZSApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRhdGUgaXMgYSBudW1iZXIsIG1hdGNoIHRoZSB3ZWVrZGF5IHdpdGggMGluZGV4IGFuZCBgZmlyc3REYXlgIGNoZWNrLlxuICAgICAgICAgICAgaWYgKCBfLmlzSW50ZWdlciggZGF0ZVRvRGlzYWJsZSApICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlVG9WZXJpZnkuZGF5ID09PSAoIGNhbGVuZGFyLnNldHRpbmdzLmZpcnN0RGF5ID8gZGF0ZVRvRGlzYWJsZSA6IGRhdGVUb0Rpc2FibGUgLSAxICkgJSA3XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGl04oCZcyBhbiBhcnJheSBvciBhIG5hdGl2ZSBKUyBkYXRlLCBjcmVhdGUgYW5kIG1hdGNoIHRoZSBleGFjdCBkYXRlLlxuICAgICAgICAgICAgaWYgKCAkLmlzQXJyYXkoIGRhdGVUb0Rpc2FibGUgKSB8fCBfLmlzRGF0ZSggZGF0ZVRvRGlzYWJsZSApICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlVG9WZXJpZnkucGljayA9PT0gY2FsZW5kYXIuY3JlYXRlKCBkYXRlVG9EaXNhYmxlICkucGlja1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpdOKAmXMgYW4gb2JqZWN0LCBtYXRjaCBhIGRhdGUgd2l0aGluIHRoZSDigJxmcm9t4oCdIGFuZCDigJx0b+KAnSByYW5nZS5cbiAgICAgICAgICAgIGlmICggJC5pc1BsYWluT2JqZWN0KCBkYXRlVG9EaXNhYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGVuZGFyLndpdGhpblJhbmdlKCBkYXRlVG9EaXNhYmxlLCBkYXRlVG9WZXJpZnkgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgLy8gSWYgdGhpcyBkYXRlIG1hdGNoZXMgYSBkaXNhYmxlZCBkYXRlLCBjb25maXJtIGl04oCZcyBub3QgaW52ZXJ0ZWQuXG4gICAgaXNEaXNhYmxlZE1hdGNoID0gaXNEaXNhYmxlZE1hdGNoLmxlbmd0aCAmJiAhaXNEaXNhYmxlZE1hdGNoLmZpbHRlcihmdW5jdGlvbiggZGF0ZVRvRGlzYWJsZSApIHtcbiAgICAgICAgcmV0dXJuICQuaXNBcnJheSggZGF0ZVRvRGlzYWJsZSApICYmIGRhdGVUb0Rpc2FibGVbM10gPT0gJ2ludmVydGVkJyB8fFxuICAgICAgICAgICAgJC5pc1BsYWluT2JqZWN0KCBkYXRlVG9EaXNhYmxlICkgJiYgZGF0ZVRvRGlzYWJsZS5pbnZlcnRlZFxuICAgIH0pLmxlbmd0aFxuXG4gICAgLy8gQ2hlY2sgdGhlIGNhbGVuZGFyIOKAnGVuYWJsZWTigJ0gZmxhZyBhbmQgcmVzcGVjdGl2ZWx5IGZsaXAgdGhlXG4gICAgLy8gZGlzYWJsZWQgc3RhdGUuIFRoZW4gYWxzbyBjaGVjayBpZiBpdOKAmXMgYmV5b25kIHRoZSBtaW4vbWF4IGxpbWl0cy5cbiAgICByZXR1cm4gY2FsZW5kYXIuaXRlbS5lbmFibGUgPT09IC0xID8gIWlzRGlzYWJsZWRNYXRjaCA6IGlzRGlzYWJsZWRNYXRjaCB8fFxuICAgICAgICBkYXRlVG9WZXJpZnkucGljayA8IGNhbGVuZGFyLml0ZW0ubWluLnBpY2sgfHxcbiAgICAgICAgZGF0ZVRvVmVyaWZ5LnBpY2sgPiBjYWxlbmRhci5pdGVtLm1heC5waWNrXG5cbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5kaXNhYmxlZFxuXG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgaW50byBhIHVzYWJsZSB0eXBlLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKCB0eXBlLCB2YWx1ZSwgb3B0aW9ucyApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIHBhcnNpbmdPYmplY3QgPSB7fVxuXG4gICAgLy8gSWYgaXTigJlzIGFscmVhZHkgcGFyc2VkLCB3ZeKAmXJlIGdvb2QuXG4gICAgaWYgKCAhdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnICkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICAvLyBXZSBuZWVkIGEgYC5mb3JtYXRgIHRvIHBhcnNlIHRoZSB2YWx1ZSB3aXRoLlxuICAgIGlmICggISggb3B0aW9ucyAmJiBvcHRpb25zLmZvcm1hdCApICkge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgICAgICBvcHRpb25zLmZvcm1hdCA9IGNhbGVuZGFyLnNldHRpbmdzLmZvcm1hdFxuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdGhlIGZvcm1hdCBpbnRvIGFuIGFycmF5IGFuZCB0aGVuIG1hcCB0aHJvdWdoIGl0LlxuICAgIGNhbGVuZGFyLmZvcm1hdHMudG9BcnJheSggb3B0aW9ucy5mb3JtYXQgKS5tYXAoIGZ1bmN0aW9uKCBsYWJlbCApIHtcblxuICAgICAgICB2YXJcbiAgICAgICAgICAgIC8vIEdyYWIgdGhlIGZvcm1hdHRpbmcgbGFiZWwuXG4gICAgICAgICAgICBmb3JtYXR0aW5nTGFiZWwgPSBjYWxlbmRhci5mb3JtYXRzWyBsYWJlbCBdLFxuXG4gICAgICAgICAgICAvLyBUaGUgZm9ybWF0IGxlbmd0aCBpcyBmcm9tIHRoZSBmb3JtYXR0aW5nIGxhYmVsIGZ1bmN0aW9uIG9yIHRoZVxuICAgICAgICAgICAgLy8gbGFiZWwgbGVuZ3RoIHdpdGhvdXQgdGhlIGVzY2FwaW5nIGV4Y2xhbWF0aW9uICghKSBtYXJrLlxuICAgICAgICAgICAgZm9ybWF0TGVuZ3RoID0gZm9ybWF0dGluZ0xhYmVsID8gXy50cmlnZ2VyKCBmb3JtYXR0aW5nTGFiZWwsIGNhbGVuZGFyLCBbIHZhbHVlLCBwYXJzaW5nT2JqZWN0IF0gKSA6IGxhYmVsLnJlcGxhY2UoIC9eIS8sICcnICkubGVuZ3RoXG5cbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIGZvcm1hdCBsYWJlbCwgc3BsaXQgdGhlIHZhbHVlIHVwIHRvIHRoZSBmb3JtYXQgbGVuZ3RoLlxuICAgICAgICAvLyBUaGVuIGFkZCBpdCB0byB0aGUgcGFyc2luZyBvYmplY3Qgd2l0aCBhcHByb3ByaWF0ZSBsYWJlbC5cbiAgICAgICAgaWYgKCBmb3JtYXR0aW5nTGFiZWwgKSB7XG4gICAgICAgICAgICBwYXJzaW5nT2JqZWN0WyBsYWJlbCBdID0gdmFsdWUuc3Vic3RyKCAwLCBmb3JtYXRMZW5ndGggKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSBhcyB0aGUgc3Vic3RyaW5nIGZyb20gZm9ybWF0IGxlbmd0aCB0byBlbmQuXG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKCBmb3JtYXRMZW5ndGggKVxuICAgIH0pXG5cbiAgICAvLyBDb21wZW5zYXRlIGZvciBtb250aCAwaW5kZXguXG4gICAgcmV0dXJuIFtcbiAgICAgICAgcGFyc2luZ09iamVjdC55eXl5IHx8IHBhcnNpbmdPYmplY3QueXksXG4gICAgICAgICsoIHBhcnNpbmdPYmplY3QubW0gfHwgcGFyc2luZ09iamVjdC5tICkgLSAxLFxuICAgICAgICBwYXJzaW5nT2JqZWN0LmRkIHx8IHBhcnNpbmdPYmplY3QuZFxuICAgIF1cbn0gLy9EYXRlUGlja2VyLnByb3RvdHlwZS5wYXJzZVxuXG5cbi8qKlxuICogVmFyaW91cyBmb3JtYXRzIHRvIGRpc3BsYXkgdGhlIG9iamVjdCBpbi5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuZm9ybWF0cyA9IChmdW5jdGlvbigpIHtcblxuICAgIC8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBmaXJzdCB3b3JkIGluIGEgY29sbGVjdGlvbi5cbiAgICBmdW5jdGlvbiBnZXRXb3JkTGVuZ3RoRnJvbUNvbGxlY3Rpb24oIHN0cmluZywgY29sbGVjdGlvbiwgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAvLyBHcmFiIHRoZSBmaXJzdCB3b3JkIGZyb20gdGhlIHN0cmluZy5cbiAgICAgICAgdmFyIHdvcmQgPSBzdHJpbmcubWF0Y2goIC9cXHcrLyApWyAwIF1cblxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIG1vbnRoIGluZGV4LCBhZGQgaXQgdG8gdGhlIGRhdGUgb2JqZWN0XG4gICAgICAgIGlmICggIWRhdGVPYmplY3QubW0gJiYgIWRhdGVPYmplY3QubSApIHtcbiAgICAgICAgICAgIGRhdGVPYmplY3QubSA9IGNvbGxlY3Rpb24uaW5kZXhPZiggd29yZCApICsgMVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIHdvcmQuXG4gICAgICAgIHJldHVybiB3b3JkLmxlbmd0aFxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBmaXJzdCB3b3JkIGluIGEgc3RyaW5nLlxuICAgIGZ1bmN0aW9uIGdldEZpcnN0V29yZExlbmd0aCggc3RyaW5nICkge1xuICAgICAgICByZXR1cm4gc3RyaW5nLm1hdGNoKCAvXFx3Ky8gKVsgMCBdLmxlbmd0aFxuICAgIH1cblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgZDogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBzdHJpbmcsIHRoZW4gZ2V0IHRoZSBkaWdpdHMgbGVuZ3RoLlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHJldHVybiB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBfLmRpZ2l0cyggc3RyaW5nICkgOiBkYXRlT2JqZWN0LmRhdGVcbiAgICAgICAgfSxcbiAgICAgICAgZGQ6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gdGhlIGxlbmd0aCBpcyBhbHdheXMgMi5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIGRhdGUgd2l0aCBhIGxlYWRpbmcgemVyby5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyAyIDogXy5sZWFkKCBkYXRlT2JqZWN0LmRhdGUgKVxuICAgICAgICB9LFxuICAgICAgICBkZGQ6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIGZpcnN0IHdvcmQuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzaG9ydCBzZWxlY3RlZCB3ZWVrZGF5LlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IGdldEZpcnN0V29yZExlbmd0aCggc3RyaW5nICkgOiB0aGlzLnNldHRpbmdzLndlZWtkYXlzU2hvcnRbIGRhdGVPYmplY3QuZGF5IF1cbiAgICAgICAgfSxcbiAgICAgICAgZGRkZDogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgdGhlbiBnZXQgdGhlIGxlbmd0aCBvZiB0aGUgZmlyc3Qgd29yZC5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIGZ1bGwgc2VsZWN0ZWQgd2Vla2RheS5cbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcgPyBnZXRGaXJzdFdvcmRMZW5ndGgoIHN0cmluZyApIDogdGhpcy5zZXR0aW5ncy53ZWVrZGF5c0Z1bGxbIGRhdGVPYmplY3QuZGF5IF1cbiAgICAgICAgfSxcbiAgICAgICAgbTogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgdGhlbiBnZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGlnaXRzXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCBtb250aCB3aXRoIDBpbmRleCBjb21wZW5zYXRpb24uXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gXy5kaWdpdHMoIHN0cmluZyApIDogZGF0ZU9iamVjdC5tb250aCArIDFcbiAgICAgICAgfSxcbiAgICAgICAgbW06IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gdGhlIGxlbmd0aCBpcyBhbHdheXMgMi5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIG1vbnRoIHdpdGggMGluZGV4IGFuZCBsZWFkaW5nIHplcm8uXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nID8gMiA6IF8ubGVhZCggZGF0ZU9iamVjdC5tb250aCArIDEgKVxuICAgICAgICB9LFxuICAgICAgICBtbW06IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcy5zZXR0aW5ncy5tb250aHNTaG9ydFxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCBnZXQgbGVuZ3RoIG9mIHRoZSByZWxldmFudCBtb250aCBmcm9tIHRoZSBzaG9ydFxuICAgICAgICAgICAgLy8gbW9udGhzIGNvbGxlY3Rpb24uIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIG1vbnRoIGZyb20gdGhhdCBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IGdldFdvcmRMZW5ndGhGcm9tQ29sbGVjdGlvbiggc3RyaW5nLCBjb2xsZWN0aW9uLCBkYXRlT2JqZWN0ICkgOiBjb2xsZWN0aW9uWyBkYXRlT2JqZWN0Lm1vbnRoIF1cbiAgICAgICAgfSxcbiAgICAgICAgbW1tbTogZnVuY3Rpb24oIHN0cmluZywgZGF0ZU9iamVjdCApIHtcblxuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLnNldHRpbmdzLm1vbnRoc0Z1bGxcblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBhIHN0cmluZywgZ2V0IGxlbmd0aCBvZiB0aGUgcmVsZXZhbnQgbW9udGggZnJvbSB0aGUgZnVsbFxuICAgICAgICAgICAgLy8gbW9udGhzIGNvbGxlY3Rpb24uIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIG1vbnRoIGZyb20gdGhhdCBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IGdldFdvcmRMZW5ndGhGcm9tQ29sbGVjdGlvbiggc3RyaW5nLCBjb2xsZWN0aW9uLCBkYXRlT2JqZWN0ICkgOiBjb2xsZWN0aW9uWyBkYXRlT2JqZWN0Lm1vbnRoIF1cbiAgICAgICAgfSxcbiAgICAgICAgeXk6IGZ1bmN0aW9uKCBzdHJpbmcsIGRhdGVPYmplY3QgKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBzdHJpbmcsIHRoZW4gdGhlIGxlbmd0aCBpcyBhbHdheXMgMi5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSByZXR1cm4gdGhlIHNlbGVjdGVkIHllYXIgYnkgc2xpY2luZyBvdXQgdGhlIGZpcnN0IDIgZGlnaXRzLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IDIgOiAoICcnICsgZGF0ZU9iamVjdC55ZWFyICkuc2xpY2UoIDIgKVxuICAgICAgICB9LFxuICAgICAgICB5eXl5OiBmdW5jdGlvbiggc3RyaW5nLCBkYXRlT2JqZWN0ICkge1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc3RyaW5nLCB0aGVuIHRoZSBsZW5ndGggaXMgYWx3YXlzIDQuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgcmV0dXJuIHRoZSBzZWxlY3RlZCB5ZWFyLlxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZyA/IDQgOiBkYXRlT2JqZWN0LnllYXJcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgYnkgc3BsaXR0aW5nIHRoZSBmb3JtYXR0aW5nIHN0cmluZyBwYXNzZWQuXG4gICAgICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCBmb3JtYXRTdHJpbmcgKSB7IHJldHVybiBmb3JtYXRTdHJpbmcuc3BsaXQoIC8oZHsxLDR9fG17MSw0fXx5ezR9fHl5fCEuKS9nICkgfSxcblxuICAgICAgICAvLyBGb3JtYXQgYW4gb2JqZWN0IGludG8gYSBzdHJpbmcgdXNpbmcgdGhlIGZvcm1hdHRpbmcgb3B0aW9ucy5cbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICggZm9ybWF0U3RyaW5nLCBpdGVtT2JqZWN0ICkge1xuICAgICAgICAgICAgdmFyIGNhbGVuZGFyID0gdGhpc1xuICAgICAgICAgICAgcmV0dXJuIGNhbGVuZGFyLmZvcm1hdHMudG9BcnJheSggZm9ybWF0U3RyaW5nICkubWFwKCBmdW5jdGlvbiggbGFiZWwgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8udHJpZ2dlciggY2FsZW5kYXIuZm9ybWF0c1sgbGFiZWwgXSwgY2FsZW5kYXIsIFsgMCwgaXRlbU9iamVjdCBdICkgfHwgbGFiZWwucmVwbGFjZSggL14hLywgJycgKVxuICAgICAgICAgICAgfSkuam9pbiggJycgKVxuICAgICAgICB9XG4gICAgfVxufSkoKSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmZvcm1hdHNcblxuXG5cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gZGF0ZSB1bml0cyBhcmUgdGhlIGV4YWN0LlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5pc0RhdGVFeGFjdCA9IGZ1bmN0aW9uKCBvbmUsIHR3byApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXNcblxuICAgIC8vIFdoZW4gd2XigJlyZSB3b3JraW5nIHdpdGggd2Vla2RheXMsIGRvIGEgZGlyZWN0IGNvbXBhcmlzb24uXG4gICAgaWYgKFxuICAgICAgICAoIF8uaXNJbnRlZ2VyKCBvbmUgKSAmJiBfLmlzSW50ZWdlciggdHdvICkgKSB8fFxuICAgICAgICAoIHR5cGVvZiBvbmUgPT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiB0d28gPT0gJ2Jvb2xlYW4nIClcbiAgICAgKSB7XG4gICAgICAgIHJldHVybiBvbmUgPT09IHR3b1xuICAgIH1cblxuICAgIC8vIFdoZW4gd2XigJlyZSB3b3JraW5nIHdpdGggZGF0ZSByZXByZXNlbnRhdGlvbnMsIGNvbXBhcmUgdGhlIOKAnHBpY2vigJ0gdmFsdWUuXG4gICAgaWYgKFxuICAgICAgICAoIF8uaXNEYXRlKCBvbmUgKSB8fCAkLmlzQXJyYXkoIG9uZSApICkgJiZcbiAgICAgICAgKCBfLmlzRGF0ZSggdHdvICkgfHwgJC5pc0FycmF5KCB0d28gKSApXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBjYWxlbmRhci5jcmVhdGUoIG9uZSApLnBpY2sgPT09IGNhbGVuZGFyLmNyZWF0ZSggdHdvICkucGlja1xuICAgIH1cblxuICAgIC8vIFdoZW4gd2XigJlyZSB3b3JraW5nIHdpdGggcmFuZ2Ugb2JqZWN0cywgY29tcGFyZSB0aGUg4oCcZnJvbeKAnSBhbmQg4oCcdG/igJ0uXG4gICAgaWYgKCAkLmlzUGxhaW5PYmplY3QoIG9uZSApICYmICQuaXNQbGFpbk9iamVjdCggdHdvICkgKSB7XG4gICAgICAgIHJldHVybiBjYWxlbmRhci5pc0RhdGVFeGFjdCggb25lLmZyb20sIHR3by5mcm9tICkgJiYgY2FsZW5kYXIuaXNEYXRlRXhhY3QoIG9uZS50bywgdHdvLnRvIClcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIHR3byBkYXRlIHVuaXRzIG92ZXJsYXAuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmlzRGF0ZU92ZXJsYXAgPSBmdW5jdGlvbiggb25lLCB0d28gKSB7XG5cbiAgICB2YXIgY2FsZW5kYXIgPSB0aGlzLFxuICAgICAgICBmaXJzdERheSA9IGNhbGVuZGFyLnNldHRpbmdzLmZpcnN0RGF5ID8gMSA6IDBcblxuICAgIC8vIFdoZW4gd2XigJlyZSB3b3JraW5nIHdpdGggYSB3ZWVrZGF5IGluZGV4LCBjb21wYXJlIHRoZSBkYXlzLlxuICAgIGlmICggXy5pc0ludGVnZXIoIG9uZSApICYmICggXy5pc0RhdGUoIHR3byApIHx8ICQuaXNBcnJheSggdHdvICkgKSApIHtcbiAgICAgICAgb25lID0gb25lICUgNyArIGZpcnN0RGF5XG4gICAgICAgIHJldHVybiBvbmUgPT09IGNhbGVuZGFyLmNyZWF0ZSggdHdvICkuZGF5ICsgMVxuICAgIH1cbiAgICBpZiAoIF8uaXNJbnRlZ2VyKCB0d28gKSAmJiAoIF8uaXNEYXRlKCBvbmUgKSB8fCAkLmlzQXJyYXkoIG9uZSApICkgKSB7XG4gICAgICAgIHR3byA9IHR3byAlIDcgKyBmaXJzdERheVxuICAgICAgICByZXR1cm4gdHdvID09PSBjYWxlbmRhci5jcmVhdGUoIG9uZSApLmRheSArIDFcbiAgICB9XG5cbiAgICAvLyBXaGVuIHdl4oCZcmUgd29ya2luZyB3aXRoIHJhbmdlIG9iamVjdHMsIGNoZWNrIGlmIHRoZSByYW5nZXMgb3ZlcmxhcC5cbiAgICBpZiAoICQuaXNQbGFpbk9iamVjdCggb25lICkgJiYgJC5pc1BsYWluT2JqZWN0KCB0d28gKSApIHtcbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyLm92ZXJsYXBSYW5nZXMoIG9uZSwgdHdvIClcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuXG4vKipcbiAqIEZsaXAgdGhlIOKAnGVuYWJsZWTigJ0gc3RhdGUuXG4gKi9cbkRhdGVQaWNrZXIucHJvdG90eXBlLmZsaXBFbmFibGUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YXIgaXRlbU9iamVjdCA9IHRoaXMuaXRlbVxuICAgIGl0ZW1PYmplY3QuZW5hYmxlID0gdmFsIHx8IChpdGVtT2JqZWN0LmVuYWJsZSA9PSAtMSA/IDEgOiAtMSlcbn1cblxuXG4vKipcbiAqIE1hcmsgYSBjb2xsZWN0aW9uIG9mIGRhdGVzIGFzIOKAnGRpc2FibGVk4oCdLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24oIHR5cGUsIGRhdGVzVG9EaXNhYmxlICkge1xuXG4gICAgdmFyIGNhbGVuZGFyID0gdGhpcyxcbiAgICAgICAgZGlzYWJsZWRJdGVtcyA9IGNhbGVuZGFyLml0ZW0uZGlzYWJsZS5zbGljZSgwKVxuXG5cbiAgICAvLyBJZiB3ZeKAmXJlIGZsaXBwaW5nLCB0aGF04oCZcyBhbGwgd2UgbmVlZCB0byBkby5cbiAgICBpZiAoIGRhdGVzVG9EaXNhYmxlID09ICdmbGlwJyApIHtcbiAgICAgICAgY2FsZW5kYXIuZmxpcEVuYWJsZSgpXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoIGRhdGVzVG9EaXNhYmxlID09PSBmYWxzZSApIHtcbiAgICAgICAgY2FsZW5kYXIuZmxpcEVuYWJsZSgxKVxuICAgICAgICBkaXNhYmxlZEl0ZW1zID0gW11cbiAgICB9XG5cbiAgICBlbHNlIGlmICggZGF0ZXNUb0Rpc2FibGUgPT09IHRydWUgKSB7XG4gICAgICAgIGNhbGVuZGFyLmZsaXBFbmFibGUoLTEpXG4gICAgICAgIGRpc2FibGVkSXRlbXMgPSBbXVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBnbyB0aHJvdWdoIHRoZSBkYXRlcyB0byBkaXNhYmxlLlxuICAgIGVsc2Uge1xuXG4gICAgICAgIGRhdGVzVG9EaXNhYmxlLm1hcChmdW5jdGlvbiggdW5pdFRvRGlzYWJsZSApIHtcblxuICAgICAgICAgICAgdmFyIG1hdGNoRm91bmRcblxuICAgICAgICAgICAgLy8gV2hlbiB3ZSBoYXZlIGRpc2FibGVkIGl0ZW1zLCBjaGVjayBmb3IgbWF0Y2hlcy5cbiAgICAgICAgICAgIC8vIElmIHNvbWV0aGluZyBpcyBtYXRjaGVkLCBpbW1lZGlhdGVseSBicmVhayBvdXQuXG4gICAgICAgICAgICBmb3IgKCB2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRpc2FibGVkSXRlbXMubGVuZ3RoOyBpbmRleCArPSAxICkge1xuICAgICAgICAgICAgICAgIGlmICggY2FsZW5kYXIuaXNEYXRlRXhhY3QoIHVuaXRUb0Rpc2FibGUsIGRpc2FibGVkSXRlbXNbaW5kZXhdICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBub3RoaW5nIHdhcyBmb3VuZCwgYWRkIHRoZSB2YWxpZGF0ZWQgdW5pdCB0byB0aGUgY29sbGVjdGlvbi5cbiAgICAgICAgICAgIGlmICggIW1hdGNoRm91bmQgKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBfLmlzSW50ZWdlciggdW5pdFRvRGlzYWJsZSApIHx8XG4gICAgICAgICAgICAgICAgICAgIF8uaXNEYXRlKCB1bml0VG9EaXNhYmxlICkgfHxcbiAgICAgICAgICAgICAgICAgICAgJC5pc0FycmF5KCB1bml0VG9EaXNhYmxlICkgfHxcbiAgICAgICAgICAgICAgICAgICAgKCAkLmlzUGxhaW5PYmplY3QoIHVuaXRUb0Rpc2FibGUgKSAmJiB1bml0VG9EaXNhYmxlLmZyb20gJiYgdW5pdFRvRGlzYWJsZS50byApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbXMucHVzaCggdW5pdFRvRGlzYWJsZSApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgdXBkYXRlZCBjb2xsZWN0aW9uLlxuICAgIHJldHVybiBkaXNhYmxlZEl0ZW1zXG59IC8vRGF0ZVBpY2tlci5wcm90b3R5cGUuZGVhY3RpdmF0ZVxuXG5cbi8qKlxuICogTWFyayBhIGNvbGxlY3Rpb24gb2YgZGF0ZXMgYXMg4oCcZW5hYmxlZOKAnS5cbiAqL1xuRGF0ZVBpY2tlci5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiggdHlwZSwgZGF0ZXNUb0VuYWJsZSApIHtcblxuICAgIHZhciBjYWxlbmRhciA9IHRoaXMsXG4gICAgICAgIGRpc2FibGVkSXRlbXMgPSBjYWxlbmRhci5pdGVtLmRpc2FibGUsXG4gICAgICAgIGRpc2FibGVkSXRlbXNDb3VudCA9IGRpc2FibGVkSXRlbXMubGVuZ3RoXG5cbiAgICAvLyBJZiB3ZeKAmXJlIGZsaXBwaW5nLCB0aGF04oCZcyBhbGwgd2UgbmVlZCB0byBkby5cbiAgICBpZiAoIGRhdGVzVG9FbmFibGUgPT0gJ2ZsaXAnICkge1xuICAgICAgICBjYWxlbmRhci5mbGlwRW5hYmxlKClcbiAgICB9XG5cbiAgICBlbHNlIGlmICggZGF0ZXNUb0VuYWJsZSA9PT0gdHJ1ZSApIHtcbiAgICAgICAgY2FsZW5kYXIuZmxpcEVuYWJsZSgxKVxuICAgICAgICBkaXNhYmxlZEl0ZW1zID0gW11cbiAgICB9XG5cbiAgICBlbHNlIGlmICggZGF0ZXNUb0VuYWJsZSA9PT0gZmFsc2UgKSB7XG4gICAgICAgIGNhbGVuZGFyLmZsaXBFbmFibGUoLTEpXG4gICAgICAgIGRpc2FibGVkSXRlbXMgPSBbXVxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSBnbyB0aHJvdWdoIHRoZSBkaXNhYmxlZCBkYXRlcy5cbiAgICBlbHNlIHtcblxuICAgICAgICBkYXRlc1RvRW5hYmxlLm1hcChmdW5jdGlvbiggdW5pdFRvRW5hYmxlICkge1xuXG4gICAgICAgICAgICB2YXIgbWF0Y2hGb3VuZCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFVuaXQsXG4gICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgaXNFeGFjdFJhbmdlXG5cbiAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggdGhlIGRpc2FibGVkIGl0ZW1zIGFuZCB0cnkgdG8gZmluZCBhIG1hdGNoLlxuICAgICAgICAgICAgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGRpc2FibGVkSXRlbXNDb3VudDsgaW5kZXggKz0gMSApIHtcblxuICAgICAgICAgICAgICAgIGRpc2FibGVkVW5pdCA9IGRpc2FibGVkSXRlbXNbaW5kZXhdXG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGFuIGV4YWN0IG1hdGNoIGlzIGZvdW5kLCByZW1vdmUgaXQgZnJvbSB0aGUgY29sbGVjdGlvbi5cbiAgICAgICAgICAgICAgICBpZiAoIGNhbGVuZGFyLmlzRGF0ZUV4YWN0KCBkaXNhYmxlZFVuaXQsIHVuaXRUb0VuYWJsZSApICkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaEZvdW5kID0gZGlzYWJsZWRJdGVtc1tpbmRleF0gPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGlzRXhhY3RSYW5nZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGFuIG92ZXJsYXBwZWQgbWF0Y2ggaXMgZm91bmQsIGFkZCB0aGUg4oCcaW52ZXJ0ZWTigJ0gc3RhdGUgdG8gaXQuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIGNhbGVuZGFyLmlzRGF0ZU92ZXJsYXAoIGRpc2FibGVkVW5pdCwgdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICggJC5pc1BsYWluT2JqZWN0KCB1bml0VG9FbmFibGUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXRUb0VuYWJsZS5pbnZlcnRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSB1bml0VG9FbmFibGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggJC5pc0FycmF5KCB1bml0VG9FbmFibGUgKSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoRm91bmQgPSB1bml0VG9FbmFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggIW1hdGNoRm91bmRbM10gKSBtYXRjaEZvdW5kLnB1c2goICdpbnZlcnRlZCcgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmlzRGF0ZSggdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEZvdW5kID0gWyB1bml0VG9FbmFibGUuZ2V0RnVsbFllYXIoKSwgdW5pdFRvRW5hYmxlLmdldE1vbnRoKCksIHVuaXRUb0VuYWJsZS5nZXREYXRlKCksICdpbnZlcnRlZCcgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBhIG1hdGNoIHdhcyBmb3VuZCwgcmVtb3ZlIGEgcHJldmlvdXMgZHVwbGljYXRlIGVudHJ5LlxuICAgICAgICAgICAgaWYgKCBtYXRjaEZvdW5kICkgZm9yICggaW5kZXggPSAwOyBpbmRleCA8IGRpc2FibGVkSXRlbXNDb3VudDsgaW5kZXggKz0gMSApIHtcbiAgICAgICAgICAgICAgICBpZiAoIGNhbGVuZGFyLmlzRGF0ZUV4YWN0KCBkaXNhYmxlZEl0ZW1zW2luZGV4XSwgdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbXNbaW5kZXhdID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSW4gdGhlIGV2ZW50IHRoYXQgd2XigJlyZSBkZWFsaW5nIHdpdGggYW4gZXhhY3QgcmFuZ2Ugb2YgZGF0ZXMsXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlcmUgYXJlIG5vIOKAnGludmVydGVk4oCdIGRhdGVzIGJlY2F1c2Ugb2YgaXQuXG4gICAgICAgICAgICBpZiAoIGlzRXhhY3RSYW5nZSApIGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBkaXNhYmxlZEl0ZW1zQ291bnQ7IGluZGV4ICs9IDEgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBjYWxlbmRhci5pc0RhdGVPdmVybGFwKCBkaXNhYmxlZEl0ZW1zW2luZGV4XSwgdW5pdFRvRW5hYmxlICkgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbXNbaW5kZXhdID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgc29tZXRoaW5nIGlzIHN0aWxsIG1hdGNoZWQsIGFkZCBpdCBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuICAgICAgICAgICAgaWYgKCBtYXRjaEZvdW5kICkge1xuICAgICAgICAgICAgICAgIGRpc2FibGVkSXRlbXMucHVzaCggbWF0Y2hGb3VuZCApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSB1cGRhdGVkIGNvbGxlY3Rpb24uXG4gICAgcmV0dXJuIGRpc2FibGVkSXRlbXMuZmlsdGVyKGZ1bmN0aW9uKCB2YWwgKSB7IHJldHVybiB2YWwgIT0gbnVsbCB9KVxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLmFjdGl2YXRlXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHRoZSBub2RlcyBpbiB0aGUgcGlja2VyLlxuICovXG5EYXRlUGlja2VyLnByb3RvdHlwZS5ub2RlcyA9IGZ1bmN0aW9uKCBpc09wZW4gKSB7XG5cbiAgICB2YXJcbiAgICAgICAgY2FsZW5kYXIgPSB0aGlzLFxuICAgICAgICBzZXR0aW5ncyA9IGNhbGVuZGFyLnNldHRpbmdzLFxuICAgICAgICBjYWxlbmRhckl0ZW0gPSBjYWxlbmRhci5pdGVtLFxuICAgICAgICBub3dPYmplY3QgPSBjYWxlbmRhckl0ZW0ubm93LFxuICAgICAgICBzZWxlY3RlZE9iamVjdCA9IGNhbGVuZGFySXRlbS5zZWxlY3QsXG4gICAgICAgIGhpZ2hsaWdodGVkT2JqZWN0ID0gY2FsZW5kYXJJdGVtLmhpZ2hsaWdodCxcbiAgICAgICAgdmlld3NldE9iamVjdCA9IGNhbGVuZGFySXRlbS52aWV3LFxuICAgICAgICBkaXNhYmxlZENvbGxlY3Rpb24gPSBjYWxlbmRhckl0ZW0uZGlzYWJsZSxcbiAgICAgICAgbWluTGltaXRPYmplY3QgPSBjYWxlbmRhckl0ZW0ubWluLFxuICAgICAgICBtYXhMaW1pdE9iamVjdCA9IGNhbGVuZGFySXRlbS5tYXgsXG5cblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGNhbGVuZGFyIHRhYmxlIGhlYWQgdXNpbmcgYSBjb3B5IG9mIHdlZWtkYXkgbGFiZWxzIGNvbGxlY3Rpb24uXG4gICAgICAgIC8vICogV2UgZG8gYSBjb3B5IHNvIHdlIGRvbid0IG11dGF0ZSB0aGUgb3JpZ2luYWwgYXJyYXkuXG4gICAgICAgIHRhYmxlSGVhZCA9IChmdW5jdGlvbiggY29sbGVjdGlvbiwgZnVsbENvbGxlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBmaXJzdCBkYXkgc2hvdWxkIGJlIE1vbmRheSwgbW92ZSBTdW5kYXkgdG8gdGhlIGVuZC5cbiAgICAgICAgICAgIGlmICggc2V0dGluZ3MuZmlyc3REYXkgKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbi5wdXNoKCBjb2xsZWN0aW9uLnNoaWZ0KCkgKVxuICAgICAgICAgICAgICAgIGZ1bGxDb2xsZWN0aW9uLnB1c2goIGZ1bGxDb2xsZWN0aW9uLnNoaWZ0KCkgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIHJldHVybiB0aGUgdGFibGUgaGVhZCBncm91cC5cbiAgICAgICAgICAgIHJldHVybiBfLm5vZGUoXG4gICAgICAgICAgICAgICAgJ3RoZWFkJyxcbiAgICAgICAgICAgICAgICBfLm5vZGUoXG4gICAgICAgICAgICAgICAgICAgICd0cicsXG4gICAgICAgICAgICAgICAgICAgIF8uZ3JvdXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBEQVlTX0lOX1dFRUsgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6ICd0aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiggY291bnRlciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uWyBjb3VudGVyIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzLndlZWtkYXlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2NvcGU9Y29sIHRpdGxlPVwiJyArIGZ1bGxDb2xsZWN0aW9uWyBjb3VudGVyIF0gKyAnXCInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgLy9lbmRyZXR1cm5cblxuICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxuICAgICAgICB9KSggKCBzZXR0aW5ncy5zaG93V2Vla2RheXNGdWxsID8gc2V0dGluZ3Mud2Vla2RheXNGdWxsIDogc2V0dGluZ3Mud2Vla2RheXNMZXR0ZXIgKS5zbGljZSggMCApLCBzZXR0aW5ncy53ZWVrZGF5c0Z1bGwuc2xpY2UoIDAgKSApLCAvL3RhYmxlSGVhZFxuXG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBuYXYgZm9yIG5leHQvcHJldiBtb250aC5cbiAgICAgICAgY3JlYXRlTW9udGhOYXYgPSBmdW5jdGlvbiggbmV4dCApIHtcblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gdGhlIGNyZWF0ZWQgbW9udGggdGFnLlxuICAgICAgICAgICAgcmV0dXJuIF8ubm9kZShcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAnICcsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3NbICduYXYnICsgKCBuZXh0ID8gJ05leHQnIDogJ1ByZXYnICkgXSArIChcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZm9jdXNlZCBtb250aCBpcyBvdXRzaWRlIHRoZSByYW5nZSwgZGlzYWJsZWQgdGhlIGJ1dHRvbi5cbiAgICAgICAgICAgICAgICAgICAgKCBuZXh0ICYmIHZpZXdzZXRPYmplY3QueWVhciA+PSBtYXhMaW1pdE9iamVjdC55ZWFyICYmIHZpZXdzZXRPYmplY3QubW9udGggPj0gbWF4TGltaXRPYmplY3QubW9udGggKSB8fFxuICAgICAgICAgICAgICAgICAgICAoICFuZXh0ICYmIHZpZXdzZXRPYmplY3QueWVhciA8PSBtaW5MaW1pdE9iamVjdC55ZWFyICYmIHZpZXdzZXRPYmplY3QubW9udGggPD0gbWluTGltaXRPYmplY3QubW9udGggKSA/XG4gICAgICAgICAgICAgICAgICAgICcgJyArIHNldHRpbmdzLmtsYXNzLm5hdkRpc2FibGVkIDogJydcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICdkYXRhLW5hdj0nICsgKCBuZXh0IHx8IC0xICkgKyAnICcgK1xuICAgICAgICAgICAgICAgIF8uYXJpYUF0dHIoe1xuICAgICAgICAgICAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IGNhbGVuZGFyLiRub2RlWzBdLmlkICsgJ190YWJsZSdcbiAgICAgICAgICAgICAgICB9KSArICcgJyArXG4gICAgICAgICAgICAgICAgJ3RpdGxlPVwiJyArIChuZXh0ID8gc2V0dGluZ3MubGFiZWxNb250aE5leHQgOiBzZXR0aW5ncy5sYWJlbE1vbnRoUHJldiApICsgJ1wiJ1xuICAgICAgICAgICAgKSAvL2VuZHJldHVyblxuICAgICAgICB9LCAvL2NyZWF0ZU1vbnRoTmF2XG5cblxuICAgICAgICAvLyBDcmVhdGUgdGhlIG1vbnRoIGxhYmVsLlxuICAgICAgICAvL01hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgIGNyZWF0ZU1vbnRoTGFiZWwgPSBmdW5jdGlvbihvdmVycmlkZSkge1xuXG4gICAgICAgICAgICB2YXIgbW9udGhzQ29sbGVjdGlvbiA9IHNldHRpbmdzLnNob3dNb250aHNTaG9ydCA/IHNldHRpbmdzLm1vbnRoc1Nob3J0IDogc2V0dGluZ3MubW9udGhzRnVsbFxuXG4gICAgICAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgICAgIGlmIChvdmVycmlkZSA9PSBcInNob3J0X21vbnRoc1wiKSB7XG4gICAgICAgICAgICAgIG1vbnRoc0NvbGxlY3Rpb24gPSBzZXR0aW5ncy5tb250aHNTaG9ydDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG1vbnRocyB0byBzZWxlY3QsIGFkZCBhIGRyb3Bkb3duIG1lbnUuXG4gICAgICAgICAgICBpZiAoIHNldHRpbmdzLnNlbGVjdE1vbnRocyAgJiYgb3ZlcnJpZGUgPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgXy5ncm91cCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDExLFxuICAgICAgICAgICAgICAgICAgICAgICAgaTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6ICdvcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIGxvb3BlZE1vbnRoICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbG9vcGVkIG1vbnRoIGFuZCBubyBjbGFzc2VzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aHNDb2xsZWN0aW9uWyBsb29wZWRNb250aCBdLCAwLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgdmFsdWUgYW5kIHNlbGVjdGVkIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWU9JyArIGxvb3BlZE1vbnRoICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB2aWV3c2V0T2JqZWN0Lm1vbnRoID09IGxvb3BlZE1vbnRoID8gJyBzZWxlY3RlZCcgOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggdmlld3NldE9iamVjdC55ZWFyID09IG1pbkxpbWl0T2JqZWN0LnllYXIgJiYgbG9vcGVkTW9udGggPCBtaW5MaW1pdE9iamVjdC5tb250aCApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCB2aWV3c2V0T2JqZWN0LnllYXIgPT0gbWF4TGltaXRPYmplY3QueWVhciAmJiBsb29wZWRNb250aCA+IG1heExpbWl0T2JqZWN0Lm1vbnRoIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBkaXNhYmxlZCcgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3Muc2VsZWN0TW9udGggKyAnIGJyb3dzZXItZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICggaXNPcGVuID8gJycgOiAnZGlzYWJsZWQnICkgKyAnICcgK1xuICAgICAgICAgICAgICAgICAgICBfLmFyaWFBdHRyKHsgY29udHJvbHM6IGNhbGVuZGFyLiRub2RlWzBdLmlkICsgJ190YWJsZScgfSkgKyAnICcgK1xuICAgICAgICAgICAgICAgICAgICAndGl0bGU9XCInICsgc2V0dGluZ3MubGFiZWxNb250aFNlbGVjdCArICdcIidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgPT0gXCJzaG9ydF9tb250aHNcIilcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3QgIT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzQ29sbGVjdGlvblsgc2VsZWN0ZWRPYmplY3QubW9udGggXTtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBtb250aHNDb2xsZWN0aW9uWyB2aWV3c2V0T2JqZWN0Lm1vbnRoIF07XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBuZWVkIGZvciBhIG1vbnRoIHNlbGVjdG9yXG4gICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnZGl2JywgbW9udGhzQ29sbGVjdGlvblsgdmlld3NldE9iamVjdC5tb250aCBdLCBzZXR0aW5ncy5rbGFzcy5tb250aCApXG4gICAgICAgIH0sIC8vY3JlYXRlTW9udGhMYWJlbFxuXG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB5ZWFyIGxhYmVsLlxuICAgICAgICAvLyBNYXRlcmlhbGl6ZSBtb2RpZmllZFxuICAgICAgICBjcmVhdGVZZWFyTGFiZWwgPSBmdW5jdGlvbihvdmVycmlkZSkge1xuXG4gICAgICAgICAgICB2YXIgZm9jdXNlZFllYXIgPSB2aWV3c2V0T2JqZWN0LnllYXIsXG5cbiAgICAgICAgICAgIC8vIElmIHllYXJzIHNlbGVjdG9yIGlzIHNldCB0byBhIGxpdGVyYWwgXCJ0cnVlXCIsIHNldCBpdCB0byA1LiBPdGhlcndpc2VcbiAgICAgICAgICAgIC8vIGRpdmlkZSBpbiBoYWxmIHRvIGdldCBoYWxmIGJlZm9yZSBhbmQgaGFsZiBhZnRlciBmb2N1c2VkIHllYXIuXG4gICAgICAgICAgICBudW1iZXJZZWFycyA9IHNldHRpbmdzLnNlbGVjdFllYXJzID09PSB0cnVlID8gNSA6IH5+KCBzZXR0aW5ncy5zZWxlY3RZZWFycyAvIDIgKVxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgeWVhcnMgdG8gc2VsZWN0LCBhZGQgYSBkcm9wZG93biBtZW51LlxuICAgICAgICAgICAgaWYgKCBudW1iZXJZZWFycyApIHtcblxuICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICAgICBtaW5ZZWFyID0gbWluTGltaXRPYmplY3QueWVhcixcbiAgICAgICAgICAgICAgICAgICAgbWF4WWVhciA9IG1heExpbWl0T2JqZWN0LnllYXIsXG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdFllYXIgPSBmb2N1c2VkWWVhciAtIG51bWJlclllYXJzLFxuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0WWVhciA9IGZvY3VzZWRZZWFyICsgbnVtYmVyWWVhcnNcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBtaW4geWVhciBpcyBncmVhdGVyIHRoYW4gdGhlIGxvd2VzdCB5ZWFyLCBpbmNyZWFzZSB0aGUgaGlnaGVzdCB5ZWFyXG4gICAgICAgICAgICAgICAgLy8gYnkgdGhlIGRpZmZlcmVuY2UgYW5kIHNldCB0aGUgbG93ZXN0IHllYXIgdG8gdGhlIG1pbiB5ZWFyLlxuICAgICAgICAgICAgICAgIGlmICggbWluWWVhciA+IGxvd2VzdFllYXIgKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlc3RZZWFyICs9IG1pblllYXIgLSBsb3dlc3RZZWFyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdFllYXIgPSBtaW5ZZWFyXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIG1heCB5ZWFyIGlzIGxlc3MgdGhhbiB0aGUgaGlnaGVzdCB5ZWFyLCBkZWNyZWFzZSB0aGUgbG93ZXN0IHllYXJcbiAgICAgICAgICAgICAgICAvLyBieSB0aGUgbG93ZXIgb2YgdGhlIHR3bzogYXZhaWxhYmxlIGFuZCBuZWVkZWQgeWVhcnMuIFRoZW4gc2V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGhpZ2hlc3QgeWVhciB0byB0aGUgbWF4IHllYXIuXG4gICAgICAgICAgICAgICAgaWYgKCBtYXhZZWFyIDwgaGlnaGVzdFllYXIgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2YWlsYWJsZVllYXJzID0gbG93ZXN0WWVhciAtIG1pblllYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZWVkZWRZZWFycyA9IGhpZ2hlc3RZZWFyIC0gbWF4WWVhclxuXG4gICAgICAgICAgICAgICAgICAgIGxvd2VzdFllYXIgLT0gYXZhaWxhYmxlWWVhcnMgPiBuZWVkZWRZZWFycyA/IG5lZWRlZFllYXJzIDogYXZhaWxhYmxlWWVhcnNcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdFllYXIgPSBtYXhZZWFyXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCBzZXR0aW5ncy5zZWxlY3RZZWFycyAgJiYgb3ZlcnJpZGUgPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZ3JvdXAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbG93ZXN0WWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IGhpZ2hlc3RZZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogJ29wdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIGxvb3BlZFllYXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBsb29wZWQgeWVhciBhbmQgbm8gY2xhc3Nlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BlZFllYXIsIDAsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgdmFsdWUgYW5kIHNlbGVjdGVkIGluZGV4LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlPScgKyBsb29wZWRZZWFyICsgKCBmb2N1c2VkWWVhciA9PSBsb29wZWRZZWFyID8gJyBzZWxlY3RlZCcgOiAnJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzLnNlbGVjdFllYXIgKyAnIGJyb3dzZXItZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAoIGlzT3BlbiA/ICcnIDogJ2Rpc2FibGVkJyApICsgJyAnICsgXy5hcmlhQXR0cih7IGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCArICdfdGFibGUnIH0pICsgJyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZT1cIicgKyBzZXR0aW5ncy5sYWJlbFllYXJTZWxlY3QgKyAnXCInXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1hdGVyaWFsaXplIG1vZGlmaWVkXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUgPT0gXCJyYXdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5ub2RlKCAnZGl2JywgZm9jdXNlZFllYXIgKVxuXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UganVzdCByZXR1cm4gdGhlIHllYXIgZm9jdXNlZFxuICAgICAgICAgICAgcmV0dXJuIF8ubm9kZSggJ2RpdicsIGZvY3VzZWRZZWFyLCBzZXR0aW5ncy5rbGFzcy55ZWFyIClcbiAgICAgICAgfSAvL2NyZWF0ZVllYXJMYWJlbFxuXG5cbiAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgY3JlYXRlRGF5TGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3QgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkT2JqZWN0LmRhdGVcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBub3dPYmplY3QuZGF0ZVxuICAgICAgICAgICAgfVxuICAgICAgICBjcmVhdGVXZWVrZGF5TGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBkaXNwbGF5X2RheTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkT2JqZWN0ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgZGlzcGxheV9kYXkgPSBzZWxlY3RlZE9iamVjdC5kYXk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGlzcGxheV9kYXkgPSBub3dPYmplY3QuZGF5O1xuICAgICAgICAgICAgdmFyIHdlZWtkYXkgPSBzZXR0aW5ncy53ZWVrZGF5c1Nob3J0WyBkaXNwbGF5X2RheSBdO1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXlcbiAgICAgICAgfVxuXG5cbiAgLy8gQ3JlYXRlIGFuZCByZXR1cm4gdGhlIGVudGlyZSBjYWxlbmRhci5cblxucmV0dXJuIF8ubm9kZShcbiAgICAgICAgLy8gRGF0ZSBwcmVzZW50YXRpb24gVmlld1xuICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICAgICAvLyBEaXYgZm9yIFllYXJcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBjcmVhdGVZZWFyTGFiZWwoXCJyYXdcIikgLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmtsYXNzLnllYXJfZGlzcGxheVxuICAgICAgICAgICAgKStcbiAgICAgICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgY3JlYXRlV2Vla2RheUxhYmVsKCkgKyAnLCAnLFxuICAgICAgICAgICAgICAgIFwicGlja2VyX193ZWVrZGF5LWRpc3BsYXlcIlxuICAgICAgICAgICAgKStcbiAgICAgICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICAgICAvLyBEaXYgZm9yIHNob3J0IE1vbnRoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIGNyZWF0ZU1vbnRoTGFiZWwoXCJzaG9ydF9tb250aHNcIikgKyAnICcsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3MubW9udGhfZGlzcGxheVxuICAgICAgICAgICAgKStcbiAgICAgICAgICAgIF8ubm9kZShcbiAgICAgICAgICAgICAgLy8gRGl2IGZvciBEYXlcbiAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICBjcmVhdGVEYXlMYWJlbCgpICxcbiAgICAgICAgICAgICAgc2V0dGluZ3Mua2xhc3MuZGF5X2Rpc3BsYXlcbiAgICAgICAgICAgICksXG4gICAgICAgIHNldHRpbmdzLmtsYXNzLmRhdGVfZGlzcGxheVxuICAgICkrXG4gICAgLy8gQ2FsZW5kYXIgY29udGFpbmVyXG4gICAgXy5ub2RlKCdkaXYnLFxuXHQgICAgXy5ub2RlKCdkaXYnLFxuXHRcdF8ubm9kZSgnZGl2Jyxcblx0XHQoIHNldHRpbmdzLnNlbGVjdFllYXJzID8gIGNyZWF0ZU1vbnRoTGFiZWwoKSArIGNyZWF0ZVllYXJMYWJlbCgpIDogY3JlYXRlTW9udGhMYWJlbCgpICsgY3JlYXRlWWVhckxhYmVsKCkgKSArXG5cdFx0Y3JlYXRlTW9udGhOYXYoKSArIGNyZWF0ZU1vbnRoTmF2KCAxICksXG5cdFx0c2V0dGluZ3Mua2xhc3MuaGVhZGVyXG5cdCAgICApICsgXy5ub2RlKFxuXHRcdCd0YWJsZScsXG5cdFx0dGFibGVIZWFkICtcblx0XHRfLm5vZGUoXG5cdFx0ICAgICd0Ym9keScsXG5cdFx0ICAgIF8uZ3JvdXAoe1xuXHRcdCAgICAgICAgbWluOiAwLFxuXHRcdCAgICAgICAgbWF4OiBXRUVLU19JTl9DQUxFTkRBUiAtIDEsXG5cdFx0ICAgICAgICBpOiAxLFxuXHRcdCAgICAgICAgbm9kZTogJ3RyJyxcblx0XHQgICAgICAgIGl0ZW06IGZ1bmN0aW9uKCByb3dDb3VudGVyICkge1xuXG5cdFx0ICAgICAgICAgICAgLy8gSWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgYW5kIHRoZSBtb250aCBzdGFydHMgb24gU3VuZGF5LCBzaGlmdCB0aGUgZGF0ZSBiYWNrIGEgd2Vlay5cblx0XHQgICAgICAgICAgICB2YXIgc2hpZnREYXRlQnkgPSBzZXR0aW5ncy5maXJzdERheSAmJiBjYWxlbmRhci5jcmVhdGUoWyB2aWV3c2V0T2JqZWN0LnllYXIsIHZpZXdzZXRPYmplY3QubW9udGgsIDEgXSkuZGF5ID09PSAwID8gLTcgOiAwXG5cblx0XHQgICAgICAgICAgICByZXR1cm4gW1xuXHRcdCAgICAgICAgICAgICAgICBfLmdyb3VwKHtcblx0XHQgICAgICAgICAgICAgICAgICAgIG1pbjogREFZU19JTl9XRUVLICogcm93Q291bnRlciAtIHZpZXdzZXRPYmplY3QuZGF5ICsgc2hpZnREYXRlQnkgKyAxLCAvLyBBZGQgMSBmb3Igd2Vla2RheSAwaW5kZXhcblx0XHQgICAgICAgICAgICAgICAgICAgIG1heDogZnVuY3Rpb24oKSB7XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWluICsgREFZU19JTl9XRUVLIC0gMVxuXHRcdCAgICAgICAgICAgICAgICAgICAgfSxcblx0XHQgICAgICAgICAgICAgICAgICAgIGk6IDEsXG5cdFx0ICAgICAgICAgICAgICAgICAgICBub2RlOiAndGQnLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24oIHRhcmdldERhdGUgKSB7XG5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSB0aW1lIGRhdGUgZnJvbSBhIHJlbGF0aXZlIGRhdGUgdG8gYSB0YXJnZXQgZGF0ZS5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlID0gY2FsZW5kYXIuY3JlYXRlKFsgdmlld3NldE9iamVjdC55ZWFyLCB2aWV3c2V0T2JqZWN0Lm1vbnRoLCB0YXJnZXREYXRlICsgKCBzZXR0aW5ncy5maXJzdERheSA/IDEgOiAwICkgXSlcblxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0gc2VsZWN0ZWRPYmplY3QgJiYgc2VsZWN0ZWRPYmplY3QucGljayA9PSB0YXJnZXREYXRlLnBpY2ssXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlnaGxpZ2h0ZWQgPSBoaWdobGlnaHRlZE9iamVjdCAmJiBoaWdobGlnaHRlZE9iamVjdC5waWNrID09IHRhcmdldERhdGUucGljayxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZCA9IGRpc2FibGVkQ29sbGVjdGlvbiAmJiBjYWxlbmRhci5kaXNhYmxlZCggdGFyZ2V0RGF0ZSApIHx8IHRhcmdldERhdGUucGljayA8IG1pbkxpbWl0T2JqZWN0LnBpY2sgfHwgdGFyZ2V0RGF0ZS5waWNrID4gbWF4TGltaXRPYmplY3QucGljayxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IF8udHJpZ2dlciggY2FsZW5kYXIuZm9ybWF0cy50b1N0cmluZywgY2FsZW5kYXIsIFsgc2V0dGluZ3MuZm9ybWF0LCB0YXJnZXREYXRlIF0gKVxuXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5ub2RlKFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXREYXRlLmRhdGUsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oIGtsYXNzZXMgKSB7XG5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGBpbmZvY3VzYCBvciBgb3V0Zm9jdXNgIGNsYXNzZXMgYmFzZWQgb24gbW9udGggaW4gdmlldy5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzc2VzLnB1c2goIHZpZXdzZXRPYmplY3QubW9udGggPT0gdGFyZ2V0RGF0ZS5tb250aCA/IHNldHRpbmdzLmtsYXNzLmluZm9jdXMgOiBzZXR0aW5ncy5rbGFzcy5vdXRmb2N1cyApXG5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIGB0b2RheWAgY2xhc3MgaWYgbmVlZGVkLlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbm93T2JqZWN0LnBpY2sgPT0gdGFyZ2V0RGF0ZS5waWNrICkge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzc2VzLnB1c2goIHNldHRpbmdzLmtsYXNzLm5vdyApXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBgc2VsZWN0ZWRgIGNsYXNzIGlmIHNvbWV0aGluZydzIHNlbGVjdGVkIGFuZCB0aGUgdGltZSBtYXRjaGVzLlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXNTZWxlY3RlZCApIHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3Nlcy5wdXNoKCBzZXR0aW5ncy5rbGFzcy5zZWxlY3RlZCApXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBgaGlnaGxpZ2h0ZWRgIGNsYXNzIGlmIHNvbWV0aGluZydzIGhpZ2hsaWdodGVkIGFuZCB0aGUgdGltZSBtYXRjaGVzLlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggaXNIaWdobGlnaHRlZCApIHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2xhc3Nlcy5wdXNoKCBzZXR0aW5ncy5rbGFzcy5oaWdobGlnaHRlZCApXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBgZGlzYWJsZWRgIGNsYXNzIGlmIHNvbWV0aGluZydzIGRpc2FibGVkIGFuZCB0aGUgb2JqZWN0IG1hdGNoZXMuXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBpc0Rpc2FibGVkICkge1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrbGFzc2VzLnB1c2goIHNldHRpbmdzLmtsYXNzLmRpc2FibGVkIClcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2xhc3Nlcy5qb2luKCAnICcgKVxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoWyBzZXR0aW5ncy5rbGFzcy5kYXkgXSksXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1waWNrPScgKyB0YXJnZXREYXRlLnBpY2sgKyAnICcgKyBfLmFyaWFBdHRyKHtcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiAnZ3JpZGNlbGwnLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmb3JtYXR0ZWREYXRlLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpc1NlbGVjdGVkICYmIGNhbGVuZGFyLiRub2RlLnZhbCgpID09PSBmb3JtYXR0ZWREYXRlID8gdHJ1ZSA6IG51bGwsXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlZGVzY2VuZGFudDogaXNIaWdobGlnaHRlZCA/IHRydWUgOiBudWxsLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkID8gdHJ1ZSA6IG51bGxcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICsgJyAnICsgKGlzRGlzYWJsZWQgPyAnJyA6ICd0YWJpbmRleD1cIjBcIicpXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmFyaWFBdHRyKHsgcm9sZTogJ3ByZXNlbnRhdGlvbicgfSlcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBdIC8vZW5kcmV0dXJuXG5cdFx0ICAgICAgICAgICAgICAgICAgICB9XG5cdFx0ICAgICAgICAgICAgICAgIH0pXG5cdFx0ICAgICAgICAgICAgXSAvL2VuZHJldHVyblxuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9KVxuXHRcdCksXG5cdFx0c2V0dGluZ3Mua2xhc3MudGFibGUsXG5cdFx0J2lkPVwiJyArIGNhbGVuZGFyLiRub2RlWzBdLmlkICsgJ190YWJsZScgKyAnXCIgJyArIF8uYXJpYUF0dHIoe1xuXHRcdCAgICByb2xlOiAnZ3JpZCcsXG5cdFx0ICAgIGNvbnRyb2xzOiBjYWxlbmRhci4kbm9kZVswXS5pZCxcblx0XHQgICAgcmVhZG9ubHk6IHRydWVcblx0XHR9KVxuXHQgICAgKVxuXHQgICAgLCBzZXR0aW5ncy5rbGFzcy5jYWxlbmRhcl9jb250YWluZXIpIC8vIGVuZCBjYWxlbmRhclxuXG5cdCAgICAgK1xuXG5cdCAgICAvLyAqIEZvciBGaXJlZm94IGZvcm1zIHRvIHN1Ym1pdCwgbWFrZSBzdXJlIHRvIHNldCB0aGUgYnV0dG9uc+KAmSBgdHlwZWAgYXR0cmlidXRlcyBhcyDigJxidXR0b27igJ0uXG5cdCAgICBfLm5vZGUoXG5cdFx0J2RpdicsXG5cdFx0Xy5ub2RlKCAnYnV0dG9uJywgc2V0dGluZ3MudG9kYXksIFwiYnRuLWZsYXQgcGlja2VyX190b2RheSB3YXZlcy1lZmZlY3RcIixcblx0XHQgICAgJ3R5cGU9YnV0dG9uIGRhdGEtcGljaz0nICsgbm93T2JqZWN0LnBpY2sgK1xuXHRcdCAgICAoIGlzT3BlbiAmJiAhY2FsZW5kYXIuZGlzYWJsZWQobm93T2JqZWN0KSA/ICcnIDogJyBkaXNhYmxlZCcgKSArICcgJyArXG5cdFx0ICAgIF8uYXJpYUF0dHIoeyBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgfSkgKSArXG5cdFx0Xy5ub2RlKCAnYnV0dG9uJywgc2V0dGluZ3MuY2xlYXIsIFwiYnRuLWZsYXQgcGlja2VyX19jbGVhciB3YXZlcy1lZmZlY3RcIixcblx0XHQgICAgJ3R5cGU9YnV0dG9uIGRhdGEtY2xlYXI9MScgK1xuXHRcdCAgICAoIGlzT3BlbiA/ICcnIDogJyBkaXNhYmxlZCcgKSArICcgJyArXG5cdFx0ICAgIF8uYXJpYUF0dHIoeyBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgfSkgKSArXG5cdFx0Xy5ub2RlKCdidXR0b24nLCBzZXR0aW5ncy5jbG9zZSwgXCJidG4tZmxhdCBwaWNrZXJfX2Nsb3NlIHdhdmVzLWVmZmVjdFwiLFxuXHRcdCAgICAndHlwZT1idXR0b24gZGF0YS1jbG9zZT10cnVlICcgK1xuXHRcdCAgICAoIGlzT3BlbiA/ICcnIDogJyBkaXNhYmxlZCcgKSArICcgJyArXG5cdFx0ICAgIF8uYXJpYUF0dHIoeyBjb250cm9sczogY2FsZW5kYXIuJG5vZGVbMF0uaWQgfSkgKSxcblx0XHRzZXR0aW5ncy5rbGFzcy5mb290ZXJcblx0ICAgICksICdwaWNrZXJfX2NvbnRhaW5lcl9fd3JhcHBlcidcblx0KSAvL2VuZHJldHVyblxufSAvL0RhdGVQaWNrZXIucHJvdG90eXBlLm5vZGVzXG5cblxuXG5cbi8qKlxuICogVGhlIGRhdGUgcGlja2VyIGRlZmF1bHRzLlxuICovXG5EYXRlUGlja2VyLmRlZmF1bHRzID0gKGZ1bmN0aW9uKCBwcmVmaXggKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIC8vIFRoZSB0aXRsZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBtb250aCBuYXYgYnV0dG9uc1xuICAgICAgICBsYWJlbE1vbnRoTmV4dDogJ05leHQgbW9udGgnLFxuICAgICAgICBsYWJlbE1vbnRoUHJldjogJ1ByZXZpb3VzIG1vbnRoJyxcblxuICAgICAgICAvLyBUaGUgdGl0bGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgZHJvcGRvd24gc2VsZWN0b3JzXG4gICAgICAgIGxhYmVsTW9udGhTZWxlY3Q6ICdTZWxlY3QgYSBtb250aCcsXG4gICAgICAgIGxhYmVsWWVhclNlbGVjdDogJ1NlbGVjdCBhIHllYXInLFxuXG4gICAgICAgIC8vIE1vbnRocyBhbmQgd2Vla2RheXNcbiAgICAgICAgbW9udGhzRnVsbDogWyAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcicgXSxcbiAgICAgICAgbW9udGhzU2hvcnQ6IFsgJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJyBdLFxuICAgICAgICB3ZWVrZGF5c0Z1bGw6IFsgJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5JyBdLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiBbICdTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnIF0sXG5cbiAgICAgICAgLy8gTWF0ZXJpYWxpemUgbW9kaWZpZWRcbiAgICAgICAgd2Vla2RheXNMZXR0ZXI6IFsgJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnIF0sXG5cbiAgICAgICAgLy8gVG9kYXkgYW5kIGNsZWFyXG4gICAgICAgIHRvZGF5OiAnVG9kYXknLFxuICAgICAgICBjbGVhcjogJ0NsZWFyJyxcbiAgICAgICAgY2xvc2U6ICdPaycsXG5cbiAgICAgICAgLy8gUGlja2VyIGNsb3NlIGJlaGF2aW9yIChQcmV2ZW50IGEgY2hhbmdlIGluIGJlaGF2aW91ciBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpXG4gICAgICAgIGNsb3NlT25TZWxlY3Q6IGZhbHNlLFxuXG4gICAgICAgIC8vIFRoZSBmb3JtYXQgdG8gc2hvdyBvbiB0aGUgYGlucHV0YCBlbGVtZW50XG4gICAgICAgIGZvcm1hdDogJ2QgbW1tbSwgeXl5eScsXG5cbiAgICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgICBrbGFzczoge1xuXG4gICAgICAgICAgICB0YWJsZTogcHJlZml4ICsgJ3RhYmxlJyxcblxuICAgICAgICAgICAgaGVhZGVyOiBwcmVmaXggKyAnaGVhZGVyJyxcblxuXG4gICAgICAgICAgICAvLyBNYXRlcmlhbGl6ZSBBZGRlZCBrbGFzc2VzXG4gICAgICAgICAgICBkYXRlX2Rpc3BsYXk6IHByZWZpeCArICdkYXRlLWRpc3BsYXknLFxuICAgICAgICAgICAgZGF5X2Rpc3BsYXk6IHByZWZpeCArICdkYXktZGlzcGxheScsXG4gICAgICAgICAgICBtb250aF9kaXNwbGF5OiBwcmVmaXggKyAnbW9udGgtZGlzcGxheScsXG4gICAgICAgICAgICB5ZWFyX2Rpc3BsYXk6IHByZWZpeCArICd5ZWFyLWRpc3BsYXknLFxuICAgICAgICAgICAgY2FsZW5kYXJfY29udGFpbmVyOiBwcmVmaXggKyAnY2FsZW5kYXItY29udGFpbmVyJyxcbiAgICAgICAgICAgIC8vIGVuZFxuXG5cblxuICAgICAgICAgICAgbmF2UHJldjogcHJlZml4ICsgJ25hdi0tcHJldicsXG4gICAgICAgICAgICBuYXZOZXh0OiBwcmVmaXggKyAnbmF2LS1uZXh0JyxcbiAgICAgICAgICAgIG5hdkRpc2FibGVkOiBwcmVmaXggKyAnbmF2LS1kaXNhYmxlZCcsXG5cbiAgICAgICAgICAgIG1vbnRoOiBwcmVmaXggKyAnbW9udGgnLFxuICAgICAgICAgICAgeWVhcjogcHJlZml4ICsgJ3llYXInLFxuXG4gICAgICAgICAgICBzZWxlY3RNb250aDogcHJlZml4ICsgJ3NlbGVjdC0tbW9udGgnLFxuICAgICAgICAgICAgc2VsZWN0WWVhcjogcHJlZml4ICsgJ3NlbGVjdC0teWVhcicsXG5cbiAgICAgICAgICAgIHdlZWtkYXlzOiBwcmVmaXggKyAnd2Vla2RheScsXG5cbiAgICAgICAgICAgIGRheTogcHJlZml4ICsgJ2RheScsXG4gICAgICAgICAgICBkaXNhYmxlZDogcHJlZml4ICsgJ2RheS0tZGlzYWJsZWQnLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHByZWZpeCArICdkYXktLXNlbGVjdGVkJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkOiBwcmVmaXggKyAnZGF5LS1oaWdobGlnaHRlZCcsXG4gICAgICAgICAgICBub3c6IHByZWZpeCArICdkYXktLXRvZGF5JyxcbiAgICAgICAgICAgIGluZm9jdXM6IHByZWZpeCArICdkYXktLWluZm9jdXMnLFxuICAgICAgICAgICAgb3V0Zm9jdXM6IHByZWZpeCArICdkYXktLW91dGZvY3VzJyxcblxuICAgICAgICAgICAgZm9vdGVyOiBwcmVmaXggKyAnZm9vdGVyJyxcblxuICAgICAgICAgICAgYnV0dG9uQ2xlYXI6IHByZWZpeCArICdidXR0b24tLWNsZWFyJyxcbiAgICAgICAgICAgIGJ1dHRvblRvZGF5OiBwcmVmaXggKyAnYnV0dG9uLS10b2RheScsXG4gICAgICAgICAgICBidXR0b25DbG9zZTogcHJlZml4ICsgJ2J1dHRvbi0tY2xvc2UnXG4gICAgICAgIH1cbiAgICB9XG59KSggUGlja2VyLmtsYXNzZXMoKS5waWNrZXIgKyAnX18nIClcblxuXG5cblxuXG4vKipcbiAqIEV4dGVuZCB0aGUgcGlja2VyIHRvIGFkZCB0aGUgZGF0ZSBwaWNrZXIuXG4gKi9cblBpY2tlci5leHRlbmQoICdwaWNrYWRhdGUnLCBEYXRlUGlja2VyIClcblxuXG59KSk7XG4iLCIvKiFcbiAqIENsb2NrUGlja2VyIHYwLjAuNyAoaHR0cDovL3dlYXJlb3V0bWFuLmdpdGh1Yi5pby9jbG9ja3BpY2tlci8pXG4gKiBDb3B5cmlnaHQgMjAxNCBXYW5nIFNoZW53ZWkuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWFyZW91dG1hbi9jbG9ja3BpY2tlci9ibG9iL2doLXBhZ2VzL0xJQ0VOU0UpXG4gKlxuICogRnVydGhlciBtb2RpZmllZFxuICogQ29weXJpZ2h0IDIwMTUgQ2hpbmcgWWF3IEhhby5cbiAqL1xuXG4oZnVuY3Rpb24oKXtcblx0dmFyICQgPSB3aW5kb3cualF1ZXJ5LFxuXHRcdFx0JHdpbiA9ICQod2luZG93KSxcblx0XHRcdCRkb2MgPSAkKGRvY3VtZW50KTtcblxuXHQvLyBDYW4gSSB1c2UgaW5saW5lIHN2ZyA/XG5cdHZhciBzdmdOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cdFx0ICBzdmdTdXBwb3J0ZWQgPSAnU1ZHQW5nbGUnIGluIHdpbmRvdyAmJiAoZnVuY3Rpb24oKSB7XG5cdFx0XHQgIHZhciBzdXBwb3J0ZWQsXG5cdFx0XHRcdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGVsLmlubmVySFRNTCA9ICc8c3ZnLz4nO1xuXHRcdFx0XHRzdXBwb3J0ZWQgPSAoZWwuZmlyc3RDaGlsZCAmJiBlbC5maXJzdENoaWxkLm5hbWVzcGFjZVVSSSkgPT0gc3ZnTlM7XG5cdFx0XHRcdGVsLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0XHRyZXR1cm4gc3VwcG9ydGVkO1xuXHRcdFx0fSkoKTtcblxuXHQvLyBDYW4gSSB1c2UgdHJhbnNpdGlvbiA/XG5cdHZhciB0cmFuc2l0aW9uU3VwcG9ydGVkID0gKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuXHRcdHJldHVybiAndHJhbnNpdGlvbicgaW4gc3R5bGUgfHxcblx0XHRcdFx0XHQgJ1dlYmtpdFRyYW5zaXRpb24nIGluIHN0eWxlIHx8XG5cdFx0XHRcdCAgICdNb3pUcmFuc2l0aW9uJyBpbiBzdHlsZSB8fFxuXHRcdFx0XHRcdCAnbXNUcmFuc2l0aW9uJyBpbiBzdHlsZSB8fFxuXHRcdFx0XHRcdCAnT1RyYW5zaXRpb24nIGluIHN0eWxlO1xuXHR9KSgpO1xuXG5cdC8vIExpc3RlbiB0b3VjaCBldmVudHMgaW4gdG91Y2ggc2NyZWVuIGRldmljZSwgaW5zdGVhZCBvZiBtb3VzZSBldmVudHMgaW4gZGVza3RvcC5cblx0dmFyIHRvdWNoU3VwcG9ydGVkID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93LFxuXHRcdFx0bW91c2Vkb3duRXZlbnQgPSAnbW91c2Vkb3duJyArICggdG91Y2hTdXBwb3J0ZWQgPyAnIHRvdWNoc3RhcnQnIDogJycpLFxuXHRcdFx0bW91c2Vtb3ZlRXZlbnQgPSAnbW91c2Vtb3ZlLmNsb2NrcGlja2VyJyArICggdG91Y2hTdXBwb3J0ZWQgPyAnIHRvdWNobW92ZS5jbG9ja3BpY2tlcicgOiAnJyksXG5cdFx0XHRtb3VzZXVwRXZlbnQgPSAnbW91c2V1cC5jbG9ja3BpY2tlcicgKyAoIHRvdWNoU3VwcG9ydGVkID8gJyB0b3VjaGVuZC5jbG9ja3BpY2tlcicgOiAnJyk7XG5cblx0Ly8gVmlicmF0ZSB0aGUgZGV2aWNlIGlmIHN1cHBvcnRlZFxuXHR2YXIgdmlicmF0ZSA9IG5hdmlnYXRvci52aWJyYXRlID8gJ3ZpYnJhdGUnIDogbmF2aWdhdG9yLndlYmtpdFZpYnJhdGUgPyAnd2Via2l0VmlicmF0ZScgOiBudWxsO1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZVN2Z0VsZW1lbnQobmFtZSkge1xuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIG5hbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gbGVhZGluZ1plcm8obnVtKSB7XG5cdFx0cmV0dXJuIChudW0gPCAxMCA/ICcwJyA6ICcnKSArIG51bTtcblx0fVxuXG5cdC8vIEdldCBhIHVuaXF1ZSBpZFxuXHR2YXIgaWRDb3VudGVyID0gMDtcblx0ZnVuY3Rpb24gdW5pcXVlSWQocHJlZml4KSB7XG5cdFx0dmFyIGlkID0gKytpZENvdW50ZXIgKyAnJztcblx0XHRyZXR1cm4gcHJlZml4ID8gcHJlZml4ICsgaWQgOiBpZDtcblx0fVxuXG5cdC8vIENsb2NrIHNpemVcblx0dmFyIGRpYWxSYWRpdXMgPSAxMzUsXG5cdFx0XHRvdXRlclJhZGl1cyA9IDEwNSxcblx0XHRcdC8vIGlubmVyUmFkaXVzID0gODAgb24gMTIgaG91ciBjbG9ja1xuXHRcdFx0aW5uZXJSYWRpdXMgPSA4MCxcblx0XHRcdHRpY2tSYWRpdXMgPSAyMCxcblx0XHRcdGRpYW1ldGVyID0gZGlhbFJhZGl1cyAqIDIsXG5cdFx0XHRkdXJhdGlvbiA9IHRyYW5zaXRpb25TdXBwb3J0ZWQgPyAzNTAgOiAxO1xuXG5cdC8vIFBvcG92ZXIgdGVtcGxhdGVcblx0dmFyIHRwbCA9IFtcblx0XHQnPGRpdiBjbGFzcz1cImNsb2NrcGlja2VyIHBpY2tlclwiPicsXG5cdFx0XHQnPGRpdiBjbGFzcz1cInBpY2tlcl9faG9sZGVyXCI+Jyxcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJwaWNrZXJfX2ZyYW1lXCI+Jyxcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInBpY2tlcl9fd3JhcFwiPicsXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInBpY2tlcl9fYm94XCI+Jyxcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJwaWNrZXJfX2RhdGUtZGlzcGxheVwiPicsXG5cdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJjbG9ja3BpY2tlci1kaXNwbGF5XCI+Jyxcblx0XHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiY2xvY2twaWNrZXItZGlzcGxheS1jb2x1bW5cIj4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJjbG9ja3BpY2tlci1zcGFuLWhvdXJzIHRleHQtcHJpbWFyeVwiPjwvc3Bhbj4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnOicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cImNsb2NrcGlja2VyLXNwYW4tbWludXRlc1wiPjwvc3Bhbj4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXG5cdFx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImNsb2NrcGlja2VyLWRpc3BsYXktY29sdW1uIGNsb2NrcGlja2VyLWRpc3BsYXktYW0tcG1cIj4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImNsb2NrcGlja2VyLXNwYW4tYW0tcG1cIj48L2Rpdj4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXG5cdFx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nLFxuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInBpY2tlcl9fY29udGFpbmVyX193cmFwcGVyXCI+Jyxcblx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInBpY2tlcl9fY2FsZW5kYXItY29udGFpbmVyXCI+Jyxcblx0XHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiY2xvY2twaWNrZXItcGxhdGVcIj4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImNsb2NrcGlja2VyLWNhbnZhc1wiPjwvZGl2PicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiY2xvY2twaWNrZXItZGlhbCBjbG9ja3BpY2tlci1ob3Vyc1wiPjwvZGl2PicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiY2xvY2twaWNrZXItZGlhbCBjbG9ja3BpY2tlci1taW51dGVzIGNsb2NrcGlja2VyLWRpYWwtb3V0XCI+PC9kaXY+Jyxcblx0XHRcdFx0XHRcdFx0XHRcdCc8L2Rpdj4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJjbG9ja3BpY2tlci1hbS1wbS1ibG9ja1wiPicsXG5cdFx0XHRcdFx0XHRcdFx0XHQnPC9kaXY+Jyxcblx0XHRcdFx0XHRcdFx0XHQnPC9kaXY+Jyxcblx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInBpY2tlcl9fZm9vdGVyXCI+Jyxcblx0XHRcdFx0XHRcdFx0XHQnPC9kaXY+Jyxcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXG5cdFx0XHRcdFx0XHQnPC9kaXY+Jyxcblx0XHRcdFx0XHQnPC9kaXY+Jyxcblx0XHRcdFx0JzwvZGl2PicsXG5cdFx0XHQnPC9kaXY+Jyxcblx0XHQnPC9kaXY+J1xuXHRdLmpvaW4oJycpO1xuXG5cdC8vIENsb2NrUGlja2VyXG5cdGZ1bmN0aW9uIENsb2NrUGlja2VyKGVsZW1lbnQsIG9wdGlvbnMpIHtcblx0XHR2YXIgcG9wb3ZlciA9ICQodHBsKSxcblx0XHRcdFx0cGxhdGUgPSBwb3BvdmVyLmZpbmQoJy5jbG9ja3BpY2tlci1wbGF0ZScpLFxuXHRcdFx0XHRob2xkZXIgPSBwb3BvdmVyLmZpbmQoJy5waWNrZXJfX2hvbGRlcicpLFxuXHRcdFx0XHRob3Vyc1ZpZXcgPSBwb3BvdmVyLmZpbmQoJy5jbG9ja3BpY2tlci1ob3VycycpLFxuXHRcdFx0XHRtaW51dGVzVmlldyA9IHBvcG92ZXIuZmluZCgnLmNsb2NrcGlja2VyLW1pbnV0ZXMnKSxcblx0XHRcdFx0YW1QbUJsb2NrID0gcG9wb3Zlci5maW5kKCcuY2xvY2twaWNrZXItYW0tcG0tYmxvY2snKSxcblx0XHRcdFx0aXNJbnB1dCA9IGVsZW1lbnQucHJvcCgndGFnTmFtZScpID09PSAnSU5QVVQnLFxuXHRcdFx0XHRpbnB1dCA9IGlzSW5wdXQgPyBlbGVtZW50IDogZWxlbWVudC5maW5kKCdpbnB1dCcpLFxuXHRcdFx0XHRsYWJlbCA9ICQoXCJsYWJlbFtmb3I9XCIgKyBpbnB1dC5hdHRyKFwiaWRcIikgKyBcIl1cIiksXG5cdFx0XHRcdHNlbGYgPSB0aGlzO1xuXG5cdFx0dGhpcy5pZCA9IHVuaXF1ZUlkKCdjcCcpO1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0dGhpcy5ob2xkZXIgPSBob2xkZXI7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLmlzQXBwZW5kZWQgPSBmYWxzZTtcblx0XHR0aGlzLmlzU2hvd24gPSBmYWxzZTtcblx0XHR0aGlzLmN1cnJlbnRWaWV3ID0gJ2hvdXJzJztcblx0XHR0aGlzLmlzSW5wdXQgPSBpc0lucHV0O1xuXHRcdHRoaXMuaW5wdXQgPSBpbnB1dDtcblx0XHR0aGlzLmxhYmVsID0gbGFiZWw7XG5cdFx0dGhpcy5wb3BvdmVyID0gcG9wb3Zlcjtcblx0XHR0aGlzLnBsYXRlID0gcGxhdGU7XG5cdFx0dGhpcy5ob3Vyc1ZpZXcgPSBob3Vyc1ZpZXc7XG5cdFx0dGhpcy5taW51dGVzVmlldyA9IG1pbnV0ZXNWaWV3O1xuXHRcdHRoaXMuYW1QbUJsb2NrID0gYW1QbUJsb2NrO1xuXHRcdHRoaXMuc3BhbkhvdXJzID0gcG9wb3Zlci5maW5kKCcuY2xvY2twaWNrZXItc3Bhbi1ob3VycycpO1xuXHRcdHRoaXMuc3Bhbk1pbnV0ZXMgPSBwb3BvdmVyLmZpbmQoJy5jbG9ja3BpY2tlci1zcGFuLW1pbnV0ZXMnKTtcblx0XHR0aGlzLnNwYW5BbVBtID0gcG9wb3Zlci5maW5kKCcuY2xvY2twaWNrZXItc3Bhbi1hbS1wbScpO1xuXHRcdHRoaXMuZm9vdGVyID0gcG9wb3Zlci5maW5kKCcucGlja2VyX19mb290ZXInKTtcblx0XHR0aGlzLmFtT3JQbSA9IFwiUE1cIjtcblxuXHRcdC8vIFNldHVwIGZvciBmb3IgMTIgaG91ciBjbG9jayBpZiBvcHRpb24gaXMgc2VsZWN0ZWRcblx0XHRpZiAob3B0aW9ucy50d2VsdmVob3VyKSB7XG5cdFx0XHRpZiAoIW9wdGlvbnMuYW1wbWNsaWNrYWJsZSkge1xuXHRcdFx0XHR0aGlzLnNwYW5BbVBtLmVtcHR5KCk7XG5cdFx0XHRcdCQoJzxkaXYgaWQ9XCJjbGljay1hbVwiPkFNPC9kaXY+JykuYXBwZW5kVG8odGhpcy5zcGFuQW1QbSk7XG5cdFx0XHRcdCQoJzxkaXYgaWQ9XCJjbGljay1wbVwiPlBNPC9kaXY+JykuYXBwZW5kVG8odGhpcy5zcGFuQW1QbSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5zcGFuQW1QbS5lbXB0eSgpO1xuXHRcdFx0XHQkKCc8ZGl2IGlkPVwiY2xpY2stYW1cIj5BTTwvZGl2PicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c2VsZi5zcGFuQW1QbS5jaGlsZHJlbignI2NsaWNrLWFtJykuYWRkQ2xhc3MoXCJ0ZXh0LXByaW1hcnlcIik7XG5cdFx0XHRcdFx0c2VsZi5zcGFuQW1QbS5jaGlsZHJlbignI2NsaWNrLXBtJykucmVtb3ZlQ2xhc3MoXCJ0ZXh0LXByaW1hcnlcIik7XG5cdFx0XHRcdFx0c2VsZi5hbU9yUG0gPSBcIkFNXCI7XG5cdFx0XHRcdH0pLmFwcGVuZFRvKHRoaXMuc3BhbkFtUG0pO1xuXHRcdFx0XHQkKCc8ZGl2IGlkPVwiY2xpY2stcG1cIj5QTTwvZGl2PicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0c2VsZi5zcGFuQW1QbS5jaGlsZHJlbignI2NsaWNrLXBtJykuYWRkQ2xhc3MoXCJ0ZXh0LXByaW1hcnlcIik7XG5cdFx0XHRcdFx0c2VsZi5zcGFuQW1QbS5jaGlsZHJlbignI2NsaWNrLWFtJykucmVtb3ZlQ2xhc3MoXCJ0ZXh0LXByaW1hcnlcIik7XG5cdFx0XHRcdFx0c2VsZi5hbU9yUG0gPSAnUE0nO1xuXHRcdFx0XHR9KS5hcHBlbmRUbyh0aGlzLnNwYW5BbVBtKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBZGQgYnV0dG9ucyB0byBmb290ZXJcblx0XHQkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1mbGF0IHBpY2tlcl9fY2xlYXJcIiB0YWJpbmRleD1cIicgKyAob3B0aW9ucy50d2VsdmVob3VyPyAnMycgOiAnMScpICsgJ1wiPicgKyBvcHRpb25zLmNsZWFydGV4dCArICc8L2J1dHRvbj4nKS5jbGljaygkLnByb3h5KHRoaXMuY2xlYXIsIHRoaXMpKS5hcHBlbmRUbyh0aGlzLmZvb3Rlcik7XG5cdFx0JCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tZmxhdCBwaWNrZXJfX2Nsb3NlXCIgdGFiaW5kZXg9XCInICsgKG9wdGlvbnMudHdlbHZlaG91cj8gJzMnIDogJzEnKSArICdcIj4nICsgb3B0aW9ucy5jYW5jZWx0ZXh0ICsgJzwvYnV0dG9uPicpLmNsaWNrKCQucHJveHkodGhpcy5oaWRlLCB0aGlzKSkuYXBwZW5kVG8odGhpcy5mb290ZXIpO1xuXHRcdCQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWZsYXQgcGlja2VyX19jbG9zZVwiIHRhYmluZGV4PVwiJyArIChvcHRpb25zLnR3ZWx2ZWhvdXI/ICczJyA6ICcxJykgKyAnXCI+JyArIG9wdGlvbnMuZG9uZXRleHQgKyAnPC9idXR0b24+JykuY2xpY2soJC5wcm94eSh0aGlzLmRvbmUsIHRoaXMpKS5hcHBlbmRUbyh0aGlzLmZvb3Rlcik7XG5cblx0XHR0aGlzLnNwYW5Ib3Vycy5jbGljaygkLnByb3h5KHRoaXMudG9nZ2xlVmlldywgdGhpcywgJ2hvdXJzJykpO1xuXHRcdHRoaXMuc3Bhbk1pbnV0ZXMuY2xpY2soJC5wcm94eSh0aGlzLnRvZ2dsZVZpZXcsIHRoaXMsICdtaW51dGVzJykpO1xuXG5cdFx0Ly8gU2hvdyBvciB0b2dnbGVcblx0XHRpbnB1dC5vbignZm9jdXMuY2xvY2twaWNrZXIgY2xpY2suY2xvY2twaWNrZXInLCAkLnByb3h5KHRoaXMuc2hvdywgdGhpcykpO1xuXG5cdFx0Ly8gQnVpbGQgdGlja3Ncblx0XHR2YXIgdGlja1RwbCA9ICQoJzxkaXYgY2xhc3M9XCJjbG9ja3BpY2tlci10aWNrXCI+PC9kaXY+JyksXG5cdFx0XHRcdGksIHRpY2ssIHJhZGlhbiwgcmFkaXVzO1xuXG5cdFx0Ly8gSG91cnMgdmlld1xuXHRcdGlmIChvcHRpb25zLnR3ZWx2ZWhvdXIpIHtcblx0XHRcdGZvciAoaSA9IDE7IGkgPCAxMzsgaSArPSAxKSB7XG5cdFx0XHRcdHRpY2sgPSB0aWNrVHBsLmNsb25lKCk7XG5cdFx0XHRcdHJhZGlhbiA9IGkgLyA2ICogTWF0aC5QSTtcblx0XHRcdFx0cmFkaXVzID0gb3V0ZXJSYWRpdXM7XG5cdFx0XHRcdHRpY2suY3NzKHtcblx0XHRcdFx0XHRsZWZ0OiBkaWFsUmFkaXVzICsgTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyAtIHRpY2tSYWRpdXMsXG5cdFx0XHRcdFx0dG9wOiBkaWFsUmFkaXVzIC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyAtIHRpY2tSYWRpdXNcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRpY2suaHRtbChpID09PSAwID8gJzAwJyA6IGkpO1xuXHRcdFx0XHRob3Vyc1ZpZXcuYXBwZW5kKHRpY2spO1xuXHRcdFx0XHR0aWNrLm9uKG1vdXNlZG93bkV2ZW50LCBtb3VzZWRvd24pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkge1xuXHRcdFx0XHR0aWNrID0gdGlja1RwbC5jbG9uZSgpO1xuXHRcdFx0XHRyYWRpYW4gPSBpIC8gNiAqIE1hdGguUEk7XG5cdFx0XHRcdHZhciBpbm5lciA9IGkgPiAwICYmIGkgPCAxMztcblx0XHRcdFx0cmFkaXVzID0gaW5uZXIgPyBpbm5lclJhZGl1cyA6IG91dGVyUmFkaXVzO1xuXHRcdFx0XHR0aWNrLmNzcyh7XG5cdFx0XHRcdFx0bGVmdDogZGlhbFJhZGl1cyArIE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMgLSB0aWNrUmFkaXVzLFxuXHRcdFx0XHRcdHRvcDogZGlhbFJhZGl1cyAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXMgLSB0aWNrUmFkaXVzXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aWNrLmh0bWwoaSA9PT0gMCA/ICcwMCcgOiBpKTtcblx0XHRcdFx0aG91cnNWaWV3LmFwcGVuZCh0aWNrKTtcblx0XHRcdFx0dGljay5vbihtb3VzZWRvd25FdmVudCwgbW91c2Vkb3duKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBNaW51dGVzIHZpZXdcblx0XHRmb3IgKGkgPSAwOyBpIDwgNjA7IGkgKz0gNSkge1xuXHRcdFx0dGljayA9IHRpY2tUcGwuY2xvbmUoKTtcblx0XHRcdHJhZGlhbiA9IGkgLyAzMCAqIE1hdGguUEk7XG5cdFx0XHR0aWNrLmNzcyh7XG5cdFx0XHRcdGxlZnQ6IGRpYWxSYWRpdXMgKyBNYXRoLnNpbihyYWRpYW4pICogb3V0ZXJSYWRpdXMgLSB0aWNrUmFkaXVzLFxuXHRcdFx0XHR0b3A6IGRpYWxSYWRpdXMgLSBNYXRoLmNvcyhyYWRpYW4pICogb3V0ZXJSYWRpdXMgLSB0aWNrUmFkaXVzXG5cdFx0XHR9KTtcblx0XHRcdHRpY2suaHRtbChsZWFkaW5nWmVybyhpKSk7XG5cdFx0XHRtaW51dGVzVmlldy5hcHBlbmQodGljayk7XG5cdFx0XHR0aWNrLm9uKG1vdXNlZG93bkV2ZW50LCBtb3VzZWRvd24pO1xuXHRcdH1cblxuXHRcdC8vIENsaWNraW5nIG9uIG1pbnV0ZXMgdmlldyBzcGFjZVxuXHRcdHBsYXRlLm9uKG1vdXNlZG93bkV2ZW50LCBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAoJChlLnRhcmdldCkuY2xvc2VzdCgnLmNsb2NrcGlja2VyLXRpY2snKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0bW91c2Vkb3duKGUsIHRydWUpO1xuICAgICAgfVxuXHRcdH0pO1xuXG5cdFx0Ly8gTW91c2Vkb3duIG9yIHRvdWNoc3RhcnRcblx0XHRmdW5jdGlvbiBtb3VzZWRvd24oZSwgc3BhY2UpIHtcblx0XHRcdHZhciBvZmZzZXQgPSBwbGF0ZS5vZmZzZXQoKSxcblx0XHRcdFx0XHRpc1RvdWNoID0gL150b3VjaC8udGVzdChlLnR5cGUpLFxuXHRcdFx0XHRcdHgwID0gb2Zmc2V0LmxlZnQgKyBkaWFsUmFkaXVzLFxuXHRcdFx0XHRcdHkwID0gb2Zmc2V0LnRvcCArIGRpYWxSYWRpdXMsXG5cdFx0XHRcdFx0ZHggPSAoaXNUb3VjaCA/IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIDogZSkucGFnZVggLSB4MCxcblx0XHRcdFx0XHRkeSA9IChpc1RvdWNoID8gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0gOiBlKS5wYWdlWSAtIHkwLFxuXHRcdFx0XHRcdHogPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpLFxuXHRcdFx0XHRcdG1vdmVkID0gZmFsc2U7XG5cblx0XHRcdC8vIFdoZW4gY2xpY2tpbmcgb24gbWludXRlcyB2aWV3IHNwYWNlLCBjaGVjayB0aGUgbW91c2UgcG9zaXRpb25cblx0XHRcdGlmIChzcGFjZSAmJiAoeiA8IG91dGVyUmFkaXVzIC0gdGlja1JhZGl1cyB8fCB6ID4gb3V0ZXJSYWRpdXMgKyB0aWNrUmFkaXVzKSkge1xuXHRcdFx0XHRyZXR1cm47XG4gICAgICB9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdC8vIFNldCBjdXJzb3Igc3R5bGUgb2YgYm9keSBhZnRlciAyMDBtc1xuXHRcdFx0dmFyIG1vdmluZ1RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRzZWxmLnBvcG92ZXIuYWRkQ2xhc3MoJ2Nsb2NrcGlja2VyLW1vdmluZycpO1xuXHRcdFx0fSwgMjAwKTtcblxuXHRcdFx0Ly8gQ2xvY2tcblx0XHRcdHNlbGYuc2V0SGFuZChkeCwgZHksICFzcGFjZSwgdHJ1ZSk7XG5cblx0XHRcdC8vIE1vdXNlbW92ZSBvbiBkb2N1bWVudFxuXHRcdFx0JGRvYy5vZmYobW91c2Vtb3ZlRXZlbnQpLm9uKG1vdXNlbW92ZUV2ZW50LCBmdW5jdGlvbihlKXtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR2YXIgaXNUb3VjaCA9IC9edG91Y2gvLnRlc3QoZS50eXBlKSxcblx0XHRcdFx0XHRcdHggPSAoaXNUb3VjaCA/IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIDogZSkucGFnZVggLSB4MCxcblx0XHRcdFx0XHRcdHkgPSAoaXNUb3VjaCA/IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdIDogZSkucGFnZVkgLSB5MDtcblx0XHRcdFx0aWYgKCEgbW92ZWQgJiYgeCA9PT0gZHggJiYgeSA9PT0gZHkpIHtcblx0XHRcdFx0XHQvLyBDbGlja2luZyBpbiBjaHJvbWUgb24gd2luZG93cyB3aWxsIHRyaWdnZXIgYSBtb3VzZW1vdmUgZXZlbnRcblx0XHRcdFx0XHRyZXR1cm47XG4gICAgICAgIH1cblx0XHRcdFx0bW92ZWQgPSB0cnVlO1xuXHRcdFx0XHRzZWxmLnNldEhhbmQoeCwgeSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIE1vdXNldXAgb24gZG9jdW1lbnRcblx0XHRcdCRkb2Mub2ZmKG1vdXNldXBFdmVudCkub24obW91c2V1cEV2ZW50LCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdCRkb2Mub2ZmKG1vdXNldXBFdmVudCk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dmFyIGlzVG91Y2ggPSAvXnRvdWNoLy50ZXN0KGUudHlwZSksXG5cdFx0XHRcdFx0XHR4ID0gKGlzVG91Y2ggPyBlLm9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBlKS5wYWdlWCAtIHgwLFxuXHRcdFx0XHRcdFx0eSA9IChpc1RvdWNoID8gZS5vcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZSkucGFnZVkgLSB5MDtcblx0XHRcdFx0aWYgKChzcGFjZSB8fCBtb3ZlZCkgJiYgeCA9PT0gZHggJiYgeSA9PT0gZHkpIHtcblx0XHRcdFx0XHRzZWxmLnNldEhhbmQoeCwgeSk7XG4gICAgICAgIH1cblxuXHRcdFx0XHRpZiAoc2VsZi5jdXJyZW50VmlldyA9PT0gJ2hvdXJzJykge1xuXHRcdFx0XHRcdHNlbGYudG9nZ2xlVmlldygnbWludXRlcycsIGR1cmF0aW9uIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5hdXRvY2xvc2UpIHtcblx0XHRcdFx0XHRzZWxmLm1pbnV0ZXNWaWV3LmFkZENsYXNzKCdjbG9ja3BpY2tlci1kaWFsLW91dCcpO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHNlbGYuZG9uZSgpO1xuXHRcdFx0XHRcdH0sIGR1cmF0aW9uIC8gMik7XG4gICAgICAgIH1cblx0XHRcdFx0cGxhdGUucHJlcGVuZChjYW52YXMpO1xuXG5cdFx0XHRcdC8vIFJlc2V0IGN1cnNvciBzdHlsZSBvZiBib2R5XG5cdFx0XHRcdGNsZWFyVGltZW91dChtb3ZpbmdUaW1lcik7XG5cdFx0XHRcdHNlbGYucG9wb3Zlci5yZW1vdmVDbGFzcygnY2xvY2twaWNrZXItbW92aW5nJyk7XG5cblx0XHRcdFx0Ly8gVW5iaW5kIG1vdXNlbW92ZSBldmVudFxuXHRcdFx0XHQkZG9jLm9mZihtb3VzZW1vdmVFdmVudCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoc3ZnU3VwcG9ydGVkKSB7XG5cdFx0XHQvLyBEcmF3IGNsb2NrIGhhbmRzIGFuZCBvdGhlcnNcblx0XHRcdHZhciBjYW52YXMgPSBwb3BvdmVyLmZpbmQoJy5jbG9ja3BpY2tlci1jYW52YXMnKSxcblx0XHRcdFx0XHRzdmcgPSBjcmVhdGVTdmdFbGVtZW50KCdzdmcnKTtcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nsb2NrcGlja2VyLXN2ZycpO1xuXHRcdFx0c3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBkaWFtZXRlcik7XG5cdFx0XHRzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBkaWFtZXRlcik7XG5cdFx0XHR2YXIgZyA9IGNyZWF0ZVN2Z0VsZW1lbnQoJ2cnKTtcblx0XHRcdGcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBkaWFsUmFkaXVzICsgJywnICsgZGlhbFJhZGl1cyArICcpJyk7XG5cdFx0XHR2YXIgYmVhcmluZyA9IGNyZWF0ZVN2Z0VsZW1lbnQoJ2NpcmNsZScpO1xuXHRcdFx0YmVhcmluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nsb2NrcGlja2VyLWNhbnZhcy1iZWFyaW5nJyk7XG5cdFx0XHRiZWFyaW5nLnNldEF0dHJpYnV0ZSgnY3gnLCAwKTtcblx0XHRcdGJlYXJpbmcuc2V0QXR0cmlidXRlKCdjeScsIDApO1xuXHRcdFx0YmVhcmluZy5zZXRBdHRyaWJ1dGUoJ3InLCA0KTtcblx0XHRcdHZhciBoYW5kID0gY3JlYXRlU3ZnRWxlbWVudCgnbGluZScpO1xuXHRcdFx0aGFuZC5zZXRBdHRyaWJ1dGUoJ3gxJywgMCk7XG5cdFx0XHRoYW5kLnNldEF0dHJpYnV0ZSgneTEnLCAwKTtcblx0XHRcdHZhciBiZyA9IGNyZWF0ZVN2Z0VsZW1lbnQoJ2NpcmNsZScpO1xuXHRcdFx0Ymcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9ja3BpY2tlci1jYW52YXMtYmcnKTtcblx0XHRcdGJnLnNldEF0dHJpYnV0ZSgncicsIHRpY2tSYWRpdXMpO1xuXHRcdFx0Zy5hcHBlbmRDaGlsZChoYW5kKTtcblx0XHRcdGcuYXBwZW5kQ2hpbGQoYmcpO1xuXHRcdFx0Zy5hcHBlbmRDaGlsZChiZWFyaW5nKTtcblx0XHRcdHN2Zy5hcHBlbmRDaGlsZChnKTtcblx0XHRcdGNhbnZhcy5hcHBlbmQoc3ZnKTtcblxuXHRcdFx0dGhpcy5oYW5kID0gaGFuZDtcblx0XHRcdHRoaXMuYmcgPSBiZztcblx0XHRcdHRoaXMuYmVhcmluZyA9IGJlYXJpbmc7XG5cdFx0XHR0aGlzLmcgPSBnO1xuXHRcdFx0dGhpcy5jYW52YXMgPSBjYW52YXM7XG5cdFx0fVxuXG5cdFx0cmFpc2VDYWxsYmFjayh0aGlzLm9wdGlvbnMuaW5pdCk7XG5cdH1cblxuXHRmdW5jdGlvbiByYWlzZUNhbGxiYWNrKGNhbGxiYWNrRnVuY3Rpb24pIHtcblx0XHRpZiAoY2FsbGJhY2tGdW5jdGlvbiAmJiB0eXBlb2YgY2FsbGJhY2tGdW5jdGlvbiA9PT0gXCJmdW5jdGlvblwiKVxuXHRcdFx0Y2FsbGJhY2tGdW5jdGlvbigpO1xuXHR9XG5cblx0Ly8gRGVmYXVsdCBvcHRpb25zXG5cdENsb2NrUGlja2VyLkRFRkFVTFRTID0ge1xuXHRcdCdkZWZhdWx0JzogJycsICAgICAgICAgLy8gZGVmYXVsdCB0aW1lLCAnbm93JyBvciAnMTM6MTQnIGUuZy5cblx0XHRmcm9tbm93OiAwLCAgICAgICAgICAgIC8vIHNldCBkZWZhdWx0IHRpbWUgdG8gKiBtaWxsaXNlY29uZHMgZnJvbSBub3cgKHVzaW5nIHdpdGggZGVmYXVsdCA9ICdub3cnKVxuXHRcdGRvbmV0ZXh0OiAnT2snLCAgICAgIC8vIGRvbmUgYnV0dG9uIHRleHRcblx0XHRjbGVhcnRleHQ6ICdDbGVhcicsXG5cdFx0Y2FuY2VsdGV4dDogJ0NhbmNlbCcsXG5cdFx0YXV0b2Nsb3NlOiBmYWxzZSwgICAgICAvLyBhdXRvIGNsb3NlIHdoZW4gbWludXRlIGlzIHNlbGVjdGVkXG5cdFx0YW1wbWNsaWNrYWJsZTogdHJ1ZSwgIC8vIHNldCBhbS9wbSBidXR0b24gb24gaXRzZWxmXG5cdFx0ZGFya3RoZW1lOiBmYWxzZSxcdFx0XHQgLy8gc2V0IHRvIGRhcmsgdGhlbWVcblx0XHR0d2VsdmVob3VyOiB0cnVlLCAgICAgIC8vIGNoYW5nZSB0byAxMiBob3VyIEFNL1BNIGNsb2NrIGZyb20gMjQgaG91clxuXHRcdHZpYnJhdGU6IHRydWUgICAgICAgICAgLy8gdmlicmF0ZSB0aGUgZGV2aWNlIHdoZW4gZHJhZ2dpbmcgY2xvY2sgaGFuZFxuXHR9O1xuXG5cdC8vIFNob3cgb3IgaGlkZSBwb3BvdmVyXG5cdENsb2NrUGlja2VyLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzW3RoaXMuaXNTaG93biA/ICdoaWRlJyA6ICdzaG93J10oKTtcblx0fTtcblxuXHQvLyBTZXQgcG9wb3ZlciBwb3NpdGlvblxuXHRDbG9ja1BpY2tlci5wcm90b3R5cGUubG9jYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG5cdFx0XHRcdHBvcG92ZXIgPSB0aGlzLnBvcG92ZXIsXG5cdFx0XHRcdG9mZnNldCA9IGVsZW1lbnQub2Zmc2V0KCksXG5cdFx0XHRcdHdpZHRoID0gZWxlbWVudC5vdXRlcldpZHRoKCksXG5cdFx0XHRcdGhlaWdodCA9IGVsZW1lbnQub3V0ZXJIZWlnaHQoKSxcblx0XHRcdFx0YWxpZ24gPSB0aGlzLm9wdGlvbnMuYWxpZ24sXG5cdFx0XHRcdHNlbGYgPSB0aGlzO1xuXG5cdFx0cG9wb3Zlci5zaG93KCk7XG5cdH07XG5cblx0Ly8gU2hvdyBwb3BvdmVyXG5cdENsb2NrUGlja2VyLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oZSl7XG5cdFx0Ly8gTm90IHNob3cgYWdhaW5cblx0XHRpZiAodGhpcy5pc1Nob3duKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJhaXNlQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZVNob3cpO1xuXHRcdCQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ3RhYmluZGV4JywgLTEpO1xuXHRcdH0pXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdC8vIEluaXRpYWxpemVcblx0XHR0aGlzLmlucHV0LmJsdXIoKTtcblx0XHR0aGlzLnBvcG92ZXIuYWRkQ2xhc3MoJ3BpY2tlci0tb3BlbmVkJyk7XG5cdFx0dGhpcy5pbnB1dC5hZGRDbGFzcygncGlja2VyX19pbnB1dCBwaWNrZXJfX2lucHV0LS1hY3RpdmUnKTtcblx0XHQkKGRvY3VtZW50LmJvZHkpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG5cdFx0Ly8gR2V0IHRoZSB0aW1lXG5cdFx0dmFyIHZhbHVlID0gKCh0aGlzLmlucHV0LnByb3AoJ3ZhbHVlJykgfHwgdGhpcy5vcHRpb25zWydkZWZhdWx0J10gfHwgJycpICsgJycpLnNwbGl0KCc6Jyk7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy50d2VsdmVob3VyICYmICEodHlwZW9mIHZhbHVlWzFdID09PSAndW5kZWZpbmVkJykpIHtcblx0XHRcdGlmICh2YWx1ZVsxXS5pbmRleE9mKFwiQU1cIikgPiAwKXtcblx0XHRcdFx0dGhpcy5hbU9yUG0gPSAnQU0nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hbU9yUG0gPSAnUE0nO1xuXHRcdFx0fVxuXHRcdFx0dmFsdWVbMV0gPSB2YWx1ZVsxXS5yZXBsYWNlKFwiQU1cIiwgXCJcIikucmVwbGFjZShcIlBNXCIsIFwiXCIpO1xuXHRcdH1cblx0XHRpZiAodmFsdWVbMF0gPT09ICdub3cnKSB7XG5cdFx0XHR2YXIgbm93ID0gbmV3IERhdGUoKyBuZXcgRGF0ZSgpICsgdGhpcy5vcHRpb25zLmZyb21ub3cpO1xuXHRcdFx0dmFsdWUgPSBbXG5cdFx0XHRcdG5vdy5nZXRIb3VycygpLFxuXHRcdFx0XHRub3cuZ2V0TWludXRlcygpXG5cdFx0XHRdO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy50d2VsdmVob3VyKSB7XG4gICAgICAgIHRoaXMuYW1PclBtID0gdmFsdWVbMF0gPj0gMTIgJiYgdmFsdWVbMF0gPCAyNCA/ICdQTScgOiAnQU0nO1xuICAgICAgfVxuXHRcdH1cblx0XHR0aGlzLmhvdXJzID0gKyB2YWx1ZVswXSB8fCAwO1xuXHRcdHRoaXMubWludXRlcyA9ICsgdmFsdWVbMV0gfHwgMDtcblx0XHR0aGlzLnNwYW5Ib3Vycy5odG1sKHRoaXMuaG91cnMpO1xuXHRcdHRoaXMuc3Bhbk1pbnV0ZXMuaHRtbChsZWFkaW5nWmVybyh0aGlzLm1pbnV0ZXMpKTtcblx0XHRpZiAoIXRoaXMuaXNBcHBlbmRlZCkge1xuXHRcdFx0Ly8gQXBwZW5kIHBvcG92ZXIgdG8gYm9keVxuXHRcdFx0dGhpcy5wb3BvdmVyLmluc2VydEFmdGVyKHRoaXMuaW5wdXQpO1xuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy50d2VsdmVob3VyKSB7XG5cdFx0XHRcdGlmICh0aGlzLmFtT3JQbSA9PT0gJ1BNJyl7XG5cdFx0XHRcdFx0dGhpcy5zcGFuQW1QbS5jaGlsZHJlbignI2NsaWNrLXBtJykuYWRkQ2xhc3MoXCJ0ZXh0LXByaW1hcnlcIik7XG5cdFx0XHRcdFx0dGhpcy5zcGFuQW1QbS5jaGlsZHJlbignI2NsaWNrLWFtJykucmVtb3ZlQ2xhc3MoXCJ0ZXh0LXByaW1hcnlcIik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zcGFuQW1QbS5jaGlsZHJlbignI2NsaWNrLWFtJykuYWRkQ2xhc3MoXCJ0ZXh0LXByaW1hcnlcIik7XG5cdFx0XHRcdFx0dGhpcy5zcGFuQW1QbS5jaGlsZHJlbignI2NsaWNrLXBtJykucmVtb3ZlQ2xhc3MoXCJ0ZXh0LXByaW1hcnlcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFJlc2V0IHBvc2l0aW9uIHdoZW4gcmVzaXplXG5cdFx0XHQkd2luLm9uKCdyZXNpemUuY2xvY2twaWNrZXInICsgdGhpcy5pZCwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmIChzZWxmLmlzU2hvd24pIHtcblx0XHRcdFx0XHRzZWxmLmxvY2F0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuaXNBcHBlbmRlZCA9IHRydWU7XG5cdFx0fVxuXHRcdC8vIFRvZ2dsZSB0byBob3VycyB2aWV3XG5cdFx0dGhpcy50b2dnbGVWaWV3KCdob3VycycpO1xuXHRcdC8vIFNldCBwb3NpdGlvblxuXHRcdHRoaXMubG9jYXRlKCk7XG5cdFx0dGhpcy5pc1Nob3duID0gdHJ1ZTtcblx0XHQvLyBIaWRlIHdoZW4gY2xpY2tpbmcgb3IgdGFiYmluZyBvbiBhbnkgZWxlbWVudCBleGNlcHQgdGhlIGNsb2NrIGFuZCBpbnB1dFxuXHRcdCRkb2Mub24oJ2NsaWNrLmNsb2NrcGlja2VyLicgKyB0aGlzLmlkICsgJyBmb2N1c2luLmNsb2NrcGlja2VyLicgKyB0aGlzLmlkLCBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cdFx0XHRpZiAodGFyZ2V0LmNsb3Nlc3Qoc2VsZi5wb3BvdmVyLmZpbmQoJy5waWNrZXJfX3dyYXAnKSkubGVuZ3RoID09PSAwICYmIHRhcmdldC5jbG9zZXN0KHNlbGYuaW5wdXQpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRzZWxmLmhpZGUoKTtcbiAgICAgIH1cblx0XHR9KTtcblx0XHQvLyBIaWRlIHdoZW4gRVNDIGlzIHByZXNzZWRcblx0XHQkZG9jLm9uKCdrZXl1cC5jbG9ja3BpY2tlci4nICsgdGhpcy5pZCwgZnVuY3Rpb24oZSl7XG5cdFx0XHRpZiAoZS5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0XHRzZWxmLmhpZGUoKTtcbiAgICAgIH1cblx0XHR9KTtcblx0XHRyYWlzZUNhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlclNob3cpO1xuXHR9O1xuXHQvLyBIaWRlIHBvcG92ZXJcblx0Q2xvY2tQaWNrZXIucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcblx0XHRyYWlzZUNhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVIaWRlKTtcblx0XHR0aGlzLmlucHV0LnJlbW92ZUNsYXNzKCdwaWNrZXJfX2lucHV0IHBpY2tlcl9faW5wdXQtLWFjdGl2ZScpO1xuXHRcdHRoaXMucG9wb3Zlci5yZW1vdmVDbGFzcygncGlja2VyLS1vcGVuZWQnKTtcblx0XHQkKGRvY3VtZW50LmJvZHkpLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuXHRcdHRoaXMuaXNTaG93biA9IGZhbHNlO1xuXHRcdCQoJzppbnB1dCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdCQodGhpcykuYXR0cigndGFiaW5kZXgnLCBpbmRleCArIDEpO1xuXHRcdH0pO1xuXHRcdC8vIFVuYmluZGluZyBldmVudHMgb24gZG9jdW1lbnRcblx0XHQkZG9jLm9mZignY2xpY2suY2xvY2twaWNrZXIuJyArIHRoaXMuaWQgKyAnIGZvY3VzaW4uY2xvY2twaWNrZXIuJyArIHRoaXMuaWQpO1xuXHRcdCRkb2Mub2ZmKCdrZXl1cC5jbG9ja3BpY2tlci4nICsgdGhpcy5pZCk7XG5cdFx0dGhpcy5wb3BvdmVyLmhpZGUoKTtcblx0XHRyYWlzZUNhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlckhpZGUpO1xuXHR9O1xuXHQvLyBUb2dnbGUgdG8gaG91cnMgb3IgbWludXRlcyB2aWV3XG5cdENsb2NrUGlja2VyLnByb3RvdHlwZS50b2dnbGVWaWV3ID0gZnVuY3Rpb24odmlldywgZGVsYXkpIHtcblx0XHR2YXIgcmFpc2VBZnRlckhvdXJTZWxlY3QgPSBmYWxzZTtcblx0XHRpZiAodmlldyA9PT0gJ21pbnV0ZXMnICYmICQodGhpcy5ob3Vyc1ZpZXcpLmNzcyhcInZpc2liaWxpdHlcIikgPT09IFwidmlzaWJsZVwiKSB7XG5cdFx0XHRyYWlzZUNhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVIb3VyU2VsZWN0KTtcblx0XHRcdHJhaXNlQWZ0ZXJIb3VyU2VsZWN0ID0gdHJ1ZTtcblx0XHR9XG5cdFx0dmFyIGlzSG91cnMgPSB2aWV3ID09PSAnaG91cnMnLFxuXHRcdFx0XHRuZXh0VmlldyA9IGlzSG91cnMgPyB0aGlzLmhvdXJzVmlldyA6IHRoaXMubWludXRlc1ZpZXcsXG5cdFx0XHRcdGhpZGVWaWV3ID0gaXNIb3VycyA/IHRoaXMubWludXRlc1ZpZXcgOiB0aGlzLmhvdXJzVmlldztcblx0XHR0aGlzLmN1cnJlbnRWaWV3ID0gdmlldztcblxuXHRcdHRoaXMuc3BhbkhvdXJzLnRvZ2dsZUNsYXNzKCd0ZXh0LXByaW1hcnknLCBpc0hvdXJzKTtcblx0XHR0aGlzLnNwYW5NaW51dGVzLnRvZ2dsZUNsYXNzKCd0ZXh0LXByaW1hcnknLCAhIGlzSG91cnMpO1xuXG5cdFx0Ly8gTGV0J3MgbWFrZSB0cmFuc2l0aW9uc1xuXHRcdGhpZGVWaWV3LmFkZENsYXNzKCdjbG9ja3BpY2tlci1kaWFsLW91dCcpO1xuXHRcdG5leHRWaWV3LmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJykucmVtb3ZlQ2xhc3MoJ2Nsb2NrcGlja2VyLWRpYWwtb3V0Jyk7XG5cblx0XHQvLyBSZXNldCBjbG9jayBoYW5kXG5cdFx0dGhpcy5yZXNldENsb2NrKGRlbGF5KTtcblxuXHRcdC8vIEFmdGVyIHRyYW5zaXRpb25zIGVuZGVkXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMudG9nZ2xlVmlld1RpbWVyKTtcblx0XHR0aGlzLnRvZ2dsZVZpZXdUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRoaWRlVmlldy5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0fSwgZHVyYXRpb24pO1xuXG5cdFx0aWYgKHJhaXNlQWZ0ZXJIb3VyU2VsZWN0KSB7XG5cdFx0XHRyYWlzZUNhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlckhvdXJTZWxlY3QpO1xuICAgIH1cblx0fTtcblxuXHQvLyBSZXNldCBjbG9jayBoYW5kXG5cdENsb2NrUGlja2VyLnByb3RvdHlwZS5yZXNldENsb2NrID0gZnVuY3Rpb24oZGVsYXkpIHtcblx0XHR2YXIgdmlldyA9IHRoaXMuY3VycmVudFZpZXcsXG5cdFx0XHRcdHZhbHVlID0gdGhpc1t2aWV3XSxcblx0XHRcdFx0aXNIb3VycyA9IHZpZXcgPT09ICdob3VycycsXG5cdFx0XHRcdHVuaXQgPSBNYXRoLlBJIC8gKGlzSG91cnMgPyA2IDogMzApLFxuXHRcdFx0XHRyYWRpYW4gPSB2YWx1ZSAqIHVuaXQsXG5cdFx0XHRcdHJhZGl1cyA9IGlzSG91cnMgJiYgdmFsdWUgPiAwICYmIHZhbHVlIDwgMTMgPyBpbm5lclJhZGl1cyA6IG91dGVyUmFkaXVzLFxuXHRcdFx0XHR4ID0gTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyxcblx0XHRcdFx0eSA9IC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyxcblx0XHRcdFx0c2VsZiA9IHRoaXM7XG5cblx0XHRpZiAoc3ZnU3VwcG9ydGVkICYmIGRlbGF5KSB7XG5cdFx0XHRzZWxmLmNhbnZhcy5hZGRDbGFzcygnY2xvY2twaWNrZXItY2FudmFzLW91dCcpO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRzZWxmLmNhbnZhcy5yZW1vdmVDbGFzcygnY2xvY2twaWNrZXItY2FudmFzLW91dCcpO1xuXHRcdFx0XHRzZWxmLnNldEhhbmQoeCwgeSk7XG5cdFx0XHR9LCBkZWxheSk7XG5cdFx0fSBlbHNlXG5cdFx0XHR0aGlzLnNldEhhbmQoeCwgeSk7XG5cdH07XG5cblx0Ly8gU2V0IGNsb2NrIGhhbmQgdG8gKHgsIHkpXG5cdENsb2NrUGlja2VyLnByb3RvdHlwZS5zZXRIYW5kID0gZnVuY3Rpb24oeCwgeSwgcm91bmRCeTUsIGRyYWdnaW5nKSB7XG5cdFx0dmFyIHJhZGlhbiA9IE1hdGguYXRhbjIoeCwgLSB5KSxcblx0XHRcdFx0aXNIb3VycyA9IHRoaXMuY3VycmVudFZpZXcgPT09ICdob3VycycsXG5cdFx0XHRcdHVuaXQgPSBNYXRoLlBJIC8gKGlzSG91cnMgfHwgcm91bmRCeTU/IDYgOiAzMCksXG5cdFx0XHRcdHogPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSksXG5cdFx0XHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG5cdFx0XHRcdGlubmVyID0gaXNIb3VycyAmJiB6IDwgKG91dGVyUmFkaXVzICsgaW5uZXJSYWRpdXMpIC8gMixcblx0XHRcdFx0cmFkaXVzID0gaW5uZXIgPyBpbm5lclJhZGl1cyA6IG91dGVyUmFkaXVzLFxuXHRcdFx0XHR2YWx1ZTtcblxuXHRcdGlmIChvcHRpb25zLnR3ZWx2ZWhvdXIpIHtcblx0XHRcdHJhZGl1cyA9IG91dGVyUmFkaXVzO1xuICAgIH1cblxuXHRcdC8vIFJhZGlhbiBzaG91bGQgaW4gcmFuZ2UgWzAsIDJQSV1cblx0XHRpZiAocmFkaWFuIDwgMCkge1xuXHRcdFx0cmFkaWFuID0gTWF0aC5QSSAqIDIgKyByYWRpYW47XG4gICAgfVxuXG5cdFx0Ly8gR2V0IHRoZSByb3VuZCB2YWx1ZVxuXHRcdHZhbHVlID0gTWF0aC5yb3VuZChyYWRpYW4gLyB1bml0KTtcblxuXHRcdC8vIEdldCB0aGUgcm91bmQgcmFkaWFuXG5cdFx0cmFkaWFuID0gdmFsdWUgKiB1bml0O1xuXG5cdFx0Ly8gQ29ycmVjdCB0aGUgaG91cnMgb3IgbWludXRlc1xuXHRcdGlmIChvcHRpb25zLnR3ZWx2ZWhvdXIpIHtcblx0XHRcdGlmIChpc0hvdXJzKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gMClcblx0XHRcdFx0XHR2YWx1ZSA9IDEyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHJvdW5kQnk1KVxuXHRcdFx0XHRcdHZhbHVlICo9IDU7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gNjApXG5cdFx0XHRcdFx0dmFsdWUgPSAwO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoaXNIb3Vycykge1xuXHRcdFx0XHRpZiAodmFsdWUgPT09IDEyKVxuXHRcdFx0XHRcdHZhbHVlID0gMDtcblx0XHRcdFx0dmFsdWUgPSBpbm5lciA/ICh2YWx1ZSA9PT0gMCA/IDEyIDogdmFsdWUpIDogdmFsdWUgPT09IDAgPyAwIDogdmFsdWUgKyAxMjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChyb3VuZEJ5NSlcblx0XHRcdFx0XHR2YWx1ZSAqPSA1O1xuXHRcdFx0XHRpZiAodmFsdWUgPT09IDYwKVxuXHRcdFx0XHRcdHZhbHVlID0gMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBPbmNlIGhvdXJzIG9yIG1pbnV0ZXMgY2hhbmdlZCwgdmlicmF0ZSB0aGUgZGV2aWNlXG5cdFx0aWYgKHRoaXNbdGhpcy5jdXJyZW50Vmlld10gIT09IHZhbHVlKSB7XG5cdFx0XHRpZiAodmlicmF0ZSAmJiB0aGlzLm9wdGlvbnMudmlicmF0ZSkge1xuXHRcdFx0XHQvLyBEbyBub3QgdmlicmF0ZSB0b28gZnJlcXVlbnRseVxuXHRcdFx0XHRpZiAoIXRoaXMudmlicmF0ZVRpbWVyKSB7XG5cdFx0XHRcdFx0bmF2aWdhdG9yW3ZpYnJhdGVdKDEwKTtcblx0XHRcdFx0XHR0aGlzLnZpYnJhdGVUaW1lciA9IHNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0dGhpcy52aWJyYXRlVGltZXIgPSBudWxsO1xuXHRcdFx0XHRcdH0sIHRoaXMpLCAxMDApO1xuXHRcdFx0XHR9XG4gICAgICB9XG4gICAgfVxuXG5cdFx0dGhpc1t0aGlzLmN1cnJlbnRWaWV3XSA9IHZhbHVlO1xuICAgIGlmIChpc0hvdXJzKSB7XG4gICAgICB0aGlzWydzcGFuSG91cnMnXS5odG1sKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc1snc3Bhbk1pbnV0ZXMnXS5odG1sKGxlYWRpbmdaZXJvKHZhbHVlKSk7XG4gICAgfVxuXG5cdFx0Ly8gSWYgc3ZnIGlzIG5vdCBzdXBwb3J0ZWQsIGp1c3QgYWRkIGFuIGFjdGl2ZSBjbGFzcyB0byB0aGUgdGlja1xuXHRcdGlmICghc3ZnU3VwcG9ydGVkKSB7XG5cdFx0XHR0aGlzW2lzSG91cnMgPyAnaG91cnNWaWV3JyA6ICdtaW51dGVzVmlldyddLmZpbmQoJy5jbG9ja3BpY2tlci10aWNrJykuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgdGljayA9ICQodGhpcyk7XG5cdFx0XHRcdHRpY2sudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScsIHZhbHVlID09PSArIHRpY2suaHRtbCgpKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFNldCBjbG9jayBoYW5kIGFuZCBvdGhlcnMnIHBvc2l0aW9uXG5cdFx0dmFyIGN4MSA9IE1hdGguc2luKHJhZGlhbikgKiAocmFkaXVzIC0gdGlja1JhZGl1cyksXG5cdFx0XHQgIGN5MSA9IC0gTWF0aC5jb3MocmFkaWFuKSAqIChyYWRpdXMgLSB0aWNrUmFkaXVzKSxcblx0XHQgICAgY3gyID0gTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyxcblx0XHRcdCAgY3kyID0gLSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xuXHRcdHRoaXMuaGFuZC5zZXRBdHRyaWJ1dGUoJ3gyJywgY3gxKTtcblx0XHR0aGlzLmhhbmQuc2V0QXR0cmlidXRlKCd5MicsIGN5MSk7XG5cdFx0dGhpcy5iZy5zZXRBdHRyaWJ1dGUoJ2N4JywgY3gyKTtcblx0XHR0aGlzLmJnLnNldEF0dHJpYnV0ZSgnY3knLCBjeTIpO1xuXHR9O1xuXG5cdC8vIEhvdXJzIGFuZCBtaW51dGVzIGFyZSBzZWxlY3RlZFxuXHRDbG9ja1BpY2tlci5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJhaXNlQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZURvbmUpO1xuXHRcdHRoaXMuaGlkZSgpO1xuXHRcdHRoaXMubGFiZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0dmFyIGxhc3QgPSB0aGlzLmlucHV0LnByb3AoJ3ZhbHVlJyksXG5cdFx0XHRcdHZhbHVlID0gbGVhZGluZ1plcm8odGhpcy5ob3VycykgKyAnOicgKyBsZWFkaW5nWmVybyh0aGlzLm1pbnV0ZXMpO1xuXHRcdGlmICh0aGlzLm9wdGlvbnMudHdlbHZlaG91cikge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZSArIHRoaXMuYW1PclBtO1xuICAgIH1cblxuXHRcdHRoaXMuaW5wdXQucHJvcCgndmFsdWUnLCB2YWx1ZSk7XG5cdFx0aWYgKHZhbHVlICE9PSBsYXN0KSB7XG5cdFx0XHR0aGlzLmlucHV0LnRyaWdnZXJIYW5kbGVyKCdjaGFuZ2UnKTtcblx0XHRcdGlmICghdGhpcy5pc0lucHV0KSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5vcHRpb25zLmF1dG9jbG9zZSlcblx0XHRcdHRoaXMuaW5wdXQudHJpZ2dlcignYmx1cicpO1xuXG5cdFx0cmFpc2VDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJEb25lKTtcblx0fTtcblxuXHQvLyBDbGVhciBpbnB1dCBmaWVsZFxuXHRDbG9ja1BpY2tlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmhpZGUoKTtcblx0XHR0aGlzLmxhYmVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdHZhciBsYXN0ID0gdGhpcy5pbnB1dC5wcm9wKCd2YWx1ZScpLFxuXHRcdFx0ICB2YWx1ZSA9ICcnO1xuXG5cdFx0dGhpcy5pbnB1dC5wcm9wKCd2YWx1ZScsIHZhbHVlKTtcblx0XHRpZiAodmFsdWUgIT09IGxhc3QpIHtcblx0XHRcdHRoaXMuaW5wdXQudHJpZ2dlckhhbmRsZXIoJ2NoYW5nZScpO1xuXHRcdFx0aWYgKCEgdGhpcy5pc0lucHV0KSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5vcHRpb25zLmF1dG9jbG9zZSkge1xuXHRcdFx0dGhpcy5pbnB1dC50cmlnZ2VyKCdibHVyJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFJlbW92ZSBjbG9ja3BpY2tlciBmcm9tIGlucHV0XG5cdENsb2NrUGlja2VyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlRGF0YSgnY2xvY2twaWNrZXInKTtcblx0XHR0aGlzLmlucHV0Lm9mZignZm9jdXMuY2xvY2twaWNrZXIgY2xpY2suY2xvY2twaWNrZXInKTtcblx0XHRpZiAodGhpcy5pc1Nob3duKSB7XG5cdFx0XHR0aGlzLmhpZGUoKTtcbiAgICB9XG5cdFx0aWYgKHRoaXMuaXNBcHBlbmRlZCkge1xuXHRcdFx0JHdpbi5vZmYoJ3Jlc2l6ZS5jbG9ja3BpY2tlcicgKyB0aGlzLmlkKTtcblx0XHRcdHRoaXMucG9wb3Zlci5yZW1vdmUoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gRXh0ZW5kcyAkLmZuLmNsb2NrcGlja2VyXG5cdCQuZm4ucGlja2F0aW1lID0gZnVuY3Rpb24ob3B0aW9uKXtcblx0XHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0XHRkYXRhID0gJHRoaXMuZGF0YSgnY2xvY2twaWNrZXInKTtcblx0XHRcdGlmICghZGF0YSkge1xuXHRcdFx0XHR2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBDbG9ja1BpY2tlci5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbik7XG5cdFx0XHRcdCR0aGlzLmRhdGEoJ2Nsb2NrcGlja2VyJywgbmV3IENsb2NrUGlja2VyKCR0aGlzLCBvcHRpb25zKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBNYW51YWwgb3BlcmF0c2lvbnMuIHNob3csIGhpZGUsIHJlbW92ZSwgZS5nLlxuXHRcdFx0XHRpZiAodHlwZW9mIGRhdGFbb3B0aW9uXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGRhdGFbb3B0aW9uXS5hcHBseShkYXRhLCBhcmdzKTtcbiAgICAgICAgfVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xufSgpKTtcbiIsIihmdW5jdGlvbiAoJCkge1xuXG4gICQuZm4uY2hhcmFjdGVyQ291bnRlciA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICB2YXIgJGNvdW50ZXJFbGVtZW50ID0gJGlucHV0LnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpO1xuXG4gICAgICAvLyBjaGFyYWN0ZXIgY291bnRlciBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICBpZiAoJGNvdW50ZXJFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpdEhhc0xlbmd0aEF0dHJpYnV0ZSA9ICRpbnB1dC5hdHRyKCdkYXRhLWxlbmd0aCcpICE9PSB1bmRlZmluZWQ7XG5cbiAgICAgIGlmKGl0SGFzTGVuZ3RoQXR0cmlidXRlKXtcbiAgICAgICAgJGlucHV0Lm9uKCdpbnB1dCcsIHVwZGF0ZUNvdW50ZXIpO1xuICAgICAgICAkaW5wdXQub24oJ2ZvY3VzJywgdXBkYXRlQ291bnRlcik7XG4gICAgICAgICRpbnB1dC5vbignYmx1cicsIHJlbW92ZUNvdW50ZXJFbGVtZW50KTtcblxuICAgICAgICBhZGRDb3VudGVyRWxlbWVudCgkaW5wdXQpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ291bnRlcigpe1xuICAgIHZhciBtYXhMZW5ndGggICAgID0gKyQodGhpcykuYXR0cignZGF0YS1sZW5ndGgnKSxcbiAgICBhY3R1YWxMZW5ndGggICAgICA9ICskKHRoaXMpLnZhbCgpLmxlbmd0aCxcbiAgICBpc1ZhbGlkTGVuZ3RoICAgICA9IGFjdHVhbExlbmd0aCA8PSBtYXhMZW5ndGg7XG5cbiAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ3NwYW5bY2xhc3M9XCJjaGFyYWN0ZXItY291bnRlclwiXScpXG4gICAgICAgICAgICAgICAgICAgIC5odG1sKCBhY3R1YWxMZW5ndGggKyAnLycgKyBtYXhMZW5ndGgpO1xuXG4gICAgYWRkSW5wdXRTdHlsZShpc1ZhbGlkTGVuZ3RoLCAkKHRoaXMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENvdW50ZXJFbGVtZW50KCRpbnB1dCkge1xuICAgIHZhciAkY291bnRlckVsZW1lbnQgPSAkaW5wdXQucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJyk7XG5cbiAgICBpZiAoJGNvdW50ZXJFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICRjb3VudGVyRWxlbWVudCA9ICQoJzxzcGFuLz4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjaGFyYWN0ZXItY291bnRlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdmbG9hdCcsJ3JpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ2ZvbnQtc2l6ZScsJzEycHgnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcygnaGVpZ2h0JywgMSk7XG5cbiAgICAkaW5wdXQucGFyZW50KCkuYXBwZW5kKCRjb3VudGVyRWxlbWVudCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDb3VudGVyRWxlbWVudCgpe1xuICAgICQodGhpcykucGFyZW50KCkuZmluZCgnc3BhbltjbGFzcz1cImNoYXJhY3Rlci1jb3VudGVyXCJdJykuaHRtbCgnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJbnB1dFN0eWxlKGlzVmFsaWRMZW5ndGgsICRpbnB1dCl7XG4gICAgdmFyIGlucHV0SGFzSW52YWxpZENsYXNzID0gJGlucHV0Lmhhc0NsYXNzKCdpbnZhbGlkJyk7XG4gICAgaWYgKGlzVmFsaWRMZW5ndGggJiYgaW5wdXRIYXNJbnZhbGlkQ2xhc3MpIHtcbiAgICAgICRpbnB1dC5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgIH1cbiAgICBlbHNlIGlmKCFpc1ZhbGlkTGVuZ3RoICYmICFpbnB1dEhhc0ludmFsaWRDbGFzcyl7XG4gICAgICAkaW5wdXQucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAkaW5wdXQuYWRkQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJ2lucHV0LCB0ZXh0YXJlYScpLmNoYXJhY3RlckNvdW50ZXIoKTtcbiAgfSk7XG5cbn0oIGpRdWVyeSApKTtcbiIsIihmdW5jdGlvbiAoJCkge1xuXG4gIHZhciBtZXRob2RzID0ge1xuXG4gICAgaW5pdCA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgZHVyYXRpb246IDIwMCwgLy8gbXNcbiAgICAgICAgZGlzdDogLTEwMCwgLy8gem9vbSBzY2FsZSBUT0RPOiBtYWtlIHRoaXMgbW9yZSBpbnR1aXRpdmUgYXMgYW4gb3B0aW9uXG4gICAgICAgIHNoaWZ0OiAwLCAvLyBzcGFjaW5nIGZvciBjZW50ZXIgaW1hZ2VcbiAgICAgICAgcGFkZGluZzogMCwgLy8gUGFkZGluZyBiZXR3ZWVuIG5vbiBjZW50ZXIgaXRlbXNcbiAgICAgICAgZnVsbFdpZHRoOiBmYWxzZSwgLy8gQ2hhbmdlIHRvIGZ1bGwgd2lkdGggc3R5bGVzXG4gICAgICAgIGluZGljYXRvcnM6IGZhbHNlLCAvLyBUb2dnbGUgaW5kaWNhdG9yc1xuICAgICAgICBub1dyYXA6IGZhbHNlLCAvLyBEb24ndCB3cmFwIGFyb3VuZCBhbmQgY3ljbGUgdGhyb3VnaCBpdGVtcy5cbiAgICAgICAgb25DeWNsZVRvOiBudWxsIC8vIENhbGxiYWNrIGZvciB3aGVuIGEgbmV3IHNsaWRlIGlzIGN5Y2xlZCB0by5cbiAgICAgIH07XG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgdmFyIG5hbWVzcGFjZSA9IE1hdGVyaWFsaXplLm9iamVjdFNlbGVjdG9yU3RyaW5nKCQodGhpcykpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICB2YXIgaW1hZ2VzLCBpdGVtX3dpZHRoLCBpdGVtX2hlaWdodCwgb2Zmc2V0LCBjZW50ZXIsIHByZXNzZWQsIGRpbSwgY291bnQsXG4gICAgICAgICAgICByZWZlcmVuY2UsIHJlZmVyZW5jZVksIGFtcGxpdHVkZSwgdGFyZ2V0LCB2ZWxvY2l0eSwgc2Nyb2xsaW5nLFxuICAgICAgICAgICAgeGZvcm0sIGZyYW1lLCB0aW1lc3RhbXAsIHRpY2tlciwgZHJhZ2dlZCwgdmVydGljYWxfZHJhZ2dlZDtcbiAgICAgICAgdmFyICRpbmRpY2F0b3JzID0gJCgnPHVsIGNsYXNzPVwiaW5kaWNhdG9yc1wiPjwvdWw+Jyk7XG4gICAgICAgIHZhciBzY3JvbGxpbmdUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdmFyIG9uZVRpbWVDYWxsYmFjayA9IG51bGw7XG5cblxuICAgICAgICAvLyBJbml0aWFsaXplXG4gICAgICAgIHZhciB2aWV3ID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGhhc011bHRpcGxlU2xpZGVzID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmxlbmd0aCA+IDE7XG4gICAgICAgIHZhciBzaG93SW5kaWNhdG9ycyA9ICh2aWV3LmF0dHIoJ2RhdGEtaW5kaWNhdG9ycycpIHx8IG9wdGlvbnMuaW5kaWNhdG9ycykgJiYgaGFzTXVsdGlwbGVTbGlkZXM7XG4gICAgICAgIHZhciBub1dyYXAgPSAodmlldy5hdHRyKCdkYXRhLW5vLXdyYXAnKSB8fCBvcHRpb25zLm5vV3JhcCkgfHwgIWhhc011bHRpcGxlU2xpZGVzO1xuICAgICAgICB2YXIgdW5pcXVlTmFtZXNwYWNlID0gdmlldy5hdHRyKCdkYXRhLW5hbWVzcGFjZScpIHx8IG5hbWVzcGFjZStpO1xuICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtbmFtZXNwYWNlJywgdW5pcXVlTmFtZXNwYWNlKTtcblxuXG4gICAgICAgIC8vIE9wdGlvbnNcbiAgICAgICAgdmFyIHNldENhcm91c2VsSGVpZ2h0ID0gZnVuY3Rpb24oaW1hZ2VPbmx5KSB7XG4gICAgICAgICAgdmFyIGZpcnN0U2xpZGUgPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtLmFjdGl2ZScpLmxlbmd0aCA/IHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0uYWN0aXZlJykuZmlyc3QoKSA6IHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5maXJzdCgpO1xuICAgICAgICAgIHZhciBmaXJzdEltYWdlID0gZmlyc3RTbGlkZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICAgICAgICAgIGlmIChmaXJzdEltYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGZpcnN0SW1hZ2VbMF0uY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgLy8gSWYgaW1hZ2Ugd29uJ3QgdHJpZ2dlciB0aGUgbG9hZCBldmVudFxuICAgICAgICAgICAgICB2YXIgaW1hZ2VIZWlnaHQgPSBmaXJzdEltYWdlLmhlaWdodCgpO1xuICAgICAgICAgICAgICBpZiAoaW1hZ2VIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmlldy5jc3MoJ2hlaWdodCcsIGZpcnN0SW1hZ2UuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIElmIGltYWdlIHN0aWxsIGhhcyBubyBoZWlnaHQsIHVzZSB0aGUgbmF0dXJhbCBkaW1lbnNpb25zIHRvIGNhbGN1bGF0ZVxuICAgICAgICAgICAgICAgIHZhciBuYXR1cmFsV2lkdGggPSBmaXJzdEltYWdlWzBdLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgbmF0dXJhbEhlaWdodCA9IGZpcnN0SW1hZ2VbMF0ubmF0dXJhbEhlaWdodDtcbiAgICAgICAgICAgICAgICB2YXIgYWRqdXN0ZWRIZWlnaHQgPSAodmlldy53aWR0aCgpIC8gbmF0dXJhbFdpZHRoKSAqIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgdmlldy5jc3MoJ2hlaWdodCcsIGFkanVzdGVkSGVpZ2h0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gR2V0IGhlaWdodCB3aGVuIGltYWdlIGlzIGxvYWRlZCBub3JtYWxseVxuICAgICAgICAgICAgICBmaXJzdEltYWdlLm9uKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2aWV3LmNzcygnaGVpZ2h0JywgJCh0aGlzKS5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIWltYWdlT25seSkge1xuICAgICAgICAgICAgdmFyIHNsaWRlSGVpZ2h0ID0gZmlyc3RTbGlkZS5oZWlnaHQoKTtcbiAgICAgICAgICAgIHZpZXcuY3NzKCdoZWlnaHQnLCBzbGlkZUhlaWdodCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgIG9wdGlvbnMuZGlzdCA9IDA7XG4gICAgICAgICAgc2V0Q2Fyb3VzZWxIZWlnaHQoKTtcblxuICAgICAgICAgIC8vIE9mZnNldCBmaXhlZCBpdGVtcyB3aGVuIGluZGljYXRvcnMuXG4gICAgICAgICAgaWYgKHNob3dJbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICB2aWV3LmZpbmQoJy5jYXJvdXNlbC1maXhlZC1pdGVtJykuYWRkQ2xhc3MoJ3dpdGgtaW5kaWNhdG9ycycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gRG9uJ3QgZG91YmxlIGluaXRpYWxpemUuXG4gICAgICAgIGlmICh2aWV3Lmhhc0NsYXNzKCdpbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgLy8gUmVjYWxjdWxhdGUgdmFyaWFibGVzXG4gICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuXG4gICAgICAgICAgLy8gUmVkcmF3IGNhcm91c2VsLlxuICAgICAgICAgIHZpZXcudHJpZ2dlcignY2Fyb3VzZWxOZXh0JywgWzAuMDAwMDAxXSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZpZXcuYWRkQ2xhc3MoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgIHByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgb2Zmc2V0ID0gdGFyZ2V0ID0gMDtcbiAgICAgICAgaW1hZ2VzID0gW107XG4gICAgICAgIGl0ZW1fd2lkdGggPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lcldpZHRoKCk7XG4gICAgICAgIGl0ZW1faGVpZ2h0ID0gdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgZGltID0gaXRlbV93aWR0aCAqIDIgKyBvcHRpb25zLnBhZGRpbmc7XG5cbiAgICAgICAgdmlldy5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICBpbWFnZXMucHVzaCgkKHRoaXMpWzBdKTtcbiAgICAgICAgICBpZiAoc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgICAgIHZhciAkaW5kaWNhdG9yID0gJCgnPGxpIGNsYXNzPVwiaW5kaWNhdG9yLWl0ZW1cIj48L2xpPicpO1xuXG4gICAgICAgICAgICAvLyBBZGQgYWN0aXZlIHRvIGZpcnN0IGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAkaW5kaWNhdG9yLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSGFuZGxlIGNsaWNrcyBvbiBpbmRpY2F0b3JzLlxuICAgICAgICAgICAgJGluZGljYXRvci5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgICAgICAgY3ljbGVUbyhpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRpbmRpY2F0b3JzLmFwcGVuZCgkaW5kaWNhdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzaG93SW5kaWNhdG9ycykge1xuICAgICAgICAgIHZpZXcuYXBwZW5kKCRpbmRpY2F0b3JzKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCA9IGltYWdlcy5sZW5ndGg7XG5cblxuICAgICAgICBmdW5jdGlvbiBzZXR1cEV2ZW50cygpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3Lm9uKCd0b3VjaHN0YXJ0LmNhcm91c2VsJywgdGFwKTtcbiAgICAgICAgICAgIHZpZXcub24oJ3RvdWNobW92ZS5jYXJvdXNlbCcsIGRyYWcpO1xuICAgICAgICAgICAgdmlldy5vbigndG91Y2hlbmQuY2Fyb3VzZWwnLCByZWxlYXNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmlldy5vbignbW91c2Vkb3duLmNhcm91c2VsJywgdGFwKTtcbiAgICAgICAgICB2aWV3Lm9uKCdtb3VzZW1vdmUuY2Fyb3VzZWwnLCBkcmFnKTtcbiAgICAgICAgICB2aWV3Lm9uKCdtb3VzZXVwLmNhcm91c2VsJywgcmVsZWFzZSk7XG4gICAgICAgICAgdmlldy5vbignbW91c2VsZWF2ZS5jYXJvdXNlbCcsIHJlbGVhc2UpO1xuICAgICAgICAgIHZpZXcub24oJ2NsaWNrLmNhcm91c2VsJywgY2xpY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24geHBvcyhlKSB7XG4gICAgICAgICAgLy8gdG91Y2ggZXZlbnRcbiAgICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbW91c2UgZXZlbnRcbiAgICAgICAgICByZXR1cm4gZS5jbGllbnRYO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24geXBvcyhlKSB7XG4gICAgICAgICAgLy8gdG91Y2ggZXZlbnRcbiAgICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbW91c2UgZXZlbnRcbiAgICAgICAgICByZXR1cm4gZS5jbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd3JhcCh4KSB7XG4gICAgICAgICAgcmV0dXJuICh4ID49IGNvdW50KSA/ICh4ICUgY291bnQpIDogKHggPCAwKSA/IHdyYXAoY291bnQgKyAoeCAlIGNvdW50KSkgOiB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsKHgpIHtcbiAgICAgICAgICAvLyBUcmFjayBzY3JvbGxpbmcgc3RhdGVcbiAgICAgICAgICBzY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgIGlmICghdmlldy5oYXNDbGFzcygnc2Nyb2xsaW5nJykpIHtcbiAgICAgICAgICAgIHZpZXcuYWRkQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2Nyb2xsaW5nVGltZW91dCAhPSBudWxsKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHNjcm9sbGluZ1RpbWVvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzY3JvbGxpbmdUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHZpZXcucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgICAgIH0sIG9wdGlvbnMuZHVyYXRpb24pO1xuXG4gICAgICAgICAgLy8gU3RhcnQgYWN0dWFsIHNjcm9sbFxuICAgICAgICAgIHZhciBpLCBoYWxmLCBkZWx0YSwgZGlyLCB0d2VlbiwgZWwsIGFsaWdubWVudCwgeFRyYW5zbGF0aW9uO1xuICAgICAgICAgIHZhciBsYXN0Q2VudGVyID0gY2VudGVyO1xuXG4gICAgICAgICAgb2Zmc2V0ID0gKHR5cGVvZiB4ID09PSAnbnVtYmVyJykgPyB4IDogb2Zmc2V0O1xuICAgICAgICAgIGNlbnRlciA9IE1hdGguZmxvb3IoKG9mZnNldCArIGRpbSAvIDIpIC8gZGltKTtcbiAgICAgICAgICBkZWx0YSA9IG9mZnNldCAtIGNlbnRlciAqIGRpbTtcbiAgICAgICAgICBkaXIgPSAoZGVsdGEgPCAwKSA/IDEgOiAtMTtcbiAgICAgICAgICB0d2VlbiA9IC1kaXIgKiBkZWx0YSAqIDIgLyBkaW07XG4gICAgICAgICAgaGFsZiA9IGNvdW50ID4+IDE7XG5cbiAgICAgICAgICBpZiAoIW9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICBhbGlnbm1lbnQgPSAndHJhbnNsYXRlWCgnICsgKHZpZXdbMF0uY2xpZW50V2lkdGggLSBpdGVtX3dpZHRoKSAvIDIgKyAncHgpICc7XG4gICAgICAgICAgICBhbGlnbm1lbnQgKz0gJ3RyYW5zbGF0ZVkoJyArICh2aWV3WzBdLmNsaWVudEhlaWdodCAtIGl0ZW1faGVpZ2h0KSAvIDIgKyAncHgpJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxpZ25tZW50ID0gJ3RyYW5zbGF0ZVgoMCknO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNldCBpbmRpY2F0b3IgYWN0aXZlXG4gICAgICAgICAgaWYgKHNob3dJbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IChjZW50ZXIgJSBjb3VudCk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlSW5kaWNhdG9yID0gJGluZGljYXRvcnMuZmluZCgnLmluZGljYXRvci1pdGVtLmFjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZUluZGljYXRvci5pbmRleCgpICE9PSBkaWZmKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICRpbmRpY2F0b3JzLmZpbmQoJy5pbmRpY2F0b3ItaXRlbScpLmVxKGRpZmYpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjZW50ZXJcbiAgICAgICAgICAvLyBEb24ndCBzaG93IHdyYXBwZWQgaXRlbXMuXG4gICAgICAgICAgaWYgKCFub1dyYXAgfHwgKGNlbnRlciA+PSAwICYmIGNlbnRlciA8IGNvdW50KSkge1xuICAgICAgICAgICAgZWwgPSBpbWFnZXNbd3JhcChjZW50ZXIpXTtcblxuICAgICAgICAgICAgLy8gQWRkIGFjdGl2ZSBjbGFzcyB0byBjZW50ZXIgaXRlbS5cbiAgICAgICAgICAgIGlmICghJChlbCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgIHZpZXcuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICQoZWwpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsLnN0eWxlW3hmb3JtXSA9IGFsaWdubWVudCArXG4gICAgICAgICAgICAgICcgdHJhbnNsYXRlWCgnICsgKC1kZWx0YSAvIDIpICsgJ3B4KScgK1xuICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVgoJyArIChkaXIgKiBvcHRpb25zLnNoaWZ0ICogdHdlZW4gKiBpKSArICdweCknICtcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVaKCcgKyAob3B0aW9ucy5kaXN0ICogdHdlZW4pICsgJ3B4KSc7XG4gICAgICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7IHR3ZWVuZWRPcGFjaXR5ID0gMTsgfVxuICAgICAgICAgICAgZWxzZSB7IHR3ZWVuZWRPcGFjaXR5ID0gMSAtIDAuMiAqIHR3ZWVuOyB9XG4gICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdHdlZW5lZE9wYWNpdHk7XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IGhhbGY7ICsraSkge1xuICAgICAgICAgICAgLy8gcmlnaHQgc2lkZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICAgIHpUcmFuc2xhdGlvbiA9IG9wdGlvbnMuZGlzdDtcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAoaSA9PT0gaGFsZiAmJiBkZWx0YSA8IDApID8gMSAtIHR3ZWVuIDogMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHpUcmFuc2xhdGlvbiA9IG9wdGlvbnMuZGlzdCAqIChpICogMiArIHR3ZWVuICogZGlyKTtcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAxIC0gMC4yICogKGkgKiAyICsgdHdlZW4gKiBkaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxuICAgICAgICAgICAgaWYgKCFub1dyYXAgfHwgY2VudGVyICsgaSA8IGNvdW50KSB7XG4gICAgICAgICAgICAgIGVsID0gaW1hZ2VzW3dyYXAoY2VudGVyICsgaSldO1xuICAgICAgICAgICAgICBlbC5zdHlsZVt4Zm9ybV0gPSBhbGlnbm1lbnQgK1xuICAgICAgICAgICAgICAgICcgdHJhbnNsYXRlWCgnICsgKG9wdGlvbnMuc2hpZnQgKyAoZGltICogaSAtIGRlbHRhKSAvIDIpICsgJ3B4KScgK1xuICAgICAgICAgICAgICAgICcgdHJhbnNsYXRlWignICsgelRyYW5zbGF0aW9uICsgJ3B4KSc7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLnpJbmRleCA9IC1pO1xuICAgICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdHdlZW5lZE9wYWNpdHk7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vIGxlZnQgc2lkZVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICAgIHpUcmFuc2xhdGlvbiA9IG9wdGlvbnMuZGlzdDtcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAoaSA9PT0gaGFsZiAmJiBkZWx0YSA+IDApID8gMSAtIHR3ZWVuIDogMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHpUcmFuc2xhdGlvbiA9IG9wdGlvbnMuZGlzdCAqIChpICogMiAtIHR3ZWVuICogZGlyKTtcbiAgICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAxIC0gMC4yICogKGkgKiAyIC0gdHdlZW4gKiBkaXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxuICAgICAgICAgICAgaWYgKCFub1dyYXAgfHwgY2VudGVyIC0gaSA+PSAwKSB7XG4gICAgICAgICAgICAgIGVsID0gaW1hZ2VzW3dyYXAoY2VudGVyIC0gaSldO1xuICAgICAgICAgICAgICBlbC5zdHlsZVt4Zm9ybV0gPSBhbGlnbm1lbnQgK1xuICAgICAgICAgICAgICAgICcgdHJhbnNsYXRlWCgnICsgKC1vcHRpb25zLnNoaWZ0ICsgKC1kaW0gKiBpIC0gZGVsdGEpIC8gMikgKyAncHgpJyArXG4gICAgICAgICAgICAgICAgJyB0cmFuc2xhdGVaKCcgKyB6VHJhbnNsYXRpb24gKyAncHgpJztcbiAgICAgICAgICAgICAgZWwuc3R5bGUuekluZGV4ID0gLWk7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSB0d2VlbmVkT3BhY2l0eTtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2VudGVyXG4gICAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxuICAgICAgICAgIGlmICghbm9XcmFwIHx8IChjZW50ZXIgPj0gMCAmJiBjZW50ZXIgPCBjb3VudCkpIHtcbiAgICAgICAgICAgIGVsID0gaW1hZ2VzW3dyYXAoY2VudGVyKV07XG4gICAgICAgICAgICBlbC5zdHlsZVt4Zm9ybV0gPSBhbGlnbm1lbnQgK1xuICAgICAgICAgICAgICAnIHRyYW5zbGF0ZVgoJyArICgtZGVsdGEgLyAyKSArICdweCknICtcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVYKCcgKyAoZGlyICogb3B0aW9ucy5zaGlmdCAqIHR3ZWVuKSArICdweCknICtcbiAgICAgICAgICAgICAgJyB0cmFuc2xhdGVaKCcgKyAob3B0aW9ucy5kaXN0ICogdHdlZW4pICsgJ3B4KSc7XG4gICAgICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZnVsbFdpZHRoKSB7IHR3ZWVuZWRPcGFjaXR5ID0gMTsgfVxuICAgICAgICAgICAgZWxzZSB7IHR3ZWVuZWRPcGFjaXR5ID0gMSAtIDAuMiAqIHR3ZWVuOyB9XG4gICAgICAgICAgICBlbC5zdHlsZS5vcGFjaXR5ID0gdHdlZW5lZE9wYWNpdHk7XG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBvbkN5Y2xlVG8gY2FsbGJhY2tcbiAgICAgICAgICBpZiAobGFzdENlbnRlciAhPT0gY2VudGVyICYmXG4gICAgICAgICAgICAgIHR5cGVvZihvcHRpb25zLm9uQ3ljbGVUbykgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyICRjdXJyX2l0ZW0gPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZXEod3JhcChjZW50ZXIpKTtcbiAgICAgICAgICAgIG9wdGlvbnMub25DeWNsZVRvLmNhbGwodGhpcywgJGN1cnJfaXRlbSwgZHJhZ2dlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT25lIHRpbWUgY2FsbGJhY2tcbiAgICAgICAgICBpZiAodHlwZW9mKG9uZVRpbWVDYWxsYmFjaykgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb25lVGltZUNhbGxiYWNrLmNhbGwodGhpcywgJGN1cnJfaXRlbSwgZHJhZ2dlZCk7XG4gICAgICAgICAgICBvbmVUaW1lQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRyYWNrKCkge1xuICAgICAgICAgIHZhciBub3csIGVsYXBzZWQsIGRlbHRhLCB2O1xuXG4gICAgICAgICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBlbGFwc2VkID0gbm93IC0gdGltZXN0YW1wO1xuICAgICAgICAgIHRpbWVzdGFtcCA9IG5vdztcbiAgICAgICAgICBkZWx0YSA9IG9mZnNldCAtIGZyYW1lO1xuICAgICAgICAgIGZyYW1lID0gb2Zmc2V0O1xuXG4gICAgICAgICAgdiA9IDEwMDAgKiBkZWx0YSAvICgxICsgZWxhcHNlZCk7XG4gICAgICAgICAgdmVsb2NpdHkgPSAwLjggKiB2ICsgMC4yICogdmVsb2NpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhdXRvU2Nyb2xsKCkge1xuICAgICAgICAgIHZhciBlbGFwc2VkLCBkZWx0YTtcblxuICAgICAgICAgIGlmIChhbXBsaXR1ZGUpIHtcbiAgICAgICAgICAgIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuICAgICAgICAgICAgZGVsdGEgPSBhbXBsaXR1ZGUgKiBNYXRoLmV4cCgtZWxhcHNlZCAvIG9wdGlvbnMuZHVyYXRpb24pO1xuICAgICAgICAgICAgaWYgKGRlbHRhID4gMiB8fCBkZWx0YSA8IC0yKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsKHRhcmdldCAtIGRlbHRhKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrKGUpIHtcbiAgICAgICAgICAvLyBEaXNhYmxlIGNsaWNrcyBpZiBjYXJvdXNlbCB3YXMgZHJhZ2dlZC5cbiAgICAgICAgICBpZiAoZHJhZ2dlZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICB2YXIgY2xpY2tlZEluZGV4ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmNhcm91c2VsLWl0ZW0nKS5pbmRleCgpO1xuICAgICAgICAgICAgdmFyIGRpZmYgPSB3cmFwKGNlbnRlcikgLSBjbGlja2VkSW5kZXg7XG5cbiAgICAgICAgICAgIC8vIERpc2FibGUgY2xpY2tzIGlmIGNhcm91c2VsIHdhcyBzaGlmdGVkIGJ5IGNsaWNrXG4gICAgICAgICAgICBpZiAoZGlmZiAhPT0gMCkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjeWNsZVRvKGNsaWNrZWRJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3ljbGVUbyhuKSB7XG4gICAgICAgICAgdmFyIGRpZmYgPSAoY2VudGVyICUgY291bnQpIC0gbjtcblxuICAgICAgICAgIC8vIEFjY291bnQgZm9yIHdyYXBhcm91bmQuXG4gICAgICAgICAgaWYgKCFub1dyYXApIHtcbiAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZiArIGNvdW50KSA8IE1hdGguYWJzKGRpZmYpKSB7IGRpZmYgKz0gY291bnQ7IH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZiAtIGNvdW50KSA8IGRpZmYpIHsgZGlmZiAtPSBjb3VudDsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENhbGwgcHJldiBvciBuZXh0IGFjY29yZGluZ2x5LlxuICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgdmlldy50cmlnZ2VyKCdjYXJvdXNlbE5leHQnLCBbTWF0aC5hYnMoZGlmZildKTtcblxuICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgICAgIHZpZXcudHJpZ2dlcignY2Fyb3VzZWxQcmV2JywgW2RpZmZdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0YXAoZSkge1xuICAgICAgICAgIC8vIEZpeGVzIGZpcmVmb3ggZHJhZ2dhYmxlIGltYWdlIGJ1Z1xuICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmICQoZS50YXJnZXQpLmlzKCdpbWcnKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICBkcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgICAgdmVydGljYWxfZHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgICAgIHJlZmVyZW5jZSA9IHhwb3MoZSk7XG4gICAgICAgICAgcmVmZXJlbmNlWSA9IHlwb3MoZSk7XG5cbiAgICAgICAgICB2ZWxvY2l0eSA9IGFtcGxpdHVkZSA9IDA7XG4gICAgICAgICAgZnJhbWUgPSBvZmZzZXQ7XG4gICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpY2tlcik7XG4gICAgICAgICAgdGlja2VyID0gc2V0SW50ZXJ2YWwodHJhY2ssIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICAgICAgICB2YXIgeCwgZGVsdGEsIGRlbHRhWTtcbiAgICAgICAgICBpZiAocHJlc3NlZCkge1xuICAgICAgICAgICAgeCA9IHhwb3MoZSk7XG4gICAgICAgICAgICB5ID0geXBvcyhlKTtcbiAgICAgICAgICAgIGRlbHRhID0gcmVmZXJlbmNlIC0geDtcbiAgICAgICAgICAgIGRlbHRhWSA9IE1hdGguYWJzKHJlZmVyZW5jZVkgLSB5KTtcbiAgICAgICAgICAgIGlmIChkZWx0YVkgPCAzMCAmJiAhdmVydGljYWxfZHJhZ2dlZCkge1xuICAgICAgICAgICAgICAvLyBJZiB2ZXJ0aWNhbCBzY3JvbGxpbmcgZG9uJ3QgYWxsb3cgZHJhZ2dpbmcuXG4gICAgICAgICAgICAgIGlmIChkZWx0YSA+IDIgfHwgZGVsdGEgPCAtMikge1xuICAgICAgICAgICAgICAgIGRyYWdnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSA9IHg7XG4gICAgICAgICAgICAgICAgc2Nyb2xsKG9mZnNldCArIGRlbHRhKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRyYWdnZWQpIHtcbiAgICAgICAgICAgICAgLy8gSWYgZHJhZ2dpbmcgZG9uJ3QgYWxsb3cgdmVydGljYWwgc2Nyb2xsLlxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVmVydGljYWwgc2Nyb2xsaW5nLlxuICAgICAgICAgICAgICB2ZXJ0aWNhbF9kcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZHJhZ2dlZCkge1xuICAgICAgICAgICAgLy8gSWYgZHJhZ2dpbmcgZG9uJ3QgYWxsb3cgdmVydGljYWwgc2Nyb2xsLlxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZWxlYXNlKGUpIHtcbiAgICAgICAgICBpZiAocHJlc3NlZCkge1xuICAgICAgICAgICAgcHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aWNrZXIpO1xuICAgICAgICAgIHRhcmdldCA9IG9mZnNldDtcbiAgICAgICAgICBpZiAodmVsb2NpdHkgPiAxMCB8fCB2ZWxvY2l0eSA8IC0xMCkge1xuICAgICAgICAgICAgYW1wbGl0dWRlID0gMC45ICogdmVsb2NpdHk7XG4gICAgICAgICAgICB0YXJnZXQgPSBvZmZzZXQgKyBhbXBsaXR1ZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldCA9IE1hdGgucm91bmQodGFyZ2V0IC8gZGltKSAqIGRpbTtcblxuICAgICAgICAgIC8vIE5vIHdyYXAgb2YgaXRlbXMuXG4gICAgICAgICAgaWYgKG5vV3JhcCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA+PSBkaW0gKiAoY291bnQgLSAxKSkge1xuICAgICAgICAgICAgICB0YXJnZXQgPSBkaW0gKiAoY291bnQgLSAxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0IDwgMCkge1xuICAgICAgICAgICAgICB0YXJnZXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhbXBsaXR1ZGUgPSB0YXJnZXQgLSBvZmZzZXQ7XG4gICAgICAgICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1Njcm9sbCk7XG5cbiAgICAgICAgICBpZiAoZHJhZ2dlZCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgeGZvcm0gPSAndHJhbnNmb3JtJztcbiAgICAgICAgWyd3ZWJraXQnLCAnTW96JywgJ08nLCAnbXMnXS5ldmVyeShmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgICAgdmFyIGUgPSBwcmVmaXggKyAnVHJhbnNmb3JtJztcbiAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB4Zm9ybSA9IGU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHZhciB0aHJvdHRsZWRSZXNpemUgPSBNYXRlcmlhbGl6ZS50aHJvdHRsZShmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICAgIGl0ZW1fd2lkdGggPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgICB2YXIgaW1hZ2VIZWlnaHQgPSB2aWV3LmZpbmQoJy5jYXJvdXNlbC1pdGVtLmFjdGl2ZScpLmhlaWdodCgpO1xuICAgICAgICAgICAgZGltID0gaXRlbV93aWR0aCAqIDIgKyBvcHRpb25zLnBhZGRpbmc7XG4gICAgICAgICAgICBvZmZzZXQgPSBjZW50ZXIgKiAyICogaXRlbV93aWR0aDtcbiAgICAgICAgICAgIHRhcmdldCA9IG9mZnNldDtcbiAgICAgICAgICAgIHNldENhcm91c2VsSGVpZ2h0KHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY3JvbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICAgICQod2luZG93KVxuICAgICAgICAgIC5vZmYoJ3Jlc2l6ZS5jYXJvdXNlbC0nK3VuaXF1ZU5hbWVzcGFjZSlcbiAgICAgICAgICAub24oJ3Jlc2l6ZS5jYXJvdXNlbC0nK3VuaXF1ZU5hbWVzcGFjZSwgdGhyb3R0bGVkUmVzaXplKTtcblxuICAgICAgICBzZXR1cEV2ZW50cygpO1xuICAgICAgICBzY3JvbGwob2Zmc2V0KTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdjYXJvdXNlbE5leHQnLCBmdW5jdGlvbihlLCBuLCBjYWxsYmFjaykge1xuICAgICAgICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG4gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvbmVUaW1lQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXQgPSAoZGltICogTWF0aC5yb3VuZChvZmZzZXQgLyBkaW0pKSArIChkaW0gKiBuKTtcbiAgICAgICAgICBpZiAob2Zmc2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIGFtcGxpdHVkZSA9IHRhcmdldCAtIG9mZnNldDtcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1Njcm9sbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdjYXJvdXNlbFByZXYnLCBmdW5jdGlvbihlLCBuLCBjYWxsYmFjaykge1xuICAgICAgICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG4gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvbmVUaW1lQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXQgPSAoZGltICogTWF0aC5yb3VuZChvZmZzZXQgLyBkaW0pKSAtIChkaW0gKiBuKTtcbiAgICAgICAgICBpZiAob2Zmc2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIGFtcGxpdHVkZSA9IHRhcmdldCAtIG9mZnNldDtcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1Njcm9sbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdjYXJvdXNlbFNldCcsIGZ1bmN0aW9uKGUsIG4sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbiA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG9uZVRpbWVDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGN5Y2xlVG8obik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcblxuXG5cbiAgICB9LFxuICAgIG5leHQgOiBmdW5jdGlvbihuLCBjYWxsYmFjaykge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjYXJvdXNlbE5leHQnLCBbbiwgY2FsbGJhY2tdKTtcbiAgICB9LFxuICAgIHByZXYgOiBmdW5jdGlvbihuLCBjYWxsYmFjaykge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjYXJvdXNlbFByZXYnLCBbbiwgY2FsbGJhY2tdKTtcbiAgICB9LFxuICAgIHNldCA6IGZ1bmN0aW9uKG4sIGNhbGxiYWNrKSB7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ2Nhcm91c2VsU2V0JywgW24sIGNhbGxiYWNrXSk7XG4gICAgfSxcbiAgICBkZXN0cm95IDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdW5pcXVlTmFtZXNwYWNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLW5hbWVzcGFjZScpO1xuICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdkYXRhLW5hbWVzcGFjZScpO1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaW5pdGlhbGl6ZWQnKTtcbiAgICAgICQodGhpcykuZmluZCgnLmluZGljYXRvcnMnKS5yZW1vdmUoKTtcblxuICAgICAgLy8gUmVtb3ZlIGV2ZW50IGhhbmRsZXJzXG4gICAgICAkKHRoaXMpLm9mZignY2Fyb3VzZWxOZXh0IGNhcm91c2VsUHJldiBjYXJvdXNlbFNldCcpO1xuICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLmNhcm91c2VsLScrdW5pcXVlTmFtZXNwYWNlKTtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJCh0aGlzKS5vZmYoJ3RvdWNoc3RhcnQuY2Fyb3VzZWwgdG91Y2htb3ZlLmNhcm91c2VsIHRvdWNoZW5kLmNhcm91c2VsJyk7XG4gICAgICB9XG4gICAgICAkKHRoaXMpLm9mZignbW91c2Vkb3duLmNhcm91c2VsIG1vdXNlbW92ZS5jYXJvdXNlbCBtb3VzZXVwLmNhcm91c2VsIG1vdXNlbGVhdmUuY2Fyb3VzZWwgY2xpY2suY2Fyb3VzZWwnKTtcbiAgICB9XG4gIH07XG5cblxuICAgICQuZm4uY2Fyb3VzZWwgPSBmdW5jdGlvbihtZXRob2RPck9wdGlvbnMpIHtcbiAgICAgIGlmICggbWV0aG9kc1ttZXRob2RPck9wdGlvbnNdICkge1xuICAgICAgICByZXR1cm4gbWV0aG9kc1sgbWV0aG9kT3JPcHRpb25zIF0uYXBwbHkoIHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKSk7XG4gICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZE9yT3B0aW9ucyApIHtcbiAgICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxuICAgICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQuZXJyb3IoICdNZXRob2QgJyArICBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5jYXJvdXNlbCcgKTtcbiAgICAgIH1cbiAgICB9OyAvLyBQbHVnaW4gZW5kXG59KCBqUXVlcnkgKSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcmlnaW4gPSAkKCcjJyskKHRoaXMpLmF0dHIoJ2RhdGEtYWN0aXZhdGVzJykpO1xuICAgIHZhciBzY3JlZW4gPSAkKCdib2R5Jyk7XG5cbiAgICAvLyBDcmVhdGluZyB0YXAgdGFyZ2V0XG4gICAgdmFyIHRhcFRhcmdldEVsID0gJCh0aGlzKTtcbiAgICB2YXIgdGFwVGFyZ2V0V3JhcHBlciA9IHRhcFRhcmdldEVsLnBhcmVudCgnLnRhcC10YXJnZXQtd3JhcHBlcicpO1xuICAgIHZhciB0YXBUYXJnZXRXYXZlID0gdGFwVGFyZ2V0V3JhcHBlci5maW5kKCcudGFwLXRhcmdldC13YXZlJyk7XG4gICAgdmFyIHRhcFRhcmdldE9yaWdpbkVsID0gdGFwVGFyZ2V0V3JhcHBlci5maW5kKCcudGFwLXRhcmdldC1vcmlnaW4nKTtcbiAgICB2YXIgdGFwVGFyZ2V0Q29udGVudEVsID0gdGFwVGFyZ2V0RWwuZmluZCgnLnRhcC10YXJnZXQtY29udGVudCcpO1xuXG4gICAgLy8gQ3JlYXRpbmcgd3JhcHBlclxuICAgIGlmICghdGFwVGFyZ2V0V3JhcHBlci5sZW5ndGgpIHtcbiAgICAgIHRhcFRhcmdldFdyYXBwZXIgPSB0YXBUYXJnZXRFbC53cmFwKCQoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LXdyYXBwZXJcIj48L2Rpdj4nKSkucGFyZW50KCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRpbmcgY29udGVudFxuICAgIGlmICghdGFwVGFyZ2V0Q29udGVudEVsLmxlbmd0aCkge1xuICAgICAgdGFwVGFyZ2V0Q29udGVudEVsID0gJCgnPGRpdiBjbGFzcz1cInRhcC10YXJnZXQtY29udGVudFwiPjwvZGl2PicpO1xuICAgICAgdGFwVGFyZ2V0RWwuYXBwZW5kKHRhcFRhcmdldENvbnRlbnRFbCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRpbmcgZm9yZWdyb3VuZCB3YXZlXG4gICAgaWYgKCF0YXBUYXJnZXRXYXZlLmxlbmd0aCkge1xuICAgICAgdGFwVGFyZ2V0V2F2ZSA9ICQoJzxkaXYgY2xhc3M9XCJ0YXAtdGFyZ2V0LXdhdmVcIj48L2Rpdj4nKTtcblxuICAgICAgLy8gQ3JlYXRpbmcgb3JpZ2luXG4gICAgICBpZiAoIXRhcFRhcmdldE9yaWdpbkVsLmxlbmd0aCkge1xuICAgICAgICB0YXBUYXJnZXRPcmlnaW5FbCA9IG9yaWdpbi5jbG9uZSh0cnVlLCB0cnVlKTtcbiAgICAgICAgdGFwVGFyZ2V0T3JpZ2luRWwuYWRkQ2xhc3MoJ3RhcC10YXJnZXQtb3JpZ2luJyk7XG4gICAgICAgIHRhcFRhcmdldE9yaWdpbkVsLnJlbW92ZUF0dHIoJ2lkJyk7XG4gICAgICAgIHRhcFRhcmdldE9yaWdpbkVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIHRhcFRhcmdldFdhdmUuYXBwZW5kKHRhcFRhcmdldE9yaWdpbkVsKTtcbiAgICAgIH1cblxuICAgICAgdGFwVGFyZ2V0V3JhcHBlci5hcHBlbmQodGFwVGFyZ2V0V2F2ZSk7XG4gICAgfVxuXG4gICAgLy8gT3BlblxuICAgIHZhciBvcGVuVGFwVGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGFwVGFyZ2V0V3JhcHBlci5pcygnLm9wZW4nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyBvcGVuIGNsYXNzXG4gICAgICB0YXBUYXJnZXRXcmFwcGVyLmFkZENsYXNzKCdvcGVuJyk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHRhcFRhcmdldE9yaWdpbkVsLm9mZignY2xpY2sudGFwVGFyZ2V0Jykub24oJ2NsaWNrLnRhcFRhcmdldCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBjbG9zZVRhcFRhcmdldCgpO1xuICAgICAgICAgIHRhcFRhcmdldE9yaWdpbkVsLm9mZignY2xpY2sudGFwVGFyZ2V0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2sudGFwVGFyZ2V0Jykub24oJ2NsaWNrLnRhcFRhcmdldCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBjbG9zZVRhcFRhcmdldCgpO1xuICAgICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2sudGFwVGFyZ2V0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB0aHJvdHRsZWRDYWxjID0gTWF0ZXJpYWxpemUudGhyb3R0bGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2FsY3VsYXRlVGFwVGFyZ2V0KCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS50YXBUYXJnZXQnKS5vbigncmVzaXplLnRhcFRhcmdldCcsIHRocm90dGxlZENhbGMpO1xuICAgICAgfSwgMCk7XG4gICAgfTtcblxuICAgIC8vIENsb3NlXG4gICAgdmFyIGNsb3NlVGFwVGFyZ2V0ID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmICghdGFwVGFyZ2V0V3JhcHBlci5pcygnLm9wZW4nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRhcFRhcmdldFdyYXBwZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgIHRhcFRhcmdldE9yaWdpbkVsLm9mZignY2xpY2sudGFwVGFyZ2V0JylcbiAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2sudGFwVGFyZ2V0Jyk7XG4gICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUudGFwVGFyZ2V0Jyk7XG4gICAgfTtcblxuICAgIC8vIFByZSBjYWxjdWxhdGVcbiAgICB2YXIgY2FsY3VsYXRlVGFwVGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBFbGVtZW50IG9yIHBhcmVudCBpcyBmaXhlZCBwb3NpdGlvbj9cbiAgICAgIHZhciBpc0ZpeGVkID0gb3JpZ2luLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJztcbiAgICAgIGlmICghaXNGaXhlZCkge1xuICAgICAgICB2YXIgcGFyZW50cyA9IG9yaWdpbi5wYXJlbnRzKCk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXNGaXhlZCA9ICQocGFyZW50c1tpXSkuY3NzKCdwb3NpdGlvbicpID09ICdmaXhlZCc7XG4gICAgICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDYWxjdWxhdGluZyBvcmlnaW5cbiAgICAgIHZhciBvcmlnaW5XaWR0aCA9IG9yaWdpbi5vdXRlcldpZHRoKCk7XG4gICAgICB2YXIgb3JpZ2luSGVpZ2h0ID0gb3JpZ2luLm91dGVySGVpZ2h0KCk7XG4gICAgICB2YXIgb3JpZ2luVG9wID0gaXNGaXhlZCA/IG9yaWdpbi5vZmZzZXQoKS50b3AgLSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA6IG9yaWdpbi5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgb3JpZ2luTGVmdCA9IGlzRml4ZWQgPyBvcmlnaW4ub2Zmc2V0KCkubGVmdCAtICQoZG9jdW1lbnQpLnNjcm9sbExlZnQoKSA6IG9yaWdpbi5vZmZzZXQoKS5sZWZ0O1xuXG4gICAgICAvLyBDYWxjdWxhdGluZyBzY3JlZW5cbiAgICAgIHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgIHZhciBjZW50ZXJYID0gd2luZG93V2lkdGggLyAyO1xuICAgICAgdmFyIGNlbnRlclkgPSB3aW5kb3dIZWlnaHQgLyAyO1xuICAgICAgdmFyIGlzTGVmdCA9IG9yaWdpbkxlZnQgPD0gY2VudGVyWDtcbiAgICAgIHZhciBpc1JpZ2h0ID0gb3JpZ2luTGVmdCA+IGNlbnRlclg7XG4gICAgICB2YXIgaXNUb3AgPSBvcmlnaW5Ub3AgPD0gY2VudGVyWTtcbiAgICAgIHZhciBpc0JvdHRvbSA9IG9yaWdpblRvcCA+IGNlbnRlclk7XG4gICAgICB2YXIgaXNDZW50ZXJYID0gb3JpZ2luTGVmdCA+PSB3aW5kb3dXaWR0aCowLjI1ICYmIG9yaWdpbkxlZnQgPD0gd2luZG93V2lkdGgqMC43NTtcbiAgICAgIHZhciBpc0NlbnRlclkgPSBvcmlnaW5Ub3AgPj0gd2luZG93SGVpZ2h0KjAuMjUgJiYgb3JpZ2luVG9wIDw9IHdpbmRvd0hlaWdodCowLjc1O1xuXG4gICAgICAvLyBDYWxjdWxhdGluZyB0YXAgdGFyZ2V0XG4gICAgICB2YXIgdGFwVGFyZ2V0V2lkdGggPSB0YXBUYXJnZXRFbC5vdXRlcldpZHRoKCk7XG4gICAgICB2YXIgdGFwVGFyZ2V0SGVpZ2h0ID0gdGFwVGFyZ2V0RWwub3V0ZXJIZWlnaHQoKTtcbiAgICAgIHZhciB0YXBUYXJnZXRUb3AgPSBvcmlnaW5Ub3AgKyBvcmlnaW5IZWlnaHQvMiAtIHRhcFRhcmdldEhlaWdodC8yO1xuICAgICAgdmFyIHRhcFRhcmdldExlZnQgPSBvcmlnaW5MZWZ0ICsgb3JpZ2luV2lkdGgvMiAtIHRhcFRhcmdldFdpZHRoLzI7XG4gICAgICB2YXIgdGFwVGFyZ2V0UG9zaXRpb24gPSBpc0ZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSc7XG5cbiAgICAgIC8vIENhbGN1bGF0aW5nIGNvbnRlbnRcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0V2lkdGggPSBpc0NlbnRlclggPyB0YXBUYXJnZXRXaWR0aCA6IHRhcFRhcmdldFdpZHRoLzIgKyBvcmlnaW5XaWR0aDtcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0SGVpZ2h0ID0gdGFwVGFyZ2V0SGVpZ2h0LzI7XG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dFRvcCA9IGlzVG9wID8gdGFwVGFyZ2V0SGVpZ2h0LzIgOiAwO1xuICAgICAgdmFyIHRhcFRhcmdldFRleHRCb3R0b20gPSAwO1xuICAgICAgdmFyIHRhcFRhcmdldFRleHRMZWZ0ID0gaXNMZWZ0ICYmICFpc0NlbnRlclggPyB0YXBUYXJnZXRXaWR0aC8yIC0gb3JpZ2luV2lkdGggOiAwO1xuICAgICAgdmFyIHRhcFRhcmdldFRleHRSaWdodCA9IDA7XG4gICAgICB2YXIgdGFwVGFyZ2V0VGV4dFBhZGRpbmcgPSBvcmlnaW5XaWR0aDtcbiAgICAgIHZhciB0YXBUYXJnZXRUZXh0QWxpZ24gPSBpc0JvdHRvbSA/ICdib3R0b20nIDogJ3RvcCc7XG5cbiAgICAgIC8vIENhbGN1bGF0aW5nIHdhdmVcbiAgICAgIHZhciB0YXBUYXJnZXRXYXZlV2lkdGggPSBvcmlnaW5XaWR0aCA+IG9yaWdpbkhlaWdodCA/IG9yaWdpbldpZHRoKjIgOiBvcmlnaW5XaWR0aCoyO1xuICAgICAgdmFyIHRhcFRhcmdldFdhdmVIZWlnaHQgPSB0YXBUYXJnZXRXYXZlV2lkdGg7XG4gICAgICB2YXIgdGFwVGFyZ2V0V2F2ZVRvcCA9IHRhcFRhcmdldEhlaWdodC8yIC0gdGFwVGFyZ2V0V2F2ZUhlaWdodC8yO1xuICAgICAgdmFyIHRhcFRhcmdldFdhdmVMZWZ0ID0gdGFwVGFyZ2V0V2lkdGgvMiAtIHRhcFRhcmdldFdhdmVXaWR0aC8yO1xuXG4gICAgICAvLyBTZXR0aW5nIHRhcCB0YXJnZXRcbiAgICAgIHZhciB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqID0ge307XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnRvcCA9IGlzVG9wID8gdGFwVGFyZ2V0VG9wIDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnJpZ2h0ID0gaXNSaWdodCA/IHdpbmRvd1dpZHRoIC0gdGFwVGFyZ2V0TGVmdCAtIHRhcFRhcmdldFdpZHRoIDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLmJvdHRvbSA9IGlzQm90dG9tID8gd2luZG93SGVpZ2h0IC0gdGFwVGFyZ2V0VG9wIC0gdGFwVGFyZ2V0SGVpZ2h0IDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLmxlZnQgPSBpc0xlZnQgPyB0YXBUYXJnZXRMZWZ0IDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnBvc2l0aW9uID0gdGFwVGFyZ2V0UG9zaXRpb247XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyLmNzcyh0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqKTtcblxuICAgICAgLy8gU2V0dGluZyBjb250ZW50XG4gICAgICB0YXBUYXJnZXRDb250ZW50RWwuY3NzKHtcbiAgICAgICAgd2lkdGg6IHRhcFRhcmdldFRleHRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0YXBUYXJnZXRUZXh0SGVpZ2h0LFxuICAgICAgICB0b3A6IHRhcFRhcmdldFRleHRUb3AsXG4gICAgICAgIHJpZ2h0OiB0YXBUYXJnZXRUZXh0UmlnaHQsXG4gICAgICAgIGJvdHRvbTogdGFwVGFyZ2V0VGV4dEJvdHRvbSxcbiAgICAgICAgbGVmdDogdGFwVGFyZ2V0VGV4dExlZnQsXG4gICAgICAgIHBhZGRpbmc6IHRhcFRhcmdldFRleHRQYWRkaW5nLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiB0YXBUYXJnZXRUZXh0QWxpZ25cbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXR0aW5nIHdhdmVcbiAgICAgIHRhcFRhcmdldFdhdmUuY3NzKHtcbiAgICAgICAgdG9wOiB0YXBUYXJnZXRXYXZlVG9wLFxuICAgICAgICBsZWZ0OiB0YXBUYXJnZXRXYXZlTGVmdCxcbiAgICAgICAgd2lkdGg6IHRhcFRhcmdldFdhdmVXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0YXBUYXJnZXRXYXZlSGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyA9PSAnb3BlbicpIHtcbiAgICAgIGNhbGN1bGF0ZVRhcFRhcmdldCgpO1xuICAgICAgb3BlblRhcFRhcmdldCgpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zID09ICdjbG9zZScpXG4gICAgICBjbG9zZVRhcFRhcmdldCgpO1xuICAgIH0pO1xuICB9LFxuICBvcGVuOiBmdW5jdGlvbigpIHt9LFxuICBjbG9zZTogZnVuY3Rpb24oKSB7fVxuICB9O1xuXG4gICQuZm4udGFwVGFyZ2V0ID0gZnVuY3Rpb24obWV0aG9kT3JPcHRpb25zKSB7XG4gIGlmIChtZXRob2RzW21ldGhvZE9yT3B0aW9uc10gfHwgdHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ29iamVjdCcpXG4gICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cbiAgJC5lcnJvciggJ01ldGhvZCAnICsgIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnRhcC10YXJnZXQnICk7XG4gIH07XG5cbn0oIGpRdWVyeSApKTtcbiJdfQ==
