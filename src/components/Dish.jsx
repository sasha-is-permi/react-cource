import { useSelector } from 'react-redux';
import { selectDishById } from '../store/slices/dishSlice';
import DishCounter from './DishCounter';
import styles from './Dish.module.css';

function Dish({ id }) {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return (
    <li className={styles.root}>
      <span className={styles.name}>{dish.name}</span>
      <div className={styles.controls}>
        <DishCounter id={id} />
        <span className={styles.price}>{dish.price}$</span>
      </div>
    </li>
  );
}

export default Dish;

