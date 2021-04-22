import React from "react";

import "./topCard.css";

import MostPickedCard from "../MostPickedCard";

const TopCard = () => {
  return (
    <div className="players-div">
      <div className="top-5-div">
        {" "}
        <div className="cardHeader">
          <h2>Top 5</h2>
        </div>
        <hr class="solid" />
        <div className="high-low">
          <div>
            <p>Highest avg age</p>
            <div className="highest-cards">
              <div className="team">
                <p>Inter Milan</p> <p className="team-points">31.9</p>{" "}
              </div>
              <div className="team">
                <p>AC Milan</p> <p className="team-points">31.8</p>{" "}
              </div>
              <div className="team">
                <p>APOEL Nicosia</p> <p className="team-points">31.7</p>{" "}
              </div>
              <div className="team">
                <p>Besiktas JK</p> <p className="team-points">31.6</p>{" "}
              </div>
              <div className="team">
                <p>Piraeus</p> <p className="team-points">31.5</p>{" "}
              </div>
            </div>
          </div>
          <div>
            <p>Lowest avg age</p>
            <div className="lowest-cards"></div>
          </div>
        </div>
      </div>

      <MostPickedCard />
    </div>
  );
};

export default TopCard;
