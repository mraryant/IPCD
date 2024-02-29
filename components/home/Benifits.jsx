'use client'
import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion';

const Benifits = () => {


    return (
        <>
            <div id="benifits-main" className='    relative  bg-[#060606] flex md:px-20 md:py-10 px-5  min-h-[200vh] w-[100vw]     '>

                <div id="benifit-container" className=' w-[100%] relative ' >
                    <motion.div
                        initial={{ scale: 1.9 }}
                        whileInView={{ scale: 1, transition: { delay: 1, duration: 1 }, }}
                        id="benifits-mid" className='sticky  h-[100vh] top-0 left-[33%] overflow-hidden  flex  w-[40%] z-[0] max-[836px]:w-[100%] '>
                        <video className=" grayscale  scale-[2] max-[834px]:scale-[1.1] " autoPlay muted loop src={require('../../public/assets/whayCvid.mp4')} />
                    </motion.div>

                    <div>
                        <div id="benifits-left" className='h-[100%] w-[100%]  '>
                            <div className='flex flex-col  gap-[40vh] justify-between my-[40vh] max-[836px]:gap-[20vh] '>

                                <div id='side-left' className='flex w-[33%] flex-col gap-2 z-[1] max-[836px]:w-[90%] ' >
                                    <div className='flex flex-col'>
                                        <h1 className=' text-3xl font-bold oxanium ' > BENEFIT BY <span className='text-[var(--prime-yellow)]' >IPCD</span>  </h1>
                                        <h2 className=' text-2xl oxanium'> <span className='text-[var(--prime-yellow)]' >Corporate</span>   / Institute </h2>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <p> {"➣"} Enhanced Scalability </p>
                                        <p> {"➣"} Higher flexibility  </p>
                                        <p> {"➣"} Customized Solution  </p>
                                        <p> {"➣"} Yearly Renewed  </p>
                                        <p> {"➣"} Advertising Platform  </p>
                                    </div>
                                </div>

                                <div id='side-right' className='flex  flex-col gap-5 z-[1] max-[836px]:w-[90%] ' >

                                    <div className='flex flex-col items-end '>
                                        <h1 className=' text-3xl font-bold oxanium ' > BENEFIT BY <span className='text-[var(--prime-yellow)]' >IPCD</span>  </h1>
                                        <h2 className=' text-2xl oxanium'>   <span className='text-[var(--prime-yellow)]' >User</span> / Individual </h2>
                                    </div>
                                    <div className='flex flex-col gap-1 items-end  '>
                                        <p> {"➣"} Cost- efficiency  </p>
                                        <p> {"➣"} Low Risk   </p>
                                        <p> {"➣"} Customized Solution  </p>
                                        <p> {"➣"} User Friendly </p>
                                        <p> {"➣"} Flexible Plan </p>
                                    </div>
                                </div>

                                <div id='side-left' className='flex w-[33%]  flex-col gap-5 z-[1] max-[836px]:w-[90%] ' >
                                    <div className='flex flex-col'>
                                        <h1 className=' text-3xl font-bold oxanium ' > <span className='text-[var(--prime-yellow)]'>IPCD</span>  Platform enables our user to:  </h1>

                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <p>{"➣"}  SAVE EFFORT - By accessing integrated network .  </p>
                                        <p> {"➣"}  SAVE MONEY – By choosing customized requirement  </p>
                                        <p>{"➣"} SAVE TIME - Protect & easily transfer Transaction and important document through blockchain technology. </p>
                                        <p>{"➣"}   GROW QUICK – Data based, AI Recommended solution  </p>
                                    </div>
                                </div>

                                <div id='side-right' className='flex  flex-col gap-5 z-[1] max-[836px]:w-[90%] ' >

                                    <div className='flex flex-col items-end '>
                                        <h1 className=' text-3xl font-bold oxanium ' > <span className='text-[var(--prime-yellow)]'>IPCD</span> Key Partner:  </h1>

                                    </div>
                                    <div className='flex flex-col gap-1 items-end  '>
                                        <p>{"➣"} HR Professional</p>
                                        <p>{"➣"} Recruitment Expert</p>
                                        <p>{"➣"} Professional Expertise</p>
                                        <p>{"➣"} Universities</p>
                                        <p>{"➣"} Education Institution</p>
                                        <p>{"➣"} Government Bodies</p>
                                        <p>{"➣"} Companies</p>
                                        <p>{"➣"} Regulatory Bodies</p>
                                        <p>{"➣"} Financial Institution</p>
                                    </div>
                                </div>

                                <div id='side-left' className='flex w-[33%]  flex-col gap-5 z-[1] max-[836px]:w-[90%] ' >
                                    <div className='flex flex-col'>
                                        <h1 className=' text-3xl font-bold oxanium ' > <span className='text-[var(--prime-yellow)]'>IPCD</span> REVENUE STREAM:   </h1>

                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <p className=' leading-tight'> {"➣"} Subscription from User/Companies/Institution.</p>
                                        <p className=' leading-tight'> {"➣"} Premium features through subscription.</p>
                                        <p className=' leading-tight'> {"➣"} Licensing fees for educational institutions & Companies.</p>
                                        <p className=' leading-tight'> {"➣"} In-app advertisements from relevant educational service providers and hiring companies.</p>
                                        <p className=' leading-tight'> {"➣"} Partnership with universities for featured listing and targeted advertising.</p>
                                        <p className=' leading-tight'> {"➣"} Data licensing.</p>
                                        <p className=' leading-tight'> {"➣"} Commission for facilitating transactions between users and companies.</p>
                                        <p className=' leading-tight'> {"➣"} In-app advertisements from relevant service providers.</p>
                                        <p className=' leading-tight'> {"➣"} Partnership with other platforms or services.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='side-right' className='flex  flex-col gap-5 mt-20 ' >

                        <div className='flex flex-col   z-[1]     '>
                            <h1 className=' text-3xl font-bold oxanium ' > <span className='text-[var(--prime-yellow)]'>IPCD</span> CSR:   </h1>

                        </div>
                        <div className='flex flex-col gap-1    z-[1] '>
                            <p className=' leading-tight' > {"➣"} Collaborating with local educational institutions and industry partners to create apprenticeship opportunities for hands-on skill development.</p>

                            <p className=' leading-tight' > {"➣"} Offering scholarships or financial assistance to individuals in rural areas to access skill development courses and training programs.</p>

                            <p className=' leading-tight' > {"➣"} Providing access to online learning platforms and resources for skill development in remote areas with limited educational infrastructure.</p>

                            <p className=' leading-tight' > {"➣"} Partnering with government agencies and non-profit organizations to implement sustainable skill development projects in rural communities.</p>

                            <p className=' leading-tight' > {"➣"} Conducting regular assessments and evaluations to measure the impact of CSR activities on skill development and adjust strategies accordingly for continuous improvement.</p>

                        </div>
                    </div>

                </div>

                {/* <div id="benifits-left" className='h-[100%] w-[33%]  '>
                    <div className='flex flex-col  gap-[100vh] justify-between my-[40vh]'>

                        <div className='flex flex-col gap-2 ' >

                            <div className='flex flex-col'>
                                <h1 className=' text-3xl font-bold oxanium ' > BENEFIT BY IPCD </h1>
                                <h2 className=' text-2xl oxanium'> Corporate / Institute </h2>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p>Enhanced Scalability </p>
                                <p>Higher flexibility  </p>
                                <p>Customized Solution  </p>
                                <p>Yearly Renewed  </p>
                                <p>Advertising Platform  </p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 ' >
                            <div className='flex flex-col'>
                                <h1 className=' text-3xl font-bold oxanium ' > IPCD Platform enables our user to:  </h1>
                                 
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p> SAVE EFFORT - By accessing integrated network .  </p>
                                <p>  SAVE MONEY – By choosing customized requirement  </p>
                                <p>SAVE TIME - Protect & easily transfer Transaction and important document through blockchain technology. </p>
                                <p>  GROW QUICK – Data based, AI Recommended solution  </p>

                            </div>
                        </div>
                        <div className='flex flex-col gap-5 ' >
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore odit error nisi sequi voluptatem, voluptate facilis. Unde rerum repellendus iusto illo rem cupiditate quo perferendis aut. Commodi iusto voluptatem unde eius, debitis velit nemo, aliquam fuga tempora voluptate vitae aut distinctio facilis id eum delectus labore atque quas. Et, eius.</p>
                        </div>
                    </div>
                </div>

                <div id="benifits-mid"
                    className='h-[100vh] overflow-hidden  flex sticky left-0 top-0 w-[33%]  '>
                    <video className=" grayscale  scale-[2] max-[834px]:scale-[1.2] " autoPlay muted loop src={require('../../public/assets/whayCvid.mp4')} />

                </div>

                <div id="benifits-right" className='h-[100%] w-[33%]   '>

                    <div className='flex flex-col  gap-[100vh] justify-between my-[100vh]'>
                        <div className='flex flex-col gap-5 items-end ' >

                            <div className='flex flex-col items-end '>
                                <h1 className=' text-3xl font-bold oxanium ' > BENEFIT BY IPCD </h1>
                                <h2 className=' text-2xl oxanium'> User / Individual </h2>
                            </div>
                            <div className='flex flex-col gap-1 items-end  '>
                                <p>Cost- efficiency  </p>
                                <p>Low Risk   </p>
                                <p>Customized Solution  </p>
                                <p>User Friendly  </p>
                                <p>Flexible Plan </p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 ' >
                            <div className='flex flex-col text-right '>
                                <h1 className=' text-3xl font-bold oxanium ' > IPCD Key Partner:  </h1>

                            </div>
                            <div className='flex flex-col gap-1 text-right'>
                                <p> HR Professional  </p>
                                <p> Recruitment Expert  </p>
                                <p> Professional Expertise </p>
                                <p> Universities  </p>
                                <p> Education Institution   </p>
                                <p> Government Bodies  </p>
                                <p> Companies  </p>
                                <p> Regulatory Bodies  </p>
                                <p> Financial Institution  </p>

                            </div>
                        </div>
                        <div className='flex flex-col gap-5 ' >
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore odit error nisi sequi voluptatem, voluptate facilis. Unde rerum repellendus iusto illo rem cupiditate quo perferendis aut. Commodi iusto voluptatem unde eius, debitis velit nemo, aliquam fuga tempora voluptate vitae aut distinctio facilis id eum delectus labore atque quas. Et, eius.</p>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default Benifits