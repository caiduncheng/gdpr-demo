/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{538:function(t,e,r){"use strict";var n=r(3),o=r(323).trim;n({target:"String",proto:!0,forced:r(539)("trim")},{trim:function(){return o(this)}})},539:function(t,e,r){"use strict";var n=r(112).PROPER,o=r(4),h=r(324);t.exports=function(t){return o((function(){return!!h[t]()||"​᠎"!=="​᠎"[t]()||n&&h[t].name!==t}))}},706:function(t,e,r){"use strict";r(707)},707:function(t,e,r){"use strict";var n=r(3),o=r(10),h=r(5),l=r(24),f=r(8),c=r(48),d=r(215),m=r(12),v=r(58),C=r(214),w=r(325),L=r(7),B=r(25),y=L("replace"),P=TypeError,A=h("".indexOf),E=h("".replace),k=h("".slice),T=Math.max;n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,h,L,D,M,S,_,N,I=l(this),H=0,x=0,R="";if(!c(t)){if((r=d(t))&&(n=m(l(C(t))),!~A(n,"g")))throw new P("`.replaceAll` does not allow non-global regexes");if(h=v(t,y))return o(h,t,I,e);if(B&&r)return E(m(I),t,e)}for(L=m(I),D=m(t),(M=f(e))||(e=m(e)),S=D.length,_=T(1,S),H=A(L,D);-1!==H;)N=M?m(e(D,H,L)):w(D,L,H,[],void 0,e),R+=k(L,x,H)+N,x=H+S,H=H+_>L.length?-1:A(L,D,H+_);return x<L.length&&(R+=k(L,x)),R}})},708:function(t,e,r){"use strict";var n=1,o=2,h=4,l=8;function f(data){this.mode=h,this.data=data}f.prototype={getLength:function(t){return this.data.length},write:function(t){for(var i=0;i<this.data.length;i++)t.put(this.data.charCodeAt(i),8)}};var c=f,d={L:1,M:0,Q:3,H:2};function m(t,e){this.totalCount=t,this.dataCount=e}m.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],m.getRSBlocks=function(t,e){var r=m.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=new Array,i=0;i<n;i++)for(var h=r[3*i+0],l=r[3*i+1],f=r[3*i+2],c=0;c<h;c++)o.push(new m(l,f));return o},m.getRsBlockTable=function(t,e){switch(e){case d.L:return m.RS_BLOCK_TABLE[4*(t-1)+0];case d.M:return m.RS_BLOCK_TABLE[4*(t-1)+1];case d.Q:return m.RS_BLOCK_TABLE[4*(t-1)+2];case d.H:return m.RS_BLOCK_TABLE[4*(t-1)+3];default:return}};var v=m;function C(){this.buffer=new Array,this.length=0}C.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};for(var w=C,L={glog:function(t){if(t<1)throw new Error("glog("+t+")");return L.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return L.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},i=0;i<8;i++)L.EXP_TABLE[i]=1<<i;for(i=8;i<256;i++)L.EXP_TABLE[i]=L.EXP_TABLE[i-4]^L.EXP_TABLE[i-5]^L.EXP_TABLE[i-6]^L.EXP_TABLE[i-8];for(i=0;i<255;i++)L.LOG_TABLE[L.EXP_TABLE[i]]=i;var B=L;function y(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}y.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var r=0;r<t.getLength();r++)e[i+r]^=B.gexp(B.glog(this.get(i))+B.glog(t.get(r)));return new y(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=B.glog(this.get(0))-B.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=B.gexp(B.glog(t.get(i))+e);return new y(r,0).mod(t)}};var P=y,A=0,E=1,k=2,T=3,D=4,M=5,S=6,_=7,N={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(data){for(var t=data<<10;N.getBCHDigit(t)-N.getBCHDigit(N.G15)>=0;)t^=N.G15<<N.getBCHDigit(t)-N.getBCHDigit(N.G15);return(data<<10|t)^N.G15_MASK},getBCHTypeNumber:function(data){for(var t=data<<12;N.getBCHDigit(t)-N.getBCHDigit(N.G18)>=0;)t^=N.G18<<N.getBCHDigit(t)-N.getBCHDigit(N.G18);return data<<12|t},getBCHDigit:function(data){for(var t=0;0!=data;)t++,data>>>=1;return t},getPatternPosition:function(t){return N.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,i,e){switch(t){case A:return(i+e)%2==0;case E:return i%2==0;case k:return e%3==0;case T:return(i+e)%3==0;case D:return(Math.floor(i/2)+Math.floor(e/3))%2==0;case M:return i*e%2+i*e%3==0;case S:return(i*e%2+i*e%3)%2==0;case _:return(i*e%3+(i+e)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var a=new P([1],0),i=0;i<t;i++)a=a.multiply(new P([1,B.gexp(i)],0));return a},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n:return 10;case o:return 9;case h:case l:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n:return 12;case o:return 11;case h:return 16;case l:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n:return 14;case o:return 13;case h:return 16;case l:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var col=0;col<e;col++){for(var o=0,h=t.isDark(n,col),l=-1;l<=1;l++)if(!(n+l<0||e<=n+l))for(var f=-1;f<=1;f++)col+f<0||e<=col+f||0==l&&0==f||h==t.isDark(n+l,col+f)&&o++;o>5&&(r+=3+o-5)}for(n=0;n<e-1;n++)for(col=0;col<e-1;col++){var c=0;t.isDark(n,col)&&c++,t.isDark(n+1,col)&&c++,t.isDark(n,col+1)&&c++,t.isDark(n+1,col+1)&&c++,0!=c&&4!=c||(r+=3)}for(n=0;n<e;n++)for(col=0;col<e-6;col++)t.isDark(n,col)&&!t.isDark(n,col+1)&&t.isDark(n,col+2)&&t.isDark(n,col+3)&&t.isDark(n,col+4)&&!t.isDark(n,col+5)&&t.isDark(n,col+6)&&(r+=40);for(col=0;col<e;col++)for(n=0;n<e-6;n++)t.isDark(n,col)&&!t.isDark(n+1,col)&&t.isDark(n+2,col)&&t.isDark(n+3,col)&&t.isDark(n+4,col)&&!t.isDark(n+5,col)&&t.isDark(n+6,col)&&(r+=40);var d=0;for(col=0;col<e;col++)for(n=0;n<e;n++)t.isDark(n,col)&&d++;return r+=10*(Math.abs(100*d/e/e-50)/5)}},I=N;function H(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var x=H.prototype;x.addData=function(data){var t=new c(data);this.dataList.push(t),this.dataCache=null},x.isDark=function(t,col){if(t<0||this.moduleCount<=t||col<0||this.moduleCount<=col)throw new Error(t+","+col);return this.modules[t][col]},x.getModuleCount=function(){return this.moduleCount},x.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=v.getRSBlocks(t,this.errorCorrectLevel),r=new w,n=0,i=0;i<e.length;i++)n+=e[i].dataCount;for(i=0;i<this.dataList.length;i++){var data=this.dataList[i];r.put(data.mode,4),r.put(data.getLength(),I.getLengthInBits(data.mode,t)),data.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},x.makeImpl=function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++)this.modules[r][col]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=H.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},x.setupPositionProbePattern=function(t,col){for(var e=-1;e<=7;e++)if(!(t+e<=-1||this.moduleCount<=t+e))for(var r=-1;r<=7;r++)col+r<=-1||this.moduleCount<=col+r||(this.modules[t+e][col+r]=0<=e&&e<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=r&&r<=4)},x.getBestMaskPattern=function(){for(var t=0,pattern=0,i=0;i<8;i++){this.makeImpl(!0,i);var e=I.getLostPoint(this);(0==i||t>e)&&(t=e,pattern=i)}return pattern},x.createMovieClip=function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var h=1*o,col=0;col<this.modules[o].length;col++){var l=1*col;this.modules[o][col]&&(n.beginFill(0,100),n.moveTo(l,h),n.lineTo(l+1,h),n.lineTo(l+1,h+1),n.lineTo(l,h+1),n.endFill())}return n},x.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},x.setupPositionAdjustPattern=function(){for(var t=I.getPatternPosition(this.typeNumber),i=0;i<t.length;i++)for(var e=0;e<t.length;e++){var r=t[i],col=t[e];if(null==this.modules[r][col])for(var n=-2;n<=2;n++)for(var o=-2;o<=2;o++)this.modules[r+n][col+o]=-2==n||2==n||-2==o||2==o||0==n&&0==o}},x.setupTypeNumber=function(t){for(var e=I.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var r=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=r}for(i=0;i<18;i++){r=!t&&1==(e>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=r}},x.setupTypeInfo=function(t,e){for(var data=this.errorCorrectLevel<<3|e,r=I.getBCHTypeInfo(data),i=0;i<15;i++){var n=!t&&1==(r>>i&1);i<6?this.modules[i][8]=n:i<8?this.modules[i+1][8]=n:this.modules[this.moduleCount-15+i][8]=n}for(i=0;i<15;i++){n=!t&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=n:i<9?this.modules[8][15-i-1+1]=n:this.modules[8][15-i-1]=n}this.modules[this.moduleCount-8][8]=!t},x.mapData=function(data,t){for(var e=-1,r=this.moduleCount-1,n=7,o=0,col=this.moduleCount-1;col>0;col-=2)for(6==col&&col--;;){for(var h=0;h<2;h++)if(null==this.modules[r][col-h]){var l=!1;o<data.length&&(l=1==(data[o]>>>n&1)),I.getMask(t,r,col-h)&&(l=!l),this.modules[r][col-h]=l,-1==--n&&(o++,n=7)}if((r+=e)<0||this.moduleCount<=r){r-=e,e=-e;break}}},H.PAD0=236,H.PAD1=17,H.createData=function(t,e,r){for(var n=v.getRSBlocks(t,e),o=new w,i=0;i<r.length;i++){var data=r[i];o.put(data.mode,4),o.put(data.getLength(),I.getLengthInBits(data.mode,t)),data.write(o)}var h=0;for(i=0;i<n.length;i++)h+=n[i].dataCount;if(o.getLengthInBits()>8*h)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*h+")");for(o.getLengthInBits()+4<=8*h&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*h||(o.put(H.PAD0,8),o.getLengthInBits()>=8*h));)o.put(H.PAD1,8);return H.createBytes(o,n)},H.createBytes=function(t,e){for(var r=0,n=0,o=0,h=new Array(e.length),l=new Array(e.length),f=0;f<e.length;f++){var c=e[f].dataCount,d=e[f].totalCount-c;n=Math.max(n,c),o=Math.max(o,d),h[f]=new Array(c);for(var i=0;i<h[f].length;i++)h[f][i]=255&t.buffer[i+r];r+=c;var m=I.getErrorCorrectPolynomial(d),v=new P(h[f],m.getLength()-1).mod(m);l[f]=new Array(m.getLength()-1);for(i=0;i<l[f].length;i++){var C=i+v.getLength()-l[f].length;l[f][i]=C>=0?v.get(C):0}}var w=0;for(i=0;i<e.length;i++)w+=e[i].totalCount;var data=new Array(w),L=0;for(i=0;i<n;i++)for(f=0;f<e.length;f++)i<h[f].length&&(data[L++]=h[f][i]);for(i=0;i<o;i++)for(f=0;f<e.length;f++)i<l[f].length&&(data[L++]=l[f][i]);return data};var R=H;var O={props:{value:{type:String,required:!0,default:""},className:{type:String,default:""},size:{type:[Number,String],default:100,validator:function(s){return!0!==isNaN(Number(s))}},level:{type:String,default:"L",validator:function(t){return["L","Q","M","H"].indexOf(t)>-1}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}},data:function(){return{numCells:0,fgPath:""}},updated:function(){this.render()},mounted:function(){this.render()},methods:{render:function(){var t=this.value,e=this.size,r=this.level,n=this.background,o=this.foreground,h=this.renderAs,l=e>>>0,f=new R(-1,d[r]);f.addData(function(t){for(var e="",i=0;i<t.length;i++){var r=t.charCodeAt(i);r<128?e+=String.fromCharCode(r):r<2048?(e+=String.fromCharCode(192|r>>6),e+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(e+=String.fromCharCode(224|r>>12),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|63&r)):(i++,r=65536+((1023&r)<<10|1023&t.charCodeAt(i)),e+=String.fromCharCode(240|r>>18),e+=String.fromCharCode(128|r>>12&63),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|63&r))}return e}(t)),f.make();var c=f.modules,m=l/c.length,v=l/c.length,C=window.devicePixelRatio||1;if("svg"===h)this.numCells=c.length,this.fgPath=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[];return t.forEach((function(t,n){var o=null;t.forEach((function(h,l){if(!h&&null!==o)return r.push("M".concat(o+e," ").concat(n+e,"h").concat(l-o,"v1H").concat(o+e,"z")),void(o=null);if(l!==t.length-1)h&&null===o&&(o=l);else{if(!h)return;null===o?r.push("M".concat(l+e,",").concat(n+e," h1v1H").concat(l+e,"z")):r.push("M".concat(o+e,",").concat(n+e," h").concat(l+1-o,"v1H").concat(o+e,"z"))}}))})),r.join("")}(c);else{var canvas=this.$refs["qrcode-vue"],w=canvas.getContext("2d");canvas.height=canvas.width=l*C,w.scale(C,C),c.forEach((function(t,e){t.forEach((function(t,r){w.fillStyle=t?o:n;var h=Math.ceil((r+1)*m)-Math.floor(r*m),l=Math.ceil((e+1)*v)-Math.floor(e*v);w.fillRect(Math.round(r*m),Math.round(e*v),h,l)}))}))}}},render:function(t){var e=this.className,r=this.value,n=this.level,o=this.background,h=this.foreground,l=this.size,f=this.renderAs,c=this.numCells,d=this.fgPath;return t("div",{class:this.class||e,attrs:{value:r,level:n,background:o,foreground:h}},["svg"===f?t("svg",{attrs:{height:l,width:l,shapeRendering:"crispEdges",viewBox:"0 0 ".concat(c," ").concat(c)},style:{width:l+"px",height:l+"px"}},[t("path",{attrs:{fill:o,d:"M0,0 h".concat(c,"v").concat(c,"H0z")}}),t("path",{attrs:{fill:h,d:d}})]):t("canvas",{attrs:{height:l,width:l},style:{width:l+"px",height:l+"px"},ref:"qrcode-vue"},[])])}};e.a=O}}]);