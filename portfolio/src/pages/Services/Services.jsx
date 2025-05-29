import React from 'react'
import './Services.css'
import lp from '../../assets/undraw_landing-page_tsx8.png'
import me from '../../assets/Picsart_25-05-16_15-43-57-540-removebg-preview (1).png'
import mnts from '../../assets/6029646.jpg'
import flsts from '../../assets/7081473.jpg'
import landing from '../../assets/landing-page.png'
import ecom from '../../assets/shopping.png'
import intr from '../../assets/ux.png'
import html from '../../assets/app.png'
import res from '../../assets/responsive-design.png'
import port from '../../assets/profile.png'
import api  from '../../assets/api (1).png'
import django from '../../assets/django.png'
import thorough from '../../assets/thorough.png'
import transfer from '../../assets/data-transfer.png'
import authentication from '../../assets/authentication.png'
import update from '../../assets/update.png'
import server from '../../assets/server.png'
import ssl from '../../assets/ssl.png'
import domain from '../../assets/domain.png'
import bug from '../../assets/bug-problem.png'
import upload from '../../assets/upload.png'
import processing from '../../assets/data-processing.png'
import blog from '../../assets/content-writing.png'
import buis from '../../assets/analytics.png'
import wb from '../../assets/steptodown.com254887.jpg'
import frd from '../../assets/steptodown.com655576.jpg'
import bknd from '../../assets/steptodown.com424010.jpg'
import hsts from '../../assets/steptodown.com645199.jpg'
const Services = () => {
  return (
    <div className='services container-fluid'>
      <div className="container">
        <div className="headding">
          <h6>I AM GRAT AT</h6>
          <h1>Services</h1>
          <p>Offering end-to-end web development services, from design to deployment, tailored to meet your unique business needs.</p>
        </div>
        <div className="skillcards">
  
       <div className="card">
        <div className="image">
             <img src={wb} alt="" />
        </div>
         <div className="titles">
            <h1>Website Development</h1>
           <ul>
            <li> <img src={landing} alt="" />Landing Pages </li>
            <li> <img src={buis} alt="" />Business Websites</li>
            <li> <img src={ecom} alt="" />E-commerce Websites </li>
            <li> <img src={port} alt="" />Portfolio Websites </li>
            <li> <img src={blog} alt="" />Blog/News Platforms </li>
           </ul>
         </div>
       </div>
       <div className="card">
        <div className="image">
             <img src={frd} alt="" />
        </div>
         <div className="titles">
            <h1> Frontend Development</h1>
 <ul>
            <li><img src={intr} alt="" />Clean, interactive interfaces</li>
            <li><img src={html} alt="" />React, HTML, CSS, JavaScript </li>
            <li><img src={res} alt="" />Mobile & tablet optimization </li>
            
           </ul>
         </div>
       </div>
       <div className="card">
        <div className="image">
             <img src={bknd} alt="" />
        </div>
         <div className="titles">
            <h1>Backend Development</h1>
            <ul>
            <li><img src={django} alt="" />Django or Node.js</li>
            <li><img src={api} alt="" />REST API integration </li>
            <li><img src={authentication} alt="" />Secure authentication </li>
          
           </ul>
         </div>
       </div>
       <div className="card">
        <div className="image">
             <img src={flsts} alt="" />
        </div>
         <div className="titles">
            <h1> Full Stack Development</h1>
            <ul>
            <li><img src={thorough} alt="" />Frontend + Backend + Database </li>
            <li><img src={processing} alt="" />Seamless integration </li>
            <li><img src={transfer} alt="" />Scalable architecture </li>
          
           </ul>
         </div>
       </div>

       <div className="card">
        <div className="image">
             <img src={mnts} alt="" />
        </div>
         <div className="titles">
            <h1>Maintenance & Support</h1>
            <ul>
            <li><img src={update} alt="" />Regular updates </li>
            <li><img src={bug} alt="" />Bug fixing </li>
            <li><img src={upload} alt="" />Feature improvements </li>
            
           </ul>
         </div>
       </div>
       
       <div className="card">
        <div className="image">
             <img src={hsts} alt="" />
        </div>
         <div className="titles">
            <h1>Deployment & Hosting</h1>
            <ul>
            <li><img src={server} alt="" />Hosting</li>
            <li><img src={domain} alt="" />Domain connection</li>
            <li><img src={ssl} alt="" />SSL & performance optimization</li>
           
           </ul>
         </div>
       </div>
    
        </  div>
         </div>
      <div className="contact">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 textcol">
                <div className="content">
        <h1>Have a project on your mind.</h1>
        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of</p>
        <button>Contact Me</button>
                </div>

            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 imagecol">
                <img src={me} alt="" />
            </div>
        </div>
      </div>
     
    </div>
     
  )
}

export default Services
