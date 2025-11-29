import Dish from './Dish';

function Menu({ menu }) {
  if (!menu || menu.length === 0) {
    return null;
  }

  return (
    <div className="dish-menu">
      <h3 className="dish-menu__title">Меню</h3>
      <ul className="dish-menu__list">
        {menu.map((item) => (
          <Dish key={item.id} dish={item} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;

