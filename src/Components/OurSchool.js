import React from "react";
import "./css/ourschool.css";
import NobleSidebar from "./NobleSidebar";

const OurSchool = () => {
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
                src="./images/slide2.jpeg"
                alt="First slide"
              />
              <div className="container position-absolute ourschool">
                <h1>OUR SCHOOL</h1>
                <p>Home / OUR SCHOOL</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="ourschooleft p-5 text-left">
            <b>
              <p>
                <em>Hogwarts International School.</em>
              </p>
            </b>
            <b>
              <p>
                <em>
                  Hogwarts International School (HIS) was founded in 2017
                  asSchool is one of the oldest schools for both girls and boys
                  managed by  Hogwarts Group. Hogwarts School Group is run by Dr. Gagan Namdev Ji. Our institution is recogniged by the Madhya
                  Pradesh Board of education.We, Hogwarts School, understand
                  that each child is a distinct individual who needs to be
                  nurtured in order to grow into a mature and responsible
                  citizen. Our academic infrastructure along with a wide range
                  of co-curricular activities help our students in the all round
                  personality development. We have a strong team of motivated
                  teachers who are always ready to accept challenges of
                  developing the potential of each and every student. Keeping in
                  view the ideas of democracy and our ancient culture, Hogwarts School
                  strives to provide a system of education most suited to the
                  needs of our society today. Stress on innovative methods of
                  teaching , opportunities for shouldering responsibilities
                  during school life, constant participation in sports and
                  co-curricular activities lend meaning to the school life.
                  Thus, the end product is the harmonious, all round developed
                  personality of our students poised on the threshold of life.
                </em>
              </p>
            </b>
            <h5>Hogwarts International Schoolis proud to offer:</h5>
            <ul>
              <li>Hogwarts International School is proud to offer:</li>
              <li>A great Indian environment for growing and learning</li>
              {/* <li>Indian Studies, CBSC, and programs</li> */}
             
              <li>and much more…</li>
            </ul>
            <p>
              We encourage all community members to discover the possibilities
              at the Hogwarts International School!
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

export default OurSchool;
