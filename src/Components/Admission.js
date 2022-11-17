import React from 'react'
import "./css/Admission.css"

const Admission = () => {
  return (
    <>
    <div className="container-fluid mt-3 p-0">
        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="ladmleft p-5 text-center">
            <div className="title">
              <h1 className="my-3">Our School</h1>
              <p>
              LIS provides an Islamic learning environment with a commitment of using modern day teaching pedagogy to cultivate an advanced and comprehensive academic program; fully compliant with the Ontario curriculum of studies. We are a K to 8 school with a wide array of resources designed to foster student achievement that will prepare our pupils to pursue higher education and be competitive in their careers.
              </p>
            </div>
            <div className="readbutton p-2">
            <a className="btn btn-lg adm" href="">Read More</a>
        </div>
          </div>
          
          <div className="ladmright p-5 text-center">
            <div className="title">
              <h1 className="my-3">LIS Admissions</h1>
              <p className='mt-3'>
              The Hogwarts International School gives a fair and equal chance to all applicants who fulfill the admission requirements; dependent upon space availability. To determine admission eligibility for students transferring from another school, official report cards as well as other supporting documents are submitted upon application.
              </p>
            </div>
            <div className="readbutton p-2">
            <a className="btn btn-lg adm mt-5" href="">Read More</a>
        </div>
          </div>
        </div>


       
      </div>
    
    
    
    </>
  )
}

export default Admission