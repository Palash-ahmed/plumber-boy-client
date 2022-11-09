import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const DetailsService = () => {
    const { img, price, title, description, rating, } = useLoaderData();
    return (
        <div className="card card-compact w-full shadow-xl my-4">
            <div>
                <h2 className="card-title text-5xl p-8 ml-20 underline underline-offset-8 text-info">{title}</h2>
            </div>
            <div>
                <figure><img src={img} alt="" /></figure>
                <div className='flex mt-4 ml-28'>
                    <p className='text-xl font-bold text-error'>{rating}</p>
                    <FaStar className='ml-2 text-warning text-lg'></FaStar>
                    <FaStar className='ml-2 text-warning text-lg'></FaStar>
                    <FaStar className='ml-2 text-warning text-lg'></FaStar>
                    <FaStar className='ml-2 text-warning text-lg'></FaStar>
                    <FaStarHalfAlt className='ml-2 text-warning text-lg'></FaStarHalfAlt>
                </div>
                <div className="card-body">

                    <p className='text-info font-bold w-5/6 mx-auto text-xl'>Price: ${price}</p>
                    <p className='w-5/6 text-xl mx-auto'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsService;