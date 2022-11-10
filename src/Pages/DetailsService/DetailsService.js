import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Lottie from "lottie-react";
import loginLottie from '../../assets/38435-register.json'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const DetailsService = () => {
    const { img, price, title, description, rating, _id } = useLoaderData();
    const { user } = useContext(AuthContext);
    useTitle('Service-Details')

    const handleComments = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            reviewId: _id,
            reviewTitle: title,
            reviewer: name,
            rating: rating,
            email,
            phone,
            message
        }
        fetch('https://plumber-boy-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('plumboy-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Thanks for your Review')
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <section className="card card-compact w-full shadow-xl my-4">
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
            </section>

            <section>
                <div className="hero w-full my-24">
                    <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
                        <div className="ml-24">
                            <Lottie animationData={loginLottie} loop={true} />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-lg py-16">
                            <form onSubmit={handleComments} className="card-body">
                                <div className="form-control">
                                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <input name='email' type="text" placeholder="Email Address" defaultValue={user?.email} className="input input-bordered" readOnly />
                                </div>
                                <div className="form-control">
                                    <textarea name='message' className="textarea textarea-bordered h-24" placeholder="Add Your Review" required></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-info" type="submit" value=" Add Review" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsService;