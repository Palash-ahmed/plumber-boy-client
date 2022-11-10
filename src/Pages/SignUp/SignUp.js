import React, { useContext } from 'react';
import Lottie from "lottie-react";
import loginLottie from '../../assets/38435-register.json'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { setToken } from '../../utilities/utilities';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    useTitle('SignUp');


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setToken(user);
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="hero w-full my-24">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="ml-24">
                    <Lottie animationData={loginLottie} loop={true}/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ml-24 py-16">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-info" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account in Plumber-Boy? <Link className='text-info font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;