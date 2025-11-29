function TabNavigation({ restaurants, activeId, onTabClick }) {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px 0' }}>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          onClick={() => {
            if (restaurant.id !== activeId) {
              onTabClick(restaurant.id);
            }
          }}
          style={{
            padding: '10px 20px',
            backgroundColor: restaurant.id === activeId ? '#646cff' : '#1a1a1a',
            color: restaurant.id === activeId ? '#fff' : '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: restaurant.id === activeId ? 'default' : 'pointer',
          }}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
}

export default TabNavigation;

