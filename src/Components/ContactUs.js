import React from "react";
import "./css/ContactUs.css";

const ContactUs = () => {
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
                src="./images/contact.jpg"
                alt="First slide"
              />
              <div className="container position-absolute contactt">
                <h1>CONTACT US</h1>
                <p>Home / CONTACT US</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="contactleft p-5 text-left">
            <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Name (required )</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email (required )</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Your Message</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit"  className="btn admcon px-5 py-2">
                Submit
              </button>
            </form>
            
          </div>

          <div className="contactright p-5 text-left">
            <div className="titlecontact">
              <h4 className="my-3">School</h4>
              <hr/>
                <p className="linkwrap"><b className="bbb">Phone:</b> <a className="linkwrap mnc">+91 9329993336</a> </p>
                <p className="linkwrap"><b className="bbb">Fax:</b> <a className="linkwrap mnc">+91 7000742886</a> </p>
                <p className="linkwrap"><b className="bbb">Email:</b> <a className="linkwrap mnc"href="">www.Noblepublicschool2001@gmail.com</a> </p>
                <p className="linkwrap"><b className="bbb">Website:</b> <a className="linkwrap mnc" href="">
            www.npsbhopal.com</a> </p>

                
            </div>
        
            
          </div>
        </div>
      </div>

    </>
  );
};

export default ContactUs;
