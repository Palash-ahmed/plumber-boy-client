import React, { useContext } from 'react';
import Lottie from "lottie-react";
import loginLottie from '../../assets/38435-register.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const {login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result =>{
            const user = result.user;
            
            const currentUser = {
                email: user.email
            }
            console.log(currentUser);
            // jwt Token
            fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('plumboy-token', data.token);
                navigate(from, {replace: true});
            });
        })
        .catch(error => console.error(error));
    }

    return (
        <div className="hero w-full my-24">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="ml-24">
                    <Lottie animationData={loginLottie} loop={true}/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ml-24 py-16">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-info" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>Don't have an account in Plumber-Boy? <Link className='text-info font-bold' to='/signUp'>Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;