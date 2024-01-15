// 告诉 vite 使用 CReact.createElement 去渲染 默认是 React.createElement
/** @jsx YReact.createElement */
import YReact from "./core/React.js";

function Counter({ num }) {
  return <div>counter: {num}</div>;
}

function CounterContainer() {
  return <Counter num={20} />;
}

// const App = React.createElement("div", { id: "app" }, "hello ", "mini-react");
function App() {
  return (
    <div>
      hello mini-react
      {/* <CounterContainer /> */}
      <Counter num={10} />
      <Counter num={20} />
    </div>
  );
}

export default App;
