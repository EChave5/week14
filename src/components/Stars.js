//a one to five-star rating component that allows users to rate movies
//used https://www.youtube.com/watch?v=9sSBMF8K7sY 

import { useState } from 'react'
import { FaStar } from 'react-icons/fa' 
import Stars from './Stars'

function Star() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className='star-rating'>
        {[...Array(5)].map(".star", index => {
          const currentRating = index + 1;
         return(
          <label>
            <input 
            type='radio'
            name='rating'
            value={currentRating}
            onClick={() => setRating(currentRating)}
            />
            <FaStar 
              className='star'
              size={10}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e3e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
               />
          </label>
         );
        })}
        <p> Your rating is {rating}</p>
      </div>
  )
}
 
export default Stars;