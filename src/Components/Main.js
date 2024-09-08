import React from "react";
import "./main.css";
import "../mainbg1.png";
import "../mainbg2.png";
import "../mainbg3.png";
const Main = () => {
  return (
    <div className="main">
      <div className="writing-section">
        <h1>Your Title</h1>
        <p>
          Your text goes here. This section can hold a small amount of writing.
        </p>
      </div>
      <div className="images-section">
        <img src="../mainbg1.png" alt="1" />
        <img src="../mainbg2.png" alt=" 2" />
        <img src="../mainbg3.png" alt=" 3" />
      </div>
    </div>
  );
};

export default Main;
