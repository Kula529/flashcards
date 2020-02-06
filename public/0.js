(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,r,s){var t=s(58);"string"==typeof t&&(t=[[e.i,t,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s(56)(t,n);t.locals&&(e.exports=t.locals)},31:function(e,r,s){"use strict";s.r(r);var t={props:{userData:Object},data:function(){return{loading:!1,status:null,errors:null,error:!1,show1:!1,success:!1,isEditing:null,rules:{required:function(e){return!!e||"Required."},min:function(e){return(e&&e.length)>=6||"Min 6 characters"}}}},methods:{save:function(){var e=this;this.loading=!0,this.errors=null,this.error=!1,this.success=!1,this.$store.dispatch("editProfile",this.userData).then((function(r){var s=r.username;e.isEditing=!e.isEditing,e.success=!0,s!==e.$route.params.username&&e.$router.push({name:"profile",params:{username:s}})})).catch((function(r){void 0!==r.graphQLErrors.validationErrors&&(e.errors=r.graphQLErrors.validationErrors,e.error=!0)})).then((function(){return e.loading=!1}))},errorFor:function(e){return this.hasErrors&&this.errors[e]?this.errors[e]:null}},computed:{hasErrors:function(){return null!==this.errors}}},n=(s(57),s(3)),i=Object(n.a)(t,(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[s("v-btn",{attrs:{color:"purple darken-3",fab:"",small:""},on:{click:function(r){e.isEditing=!e.isEditing}}},[e.isEditing?s("v-icon",[e._v("mdi-close")]):s("v-icon",[e._v("mdi-pencil")])],1),e._v(" "),e.success?s("v-alert",{attrs:{type:"success",dismissible:""}},[e._v("Your account has saved.")]):e._e(),e._v(" "),e.error?s("v-alert",{attrs:{type:"error",dismissible:""}},[e._v("Fill your data correctly.")]):e._e(),e._v(" "),s("v-snackbar",{attrs:{timeout:2e3,bottom:"",left:""},model:{value:e.success,callback:function(r){e.success=r},expression:"success"}},[e._v("Your profile has been updated.")]),e._v(" "),s("v-snackbar",{attrs:{timeout:2e3,bottom:"",left:""},model:{value:e.error,callback:function(r){e.error=r},expression:"error"}},[e._v("Fill your data correctly.")]),e._v(" "),s("v-text-field",{attrs:{"prepend-icon":"mdi-account",label:"Username",rules:[e.rules.required],"error-messages":e.errorFor("username"),loading:e.loading,disabled:e.loading||!e.isEditing},on:{input:function(r){return e.$emit("input",e.userData)},keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.save(r)}},model:{value:e.userData.username,callback:function(r){e.$set(e.userData,"username",r)},expression:"userData.username"}}),e._v(" "),s("v-text-field",{attrs:{"prepend-icon":"mdi-at",label:"Email",rules:[e.rules.required],"error-messages":e.errorFor("email"),loading:e.loading,disabled:e.loading||!e.isEditing},on:{input:function(r){return e.$emit("input",e.userData)},keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.save(r)}},model:{value:e.userData.email,callback:function(r){e.$set(e.userData,"email",r)},expression:"userData.email"}}),e._v(" "),s("v-text-field",{attrs:{"prepend-icon":"mdi-lock",rules:[e.rules.min],"error-messages":e.errorFor("password"),type:e.show1?"text":"password",name:"input-10-1",label:"New Password",counter:"",loading:e.loading,disabled:e.loading||!e.isEditing},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.save(r)}},model:{value:e.userData.password,callback:function(r){e.$set(e.userData,"password",r)},expression:"userData.password"}}),e._v(" "),s("v-text-field",{attrs:{"prepend-icon":"mdi-lock",rules:[e.rules.min],"error-messages":e.errorFor("password_confirmation"),name:"input-10-1",type:e.show1?"text":"password",label:"New Password confirmation",counter:"",loading:e.loading,disabled:e.loading||!e.isEditing},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.save(r)}},model:{value:e.userData.password_confirmation,callback:function(r){e.$set(e.userData,"password_confirmation",r)},expression:"userData.password_confirmation"}}),e._v(" "),s("v-btn",{staticClass:"ma-2",attrs:{disabled:e.loading||!e.isEditing,color:"indigo",dark:""},on:{click:function(r){e.show1=!e.show1}}},[s("v-icon",[e._v(e._s(e.show1?"mdi-eye":"mdi-eye-off"))])],1),e._v(" "),s("v-btn",{staticClass:"mr-4",attrs:{disabled:e.loading||!e.isEditing,color:"success"},on:{click:e.save}},[e._v("Save profile")])],1)],1)}),[],!1,null,"78095ed4",null);r.default=i.exports},57:function(e,r,s){"use strict";var t=s(14);s.n(t).a},58:function(e,r,s){(r=s(55)(!1)).push([e.i,"\nlabel[data-v-78095ed4] {\n  font-size: 0.7em;\n  text-transform: uppercase;\n  color: green;\n  font-weight: bolder;\n}\n",""]),e.exports=r}}]);
//# sourceMappingURL=0.js.map