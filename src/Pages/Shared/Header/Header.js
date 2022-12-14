import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/header-logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    useTitle('Header');

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const menuBar = <>
        <li className='font-bold text-xl'><Link to='/'>Home</Link></li>
        <li className='font-bold text-xl'><Link to='/allservices'>Services</Link></li>
        <li className='font-bold text-xl'><Link to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-bold text-xl'><Link to='/reviews'>Reviews</Link></li>
                    <li className='font-bold text-xl'>
                        <button onClick={handleLogOut} className='btn-ghost'>Log Out</button>
                    </li>
                </>
                :
                <li className='font-bold text-xl'><Link to='/login'>Login</Link></li>

        }
    </>
    return (
        <div className="navbar  bg-base-200 p-4 rounded-b-lg mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <Link to='/' className="flex normal-case text-xl">
                    <img className='w-20 h-20' src={logo} alt="" />
                    <h1 className='text-4xl ml-4 pt-4 font-bold text-red-600'>Plumber<span className='text-green-600 font-bold'>Boy</span></h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuBar}
                </ul>
            </div>
            <div className="navbar-end">
            <p><FaUser className='w-14 h-14 mr-6 rounded-full ring ring-info ring-offset-base-100 ring-offset-2'></FaUser></p>
            </div>
        </div>
    );
};

export default Header;