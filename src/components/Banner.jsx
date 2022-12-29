import React from 'react'
import gif from '../assets/HI.gif'
import './styles/About.css'
const Banner = () => {
  return (
    <div
      className=''
      style={
        {
          marginTop: '2.5rem',
          overflow: 'hidden'
        }
      }
    >
      <div >
        <img
          src={gif}
          alt="This should've been a banner describing me"
          className='banner'
        // style={
        //   {
        //     //maxHeight: '50vh',
        //     maxWidth: '100vw'
        //   }
        // }
        />
      </div>
    </div>
  )
}

export default Banner