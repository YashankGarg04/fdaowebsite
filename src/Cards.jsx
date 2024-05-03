import React, { useEffect, useState } from "react";
import "./Cards.css"; // Import CSS for styling

const Card = () => {
  const [multisendVisible, setMultisendVisible] = useState(false);
  const [activatorVisible, setActivatorVisible] = useState(false);

  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.outerHeight || document.documentElement.clientHeight)
      );
    };

    // Function to handle scroll event

    const handleScroll = () => {
      const multisendCard = document.querySelector(".multisend");
      const activatorCard = document.querySelector(".activator");

      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition >= 1200) {
        setTimeout(() => setMultisendVisible(true), 0);
      }

      if (scrollPosition >= 1600) {
        setTimeout(() => setActivatorVisible(true), 0); // Set a delay of 5000ms (5 seconds) for activator card
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="centered-text">
        <h1>Dapps Powered By FDAO</h1>
        <div className="card-container">
          {/* First Card: MultiXender */}
          <div
            className={`card multisend ${multisendVisible ? "visible" : ""}`}
          >
            <div className="block1"></div>
            <div className="block2"></div>
            <div className="block3"></div>

            <div className="block4"></div>
            <div className="blockadd"></div>
          </div>

          <div
            className={`card activator ${activatorVisible ? "visible" : ""}`}
          >
            <div className="block6"></div>
            <div className="block7"></div>
            <div className="block8"></div>

            <div className="block5"></div>
            <div className="blockadd2"></div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Card;
