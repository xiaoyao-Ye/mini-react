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

### 1-14

- 今天学到了什么？
  - 学会了 requestIdleCallback(fn) 的使用(fn 将会在浏览器空闲时执行), 并实现任务调度器
  - 分治思想和树转链表的实现
  - 理解了 fiber 的基本原理, 实现了 fiber 架构
- 遇到了哪些问题？
  - 刚开始理解不了树转链表的实现, 然后通过二次观看视频, 逐句理解代码解决
- 怎么解决的？
- 这节课对自己有什么帮助？
- 里面的哪些知识点是可以直接用到工作中的？
  - 程序就是数据结构+算法
- 放上你写的代码链接

### 1-15

- 今天学到了什么？
  - 等虚拟 dom 处理完毕后统一提交 dom, 解决了可能出现的只渲染一部分 dom 的问题
  - 支持 function component
  - 今天问题较多, 主要是各个数据来源需要频繁打断点调试
- 遇到了哪些问题？
- 怎么解决的？
- 这节课对自己有什么帮助？
- 里面的哪些知识点是可以直接用到工作中的？
- 放上你写的代码链接

### 1-16

- 今天重新写了一遍，发现一次性写完还是有点吃力，但是划分小任务一个个来会简单点。把昨天理解不够清楚的内容重新整理了一遍。

### 1-17

- 今天学到了什么？
  - 实现了事件绑定
  - 实现了更新 props
- 遇到了哪些问题？
- 怎么解决的？
- 这节课对自己有什么帮助？
- 里面的哪些知识点是可以直接用到工作中的？
- 放上你写的代码链接

count 为什么要写到函数外面?
count之所以放在外面是因为Counter函数会重新执行, 如果不放在该函数外面会重新声明count变量

### 1-18

- 今天学到了什么？
  - 完善 diff 更新
- 遇到了哪些问题？
  - update的时候发现打印的 currentFiber 永远是 Bar, 发现 wipFiber 也永远是 Bar, 
- 怎么解决的？
  - debugger调试后发现 update 的log打印了多次, 思考后发现是将`const update = React.update();` 放置到了 handleClick 里面, 这会导致update的闭包没生效, 移动至 handleClick 外面就好了.
- 这节课对自己有什么帮助？
- 里面的哪些知识点是可以直接用到工作中的？
- 放上你写的代码链接

### 1-19

- 今天学到了什么？
  - 实现了useState以及相关优化, 相比之前的逻辑, 今天的逻辑稍微简单点了
- 遇到了哪些问题？
- 怎么解决的？
- 这节课对自己有什么帮助？
- 里面的哪些知识点是可以直接用到工作中的？
- 放上你写的代码链接
