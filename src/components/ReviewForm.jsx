import { useReducer } from 'react';
import Counter from './Counter';

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
    <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h4 style={{ marginBottom: '15px' }}>Добавить отзыв</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Имя:</label>
          <input
            type="text"
            value={state.name}
            onChange={handleNameChange}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '1em',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Текст отзыва:</label>
          <textarea
            value={state.text}
            onChange={handleTextChange}
            rows="4"
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '1em',
              resize: 'vertical',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Рейтинг:</label>
          <Counter
            value={state.rating}
            onIncrement={handleRatingIncrement}
            onDecrement={handleRatingDecrement}
            min={1}
            max={5}
          />
        </div>
        <button
          onClick={handleClear}
          style={{
            padding: '10px 20px',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            alignSelf: 'flex-start',
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;

