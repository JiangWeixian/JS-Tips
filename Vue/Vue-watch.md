# Vue - watch
> 关于watch一些总结

## 正文

* 关于`vue-router`。在watch中我们一般都会使用
    ```JavaScript
    'route'(to, from) {
        
    }
    ```
    **注意：无论你在哪个页面使用这个函数watch。a页面使用也会影响到b页面。**就像是你`console.log(to)`在a页面，你在b页面同样能够`console.log`

* 只有数据中含有这个属性，才会被`watch`捕获到。`JavaScript`能够做到a.somekey = 'value'。即使a在初始化的时候没有`somekey`这个属性。关键在于如果没有在定义是给**somekey**这个属性。是不会在watch的时候捕获到的。所以在定义的时候。
    ```JavaScript
    data() {
        return {
            a: {
                somekey: 'value'
            }
        }
    }
    ```
    必须在初始化的时候加上`somekey`才能够在watch中捕获到。