# JS - switch
> 细节

## 踩坑

```JavaScript
switch (value) {
  case 'A':
    //somecode
    break;
  default:
    //somecode
    break;
}
```

1. `value`和`A`是`===`比较，不会进行类型转换的严格比较模式。