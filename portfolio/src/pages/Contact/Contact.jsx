import React,{useState} from 'react'
import './Contact.css'
import nv from '../../assets/gps-navigation.png'
import ml from '../../assets/email.png'
import ph from '../../assets/phone-call.png'
const Contact = () => {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
   const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };
   const sendToWhatsApp = (e) => {
    e.preventDefault();
    
    const { name, email, mobile, message } = formData;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMobile: ${mobile}%0AMessage: ${message}`;
    
    const whatsappURL = `https://wa.me/9048642860?text=${whatsappMessage}`;
    
    window.open(whatsappURL, '_blank');
  };
  return (
    <div className='contactme'>
      <div className="row">
        <div className="headding">
        <h1>Contact Me</h1>

        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="contactme-list">
            <ul>
              <li> <img src={nv} alt="" />Calicut</li>
              <li><img src={ph} alt="" />9048642860</li>
              <li><img src={ml} alt="" />aswanthmpt@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="contactme-form">
            <form onSubmit={sendToWhatsApp}>
              <input  type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required/>
              <input  type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required />
              <input  type="text"
                name="mobile"
                placeholder='Mobile No'
                value={formData.mobile}
                onChange={handleChange}
                required/>
              <textarea  name="message"
                rows={4}
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                required />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
