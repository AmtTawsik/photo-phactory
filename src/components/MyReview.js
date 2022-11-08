import React from "react";
import '../App.css'
import { FaEdit, FaStar, FaTrashAlt } from "react-icons/fa";

const MyReview = ({ myReview }) => {
  return (
    <div className=" bg-base-200 py-0 my-5 w-10/12 md:w-5/12 mx-auto rounded-xl">
      <div className="hero-content flex-col lg:flex-row pl-0 py-0">
        <div className="w-48 mask mask-squircle">
          <img alt="" className="r-image" src={myReview.userimage} />
        </div>
        <div className="mx-5">
          <h1 className="text-xl font-bold p-0">{myReview.userName}</h1>
          <p className="flex items-center text-yellow-400">
            <span className="font-extrabold">Rating:</span> 4.8{" "}
            <FaStar></FaStar>
          </p>
          <p>Service Name:{myReview.serviceName}</p>
          <p className="">
            <span className="font-extrabold text-orange-700">Review:</span>{" "}
            {myReview.userReview}
          </p>
          <div className="flex content-between justify-between pb-2">
            <button className="btn text-green-400 rounded-full font-bold text-2xl">
              <FaEdit></FaEdit>
            </button>
            <button className="btn text-red-600 rounded-full font-bold text-2xl">
              <FaTrashAlt></FaTrashAlt>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
