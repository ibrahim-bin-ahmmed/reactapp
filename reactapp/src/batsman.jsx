import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const single = () => {
    setRuns((prevRuns) => prevRuns + 1);
  };
  const double = () => {
    setRuns((prevRuns) => prevRuns + 2);
  };
  const triple = () => {
    setRuns((prevRuns) => prevRuns + 3);
  };
  const four = () => {
    setRuns((prevRuns) => prevRuns + 4);
  };
  const six = () => {
    setRuns((prevRuns) => prevRuns + 6);
  };

  return (
    <div>
      <h1>Batsman</h1>
      <p>Runs: {runs}</p>
      <button onClick={single}>single</button>
      <button onClick={double}>double</button>
      <button onClick={triple}>triple</button>
      <button onClick={four}>four</button>
      <button onClick={six}>six</button>
    </div>
  );
}
