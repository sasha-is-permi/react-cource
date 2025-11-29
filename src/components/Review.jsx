function Review({ review }) {
  return (
    <li className="feedback__item">
      <p className="feedback__author">{review.user}</p>
      <p className="feedback__text">{review.text}</p>
      <p className="feedback__rating">Рейтинг: {review.rating}</p>
    </li>
  );
}

export default Review;

