'use client'
import React from 'react'

const WhayChoose = () => {
    return (
        <>
            <div id="whayC-main" className='min-h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-[4vmax] px-10   md:px-20'>

                <h1 className='  text-5xl font-["Oxanium"]'>WHY <span className='text-[var(--prime-yellow)]'> CHOOSE </span> IPCD</h1>

                <div id="whayC-container" className='min-h-[80vh] flex gap-[2vmax]'>
                    <div id="whayC-cont-left" className='w-[33%] flex flex-col justify-between items-center gap-[10vmax] '>
                        <div className='flex flex-col gap-3 w-[90%]  '>
                            <h2 className=" font-['Oxanium'] text-2xl"> <span className='text-[var(--prime-yellow)]'>Elevating</span> Excellence in People Management</h2>
                            <p className=' leading-tight   text-wrap  '>In a critical landscape where effective people management defines success, IPCD is the preferred partner for over 320 global organizations, embodying a commitment to excellence in human resources, learning and development, and organizational growth.</p>
                        </div>
                        <div className='flex flex-col gap-3 w-[90%]'>
                            <h2 className=" font-['Oxanium'] text-2xl"> <span className='text-[var(--prime-yellow)]'>IPCD</span> as the  <span className='text-[var(--prime-yellow)]'>Partner</span> Partner of Choice for Over 320 Organizations</h2>
                            <p className=' leading-tight   text-wrap  '>IPCD, chosen by 320+ organizations, signifies trust, offering tailored interventions and collaborative spirit, fostering shared ownership for excellence in people management across diverse sectors and geographies.</p>
                        </div>

                    </div>

                    <div id="whayC-cont-mid" className='w-[40%] overflow-hidden flex'>
                        <video class="    filter grayscale  scale-[1.7] " autoPlay muted loop src={require('../../public/assets/whayCvid.mp4')} />

                    </div>

                    <div id="whayC-cont-right" className='w-[33%] flex flex-col  justify-between items-center gap-[10vmax] '>
                        <div className='flex flex-col gap-3 w-[90%]'>
                            <h2 className=" font-['Oxanium'] text-2xl"> <span className='text-[var(--prime-yellow)]'>Building</span>  a Global <span className='text-[var(--prime-yellow)]'>Network</span>  of Over 160,000 Members</h2>
                            <p className=' leading-tight   text-wrap  '>IPCD's global network of 160,000 members creates a dynamic ecosystem for excellence in people management, fostering collaboration and knowledge exchange across diverse boundaries.</p>
                        </div>
                        <div className='flex flex-col gap-3 w-[90%]'>
                            <h2 className=" font-['Oxanium'] text-2xl"> <span className='text-[var(--prime-yellow)]'>Setting</span> the <span className='text-[var(--prime-yellow)]'>Gold Standard</span> for HR, L&D, and OD Professionals</h2>
                            <p className=' leading-tight   text-wrap  '>IPCD stands as a beacon for HR, learning, and organizational development, setting global standards through rigorous accreditation, comprehensive certification, and ethical conduct, serving as a benchmark for elevating people management practices.</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default WhayChoose