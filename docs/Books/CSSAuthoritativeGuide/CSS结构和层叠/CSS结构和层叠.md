# CSS结构和层叠

## 权重

具体分析见[JS-TIPS-CSS权重](https://github.com/JiangWeixian/JS-Tips/blob/master/CSS/css%E9%80%89%E6%8B%A9%E5%99%A8%E4%BC%98%E5%85%88%E7%BA%A7.md)

![CSS权重](https://raw.githubusercontent.com/JiangWeixian/JS-Books/master/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97/CSS%E7%BB%93%E6%9E%84%E5%92%8C%E5%B1%82%E5%8F%A0/img/%E9%80%89%E6%8B%A9%E5%99%A8%E6%9D%83%E9%87%8D.PNG)

**权重计算方式可以参考以上链接**

1. 权重不同的时候，权重比较大的生效
2. 权重相同的时候，后面哪个生效
3. **注意上面所说的通配符不带有权重，也就是权重为0**
4. 继承得到的样式权重是没有，**注意不是0，可以理解为-1**

注意第3点和第4点之间区别。

## 一些建议

* 设置链接(`a`)样式方式是`LVHA`