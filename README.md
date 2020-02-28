#### demo1
1. useContent 的作用是提供一个读/写数据的接口，而数据往往来自 useReducer/userState
2. useContent 往往搭配 useReducer/userState 一起使用
3. useReducer/userState 的更新不是响应式地更新
```
<context.provider>
    <App>
        <A/>
        <B/>
    </App>
<context.provider>
```
> A 中的 n 变化了，B需要随之更新。useState/useReducer 的更新方式是让 APP 将更新后的 n 自顶向下再次传递（类似于 props）。

> 而 vue3 采取的做法是: A 的 n 更新后，检查哪些组件用到了 n，让这些组件再次渲染，不是自顶向下。
