import { useState } from "react";

export function ChaiCounter() {
  const [count, setCount] = useState(0);

  const serveChai = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h2>Chai Counter</h2>
      <p>You have served {count} cups of chai</p>
      {/* <button onClick={() => setCount((count) => count + 1)}>Chai Chai</button> */}
      <button onClick={serveChai}>Chai Chai</button>
    </div>
  );
}
