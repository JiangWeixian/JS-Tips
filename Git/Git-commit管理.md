# Commit管理

## 搜索

期望是`git tag`进行某些`commitid`的管理。

知道那些`commmit`是和哪些业务是相关的。

但是发现`tag`不能重复打，**一个`tag`只能够对应一个`branch`或者是`commit`**

**通过搜索进行`commit`管理**

可以通过`git commit --grep=xx`来搜索某些`commit`

所以`commit`需要有些命名规范：

### 结论

**commmit命名规范：<Fix or Feat>: kind(like ts)**

