"use client";

import React from 'react';
import Image from "next/image";
import Map from '@/components/Services/map';
import chatbtn from '@/assets/botbtn.svg';
import OverviewBtn from '@/assets/OverviewBtn.svg';

export default function MapComponent({ leftPanelVisible, rightPanelVisible, handleLeftPanelClick, handleRightPanelClick, mapClick, winCheck }) {
  return (
    <div className={`map`}>
      <Image
        src={OverviewBtn}
        alt="overview"
        onClick={handleLeftPanelClick}
        className={`ovShift ${leftPanelVisible ? 'toggle' : ''}`}
      />
      <Image
        src={chatbtn}
        alt="chat"
        onClick={handleRightPanelClick}
        className={`cbShift ${rightPanelVisible ? 'toggle' : ''}`}
      />
      <div className="map" onClick={mapClick}>
        <Map />
      </div>
    </div>
  );
}
