import React, { useState, useRef } from "react";
import "./ExpandingCards.css";

const NUM_PANELS = 5;

const images = [];
for (let i = 0; i < NUM_PANELS; i++) {
  images.push(
    `http://source.unsplash.com/random/${
      Math.floor(Math.random() * 100) + 300
    }x${Math.floor(Math.random() * 100) + 300}`
  );
}

function ExpandingCards() {
  const [activePanelIndex, setActivePanelIndex] = useState();

  const handleOnClick = (index) => {
    setActivePanelIndex(index);
  };

  const renderedPanels = [];

  for (let i = 0; i < NUM_PANELS; i++) {
    renderedPanels.push(
      <div
        className={`panel ${activePanelIndex === i ? "active" : ""}`}
        style={{
          backgroundImage: `url(${images[i]})`,
        }}
        onClick={() => handleOnClick(i)}
      >
        <h3>Text Here</h3>
      </div>
    );
  }

  return (
    <section className="ExpandingCards">
      <div className="container">{renderedPanels}</div>
    </section>
  );
}

export default ExpandingCards;
