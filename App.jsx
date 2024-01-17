import React from "./core/React.js";

let count = 10;
function Counter({ num }) {
  function handle() {
    console.log("click");
    count++;
    React.update();
  }
  return (
    <div>
      <span>counter: {count}</span>
      <button onClick={handle}>click</button>
    </div>
  );
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
