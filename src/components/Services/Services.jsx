import React from 'react'
import './Services.css'
import NailServices from '../../assets/NailService.jpg'
import facial from '../../assets/facial.jpg'
import MassageServices from '../../assets/MassageServices.jpg'
import HairCutting from '../../assets/HairCutting.jpg'
import bodyMassage from '../../assets/bodyMassage.jpg'
const Services = () => {
  return (
    <>
        <div className="services" name="Services">
            <div className="service">
                <img src={NailServices} alt="" />
                <div className="caption">
                    <p>Manicure/Padicure</p>
                </div>
            </div>
            {/* <div className="service">
                <img src={facial} alt="" />
                <div className="caption">
                    <p>Facial Service</p>
                </div>
            </div>
            <div className="service">
                <img src={MassageServices} alt="" />
                <div className="caption">
                    <p>Massage Service</p>
                </div>
            </div> */}
            
            <div className="service">
                <img src={HairCutting} alt="" />
                <div className="caption">
                    <p>Hair Cutting</p>
                </div>
            </div>
            
            <div className="service">
                <img src={bodyMassage} alt="" />
                <div className="caption">
                    <p>Spa</p>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Services