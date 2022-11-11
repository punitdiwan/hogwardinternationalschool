import React from "react";

const NobleSidebar = () => {
  return (
    <>
      <div className="rightbad">
        <div className="searchbox">
          <input type="search" style={{ border: "1px solid #D1D5DB" }} />
          <button className="btn btn-lg">
            <i class="ri-search-line"></i>
          </button>
        </div>

        <button className="nobaa mt-5">NOBLE PUBLIC SCHOOL</button>
        <div className="nobaa nobaaa">
          <div
            class="btn btn-light nobaaa1 "
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            <a href="">Home</a>
          </div>

          <div
            class="btn btn-light nobaaa1 dropdown-toggle"
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
              
            }}
            id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
          >
          
            <a href="">About Us</a>
          </div>
          <div
                  class="dropdown-menu p-0"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="#">
                    OUR SCHOOL
                  </a>
                  <a class="dropdown-item" href="#">
                    BOARD OF DIRECTOR
                  </a>
                  <a class="dropdown-item" href="#">
                    PRINCIPAL
                  </a>
                </div>

          <div
            class="btn btn-light nobaaa1 "
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            <a href="">ACADEMIC</a>
          </div>
          <div
            class="btn btn-light nobaaa1 "
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            <a href="">GALLERY</a>
          </div>
          <div
            class="btn btn-light nobaaa1 "
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "#797A7B",
              borderRadius: "2px",
            }}
          >
            <a href="">CONTACT US</a>
          </div>


          <div
            class="btn btn-light nobaa text-center nobaaa1 mt-4 "
            type="button"
            style={{
              border: "1px solid #797A7B",
              color: "white",
              borderRadius: "2px",
            }}
          >
            <a>Did You Know?</a>
          </div>
          <div
                  class="btn btn-sm p-3 didyou"
                  type="button"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                >
                  The Nobile Public School was the first educational institute
                  in London, ON to offer Islamic Education
                </div>

        </div>
      </div>

      {/*  <div className="ourschoolright p-4"> 
              <div className="seacrch">
                <input
                  className="aa"
                  style={{ border: "1px solid #D1D5DB" }}
                  type="search"
                />
                <div
                  className="btn btn-lg"
                  style={{
                    backgroundColor: "white;",
                    border: "1px solid #D1D5DB",
                  }}
                >
                  
                </div>
              </div>
              <div className="navser mt-3">
                <a className="btn btn-lg px-5 noblebtn"></a>
                <a
                  class="btn btn-light"
                  type="button"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                >
                  Home
                </a>

                <a
                  class="btn btn-light dropdown-toggle"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ABOUT US
                </a>
                <div
                  class="dropdown-menu p-0"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="#">
                    OUR SCHOOL
                  </a>
                  <a class="dropdown-item" href="#">
                    BOARD OF DIRECTOR
                  </a>
                  <a class="dropdown-item" href="#">
                    PRINCIPAL
                  </a>
                </div>
                <a
                  class="btn btn-light"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                  type="button"
                >
                  FACILITIES
                </a>

                <a
                  class="btn btn-light"
                  type="button"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                >
                  GALLERY
                </a>
                <a
                  class="btn btn-light"
                  type="button"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                 

                    
                  }}
                >
                  CONTACT US
                </a>

                <a className="btn btn-lg px-5 noblebtn mt-5">DID YOU KNOW?</a>
                <div
                  class="btn btn-sm p-3 didyou"
                  type="button"
                  style={{
                    border: "1px solid #797A7B",
                    color: "#797A7B",
                    borderRadius: "2px",
                  }}
                >
                  The Nobile Public School was the first educational institute
                  in London, ON to offer Islamic Education
                </div>
              </div>
            </div>
          </div>
    
     */}
    </>
  );
};

export default NobleSidebar;
