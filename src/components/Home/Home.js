import React from 'react';

const Home = () => {
    return (
        <div className='md:px-16 py-8'>
            <div className='flex flex-col justify-center h-{80vh} items-center'>
                <h1 className='font-mono text-cyan-600 text-xl md:text-5xl'>Your next Camera</h1>
                <button className='py-2 px-3 text-white mt-5 rounded-full bg-cyan-600'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;