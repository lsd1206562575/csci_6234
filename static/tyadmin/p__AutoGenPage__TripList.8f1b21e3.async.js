(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15,287],{"4KAj":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"export",theme:"outlined"},c=a,i=n("6VBw"),u=function(e,t){return r["createElement"](i["a"],Object.assign({},e,{ref:t,icon:c}))};u.displayName="ExportOutlined";t["default"]=r["forwardRef"](u)},IpcI:function(e,t,n){e.exports={container:"container___nT1ry"}},L8GZ:function(e,t,n){"use strict";n.r(t);n("qVdP");var r=n("jsC+"),a=(n("lUTK"),n("BvKs")),c=(n("5NDa"),n("5rEg")),i=(n("+L6B"),n("2/Rp")),u=n("oBTY"),l=(n("P2fV"),n("NJEC")),s=(n("/zsF"),n("PArb")),o=n("WmNS"),p=n.n(o),d=n("k1fw"),f=(n("miYZ"),n("tsqr")),m=n("9og8"),b=n("tJVT"),h=(n("y8nQ"),n("Vl3Y")),v=(n("OaEy"),n("2fM7")),j=n("G3dp"),O=n("/MfK"),w=n("xvlK"),y=n("4KAj"),x=n("8Skl"),E=n("q1tI"),g=n.n(E),k=n("Hx5s"),S=n("56R7"),C=(n("2qtc"),n("kLXV")),T=function(e){var t=e.modalVisible,n=e.onCancel;return g.a.createElement(C["a"],{destroyOnClose:!0,title:"Create New Trip",visible:t,width:800,onCancel:function(){return n()},footer:null},e.children)},_=T,I=n("io9h"),R=n("+n12");function q(e){return A.apply(this,arguments)}function A(){return A=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(I["a"])("/api/xadmin/v1/trip",{params:t}));case 1:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function L(e){return V.apply(this,arguments)}function V(){return V=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(I["a"])("/api/xadmin/v1/trip/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}function K(e){return N.apply(this,arguments)}function N(){return N=Object(m["a"])(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],r=Object(R["c"])(t,n),e.abrupt("return",Object(I["a"])("/api/xadmin/v1/trip",{method:"POST",data:r}));case 3:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function D(e,t){return U.apply(this,arguments)}function U(){return U=Object(m["a"])(p.a.mark((function e(t,n){var r,a;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=[],a=Object(R["c"])(t,r),e.abrupt("return",Object(I["a"])("/api/xadmin/v1/trip/".concat(n),{method:"PUT",data:a}));case 3:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function M(e){return B.apply(this,arguments)}function B(){return B=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(I["a"])("/api/xadmin/v1/trip/list_display",{params:t}));case 1:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function P(e){return F.apply(this,arguments)}function F(){return F=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(I["a"])("/api/xadmin/v1/trip/display_order",{params:t}));case 1:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}var J=function(e){var t=e.modalVisible,n=e.onCancel;return g.a.createElement(C["a"],{destroyOnClose:!0,title:"Modify Trip",visible:t,width:800,onCancel:function(){return n()},footer:null},e.children)},z=J,H=(n("PkmJ"),n("wd/R")),Y=n.n(H),Q=(n("Lzxq"),v["a"].Option,h["a"].Item,function(){var e=Object(E["useState"])(!1),t=Object(b["a"])(e,2),n=t[0],o=t[1],h=Object(E["useState"])(!1),v=Object(b["a"])(h,2),C=v[0],T=v[1],I=Object(E["useState"])({}),A=Object(b["a"])(I,2),V=A[0],N=A[1],U=Object(E["useRef"])(),B=Object(E["useRef"])(),F=Object(E["useRef"])(),J=function(){var e=Object(m["a"])(p.a.mark((function e(t){var n;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=f["b"].loading("Adding"),e.prev=1,e.next=4,K(Object(d["a"])({},t));case 4:return n(),f["b"].success("Add Successfully"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",Object(R["e"])(e.t0,B,n,"Add"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(m["a"])(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=f["b"].loading("Modifying"),e.prev=1,e.next=4,D(t,n);case 4:return r(),f["b"].success("Modify Successfully"),e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](1),e.abrupt("return",Object(R["e"])(e.t0,F,r,"Modify"));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(m["a"])(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=f["b"].loading("Deleting"),t){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,r=t.map((function(e){return e.id})).join(","),e.next=7,L(r);case 7:return n(),f["b"].success("Delete Successfully"),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](3),n(),e.abrupt("return",Object(R["h"])(e.t0,"Delete"));case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),W=["start_time","end_time"],Z=[{title:"id",hideInForm:!0,hideInSearch:!0,dataIndex:"id",valueType:"digit",rules:[]},{title:"place",dataIndex:"place",rules:[{required:!0,message:"place is required"}]},{title:"start_time",dataIndex:"start_time",valueType:"date",rules:[{required:!0,message:"start_time is required"}]},{title:"end_time",dataIndex:"end_time",valueType:"date",rules:[{required:!0,message:"end_time is required"}]},{title:"description",dataIndex:"description",valueType:"textarea",rules:[]},{title:"Operation",dataIndex:"option",valueType:"option",fixed:"right",width:100,render:function(e,t){return g.a.createElement(g.a.Fragment,null,g.a.createElement(j["default"],{title:"Edit",className:"icon",onClick:Object(m["a"])(p.a.mark((function e(){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.start_time=null===t.start_time?t.start_time:Y()(t.start_time),t.end_time=null===t.end_time?t.end_time:Y()(t.end_time),T(!0),N(t);case 4:case"end":return e.stop()}}),e)})))}),g.a.createElement(s["a"],{type:"vertical"}),g.a.createElement(l["a"],{title:"Are you sure to delete Trip\uff1f",placement:"topRight",onConfirm:function(){Q([t]),U.current.reloadAndRest()},okText:"Confirm",cancelText:"Cancel"},g.a.createElement(O["default"],{title:"Delete",className:"icon"})))}}],G=Object(R["j"])(Z),X=Object(E["useState"])([]),$=Object(b["a"])(X,2),ee=$[0],te=$[1];Object(E["useEffect"])((function(){P().then((function(e){te(e.form_order)}))}),[]);var ne=Object(R["q"])(G),re=Object(R["j"])(Z),ae=Object(R["s"])(ee,re),ce=Object(u["a"])(ae),ie=Object(R["j"])(ae),ue=Object(R["r"])(ie),le=Object(E["useState"])({}),se=Object(b["a"])(le,2),oe=se[0],pe=se[1],de=Object(E["useState"])({}),fe=Object(b["a"])(de,2),me=fe[0],be=fe[1];return Object(E["useEffect"])((function(){M().then((function(e){pe(e)}))}),[]),g.a.createElement(k["c"],null,g.a.createElement(S["a"],{beforeSearchSubmit:function(e){return Object(R["i"])(e,W),e},params:me,scroll:{x:"100%"},columnsStateMap:oe,onColumnsStateChange:function(e){return pe(e)},headerTitle:"Trip Form",actionRef:U,rowKey:"id",toolBarRender:function(e,t){var n=t.selectedRows;return[g.a.createElement(i["a"],{type:"primary",onClick:function(){return o(!0)}},g.a.createElement(w["default"],null)," New"),g.a.createElement(i["a"],{type:"primary",onClick:function(){return Object(R["k"])(me,q,ne,"Trip-All")}},g.a.createElement(y["default"],null)," Export all"),g.a.createElement(c["a"].Search,{style:{marginRight:20},placeholder:"Search Trip",onSearch:function(e){be({search:e}),U.current.reload()}}),n&&n.length>0&&g.a.createElement(r["a"],{overlay:g.a.createElement(a["a"],{onClick:function(){var e=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("remove"!==t.key){e.next=6;break}return e.next=3,Q(n);case 3:U.current.reloadAndRest(),e.next=7;break;case 6:"export_current"===t.key&&Object(R["l"])(n,ne,"Trip-select");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),selectedKeys:[]},g.a.createElement(a["a"].Item,{key:"remove"},"Delete Selected Items"),g.a.createElement(a["a"].Item,{key:"export_current"},"Export Selected Items"))},g.a.createElement(i["a"],null,"Operate Selected Items ",g.a.createElement(x["default"],null)))]},tableAlertRender:function(e){var t=e.selectedRowKeys;e.selectedRows;return t.length>0&&g.a.createElement("div",null,"Selected"," ",g.a.createElement("a",{style:{fontWeight:600}},t.length)," ","Items\xa0\xa0")},request:function(e,t,n){return q(Object(d["a"])(Object(d["a"])({},e),{},{sorter:t,filter:n}))},columns:ne,rowSelection:{}}),g.a.createElement(_,{onCancel:function(){return o(!1)},modalVisible:n},g.a.createElement(S["a"],{formRef:B,onSubmit:function(){var e=Object(m["a"])(p.a.mark((function e(t){var n;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(R["w"])(t),e.next=3,J(t);case 3:n=e.sent,n&&(o(!1),U.current&&U.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",search:{},form:{labelCol:{span:6},labelAlign:"left"},columns:ce,rowSelection:{}})),g.a.createElement(z,{onCancel:function(){return T(!1)},modalVisible:C},g.a.createElement(S["a"],{formRef:F,onSubmit:function(){var e=Object(m["a"])(p.a.mark((function e(t){var n;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(R["w"])(t),e.next=3,H(t,V.id);case 3:n=e.sent,n&&(T(!1),U.current&&U.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",search:{},type:"form",form:{initialValues:V,labelCol:{span:6},labelAlign:"left"},columns:ue,rowSelection:{}})))});t["default"]=Q},PkmJ:function(e,t,n){"use strict";n("DZo9");var r=n("8z0m"),a=n("oBTY"),c=n("fWQN"),i=n("mtLc"),u=n("yKVA"),l=n("879j"),s=n("q1tI"),o=n.n(s),p=n("ye1Q"),d=n("xvlK"),f=n("IpcI"),m=n.n(f);function b(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}var h=function(e){Object(u["a"])(n,e);var t=Object(l["a"])(n);function n(e){var r;return Object(c["a"])(this,n),r=t.call(this,e),r.state={loading:!1,fileList:[]},r.handleChange=function(e){var t=Object(a["a"])(e.fileList);t=t.slice(-1),t=t.map((function(e){return e.response&&(e.url=e.response.url),e})),r.props.onChange(e),e.file&&b(t[0].originFileObj,(function(e){return r.setState({fileList:t,imageUrl:e,loading:!1})}))},r}return Object(i["a"])(n,[{key:"render",value:function(e){var t=o.a.createElement("div",null,this.state.loading?o.a.createElement(p["default"],null):o.a.createElement(d["default"],null),o.a.createElement("div",{className:"ant-upload-text"},"Upload")),n=this.state.imageUrl;return"img"in this.props&&"string"==typeof this.props.img&&(n=this.props.img),o.a.createElement(r["a"],{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:this.props.beforeUpload,onChange:this.handleChange,fileList:this.state.fileList},n?o.a.createElement("img",{src:n,alt:"avatar",style:{width:"100%"}}):t)}}]),n}(o.a.Component);t["a"]=function(e){return o.a.createElement("div",{className:m.a.container},o.a.createElement("div",{id:"components-upload-demo-avatar"},o.a.createElement(h,e)))}}}]);