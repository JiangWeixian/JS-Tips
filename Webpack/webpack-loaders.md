# Webpack - loaders
> 几个 loader 作用；以及如何组合起作用；

## css

**注意** 一般顺序为`style-loader css-loader postcss-loader stylus-loader`

**开发环境**

其余几个都很好理解，就`style-loader`作用是就是提取`css`生成`<style></style>`

**生产环境**

在`webpack4`条件下，可能就要用`MiniCssExtractPlugin`代替`loader`。
