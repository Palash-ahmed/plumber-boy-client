import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const Reviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('Reviews');


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('plumboy-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                   return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, You want to delete this review?')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('plumboy-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast.success('Deleted Successfully')
                    const remaining = reviews.filter(reviewers => reviewers._id !== id);
                    setReviews(remaining);
                }
            })
        }

    }

    return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <ReviewInfo
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></ReviewInfo>)
                }
            </div>
    );
};

export default Reviews;