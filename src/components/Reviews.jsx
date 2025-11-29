import Review from './Review';

function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <div className="feedback">
      <h3 className="feedback__title">Отзывы</h3>
      <ul className="feedback__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
}

export default Reviews;

