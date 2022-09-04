function Comment({body, restaurant_id, user_id}){
    return(
        <>
        <div className="flex flex-col  bg-indigo-500 shadow-lg shadow-indigo-500/50 ml-9 mt-8">
        <div className="ml-5">
        <p>Body: {body}</p>
        <p>Res: {restaurant_id}</p>
        <p>User: {user_id}</p>
        </div>
        </div>
        </>
    )


}
export default Comment;