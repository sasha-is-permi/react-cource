import Review from './Review';
import ReviewForm from './ReviewForm';
import styles from './Reviews.module.css';

function Reviews({ reviews }) {
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
      <ReviewForm />
    </div>
  );
}

export default Reviews;

