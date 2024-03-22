import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../data'
import ExperienceCard from './ExperienceCard'
import Slider from 'react-slick'

const WorkExperience = () => {
  const sliderdRef=useRef();

  const settings={
    dots:false,
    isFinite:true,
    speed:500,
    slidesToShow:2,
    slidesToScroll:1,
    arrows:false,
    responsive:[
      {
        breakpoint:769,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
    ],
  };
  const slideRight=()=>{
    sliderdRef.current.slickNext();
  };
  const slideLeft =()=>{
    sliderdRef.current.slickPrev();
  };


 
  return (
    <section className='experience-container'>
        <h5>Education</h5>
      <div className='experience-content'>
        <div className='arrow-right' onClick={slideRight}>
          <span className="material-symbols-outlined">Click </span>
        </div>
        <div className='arrow-left'onClick={slideLeft}>
          <span className='material-symbols-outlined'>CLICK </span>
        </div>
        <Slider ref={sliderdRef}{...settings}>
      {WORK_EXPERIENCE.map((item)=>(
        <ExperienceCard key={item.title}details={item}/>
      ))}
      </Slider>
      </div>
    </section>
  )
}

export default WorkExperience
