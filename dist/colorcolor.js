parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Wleo":[function(require,module,exports) {
"use strict";module.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};
},{}],"AB31":[function(require,module,exports) {
var global = arguments[3];
var r=arguments[3];function a(r,a){return n(r)||t(r,a)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function t(r,a){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)){var e=[],t=!0,n=!1,s=void 0;try{for(var o,c=r[Symbol.iterator]();!(t=(o=c.next()).done)&&(e.push(o.value),!a||e.length!==a);t=!0);}catch(i){n=!0,s=i}finally{try{t||null==c.return||c.return()}finally{if(n)throw s}}return e}}function n(r){if(Array.isArray(r))return r}function s(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rgba",t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r=r.toLowerCase(),e=e.toLowerCase();var n,s,l,f,u=r,g=require("color-name"),v={rgb:{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],toRGBA:function(r){return[parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10),1]}},rgba:{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,example:["rgba(123, 234, 45, 1)","rgba(255,234,245, 0.5)"],toRGBA:function(r){return[parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10),parseFloat(r[4])]}},hex:{re:/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,example:["00ff00","336699"],toRGBA:function(r){return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),1]}},hex3:{re:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,example:["fb0","f0f"],toRGBA:function(r){return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16),1]}},hexa:{re:/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,example:["00ff00ff","336699a0"],toRGBA:function(r){return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),parseInt(r[4],16)/255]}},hex4a:{re:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,example:["fb0f","f0f8"],toRGBA:function(r){return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16),parseInt(r[4]+r[4],16)/255]}},hsl:{re:/^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,example:["hsl(120, 100%, 25%)","hsl(0, 100%, 50%)"],toRGBA:function(r){r[4]=1;var a=c(r);return[a.r,a.g,a.b,a.a]}},hsla:{re:/^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,example:["hsla(120, 100%, 25%, 1)","hsla(0, 100%, 50%, 0.5)"],toRGBA:function(r){var a=c(r);return[a.r,a.g,a.b,a.a]}},hsv:{re:/^hsv\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,example:["hsv(120, 100%, 25%)","hsv(0, 100%, 50%)"],toRGBA:function(r){var a=h(r);return[a.r,a.g,a.b,1]}},hsb:{re:/^hsb\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,example:["hsb(120, 100%, 25%)","hsb(0, 100%, 50%)"],toRGBA:function(r){var a=h(r);return[a.r,a.g,a.b,1]}}};for(var p in g.hasOwnProperty(r)&&((r=g[r]).forEach(function(a,e){"use strict";r[e]=("0"+a.toString(16)).slice(-2)}),r="#"+r.join("")),v){var d=v[p].re,x=v[p].toRGBA,I=d.exec(r);if(I){var A=x(I);n=A[0],s=A[1],l=A[2],f=+(Math.round(A[3]+"e+4")+"e-4")}}switch(n=Math.round(n<0||isNaN(n)?0:n>255?255:n),s=Math.round(s<0||isNaN(s)?0:s>255?255:s),l=Math.round(l<0||isNaN(l)?0:l>255?255:l),f=f<0||isNaN(f)?0:f>1?1:f,e){case"hex":u="#"+("0"+n.toString(16)).slice(-2)+("0"+s.toString(16)).slice(-2)+("0"+l.toString(16)).slice(-2);break;case"hexa":if(t){var F=a(o(n,s,l,f),4);n=F[0],s=F[1],l=F[2],f=F[3]}u="#"+("0"+n.toString(16)).slice(-2)+("0"+s.toString(16)).slice(-2)+("0"+l.toString(16)).slice(-2)+("0"+Math.round(255*f).toString(16)).slice(-2);break;case"hsl":var m=i({r:n,g:s,b:l});u="hsl(".concat(m.h,",").concat(m.s,"%,").concat(m.l,"%)");break;case"hsla":if(t){var k=a(o(n,s,l,f),4);n=k[0],s=k[1],l=k[2],f=k[3]}var y=i({r:n,g:s,b:l,a:f});u="hsla(".concat(y.h,",").concat(y.s,"%,").concat(y.l,"%,").concat(y.a,")");break;case"hsb":var B=b({r:n,g:s,b:l});u="hsb(".concat(B.h,",").concat(B.s,"%,").concat(B.v,"%)");break;case"hsv":var G=b({r:n,g:s,b:l});u="hsv(".concat(G.h,",").concat(G.s,"%,").concat(G.v,"%)");break;case"rgb":u="rgb(".concat(n,",").concat(s,",").concat(l,")");break;case"rgba":default:if(t){var M=a(o(n,s,l,f),4);n=M[0],s=M[1],l=M[2],f=M[3]}u="rgba(".concat(n,",").concat(s,",").concat(l,",").concat(f,")")}return u}function o(r,a,e,t){"use strict";var n;return t=(255-(n=Math.min(r,a,e)))/255,[r=((r-n)/t).toFixed(0),a=((a-n)/t).toFixed(0),e=((e-n)/t).toFixed(0),t=parseFloat(t.toFixed(4))]}function c(r){var a={},e={h:r[1]/360,s:r[2]/100,l:r[3]/100,a:parseFloat(r[4])};if(0===e.s){var t=255*e.l;a={r:t,g:t,b:t,a:e.a}}else{var n=e.l<.5?e.l*(1+e.s):e.l+e.s-e.l*e.s,s=2*e.l-n;a.r=255*l(s,n,e.h+1/3),a.g=255*l(s,n,e.h),a.b=255*l(s,n,e.h-1/3),a.a=e.a}return a}function i(r){r.r=r.r/255,r.g=r.g/255,r.b=r.b/255;var a,e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),n=[];if(n.a=r.a,n.l=(e+t)/2,e===t)n.h=0,n.s=0;else{switch(a=e-t,n.s=n.l>=.5?a/(2-e-t):a/(e+t),e){case r.r:n.h=(r.g-r.b)/a+(r.g<r.b?6:0);break;case r.g:n.h=(r.b-r.r)/a+2;break;case r.b:n.h=(r.r-r.g)/a+4}n.h/=6}return n.h=parseInt((360*n.h).toFixed(0),10),n.s=parseInt((100*n.s).toFixed(0),10),n.l=parseInt((100*n.l).toFixed(0),10),n}function h(r){var a={},e={h:r[1]/360,s:r[2]/100,v:r[3]/100},t=Math.floor(6*e.h),n=6*e.h-t,s=e.v*(1-e.s),o=e.v*(1-n*e.s),c=e.v*(1-(1-n)*e.s);switch(t%6){case 0:a.r=e.v,a.g=c,a.b=s;break;case 1:a.r=o,a.g=e.v,a.b=s;break;case 2:a.r=s,a.g=e.v,a.b=c;break;case 3:a.r=s,a.g=o,a.b=e.v;break;case 4:a.r=c,a.g=s,a.b=e.v;break;case 5:a.r=e.v,a.g=s,a.b=o}return a.r=255*a.r,a.g=255*a.g,a.b=255*a.b,a}function b(r){r.r=f(parseInt(r.r,10)%256,256),r.g=f(parseInt(r.g,10)%256,256),r.b=f(parseInt(r.b,10)%256,256);var a=Math.max(r.r,r.g,r.b),e=Math.min(r.r,r.g,r.b),t=a-e,n={h:0,s:0===a?0:t/a,v:a};if(a!==e){switch(a){case r.r:n.h=(r.g-r.b)/t+(r.g<r.b?6:0);break;case r.g:n.h=(r.b-r.r)/t+2;break;case r.b:n.h=(r.r-r.g)/t+4}n.h/=6}return n.h=parseInt((360*n.h).toFixed(0),10),n.s=parseInt((100*n.s).toFixed(0),10),n.v=parseInt((100*n.v).toFixed(0),10),n}function l(r,a,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+6*(a-r)*e:e<.5?a:e<2/3?r+6*(2/3-e)*(a-r):r}function f(r,a){return r/a}module.exports=s,r.colorcolor=module.exports;
},{"color-name":"Wleo"}]},{},["AB31"], null)
//# sourceMappingURL=/colorcolor.js.map