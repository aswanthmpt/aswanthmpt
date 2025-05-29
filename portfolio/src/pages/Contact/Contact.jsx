import React from 'react'
import './Contact.css'
import nv from '../../assets/gps-navigation.png'
import ml from '../../assets/email.png'
import ph from '../../assets/phone-call.png'
const Contact = () => {
  return (
    <div className='contactme'>
      <div className="row">
        <div className="headding">
        <h1>Contact Me</h1>

        </div>
        <div className="col-lg-6">
          <div className="contactme-list">
            <ul>
              <li> <img src={nv} alt="" />Nadhapuram road,vadakara,Calicut</li>
              <li><img src={ph} alt="" />9048642860</li>
              <li><img src={ml} alt="" />aswanthmpt@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contactme-form">
            <form action="">
              <input type="text" placeholder='name' />
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Mobile no' />
              <textarea type="text" rows={4} placeholder=' Message' />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
