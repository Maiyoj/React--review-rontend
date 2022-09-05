function About(){
return(
    <>
    <div className="about">
    <div className="img">
    <img src={process.env.PUBLIC_URL + '/images/img2.jpg'} alt="Valentine" className='image1'></img>
    </div>
        <div className="content">
            <p>Help others make better choices</p>
            <p>Review your favourite Restaurants</p>
            <p>Help others make better choices</p>
            <p>Review your favourite Restaurants</p>
            <p>Help others make better choices</p>
            <p>Review your favourite Restaurants</p>
        </div>
    </div>
    </>
)

}
export default About