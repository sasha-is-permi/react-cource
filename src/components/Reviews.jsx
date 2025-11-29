import Review from './Review';
import ReviewForm from './ReviewForm';

function Reviews({ reviews }) {
  return (
    <div className="feedback">
      <h3 className="feedback__title">Отзывы</h3>
      {reviews && reviews.length > 0 && (
        <ul className="feedback__list">
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

