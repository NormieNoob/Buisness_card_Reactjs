import React from 'react'
import potrait from '../images/potrait.jpg'

export default function Main() {
  return (
    <div className='info-container'>
      <img src={potrait} alt='' />
      <h2>Patrick Bateman</h2>
      <p>Frontend Developer</p>
      <h6>PatrickBateman.website</h6>
      <div className='button'>
        <button className='mail'>Email</button>
        <button className='linkedin'>Linkedin</button>
      </div>
    </div>
  )
}
