"use strict";(self["webpackChunkhmtt81"]=self["webpackChunkhmtt81"]||[]).push([[884],{9884:function(t,i,e){e.r(i),e.d(i,{default:function(){return u}});var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"profile-box"},[e("van-image",{attrs:{round:"",fit:"cover",src:t.userInfo.photo}}),e("div",{staticClass:"info-box"},[e("div",{staticClass:"name"},[t._v(t._s(t.userInfo.name))]),e("span",{staticClass:"birth"},[t._v(t._s(t.userInfo.birthday))])])],1),e("van-grid",{attrs:{"column-num":3}},[e("van-grid-item",{attrs:{icon:"newspaper-o",text:"我的作品"}}),e("van-grid-item",{attrs:{icon:"star-o",text:"我的收藏"}}),e("van-grid-item",{attrs:{icon:"tosend",text:"阅读历史"}})],1),e("van-cell-group",[e("van-cell",{attrs:{to:"/mine/edit",title:"编辑资料",icon:"edit","is-link":""}}),e("van-cell",{attrs:{to:"/mine/chat",title:"小智同学",icon:"chat-o","is-link":""}}),e("van-cell",{attrs:{title:"系统设置",icon:"setting-o","is-link":""}}),e("van-cell",{attrs:{title:"退出登录",icon:"info-o","is-link":""},on:{click:t.logout}})],1)],1)},n=[],o=e(4665),a={name:"mine-index",created(){this.$store.dispatch("getUserInfo")},computed:{...(0,o.rn)(["userInfo"])},methods:{logout(){this.$store.commit("logout"),this.$toast.success("退出成功啦!"),this.$router.push("/login")}}},r=a,l=e(1001),c=(0,l.Z)(r,s,n,!1,null,"025709da",null),u=c.exports}}]);