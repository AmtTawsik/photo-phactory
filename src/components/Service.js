import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name,_id,image,price,description} = service;
    return (
        <div className="card card-compact w-100 bg-fuchsia-900 shadow-2xl">
      
      <PhotoProvider>
        <PhotoView src={image}>
            <img className='w-11/12 mx-auto' style={{ height: "200px" }} src={image} alt="" />
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="card-title text-lime-400">{name}</h2>
        <p className="font-bold">{description.length > 100 ? description.substring(0,100) : description}...</p>
        <p className="font-extrabold text-xl">Price: ${price}</p>
        <div className="card-actions justify-end">
          {/* course details button */}
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">Service Details</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Service;