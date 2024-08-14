import React from 'react'
import './About.css'
import profile from '../../assets/NailService.jpg'
const About = () => {
  return (
    <>
    <hr />
    <div className='about' name="About">
        <div className="about-left">
            <img src={profile} className="about-img" />
        </div>
        <div className="about-right">
            <h3>about <span>beautyStyle</span></h3>
            <h2>What we offer</h2>
            <p>Welcome to BeautyStyle, your ultimate destination for all things beauty! We're passionate about helping you unlock your natural glow and enhance your unique features. </p>
            
           <p> Our journey began with a simple mission: to provide high-quality, effective, and easy-to-use beauty products that cater to diverse skin types and tones. We believe that everyone deserves to feel  confident and beautiful in their own skin.</p> 

           <p>Our team of experts, 5 years of exprerience in the beauty industry, carefully curates a selection of products that meet our high standards.</p>
          
        </div>
    </div>
    </>
  )
}

export default About