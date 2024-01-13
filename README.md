# mini-react

mini-react

## 学习方式

1. 看一遍视频（不要动手，只吸收思路）
2. 关上视频，自己尝试基于理解好的思路实现一遍
3. 第二步会出现很多问题，以及卡壳的情况，带着这些问题，在看第二遍视频，直到把所有问题都解决
4. 输出打卡（把思考过程 遇到的问题写下来 ， 记得贴上代码仓库链接）

## 打卡

### 1-13

- 今天学到了什么？
  - appendChild 和 append 的区别(append 是一个较新的方法, 可以接收多个元素)
  - 可以通过 `/** @jsx YReact.createElement */` 告诉 vite 通过什么去解析 jsx
  - 任务拆分到最细(一直也会拆分但是不会拆到这么细), 实现时不断增加新功能并同时进行重构抽象等操作
- 遇到了哪些问题？
  - ```
      Access to script at 'file:///G:/GitHub/xiaoyao-Ye/mini-react/main.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https,chrome-untrusted.
    ```
- 怎么解决的？
  - type=module 导致, 使用 Go live 打开解决(http-server 也可以)
- 这节课对自己有什么帮助？
  - 了解了 react 渲染的原理
- 里面的哪些知识点是可以直接用到工作中的？
  - 先实现, 然后不断完善并重构优化
- 放上你写的代码链接(让你动手)

目标(实现下面示例, 并让页面显示内容):

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```
