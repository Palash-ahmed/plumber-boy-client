import React, { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaUser } from 'react-icons/fa';

const ReviewInfo = ({ review }) => {

    const {_id, reviewer, email, message, reviewTitle, rating, reviewId } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${reviewId}`)
        .then(res => res.json())
        .then(data => setReviewService(data));
    },[reviewId])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, You want to delete this review?')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }

    }

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
                <h2 className="card-title">{reviewTitle}</h2>
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
                    <button className="btn btn-info">Edit</button>
                    <button onClick={()=> handleDelete(_id)} className="btn btn-info">Delete</button>
                </div>
            </div>
        </div>

        // <tr>
        //     <td>
        //         <div className="flex items-center space-x-3">
        //             <div className="avatar">
        //                 <div className="mask mask-squircle w-12 h-12">
        //                     <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="font-bold">{reviewer}</div>
        //                 <div className="text-sm opacity-50">{email}</div>
        //             </div>
        //         </div>
        //     </td>
        //     <td>
        //         {reviewTitle}
        //     </td>
        //     <td>
        //         {message}
        //     </td>
        //     <td>Purple</td>
        //     <th>
        //         <button className="btn btn-ghost h-12 w-12"><MdDelete></MdDelete></button>
        //     </th>
        // </tr>
    );
};

export default ReviewInfo;