import React, { useRef } from 'react'
import './Testimonials.css'
// import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { FaCaretSquareLeft } from "react-icons/fa";
import { FaCaretSquareRight } from "react-icons/fa";
import profile1 from '../../assets/profile1.jpg'
import profile2 from '../../assets/profile2.jpg'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <FaCaretSquareRight className='next-btn' size={"55px"} onClick={slideForward}/>
        <FaCaretSquareLeft className='back-btn' size={"55px"} onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={profile1} alt="" />
                            <div>
                                <h3>William Jackson 1</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam animi necessitatibus quidem inventore. Dolorum veniam explicabo architecto, a omnis quasi?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={profile2} alt="" />
                            <div>
                                <h3>William Jackson 2</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam animi necessitatibus quidem inventore. Dolorum veniam explicabo architecto, a omnis quasi?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={profile1} alt="" />
                            <div>
                                <h3>William Jackson 3</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam animi necessitatibus quidem inventore. Dolorum veniam explicabo architecto, a omnis quasi?</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={profile2} alt="" />
                            <div>
                                <h3>William Jackson 4</h3>
                                <span>Educity, USA</span>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam animi necessitatibus quidem inventore. Dolorum veniam explicabo architecto, a omnis quasi?</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials