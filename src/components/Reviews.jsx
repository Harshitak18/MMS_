
import React, { useRef } from "react";
import { useEffect } from "react";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

function Reviews() {


  
  return (
    
      <div  className="Our-Reviews ">
        <h1>Hear from Our Happy Clients</h1>
        <div className="card-wrapper">
          <div className="card">
            <img src="https://whydonate.com/cdn-cgi/imagedelivery/_0vgnXOEIHPwLg2E52a7gg/shared/yourself/public" alt="1" />
            <p class="review-text">"Thank you for such a great experience! Everything exceeded my expectations and I’m thrilled with the results."</p>
            <p class="review-author">- John Doe</p>
            <div className="box">
              <img src="logo3.png" alt="2" />
              <div className="star"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></div>
              <p class="review-date">Reviewed on: <span>December 12, 2024</span></p>
            </div>
          </div>
          <div className="card">
            <img src="https://whydonate.com/cdn-cgi/imagedelivery/_0vgnXOEIHPwLg2E52a7gg/shared/someoneElse/public" alt="1" />
            <p class="review-text">"Thank you for such a great experience! Everything exceeded my expectations and I’m thrilled with the results."</p>
            <p class="review-author">- John Doe</p>
            <div className="box">
              <img src="logo3.png" alt="2" />
              <div className="star"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></div>
              <p class="review-date">Reviewed on: <span>December 12, 2024</span></p>
            </div>
          </div>
          <div className="card">
            <img src="https://whydonate.com/cdn-cgi/imagedelivery/_0vgnXOEIHPwLg2E52a7gg/shared/charity/public" alt="1" />
            <p class="review-text">"Thank you for such a great experience! Everything exceeded my expectations and I’m thrilled with the results."</p>
            <p class="review-author">- John Doe</p>
            <div className="box">
              <img src="logo3.png" alt="2" />
              <div className="star"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf /></div>
              <p class="review-date">Reviewed on: <span>December 12, 2024</span></p>
            </div>
          </div>
        </div>
      </div> 
  );
}
export default Reviews;
