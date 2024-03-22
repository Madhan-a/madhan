import React from 'react'
import './MobileNav.css'
import logo from'./image.png'
const MobileNav=({isopen,toggleMenu})=>{ 
  return (
    <>
    <div className={`mobile-menu ${isopen ? "active":""}`}
    onClick={toggleMenu}>
    <div className='mobile-menu-container'>
    <img src={logo} alt="" className='logo'/>
            
            <ul>
                <li>
                    <a className='menu-item'href='/' >Home</a>
                </li>
                <li>
                    <a className='menu-item' href='Skills'>Skills</a>
                </li>
                <li>
                    <a className='menu-item 'hrerf='WorkExperience' >Work Experience</a>
                </li>
                <li>
                    <a className='menu-item'href='Contact' >Contact Me</a>
                </li>
                <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
            </ul>
            </div>
    </div>
    </>
  )
}

export default MobileNav
