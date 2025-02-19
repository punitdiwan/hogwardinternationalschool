import React, { useState, useEffect } from "react";
import "./css/board.css";
import NobleSidebar from "./NobleSidebar";

const BoardD = () => {
  const [directorData, setDirectorData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cms.maitretech.com/hogwartsinternationalhighschool/items/director_message?fields=*.*');
        const data = await response.json();
        const directorInfo = {
          directorName: data.data[0].director_name,
          directorMessage: data.data[0].director_message,
          fullUrl: data.data[0].director_image.data.full_url,
        };
        setDirectorData(directorInfo);
      } catch (error) {
        console.error('Error fetching director message:', error);
      }
    };

    fetchData();
  }, []);

  if (!directorData) {
    return <p>Loading...</p>;
  }


  return (
    <>
      <div className="container-fluid p-0">


        <div className="container-fluid d-flex latest_card_box_ad pt-0">
          <div className="ourschoolboardeft px-3 text-left">
            <h4 className="kalurr mt-3" style={{ color: "black", fontWeight: "bold" }}>Board Of Director</h4>

            <div className="princd">
              <div className="photos">
                <img src={directorData.fullUrl?.replace('http://', 'https://')} />
                <div className="phname">
                  <b>Director</b>-   {directorData.directorName}
                </div>
              </div>

              <div className="director_mess">
                <h5>
                  <b>Director Message -</b>
                </h5>
                <p>
                  {directorData.directorMessage}

                </p>
              </div>


            </div>
            <p>
              <b>
                The Board of Directors is the main governing body of the
                Hogwarts Public school (HIS), the school administration, establishes
                strategic direction, financial resources, reviews policies, and
                responds to community needs. The school is committed to
                inculcating in all our students; strong ethical valued of
                integrity, respect and discipline as well as clarity in thought
                and decision-making ability, as a life-long process. In order to
                achieve all this, We follow a rigorous programme that is based
                upon the best educational practices,  Our state-of-the-art infrastructure, coupled
                with highly qualified and well-trained teachers, ensures that
                the students at Hogwarts Public school should be able to gain an enriching
                experience. Furthermore, it has been one of my quests in life to
                make high quality education available; accessible through the
                latest educational technology. The mission of the school is to
                develop responsible global citizens and leaders through academic
                excellence, We will be the foundation for a new generation of
                leaders and innovators, who will continue to pave the way for a
                better and brighter future for our world. The greatest strength
                of Hogwarts Public school is the high quality programmes and transparency in
                its system. We are fortunate to have a school community which
                includes talented teachers and supportive parents who work
                together to make Hogwarts Public school , an ideal place for our motivated
                students to learn and grow. We are always open to new ideas,
                inquiries and feedback, from all.  I welcome you to be a part of Hogwarts Public school
                family!
              </b>
            </p>
            <p>
              The HIS Board of Directors currently consists of the following
              members:
            </p>
            <table className="table table-bordered">
              <thead style={{ backgroundColor: "#1D4776", color: "white" }}>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {directorData.directorName}</td>
                  <td>Director</td>
                </tr>
                <tr>
                  <td>Mrs. Prabha Devra</td>
                  <td>Principal</td>
                </tr>

                {/* <tr>
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
                </tr> */}
              </tbody>
            </table>
          </div>

          <div className="ourschoolright p-4">
            <NobleSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardD;
