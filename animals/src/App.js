// import { useState } from "react";

function useState(defaultValue) {
  return {
    yourState: defaultValue,
    yourSetter: () => {},
  };
}
function App() {
  const stateConfig = useState(0);
  const count = stateConfig.yourState;
  const setCount = stateConfig.yourSetter;
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
