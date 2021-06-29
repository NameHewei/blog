(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{265:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#yarn"}},[t._v("yarn")])]),a("li",[a("a",{attrs:{href:"#npm"}},[t._v("npm")])]),a("li",[a("a",{attrs:{href:"#node"}},[t._v("node")]),a("ul",[a("li",[a("a",{attrs:{href:"#windows安装"}},[t._v("windows安装")])]),a("li",[a("a",{attrs:{href:"#模块的分类"}},[t._v("模块的分类")])]),a("li",[a("a",{attrs:{href:"#基础信息"}},[t._v("基础信息")])]),a("li",[a("a",{attrs:{href:"#定时器"}},[t._v("定时器")])]),a("li",[a("a",{attrs:{href:"#包学习"}},[t._v("包学习")])])])]),a("li",[a("a",{attrs:{href:"#express"}},[t._v("express")])]),a("li",[a("a",{attrs:{href:"#koa"}},[t._v("koa")]),a("ul",[a("li",[a("a",{attrs:{href:"#graphql-实现"}},[t._v("graphql 实现")])]),a("li",[a("a",{attrs:{href:"#koa-router"}},[t._v("koa-router")])]),a("li",[a("a",{attrs:{href:"#request"}},[t._v("request")])])])])])]),t._v("\n[toc]"),a("p"),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[t._v("node 与 Deno 异同")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("node为js的运行平台；Deno为 js和ts的运行平台")])]),t._v(" "),a("li",[a("p",[t._v("Deno 采用沙箱模式运行代码，某些权限需要配置添加")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("后端认证方式：")]),t._v(" "),a("ol",[a("li",[t._v("传统的 session 认证")])]),t._v(" "),a("p",[t._v("用户认证记录保存在内存中的话，用户下次请求必须要请求在这台服务器上,才能拿到授权的资源，服务端的开销会明显增大，这样在分布式的应用上，相应的限制了负载均衡器的能力")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("基于 token 的鉴权")])]),t._v(" "),a("p",[t._v("不需要去考虑用户在哪一台服务器登录 ，客户端存储token，并在每次请求时附送上这个token值 服务端验证token值，并返回数据 ；服务端要支持CORS(跨来源资源共享)策略")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Json web token (JWT)")])]),t._v(" "),a("p",[t._v("Header头部，Payload负载和Signature签名 三部分生成token")]),t._v(" "),a("p",[t._v("一种标准 特别适用于分布式站点的单点登录（用户只需要登录一次就可以访问所有相互信任的应用系统）")]),t._v(" "),a("p",[t._v("token需要查库验证token 是否有效，而JWT不用查库或者少查库")]),t._v(" "),a("p",[t._v("利用 secret 来加密和解密  所以千万不能泄露")]),t._v(" "),a("h2",{attrs:{id:"yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[t._v("#")]),t._v(" yarn")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("yarn add 安装包")])]),t._v(" "),a("li",[a("p",[t._v("yarn remove 卸载包")])]),t._v(" "),a("li",[a("p",[t._v("yarn create xxx yyy  相当于全局安装 xxx  再执行  xxx yyy")])]),t._v(" "),a("li",[a("p",[t._v("设置国内源  "),a("code",[t._v("yarn config set registry https://registry.npm.taobao.org/")]),t._v(" ;查看源地址信息： "),a("code",[t._v("yarn config get registry")])])])]),t._v(" "),a("h2",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" npm")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("换源 "),a("code",[t._v("npm install --registry=https://registry.npm.taobao.org")])])]),t._v(" "),a("li",[a("p",[t._v("引入包中的某个文件 "),a("code",[t._v("import xx from '包名/xx/xx/x'")]),t._v(" 该地址会被解析为 "),a("code",[t._v("./node_modules/包名/xx/xx/x.js")])])]),t._v(" "),a("li",[a("p",[t._v("npm  ls  –g  --depth=1 2>/dev/null | grep generator-\n列出npm全局安装的包,npm包一般会依赖别的包所以是按照树状来显示的; depth 限制往下一层目录，后面是过滤错误信息。")])]),t._v(" "),a("li",[a("p",[t._v("process.env 为none的全局变量")])]),t._v(" "),a("li",[a("p",[t._v("npm 传递参数")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('scripts 命令："npmRun": "node"\n执行：npm run npmRun -- a.js  -> node a.js\n')])])]),a("ul",[a("li",[a("p",[t._v("npm update packageName")])]),t._v(" "),a("li",[a("p",[t._v("安装指定版本 "),a("code",[t._v("npm install packageName@3.1.2")])])])]),t._v(" "),a("h4",{attrs:{id:"npm-shrinkwrap-json和package-lock-json区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-shrinkwrap-json和package-lock-json区别"}},[t._v("#")]),t._v(" npm-shrinkwrap.json和package-lock.json区别")]),t._v(" "),a("ul",[a("li",[t._v("shrinkwrap 向后兼容npm版本2,3和4")]),t._v(" "),a("li",[t._v("package-lock 只能被npm 5+识别")]),t._v(" "),a("li",[t._v("可以通过运行npm shrinkwrap package-lock.json将现有的package-lock.json转换为npm-shrinkwrap.json")]),t._v(" "),a("li",[t._v("shrinkwrap应该用于库来保证安装程序包的每个人都获得完全相同的所有依赖项版本")]),t._v(" "),a("li",[t._v("package-lock允许安装程序包的人使用与package.json指定的版本范围兼容的任何版本的依赖项")]),t._v(" "),a("li",[t._v("npm install 操作会自动生成package-lock文件 并且更新该文件")]),t._v(" "),a("li",[t._v("如果是用的cnpm安装的包 注意要 npm install 操作一次 更新package-lock文件")])]),t._v(" "),a("h4",{attrs:{id:"package-json中："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-json中："}},[t._v("#")]),t._v(" package.json中：")]),t._v(" "),a("p",[t._v("devdependencies表示开发过程中依赖的包")]),t._v(" "),a("p",[t._v("dependencies表示项目在生产环境中依赖的包")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("尖括号只限大版本号: 比入^0.1.1,如果有小于1.0.0的版本都可自动更新，超过就保持0.9.9")])]),t._v(" "),a("li",[a("p",[t._v("波浪号表示只监控最小版本号的更新（如~0.1.2,当有大于该版本号且小于0.2.0才更新）")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"engines":{  \n  "node":">=0.10.0"  \n} //便是node版本需求  \n')])])]),a("p",[t._v('"script":{\n"test":"grunt test"'),a("br"),t._v("\n}"),a("br"),t._v("\nnpm start 和 npm test 可以直接用；其它用npm run")]),t._v(" "),a("p",[t._v("npm install 默认两个下的都安装，--production 只安装dependences的")]),t._v(" "),a("h4",{attrs:{id:"npx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npx"}},[t._v("#")]),t._v(" npx")]),t._v(" "),a("ol",[a("li",[t._v("调用项目内部安装的模块")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("node-modules/.bin/项目\n\nnpx 项目\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("避免全局安装模块")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npx create-react-app my-react\n")])])]),a("p",[t._v("运行后会先下载create-react-app到临时目录，用过后删除")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("使用不同版本的none\n原理是使用npm的node模块，用后就删除")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npx node@0.12.8 -v\n\nnpx -p node@8 npm run build\nnpx -p m1 -p m2\n")])])]),a("p",[t._v("-p 指定要安装的模块  可多个")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("执行github源码")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npx http://some path\n")])])]),a("p",[t._v("必须包含package.json和入口文件")]),t._v(" "),a("h2",{attrs:{id:"node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[t._v("#")]),t._v(" node")]),t._v(" "),a("h3",{attrs:{id:"windows安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows安装"}},[t._v("#")]),t._v(" windows安装")]),t._v(" "),a("blockquote",[a("p",[t._v("如果不是安装在c盘需要设置环境变量")])]),t._v(" "),a("h3",{attrs:{id:"模块的分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块的分类"}},[t._v("#")]),t._v(" 模块的分类")]),t._v(" "),a("ol",[a("li",[t._v("一．核心模块")]),t._v(" "),a("li",[t._v("二．文件模块")]),t._v(" "),a("li",[t._v("三．第三方模块")])]),t._v(" "),a("h3",{attrs:{id:"基础信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础信息"}},[t._v("#")]),t._v(" 基础信息")]),t._v(" "),a("p",[t._v("node中的map()、forEach()、for()循环有一个特性：当其函数里面里面有回调它就变成异步")]),t._v(" "),a("p",[t._v("Node里面没有全局命名空间的概念")]),t._v(" "),a("p",[t._v("url.parse('http://www.imooc.com/video/6710')")]),t._v(" "),a("p",[t._v("protocol:'http:',表示底层的协议")]),t._v(" "),a("p",[t._v("slashes:true,有没有协议后面的双斜线;")]),t._v(" "),a("p",[t._v("host:ip地址或是域名;")]),t._v(" "),a("p",[t._v("port:端口")]),t._v(" "),a("p",[t._v("hostname:主机名;")]),t._v(" "),a("p",[t._v("还可以加传两个参数")]),t._v(" "),a("p",[t._v("第二个参数:默认false，设置为true，就会用queryString来解析query的字符串，会将query的值解析为对象模式;")]),t._v(" "),a("p",[t._v("第三个参数:默认false,设置为true,就会对没有明确协议的url进行正确解析;")]),t._v(" "),a("p",[t._v("url.format({});生成一个url地址;")]),t._v(" "),a("p",[t._v("url.resolve('http://baidu.com'，'/a/b/c');")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://baidu.com/a/b/c",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://baidu.com/a/b/c"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("HTTP:")]),t._v(" "),a("p",[t._v("浏览器搜索自身DNS缓存，如果有就看有没有过期如果过期就结束，就开始搜索操作系统的DNS缓存，若也没有就读去本地Host文件，若也没有浏览器就会发起一个DNS系统调用（一般是运营商的），运营商服务器会产看自身的缓存，一直逐层请求解析DNS")]),t._v(" "),a("p",[t._v("About:DNS")]),t._v(" "),a("p",[t._v("chrome://net-internals/#dns")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("node的全局对象global   相当于浏览器中的window")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("cheerio是nodejs的抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现。适合各种Web爬虫程序。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("官方建议对一个事件不要设置超过十个监听器。太多的话可能会导致内存泄露（内存空间使用后没有收回）。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" eventsEmitter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'events'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventEmitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" life"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("eventsEmitter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlife"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("w")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'事件1是:'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlife"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'e1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("更改监听数量")]),t._v(" "),a("p",[t._v("life.setMaxListeners(数量);")]),t._v(" "),a("p",[t._v("查看是否被监听过")]),t._v(" "),a("p",[t._v("life.emit()会返回一个布尔boolean值;如果监听返回true；移除某个事件")]),t._v(" "),a("p",[t._v("life.removeListener('事件名'，具名函数名f)")]),t._v(" "),a("p",[t._v("life.on(事件名，函数名f);")]),t._v(" "),a("p",[t._v("批量移除")]),t._v(" "),a("p",[t._v("life.removeAllListeners(事件名);")]),t._v(" "),a("p",[t._v("某个事件的个数;")]),t._v(" "),a("p",[t._v("life.listeners(事件名).length或")]),t._v(" "),a("p",[t._v("eventsEmitter.listenerCount(life（实例化）,事件名)")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("__dirname nodejs的全局变量，指向当前执行脚本所在目录。")]),t._v(" "),a("p",[a("code",[t._v("console.log(__dirname) // C:\\folder1\\folder2")])]),t._v(" "),a("p",[t._v("path.join()  也可以用 "),a("code",[t._v("../")])]),t._v(" "),a("p",[a("code",[t._v("console.log(path.join(__dirname, 'a', 'b')) // C:\\folder1\\folder2\\a\\b")])]),t._v(" "),a("p",[t._v("path.resolve() 任意一个参数是以"),a("code",[t._v("/")]),t._v("开头都直接转到根目录 "),a("code",[t._v("../")]),t._v(" 是会在上一个参数的基础上返回上一级目录进行拼接")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("console.log(path.resolve()); // G:\\GitHub\\webpack-pure\nconsole.log(path.resolve('a/b', 'c')); // G:\\GitHub\\webpack-pure\\a\\b\\c\nconsole.log(path.resolve('a/b', 'c', '/k')); // G:\\k\nconsole.log(path.resolve('a/b/c', '../m')); // G:\\GitHub\\webpack-pure\\a\\b\\m\n")])])]),a("ul",[a("li",[a("p",[t._v("__dirname：返回运行文件所在的目录")])]),t._v(" "),a("li",[a("p",[t._v("path.resolve('./')：当前运行命令所在的目录")])]),t._v(" "),a("li",[a("p",[t._v("process.cwd()：当前运行命令所在的目录")])]),t._v(" "),a("li",[a("p",[t._v("path.basename(__dirname)  获取当前文件夹名称")])]),t._v(" "),a("li",[a("p",[t._v("path.sep  // 平台特定的路径片段分隔符  (例如windows是: \\ )")])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("module.exports=add和 exports.add=add 推荐使用后者;")]),t._v(" "),a("p",[t._v("module.exports=与exports=的区别")]),t._v(" "),a("p",[t._v("module.exports=exports={}//是按照这个方式赋值")]),t._v(" "),a("p",[t._v("当先设置了module.exports, "),a("code",[t._v("exports.属性")]),t._v(" 将失效")]),t._v(" "),a("p",[t._v("require() 返回的是module.exports")]),t._v(" "),a("p",[t._v("把一个对象封装到模块当中")]),t._v(" "),a("p",[t._v("module.exports=function(){"),a("br"),t._v("\nthis.name='hew';"),a("br"),t._v("\n} //用require获取到的是一个函数方法")]),t._v(" "),a("p",[t._v("多个模块")]),t._v(" "),a("p",[t._v("exports.login=function(){}  //用require获取到的是一个对象")]),t._v(" "),a("p",[t._v("如{"),a("br"),t._v("\nname:function{},login:function(){}"),a("br"),t._v("\n}")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("exports是模块公开的接口")]),t._v(" "),a("p",[t._v("require用于从外部获取一个模块接口及获取模块的exports对象")]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"常见的content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的content-type"}},[t._v("#")]),t._v(" 常见的Content-Type")]),t._v(" "),a("p",[t._v("application/x-www-form-urlebcoded 常见的form提交  post提交时可以将 contenttype改为该值")]),t._v(" "),a("p",[t._v("multipart/form-data 不对字符编码 在对文件上传时必须使用该值")]),t._v(" "),a("p",[t._v("application/json json格式数据提交")]),t._v(" "),a("p",[t._v("text/xml  提交xml格式数据")]),t._v(" "),a("h4",{attrs:{id:"request-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-method"}},[t._v("#")]),t._v(" Request Method")]),t._v(" "),a("blockquote",[a("p",[t._v("GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS, TRACE")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("PUT是修改了整条记录，不变的字段也重写，PATCH只是修改一个字段 局部修改")])]),t._v(" "),a("li",[a("p",[t._v('OPTIONS: 询问服务器支持的方法。当浏览器发现，是一个非简单请求，就自动发出一个"预检"请求，"预检"请求用的请求方法是OPTIONS')])]),t._v(" "),a("li",[a("p",[t._v("当header 的content-type 类型是以下类型时不触发options")]),t._v(" "),a("ul",[a("li",[t._v("application/x-www-form-urlencoded")]),t._v(" "),a("li",[t._v("multipart/form-data")]),t._v(" "),a("li",[t._v("text/plain")])])])]),t._v(" "),a("h3",{attrs:{id:"定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定时器"}},[t._v("#")]),t._v(" 定时器")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("setTimeout()")]),t._v(" "),a("p",[t._v("setInterval()")]),t._v(" "),a("p",[t._v("setImmediate()")]),t._v(" "),a("p",[t._v("process.nextTick() 是在本轮循环执行的，所有异步任务里最先执行的")]),t._v(" "),a("ol",[a("li",[t._v("同步任务比异步任务早执行")]),t._v(" "),a("li",[t._v("异步任务\n"),a("ul",[a("li",[t._v("本轮循环（event loop，js处理异步任务的方式）")]),t._v(" "),a("li",[t._v("次轮循环")]),t._v(" "),a("li",[t._v("本轮循环早于次轮循环")])])])]),t._v(" "),a("p",[t._v("process.nextTick()和Promise()的回调函数追加在本轮循环，即同步任务一旦执行完，就开始执行。")]),t._v(" "),a("p",[t._v("setTimeout，setInterval，setImmediate 追加在次轮循环")]),t._v(" "),a("h4",{attrs:{id:"微任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微任务"}},[t._v("#")]),t._v(" 微任务")]),t._v(" "),a("p",[t._v('promise的回调会进入异步任务的"微任务"队列')]),t._v(" "),a("p",[t._v("微任务队列追加在process.nextTick队列之后，也是属于本轮循环")]),t._v(" "),a("blockquote",[a("p",[t._v("只有前一个队列执行完了之后才能执行下一个队列")])]),t._v(" "),a("h4",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://yuchengkai.cn/docs/zh/frontend/browser.html#node-%E4%B8%AD%E7%9A%84-event-loop",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yuchengkai.cn/docs/zh/frontend/browser.html#node-%E4%B8%AD%E7%9A%84-event-loop"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("事件初始化，会先完成下面事情：")]),t._v(" "),a("p",[t._v("同步任务")]),t._v(" "),a("p",[t._v("发出异步请求")]),t._v(" "),a("p",[t._v("规划定时器生效的时间")]),t._v(" "),a("p",[t._v("执行process.nextTick()等等")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("事件循环会无限次地执行，只有异步任务的回调函数队列清空了，才停止。")]),t._v(" "),a("p",[t._v("每一轮六个阶段依次执行")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("timers:\n执行setTimeout 和setInterval,他们设置的时间并不是准确的执行时间，而是到了事件后，尽快的执行，因为系统可能因为其它而被耽误\n范围[1, 2147483647]，不在设为1")])]),t._v(" "),a("li",[a("p",[t._v("I/O callbacks:\n执行除了 close 事件，定时器和 setImmediate 的回调")])]),t._v(" "),a("li",[a("p",[t._v("idle, prepare:\nidle, prepare 阶段内部实现")])]),t._v(" "),a("li",[a("p",[t._v("poll")])]),t._v(" "),a("li",[a("p",[t._v("check")])]),t._v(" "),a("li",[a("p",[t._v("close callbacks")])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"包学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包学习"}},[t._v("#")]),t._v(" 包学习")]),t._v(" "),a("ul",[a("li",[t._v("child_process 参见 "),a("code",[t._v("node-koa/practice/")])])]),t._v(" "),a("h2",{attrs:{id:"express"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#express"}},[t._v("#")]),t._v(" express")]),t._v(" "),a("p",[t._v("var express=require(express);")]),t._v(" "),a("p",[t._v("var app=express();启动一个web服务器，将实例赋值给一个变量叫app")]),t._v(" "),a("p",[t._v("express()是express模块导出的一个入口函数。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"koa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa"}},[t._v("#")]),t._v(" koa")]),t._v(" "),a("ul",[a("li",[t._v("koa-static 当设置的目录下有index.html, 访问根路径时，会默认渲染index.html")]),t._v(" "),a("li",[t._v("koa-multer 处理上传的文件")]),t._v(" "),a("li",[t._v("koa-bodyparser 解析上传的json(基本)")]),t._v(" "),a("li",[t._v("使用koa2-cors时 要把app.use(cors())放在最前面")]),t._v(" "),a("li",[t._v("中间件中有 next 会先执行它之前的代码，执行完最后一个中间件后会逆序执行各个中间件 next 之后的代码")])]),t._v(" "),a("h3",{attrs:{id:"graphql-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphql-实现"}},[t._v("#")]),t._v(" graphql 实现")]),t._v(" "),a("ul",[a("li",[t._v("安装 apollo-server-koa 和 koa，看提示再安装graphql")])]),t._v(" "),a("h4",{attrs:{id:"学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习"}},[t._v("#")]),t._v(" 学习")]),t._v(" "),a("ul",[a("li",[t._v("是一个用于 API 的查询语言，通过定义类型和类型上的字段来创建的，然后给每个类型上的每个字段提供解析函数")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"koa-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koa-router"}},[t._v("#")]),t._v(" koa-router")]),t._v(" "),a("ul",[a("li",[t._v("/page/:id  利用 ctx.params.id 获取")])]),t._v(" "),a("h3",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" request")]),t._v(" "),a("ul",[a("li",[t._v("ctx.request.query：获取query string参数 以{ key:value } 形式返回")])])])}),[],!1,null,null,null);e.default=r.exports}}]);