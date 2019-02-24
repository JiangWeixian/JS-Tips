# 盒子模型
> box-sizing

## 前置知识

在[can i use](https://caniuse.com/#search=box-sizing)支持情况还不错。

大胆使用！

## 分类以及区别

区别在计算宽高上

* content-box - 宽高等于**定义高度或者内容高度** + **`padding + border`**
* border-box - 如果定义了多少高度，那么实际就是都少高度。类如定义了`width: 50px`。假设又定义了`border: 10px`。那么实际可用的高度就是`50px-10px=40px`。

也就是`content-box`定义内容宽高，`border-box`定义整体宽高，然后通过减去`border&padding`来计算得到内容宽高。