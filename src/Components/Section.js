import React from "react";
import "./section.css"; // Import the CSS file
import "../maindiv1.png";
import "../maindiv2.png";
const Section = () => {
  return (
    <div>
      {" "}
      <h1 className="sh1">
        Pretty Girls <span>Wear Rayo!!!!</span>
      </h1>
      <section className="section">
        <div className="image-note">
          <div className="image-wrapper">
            <img
              src="../maindiv1.png"
              alt="Accesory"
              className="responsive-img"
            />
          </div>
          <div className="note">
            <h3>Note Title 1</h3>
            <p>
              This is a note beside the first image. The content adjusts
              according to screen size, ensuring responsiveness.
            </p>
          </div>
        </div>
        <div className="image-note">
          <div className="image-wrapper">
            <img
              src="../maindiv2.png"
              alt="Accesory"
              className="responsive-img"
            />
          </div>
          <div className="note">
            <h3>Note Title 2</h3>
            <p>
              This is a note beside the second image. The layout changes for
              smaller screens to make the content more readable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
