function Comment({location, name, body, user}){
    return(
        <>
        <div className="flex flex-col  bg-indigo-500 shadow-lg shadow-indigo-500/50 ml-9 mt-8">
        <div className="ml-5">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Comment: {body}</p>
        <p>User: {user} </p>
     
        </div>
        </div>
        </>
    )


}
export default Comment;