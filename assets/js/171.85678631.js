(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{656:function(t,v,_){"use strict";_.r(v);var a=_(67),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"面试官-说说地址栏输入-url-敲下回车后发生了什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说地址栏输入-url-敲下回车后发生了什么"}},[t._v("#")]),t._v(" 面试官：说说地址栏输入 URL 敲下回车后发生了什么?")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/11bf1f20-bdf4-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"一、简单分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、简单分析"}},[t._v("#")]),t._v(" 一、简单分析")]),t._v(" "),_("p",[t._v("简单的分析，从输入 "),_("code",[t._v("URL")]),t._v("到回车后发生的行为如下：")]),t._v(" "),_("ul",[_("li",[t._v("URL解析")]),t._v(" "),_("li",[t._v("DNS 查询")]),t._v(" "),_("li",[t._v("TCP 连接")]),t._v(" "),_("li",[t._v("HTTP 请求")]),t._v(" "),_("li",[t._v("响应请求")]),t._v(" "),_("li",[t._v("页面渲染")])]),t._v(" "),_("h2",{attrs:{id:"二、详细分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、详细分析"}},[t._v("#")]),t._v(" 二、详细分析")]),t._v(" "),_("h3",{attrs:{id:"url解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#url解析"}},[t._v("#")]),t._v(" URL解析")]),t._v(" "),_("p",[t._v("首先判断你输入的是一个合法的"),_("code",[t._v("URL")]),t._v(" 还是一个待搜索的关键词，并且根据你输入的内容进行对应操作")]),t._v(" "),_("p",[_("code",[t._v("URL")]),t._v("的解析第过程中的第一步，一个"),_("code",[t._v("url")]),t._v("的结构解析如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/27a0c690-bdf4-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"dns查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns查询"}},[t._v("#")]),t._v(" DNS查询")]),t._v(" "),_("p",[t._v("在之前文章中讲过"),_("code",[t._v("DNS")]),t._v("的查询，这里就不再讲述了")]),t._v(" "),_("p",[t._v("整个查询过程如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/330fb770-bdf4-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("p",[t._v("最终，获取到了域名对应的目标服务器"),_("code",[t._v("IP")]),t._v("地址")]),t._v(" "),_("h3",{attrs:{id:"tcp连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp连接"}},[t._v("#")]),t._v(" TCP连接")]),t._v(" "),_("p",[t._v("在之前文章中，了解到"),_("code",[t._v("tcp")]),t._v("是一种面向有连接的传输层协议")]),t._v(" "),_("p",[t._v("在确定目标服务器服务器的"),_("code",[t._v("IP")]),t._v("地址后，则经历三次握手建立"),_("code",[t._v("TCP")]),t._v("连接，流程如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/ad750790-bdf4-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"发送-http-请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#发送-http-请求"}},[t._v("#")]),t._v(" 发送 http 请求")]),t._v(" "),_("p",[t._v("当建立"),_("code",[t._v("tcp")]),t._v("连接之后，就可以在这基础上进行通信，浏览器发送 "),_("code",[t._v("http")]),t._v(" 请求到目标服务器")]),t._v(" "),_("p",[t._v("请求的内容包括：")]),t._v(" "),_("ul",[_("li",[t._v("请求行")]),t._v(" "),_("li",[t._v("请求头")]),t._v(" "),_("li",[t._v("请求主体")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/bbcb60f0-bdf4-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"响应请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#响应请求"}},[t._v("#")]),t._v(" 响应请求")]),t._v(" "),_("p",[t._v("当服务器接收到浏览器的请求之后，就会进行逻辑操作，处理完成之后返回一个"),_("code",[t._v("HTTP")]),t._v("响应消息，包括：")]),t._v(" "),_("ul",[_("li",[t._v("状态行")]),t._v(" "),_("li",[t._v("响应头")]),t._v(" "),_("li",[t._v("响应正文")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/c5fe0140-bdf4-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),_("p",[t._v("在服务器响应之后，由于现在"),_("code",[t._v("http")]),t._v("默认开始长连接"),_("code",[t._v("keep-alive")]),t._v("，当页面关闭之后，"),_("code",[t._v("tcp")]),t._v("链接则会经过四次挥手完成断开")]),t._v(" "),_("h3",{attrs:{id:"页面渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染"}},[t._v("#")]),t._v(" 页面渲染")]),t._v(" "),_("p",[t._v("当浏览器接收到服务器响应的资源后，首先会对资源进行解析：")]),t._v(" "),_("ul",[_("li",[t._v("查看响应头的信息，根据不同的指示做对应处理，比如重定向，存储cookie，解压gzip，缓存资源等等")]),t._v(" "),_("li",[t._v("查看响应头的 Content-Type的值，根据不同的资源类型采用不同的解析方式")])]),t._v(" "),_("p",[t._v("关于页面的渲染过程如下：")]),t._v(" "),_("ul",[_("li",[t._v("解析HTML，构建 DOM 树")]),t._v(" "),_("li",[t._v("解析 CSS ，生成 CSS 规则树")]),t._v(" "),_("li",[t._v("合并 DOM 树和 CSS 规则，生成 render 树")]),t._v(" "),_("li",[t._v("布局 render 树（ Layout / reflow ），负责各元素尺寸、位置的计算")]),t._v(" "),_("li",[t._v("绘制 render 树（ paint ），绘制页面像素信息")]),t._v(" "),_("li",[t._v("浏览器会将各层的信息发送给 GPU，GPU 会将各层合成（ composite ），显示在屏幕上")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/db7bddd0-bdf4-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),_("ul",[_("li",[t._v("https://github.com/febobo/web-interview/issues/141")]),t._v(" "),_("li",[t._v("https://zhuanlan.zhihu.com/p/80551769")])])])}),[],!1,null,null,null);v.default=s.exports}}]);