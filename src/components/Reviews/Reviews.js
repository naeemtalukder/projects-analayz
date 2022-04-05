import React, { useEffect, useState } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='px-5 pt-5 pb-24 mx-auto mx-w-7xl md:px-2'>
            <p className='text-center text-3xl font-sans font-bold text-cyan-600 pb-3'>Customer Reviews</p>
            <p className='text-center text-xs font-serif text-gray-800 pb-5'>Total Review ({reviews.length})</p>
            <div className='grid grid-cols-1 md:grid-cols-2 font-serif lg:grid-cols-2 gap-5 justify-items-center'>
                {
                    reviews.map(review => (<ReviewCart key={review.sell} review={review}></ReviewCart>))
                }
            </div>
        </div>
    );
};

export default Reviews;