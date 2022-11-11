import React from "react";
import "./css/LatestNews.css";

const LatestNews = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="heading">Latest News</div>
        <div className="container-fluid px-5 d-flex latest_card_box">
          <div className="lnewsleft p-3">
            <div className="card_img">
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
            <div className="card_img">
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
            <div className="card_img">
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
            <a className="btn btn-lg kop px-5 py-3" href="">View all New</a>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
