import { useAuth } from '../contexts/AuthContext';
import Review from './Review';
import ReviewForm from './ReviewForm';
import styles from './Reviews.module.css';

function Reviews({ reviewIds }) {
  const { user } = useAuth();

  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Отзывы</h3>
      {reviewIds && reviewIds.length > 0 && (
        <ul className={styles.list}>
          {reviewIds.map((id) => (
            <Review key={id} id={id} />
          ))}
        </ul>
      )}
      {user && <ReviewForm />}
    </div>
  );
}

export default Reviews;

