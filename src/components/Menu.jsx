import Dish from './Dish';
import styles from './Menu.module.css';

function Menu({ menuIds }) {
  if (!menuIds || menuIds.length === 0) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {menuIds.map((id) => (
          <Dish key={id} id={id} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;

