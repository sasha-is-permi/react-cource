import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurants } from './store/slices/restaurantSlice';
import Layout from './components/Layout';
import TabNavigation from './components/TabNavigation';
import Restaurant from './components/Restaurant';

function App() {
  const restaurants = useSelector(selectRestaurants);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0]?.id || null
  );

  return (
    <Layout>
      <TabNavigation
        restaurants={restaurants}
        activeId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      <div className="restaurant-list">
        <Restaurant id={activeRestaurantId} />
      </div>
    </Layout>
  );
}

export default App;