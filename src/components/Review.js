import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({ reView }) => {
  return (
    <div className=" bg-base-200 py-0 my-5 rounded-xl">
      <div className="hero-content justify-start flex-col lg:flex-row py-0">
        <div className="w-24 mask mask-squircle">
          <img alt="" src={reView.userimage} />
        </div>
        <div>
          <h1 className="text-xl font-bold p-0">{reView.userName}</h1>
          <p className="flex items-center text-yellow-400">
            <span className="font-extrabold">Rating:</span> 4.8{" "}
            <FaStar></FaStar>
          </p>
          <p className="">
            <span className="font-extrabold text-orange-700">Review:</span>{" "}
            {reView.userReview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
