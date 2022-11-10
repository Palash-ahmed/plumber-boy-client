import React from 'react';
import firstSection from '../../../assets/SectionImage/First-Section.png';
import secondSection from '../../../assets/SectionImage/secondSection.jpeg';
import { BiCheck } from "react-icons/bi";
import useTitle from '../../../hooks/useTitle';


const FirstSection = () => {
    useTitle('Section');
    return (
        <div>
            <section>
                <div className="hero my-24">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='w-1/2'>
                            <img src={firstSection} alt="" className="rounded-lg shadow-2xl ml-20" />
                        </div>
                        <div className='w-1/2'>
                            <h1 className="text-5xl font-bold">Fast & Reliable Plumbing Service</h1>
                            <div className="py-6">
                                <p className='text-xl ml-6'>Whenever you have a problem with the plumbing or boiler in your home, you want a fast solution that works and isn’t too expensive. They say you can’t have all three, but we’re here to prove that’s wrong!</p>
                                <br />
                                <p className='text-xl ml-6'>Fix My Boiler provides all the boiler and plumbing services you could ever need. No matter where you are in America, we’re never far away. We’re also available to call anytime of the day or night, on 0208568 9777.</p>
                            </div>
                            <button className="btn btn-info text-white font-bold ml-6">Our Company</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-16'>
                <div className='text-center my-20'>
                    <p className="text-3xl font-bold text-info mb-2">Features</p>
                    <h1 className="text-5xl font-bold mb-2">Trusted Plumbing Service!!!</h1>
                    <p className='text-xl'>Has your boiler broken down? Is it making odd noises? Are you without heating and hot water?</p>
                </div>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='w-7/12'>
                            <img src={secondSection} alt="" className="rounded-lg shadow-2xl" />
                        </div>
                        <div className='w-5/12'>
                            <p className="py-6 mb-2 ml-10 text-xl">Don’t panic. The team at Fix My Boiler is on hand to resolve all your boiler problems as quickly as possible. You can call us now on 0208568 9777 to arrange an appointment at a convenient time. We’ll prioritise emergencies, which means you could be closer to getting your boiler problems sorted out than you think.</p>
                            <p className='flex mb-2 ml-20 text-xl font-bold'><BiCheck></BiCheck>24 Hours Emergency Service</p>
                            <p className='flex mb-2 ml-20 text-xl font-bold'><BiCheck></BiCheck>Free Estimates</p>
                            <p className='flex mb-2 ml-20 text-xl font-bold'><BiCheck></BiCheck>15 Years Experience</p>
                            <p className='flex mb-2 ml-20 text-xl font-bold'><BiCheck></BiCheck>60 Days Services Warranty</p>
                            <p className='flex mb-2 ml-20 text-xl font-bold'><BiCheck></BiCheck>Top Rated Service</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FirstSection;