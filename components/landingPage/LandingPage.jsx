import React from 'react';
import Page from '@/app/video/video';
import Spline from '@splinetool/react-spline';
import GuideButton from './guideButton';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className='w-screen h-[auto] pt-4'>
            <div className='w-screen flex flex-row items-center min-h-[90vh] h-auto content-between z-0 max-md:flex-col max-md:content-center'>
            <div className='ff textstructure mt-18 ml-12 px-16 max-md:mt-32 max-md:ml-0 mt-16 pt-12 mr-[0] '>
            {['LocAI.Ly', 'Guides You', 'Locally'].map((item, index) => (
                <div className='masker quity' key={index}>
                    <div className='flex items-center content-center'>
                        <h1 className={` text-9xl mb-3 -ml-4 -mr-4 max-md:text-7xl max-md:-ml-4 leading-[12vh] tracking-wide font-black ${(index === 0 || index === 2) ? 'uppercase mix-blend-exclusion' : ''} ${index === 0 ? 'uppercase text-2xl scale-102 tracking-tighter' : ''}`}>
                            {index === 1 ? 
                            <div className='-translate-y-3'>
                                <GuideButton/>                  
                            </div>: index === 0 || index === 2 ? item : null}
                        </h1>
                    </div>
                </div>
            ))}
            </div>
            <div className=' w-[40vw] h-[100vh] ml-40 -z-10 max-md:flex-col max-md:-ml-4 max-md:-mt-96 max-md:w-[100vw] max-lg:ml-0'>
                <Spline scene="https://prod.spline.design/4f7qqqkli6Y052ce/scene.splinecode" />
            </div>
            </div>
            <div className='text-sm py-5 px-16 border-t-[1px] border-b-[1px] bg-zinc-800 -mt-16 font-semibold flex justify-between items-center max-md:m-0 max-md:p-2 max-md:text-[14px]'>
                {["First Indian Geolocation StartUp for GenAI Maps", "LocAI.Ly guide"].map((item, index) => (
                    <p className='text-md' key={index}>{item}</p>
                ))}
                <div className='guide'>
                    <div className='flex items-center justify-between m-4 ff px-4 py-2 border-[2px] rounded-full border-white border-x-stone-400 mix-blend-exclusion max-md:mr-0'>
                        <div className='gg-file-document ml-6 mr-3 scale-[90%]  max-md:scale-[100%] max-md:p-2 max-md:ml-2'></div>
                        <p className='mr-6 max-md:mr-2 quicksand'>Read Guide</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
