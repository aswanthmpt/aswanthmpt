import React from 'react'
import './Home.css'


import img1 from '../../assets/image1.jpg'

const Home = () => {
  return (
    <div className='container-fluid main '>
       <div className="container intro ">
         <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 headding-col">
                <div className="headding">
            <h1>Hi,I am <span>Aswanth</span></h1>
            <h1>Fullstack Webdeveloper</h1>
            <div className="contactme_btn">
              <button>Hire Me</button>
              <button>Download CV</button>
            </div>
 </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 image-col">
                <img src={img1} alt="" />
            </div>
        </div>
       </div>
       
      
    </div>
  )
}

export default Home
