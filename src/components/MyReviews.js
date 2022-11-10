import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const navigate = useNavigate
  // Delete handeler
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proceed) {
      fetch(`https://photo-phactory-server.vercel.app/reviews/${id}`, {
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

  // Get Data By Email
  useEffect(() => {
    fetch(
      `https://photo-phactory-server.vercel.app/myReviews?userEmail=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "Photo-Phactory-Token"
          )}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
          navigate('/login')
        }
        return res.json();
      })
      .then((data) => setMyReviews(data));
  }, [user?.email, logOut]);

  return (
    <div>
      <Helmet>
        <title>My Reviews-Photo Phactory</title>
      </Helmet>

      {myReviews.length === 0 ? (
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
