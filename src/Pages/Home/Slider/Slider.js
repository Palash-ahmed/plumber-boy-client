import React from 'react';
import slider1 from '../../../assets/Slider/slider-1.jpeg'
import slider2 from '../../../assets/Slider/slider-2.jpg'
import slider3 from '../../../assets/Slider/slider-3.jpg'
import useTitle from '../../../hooks/useTitle';
import SliderItems from './SliderItems';


const sliderData = [
    {
        sliderImage: slider1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        sliderImage: slider2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        sliderImage: slider3,
        prev: 2,
        id: 3,
        next: 1
    }
]

const Slider = () => {
    useTitle('Slider');
    return (
        <div className="carousel w-full py-6">
            {
                sliderData.map(slide=> <SliderItems
                    key={slide.id}
                    slide={slide}
                ></SliderItems>)
            }
        </div>
    );
};

export default Slider;