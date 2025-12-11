import { useSelector } from 'react-redux';
import { selectReviewById } from '../store/slices/reviewSlice';
import { selectUserById } from '../store/slices/userSlice';
import styles from './Review.module.css';

function Review({ id }) {
  const review = useSelector((state) => selectReviewById(state, id));
  const user = useSelector((state) => selectUserById(state, review?.userId));

  if (!review) {
    return null;
  }

  return (
    <li className={styles.item}>
      <p className={styles.author}>{user?.name || 'Anonymous'}</p>
      <p className={styles.text}>{review.text}</p>
      <p className={styles.rating}>Рейтинг: {review.rating}</p>
    </li>
  );
}

export default Review;

