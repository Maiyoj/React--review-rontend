import {Link} from  "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="flex justify-center space-x-7 pt-8 bg-indigo-500 h-24 text-white-600">
            <Link to={"/"} exact="true">Home</Link>
            <Link to={"/add-review"} exact="true">Add Review</Link>
            <Link to={"/contact"} exact="true">Contacts</Link> 
            <Link to={"/about"} exact="true">About</Link>
            <Link to={"/review"} exact="true">Reviews</Link>

        </nav>
        </>
    )
    
}
export default Navbar