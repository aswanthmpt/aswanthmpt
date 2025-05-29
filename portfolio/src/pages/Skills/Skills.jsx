import React from 'react'
import './Skills.css'
import py from '../../assets/python.png'
import dj from '../../assets/icons8-django-96.png'
import fl from '../../assets/icons8-flask-500.png'
import rc from '../../assets/atom.png'
import ht from '../../assets/html.png'
import cs from '../../assets/css-3.png'
import js from '../../assets/java-script.png'
import my from '../../assets/icons8-mysql-logo-96.png'
import pg from '../../assets/icons8-postgresql-96.png'
import ap from '../../assets/api.png'
import gt from '../../assets/icons8-git-150.png'
import gh from '../../assets/icons8-github-150.png'
import wp from '../../assets/wordpress-logo.png'
import sl from '../../assets/icons8-sqlite-500.png'
import bt from '../../assets/icons8-bootstrap-384.png'
const Skills = () => {
  return (
    <div className="myskills container-fluid ">
      <div className="container">

     
         <div className="headding">
          <h6>SKILLS</h6>
          <h1>My Skills</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="container">
          <div className="cards">
            <h2>PYTHON</h2>
            <img src={py} alt="" />
           
          </div>
          <div className="cards">
            
            <h2>DJANGO</h2>
             <img src={dj} alt="" />
            
           
          </div>
          <div className="cards">
            <h2>FLASK</h2>
            <img src={fl} alt="" />
           
          </div>
          <div className="cards">
            <h2>REACT</h2>
            <img src={rc} alt="" />
           
          </div>
          <div className="cards">
            <h2>HTML</h2>
            <img src={ht} alt="" />
           
          </div>
          <div className="cards">
            <h2>CSS</h2>
             <img src={cs} alt="" />
           
          </div>
          <div className="cards">
            <h2>JAVASCRIPT</h2>
             <img src={js} alt="" />
           
          </div>
          <div className="cards">
            <h2>MYSQL</h2>
             <img src={my} alt="" />
           
          </div>
          <div className="cards">
            <h2>POSTGRESQL</h2>
             <img src={pg} alt="" />
           
          </div>
          <div className="cards">
            <h2>RESTAPI</h2>
             <img src={ap} alt="" />
           
          </div>
          <div className="cards">
            <h2>GIT</h2>
             <img src={gt} alt="" />
           
          </div>
          <div className="cards">
            <h2>GITHUB</h2>
             <img src={gh} alt="" />
           
          </div>
          <div className="cards">
            <h2>WORDPRESS</h2>
             <img src={wp} alt="" />
           
          </div>
          <div className="cards">
            <h2>SQLLITE</h2>
             <img src={sl} alt="" />
           
          </div>
          <div className="cards">
            <h2>BOOTSTRAP</h2>
             <img src={bt} alt="" />
           
          </div>
        </div>
         </div>
       </div>
  )
}

export default Skills
