import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavButton from './NavButton'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from "framer-motion"

import '../Resources/App.css'
import logo from "../Resources/main-logo.svg"

type AppProps = {
  content: JSX.Element
}

function Navbar(/**{content}: AppProps*/) {
  const [navClick, setNavClick] = useState(false)

  const handleNavClick = () => setNavClick(!navClick)
  return (
    <nav>
      <div>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{delay:0.4}}
          >
          <NavLink className="NavLogo" to="/">
            <img src={logo}/>
          </NavLink>
        </motion.div>
        {!navClick ? null : 
          <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 0.2 }}
          >
            <div className='NavMenu'>
              <ul>
                <li style={{paddingBottom:'10px'}}><NavLink className="NavItem" to="/" onClick={handleNavClick}>Home</NavLink></li>
                <li style={{paddingBottom:'10px'}}><NavLink className="NavItem" to="/about" onClick={handleNavClick}>About</NavLink></li>
                <li style={{paddingBottom:'10px'}}><NavLink className="NavItem" to="/projects" onClick={handleNavClick}>Projects</NavLink></li>
              </ul>
            </div>
        </motion.div>}
      </div>
      <motion.div className="NavButton" onClick={handleNavClick}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
      transition={{delay:0.4}}
      >
        {navClick ? <FaTimes className='BurgerButton' size={32}/> : <FaBars className='BurgerButton' size={32}/>}
      </motion.div>
    </nav>
  )
}
  
export default Navbar