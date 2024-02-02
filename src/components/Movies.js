//a container that represents movie data

import { useState } from 'react';
import React from 'react';
import MovieList from './MovieList';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

let nextReviewID = 1;

export default function Movies() {
  //links reviews to movie container

const [reviewList, setReviewList] = useState([]);
const addReview = (newReviewData) => {
  const newReview = {
    id: nextReviewID++,
    ...newReviewData,
  };
  setReviewList(reviewList.concat(newReview));
};

//all movie data including rating and reviews

const moviesListed = MovieList.map(movie => (
    <> 
    <div key={movie.id} className="my-card col-3 m-3">
      <h3>{movie.title}</h3>
      <img src={movie.posterURL} alt={movie.title} className='my-card col-9 m-4'/>
      <div><h4>{movie.genre}, {movie.year}</h4></div>
      <p>{movie.synopsis}</p>
      </div>
      <ReviewForm movie={movie} addReview={addReview}/>
      <Reviews reviewList={reviewList} movieId={movie.id} />
    </>
      ));

  return (
    <div className='row p-4'>
      {moviesListed}
    </div>
  );
  } 
  
