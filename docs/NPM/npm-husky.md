# NPM - husky
> 在`push or commit`之前的钩子函数

就是`readme`里面说的。

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  }
}
```

而且实际使用中，完全不需要`npm run pre-commit`进行触发。

而且你只要使用了`git commit`，那么在`commmit`之前就会 **自动触发`hooks: pre-commit`**。

更加具体一点的例子：

```json
"husky": {
  "hooks": {
    "pre-commit": "pretty-quick --staged && stylus-supremacy format 'src/**/*.styl' -r -p .stylintrc"
  }
}
```

你可以使用`pretty`美化`js files`。以及`stylus-supremacy`美化`stylus files`。这样你就可以在保证一份 **代码样式文件情况下。** 自动同步代码以及`stylus`代码格式。