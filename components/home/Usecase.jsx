'use client'
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"

const Usecase = () => {
    const [tooltipVisible, setTooltipVisible] = useState(true);
    const [tooltipImage, setTooltipImage] = useState("/assets/about-img.svg");

    const handleMouseEnter = (image) => {
        setTooltipVisible(true);
        setTooltipImage(image);
    };

    const handleMouseLeave = () => {
        setTooltipVisible(true);
        setTooltipImage("/assets/about-img.svg");
    };


    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, ease: "easeOut" },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    return (
        <>
            <div id="Usecase-main" className='min-h-[100vh] w-[100vw] flex py-20 flex-col justify-center items-center  gap-[4vmax] px-3   md:px-20 '>
                <div id="usecase-heading" className="flex flex-col gap-5 max-w-md mx-auto items-center">
                    <h1 className="text-5xl text-[var(--prime-yellow)]  oxanium ">Use Case</h1>
                    <p className="text-center leading-tight   " >The IPCD Utility Token goes beyond a digital currency, serving as a versatile tool in transactions for candidates, corporates, and institutions, revolutionizing people management interactions and transactions.</p>
                </div>

                <div className="flex  min-h-[100vh] justify-between items-center max-[1000px]:flex-col-reverse max-[1000px]:gap-10 ">
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={staggerVariants}

                        id="usecase-left" className='w-[50%] flex flex-col gap-7 justify-center items-center relative max-[1000px]:w-[90%]'>
                        <motion.div variants={childVariants}
                            onMouseEnter={() =>
                                handleMouseEnter("/assets/usecase2.jpg") // Set the image path for the first use case
                            }
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl oxanium "><span className="text-[var(--prime-yellow)]">Utility Token</span> as a Digital Mode of <span className="text-[var(--prime-yellow)]">Payment</span> </h2>
                            <p className=" leading-tight ">The IPCD Utility Token, a digital currency at its core, provides a secure medium for transactions within the IPCD ecosystem. Using blockchain, it ensures transparent, risk-mitigated financial processes, streamlining accreditation, certification, and professional development.</p>
                        </motion.div>

                        <motion.div variants={childVariants}
                            onMouseEnter={() =>
                                handleMouseEnter("/assets/iconx512.png") // Set the image path for the first use case
                            }
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl oxanium ">Usage by <span className="text-[var(--prime-yellow)]">Candidates</span> </h2>
                            <p className=" leading-tight ">The IPCD Utility Token is a valuable asset for professionals, enabling payment for accreditation, certification, and educational resources. It empowers continuous learning and serves as a secure showcase for digital credentials, reinforcing trust in the professional realm.</p>
                        </motion.div>

                        <motion.div variants={childVariants}
                            onMouseEnter={() =>
                                handleMouseEnter("/assets/ipcd-white.png") // Set the image path for the first use case
                            }
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl oxanium ">Usage by <span className="text-[var(--prime-yellow)]">Institutions </span> </h2>
                            <p className=" leading-tight ">The IPCD Utility Token catalyzes innovation for institutions in learning and development. It streamlines accreditation transactions, enhances certification management, and integrates with educational platforms, fostering accessibility and effectiveness in courses.</p>
                        </motion.div>

                        <motion.div variants={childVariants}
                            onMouseEnter={() =>
                                handleMouseEnter("/assets/usecase1.jpg") // Set the image path for the first use case
                            }
                            onMouseLeave={handleMouseLeave}
                            className=" flex flex-col gap-2 border-b-2 border-white pb-5"
                        >
                            <h2 className="text-3xl oxanium ">Usage by <span className="text-[var(--prime-yellow)]">Corporates</span> </h2>
                            <p className=" leading-tight ">The IPCD Utility Token streamlines corporate processes, serving as a digital medium for HR transactions. It enables seamless payment, smart contract execution, and access to data-driven insights, enhancing efficiency and transparency.</p>
                        </motion.div>

                    </motion.div>

                    <div id="usecase-right" className=" overflow-hidden flex justify-center items-center  h-[100%] object-fill ">

                        <div
                            id="tooltip-right"
                            role="tooltip"
                            className={`  ${tooltipVisible ? 'visible' : 'invisible'} bg-cover flex justify-center items-center  overflow-hidden max-w-[100%] max-h-[100%]  px-3 py-2     text-white        `}
                        >

                            <Image
                                src={tooltipImage}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Usecase