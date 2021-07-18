# 风格指南

- 书写风格
- 目录层级
- 项目命名
- 文件命名
- 常用符号

# 书写风格

- 尽量不使用句号, 用空行和排版代替
- 网址本身也是一种信息，直接展示，除特殊情况不需要隐藏
- 不去区分H1 ~ H6, 让工具自行分析结构层级
- 用分隔线适时地划分逻辑内容
- 代码段也当作详情功能使用，这时候不需要加语言类型
- `每篇文章最好有至少一张图片` ，有利于记忆
- 图片尽量本地备份一份, 减少引用第三方来源
- 读书笔记，只记录感触最深的地方，不要记流水账

# 目录层级

- 层级上尽可能保持扁平, 点2下就找到那篇文章
- 建议1个章节最多5个topic

```js
[0]collection 
    ch9-chapter 
        topic5 
            _appendix1   
            
=== 
cmpt, case, tag --> 组件/案例/示例/标签
record, idea/faq, todo --> 按照时间轴记录
// private --> 私人内容, 不方便公开的
// notnow/old, offcut, halfway --> 不推荐的/过时内容, “战略放弃”
// code --> 代码片段
// spec --> 标准规范
// minor --> 少数派        
```

# 项目命名

> night-tpl-mall-minapp-jdk8-es-rocketmq-202109

- 项目前缀

```java
night --> 不公开的私人项目

===
// 桂影斑驳, 不灭的纹理
laurel: 月桂 --> python学习
tattoo: 纹身 --> python自研框架

// 冰雪消融, 裸露出自然的肌肤
natural --> javascript学习
melt --> javascript自研框架

// 喜欢那年夏天和风吹拂脸庞的感觉
summer --> java学习
zephyr: 和风; 微风 --> java自研框架

// 就像一个人无法遏制对曙光的热爱
crush --> golang学习
aurora: 极光; 曙光; 曙光女神 --> golang自研框架

// 因为爱过你, 所以持续痛苦
agony: (精神或肉体的) 极度痛苦, 谐音“爱过你” --> algorithm学习
linger: 继续存留; 缓慢消失; 流连; 花很长时间做(某事); 持续看(或思考) --> algorithm模型

// 俯瞰世界之大, 回首芸芸众生
onism: 世界如此之大,自己能游历的地方却如此之小 --> hobby
sonder: 过客感，恍然意识到生命中的芸芸过客都有自己波澜壮阔的一生 --> hobby

// 珍重两种感觉, 一种是醍醐灌顶, 一种是似曾相识 
kindle: 点亮思维 --> thought
dejavu: 似曾经历过的感觉 --> thought

===
cosy: 温暖舒适
rosy: 美好的, 乐观的

wabi
sabi

wow
flipped/flip: 怦然心动

vesper: 薄暮，晚祷; 金星
sprout

wing
crystal
olly: 笑翠鸟 || olly olly oxen free 孩童游戏里的一句口语 ≈ oh yeah
somnus: 罂粟
glance
taxol: 紫杉醇
abyss: 深渊
halo: (绘画等中环绕圣人头上的) 光环，光轮

kilig: 
    塔加拉族语, 形容那种喜欢一个人喜欢得好像胃里正有成千上万只蝴蝶翩翩，
    一张嘴就要全部飞出来一样的醉醺醺、麻酥酥感

vanilla: 香草冰淇淋
echo
vert: 森林中的草木，绿色;
meteor: 流星
oreo: 奥利奥
iris: 难以表达的要溢出胸腔的满满的喜欢
```


- 项目内容

```js
+ 项目类型(tpl/demo) 
+ 业务定位(admin/mall/blog/door/portal)
+ 应用场景(pc/h5/minapp/ie10)

===
`demo`/course/samples --> 偏语法或学习
`tpl`/template --> 可复用/业务封装
`cmpt`/component --> 组件
`diff`/benchwork --> 比较/性能对比
`diy` --> 自己魔改
`mini` --> 仿制的轮子
`analysis`/code --> 源码分析
`algo`/algorithm --> 算法
`arch`/architecture --> 架构
```

- 底层环境

```js
+ 底层环境(jdk8)
+ 构建工具(webpack)
```

- 特色标识

```js
+ 基础框架(ssm/ssh/springboot2) 
+ 特色技术(beetl/hikaricp) 
+ 项目名称/作者/来源标记(ruoyi)
```

- 时间版本

```js
+ 版本(v3.4.2)
+ 时间(20191208)
```

# 文件命名

> 01-[Basics]xxxx-201809(突出重点+代表技术+作者)@nice.md

```js
核心 Core
基础 Basics
高级 Advanced

提纲 Summary
工具 Utils
生态 Ecology
模板 Template

书摘 Note
思考 Thinking
问题 Question

技巧 Skills
实践 Practice
方案 Solution
```

---

# 常用符号

- 通用符号

```js
: = @def 
!!!! = @attention
???? = @doubt 存在质疑

=== 段内分隔,3个足矣

---xyz---> 因果逻辑,长度随心,方向随意
==> 推导/强逻辑
->> = @see 其他地方已经写过了
<--xyz--> = @vs 存在对立关系 

// ($) = @pay/@paid 收费
// (*) = @ignore 可省略/可忽略
```

- 自定义符号

```js
@code 源码
@doc 文档
@def 定义
// @wiki

// @tutorial 教程
// @team
// @mvn

@isbn
@by 作者或者相关的人
@from 

@home 主页
// @intro 介绍
@org 官方
@dl 下载地址
// @api 接口服务
// @service
// @ui 界面
// @skillmap
// @roadmap

@issue
@date
@repo

@os 内心独白
@ps 补充备注
@eg 举例
// @balabala 
@like 和什么类似
@vs 竞品

===
@tip
@etc 诸如此类
@proof/@pf 证明
@from?? 不确定来源或作者
@bak 备份
@steps 步骤
@ref 引用/参考
@sum 总结
// @summary 
@faq
@demo 案例
// @misc 杂项

@ithink 个人观点
// @soul 
@main 主要内容
@other 其他不太重要的内容
@wip 半成品
@sub 替补内容

// @dict 词霸

@diff

===
@mdn
@w3c

// @ruanyf 
// @liaoxf
// @funtl

// @juejin
// @imooc

// @runoob
// @bilibili

// @reilly
// @github
// @gitee

// @bootcdn
// @lanhu

===
@but
@and 
@or

===
@nice
@cool
@old 信息过时
// @deprecated 不推荐/已过时

@get 已获得    
// @purchased

@closed 闭源/关闭

@local 本地资源
@yun 云资源

@attention 需要注意
// @thinking 保持判断

@notnow 
@ok
@notok

@todo 

@ignore 
@digest 需要理解消化的内容

@doubt 质疑
// @wrong 
@ad 可能存在广告内容
@minor 占少数派
@empty 言之无物

// @chinese 国内技术
@zh 中文版/中文的
// @translated 译文(非原文)


@kpi 疑似KPI项目
@fun 有意思

@simple 简单/简明
@easy 容易

@messy 混乱/尚未整理
@rough 粗糙的
@useful
@esp 尤其

// @creative
// @cantrun 项目无法运行(阅读)
// @complex

// @slow 慢速
// @proxy 需要代理

@nil 失效/找不到资源
// @null/@none
@building 建设中
@archived
@lazy 不活跃

@fix 已修复
@ugly 内容丑陋/令人厌恶的

===
@call sb. @符号已被征用, 用来代替我们常用的at
@thx 感谢


===
@see
// @link
// @author
@since
@throws

@literal(attr="xxx")
// {@literal <Integer>}
// (@literal <Integer>)  
```