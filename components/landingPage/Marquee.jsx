"use client";
import React from 'react'
import './Marquee.css'
function Marquee() {
  return (
    <div className='bg-blend-luminosity Marquee w-full overflow-hidden '>
        <div className=' nbm z-10  text-[10vw] led pt-4 pb-4 text-white whitespace-nowrap'>
            <div className='Mover w-auto pt-6 pb-6 border-t-4 border-b-4 font-medium'>
                We Are LocAI.Ly  We Are LocAI.Ly We Are LocAI.Ly
            </div>
        </div>
    </div>

  )
}

export default Marquee