# AngularJS
AngularJS

[AngularJS Phone Catalog Tutorial v1.4.5][2]

[get Stareted][4]

[Google Phone Gallery(demo)][1]

[angular-seed — the seed for AngularJS apps][3]


[1]:http://web.archive.org/web/20131215082038/http://www.android.com/devices/
[2]:https://docs.angularjs.org/tutorial
[3]:https://github.com/angular/angular-seed
[4]:https://docs.angularjs.org/misc/started

~~&lt;script src="http://code.angularjs.org/angular-1.0.1.min.js"&gt;&lt;/script&gt;~~


####My Demo
*	[helloworld.html](helloworld.html)
*	[bi-directional-data-binding.html](bi-directional-data-binding.html)
*	[Todo App](todo/index.html)
*	[Directive Tutorial](directive-tutorial/index.html)

####概念
* 类库 - 类库是一些函数的集合，它能帮助你写WEB应用(jQuery等)
	* 起主导作用的是你的代码
* 框架 - 框架是一种特殊的、已经实现了的WEB应用，你只需要对它填充具体的业务逻辑。(knockout、sproutcore)
	* 这里框架是起主导作用的
* 标识符(directives)的结构，让浏览器能够识别新的语法
	* 使用双大括号{{}}语法进行数据绑定
	* 使用DOM控制结构来实现迭代或者隐藏DOM片段
	* 支持表单和表单的验证
	* 能将逻辑代码关联到相关的DOM元素上
	* 能将HTML分组成可重用的组件
* 端对端的解决方案
* CRUD（增加Create、查询Retrieve、更新Update、删除Delete）的应用
* AngularJS双向数据绑定的概念。 输入框的任何更改会立即反映到模型变量（一个方向），模型变量的任何更改都会立即反映到问候语文本中（另一方向）。
* 模型是从AngularJS作用域对象的属性引申的

####优势
* 构建一个CRUD应用可能用到的全部内容包括：数据绑定、基本模板标识符、表单验证、路由、深度链接、组件重用、依赖注入。
* 测试方面包括：单元测试、端对端测试、模拟和自动化测试框架。
* 具有目录布局和测试脚本的种子应用作为起点。
* AngularJS主要考虑的是构建CRUD应用

####缺陷
* 如游戏，图形界面编辑器，这种DOM操作很频繁也很复杂的应用，和CRUD应用就有很大的不同，它们不适合用AngularJS来构建(像这种情况用一些更轻量、简单的技术如jQuery可能会更好。)
* 损失一部分灵活性

####端对端

	端对端是针对网络中传输的两端设备间的关系而言的。端对端传输指的是在数据传输前，经过各种各样的交换设备，在两端设备间建立一条链路，就象它们是直接相连的一样，链路建立后，发送端就可以发送数据，直至数据发送完毕，接收端确认接收成功。
	端对端传输的优点是链路建立后，发送端知道接收设备一定能收到，而且经过中间交换设备时不需要进行存储转发，因此传输延迟小。
	端对端传输的缺点是直到接收端收到数据为止，发送端的设备一直要参与传输。如果整个传输的延迟很长，那么对发送端的设备造成很大的浪费。端对端传输的另一个缺点是如果接收设备关机或故障，那么端对端传输不可能实现。
	在一个网络系统的不同分层中，可能用到端对端传输，也可能用到点对点传输。如Internet网，IP及以下各层采用点到点传输，4层以上采用端对端传输。
####点对点
	点对点技术（peer-to-peer， 简称P2P）又称对等互联网络技术，是一种网络新技术，依赖网络中参与者的计算能力和带宽，而不是把依赖都聚集在较少的几台服务器上。P2P网络通常用于通过Ad Hoc连接来连接节点。这类网络可以用于多种用途，各种文件共享软件已经得到了广泛的使用。P2P技术也被使用在类似VoIP等实时媒体业务的数据通信中。