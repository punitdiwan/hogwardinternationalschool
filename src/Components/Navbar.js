import React from 'react'
import './css/Navbar.css'


const Navbar = () => {
  return (
    <>
    <div className="container-fluid navmain p-2">
       <div className="navleft">
         <div className="logo">
            <img src="./images/logo.png" alt="" />
         </div>
       </div>
       <div className="navmid">
           <h1><span id='firsth'>N</span>OBLE <span id="firsth">P</span>UBLIC SCHOOL</h1>
           <p>Learning today. Leading tomorrow. Inspired Forever.</p>
       </div>
       <div className="navright">
            <div className="socialmedia">
            <i class="ri-facebook-fill"></i>
            <i class="ri-linkedin-box-fill"></i>
            <i class="ri-youtube-line"></i>
            </div>
            <div className="seacrch">
                <input className='aa' type="search" />
                <div className="btn btn-lg" style={{backgroundColor:"#F8D34D"}}>Search</div>
            </div>
           

       </div>





    </div>
    
    
    
    
    
    </>
  )
}

export default Navbar