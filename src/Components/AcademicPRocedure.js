import React from "react";
import BannerSection from "./BannerSection";
import "./css/Academisp.css";

const AcademicPRocedure = () => {
  return (
    <>
      <BannerSection />

      <div className="container-fluid p-0">
        <div className="container-fluid d-flex latest_card_box_add p-0">
          <div className="admssionleft p-5 text-left">
            <div className="card_img11">
              <img src="./images/carditem.png" alt="" />
            </div>
            <div className="title">
              <p>
                The Junior Champions LIS Preschool provides children with a
                play-based or emergent curriculum, which is child-centred and
                teacher framed.Our educators develop large and small group
                instruction as well as learning centres, based on observed
                student abilities, skills and interests.Age-appropriate
                instruction, activities, and/or centres will be provided to
                children daily in: India , Foundational Literacy and Numeracy,
                and Outdoor Learning.A strong focus is put on developing
                children’s self-regulation and growing independence within a
                caring and nurturing environment that considers children’s
                social, emotional, cognitive, physical and spiritual well being.
              </p>
              <h5>Age Requirement:</h5>
              <p>
                Parents interested in our preschool must ensure that their child
                meets the age requirements; children must be between the ages of
                2.5 to 6 years old to be eligible to apply.Parents are asked for
                their child’s proof of age at time of application.
              </p>
              <p>
                <b>Program Hours:</b>(excluding holidays and school breaks)
              </p>
              <p>
                <b>Full time:</b>Mondays to Fridays from 8: 15 a.m.until 4: 15
                p.m.
              </p>
              <p>
                <b>Part Time:</b>Mondays and Wednesdays plus alternating Fridays
                from 8: 15 a.m.to 4: 15 p.m. OR Tuesdays and Thursdays plus
                alternating Fridays from 8: 15 a.m.to 4: 15 p.m.
              </p>
              <p>
                Part time spots may be available if there is sufficient
                demand.Priority will be given to full time applicants.
              </p>
              <h5>Rest/Sleep time</h5>
              <p>
                The Ministry of Education requires that there be a scheduled
                rest period each day for preschoolers.Children will have the
                option of napping, resting or engaging in quiet
                activity.Educators will consider parent requests related to
                naps, but will follow child’s cues ultimately.
              </p>
              <h5>Outdoor Time:</h5>
              <p>
                The Ministry of Education requires that hildren spend at least
                two (2) hours per day outdoors, weather permitting.
              </p>
              <h5>Program Fees:</h5>
              <table class="table table-bordered">
                <thead style={{ backgroundColor: "#1D4776", color: "white" }}>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Annual Fees</th>
                    <th scope="col">Monthly – 12 Months</th>
                    <th scope="col">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Full time</td>
                    <td>$11,040</td>
                    <td>$920/month</td>
                    <td> September to August</td>
                  </tr>
                  <tr>
                    <td>Part time</td>
                    <td>$6,180</td>
                    <td>$515/month</td>
                    <td>September to August</td>
                  </tr>
                </tbody>
              </table>

              <h5>Registration Fee</h5>
              <p>
                A non-refundable registration fee of $100 must be paid at the
                time of registration.This fee is for families new to LIS.
              </p>
              <h6>Junior Champions Preschool Handbook</h6>
              <p>
                Each year, the Junior Champions Preschool publishes a parent
                handbook which is available to the public.Our handbook
                highlights all details of our program and can be accessed by
                clicking below:
              </p>
              <h5 style={{ color: "#3888BF" }}>
                Junior Champions Parent Handbook 2020-21
              </h5>
              <h5>
                For more information of our preschool program, please email
                Junior.Champions www.npsbhopal@gmail.com
              </h5>
            </div>
          </div>

          <div className="accdright p-5">
            <div className="card-image1">
              <img src="./images/g1.jpg" alt="..." class="img-thumbnail" />
              <img src="./images/g2.jpg" alt="..." class="img-thumbnail" />
              <img src="./images/g3.jpg" alt="..." class="img-thumbnail" />
              <img src="./images/g4.jpg" alt="..." class="img-thumbnail" />
              <img src="./images/g5.jpg" alt="..." class="img-thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicPRocedure;
