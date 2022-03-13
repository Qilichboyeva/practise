import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Oshirish</button>
      <button onClick={handleDecrement}>Kamaytirish</button>
    </>
  );
};

export default Counter;
