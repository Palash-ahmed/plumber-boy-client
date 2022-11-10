import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import { setToken } from '../../../utilities/utilities';

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    useTitle('Google-Login');

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            setToken(user);
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