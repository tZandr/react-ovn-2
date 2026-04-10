import { useState } from 'react';

export const ShowTemp = () => {
  const [temp, setCount] = useState(0);

  return (
    <div>
      <h2>{temp}°C</h2>
      <div className="tempButtons">
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
};
