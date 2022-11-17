import React from 'react'
import "./css/Gallery.css"

const Gallery = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="first">
            <div className="one">
                <img src="./images/g1.jpeg" alt="" />
            </div>
            <div className="one">
                <img src="./images/g2.jpeg" alt="" />
            </div><div className="one">
                <img src="./images/army.jpg" alt="" />
            </div><div className="one">
                <img src="./images/g4.jpeg" alt="" />
            </div>
        </div>
        <div className="first">
            <div className="one">
                <img src="./images/g5.jpg" alt="" />
            </div>
            <div className="one">
                <img src="./images/g6.jpeg" alt="" />
            </div><div className="one">
                <img src="./images/g7.jpeg" alt="" />
            </div><div className="one">
                <img src="./images/g8.jpeg" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Gallery