"use client"
import React, { useState } from 'react';
import './LandingPage.css';

function GuideButton() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <a href="./Map_Services">
            <button 
                className="animated-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text text-6xl uppercase">{isHovered ? 'Guide Me' : "Guide's You"}</span>
                <span className="circle"></span>
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
            </button>
            </a>
        </div>
    );
}

export default GuideButton;
