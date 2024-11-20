import React from 'react'
import imge3 from "../../assets/icon.png"
import { useState } from 'react'


const Footer = () => {



  const [inputValue, setInput] = useState("")
  const [showMessage, setShowMessage] = useState(false);



  const handleChange = (e) => {
      setInput(e.target.value)

  }

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(inputValue)
      setInput("")


      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
  }

  return (
    <footer>
    <div className='subscribe-section'>
        <img src={imge3} alt="" />
        <h4>Subscibe Newsletterr</h4>
        <p>Subscribe to our email and get updates right in your inbox</p>
        <form className='message-form' onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type='submit'>send</button>
            {showMessage && <p style={{color:"green"}}>Your data was submitted successfully!</p>}
        </form>
       


    </div>

    <div className='footer-contnet'>
        <div className='footer-h1'>
            <h1 className='footer-head'>Fashion <span>Era</span></h1>
            <p>There are many variations of <br /> passages of Lorem Ipsum available, <br />but the majority have suffered <br /> alteration in some,</p>
        </div>
        <div>
            <ul>
                <li>Help</li>
                <li>Privacy Policy</li>
                <li>Shipping & Delivery</li>
                <li>Refund Policy</li>
                <li>Track Your Order</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Store</li>
                <li>Men Fashion</li>
                <li>Women Fashion</li>
                <li>Kids Fashion</li>
                <li>Other</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>Support</li>
                <li>Feedback</li>
                <li>Contact us</li>
                <li>Download app</li>
                <li>Terms & condition</li>
            </ul>
        </div>
    </div>
</footer>
  )
}

export default Footer
