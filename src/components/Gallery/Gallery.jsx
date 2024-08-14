import React from 'react'
import './Gallery.css'
import NailServices from '../../assets/NailService.jpg'
import facial from '../../assets/facial.jpg'
import MassageServices from '../../assets/MassageServices.jpg'
import HairCutting from '../../assets/HairCutting.jpg'
import bodyMassage from '../../assets/bodyMassage.jpg'

const Gallery = () => {
  return (
    <>
    <div className='gallery' name="Gallery">
        <div className="gallery-img">
        <img src={NailServices} alt='' />
        <img src={facial} alt='' />
        <img src={bodyMassage} alt=''/>
        <img src={HairCutting} alt='' />
        </div>
        <button className='btn dark-btn'>See more</button>
    </div>
    <hr />
    </>
  )
}

export default Gallery