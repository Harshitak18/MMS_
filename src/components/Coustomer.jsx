import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function Coustomer() {
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animation for boxRef (left-1)
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        x: "-200%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out", // Smooth easing for the entry animation
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 50%", // Animation starts when the top of the element reaches 50% of the viewport height
          end: "bottom 60%", // Animation ends when the bottom of the element is 60% into the viewport
          scrub: true, // Makes the animation responsive to scroll
        },
      }
    );

    // Animation for boxRef2 (left-2)
    gsap.fromTo(
      boxRef2.current,
      {
        opacity: 0,
        x: "-80%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxRef2.current,
          start: "top 50%", // Animation starts when the top of the element reaches 50% of the viewport height
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Animation for boxRef3 (right-1)
    gsap.fromTo(
      boxRef3.current,
      {
        opacity: 0,
        x: "80%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxRef3.current,
          start: "top 50%", // Animation starts when the top of the element reaches 50% of the viewport height
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    // Animation for boxRef4 (right-2)
    gsap.fromTo(
      boxRef4.current,
      {
        opacity: 0,
        x: "200%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxRef4.current,
          start: "top 50%", // Animation starts when the top of the element reaches 50% of the viewport height
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  // Container background change effect on scroll
  useEffect(() => {
    gsap.to(".page", {
      stagger: 2,
      duration: 1,
      ease: "power3.inOut",
      background: "rgb(177, 177, 236)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: false,
        pin: true,
        pinSpacing: false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="Our-Coustomer page ">
      <div className="left">
        <div ref={boxRef} className="left-1">
          <img src="logo1.png" alt="" />
          <img src="logo2.png" alt="" />
        </div>
        <div ref={boxRef2} className="left-2">
          <img src="logo4.png" alt="" />
          <img src="logo3.png" alt="" />
          <img src="logo5.png" alt="" />
        </div>
      </div>
      <div className="mid">
        <div className="mid-text">
          <p className="gsapAnim">JOIN THE BEST</p>
          <h1 className="gsapAnim2">
            Powering 100,000+ of the best Coustomer experiences
          </h1>
        </div>
        <div className="button">
          <button className="button1">Free trial</button>
          <button className="button2">Get a demo</button>
        </div>
      </div>
      <div className="right">
        <div ref={boxRef3} className="right-1">
          <img src="logo6.png" alt="" />
          <img src="logo7.png" alt="" />
          <img src="logo8.png" alt="" />
        </div>
        <div ref={boxRef4} className="right-2">
          <img src="logo3.png" alt="" />
          <img src="MMS.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Coustomer;
