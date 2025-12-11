import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../contexts/AuthContext';
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from '../store/slices/cartSlice';
import Counter from './Counter';

function DishCounter({ id }) {
  const { user } = useAuth();
  const amount = useSelector((state) => selectCartItemAmountById(state, id));
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (amount < 5) {
      dispatch(addToCart(id));
    }
  };

  const handleDecrement = () => {
    if (amount > 0) {
      dispatch(removeFromCart(id));
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Counter
      value={amount}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      min={0}
      max={5}
    />
  );
}

export default DishCounter;

