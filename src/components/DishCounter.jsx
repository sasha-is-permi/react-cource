import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Counter from './Counter';

function DishCounter() {
  const { user } = useAuth();
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

  if (!user) {
    return null;
  }

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

