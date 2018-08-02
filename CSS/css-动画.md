# CSS - 动画
> 实现动画的几种方式：JS版本的我也放在这里的了

## 动画相关的属性

* `transition/transform`
    * `transform`为内置动画名 - 作为`name`
    * `transition` - name/duration/time-func/delay，其中`name`还可以是一些css属性。
    * 特点 - 监听`name`是否变化，变化与否都会触发动画，`backward`是`forward`相反方向。
* `animation/keyframs`
* `requestAnimation` - 性能优于`settimeout`

## transition/transform

> 监听`name`变化，如果变化了就触发动画；**因此能够实现保持的动画，没有办法`only css`情况下实现循环的动画。**

**Q&A1 - 重点在于这个name**`/duration/time-func/delay`都很好理解:

* 如果是`css`普通属性，则`transition: width duration time-func delay`。**然后通过其余方式改变`width`**

    > 例如设置`box-transition`为上述，但是在`box.class`(新添加的class)中改变`width`。那么就可以监听到`width`变化，然后触发动画，如果`class`一直保持，那么就会保持动画最终状态。如果`class`中途消失(或者其他方式改变了`width`)，那么动画就会再一次触发。
    
* 如果是`transform`，则`transition: transform duration time-func delay`。

    > 动画触发条件和上面类似，但是`transform: rotate(xx)`之类的。

* 如果是`all`，代表监听所有属性

**Q&A2 - 多个动画**

以`name/duration/time-func/delay`为一组动画，

