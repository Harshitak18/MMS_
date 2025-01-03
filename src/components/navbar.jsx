import React, { useState, useEffect } from "react";
import "../styleSheets/home.css";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { ThemeEffect } from "@/store/themeEffect";
import { useContext } from "react";


function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

const {handleBlur, blur} = useContext(ThemeEffect)

  useEffect(() => {
   console.log(typeof handleBlur)
    console.log( blur)
    // Trigger the sequential h4 animation on page load
    setIsLoaded(true);
  }, [blur]);

  const handleIconClick = () => {
    setIsClicked(!isClicked); // Toggle menu state
  };

  return (
    <div className="Navbar-Wrapper ">
     

      <div className={`navbar ${isClicked ? "clicked" : ""}`}>
        {/* Logo Section */}
        <div className="nav-left">
          <div className="nav-logo">
            <img src="logo11.png" alt="Logo" />
            <p>MMS</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className={`nav-mid ${isLoaded ? "loaded" : ""} ${isClicked ? "show" : ""}`}>
          {[
            {
              title: "HOME",
              links: [{ label: "Home" }],
            },
            {
              title: "WHO WE ARE",
              links: [
                { label: "Who We Are" },
                { label: "Our Client" },
              ],
            },
            {
              title: "WHAT WE DO",
              links: [
                { label: "What We Do" },
                { label: "Our Team" },
                { label: "Our Client" },
              ],
            },
            {
              title: "MORE",
              links: [
                { label: "Gallery" },
                { label: "Our Team" },
                { label: "Our Client" },
                { label: "Contact Us" },
              ],
            },
          ].map((section, index) => (
            <div className="mid" key={index} style={{paddingBottom:"20px"}}>
              <h4>{section.title}</h4>
              {section.links.map((link, idx) => (
                <div key={idx} >
                    
                    <h5>{link.label}</h5>
               
                </div>
              ))}
            </div>
          ))}
        </div>


        {/* Menu Icon */}
        <div className="nav-right">
        <button className="animate__animated animate__bounce animate__delay-0s">Let's Connect</button>
          <div className="nav-icon animate__animated animate__headShake animate__delay-1s" onClick={()=>{
            handleIconClick()
            handleBlur()
          }}>
          {isClicked===false && <RiMenu2Fill />}
          {isClicked===true && <RxCross1 />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
