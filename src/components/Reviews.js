import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthContext";

const Reviews = ({ serviceDetails }) => {
  const {user} =useContext(AuthContext)
  const handleReviewSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const userReview = form.userReview.value;
    const serviceId = serviceDetails._id;
    const userEmail =user?.email;
    const review = {
        serviceId,
        userEmail,
        userName,
        userReview,
    }
    fetch('http://localhost:5000/reviews', {
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    toast.success('Review Added Successfully')
    form.reset();
  }
  return (
    <div className="grid md:grid-cols-2">
      <div className=" bg-base-200 py-0 rounded-xl">
        <div className="hero-content flex-col lg:flex-row py-0">
          <div className="w-24 mask mask-squircle">
            <img src="https://placeimg.com/192/192/people" />
          </div>
          <div>
            <h1 className="text-xl font-bold p-0">Box Office News!</h1>
            <p className="">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleReviewSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            name="userName"
            type="text"
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Reviews</span>
          </label>
          <textarea
            className="textarea textarea-info"
            name="userReview"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="rating rating-lg rating-half">
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-green-500 mask mask-star-2 mask-half-2"
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Add Review</button>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
