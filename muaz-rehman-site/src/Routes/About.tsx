import React, { createRef, useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import '../Resources/App.css'
import { motion } from 'framer-motion'
import profile from '../Resources/profile-crop.jpg'


function About() {
  const section1ref = createRef<HTMLElement>()
  let x1, y1, x2, y2
  
  const randomInRange = (min:number, max:number) => {
    return Math.random() * (max - min) + min;
  };

  const setAnimValues = () => {
      x1 = randomInRange(-50,50)
      y1 = randomInRange(-50,50)
      x2 = randomInRange(-50,50)
      y2 = randomInRange(-50,50)
  }
  setAnimValues()
  return (
    <header className="App-header BG1">
      <div className='Space'/>
        <motion.div className='Floater'
          initial={{ x: 0, y: -50 }}
          animate={{ x: 0, y: 50 }}
          transition={{ duration: 5, repeatType: "reverse", repeat: Infinity, ease: 'easeInOut' }}  
        > 
            <div className='FloaterPicContainer'>  
              <img className='FloaterPic' src={profile}/>
              <img className='FloaterPicBG' src={profile}/>
            </div>
            <div className='FloaterTextSection'>
              <h2>Muaz Rehman</h2>
              <b>Toronto Based Software Developer</b>
              <p style={{lineHeight: '1.6'}}>Muaz has developed a multitude of products as a freelance developer. He is highly skilled in Full Stack Development. Experienced in NodeJS and React. Most recently he has been develping a Ecommerce backend called Honeydew with future plans to include a multiplatform frontend.</p>
              <button type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.linkedin.com/in/muazrehman/", "_blank")
                  }}
              >
                <div className='ButtonItemRow'>  
                  <FaLinkedin className='ButtonImg'/>
                  <p>LinkedIn</p>
                </div>
              </button>
            </div>
        </motion.div>
    </header>
  )
}


export default About
