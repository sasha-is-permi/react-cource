import { useState } from 'react';
import { restaurants } from './constants';
import './App.css';
import Layout from './components/Layout';
import TabNavigation from './components/TabNavigation';
import Restaurant from './components/Restaurant';

function App() {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0]?.id || null
  );

  const activeRestaurant = restaurants.find(
    (r) => r.id === activeRestaurantId
  );

  return (
    <Layout>
      <TabNavigation
        restaurants={restaurants}
        activeId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      <div className="restaurant-list">
        <Restaurant restaurant={activeRestaurant} />
      </div>
    </Layout>
  );
}

export default App;