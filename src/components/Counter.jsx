import styles from './Counter.module.css';
import Button from './Button';

function Counter({ value, onIncrement, onDecrement, min = 0, max = Infinity }) {
  return (
    <div className={styles.root}>
      <Button onClick={onDecrement} disabled={value <= min}>
        -
      </Button>
      <span>{value}</span>
      <Button onClick={onIncrement} disabled={value >= max}>
        +
      </Button>
    </div>
  );
}

export default Counter;

