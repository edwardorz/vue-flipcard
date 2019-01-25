# vue-flipcard

![](https://img.shields.io/npm/dw/vue-flipcard.svg?style=flat-square)
![](https://img.shields.io/github/size/edwardorz/vue-flipcard/build/vue-flipcard.common.js.svg?style=flat-square)
![](https://img.shields.io/github/license/edwardorz/vue-flipcard.svg?style=flat-square)

> Vue flip card component

### Demo
[https://edwardorz.github.io/vue-flipcard/](https://edwardorz.github.io/vue-flipcard/)

### Install | 安装
```bash
// use yarn
yarn add vue-flipcard

// or use npm
npm i vue-flipcard
```

### Usage | 用法
```javascript
import VueFlipcard from 'vue-flipcard'

Vue.component('vue-flipcard', VueFlipcard)
```

```html
<vue-flipcard
  :width="300"
  :height="240"
  direction="vertical"
  @flip="onFlip"
>
</vue-flipcard>
```

### Props | 属性

| 参数/prop | 描述/desc | 数据类型/type | 是否必填/required | 默认值/default |
| :-- | :-- | :------ | :----- | :---- |
| witdh | 宽度 | number | No | 300 |
| height | 高度 | number | No | 300 |
| direction | 方向 | string | No | horizontal |
| disable | 是否禁用 | boolean | No | false |
| zoffset | Z轴方向偏移 | number | No | 20 |

### Events | 事件

| 名称/name | 描述/desc |
| :-- | :-- |
| flip | 翻转时触发/emit on flipping |

### Methods | 方法

| 名称/name | 用法/usage |
| :-- | :-- |
| flip | this.$refs.flipcard.flip() |

### License

[MIT](http://opensource.org/licenses/MIT)


