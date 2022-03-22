(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{680:function(s,a,t){"use strict";t.r(a);var n=t(67),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"面试官-vue项目本地开发完成后部署到服务器后报404是什么原因呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-vue项目本地开发完成后部署到服务器后报404是什么原因呢"}},[s._v("#")]),s._v(" 面试官：vue项目本地开发完成后部署到服务器后报404是什么原因呢？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.vue-js.com/002c9320-4f3e-11eb-ab90-d9ae814b240d.png",alt:"image.png"}})]),s._v(" "),t("h2",{attrs:{id:"一、如何部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、如何部署"}},[s._v("#")]),s._v(" 一、如何部署")]),s._v(" "),t("p",[s._v("前后端分离开发模式下，前后端是独立布署的，前端只需要将最后的构建物上传至目标服务器的"),t("code",[s._v("web")]),s._v("容器指定的静态目录下即可")]),s._v(" "),t("p",[s._v("我们知道"),t("code",[s._v("vue")]),s._v("项目在构建后，是生成一系列的静态文件")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://imgkr2.cn-bj.ufileos.com/b9d13e56-f859-4b4b-a9da-a703a34c2f5d.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=m1qDXRSFHrfXlnAtAlVhjoLKP70%253D&Expires=1609927181",alt:""}})]),s._v(" "),t("p",[s._v("常规布署我们只需要将这个目录上传至目标服务器即可")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" 上传 user为主机登录用户，host为主机外网ip, xx为web容器静态资源路径\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" dist.zip user@host:/xx/xx/xx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("让"),t("code",[s._v("web")]),s._v("容器跑起来，以"),t("code",[s._v("nginx")]),s._v("为例")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server_name  www.xxx.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    index  /data/dist/index.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("配置完成记得重启"),t("code",[s._v("nginx")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 检查配置是否正确\nnginx -t \n\n// 平滑重启\nnginx -s reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("操作完后就可以在浏览器输入域名进行访问了")]),s._v(" "),t("p",[s._v("当然上面只是提到最简单也是最直接的一种布署方式")]),s._v(" "),t("p",[s._v("什么自动化，镜像，容器，流水线布署，本质也是将这套逻辑抽象，隔离，用程序来代替重复性的劳动，本文不展开")]),s._v(" "),t("h2",{attrs:{id:"二、404问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、404问题"}},[s._v("#")]),s._v(" 二、404问题")]),s._v(" "),t("p",[s._v("这是一个经典的问题，相信很多同学都有遇到过，那么你知道其真正的原因吗？")]),s._v(" "),t("p",[s._v("我们先还原一下场景：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("vue")]),s._v("项目在本地时运行正常，但部署到服务器中，刷新页面，出现了404错误")])]),s._v(" "),t("p",[s._v("先定位一下，HTTP 404 错误意味着链接指向的资源不存在")]),s._v(" "),t("p",[s._v("问题在于为什么不存在？且为什么只有"),t("code",[s._v("history")]),s._v("模式下会出现这个问题？")]),s._v(" "),t("h3",{attrs:{id:"为什么history模式下有问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么history模式下有问题"}},[s._v("#")]),s._v(" 为什么history模式下有问题")]),s._v(" "),t("p",[t("code",[s._v("Vue")]),s._v("是属于单页应用（single-page application）")]),s._v(" "),t("p",[s._v("而"),t("code",[s._v("SPA")]),s._v("是一种网络应用程序或网站的模型，所有用户交互是通过动态重写当前页面，前面我们也看到了，不管我们应用有多少页面，构建物都只会产出一个"),t("code",[s._v("index.html")])]),s._v(" "),t("p",[s._v("现在，我们回头来看一下我们的"),t("code",[s._v("nginx")]),s._v("配置")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server_name  www"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    index  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dist"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("可以根据 "),t("code",[s._v("nginx")]),s._v(" 配置得出，当我们在地址栏输入 "),t("code",[s._v("www.xxx.com")]),s._v(" 时，这时会打开我们 "),t("code",[s._v("dist")]),s._v(" 目录下的 "),t("code",[s._v("index.html")]),s._v(" 文件，然后我们在跳转路由进入到 "),t("code",[s._v("www.xxx.com/login")])]),s._v(" "),t("p",[s._v("关键在这里，当我们在 "),t("code",[s._v("website.com/login")]),s._v(" 页执行刷新操作，"),t("code",[s._v("nginx location")]),s._v(" 是没有相关配置的，所以就会出现 404 的情况")]),s._v(" "),t("h3",{attrs:{id:"为什么hash模式下没有问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么hash模式下没有问题"}},[s._v("#")]),s._v(" 为什么hash模式下没有问题")]),s._v(" "),t("p",[t("code",[s._v("router hash")]),s._v(" 模式我们都知道是用符号#表示的，如  "),t("code",[s._v("website.com/#/login")]),s._v(", "),t("code",[s._v("hash")]),s._v(" 的值为 "),t("code",[s._v("#/login")])]),s._v(" "),t("p",[s._v("它的特点在于："),t("code",[s._v("hash")]),s._v(" 虽然出现在 "),t("code",[s._v("URL")]),s._v(" 中，但不会被包括在 "),t("code",[s._v("HTTP")]),s._v(" 请求中，对服务端完全没有影响，因此改变 "),t("code",[s._v("hash")]),s._v(" 不会重新加载页面")]),s._v(" "),t("p",[t("code",[s._v("hash")]),s._v(" 模式下，仅 "),t("code",[s._v("hash")]),s._v(" 符号之前的内容会被包含在请求中，如 "),t("code",[s._v("website.com/#/login")]),s._v(" 只有 "),t("code",[s._v("website.com")]),s._v(" 会被包含在请求中 ，因此对于服务端来说，即使没有配置"),t("code",[s._v("location")]),s._v("，也不会返回404错误")]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("看到这里我相信大部分同学都能想到怎么解决问题了，")]),s._v(" "),t("p",[s._v("产生问题的本质是因为我们的路由是通过JS来执行视图切换的，")]),s._v(" "),t("p",[s._v("当我们进入到子路由时刷新页面，"),t("code",[s._v("web")]),s._v("容器没有相对应的页面此时会出现404")]),s._v(" "),t("p",[s._v("所以我们只需要配置将任意页面都重定向到 "),t("code",[s._v("index.html")]),s._v("，把路由交由前端处理")]),s._v(" "),t("p",[s._v("对"),t("code",[s._v("nginx")]),s._v("配置文件"),t("code",[s._v(".conf")]),s._v("修改，添加"),t("code",[s._v("try_files $uri $uri/ /index.html;")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  listen  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  server_name  www.xxx.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    index  /data/dist/index.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    try_files "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("修改完配置文件后记得配置的更新")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nginx -s reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 "),t("code",[s._v("index.html")]),s._v(" 文件")]),s._v(" "),t("p",[s._v("为了避免这种情况，你应该在 "),t("code",[s._v("Vue")]),s._v(" 应用里面覆盖所有的路由情况，然后在给出一个 404 页面")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" router "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("VueRouter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'history'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("routes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" NotFoundComponent "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("关于后端配置方案还有："),t("code",[s._v("Apache")]),s._v("、"),t("code",[s._v("nodejs")]),s._v("等，思想是一致的，这里就不展开述说了")]),s._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),t("ul",[t("li",[s._v("https://juejin.cn/post/6844903872637632525")]),s._v(" "),t("li",[s._v("https://vue-js.com/topic/5f8cf91d96b2cb0032c385c0")])])])}),[],!1,null,null,null);a.default=e.exports}}]);