import React from "./core/React.js";

let count = 10;
let flag = false;
function Counter({ num }) {
  function handle() {
    console.log("click");
    count++;
    flag = !flag;
    React.update();
  }
  const d = <div>123</div>;
  // const p = <p>456</p>;
  function P() {
    return <p>456</p>
  }
  const p = <P />;
  return (
    <div>
      <span>{flag ? d : p}</span>
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
