import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import Review from "./Review";


const Reviews = ({ serviceDetails }) => {
  const {user} =useContext(AuthContext)
  const serviceId = serviceDetails._id;
  const serviceName = serviceDetails.name;
  const handleReviewSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    const userimage = user.photoURL;
    const userReview = form.userReview.value;
    const time = form.time.value;
    const userEmail =user?.email;
    const review = {
        serviceId,
        serviceName,
        userEmail,
        userName,
        userReview,
        userimage,
        time,
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

  const [reViews,setReViews] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/reviews?serviceId=${serviceId}`)
    .then(res =>res.json())
    .then(data => setReViews(data))
  },[reViews,serviceId])
  return (
    <div className="grid md:grid-cols-2">

      <div className="my-10">
        {
            reViews.length ? 
            reViews.map(reView => <Review key={reView._id} reView={reView}></Review>)
            :
            <p className="text-4xl font-bold text-amber-400">No Review Found!</p>
        }
      </div>

      {
        user?.uid?
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
        <div>
            <input type="datetime-local" name="time" id="" defaultValue='' required/>
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
      :
      <div className="flex justify-end text-4xl p-0 m-0">
        <Link to='/login' className="link link-success">Please login to add a review</Link>
      </div>
      }
    </div>
  );
};

export default Reviews;
