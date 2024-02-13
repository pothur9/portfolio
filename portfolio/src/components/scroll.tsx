import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Import the specific arrow-up icon
import './scroll.css'; // Import CSS file for styling

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to handle scroll event
  const handleScroll = () => {
    // If user has scrolled down more than 100px, show the button, otherwise hide it
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener when component mounts
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} /> {/* Use the FontAwesomeIcon component with the arrow-up icon */}
    </div>
  );
};

export default Scroll;
