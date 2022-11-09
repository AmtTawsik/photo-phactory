import React from "react";
import { Helmet } from "react-helmet-async";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Service Details-Photo Phactory</title>
      </Helmet>

      <div className="card lg:card-side bg-base-100 h-4/6 shadow-2xl grid md:grid-cols-2 my-5">
        <PhotoProvider>
          <PhotoView src={serviceDetails.image}>
            <img
              className="w-11/12 h-11/12"
              src={serviceDetails.image}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title text-5xl">{serviceDetails.name}</h2>
          <p>{serviceDetails.description}</p>
          <p className="text-4xl">Price: ${serviceDetails.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>

      <div>
        <Reviews serviceDetails={serviceDetails}></Reviews>
      </div>
    </div>
  );
};

export default ServiceDetails;
