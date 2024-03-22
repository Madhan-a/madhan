import React from 'react'
import './Hero.css'
import pic from './selfie.jpeg'
import icon from'./reactimg.jpeg'
import html from'./download.png'
import css from'./css.png'
import js from'./js.png'
import py from'./python.jpeg'
import Navbar from '../Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3Alt,faJs,faPython } from '@fortawesome/free-brands-svg-icons';



const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='"hero-content'>
            <h2>I am <span className='maddy'>Madhan</span><br/><span className='span'>Web Developer </span></h2>
            <p>I am passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions<br/>
            and I Like to craft solid and scalable frontend products with great user experiences</p>
        </div>
      
        <div className='hero-img'>
          <div>
            <div className='tech-icon'>
          <img src={icon} alt='' className='tech'/>
          </div>
          <img src={pic} alt=""  className='im'/>
        </div>
        <div>
          <div className='tech-icon'>
          <FontAwesomeIcon icon={faHtml5} style={{ color: "#F16529", fontSize:"3.5rem"}} className='d-flex align-items-center justify-content-center' />
          {/* <img src={html} alt='' className='html'/> */}
         
            </div>
            <div className='tech-icon'>
            <FontAwesomeIcon icon={faCss3Alt}style={{color:'#264DE4',fontSize:'3.5rem'}} />
              {/* <img src={css} alt="" className='css'/> */}
            </div>
            <div className='tech-icon'>
            <FontAwesomeIcon icon={faJs}style={{color:'#E8D44D',fontSize:'3.5rem'}} />
              {/* <img src={js} alt='' className='js'/> */}
            </div>
            <div className='tech-icon'>
            <FontAwesomeIcon icon={faPython} style={{color:'#0056C6',fontSize:'3.5rem'}}/>
              {/* <img src={py} alt=''className='py'/> */}
            </div>
          

        </div>
        </div>
    </section>
  )
}

export default Hero
