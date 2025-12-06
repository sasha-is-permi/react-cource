import { useAuth } from '../contexts/AuthContext';
import Review from './Review';
import ReviewForm from './ReviewForm';
import styles from './Reviews.module.css';

function Reviews({ reviews }) {
  const { user } = useAuth();

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Отзывы</h3>
      {reviews && reviews.length > 0 && (
        <ul className={styles.list}>
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </ul>
      )}
      {user && <ReviewForm />}
    </div>
  );
}

export default Reviews;

