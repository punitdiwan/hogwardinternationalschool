import React from 'react'
import NobleSidebar from './NobleSidebar';

const Principal = () => {
  return (
    <>
    <div className="container-fluid p-0">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                className="d-block slideimage"
                src="./images/Principals.jpg"
                alt="First slide"
              />
              <div className="container position-absolute ourschool">
                <h1>OUR SCHOOL</h1>
                <p>Home / OUR SCHOOL</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid latest_card_box_ad p-5">
          <div className="ourschoolboardeft px-5 text-left">
            <p>
              <b>
              Dear Parents, Students, and Visitors:
              </b>
            </p>
            <p>
                <i>Assalamu Alaikum Warahmatullahi Wa Barakatuh.</i>
            </p>
            <p>Welcome to the Noble Public School. As we embark into a new journey of growth and learning, we are more than certain that with the help of Allah (SWT) and your continuous support, we will be able to take our school to the next level. At our end, we shall continue working with you for the best interests of our beloved students and our community at large.</p>
            <p>LIS provides environment with a commitment of using modern day teaching pedagogy to cultivate an advanced and comprehensive academic program; fully compliant with the Ontario curriculum of studies. We are a K to 8 school with a wide array of resources designed to foster student achievement that will prepare our pupils to pursue higher education and be competitive in their careers. It is our aim to empower our students by cultivating their interests and honing their academic skills as strong Indian-Muslim citizens in India.</p>
            <p>As we are starting a new phase of our long journey towards knowledge and prosperity, we wish to take this opportunity to thank the Indian Muslim Mosque and the NPS School Board for their continuous help and support. We wish also to thank our committed and dedicated staff, parent-teacher association, and volunteers for their tireless efforts and ongoing dedication to the betterment of our school.</p>
            pOur staff and administration are committed to helping each and every student work to their full potential. Our school strives in placing a high emphasis on balanced literacy, numeracy, inquiry-based learning, and outdoor education. As well as attending to the needs of students who are experiencing difficulties in certain subject areas, and for students who are achieving above grade levels.
            <p>The school is committed to helping students become responsible for their own actions. Our code of conduct is meant to help them reflect upon their own actions and draw conclusions and lessons for the future. A variety of progressive discipline strategies are in place and will be applicable as required.</p>
            <p>Nothing can be more effective in motivating the students and sustaining success in the school than celebrating the students’ accomplishments. Celebrating success in the school system regularly breeds more success. It invites every student, teacher, and parent to join the team to celebrate improvements in academics, character, and leadership.</p>
            <p>Nothing can be more effective in motivating the students and sustaining success in the school than celebrating the students’ accomplishments. Celebrating success in the school system regularly breeds more success. It invites every student, teacher, and parent to join the team to celebrate improvements in academics, character, and leadership.</p>
            <p>As the Noble Public School principal, I am more than willing to do all it takes to make our school an outstanding institution, where our students are nurtured through mind, body, and soul. Such a mission will not be possible to accomplish without the full support and cooperation of our parent body and community at large. Hence, should you have any suggestions or constructive feedback, do not hesitate to contact me by email or phone.</p>
            <p>We look forward to serving you and your children.</p>
            <p><b>Yours in Learning,</b></p>
            <p><b>A. Choudhary, B.A, B.Ed, M.Ed, Ed.D (Candidate) Principal -</b></p>
            <p>Noble Public School</p>
            <p>11,Rambha Nagar, Dig Bunglow, Berasia Road, Bhopal - 462001, Near Masjid
                <p>School Phone: +91 9329993336</p>
                <p>Fax: +91 7000742886</p>

</p>
          </div>

        
          <div className="ourschoolright p-4">
          <NobleSidebar/>
          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default Principal