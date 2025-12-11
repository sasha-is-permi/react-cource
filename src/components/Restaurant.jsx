import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../store/slices/restaurantSlice';
import Menu from './Menu';
import Reviews from './Reviews';
import styles from './Restaurant.module.css';

function Restaurant({ id }) {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{restaurant.name}</h2>
      <Menu menuIds={restaurant.menu} />
      <Reviews reviewIds={restaurant.reviews} />
    </div>
  );
}

export default Restaurant;

