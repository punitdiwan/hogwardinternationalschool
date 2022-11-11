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
                src="./images/home2.jpg"
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
                <em>Assalamu Alaikum Warahmatullahi Wa Barakatuh.</em>
              </p>
            </b>
            <b>
              <p>
                <em>
                  Noble Public School (NPS) was founded in 1996 as a full-time
                  private school, owned and operated by the Indian Muslim
                  Mosque, serving the Indian community in the city of Indian and
                  beyond. Since its inception, LIS has consistently grown year
                  after year and has gained a reputation of becoming a leading
                  Muslim educational institute which aims to instill an Indian
                  morale and a genuine desire of learning in each of its
                  students.
                </em>
              </p>
            </b>
            <h5>LIS is proud to offer:</h5>
            <ul>
              <li>LIS is proud to offer:</li>
              <li>A great Indian environment for growing and learning</li>
              <li>Indian Studies, CBSC, and programs</li>
              <li>
                Arabic department offering Arabic as a Foreign Language program
              </li>
              <li>and much more…</li>
            </ul>
            <p>
              We encourage all community members to discover the possibilities
              at the Noble Public School!
            </p>
          </div>

          

          <div className="ourschoolright p-4">
          <NobleSidebar/>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSchool;
