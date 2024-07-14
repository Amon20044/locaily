"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function RightPanel({ winCheck, rightPanelEnlarge, setRightPanelEnlarge, rightPanelVisible, setRightPanelVisible }) {
  const rightPanelRef = useRef(null);

  const enlargeRightPanel = () => {
    setRightPanelEnlarge(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rightPanelRef.current && !rightPanelRef.current.contains(event.target)) {
        setRightPanelEnlarge(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`rightArea ${winCheck && rightPanelEnlarge ? 'enlarge' : ''}`} ref={rightPanelRef}>
      <div className={`rightPanel ${winCheck && (rightPanelVisible ? '' : 'toggle') + (rightPanelEnlarge ? 'enlarge' : '')}`} onClick={enlargeRightPanel}>
        <div className={`chatbot ${winCheck && rightPanelEnlarge ? 'enlarge' : ''}`}>
          <h3>Local-Bot</h3>
          <div className={`overviewData`}>
            <div className="left">
              <div className="left"></div>
              <div className="left"></div>
              <div className="left"></div>
            </div>
            <div className="right">
              <div className="right"></div>
              <div className="right"></div>
              <div className="right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
