import React from "react";

export default function App() {
  const [toggle, setToggle] = React.useState(false);
  function clickHandler() {
    setToggle(!toggle);
  }
  React.useEffect(() => {
    document.title = toggle
      ? "Welcome to Little Lemon"
      : "Using the useEffect Hook"
  }, [toggle]);
  return (
    <div>
      <h1>Using the useEffect Hook</h1>
      <button onClick={clickHandler}>Toggle message</button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  );
}
