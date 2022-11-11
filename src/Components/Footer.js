import React from 'react'
import './css/Footer.css'

const Footer = () => {
  return (
    <>
    <div className="container-fluid footermain p-2">
       
       <div className="footermid">
           <div className="footerbottm">
             <div className="fbleft">
                <li className='my-3'><a  href="">Home</a></li>
                <li className='my-3'><a  href="">Board of Director</a></li>
                <li className='my-3'><a  href="">Principal</a></li>
                <li className='my-3'><a  href="">Gallery</a></li>
             </div>
             <div className="fbright">
             <li className='my-3'><a  href="">About Us</a></li>
                <li className='my-3'><a  href="">Academic</a></li>
                <li className='my-3'><a  href="">Facilities</a></li>
                <li className='my-3'><a  href="">Contact Us</a></li>
             </div>
           </div>

           <div className="fbottom">
            <p>11, Rambha Nagar, Dig Bunglow,</p>
            <p>Berasia Road, Bhopal - 462001, Near Masjid</p>
           </div>
       </div>

       <div className="footerleft">
         <div className="logo">
            <img src="./images/logo.png" alt="" />
         </div>
       </div>
       <div className="fbright">
            <div className="socialmedia1">
            <i class="ri-facebook-fill"></i>
            <i class="ri-linkedin-box-fill"></i>
            <i class="ri-youtube-line"></i>
            </div>
            <div className="seacrch">
                <input className='aa' type="search" />
                <div className="btn btn-lg" style={{backgroundColor:"white"}}>
                <i class="ri-search-line"></i>
                </div>
            </div>
            <div className="copyright mt-2">
              <p id='copyr'>© Made withby Maitretech</p>
            </div>
       </div>





    </div>
    
    
    
    
    
    </>
  )
}

export default Footer