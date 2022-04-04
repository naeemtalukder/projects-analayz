import React from 'react';

const Home = () => {
    return (
        <div className='md:px-16 py-8'>
            <div className='flex flex-col justify-center h-{80vh} items-center'>
                <div className='grid grid-cols-2 px-2 ax-auto'>
                    <div>
                        <h1 className='font-mono text-cyan-600 text-xl md:text-5xl'>Your next Camera</h1>
                    </div>
                    <div>
                        <img className='w-200 h-300' src="./img/sony-camera.jpg" alt="" />
                        <p>This is camera</p>
                    </div>
                </div>

                <button className='py-2 px-3 text-white mt-5 rounded-full bg-cyan-600'>See All Reviews</button>

            </div>
        </div>
    );
};

export default Home;