var n=function(n){return"string"==typeof n?n.length>0:"number"==typeof n},r=function(n,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*n)/t+0},t=function(n,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),n>t?t:n>r?n:r},c=function(n){return{c:t(n.c,0,100),m:t(n.m,0,100),y:t(n.y,0,100),k:t(n.k,0,100),a:t(n.a)}},u=function(n){return{c:r(n.c,2),m:r(n.m,2),y:r(n.y,2),k:r(n.k,2),a:r(n.a,3)}};function a(n){return{r:r(255*(1-n.c/100)*(1-n.k/100)),g:r(255*(1-n.m/100)*(1-n.k/100)),b:r(255*(1-n.y/100)*(1-n.k/100)),a:n.a}}function o(n){var t=1-Math.max(n.r/255,n.g/255,n.b/255),c=(1-n.r/255-t)/(1-t),u=(1-n.g/255-t)/(1-t),a=(1-n.b/255-t)/(1-t);return{c:isNaN(c)?0:r(100*c),m:isNaN(u)?0:r(100*u),y:isNaN(a)?0:r(100*a),k:r(100*t),a:n.a}}function e(r){var t=r.c,u=r.m,o=r.y,e=r.k,i=r.a,m=void 0===i?1:i;return n(t)&&n(u)&&n(o)&&n(e)?a(c({c:Number(t),m:Number(u),y:Number(o),k:Number(e),a:Number(m)})):null}var i=/^device-cmyk\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=function(n){var r=i.exec(n);return r?a(c({c:Number(r[1])*(r[2]?1:100),m:Number(r[3])*(r[4]?1:100),y:Number(r[5])*(r[6]?1:100),k:Number(r[7])*(r[8]?1:100),a:void 0===r[9]?1:Number(r[9])/(r[10]?100:1)})):null};var d=function(n,r){n.prototype.toCmyk=function(){return u(o(this.rgba))},n.prototype.toCmykString=function(){return n=u(o(this.rgba)),r=n.c,t=n.m,c=n.y,a=n.k,(e=n.a)<1?"device-cmyk(".concat(r,"% ").concat(t,"% ").concat(c,"% ").concat(a,"% / ").concat(e,")"):"device-cmyk(".concat(r,"% ").concat(t,"% ").concat(c,"% ").concat(a,"%)");var n,r,t,c,a,e},r.object.push([e,"cmyk"]),r.string.push([m,"cmyk"])};export{d as default};
