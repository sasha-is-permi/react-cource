function Counter({ value, onIncrement, onDecrement, min = 0, max = Infinity }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button onClick={onDecrement} disabled={value <= min}>
        -
      </button>
      <span>{value}</span>
      <button onClick={onIncrement} disabled={value >= max}>
        +
      </button>
    </div>
  );
}

export default Counter;

