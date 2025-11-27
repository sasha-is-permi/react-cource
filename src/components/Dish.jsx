import { useState } from 'react';

function Dish({ dish }) {
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
    <li className="dish-menu__item">
      <span className="dish-menu__name">{dish.name}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={handleDecrement} disabled={count === 0}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement} disabled={count === 5}>+</button>
        <span className="dish-menu__price">{dish.price}$</span>
      </div>
    </li>
  );
}

export default Dish;

