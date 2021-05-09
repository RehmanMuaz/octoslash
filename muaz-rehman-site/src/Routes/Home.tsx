import React from 'react'
import '../Resources/App.css'
import { motion, useViewportScroll } from "framer-motion"
import PhyScene from '../Components/PhyScene'
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ImArrowUpRight2 } from 'react-icons/im'



function Home() {
  const { scrollYProgress } = useViewportScroll()

  return (
    <div>
      <div className="HeroBgColor"/>
      <div className="HeroBg"/>
      <header className="App-header">
        <animated.h1 className="HeroTitle" 
          style={useSpring({
            loop: false,
            from: { y: -1000 },
            to: { y: 0 },
            delay: 1000,
            config: {
              mass: 1,
              tension: 500,
              friction: 20,
              bounce: 1
            }
          })}
        >
                MUAZ
        </animated.h1>
        <animated.div className='NavPopup' style={useSpring({
            loop: false,
            from: { opacity: 0 },
            to: { opacity: 1 },
            delay: 2000
        })}>
          <animated.div style={useSpring({
            loop: { reverse: true },
            from: { x: -10, y: 10 },
            to: { x: 0, y: 0 },

            config: {
              duration: 500
            }
        })}>
            <ImArrowUpRight2/>  
          </animated.div>
        </animated.div>
      </header>      
    </div>
  )
}

export default Home
