# CSS - Styl
> 有些黑科技

#　import作为对象

```JavaScript
import * as styles from './xx.styl'
```

如果`xx.styl`内部写着：

```css
.a 
  font-size: 15px
```

那么我们就可以通过`styles.a`