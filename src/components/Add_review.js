
import {useEffect, useState, onAddReview} from "react"
function Add_review(){
    const [details, setRestaurant] = useState([])
    const [users, setUsers] = useState([])
 
    useEffect(()=>{
        fetch("http://localhost:9292/restaurants")
        .then(res=>res.json())
        .then((data) =>
        setRestaurant(data)   
        )
    },[])
    console.log(details)

    useEffect(()=>{
        fetch("http://localhost:9292/users")
        .then(res=>res.json())
        .then((data) =>
        setUsers(data)   
        )
    },[])
    
    const [resoption, setResopt] = useState("Resturant")
    const [uservalue, setUservalue] = useState("User")
    const [body, setBody] = useState("")
    const [formData, setFormData] = ([])

    function handleResChange(event) {
        setResopt(event.target.value)
      }
      
      function handleUserChange(event) {
        setUservalue(event.target.value)
      }

      function handlBodyChange(event) {
        setBody(event.target.value)
      }


     function handleSubmit(e){
        e.preventDefault();
        const createdReview ={
          restoption: resoption,
          body: body,
          uservalue:uservalue
        };

    
        fetch("http://localhost:9292/reviewss",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(createdReview),
        })
        .then(res => res.json())
        .then(newp =>{
            setFormData(newp)
            onAddReview(formData); 
        })
      }
    return (
        <div className="commentForm">
         <h1>Add review</h1>
         <h1>Leave a Comment</h1>
         <form className="updateForm">
            <select value={resoption} onchange={handleResChange} name={resoption}>
                {details.map((detail)=>(<option key={detail.Id} >{detail.name}</option>))}</select>

         <textarea value={body} placeholder="Comment"  type="text" name="text" rows="10"  onchange={handlBodyChange}></textarea><br/>
         <select value={uservalue} onchange={handleUserChange} name={body} >
                {users.map((user)=>(<option key={user.Id}>{user.name}</option>))}</select>
         <input type="submit"className="submit" onClick={handleSubmit} />
         </form>
     </div>
     )
    
}

export default Add_review