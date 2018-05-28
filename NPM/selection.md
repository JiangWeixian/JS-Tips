# selection.js
> 源码阅读&&使用实录

<!-- TOC -->

- [selection.js](#selectionjs)
    - [这家伙能够干嘛](#这家伙能够干嘛)
    - [先从使用开始](#先从使用开始)
        - [toolbar改动](#toolbar改动)

<!-- /TOC -->

## 这家伙能够干嘛

[Github主页](https://github.com/yabwe/medium-editor)。效果见demo(或者下图)，选中一段文字就可以看到效果了。

![selectionjs-demo](https://raw.githubusercontent.com/JiangWeixian/JS-Tips/master/NPM/img/selectionjs_demo.png)

## 先从使用开始

* platforms: `electron-vue`
* issue - 在该平台上遇到过无法导包的情况。即`import "medium-selection"`是无法起作用的

所有做了如下改动（开头`import`部分改动），实现了简单版本：

```vue
<template>
  <div class="textEditor" @input="handleInput">
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import MediumEditor from 'medium-editor/dist/js/medium-editor.min'
  import 'medium-editor/dist/css/medium-editor.min.css'

  export default {
    name: 'plugin-selection',
    props: {
      value: String,
      options: {
        type: Object,
        default: () => ({})
      }
    },
    data () {
      return {
        editor: null // 用来存放 editor
      }
    },
    watch: {
      // refer: https://github.com/FranzSkuffka/vue-medium-editor/blob/master/index.js
      value (newVal, oldVal) {
        if (newVal !== this.$el.innerHTML) { // 用 $el.innerHTML 来解决 v-html 的光标跳到行首的问题
          this.$el.innerHTML = newVal || ''
        }
      }
    },
    methods: {
      handleInput (e) {
        this.$emit('input', e.target.innerHTML)
      }
    },
    mounted () {
      // 处理初始值的情况
      this.$el.innerHTML = this.value
      console.log(this.$el)
      // 这里当然可以自定义 options 啦
      this.editor = new MediumEditor(this.$el, Object.assign({}, this.options))
      // medium-editor 的 api，监听内容改变化
      this.editor.subscribe('editableInput', this.handleInput)
    },
    beforeDestroy () {
      this.editor.unsubscribe('editableInput', this.handleInput)
      this.editor.destroy()
    }
  }
</script>
```

就可以实现如图效果：

![selection_simpledemo_invue]()

### toolbar改动

`toolbar`是我需要改动的地方。

