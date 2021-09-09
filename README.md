# xf-skeleton

> This is a skeleton screen component based on Vue2.x（骨架屏组件）

## 安装
```
npm install xf-skeleton
```
## 使用
```
// main.js
// 注册为全局组件
import Vue from 'vue'
import XfSkeleton  from 'xf-skeleton'
Vue.use(XfSkeleton)

```
```
// **.vue
<xf-skeleton width="150px" height="250px" animated></xf-skeleton>
```

## 参数说明
```
// 骨架屏宽度
width:{
    type:String,
    default:100px
}
// 骨架屏高度
height:{
    type:String,
    default:100px
}
// 背景颜色
bg:{
    type:String,
    default:#f5f5f5
}

//是否有动画
animate:{
    type:Boolean,
    default:false
}
```

