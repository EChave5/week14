//text reviews left by users on movies

import { useState } from 'react';
import Stars from './Stars';

export default function ReviewForm({movie, addReview}) {
  const {reviewValue, setReviewValue} = useState("");
  const {userValue, setUserValue} = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const reviewData = {
      review: reviewValue, 
      user: userValue,
      movieId: movie.id,
    };

    addReview(reviewData);
    setReviewValue("");
    setUserValue("");
  };

  //includes rating component with review form
  return (
    <form onSubmit={handleSubmit}>
      <Stars />
      <label className='form-label'>Please leave a review:</label>
      <input
        type='text'
        id='review-input'
        className='form-control'
        value={reviewValue}
        onChange={(e) => setReviewValue(e.target.value)}
      />
      <button type='submit' className='btn btn-primary mt-4'>Submit</button>
    </form>
  );

}

