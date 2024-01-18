import React from "./core/React.js";

let showBar = false;
function Counter() {
  const bar = <div>bar</div>;

  function handleShowBar() {
    showBar = !showBar;
    React.update();
  }

  return (
    <div>
      <span>Counter</span>
      <button onClick={handleShowBar}>showBar</button>
      <div>{showBar && bar}</div>
    </div>
  );
}

// const App = React.createElement("div", { id: "app" }, "hello ", "mini-react");
function App() {
  return (
    <div>
      hello mini-react
      <Counter />
    </div>
  );
}

export default App;
