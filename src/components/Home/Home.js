import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewCart from '../ReviewCart/ReviewCart';

const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='px-4 py-5 mx-auto max-w-7xl'>
            <div className='grid items-center pb-10 w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-22'>
                <div>
                    <h1 className='mb-4 text-1xl font-extrabold leading-tight tracking-tight text-left text-gray-700 md:text-4xl'>
                        Your Next Laptop. <br />
                        <span className='text-cyan-600'>Your Best Laptop.</span>
                    </h1>
                    <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                        Razer has announced a brand new version of its Blade laptop for 2018, complete with a fresh look and even more compact design than before.

                        Many gaming laptops in this category are seemingly in a race to shave off the millimeters and slim down their bezels. The latest iterations of laptops like the Gigabyte Aero 15X and MSI GS65 Stealth Thin continue to push the envelope in terms of thin-and-light designs, and the Blade is hopping onto this bandwagon today.
                    </p>
                    <button className='mb-2 py-2 px-3 rounded-lg text-white mt-3 bg-cyan-600 sm:w-auto sm:mb-0'>
                        Live Demo
                    </button>
                </div>
                <div>
                    <div className='w-full h-full bg-gray-200 rounded-lg'>
                        <img
                            src='https://assets.hardwarezone.com/img/2018/04/razer-blade-2018.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center text-3xl font-sans font-bold text-cyan-600 pb-7'>Customer Reviews</p>
                <div className='grid grid-cols-1 md:grid-cols-2 pb-10 font-serif lg:grid-cols-2 gap-5 justify-items-center'>
                    {
                        reviews.slice(0, 3).map(review => (<ReviewCart key={review.sell} review={review}></ReviewCart>))
                    }
                </div>
            </div>
            <div className='text-center pt-35'>
                <Link to='/reviews' className='py-2 px-3 text-white mt-15 rounded-full bg-cyan-600'>See All Reviews</Link>
            </div>


        </section>
    );
};

export default Home;