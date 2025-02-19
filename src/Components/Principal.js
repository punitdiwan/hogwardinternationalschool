import React, { useState, useEffect } from "react";
import NobleSidebar from "./NobleSidebar";

const Principal = () => {
  const [principleData, setPrincipleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cms.maitretech.com/hogwartsinternationalhighschool/items/principle_message?fields=*.*');
        const data = await response.json();

        if (data && data.data && data.data.length > 0) {
          setPrincipleData(data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!principleData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container-fluid p-0">


        <div className="container-fluid latest_card_box_ad p-5">

          <div className="ourschoolboardeft px-0 text-left">

            <div className="princd">
              <div className="photos">
                {principleData.principle_image?.data?.full_url ? (
                  <img
                    src={principleData.principle_image.data.full_url?.replace('http://', 'https://')}
                    alt="Principal"
                  />
                ) : (
                  <div>No Image Available</div>
                )}
                <div className="phname">
                  <b>Principal</b>  {principleData.principle_name}
                </div>
              </div>

              <div className="director_mess">
                <h5>
                  <b>Principal Message -</b>
                  <h6>{principleData.principle_message || ''}</h6>

                </h5>
              </div>
            </div>
            {/* <h4 className="kalurr" style={{color:"black", fontWeight:"bold"}}>Our Principal</h4> */}

            <p>
              <b>Dear Parents, Students, and Visitors:</b>
            </p>
            <p>
              <i>Hogwarts International School</i>
            </p>
            <p>
              Welcome to the Hogwarts International School. As we embark into a
              new journey of growth and learning, we will
              be able to take our school to the next level. At our end, we shall
              continue working with you for the best interests of our beloved
              students and our community at large.
            </p>

            <p>
              Nothing can be more effective in motivating the students and
              sustaining success in the school than celebrating the students’
              accomplishments. Celebrating success in the school system
              regularly breeds more success. It invites every student, teacher,
              and parent to join the team to celebrate improvements in
              academics, character, and leadership.
            </p>
            {/* <p>
              Nothing can be more effective in motivating the students and
              sustaining success in the school than celebrating the students’
              accomplishments. Celebrating success in the school system
              regularly breeds more success. It invites every student, teacher,
              and parent to join the team to celebrate improvements in
              academics, character, and leadership.
            </p> */}
            <p>
              As the Hogwarts International School principal, I am more than
              willing to do all it takes to make our school an outstanding
              institution, where our students are nurtured through mind, body,
              and soul. Such a mission will not be possible to accomplish
              without the full support and cooperation of our parent body and
              community at large. Hence, should you have any suggestions or
              constructive feedback, do not hesitate to contact me by email or
              phone.
            </p>
            <p>We look forward to serving you and your children.</p>
            <p>
            </p>
            <p>
              <b>Mrs Prabha Devra, Principal -</b>
            </p>
            {/* <p>Hogwarts International School</p> */}
            <p>
              Sekdakhedi fourlane road , Sehore, Madhya Pradesh
              466001, India
              <p>School Phone: +91 8770553362 , +91 7772888558</p>
              <p>Fax: +91 7772888558</p>
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

export default Principal;
