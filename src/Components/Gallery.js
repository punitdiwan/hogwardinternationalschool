import React from 'react'
import "./css/Gallery.css"

const Gallery = () => {
  return (
    <>
    <div class="container-fluid">
        <div className="first">
            <div className="one">
                <img src="./images/g1.jpg" alt="" />
            </div>
            <div className="one">
                <img src="./images/g2.jpg" alt="" />
            </div><div className="one">
                <img src="./images/g3.jpg" alt="" />
            </div><div className="one">
                <img src="./images/g4.jpg" alt="" />
            </div>
        </div>
        <div className="first">
            <div className="one">
                <img src="./images/g5.jpg" alt="" />
            </div>
            <div className="one">
                <img src="./images/g6.jpg" alt="" />
            </div><div className="one">
                <img src="./images/g7.jpg" alt="" />
            </div><div className="one">
                <img src="./images/g8.jpg" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Gallery