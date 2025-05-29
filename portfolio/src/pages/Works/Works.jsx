import React from 'react'
import './Works.css'
import lp from '../../assets/undraw_landing-page_tsx8.png'
import lg from '../../assets/pexels-sora-shimazaki-5668473.jpg'
import ml from '../../assets/pexels-zandatsu-32213405.jpg'
import ck from '../../assets/pexels-gustavo-fring-3985091.jpg'
const Works = () => {
  return (
    <div className='works container-fluid'>
      <div className="container">

    
        <div className="headding">
                <h6>ACCOMPLISHMENTS</h6>
                <h1>MY WORKS</h1>
                <p>Explore a selection of my web development projects, where I turn ideas into interactive, functional, and visually appealing digital experiences.</p>
              </div>
              <div className="skillcards">
        
             <div className="card">
              <div className="image">
                   <img src={lg} alt="" />
              </div>
               <div className="titles">
                  <h1>LegalBridge</h1>
                  <p> A full-stack legal case management platform where clients can register cases and communicate with advocates.</p>
               </div>
             </div>
      
             <div className="card">
              <div className="image">
                   <img src={ml} alt="" />
              </div>
               <div className="titles">
                  <h1> GMRL Lab</h1>
                  <p> A hospital service website designed for online appointment booking and test package exploration.
                    
                  </p>
               </div>
             </div>
             
             <div className="card">
              <div className="image">
                   <img src={ck} alt="" />
              </div>
               <div className="titles">
                  <h1> Cake Bite</h1>
                  <p> A full-stack e-commerce platform allowing users to browse and purchase bakery products.</p>
               </div>
             </div>
          
              </  div>
                </div>
    </div>
  )
}

export default Works
