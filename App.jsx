import React from "./core/React.js";

let showBar = false;
function Counter() {
  const foo = (
    <div>
      foo
      <div>child1</div>
      <div>child2</div>
    </div>
  );

  const bar = <div>bar</div>;

  function handleShowBar() {
    showBar = !showBar;
    React.update();
  }

  return (
    <div>
      Counter
      <button onClick={handleShowBar}>showBar</button>
      <div>{showBar ? bar : foo}</div>
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
