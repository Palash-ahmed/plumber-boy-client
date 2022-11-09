import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, You want to delete this review?')
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = reviews.filter(reviewers => reviewers._id !== id);
                    setReviews(remaining);
                }
            })
        }

    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <ReviewInfo
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></ReviewInfo>)
                }
            </div>
        </div>
    );
};

export default Reviews;