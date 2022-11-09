import React, { useEffect, useState } from 'react';
import ServicesCard from '../Shared/ServicesCard/ServicesCard';

const AllServices = () => {
    const [services, setServices] = useState([]);

    
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div className='my-24'>
            <div className='text-center my-16'>
                <h1 className="text-xl font-semibold text-info">CATEGORIES</h1>
                <h1 className="text-5xl font-bold my-5">Check Our Plumbing Services</h1>
                <p className='w-9/12 mx-auto text-xl'>PlumberBoy Plumbing, Heating & Air Conditioning, Inc. offers honest and effective solutions for all plumbing and HVAC needs. Customers can expect solid, efficient plumbing services for everything from installation issues to intensive repair.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;