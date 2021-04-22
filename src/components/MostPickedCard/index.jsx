import React from "react";

import "./mostPickedCard.css";

const MostPickedCard = () => {
  return (
    <div className="picked-players">
      {" "}
      <div class="field-line">
        <div class="field-circle" />
        <div class="most-picked-border" />
        <div class="most-picked"></div>
        <div class="less-picked"></div>
      </div>
    </div>
  );
};

export default MostPickedCard;
