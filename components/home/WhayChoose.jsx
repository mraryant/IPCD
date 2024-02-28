'use client'
import React from 'react'
import { motion } from "framer-motion"
const WhayChoose = () => {
    const syncVar = {
        hidden: { opacity: 0, x: -30, y: -30 },
        visible: { opacity: 1, x: 0, y: 0, transition: { ease: "easeInOut", delay: 0.3, duration: 1 } },

    };
    return (
        <>
            <div id="whayC-main" className=' overflow-hidden min-h-[100vh] bg-[#060606] w-[100vw] flex flex-col justify-center items-center gap-[6vmax]    md:px-[5vmax] md:py-20 max-[834px]:py-10'>

                <h1 className='  text-5xl oxanium max-[576px]:text-[33px] mx-2 '>WHY <span className='text-[var(--prime-yellow)]'> CHOOSE </span> IPCD</h1>

                <div id="whayC-container" className=' min-h-[80vh] flex gap-[2vmax] px-10 max-[834px]:flex-col'>
                    <div id="whayC-cont-left" className='w-[33%] flex flex-col justify-between items-center gap-[10vmax] max-[834px]:flex-row  max-[834px]:w-[100%] max-[834px]:gap-[7vw] max-[834px]:items-start max-[576px]:flex-col max-[576px]:items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, transition: { ease: "easeInOut", delay: 0.4, duration: 1 } }}

                            className='flex flex-col gap-3 w-[90%] max-[576px]:w-[100%]  '>
                            <h2 className=" oxanium text-2xl leading-tight"> <span className=' text-[var(--prime-yellow)]'>Elevating</span> Excellence in People Management</h2>
                            <p className=' leading-tight   text-wrap  '>In a critical landscape where effective people management defines success, partnering with IPCD will guide you through a five-stage model (Define- Diagnose-Build-Recognize-Sustain) for successful transformation, ensuring a dedication to excellence in human resources, learning and development, and organizational growth.  </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -30, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, transition: { ease: "easeInOut", delay: 0.4, duration: 1 } }}


                            className='flex flex-col gap-3 w-[90%] max-[576px]:w-[100%]'>
                            <h2 className=" oxanium text-2xl leading-tight"> <span className='text-[var(--prime-yellow)]'>Comprehensive</span>  Corporate & University   <span className='text-[var(--prime-yellow)]'>Rating System</span>  </h2>
                            <p className=' leading-tight   text-wrap  '>IPCD has devised a comprehensive corporate assessment system designed to evaluate all the components of a company that significantly influence your career success and also incorporates a university rating system, assisting students and working professionals and selecting the best universities that align with their profiles or interests. </p>
                        </motion.div>

                    </div>

                    <motion.div id="whayC-cont-mid"
                        initial={{ scale: 1.9 }}
                        whileInView={{ scale: 1, transition: { delay: 0.4, duration: 1 }, }}
                         className='w-[30%] overflow-hidden flex max-[834px]:w-[100%] '>
                        <video className="    filter grayscale  scale-[2.2] max-[834px]:scale-[1.2] " autoPlay muted loop src={require('../../public/assets/whayCvid.mp4')} />

                    </motion.div>

                    <div id="whayC-cont-right" className='w-[33%] flex flex-col  justify-between items-center gap-[10vmax] max-[834px]:flex-row  max-[834px]:w-[100%] max-[834px]:gap-[7vw]  max-[834px]:items-start max-[576px]:flex-col max-[576px]:items-center '>
                        <motion.div
                            initial={{ opacity: 0, x: 30, y: -30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, transition: { ease: "easeInOut", delay: 0.4, duration: 1 } }}

                            className='flex flex-col gap-3 w-[90%] max-[576px]:w-[100%]'>
                            <h2 className=" oxanium text-2xl leading-tight"> <span className='text-[var(--prime-yellow)]'>Comprehensive</span>  Corporate & University   <span className='text-[var(--prime-yellow)]'>Rating System</span>  </h2>
                            <p className=' leading-tight   text-wrap  '>IPCD has devised a comprehensive corporate assessment system designed to evaluate all the components of a company that significantly influence your career success and also incorporates a university rating system, assisting students and working professionals and selecting the best universities that align with their profiles or interests. </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30, y: 30 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, transition: { ease: "easeInOut", delay: 0.4, duration: 1 } }}

                            className='flex flex-col gap-3 w-[90%]  max-[576px]:w-[100%]'>
                            <h2 className=" oxanium text-2xl leading-tight"> <span className='text-[var(--prime-yellow)]'>Setting</span> the <span className='text-[var(--prime-yellow)]'>Gold Standard</span> for HR, L&D, and OD Professionals</h2>
                            <p className=' leading-tight   text-wrap  '>IPCD stands as a beacon for HR, learning, and organizational development, setting global standards through rigorous accreditation, comprehensive certification, and ethical conduct, serving as a benchmark for elevating people management practices.</p>
                        </motion.div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default WhayChoose