import DishCounter from './DishCounter';

function Dish({ dish }) {
  return (
    <li className="dish-menu__item">
      <span className="dish-menu__name">{dish.name}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <DishCounter />
        <span className="dish-menu__price">{dish.price}$</span>
      </div>
    </li>
  );
}

export default Dish;

