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
      <br />
      {temp > 15 && temp <= 30 && <p>Sommar</p>}
      {temp >= 5 && temp <= 15 && <p>Höst/Vår</p>}
      {temp < 5 && <p>Vinter</p>}
      {temp > 30 && (
        <small>
          Remember that level in Super Mario Bros. 3, where the sun is trying to
          kill you? <br />
          That's today.
        </small>
      )}
    </div>
  );
};

// Glömde bort att extrauppgifterna var > 25 och < 10 grader
