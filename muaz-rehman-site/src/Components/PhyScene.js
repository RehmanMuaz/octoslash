import React from "react"
import ReactDOM from "react-dom"
import Matter, { Svg } from "matter-js"

import logo from "../Resources/MUAZ.svg"

require('../Scripts/pathseg')

class PhyScene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    var Engine = Matter.Engine,
      Events = Matter.Events,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Composite = Matter.Composite,
      Vertices = Matter.Vertices,
      Common = Matter.Common

    var engine = Engine.create({
      // positionIterations: 20
    })

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: window.innerWidth-18,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent" 
      }
    })

    console.log(window.innerWidth) 

    // Add gradient to the canvas
    const canvas = render.canvas
    const context = canvas.getContext("2d")
    let gradient = context.createLinearGradient(0, 0, 0, 100)
    gradient.addColorStop(0, "blue")
    gradient.addColorStop(1, "pink")
    context.fillStyle = gradient
    context.fillRect(0, 0, canvas.width, canvas.height)

    // Remove the background from the canvas
    Events.on(render, 'afterRender', function(event) {
      //console.log('rendered')
      // render.canvas.style.background = null 
      // render.canvas.style.backgroundSize = 0 
      // render.currentBackground = null 
    })
    
    const images = importAll(require.context('../Resources/HeroPage', false, /\.(png|jpe?g|svg)$/))

    let objects = []
    images.forEach(element => {
      let item = Bodies.rectangle(Matter.Common.random(0,canvas.width), Matter.Common.random(-4000,-500) , 64, 64, { restitution: 0.9, 
        render: {
           sprite: {
             texture: element.default,
             xScale: 0.5,
             yScale: 0.5
           },
           fillStyle: 'white'
      }
      })
      objects.push(item)
    })
    let gitIcon = Bodies.rectangle(canvas.width/2, -6000 , 512, 512, { restitution: 0.0, density:1, force: {x: 0, y: -100 }, 
      render: {
         sprite: {
           texture: images[9].default,
           xScale: 5,
           yScale: 5
         },
         fillStyle: 'white'
    }
    })
    objects.push(gitIcon) 

    console.log(images) 
  
    World.add(engine.world, [
      // walls
      Bodies.rectangle(canvas.width/2, 850, canvas.width, 50, { isStatic: true,
      render:{fillStyle: "transparent"}}),
      Bodies.rectangle(-32, canvas.height/2, 50, canvas.height, { isStatic: true,
        render:{fillStyle: "red"}}),
      Bodies.rectangle(canvas.width + 32, canvas.height/2, 50, canvas.height, { isStatic: true,
        render:{fillStyle: "red"}}),
      
      /**Bodies.rectangle(972, 625, 1145, 300, { isStatic: true,
      render:{fillStyle: "transparent"}}),*/
    ]) 

    World.add(engine.world, objects) 

    
    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
        
      }) 

    World.add(engine.world, mouseConstraint) 

    Matter.Events.on(mouseConstraint, "mousedown", function (event) {
      World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 })) 
    }) 

    
    Engine.run(engine) 

    Render.run(render) 
  }

  render() {
    return (<div ref="scene"/>) 
  }
}
export default PhyScene 

function importAll(r) {
  return r.keys().map(r) 
}
