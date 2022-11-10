import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaUser } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const ReviewInfo = ({ review, handleDelete }) => {

    const {_id, reviewer, email, message, rating, reviewId } = review;
    const [reviewService, setReviewService] = useState({});
    useTitle('Review-Info')
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${reviewId}`)
        .then(res => res.json())
        .then(data => setReviewService(data));
    },[reviewId])

    

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className='flex font-bold mt-8 ml-12'>
                <p><FaUser className='w-14 h-14 mr-6 rounded-full ring ring-info ring-offset-base-100 ring-offset-2'></FaUser></p>
                <p>
                    <span className='text-xl font-bold text-error'>Name: </span>{reviewer} <br />
                    <span className='text-xl font-bold text-error'>Email: </span>{email}
                </p>
            </div>
            <div className="card-body">
                <p>{message}</p>
                <div className='flex mt-4 ml-4'>
                    <p className='text-xl font-bold text-error'>{rating}</p>
                    <FaStar className='ml-2 text-warning text-lg'></FaStar>
                    <FaStar className='ml-2 text-warning text-lg'></FaStar>
                    <FaStar className='ml-2 text-warning text-lg'></FaStar>
                    <FaStar className='ml-2 text-warning text-lg'></FaStar>
                    <FaStarHalfAlt className='ml-2 text-warning text-lg'></FaStarHalfAlt>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={()=> handleDelete(_id)} className="btn btn-info">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewInfo;