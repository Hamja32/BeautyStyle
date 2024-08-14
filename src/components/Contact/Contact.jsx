import React from 'react'
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import {AiOutlineMail} from 'react-icons/ai'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "25207c25-2b40-40ad-b064-31ded548f1f0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact" name="Contact">
       <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nobis sapiente vitae et voluptates autem praesentium consectetur itaque veniam dolore quaerat sunt rerum facere alias libero dolorum eius, ex quis quisquam nisi omnis ipsum. Cum explicabo assumenda provident ullam, natus ab magnam expedita sapiente sit consequatur ad aspernatur, numquam odio.</p>
           <ul>
                <li>
                 <AiOutlineMail size={"25px"}  id='ico' /> <p> BeautySalon@gmail.com</p>
                </li>
                  <li><FaPhoneAlt size={"25px"} id='ico'/> <p>+91-8619686448</p></li>
                  <li><FaRegAddressBook size={"25px"} id='ico'/> <p>Dev Nagar Pal Link Road Jodhpur</p></li>
           </ul>
       </div>
       <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label> Name</label>
                <input type="text" name="name" id="name" placeholder='Enter you name' required />
                <label>Phone Number</label>
                <input type="tel" name="phone" id="phone" placeholder='Enter you mobile number' required/>
                <label>Subject</label>
                <input type="text" name="subject" id="subject" placeholder='Enter you subject' required/>
                <label>Write your message here</label>
                <textarea name="message" id="message" rows={6} placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn' id='submit' onSubmit={onSubmit}>Send</button>
            </form>
            <span className='sending'>{result}</span>
       </div>
    </div>
  )
}

export default Contact