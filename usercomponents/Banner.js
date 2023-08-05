import React, { useState } from 'react';
import './Banner.css'; // Import the CSS file for styling

const Banner = () => {
 
  const images = [
 'b3.webp',
 'b4.webp',
 'b5.webp',
 'phonebanner.jpg',
 'trimmerbanner.jpg'
   
  ];

  // Step 2: Create state variables to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Step 3: Create functions to handle slide navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="banner">
      {/* Step 4: Create the image slider */}
      <div className="slider">
        <div
          className="slider-inner"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.5s ease-out',
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Step 5: Add navigation buttons */}
      <button className="nav-button prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="nav-button next" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Banner;
