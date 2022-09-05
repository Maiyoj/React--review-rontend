function About(){
return(
    <>
    <div className="about">
    <img src={process.env.PUBLIC_URL + '/images/res1.jpeg'} alt="Valentine" className='image1'></img>
        <div>
            <p>Help others make better choices</p>
            <p>Review your favourite Restaurants</p>
        </div>
    </div>
    </>
)

}
export default About