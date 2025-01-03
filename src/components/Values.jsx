import React, { useRef, useEffect } from "react";
import { TiEye } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineBalance } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function Values() {
  // Create a ref for each card
  const cardRefs = useRef([]);
  cardRefs.current = [];

  // Add ref to each card dynamically
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    // GSAP animation for each card, triggered when the card enters the viewport
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          rotate: "0deg", // Initial state
          opacity: 0, // Start invisible
          y: 50, // Start below the viewport
        },
        {
          rotate: "360deg", // Final rotation
          opacity: 1, // Fade in
          y: 0, // Move to its normal position
          duration: 2, // Duration of the animation (2 seconds)
          delay: index * 0.5, // Delay each card's animation (to create a sequential effect)
          ease: "power2.out", // Smooth easing function
          scrollTrigger: {
            trigger: card, // Trigger the animation when the card enters the viewport
            start: "top 80%", // Start when 80% of the card is visible in the viewport
            end: "bottom 80%", // End when 20% of the card is visible in the viewport
            scrub: 1, // Smooth the animation with scroll (scrub value of 1)
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="Our-Values">
        <h1>OUR VALUES</h1>
        <div className="box">
          <div className="card-wrapper  text-white">
            <div ref={addToRefs} className="card c1">
              <img src="" alt="" />
              <FaHandshake className="text-5xl shadow-lg filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]" />
              <p>No Compromise On Values</p>
              <p>#1</p>
            </div>
            <div ref={addToRefs} className="card c2">
              <img src="" alt="" />
              <MdOutlineBalance className="text-5xl shadow-lg filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]" />
              <p>Balance</p>
              <p>#1</p>
            </div>
            <div ref={addToRefs} className="card c3">
              <img src="" alt="" />
              <GiRibbonMedal className="text-5xl shadow-lg filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]" />
              <p>High Standards</p>
              <p>#1</p>
            </div>
            <div ref={addToRefs} className="card c4">
              <img src="" alt="" />
              <GiMagnifyingGlass className="text-5xl shadow-lg filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]" />
              <p>Transparency</p>
              <p>#1</p>
            </div>
            <div ref={addToRefs} className="card c5">
              <img src="" alt="" />
              <FaUsers className="text-5xl shadow-lg filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]" />
              <p>Client First</p>
              <p>#1</p>
            </div>
            <div ref={addToRefs} className="card c6">
              <img src="" alt="" />
              <TiEye className="text-5xl shadow-lg filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]" />
              <p>Foresight</p>
              <p>#1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Values;
