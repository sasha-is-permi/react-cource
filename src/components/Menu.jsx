import Dish from './Dish';
import styles from './Menu.module.css';

function Menu({ menu }) {
  if (!menu || menu.length === 0) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {menu.map((item) => (
          <Dish key={item.id} dish={item} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;

