import { restaurants } from './constant';
import './App.css';

function App() {
  return (
    <div className="page">
      <h1 className="page__title">Рестораны</h1>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>
            <h2 className="restaurant-card__title">{restaurant.name}</h2>
            
            <div className="dish-menu">
              <h3 className="dish-menu__title">Меню</h3>
              <ul className="dish-menu__list">
                {restaurant.menu.map((item) => (
                  <li className="dish-menu__item" key={item.id}>
                    <span className="dish-menu__name">{item.name}</span>
                    <span className="dish-menu__price">{item.price}$</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="feedback">
              <h3 className="feedback__title">Отзывы</h3>
              <ul className="feedback__list">
                {restaurant.reviews.map((item) => (
                  <li className="feedback__item" key={item.id}>
                    <p className="feedback__author">{item.user}</p>
                    <p className="feedback__text">{item.text}</p>
                    <p className="feedback__rating">Рейтинг: {item.rating}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;