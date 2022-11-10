import React from 'react';
import logo from '../../../assets/logo/logo.png';
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import useTitle from '../../../hooks/useTitle';

const Footer = () => {
    useTitle('Footer');
    return (
        <footer className="footer p-24 bg-neutral text-white mt-20 rounded-t-lg">
            <div>
                <img className='h-24 w-24' src={logo} alt="" />
                <p className='text-lg font-bold'>Plumber Boy Services Elementor <br /> Template Kit.  Powered by Design8. <br /> All rights reserved.</p>
            </div>
            <div>
                <span className="footer-title">NEW YORK</span>
                <p >Paradise Road 70, Office 99, Pacific Bay, <br /> New York City 10010</p>
                <br />
                <span className="footer-title">NEW JERSEY</span>
                <p>Malioboro Road 70, Xurang 99, National Park, <br /> New Jersey 08701</p>
            </div>
            <div>
                <span className="footer-title">GET IN TOUCH</span>
                <p >Paradise Road 70, Office 99, Pacific Bay, <br /> Email us: plumboy@gmail.com</p>
                <br />
                <span className="footer-title">TALK TO US</span>
                <p>+123 456 789 | +987 654 321</p>
            </div>
            <div>
                <span className="footer-title">HELP</span>
                <p >Visit Help Center</p>
                <br />
                <span className="footer-title">FOLLOW US</span>
                <div className='flex'>
                    <FaFacebook className=' mx-2 h-5 w-5'></FaFacebook>
                    <FaTwitter className=' mx-2 h-5 w-5'></FaTwitter>
                    <FaYoutube className=' mx-2 h-5 w-5'></FaYoutube>
                </div>
            </div>
        </footer>
    );
};

export default Footer;