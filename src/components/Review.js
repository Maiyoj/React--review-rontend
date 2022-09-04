import {useEffect, useState} from "react";
import Comment from "./Comment";

function Reviews(){
    const [comments, setComments] = useState([])
    useEffect(()=>{
        fetch("http://localhost:9292/reviews")
        .then(res=>res.json())
        .then((data) =>
            setComments(data)   
        )
    },[])
    console.log(comments)

    const allComments = comments.map((comment)=>{
      return( <Comment key={comment.id}
        body={comment.comment}
        restaurant_id={comment.restaurant_id}
        user_id = {comment.user_id}
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