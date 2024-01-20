import React from "./core/React.js";

function Foo() {
  const [count, setCount] = React.useState(10);
  const [bar, setBar] = React.useState("bar");

  function handleClick() {
    setCount((c) => c + 1);
    // setBar((s) => s + "bar");
    setBar("xxx");
  }

  React.useEffect(() => {
    console.log("init");
    return () => {
      console.log("unmount 0");
    };
  }, []);

  React.useEffect(() => {
    console.log("update", count);
    return () => {
      console.log("unmount 1");
    };
  }, [count]);

  React.useEffect(() => {
    console.log("update", count);
    return () => {
      console.log("unmount 2");
    };
  }, [count]);

  return (
    <div>
      <h1>foo</h1>
      <div>{count}</div>
      <div>{bar}</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

function App() {
  return (
    <div>
      hello mini-react
      <Foo />
    </div>
  );
}

export default App;
