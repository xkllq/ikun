"use strict";(self["webpackChunkhmtt81"]=self["webpackChunkhmtt81"]||[]).push([[162],{28162:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-nav-bar",{attrs:{title:"登录"}}),n("van-form",{on:{submit:e.onSubmit}},[n("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号",rules:e.rules.mobile},model:{value:e.info.mobile,callback:function(t){e.$set(e.info,"mobile",t)},expression:"info.mobile"}}),n("van-field",{attrs:{label:"验证码",placeholder:"请输入验证码",rules:e.rules.code},model:{value:e.info.code,callback:function(t){e.$set(e.info,"code",t)},expression:"info.code"}}),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{loading:e.isLoading,"loading-type":"spinner","loading-size":"50px","loading-text":"登录中...",round:"",block:"",type:"info","native-type":"submit",color:"linear-gradient(to right, grey, #90f, #ff6034, #ee0a24, #09f)"}},[e._v("登录 ")])],1)],1)],1)},o=[],r=n(16198),i=(n(78975),n(76684)),s={name:"login-index",data:function(){return{isLoading:!1,info:{mobile:"17891005832",code:"246810"},rules:{mobile:[{required:!0,message:"请填写手机号"},{pattern:/^1\d{10}$/,message:"请填写正确的手机号"}],code:[{required:!0,message:"请填写验证码"},{pattern:/^\d{6}$/,message:"请填写正确的验证码"}]}}},methods:{onSubmit:function(){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,(0,i.UO)(e.info);case 4:n=t.sent,e.$store.commit("changeTokenObj",n.data.data),e.$toast.success("登录成功"),e.$store.commit("changeUserInfo",{}),e.$route.query.back?e.$router.push(e.$route.query.back):e.$router.push("/layout/home"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),e.$toast.fail("登录成功");case 14:e.isLoading=!1;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}},l=s,u=n(1001),c=(0,u.Z)(l,a,o,!1,null,null,null),d=c.exports}}]);