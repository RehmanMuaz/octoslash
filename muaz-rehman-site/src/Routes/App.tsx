import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import '../Resources/index.css'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import About from './About'
import { BrowserRouter as Router, Switch, Route,  NavLink, useLocation } from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd'
import Navbar from '../Components/Navbar'
import { useSpring } from 'react-spring'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import '../Resources/App.css'


function App() {
  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }))
  const onScroll = useCallback(e => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }) , [])
  
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
        <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
