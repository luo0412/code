(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{465:function(a,s,e){"use strict";e.r(s);var t=e(6),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"源码-spring-data-redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码-spring-data-redis"}},[a._v("#")]),a._v(" [源码]Spring Data Redis")]),a._v(" "),e("ul",[e("li",[a._v("@code "),e("a",{attrs:{href:"https://github.com/spring-projects/spring-data-redis",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/spring-projects/spring-data-redis"),e("OutboundLink")],1)])]),a._v(" "),e("h1",{attrs:{id:"文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文章"}},[a._v("#")]),a._v(" 文章")]),a._v(" "),e("ul",[e("li",[a._v("徐靖峰-Spring Data Redis解析\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnkirito.moe/spring-data-redis-1/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.cnkirito.moe/spring-data-redis-1/"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnkirito.moe/spring-data-redis-2/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.cnkirito.moe/spring-data-redis-2/"),e("OutboundLink")],1)])])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("// RedisTemplate\n\nredis之所以被冠以银弹，万金油的称号\n甚至实现了一部分中间件队列的功能，其内置的 channel 机制\n可以用于实现分布式的队列和广播\n\n===\n// 序列化\nkeySerializer 和 valueSerializer\n\nStringRedisSerializer\n\n实现 Kryo 序列化\n")])])]),e("ul",[e("li",[a._v("李乾坤-spring redis 源码分析 @nice\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://qiankunli.github.io/2019/05/09/spring_jedis_source.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://qiankunli.github.io/2019/05/09/spring_jedis_source.html"),e("OutboundLink")],1)])])])]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RedisTemplate")]),a._v(" 和"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ValueOperations")]),a._v("、"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ListOperation")]),a._v(" 互相持有对方的引用， \n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RedisTemplate")]),a._v(" 作为用户操作的入口对象， \n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ValueOperations")]),a._v("、"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ListOperation")]),a._v(" 等负责分担五种数据类型的 操作\n\nspring"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("redis 只是将jedis 作为 redis 访问的工具之一，并没有严格绑定\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ScriptingCommands")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);