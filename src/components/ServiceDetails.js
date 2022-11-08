import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">

      <div className="card lg:card-side bg-base-100 h-4/6 shadow-2xl grid md:grid-cols-2 my-5">
        <figure>
          <img className="w-11/12 h-11/12" src={serviceDetails.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl">{serviceDetails.name}</h2>
          <p>{serviceDetails.description}</p>
          <p className="text-4xl">Price: ${serviceDetails.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ServiceDetails;
