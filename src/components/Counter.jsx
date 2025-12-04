import styles from './Counter.module.css';

function Counter({ value, onIncrement, onDecrement, min = 0, max = Infinity }) {
  return (
    <div className={styles.root}>
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

