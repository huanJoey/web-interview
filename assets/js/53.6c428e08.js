(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{543:function(s,t,a){"use strict";a.r(t);var e=a(67),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-说说对-node-中的-process-的理解-有哪些常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说对-node-中的-process-的理解-有哪些常用方法"}},[s._v("#")]),s._v(" 面试官：说说对 Node 中的 process 的理解？有哪些常用方法？")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/4f7866b0-c2b2-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"一、是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[s._v("#")]),s._v(" 一、是什么")]),s._v(" "),a("p",[a("code",[s._v("process")]),s._v(" 对象是一个全局变量，提供了有关当前 "),a("code",[s._v("Node.js")]),s._v("进程的信息并对其进行控制，作为一个全局变量")]),s._v(" "),a("p",[s._v("我们都知道，进程计算机系统进行资源分配和调度的基本单位，是操作系统结构的基础，是线程的容器")]),s._v(" "),a("p",[s._v("当我们启动一个"),a("code",[s._v("js")]),s._v("文件，实际就是开启了一个服务进程，每个进程都拥有自己的独立空间地址、数据栈，像另一个进程无法访问当前进程的变量、数据结构，只有数据通信后，进程之间才可以数据共享")]),s._v(" "),a("p",[s._v("由于"),a("code",[s._v("JavaScript")]),s._v("是一个单线程语言，所以通过"),a("code",[s._v("node xxx")]),s._v("启动一个文件后，只有一条主线程")]),s._v(" "),a("h2",{attrs:{id:"二、属性与方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、属性与方法"}},[s._v("#")]),s._v(" 二、属性与方法")]),s._v(" "),a("p",[s._v("关于"),a("code",[s._v("process")]),s._v("常见的属性有如下：")]),s._v(" "),a("ul",[a("li",[s._v("process.env：环境变量，例如通过 `process.env.NODE_ENV 获取不同环境项目配置信息")]),s._v(" "),a("li",[s._v("process.nextTick：这个在谈及 "),a("code",[s._v("EventLoop")]),s._v(" 时经常为会提到")]),s._v(" "),a("li",[s._v("process.pid：获取当前进程id")]),s._v(" "),a("li",[s._v("process.ppid：当前进程对应的父进程")]),s._v(" "),a("li",[s._v("process.cwd()：获取当前进程工作目录，")]),s._v(" "),a("li",[s._v("process.platform：获取当前进程运行的操作系统平台")]),s._v(" "),a("li",[s._v("process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值")]),s._v(" "),a("li",[s._v("进程事件： process.on(‘uncaughtException’,cb) 捕获异常信息、 process.on(‘exit’,cb）进程推出监听")]),s._v(" "),a("li",[s._v("三个标准流： process.stdout 标准输出、 process.stdin 标准输入、 process.stderr 标准错误输出")]),s._v(" "),a("li",[s._v("process.title 指定进程名称，有的时候需要给进程指定一个名称")])]),s._v(" "),a("p",[s._v("下面再稍微介绍下某些方法的使用：")]),s._v(" "),a("h3",{attrs:{id:"process-cwd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-cwd"}},[s._v("#")]),s._v(" process.cwd()")]),s._v(" "),a("p",[s._v("返回当前 "),a("code",[s._v("Node")]),s._v("进程执行的目录")]),s._v(" "),a("p",[s._v("一个"),a("code",[s._v("Node")]),s._v(" 模块 "),a("code",[s._v("A")]),s._v(" 通过 NPM 发布，项目 "),a("code",[s._v("B")]),s._v(" 中使用了模块 "),a("code",[s._v("A")]),s._v("。在 "),a("code",[s._v("A")]),s._v(" 中需要操作 "),a("code",[s._v("B")]),s._v(" 项目下的文件时，就可以用 "),a("code",[s._v("process.cwd()")]),s._v(" 来获取 "),a("code",[s._v("B")]),s._v(" 项目的路径")]),s._v(" "),a("h3",{attrs:{id:"process-argv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-argv"}},[s._v("#")]),s._v(" process.argv")]),s._v(" "),a("p",[s._v("在终端通过 Node 执行命令的时候，通过 "),a("code",[s._v("process.argv")]),s._v(" 可以获取传入的命令行参数，返回值是一个数组：")]),s._v(" "),a("ul",[a("li",[s._v("0: Node 路径（一般用不到，直接忽略）")]),s._v(" "),a("li",[s._v("1: 被执行的 JS 文件路径（一般用不到，直接忽略）")]),s._v(" "),a("li",[s._v("2~n: 真实传入命令的参数")])]),s._v(" "),a("p",[s._v("所以，我们只要从 "),a("code",[s._v("process.argv[2]")]),s._v(" 开始获取就好了")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"process-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-env"}},[s._v("#")]),s._v(" process.env")]),s._v(" "),a("p",[s._v("返回一个对象，存储当前环境相关的所有信息，一般很少直接用到。")]),s._v(" "),a("p",[s._v("一般我们会在 "),a("code",[s._v("process.env")]),s._v(" 上挂载一些变量标识当前的环境。比如最常见的用 "),a("code",[s._v("process.env.NODE_ENV")]),s._v(" 区分 "),a("code",[s._v("development")]),s._v(" 和 "),a("code",[s._v("production")])]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("vue-cli")]),s._v(" 的源码中也经常会看到 "),a("code",[s._v("process.env.VUE_CLI_DEBUG")]),s._v(" 标识当前是不是 "),a("code",[s._v("DEBUG")]),s._v(" 模式")]),s._v(" "),a("h3",{attrs:{id:"process-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick"}},[s._v("#")]),s._v(" process.nextTick()")]),s._v(" "),a("p",[s._v("我们知道"),a("code",[s._v("NodeJs")]),s._v("是基于事件轮询，在这个过程中，同一时间只会处理一件事情")]),s._v(" "),a("p",[s._v("在这种处理模式下，"),a("code",[s._v("process.nextTick()")]),s._v("就是定义出一个动作，并且让这个动作在下一个事件轮询的时间点上执行")]),s._v(" "),a("p",[s._v("例如下面例子将一个"),a("code",[s._v("foo")]),s._v("函数在下一个时间点调用")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("输出结果为"),a("code",[s._v("bar")]),s._v("、"),a("code",[s._v("foo")])]),s._v(" "),a("p",[s._v("虽然下述方式也能实现同样效果：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("两者区别在于：")]),s._v(" "),a("ul",[a("li",[s._v("process.nextTick()会在这一次event loop的call stack清空后（下一次event loop开始前）再调用callback")]),s._v(" "),a("li",[s._v("setTimeout()是并不知道什么时候call stack清空的，所以何时调用callback函数是不确定的")])]),s._v(" "),a("h3",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("ul",[a("li",[s._v("http://nodejs.cn/api/process.html")]),s._v(" "),a("li",[s._v("https://vue3js.cn/interview/")])])])}),[],!1,null,null,null);t.default=n.exports}}]);