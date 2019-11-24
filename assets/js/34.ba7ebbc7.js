(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{305:function(v,e,_){"use strict";_.r(e);var t=_(0),r=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"tensorflow-vue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow-vue"}},[v._v("#")]),v._v(" Tensorflow+Vue")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#tensorflowvue"}},[v._v("Tensorflow+Vue")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E5%85%B3%E9%94%AE%E6%8A%80%E6%9C%AF"}},[v._v("关键技术")])]),v._v(" "),_("li",[_("a",{attrs:{href:"#%E6%B5%81%E7%A8%8B"}},[v._v("流程")])]),v._v(" "),_("li",[_("a",{attrs:{href:"#%E8%B0%83%E7%94%A8%E6%91%84%E5%83%8F%E5%A4%B4"}},[v._v("调用摄像头")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E6%B5%81%E7%A8%8B-1"}},[v._v("流程")])])])]),v._v(" "),_("li",[_("a",{attrs:{href:"#%E6%A3%80%E6%B5%8B"}},[v._v("检测")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E6%B5%81%E7%A8%8B-2"}},[v._v("流程")])])])]),v._v(" "),_("li",[_("a",{attrs:{href:"#%E6%98%BE%E7%A4%BA"}},[v._v("显示")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E9%97%AE%E9%A2%98%E6%89%80%E5%9C%A8"}},[v._v("问题所在？")])])])])])])]),v._v(" "),_("h2",{attrs:{id:"关键技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关键技术"}},[v._v("#")]),v._v(" 关键技术")]),v._v(" "),_("ul",[_("li",[v._v("tensorflow.js and mobilenet - 都是"),_("code",[v._v("NPM")]),v._v("包")]),v._v(" "),_("li",[v._v("调用手机"),_("code",[v._v("camera")])]),v._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/JiangWeixian/tf-mobilenet-vue",target:"_blank",rel:"noopener noreferrer"}},[v._v("项目地址"),_("OutboundLink")],1)])]),v._v(" "),_("h2",{attrs:{id:"流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[v._v("#")]),v._v(" 流程")]),v._v(" "),_("p",[v._v("检测分为三个阶段：获取模型输入、进行检测和输出结果")]),v._v(" "),_("ol",[_("li",[v._v("获取输入 - 通过调用摄像头来获取输入图像")]),v._v(" "),_("li",[v._v("将摄像头得到的一帧图像作为模型输入")]),v._v(" "),_("li",[v._v("将模型的检测结果返回，并输出到屏幕上")])]),v._v(" "),_("h2",{attrs:{id:"调用摄像头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#调用摄像头"}},[v._v("#")]),v._v(" 调用摄像头")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia",target:"_blank",rel:"noopener noreferrer"}},[v._v("MDN-官方API参考"),_("OutboundLink")],1)]),v._v(" "),_("ul",[_("li",[v._v("获取摄像头数目(前置和后置) - "),_("code",[v._v("navigator.mediaDevices.enumerateDevices")])]),v._v(" "),_("li",[v._v("获取摄像头 - "),_("code",[v._v("navigator.getUserMedia")]),v._v("，现在新的"),_("code",[v._v("API")]),v._v("是"),_("code",[v._v("navigator.mediaDevices.getUserMedia")]),v._v("。可以设置 "),_("strong",[v._v("视频，音频以及是否前置后置摄像头")])])]),v._v(" "),_("h3",{attrs:{id:"流程-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程-2"}},[v._v("#")]),v._v(" 流程")]),v._v(" "),_("ol",[_("li",[v._v("初始化摄像头 - 针对不同浏览器统一接口函数")]),v._v(" "),_("li",[v._v("获取摄像头数目")]),v._v(" "),_("li",[v._v("将摄像头数目、音频和视频(是否开启)作为参数传递来开启摄像头")])]),v._v(" "),_("p",[_("strong",[v._v("将视频流显示")])]),v._v(" "),_("p",[v._v("结合"),_("code",[v._v("video")]),v._v("标签使用，设置"),_("code",[v._v("video.src")]),v._v("为获取得到视频流(MDN做了兼容处理)")]),v._v(" "),_("p",[_("strong",[v._v("截取其中某一帧")])]),v._v(" "),_("p",[_("code",[v._v("SVG")]),v._v("具有画图功能")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("drawImage")]),v._v(" - 画图。在这个项目中，直接将"),_("code",[v._v("video")]),v._v("标签传递进来")]),v._v(" "),_("li",[_("code",[v._v("toDataURL")]),v._v(" - 将"),_("code",[v._v("svg")]),v._v("变为"),_("code",[v._v("image")]),v._v("的"),_("code",[v._v("src")]),v._v("，起到显示作用")])]),v._v(" "),_("h2",{attrs:{id:"检测"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#检测"}},[v._v("#")]),v._v(" 检测")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://js.tensorflow.org/",target:"_blank",rel:"noopener noreferrer"}},[v._v("tensorflow.js"),_("OutboundLink")],1)]),v._v(" "),_("p",[v._v("在本例中，直接使用"),_("code",[v._v("tensorflow")]),v._v("的转换功能，将网络权重转换为网络模型。")]),v._v(" "),_("p",[v._v("如果想要训练的话，官方给了"),_("a",{attrs:{href:"https://js.tensorflow.org/tutorials/mnist.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("mnist例子"),_("OutboundLink")],1),v._v("。大体流程和"),_("code",[v._v("python")]),v._v("版本一致：")]),v._v(" "),_("ol",[_("li",[v._v("加载数据(包括输入和输出) - "),_("code",[v._v("data")]),v._v("通过"),_("code",[v._v("Image")]),v._v("数据并转化为"),_("code",[v._v("SVG")]),v._v("作为"),_("code",[v._v("image-data")]),v._v("，具体可看"),_("a",{attrs:{href:"https://github.com/tensorflow/tfjs-examples/blob/master/mnist/data.js",target:"_blank",rel:"noopener noreferrer"}},[v._v("这里"),_("OutboundLink")],1),v._v("。")]),v._v(" "),_("li",[v._v("构建网络模型")]),v._v(" "),_("li",[v._v("设置误差更新目标函数，以及误差速率等")]),v._v(" "),_("li",[v._v("然后训练")])]),v._v(" "),_("p",[v._v("更多例子。")]),v._v(" "),_("p",[v._v("所以想要在更为复杂的数据集上训练并不合适：")]),v._v(" "),_("ol",[_("li",[v._v("如果通过"),_("code",[v._v("nodejs")]),v._v("来辅助的话，为什么不使用"),_("code",[v._v("python-tensorflow")]),v._v("然后转化为"),_("code",[v._v("tensorflow.js")]),v._v("使用")]),v._v(" "),_("li",[v._v("如果可以想要以"),_("code",[v._v("mnist")]),v._v("方式训练，数据请求是一个大问题")])]),v._v(" "),_("p",[_("strong",[v._v("这个一定要注意！也要说清楚。")])]),v._v(" "),_("h3",{attrs:{id:"流程-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流程-3"}},[v._v("#")]),v._v(" 流程")]),v._v(" "),_("ol",[_("li",[v._v("加载网络模型 - 包括加载权重和构建网络")]),v._v(" "),_("li",[v._v("然后将 "),_("strong",[v._v("调用摄像头")]),v._v("中获得的图像作为输入。获得检测结果，接下来进入显示阶段。")])]),v._v(" "),_("h2",{attrs:{id:"显示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#显示"}},[v._v("#")]),v._v(" 显示")]),v._v(" "),_("p",[v._v("了解了"),_("code",[v._v("debounce")]),v._v("之后，这部分还有改进部分。目前的方式是：")]),v._v(" "),_("ol",[_("li",[v._v("检测得到结果，设置显示"),_("code",[v._v("flag=true")])]),v._v(" "),_("li",[v._v("如果检测到"),_("code",[v._v("flag")]),v._v("为"),_("code",[v._v("true")]),v._v("。就开始进入显示动画，显示动画持续一段时间，然后消失。")])]),v._v(" "),_("h3",{attrs:{id:"问题所在？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题所在？"}},[v._v("#")]),v._v(" 问题所在？")]),v._v(" "),_("p",[v._v("关键就在于这个显示。")]),v._v(" "),_("p",[v._v("因为如果连续点击检测按钮的话会有问题。可以参考"),_("code",[v._v("debounce")]),v._v("方法改进。")])])}),[],!1,null,null,null);e.default=r.exports}}]);