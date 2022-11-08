import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MyReview from './MyReview';

const MyReviews = () => {
    const {user} =useContext(AuthContext);
    const [myReviews,setMyReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?userEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[user?.email])
    return (
        <div>
            {
                myReviews.length <= 0 ?
                <p>No Review Found!</p>
                :
                myReviews.map(myReview => <MyReview key={myReview._id} myReview={myReview}></MyReview>)
            }
        </div>
    );
};

export default MyReviews;