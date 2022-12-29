import React from 'react'
import './styles/About.css'

const About = () => {
  return (
    <div
      id='about'
      className='img-fluid'
      style={
        {
          color: '#0D4C92'
        }
      }
    >
      <img
        className='bannerImg'
        src="https://avatars.githubusercontent.com/u/68733176?s=400&u=b1fbf0848e25cab2f61abafddac588f88e67936a&v=4"
        alt="My pic should've been here lol !"
      />
      <h3>Hey There! , welcome to my website</h3>
      <h4>Lets know more about me ⬇️</h4>
    </div>
  )
}

export default About