import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import './SliderItems.css'

const SliderItems = ({slide}) => {
    const {sliderImage, id, prev, next} = slide;
    useTitle('Slider-Items');
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='slider-image'>
                <img src={sliderImage} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 w-1/3 left-24 top-1/3">
                <h1 className='text-6xl font-bold text-white'>
                    Professional
                    Plumbing Service
                    for Your Home
                </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 w-1/2 left-24 top-3/4">
                <Link to='/allservices' className="btn btn-info text-white text-xl px-5">Our Services</Link>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default SliderItems;