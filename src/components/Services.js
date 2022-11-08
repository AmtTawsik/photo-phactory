import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            
            <div className="grid md:grid-cols-3 gap-6 my-7 w-11/12 mx-auto">
                {
                    services.length > 0 ?
                    services.map(service => <Service key={service._id} service={service}></Service>)
                    :
                    <p>No Service Found!</p>
                }
            </div>
        </div>
    );
};

export default Services;