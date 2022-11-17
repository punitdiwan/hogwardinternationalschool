import React from "react";
import NobleSidebar from "./NobleSidebar";

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
          <div className="ourschoolboardeft px-0 text-left">
            <div className="princd">
              <div className="photos">
                <img src="./images/princ.jpeg" alt="" />
                <div className="phname">
                  <b>Principal</b> - Mrs. Prabha Devra
                </div>
              </div>

              <div className="director_mess">
                <h5>
                  <b>Principal Message -</b>
                </h5>
                <p>
                  Warm Greeting from Hogwarts International school family, we firmly believed
                  that school education lays the foundation for the future of
                  the students and ensure a stable. According to the words of Swami Vivekanand "Arise, awake
                  and stop not till the goal is reached" echo in my mind. The
                  School activities are planned and prepared meticulously,
                  Our mission is to produce educated smart and confident
                  citizens of India.
                </p>
              </div>
            </div>
            <p>
              <b>Dear Parents, Students, and Visitors:</b>
            </p>
            <p>
              <i>Hogwarts International School</i>
            </p>
            <p>
              Welcome to the Hogwarts International School. As we embark into a
              new journey of growth and learning, we will
              be able to take our school to the next level. At our end, we shall
              continue working with you for the best interests of our beloved
              students and our community at large.
            </p>
             
            <p>
              Nothing can be more effective in motivating the students and
              sustaining success in the school than celebrating the students’
              accomplishments. Celebrating success in the school system
              regularly breeds more success. It invites every student, teacher,
              and parent to join the team to celebrate improvements in
              academics, character, and leadership.
            </p>
            {/* <p>
              Nothing can be more effective in motivating the students and
              sustaining success in the school than celebrating the students’
              accomplishments. Celebrating success in the school system
              regularly breeds more success. It invites every student, teacher,
              and parent to join the team to celebrate improvements in
              academics, character, and leadership.
            </p> */}
            <p>
              As the Hogwarts International School principal, I am more than
              willing to do all it takes to make our school an outstanding
              institution, where our students are nurtured through mind, body,
              and soul. Such a mission will not be possible to accomplish
              without the full support and cooperation of our parent body and
              community at large. Hence, should you have any suggestions or
              constructive feedback, do not hesitate to contact me by email or
              phone.
            </p>
            <p>We look forward to serving you and your children.</p>
            <p>
            </p>
            <p>
              <b>Mrs Prabha Devra, Principal -</b>
            </p>
            {/* <p>Hogwarts International School</p> */}
            <p>
              Sekdakhedi fourlane road , Sehore, Madhya Pradesh
              466001, India
              <p>School Phone: +91 8770553362 , +91 7772888558</p>
              <p>Fax: +91 7772888558</p>
            </p>
          </div>

          <div className="ourschoolright p-4">
            <NobleSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
