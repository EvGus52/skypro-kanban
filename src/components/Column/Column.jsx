import React from "react";

const Column = ({ title, children }) => (
  <div className="main__column column">
    <div className="column__title">
      <p>{title}</p>
    </div>
    <div className="cards">{children}</div>
  </div>
);

export default Column;
