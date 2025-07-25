import React from "react";

const Main = ({ children }) => (
  <main className="main center">
    <div className="main__block">
      <div className="main__content">{children}</div>
    </div>
  </main>
);

export default Main;
