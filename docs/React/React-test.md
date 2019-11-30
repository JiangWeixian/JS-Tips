---
tag: test
---

# React - test
> 如何给组件写测试

- [React - test](#react---test)
  - [Best of practice](#best-of-practice)
    - [依赖](#%e4%be%9d%e8%b5%96)
    - [Starter](#starter)
  - [Tips about Jest](#tips-about-jest)

## Best of practice
> 先说结论

### 依赖

1. jest - 测试框架
2. enzyme - 进行组件测试
3. @test-libaray/react-hooks - 测试`react-hooks`。是我用过最好用的用来测试`react-hooks`

### Starter

例子项目可以参考[@aiou/react-components-lib-template](https://github.com/JiangWeixian/templates/tree/master/packages/react-components-lib-template)

## Tips about Jest

1. `toEqual`无法比较对象中`key`的变化。也就是`{ a: 1, b: 2 }`不同于`{ b: 2, a: 1 }`。这个时候可以使用`toMatchObject`比较。
2. 使用`enzyme`的时候需要，在`test`文件夹中新建`setupTests.ts`
    
    ```ts
    import Enzyme from 'enzyme'
    import Adapter from 'enzyme-adapter-react-16'

    Enzyme.configure({ adapter: new Adapter() })
    ```

    并在`jest.config.js`中设置

    ```ts
    module.exports = {
      ...,
      setupFiles: ['<rootDir>/test/setupTests.ts'],
    }
    ```

    目的是为在`jest`初始化的时候进行的操作。

3. 如何测试`react hooks`，[这个项目](https://github.com/testing-library/react-hooks-testing-library)是我用过最好用的。
   - **注意：改变`hook state`需要包裹在`act`**
   - 通知也支持异步的`hooks`（通过`waitNextUpdate`实现）。

4. 如何测试`api request`, 假设你使用`axios`
    - 一种方案是在新建`mocks`文件夹。并新建`axios.js`, 其中自己实现`axios.get .post`, 当然是假数据, 假的接口。然后在`setUpTests.ts`中通过`jest.mock(axios)`。那么`axios request`都会`mocks/axios.js`。但是这样实际使用实在不方便。因为接口是多的，为每个接口写一遍`fake data`, 再根据不同`path`返回不同的数据。明显不太现实。
    - **更好的方案**, 通过`umi-serve`起一个本地的服务器。其读取`mock`数据的方式和`umi`一致。（在[@aiou/react-components-lib-template](https://github.com/JiangWeixian/templates/tree/master/packages/react-components-lib-template)可以看到如何启动这部分。甚至可以实现`proxy`。）那么这样一来, `/api/xxx`都会被指向`mock server`。（注意此时请求不要带上`host`）