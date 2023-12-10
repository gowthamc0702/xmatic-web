import React, { useState, useEffect } from 'react';
import './certificateSlider.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios'; // Import axios
// Update the import to use your updated fetchCertifications function
import { fetchCertifications } from '../../api';

interface Slide {
    certificate_img_link: string;
    certificate_name: string;
    certificate_briefinfo: string;
    awardedDate: string;
}

const ReactCertificateSlider: React.FC = () => {
    const [slides, setSlides] = useState<Slide[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const certifications = await fetchCertifications();
          setSlides(certifications)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const slideLeft = () => {
      const slider = document.getElementById('slider');
      if (slider) {
        slider.scrollLeft -= 500; // Scroll 500 pixels to the left
      }
    };
  
    const slideRight = () => {
      const slider = document.getElementById('slider');
      if (slider) {
        slider.scrollLeft += 500; // Scroll 500 pixels to the right
      }
    };

  
    return (
      <div id="main-slider-container">
        <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
        <div id="slider">
          {slides.map((slide, index) => (
            <div className="slider-certificate" key={index}>
              <div className="slider-certificate-image" style={{backgroundImage: `url(${slide.certificate_img_link})`}}></div>
              <p className="slider-certificate-title">{slide.certificate_name}</p>
              <p className="slider-certificate-description">{slide.certificate_briefinfo}</p>
              <p className="slider-certificate-awardedDate">Awarded Date: {slide.awardedDate}</p>
            </div>
          ))}
        </div>
        <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
      </div>
    );
  };
  export default ReactCertificateSlider;