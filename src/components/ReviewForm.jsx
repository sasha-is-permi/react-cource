import { useReducer } from 'react';
import Counter from './Counter';
import Button from './Button';
import styles from './ReviewForm.module.css';

const initialState = {
  name: '',
  text: '',
  rating: 5,
};

function reviewFormReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'SET_RATING':
      return { ...state, rating: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function ReviewForm() {
  const [state, dispatch] = useReducer(reviewFormReducer, initialState);

  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value });
  };

  const handleTextChange = (e) => {
    dispatch({ type: 'SET_TEXT', payload: e.target.value });
  };

  const handleRatingIncrement = () => {
    if (state.rating < 5) {
      dispatch({ type: 'SET_RATING', payload: state.rating + 1 });
    }
  };

  const handleRatingDecrement = () => {
    if (state.rating > 1) {
      dispatch({ type: 'SET_RATING', payload: state.rating - 1 });
    }
  };

  const handleClear = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className={styles.root}>
      <h4 className={styles.title}>Добавить отзыв</h4>
      <div className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>Имя:</label>
          <input
            type="text"
            value={state.name}
            onChange={handleNameChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Текст отзыва:</label>
          <textarea
            value={state.text}
            onChange={handleTextChange}
            rows="4"
            className={styles.textarea}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Рейтинг:</label>
          <Counter
            value={state.rating}
            onIncrement={handleRatingIncrement}
            onDecrement={handleRatingDecrement}
            min={1}
            max={5}
          />
        </div>
        <Button
          onClick={handleClear}
          className={styles.button}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}

export default ReviewForm;

