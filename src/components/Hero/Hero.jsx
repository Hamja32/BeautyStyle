import React from 'react'
import './Hero.css'
import { MdOutlineExplore } from 'react-icons/md'
const Hero = () => {
  return (
    <div className='hero container' name="Hero">
       <div className="hero-text">
        <h1>Exprerience the art of beauty with our high-end products and expert guidance.</h1>
        <p>Uncover your beauty potential Expert-recommended products and tips. Shop Now and transform.</p>
        <button className='btn' id='submit'>Explore more</button>
       </div>
    </div>
  )
}

export default Hero 