(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{524:function(t,e,r){"use strict";var n=r(3),o=r(316).trim;n({target:"String",proto:!0,forced:r(525)("trim")},{trim:function(){return o(this)}})},525:function(t,e,r){var n=r(111).PROPER,o=r(4),l=r(317);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||n&&l[t].name!==t}))}},526:function(t,e,r){t.exports=r.p+"img/bg-4.4c20dda.png"},528:function(t,e,r){t.exports=r.p+"img/sign-up-success.bd0aa47.png"},529:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(27);function n(path){return/^(https?:|mailto:|tel:)/.test(path)}},538:function(t,e,r){t.exports=r.p+"img/7.079628a.png"},539:function(t,e,r){t.exports=r.p+"img/8.dbaf7ae.png"},540:function(t,e,r){var content=r(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("5c8c2290",content,!0,{sourceMap:!1})},541:function(t,e,r){var content=r(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("5520c904",content,!0,{sourceMap:!1})},586:function(t,e,r){"use strict";r(540)},587:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".sign-up .el-alert{margin-bottom:10px}.sign-up .el-form .el-input__inner,.sign-up .el-select{width:100%}@media (min-width:576px){.sign-up .el-form .el-input__inner{max-width:100%}}.sign-up .country-code .el-form-item__label{display:block;float:none;text-align:left}.sign-up .csr .el-form-item__label{line-height:40px}.sign-up .card-success .el-card__body{height:700px}",""]),n.locals={},t.exports=n},588:function(t,e,r){"use strict";r(541)},589:function(t,e,r){var n=r(18),o=r(110),l=r(526),c=n((function(i){return i[1]})),d=o(l);c.push([t.i,'.signup-form .indicator[data-v-126328ea]{align-items:center;display:flex;height:5px;justify-content:space-between;margin:10px 0;width:180px}.signup-form .indicator span[data-v-126328ea]{background:#d3d3d3;height:100%;position:relative;width:100%}.signup-form .indicator span[data-v-126328ea]:before{content:"";height:100%;left:0;position:absolute;top:0;transition:width .5s;width:0}.signup-form .indicator span.weak[data-v-126328ea]:before{background-color:#ff4757}.signup-form .indicator span.moderate[data-v-126328ea]:before{background-color:orange}.signup-form .indicator span.strong[data-v-126328ea]:before{background-color:#9acb6b}.signup-form .indicator span.active[data-v-126328ea]:before{width:100%}.signup-form .indicator span[data-v-126328ea]:nth-child(2){margin:0 3px}.contact-title[data-v-126328ea]{text-align:center}@media (min-width:768px){.contact-title[data-v-126328ea]{text-align:left}}.upload[data-v-126328ea]{float:left;margin-right:30px}.password-strength[data-v-126328ea]{color:#606266}.password-strength .text[data-v-126328ea]{font-size:12px;line-height:12px;margin-top:10px}.upload-hint[data-v-126328ea]{color:#999;display:inline-block;float:left;font-size:14px;line-height:1.5;width:100%}.upload-hint>p[data-v-126328ea]{display:inline-block;margin:0}.container[data-v-126328ea]{margin:0 auto;width:80%}.divider[data-v-126328ea]{border-top:1px solid #e2edf4;width:100%}.card-footer[data-v-126328ea]{text-align:right}.background[data-v-126328ea]{background-image:linear-gradient(180deg,transparent 30%,#fff 0),url('+d+");background-position:50%;background-repeat:no-repeat;background-size:cover;min-height:100vh;position:relative}.vertical-line-container[data-v-126328ea]{margin-right:30px;overflow:hidden;position:relative}.vertical-line-container .vertical-line-icon[data-v-126328ea]{align-items:center;background:#3e7fe8;border-radius:50%;display:inline-flex;justify-content:center;padding:10px}.vertical-line-container .vertical-line-icon>img[data-v-126328ea]{height:20px;width:20px}.vertical-line-container .vertical-line[data-v-126328ea]{background:#3e7fe8;height:100%;left:50%;padding:5px 0;position:absolute;transform:translateX(-50%);width:4px}",""]),c.locals={},t.exports=c},639:function(t,e,r){"use strict";r.r(e);r(28),r(524);var n=r(16),o=r(2);r(27),r(12),r(56),r(46),r(55),r(86),r(47),r(87),r(54),r(529);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={1:"Weak",2:"Moderate",3:"Strong"},m="",f={validate:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,r=t.query,n=t.store,o=t.$axios,e.prev=1,e.next=4,o({url:"/online/authorization/operator/self",headers:{"WEB-TOKEN":r.token}});case 4:l=e.sent,n.commit("SET_OPER_INFO",l),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:return m=r.token,e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))()},data:function(){return{loaded:!0,verified:!0,success:!1,errorMessage:"",email:"",remark:"",resubmit:!1,mapPasswordStrength:d,showPasswordStrength:!1,passwordStrength:0,buttonLoading:!1,successText:"",fileList:[],form:{address:"",countryCode:"",utcTime:"",name:"",contactName:"",file:null,language:"",password:"",mobile:"",confirmPassword:"",registerToken:m,email:""},countries:[],rules:{name:[{required:!0,message:"Name is required"}],address:[{required:!0}],file:[{validator:function(t,e,r){this.fileList.length<1?r(new Error(this.$t("login.file_required"))):r()}.bind(this)}],countryCode:[{validator:function(t,e,r){this.form.countryCode?r():r(new Error(this.$t("login.country_required")))}.bind(this)}],password:[{validator:function(t,e,r){if(e)if(this.showPasswordStrength=!0,this.passwordStrength=1,e.length<8)r(new Error(this.$t("login.validate_password_tip")));else{e.length>18&&r(new Error(this.$t("login.validate_password_tip"))),this.showPasswordStrength=!0;var n=/[A-Z]/.test(e)+/[a-z]/.test(e)+/\d/.test(e)+/\W/.test(e);n<=2?(this.passwordStrength=1,r(new Error(this.$t("login.validate_password_strength")))):3===n?this.passwordStrength=2:4===n&&(this.passwordStrength=3)}else this.showPasswordStrength=!1,r(new Error(this.$t("login.validate_password_required")));r()}.bind(this)}],contactName:[{required:!0,message:"Contact Name is required"}],confirmPassword:[{validator:function(t,e,r){e||r(new Error(this.$t("login.validate_confirm_password_required"))),e!==this.form.password?r(new Error(this.$t("login.consistent_password_tip"))):r()}.bind(this)}],mobile:[{max:16,message:this.$t("login.validate_phone_tip"),trigger:"blur"}]}}},computed:{uploadDisabled:function(){return this.fileList.length>0}},methods:{handleChange:function(t){this.fileList.push(t),this.form.file=t},handleRemove:function(){this.fileList.pop()},getCountryList:function(){var t=this;this.$store.dispatch("getCountryList").then((function(data){t.countries=data}))},submit:function(){var t=this;this.$refs.form.validate((function(e){if(e){t.buttonLoading=!0;var r=new FormData;r.append("file",t.fileList[0].raw),r.append("username",t.form.email),r.append("name",t.form.name),r.append("countryCode",t.form.countryCode),r.append("contactName",t.form.contactName),r.append("address",t.form.address),r.append("email",t.form.email),r.append("mobile",t.form.mobile),r.append("registerToken",t.form.registerToken);var data={token:t.form.registerToken,formData:r};t.$store.dispatch("reRegister",data).then((function(){t.success=!0,window.scrollTo(0,0)})).catch((function(e){t.errorMessage=e.message})).finally((function(){t.buttonLoading=!1}))}}))}},mounted:function(){this.$store.commit("SET_MENU",!1),this.getCountryList();var t=this.$store.state.operInfo;this.remark=t.remark,Object.assign(this.form,c(c({},t),{},{contactName:t.linkman})),this.email=t.email}},h=(r(586),r(588),r(10)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sign-up"},[e("div",{staticClass:"background-wrapper"},[e("div",{staticClass:"background"},[e("NavBar"),t._v(" "),e("div",{staticClass:"containerXL container-fluid"},[e("div",{staticClass:"row py-14 justify-center"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"text-white mb-8 contact-title"},[e("h3",{staticClass:"mb-2"},[t._v(t._s(t.$t("login.title_sign_up")))]),t._v(" "),e("p",{staticClass:"text-xs"},[t._v(t._s(t.$t("login.sign_up_tip")))])]),t._v(" "),e("el-card",{staticClass:"card--sign-up",class:{"card-success":t.success}},[t.success?e("div",{staticClass:"flex flex-col items-center justify-center h-full"},[e("img",{attrs:{src:r(528),alt:"",width:"250"}}),t._v(" "),e("p",[t._v(t._s(t.$t("login.contact_you_in_some_days")))])]):e("div",[e("el-form",{ref:"form",staticClass:"signup-form",attrs:{rules:t.rules,model:t.form}},[t.remark?e("el-form-item",[e("div",{staticStyle:{"background-color":"#fef0f0",padding:"8px 16px","border-radius":"4px"}},[e("div",{staticStyle:{"font-size":"13px","line-height":"18px","font-weight":"700",color:"#f56c6c"}},[t._v("\n                        "+t._s(t.$t("login.reject_reason")))]),t._v(" "),e("div",{staticStyle:{"font-size":"12px","line-height":"18px",color:"#f56c6c","margin-top":"4px","overflow-wrap":"break-word"}},[t._v("\n                        "+t._s(t.remark))])])]):t._e(),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"vertical-line-container hidden md:block"},[e("div",{staticClass:"vertical-line-icon"},[e("img",{attrs:{src:r(538),alt:""}})]),t._v(" "),e("div",{staticClass:"vertical-line"})]),t._v(" "),e("div",{staticClass:"flex-1"},[e("el-form-item",{attrs:{label:t.$t("login.account"),prop:"email"}},[e("el-input",{attrs:{disabled:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),e("el-form-item",{attrs:{required:"",prop:"name",label:t.$t("login.name")}},[e("el-input",{attrs:{maxlength:128},on:{blur:function(){return t.form.name=t.form.name.trim()}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),e("el-form-item",{attrs:{required:"",label:t.$t("login.contacts"),prop:"contactName"}},[e("el-input",{attrs:{maxlength:32},on:{blur:function(){return t.form.contactName=t.form.contactName.trim()}},model:{value:t.form.contactName,callback:function(e){t.$set(t.form,"contactName",e)},expression:"form.contactName"}})],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("login.phone_number"),prop:"mobile"}},[e("el-input",{attrs:{maxlength:16},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile","string"==typeof e?e.trim():e)},expression:"form.mobile"}})],1),t._v(" "),e("el-form-item",{staticClass:"country-code",attrs:{required:"",prop:"countryCode"}},[e("div",{staticClass:"inline-block",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t.$t("login.country_region")))]),t._v(" "),e("el-select",{attrs:{"no-match-text":t.$t("common.no_data"),filterable:""},model:{value:t.form.countryCode,callback:function(e){t.$set(t.form,"countryCode",e)},expression:"form.countryCode"}},t._l(t.countries,(function(t){return e("el-option",{key:t.countryCode3,attrs:{label:t.countryNameEn,value:t.countryCode3}})})),1)],1),t._v(" "),e("el-form-item",{attrs:{label:t.$t("login.address")}},[e("el-input",{attrs:{maxlength:128,type:"textarea",rows:2},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),t._v(" "),e("hr",{staticClass:"my-6"})],1)]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"vertical-line-container hidden md:block"},[e("div",{staticClass:"vertical-line-icon"},[e("img",{attrs:{src:r(539),alt:""}})]),t._v(" "),e("div",{staticClass:"vertical-line"})]),t._v(" "),e("div",{staticClass:"flex-1"},[e("el-form-item",{staticClass:"csr",attrs:{label:t.$t("login.csr"),required:"",prop:"file"}},[e("div",{staticClass:"mb-10",staticStyle:{display:"flex","align-items":"flex-start"}},[e("el-upload",{staticClass:"upload",class:{hide:t.uploadDisabled},staticStyle:{float:"left","margin-right":"30px"},attrs:{action:"#","file-list":t.fileList,"auto-upload":!1,limit:1,"on-change":t.handleChange,"on-remove":t.handleRemove}},[e("el-button",{attrs:{type:"primary"}},[t._v("\n                              "+t._s(t.$t("login.upload"))+"\n                            ")])],1)],1),t._v(" "),e("div",{staticClass:"upload-hint"},[e("p",[t._v("\n                            "+t._s(t.$t("login.upload_tip1"))+"\n                            "+t._s(t.$t("login.upload_tip2"))+"\n                          ")]),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.$t("login.upload_tip3"))}})])]),t._v(" "),e("hr",{staticClass:"my-6"})],1)]),t._v(" "),e("el-form-item",{staticClass:"text-center"},[e("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary",loading:t.buttonLoading},on:{click:t.submit}},[t._v(t._s(t.$t("common.submit")))]),t._v(" "),t.errorMessage?e("div",{staticClass:"text-center error-message"},[t._v(t._s(t.errorMessage))]):t._e()],1)],1)],1)])],1)])]),t._v(" "),e("Footer")],1)])])}),[],!1,null,"126328ea",null);e.default=component.exports;installComponents(component,{NavBar:r(204).default,Footer:r(147).default})}}]);