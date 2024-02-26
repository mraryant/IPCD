'use client'
import React from 'react'
import Image from "next/image";

const About = () => {
    return (
        <>
            {/* bg-[url('/assets/aboutbg.svg')] */}
            <div id="about-main" className=" relative flex justify-center py-20 min-h-[120vh] gap-10 w-[100vw] bg-[url('/assets/aboutbg.svg')]  overflow-hidden max-[850px]:flex-col max-[850px]:items-center " >

                <div className="  absolute left-0 top-0 bg-gradient-to-b from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[100px]  bottom-0 z-3"></div>
                <div className="  absolute left-0 bottom-0 bg-gradient-to-t from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-screen h-[100px]  bottom-0 z-3"></div>


                <div id="about-left" className=' flex justify-center items-center h-[90%] w-[40%] max-[850px]:w-[80%] max-[500px]:w-[90%]'>
                    <Image
                        src=" /assets/about-img.svg"
                        width={600}
                        height={600}
                        alt="Picture of the author"
                    />
                </div>

                <div id="about-right" className=' h-[100%] w-[60%] flex flex-col justify-center items-center    gap-[20px]  max-[850px]:w-[80%]'>
                    <div className='w-[100%] flex flex-col justify-center gap-[20px]'>
                        <div>
                            <h3 className=' text-[var(--prime-yellow)] text-2xl '>ABOUT US</h3>
                            <h1 className='text-5xl oxanium '>Do You Know <span className='text-[var(--prime-yellow)]' >?</span></h1>
                        </div>
                        <p className='text-xl leading-tight'>IPCD, a century-old institution, is a beacon of transformation in organizational dynamics, steadfastly partnering with organizations to elevate their people functions and champion better work and working lives.     </p>
                        <ul className='flex flex-col gap-[20px] w-[85%] max-[850px]:w-[100%] leading-tight'>
                            <li>
                                IPCD fosters collaborative growth and excellence, serving as a trusted partner with insights to catalyze positive change in human resources, learning, and organizational development.
                            </li>
                            <li>
                                Rooted in a shared vision, IPCD's partnerships go beyond transactions, envisioning a future where work brings fulfillment and productivity, co-creating impact within and beyond the workplace.
                            </li>
                            <li>
                                IPCD collaborates to understand organizational challenges, crafting tailored strategies aligning people functions with business objectives, guiding leaders through the complexities of the contemporary workplace.
                            </li>
                            <li>
                                Beyond consultation, IPCD implements transformative practices, providing tools and resources to professionalize people functions, ensuring organizations navigate the dynamic HR landscape with agility and foresight.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About