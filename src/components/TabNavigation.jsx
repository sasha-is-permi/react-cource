import classNames from 'classnames';
import Button from './Button';
import styles from './TabNavigation.module.css';

function TabNavigation({ restaurants, activeId, onTabClick }) {
  return (
    <div className={styles.root}>
      {restaurants.map((restaurant) => (
        <Button
          key={restaurant.id}
          className={classNames(styles.button, {
            [styles.active]: restaurant.id === activeId,
          })}
          onClick={() => {
            if (restaurant.id !== activeId) {
              onTabClick(restaurant.id);
            }
          }}
        >
          {restaurant.name}
        </Button>
      ))}
    </div>
  );
}

export default TabNavigation;

