import { useState } from 'react';
import Counter from './Counter';

function DishCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Counter
      value={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      min={0}
      max={5}
    />
  );
}

export default DishCounter;

