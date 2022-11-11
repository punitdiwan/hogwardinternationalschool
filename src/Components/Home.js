import React from "react";
import "./css/BannerS.css";
import "./css/LatestNews.css";
import "./css/Admission.css";
import "./css/HlastSection.css";
import { NavLink } from "react-router-dom";

const BannerSection = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img
                class="d-block slideimage"
                src="./images/slide1.jpg"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h1>Noble Public School</h1>
                <p>
                  Embracing state-of-the-art technology in our classrooms allows
                  LIS to facilitate 21st century teaching and learning for its
                  teachers and students.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block slideimage"
                src="./images/slide4.jpg"
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h1>Dynamic Educators</h1>
                <p>
                  Providing an enriching experience for the academic, social,
                  and spiritual growth of our students. Each of our educators
                  believe in cultivating the strengths of all pupils, ensuring
                  that every student will succeed!
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block slideimage"
                src="./images/slide5.jpg"
                alt="Third slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h1>Hands-on learning</h1>
                <p>
                  Since its inception, NPS has consistently grown year after
                  year and has gained a reputation of becoming a leading Muslim
                  educational institute.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block slideimage"
                src="./images/slide6.jpg"
                alt="Fourt slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h1>Safe and Caring Environment</h1>
                <p>
                  Feeling safe and cared for is what makes our school community
                  a complete family!
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block slideimage"
                src="./images/slide7.png"
                alt="Fifth slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h1 className="">21st Century Education</h1>
                <p>
                  Embracing state-of-the-art technology in our classrooms allows
                  LIS to facilitate 21st century teaching and learning for its
                  teachers and students.
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon jj"
              aria-hidden="true"
            ></span>
            <span class="sr-only"></span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              class="carousel-control-next-icon jj"
              aria-hidden="true"
            ></span>
            <span class="sr-only"></span>
          </a>
        </div>
      </div>

      {/* Latest New Section---------------------- */}

      <div className="container-fluid p-0">
        <h1 className="heading1 ada">Latest News</h1>

        <div className="container-fluid px-5 d-flex latest_card_box">
          <div className="lnewsleft p-3">
            <div className="card_img1">
              <img src="./images/card1.jpg" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3">Launchbox Orders</h3>
              <p>
                Hot Lunch orders just got easier! We have now moved our hot
                lunch ordering system to a strictly online platform managed by
                Lunchbox Orders. Visit Lunchboxorders.com to
              </p>
            </div>
          </div>
          <div className="lnewsmid p-3">
            <div className="card_img1">
              <img src="./images/card2.jpg" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3">LIS Islamic Studies Curriculum</h3>
              <p>
                Our New Islamic Studies Curriculum has been launched this year!
                We are proud to offer a curriculum that is inclusive of in-depth
                knowledge, hands-on activities, critical thinking, and
              </p>
            </div>
          </div>
          <div className="lnewsright p-3">
            <div className="card_img1">
              <img src="./images/card3.png" alt="" />
            </div>
            <div className="title">
              <h3 className="my-3">We are the Champions</h3>
              <p>
                The Noble Public School won the Healthy Living Champions Gold
                Award! Remember how hard our school worked together on physical
                activity, healthy eating, and mental
              </p>
            </div>
          </div>
        </div>

        <div className="latestbutton p-2">
          <a className="btn btn-lg kop px-5 py-3" href="">
            View all New
          </a>
        </div>
      </div>

      {/* Admission Section ---------- */}

      <div className="container-fluid mt-3 p-0">
        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="ladmleft p-5 text-center">
            <div className="title">
              <h1 className="my-3">
                Our <span style={{ color: "yellow" }}>School</span>
              </h1>
              <p>
                LIS provides an Islamic learning environment with a commitment
                of using modern day teaching pedagogy to cultivate an advanced
                and comprehensive academic program; fully compliant with the
                Ontario curriculum of studies. We are a K to 8 school with a
                wide array of resources designed to foster student achievement
                that will prepare our pupils to pursue higher education and be
                competitive in their careers.
              </p>
            </div>
            <div className="readbutton p-2">
              <a className="btn btn-lg adm px-5 py-3" href="">
                Read More
              </a>
            </div>
          </div>

          <div className="ladmright p-5 text-center">
            <div className="title">
              <h1 className="my-3">
                <span style={{ color: "yellow" }}>Lis </span>Admission
              </h1>
              <p className="mt-3">
                The Noble Public School gives a fair and equal chance to all
                applicants who fulfill the admission requirements; dependent
                upon space availability. To determine admission eligibility for
                students transferring from another school, official report cards
                as well as other supporting documents are submitted upon
                application.
              </p>
            </div>
            <div className="readbutton p-2">
              <a className="btn btn-lg adm px-5 py-3 mt-5" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Home LAst Section ------------ */}

      <div className="container-fluid p-0">
        <div className="container-fluid p-0  d-flex latest_card_box_hls">
          <div className="hlsleft">
            <div className="ccc1_img">
              <img src="./images/home1.jpg" alt="" />
            </div>
            <div className="ccc2_img">
              <img src="./images/home2.jpg" alt="" />
            </div>
          </div>
          <div className="hlsmid text-center p-5">
            <div className="card_img my-5">
              <img src="./images/logo.png" alt="" />
            </div>
            <div className="title1 my-5">
              <div className="hlstbutton">
                <a
                  className="btn btn-lg kop px-3 py-2"
                  href=""
                  style={{ backgroundColor: "#2E63B1" }}
                >
                  Student Life
                </a>
                <a
                  className="btn btn-lg kop px-3 py-2"
                  href=""
                  style={{ backgroundColor: "#21D4776" }}
                >
                  Admission
                </a>
              </div>
            </div>

            <p>
              At the Noble Public School, we believe in giving our students a
              voice and instilling in them a passion to be involved with their
              school community. It is evident that students are at the forefront
              of understanding the needs of making their school into an
              environment that promotes a safe and healthy learning environment.
              For this reason, LIS is committed in providing a well balanced
              spiritual, academic and social well-being experience for it’s
              students. Students are encouraged to hone their talents in order
              to serve and participate in and beyond our community.
            </p>
            <div className="title1">
              <div className="hlstbutton">
                <a
                  className="btn btn-lg hls px-4 py-3"
                  href=""
                  style={{ backgroundColor: "#2E63B1" }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="hlsright">
            <div className="ccc2_img">
              <img src="./images/home3.jpg" alt="" />
            </div>
            <div className="ccc1_img">
              <img src="./images/home4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
