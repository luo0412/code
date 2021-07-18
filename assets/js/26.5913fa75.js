(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{208:function(a,t,s){"use strict";s.r(t);var n=s(6),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"源码-arraylist-vector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码-arraylist-vector"}},[a._v("#")]),a._v(" [源码]ArrayList+Vector")]),a._v(" "),s("ul",[s("li",[a._v("遍历的时候可以删除吗?")])]),a._v(" "),s("h1",{attrs:{id:"arraylist的源码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arraylist的源码实现"}},[a._v("#")]),a._v(" ArrayList的源码实现")]),a._v(" "),s("ul",[s("li",[a._v("实现接口\n"),s("ul",[s("li",[a._v("List")]),a._v(" "),s("li",[a._v("RandomAccess")]),a._v(" "),s("li",[a._v("Cloneable")]),a._v(" "),s("li",[a._v("java.io.Serializable")])])])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 源码路径 jdk1.8.0_152\\jre\\lib\\rt.jar!\\java\\util\\ArrayList.class")]),a._v("\n")])])]),s("ul",[s("li",[s("p",[a._v("两种copy")]),a._v(" "),s("ul",[s("li",[a._v("System.arraycopy()")]),a._v(" "),s("li",[a._v("Arrays.copyOf()")])])])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// arraycopy()")]),a._v("\n需要目标数组，\n将原数组拷贝到你自己定义的数组里，\n而且可以选择拷贝的起点和长度以及放入新数组中的位置\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("arraycopy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("elementData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" elementData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" index "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" size "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// copyOf()")]),a._v("\n系统自动在内部新建一个数组，并返回该数组\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("copyOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("elementData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("ul",[s("li",[a._v("迭代器\n"),s("ul",[s("li",[a._v("Itr")]),a._v(" "),s("li",[a._v("ListItr")]),a._v(" "),s("li",[a._v("Iterator")]),a._v(" "),s("li",[a._v("ListIterator")])])])]),a._v(" "),s("h1",{attrs:{id:"arraylist-扩容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-扩容"}},[a._v("#")]),a._v(" ArrayList-扩容")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" minCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// oldCapacity为旧容量，newCapacity为新容量")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" oldCapacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" elementData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//将oldCapacity 右移一位，其效果相当于oldCapacity /2，")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//我们知道位运算的速度远远快于整除运算，整句运算式的结果就是将新容量更新为旧容量的1.5倍，")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" newCapacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" oldCapacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("oldCapacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//然后检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量，")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("newCapacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" minCapacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        newCapacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" minCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//再检查新容量是否超出了ArrayList所定义的最大容量，")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//若超出了，则调用hugeCapacity()来比较minCapacity和 MAX_ARRAY_SIZE，")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//如果minCapacity大于MAX_ARRAY_SIZE，则新容量则为Interger.MAX_VALUE，否则，新容量大小则为 MAX_ARRAY_SIZE。")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("newCapacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" MAX_ARRAY_SIZE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        newCapacity "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("hugeCapacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("minCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// minCapacity is usually close to size, so this is a win:")]),a._v("\n    elementData "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("copyOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("elementData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newCapacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("hr"),a._v(" "),s("h1",{attrs:{id:"vector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vector"}},[a._v("#")]),a._v(" Vector")])])}),[],!1,null,null,null);t.default=e.exports}}]);