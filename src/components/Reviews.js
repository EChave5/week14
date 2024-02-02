import React from 'react';


export default function Reviews({reviewList, movieId}) {
  const reviews = reviewList.filter(review => review.movieId == movieId);
//returns the reviews that have been made for the movies
  return (
    <div>
      <hr />
      <h3>Reviews</h3>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map(review => (
        <div key={review.id}>
          <p><span className='userName'>{review.user}</span> <br />
          {review.review}
          </p>
        </div>
      ))}
    </div>
  );
}