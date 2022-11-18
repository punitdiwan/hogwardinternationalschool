import React from 'react'
import "./css/Gallery.css"

const Gallery = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="first">
            <div className="one">
                <img src="./images1/g1.webp" alt="" />
            </div>
            <div className="one">
                <img src="./images1/g2.webp" alt="" />
            </div><div className="one">
                <img src="./images1/g8.webp" alt="" />
            </div><div className="one">
                <img src="./images1/g4.webp" alt="" />
            </div>
        </div>
        <div className="first">
            <div className="one">
                <img src="./images1/c2.webp" alt="" />
            </div>
            <div className="one">
                <img src="./images1/g6.webp" alt="" />
            </div><div className="one">
                <img src="./images1/g7.webp" alt="" />
            </div><div className="one">
                <img src="./images1/army.webp" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Gallery