import Menu from './Menu';
import Reviews from './Reviews';

function Restaurant({ restaurant }) {
  if (!restaurant) {
    return null;
  }

  return (
    <div className="restaurant-card">
      <h2 className="restaurant-card__title">{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}

export default Restaurant;

