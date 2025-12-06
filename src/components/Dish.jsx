import DishCounter from './DishCounter';
import styles from './Dish.module.css';

function Dish({ dish }) {
  return (
    <li className={styles.root}>
      <span className={styles.name}>{dish.name}</span>
      <div className={styles.controls}>
        <DishCounter />
        <span className={styles.price}>{dish.price}$</span>
      </div>
    </li>
  );
}

export default Dish;

