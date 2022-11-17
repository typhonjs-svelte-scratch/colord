var t={grad:.9,turn:360,rad:360/(2*Math.PI)},r=function(t){return"string"==typeof t?t.length>0:"number"==typeof t},a=function(t,r,a){return void 0===r&&(r=0),void 0===a&&(a=Math.pow(10,r)),Math.round(a*t)/a+0},n=function(t,r,a){return void 0===r&&(r=0),void 0===a&&(a=1),t>a?a:t>r?t:r},c=function(t){var r=t/255;return r<.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)},u=function(t){return 255*(t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t)},o=96.422,h=100,e=82.521,i=function(t){var r,a,c={x:.9555766*(r=t).x+-.0230393*r.y+.0631636*r.z,y:-.0282895*r.x+1.0099416*r.y+.0210077*r.z,z:.0122982*r.x+-.020483*r.y+1.3299098*r.z};return a={r:u(.032404542*c.x-.015371385*c.y-.004985314*c.z),g:u(-.00969266*c.x+.018760108*c.y+41556e-8*c.z),b:u(556434e-9*c.x-.002040259*c.y+.010572252*c.z),a:t.a},{r:n(a.r,0,255),g:n(a.g,0,255),b:n(a.b,0,255),a:n(a.a)}},l=function(t){var r=c(t.r),a=c(t.g),u=c(t.b);return function(t){return{x:n(t.x,0,o),y:n(t.y,0,h),z:n(t.z,0,e),a:n(t.a)}}(function(t){return{x:1.0478112*t.x+.0228866*t.y+-.050127*t.z,y:.0295424*t.x+.9904844*t.y+-.0170491*t.z,z:-.0092345*t.x+.0150436*t.y+.7521316*t.z,a:t.a}}({x:100*(.4124564*r+.3575761*a+.1804375*u),y:100*(.2126729*r+.7151522*a+.072175*u),z:100*(.0193339*r+.119192*a+.9503041*u),a:t.a}))},f=216/24389,b=24389/27,d=function(t){return{l:n(t.l,0,100),c:t.c,h:(r=t.h,(r=isFinite(r)?r%360:0)>0?r:r+360),a:t.a};var r},p=function(t){return{l:a(t.l,2),c:a(t.c,2),h:a(t.h,2),a:a(t.a,3)}},v=function(t){var a=t.l,n=t.c,c=t.h,u=t.a,o=void 0===u?1:u;if(!r(a)||!r(n)||!r(c))return null;var h=d({l:Number(a),c:Number(n),h:Number(c),a:Number(o)});return M(h)},y=function(t){var r=function(t){var r=l(t),a=r.x/o,n=r.y/h,c=r.z/e;return a=a>f?Math.cbrt(a):(b*a+16)/116,{l:116*(n=n>f?Math.cbrt(n):(b*n+16)/116)-16,a:500*(a-n),b:200*(n-(c=c>f?Math.cbrt(c):(b*c+16)/116)),alpha:r.a}}(t),n=a(r.a,3),c=a(r.b,3),u=Math.atan2(c,n)/Math.PI*180;return{l:r.l,c:Math.sqrt(n*n+c*c),h:u<0?u+360:u,a:r.alpha}},M=function(t){return r={l:t.l,a:t.c*Math.cos(t.h*Math.PI/180),b:t.c*Math.sin(t.h*Math.PI/180),alpha:t.a},n=r.a/500+(a=(r.l+16)/116),c=a-r.b/200,i({x:(Math.pow(n,3)>f?Math.pow(n,3):(116*n-16)/b)*o,y:(r.l>8?Math.pow((r.l+16)/116,3):r.l/b)*h,z:(Math.pow(c,3)>f?Math.pow(c,3):(116*c-16)/b)*e,a:r.alpha});var r,a,n,c},x=/^lch\(\s*([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,s=function(r){var a=x.exec(r);if(!a)return null;var n,c,u=d({l:Number(a[1]),c:Number(a[2]),h:(n=a[3],c=a[4],void 0===c&&(c="deg"),Number(n)*(t[c]||1)),a:void 0===a[5]?1:Number(a[5])/(a[6]?100:1)});return M(u)},z=function(t,r){t.prototype.toLch=function(){return p(y(this.rgba))},t.prototype.toLchString=function(){return t=p(y(this.rgba)),r=t.l,a=t.c,n=t.h,(c=t.a)<1?"lch(".concat(r,"% ").concat(a," ").concat(n," / ").concat(c,")"):"lch(".concat(r,"% ").concat(a," ").concat(n,")");var t,r,a,n,c},r.string.push([s,"lch"]),r.object.push([v,"lch"])};export{z as default};
