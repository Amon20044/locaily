"use client";
import React from 'react';

const About = () => {
  return (
    <div className="flex content-center font- items-start min-h-screen m-4 rounded-3xl bg-lime-100 text-black p-12 max-md:px-4 overflow-hidden max-md:m-[.4em]">
      <div className="container mx-0">
        <h1 className="text-6xl max-md:text-4xl w-full m-0 p-0 font-bold leading-tight pb-8">
          LocAI.ly: Your AI-powered buddy for discovering hidden gems, unique experiences, and the coolest spots in town.
        </h1>
        <div className='w-screen h-[2px] bg-black -translate-x-16 max-md:-translate-x-6'></div>
        
        <div className="mt-10">
          <h2 className="font-semibold text-3xl">What LocAI.ly Does:</h2>
          <p className="mt-4 text-xl font-bold ">
            Imagine having a local friend who knows all the secret spots, best eats, and must-visit places. That’s LocAI.ly for you! From finding a cozy book nook to the perfect sunset spot, we’ve got you covered.
          </p>
        </div>
    <div className='md:flex max-md:flex-col flex-row'>
        <div className="m-10 ml-0 md:max-xl:sr-only">
          <h2 className=" font-semibold text-3xl">Why We're Different:</h2>
          <ul className="list-disc ml-5 mt-2 text-lg font-semibold ">
            <li><strong>Smart Recommendations:</strong> Our AI understands your unique tastes to suggest spots you'll love.</li>
            <li><strong>Real-Time Alerts:</strong> Looking for something special? We alert local businesses to help you find it.</li>
            <li><strong>Community Wisdom:</strong> Can't find what you need? Our local experts have the answers.</li>
            <li><strong>Hyper-Local Focus:</strong> We provide up-to-date info you won't find on larger platforms.</li>
          </ul>
        </div>


        <div className="mt-10 ml-0  align-super" >
          <h2 className="text-xl font-semibold">Connect with Us:</h2>
          <ul className="flex space-x-4 mt-2 flex-wrap max">
            <li><a href="#" className="underline">Instagram</a></li>
            <li><a href="#" className="underline">Behance</a></li>
            <li><a href="#" className="underline">Facebook</a></li>
            <li><a href="#" className="underline">LinkedIn</a></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
