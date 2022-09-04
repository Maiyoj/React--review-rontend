import {useEffect, useState} from "react";
import Comment from "./Comment";

function Reviews(){
    const [restaurants, setRestaurant] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/reviews")
        .then(res=>res.json())
        .then((data) =>
        setRestaurant(data)   
        )
    },[])
    console.log(restaurants)

    const allComments = restaurants.map((restaurant)=>{
      return( <Comment key={restaurant.id}
        name={restaurant.name}
        location ={restaurant.location}
        body = {restaurant.reviews.map(review => {
            return (review.body
    
                )
        })}


                 />)
    })
    return(
    <>
    <div className="flex  flex-wrap justify-center pt-6 pb-10  mb-8  ">
    {allComments}
    </div>
    </>
    )
}
export default Reviews;