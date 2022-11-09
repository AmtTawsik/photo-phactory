import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthContext";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfuly");
            const remaining = myReviews.filter((mrv) => mrv._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?userEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  return (
    <div>
      <Helmet>
        <title>My Reviews-Photo Phactory</title>
      </Helmet>
      {myReviews.length <= 0 ? (
        <p className="text-center py-36 md:py-72 font-bold text-2xl md:text-5xl">
          No Reviews Were Added!
        </p>
      ) : (
        myReviews.map((myReview) => (
          <MyReview
            key={myReview._id}
            myReview={myReview}
            handleDelete={handleDelete}
          ></MyReview>
        ))
      )}
    </div>
  );
};

export default MyReviews;
