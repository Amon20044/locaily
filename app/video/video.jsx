
import Image from "next/image";
import gif from './hero-.gif';
import React from 'react'
import './video.css'
function Page() {
  return (
    <div className="container ">
    <Image src={gif} alt="my gif"/>
    </div>
  )
}

export default Page