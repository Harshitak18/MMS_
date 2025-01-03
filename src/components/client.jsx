import React from "react";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

function Client() {
  
    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll('.counter');
        
        // Function to handle the counter animation
        const animateCounters = (counter) => {
          const target = +counter.getAttribute('data-target'); // Get the target value
          let count = 0;
          const speed = 200; // Speed of the count (milliseconds)
          const plusIcon = counter.nextElementSibling; // Get the plus symbol next to the counter
      
          const updateCounter = () => {
            const increment = target / speed;
            if (count < target) {
              count += increment;
              counter.textContent = Math.floor(count); // Update the number
              setTimeout(updateCounter, 1);
            } else {
              counter.textContent = target; // Ensure it reaches the exact target
              plusIcon.style.display = 'inline'; // Show the "+" symbol after counting is done
            }
          };
      
          updateCounter(); // Start the counting animation
        };
      
        // Intersection Observer to detect when the element is in view
        const options = {
          root: null, // Viewport as the root
          rootMargin: '0px',
          threshold: 0.5, // Start animation when at least 50% of the element is in view
        };
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Start the counter animation if the element is in view
              animateCounters(entry.target);
              // Unobserve the element after it starts animating (so it only happens once)
              observer.unobserve(entry.target);
            }
          });
        }, options);
      
        // Observe each counter element
        counters.forEach(counter => {
          observer.observe(counter);
        });
      });
      
      
  
  

  return (
    <div>
      <div className="Our-Client">

        <div className="client-left">
            <h1>Join Modern Media Service's Community</h1>
            <button>Help Us Grow</button>
        </div>

        <div className="client-right">
            <div className="card">
            <h1 class="counter-wrapper">
             <span class="counter" data-target="1000000">0</span><span class="plus-icon">+</span>
            </h1>
                <p>Website visitors per month</p>
            </div>
            <div className="card">
            <h1 class="counter-wrapper">
             <span class="counter" data-target="1022513">0</span><span class="plus-icon">+</span>
           </h1>
                <p>Donors</p>
            </div>
            <div className="card">
            <h1 class="counter-wrapper">
             <span class="counter" data-target="65432">0</span><span class="plus-icon">+</span>
            </h1>
                <p>Fundraiser started</p>
            </div>
            <div className="card">
                <div className="stars">
                <h1 class="counter-wrapper">
                 <span class="counter" data-target="4.8">0</span>
                </h1>
                   <div className="star"><IoStar /><IoStar /><IoStar /><IoStar /><IoStarHalf />
                </div>
                </div>
                <p>Top rated on reciews sites</p>
            </div>
        </div>

      </div>
    </div>
  );
}
export default Client;
