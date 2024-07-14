"use client";
import React, { useState, useRef, useEffect } from 'react';

export default function LeftPanel({ winCheck, leftPanelEnlarge, setLeftPanelEnlarge, leftPanelVisible, setLeftPanelVisible }) {
  const leftPanelRef = useRef(null);

  const enlargeLeftPanel = () => {
    setLeftPanelEnlarge(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (leftPanelRef.current && !leftPanelRef.current.contains(event.target)) {
        setLeftPanelEnlarge(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`leftArea ${winCheck && leftPanelEnlarge ? 'enlarge' : ''}`} ref={leftPanelRef}>
      <div className={`leftPanel ${winCheck ? (leftPanelVisible ? '' : 'toggle') + (leftPanelEnlarge ? ' enlarge' : '') : ''}`} onClick={enlargeLeftPanel}>
        <div className={`Overview ${winCheck && leftPanelEnlarge ? 'enlarge' : ''} `}>
          <h3>Overview</h3>
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
