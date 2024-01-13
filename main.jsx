// 1
// console.log("hello world");

// 2
// const dom = document.createElement("div");
// const text = document.createTextNode("hello mini-react");
// dom.appendChild(text);
// const root = document.getElementById("root");
// root.appendChild(dom);

// 3
// const text_node = {
//   type: "text_node",
//   props: {
//     text: "hello mini-react",
//     children: [],
//   },
// };
// const el = {
//   type: "div",
//   props: {
//     children: [text_node],
//   },
// };

// const dom = document.createElement(el.type);
// const text = document.createTextNode(text_node.props.text);
// dom.appendChild(text);
// const root = document.getElementById("root");
// root.appendChild(dom);

// 4
// const createElement = (type, props, ...children) => {
//   return {
//     type,
//     props: {
//       ...props,
//       children,
//     },
//   };
// };

// const createTextNode = (text) => {
//   return {
//     type: "text_node",
//     props: {
//       text,
//       children: [],
//     },
//   };
// };

// const textEl = createTextNode("hello mini-react");
// const App = createElement("div", { id: "app" }, textEl);

// const dom = document.createElement(App.type);
// dom.id = App.props.id;
// const root = document.getElementById("root");
// root.appendChild(dom);

// const textNode = document.createTextNode("");
// textNode.nodeValue = textEl.props.text;
// dom.appendChild(textNode);

/**
 * 分析:
 * 1. 都是先创建节点
 * 2. 都是设置节点的属性
 * 3. 都是添加到父节点
 */

// const render = (el, container) => {
//   // create
//   const dom =
//     el.type === "text_node"
//       ? document.createTextNode(el.props.text)
//       : document.createElement(el.type);
//   // set props
//   Object.keys(el.props).forEach((key) => {
//     if (key !== "children") dom[key] = el.props[key];
//   });
//   // set children
//   el.props.children.forEach(child => {
//     render(child, dom);
//   })
//   // append
//   container.appendChild(dom);
// };

// render(App, document.getElementById("root"));

// 5

// const createElement = (type, props, ...children) => {
//   return {
//     type,
//     props: {
//       ...props,
//       children: children.map((child) =>
//         typeof child === "string" ? createTextNode(child) : child
//       ),
//     },
//   };
// };

// const createTextNode = (text) => {
//   return {
//     type: "text_node",
//     props: {
//       nodeValue: text,
//       children: [],
//     },
//   };
// };

// const render = (el, container) => {
//   // create
//   const dom =
//     el.type === "text_node"
//       ? document.createTextNode("")
//       : document.createElement(el.type);
//   // set props
//   Object.keys(el.props).forEach((key) => {
//     if (key !== "children") dom[key] = el.props[key];
//   });
//   // set children
//   el.props.children.forEach((child) => {
//     render(child, dom);
//   });
//   // append
//   container.appendChild(dom);
// };

// const ReactDOM = {
//   createRoot(container) {
//     return {
//       render(el) {
//         render(el, container);
//       },
//     };
//   },
// };

// const App = createElement("div", { id: "app" }, "hello ", "mini-react");

// ReactDOM.createRoot(document.getElementById("root")).render(App);

// 6
import ReactDOM from "./core/ReactDOM.js";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(App);
