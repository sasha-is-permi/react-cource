import styles from './Review.module.css';

function Review({ review }) {
  return (
    <li className={styles.item}>
      <p className={styles.author}>{review.user}</p>
      <p className={styles.text}>{review.text}</p>
      <p className={styles.rating}>Рейтинг: {review.rating}</p>
    </li>
  );
}

export default Review;

