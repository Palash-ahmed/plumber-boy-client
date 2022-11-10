import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            const currentUser ={
                email: user.email
            }

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
                
            });
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className="text-center">
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;