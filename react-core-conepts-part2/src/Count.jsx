import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    const newCount = count + 1;

    setCount(newCount);
  };
  const countStyle = {
    border: "2px solid yellow",
  };
  return (
    <div style={countStyle}>
      <h3>Count : {count} </h3>
      <button onClick={handleCount}>Add</button>
    </div>
  );
};

export default Count;
