import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Updates = () => {
    const storedrReView = useLoaderData();

    const handleReviewUpdate = (event) =>{
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const userReview = form.userReview.value;
        const time = form.time.value;
        const review = {
            userName,
            userReview,
            time,
        }
        fetch(`http://localhost:5000/reviews/${storedrReView._id}`, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
             if(data.modifiedCount > 0){
                toast.success('Review Updated Successfuly')
             }
        })
      }

    return (
        <div>
            <form onSubmit={handleReviewUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            defaultValue={storedrReView.userName}
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
            defaultValue={storedrReView.userReview}
            className="textarea textarea-info"
            name="userReview"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
            <input type="datetime-local" name="time" id="" defaultValue='' required/>
        </div>
        
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Add Review</button>
        </div>
      </form>
        </div>
    );
};

export default Updates;