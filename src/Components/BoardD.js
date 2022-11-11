import React from "react";
import "./css/board.css";
import NobleSidebar from './NobleSidebar';

const BoardD = () => {
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
                src="./images/bod.png"
                alt="First slide"
              />
              <div className="container position-absolute ourschoolboard">
                <h1>BOARD OF DIRECTORS</h1>
                <p>Home / BOARD OF DIRECTORS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex latest_card_box_ad pt-0">
          <div className="ourschoolboardeft px-3 text-left">
            <p>
              <b>
                The Board of Directors is the main governing body of the Noble
                Public School (NPS), as mandated by the bylaws of the Indian
                Muslim Mosque. the school administration, establishes strategic
                direction, financial resources, reviews policies, and responds
                to community needs.
              </b>
            </p>
            <p>
              The LIS Board of Directors currently consists of the following
              members:
            </p>
            <table class="table table-bordered">
              <thead style={{ backgroundColor: "#1D4776", color: "white" }}>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mr. John Doe</td>
                  <td>Chair (LMM Representative)</td>
                </tr>
                <tr>
                  <td>Mr. John Doe</td>
                  <td>Director (LMM Representative)</td>
                </tr>
                <tr>
                  <td>Mr. John Doe</td>
                  <td>Director (LMM Representative)</td>
                </tr>
                <tr>
                  <td>Mr. John Doe</td>
                  <td> Director (Community Representative)</td>
                </tr>
                <tr>
                  <td>Mr. John Doe</td>
                  <td>Director (Community Representative)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ourschoolright p-4">
          <NobleSidebar/>
          </div>

        </div>
      </div>
    </>
  );
};

export default BoardD;
