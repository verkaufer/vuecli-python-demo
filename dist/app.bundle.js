(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("3ebb"),a=r.n(n);a.a},"055f":function(t,e){},"3afa":function(t,e){},"3ebb":function(t,e,r){var n=r("e31a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("499e").default;a("517436b3",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("YOLO MOTHERFUCKER")]),r("div",{staticClass:"row"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("Report",{attrs:{"account-id":"1234"}}),r("ReportMetadata",{attrs:{"account-id":"1234",reportDate:"2020-09-07"}})],1)])])])])},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"report"},[t._m(0),r("br"),r("br"),r("p",[t._v("Account ID: "+t._s(t.accountId))])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("This report contains the security assessment results from "),r("a",{attrs:{href:"https://github.com/salesforce/cloudsplaining"}},[t._v("Cloudsplaining")]),t._v(", which maps out the IAM risk landscape in a report, identifies where resource ARN constraints are not used, and identifies other risks in IAM policies like Privilege Escalation, Resource Exposure, Infrastructure Modification, and Data Exfiltration. Remediating these issues, where necessary, will help to limit the blast radius in the case of compromised AWS credentials. ")])}],c={name:"Report",props:{accountId:String}},u=c,l=r("2877"),p=Object(l["a"])(u,i,s,!1,null,"41f79a3f",null),f=p.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"report-metadata",attrs:{id:"report-metadata"}},[r("h4",[t._v("Metadata")]),r("ul",[r("li",[t._v("Created: "+t._s(t.reportDate))]),r("li",[t._v("Account ID: "+t._s(t.accountId))])])])},v=[],h={name:"ReportMetadata",props:{accountId:String,reportDate:String}},b=h,m=Object(l["a"])(b,d,v,!1,null,"4aebef92",null),g=m.exports,_={name:"App",components:{Report:f,ReportMetadata:g}},y=_,w=(r("034f"),r("3afa")),O=r.n(w),x=r("b218"),M=r.n(x),j=r("055f"),R=r.n(j),A=Object(l["a"])(y,a,o,!1,null,null,null);"function"===typeof O.a&&O()(A),"function"===typeof M.a&&M()(A),"function"===typeof R.a&&R()(A);var C=A.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(C)}}).$mount("#app")},b218:function(t,e){},e31a:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:left;color:#2c3e50;margin-top:60px}",""]),t.exports=e}});
//# sourceMappingURL=app.bundle.js.map