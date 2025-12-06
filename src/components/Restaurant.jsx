import Menu from './Menu';
import Reviews from './Reviews';
import styles from './Restaurant.module.css';

function Restaurant({ restaurant }) {
  if (!restaurant) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}

export default Restaurant;

