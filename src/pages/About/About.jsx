import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about'>
      <video autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + '/BgVideo.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>
      Welcome to my digital realm! I'm Sukrit, a front-end developer crafting immersive web experiences.
      </h1>
    </div>
  )
}

export default About
