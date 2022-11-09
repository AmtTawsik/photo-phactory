import React, { useContext, useEffect, useState } from 'react';
import { FaSadCry } from 'react-icons/fa';
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
                <p className='text-center py-36 md:py-72 font-bold text-2xl md:text-5xl'>No Reviews Were Added!</p>
                :
                myReviews.map(myReview => <MyReview key={myReview._id} myReview={myReview}></MyReview>)
            }
        </div>
    );
};

export default MyReviews;