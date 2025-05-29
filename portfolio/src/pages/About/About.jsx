import React from 'react'
import './About.css'
import bg from '../../assets/pexels-barik5ive-3355696-10530122.png'
const About = () => {
  return (
   
    <div className="aboutme container-fluid ">
           <div className="container">
                <h6>MY INTRO</h6>
             <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 image-col">
                   <img src={bg} alt="" />
    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 about-col">
                     <div className="headding">
               <h1>About me</h1>
               <p>Hi, I'm Aswanth M P T, a passionate and self-driven developer with a strong foundation in Python, Django, and full-stack web development. I enjoy building efficient, scalable, and user-friendly web applications that solve real-world problems. With hands-on experience in both frontend and backend technologies, I strive to deliver clean, maintainable code and responsive designs</p>
    
                    </div>
                </div>
            </div>
           </div>
           </div>
          
  )
}

export default About
