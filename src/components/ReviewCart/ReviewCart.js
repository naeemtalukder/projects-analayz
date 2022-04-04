import React from 'react';

const ReviewCart = ({ review }) => {
    return (
        <div className='shadow-lg rounded-2xl w-50 bg-slate-100 p-4'>
            <p className='text-cyan-600 text-black font-bold'>{review.name}</p>
            <p className='text-yellow-400'>{review.ratting}</p>
            <p>{review.reviews}</p>
        </div>
    );
};

export default ReviewCart;