// 告诉 vite 使用 CReact.createElement 去渲染 默认是 React.createElement
/** @jsx YReact.createElement */
import YReact from "./core/React.js";

// const App = React.createElement("div", { id: "app" }, "hello ", "mini-react");
const App = <div>hello mini-react</div>

export default App;
