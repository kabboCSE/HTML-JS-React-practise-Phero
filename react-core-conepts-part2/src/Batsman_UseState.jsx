import { useState } from "react";

const Batsman = () => {
  const [runs, setRuns] = useState(0);
  const [six, setSix] = useState(0);

  const handleSingle = () => {
    const UpdatedRun = runs + 1;
    setRuns(UpdatedRun);
  };

  const handleSix = () => {
    const UpdatedRun = runs + 6;
    setRuns(UpdatedRun);
    const UpdatedSix = six + 1;
    setSix(UpdatedSix);
  };
  const smallStyle = {
    border: "2px solid green",
  };
  return (
    <div>
      <h3>Bangladeshi Batsman</h3>
      {runs > 50 && (
        <p style={smallStyle}>
          Congratulations! You Completed Half Century & Your Score is : {runs}{" "}
        </p>
      )}
      <small>Six : {six} </small>
      <h2>Score:{runs} </h2>
      <button onClick={handleSingle}>Single</button>
      <button>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
};
export default Batsman;
