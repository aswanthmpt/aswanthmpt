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
                <a
                  href="https://wa.me/919048642860?text=Hi%20Aswanth%2C%20I%20am%20interested%20in%20hiring%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Hire Me</button>
                </a>
                <a href="/Aswanthmpt_cv_.pdf" download><button>Download CV</button></a>
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
