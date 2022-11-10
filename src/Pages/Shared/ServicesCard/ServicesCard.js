import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const ServicesCard = ({ service }) => {
    const { img, price, title, description, rating, _id } = service;
    useTitle('Service')

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure><img src={img} alt="" /></figure>
            <div className='flex mt-4 ml-4'>
                <p className='text-xl font-bold text-error'>{rating}</p>
                <FaStar className='ml-2 text-warning text-lg'></FaStar>
                <FaStar className='ml-2 text-warning text-lg'></FaStar>
                <FaStar className='ml-2 text-warning text-lg'></FaStar>
                <FaStar className='ml-2 text-warning text-lg'></FaStar>
                <FaStarHalfAlt className='ml-2 text-warning text-lg'></FaStarHalfAlt>
            </div>
            <div className="card-body">
                <h2 className="card-title text-info">{title}</h2>

                <p>{
                    description.length > 100 ?
                        <>{description.slice(0, 100) + '...'}</>
                        :
                        description
                }</p>
                <p className='text-info font-bold text-xl'>Price: ${price}</p>

                <div className="card-actions justify-end">
                    <Link to={`/detailsservice/${_id}`}>
                        <button className="btn btn-info">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;