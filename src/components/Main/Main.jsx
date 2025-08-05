import React from "react";

const Main = ({ children }) => (
  <main className="main">
    <div className="container">
      <div className="main__block">
        <div className="main__content">{children}</div>
      </div>
    </div>
  </main>
);

export default Main;
