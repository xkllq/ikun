(self["webpackChunkhmtt81"]=self["webpackChunkhmtt81"]||[]).push([[585],{56585:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Z}});var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("van-nav-bar",{scopedSlots:n._u([{key:"left",fn:function(){return[t("div",{staticClass:"logo"})]},proxy:!0},{key:"right",fn:function(){return[t("van-button",{attrs:{round:"",icon:"search",type:"primary"},on:{click:function(e){return n.$router.push("/search")}}},[n._v("搜索 ")])]},proxy:!0}])}),t("van-tabs",{model:{value:n.active,callback:function(e){n.active=e},expression:"active"}},[n._l(n.mineChannels,(function(n){return t("van-tab",{key:n.id,attrs:{title:n.name}},[t("ArticleList",{attrs:{channel_id:n.id}})],1)})),t("div",{staticClass:"icon-wrap"},[t("van-icon",{attrs:{name:"wap-nav"},on:{click:function(e){n.showChannelList=!0}}})],1)],2),t("van-action-sheet",{attrs:{title:"频道管理"},model:{value:n.showChannelList,callback:function(e){n.showChannelList=e},expression:"showChannelList"}},[t("channel-list",{attrs:{mineChannels:n.mineChannels,allChannels:n.allChannels},on:{close:function(e){n.showChannelList=!1},fixBug:function(e){n.active--}},model:{value:n.active,callback:function(e){n.active=e},expression:"active"}})],1)],1)},r=[],i=t(16198),s=(t(78975),t(76684)),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"scroll",staticClass:"artList",on:{scroll:n.onScroll}},[t("van-pull-refresh",{on:{refresh:n.onRefresh},model:{value:n.isLoading,callback:function(e){n.isLoading=e},expression:"isLoading"}},[t("van-list",{attrs:{finished:n.finished,"finished-text":"没有更多了"},on:{load:n.onLoad},model:{value:n.loading,callback:function(e){n.loading=e},expression:"loading"}},n._l(n.list,(function(e){return t("van-cell",{key:e.art_id,attrs:{to:"/articleDetail/"+e.art_id}},[t("div",[n._v(n._s(e.title))]),t("van-grid",{attrs:{border:!1,"column-num":e.cover.type}},n._l(e.cover.images,(function(n,e){return t("van-grid-item",{key:e},[t("van-image",{attrs:{fit:"cover",src:n}})],1)})),1),t("span",{staticClass:"info"},[n._v(" "+n._s(e.aut_name)+" "+n._s("评论数:"+e.comm_count)+" "+n._s(n._f("relvTime")(e.pubdate))+" ")])],1)})),1)],1)],1)},c=[],l=t(68932),u={props:["channel_id"],name:"articleList",data:function(){return{list:[],loading:!1,finished:!1,timestamp:Date.now(),isLoading:!1,scroll:""}},activated:function(){this.$refs.scroll.scrollTop=this.scroll},methods:{onLoad:function(){var n=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.P8)({channel_id:n.channel_id,timestamp:n.timestamp});case 2:a=e.sent,(t=n.list).push.apply(t,(0,l.Z)(a.data.data.results)),n.loading=!1,n.timestamp=a.data.data.pre_timestamp,null===n.timestamp&&(n.finished=!0);case 7:case"end":return e.stop()}}),e)})))()},onRefresh:function(){var n=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,s.P8)({channel_id:n.channel_id,timestamp:Date.now()});case 2:t=e.sent,n.list=t.data.data.results,n.isLoading=!1;case 5:case"end":return e.stop()}}),e)})))()},onScroll:function(){this.scroll=this.$refs.scroll.scrollTop}}},h=u,d=t(1001),f=(0,d.Z)(h,o,c,!1,null,"be0eac56",null),m=f.exports,v=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"mineChannel"},[t("div",{staticClass:"editChannel"},[t("span",[n._v("我的频道")]),t("van-button",{on:{click:function(e){n.showEdit=!n.showEdit}}},[n._v(" "+n._s(n.showEdit?"取消":"编辑")+" ")])],1),t("div",[t("van-grid",n._l(n.mineChannels,(function(e,a){return t("van-grid-item",{key:a,class:{active:a===n.value}},[t("van-icon",{directives:[{name:"show",rawName:"v-show",value:n.showEdit&&"推荐"!==e.name,expression:"showEdit && item.name !== '推荐'"}],attrs:{name:"cross"},on:{click:function(e){return n.del(a)}}}),t("span",{on:{click:function(e){return n.changeActive(a)}}},[n._v(n._s(e.name))])],1)})),1)],1),n._m(0),t("div",[t("van-grid",n._l(n.chooseChannels,(function(e){return t("van-grid-item",{key:e.id,attrs:{text:e.name},on:{click:function(t){return n.addChannels(e)}}})})),1)],1)])},p=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"chooseChannel"},[t("span",[n._v("可选频道")])])}],C=(t(9653),t(40561),t(21249),t(57327),t(41539),t(69826),t(38862),"HMTT81_key"),g=function(n){localStorage.setItem(C,JSON.stringify(n))},_=function(){return JSON.parse(localStorage.getItem(C))},y={name:"channelList",props:{mineChannels:{required:!0,type:Array},allChannels:{required:!0,type:Array},value:{type:Number}},data:function(){return{arr:[],showEdit:!1}},methods:{addChannels:function(n){this.mineChannels.push(n),this.save()},changeActive:function(n){this.$emit("input",n),this.$emit("close")},del:function(n){this.mineChannels.splice(n,1),n<this.value&&this.$emit("fixBug"),this.save()},save:function(){var n=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.$store.state.tokenObj.token){e.next=6;break}return t=n.mineChannels.map((function(n,e){return{id:n.id,seq:e+1}})),e.next=4,(0,s.yk)({channels:t});case 4:e.next=7;break;case 6:g(n.mineChannels);case 7:case"end":return e.stop()}}),e)})))()}},computed:{chooseChannels:function(){var n=this;return this.allChannels.filter((function(e){return!n.mineChannels.find((function(n){return n.id===e.id}))}))}}},k=y,w=(0,d.Z)(k,v,p,!1,null,"3a94e072",null),b=w.exports,x={name:"home-index",components:{ChannelList:b,ArticleList:m},data:function(){return{mineChannels:[],showChannelList:!1,allChannels:[],active:0}},methods:{},created:function(){var n=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var t,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=_(),!n.$store.state.tokenObj.token&&t){e.next=8;break}return e.next=4,(0,s.W4)();case 4:a=e.sent,n.mineChannels=a.data.data.channels,e.next=9;break;case 8:n.mineChannels=_();case 9:return e.next=11,(0,s.uR)();case 11:r=e.sent,n.allChannels=r.data.data.channels;case 13:case"end":return e.stop()}}),e)})))()}},L=x,A=(0,d.Z)(L,a,r,!1,null,"1d244987",null),Z=A.exports},91038:function(n,e,t){var a=t(82109),r=t(48457),i=t(17072),s=!i((function(n){Array.from(n)}));a({target:"Array",stat:!0,forced:s},{from:r})},23748:function(n,e,t){"use strict";function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}t.d(e,{Z:function(){return a}})},68932:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var a=t(23748);function r(n){if(Array.isArray(n))return(0,a.Z)(n)}t(82526),t(41817),t(41539),t(32165),t(78783),t(33948),t(91038);function i(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}var s=t(48936);t(21703);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(n){return r(n)||i(n)||(0,s.Z)(n)||o()}},48936:function(n,e,t){"use strict";t.d(e,{Z:function(){return r}});t(47042),t(41539),t(68309),t(91038),t(78783),t(74916),t(77601);var a=t(23748);function r(n,e){if(n){if("string"===typeof n)return(0,a.Z)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,a.Z)(n,e):void 0}}}}]);