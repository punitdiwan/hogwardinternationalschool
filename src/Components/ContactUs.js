import React from "react";
import "./css/ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid p-4">
        {/* <div
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
        </div> */}

        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="contactleft map text-center">
            {/* <form>
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

              <button type="submit"  className="btn admcon">
                Submit
              </button>
            </form>
             */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2955357622263!2d77.10064031471185!3d23.19589791564918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf550a8b2260b%3A0xa175b01f30e61219!2sHogwarts%20international%20school!5e0!3m2!1sen!2sin!4v1668250565605!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Maps location of Hogwarts International School" // Added title for accessibility
            ></iframe>
          </div>

          <div className="contactright text-left">
            <div className="titlecontact">
              <h4 className="ssss">School</h4>
              <hr />
              <p className="linkwrap"><b className="bbb">Phone:</b> <a className="linkwrap mnc" href="tel:+91 8770553362">+91 8770553362</a> <a className="linkwrap mnc" href="tel:+91 7772888558">+91 7772888558</a></p>
              <p className="linkwrap"><b className="bbb">Fax:</b> <a className="linkwrap mnc" href="tel:8770553362">+91 8770553362</a> </p>
              <p className="linkwrap"><b className="bbb">Email:</b> <a className="linkwrap mnc" href="mailto: Hogwartsinternational339@gmail.com">Hogwartsinternational339@gmail.com</a> </p>
              {/* <p className="linkwrap"><b className="bbb">Website:</b> <a className="linkwrap mnc" href="">
            www.npsbhopal.com</a> </p> */}


            </div>
            {/* <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.2955357622263!2d77.10064031471185!3d23.19589791564918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf550a8b2260b%3A0xa175b01f30e61219!2sHogwarts%20international%20school!5e0!3m2!1sen!2sin!4v1668250565605!5m2!1sen!2sin" width="600" height="450"style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}

          </div>
        </div>
      </div>

    </>
  );
};

export default ContactUs;
