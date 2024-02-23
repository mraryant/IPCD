'use client'
import React, { useState } from "react";
import Image from "next/image";
const Usecase = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const handleMouseEnter = () => {
        setTooltipVisible(true);
    };

    const handleMouseLeave = () => {
        setTooltipVisible(false);
    };
    return (
        <>
            <div id="Usecase-main" className='min-h-[100vh] w-[100vw] flex  flex-col justify-center items-center  gap-[4vmax] px-10   md:px-20'>
                <div id="usecase-heading" className="flex flex-col gap-5 max-w-md mx-auto items-center">
                    <h1 className="text-5xl text-[var(--prime-yellow)]  font-['Oxanium'] ">Use Case</h1>
                    <p className="text-center leading-tight   " >The IPCD Utility Token goes beyond a digital currency, serving as a versatile tool in transactions for candidates, corporates, and institutions, revolutionizing people management interactions and transactions.</p>
                </div>

                <div className="flex ">
                    <div id="usecase-left" className='w-[50%] flex flex-col gap-7 justify-center items-center relative'>
                        <div onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl font-['Oxanium'] ">Utility Token as a Digital Mode of Payment</h2>
                            <p className=" leading-tight ">The IPCD Utility Token, a digital currency at its core, provides a secure medium for transactions within the IPCD ecosystem. Using blockchain, it ensures transparent, risk-mitigated financial processes, streamlining accreditation, certification, and professional development.</p>
                        </div>
                        <div onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl font-['Oxanium'] ">Usage by Candidates</h2>
                            <p className=" leading-tight ">The IPCD Utility Token is a valuable asset for professionals, enabling payment for accreditation, certification, and educational resources. It empowers continuous learning and serves as a secure showcase for digital credentials, reinforcing trust in the professional realm.</p>
                        </div>
                        <div onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl font-['Oxanium'] ">Usage by Institutions</h2>
                            <p className=" leading-tight ">The IPCD Utility Token catalyzes innovation for institutions in learning and development. It streamlines accreditation transactions, enhances certification management, and integrates with educational platforms, fostering accessibility and effectiveness in courses.</p>
                        </div>
                        <div onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl font-['Oxanium'] ">Usage by Corporates</h2>
                            <p className=" leading-tight ">The IPCD Utility Token streamlines corporate processes, serving as a digital medium for HR transactions. It enables seamless payment, smart contract execution, and access to data-driven insights, enhancing efficiency and transparency.</p>
                        </div>


                    </div>

                    <div id="usecase-right" className="  flex justify-center items-center ">

                        <Image
                            src=" /assets/about-img.svg"
                            width={600}
                            height={600}
                            alt="Picture of the author"
                        />

                    </div>
                </div>

            </div>
        </>
    )
}

export default Usecase