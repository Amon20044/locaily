"use client";

import React, { useState, useEffect } from 'react';
import LeftPanel from '@/components/locailyMap/LeftPanel';
import RightPanel from '@/components/locailyMap/RightPanel';
import MapComponent from '@/components/locailyMap/MapComponent';
import '../globals.css';

export default function LocAILy() {
  const [leftPanelEnlarge, setLeftPanelEnlarge] = useState(false);
  const [rightPanelEnlarge, setRightPanelEnlarge] = useState(false);
  const [leftPanelVisible, setLeftPanelVisible] = useState(true);
  const [rightPanelVisible, setRightPanelVisible] = useState(true);
  const [winCheck, setWinCheck] = useState(false);

  useEffect(() => {
    const updateWinCheck = () => {
      setWinCheck(window.innerWidth >= 724);
      console.log("Window width:", window.innerWidth, "winCheck:", window.innerWidth >= 724);
    };

    // Initial check
    updateWinCheck();

    // Update on resize
    window.addEventListener('resize', updateWinCheck);
    return () => {
      window.removeEventListener('resize', updateWinCheck);
    };
  }, []);

  const handleLeftPanelClick = () => {
    setLeftPanelVisible(true);
  };

  const handleRightPanelClick = () => {
    setRightPanelVisible(true);
  };

  const mapClick = () => {
    setLeftPanelVisible(false);
    setRightPanelVisible(false);
    setLeftPanelEnlarge(false);
    setRightPanelEnlarge(false);
  };

  return (
    <div className="body">
      <div className={`${winCheck ? 'blur' : ''} ${rightPanelEnlarge || leftPanelEnlarge ? '' :'destroy'}`}></div>
      <LeftPanel
        winCheck={winCheck}
        leftPanelEnlarge={leftPanelEnlarge}
        setLeftPanelEnlarge={setLeftPanelEnlarge}
        leftPanelVisible={leftPanelVisible}
        setLeftPanelVisible={setLeftPanelVisible}
      />
      <MapComponent
        leftPanelVisible={leftPanelVisible}
        rightPanelVisible={rightPanelVisible}
        handleLeftPanelClick={handleLeftPanelClick}
        handleRightPanelClick={handleRightPanelClick}
        mapClick={mapClick}
        winCheck={winCheck}
      />
      <RightPanel
        winCheck={winCheck}
        rightPanelEnlarge={rightPanelEnlarge}
        setRightPanelEnlarge={setRightPanelEnlarge}
        rightPanelVisible={rightPanelVisible}
        setRightPanelVisible={setRightPanelVisible}
      />
    </div>
  );
}
