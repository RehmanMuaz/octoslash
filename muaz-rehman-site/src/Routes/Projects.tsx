import React, { createRef, useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import '../Resources/App.css'
import { motion } from 'framer-motion'


function Projects() {
  const section1ref = createRef<HTMLElement>()

  return (
    <header className="App-header BG1">
      <div className='Space'/>
      <section className='Section' ref={section1ref} >
        <div className='Left'>
          <h1 style={{color: 'White'}}>Some of my recent projects.</h1>
        </div>
        <div className='Right'>
          <div style={{width:'300px', height:'300px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130">
              <g transform='translate(5 5)'>
                <motion.path 
                  fill='none'
                  stroke='red'
                  strokeWidth='2'
                  d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0.25 }}
                  transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
                />
              </g>
              <g transform='translate(4 4)'>
                <motion.path 
                  fill='none'
                  stroke='cyan'
                  strokeWidth='1'
                  d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0.25 }}
                  transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
                />
              </g>
            </svg>
          </div>
        </div>
      </section>
      <section className='Section'>
      <div className='Left'>
        <div style={{width:'300px', height:'250px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130">
              <g transform='translate(0 100)'>
                <motion.path 
                  fill='none'
                  stroke='magenta'
                  strokeWidth='2'
                  transform='translate'
                  d="M 0 0 Q 10 -20 20 -20 T 40 -10 T 70 -30 T 100 -30 T 150 -70"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
                />
                <motion.path 
                  fill='none'
                  stroke='red'
                  strokeWidth='2'
                  transform='translate'
                  d="M 0 0 T 23 -22 L 27 -21 L 48 -40 L 58 -34 L 69 -47 L 89 -50 L 140 -87"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
                />
                <motion.path 
                  stroke='white'
                  strokeWidth='2'
                  transform='translate'
                  d="M 0 0 T 150 0"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 1}}
                />
                <motion.path 
                  stroke='white'
                  strokeWidth='2'
                  transform='translate'
                  d="M 0 0 T 0 -150"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 1}}
                />
              </g>
              <g transform='translate(1 101)'>
                <motion.path 
                  fill='none'
                  stroke='cyan'
                  strokeWidth='1'
                  transform='translate'
                  d="M 0 0 Q 10 -20 20 -20 T 40 -10 T 70 -30 T 100 -30 T 150 -70"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
                />
                <motion.path 
                  fill='none'
                  stroke='cyan'
                  strokeWidth='1'
                  transform='translate'
                  d="M 0 0 T 23 -22 L 27 -21 L 48 -40 L 58 -34 L 69 -47 L 89 -50 L 140 -87"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
                />
              </g>
            </svg>
          </div>
        </div>
        <div className='Right'>
          <div className='VerticalContainer'>
            <h3>StatSite</h3>
            <p className='SectionPText'>Frontend design project utilizing React framework to display Covid data in Ontario, Canada. Fetches and processes data from opencovid.ca API and JSON files. The data is be displayed in beautiful and interactive charts
                utilizing Ant Design UI library.

            </p>
            <div className='ButtonRow'>
              <button type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/RehmanMuaz/StatSite", "_blank")
                  }}
              >
                <div className='ButtonItemRow'>  
                  <FaGithub className='ButtonImg'/>
                  <p>Github</p>
                </div>
              </button>
              <button type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://rehmanmuaz.github.io/StatSite/index", "_blank")
                  }}
              >
                <div className='ButtonItemRow'>  
                <FiExternalLink className='ButtonImg'/>
                <p>Demo</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='Section'>
      <div className='Left'>
        <div style={{width:'300px', height:'375px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 200">
              <g transform='translate(0 130)'>
                <motion.path 
                  fill='none'
                  stroke='red'
                  strokeWidth='2'
                  transform='translate'
                  d="M 0 0 L 0 -108 C 9.4 -134.6 102.2 -136.1 109 -108 C 101.5 -73.4 2.9 -74.9 0 -108 M 109 -108 L 109.4 0 c -9.3 38.2 -100 31.7 -109.4 0 M 0 -27 C 11 0 100 0 109 -27 M 0 -60 C 11 -39 98 -39 109 -60"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
                />
              </g>
              <g transform='translate(1 131)'>
                <motion.path 
                  fill='none'
                  stroke='cyan'
                  strokeWidth='1'
                  transform='translate'
                  d="M 0 0 L 0 -108 C 9.4 -134.6 102.2 -136.1 109 -108 C 101.5 -73.4 2.9 -74.9 0 -108 M 109 -108 L 109.4 0 c -9.3 38.2 -100 31.7 -109.4 0 M 0 -27 C 11 0 100 0 109 -27 M 0 -60 C 11 -39 98 -39 109 -60"
                  initial={{ pathLength: 0, pathOffset: 0 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
                />
              </g>
            </svg>
          </div>
        </div>
        <div className='Right'>
          <div className='VerticalContainer'>
              <h3>Honeydew</h3>
              <p className='SectionPText'>An Ecommerce backend developed in TypeScript using ExpressJS. Employs MySQL for relational databases and Sequelize for database models. Utilizes a layered architechure and authentication using Google OAuth 2.0.
              </p>
              <div className='ButtonRow'>
              <button type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/RehmanMuaz/Honeydew", "_blank")
                  }}
              >
                <div className='ButtonItemRow'>  
                  <FaGithub className='ButtonImg'/>
                  <p>Github</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='Section'>
      <div className='Left'>
        <div style={{width:'300px', height:'200px'}}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 90.1 60"  fill='none'>
            <g>
              <motion.path 
                stroke='red'
                strokeWidth='1'
                d="M59.9,26.2c2.4-0.7,4.7-1.2,6.8-1.6c-0.1-3.9-0.6-7-1-8.9c-1.5,0.6-4,1.6-6.8,3.1c0.5,1.8,0.8,3.7,0.9,5.6 C59.9,25.1,60,25.6,59.9,26.2z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='red'
                strokeWidth='1'
                d="M69,41.1c2.3-4.6,3.6-9.2,4.2-12.3c-8.5,0.4-26.7-1.5-33,23.2c-0.4,1.7-1.2,4-1.8,5.8 C40.3,57.5,59,61.2,69,41.1z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='red'
                strokeWidth='1'
                d="M42.5,37.3c3.3-4,7.6-7.1,12.9-9.4c0.4-0.2,0.8-0.4,1.3-0.5c0.1-0.9,0.1-1.8,0-2.6C56,13,46.8,3.1,43.6,0 c-2,2-6.5,6.9-9.6,13.3c-2.4,5-3.5,9.9-3.2,14.6C35.7,30.2,39.6,33.4,42.5,37.3z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='red'
                strokeWidth='1'
                d="M72.8,40.6c-0.3,0.7-0.6,1.3-0.9,2c-3.7,7.2-8.7,12.3-15,15.1c18,2.1,33.2-9.1,33.2-9.1S82.9,43.3,72.8,40.6z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='red'
                strokeWidth='1'
                d="M15,41.8c-0.1-0.1-0.1-0.3-0.2-0.4C5.8,44.3,6.3,44,0,48.7c0,0,14.7,10.8,32.3,9.2C25,55.1,19.2,49.7,15,41.8z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='red'
                strokeWidth='1'
                d="M13.5,28.2c0.7,3,2,7.5,4.4,12.1c4.2,8,10.2,13.1,17.8,15.3c0.2-0.5,1.2-8.6,4.9-14.9 C34.6,29.8,20.1,28.3,13.5,28.2z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='red'
                strokeWidth='1'
                d="M28.5,19.1c-3-1.7-5.6-2.7-7.2-3.3c-0.4,1.8-0.9,4.9-1,8.6c2.3,0.5,4.8,1.1,7.2,2.1 C27.6,24,27.9,21.6,28.5,19.1z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
            </g>
            <g transform='translate(0.5 0.5)'>
              <motion.path 
                stroke='cyan'
                strokeWidth='0.5'
                d="M59.9,26.2c2.4-0.7,4.7-1.2,6.8-1.6c-0.1-3.9-0.6-7-1-8.9c-1.5,0.6-4,1.6-6.8,3.1c0.5,1.8,0.8,3.7,0.9,5.6 C59.9,25.1,60,25.6,59.9,26.2z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='cyan'
                strokeWidth='0.5'
                d="M69,41.1c2.3-4.6,3.6-9.2,4.2-12.3c-8.5,0.4-26.7-1.5-33,23.2c-0.4,1.7-1.2,4-1.8,5.8 C40.3,57.5,59,61.2,69,41.1z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='cyan'
                strokeWidth='0.5'
                d="M42.5,37.3c3.3-4,7.6-7.1,12.9-9.4c0.4-0.2,0.8-0.4,1.3-0.5c0.1-0.9,0.1-1.8,0-2.6C56,13,46.8,3.1,43.6,0 c-2,2-6.5,6.9-9.6,13.3c-2.4,5-3.5,9.9-3.2,14.6C35.7,30.2,39.6,33.4,42.5,37.3z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='cyan'
                strokeWidth='0.5'
                d="M72.8,40.6c-0.3,0.7-0.6,1.3-0.9,2c-3.7,7.2-8.7,12.3-15,15.1c18,2.1,33.2-9.1,33.2-9.1S82.9,43.3,72.8,40.6z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='cyan'
                strokeWidth='0.5'
                d="M15,41.8c-0.1-0.1-0.1-0.3-0.2-0.4C5.8,44.3,6.3,44,0,48.7c0,0,14.7,10.8,32.3,9.2C25,55.1,19.2,49.7,15,41.8z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='cyan'
                strokeWidth='0.5'
                d="M13.5,28.2c0.7,3,2,7.5,4.4,12.1c4.2,8,10.2,13.1,17.8,15.3c0.2-0.5,1.2-8.6,4.9-14.9 C34.6,29.8,20.1,28.3,13.5,28.2z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
              <motion.path 
                stroke='cyan'
                strokeWidth='0.5'
                d="M28.5,19.1c-3-1.7-5.6-2.7-7.2-3.3c-0.4,1.8-0.9,4.9-1,8.6c2.3,0.5,4.8,1.1,7.2,2.1 C27.6,24,27.9,21.6,28.5,19.1z"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{ pathLength: 1, pathOffset: 0 }}
                transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
              />
            </g>
          </svg>
        </div>
        </div>
        <div className='Right'>
          <div className='VerticalContainer'>
              <h3>Octoslash</h3>
              <p className='SectionPText'>Its this website! Currently a work in progress. Features custom animations using Framer Motion and React-Spring. A physics based interactive demo is in development using MatterJS.
              </p>
              <div className='ButtonRow'>
              <button type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com/RehmanMuaz/Octoslash", "_blank")
                  }}
              >
                <div className='ButtonItemRow'>  
                  <FaGithub className='ButtonImg'/>
                  <p>Github</p>
                </div>
              </button>
              <button type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://muaz.ca", "_blank")
                  }}
              >
                <div className='ButtonItemRow'>  
                <FiExternalLink className='ButtonImg'/>
                <p>Demo</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}


export default Projects
