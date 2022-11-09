import React from 'react';

const ServicesCard = ({ service }) => {
    const { img, price, title, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-info">{title}</h2>
                <p>{
                    description.length > 100 ?
                        <>{description.slice(0, 100) + '...'}</>
                        :
                        description
                }</p>
                <p className='text-info font-bold text-xl'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-info">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;