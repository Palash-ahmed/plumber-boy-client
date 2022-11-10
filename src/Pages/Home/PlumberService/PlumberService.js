import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServicesCard from '../../Shared/ServicesCard/ServicesCard';

const PlumberService = () => {
    const [services, setServices] = useState([]);
    useTitle('Plumber-Service');
    useEffect(() => {
        fetch('https://plumber-boy-server.vercel.app/homePage')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center my-16'>
                <h1 className="text-5xl font-bold my-5">Check Our Plumbing Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className="card-actions justify-center my-20">
                <Link to='/allservices'><button className="btn btn-info text-white font-bold">See All Services</button></Link>
            </div>
        </div>
    );
};

export default PlumberService;