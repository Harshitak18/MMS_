import { ThemeEffect } from "@/store/themeEffect";
import React, { useContext } from "react";
import "animate.css";
function Header() {
  const { blur } = useContext(ThemeEffect);

  return (
    <div className={`heading ${blur ? "blur-sm" : "blur-none"}`}>
      <div className="left-heading">
        <h5 className="animate__animated animate__zoomInUp animate__delay-[0.1s] animate__slower 1s">
          Help The Needy Families
        </h5>
        <div className="text">
          <p className="animate__animated animate__zoomInUp animate__delay-[0.2s] animate__slower 1s">
          Bring light, spread peace, share happiness.
          </p>
          {/* <span className=" animate__animated animate__zoomInDown animate__delay-2s animate__slower 1s">change lives,</span>
          <span className="animate__animated animate__zoomInDown animate__delay-3s animate__slower 1s">spread love.</span> */}
        </div>
        <p className="para animate__animated animate__zoomInUp animate__delay-[0.4s]s animate__slower 1s">
        We help raise awareness and educate people through <br /> street plays, ASHA workers, and other community efforts.
        </p>
        <div className="bottom ">
          <div className="button">
            <button className="animate__animated animate__fadeInUp animate__delay-2s animate__slower 3s">
              Toggle Blur
            </button>
            {/* <button className="animate__animated animate__fadeInUp animate__delay-4s animate__slower 5s">Toggle Blur</button> */}
          </div>
          <div className="icons-img animate__animated animate__fadeInUp animate__delay-3s animate__slower 3s">
            <img src="logo3.png" alt="" />
            <img src="logo3.png" alt="" />
            <img src="logo6.png" alt="" />
            <img src="logo6.png" alt="" />
            <img src="logo6.png" alt="" />
            <img src="" alt="" />
            <div className="texts">
              <p className="absolute">100+</p>
              <p>Happy Families</p>
            </div>
          </div>
            <img src="arow.png" alt="" className="animate__animated animate__fadeInRight animate__delay-3s animate__slower 1s absolute w-[200px] left-[610px] bottom-[60px]" />
        </div>
      </div>
      <div className="right-img">
        <img src="hero4.png" alt="" />
      </div>
    </div>
  );
}
export default Header;
